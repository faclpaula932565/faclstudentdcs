// api/sheets.js — مكتبة التعامل مع Google Sheets
import { google } from "googleapis";

let sheetsClient = null;

async function getSheetsClient() {
  if (sheetsClient) return sheetsClient;

  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let key = process.env.GOOGLE_PRIVATE_KEY || "";

  // نظّف المفتاح من علامات التنصيص لو موجودة
  key = key.trim();
  if (key.startsWith('"') && key.endsWith('"')) key = key.slice(1, -1);
  // حوّل \n النصية لأسطر جديدة فعلية
  key = key.replace(/\\n/g, "\n");

  if (!email || !key) {
    throw new Error(
      "GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY missing",
    );
  }

  const auth = new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  await auth.authorize();
  sheetsClient = google.sheets({ version: "v4", auth });
  return sheetsClient;
}

// ═══════════════════════════════════════════════
// إضافة صف جديد في تاب Feedback
// ═══════════════════════════════════════════════
export async function appendFeedback(row) {
  const sheets = await getSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  if (!spreadsheetId) throw new Error("GOOGLE_SHEET_ID missing");

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Feedback!A:I",
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row] },
  });
}

// ═══════════════════════════════════════════════
// قراءة كل الرسائل
// ═══════════════════════════════════════════════
export async function readAllFeedback() {
  const sheets = await getSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  if (!spreadsheetId) throw new Error("GOOGLE_SHEET_ID missing");

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "Feedback!A:I",
  });

  const rows = res.data.values || [];
  if (rows.length < 2) return [];

  const header = rows[0];
  return rows.slice(1).map(function (r) {
    const obj = {};
    header.forEach(function (h, i) {
      obj[h] = r[i] || "";
    });
    return obj;
  });
}

// ═══════════════════════════════════════════════
// فلترة الرسائل بتاريخ معين (YYYY-MM-DD)
// ═══════════════════════════════════════════════
export async function readFeedbackByDate(startDate, endDate) {
  const all = await readAllFeedback();
  return all.filter(function (r) {
    const d = String(r["التاريخ"] || "").slice(0, 10);
    return d >= startDate && d <= endDate;
  });
}

// ═══════════════════════════════════════════════
// توقيت القاهرة
// ═══════════════════════════════════════════════
export function getCairoNow() {
  const now = new Date();
  // القاهرة UTC+2 أو UTC+3 (حسب التوقيت الصيفي)
  const cairoStr = now.toLocaleString("en-GB", { timeZone: "Africa/Cairo" });
  return new Date(cairoStr);
}

export function formatDateCairo(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return y + "-" + m + "-" + day;
}

export function formatTimeCairo(d) {
  const h = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");
  return h + ":" + min;
}
