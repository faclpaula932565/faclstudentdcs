// api/_otp.js
// أدوات مشتركة لنظام التحقق (OTP): Redis (Upstash REST) + إرسال الإيميل + إرسال رسالة تليجرام.
// الملفات اللي بتبدأ بـ _ بتتستورد من feedback.js و webhook.js.
import crypto from "node:crypto";

export const OTP_TTL_SEC = 600; // 10 دقايق
export const OTP_MAX_ATTEMPTS = 5; // محاولات إدخال الكود لكل جلسة
export const OTP_MAX_SENDS = 3; // أقصى عدد مرات إرسال الكود لكل جلسة

// ──────────────────────────────────────────────────────────────
// Redis (Upstash REST) — بدون مكتبات
// بيقبل أسماء المتغيرات بتاعة Upstash المباشرة أو بتاعة Vercel Marketplace (KV_REST_API_*)
// ──────────────────────────────────────────────────────────────
const rUrl = () => process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const rTok = () => process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

export function redisConfigured() {
  return !!(rUrl() && rTok());
}

async function rFetch(path, body) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 5000);
  try {
    const r = await fetch(rUrl() + path, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${rTok()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    });
    const j = await r.json().catch(() => null);
    if (!r.ok || !j) throw new Error("REDIS_HTTP_" + r.status);
    return j;
  } finally {
    clearTimeout(timer);
  }
}

export async function redis(cmd) {
  const j = await rFetch("", cmd);
  if (j.error) throw new Error("REDIS: " + j.error);
  return j.result;
}

async function redisPipeline(cmds) {
  const j = await rFetch("/pipeline", cmds);
  if (!Array.isArray(j)) throw new Error("REDIS_PIPELINE");
  return j.map((x) => {
    if (x.error) throw new Error("REDIS: " + x.error);
    return x.result;
  });
}

// عدّاد بنافذة زمنية (INCR + انتهاء صلاحية في نفس الطلب)
export async function rateLimit(key, limit, windowSec) {
  const res = await redisPipeline([
    ["SET", key, 0, "EX", windowSec, "NX"],
    ["INCR", key],
  ]);
  const count = Number(res[1]) || 0;
  return { allowed: count <= limit, count };
}

// قراءة العدّاد من غير ما نزوّده
export async function rateCount(key) {
  const v = await redis(["GET", key]);
  return Number(v) || 0;
}

// ──────────────────────────────────────────────────────────────
// جلسات الـ OTP
// ──────────────────────────────────────────────────────────────
export const SID_RE = /^[A-Za-z0-9_-]{16,64}$/;

export function newSid() {
  return crypto.randomBytes(18).toString("base64url"); // 24 حرف — صالح كـ deep-link تليجرام
}

export function newCode() {
  return String(crypto.randomInt(0, 1000000)).padStart(6, "0");
}

export function hashCode(sid, code) {
  const key = process.env.OTP_SECRET || process.env.TG_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN || "";
  return crypto.createHmac("sha256", key).update(`${sid}:${code}`).digest("hex");
}

export function shortHash(s) {
  return crypto.createHash("sha256").update(String(s)).digest("hex").slice(0, 24);
}

export async function otpGet(sid) {
  const raw = await redis(["GET", `otp:${sid}`]);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function otpSet(sid, obj, ttl = OTP_TTL_SEC) {
  await redis(["SET", `otp:${sid}`, JSON.stringify(obj), "EX", ttl]);
}

export async function otpDelete(sid) {
  await redis(["DEL", `otp:${sid}`]);
  await redis(["DEL", `otp:att:${sid}`]);
}

// تحقق من الكود. لو صح: الجلسة بتتمسح (استخدام مرة واحدة) وبنرجّع بياناتها.
export async function otpVerify(sid, code, expectType) {
  if (!SID_RE.test(sid || "")) return { ok: false, reason: "EXPIRED" };
  if (!/^\d{6}$/.test(code || "")) return { ok: false, reason: "BAD_CODE" };

  const s = await otpGet(sid);
  if (!s || s.type !== expectType) return { ok: false, reason: "EXPIRED" };
  if (!s.codeHash) return { ok: false, reason: "NOT_STARTED" }; // تليجرام: لسه ماضغطش Start

  const attKey = `otp:att:${sid}`;
  const att = await redis(["INCR", attKey]);
  if (att === 1) await redis(["EXPIRE", attKey, OTP_TTL_SEC * 3]);
  if (att > OTP_MAX_ATTEMPTS) {
    await otpDelete(sid);
    return { ok: false, reason: "LOCKED" };
  }

  const a = Buffer.from(hashCode(sid, code));
  const b = Buffer.from(String(s.codeHash));
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return { ok: false, reason: "WRONG", left: OTP_MAX_ATTEMPTS - att };
  }

  const deleted = await redis(["DEL", `otp:${sid}`]); // لو اتنين بعتوا نفس الكود في نفس اللحظة، واحد بس ياخد 1
  if (deleted !== 1) return { ok: false, reason: "EXPIRED" };
  await redis(["DEL", attKey]);
  return { ok: true, session: s };
}

