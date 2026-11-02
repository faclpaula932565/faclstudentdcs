/* Service Worker — غيّري VERSION مع كل تعديل مهم: v1 → v2 → v3 ... */
const VERSION = "v1793640430913";
const CACHE = `study-platform-${VERSION}`;

const APP_SHELL = [
  "./",
  "./index.html",
  "./app.js",
  "./pwa.js",
  "./pdf-annotator.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./datenew/departments.js",
  "./datenew/cs/subjects-index.js",
  "./datenew/is/subjects-index.js",
  "./datenew/se/subjects-index.js",
  "./datenew/ai/subjects-index.js",
];

// مكتبات وخطوط خارجية مسموح تتخزن أوفلاين (Google Drive والـ iframes مش هتتخزن)
const CDN_HOSTS = [
  "cdnjs.cloudflare.com",
  "cdn.jsdelivr.net",
  "unpkg.com",
  "code.jquery.com",
  "fonts.googleapis.com",
  "fonts.gstatic.com",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) =>
        Promise.allSettled(
          APP_SHELL.map((url) =>
            cache.add(
              new Request(new URL(url, self.location.href).href, {
                cache: "reload",
              }),
            ),
          ),
        ),
      ),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k.startsWith("study-platform-") && k !== CACHE)
            .map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

// الصفحة بتبعت "SKIP_WAITING" لما تدوسي "تحديث" في التوست
self.addEventListener("message", (event) => {
  const d = event.data;
  if (d === "SKIP_WAITING" || (d && d.type === "SKIP_WAITING"))
    self.skipWaiting();
});

const ANNOTATOR_KEY = "./pdf-annotator.html";

// Cloudflare Pages بيعمل redirect (index.html → / و pdf-annotator.html → /pdf-annotator).
// الرد المتخزن بعد redirect بيبقى redirected=true، والمتصفح بيرفض يرد بيه على navigation (صفحة أو iframe)،
// فبنرجّعه كنسخة نضيفة قبل ما نرد بيها.
async function cleanResponse(res) {
  if (!res || !res.redirected) return res;
  const body = await res.blob();
  return new Response(body, {
    status: res.status,
    statusText: res.statusText,
    headers: res.headers,
  });
}

// صفحة بديلة تظهر جوه الـ iframe لو مفيش نت (بدل ما المنصة كلها تتفتح جواه)
function offlineFramePage() {
  return new Response(
    '<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>' +
      '<body style="font-family:system-ui,sans-serif;text-align:center;padding:32px 16px;color:#64748b">' +
      "<p>📴 مفيش اتصال بالإنترنت، والصفحة دي لسه ماتفتحتش على جهازك.</p></body></html>",
    {
      status: 503,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    },
  );
}

async function networkFirst(request, isPage) {
  const cache = await caches.open(CACHE);
  const url = new URL(request.url);
  // قلم PDF بيتفتح بـ query مختلفة لكل ملف → نخزنه تحت مفتاح واحد
  const isAnnotator = url.pathname.endsWith("/pdf-annotator.html");
  // صفحة المنصة نفسها (/ أو /index.html) بتتفتح بـ query كتير (?subject=..&lecture=..&_swu=..)
  // وكلها نفس الملف → مفتاح واحد بدل ما الكاش يتملي نسخ منه
  const isAppPage =
    isPage && (url.pathname === "/" || url.pathname.endsWith("/index.html"));
  const key = isAnnotator ? ANNOTATOR_KEY : isAppPage ? "./" : request;
  try {
    // الصفحات: دايمًا نسأل السيرفر (ETag) بدل ما نعتمد على HTTP cache
    const response = await fetch(request, isPage ? { cache: "no-cache" } : undefined);
    if (response && response.status === 200) cache.put(key, response.clone());
    return response;
  } catch (err) {
    const hit = await cache.match(key);
    if (hit) return cleanResponse(hit);
    // iframe: ما نرجّعش index.html (ده اللي كان بيفتح المنصة جوه المنصة)
    if (request.destination === "iframe") return offlineFramePage();
    if (isPage) {
      const page =
        (await cache.match("./")) || (await cache.match("./index.html"));
      if (page) return cleanResponse(page);
    }
    return new Response(
      "📴 مفيش اتصال بالإنترنت، والصفحة دي لسه ماتفتحتش على جهازك — ممكن تفتحها تاني لما النت يرجع",
      {
        status: 503,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      },
    );
  }
}

/* ==========================================================
   ★ شبكة خاصة بـ pwa.js:
   - بتتخطى الـ HTTP cache بالكامل (cache: 'no-store' + query عشوائي).
   - بتحل مشكلة "الموقع مش بيعرض التحديث": Vercel كان بيخدم
     pwa.js من HTTP cache (max-age=3600)، فالـ SW كان بيعيد
     تخزين النسخة القديمة. دلوقتي بنجيب نسخة نضيفة كل مرة.
   - بنخزن تحت cleanUrl (بدون query) عشان الأوفلاين يشتغل.
   ========================================================== */
async function networkFirstPwa(request) {
  const cache = await caches.open(CACHE);
  const urlObj = new URL(request.url);
  const cleanUrl = urlObj.origin + urlObj.pathname;

  try {
    const freshUrl = cleanUrl + "?_t=" + Date.now();
    const raw = await fetch(freshUrl, {
      cache: "no-store",
      credentials: "same-origin",
    });

    if (raw && raw.status === 200) {
      const clean = await cleanResponse(raw);
      try {
        await cache.put(cleanUrl, clean.clone());
      } catch (e) {
        // لو فشل التخزين (نادر) — منمنعش الرد
      }
      return clean;
    }
    return raw;
  } catch (err) {
    const hit = await cache.match(cleanUrl);
    if (hit) return cleanResponse(hit);
    return new Response("📴 pwa.js مش متاح — تأكد من الاتصال", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
}

// revalidate=true (ملفات الموقع نفسه): التحديث في الخلفية لازم يسأل السيرفر (ETag)
// مش HTTP cache — وإلا ملفات المواد (datenew/*.js) ممكن تفضل قديمة لحد ساعة بعد الـ deploy
async function staleWhileRevalidate(request, revalidate) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  const network = fetch(request, revalidate ? { cache: "no-cache" } : undefined)
    .then((response) => {
      if (response && (response.status === 200 || response.type === "opaque")) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);
  return cached || (await network) || new Response("", { status: 504 });
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  if (request.headers.has("range")) return; // ملفات PDF/فيديو بتيجي أجزاء

  const url = new URL(request.url);

  if (url.origin === self.location.origin) {
    // insights بتتجاوز الكاش
    if (url.pathname.startsWith("/_vercel/")) return;

    if (request.mode === "navigate") {
      event.respondWith(networkFirst(request, true));
    } else if (url.pathname.endsWith("/pwa.js")) {
      // ★ pwa.js: نجيب نسخة نضيفة كل مرة (بدون HTTP cache)
      event.respondWith(networkFirstPwa(request));
    } else if (url.pathname.endsWith("/app.js") || url.pathname.startsWith("/api/")) {
      // app.js و api — networkFirst عادي (app.js عنده max-age=0, must-revalidate)
      event.respondWith(networkFirst(request, false));
    } else {
      event.respondWith(staleWhileRevalidate(request, true));
    }
    return;
  }

  if (CDN_HOSTS.includes(url.hostname)) {
    event.respondWith(staleWhileRevalidate(request));
  }
  // Google Drive وأي حاجة تانية بتعدي من غير تدخل
});
