// api/webhook.js
import {
  redis,
  redisConfigured,
  rateLimit,
  newCode,
  hashCode,
  otpGet,
  otpSet,
  tgSendPlain,
  SID_RE,
  OTP_MAX_SENDS,
} from "./_otp.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("Telegram Webhook API is running ✅");
  }

  // 🔐 تحقق إن الطلب جاي من تليجرام فعلًا (لو TG_WEBHOOK_SECRET متضبط)
  //    لازم نفس القيمة تتبعت في setWebhook كـ secret_token
  const WH_SECRET = process.env.TG_WEBHOOK_SECRET;
  if (WH_SECRET && req.headers["x-telegram-bot-api-secret-token"] !== WH_SECRET) {
    return res.status(401).send("Unauthorized");
  }

  const { message } = req.body || {};
  if (!message || !message.text) {
    return res.status(200).send("OK");
  }

  const chatId = message.chat.id;
  const messageId = message.message_id;
  const text = String(message.text).trim();

  // ✅ NO FALLBACK — لازم يكونوا في Env Variables
  const BOT_TOKEN = process.env.TG_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN;
  const MY_CHAT = process.env.TG_CHAT_ID || process.env.TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !MY_CHAT) {
    console.error("Missing TG_BOT_TOKEN / TG_CHAT_ID");
    return res.status(200).send("CONFIG_MISSING");
  }

  // ═════════════════════════════════════════════
  // 🔑 تأكيد تليجرام للطلاب: /start <sid>
  //    أي حد يقدر يبدأ ده (الطالب)، ومش بيدّيه أي صلاحية — بس بيستلم كود تأكيد.
  //    لازم يتعالج قبل فحص "حسابك أنت فقط".
  // ═════════════════════════════════════════════
  const m = /^\/start(?:@\w+)?\s+(\S+)$/.exec(text);
  if (m && SID_RE.test(m[1]) && message.chat && message.chat.type === "private") {
    await handleOtpStart({
      sid: m[1],
      from: message.from || {},
      chatId,
      botToken: BOT_TOKEN,
    });
    return res.status(200).send("OK");
  }

  // 🔒 الأمان: البوت يرد على حسابك أنت فقط
  if (String(chatId) !== String(MY_CHAT)) {
    console.warn("Unauthorized chatId:", chatId);
    return res.status(200).send("Unauthorized");
  }

  const apiUrl = (method) =>
    `https://api.telegram.org/bot${BOT_TOKEN}/${method}`;

  async function sendMessage(txt, opts = {}) {
    try {
      const r = await fetch(apiUrl("sendMessage"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: txt,
          parse_mode: "Markdown",
          disable_web_page_preview: true,
          ...opts,
        }),
      });
      const j = await r.json().catch(() => ({ ok: false }));
      return j.ok ? j.result : null;
    } catch (err) {
      console.error("sendMessage error:", err);
      return null;
    }
  }

  async function deleteMessage(mid) {
    try {
      const r = await fetch(apiUrl("deleteMessage"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, message_id: mid }),
      });
      const j = await r.json().catch(() => ({ ok: false }));
      return j.ok === true;
    } catch (err) {
      console.error("deleteMessage error:", err);
      return false;
    }
  }

  // ═════════════════════════════════════════════
  // 🧹 أمر /cls — تنظيف المحادثة
  // ═════════════════════════════════════════════
  if (text === "/cls") {
    // 1) امسح رسالة الأمر /cls نفسها
    const cmdDeleted = await deleteMessage(messageId);

    // 2) امسح آخر رسائل البوت (اللي فاتت في آخر دقيقتين)
    //    هنحذف IDs الرسائل اللي بعتها البوت في آخر 30 ثانية
    //    عن طريق تخزينهم في memory (هيضيع بعد Cold Start بس كفاية)
    let deletedCount = 0;
    if (
      global.__recentBotMessages &&
      Array.isArray(global.__recentBotMessages)
    ) {
      const now = Date.now();
      const recent = global.__recentBotMessages.filter(
        (m) => m.chatId === chatId && now - m.timestamp < 120000, // آخر دقيقتين
      );
      for (const m of recent) {
        const ok = await deleteMessage(m.messageId);
        if (ok) deletedCount++;
      }
      // نظّف القائمة
      global.__recentBotMessages = global.__recentBotMessages.filter(
        (m) => !(m.chatId === chatId && now - m.timestamp < 120000),
      );
    }

    // 3) ابعت رسالة تأكيد مؤقتة
    const confirmText =
      deletedCount > 0
        ? `🧹 *تم التنظيف!*\n\n🗑️ اتحذف: *${deletedCount}* رسالة قديمة`
        : `🧹 *تم التنظيف!*`;

    const confirm = await sendMessage(confirmText);

    // 4) امسح رسالة التأكيد نفسها بعد 3 ثواني
    if (confirm && confirm.message_id) {
      // نحفظها الأول عشان نقدر نحذفها
      setTimeout(async () => {
        await deleteMessage(confirm.message_id);
      }, 3000);
    }

    return res.status(200).send("OK");
  }

  // ═════════════════════════════════════════════
  // 📊 التقارير + /help
  // ═════════════════════════════════════════════
  let report = null;
  if (text === "/daily") report = buildDailyReport();
  else if (text === "/weekly") report = buildWeeklyReport();
  else if (text === "/monthly") report = buildMonthlyReport();
  else if (text === "/start" || text === "/help") report = buildHelpMessage();

  if (report) {
    const sent = await sendMessage(report);
    // نحفظ الـ message_id عشان /cls يقدر يحذفه بعدين
    if (sent && sent.message_id) {
      if (!global.__recentBotMessages) global.__recentBotMessages = [];
      global.__recentBotMessages.push({
        chatId: chatId,
        messageId: sent.message_id,
        timestamp: Date.now(),
      });
      // سيب بس آخر 50 رسالة
      if (global.__recentBotMessages.length > 50) {
        global.__recentBotMessages = global.__recentBotMessages.slice(-50);
      }
    }
  }

  return res.status(200).send("OK");
}

