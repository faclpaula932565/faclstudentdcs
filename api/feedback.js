// api/feedback.js
// Serverless Function على Vercel — نسخة آمنة
// يستقبل رسالة + صور + reCAPTCHA v2 ثم يرسلها إلى Telegram

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb",
    },
  },
};
import {
  appendFeedback,
  getCairoNow,
  formatDateCairo,
  formatTimeCairo,
} from "./sheets.js";
import {
  redis,
  redisConfigured,
  rateLimit,
  rateCount,
  newSid,
  newCode,
  hashCode,
  shortHash,
  otpGet,
  otpSet,
  otpDelete,
  otpVerify,
  sendOtpEmail,
  maskEmail,
  OTP_TTL_SEC,
  OTP_MAX_SENDS,
  SID_RE,
} from "./_otp.js";
// ──────────────────────────────────────────────────────────────
// ثوابت
// ──────────────────────────────────────────────────────────────
const MAX_TEXT_LEN = 1000;
const MAX_NAME_LEN = 60;
const MAX_REF_LEN = 120;
const MAX_CONTACT_LEN = 100;
const MAX_IMAGES = 5;
const MAX_IMAGE_BYTES = 1 * 1024 * 1024; // 1MB لكل صورة
const MAX_TOTAL_IMAGE_BYTES = 4 * 1024 * 1024; // 4MB إجمالي
const DAILY_LIMIT = 5; // ★ 5 رسائل/يوم/IP
const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const RECAPTCHA_TIMEOUT_MS = 6000;
const TELEGRAM_TIMEOUT_MS = 15000;

// ★ واتساب بيتبعت من الموقع مباشرة (wa.me) ومبيعديش على السيرفر، والاتصال الهاتفي اتشال.
//   تليجرام وإيميل لازم يتأكدوا بكود (OTP) قبل ما الرسالة توصلك.
const CONTACT_LABELS = {
  email: "إيميل",
};
const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// ──────────────────────────────────────────────────────────────
// ★ Rate Limit (In-Memory)
// ⚠️ في Vercel كل instance جديدة بتبدأ من صفر — للحماية الحقيقية
//    استخدم Upstash Redis (مثال في نهاية الملف).
// ──────────────────────────────────────────────────────────────
const _rateStore = new Map(); // ip → { date, count }
const RATE_CLEANUP = 60 * 60 * 1000;
let _lastCleanup = Date.now();

function _cleanupRate() {
  const now = Date.now();
  if (now - _lastCleanup < RATE_CLEANUP) return;
  _lastCleanup = now;
  const today = new Date().toISOString().slice(0, 10);
  for (const [ip, rec] of _rateStore.entries()) {
    if (rec.date !== today) _rateStore.delete(ip);
  }
}

function getClientIP(req) {
  const xff = req.headers["x-forwarded-for"];
  if (typeof xff === "string" && xff) {
    return xff.split(",")[0].trim().slice(0, 45);
  }
  return (req.socket && req.socket.remoteAddress) || "unknown";
}

function checkRateLimit(ip) {
  _cleanupRate();
  const today = new Date().toISOString().slice(0, 10);
  const rec = _rateStore.get(ip);

  if (!rec || rec.date !== today) {
    _rateStore.set(ip, { date: today, count: 1 });
    return { allowed: true, remaining: DAILY_LIMIT - 1 };
  }
  if (rec.count >= DAILY_LIMIT) {
    return { allowed: false, remaining: 0 };
  }
  rec.count++;
  return { allowed: true, remaining: DAILY_LIMIT - rec.count };
}

// ──────────────────────────────────────────────────────────────
// أدوات مساعدة
// ──────────────────────────────────────────────────────────────
function bad(res, status, code, error) {
  return res.status(status).json({ ok: false, code, error });
}

/**
 * ★ تنظيف شامل للنص:
 *   - حذف رموز التحكم
 *   - حذف RTL/LTR المخفي
 *   - حذف وسوم HTML/سكريبتات
 *   - حذف backtick و backslash
 *   - توحيد المسافات + حد أقصى للطول
 */
