/* pwa.js — تسجيل الـ Service Worker + زرار التثبيت (في الهيدر فقط) + إشعار التحديث */
(function () {
  "use strict";

  /* ---------- ستايل الزرار والتوست ---------- */
  var style = document.createElement("style");
  style.textContent =
    ".pwa-hdr-install{width:auto!important;padding:0 14px;border-radius:999px!important;gap:6px;font-family:inherit;font-size:13px!important;font-weight:700;white-space:nowrap}" +
    ".pwa-hdr-install[hidden]{display:none!important}" +
    "@media(max-width:640px){.pwa-hdr-install{padding:0 10px}.pwa-hdr-install .lbl{display:none}}" +
    ".pwa-ios{position:fixed;left:50%;bottom:calc(60px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);z-index:4000;" +
    "max-width:calc(100% - 32px);padding:12px 18px;border-radius:14px;background:var(--bg-header,#161b22);color:#fff;font-size:13px;" +
    "line-height:1.8;text-align:center;direction:rtl;box-shadow:0 6px 20px rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.12)}" +
    ".pwa-ios button{margin-top:8px;background:rgba(255,255,255,.2);border:0;color:#fff;padding:6px 14px;border-radius:20px;font:inherit;font-weight:700;cursor:pointer}" +
    ".pwa-toast{position:fixed;left:50%;bottom:calc(96px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);" +
    "z-index:10000;display:flex;align-items:center;gap:12px;max-width:calc(100% - 32px);padding:12px 16px;" +
    "border-radius:14px;background:#161b22;color:#fff;font-family:inherit;font-size:14px;" +
    "box-shadow:0 8px 28px rgba(0,0,0,.45);border:1px solid rgba(255,255,255,.12)}" +
    ".pwa-toast button{border:0;border-radius:10px;padding:8px 14px;cursor:pointer;font-family:inherit;font-weight:700;" +
    "background:#3498db;color:#fff}" +
    ".pwa-toast .pwa-close{background:transparent;color:#94a3b8;padding:4px 8px}";
  document.head.appendChild(style);

  function toast(message, actionLabel, onAction) {
    var el = document.createElement("div");
    el.className = "pwa-toast";
    el.setAttribute("role", "status");
    var text = document.createElement("span");
    text.textContent = message;
    el.appendChild(text);
    if (actionLabel) {
      var action = document.createElement("button");
      action.type = "button";
      action.textContent = actionLabel;
      action.addEventListener("click", function () {
        el.remove();
        if (onAction) onAction();
      });
      el.appendChild(action);
    }
    var close = document.createElement("button");
    close.type = "button";
    close.className = "pwa-close";
    close.setAttribute("aria-label", "إغلاق");
    close.textContent = "✕";
    close.addEventListener("click", function () {
      el.remove();
    });
    document.body.appendChild(el);
    return el;
  }

  /* ==========================================================
     Service Worker + التحديث
     • الـ SW الجديد بيستنى (مفيش skipWaiting في install) لحد ما الصفحة تطلب تفعيله.
     • فتح جديد من غير أي لمس من المستخدم → تحديث تلقائي:
         - تطبيق مثبّت (PWA) على الموبايل أو الكمبيوتر: خلال دقيقتين من الفتح.
         - متصفح عادي: خلال 30 ثانية من الفتح.
     • غير كده (المستخدم شغّال / التطبيق رجع من الخلفية) → توست فيه زرار "تحديث".
     • الـ reload بيتم بـ ?_swu=... عشان يتخطى أي كاش، والـ param بيتشال من الـ URL بعد التحميل.
     • حارس ضد اللوب: مفيش تحديث تلقائي تاني خلال دقيقة من آخر واحد.
     ========================================================== */
  var isStandalone =
    (window.matchMedia &&
      window.matchMedia("(display-mode: standalone)").matches) ||
    window.navigator.standalone === true;

  // شيل ?_swu=... من الـ URL (بيتضاف وقت الـ reload بس)
  try {
    if (/[?&]_swu=/.test(location.search) && window.history && history.replaceState) {
      var cleanU = new URL(location.href);
      cleanU.searchParams.delete("_swu");
      history.replaceState(
        history.state,
        "",
        cleanU.pathname + cleanU.search + cleanU.hash,
      );
    }
  } catch (e) {}

  if ("serviceWorker" in navigator) {
    var hadController = !!navigator.serviceWorker.controller;
    var registration = null;
    var updateRequested = false;
    var controllerChanged = false;
    var reloading = false;
    var userInteracted = false;
    var pageStartAt = Date.now();
    var graceUntil = pageStartAt + 2500; // تجاهل لمسة إطلاق التطبيق
    var QUIET_MS = isStandalone ? 120000 : 30000;
    var lastCheckAt = 0;
    var offered = new WeakSet(); // منع عرض نفس الـ worker مرتين
    var pendingWorker = null; // أحدث worker مستني (الزرار بيستخدمه)
    var updateToastEl = null;
    var AUTO_KEY = "swu_auto_at";

    function markInteraction(e) {
      if (!e || !e.isTrusted) return;
      if (Date.now() < graceUntil) return;
      userInteracted = true;
    }
    ["pointerdown", "click", "touchstart", "keydown", "wheel"].forEach(
      function (ev) {
        document.addEventListener(ev, markInteraction, { passive: true });
      },
    );

    // حارس اللوب: لو حصل تحديث تلقائي من أقل من دقيقة → ما نكررش
    function canAutoReload() {
      try {
        var t = parseInt(sessionStorage.getItem(AUTO_KEY) || "0", 10);
        return !(t && Date.now() - t < 60000);
      } catch (e) {
        return true;
      }
    }
    function markAutoReload() {
      try {
        sessionStorage.setItem(AUTO_KEY, String(Date.now()));
      } catch (e) {}
    }

    function shouldAutoApply() {
      return (
        !userInteracted &&
        Date.now() - pageStartAt < QUIET_MS &&
        canAutoReload()
      );
    }

    // reload مع cache-busting
    function hardReload() {
      if (reloading) return;
      reloading = true;
      try {
        var u = new URL(location.href);
        u.searchParams.set("_swu", String(Date.now()));
        location.replace(u.toString());
      } catch (e) {
        try {
          location.reload();
        } catch (e2) {}
      }
    }

    function applyUpdate(worker, isAuto) {
      if (updateRequested) return;
      updateRequested = true;
      if (isAuto) markAutoReload();

      // لو في worker أحدث مستني، استخدمه بدل القديم
      var w = (registration && registration.waiting) || worker;

      if (
        controllerChanged ||
        !w ||
        w.state === "activated" ||
        w.state === "redundant"
      ) {
        hardReload();
        return;
      }

      try {
        w.postMessage({ type: "SKIP_WAITING" });
      } catch (e) {}

      // شبكة أمان: لو الـ controllerchange اتأخر أكتر من 5 ثواني
      setTimeout(hardReload, 5000);
    }

    function offerUpdate(worker) {
      if (!worker) return;
      pendingWorker = worker;
      if (offered.has(worker)) return;
      offered.add(worker);

      if (shouldAutoApply()) {
        applyUpdate(worker, true);
        return;
      }

      // ما نعرضش أكتر من توست تحديث واحد في نفس الوقت
      if (updateToastEl && updateToastEl.parentNode) return;

      updateToastEl = toast("🔄 فيه تحديث جديد للموقع", "تحديث", function () {
        updateToastEl = null;
        applyUpdate(pendingWorker, false);
      });
    }

    function watchWorker(worker) {
      if (!worker) return;

      // الـ worker ممكن يكون جاهز (installed = waiting) دلوقتي
      if (worker.state === "installed" && navigator.serviceWorker.controller) {
        offerUpdate(worker);
        return;
      }

      worker.addEventListener("statechange", function () {
        if (
          worker.state === "installed" &&
          navigator.serviceWorker.controller
        ) {
          offerUpdate(worker);
        }
      });
    }

    function checkWaiting(reg) {
      if (!reg) return;
      if (!navigator.serviceWorker.controller) return;
      if (reg.waiting) watchWorker(reg.waiting);
      if (reg.installing) watchWorker(reg.installing);
    }

    function forceUpdateCheck(force) {
      if (!registration) return;
      var now = Date.now();
      if (!force && now - lastCheckAt < 15000) {
        checkWaiting(registration);
        return;
      }
      lastCheckAt = now;
      try {
        var p = registration.update();
        if (p && typeof p.catch === "function") p.catch(function () {});
      } catch (e) {}
      checkWaiting(registration);
    }

    function registerSW() {
      navigator.serviceWorker
        .register("./sw.js", { updateViaCache: "none" })
        .then(function (reg) {
          registration = reg;

          // تحديث اتنزّل قبل ما pwa.js يشتغل (موجود في reg.waiting)
          checkWaiting(reg);

          // تحديثات مستقبلية
          reg.addEventListener("updatefound", function () {
            if (reg.installing) watchWorker(reg.installing);
          });

          if (navigator.serviceWorker.controller) forceUpdateCheck(true);

          setInterval(function () {
            if (!document.hidden) forceUpdateCheck(false);
          }, 60 * 1000);
        })
        .catch(function (err) {
          console.error("SW registration failed:", err);
        });
    }

    if (document.readyState === "complete") registerSW();
    else window.addEventListener("load", registerSW);

    // التطبيق/التاب رجع ظاهر، أو رجع النت، أو رجع من bfcache
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) forceUpdateCheck(false);
    });
    window.addEventListener("focus", function () {
      forceUpdateCheck(false);
    });
    window.addEventListener("online", function () {
      forceUpdateCheck(true);
    });
    window.addEventListener("pageshow", function (e) {
      if (e && e.persisted) forceUpdateCheck(true);
    });

    navigator.serviceWorker.addEventListener("controllerchange", function () {
      if (!hadController) {
        hadController = true; // أول تثبيت: مفيش حاجة تتحدّث
        return;
      }
      controllerChanged = true;
      if (updateRequested) hardReload();
    });
  }

  /* ---------- زرار "ثبّت التطبيق" (في الـ header فقط) ---------- */
  var INSTALLED_KEY = "pwa_installed_v1";
  var IOS_KEY = "ios_install_hint_dismissed";

  function lsGet(k) {
    try {
      return localStorage.getItem(k);
    } catch (e) {
      return null;
    }
  }
  function lsSet(k, v) {
    try {
      localStorage.setItem(k, v);
    } catch (e) {}
  }

  function say(msg) {
    if (typeof window.showToast === "function") window.showToast(msg);
    else {
      var t = toast(msg, null, null);
      setTimeout(function () {
        if (t.parentNode) t.remove();
      }, 2600);
    }
  }

  var isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
  var deferredPrompt = null;
  var btn = null;

  function ensureBtn() {
    if (btn) return btn;
    var wrap = document.querySelector(".hdr-tools");
    if (!wrap) return null;
    btn = document.createElement("button");
    btn.id = "installBtn";
    btn.type = "button";
    btn.className = "hdr-icon-btn pwa-hdr-install";
    btn.title = "تثبيت التطبيق على جهازك";
    btn.setAttribute("aria-label", "ثبّت التطبيق");
    btn.innerHTML = '📲<span class="lbl">ثبّت التطبيق</span>';
    btn.hidden = true;
    btn.addEventListener("click", doInstall);
    wrap.insertBefore(btn, wrap.firstChild);
    return btn;
  }
  function showBtn() {
    if (isStandalone || lsGet(INSTALLED_KEY) === "1") return;
    var b = ensureBtn();
    if (b) b.hidden = false;
  }
  function hideBtn() {
    if (btn) btn.hidden = true;
  }

  function doInstall() {
    if (!deferredPrompt) {
      var t = toast(
        "📲 من قائمة المتصفح ⋮ هتلاقي «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية»",
        null,
        null,
      );
      setTimeout(function () {
        if (t.parentNode) t.remove();
      }, 9000);
      return;
    }
    var p = deferredPrompt;
    deferredPrompt = null;
    window.__bip = null;
    hideBtn();
    p.prompt();
    p.userChoice
      .then(function (c) {
        if (c && c.outcome === "accepted") {
          lsSet(INSTALLED_KEY, "1");
          say("✅ تم تثبيت التطبيق بنجاح 🎉");
        } else {
          say("↩ اتلغى التثبيت");
        }
      })
      .catch(function () {});
  }

  function onBIP(e) {
    e.preventDefault();
    deferredPrompt = e;
    showBtn();
  }

  function showIOSHint() {
    if (lsGet(IOS_KEY) === "1") return;
    var box = document.createElement("div");
    box.className = "pwa-ios";
    box.setAttribute("role", "status");
    box.innerHTML =
      "📲 لتثبيت التطبيق على الآيفون:<br>من زر المشاركة <b>⬆️</b> هتلاقي <b>«إضافة إلى الشاشة الرئيسية»</b><br>";
    var ok = document.createElement("button");
    ok.type = "button";
    ok.textContent = "فهمت ✓";
    ok.addEventListener("click", function () {
      box.remove();
      lsSet(IOS_KEY, "1");
    });
    box.appendChild(ok);
    document.body.appendChild(box);
  }

  if (!isStandalone && lsGet(INSTALLED_KEY) !== "1") {
    window.addEventListener("beforeinstallprompt", onBIP);
    if (window.__bip) onBIP(window.__bip);
    if (isIOS) setTimeout(showIOSHint, 1000);
    else if (/android/i.test(navigator.userAgent)) {
      setTimeout(function () {
        if (!deferredPrompt) showBtn();
      }, 3000);
    }
  }

  window.addEventListener("appinstalled", function () {
    deferredPrompt = null;
    window.__bip = null;
    lsSet(INSTALLED_KEY, "1");
    hideBtn();
  });

  /* ---------- theme-color يتغير مع الثيم ---------- */
  function syncThemeColor() {
    if (!document.body) return;
    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    var bg = getComputedStyle(document.body).backgroundColor;
    if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent")
      meta.setAttribute("content", bg);
  }
  syncThemeColor();
  var opts = {
    attributes: true,
    attributeFilter: ["class", "data-theme", "style"],
  };
  new MutationObserver(syncThemeColor).observe(document.documentElement, opts);
  new MutationObserver(syncThemeColor).observe(document.body, opts);
})();