// ═════════════════════════════════════════════
// دوال بناء التقارير
// ═════════════════════════════════════════════

function buildDailyReport() {
  const today = new Date().toLocaleDateString("ar-EG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    `📅 *التقرير اليومي*\n` +
    `🗓️ ${today}\n` +
    `━━━━━━━━━━━━━━━━━━\n\n` +
    `📩 إجمالي الرسائل اليوم: *0*\n` +
    `📲 من تليجرام: *0*\n\n` +
    `⚠️ _الأرقام هتبقى حقيقية بعد ربط Google Sheets_`
  );
}

function buildWeeklyReport() {
  return (
    `📊 *التقرير الأسبوعي*\n` +
    `🗓️ آخر 7 أيام\n` +
    `━━━━━━━━━━━━━━━━━━\n\n` +
    `📩 إجمالي الرسائل: *0*\n\n` +
    `⚠️ _الأرقام هتبقى حقيقية بعد ربط Google Sheets_`
  );
}

function buildMonthlyReport() {
  const month = new Date().toLocaleDateString("ar-EG", {
    month: "long",
    year: "numeric",
  });
  return (
    `📈 *التقرير الشهري*\n` +
    `🗓️ ${month}\n` +
    `━━━━━━━━━━━━━━━━━━\n\n` +
    `📩 إجمالي الرسائل: *0*\n\n` +
    `⚠️ _الأرقام هتبقى حقيقية بعد ربط Google Sheets_`
  );
}

function buildHelpMessage() {
  return (
    `🤖 *أهلاً بيك!*\n\n` +
    `الأوامر المتاحة:\n\n` +
    `📅 /daily — التقرير اليومي\n` +
    `📊 /weekly — التقرير الأسبوعي\n` +
    `📈 /monthly — التقرير الشهري\n` +
    `🧹 /cls — مسح المحادثة\n` +
    `❓ /help — القائمة دي`
  );
}

// ═════════════════════════════════════════════
// 🔑 ربط جلسة التأكيد بحساب تليجرام الطالب + إرسال الكود له
// ═════════════════════════════════════════════
async function handleOtpStart({ sid, from, chatId, botToken }) {
  const reply = (t) => tgSendPlain(botToken, chatId, t);

  if (!redisConfigured()) {
    console.error("Redis env vars missing — OTP disabled");
    return reply("⚠️ التأكيد مش متاح دلوقتي. جرّب بعد شوية.");
  }

  try {
    const s = await otpGet(sid);
    if (!s || s.type !== "telegram") {
      return reply("⌛ الرابط ده انتهت صلاحيته. ارجع للموقع واطلب كود جديد.");
    }

    // الجلسة بتتربط بأول حساب يضغط Start — محدش تاني يقدر ياخدها
    if (s.tg && String(s.tg.id) !== String(from.id)) {
      return reply("⚠️ الرابط ده اتستخدم من حساب تاني. ارجع للموقع واطلب كود جديد.");
    }
    if ((s.sends || 0) >= OTP_MAX_SENDS) {
      return reply("⚠️ وصلت للحد الأقصى لإرسال الكود. ارجع للموقع واطلب كود جديد.");
    }

    // حد لإعادة الإرسال: مرة كل 30 ثانية
    const cool = await rateLimit(`rl:otp:tgcool:${sid}`, 1, 30);
    if (!cool.allowed) {
      return reply("⏳ استنى شوية قبل ما تطلب الكود تاني.");
    }

    const code = newCode();
    s.codeHash = hashCode(sid, code);
    s.sends = (s.sends || 0) + 1;
    s.tg = {
      id: from.id,
      // يوزر تليجرام حروف/أرقام/_ بس — بنفلتر احتياطًا
      username: from.username ? String(from.username).replace(/[^A-Za-z0-9_]/g, "").slice(0, 32) : "",
    };
    await otpSet(sid, s);

    // عداد المحاولات يبدأ من الصفر مع كل كود جديد
    await redis(["DEL", `otp:att:${sid}`]);

    return reply(
      `🔐 رمز التأكيد بتاعك: ${code}\n\n` +
        `اكتبه في صفحة الاقتراحات في الموقع. صالح 10 دقايق.\n` +
        `ما تشاركوش مع حد. لو إنت مطلبتش الكود ده، تجاهل الرسالة.`,
    );
  } catch (err) {
    console.error("handleOtpStart error:", err);
    return reply("⚠️ حصلت مشكلة مؤقتة. جرّب تاني بعد شوية.");
  }
}