function sanitize(str, maxLen) {
  if (typeof str !== "string") return "";
  let s = str.replace(/[\u0000-\u001F\u007F]/g, "");
  s = s.replace(/[\u202A-\u202E\u200E\u200F]/g, "");
  s = s.replace(/<[^>]*>/g, "");
  s = s.replace(
    /(javascript\s*:|vbscript\s*:|data\s*:\s*text\/html|on\w+\s*=\s*["']?)/gi,
    "",
  );
  s = s.replace(/[\\`]/g, "");
  s = s
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  if (typeof maxLen === "number" && maxLen > 0 && s.length > maxLen) {
    s = s.slice(0, maxLen);
  }
  return s;
}

/**
 * ★ فك ترميز Data URL مع تحقق صارم من MIME
 */
function decodeDataUrl(dataUrl) {
  if (typeof dataUrl !== "string") return null;
  const match = dataUrl.match(
    /^data:(image\/(?:jpeg|jpg|png|webp|gif));base64,([A-Za-z0-9+/=]+)$/i,
  );
  if (!match) return null;
  try {
    const buffer = Buffer.from(match[2], "base64");
    if (!buffer.length) return null;
    return { mime: match[1].toLowerCase(), buffer };
  } catch {
    return null;
  }
}

function safeFileName(name, fallback = "image.jpg") {
  if (!name) return fallback;
  const s = String(name)
    .replace(/[^\w.\-]+/g, "_")
    .slice(0, 60);
  return s || fallback;
}

// ──────────────────────────────────────────────────────────────
// fetch مع Timeout
// ──────────────────────────────────────────────────────────────
async function fetchWithTimeout(url, opts, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...opts, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

// ──────────────────────────────────────────────────────────────
// reCAPTCHA
// ──────────────────────────────────────────────────────────────
async function verifyRecaptcha(token, remoteip) {
  const secret = process.env.RECAPTCHA_SECRET;
  if (!secret) {
    console.error("RECAPTCHA_SECRET not set");
    return { ok: false, reason: "CONFIG" };
  }
  if (!token || typeof token !== "string" || token.length > 5000) {
    return { ok: false, reason: "MISSING_TOKEN" };
  }

  try {
    const params = new URLSearchParams({ secret, response: token });
    if (remoteip && remoteip !== "unknown") params.append("remoteip", remoteip);

    const r = await fetchWithTimeout(
      RECAPTCHA_VERIFY_URL,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      },
      RECAPTCHA_TIMEOUT_MS,
    );
    const j = await r.json().catch(() => ({ success: false }));

    if (!j.success) {
      console.warn("reCAPTCHA failed:", j["error-codes"] || j);
      return { ok: false, reason: "CAPTCHA_FAILED" };
    }
    return { ok: true };
  } catch (err) {
    console.error("reCAPTCHA verify exception:", err);
    return { ok: false, reason: "CAPTCHA_ERROR" };
  }
}

// ──────────────────────────────────────────────────────────────
// Telegram
// ──────────────────────────────────────────────────────────────
async function tgSendMessage(botToken, chatId, text) {
  const r = await fetchWithTimeout(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        // ★ بدون parse_mode → يمنع Markdown/HTML injection
        disable_web_page_preview: true,
      }),
    },
    TELEGRAM_TIMEOUT_MS,
  );
  return r.json().catch(() => ({ ok: false }));
}

async function sendPhotoToTelegram(botToken, chatId, img) {
  const decoded = decodeDataUrl(img && img.data);
  if (!decoded) return false;
  if (decoded.buffer.length > MAX_IMAGE_BYTES) return false;

  const name = safeFileName(img.name);
  const form = new FormData();
  form.append("chat_id", String(chatId));
  form.append("caption", `📷 ${name}`.slice(0, 1024));

  const file = new File([decoded.buffer], name, { type: decoded.mime });
  form.append("photo", file, name);

  try {
    const r = await fetchWithTimeout(
      `https://api.telegram.org/bot${botToken}/sendPhoto`,
      { method: "POST", body: form },
      TELEGRAM_TIMEOUT_MS,
    );
    const j = await r.json().catch(() => ({ ok: false }));
    return !!j.ok;
  } catch (err) {
    console.warn("sendPhoto exception:", err);
    return false;
  }
}

async function sendMediaGroupToTelegram(botToken, chatId, images) {
  const decoded = images
    .map((img) => ({ img, decoded: decodeDataUrl(img && img.data) }))
    .filter((x) => x.decoded && x.decoded.buffer.length <= MAX_IMAGE_BYTES);

  if (!decoded.length) return 0;

  const form = new FormData();
  form.append("chat_id", String(chatId));

  const media = decoded.map((x, i) => ({
    type: "photo",
    media: `attach://photo_${i}`,
    caption: i === 0 ? `📷 مرفقات (${decoded.length})` : undefined,
  }));
  form.append("media", JSON.stringify(media));

  decoded.forEach((x, i) => {
    const name = safeFileName(x.img.name, `photo_${i}.jpg`);
    const file = new File([x.decoded.buffer], name, { type: x.decoded.mime });
    form.append(`photo_${i}`, file, name);
  });

  try {
    const r = await fetchWithTimeout(
      `https://api.telegram.org/bot${botToken}/sendMediaGroup`,
      { method: "POST", body: form },
      TELEGRAM_TIMEOUT_MS,
    );
    const j = await r.json().catch(() => ({ ok: false }));
    if (!j.ok) {
      console.warn("sendMediaGroup failed:", j.description);
      return 0;
    }
    return decoded.length;
  } catch (err) {
    console.warn("sendMediaGroup exception:", err);
    return 0;
  }
}


// ──────────────────────────────────────────────────────────────
// ★ الحد اليومي (Redis لو متاح — غير كده الذاكرة)
// ──────────────────────────────────────────────────────────────
const todayKey = () => new Date().toISOString().slice(0, 10);

async function dailyPeek(ip) {
  if (redisConfigured()) {
    try {
      const c = await rateCount(`rl:day:${ip}:${todayKey()}`);
      return { allowed: c < DAILY_LIMIT, remaining: Math.max(0, DAILY_LIMIT - c) };
    } catch (e) {
      console.warn("dailyPeek redis error:", e.message);
    }
  }
  const rec = _rateStore.get(ip);
  const c = rec && rec.date === todayKey() ? rec.count : 0;
  return { allowed: c < DAILY_LIMIT, remaining: Math.max(0, DAILY_LIMIT - c) };
}

async function dailyHit(ip) {
  if (redisConfigured()) {
    try {
      const r = await rateLimit(`rl:day:${ip}:${todayKey()}`, DAILY_LIMIT, 86400);
      return { allowed: r.allowed, remaining: Math.max(0, DAILY_LIMIT - r.count) };
    } catch (e) {
      console.warn("dailyHit redis error:", e.message);
    }
  }
  return checkRateLimit(ip);
}

// reCAPTCHA gate: بيرجّع null لو تمام، أو الرد الجاهز لو فشل
async function captchaGate(res, token, ip) {
  const cap = await verifyRecaptcha(token, ip);
  if (cap.ok) return null;
  if (cap.reason === "CONFIG") {
    return bad(res, 500, "CONFIG", "إعدادات reCAPTCHA ناقصة على السيرفر");
  }
  if (cap.reason === "CAPTCHA_ERROR") {
    return bad(res, 503, "CAPTCHA_ERROR", "تعذّر التحقق حاليًا");
  }
  return bad(res, 400, "CAPTCHA_FAILED", "فشل التحقق البشري — حاول تاني");
}

// ──────────────────────────────────────────────────────────────
// ★ OTP — بدء التحقق (إيميل: يبعت كود | تليجرام: يجهّز رابط البوت)
// ──────────────────────────────────────────────────────────────
async function handleOtpStart(res, ip, body) {
  if (body.website && String(body.website).trim() !== "") {
    return bad(res, 200, "HONEYPOT", "تم رفض الطلب");
  }
  if (!redisConfigured()) {
    console.error("Redis (Upstash) env vars missing");
    return bad(res, 500, "CONFIG", "التحقق مش مفعّل على السيرفر");
  }

  const cType = sanitize(body.contactType, 20);
  if (cType !== "email") {
    return bad(res, 400, "INVALID", "نوع وسيلة التواصل غير مدعوم");
  }

  const gate = await captchaGate(res, body.recaptchaToken, ip);
  if (gate) return gate;

  try {
    const ipRl = await rateLimit(`rl:otp:ip:${ip}`, 10, 3600);
    if (!ipRl.allowed) {
      return bad(res, 429, "RATE", "طلبات تحقق كتير — جرّب بعد شوية");
    }

    const sid = newSid();

    if (cType === "email") {
      const email = sanitize(body.contactValue, MAX_CONTACT_LEN).toLowerCase();
      if (!EMAIL_RE.test(email)) {
        return bad(res, 400, "INVALID", "صيغة الإيميل غير صحيحة");
      }
      const em = await rateLimit(`rl:otp:mail:${shortHash(email)}`, 3, 3600);
      if (!em.allowed) {
        return bad(res, 429, "RATE_EMAIL", "اتبعتلك كود كتير على الإيميل ده — جرّب بعد ساعة");
      }

      const code = newCode();
      await otpSet(sid, {
        type: "email",
        value: email,
        codeHash: hashCode(sid, code),
        sends: 1,
        createdAt: Date.now(),
      });
      try {
        await sendOtpEmail(email, code);
      } catch (err) {
        console.error("sendOtpEmail failed:", err.message);
        await otpDelete(sid);
        return bad(res, 502, "MAIL", "تعذّر إرسال الإيميل");
      }
      return res.status(200).json({
        ok: true,
        sid,
        type: "email",
        maskedTo: maskEmail(email),
        ttl: OTP_TTL_SEC,
      });
    }

    // تليجرام
    const botUser = String(process.env.TG_BOT_USERNAME || "").replace(/^@/, "");
    if (!/^[A-Za-z0-9_]{5,32}$/.test(botUser)) {
      console.error("TG_BOT_USERNAME missing/invalid");
      return bad(res, 500, "CONFIG", "اسم بوت التحقق ناقص على السيرفر");
    }
    await otpSet(sid, { type: "telegram", sends: 0, createdAt: Date.now() });
    return res.status(200).json({
      ok: true,
      sid,
      type: "telegram",
      botUrl: `https://t.me/${botUser}?start=${sid}`,
      ttl: OTP_TTL_SEC,
    });
  } catch (err) {
    console.error("otp_start exception:", err);
    return bad(res, 500, "SERVER", "خطأ في السيرفر");
  }
}

// ──────────────────────────────────────────────────────────────
// ★ OTP — إعادة إرسال كود الإيميل (من غير reCAPTCHA جديد، بس بحدود)
// ──────────────────────────────────────────────────────────────
async function handleOtpResend(res, ip, body) {
  if (!redisConfigured()) return bad(res, 500, "CONFIG", "التحقق مش مفعّل على السيرفر");
  const sid = String(body.sid || "");
  if (!SID_RE.test(sid)) return bad(res, 400, "OTP_EXPIRED", "انتهت صلاحية الجلسة");

  try {
    const s = await otpGet(sid);
    if (!s || s.type !== "email") {
      return bad(res, 400, "OTP_EXPIRED", "انتهت صلاحية الجلسة");
    }
    if ((s.sends || 0) >= OTP_MAX_SENDS) {
      return bad(res, 429, "RATE", "وصلت للحد الأقصى لإعادة الإرسال");
    }
    const cool = await rateLimit(`rl:otp:cool:${sid}`, 1, 60);
    if (!cool.allowed) {
      return bad(res, 429, "COOLDOWN", "استنى دقيقة قبل إعادة الإرسال");
    }
    const em = await rateLimit(`rl:otp:mail:${shortHash(s.value)}`, 3, 3600);
    if (!em.allowed) {
      return bad(res, 429, "RATE_EMAIL", "اتبعتلك كود كتير على الإيميل ده — جرّب بعد ساعة");
    }

    const code = newCode();
    s.codeHash = hashCode(sid, code);
    s.sends = (s.sends || 0) + 1;
    await otpSet(sid, s);
    await redis(["DEL", `otp:att:${sid}`]);
    try {
      await sendOtpEmail(s.value, code);
    } catch (err) {
      console.error("sendOtpEmail (resend) failed:", err.message);
      return bad(res, 502, "MAIL", "تعذّر إرسال الإيميل");
    }
    return res.status(200).json({ ok: true, maskedTo: maskEmail(s.value) });
  } catch (err) {
    console.error("otp_resend exception:", err);
    return bad(res, 500, "SERVER", "خطأ في السيرفر");
  }
}

// ──────────────────────────────────────────────────────────────
// الـ Handler
// ──────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  // 0) Security headers
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Cache-Control", "no-store");

  // 1) Method
  if (req.method !== "POST") {
    return bad(res, 405, "METHOD", "Method Not Allowed");
  }

  // 2) Content-Type
  const ct = String(req.headers["content-type"] || "");
  if (!ct.includes("application/json")) {
    return bad(res, 415, "INVALID", "Content-Type غير مدعوم");
  }

  // 3) الحقول + الـ IP
  const ip = getClientIP(req);
  const body = req.body || {};

  // 3.1) إجراءات الـ OTP (بدء / إعادة إرسال)
  if (body.action === "otp_start") return handleOtpStart(res, ip, body);
  if (body.action === "otp_resend") return handleOtpResend(res, ip, body);

  // تحقق reCAPTCHA بس (واتساب / تليجرام: الموقع بيفتح المحادثة بعد ما التحقق ينجح)
  if (body.action === "captcha_check") {
    if (body.website && String(body.website).trim() !== "") {
      return bad(res, 200, "HONEYPOT", "تم رفض الطلب");
    }
    const gate = await captchaGate(res, body.recaptchaToken, ip);
    if (gate) return gate;

    // ★ رقم الواتساب / يوزر تليجرام بيتقروا من Environment Variables ومبيتبعتوش غير بعد نجاح reCAPTCHA
    const kind = sanitize(body.kind, 20);
    let base = "";
    if (kind === "whatsapp") {
      const n = String(process.env.WHATSAPP_NUMBER || "").replace(/\D/g, "");
      if (/^\d{8,15}$/.test(n)) base = `https://wa.me/${n}`;
    } else if (kind === "telegram") {
      const u = String(process.env.TELEGRAM_USERNAME || "").replace(/^@/, "");
      if (/^[A-Za-z0-9_]{5,32}$/.test(u)) base = `https://t.me/${u}`;
    } else {
      return bad(res, 400, "INVALID", "نوع غير مدعوم");
    }
    if (!base) {
      console.error("WHATSAPP_NUMBER / TELEGRAM_USERNAME env var missing");
      return bad(res, 500, "CONFIG", "بيانات التواصل مش متضبطة على السيرفر");
    }
    return res.status(200).json({ ok: true, base });
  }

  const {
    channel,
    type,
    name,
    contactType,
    contactValue,
    ref,
    text,
    images,
    website,
    recaptchaToken,
  } = body;

  // ★ تليجرام والإيميل لازم يتأكدوا بكود. باقي الحالات (من غير وسيلة تواصل) زي ما كانت.
  const needsOtp = sanitize(contactType, 20) === "email";

  // 3.2) ★ Rate Limit — قبل أي حاجة
  //   - من غير OTP: بنحسب الطلب فورًا (يمنع إرهاق reCAPTCHA/Telegram)
  //   - مع OTP: بنفحص بس، وبنحسب بعد نجاح الكود (غلطة في الكود ما تاكلش من الحد اليومي)
  let rl;
  if (needsOtp) {
    rl = await dailyPeek(ip);
  } else {
    rl = await dailyHit(ip);
  }
  if (!rl.allowed) {
    return bad(res, 429, "RATE", "تجاوزت الحد اليومي (5 رسائل)");
  }

  // 5) Honeypot
  if (website && String(website).trim() !== "") {
    return bad(res, 200, "HONEYPOT", "تم رفض الطلب");
  }

  // 6) reCAPTCHA — بيتحقق منه وقت بدء الـ OTP، فمش مطلوب تاني في الإرسال النهائي
  if (!needsOtp) {
    const gate = await captchaGate(res, recaptchaToken, ip);
    if (gate) return gate;
  }

  // 7) القناة
  if (channel && channel !== "tg") {
    return bad(res, 400, "INVALID", "قناة الإرسال غير مدعومة");
  }

  // 8) تنظيف الحقول
  const cleanText = sanitize(text, MAX_TEXT_LEN);
  const cleanName = sanitize(name, MAX_NAME_LEN);
  const cleanRef = sanitize(ref, MAX_REF_LEN);
  const cleanType = sanitize(type, 40);
  const cleanCType = sanitize(contactType, 20);
  // تليجرام: اليوزر بيجي من تليجرام نفسه بعد التحقق، فمبنثقش في اللي الطالب كتبه
  const cleanCVal =
    cleanCType === "telegram" ? "" : sanitize(contactValue, MAX_CONTACT_LEN);

  // 9) النص
  if (!cleanText) return bad(res, 400, "INVALID", "النص مطلوب");
  if (cleanText.length < 5) return bad(res, 400, "INVALID", "النص قصير جدًا");
  if (cleanText.length > MAX_TEXT_LEN)
    return bad(res, 400, "BIG", "النص طويل جدًا");
  if (/^(.)\1{4,}$/.test(cleanText))
    return bad(res, 400, "INVALID", "النص غير واضح");
  const urlCount = (cleanText.match(/https?:\/\//gi) || []).length;
  if (urlCount > 2) return bad(res, 400, "INVALID", "عدد الروابط كبير");

  // 10) الاسم
  if (cleanName) {
    if (cleanName.length < 2) {
      return bad(res, 400, "INVALID", "الاسم قصير جدًا");
    }
    if (!/^[\u0600-\u06FFa-zA-Z\s.'\-]{2,60}$/.test(cleanName)) {
      return bad(res, 400, "INVALID", "الاسم يحتوي على رموز غير مسموحة");
    }
  }

  // 11) وسيلة التواصل (تليجرام / إيميل بس — الواتساب والاتصال مش بيعدّوا هنا)
  if (cleanCType && !CONTACT_LABELS[cleanCType]) {
    return bad(res, 400, "INVALID", "نوع وسيلة التواصل غير مدعوم");
  }
  if (cleanCType === "email") {
    if (!cleanCVal) {
      return bad(res, 400, "INVALID", "قيمة وسيلة التواصل مطلوبة");
    }
    if (!EMAIL_RE.test(cleanCVal)) {
      return bad(res, 400, "INVALID", "صيغة الإيميل غير صحيحة");
    }
  }

  // 12) الصور
  const rawImages = Array.isArray(images) ? images : [];
  if (rawImages.length > MAX_IMAGES) {
    return bad(res, 400, "BIG", "عدد الصور كبير");
  }

  const imageList = [];
  let totalImgBytes = 0;

  for (let i = 0; i < rawImages.length; i++) {
    const im = rawImages[i];
    if (!im || typeof im !== "object") continue;

    const decoded = decodeDataUrl(im.data);
    if (!decoded) {
      return bad(res, 400, "INVALID", `صورة رقم ${i + 1} غير صالحة`);
    }
    if (decoded.buffer.length > MAX_IMAGE_BYTES) {
      return bad(res, 400, "BIG", `صورة رقم ${i + 1} أكبر من 1 ميجا`);
    }
    totalImgBytes += decoded.buffer.length;
    if (totalImgBytes > MAX_TOTAL_IMAGE_BYTES) {
      return bad(res, 400, "BIG", "إجمالي حجم الصور كبير");
    }
    imageList.push({
      name: safeFileName(im.name),
      data: im.data,
    });
  }

  // 12.5) ★ التحقق من كود التأكيد (إيميل / تليجرام)
  let verified = null; // { label, sType, sVal }
  if (needsOtp) {
    if (!redisConfigured()) {
      console.error("Redis (Upstash) env vars missing");
      return bad(res, 500, "CONFIG", "التحقق مش مفعّل على السيرفر");
    }
    const otp = body.otp && typeof body.otp === "object" ? body.otp : {};
    let v;
    try {
      v = await otpVerify(String(otp.sid || ""), String(otp.code || ""), cleanCType);
    } catch (err) {
      console.error("otpVerify exception:", err);
      return bad(res, 503, "OTP_ERROR", "تعذّر التحقق حاليًا");
    }
    if (!v.ok) {
      return res.status(400).json({
        ok: false,
        code: "OTP_" + v.reason,
        error: "فشل التحقق من الكود",
        left: v.left,
      });
    }

    if (cleanCType === "email") {
      if (v.session.value !== cleanCVal.toLowerCase()) {
        return bad(res, 400, "OTP_MISMATCH", "الإيميل اتغيّر بعد التأكيد");
      }
      verified = {
        label: `إيميل ✅ (متأكد بكود): ${v.session.value}`,
        sType: "email",
        sVal: v.session.value,
      };
    } else {
      const tg = v.session.tg || {};
      const uname = tg.username ? `@${tg.username}` : "بدون يوزر";
      verified = {
        label: `تليجرام ✅ (متأكد بالبوت): ${uname} — id: ${tg.id}`,
        sType: "telegram",
        sVal: tg.username ? `@${tg.username}` : `id:${tg.id}`,
      };
    }

    // نجح الكود → نحسب الرسالة من الحد اليومي
    rl = await dailyHit(ip);
  }

  // 13) تجهيز الرسالة (plain text — بدون parse_mode)
  const contactLabel = verified ? verified.label : "غير محدد";

  const messageLines = [
    "📬 رسالة جديدة من المنصة",
    "─────────────────",
    `النوع: ${cleanType || "غير محدد"}`,
    `الاسم: ${cleanName || "غير محدد"}`,
    `التواصل: ${contactLabel}`,
    `المرجع: ${cleanRef || "غير محدد"}`,
    "─────────────────",
    "التفاصيل:",
    cleanText,
  ];
  if (imageList.length) {
    messageLines.push("─────────────────");
    messageLines.push(`📷 عدد الصور: ${imageList.length}`);
  }
  const message = messageLines.join("\n");

  // 14) Telegram env
  const BOT_TOKEN = process.env.TG_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TG_CHAT_ID || process.env.TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("Missing Telegram env vars");
    return bad(res, 500, "CONFIG", "إعدادات تليجرام ناقصة");
  }

  // 15) إرسال الرسالة النصية
  try {
    const tgData = await tgSendMessage(BOT_TOKEN, CHAT_ID, message);
    if (!tgData.ok) {
      console.error("Telegram sendMessage error:", tgData);
      return bad(res, 500, "TELEGRAM", "فشل إرسال الرسالة");
    }
  } catch (error) {
    console.error("sendMessage exception:", error);
    return bad(res, 500, "SERVER", "خطأ في السيرفر");
  }

  // 16) إرسال الصور
  let imagesSent = 0;
  if (imageList.length === 1) {
    try {
      const ok = await sendPhotoToTelegram(BOT_TOKEN, CHAT_ID, imageList[0]);
      if (ok) imagesSent = 1;
    } catch (err) {
      console.warn("sendPhoto exception:", err);
    }
  } else if (imageList.length > 1) {
    try {
      imagesSent = await sendMediaGroupToTelegram(
        BOT_TOKEN,
        CHAT_ID,
        imageList,
      );
    } catch (err) {
      console.warn("sendMediaGroup exception:", err);
      for (const img of imageList) {
        try {
          const ok = await sendPhotoToTelegram(BOT_TOKEN, CHAT_ID, img);
          if (ok) imagesSent++;
        } catch (e) {
          console.warn("sendPhoto fallback:", e);
        }
      }
    }
  }

  // 17) ★ حفظ في Google Sheets
  try {
    const cairoNow = getCairoNow();
    const dateStr = formatDateCairo(cairoNow);
    const timeStr = formatTimeCairo(cairoNow);

    await appendFeedback([
      Date.now(), // ID
      `${dateStr} ${timeStr}`, // التاريخ
      cleanType || "غير محدد", // النوع
      cleanName || "مجهول", // الاسم
      verified ? verified.sType : "", // نوع وسيلة التواصل (المتأكد منها فقط)
      verified ? verified.sVal : "", // قيمة وسيلة التواصل (المتأكد منها فقط)
      cleanRef || "", // المرجع
      cleanText, // التفاصيل
      imageList.length, // عدد الصور
    ]);
    console.log("✅ Saved to Google Sheets");
  } catch (sheetErr) {
    // لا نوقف الرد لو الشيت فشل — بس نسجل الخطأ
    console.error("❌ Sheets append failed:", sheetErr.message);
  }

  // 18) الرد النهائي
  return res.status(200).json({
    ok: true,
    message: "تم الإرسال بنجاح",
    imagesSent,
    imagesTotal: imageList.length,
    remaining: rl.remaining,
  });
}
