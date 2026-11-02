// api/daily.js — التقرير اليومي
import { readFeedbackByDate, getCairoNow, formatDateCairo } from "./sheets.js";

export default async function handler(req, res) {
  try {
    // ═══ 1) تاريخ اليوم بتوقيت القاهرة ═══
    const cairoNow = getCairoNow();
    const today = formatDateCairo(cairoNow);

    // ═══ 2) اقرأ كل رسائل النهاردة ═══
    const rows = await readFeedbackByDate(today, today);

    // ═══ 3) احسب الإحصائيات ═══
    const total = rows.length;

    let fromTelegram = 0;
    let fromWhatsApp = 0;
    let fromEmail = 0;
    let fromOther = 0;

    const typeCount = {};
    const rowsSummary = [];

    rows.forEach(function (r) {
      const ct = String(r["وسيلة التواصل"] || "").toLowerCase();
      if (ct.includes("telegram") || ct.includes("تليجرام")) fromTelegram++;
      else if (ct.includes("whatsapp") || ct.includes("واتساب")) fromWhatsApp++;
      else if (ct.includes("email") || ct.includes("إيميل")) fromEmail++;
      else fromOther++;

      const t = String(r["النوع"] || "غير محدد");
      typeCount[t] = (typeCount[t] || 0) + 1;

      rowsSummary.push(r);
    });

    // ═══ 4) ابنِ نص التقرير ═══
    const dateAr = cairoNow.toLocaleDateString("ar-EG", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    let report =
      "📅 التقرير اليومي\n" +
      "🗓️ " +
      dateAr +
      "\n" +
      "━━━━━━━━━━━━━━━━━━\n\n" +
      "📩 إجمالي الرسائل اليوم: " +
      total +
      "\n" +
      "📲 من تليجرام: " +
      fromTelegram +
      "\n" +
      "💬 من الواتساب: " +
      fromWhatsApp +
      "\n" +
      "📧 من الإيميل: " +
      fromEmail +
      "\n";

    if (fromOther > 0) report += "❓ أخرى: " + fromOther + "\n";

    if (total > 0) {
      report += "\n📊 أنواع الرسائل:\n";
      Object.keys(typeCount).forEach(function (k) {
        report += "  • " + k + ": " + typeCount[k] + "\n";
      });

      report += "\n📝 آخر 5 رسائل:\n";
      const last5 = rowsSummary.slice(-5).reverse();
      last5.forEach(function (r) {
        const nm = r["الاسم"] || "مجهول";
        const tp = r["النوع"] || "—";
        const dt = String(r["التاريخ"] || "").slice(11, 16);
        report += "  ⏰ " + dt + " — " + nm + " (" + tp + ")\n";
      });
    } else {
      report += "\n✨ مفيش رسائل النهاردة — يوم هادي!\n";
    }

    // ═══ 5) ابعت على تليجرام ═══
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      await fetch("https://api.telegram.org/bot" + botToken + "/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: report }),
      });
    }

    return res.status(200).json({
      ok: true,
      date: today,
      total: total,
      telegram: fromTelegram,
      whatsapp: fromWhatsApp,
      email: fromEmail,
      other: fromOther,
    });
  } catch (err) {
    console.error("Daily report error:", err);
    return res.status(500).json({ ok: false, error: err.message });
  }
}