// ──────────────────────────────────────────────────────────────
// إرسال الإيميل
//  - Brevo (موصى بيه): مفيش دومين مطلوب، بس لازم تأكدي إيميل المُرسِل في حسابك
//  - Resend: لازم دومين خاص متأكد عندهم، غير كده بيبعت لإيميلك إنتي بس
// ──────────────────────────────────────────────────────────────
export async function sendOtpEmail(to, code) {
  const subject = `رمز التأكيد: ${code}`;
  const text =
    `رمز التأكيد بتاعك هو: ${code}\n\n` +
    `الرمز صالح 10 دقايق. اكتبه في صفحة الاقتراحات علشان نكمّل إرسال رسالتك.\n` +
    `لو إنت مطلبتش الرمز ده، تجاهل الرسالة.`;
  const html =
    `<div dir="rtl" style="font-family:Tahoma,Arial,sans-serif;font-size:15px;line-height:1.8">` +
    `<p>رمز التأكيد بتاعك:</p>` +
    `<p style="font-size:30px;font-weight:700;letter-spacing:6px;direction:ltr">${code}</p>` +
    `<p>الرمز صالح 10 دقايق. اكتبه في صفحة الاقتراحات علشان نكمّل إرسال رسالتك.</p>` +
    `<p style="color:#777">لو إنت مطلبتش الرمز ده، تجاهل الرسالة.</p></div>`;

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 10000);
  try {
    let r;
    if (process.env.BREVO_API_KEY) {
      const fromEmail = process.env.MAIL_FROM_EMAIL;
      if (!fromEmail) throw new Error("MAIL_FROM_EMAIL missing");
      r = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: { "api-key": process.env.BREVO_API_KEY, "Content-Type": "application/json" },
        body: JSON.stringify({
          sender: { name: process.env.MAIL_FROM_NAME || "منصة المواد", email: fromEmail },
          to: [{ email: to }],
          subject,
          textContent: text,
          htmlContent: html,
        }),
        signal: ctrl.signal,
      });
    } else if (process.env.RESEND_API_KEY) {
      r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.MAIL_FROM || "Study Platform <onboarding@resend.dev>",
          to: [to],
          subject,
          text,
          html,
        }),
        signal: ctrl.signal,
      });
    } else {
      throw new Error("NO_MAIL_PROVIDER");
    }
    if (!r.ok) {
      const t = await r.text().catch(() => "");
      throw new Error(`MAIL_HTTP_${r.status} ${t.slice(0, 200)}`);
    }
  } finally {
    clearTimeout(timer);
  }
}

// ──────────────────────────────────────────────────────────────
// رسالة تليجرام نصية عادية (بدون parse_mode)
// ──────────────────────────────────────────────────────────────
export async function tgSendPlain(botToken, chatId, text) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 10000);
  try {
    const r = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
      signal: ctrl.signal,
    });
    const j = await r.json().catch(() => ({ ok: false }));
    return !!j.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
}

export function maskEmail(e) {
  const [u, d] = String(e).split("@");
  if (!d) return e;
  return (u.length <= 2 ? u[0] + "*" : u.slice(0, 2) + "***") + "@" + d;
}
