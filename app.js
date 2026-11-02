var DEPT_KEY="dept_v1";function findDept(e){if("undefined"==typeof DEPARTMENTS||!e)return null;for(var t=0;t<DEPARTMENTS.length;t++)if(DEPARTMENTS[t].id===e&&!1!==DEPARTMENTS[t].active)return DEPARTMENTS[t];return null}function __resolveCurDept(){try{var e=new URLSearchParams(location.search).get("dept");if(e&&findDept(e))return localStorage.setItem(DEPT_KEY,e),e;var t=localStorage.getItem(DEPT_KEY);if(t&&findDept(t))return t}catch(e){}return null}var CUR_DEPT=__resolveCurDept(),DATA_TRIES=3,DATA_TIMEOUTS=[6e3,8e3,1e4],WEAK_NET=!1;function __wait(e){return new Promise(function(t){setTimeout(t,e)})}function __maxTries(){return!1===navigator.onLine?1:DATA_TRIES}function __netGet(e,t,n){return new Promise(function(a,r){var i=window.AbortController?new AbortController:null,s=!1,o=setTimeout(function(){if(!s){s=!0;try{i&&i.abort()}catch(e){}r(new Error("timeout"))}},n),c={};for(var d in t||{})c[d]=t[d];i&&(c.signal=i.signal),fetch(e,c).then(function(e){return e.text().then(function(t){return{status:e.status,ok:e.ok,text:t}})}).then(function(e){s||(s=!0,clearTimeout(o),a(e))}).catch(function(e){s||(s=!0,clearTimeout(o),r(e))})})}function __cacheMatch(e){try{if(window.caches)return caches.match(e,{ignoreSearch:!0}).catch(function(){})}catch(e){}return Promise.resolve(void 0)}function __notifyRetry(e,t){try{for(var n=document.querySelectorAll(".loader-text"),a=0;a<n.length;a++)n[a].textContent="📶 النت ضعيف… بنحاول تاني ("+e+"/"+t+")"}catch(e){}}function __enterWeakNetMode(){if(!WEAK_NET){WEAK_NET=!0;try{if(!document.body||document.getElementById("weaknet-bar"))return;var e=document.createElement("div");e.id="weaknet-bar",e.setAttribute("role","status"),e.style.cssText="position:fixed;left:8px;right:8px;bottom:8px;z-index:99999;background:#111;color:#fff;padding:10px 14px;border-radius:12px;font-size:14px;line-height:1.5;display:flex;gap:10px;align-items:center;justify-content:space-between;box-shadow:0 4px 16px rgba(0,0,0,.35);direction:rtl";var t=document.createElement("span");t.textContent="📴 النت ضعيف — فتحنا النسخة المحفوظة على جهازك";var n=document.createElement("button");n.type="button",n.textContent="🔄 إعادة المحاولة",n.style.cssText="background:#fff;color:#111;border:0;border-radius:8px;padding:6px 12px;font-weight:bold;cursor:pointer;white-space:nowrap",n.onclick=function(){location.reload()},e.appendChild(t),e.appendChild(n),document.body.appendChild(e)}catch(e){}}}function userErrMsg(e){return e&&e.weakNet?e.message:"تعذّر تحميل المحتوى — ممكن تتأكد من اتصالك بالنت وتجرّب تاني."}function __scriptTag(e){return new Promise(function(t,n){var a=document.createElement("script");a.src=e,a.async=!0,a.onload=function(){t()},a.onerror=function(){a.parentNode&&a.parentNode.removeChild(a),n(new Error("load"))},document.head.appendChild(a)})}function __scriptFromCache(e){return __cacheMatch(e).then(function(e){if(!e)throw new Error("nocache");return e.text()}).then(function(e){var t=document.createElement("script");t.text=e,document.head.appendChild(t),t.parentNode&&t.parentNode.removeChild(t)})}function loadDataScript(e){var t=0,n=__maxTries();return function a(){var r=DATA_TIMEOUTS[Math.min(t,DATA_TIMEOUTS.length-1)];return t++,__netGet(e,null,r).then(function(t){if(!t.ok)throw new Error("HTTP "+t.status);return __scriptTag(e)}).catch(function(e){if(t<n)return __notifyRetry(t+1,n),__wait(800*t).then(a);throw e})}().catch(function(){return __scriptFromCache(e).then(function(){__enterWeakNetMode()})}).catch(function(){var e=new Error("📴 النت ضعيف ومفيش نسخة محفوظة من الملف ده على جهازك — ممكن تجرّب تاني لما النت يتحسن");throw e.weakNet=!0,e})}function loadJSONResilient(e,t){var n=0,a=__maxTries();return function r(){var i=DATA_TIMEOUTS[Math.min(n,DATA_TIMEOUTS.length-1)];return n++,__netGet(e,t,i).then(function(e){if(404===e.status)return e;if(!e.ok)throw new Error("HTTP "+e.status);return e}).catch(function(e){if(n<a)return __wait(800*n).then(r);throw e})}().catch(function(t){return __cacheMatch(e).then(function(e){if(!e)throw t;return e.text().then(function(e){return __enterWeakNetMode(),{status:200,ok:!0,text:e}})})})}function loadDeptIndex(e){return new Promise(function(t,n){var a=findDept(e);a?loadDataScript(a.index).then(function(){t(a)}).catch(n):n(new Error("قسم غير معروف"))})}function switchDept(e){if(findDept(e)){try{localStorage.setItem(DEPT_KEY,e)}catch(e){}location.href=location.pathname}}function deptBtnHtml(){var e=findDept(CUR_DEPT);return e?'<div class="dept-head"><span class="dept-head-ic">'+(e.icon||"🎓")+'</span><span class="dept-head-nm">'+esc(e.name)+'</span></div><button class="subj-btn dept-btn" onclick="showDeptPicker(true)" title="تغيير القسم" aria-label="تغيير القسم"><span>⇄</span><span>تغيير القسم</span></button>':""}function showDeptPicker(e){
  var n=document.getElementById("dept-picker");
  if(!n){
    /* fallback لو index.html قديم في الكاش ومفيهوش الـ picker الثابت */
    n=document.createElement("div");
    n.id="dept-picker";
    n.className="dept-picker";
    n.setAttribute("role","dialog");
    n.setAttribute("aria-modal","true");
    n.setAttribute("aria-labelledby","dept-title");
    n.innerHTML='<div class="dept-box"><h2 id="dept-title">🎓 اختار القسم بتاعك</h2><p>هيتحفظ اختيارك، ومحتوى القسم بس هو اللي هيتحمّل.</p><div class="dept-grid" id="dept-grid"></div><button type="button" class="dept-close" id="dept-close-btn" hidden>✖ إغلاق</button></div>';
    document.body.appendChild(n);
  }
  var g=document.getElementById("dept-grid"),c=document.getElementById("dept-close-btn");
  if(!g)return;
  function hide(){
    n.classList.remove("on");
    document.documentElement.classList.remove("no-dept");
    n.style.display="none";
  }
  n.style.display="";
  n.classList.add("on");
  g.innerHTML="";
  ("undefined"==typeof DEPARTMENTS?[]:DEPARTMENTS).forEach(function(d){
    if(!1===d.active)return;
    var b=document.createElement("button");
    b.type="button";
    b.className="dept-card"+(d.id===CUR_DEPT?" on":"");
    var ic=document.createElement("span");ic.className="dept-ic";ic.textContent=d.icon||"🎓";
    var tt=document.createElement("span");tt.className="dept-tt";tt.textContent=d.name;
    var en=document.createElement("small");en.textContent=d.en||"";
    b.appendChild(ic);b.appendChild(tt);b.appendChild(en);
    b.onclick=function(){d.id===CUR_DEPT?hide():switchDept(d.id)};
    g.appendChild(b);
  });
  if(c){
    if(e){c.hidden=!1;c.onclick=hide;n.onclick=function(ev){ev.target===n&&hide()};}
    else{c.hidden=!0;c.onclick=null;n.onclick=null;}
  }
}function lecSlug(e){return e?String(e).toLowerCase().trim().replace(/[\u064B-\u0652]/g,"").replace(/[\s\u200f\u200e]+/g,"-").replace(/[^\w\u0600-\u06FF-]+/g,"").replace(/-+/g,"-").replace(/^-|-$/g,""):""}function ensureSubjectSlug(e,t){if(e&&!e.slug){var n=e.en||e.name||"subject-"+t;e.slug=String(n).toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9\-]/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")||"subject-"+t}return e&&e.slug}function ensureLectureIds(e){e&&e.lectures&&e.lectures.forEach(function(e,t){e.id||(e.id=lecSlug(e.t)||"lecture-"+(t+1))})}function normalizeSubject(e){e.lectures||(e.lectures=[]),e.lectures.forEach(function(e){e.links||(e.links=[{t:"🎥 تسجيل فيديو المحاضرة",d:"مشاهدة تسجيل المحاضرة كاملاً",url:""},{t:"📑 سلايدات المحاضرة (Slides)",d:"تحميل عرض الشرائح الخاص بالمحاضرة",url:""},{t:"🌐 مصادر ومراجع خارجية",d:"روابط إضافية للقراءة والاستزادة",url:""}])}),e.midterms||(e.midterms=[]),e.finals||(e.finals=[]),e.midtermsCategories&&e.midtermsCategories.length&&flattenExamCategories(e,"midtermsCategories","midterms"),e.finalsCategories&&e.finalsCategories.length&&flattenExamCategories(e,"finalsCategories","finals"),e.testBanks&&e.testBanks.length||(e.testBanks=[{t:"بنك أسئلة المادة",d:"جميع أسئلة المحاضرات في اختبار واحد",lectures:[0,1,2,3]}]),e.linkCategories||(e.linkCategories=[]),ensureLectureIds(e)}function flattenExamCategories(e,t,n){var a=e[t]||[],r=[],i=[];a.forEach(function(e){(e.items||[]).forEach(function(t){r.push(t),i.push({category:e.category||"عام",icon:e.icon||"📁"})})}),e[n]=r,e["_"+n+"Groups"]=i}window.addEventListener("online",function(){WEAK_NET=!1;var e=document.getElementById("weaknet-bar");e&&e.parentNode&&e.parentNode.removeChild(e)});var _loadingPromises={};function loadSubject(e){var t=SUBJECTS_INDEX[e];if(!t)return Promise.reject(new Error("مادة غير موجودة"));if(subjects[e])return Promise.resolve(subjects[e]);if(_loadingPromises[t.slug])return _loadingPromises[t.slug];var n=subjects.length,a=loadDataScript(t.file).then(function(){var t=subjects.length-n,a=null;if(1===t?a=subjects.pop():t>1&&(a=subjects.splice(n,t)[0]),!a)throw new Error("الملف ما أضافش بيانات للمادة");return subjects[e]=a,normalizeSubject(a),ensureSubjectSlug(SUBJECTS_INDEX[e],e),a});return _loadingPromises[t.slug]=a,a.finally(function(){delete _loadingPromises[t.slug]}),a}function getActiveSubjects(){for(var e=[],t=0;t<SUBJECTS_INDEX.length;t++)!1!==SUBJECTS_INDEX[t].active&&e.push(t);return e}function showSubjectLoading(){var e=document.getElementById("lectures-list");e&&(e.innerHTML='<div class="subject-loader"><div class="spinner-ring"></div><div class="loader-text">⏳ جاري تحميل بيانات المادة...</div></div>')}var themeMode=localStorage.getItem("themeMode")||"auto";"light"===themeMode&&(themeMode="noon"),"dark"===themeMode&&(themeMode="night");try{localStorage.setItem("themeMode",themeMode)}catch(e){}var demoInterval=null,isDemoRunning=!1,themeNames={morning:"🌅 Morning",noon:"☀️ Noon",afternoon:"🌇 Afternoon",night:"🌙 Night"};function setThemeMode(e){themeMode=e,localStorage.setItem("themeMode",e),updateThemeUI(),applyTimeTheme()}function updateThemeUI(){document.querySelectorAll(".theme-pill").forEach(function(e){e.classList.toggle("active",e.getAttribute("data-mode")===themeMode)});var e=document.getElementById("theme-controls");"auto"===themeMode?e.classList.add("auto-visible"):e.classList.remove("auto-visible")}function getAutoTheme(e){return e>=6&&e<12?"morning":e>=12&&e<15?"noon":e>=15&&e<18?"afternoon":"night"}function applyTheme(e){document.documentElement.setAttribute("data-theme",e)}function applyTimeTheme(){applyTheme("auto"===themeMode?getAutoTheme((new Date).getHours()):themeMode),updateStatusBar()}function formatTime(e){var t=e.getHours(),n=e.getMinutes(),a=e.getSeconds(),r=t>=12?"PM":"AM";return(t%12||12)+":"+String(n).padStart(2,"0")+":"+String(a).padStart(2,"0")+" "+r}function updateStatusBar(){var e=document.getElementById("sb-theme"),t=document.documentElement.getAttribute("data-theme")||"noon";e&&(e.textContent=themeNames[t]||t)}function runDemo(){if(!isDemoRunning){isDemoRunning=!0;var e=document.getElementById("demo-btn");e.textContent="⏸ Running...",e.style.animation="none";var t=["morning","noon","afternoon","night"],n=0;applyTheme(t[0]),updateStatusBar(),demoInterval=setInterval(function(){if(++n>=t.length)return clearInterval(demoInterval),isDemoRunning=!1,e.textContent="▶ Run 24h Demo",e.style.animation="",void applyTimeTheme();applyTheme(t[n]),updateStatusBar()},2500)}}!function(){if(-1===["noon","night","auto"].indexOf(themeMode)){themeMode="auto";try{localStorage.setItem("themeMode","auto")}catch(e){}}updateThemeUI(),applyTimeTheme()}(),setInterval(function(){isDemoRunning||"auto"!==themeMode||document.hidden||document.documentElement.getAttribute("data-theme")!==getAutoTheme((new Date).getHours())&&applyTimeTheme()},3e4),document.addEventListener("visibilitychange",function(){document.hidden||isDemoRunning||"auto"!==themeMode||applyTimeTheme()});var sttBtn=document.getElementById("scroll-to-top");function scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",function(){sttBtn.classList.toggle("visible",window.scrollY>350)});var notifications=[],notifSeq=0,DEPT_ALIASES={ai:["ai","ذكاء اصطناعي","ذكاء","الذكاء الاصطناعي"],cs:["cs","علوم حاسب","علوم الحاسب","علوم حاسب آلي"],is:["is","نظم معلومات","نظم المعلومات"],se:["se","هندسة برمجيات","هندسة البرمجيات"]};function normDeptToken(e){if(!(e=String(e||"").trim().toLowerCase()))return"";if("all"===e||"الكل"===e||"عام"===e)return"all";for(var t in DEPT_ALIASES)if(-1!==DEPT_ALIASES[t].indexOf(e))return t;return e}function normalizeDepts(e){if(null==e||""===e)return null;for(var t=Array.isArray(e)?e:[e],n=[],a=0;a<t.length;a++){var r=normDeptToken(t[a]);if("all"===r)return null;r&&-1===n.indexOf(r)&&n.push(r)}return(n=n.slice(0,4)).length?n:null}function notifVisible(e){return!e.depts||!e.depts.length||!!CUR_DEPT&&-1!==e.depts.indexOf(CUR_DEPT)}function visibleNotifications(){return notifications.filter(notifVisible)}var answerEditsLog=[],lecturesAddedLog=[{id:"lec-cg-4",subject:"الرسم بالحاسب",lectureTitle:"المحاضرة 4",lectureDesc:"",depts:["cs","ai","is"],effective_to:"2026-10-30"},{id:"lec-alg-5",subject:"تحليل وتصميم الخوارزميات",lectureTitle:"المحاضرة 5",lectureDesc:"",depts:["ai","se"],effective_to:"2026-10-30"},{id:"lec-swe-4",subject:"هندسة البرمجيات",lectureTitle:"المحاضرة 4",lectureDesc:"",depts:"all",effective_to:"2026-10-30"},{id:"lec-ml-4",subject:"تعلم الالة",lectureTitle:"المحاضرة 4",lectureDesc:"",depts:"ai",effective_to:"2026-10-30"},{id:"lec-nn-1",subject:"الشبكات العصبية",lectureTitle:"المحاضرة 1",lectureDesc:"",depts:"ai",effective_to:"2026-10-30"},{id:"lec-hci-5",subject:"تفاعل الانسان والحاسب",lectureTitle:"المحاضرة 5",lectureDesc:"",depts:"ai",effective_to:"2026-10-30"},{id:"lec-cc-4",subject:"التدريب الميداني",lectureTitle:"المحاضرة 4",lectureDesc:"",depts:"all",effective_to:"2026-10-30"},{id:"lec-vp-5",subject:"البرمجة المرئية",lectureTitle:"المحاضرة 5",lectureDesc:"",depts:["cs","is","se"],effective_to:"2026-10-30"},{id:"lec-cn-6",subject:"شبكات الحاسب",lectureTitle:"المحاضرة 6",lectureDesc:"",depts:["cs","is","se"],effective_to:"2026-10-30"},{id:"lec-os-3",subject:"نظم التشغيل",lectureTitle:"المحاضرة 3",lectureDesc:"",depts:["cs","se"],effective_to:"2026-10-30"}],announcementsLog=[];function loadNotifications(){try{var e=localStorage.getItem("notifications_data");e&&(notifications=JSON.parse(e))}catch(e){notifications=[]}}function saveNotifications(){try{localStorage.setItem("notifications_data",JSON.stringify(notifications))}catch(e){}}function addNotification(e){e.id=Date.now()+ ++notifSeq,e.read=!1,e.time=formatTime(new Date),e.date=(new Date).toLocaleDateString("ar-EG"),e.type||(e.type="info"),e.depts=normalizeDepts(e.depts),e.depts||delete e.depts,notifications.unshift(e),notifications.length>50&&(notifications=notifications.slice(0,50)),saveNotifications(),updateNotifBadge(),renderNotifDropdown()}function addAuditLog(e){addNotification({type:"audit",title:"📝 تم تعديل إجابة سؤال",context:e.context,questionNum:e.questionNum,questionText:e.questionText,oldAnswer:e.oldAnswer,newAnswer:e.newAnswer,depts:e.depts})}function addLectureAddedLog(e){addNotification({type:"lecture_added",title:"📚 تمت إضافة محاضرة جديدة",subject:e.subject,lectureTitle:e.lectureTitle,lectureDesc:e.lectureDesc,depts:e.depts})}function addAnnouncementLog(e){addNotification({type:"announcement",title:e.title||"📢 إعلان",message:e.message,depts:e.depts})}function truncateText(e,t){return e?(e=String(e)).length>t?e.substring(0,t)+"...":e:""}function updateNotifBadge(){var e=document.getElementById("notif-badge"),t=visibleNotifications().filter(function(e){return!e.read}).length;t>0?(e.style.display="flex",e.textContent=t>99?"99+":t):e.style.display="none"}function toggleNotifDropdown(){var e=document.getElementById("notif-dropdown");e.classList.toggle("show"),e.classList.contains("show")&&renderNotifDropdown()}function renderNotifDropdown(){var e=document.getElementById("notif-list"),t=visibleNotifications();if(0!==t.length){var n="";t.forEach(function(e){var t=e.read?"":"unread";n+='<div class="notif-item '+t+'" onclick="markNotifRead(event,'+(Number(e.id)||0)+')">',"audit"===e.type?(n+="<strong>"+esc(e.title)+"</strong>",n+='<span class="notif-detail">📁 '+esc(e.context)+" | سؤال #"+esc(e.questionNum)+"</span>",n+='<span class="notif-detail">📝 السؤال: '+esc(truncateText(e.questionText,60))+"</span>",n+='<span class="notif-detail">❌ القديمة: <del>'+esc(e.oldAnswer)+"</del> → ✅ الجديدة: <strong>"+esc(e.newAnswer)+"</strong></span>"):"lecture_added"===e.type?(n+="<strong>"+esc(e.title)+"</strong>",n+='<span class="notif-detail">📁 المادة: '+esc(e.subject)+"</span>",n+='<span class="notif-detail">📚 المحاضرة: '+esc(e.lectureTitle)+"</span>",e.lectureDesc&&(n+='<span class="notif-detail">📝 '+esc(truncateText(e.lectureDesc,60))+"</span>")):"announcement"===e.type?(n+="<strong>"+esc(e.title)+"</strong>",e.message&&(n+='<span class="notif-detail">'+esc(e.message)+"</span>")):(n+="<strong>"+esc(e.title||"إشعار")+"</strong>",e.context&&(n+='<span class="notif-detail">📁 '+esc(e.context)+"</span>"),e.questionText&&(n+='<span class="notif-detail">📝 '+esc(truncateText(e.questionText,60))+"</span>"),void 0!==e.score&&(n+='<span class="notif-detail">🏆 النتيجة: '+esc(e.score)+"%</span>")),n+='<div class="notif-meta">🕐 '+esc(e.time)+" | 📅 "+esc(e.date)+"</div>",n+="</div>"}),e.innerHTML=n}else e.innerHTML='<div class="notif-empty">لا توجد إشعارات حالياً</div>'}function markNotifRead(e,t){e.stopPropagation(),notifications.forEach(function(e){e.id===t&&(e.read=!0)}),saveNotifications(),updateNotifBadge(),renderNotifDropdown()}function clearAllNotifications(e){e.stopPropagation(),notifications=notifications.filter(function(e){return!notifVisible(e)}),saveNotifications(),updateNotifBadge(),renderNotifDropdown()}function syncAnswerEditsLog(){var e=[];try{e=JSON.parse(localStorage.getItem("seen_system_edits")||"[]")}catch(t){e=[]}Array.isArray(e)||(e=[]);var t=!1;if(answerEditsLog.forEach(function(n){-1===e.indexOf(n.id)&&(addAuditLog({context:n.context,questionNum:n.questionNum,questionText:n.questionText,oldAnswer:n.oldAnswer,newAnswer:n.newAnswer,depts:n.depts}),e.push(n.id),t=!0)}),t)try{localStorage.setItem("seen_system_edits",JSON.stringify(e))}catch(e){}}function syncLecturesAddedLog(){var e=[];try{e=JSON.parse(localStorage.getItem("seen_added_lectures")||"[]")}catch(t){e=[]}Array.isArray(e)||(e=[]);var t=!1;if(lecturesAddedLog.forEach(function(n){-1===e.indexOf(n.id)&&(addLectureAddedLog(n),e.push(n.id),t=!0)}),t)try{localStorage.setItem("seen_added_lectures",JSON.stringify(e))}catch(e){}}function syncAnnouncementsLog(){var e=[];try{e=JSON.parse(localStorage.getItem("seen_announcements")||"[]")}catch(t){e=[]}Array.isArray(e)||(e=[]);var t=!1;if(announcementsLog.forEach(function(n){-1===e.indexOf(n.id)&&(addAnnouncementLog(n),e.push(n.id),t=!0)}),t)try{localStorage.setItem("seen_announcements",JSON.stringify(e))}catch(e){}}function esc(e){return String(null==e?"":e).replace(/[&<>"']/g,function(e){return"&"===e?"&amp;":"<"===e?"&lt;":">"===e?"&gt;":'"'===e?"&quot;":"&#39;"})}function escAttr(e){return esc(e)}function showToast(e){var t=document.getElementById("toast");t.textContent=e,t.classList.add("show"),clearTimeout(t._t),t._t=setTimeout(function(){t.classList.remove("show")},2400)}document.addEventListener("click",function(e){var t=document.getElementById("notif-bell-wrap"),n=document.getElementById("notif-dropdown");t&&n&&!t.contains(e.target)&&n.classList.remove("show")});var OPENED_KEY="opened_files_v1",FILE_CACHE="opened-files-v1",_offlinePending={};function isOffline(){return WEAK_NET||"boolean"==typeof navigator.onLine&&!navigator.onLine}function openedSet(){try{return JSON.parse(localStorage.getItem(OPENED_KEY))||{}}catch(e){return{}}}function wasOpened(e){return!!openedSet()[e]}function markOpened(e){var t=openedSet(),n=Object.keys(t);if(!t[e]){n.length>=300&&delete t[n[0]],t[e]=1;try{localStorage.setItem(OPENED_KEY,JSON.stringify(t))}catch(e){}}}function fileCachePut(e,t){try{window.caches&&caches.open(FILE_CACHE).then(function(n){return n.put(e,t)}).catch(function(){})}catch(e){}}function fileCacheGet(e){try{if(window.caches)return caches.match(e,{cacheName:FILE_CACHE}).catch(function(){})}catch(e){}return Promise.resolve(void 0)}function offlineNoteHTML(e,t){return'<div class="offline-note" role="status"><b>📴 الملف ده مش محمّل</b><p>'+(pdfViewerUrl(e)?"مفيش إنترنت دلوقتي، والملف ده لسه ماتفتحش قبل كده على جهازك. افتحه مرة وإنت متصل بالإنترنت علشان يتحفظ ويفتح بعد كده من غير نت.":"مفيش إنترنت دلوقتي، والملف ده على رابط خارجي ومحتاج إنترنت علشان يفتح.")+"</p>"+(t?'<button type="button" class="btn-sm" onclick="retryAttach(\''+t+"')\">🔄 إعادة المحاولة</button>":"")+"</div>"}function replaceWithNote(e,t){var n=e.closest&&e.closest(".pdf-viewer")||e.parentNode;if(n&&n.parentNode){var a=document.createElement("div");a.innerHTML=offlineNoteHTML(t,""),n.parentNode.replaceChild(a.firstChild,n)}}function retryAttach(e){var t=_offlinePending[e];t&&(isOffline()?showToast("📴 لسه مفيش إنترنت"):(delete _offlinePending[e],renderAttachCard(e,t.t,t.u)))}function isLatinText(e){var t=String(null==e?"":e).replace(/[^A-Za-z\u0600-\u06FF]/g,"");return!!t&&(t.match(/[A-Za-z]/g)||[]).length/t.length>.5}function importAnnotationsFromFile(e){var t=e.closest(".attach-card");if(t){var n=t.querySelector("iframe.annotator-iframe");if(n&&n.contentWindow){var a=document.createElement("input");a.type="file",a.accept="application/pdf,.pdf",a.onchange=function(e){var t=e.target.files&&e.target.files[0];if(t){var a=new FileReader;a.onload=function(){var e=a.result;try{n.contentWindow.postMessage({type:"merge-annotations-from-pdf",bytes:e,name:t.name},"*",[e]),showToast("⏳ جاري فحص الملف...")}catch(e){showToast("❌ تعذّر فتح الملف في قلم PDF — ممكن تجرّب تاني")}},a.readAsArrayBuffer(t)}},a.click()}else showToast("⏳ قلم PDF لسه بيتحمّل — ممكن تجرّب بعد لحظات")}}window.addEventListener("online",function(){Object.keys(_offlinePending).forEach(function(e){var t=_offlinePending[e],n=document.getElementById(e);delete _offlinePending[e],n&&n.querySelector(".offline-note")&&renderAttachCard(e,t.t,t.u)})}),window.addEventListener("message",function(e){e.data&&"object"==typeof e.data&&"merge-annotations-result"===e.data.type&&(e.data.success?showToast("✅ تم نقل "+(e.data.count||0)+" تعديل"):showToast(function(m){return/[\u0600-\u06FF]/.test(m||"")?(/اتلغى/.test(m)?"↩ ":"❌ ")+m:"❌ تعذّر نقل التعديلات — ممكن تجرّب تاني"}(e.data.error)))});var currentSubject=0,currentLecture=-1;function setSubjectTitle(e){var t=document.getElementById("main-title");if(t&&e){var n="function"==typeof findDept?findDept(CUR_DEPT):null;t.textContent="";var a=document.createElement("span");a.className="t-dept",a.textContent=n&&n.name?"منصة "+(/^قسم/.test(n.name)?"":"قسم ")+n.name:"منصة المواد التعليمية",t.appendChild(a);var r=document.createElement("span");if(r.className="t-sub",r.textContent="مادة "+e.name,e.en){var i=document.createElement("span");i.className="t-en",i.textContent=" — "+e.en,r.appendChild(i)}t.appendChild(r)}}function renderSubjectBar(){document.getElementById("subject-bar").innerHTML='<button class="subj-btn nav-close" aria-label="إغلاق القائمة"><span>✕</span></button>'+deptBtnHtml()+dashBtnHtml()+progBtnHtml()+'<div class="nav-sep" role="separator"><span>المقررات</span></div>'+SUBJECTS_INDEX.map(function(e,t){return!1===e.active?"":'<button class="subj-btn '+(t!==currentSubject||document.body.classList.contains("dashboard-mode")||document.body.classList.contains("instructors-mode")||document.body.classList.contains("progress-mode")?"":"active")+'" onclick="selectSubject('+t+')" title="'+escAttr(e.name)+'" aria-label="'+escAttr(e.name)+'"><span>'+(e.icon||"📚")+'</span><span style="display:flex;flex-direction:column;align-items:flex-start;line-height:1.25;"><span>'+esc(e.name)+"</span>"+(e.en?'<span style="font-size:10px;opacity:.8;font-weight:normal;">'+esc(e.en)+"</span>":"")+"</span></button>"}).join("")}function selectSubject(e,t){if(SUBJECTS_INDEX[e]&&!1!==SUBJECTS_INDEX[e].active){document.body.classList.remove("dashboard-mode"),document.body.classList.remove("instructors-mode"),document.body.classList.remove("progress-mode"),hideNotFoundPage(),currentSubject=e,closeQuizEverywhere(),secResetForSubject();var n=SUBJECTS_INDEX[e];if(setSubjectTitle(n),renderSubjectBar(),document.querySelectorAll("#main-view .tabs .tab-button").forEach(function(e,t){e.classList.toggle("active",0===t)}),document.getElementById("section1").classList.add("active"),document.getElementById("section2").classList.remove("active"),showView("main-view"),window.scrollTo({top:0,behavior:"smooth"}),subjects[e]?(resetSubTabs(),updateSubTabsVisibility(subjects[e]),renderAllLists(),saveLS({subject:e,view:"main",lecture:-1,prop:null,qidx:null,tab:"section1",subTab:"sub-lectures"})):(showSubjectLoading(),loadSubject(e).then(function(){resetSubTabs(),updateSubTabsVisibility(subjects[e]),renderAllLists(),saveLS({subject:e,view:"main",lecture:-1,prop:null,qidx:null,tab:"section1",subTab:"sub-lectures"})}).catch(function(e){document.getElementById("lectures-list").innerHTML='<p style="color:var(--danger);padding:24px;text-align:center;font-weight:bold;line-height:1.8;">⚠️ '+esc(userErrMsg(e))+'<br><button class="subj-btn" style="margin-top:12px" onclick="location.reload()">🔄 إعادة المحاولة</button></p>',showToast("📴 تعذّر تحميل المادة — ممكن تتأكد من النت وتجرّب تاني")})),!t)try{history.pushState({subject:n.slug,view:"main"},"",urlForSubject(e))}catch(e){}}}function showView(e){["main-view","lecture-view","quiz-view","dashboard-view","instructors-view","progress-view"].forEach(function(t){var n=document.getElementById(t);n&&n.classList.toggle("active",t===e)}),document.body.classList.toggle("progress-mode","progress-view"===e),"lecture-view"!==e&&"function"==typeof secResetUI&&secResetUI(),"lecture-view"!==e&&"function"==typeof closeLectureMedia&&closeLectureMedia(!1),"lecture-view"!==e&&"function"==typeof stopLectureAudio&&stopLectureAudio(),"lecture-view"!==e&&"function"==typeof clearLectureVideos&&clearLectureVideos()}function openTab(e,t){var n=document.querySelectorAll("#main-view .tabs .tab-button");n.forEach(function(e){e.classList.remove("active")}),e&&e.currentTarget?e.currentTarget.classList.add("active"):n["section1"===t?0:1]&&n["section1"===t?0:1].classList.add("active"),document.getElementById("section1").classList.toggle("active","section1"===t),document.getElementById("section2").classList.toggle("active","section2"===t),saveLS({tab:t}),"section2"===t&&renderActiveSubList()}function openSubTab(e,t){document.querySelectorAll("#sub-tabs-container .sub-tab-button").forEach(function(e){e.classList.remove("active")}),e&&e.currentTarget&&e.currentTarget.classList.add("active"),document.querySelectorAll("#section2 .sub-content").forEach(function(e){e.classList.toggle("active",e.id===t)}),saveLS({subTab:t}),renderActiveSubList()}function updateSubTabsVisibility(e){if(e){var t=document.getElementById("tab-btn-mid"),n=document.getElementById("tab-btn-final");t&&(t.style.display=e.midterms&&e.midterms.length>0?"inline-block":"none"),n&&(n.style.display=e.finals&&e.finals.length>0?"inline-block":"none");var a=document.querySelector("#section2 .sub-content.active");if(a&&("sub-mid"===a.id&&(!e.midterms||0===e.midterms.length)||"sub-final"===a.id&&(!e.finals||0===e.finals.length))){var r=document.querySelector("#sub-tabs-container .sub-tab-button");r&&openSubTab({currentTarget:r},"sub-lectures")}}}function resetSubTabs(){document.querySelectorAll("#sub-tabs-container .sub-tab-button").forEach(function(e,t){e.classList.toggle("active",0===t)}),document.querySelectorAll("#section2 .sub-content").forEach(function(e){e.classList.toggle("active","sub-lectures"===e.id)}),renderActiveSubList()}var _progCache={},_savedCache={};function progressMap(e){var t="quiz_progress_"+(e?e.name:"");if(void 0===_progCache[t])try{var n=localStorage.getItem(t);_progCache[t]=(n?JSON.parse(n):{})||{}}catch(e){_progCache[t]={}}return _progCache[t]}function savedCache(e){var t=e?e.name:"";if(_savedCache[t])return _savedCache[t];var n="qa_"+t+"_",a={};try{for(var r=0;r<localStorage.length;r++){var i=localStorage.key(r);if(i&&0===i.indexOf(n))try{var s=JSON.parse(localStorage.getItem(i));s&&"object"==typeof s&&s.answers?a[i.slice(n.length)]=s.answers:s&&"object"==typeof s&&(a[i.slice(n.length)]=s)}catch(e){}}}catch(e){}return _savedCache[t]=a,a}function getSavedQuizFor(e,t){var n=savedCache(e);return n&&n[t]?n[t]:{}}function saveQuizProgress(e,t,n){try{localStorage.setItem("qa_"+(e?e.name:"")+"_"+t,JSON.stringify(n))}catch(e){}var a=e?e.name:"";_savedCache[a]&&(_savedCache[a][t]=n)}function clearSavedQuiz(e,t){try{localStorage.removeItem("qa_"+(e?e.name:"")+"_"+t)}catch(e){}var n=e?e.name:"";_savedCache[n]&&delete _savedCache[n][t]}function getScore(e,t){var n=progressMap(e);return n&&n[t]?n[t]:null}function saveScore(e,t,n){try{var a=localStorage.getItem("quiz_progress_"+(e?e.name:"")),r={};try{r=a?JSON.parse(a):{}}catch(e){r={}}r&&"object"==typeof r&&!Array.isArray(r)||(r={}),r[t]=n,localStorage.setItem("quiz_progress_"+(e?e.name:""),JSON.stringify(r))}catch(e){}progressMap(e)[t]=n}var LSKEY="last_open_state"+(CUR_DEPT?"_"+CUR_DEPT:"");function saveLS(e){var t={};try{var n=localStorage.getItem(LSKEY);n&&(t=JSON.parse(n)||{})}catch(e){}for(var a in e)t[a]=e[a];try{localStorage.setItem(LSKEY,JSON.stringify(t))}catch(e){}}var SECTIONS_KEY="cg_sections_v1",sectionStates={pdf:!1,questions:!0};function loadSectionStates(){try{var e=localStorage.getItem(SECTIONS_KEY);if(e){var t=JSON.parse(e);t&&"object"==typeof t&&("boolean"==typeof t.pdf&&(sectionStates.pdf=t.pdf),"boolean"==typeof t.questions&&(sectionStates.questions=t.questions))}}catch(e){}}function saveSectionStates(){try{localStorage.setItem(SECTIONS_KEY,JSON.stringify(sectionStates))}catch(e){}}function getQuizData(e,t){if(t.questions&&t.questions.length)return t.questions;var n=[];return(t.lectures||[]).forEach(function(t){var a=e&&e.lectures?e.lectures[t]:null;a&&a.questions&&a.questions.forEach(function(e){n.push(e)})}),n}function lecQuizKey(e){return e&&e.t?e.t:"محاضرة"}function lecExamKey(e){return"كويز "+(e&&e.t?e.t:"محاضرة")}var renderedTabs={};function renderAllLists(){renderLecturesList(),renderQuizLists()}function renderQuizLists(){["sub-lectures","sub-mid","sub-final","sub-test-bank","sub-links"].forEach(function(e){delete renderedTabs[e]}),renderActiveSubList()}function renderActiveSubList(){var e=document.getElementById("section2");if(e&&e.classList.contains("active")){var t=document.querySelector("#section2 .sub-content.active");if(t&&!renderedTabs[t.id]){var n=subjects[currentSubject];if(n){if("sub-lectures"===t.id){var a=(n.lectures||[]).map(function(e,t){return e.questions&&e.questions.length?examCardHTML(n,{t:e.t,d:e.d,pdf:e.pdf2||e.pdf},"lec",t,e.questions.length,lecExamKey(e)):""}).join("");document.getElementById("questions-lectures-list").innerHTML=a||'<p style="color:var(--text-hint)">لا توجد أسئلة محاضرات بعد.</p>'}else"sub-mid"===t.id?document.getElementById("midterms-list").innerHTML=examCategorizedHTML(n,"midterms"):"sub-final"===t.id?document.getElementById("finals-list").innerHTML=examCategorizedHTML(n,"finals"):"sub-test-bank"===t.id?document.getElementById("test-banks-list").innerHTML=examListHTML(n,"testBanks"):"sub-links"===t.id&&renderLinkCategoriesList(n);renderedTabs[t.id]=!0}}}}function lecChapterOf(e,t,n){var a=e&&e.chapters;if(Array.isArray(a))for(var r=0;r<a.length;r++){var i=a[r];if(i&&Array.isArray(i.lectures)&&(i.lectures.indexOf(n)>-1||t&&t.id&&i.lectures.indexOf(t.id)>-1))return String(i.t||i.title||"").trim()}return t&&"string"==typeof t.chapter?t.chapter.trim():""}function lecChapterMeta(e,t){var n=e&&e.chapters;if(Array.isArray(n))for(var a=0;a<n.length;a++){var r=n[a];if(r&&String(r.t||r.title||"").trim()===t)return r}return null}var _chapOpen={};function toggleLecChapter(e){var t=e?e.parentNode:null;if(t){var n=t.classList.toggle("open"),a=t.getAttribute("data-ck");a&&(_chapOpen[a]=n)}}function lecCardHTML(e,t,n){var a,r=(t.questions||[]).length,i=Object.keys(getSavedQuizFor(e,lecQuizKey(t))).length,s=getScore(e,lecQuizKey(t));a=s?'<span class="badge '+(s.score>=75?"done":s.score>=50?"warn":"bad")+'">🏆 '+esc(s.score)+"%</span>":r&&i>=r?'<span class="badge done">✅ مكتملة</span>':i>0?'<span class="badge warn">⏳ '+i+"/"+r+"</span>":'<span class="badge new">'+r+" سؤال</span>";var o=r?Math.round(100*i/r):0,c=i>0&&r>0?'<div class="card-progress"><div class="card-progress-fill" style="width:'+o+'%"></div></div>':"",d="";try{var l=availableLinks(t.links).length;(t.linkCategories||[]).forEach(function(e){l+=availableLinks(e.links).length}),l&&(d+='<span class="card-chip">🔗 '+l+(1===l?" رابط":" روابط")+"</span>"),lecturePDFAt(e,t)&&(d+='<span class="card-chip ok">📄 ملف المحاضرة</span>')}catch(e){}return'<div class="card" onclick="openLecture('+currentSubject+","+n+')"><div class="card-text"><h3>'+(n+1)+". "+esc(t.t)+"</h3><p>"+(t.d?esc(t.d):"")+"</p>"+c+'</div><div class="card-foot"><div class="card-chips">'+d+"</div>"+(lectureHasNotes(t)?'<span class="card-notes-badge" title="المحاضرة دي فيها ملاحظات وتكاليف">📝</span>':"")+a+"</div></div>"}function renderLecturesList(){var e=subjects[currentSubject],t=document.getElementById("lectures-list");if(e&&e.lectures&&e.lectures.length){var n=e.lectures.map(function(t,n){return lecChapterOf(e,t,n)});if(n.some(Boolean)){var a={},r=[],i=null;e.lectures.forEach(function(t,s){var o=n[s];if(o){a[o]||(a[o]={name:o,cards:[],done:0,total:0},r.push({group:a[o]}),i||(i=o));var c=a[o];c.cards.push(lecCardHTML(e,t,s)),c.total+=(t.questions||[]).length,c.done+=Object.keys(getSavedQuizFor(e,lecQuizKey(t))).length}else r.push({html:lecCardHTML(e,t,s)})}),t.innerHTML=r.map(function(t){if(!t.group)return t.html;var n=t.group,a=lecChapterMeta(e,n.name)||{},r=currentSubject+"|"+n.name,i=n.total>0&&n.done>=n.total,s="boolean"==typeof a.open?a.open:!i,o=void 0===_chapOpen[r]?s:_chapOpen[r],c=n.cards.length+" محاضرة"+(n.total?" • "+Math.min(n.done,n.total)+"/"+n.total+" سؤال":"");return'<div class="lc-cat lec-chapter'+(o?" open":"")+'" data-ck="'+escAttr(r)+'"><div class="lc-cat-head" onclick="toggleLecChapter(this)"><span class="lc-cat-icon">'+esc(a.icon||"📘")+'</span><span class="lc-cat-main"><span class="lc-cat-tt">'+esc(n.name)+'</span><span class="lc-cat-dd">'+esc(a.d||a.description||"")+(a.d||a.description?" — ":"")+c+'</span></span><span class="link-arrow">▶</span></div><div class="lc-cat-body"><div class="lc-cat-links">'+n.cards.join("")+"</div></div></div>"}).join("")}else t.innerHTML=e.lectures.map(function(t,n){return lecCardHTML(e,t,n)}).join("")}else t.innerHTML='<p style="color:var(--text-hint)">لا توجد محاضرات لهذه المادة.</p>'}function examListHTML(e,t){var n=e[t]||[];return n.length?n.map(function(n,a){return examCardHTML(e,n,t,a,getQuizData(e,n).length,n.t)}).join(""):'<p style="color:var(--text-hint)">لا توجد عناصر هنا.</p>'}function examCategorizedHTML(e,t){var n=e[t]||[];if(!n.length)return'<p style="color:var(--text-hint)">لا توجد عناصر هنا.</p>';var a=e["_"+t+"Groups"];if(!a||!a.length)return examListHTML(e,t);var r=[],i={};return n.forEach(function(n,s){var o=a[s]||{category:"عام",icon:"📁"},c=o.category;i[c]||(i[c]={category:c,icon:o.icon,rows:[]},r.push(c)),i[c].rows.push(examCardHTML(e,n,t,s,getQuizData(e,n).length,n.t))}),r.map(function(e){var t=i[e];return'<div class="lc-cat"><div class="lc-cat-head" onclick="toggleLcCat(this)"><span class="lc-cat-icon">'+(t.icon||"📁")+'</span><span class="lc-cat-main"><span class="lc-cat-tt">'+esc(t.category)+'</span></span><span class="link-arrow">▶</span></div><div class="lc-cat-body"><div class="lc-cat-links">'+t.rows.join("")+"</div></div></div>"}).join("")}function examCardHTML(e,t,n,a,r,i){var s,o=getScore(e,i),c=Object.keys(getSavedQuizFor(e,i)).length;s=o?'<span class="er-tag '+(o.score>=75?"green":o.score>=50?"warn":"bad")+'">🏆 '+esc(o.score)+"%</span>":r&&c>=r?'<span class="er-tag green">✅ مكتمل</span>':r&&c>0?'<span class="er-tag warn">⏳ '+c+"/"+r+"</span>":'<span class="er-tag plain">جديد</span>';var d=r?Math.round(100*c/r):0,l=c>0&&r>0?'<div class="exam-progress"><div class="exam-progress-fill" style="width:'+d+'%"></div></div>':"",u=t.pdf?'<button class="er-pdf-btn" title="تحميل الامتحان PDF" onclick="event.stopPropagation();downloadPDFAt('+regUrl(pdfDownloadUrl(t.pdf))+')">📄 تحميل الامتحان PDF</button>':"";return'<div class="exam-row" onclick="openQuizByType(\''+n+"',"+a+')"><span class="er-play">▶</span><span class="er-main"><span class="er-title">'+esc(t.t||"اختبار")+'</span><span class="er-sub">'+(t.d?esc(t.d):"")+"</span>"+l+"</span>"+s+u+'<span class="er-num">'+r+"</span></div>"}function setQuizMode(e){document.body.classList.toggle("quiz-mode",!!e),e&&placeQNSidebar()}function detachQNSidebar(){var e=document.getElementById("qn-sidebar"),t=document.getElementById("page-layout");e&&t&&e.parentNode!==t&&t.insertBefore(e,t.firstChild)}function placeQNSidebar(){var e=document.getElementById("qn-sidebar");if(e&&st&&st.root)if(window.innerWidth<=900)e.parentNode!==st.root&&st.root.insertBefore(e,st.root.firstChild);else{var t=document.getElementById("page-layout");t&&e.parentNode!==t&&t.insertBefore(e,t.firstChild)}}function setSectionOpen(e,t,n){sectionStates[e]=!!t;var a=document.getElementById("pdf"===e?"pdf-sec":"qs-sec");if(a){a.classList.toggle("open",!!t);var r=a.querySelector(".sec-toggle");r&&r.setAttribute("aria-expanded",t?"true":"false");var i=a.querySelector(".sec-body");if(i)return n?void(t?(i.style.height="0px",i.offsetHeight,i.style.height=i.scrollHeight+2+"px",setTimeout(function(){sectionStates[e]&&(i.style.height="auto")},340),"pdf"===e&&lazyLoadPDF()):(i.style.height=i.scrollHeight+"px",i.offsetHeight,i.style.height="0px")):(i.style.height=t?"auto":"0px",void("pdf"===e&&t&&lazyLoadPDF()))}}function toggleSection(e){setSectionOpen(e,!sectionStates[e],!0),saveSectionStates()}function ensureSectionOpen(e){var t=document.getElementById("pdf"===e?"pdf-sec":"qs-sec");return!(!t||t.classList.contains("open")||(setSectionOpen(e,!0,!0),saveSectionStates(),0))}function applySectionStates(){setSectionOpen("pdf",sectionStates.pdf,!1),setSectionOpen("questions",sectionStates.questions,!1)}function lazyLoadPDF(){var e=document.querySelector("#pdf-body iframe[data-src]");if(e&&e.getAttribute("data-src")){var t=e.getAttribute("data-annot-url");if(isOffline()&&(!t||!wasOpened(t)))return void replaceWithNote(e,t||e.getAttribute("data-src"));e.src=e.getAttribute("data-src"),e.removeAttribute("data-src"),e.classList.contains("annotator-iframe")&&setTimeout(setupAllAnnotatorIframes,50)}}function openPdfAndScroll(){var e=document.getElementById("pdf-sec");if(e){var t=ensureSectionOpen("pdf");setTimeout(function(){e.scrollIntoView({behavior:"smooth",block:"start"})},t?360:0)}else showToast("مفيش ملف PDF هنا")}window.addEventListener("resize",function(){st&&st.root&&document.body.classList.contains("quiz-mode")&&placeQNSidebar()});var st=null,AR_LETTERS=["أ","ب","ج","د","هـ","و","ز","ح"];function isEssay(e){return!(!e||"essay"!==e.type)}function mcqTotal(){if(!st)return 0;for(var e=0,t=0;t<st.data.length;t++)isEssay(st.data[t])||e++;return e}function essayTotal(){if(!st)return 0;for(var e=0,t=0;t<st.data.length;t++)isEssay(st.data[t])&&e++;return e}function toggleEssayAnswer(e){var t=e.nextElementSibling;if(t){var n=t.classList.toggle("open");e.textContent=n?"🔽 إخفاء الإجابة":"👁 اعرض الإجابة النموذجية"}}function answeredCount(){if(!st)return 0;for(var e=0,t=0;t<st.data.length;t++)isEssay(st.data[t])||void 0!==st.answered[t]&&e++;return e}function renderQuizInto(e,t,n,a,r,i){detachQNSidebar(),st={subject:t,key:n,title:a||"اختبار",data:(r||[]).slice(),answered:{},marks:{},current:0,finished:!1,root:e,ctx:i||null};var s=getSavedQuizFor(t,n);Object.keys(s).forEach(function(e){var t=parseInt(s[e],10);!isNaN(t)&&t>=0&&(st.answered[e]=t)});try{var o=localStorage.getItem("qmark_"+(t?t.name:"")+"_"+n);o&&(st.marks=JSON.parse(o)||{})}catch(e){st.marks={}}for(var c=!0,d=0;d<st.data.length;d++)if(!isEssay(st.data[d])&&void 0===st.answered[d]){st.current=d,c=!1;break}c&&st.data.length&&(st.current=st.data.length-1,getScore(t,n)&&(st.finished=!0));var l="quiz-view-root"===e.id;if(e.innerHTML=(l?'<div class="qs-section ax-sec" id="qs-sec"><button class="sec-toggle qs-toggle" aria-expanded="true" aria-controls="qs-body" onclick="toggleSection(\'questions\')" title="فتح / إغلاق القسم"><span class="qs-title">🧠 قسم الأسئلة</span><span class="sec-arrow">⌄</span></button><div class="sec-body" id="qs-body">':"")+'<div class="solved-counter" id="sc-bar"></div><div class="exam-qarea" id="qa-area"></div><div id="results-area"></div><div id="score-btn-area"></div>'+(l?"</div></div>":""),!st.data.length)return document.getElementById("qa-area").innerHTML='<p class="ld-hint">⚠️ لا توجد أسئلة في الاختبار ده.</p>',void setQuizMode(!1);st.finished?showResults(!0):(renderCurrentQuestion(),updateScoreBtn()),updateSolvedCounter(),renderQNSidebar(),setQuizMode(!0)}function renderQNSidebar(){var e=document.getElementById("qn-sidebar");if(e&&st){var t=e.querySelector(".qn-grid"),n=t?t.scrollLeft:null,a=st.data.map(function(e,t){var n="qn-btn";return t===st.current&&(n+=" current"),isEssay(e)?n+=" essay":void 0!==st.answered[t]&&(n+=st.answered[t]===e.correct?" ok":" bad"),'<button class="'+n+'" onclick="examGoTo('+t+')" title="السؤال '+(t+1)+(isEssay(e)?" — مقالي 📝":"")+(st.marks[t]?" ⭐":"")+'">'+(t+1)+"</button>"}).join("");e.innerHTML='<div class="qn-nav-header"><span>🗺️ خريطة الأسئلة</span><span class="qn-count">'+st.data.length+' سؤال</span></div><div class="qn-grid">'+a+'</div><div class="qn-legend"><span><span class="qn-dot ok"></span>صحيح</span><span><span class="qn-dot bad"></span>خطأ</span><span><span class="qn-dot essay"></span>مقالي</span><span><span class="qn-dot none"></span>لم يُجب</span></div>';var r=e.querySelector(".qn-grid");if(r&&window.matchMedia&&window.matchMedia("(max-width:900px)").matches){null!==n&&(r.scrollLeft=n);var i=r.querySelector(".qn-btn.current");if(i){var s=r.getBoundingClientRect(),o=i.getBoundingClientRect();(o.left<s.left+4||o.right>s.right-4)&&(r.scrollLeft+=o.left+o.width/2-(s.left+s.width/2))}}}}function quizContextHeader(){if(!st)return"";var e=[],t=st.subject&&st.subject.name,n=st.ctx||{},a=n.name||st.title||"";return t&&e.push("📚 المادة: "+t),"midterms"===n.kind?e.push("📝 نوع الامتحان: ميدتيرم","🏷 اسم الامتحان: "+a):"finals"===n.kind?e.push("🎓 نوع الامتحان: فاينال","🏷 اسم الامتحان: "+a):"testBanks"===n.kind?e.push("🏦 نوع الامتحان: بنك أسئلة","🏷 اسم الامتحان: "+a):a&&e.push("🧠 المحاضرة: "+a),e.join("\n")}function questionShareText(e){var t=quizContextHeader(),n=t?[t,"",String(e.q||"").trim()]:[String(e.q||"").trim()];if(isEssay(e))e.answer&&n.push("","✅ الإجابة النموذجية:",String(e.answer).trim());else{var a=e.options||[];if(a.forEach(function(e,t){var a=isLatinText(e)?String.fromCharCode(65+t):AR_LETTERS[t]||String(t+1);n.push(a+") "+e)}),void 0!==a[e.correct]){var r=isLatinText(a[e.correct])?String.fromCharCode(65+e.correct):AR_LETTERS[e.correct]||String(e.correct+1);n.push("","✅ الإجابة الصحيحة: "+r+") "+a[e.correct])}}return n.join("\n")}function copyPlainText(e){return navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(e):new Promise(function(t,n){try{var a=document.createElement("textarea");a.value=e,a.setAttribute("readonly",""),a.style.cssText="position:fixed;top:0;left:0;opacity:0",document.body.appendChild(a),a.select();var r=document.execCommand("copy");document.body.removeChild(a),r?t():n(new Error("copy failed"))}catch(e){n(e)}})}function copyQuestion(e){var t=st&&st.data&&st.data[e];t&&copyPlainText(questionShareText(t)).then(function(){showToast("📋 اتنسخ السؤال مع الإجابة الصحيحة")}).catch(function(){showToast("⚠️ تعذّر النسخ — ممكن تجرّب تاني")})}function shareQuestion(e){var t=st&&st.data&&st.data[e];if(t){var n=questionShareText(t);if(navigator.share){var a={text:n};navigator.share(a).catch(function(t){t&&"AbortError"===t.name||copyQuestion(e)})}else copyPlainText(n).then(function(){showToast("📤 المشاركة مش مدعومة هنا — اتنسخ السؤال والإجابة")}).catch(function(){showToast("⚠️ تعذّرت المشاركة — ممكن تجرّب تاني")})}}function renderCurrentQuestion(){var e=document.getElementById("qa-area");if(e&&st&&st.data.length){var t=Math.max(0,Math.min(st.current,st.data.length-1));st.current=t;var n=st.data[t],a=void 0!==st.answered[t],r=a?st.answered[t]:-1,i=a&&r===n.correct,s=!!st.marks[t],o=isLatinText(n.q);if(isEssay(n))return e.innerHTML='<div class="exam-qcard"><span class="exam-counter">'+(t+1)+" / "+st.data.length+'</span><div class="exam-qtop"><span class="eq-num">السؤال '+(t+1)+" من "+st.data.length+'</span><span class="q-tools"><button class="q-act-btn" onclick="copyQuestion('+t+')" title="انسخ السؤال مع الإجابة الصحيحة">📋 نسخ</button><button class="q-act-btn" onclick="shareQuestion('+t+')" title="شارك السؤال مع الإجابة الصحيحة">📤 مشاركة</button><button class="qmark-btn '+(s?"on":"")+'" onclick="toggleMark('+t+')" title="علّمي السؤال">'+(s?"⭐ معلّم":"☆ علّم")+'</button></span></div><span class="essay-type-badge">📝 سؤال مقالي</span><div class="exam-qtext'+(o?" ltr":"")+'">'+esc(n.q)+"</div>"+qTrHTML(n,"q"+t)+qVideoSlotHTML(n)+'<button class="eq-toggle-btn" onclick="toggleEssayAnswer(this)">👁 اعرض الإجابة النموذجية</button><div class="eq-answer"><div class="eq-answer-text">'+esc(n.answer||"").replace(/\n/g,"<br>")+"</div>"+(n.tags&&n.tags.length?'<div class="eq-tags">'+n.tags.map(function(e){return'<span class="eq-tag">'+esc(e)+"</span>"}).join("")+"</div>":"")+(n.ref?'<div class="eq-ref">📚 المرجع: '+esc(n.ref)+"</div>":"")+'</div><div class="exam-navbtns"><button class="exam-nav-btn prev"'+(0===t?" disabled":"")+' onclick="examGo(-1)">→ السابق</button>'+(st.finished?'<button class="exam-nav-btn" onclick="showResults(true)">📊 النتيجة</button>':"")+'<button class="exam-nav-btn"'+(t===st.data.length-1?" disabled":"")+' onclick="examGo(1)">التالي ←</button></div></div>',void hydrateQVideo(e,n);var c=(n.options||[]).map(function(e,i){var s="exam-opt",o=isLatinText(e),c=o?String.fromCharCode(65+i):AR_LETTERS[i]||String(i+1),d="";return a?(s+=" locked",i===n.correct?s+=" correct":i===r&&(s+=" selected wrong")):d=' onclick="selectAnswer('+t+","+i+')"',o&&(s+=" ltr"),'<div class="'+s+'"'+d+'><span class="opt-letter">'+c+'</span><span class="opt-text">'+esc(e)+"</span></div>"}).join(""),d="";a&&(d='<div class="quiz-feedback '+(i?"correct-text":"wrong-text")+'">'+(i?"✅ إجابة صحيحة!":"❌ إجابة خاطئة — الإجابة الصحيحة: "+esc((n.options||[])[n.correct]||""))+"</div>"),e.innerHTML='<div class="exam-qcard"><span class="exam-counter">'+(t+1)+" / "+st.data.length+'</span><div class="exam-qtop"><span class="eq-num">السؤال '+(t+1)+" من "+st.data.length+'</span><span class="q-tools"><button class="q-act-btn" onclick="copyQuestion('+t+')" title="انسخ السؤال مع الإجابة الصحيحة">📋 نسخ</button><button class="q-act-btn" onclick="shareQuestion('+t+')" title="شارك السؤال مع الإجابة الصحيحة">📤 مشاركة</button><button class="qmark-btn '+(s?"on":"")+'" onclick="toggleMark('+t+')" title="علّمي السؤال — يظهر في ملف Word">'+(s?"⭐ معلّم":"☆ علّم")+'</button></span></div><div class="exam-qtext'+(o?" ltr":"")+'">'+esc(n.q)+"</div>"+qTrHTML(n,"q"+t)+qVideoSlotHTML(n)+'<div class="exam-opts">'+c+"</div>"+d+(a?qExHTML(n,"q"+t):"")+'<div class="exam-navbtns"><button class="exam-nav-btn prev"'+(0===t?" disabled":"")+' onclick="examGo(-1)">→ السابق</button>'+(st.finished?'<button class="exam-nav-btn" onclick="showResults(true)">📊 النتيجة</button>':"")+'<button class="exam-nav-btn"'+(t===st.data.length-1?" disabled":"")+' onclick="examGo(1)">التالي ←</button></div><div class="exam-saved" id="exam-saved-msg">💾 تم حفظ إجابتك تلقائياً</div></div>',hydrateQVideo(e,n)}else e&&(e.innerHTML="")}function toggleMark(e){if(st){st.marks[e]?(delete st.marks[e],showToast("تم إلغاء تعليم السؤال")):(st.marks[e]=1,showToast("⭐ السؤال اتعلّم — هيظهر في ملف Word"));try{localStorage.setItem("qmark_"+(st.subject?st.subject.name:"")+"_"+st.key,JSON.stringify(st.marks))}catch(e){}renderCurrentQuestion()}}function selectAnswer(e,t){if(st&&void 0===st.answered[e]&&!isEssay(st.data[e])){st.answered[e]=t,saveQuizProgress(st.subject,st.key,st.answered),renderCurrentQuestion(),renderQNSidebar(),updateSolvedCounter(),updateScoreBtn();var n=document.getElementById("exam-saved-msg");n&&(n.classList.add("show"),setTimeout(function(){n.classList.remove("show")},1500))}}function examGo(e){st&&examGoTo(st.current+e)}function examGoTo(e){if(!(!st||e<0||e>=st.data.length)){st.current=e;var t=document.getElementById("qa-area"),n=document.getElementById("results-area");t&&(t.style.display=""),n&&(n.innerHTML="");var a=ensureSectionOpen("questions");renderCurrentQuestion(),renderQNSidebar();var r=document.querySelector("#qa-area .exam-qcard");r&&(a?setTimeout(function(){r.scrollIntoView({behavior:"smooth",block:"center"})},360):r.scrollIntoView({behavior:"smooth",block:"center"}))}}function updateSolvedCounter(){var e=document.getElementById("sc-bar");if(e&&st){var t=mcqTotal(),n=answeredCount(),a=essayTotal(),r=t?Math.round(100*n/t):0,i=a?' <span style="color:var(--text-hint);font-size:12px;">(+'+a+" مقالي)</span>":"";e.innerHTML='<span>✅ تم حلّه: <span class="sc-ok">'+n+"</span> من "+t+i+'</span><span class="sc-pct">'+r+"%</span>"}}function updateScoreBtn(){var e=document.getElementById("score-btn-area");if(e&&st){var t=mcqTotal();!st.finished&&t>0&&answeredCount()>=t?e.innerHTML='<div class="show-score-btn-wrap"><button class="show-score-btn" onclick="showResults()">🏆 اعرض نتيجتك</button><div class="show-score-subtitle">جاوبتي على كل أسئلة الاختيار — شوف مستواك!</div></div>':st.finished||(e.innerHTML="")}}function showResults(e){if(st&&st.data.length){var t=[];st.data.forEach(function(e,n){isEssay(e)||t.push({q:e,i:n})});var n=t.length,a=st.data.length-n;if(0!==n){var r=0;t.forEach(function(e){void 0!==st.answered[e.i]&&st.answered[e.i]===e.q.correct&&r++});var i=Math.round(100*r/n);st.finished=!0;var s={score:i,correct:r,wrong:n-r,total:n,date:(new Date).toLocaleDateString("ar-EG")};saveScore(st.subject,st.key,s),e||(addNotification({title:"🏆 نتيجة: "+st.title,context:st.subject.name,score:i,depts:CUR_DEPT?[CUR_DEPT]:null}),showToast("تم حفظ النتيجة: "+i+"%"));var o,c=i>=90?"ممتاز! 🌟":i>=75?"جيد جداً 👏":i>=50?"جيد 🙂":"حاول مرة تانية 💪",d=[];t.forEach(function(e){void 0!==st.answered[e.i]&&st.answered[e.i]!==e.q.correct&&d.push({q:e.q,i:e.i,user:st.answered[e.i]})}),o=d.length?'<div class="wrong-collapse-wrap"><div class="wrong-collapse-header" onclick="toggleWrongReview(event)"><span>❌ مراجعة الأخطاء ('+d.length+')</span><span class="wrong-collapse-arrow" id="wra">▼</span></div><div class="wrong-collapse-body" id="wrb">'+d.map(function(e){return'<div class="wrong-q-card"><span class="wrong-q-num">'+(e.i+1)+'</span><div class="wrong-q-text">'+esc(e.q.q)+'</div><div class="wrong-q-answer wrong-q-user"><span class="wrong-q-label">إجابتك:</span>'+esc((e.q.options||[])[e.user]||"—")+'</div><div class="wrong-q-answer wrong-q-correct"><span class="wrong-q-label">الإجابة الصحيحة:</span>'+esc((e.q.options||[])[e.q.correct]||"—")+"</div>"+qTrHTML(e.q,"w"+e.i)+qExHTML(e.q,"w"+e.i)+"</div>"}).join("")+"</div></div>":'<div class="no-wrong-msg">🎉 مفيش أخطاء — كل إجاباتك صح!</div>',document.getElementById("results-area").innerHTML='<div class="score-card"><div class="score-circle"><div class="score-number">'+i+'%</div><div class="score-label">النتيجة</div></div><div class="score-details">✅ صحيحة: '+r+" &nbsp;•&nbsp; ❌ خاطئة: "+(n-r)+" &nbsp;•&nbsp; الإجمالي: "+n+(a?" &nbsp;•&nbsp; 📝 مقالي: "+a:"")+'</div><div class="score-message">'+c+'</div><button class="retry-btn" onclick="resetQuiz()">🔄 إعادة الاختبار</button></div><div class="res-word-wrap"><button class="res-word-btn wrong" onclick="downloadWrongWord()">📄 Word — الأسئلة الخطأ</button><button class="res-word-btn marked" onclick="downloadMarkedWord()">⭐ Word — الأسئلة المعلّمة</button></div>'+o;var l=document.getElementById("qa-area");l&&(l.style.display="none");var u=document.getElementById("score-btn-area");u&&(u.innerHTML=""),updateSolvedCounter(),renderQNSidebar();var p=document.querySelector("#results-area .score-card");p&&p.scrollIntoView({behavior:"smooth",block:"start"})}else{st.finished=!0,document.getElementById("results-area").innerHTML='<div class="score-card"><div class="score-circle"><div class="score-number">📝</div><div class="score-label">مقالي</div></div><div class="score-details">عدد الأسئلة المقالية: '+a+'</div><div class="score-message">الاختبار ده كله أسئلة مقالية — التصحيح يدوي</div><button class="retry-btn" onclick="resetQuiz()">🔄 إعادة</button></div>';var f=document.getElementById("qa-area");f&&(f.style.display="none");var m=document.getElementById("score-btn-area");m&&(m.innerHTML="")}}}function downloadWrongWord(){if(st){var e=[],t=[];st.data.forEach(function(n,a){isEssay(n)||void 0!==st.answered[a]&&st.answered[a]!==n.correct&&(e.push(n),t.push(st.answered[a]))}),e.length?downloadWord(e,st.subject.name+" — "+st.title+" (الأسئلة الخطأ)",t):showToast("مفيش أسئلة خطأ 🎉")}}function downloadMarkedWord(){if(st){var e=[],t=[];st.data.forEach(function(n,a){st.marks[a]&&(e.push(n),t.push(st.answered[a]))}),e.length?downloadWord(e,st.subject.name+" — "+st.title+" (الأسئلة المعلّمة)",t):showToast("مفيش أسئلة معلّمة — تقدر تعلّم أي سؤال بالنجمة ⭐")}}function toggleWrongReview(e){e&&e.stopPropagation();var t=document.getElementById("wrb"),n=document.getElementById("wra");t&&t.classList.toggle("open"),n&&n.classList.toggle("open")}function resetQuiz(){if(st){clearSavedQuiz(st.subject,st.key),st.answered={},st.current=0,st.finished=!1;var e=document.getElementById("results-area");e&&(e.innerHTML="");var t=document.getElementById("qa-area");t&&(t.style.display=""),renderCurrentQuestion(),renderQNSidebar(),updateSolvedCounter(),updateScoreBtn(),showToast("تم مسح الحل المحفوظ — بالتوفيق 💪")}}function driveId(e){if(!e)return null;var t=String(e).match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?id=|uc\?export=download&id=)([a-zA-Z0-9_-]{10,})/);return t?t[1]:null}function pdfEmbedUrl(e){var t=driveId(e);if(t)return"https://drive.google.com/file/d/"+t+"/preview";var n=String(e||"");return/dropbox\.com/.test(n)?n.replace("?dl=0","?raw=1").replace("&dl=0","&raw=1"):n}function pdfDownloadUrl(e){var t=driveId(e);if(t)return"https://drive.google.com/uc?export=download&id="+t;var n=String(e||"");return/dropbox\.com/.test(n)?n.replace("?dl=0","?dl=1"):n}function pdfViewerUrl(e){var t=String(e||"");return driveId(t)||/dropbox\.com/.test(t)||/^https?:\/\//i.test(t)&&0!==t.indexOf(location.origin)?null:"pdf-annotator.html?viapost=1&src="+encodeURIComponent(t)}function lecturePDFAt(e,t){return t&&t.pdf?t.pdf:null}function examPDFAt(e){return e&&e.pdf?e.pdf:null}function lecExamPDFAt(e){return e&&e.pdf2?e.pdf2:e&&e.pdf?e.pdf:null}function downloadPDFAt(e){var t=urlRegistry[e];if(t)if(isOffline())showToast("📴 مفيش إنترنت — الملف مش محمّل");else{var n=document.createElement("a");n.href=encodeURI(t),n.setAttribute("download",""),n.setAttribute("target","_blank"),n.setAttribute("rel","noopener noreferrer"),document.body.appendChild(n),n.click(),setTimeout(function(){n.remove()},800),showToast("جاري تحميل ملف PDF 📄")}else showToast("الملف غير متاح")}var _annotatorHandlers=[];function markFileUnavailable(e,t){try{var n=e.closest(".ld-section");if(!n)return;var a=n.querySelector(".ld-chip");if(!a||!a.classList.contains("ok"))return;a.textContent="غير متاح",a.classList.remove("ok"),a.classList.add("error"===t?"bad":"warn")}catch(e){}}function replaceWithErrorNote(e,t){var n,a;markFileUnavailable(e,"error"),401===t||403===t?(n="مش مسموح بفتح الملف ده",a="الملف موجود بس مش مسموح بفتحه حاليًا. لو المشكلة فضلت، ممكن تبلّغ المسؤول عن الموقع."):t>=400&&t<500?(n="الملف ده مش موجود",a="الملف ده مش موجود في مكانه — ممكن يكون اتنقل أو اتمسح. لو المشكلة فضلت، ممكن تبلّغ المسؤول عن الموقع."):(n="تعذّر الوصول للملف ده",a="الموقع اللي عليه الملف مش بيرد دلوقتي. ممكن تجرّب بعد شوية، ولو المشكلة فضلت تبلّغ المسؤول عن الموقع.");var r=document.createElement("div");r.className="offline-note";var i=document.createElement("b");i.textContent=n+" ⚠️";var s=document.createElement("p");s.textContent=a,r.appendChild(i),r.appendChild(s),e.parentNode&&e.parentNode.replaceChild(r,e)}function setupAnnotatorIframe(e,t){
  if(!e||!t||"1"===e.dataset.annotSetup)return;
  e.dataset.annotSetup="1";
  var started=!1,ready=!1,received=!1,bytes=null,lastSend=0,lastPct=-1,tries=0,poll=null,startT=null,fname="document.pdf";
  try{fname=decodeURIComponent(t.split("/").pop().split("?")[0])||"document.pdf"}catch(x){}
  function post(m){try{e.contentWindow&&e.contentWindow.postMessage(m,"*")}catch(x){}}
  function stop(){poll&&clearInterval(poll);poll=null;startT&&clearTimeout(startT);startT=null}
  function cleanup(){stop();window.removeEventListener("message",onMsg)}
  /* ★ الملف بيتبعت بس لما قلم PDF يكون جاهز فعلًا، وبيتعاد لحد ما يتأكد الاستلام (قبل كده كان بيضيع لو القلم لسه بيتحمّل) */
  function deliver(){
    if(!bytes||!ready||received)return;
    var n=Date.now();
    if(n-lastSend<2500)return;
    lastSend=n;
    post({type:"load-pdf",bytes:bytes,name:fname})
  }
  function onMsg(ev){
    var d=ev.data;
    if(d&&"object"==typeof d&&ev.source===e.contentWindow){
      if("annotator-ready"===d.type||"pong"===d.type&&d.ready){ready=!0;start();deliver()}
      else if("load-pdf-received"===d.type)received=!0,stop();
      else if("load-pdf-ack"===d.type)received=!0,cleanup()
    }
  }
  function readBody(r){
    var total=parseInt(r.headers.get("content-length")||"0",10);
    if(!r.body||!r.body.getReader||!total)return r.arrayBuffer();
    var reader=r.body.getReader(),chunks=[],got=0;
    function pump(){
      return reader.read().then(function(x){
        if(x.done){
          var out=new Uint8Array(got),o=0;
          chunks.forEach(function(c){out.set(c,o);o+=c.length});
          return out.buffer
        }
        chunks.push(x.value);got+=x.value.length;
        var pct=Math.min(99,Math.floor(got/total*100));
        if(pct!==lastPct&&ready){lastPct=pct;post({type:"load-progress",pct:pct})}
        return pump()
      })
    }
    return pump()
  }
  /* ★ تحميل الملف + إعادة محاولة تلقائية مرة لو النت بطيء/اتقطع */
  function download(retry){
    return fetch(t,{cache:"force-cache"}).then(function(r){
      if(!r.ok){var n=new Error("HTTP "+r.status);throw n.httpStatus=r.status,n}
      fileCachePut(t,r.clone());markOpened(t);
      return readBody(r)
    }).catch(function(err){
      if(err&&/^HTTP/.test(err.message||""))throw err;
      return fileCacheGet(t).then(function(c){
        if(c)return c.arrayBuffer();
        if(retry>0&&!isOffline()&&!1!==navigator.onLine)
          return new Promise(function(ok){setTimeout(ok,1500)}).then(function(){return download(retry-1)});
        throw err.notDownloaded=!0,err
      })
    })
  }
  function start(){
    if(started)return;
    started=!0;
    download(1).then(function(buf){bytes=buf;deliver()}).catch(function(n){
      cleanup();
      if(n&&n.httpStatus)replaceWithErrorNote(e,n.httpStatus);
      else{
        if(n&&n.notDownloaded)return isOffline()||!1===navigator.onLine?(markFileUnavailable(e,"offline"),void replaceWithNote(e,t)):void fetch(t,{mode:"no-cors"}).then(function(){markFileUnavailable(e,"offline"),replaceWithNote(e,t)}).catch(function(){replaceWithErrorNote(e,0)});
        try{e.src="pdf-annotator.html?file="+encodeURIComponent(t)}catch(x){}
        showToast("تعذّر فتح الملف في قلم PDF — ممكن تجرّب تاني")
      }
    })
  }
  window.addEventListener("message",onMsg);
  _annotatorHandlers.push(onMsg);
  startT=setTimeout(start,2500);
  poll=setInterval(function(){
    if(!document.body.contains(e)||++tries>150){cleanup();return}
    ready?deliver():post({type:"ping"})
  },800)
}
function setupAllAnnotatorIframes(){document.querySelectorAll("iframe.annotator-iframe[data-annot-url]").forEach(function(e){var t=e.getAttribute("data-annot-url");t&&setupAnnotatorIframe(e,t)})}var urlRegistry=[];function regUrl(e){return urlRegistry.push(e),urlRegistry.length-1}function openReg(e){var t=urlRegistry[e];t&&isOffline()&&!wasOpened(t)?showToast("📴 مفيش إنترنت — الملف/الرابط ده مش محمّل"):t&&window.open(encodeURI(t),"_blank","noopener,noreferrer")}function availableLinks(e){return(e||[]).filter(function(e){return e&&(e.url&&String(e.url).trim()||e.actions&&e.actions.length)})}function linksListHTML(e){return availableLinks(e).map(function(e){if(e.actions&&e.actions.length){var t=e.actions.map(function(e){if(!e||!e.url)return"";var t=-1!==["green","orange","red","blue"].indexOf(e.color)?" "+e.color:"",n="download"===e.type?"⬇ "+esc(e.label):"👁 "+esc(e.label);return'<button class="link-action-btn'+t+'" onclick="event.stopPropagation();openReg('+regUrl(e.url)+')">'+n+"</button>"}).join("");return'<div class="link-card"><div class="link-card-head" onclick="toggleLinkCard(this)"><span class="link-card-icon">'+(e.icon||"🔗")+'</span><span><span class="link-card-tt">'+esc(e.t||"")+"</span>"+(e.d?'<span class="link-card-dd">'+esc(e.d)+"</span>":"")+'</span><span class="link-arrow">▶</span></div><div class="link-card-body"><div class="link-actions">'+t+"</div></div></div>"}return'<div class="link-card"><div class="link-card-head" onclick="openReg('+regUrl(e.url)+')"><span class="link-card-icon">🔗</span><span><span class="link-card-tt">'+esc(e.t||"")+"</span>"+(e.d?'<span class="link-card-dd">'+esc(e.d)+"</span>":"")+'</span><span class="link-arrow">↗</span></div></div>'}).join("")}function renderLinksList(e,t){var n=document.getElementById(e);n&&(n.innerHTML=linksListHTML(t)||'<p class="ld-hint">لا توجد روابط متاحة لهذه المحاضرة حالياً.</p>')}function toggleLinkCard(e){var t=e?e.parentNode:null;t&&t.classList.toggle("open")}function renderLinkCategoriesList(e){var t=document.getElementById("link-categories-list");if(t){var n=e.linkCategories||[];n.length?t.innerHTML=n.map(function(e){var t=linksListHTML(e.links)||'<p class="ld-hint">لا توجد روابط في هذا القسم بعد.</p>';return'<div class="lc-cat"><div class="lc-cat-head" onclick="toggleLcCat(this)"><span class="lc-cat-icon">'+(e.icon||"📁")+'</span><span class="lc-cat-main"><span class="lc-cat-tt">'+esc(e.category||"")+"</span>"+(e.description?'<span class="lc-cat-dd">'+esc(e.description)+"</span>":"")+'</span><span class="link-arrow">▶</span></div><div class="lc-cat-body"><div class="lc-cat-links">'+t+"</div></div></div>"}).join(""):t.innerHTML='<p style="color:var(--text-hint)">لا توجد روابط أو مصادر مضافة لهذه المادة بعد.</p>'}}function toggleLcCat(e){var t=e?e.parentNode:null;t&&t.classList.toggle("open")}function renderAttachCard(e,t,n){var a=document.getElementById(e);if(a)if(n){if(isOffline()&&(!pdfViewerUrl(n)||!wasOpened(n)))return _offlinePending[e]={t:t,u:n},void(a.innerHTML=offlineNoteHTML(n,e));var r=pdfEmbedUrl(n),i=regUrl(pdfDownloadUrl(n)),s=pdfViewerUrl(n),o=driveId(n)||/\.pdf($|\?)/i.test(String(n))||/dropbox\.com/.test(String(n));a.innerHTML='<div class="attach-card"><div class="attach-head"><span class="attach-title">📄 '+esc(t||"الملف")+'</span><div style="display:flex;gap:6px;flex-wrap:wrap;"><button class="btn-sm" style="background:var(--download-btn-bg);" onclick="downloadPDFAt('+i+')">⬇ تحميل الملف</button>'+(s?'<button class="btn-sm" style="background:var(--warning);" onclick="importAnnotationsFromFile(this)">📂 استورد تعديلات</button>':"")+'</div></div><div class="attach-line"></div>'+(s?'<div class="pdf-viewer annotator-frame"><iframe class="annotator-iframe" data-annot-url="'+escAttr(n)+'" src="'+escAttr(s)+'" title="قلم PDF"></iframe></div><p class="ld-hint" style="margin-top:8px;">🖊️ <b>قلم PDF:</b> ارسمي وظلّلي على الملف — تعليقاتك بتتحفظ تلقائياً.</p>':o?'<div class="pdf-viewer"><iframe loading="lazy" title="معاينة الملف" src="'+escAttr(r)+'"></iframe></div><p class="ld-hint" style="margin-top:8px;">الملف مش بيظهر فوق؟ <a href="#" onclick="downloadPDFAt('+i+');return false;" style="color:var(--accent);font-weight:bold;">نزّليه مباشرة 📥</a></p>':'<p class="ld-hint">الملف مش PDF مباشر — استخدمي زر التحميل فوق.</p>')+"</div>",setTimeout(setupAllAnnotatorIframes,50)}else a.innerHTML=""}function renderLectureLinks(e,t,n){var a=document.getElementById(e);if(a){var r=availableLinks(t).length>0,i=(n||[]).some(function(e){return availableLinks(e.links).length>0});if(r||i){var s="";r&&(s+=linksListHTML(t)),i&&(s+=(n||[]).map(function(e){var t=linksListHTML(e.links)||'<p class="ld-hint">لا توجد روابط في هذا القسم بعد.</p>';return'<div class="lc-cat"><div class="lc-cat-head" onclick="toggleLcCat(this)"><span class="lc-cat-icon">'+(e.icon||"📁")+'</span><span class="lc-cat-main"><span class="lc-cat-tt">'+esc(e.category||"")+"</span>"+(e.description?'<span class="lc-cat-dd">'+esc(e.description)+"</span>":"")+'</span><span class="link-arrow">▶</span></div><div class="lc-cat-body"><div class="lc-cat-links">'+t+"</div></div></div>"}).join("")),a.innerHTML=s}else a.innerHTML='<p class="ld-hint">لا توجد روابط متاحة لهذه المحاضرة حالياً.</p>'}}function lectureHasNotes(e){return!(!e||"string"!=typeof e.notes||""===e.notes.trim())}function buildNotesCardHTML(e){try{return lectureHasNotes(e)?'<div class="notes-card" id="ld-notes-card"><div class="notes-card-head"><span class="notes-card-icon" aria-hidden="true">📝</span><span class="notes-card-title">📌 ملاحظات وتكاليف المحاضرة</span></div><p class="notes-card-text">'+esc(e.notes.trim())+"</p></div>":""}catch(e){return""}}function renderNotesCard(e){try{var t=document.getElementById("ld-notes-card");t&&t.parentNode&&t.parentNode.removeChild(t);var n=buildNotesCardHTML(e);if(!n)return;var a=document.querySelector("#ld-file .ld-body");if(!a)return;var r=document.createElement("template");r.innerHTML=n;var i=r.content.firstElementChild;i&&a.insertBefore(i,a.firstChild)}catch(e){}}function stopLectureAudio(){var e=document.getElementById("lecture-view");e&&[].forEach.call(e.querySelectorAll("audio"),function(e){try{e.pause()}catch(e){}})}function closeLectureMedia(e){var t=e?document.getElementById("sec-body"):document.getElementById("lecture-view");t&&([].forEach.call(t.querySelectorAll("audio,video"),function(e){try{e.pause()}catch(e){}}),[].forEach.call(t.querySelectorAll('.vid-btn[aria-expanded="true"]'),function(e){try{e.click()}catch(e){}}))}function secAudioCard(e){if(!e)return null;var t=(Array.isArray(e)?e:[e]).map(function(e){return"string"==typeof e?{t:"",url:e}:e}).filter(function(e){return e&&"string"==typeof e.url&&lectureUrlOk(e.url.trim())});if(!t.length)return null;var n=document.createElement("div");n.className="lec-audio-card";var a=document.createElement("div");return a.className="lec-audio-title",a.textContent="🎧 التسجيل الصوتي للسكشن",n.appendChild(a),t.forEach(function(e){var t=document.createElement("div");if(t.className="lec-audio-item",e.t){var a=document.createElement("div");a.className="lec-audio-name",a.textContent=String(e.t),t.appendChild(a)}var r=document.createElement("audio");r.controls=!0,r.preload="none",r.src=e.url.trim(),t.appendChild(r),n.appendChild(t)}),n}function renderLectureAudio(e){var t=document.getElementById("lecture-audio-root");if(t){stopLectureAudio(),t.innerHTML="";var n=e&&e.audio;if(n){var a=(Array.isArray(n)?n:[n]).map(function(e){return"string"==typeof e?{t:"",url:e}:e}).filter(function(e){return e&&"string"==typeof e.url&&e.url.trim()});if(a.length){var r='<div class="lec-audio-card"><div class="lec-audio-title">🎧 التسجيل الصوتي للمحاضرة</div>'+a.map(function(e){return'<div class="lec-audio-item">'+(e.t?'<div class="lec-audio-name">'+esc(e.t)+"</div>":"")+'<audio controls preload="none" src="'+esc(e.url.trim())+'"></audio></div>'}).join("")+"</div>";t.innerHTML=r}}}}function vidParse(e){if("string"!=typeof e)return null;if(!(e=e.trim()))return null;if(!/^https:\/\/[^\s]+$/i.test(e)&&(/^[a-z][a-z0-9+.-]*:/i.test(e)||0===e.indexOf("//")))return null;var t=e.match(/(?:youtube\.com\/(?:watch\?(?:[^#\s]*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/i);if(t){var n="autoplay=1&rel=0&playsinline=1";try{/^https?:$/.test(location.protocol)&&(n+="&origin="+encodeURIComponent(location.origin))}catch(e){}return{kind:"iframe",src:"https://www.youtube-nocookie.com/embed/"+t[1]+"?"+n,open:"https://www.youtube.com/watch?v="+t[1],site:"يوتيوب"}}return(t=e.match(/drive\.google\.com\/file\/d\/([\w-]+)/i)||e.match(/drive\.google\.com\/(?:open|uc)\?(?:[^#\s]*&)?id=([\w-]+)/i))?{kind:"iframe",src:"https://drive.google.com/file/d/"+t[1]+"/preview",open:"https://drive.google.com/file/d/"+t[1]+"/view",site:"Drive"}:(t=e.match(/vimeo\.com\/(?:video\/)?(\d+)/i))?{kind:"iframe",src:"https://player.vimeo.com/video/"+t[1]+"?autoplay=1",open:"https://vimeo.com/"+t[1],site:"Vimeo"}:{kind:"file",src:e}}function vidList(e){return e?(Array.isArray(e)?e:[e]).map(function(e){return"string"==typeof e?{t:"",url:e}:e&&"object"==typeof e?{t:String(e.t||e.label||e.title||""),url:e.url}:null}).filter(function(e){return e&&vidParse(e.url)}):[]}function vidItem(e,t){var n=vidParse(t);if(!n)return null;var a=document.createElement("div");a.className="vid-item";var r=document.createElement("button");r.type="button",r.className="vid-btn",r.setAttribute("aria-expanded","false");var i=document.createElement("span");i.className="vid-ic",i.textContent="🎬";var s=document.createElement("span");s.className="vid-lb",s.textContent=e||"فيديو السؤال";var o=document.createElement("span");o.className="vid-act",o.textContent="تشغيل ▶",r.appendChild(i),r.appendChild(s),r.appendChild(o);var c=document.createElement("div");c.className="vid-player",c.hidden=!0;var d=null;return n.open&&((d=document.createElement("a")).className="vid-open",d.hidden=!0,d.href=n.open,d.target="_blank",d.rel="noopener noreferrer",d.textContent="↗ لو الفيديو مش بيشتغل هنا، افتحه على "+(n.site||"الموقع")),r.onclick=function(){if(c.hidden){var t;if(c.hidden=!1,c.textContent="","iframe"===n.kind)(t=document.createElement("iframe")).setAttribute("referrerpolicy","strict-origin-when-cross-origin"),t.title=e||"فيديو",t.allow="autoplay; fullscreen; picture-in-picture; encrypted-media; clipboard-write",t.allowFullscreen=!0,t.src=n.src;else{(t=document.createElement("video")).controls=!0,t.preload="metadata",t.setAttribute("playsinline",""),t.src=n.src;var a=t.play();a&&a.catch&&a.catch(function(){})}c.appendChild(t),d&&(d.hidden=!1),o.textContent="إغلاق ✕",r.setAttribute("aria-expanded","true")}else c.textContent="",c.hidden=!0,d&&(d.hidden=!0),o.textContent="تشغيل ▶",r.setAttribute("aria-expanded","false")},a.appendChild(r),a.appendChild(c),d&&a.appendChild(d),a}function qVideoSlotHTML(e){return vidList(e&&e.video).length?'<div class="q-video-slot"></div>':""}function hydrateQVideo(e,t){var n=e&&e.querySelector(".q-video-slot");n&&vidList(t&&t.video).forEach(function(e){var t=vidItem(e.t||"🎥 فيديو السؤال",e.url);t&&n.appendChild(t)})}function renderLectureVideos(e){var t=document.getElementById("lecture-video-root");if(t){t.textContent="";var n=vidList(e&&(e.videos||e.video));if(n.length){var a=document.createElement("div");a.className="lec-audio-card";var r=document.createElement("div");r.className="lec-audio-title",r.textContent="🎬 فيديوهات أسئلة المحاضرة",a.appendChild(r),n.forEach(function(e){var t=vidItem(e.t||"🎥 فيديو",e.url);t&&a.appendChild(t)}),t.appendChild(a)}}}function clearLectureVideos(){var e=document.getElementById("lecture-video-root");e&&(e.textContent="")}function openLecture(e,t,n){currentSubject=e,hideNotFoundPage();var a=subjects[e];if(a){var r=a.lectures[t];if(r){currentLecture=t,secResetUI(),secPrepare(),urlRegistry=[],closeQuizState(),detachQNSidebar(),document.getElementById("lecture-quiz-root").innerHTML="",document.getElementById("lecture-title").textContent=r.t||"محاضرة "+(t+1),document.getElementById("lecture-subtitle").textContent=(r.d||"")+(a.en?" — "+a.en:"");var i=availableLinks(r.links).length,s=r.linkCategories||[],o=0;s.forEach(function(e){o+=availableLinks(e.links).length});var c=i+o,d=document.getElementById("ld-links-chip");d.textContent=c?c+" روابط":"لا روابط",d.className="ld-chip"+(c?"":" warn"),renderLectureLinks("ld-links-list",r.links,s);var l=lecturePDFAt(a,r),u=document.getElementById("ld-file-chip");u.textContent=l?"ملف متاح":"غير متاح",u.className="ld-chip"+(l?" ok":""),document.getElementById("ld-file-meta").innerHTML=l?"":'<p class="ld-hint">مفيش ملف مرفق بالمحاضرة دي.</p>',renderAttachCard("ld-attach-card",r.t,l),document.getElementById("lecture-content-area").innerHTML="",renderNotesCard(r),renderSummary(r),renderTranscript(r),renderLectureAudio(r),renderLectureVideos(r);var p=(r.questions||[]).length,f=Object.keys(getSavedQuizFor(a,lecQuizKey(r))).length,m=document.getElementById("ld-quiz-chip");if(p?f>=p?(m.textContent="مكتمل ✅",m.className="ld-chip ok"):f>0?(m.textContent=f+"/"+p,m.className="ld-chip warn"):(m.textContent=p+" سؤال",m.className="ld-chip"):(m.textContent="لا أسئلة",m.className="ld-chip"),["ld-links","ld-file","ld-summary","ld-transcript","ld-quiz"].forEach(function(e){document.getElementById(e).classList.remove("open")}),showView("lecture-view"),renumberLD(),saveLS({subject:e,view:"lecture",lecture:t,prop:null,qidx:null}),window.scrollTo({top:0,behavior:"smooth"}),!n)try{var h=r.id||lecSlug(r.t)||"lecture-"+(t+1);history.pushState({subject:SUBJECTS_INDEX[e].slug,lecture:h,view:"lecture"},"",urlForLecture(e,t))}catch(e){}}}}function openLectureQuizSection(){var e=subjects[currentSubject];if(e){var t=e.lectures[currentLecture],n=document.getElementById("ld-quiz");n&&n.classList.add("open");var a=document.getElementById("lecture-quiz-root");if(!t||!t.questions||!t.questions.length)return a.innerHTML='<p class="ld-hint">مفيش أسئلة متاحة للمحاضرة دي.</p>',void setQuizMode(!1);st&&st.key===lecQuizKey(t)&&st.root===a?setQuizMode(!0):renderQuizInto(a,e,lecQuizKey(t),t.t,t.questions,{kind:"lecture",name:t.t}),n&&n.scrollIntoView({behavior:"smooth",block:"start"})}}function toggleLD(e){var t=document.getElementById(e);if(t){var n=!t.classList.contains("open");t.classList.toggle("open"),"ld-quiz"===e&&(n?openLectureQuizSection():setQuizMode(!1))}}function openQuiz(e,t,n){currentSubject=e,hideNotFoundPage();var a=subjects[e];if(a){var r,i,s,o="lec"===t;if(o?(i=(r=a.lectures[n])&&r.questions||[],s=lecExamPDFAt(r)):(i=(r=(a[t]||[])[n])?getQuizData(a,r):[],s=examPDFAt(r)),r){urlRegistry=[];var c=o?lecExamKey(r):r.t||"اختبار",d=o?r.pdf2?"ملف أسئلة المحاضرة":"ملف المحاضرة":"ملف الامتحان";document.getElementById("quiz-title").innerHTML='<span class="tb-title">'+esc((r.t||"اختبار")+" — "+a.name)+"</span>"+(s?'<button class="tb-pdf-btn" onclick="openPdfAndScroll()" title="فتح الملف">📄 PDF</button>':"");var l=document.getElementById("quiz-pdf-area");if(s){var u=regUrl(pdfDownloadUrl(s)),p=pdfEmbedUrl(s),f=pdfViewerUrl(s);l.innerHTML='<div class="attach-card ax-sec" id="pdf-sec"><div class="attach-head"><button class="sec-toggle attach-toggle" aria-expanded="false" aria-controls="pdf-body" onclick="toggleSection(\'pdf\')" title="فتح / إغلاق القسم"><span class="attach-title">📄 '+d+'</span><span class="sec-arrow">⌄</span></button><button class="btn-sm" style="background:var(--download-btn-bg);" onclick="downloadPDFAt('+u+');ensureSectionOpen(\'pdf\');">⬇ تحميل PDF</button></div><div class="attach-line"></div><div class="sec-body" id="pdf-body">'+(f?'<div class="pdf-viewer annotator-frame"><iframe class="annotator-iframe" title="'+escAttr(d)+'" data-annot-url="'+escAttr(s)+'" data-src="'+escAttr(f)+'"></iframe></div>':'<div class="pdf-viewer"><iframe loading="lazy" title="'+escAttr(d)+'" data-src="'+escAttr(p)+'"></iframe></div>')+'<p class="ld-hint" style="margin-top:8px;">الملف مش بيظهر فوق؟ <a href="#" onclick="downloadPDFAt('+u+');return false;" style="color:var(--accent);font-weight:bold;">نزّليه مباشرة 📥</a></p></div></div>'}else l.innerHTML="";var m=document.getElementById("quiz-view-root");i.length?(renderQuizInto(m,a,c,r.t,i,{kind:o?"lecture":t,name:r.t}),applySectionStates()):(m.innerHTML='<p class="ld-hint" style="font-size:16px;">⚠️ مفيش أسئلة متاحة هنا.</p>',setQuizMode(!1)),showView("quiz-view"),saveLS({subject:e,view:"quiz",prop:t,qidx:n}),window.scrollTo({top:0,behavior:"smooth"})}else showToast("مش لاقيين العنصر ده")}}function openQuizByType(e,t){openQuiz(currentSubject,e,t)}function closeQuizState(){st=null,setQuizMode(!1)}function closeQuizEverywhere(){closeQuizState(),detachQNSidebar(),["lecture-quiz-root","quiz-view-root","quiz-pdf-area"].forEach(function(e){var t=document.getElementById(e);t&&(t.innerHTML="")})}function goBackToMain(){closeQuizEverywhere(),renderAllLists(),showView("main-view"),saveLS({view:"main",lecture:-1,prop:null,qidx:null}),window.scrollTo({top:0,behavior:"smooth"});try{var e=SUBJECTS_INDEX[currentSubject];e&&history.pushState({subject:e.slug,view:"main"},"",urlForSubject(currentSubject))}catch(e){}}function goBackFromQuiz(){closeQuizEverywhere(),renderAllLists(),showView("main-view"),openTab(null,"section2"),saveLS({view:"main",lecture:-1,prop:null,qidx:null,tab:"section2"}),window.scrollTo({top:0,behavior:"smooth"})}function wordExtras(e){var t=qTxt(e&&e.translation),n=qTxt(e&&e.explanation),a="";return t&&(a+='<div style="margin-top:4pt;"><b>الترجمة:</b> '+esc(t).replace(/\n/g,"<br>")+"</div>"),n&&(a+='<div style="margin-top:4pt;padding:6pt;background:#eef6ff;border-right:4px solid #3498db;"><b>لماذا هذه الإجابة؟</b><br>'+esc(n).replace(/\n/g,"<br>")+"</div>"),a}function downloadWord(e,t,n){if(e&&e.length){var a=e.map(function(e,t){if(isEssay(e))return'<div style="margin-bottom:14pt;"><div style="font-weight:bold;">'+(t+1)+") "+esc(e.q)+' <span style="color:#e67e22;">[مقالي]</span></div><div style="margin-top:4pt;padding:8pt;background:#fff8e1;border-right:4px solid #f39c12;"><b>الإجابة النموذجية:</b><br>'+esc(e.answer||"").replace(/\n/g,"<br>")+"</div>"+(e.tags&&e.tags.length?'<div style="color:#7f8c8d;font-size:10pt;margin-top:3pt;">🏷️ '+e.tags.map(esc).join(" • ")+"</div>":"")+(e.ref?'<div style="color:#7f8c8d;font-size:10pt;">📚 '+esc(e.ref)+"</div>":"")+wordExtras(e)+"</div>";var a=(e.options||[]).map(function(t,n){var a=n===e.correct?" ✅":"";return'<div style="margin-right:14pt;">'+(n+1)+") "+esc(t)+a+"</div>"}).join(""),r=void 0!==e.correct&&null!==e.correct&&void 0!==(e.options||[])[e.correct]?e.correct+1+" — "+esc(e.options[e.correct]):"—",i="",s=n&&n.length>t?n[t]:void 0;if(null!=s&&void 0!==(e.options||[])[s]){var o=s===e.correct;i='<div style="color:'+(o?"#1e8449":"#c0392b")+';font-weight:bold;margin-top:3pt;">'+(o?"✔ إجابتك: ":"✘ إجابتك: ")+esc(e.options[s])+(o?" (صحيحة)":" (خطأ)")+"</div>"}return'<div style="margin-bottom:14pt;"><div style="font-weight:bold;">'+(t+1)+") "+esc(e.q)+"</div>"+a+i+'<div style="color:#1e8449;font-weight:bold;margin-top:3pt;">الإجابة الصحيحة: '+r+"</div>"+wordExtras(e)+"</div>"}).join(""),r='<html dir="rtl" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word"><head><meta charset="utf-8"><title>'+esc(t)+'</title></head><body style="font-family:Arial,Verdana;font-size:12pt;direction:rtl;"><h2 style="text-align:center;margin-bottom:4pt;">'+esc(t)+'</h2><hr><p style="text-align:center;">عدد الأسئلة: '+e.length+"</p>"+a+"</body></html>",i=String(t||"أسئلة").replace(/[\\\/:*?"<>|]/g,"-")+".doc";triggerDownload(new Blob(["\ufeff"+r],{type:"application/msword"}),i),showToast("تم تحميل ملف Word 📥")}else showToast("لا توجد أسئلة للتحميل")}function triggerDownload(e,t){var n=document.createElement("a"),a=URL.createObjectURL(e);n.href=a,n.download=t,document.body.appendChild(n),n.click(),setTimeout(function(){try{URL.revokeObjectURL(a)}catch(e){}n.remove()},2e3)}var QUIZ_CSS=":root{--bg-body:#fff;--bg-header:#111;--bg-content:#fff;--bg-card:#f8f8f8;--bg-card-hover:#eee;--bg-quiz-card:#fff;--text-primary:#000;--text-secondary:#222;--text-heading:#000;--text-hint:#555;--text-white:#fff;--accent:#0055cc;--accent-hover:#0044aa;--success:#27ae60;--success-light:#2ecc71;--danger:#e74c3c;--warning:#f39c12;--border:#ccc;--shadow:rgba(0,0,0,.08);--score-bg-1:#111;--score-bg-2:#333;--show-score-bg-1:#111;--show-score-bg-2:#333;--show-score-shadow:rgba(0,0,0,.3);--subtab-bg:#f8f8f8;--subtab-active-bg:#27ae60;--wrong-card-bg:#fdecea;--wrong-card-border:#e74c3c;--wrong-card-text:#c0392b;--correct-card-bg:#eafaf1;--correct-card-border:#27ae60;--correct-card-text:#1e8449;--no-wrong-bg:#eafaf1;--no-wrong-border:#27ae60;--no-wrong-text:#1e8449;--wrong-title-bg:#e74c3c}[data-theme=morning]{--bg-body:#fef9ef;--bg-header:#e67e22;--bg-content:#fffdf7;--bg-card:#fef5e7;--bg-card-hover:#fdebd0;--bg-quiz-card:#fffdf7;--text-primary:#5d4037;--text-secondary:#795548;--text-heading:#bf6516;--text-hint:#a1887f;--accent:#e67e22;--accent-hover:#d35400;--border:#f0d9b5;--shadow:rgba(230,126,34,.1);--score-bg-1:#e67e22;--score-bg-2:#f39c12;--show-score-bg-1:#e67e22;--show-score-bg-2:#f39c12;--show-score-shadow:rgba(230,126,34,.4);--subtab-bg:#fef5e7;--subtab-active-bg:#27ae60;--wrong-title-bg:#e74c3c}[data-theme=night]{--bg-body:#0a0a14;--bg-header:#12121f;--bg-content:#12121f;--bg-card:#1a1a2e;--bg-card-hover:#22223a;--bg-quiz-card:#12121f;--text-primary:#d4d4e8;--text-secondary:#9999bb;--text-heading:#eef;--text-hint:#668;--accent:#6c8cff;--border:#2a2a44;--shadow:rgba(0,0,0,.5);--subtab-bg:#1a1a2e;--subtab-active-bg:#27ae60}*{box-sizing:border-box}body{font-family:'Segoe UI',Tahoma,sans-serif;background:var(--bg-body);margin:0;color:var(--text-primary)}header{background:var(--bg-header);color:#fff;text-align:center;padding:10px}header h1{margin:0}.theme-pill{background:rgba(255,255,255,.15);color:#fff;border:2px solid transparent;padding:6px 14px;border-radius:50px;cursor:pointer;font-size:13px;font-weight:bold;margin:4px}.theme-pill.active{border-color:#fff}.container{max-width:980px;margin:20px auto;padding:0 16px 60px}.content-section{display:none;background:var(--bg-content);padding:30px;border-radius:10px}.content-section.active{display:block}.sub-tab-button{background:var(--subtab-bg);color:var(--text-primary);border:none;padding:10px 18px;cursor:pointer;border-radius:20px;margin:4px;font-family:inherit}.sub-tab-button.active{background:var(--subtab-active-bg);color:#fff;font-weight:bold}.sub-content{display:none}.sub-content.active{display:block}.exam-row{display:flex;align-items:center;gap:12px;background:var(--bg-card);border:2px solid var(--border);border-radius:14px;padding:12px 16px;margin-bottom:10px;cursor:pointer}.er-play{width:44px;height:44px;border-radius:50%;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center}.er-main{flex:1}.er-title{font-weight:bold;color:var(--text-heading)}.er-tag{padding:4px 12px;border-radius:12px;font-size:11px;font-weight:bold;background:var(--success);color:#fff}.er-num{min-width:38px;height:38px;border-radius:50%;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:bold}.exam-qcard{background:var(--bg-quiz-card);border:2px solid var(--border);border-radius:14px;padding:24px;position:relative}.exam-opt{border:2px solid var(--border);background:var(--bg-card);border-radius:12px;padding:14px 16px;cursor:pointer;text-align:right;font-size:16px;margin-bottom:8px;font-family:inherit}.exam-opt.correct{background:var(--success);color:#fff}.exam-opt.wrong{background:var(--danger);color:#fff}.score-card{background:linear-gradient(135deg,var(--score-bg-1),var(--score-bg-2));color:#fff;border-radius:10px;padding:35px 25px;text-align:center;margin:15px 0}.back-btn{background:var(--danger);color:#fff;border:none;padding:10px 20px;border-radius:5px;cursor:pointer;margin-bottom:20px;font-family:inherit}.qn-btn{aspect-ratio:1/1;border:2px solid var(--border);background:var(--bg-card);color:var(--text-primary);border-radius:8px;cursor:pointer;font-weight:bold;padding:4px;font-family:inherit}.qn-btn.ok{background:var(--success);color:#fff}.qn-btn.bad{background:var(--danger);color:#fff}.qn-grid{display:grid;grid-template-columns:repeat(8,1fr);gap:5px;margin-top:10px}.qmark-btn{background:var(--bg-card);border:2px solid var(--border);padding:4px 12px;border-radius:12px;cursor:pointer;font-family:inherit}.qmark-btn.on{background:var(--warning);color:#fff}.res-word-btn{background:var(--accent);color:#fff;border:none;padding:12px 22px;border-radius:12px;cursor:pointer;margin:4px;font-family:inherit;font-weight:bold}.res-word-btn.wrong{background:var(--danger)}.res-word-btn.marked{background:var(--warning)}",QUIZ_HEAD='<!DOCTYPE html>\n<html lang="ar" dir="rtl" data-theme="noon">\n<head>\n<meta charset="UTF-8"><title>أسئلة</title><style>'+QUIZ_CSS+'</style></head><body>\n<header><h1 id="main-title"></h1><div><button class="theme-pill active" onclick="setThemeMode(\'noon\')">☀️</button><button class="theme-pill" onclick="setThemeMode(\'night\')">🌙</button><button class="theme-pill" onclick="setThemeMode(\'auto\')">🔄</button></div></header>\n<div class="container"><div id="main-view" class="content-section active"><h2>بنك الأسئلة</h2><div id="sub-tabs"></div><div id="sub-lec" class="sub-content active"><div id="list-lec"></div></div><div id="sub-mid" class="sub-content"><div id="list-mid"></div></div><div id="sub-fin" class="sub-content"><div id="list-fin"></div></div><div id="sub-bank" class="sub-content"><div id="list-bank"></div></div></div><div id="quiz-view" class="content-section"><button class="back-btn" onclick="backToList()">← العودة</button><div class="exam-titlebar" id="quiz-title"></div><div id="quiz-view-root"></div></div></div>\n<script>';function STANDALONE_ENGINE(){var e=[["lec","📚 المحاضرات"],["mid","📝 ميدتيرم"],["fin","🎓 فاينل"],["bank","🏦 بنك"]],t="lec",n=null;try{localStorage.getItem("themeMode")}catch(e){}function a(e){return String(null==e?"":e).replace(/[&<>"']/g,function(e){return"&"===e?"&amp;":"<"===e?"&lt;":">"===e?"&gt;":'"'===e?"&quot;":"&#39;"})}function r(e){["main-view","quiz-view"].forEach(function(t){var n=document.getElementById(t);n&&n.classList.toggle("active",t===e)})}function i(){document.getElementById("sub-tabs").innerHTML=e.map(function(e){var n=(DATA[e[0]]||[]).length;return'<button class="sub-tab-button'+(e[0]===t?" active":"")+'" onclick="setTab(\''+e[0]+"')\">"+e[1]+" ("+n+")</button>"}).join("")}function s(){var e=DATA[t]||[],n=document.getElementById("list-"+t);e.length?n.innerHTML=e.map(function(e,t){var n=function(e){try{var t=localStorage.getItem("quiz_progress_"+DATA.name);return(t?JSON.parse(t):{})[e]||null}catch(e){return null}}(e.t);return'<div class="exam-row" onclick="openQuizAt('+t+')"><span class="er-play">▶</span><span class="er-main"><span class="er-title">'+a(e.t)+'</span></span><span class="er-tag">'+(n?"🏆 "+n.score+"%":"جديد")+'</span><span class="er-num">'+e.questions.length+"</span></div>"}).join(""):n.innerHTML="<p>مفيش حاجة هنا.</p>"}function o(){var e=document.getElementById("qa-area");if(e){var t=n.current,r=n.data[t];if(r){var i=(r.options||[]).map(function(e,i){return'<div class="exam-opt'+(n.answered[t]===i?i===r.correct?" correct":" wrong":"")+'" onclick="selectAnswer('+t+","+i+')">'+a(e)+"</div>"}).join("");e.innerHTML='<div class="exam-qcard"><div>السؤال '+(t+1)+" من "+n.data.length+'</div><div style="font-size:18px;font-weight:bold;margin:14px 0">'+a(r.q)+"</div>"+i+"</div>"}}}window.setThemeMode=function(e){document.documentElement.setAttribute("data-theme","auto"===e?"noon":e)},window.setTab=function(e){t=e,i(),document.querySelectorAll(".sub-content").forEach(function(t){t.classList.toggle("active",t.id==="sub-"+e)}),s()},window.openQuizAt=function(e){var i=(DATA[t]||[])[e];i&&(document.getElementById("quiz-title").innerHTML=a(i.t),function(e,t,a){n={key:t,data:a.slice(),answered:{},current:0,finished:!1};var r=function(e){try{var t=localStorage.getItem("qa_"+DATA.name+"_"+e);return t?JSON.parse(t):{}}catch(e){return{}}}(t);Object.keys(r).forEach(function(e){n.answered[e]=r[e]}),e.innerHTML='<div id="qa-area"></div><div id="results-area"></div><div id="score-btn-area"></div>',o()}(document.getElementById("quiz-view-root"),i.t,i.questions),r("quiz-view"))},window.backToList=function(){n=null,document.getElementById("quiz-view-root").innerHTML="",s(),r("main-view")},window.selectAnswer=function(e,t){void 0===n.answered[e]&&(n.answered[e]=t,function(e,t){try{localStorage.setItem("qa_"+DATA.name+"_"+e,JSON.stringify(t))}catch(e){}}(n.key,n.answered),o())},i(),s(),r("main-view")}function downloadQuestionsPageHTML(){if(subjects.length){var e=subjects[currentSubject];if(e){var t=(e.lectures||[]).map(function(e){return{t:e.t||"محاضرة",d:e.d||"",questions:e.questions||[]}}).filter(function(e){return e.questions.length}),n={name:e.name,en:e.en||"",icon:e.icon||"📚",lec:t,mid:s(e.midterms),fin:s(e.finals),bank:s(e.testBanks)},a=JSON.stringify(n).replace(/<\/script/gi,"<\\/script"),r=QUIZ_HEAD+"\nvar DATA = "+a+";\n"+STANDALONE_ENGINE.toString()+"\nSTANDALONE_ENGINE();\n<\/script></body></html>",i="اسئلة-"+String(e.name).replace(/[\\\/:*?"<>|]/g,"-")+".html";triggerDownload(new Blob([r],{type:"text/html;charset=utf-8"}),i),showToast("📥 اتنزّلت نسخة أسئلة: "+e.name)}else showToast("المادة مش محمّلة")}else showToast("لا توجد بيانات للتحميل");function s(t){return(t||[]).map(function(t){return{t:t.t||"اختبار",d:t.d||"",questions:getQuizData(e,t)}}).filter(function(e){return e.questions.length})}}var _searchTimer=null,_searchResults=[];function doSearch(){clearTimeout(_searchTimer),_searchTimer=setTimeout(runSearch,250)}function clearSearch(){var e=document.getElementById("search-input"),t=document.getElementById("search-results"),n=document.getElementById("search-clear");e&&(e.value=""),t&&(t.classList.remove("show"),t.innerHTML=""),n&&n.classList.remove("show")}function snippet(e,t){var n=String(e||""),a=n.toLowerCase().indexOf(t.toLowerCase());if(-1===a)return esc(n.length>90?n.slice(0,90)+"…":n);var r=Math.max(0,a-40),i=Math.min(n.length,a+t.length+50),s=(r>0?"…":"")+n.slice(r,a),o=n.slice(a,a+t.length),c=n.slice(a+t.length,i)+(i<n.length?"…":"");return esc(s)+"<mark>"+esc(o)+"</mark>"+esc(c)}function runSearch(){var e=document.getElementById("search-input"),t=document.getElementById("search-results"),n=document.getElementById("search-clear");if(e&&t){var a=e.value.trim();if(n&&n.classList.toggle("show",a.length>0),a.length<2)return t.classList.remove("show"),void(t.innerHTML="");var r=a.toLowerCase(),i=40,s=[];SUBJECTS_INDEX.forEach(function(e,t){var n=subjects[t];n&&(n.lectures||[]).forEach(function(e,n){s.length>=i||-1!==((e.t||"")+" "+(e.d||"")).toLowerCase().indexOf(r)&&s.push({si:t,type:"lecture",li:n,text:e.d&&-1!==e.d.toLowerCase().indexOf(r)?e.d:e.t||""})})}),SUBJECTS_INDEX.forEach(function(e,t){var n=subjects[t];n&&(n.lectures||[]).forEach(function(e,n){s.length>=i||(e.questions||[]).forEach(function(e,a){s.length>=i||e.q&&-1!==String(e.q).toLowerCase().indexOf(r)&&s.push({si:t,type:"question",prop:"lec",ei:n,qi:a,text:e.q})})})}),SUBJECTS_INDEX.forEach(function(e,t){var n=subjects[t];n&&["midterms","finals","testBanks"].forEach(function(e){(n[e]||[]).forEach(function(a,o){s.length>=i||getQuizData(n,a).forEach(function(n,a){s.length>=i||n.q&&-1!==String(n.q).toLowerCase().indexOf(r)&&s.push({si:t,type:"question",prop:e,ei:o,qi:a,text:n.q})})})})}),_searchResults=s;var o="";s.length?(o='<div class="sr-header">نتائج البحث عن: "'+esc(a)+'" — '+s.length+(s.length>=i?" (أول 40 نتيجة)":" نتيجة")+'</div><div class="sr-list">',s.forEach(function(e,t){var n=subjects[e.si];if(n){var r;if("lecture"===e.type)r="📚 "+(((n.lectures||[])[e.li]||{}).t||"");else if("lec"===e.prop)r="🧠 "+(((n.lectures||[])[e.ei]||{}).t||"");else{var i=(n[e.prop]||[])[e.ei]||{};r=("midterms"===e.prop?"📝 ":"finals"===e.prop?"🎓 ":"🏦 ")+(i.t||"")}o+='<div class="sr-item" onclick="openSearchResult('+t+')"><div class="sr-src"><b>'+esc(n.name)+"</b> — "+esc(r)+'</div><div class="sr-text" dir="auto">'+snippet(e.text,a)+"</div></div>"}}),o+="</div>"):o='<div class="sr-header">نتائج البحث عن: "'+esc(a)+'"</div><div class="sr-empty">.مفيش نتائج — ممكن تجرّب كلمة تانية</div>',t.innerHTML=o,t.classList.add("show")}}function openSearchResult(e){var t=_searchResults[e];if(t){if(clearSearch(),t.si!==currentSubject&&(currentSubject=t.si,setSubjectTitle(SUBJECTS_INDEX[t.si]),renderSubjectBar()),!subjects[t.si])return showSubjectLoading(),void loadSubject(t.si).then(function(){"lecture"===t.type?openLecture(t.si,t.li):openQuizAtQuestion(t.si,t.prop,t.ei,t.qi)}).catch(function(e){showToast("📴 تعذّر تحميل المادة — ممكن تتأكد من النت وتجرّب تاني")});"lecture"===t.type?openLecture(t.si,t.li):openQuizAtQuestion(t.si,t.prop,t.ei,t.qi)}}function openQuizAtQuestion(e,t,n,a){openQuiz(e,t,n),st&&st.data.length&&a>=0&&a<st.data.length&&setTimeout(function(){examGoTo(a)},60)}function mergePdfAnnot(e,t,n){var a,r;try{a=JSON.parse(e)}catch(e){a=null}try{r=JSON.parse(t)}catch(e){r=null}if(!a)return t;if(!r)return e;var i=a.pages&&"object"==typeof a.pages?a.pages:{},s=r.pages&&"object"==typeof r.pages?r.pages:{};function o(e){return Array.isArray(e)?e.map(function(e){return JSON.parse(JSON.stringify(e))}):[]}var c={};return Object.keys(i).forEach(function(e){c[e]=o(i[e])}),Object.keys(s).forEach(function(e){"backup"===n?c[e]=o(s[e]):"combine"===n?c[e]?c[e]=c[e].concat(o(s[e])):c[e]=o(s[e]):c[e]||(c[e]=o(s[e]))}),JSON.stringify({pages:c,name:a&&a.name||r&&r.name||"",size:a&&a.size||r&&r.size||0,savedAt:Math.max(a&&a.savedAt||0,r&&r.savedAt||0)})}function pdfAnnotHasConflict(e,t){var n,a;try{n=JSON.parse(e)}catch(e){return!1}try{a=JSON.parse(t)}catch(e){return!1}if(!(n&&a&&n.pages&&a.pages))return!1;for(var r=Object.keys(n.pages).filter(function(e){return Array.isArray(n.pages[e])&&n.pages[e].length>0}),i=Object.keys(a.pages).filter(function(e){return Array.isArray(a.pages[e])&&a.pages[e].length>0}),s=0;s<r.length;s++)if(-1!==i.indexOf(r[s]))return!0;return!1}function showPdfMergeDialog(e){var t=document.createElement("div");t.className="pdf-merge-overlay",t.innerHTML='<div class="pdf-merge-dialog"><div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;"><span style="font-size:32px;">📄</span><h2>تعارض في تخطيطات PDF</h2></div><p class="pdf-merge-warn">⚠️ عندك رسم على بعض صفحات PDF، والنسخة المستوردة فيها رسم على <b>نفس الصفحات</b>.<br>اختاري عايزة تتعامل مع الصفحات المشتركة إزاي:</p><div class="pdf-merge-options"><button class="pdf-merge-btn combine" data-strategy="combine"><span>🟣 ادمج الاتنين <span class="pm-badge">موصى به</span></span><span class="pm-desc">كل الرسمات تظهر مع بعض — محدش يخسر شغله</span></button><button class="pdf-merge-btn current" data-strategy="current"><span>🔵 احتفظ بتخطيطي الحالي</span><span class="pm-desc">رسمك يكسب — رسم المستورد يضاف بس في الصفحات الجديدة</span></button><button class="pdf-merge-btn backup" data-strategy="backup"><span>🟢 استخدم تخطيط المستورد فقط</span><span class="pm-desc">رسم المستورد يكسب — رسمك الحالي يتشال</span></button></div><button class="pdf-merge-cancel" id="__cancelPdfMerge">إلغاء</button></div>',document.body.appendChild(t),t.querySelectorAll("[data-strategy]").forEach(function(n){n.addEventListener("click",function(){var a=n.getAttribute("data-strategy");document.body.removeChild(t),e(a)})}),t.querySelector("#__cancelPdfMerge").addEventListener("click",function(){document.body.removeChild(t)})}document.addEventListener("click",function(e){var t=document.getElementById("search-results"),n=document.getElementById("search-input");t&&t.classList.contains("show")&&!t.contains(e.target)&&n&&!n.contains(e.target)&&t.classList.remove("show")});var PROGRESS_KEYS=["dept_v1","last_open_state","themeMode","notifications_data","cg_sections_v1","seen_system_edits","seen_added_lectures","seen_announcements","sd.insOpenDays"],PROGRESS_PREFIXES=["last_open_state_","qa_","quiz_progress_","qmark_","pdfqalam:"],BACKUP_MAX_BYTES=5242880;function exportProgress(){var e={_app:"study-platform-backup",_version:1,_date:(new Date).toLocaleString("ar-EG")},t=0;try{for(var n=0;n<localStorage.length;n++){var a=localStorage.key(n);if(a){var r=-1!==PROGRESS_KEYS.indexOf(a);if(!r)for(var i=0;i<PROGRESS_PREFIXES.length;i++)if(0===a.indexOf(PROGRESS_PREFIXES[i])){r=!0;break}r&&(e[a]=localStorage.getItem(a),t++)}}}catch(e){}if(t){var s=new Date,o="backup-"+s.getFullYear()+"-"+String(s.getMonth()+1).padStart(2,"0")+"-"+String(s.getDate()).padStart(2,"0")+".json";triggerDownload(new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),o),showToast("💾 تم تحميل النسخة الاحتياطية ("+t+" عنصر)")}else showToast("مفيش تقدم محفوظ لسه")}function notifFingerprint(e){return e=e||{},JSON.stringify([e.type||"",e.title||"",e.message||"",e.subject||"",e.lectureTitle||"",e.lectureDesc||"",e.context||"",null==e.questionNum?"":e.questionNum,e.questionText||"",e.oldAnswer||"",e.newAnswer||""])}function mergeNotificationsFromBackup(e){var t,n=[];try{t=JSON.parse(e)}catch(e){return null}if(!Array.isArray(t))return null;try{n=JSON.parse(localStorage.getItem("notifications_data")||"[]")}catch(e){n=[]}Array.isArray(n)||(n=[]);var a={},r={},i=0,s=0;n.forEach(function(e){e&&"object"==typeof e&&(a[notifFingerprint(e)]=e,"number"==typeof e.id&&(r[e.id]=1,e.id>i&&(i=e.id)))}),t.forEach(function(e){if(e&&"object"==typeof e){var t=notifFingerprint(e),o=a[t];if(o)e.read&&(o.read=!0);else{var c={};Object.keys(e).forEach(function(t){c[t]=e[t]}),("number"!=typeof c.id||r[c.id])&&(c.id=++i),r[c.id]=1,c.id>i&&(i=c.id),a[t]=c,n.push(c),s++}}}),n.sort(function(e,t){return(t.id||0)-(e.id||0)}),n.length>50&&(n=n.slice(0,50));try{localStorage.setItem("notifications_data",JSON.stringify(n))}catch(e){return null}return{added:s,total:n.length}}function mergeSeenList(e,t){var n,a=[];try{n=JSON.parse(t)}catch(e){return!1}if(!Array.isArray(n))return!1;try{a=JSON.parse(localStorage.getItem(e)||"[]")}catch(e){a=[]}Array.isArray(a)||(a=[]),n.forEach(function(e){-1===a.indexOf(e)&&a.push(e)});try{return localStorage.setItem(e,JSON.stringify(a)),!0}catch(e){return!1}}function importProgress(e){var t=e.target.files&&e.target.files[0];if(e.target&&(e.target.value=""),t)if(t.size>BACKUP_MAX_BYTES)showToast("❌ الملف كبير جدًا");else{var n=new FileReader;n.onload=function(){try{var e;try{e=JSON.parse(n.result)}catch(e){return void showToast("❌ الملف ده مش نسخة احتياطية صالحة")}if(!e._app||"study-platform-backup"!==e._app)return void showToast("❌ الملف مش نسخة احتياطية من المنصة دي");if(!window.confirm("هيتم دمج النسخة الاحتياطية مع تقدمك الحالي. هتكمّل؟"))return;var t=0,a=0;Object.keys(e).forEach(function(n){if("_"!==n.charAt(0)&&"string"==typeof e[n])if("notifications_data"!==n)if("seen_system_edits"!==n&&"seen_added_lectures"!==n&&"seen_announcements"!==n)try{localStorage.setItem(n,e[n]),t++}catch(e){}else mergeSeenList(n,e[n])&&t++;else{var r=mergeNotificationsFromBackup(e[n]);r&&(a=r.added,t++)}}),showToast("✅ تم دمج "+t+" عنصر"+(a?" (+"+a+" إشعار جديد)":"")+" — جاري إعادة التحميل..."),setTimeout(function(){location.reload()},1e3)}catch(e){showToast("❌ الملف مش نسخة احتياطية صالحة")}},n.readAsText(t)}}function dashBtnHtml(){return'<button class="subj-btn '+(document.body.classList.contains("dashboard-mode")?"active":"")+'" onclick="openDashboard()" title="الجدول" aria-label="الجدول"><span>📊</span><span style="display:flex;flex-direction:column;align-items:flex-start;line-height:1.25;"><span>الجدول</span><span style="font-size:10px;opacity:.8;font-weight:normal;">Schedule</span></span></button>'}function openDashboard(e){if(document.body.classList.add("dashboard-mode"),document.body.classList.remove("instructors-mode"),document.body.classList.remove("progress-mode"),closeQuizEverywhere(),detachQNSidebar(),setQuizMode(!1),document.getElementById("main-title").textContent="الجدول الدراسي",renderSubjectBar(),showView("dashboard-view"),window.scrollTo({top:0,behavior:"smooth"}),saveLS({subject:currentSubject,view:"dashboard",lecture:-1,prop:null,qidx:null}),!e)try{history.pushState({view:"dashboard"},"",location.pathname+"?page=schedule")}catch(e){}window.dashOpen&&window.dashOpen()}var _pgTok=0;function progBtnHtml(){return'<button class="subj-btn '+(document.body.classList.contains("progress-mode")?"active":"")+'" onclick="openProgress()" title="ملخص التقدم" aria-label="ملخص التقدم"><span>📈</span><span style="display:flex;flex-direction:column;align-items:flex-start;line-height:1.25;"><span>ملخص التقدم</span><span style="font-size:10px;opacity:.8;font-weight:normal;">Dashboard</span></span></button>'}function openProgress(e){if(hideNotFoundPage(),document.body.classList.remove("dashboard-mode"),document.body.classList.remove("instructors-mode"),document.body.classList.add("progress-mode"),closeQuizEverywhere(),detachQNSidebar(),setQuizMode(!1),document.getElementById("main-title").textContent="📈 ملخص التقدم",renderSubjectBar(),showView("progress-view"),window.scrollTo({top:0,behavior:"smooth"}),saveLS({view:"progress",lecture:-1,prop:null,qidx:null}),!e)try{history.pushState({view:"progress"},"",location.pathname+"?page=dashboard")}catch(e){}requestAnimationFrame(renderProgress)}function pgSolved(e,t,n){var a=getSavedQuizFor(e,t),r=0;return Object.keys(a).forEach(function(e){var t=parseInt(e,10);!isNaN(t)&&t>=0&&t<n.length&&!isEssay(n[t])&&r++}),r}function pgCalc(e){var t={lecs:[],solved:0,total:0,scores:[]};return(e.lectures||[]).forEach(function(n,a){var r=n.questions||[],i=0;r.forEach(function(e){isEssay(e)||i++});var s=Math.min(i,Math.max(pgSolved(e,lecQuizKey(n),r),pgSolved(e,lecExamKey(n),r))),o=getScore(e,lecQuizKey(n))||getScore(e,lecExamKey(n)),c=null;o&&void 0!==o.score&&!isNaN(parseFloat(o.score))&&(c=Math.round(parseFloat(o.score))),t.lecs.push({i:a,t:n.t||"محاضرة "+(a+1),total:i,solved:s,score:c,chapter:lecChapterOf(e,n,a)}),t.solved+=s,t.total+=i,null!==c&&t.scores.push(c)}),t}function pgAvg(e){if(!e.length)return null;var t=0;return e.forEach(function(e){t+=e}),Math.round(t/e.length)}function pgBadge(e){return null===e?'<span class="pg-sc">— لا درجة</span>':'<span class="badge '+(e>=75?"done":e>=50?"warn":"bad")+'">🏆 '+e+"%</span>"}function pgBar(e,t){return'<div class="pg-bar"><i style="width:'+(t?Math.round(100*e/t):0)+'%"></i></div>'}var _warmed={};function warmSubjectFiles(e){return Promise.all(e.map(function(e){var t=SUBJECTS_INDEX[e];return t&&t.file&&!subjects[e]?(_warmed[t.file]||(_warmed[t.file]=fetch(t.file).then(function(e){return e.arrayBuffer()}).catch(function(){})),_warmed[t.file]):null}))}function renderProgress() {
  var box = document.getElementById("progress-body");
  if (!box) return;
  var idxs = getActiveSubjects();
  if (!idxs.length) {
    box.innerHTML = '<p class="ld-hint">لا توجد مواد.</p>';
    return;
  }
  var tok = ++_pgTok;
  var missing = idxs.filter(function (i) {
    return !subjects[i];
  });
  // ★ كل حاجة متحمّلة → رسم فوري بدون أي لودر (الحالة الأكثر شيوعًا بعد الـ idle preload)
  if (!missing.length) {
    pgDraw(box, idxs);
    return;
  }
  // ★ اعرض هيكل اللودر فورًا قبل أي تحميل (يمنع الشاشة الفاضية ويمنع CLS)
  var rowsHtml = idxs
    .map(function (i) {
      var m = SUBJECTS_INDEX[i] || {};
      var done = !!subjects[i];
      return (
        '<div class="pl-item' +
        (done ? " done" : "") +
        '" data-subj="' +
        i +
        '">' +
        '<span class="pl-ic">' +
        (m.icon || "📚") +
        "</span>" +
        '<span class="pl-name">' +
        esc(m.name || "") +
        (m.en ? "<small>" + esc(m.en) + "</small>" : "") +
        "</span>" +
        '<span class="pl-status">' +
        (done ? "✅" : "⏳") +
        "</span>" +
        "</div>"
      );
    })
    .join("");
  box.innerHTML =
    '<div class="pl-wrap">' +
    '<div class="pl-head">' +
    '<div class="pl-spin"></div>' +
    "<div>" +
    "<h3>⏳ جاري تجميع بيانات المواد</h3>" +
    '<p class="pl-sub">بنحضّر موادك مرة واحدة بس — بعد كده ملخص التقدم هيفتح فورًا.</p>' +
    "</div>" +
    "</div>" +
    '<div class="pl-bar-wrap"><div class="pl-bar" id="pl-bar-fill"></div></div>' +
    '<div class="pl-list" id="pl-list">' +
    rowsHtml +
    "</div>" +
    "</div>";
  var listEl = document.getElementById("pl-list");
  var total = missing.length;
  var done = 0;
  function tick(subjIdx, failed) {
    done++;
    var fill = document.getElementById("pl-bar-fill");
    if (fill) fill.style.width = Math.round((done / total) * 100) + "%";
    var row = listEl.querySelector('[data-subj="' + subjIdx + '"]');
    if (row) {
      row.classList.add(failed ? "failed" : "done");
      var st = row.querySelector(".pl-status");
      if (st) st.textContent = failed ? "⚠️" : "✅";
    }
  }
  // ★ تسلسلي إجباري (loadDataScript بتعتمد على subjects.push بالترتيب)
  var chain = Promise.resolve();
  missing.forEach(function (i) {
    chain = chain.then(function () {
      return loadSubject(i)
        .then(function () {
          tick(i, false);
        })
        .catch(function () {
          tick(i, true);
        });
    });
  });
  chain.then(function () {
    if (tok !== _pgTok || !document.body.classList.contains("progress-mode"))
      return;
    setTimeout(function () {
      if (tok !== _pgTok || !document.body.classList.contains("progress-mode"))
        return;
      pgDraw(box, idxs);
    }, 200);
  });
}
function pgDraw(e, t) {
  var n = 0,
    a = 0,
    r = 0,
    i = [],
    s = [];
  t.forEach(function (e) {
    var t = SUBJECTS_INDEX[e],
      o = subjects[e],
      c = function (e) {
        return (
          '<div class="lc-cat-head" onclick="toggleLcCat(this)"><span class="lc-cat-icon">' +
          (t.icon || "📚") +
          '</span><span class="lc-cat-main"><span class="lc-cat-tt">' +
          esc(t.name) +
          (t.en
            ? ' <small style="opacity:.7;font-weight:normal;">' +
              esc(t.en) +
              "</small>"
            : "") +
          '</span><span class="lc-cat-dd">' +
          e +
          '</span></span><span class="link-arrow">▶</span></div>'
        );
      };
    if (o) {
      var d = pgCalc(o),
        l = pgAvg(d.scores);
      ((n += d.lecs.length),
        (a += d.solved),
        (r += d.total),
        d.scores.forEach(function (e) {
          i.push(e);
        }));
      var u =
          d.lecs.length +
          " محاضرة • حليت " +
          d.solved +
          " من " +
          d.total +
          " سؤال" +
          (null !== l ? " • متوسط الدرجة " + l + "%" : ""),
        p = null,
        f =
          d.lecs
            .map(function (t) {
              var n = "";
              return (
                t.chapter &&
                  t.chapter !== p &&
                  (n = '<div class="pg-chap">📘 ' + esc(t.chapter) + "</div>"),
                (p = t.chapter || p),
                n +
                  '<div class="pg-row" onclick="pgOpenLecture(' +
                  e +
                  "," +
                  t.i +
                  ')"><span class="pg-t">' +
                  (t.i + 1) +
                  ". " +
                  esc(t.t) +
                  '</span><span class="pg-n">' +
                  t.solved +
                  " / " +
                  t.total +
                  " سؤال</span>" +
                  pgBadge(t.score) +
                  pgBar(t.solved, t.total) +
                  "</div>"
              );
            })
            .join("") || '<p class="ld-hint">لا توجد محاضرات لهذه المادة.</p>';
      s.push(
        '<div class="lc-cat">' +
          c(u) +
          '<div class="lc-cat-body"><div class="lc-cat-links">' +
          pgBar(d.solved, d.total) +
          '<div style="height:10px"></div>' +
          f +
          "</div></div></div>",
      );
    } else
      s.push(
        '<div class="lc-cat">' +
          c("⚠️ تعذّر تحميل المادة") +
          '<div class="lc-cat-body"></div></div>',
      );
  });
  var o = r ? Math.round((100 * a) / r) : 0,
    c = pgAvg(i);
  e.innerHTML =
    '<div class="pg-sum"><div class="pg-stat"><b>' +
    t.length +
    '</b><span>مادة</span></div><div class="pg-stat"><b>' +
    n +
    '</b><span>محاضرة</span></div><div class="pg-stat"><b>' +
    a +
    " / " +
    r +
    "</b><span>سؤال محلول (" +
    o +
    '%)</span></div><div class="pg-stat"><b>' +
    (null !== c ? c + "%" : "—") +
    "</b><span>متوسط الدرجات</span></div></div>" +
    s.join("");
}
function pgOpenLecture(e, t) {
  (document.body.classList.remove("progress-mode"),
    selectSubject(e, !0),
    openLecture(e, t));
}
(!(function () {
  var e = navigator.connection;
  function t() {
    try {
      if ("undefined" == typeof SUBJECTS_INDEX) return;
      // ★ متعملش preload لو إحنا أصلاً في صفحة الداش بورد (renderProgress شغال)
      if (document.body.classList.contains("progress-mode")) return;
      var pending = getActiveSubjects().filter(function (i) {
        return !subjects[i];
      });
      if (!pending.length) return;
      // ★ تسلسلي — مش متوازي (loadDataScript تعتمد على subjects.push بالترتيب)
      var chain = Promise.resolve();
      pending.forEach(function (i) {
        chain = chain.then(function () {
          return loadSubject(i).catch(function () {});
        });
      });
    } catch (err) {}
  }
  function n() {
    setTimeout(function () {
      "requestIdleCallback" in window
        ? requestIdleCallback(t, { timeout: 8e3 })
        : t();
    }, 1500);
  }
  if (e && (e.saveData || /2g/.test(e.effectiveType || ""))) return;
  if ("complete" === document.readyState) n();
  else window.addEventListener("load", n, { once: !0 });
})(),
  (function () {
    "use strict";
    var e = [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      t = {
        Saturday: "السبت",
        Sunday: "الأحد",
        Monday: "الاثنين",
        Tuesday: "الثلاثاء",
        Wednesday: "الأربعاء",
        Thursday: "الخميس",
        Friday: "الجمعة",
      },
      n = {
        lecture: "محاضرة",
        section: "سكشن",
        lab: "معمل",
        exam: "امتحان",
        other: "أخرى",
        assignment: "تسليم",
        quiz: "كويز",
        midterm: "ميدتيرم",
        final: "فاينل",
        project: "مشروع",
      },
      a = {
        cancelled: "ملغاة",
        moved: "متغيّرة",
        online: "أونلاين",
        makeup: "تعويضية",
      },
      r = "sd.cache.v1",
      i = null,
      s = 0;
    function o(e) {
      return document.getElementById(e);
    }
    function c(e, t, n) {
      var a = document.createElement(e);
      return (t && (a.className = t), null != n && (a.textContent = n), a);
    }
    function d(e, t) {
      try {
        if (void 0 === t) return JSON.parse(localStorage.getItem(e));
        localStorage.setItem(e, JSON.stringify(t));
      } catch (e) {
        return null;
      }
    }
    function l(e) {
      var t = e.split(":");
      return 60 * +t[0] + +t[1];
    }
    function u(e) {
      return e < 60
        ? e + " دقيقة"
        : e < 1440
          ? Math.floor(e / 60) +
            " ساعة" +
            (e % 60 ? " و" + (e % 60) + " دقيقة" : "")
          : Math.floor(e / 1440) + " يوم";
    }
    function p() {
      var e = window.mysConfirmed;
      return e && e.ids && e.ids.length ? e.ids : null;
    }
    function f() {
      return !(p() || (o("d-prog").value && o("d-sec").value));
    }
    function m(e, t) {
      var n = p();
      if (n)
        return ((i && i.schedule) || [])
          .filter(function (a) {
            return (
              a.id &&
              n.indexOf(a.id) > -1 &&
              a.day === e &&
              (!a.effective_from || a.effective_from <= t.date) &&
              (!a.effective_to || a.effective_to >= t.date)
            );
          })
          .sort(function (e, t) {
            return l(e.start) - l(t.start);
          });
      if (f()) return [];
      var a = o("d-prog").value,
        r = o("d-sec").value;
      return ((i && i.schedule) || [])
        .filter(function (n) {
          return (
            n.day === e &&
            (!n.effective_from || n.effective_from <= t.date) &&
            (!n.effective_to || n.effective_to >= t.date) &&
            (!n.program || n.program === a) &&
            (!n.section || n.section.split(/[\s,]+/).indexOf(r) > -1)
          );
        })
        .sort(function (e, t) {
          return l(e.start) - l(t.start);
        });
    }
    function h(e, t) {
      var r = c("div", "dcard " + (t || "") + " " + (e.status || "")),
        i = c("div", "row");
      (i.appendChild(c("span", "tm", e.start + " – " + e.end)),
        i.appendChild(c("strong", "nm", e.course_name_ar)),
        n[e.type] && i.appendChild(c("span", "bd", n[e.type])),
        a[e.status] && i.appendChild(c("span", "bd " + e.status, a[e.status])),
        "now" === t && i.appendChild(c("span", "bd", "دلوقتي")),
        r.appendChild(i));
      var s = [e.instructor, e.location, e.notes].filter(Boolean).join(" • ");
      return (s && r.appendChild(c("div", "meta", s)), r);
    }
    function v(e, t) {
      e.appendChild(c("p", "meta", t));
    }
    function g() {
      !(function () {
        var e = !!p(),
          t = o("dashboard-view"),
          n = o("d-confnote");
        (t && t.classList.toggle("my-confirmed", e),
          n && (n.hidden = !e),
          e &&
            o("d-confn") &&
            (o("d-confn").textContent = p().length + " موعد"));
      })();
      var a,
        r =
          ((a = {}),
          new Intl.DateTimeFormat("en-GB", {
            timeZone: "Africa/Cairo",
            weekday: "long",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hourCycle: "h23",
          })
            .formatToParts(new Date())
            .forEach(function (e) {
              a[e.type] = e.value;
            }),
          {
            day: a.weekday,
            min: 60 * +a.hour + +a.minute,
            date: a.year + "-" + a.month + "-" + a.day,
            at: new Date(+a.year, +a.month - 1, +a.day, +a.hour, +a.minute),
          });
      if (
        ((o("d-today").textContent = t[r.day] + " — " + r.date),
        ["d-alerts", "d-next", "d-day", "d-dl", "d-week"].forEach(function (e) {
          o(e).textContent = "";
        }),
        i)
      ) {
        (i.announcements || [])
          .filter(function (e) {
            return (
              "important" === e.priority &&
              (!e.publish_at || e.publish_at <= r.date) &&
              (!e.expires_at || e.expires_at >= r.date)
            );
          })
          .forEach(function (e) {
            var t = c("div", "dcard alert");
            if (
              (t.appendChild(c("strong", null, "مهم: " + e.title)),
              e.body && t.appendChild(c("div", "meta", e.body)),
              e.link && /^https:\/\//i.test(e.link))
            ) {
              var n = c("a", null, "فتح الرابط");
              ((n.href = e.link),
                (n.target = "_blank"),
                (n.rel = "noopener noreferrer"),
                t.appendChild(n));
            }
            o("d-alerts").appendChild(t);
          });
        var d = e.indexOf(r.day),
          g = null,
          b = o("d-dsel").value || r.day,
          y = m(b, r);
        ((o("d-dayh").textContent =
          b === r.day ? "جدول النهاردة" : "جدول يوم " + t[b]),
          m(r.day, r).forEach(function (e) {
            !g &&
              "cancelled" !== e.status &&
              l(e.start) > r.min &&
              (g = { s: e, i: 0 });
          }),
          y.forEach(function (e) {
            var t =
              "cancelled" === e.status
                ? "cancelled"
                : b !== r.day
                  ? ""
                  : l(e.end) <= r.min
                    ? "done"
                    : l(e.start) <= r.min
                      ? "now"
                      : "";
            o("d-day").appendChild(h(e, t));
          }),
          y.length ||
            v(
              o("d-day"),
              f()
                ? "اختر القسم والسكشن من فوق."
                : b === r.day
                  ? "مفيش محاضرات النهاردة."
                  : "مفيش محاضرات في اليوم ده.",
            ));
        for (var w = 1; w < 8 && !g; w++) {
          var E = e[(d + w) % 7],
            S = m(E, r).filter(function (e) {
              return "cancelled" !== e.status;
            });
          S.length && (g = { s: S[0], i: w, d: E });
        }
        if (g) {
          var T = h(g.s, "next");
          (T.classList.add("hero"),
            T.insertBefore(
              c(
                "div",
                "big",
                g.i ? "يوم " + t[g.d] : "بعد " + u(l(g.s.start) - r.min),
              ),
              T.firstChild,
            ),
            o("d-next").appendChild(T));
        } else
          v(
            o("d-next"),
            f()
              ? "اختر القسم والسكشن من فوق عشان يظهر جدولك."
              : "مفيش محاضرات جاية في الجدول.",
          );
        var x = (i.deadlines || [])
          .map(function (e) {
            var t = e.due_at.split(/[- :]/);
            return (
              (e._t = new Date(
                +t[0],
                +t[1] - 1,
                +t[2],
                +(t[3] || 23),
                +(t[4] || 59),
              )),
              e
            );
          })
          .filter(function (e) {
            return e._t >= r.at;
          })
          .sort(function (e, t) {
            return e._t - t._t;
          })
          .slice(0, 5);
        (x.forEach(function (e) {
          var t = Math.round((e._t - r.at) / 6e4),
            a = c("div", "dcard"),
            i = c("div", "row");
          (i.appendChild(c("strong", null, e.title)),
            n[e.type] && i.appendChild(c("span", "bd", n[e.type])),
            i.appendChild(
              c(
                "span",
                "bd " + (t <= 1440 ? "urgent" : t <= 4320 ? "soon" : ""),
                "بعد " + u(t),
              ),
            ),
            a.appendChild(i));
          var s = [e.course_code, e.due_at, e.location, e.notes]
            .filter(Boolean)
            .join(" • ");
          (s && a.appendChild(c("div", "meta", s)), o("d-dl").appendChild(a));
        }),
          x.length || v(o("d-dl"), "مفيش مواعيد قادمة."),
          e.forEach(function (e) {
            var n = m(e, r);
            if (!f() && (n.length || "Friday" !== e)) {
              var a = document.createElement("details");
              a.open = e === b;
              var i = c("summary", null, t[e] + " (" + n.length + ")");
              (a.appendChild(i),
                n.forEach(function (e) {
                  a.appendChild(
                    h(e, "cancelled" === e.status ? "cancelled" : ""),
                  );
                }),
                n.length || a.appendChild(c("p", "meta", "مفيش محاضرات.")),
                o("d-week").appendChild(a));
            }
          }),
          (o("d-stamp").textContent = s
            ? "آخر تحديث: " +
              new Date(s).toLocaleTimeString("ar-EG", {
                hour: "2-digit",
                minute: "2-digit",
              })
            : ""));
      } else v(o("d-next"), "مفيش بيانات لسه.");
    }
    function b() {
      var e = o("d-prog"),
        t = {},
        n = e.value || d("sd.prog") || "";
      for (
        ((i && i.schedule) || []).forEach(function (e) {
          e.program && (t[e.program] = 1);
        });
        e.options.length > 1;
      )
        e.remove(1);
      (Object.keys(t)
        .sort()
        .forEach(function (t) {
          e.appendChild(new Option(t, t));
        }),
        (e.value = t[n] ? n : ""),
        y(o("d-sec").value || d("sd.sec") || ""));
    }
    function y(e) {
      var t = o("d-prog").value,
        n = o("d-sec"),
        a = {};
      for (
        ((i && i.schedule) || []).forEach(function (e) {
          e.program === t &&
            e.section &&
            e.section.split(/[\s,]+/).forEach(function (e) {
              /^\d+$/.test(e) && (a[e] = 1);
            });
        });
        n.options.length > 1;
      )
        n.remove(1);
      (Object.keys(a)
        .sort(function (e, t) {
          return e - t;
        })
        .forEach(function (e) {
          n.appendChild(new Option("سكشن " + e, e));
        }),
        (n.value = a[e] ? e : ""));
    }
    function w(e) {
      return fetch("/api/sheet?tab=" + e, {
        headers: { Accept: "application/json" },
      })
        .then(function (e) {
          return e.json();
        })
        .then(function (e) {
          if (!e.ok) throw new Error(e.code);
          return e.items;
        })
        .catch(function (t) {
          return "schedule" === e ? Promise.reject(t) : null;
        });
    }
    function E(e) {
      var t = o("d-banner");
      ((t.textContent = e), (t.style.display = e ? "block" : "none"));
    }
    function S() {
      ((o("d-rf").disabled = !0),
        Promise.all(["schedule", "announcements", "deadlines"].map(w))
          .then(function (e) {
            ((i = {
              schedule: e[0],
              announcements: e[1] || (i && i.announcements) || [],
              deadlines: e[2] || (i && i.deadlines) || [],
            }),
              (s = Date.now()),
              d(r, { t: s, d: i }),
              E(""),
              b(),
              g());
            var t = o("d-updated");
            (t &&
              (t.textContent =
                "آخر تحديث: " +
                new Date(s).toLocaleTimeString("ar-EG", {
                  hour: "2-digit",
                  minute: "2-digit",
                })),
              window.mysRefresh && window.mysRefresh());
          })
          .catch(function () {
            E(
              i
                ? "تعذّر التحديث — ده آخر جدول محفوظ" +
                    (navigator.onLine ? "" : " (غير متصل)")
                : "تعذّر تحميل الجدول دلوقتي — ممكن تجرّب تاني بعد شوية.",
            );
          })
          .then(function () {
            o("d-rf").disabled = !1;
          }));
    }
    var T = !1;
    ((window.dashGetData = function () {
      return i;
    }),
      (window.dashRedraw = function () {
        g();
      }),
      (window.dashOpen = function () {
        var e;
        T
          ? (g(), Date.now() - s > 6e4 && S())
          : ((T = !0),
            (e = d(r)) && e.d && ((i = e.d), (s = e.t)),
            o("d-prog").addEventListener("change", function () {
              (d("sd.prog", this.value), d("sd.sec", ""), y(""), g());
            }),
            o("d-sec").addEventListener("change", function () {
              (d("sd.sec", this.value), g());
            }),
            o("d-dsel").addEventListener("change", g),
            o("d-rf").addEventListener("click", S),
            document.addEventListener("visibilitychange", function () {
              !document.hidden &&
                document.body.classList.contains("dashboard-mode") &&
                (g(), Date.now() - s > 3e5 && S());
            }),
            setInterval(function () {
              !document.hidden &&
                document.body.classList.contains("dashboard-mode") &&
                g();
            }, 6e4),
            setInterval(function () {
              !document.hidden &&
                document.body.classList.contains("dashboard-mode") &&
                S();
            }, 6e5),
            b(),
            g(),
            S());
      }));
  })());
var secState = { view: "lecture", inst: null, secId: null },
  _secData = null,
  _secErr = "",
  _secDataBySubject = {},
  _secPromisesBySubject = {},
  SEC_MAT = [
    ["file", "📄", "ملف السكشن", "فتح"],
    ["exercises", "📝", "التمارين", "فتح"],
    ["solution", "✅", "الحل النموذجي", "فتح"],
    ["recording", "🎥", "تسجيل السكشن", "مشاهدة"],
  ],
  SEC_STATUS = { soon: "قريبًا", unavailable: "غير متاح", available: "متاح" };
function secItemTitle(e, t, n) {
  return e && "string" == typeof e.title && e.title.trim()
    ? e.title.trim()
    : e && "string" == typeof e.groupName && e.groupName.trim()
      ? e.groupName.trim()
      : n
        ? ""
        : "سكشن " + (t + 1);
}
function secEl(e, t, n) {
  var a = document.createElement(e);
  return (t && (a.className = t), null != n && (a.textContent = n), a);
}
function secUrl(e) {
  return "string" == typeof e && /^https:\/\/[^\s]+$/i.test(e.trim())
    ? e.trim()
    : null;
}
function secFileForSubject(e) {
  return e && "string" == typeof e.sectionsFile && e.sectionsFile.trim()
    ? e.sectionsFile.trim()
    : e && e.slug
      ? "datenew/" + e.slug + "/sections-" + e.slug + ".json"
      : "datenew/sections.json";
}
function secLoad() {
  var e = SUBJECTS_INDEX[currentSubject];
  if (!e || !e.slug) return Promise.reject(new Error("NO_SLUG"));
  var t = e.slug;
  if (_secDataBySubject[t])
    return ((_secData = _secDataBySubject[t]), Promise.resolve(_secData));
  if (_secPromisesBySubject[t]) return _secPromisesBySubject[t];
  var n = secFileForSubject(e);
  return (
    (_secPromisesBySubject[t] = loadJSONResilient(n, {
      headers: { Accept: "application/json" },
    })
      .then(function (e) {
        if (404 === e.status) throw new Error("NOFILE");
        if (!e.ok) throw new Error("HTTP");
        return JSON.parse(e.text);
      })
      .then(function (e) {
        if (!e || !Array.isArray(e.sections)) throw new Error("BAD");
        var n = e.sections.filter(function (e) {
          return (
            e &&
            "object" == typeof e &&
            "string" == typeof e.subject &&
            ("string" == typeof e.lecture || "string" == typeof e.lectureId) &&
            "string" == typeof e.instructorId &&
            e.instructorId &&
            "string" == typeof e.instructorName &&
            e.instructorName.trim()
          );
        });
        return ((_secDataBySubject[t] = n), (_secData = n), n);
      })
      .catch(function (e) {
        throw (delete _secPromisesBySubject[t], e);
      })),
    _secPromisesBySubject[t]
  );
}
function secResetForSubject() {
  var e = SUBJECTS_INDEX[currentSubject];
  e &&
    ((_secData = _secDataBySubject[e.slug] || null),
    (_secErr = ""),
    (_secFailAt = 0));
}
var _sumPdf = null,
  _sumRendered = !1,
  _sumTitle = "";
function lectureUrlOk(e) {
  return (
    "string" == typeof e &&
    !!(e = e.trim()) &&
    (!!/^https:\/\/[^\s]+$/i.test(e) ||
      (!/^[a-z][a-z0-9+.-]*:/i.test(e) && 0 !== e.indexOf("//")))
  );
}
function renderSummary(e) {
  var t = document.getElementById("ld-summary"),
    n = e && e.summary;
  ((_sumPdf = null), (_sumRendered = !1), (_sumTitle = (e && e.t) || ""));
  var a = n && (n.pdf || n.pdfUrl),
    r = lectureUrlOk(a) ? a.trim() : null,
    i = n && "string" == typeof n.text && n.text.trim() ? n.text.trim() : null;
  document.getElementById("ld-summary-attach").innerHTML = "";
  var s = document.getElementById("ld-summary-text");
  if (
    ((s.textContent = ""),
    (s.hidden = !0),
    document
      .getElementById("ld-summary-toggle")
      .setAttribute("aria-expanded", "false"),
    !r && !i)
  )
    return ((t.style.display = "none"), !1);
  ((t.style.display = ""), (_sumPdf = r));
  var o = document.getElementById("ld-summary-chip");
  return (
    (o.textContent = r && i ? "PDF + نص" : r ? "PDF" : "نص"),
    (o.className = "ld-chip ok"),
    i && (s.textContent = i),
    (document.getElementById("ld-summary-actions").style.display =
      r && i ? "" : "none"),
    !r && i && (s.hidden = !1),
    !0
  );
}
function toggleSummary() {
  (toggleLD("ld-summary"),
    document.getElementById("ld-summary").classList.contains("open") &&
      _sumPdf &&
      !_sumRendered &&
      ((_sumRendered = !0),
      renderAttachCard("ld-summary-attach", "ملخص " + _sumTitle, _sumPdf)));
}
function toggleSummaryText() {
  var e = document.getElementById("ld-summary-text"),
    t = document.getElementById("ld-summary-toggle");
  ((e.hidden = !e.hidden),
    t.setAttribute("aria-expanded", String(!e.hidden)),
    (t.textContent = e.hidden ? "📖 قراءة الملخص نصيًا" : "🙈 إخفاء النص"));
}
var _trPdf = null,
  _trRendered = !1,
  _trTitle = "";
function transcriptParts(e) {
  if (("string" == typeof e && (e = { text: e }), !e || "object" != typeof e))
    return { pdf: null, text: null };
  var t = e.pdf || e.pdfUrl || e.file || e.url;
  return {
    pdf: lectureUrlOk(t) ? t.trim() : null,
    text: "string" == typeof e.text && e.text.trim() ? e.text.trim() : null,
  };
}
function renderTranscript(e) {
  var t = document.getElementById("ld-transcript");
  if (!t) return !1;
  var n = transcriptParts(e && e.transcript);
  ((_trPdf = null),
    (_trRendered = !1),
    (_trTitle = (e && e.t) || ""),
    (document.getElementById("ld-transcript-attach").innerHTML = ""));
  var a = document.getElementById("ld-transcript-text");
  ((a.textContent = ""), (a.hidden = !0));
  var r = document.getElementById("ld-transcript-toggle");
  if (
    (r.setAttribute("aria-expanded", "false"),
    (r.textContent = "📖 قراءة التفريغ نصيًا"),
    !n.pdf && !n.text)
  )
    return ((t.style.display = "none"), !1);
  ((t.style.display = ""), (_trPdf = n.pdf));
  var i = document.getElementById("ld-transcript-chip");
  return (
    (i.textContent = n.pdf && n.text ? "ملف + نص" : n.pdf ? "ملف" : "نص"),
    (i.className = "ld-chip ok"),
    n.text && (a.textContent = n.text),
    (document.getElementById("ld-transcript-actions").style.display =
      n.pdf && n.text ? "" : "none"),
    !n.pdf && n.text && (a.hidden = !1),
    !0
  );
}
function toggleTranscript() {
  (toggleLD("ld-transcript"),
    document.getElementById("ld-transcript").classList.contains("open") &&
      _trPdf &&
      !_trRendered &&
      ((_trRendered = !0),
      renderAttachCard("ld-transcript-attach", "تفريغ " + _trTitle, _trPdf)));
}
function toggleTranscriptText() {
  var e = document.getElementById("ld-transcript-text"),
    t = document.getElementById("ld-transcript-toggle");
  ((e.hidden = !e.hidden),
    t.setAttribute("aria-expanded", String(!e.hidden)),
    (t.textContent = e.hidden ? "📖 قراءة التفريغ نصيًا" : "🙈 إخفاء النص"));
}
function secTranscriptBlock(e, t) {
  var n = transcriptParts(e && e.transcript);
  if (!n.pdf && !n.text) return null;
  var a = secEl("div", "sec-transcript");
  if (
    (a.appendChild(secEl("div", "sec-header-row", "🎙️ تفريغ صوت السكشن")),
    n.pdf &&
      a.appendChild(
        secDocRow(
          ["transcript", "🎙️", "ملف التفريغ", "فتح"],
          "ملف التفريغ",
          n.pdf,
          "",
          t,
        ),
      ),
    n.text)
  ) {
    var r = secEl("p", "sum-text", n.text);
    if (((r.hidden = !!n.pdf && !0), n.pdf)) {
      var i = secEl("button", "btn-sm", "📖 قراءة التفريغ نصيًا");
      ((i.type = "button"),
        i.setAttribute("aria-expanded", "false"),
        (i.onclick = function () {
          ((r.hidden = !r.hidden),
            i.setAttribute("aria-expanded", String(!r.hidden)),
            (i.textContent = r.hidden
              ? "📖 قراءة التفريغ نصيًا"
              : "🙈 إخفاء النص"));
        }));
      var s = secEl("div", "sum-actions");
      (s.appendChild(i), a.appendChild(s));
    }
    a.appendChild(r);
  }
  return a;
}
function renumberLD() {
  var e = 0;
  [].forEach.call(
    document.querySelectorAll("#lecture-view .ld-section"),
    function (t) {
      if ("none" !== getComputedStyle(t).display) {
        var n = t.querySelector(".ld-num");
        n && (n.textContent = ++e);
      }
    },
  );
}
var _secFailAt = 0;
function secPrepare() {
  var e = document.getElementById("ld-sec");
  if (
    (e && e.classList.remove("has"),
    !(_secFailAt && Date.now() - _secFailAt < 6e4))
  ) {
    var t = currentSubject,
      n = currentLecture;
    secLoad()
      .then(function () {
        e &&
          t === currentSubject &&
          n === currentLecture &&
          secForLecture().length &&
          (e.classList.add("has"), renumberLD());
      })
      .catch(function () {
        _secFailAt = Date.now();
      });
  }
}
function secForLecture() {
  var e = SUBJECTS_INDEX[currentSubject],
    t = subjects[currentSubject],
    n = t && t.lectures && t.lectures[currentLecture];
  return e && n && _secData
    ? _secData.filter(function (t) {
        return (
          t.subject === e.slug &&
          !!(
            t.lecture === lecQuizKey(n) ||
            (t.lectureId && n.id && t.lectureId === n.id)
          )
        );
      })
    : [];
}
function secRow(e, t, n, a, r) {
  var i = secEl(a && !r ? "a" : "div", "sec-row" + (a && !r ? "" : " off"));
  return (
    a &&
      !r &&
      ((i.href = a),
      (i.target = "_blank"),
      (i.rel = "noopener noreferrer"),
      i.setAttribute("aria-label", t + " — " + n)),
    i.appendChild(secEl("span", "sec-ic", e)),
    i.appendChild(secEl("span", "sec-lb", t)),
    i.appendChild(secEl("span", "sec-act", r || n)),
    i
  );
}
function secDocRow(e, t, n, a, r) {
  var i = n && !r,
    s = secEl("div", "sec-doc"),
    o = secEl(i ? "button" : "div", "sec-row" + (i ? "" : " off"));
  (i && ((o.type = "button"), o.setAttribute("aria-expanded", "false")),
    o.appendChild(secEl("span", "sec-ic", e[1])));
  var c = secEl("span", "sec-lb", t);
  (a && c.appendChild(secEl("small", "sec-sub", a)), o.appendChild(c));
  var d = secEl("span", "sec-act", r || (i ? e[3] : "الرابط غير صالح"));
  if ((o.appendChild(d), s.appendChild(o), i)) {
    var l = secEl("div", "sec-viewer");
    ((l.id = "sec-box-" + e[0]),
      (l.hidden = !0),
      s.appendChild(l),
      (o.onclick = function () {
        l.hidden
          ? ((l.hidden = !1),
            renderAttachCard(l.id, t, n),
            (d.textContent = "إغلاق"),
            o.setAttribute("aria-expanded", "true"))
          : ((l.hidden = !0),
            (l.innerHTML = ""),
            (d.textContent = e[3]),
            o.setAttribute("aria-expanded", "false"));
      }));
  }
  return s;
}
function secSectionTitle() {
  var e = SUBJECTS_INDEX[currentSubject],
    t = subjects[currentSubject],
    n = t && t.lectures && t.lectures[currentLecture];
  if (n && "string" == typeof n.sectionTitle && n.sectionTitle.trim())
    return n.sectionTitle.trim();
  if (e && "string" == typeof e.sectionTitle && e.sectionTitle.trim())
    return e.sectionTitle.trim();
  if (_secData) {
    var a = _secData.filter(function (t) {
      return (
        t.subject === (e && e.slug) &&
        "string" == typeof t.sectionTitle &&
        t.sectionTitle.trim() &&
        (t.lecture === lecQuizKey(n) ||
          (t.lectureId && n && t.lectureId === n.id))
      );
    })[0];
    if (a) return a.sectionTitle.trim();
  }
  return "🧩 السكشن";
}
function secCleanLinks(e) {
  var t = [];
  return (
    (Array.isArray(e) ? e : []).forEach(function (e) {
      if (e && "object" == typeof e) {
        var n = {};
        for (var a in e)
          Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
        if (Array.isArray(e.actions)) {
          if (
            ((n.actions = e.actions.filter(function (e) {
              return e && "object" == typeof e && secUrl(e.url);
            })),
            !n.actions.length)
          )
            return;
        } else if (!secUrl(e.url)) return;
        t.push(n);
      }
    }),
    t
  );
}
function secCleanCategories(e) {
  var t = [];
  return (
    (Array.isArray(e) ? e : []).forEach(function (e) {
      if (e && "object" == typeof e) {
        var n = {};
        for (var a in e)
          Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
        ((n.links = secCleanLinks(e.links)), n.links.length && t.push(n));
      }
    }),
    t
  );
}
function secRender() {
  var e = document.getElementById("lecture-view"),
    t = document.getElementById("sec-body"),
    n = document.getElementById("sec-title");
  if (
    (e.classList.toggle("sec-open", "lecture" !== secState.view),
    closeLectureMedia("lecture" === secState.view),
    (t.textContent = ""),
    "lecture" !== secState.view)
  ) {
    if (
      (window.scrollTo({ top: 0, behavior: "smooth" }),
      "sections" === secState.view)
    ) {
      if (((n.textContent = secSectionTitle()), _secErr)) {
        t.appendChild(secEl("p", "ld-hint", _secErr));
        var a = secEl("button", "sec-item", "🔄 إعادة المحاولة");
        return (
          (a.type = "button"),
          (a.onclick = function () {
            ((_secErr = ""),
              secRender(),
              secLoad().then(secRender).catch(secFail));
          }),
          void t.appendChild(a)
        );
      }
      if (!_secData)
        return void t.appendChild(
          secEl("p", "ld-hint", "⏳ جاري تحميل السكاشن..."),
        );
      var r = secForLecture();
      if (!r.length)
        return void t.appendChild(
          secEl("p", "ld-hint", "لا توجد سكاشن لهذه المحاضرة حتى الآن."),
        );
      var i = {};
      r.forEach(function (e) {
        i[e.instructorId] = 1;
      });
      var s = Object.keys(i);
      if (1 === s.length)
        return (
          (secState = { view: "instructor", inst: s[0], secId: null }),
          void secRender()
        );
      var o = {},
        c = [];
      r.forEach(function (e) {
        (o[e.instructorId] ||
          ((o[e.instructorId] = []), c.push(e.instructorId)),
          o[e.instructorId].push(e));
      });
      var d = secEl("div", "sec-list");
      return (
        c.forEach(function (e) {
          var t = o[e],
            n = t[0],
            a = secEl("button", "sec-item");
          ((a.type = "button"), a.appendChild(secEl("span", "sec-ic", "🧑‍🏫")));
          var r = secEl("span", "sec-lb", n.instructorName.trim()),
            i = t
              .map(function (e, t) {
                return secItemTitle(e, t, !0);
              })
              .filter(Boolean);
          (i.length && r.appendChild(secEl("small", "sec-sub", i.join(" • "))),
            a.appendChild(r),
            a.appendChild(
              secEl(
                "span",
                "sec-act",
                t.length > 1 ? t.length + " سكاشن" : "◀",
              ),
            ),
            (a.onclick = function () {
              secOpenInst(e);
            }),
            d.appendChild(a));
        }),
        void t.appendChild(d)
      );
    }
    var l = secForLecture().filter(function (e) {
      return e.instructorId === secState.inst;
    });
    if (l.length) {
      if (
        ((n.textContent = "سكشن " + l[0].instructorName.trim()),
        l.length > 1 && !secState.secId)
      ) {
        var u = secEl("div", "sec-list");
        return (
          u.appendChild(
            secEl(
              "div",
              "sec-picker-title",
              "📚 المعيد " +
                l[0].instructorName +
                " عنده " +
                l.length +
                " سكاشن — اختر واحد:",
            ),
          ),
          l.forEach(function (e, t) {
            var n = secEl("button", "sec-item");
            ((n.type = "button"),
              n.appendChild(secEl("span", "sec-ic", "📘")),
              n.appendChild(secEl("span", "sec-lb", secItemTitle(e, t))),
              n.appendChild(secEl("span", "sec-act", "◀")),
              (n.onclick = function () {
                ((secState = {
                  view: "instructor",
                  inst: secState.inst,
                  secId: e.id,
                }),
                  secRender());
              }),
              u.appendChild(n));
          }),
          void t.appendChild(u)
        );
      }
      var p =
        1 === l.length
          ? l[0]
          : l.filter(function (e) {
              return e.id === secState.secId;
            })[0] || l[0];
      if (l.length > 1) {
        var f = secEl("button", "sec-item");
        ((f.type = "button"),
          f.appendChild(secEl("span", "sec-ic", "↩")),
          f.appendChild(secEl("span", "sec-lb", "كل سكاشن المعيد")),
          f.appendChild(secEl("span", "sec-act", "◀")),
          (f.onclick = function () {
            ((secState = {
              view: "instructor",
              inst: secState.inst,
              secId: null,
            }),
              secRender());
          }),
          t.appendChild(f));
      }
      "string" == typeof p.title &&
        p.title.trim() &&
        (n.textContent = p.title.trim() + " — " + l[0].instructorName.trim());
      var m =
        "soon" === p.status || "unavailable" === p.status
          ? SEC_STATUS[p.status]
          : null;
      (SEC_STATUS[p.status] &&
        t.appendChild(
          secEl(
            "span",
            "ld-chip" + ("available" === p.status ? " ok" : " warn"),
            SEC_STATUS[p.status],
          ),
        ),
        "string" == typeof p.groupName &&
          p.groupName.trim() &&
          t.appendChild(
            secEl("div", "sec-group-name", "📘 " + p.groupName.trim()),
          ));
      var h = qTxt(p.notes);
      if (h) {
        var v = secEl("div", "sec-notes");
        (v.appendChild(secEl("b", null, "📝 ملاحظات المعيد:")),
          v.appendChild(secEl("p", null, h)),
          t.appendChild(v));
      }
      var g = p.materials && "object" == typeof p.materials ? p.materials : {},
        b = 0,
        y = secEl("div", "sec-list");
      (SEC_MAT.forEach(function (e) {
        var t = g[e[0]];
        if (t) {
          var n = "object" == typeof t ? t.url : t,
            a =
              "object" == typeof t &&
              "string" == typeof t.label &&
              t.label.trim()
                ? t.label.trim()
                : e[2];
          if ((b++, "recording" !== e[0])) {
            var r =
              "object" == typeof t &&
              "string" == typeof t.type &&
              t.type.trim().length <= 12
                ? t.type.trim()
                : "";
            y.appendChild(
              secDocRow(e, a, lectureUrlOk(n) ? n.trim() : null, r, m),
            );
          } else {
            var i = secUrl(n);
            y.appendChild(
              secRow(e[1], a, e[3], i, m || (i ? null : "الرابط غير صالح")),
            );
          }
        }
      }),
        (Array.isArray(g.extraLinks) ? g.extraLinks : []).forEach(function (e) {
          if (
            e &&
            "object" == typeof e &&
            "string" == typeof e.label &&
            e.label.trim()
          ) {
            var t = secUrl(e.url);
            (b++,
              y.appendChild(
                secRow(
                  "🔗",
                  e.label.trim(),
                  "فتح",
                  t,
                  m || (t ? null : "الرابط غير صالح"),
                ),
              ));
          }
        }));
      var w = Array.isArray(p.extraFiles) ? p.extraFiles : [];
      w.length &&
        (y.appendChild(secEl("div", "sec-header-row", "📎 ملفات إضافية")),
        w.forEach(function (e, t) {
          if (e && "object" == typeof e) {
            var n = e.url,
              a =
                "string" == typeof e.label && e.label.trim()
                  ? e.label.trim()
                  : "ملف إضافي " + (t + 1),
              r = "string" == typeof e.type ? e.type.trim() : "",
              i = ["extra-" + t, "📎", a, "فتح"];
            (y.appendChild(
              secDocRow(i, a, lectureUrlOk(n) ? n.trim() : null, r, m),
            ),
              b++);
          }
        }));
      var E = m ? null : secAudioCard(p.audio);
      E && (y.appendChild(E), b++);
      var S = m ? [] : vidList(p.videos || p.video);
      (S.length &&
        (y.appendChild(secEl("div", "sec-header-row", "🎬 فيديوهات الأسئلة")),
        S.forEach(function (e) {
          var t = vidItem(e.t || "🎥 فيديو", e.url);
          t && (y.appendChild(t), b++);
        })),
        b && t.appendChild(y));
      var T = m ? null : secTranscriptBlock(p, m);
      T && (t.appendChild(T), b++);
      var x = 0;
      if (!m) {
        var _ = secCleanLinks(p.links || g.links),
          L = secCleanCategories(p.linkCategories || g.linkCategories);
        if (_.length || L.length) {
          ((x = _.length),
            L.forEach(function (e) {
              x += e.links.length;
            }),
            t.appendChild(secEl("div", "sec-header-row", "🔗 روابط ومصادر")));
          var I = secEl("div", "sec-links");
          ((I.id = "sec-links-box"),
            t.appendChild(I),
            renderLectureLinks("sec-links-box", _, L));
        }
      }
      var C = p.task;
      if (C && "object" == typeof C && (C.url || C.title)) {
        var k = secEl("div", "sec-task");
        (k.appendChild(secEl("div", "sec-task-title", "📌 ملف المهمة")),
          C.title && k.appendChild(secEl("div", "sec-task-name", C.title)),
          C.dueDate &&
            k.appendChild(
              secEl("div", "sec-task-due", "📅 تاريخ التسليم: " + C.dueDate),
            ),
          C.notes &&
            k.appendChild(secEl("div", "sec-task-notes", "📝 " + C.notes)),
          C.url &&
            k.appendChild(
              secDocRow(
                ["task", "📎", "فتح ملف المهمة", "فتح"],
                "فتح ملف المهمة",
                lectureUrlOk(C.url) ? C.url.trim() : null,
                "",
                m,
              ),
            ),
          t.appendChild(k));
      }
      b ||
        x ||
        h ||
        C ||
        t.appendChild(
          secEl("p", "ld-hint", "لا توجد مواد لهذا المعيد حتى الآن."),
        );
    } else secGo("sections");
  }
}
function secFail(e) {
  ((_secErr =
    e && "NOFILE" === e.message
      ? "لم تتم إضافة بيانات السكاشن بعد."
      : "تعذّر تحميل السكاشن — ممكن تتأكد من الاتصال وتحاول تاني."),
    "lecture" !== secState.view && secRender());
}
function secGo(e, t, n) {
  ((secState = { view: e, inst: t || null, secId: n || null }), secRender());
}
function openSections() {
  (history.pushState({ sv: "sections" }, ""),
    (_secErr = ""),
    secGo("sections"),
    _secData || secLoad().then(secRender).catch(secFail));
}
function secOpenInst(e) {
  (history.pushState({ sv: "instructor", id: e }, ""), secGo("instructor", e));
}
function secBack() {
  if (history.state && history.state.sv) history.back();
  else if ("instructor" === secState.view) {
    if (secState.secId)
      return (
        (secState = { view: "instructor", inst: secState.inst, secId: null }),
        void secRender()
      );
    var e = secForLecture(),
      t = {};
    if (
      (e.forEach(function (e) {
        t[e.instructorId] = 1;
      }),
      Object.keys(t).length <= 1)
    )
      return void secGo("lecture");
    secGo("sections");
  } else (secState.view, secGo("lecture"));
}
function secResetUI() {
  secState = { view: "lecture", inst: null, secId: null };
  var e = document.getElementById("lecture-view");
  e && e.classList.remove("sec-open");
}
function qTxt(e) {
  return "string" == typeof e && e.trim() ? e.trim() : null;
}
function qExtraBtn(e, t, n) {
  return (
    '<button type="button" class="q-extra-btn" data-k="' +
    e +
    '" aria-expanded="false" aria-controls="q' +
    e +
    "-" +
    t +
    '" onclick="toggleQExtra(this)">' +
    n +
    "</button>"
  );
}
function qTrHTML(e, t) {
  var n = qTxt(e && e.translation);
  return n
    ? '<div class="q-extra-btns">' +
        qExtraBtn("tr", t, "🌐 ترجمة السؤال") +
        '</div><div class="q-extra-panel" dir="auto" id="qtr-' +
        t +
        '" hidden>' +
        esc(n) +
        "</div>"
    : "";
}
function qExHTML(e, t) {
  var n = qTxt(e && e.explanation);
  return n
    ? '<div class="q-extra-btns">' +
        qExtraBtn("ex", t, "💡 لماذا هذه الإجابة؟") +
        '</div><div class="q-extra-panel" dir="auto" id="qex-' +
        t +
        '" hidden>' +
        esc(n) +
        "</div>"
    : "";
}
function toggleQExtra(e) {
  var t = document.getElementById(e.getAttribute("aria-controls"));
  t &&
    ((t.hidden = !t.hidden),
    e.setAttribute("aria-expanded", String(!t.hidden)),
    (e.textContent =
      "tr" === e.getAttribute("data-k")
        ? t.hidden
          ? "🌐 ترجمة السؤال"
          : "🙈 إخفاء الترجمة"
        : t.hidden
          ? "💡 لماذا هذه الإجابة؟"
          : "🙈 إخفاء الشرح"));
}
window.addEventListener("popstate", function (e) {
  var t = document.getElementById("lecture-view");
  if (t && t.classList.contains("active")) {
    var n = e.state;
    n && n.sv
      ? ((_secErr = ""),
        secGo(n.sv, n.id),
        "sections" !== n.sv ||
          _secData ||
          secLoad().then(secRender).catch(secFail))
      : secGo("lecture");
  }
});
var SD_STORE = (function () {
    var e = "sd.my.v1",
      t = "kv";
    function n(e) {
      return (
        !!e &&
        "object" == typeof e &&
        Array.isArray(e.ids) &&
        "number" == typeof e.updatedAt &&
        e.ids.every(function (e) {
          return "string" == typeof e && e.length <= 80;
        })
      );
    }
    function a(e, n) {
      return new Promise(function (e, n) {
        if (!window.indexedDB) return n(new Error("noidb"));
        var a = indexedDB.open("sd-store", 1);
        ((a.onupgradeneeded = function () {
          a.result.createObjectStore(t);
        }),
          (a.onsuccess = function () {
            e(a.result);
          }),
          (a.onerror = function () {
            n(a.error);
          }),
          (a.onblocked = function () {
            n(new Error("blocked"));
          }));
      }).then(function (a) {
        return new Promise(function (r, i) {
          var s = a.transaction(t, e),
            o = n(s.objectStore(t));
          ((s.oncomplete = function () {
            (a.close(), r(o && o.result));
          }),
            (s.onerror = s.onabort =
              function () {
                (a.close(), i(s.error));
              }));
        });
      });
    }
    return {
      get: function () {
        var t = (function () {
          try {
            var t = JSON.parse(localStorage.getItem(e));
            return n(t) ? t : null;
          } catch (e) {
            return null;
          }
        })();
        return a("readonly", function (t) {
          return t.get(e);
        })
          .then(function (e) {
            return n(e) ? e : null;
          })
          .catch(function () {
            return null;
          })
          .then(function (e) {
            return t && e
              ? e.updatedAt > t.updatedAt
                ? e
                : t
              : t || e || null;
          });
      },
      set: function (t) {
        var n = { ids: t.slice(), updatedAt: Date.now() },
          r = JSON.stringify(n);
        if (r.length <= 4096)
          try {
            return (
              localStorage.setItem(e, r),
              a("readwrite", function (t) {
                return t.delete(e);
              })
                .catch(function () {})
                .then(function () {
                  return "ls";
                })
            );
          } catch (e) {}
        return a("readwrite", function (t) {
          return t.put(n, e);
        }).then(function () {
          try {
            localStorage.removeItem(e);
          } catch (e) {}
          return "idb";
        });
      },
      clear: function () {
        try {
          localStorage.removeItem(e);
        } catch (e) {}
        return a("readwrite", function (t) {
          return t.delete(e);
        }).catch(function () {});
      },
    };
  })(),
  mys = { ids: [] },
  MYS_CONF_KEY = "sd.my.confirmed.v1";
function mysConfLoad() {
  try {
    var e = JSON.parse(localStorage.getItem(MYS_CONF_KEY));
    if (
      e &&
      Array.isArray(e.ids) &&
      e.ids.every(function (e) {
        return "string" == typeof e && e.length <= 80;
      })
    )
      return e;
  } catch (e) {}
  return null;
}
function mysConfUI() {
  var e = document.getElementById("ins-confirm-state");
  if (e) {
    var t = document.getElementById("ins-confirm-btn"),
      n = document.getElementById("ins-unconfirm-btn"),
      a = window.mysConfirmed,
      r = (window.mys && mys.ids) || [],
      i =
        !!a &&
        a.ids.length === r.length &&
        a.ids.every(function (e) {
          return r.indexOf(e) > -1;
        });
    (a && i
      ? ((e.textContent =
          "✅ جدولك معتمد (" +
          a.ids.length +
          " موعد) — صفحة الجدول بتعرضه تلقائي"),
        (e.className = "ok"))
      : a
        ? ((e.textContent =
            "⚠️ فيه تعديلات لسه متأكدتش — اضغط تأكيد علشان تتعتمد"),
          (e.className = "warn"))
        : ((e.textContent =
            "جدولك لسه مش معتمد — بعد ما تضيف مواعيدك اضغط تأكيد"),
          (e.className = "")),
      t && (t.disabled = !r.length || (!!a && i)),
      n && (n.style.display = a ? "" : "none"));
  }
}
function mysConfirm() {
  var e = (window.mys && mys.ids) || [];
  if (e.length) {
    var t = { ids: e.slice(), at: Date.now() };
    try {
      localStorage.setItem(MYS_CONF_KEY, JSON.stringify(t));
    } catch (e) {
      return void showToast("تعذّر حفظ الاعتماد على الجهاز");
    }
    ((window.mysConfirmed = t),
      mysConfUI(),
      showToast("✅ تم اعتماد جدولك الشخصي"),
      window.dashRedraw && window.dashRedraw());
  } else showToast("⚠️ لازم تضيف مواعيد لجدولك الأول");
}
function mysUnconfirm() {
  try {
    localStorage.removeItem(MYS_CONF_KEY);
  } catch (e) {}
  ((window.mysConfirmed = null),
    mysConfUI(),
    showToast("↩ اتلغى الاعتماد — تقدر تختار القسم والسكشن من الجدول"),
    window.dashRedraw && window.dashRedraw());
}
((window.mysConfirmed = mysConfLoad()),
  SD_STORE.get()
    .then(function (e) {
      (e &&
        Array.isArray(e.ids) &&
        (mys.ids || (mys.ids = []),
        e.ids.forEach(function (e) {
          -1 === mys.ids.indexOf(e) && mys.ids.push(e);
        })),
        mysConfUI(),
        window.mysRefresh && window.mysRefresh());
    })
    .catch(function () {}));
var MYS_DAYS = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ],
  MYS_AR = {
    Saturday: "السبت",
    Sunday: "الأحد",
    Monday: "الاثنين",
    Tuesday: "الثلاثاء",
    Wednesday: "الأربعاء",
    Thursday: "الخميس",
    Friday: "الجمعة",
  },
  MYS_T = {
    lecture: "محاضرة",
    section: "سكشن",
    lab: "معمل",
    exam: "امتحان",
    other: "أخرى",
  };
function mysRows() {
  var e = window.dashGetData && window.dashGetData();
  return (e && e.schedule) || [];
}
function mysSave(e) {
  return (
    (mys.ids = e),
    SD_STORE.set(e).catch(function () {
      showToast("تعذّر حفظ جدولك على الجهاز");
    })
  );
}
function mysOpen() {
  openMySchedule();
}
function mysClose() {
  goBackFromInstructors();
}
window.mysRefresh = function () {
  var e = document.getElementById("instructors-view");
  e && e.classList.contains("active") && insRender();
};
var INS_DAYS = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ],
  INS_DAYS_AR = {
    Saturday: "السبت",
    Sunday: "الأحد",
    Monday: "الاثنين",
    Tuesday: "الثلاثاء",
    Wednesday: "الأربعاء",
    Thursday: "الخميس",
    Friday: "الجمعة",
  },
  INS_TYPES = {
    lecture: "محاضرة",
    section: "سكشن",
    lab: "معمل",
    other: "أخرى",
    exam: "امتحان",
  },
  insState = { program: "", section: "", day: "", type: "", search: "" };
function insFillSec() {
  var s = document.getElementById("ins-sec");
  if (s) {
    var p = insState.program,
      m = {};
    insData().forEach(function (r) {
      (!p || r.program === p) &&
        r.section &&
        String(r.section)
          .split(/[\s,]+/)
          .forEach(function (x) {
            /^\d+$/.test(x) && (m[x] = 1);
          });
    });
    while (s.options.length > 1) s.remove(1);
    Object.keys(m)
      .sort(function (x, y) {
        return x - y;
      })
      .forEach(function (x) {
        s.appendChild(new Option("سكشن " + x, x));
      });
    m[insState.section] || (insState.section = "");
    s.value = insState.section;
  }
}
function insSecOk(r) {
  var s = insState.section;
  return (
    !s ||
    !r.section ||
    -1 <
      String(r.section)
        .split(/[\s,]+/)
        .indexOf(s)
  );
}
function insData() {
  var e = window.dashGetData && window.dashGetData();
  return (e && e.schedule) || [];
}
var insOpenDays = {};
try {
  insOpenDays =
    JSON.parse(localStorage.getItem("sd.insOpenDays") || "{}") || {};
} catch (e) {
  insOpenDays = {};
}
function insSaveOpenDays() {
  try {
    localStorage.setItem("sd.insOpenDays", JSON.stringify(insOpenDays));
  } catch (e) {}
}
function openMySchedule(e) {
  if (
    (document.body.classList.add("instructors-mode"),
    document.body.classList.remove("dashboard-mode"),
    document.body.classList.remove("progress-mode"),
    closeQuizEverywhere(),
    detachQNSidebar(),
    setQuizMode(!1),
    (document.getElementById("main-title").textContent = "📌 جدولي الشخصي"),
    renderSubjectBar(),
    showView("instructors-view"),
    !e)
  )
    try {
      history.pushState(
        { view: "schedule" },
        "",
        location.pathname + "?page=myschedule",
      );
    } catch (e) {}
  (window.scrollTo({ top: 0, behavior: "smooth" }),
    insInit(),
    !insData().length &&
      window.dashOpen &&
      (window.dashOpen(),
      setTimeout(function () {
        insData().length && insInit();
      }, 800)));
}
function openInstructorsGuide() {
  openMySchedule();
}
function goBackFromInstructors() {
  (document.body.classList.remove("instructors-mode"),
    history.state && "schedule" === history.state.view
      ? history.back()
      : (showView("dashboard-view"),
        (document.getElementById("main-title").textContent = "الجدول الدراسي"),
        renderSubjectBar(),
        window.dashOpen && window.dashOpen()));
}
function insInit() {
  var e = document.getElementById("ins-prog"),
    t = document.getElementById("ins-day"),
    n = document.getElementById("ins-type"),
    a = document.getElementById("ins-search");
  if (e) {
    if (e.options.length <= 1) {
      var r = {};
      (insData().forEach(function (e) {
        e.program && (r[e.program] = 1);
      }),
        Object.keys(r)
          .sort()
          .forEach(function (t) {
            e.appendChild(new Option(t, t));
          }));
    }
    (t.options.length <= 1 &&
      INS_DAYS.forEach(function (e) {
        t.appendChild(new Option(INS_DAYS_AR[e], e));
      }),
      n.options.length <= 1 &&
        Object.keys(INS_TYPES).forEach(function (e) {
          n.appendChild(new Option(INS_TYPES[e], e));
        }),
      (e.value = insState.program),
      (t.value = insState.day),
      (n.value = insState.type),
      (a.value = insState.search),
      insFillSec(),
      (function (s) {
        s &&
          (s.onchange = function () {
            ((insState.section = this.value), insRender());
          });
      })(document.getElementById("ins-sec")),
      (e.onchange = function () {
        ((insState.program = this.value), insFillSec(), insRender());
      }),
      (t.onchange = function () {
        ((insState.day = this.value), insRender());
      }),
      (n.onchange = function () {
        ((insState.type = this.value), insRender());
      }),
      (a.oninput = function () {
        ((insState.search = this.value.trim()),
          clearTimeout(a._t),
          (a._t = setTimeout(insRender, 180)));
      }),
      insRender());
  }
}
function insResetFilters() {
  insState = { program: "", section: "", day: "", type: "", search: "" };
  var e = document.getElementById("ins-prog");
  e && (e.value = "");
  var t = document.getElementById("ins-day");
  t && (t.value = "");
  var n = document.getElementById("ins-type");
  n && (n.value = "");
  var a = document.getElementById("ins-search");
  (a && (a.value = ""), insFillSec(), insRender());
}
function insFiltered() {
  var e = insState.search.toLowerCase();
  return insData().filter(function (t) {
    return (
      !!t.id &&
      insSecOk(t) &&
      (!insState.program || t.program === insState.program) &&
      (!insState.day || t.day === insState.day) &&
      (!insState.type || t.type === insState.type) &&
      (!e ||
        -1 !==
          (
            (t.instructor || "") +
            " " +
            (t.course_name_ar || "") +
            " " +
            (t.location || "")
          )
            .toLowerCase()
            .indexOf(e))
    );
  });
}
function insActiveInstructors() {
  var e = {};
  insData().forEach(function (t) {
    t.instructor && t.id && (e[t.instructor] = (e[t.instructor] || 0) + 1);
  });
  var t = {};
  return (
    Object.keys(e).forEach(function (n) {
      e[n] >= 5 && (t[n] = e[n]);
    }),
    t
  );
}
function insRender() {
  mysConfUI();
  insFillSec();
  var e = document.getElementById("ins-list");
  if (e) {
    var t = insFiltered();
    if (t.length) {
      var n = {};
      t.forEach(function (e) {
        n[e.day] || (n[e.day] = {});
        var t = (e.start || "") + "-" + (e.end || "");
        (n[e.day][t] || (n[e.day][t] = []), n[e.day][t].push(e));
      });
      var a = insActiveInstructors(),
        r = "",
        i = null,
        s = !1;
      (Object.keys(insOpenDays).forEach(function (e) {
        insOpenDays[e] && (s = !0);
      }),
        INS_DAYS.forEach(function (e) {
          if (n[e]) {
            i || (i = e);
            var t = 0;
            Object.keys(n[e]).forEach(function (a) {
              t += n[e][a].length;
            });
            var o =
                t > 4
                  ? '<span class="ins-busy-badge">🔥 الأكثر ازدحامًا</span>'
                  : "",
              c = s ? !!insOpenDays[e] : e === i;
            ((r +=
              '<div class="ins-day-acc' +
              (c ? " open" : "") +
              '" data-day="' +
              e +
              '"><div class="ins-day-head" onclick="toggleInsAcc(this)" role="button" tabindex="0" aria-expanded="' +
              (c ? "true" : "false") +
              '"><span class="ins-arrow">▶</span><span class="ins-day-title-tt">📅 ' +
              INS_DAYS_AR[e] +
              "</span>" +
              o +
              '<span class="ins-day-badge">' +
              t +
              ' موعد</span></div><div class="ins-day-body">'),
              Object.keys(n[e])
                .sort()
                .forEach(function (t) {
                  var i = n[e][t].sort(function (e, t) {
                    return (e.course_name_ar || "").localeCompare(
                      t.course_name_ar || "",
                      "ar",
                    );
                  });
                  ((r +=
                    '<div class="ins-slot-acc open"><div class="ins-slot-head" onclick="toggleInsAcc(this)" role="button" tabindex="0" aria-expanded="true"><span class="ins-arrow">▶</span><span class="ins-slot-time">⏰ ' +
                    esc(t.replace("-", " → ")) +
                    '</span><span class="ins-slot-count">' +
                    i.length +
                    ' جلسة</span></div><div class="ins-slot-body">'),
                    i.forEach(function (e) {
                      var t =
                          window.mys && mys.ids && mys.ids.indexOf(e.id) > -1,
                        n = [];
                      (INS_TYPES[e.type] && n.push("📚 " + INS_TYPES[e.type]),
                        e.program && n.push("🎓 " + esc(e.program)),
                        e.section && n.push("سكشن " + esc(e.section)));
                      var i = a[e.instructor]
                        ? '<span class="ins-active-badge" title="' +
                          a[e.instructor] +
                          ' مواعيد في الأسبوع">⭐ نشِط</span>'
                        : "";
                      r +=
                        '<div class="ins-row' +
                        (t ? " mine" : "") +
                        '"><div class="ins-row-main"><strong>' +
                        esc(e.course_name_ar || "") +
                        '</strong><div class="ins-row-meta">' +
                        n.join(" · ") +
                        '</div></div><div class="ins-row-instructor">👨‍🏫 ' +
                        esc(e.instructor || "—") +
                        i +
                        '</div><div class="ins-row-location">📍 ' +
                        esc(e.location || "—") +
                        '</div><button class="ins-row-btn' +
                        (t ? " remove" : "") +
                        '" onclick="insToggle(\'' +
                        esc(e.id) +
                        "')\">" +
                        (t ? "✕ إزالة" : "➕ ضيف") +
                        "</button></div>";
                    }),
                    (r += "</div></div>"));
                }),
              (r += "</div></div>"));
          }
        }),
        (e.innerHTML = r));
    } else
      e.innerHTML =
        '<div class="ins-emptyمفيش نتايج — جرّب تغيير الفلاتر أو البحث</div>';
  }
}
function toggleInsAcc(e) {
  if (e && e.parentNode) {
    var t = e.parentNode,
      n = t.classList.toggle("open");
    if (
      (e.setAttribute("aria-expanded", n ? "true" : "false"),
      t.classList.contains("ins-day-acc"))
    ) {
      var a = t.getAttribute("data-day");
      a &&
        (n ? (insOpenDays[a] = !0) : delete insOpenDays[a], insSaveOpenDays());
    }
  }
}
function insToggle(e) {
  (window.mys || (window.mys = { ids: [] }), mys.ids || (mys.ids = []));
  var t = mys.ids.indexOf(e);
  if (-1 === t) {
    for (var n = insData(), a = null, r = 0; r < n.length; r++)
      if (n[r].id === e) {
        a = n[r];
        break;
      }
    if (a) {
      var i = [],
        s = {};
      if (
        (n.forEach(function (e) {
          s[e.id] = e;
        }),
        mys.ids.forEach(function (e) {
          var t = s[e];
          t &&
            t.day === a.day &&
            a.start < t.end &&
            t.start < a.end &&
            i.push(t.course_name_ar + " (" + t.start + "→" + t.end + ")");
        }),
        i.length)
      ) {
        var o =
          "⚠️ عندك تعارض — موعدين في نفس الوقت:\n" +
          i.join("\n") +
          "\n\nعايزة تضيفه برضه؟";
        if (!confirm(o)) return;
      }
    }
    (mys.ids.push(e),
      a && a.day && ((insOpenDays[a.day] = !0), insSaveOpenDays()),
      showToast("✅ اتضاف لجدولك الشخصي"));
  } else (mys.ids.splice(t, 1), showToast("اتشال من جدولك"));
  mysSave(mys.ids).then(function () {
    (insRender(), window.mysRefresh && window.mysRefresh());
  });
}
function quickAddByFilter(e) {
  var t = insFiltered().filter(function (t) {
    return t.type === e;
  });
  if (t.length) {
    (window.mys || (window.mys = { ids: [] }), mys.ids || (mys.ids = []));
    var n = 0;
    (t.forEach(function (e) {
      -1 === mys.ids.indexOf(e.id) && (mys.ids.push(e.id), n++);
    }),
      mysSave(mys.ids).then(function () {
        (showToast("✅ اتضاف " + n + " موعد"),
          insRender(),
          window.mysRefresh && window.mysRefresh());
      }));
  } else showToast("مفيش نتايج من النوع ده بالفلاتر الحالية");
}
function quickClearMine() {
  window.mys && mys.ids && mys.ids.length
    ? confirm("هيتم مسح كل جدولك الشخصي. هتكمّل؟") &&
      ((mys.ids = []),
      mysSave(mys.ids).then(function () {
        (showToast("🗑️ اتمسح الجدول"),
          insRender(),
          window.mysRefresh && window.mysRefresh());
      }))
    : showToast("جدولك فاضي أصلاً");
}
function insExportExcel() {
  if (window.mys && mys.ids && mys.ids.length) {
    var e = insData(),
      t = {};
    e.forEach(function (e) {
      e.id && (t[e.id] = e);
    });
    var n = mys.ids
      .map(function (e) {
        return t[e];
      })
      .filter(Boolean);
    if (n.length) {
      var a = [
        [
          "اليوم",
          "من",
          "إلى",
          "المادة",
          "النوع",
          "الدكتور/المعيد",
          "المكان",
          "القسم",
          "السكشن",
        ].join(","),
      ];
      n.slice()
        .sort(function (e, t) {
          var n = INS_DAYS.indexOf(e.day),
            a = INS_DAYS.indexOf(t.day);
          return n !== a ? n - a : (e.start || "").localeCompare(t.start || "");
        })
        .forEach(function (e) {
          var t = [
            INS_DAYS_AR[e.day] || e.day || "",
            e.start || "",
            e.end || "",
            e.course_name_ar || "",
            INS_TYPES[e.type] || e.type || "",
            e.instructor || "",
            e.location || "",
            e.program || "",
            e.section || "",
          ].map(function (e) {
            return (
              (e = String(null == e ? "" : e)),
              /[",\n\r]/.test(e) && (e = '"' + e.replace(/"/g, '""') + '"'),
              e
            );
          });
          a.push(t.join(","));
        });
      var r = "\ufeff" + a.join("\r\n"),
        i = new Blob([r], { type: "text/csv;charset=utf-8" }),
        s = new Date();
      (triggerDownload(
        i,
        "جدولي-الشخصي-" +
          s.getFullYear() +
          "-" +
          String(s.getMonth() + 1).padStart(2, "0") +
          "-" +
          String(s.getDate()).padStart(2, "0") +
          ".csv",
      ),
        showToast("📊 تم تصدير " + n.length + " موعد من جدولك الشخصي"));
    } else showToast("مفيش مواعيد للتصدير");
  } else showToast("⚠️ جدولك فاضي — تقدر تضيف مواعيد بزر ➕ ضيف");
}
var _fbOtp = { sid: null, type: null, code: null },
  _fbImages = [],
  FB_MAX_IMAGES = 5,
  FB_MAX_SIZE = 1048576,
  FB_MAX_DIM = 1200,
  FB_JPEG_QUALITY = 0.75,
  _recaptchaToken = null,
  _recaptchaWidgetId = null,
  _recaptchaState = "idle",
  RECAPTCHA_SITEKEY = "6LermOYtAAAAAMpI8j0HXVM3v8IZdKKflFw1w3be";
function __fbRenderRecaptcha() {
  var e = document.getElementById("fb-recaptcha-box");
  if (
    e &&
    null === _recaptchaWidgetId &&
    window.grecaptcha &&
    "function" == typeof window.grecaptcha.render
  )
    try {
      ((_recaptchaWidgetId = window.grecaptcha.render(e, {
        sitekey: RECAPTCHA_SITEKEY,
        theme:
          "night" === document.documentElement.getAttribute("data-theme")
            ? "dark"
            : "light",
        size: "normal",
        callback: window.onRecaptchaOk,
        "expired-callback": window.onRecaptchaExpired,
      })),
        (_recaptchaState = "ready"));
    } catch (e) {
      _recaptchaState = "failed";
    }
}
function fbLoadRecaptcha() {
  if ("loading" !== _recaptchaState && "ready" !== _recaptchaState)
    if (window.grecaptcha && "function" == typeof window.grecaptcha.render)
      __fbRenderRecaptcha();
    else {
      _recaptchaState = "loading";
      var e = document.createElement("script");
      ((e.src =
        "https://www.google.com/recaptcha/api.js?render=explicit&hl=ar&onload=__fbRecaptchaReady"),
        (e.async = !0),
        (e.defer = !0),
        (e.onerror = function () {
          ((_recaptchaState = "failed"),
            e.parentNode && e.parentNode.removeChild(e));
          var t = document.getElementById("fb-status");
          t &&
            ((t.className = "err"),
            (t.textContent =
              "⚠️ تعذّر تحميل التحقق الأمني — لازم تتأكد من اتصالك بالنت وتفتح النموذج تاني."));
        }),
        document.head.appendChild(e));
    }
}
function __fbWarmRecaptcha() {
  ["https://www.google.com", "https://www.gstatic.com"].forEach(function (e) {
    var t = document.createElement("link");
    ((t.rel = "preconnect"),
      (t.href = e),
      (t.crossOrigin = ""),
      document.head.appendChild(t));
  });
}
function fbResetRecaptcha() {
  if (
    ((_recaptchaToken = null),
    null !== _recaptchaWidgetId &&
      window.grecaptcha &&
      "function" == typeof window.grecaptcha.reset)
  )
    try {
      window.grecaptcha.reset(_recaptchaWidgetId);
    } catch (e) {}
}
function fbInitCaptcha() {}
function fbRenderPreviews() {
  var e = document.getElementById("fb-thumbs"),
    t = document.getElementById("fb-img-counter");
  (t &&
    (t.textContent =
      _fbImages.length +
      " / " +
      FB_MAX_IMAGES +
      " صور — أقصى حجم 1MB لكل صورة"),
    e &&
      (e.innerHTML = _fbImages
        .map(function (e, t) {
          return (
            '<div class="fb-img-thumb"><img src="' +
            e.data +
            '" alt=""><button type="button" onclick="fbRemoveImage(' +
            t +
            ')" aria-label="حذف">✕</button></div>'
          );
        })
        .join("")));
}
function fbRemoveImage(e) {
  e < 0 ||
    e >= _fbImages.length ||
    (_fbImages.splice(e, 1), fbRenderPreviews());
}
function fbCompressImage(e) {
  return new Promise(function (t) {
    var n = new FileReader();
    ((n.onload = function (e) {
      var n = e.target.result,
        a = new Image();
      ((a.onload = function () {
        try {
          var e = a.naturalWidth,
            r = a.naturalHeight;
          if (e > FB_MAX_DIM || r > FB_MAX_DIM) {
            var i = Math.min(FB_MAX_DIM / e, FB_MAX_DIM / r);
            ((e = Math.max(1, Math.round(e * i))),
              (r = Math.max(1, Math.round(r * i))));
          }
          var s = document.createElement("canvas");
          ((s.width = e), (s.height = r));
          var o = s.getContext("2d");
          ((o.fillStyle = "#ffffff"),
            o.fillRect(0, 0, e, r),
            o.drawImage(a, 0, 0, e, r));
          var c = s.toDataURL("image/jpeg", FB_JPEG_QUALITY);
          t(c && c.length > 20 ? c : n);
        } catch (e) {
          t(n);
        }
      }),
        (a.onerror = function () {
          t(n);
        }),
        (a.src = n));
    }),
      (n.onerror = function () {
        t(null);
      }),
      n.readAsDataURL(e));
  });
}
function fbHandleImages(e) {
  var t = e && e.target && e.target.files;
  if (t && t.length) {
    var n = Array.prototype.slice.call(t),
      a = [];
    (n.forEach(function (e) {
      /^image\//.test(e.type)
        ? e.size > FB_MAX_SIZE
          ? showToast(
              "⚠️ " +
                e.name +
                " أكبر من 1 ميجا (" +
                (e.size / 1048576).toFixed(2) +
                " ميجا)",
            )
          : _fbImages.length + a.length >= FB_MAX_IMAGES
            ? showToast("⚠️ الحد الأقصى " + FB_MAX_IMAGES + " صور")
            : a.push(e)
        : showToast("⚠️ " + e.name + " مش صورة");
    }),
      e && e.target && (e.target.value = ""),
      a.length &&
        (showToast("⏳ جاري معالجة " + a.length + " صورة..."),
        Promise.all(
          a.map(function (e) {
            return fbCompressImage(e).then(function (t) {
              return t
                ? { name: e.name, size: e.size, type: "image/jpeg", data: t }
                : null;
            });
          }),
        )
          .then(function (e) {
            var t = 0;
            (e.forEach(function (e) {
              e && _fbImages.length < FB_MAX_IMAGES && (_fbImages.push(e), t++);
            }),
              fbRenderPreviews(),
              t && showToast("✅ " + t + " صورة جاهزة"));
          })
          .catch(function (e) {
            (console.error("fbHandleImages error:", e),
              showToast("❌ فشل معالجة الصور"));
          })));
  }
}
((window.onRecaptchaOk = function (e) {
  _recaptchaToken = e;
  var t = document.getElementById("fb-status");
  t &&
    t.classList.contains("err") &&
    ((t.className = ""), (t.textContent = ""));
}),
  (window.onRecaptchaExpired = function () {
    _recaptchaToken = null;
  }),
  (window.__fbRecaptchaReady = function () {
    window.grecaptcha && "function" == typeof window.grecaptcha.ready
      ? window.grecaptcha.ready(__fbRenderRecaptcha)
      : __fbRenderRecaptcha();
  }),
  (function () {
    var e = document.querySelector(".footer-help-btn");
    e &&
      ["pointerenter", "touchstart", "focus"].forEach(function (t) {
        e.addEventListener(t, __fbWarmRecaptcha, { once: !0, passive: !0 });
      });
  })(),
  (function () {
    function e() {
      var e = document.getElementById("fb-images");
      e &&
        !e._fbBound &&
        ((e._fbBound = !0), e.addEventListener("change", fbHandleImages));
      var t = document.getElementById("fb-drop");
      t &&
        !t._fbBound &&
        ((t._fbBound = !0),
        ["dragenter", "dragover"].forEach(function (e) {
          t.addEventListener(e, function (e) {
            (e.preventDefault(),
              e.stopPropagation(),
              t.classList.add("dragover"));
          });
        }),
        ["dragleave", "drop"].forEach(function (e) {
          t.addEventListener(e, function (e) {
            (e.preventDefault(),
              e.stopPropagation(),
              t.classList.remove("dragover"));
          });
        }),
        t.addEventListener("drop", function (e) {
          var t = e.dataTransfer;
          t &&
            t.files &&
            t.files.length &&
            fbHandleImages({ target: { files: t.files, value: "" } });
        }),
        t.addEventListener("click", function (t) {
          t.target !== e && e && e.click();
        }));
      var n = document.getElementById("fb-contact-type");
      n &&
        !n._fbBound &&
        ((n._fbBound = !0),
        n.addEventListener("change", fbOnContactChange));
      var cv = document.getElementById("fb-contact-val");
      cv &&
        !cv._fbOtpBound &&
        ((cv._fbOtpBound = !0), cv.addEventListener("input", fbOtpReset));
      fbSyncFormUI();
    }
    "loading" === document.readyState
      ? document.addEventListener("DOMContentLoaded", e)
      : e();
  })());
var FB_DAILY_LIMIT = 5,
  FB_RL_KEY = "fb_rate_limit_v1",
  FB_MAX_TEXT = 1e3,
  FB_MAX_NAME = 60,
  FB_MAX_REF = 120,
  FB_MAX_CONTACT = 100,
  FB_MAX_IMG_BYTES_TOTAL = 4194304;
function fbToday() {
  var e = new Date();
  return (
    e.getFullYear() +
    "-" +
    String(e.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(e.getDate()).padStart(2, "0")
  );
}
function fbGetRateLimit() {
  try {
    var e = localStorage.getItem(FB_RL_KEY);
    if (!e) return { date: fbToday(), count: 0 };
    var t = JSON.parse(e);
    return t && "object" == typeof t
      ? t.date !== fbToday() ||
        "number" != typeof t.count ||
        t.count < 0 ||
        t.count > 999
        ? { date: fbToday(), count: 0 }
        : { date: t.date, count: Math.floor(t.count) }
      : { date: fbToday(), count: 0 };
  } catch (e) {
    return { date: fbToday(), count: 0 };
  }
}
function fbRemainingToday() {
  var e = fbGetRateLimit();
  return Math.max(0, FB_DAILY_LIMIT - e.count);
}
function fbIncrRateLimit() {
  var e = fbGetRateLimit();
  ((e.count = Math.min(999, e.count + 1)), (e.date = fbToday()));
  try {
    localStorage.setItem(FB_RL_KEY, JSON.stringify(e));
  } catch (e) {}
  return e.count;
}
function fbSanitize(e, t) {
  return (
    "string" != typeof e && (e = ""),
    (e = (e = (e = (e = (e = (e = e.replace(
      /[\u0000-\u001F\u007F]/g,
      "",
    )).replace(/[\u202A-\u202E\u200E\u200F]/g, "")).replace(
      /<[^>]*>/g,
      "",
    )).replace(
      /(javascript\s*:|vbscript\s*:|data\s*:\s*text\/html|on\w+\s*=\s*["']?)/gi,
      "",
    )).replace(/[\\`]/g, ""))
      .replace(/[ \t]+/g, " ")
      .replace(/\n{3,}/g, "\n\n")
      .trim()),
    "number" == typeof t && t > 0 && e.length > t && (e = e.slice(0, t)),
    e
  );
}
function fbValidateAll() {
  var e = [];
  function t(t) {
    e.push(t);
  }
  function n(e) {
    var t = document.getElementById(e);
    return t ? t.value : "";
  }
  var a = fbSanitize(n("fb-text"), FB_MAX_TEXT);
  (a.length < 5 && t("✏️ التفاصيل قصيرة جدًا (5 حروف على الأقل)."),
    a.length > FB_MAX_TEXT &&
      t("✏️ التفاصيل طويلة جدًا (" + FB_MAX_TEXT + " حرف كحد أقصى)."),
    /^(.)\1{4,}$/.test(a) && t("✏️ التفاصيل غير واضحة — اكتبي وصفًا حقيقيًا."),
    (a.match(/https?:\/\//gi) || []).length > 2 &&
      t("✏️ عدد الروابط كبير — وضّحي المشكلة نصيًا."),
    /^([\u0600-\u06FF])\1{4,}$/.test(a.replace(/\s/g, "")) &&
      t("✏️ التفاصيل غير واضحة."));
  var r = fbSanitize(n("fb-name"), FB_MAX_NAME);
  r &&
    (r.length < 2 && t("👤 الاسم قصير جدًا."),
    r.length > FB_MAX_NAME && t("👤 الاسم طويل جدًا."),
    /^[\u0600-\u06FFa-zA-Z\s.'\-]{2,60}$/.test(r) ||
      t("👤 الاسم يحتوي على رموز غير مسموحة."));
  var i = fbSanitize(n("fb-ref"), FB_MAX_REF),
    s = fbSanitize(n("fb-contact-type"), 20),
    o = fbSanitize(n("fb-contact-val"), FB_MAX_CONTACT);
  if (
    (s && !o && "email" === s && t("📧 اكتبي الإيميل."),
    o && !s && t("📞 اختاري نوع وسيلة التواصل."),
    "email" === s &&
      o &&
      (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(o) ||
        t("📧 صيغة الإيميل غير صحيحة."),
      o.length > FB_MAX_CONTACT && t("📧 الإيميل طويل جدًا.")),
    "phone" === s && o)
  ) {
    var c = o.replace(/\D/g, "");
    ((c.length < 8 || c.length > 15) && t("📱 رقم الهاتف لازم 8–15 رقم."),
      /^[+\d][\d\s\-()]{6,}$/.test(o) || t("📱 صيغة رقم الهاتف غير صحيحة."),
      /^(\d)\1+$/.test(c) && t("📱 رقم الهاتف غير صحيح."));
  }
  if (
    ("telegram" === s &&
      o &&
      (/^@?[A-Za-z0-9_]{5,32}$/.test(o) || t("✈️ يوزر تليجرام غير صحيح.")),
    "whatsapp" === s && o)
  ) {
    var d = o.replace(/\D/g, "");
    (d.length < 8 || d.length > 15) && t("💬 رقم واتساب لازم 8–15 رقم.");
  }
  _fbImages.length > FB_MAX_IMAGES &&
    t("⚠️ عدد الصور أكبر من " + FB_MAX_IMAGES + ".");
  for (var l = 0, u = 0; u < _fbImages.length; u++) {
    var p = _fbImages[u];
    if (!p || "string" != typeof p.data || !p.data) {
      t("⚠️ صورة رقم " + (u + 1) + " غير صالحة.");
      break;
    }
    if (
      !/^data:image\/(jpeg|png|webp|gif);base64,[A-Za-z0-9+/=]+$/i.test(p.data)
    ) {
      t("⚠️ صورة رقم " + (u + 1) + " بصيغة غير مدعومة.");
      break;
    }
    var f = p.data.indexOf(","),
      m = Math.ceil(0.75 * (p.data.length - f - 1));
    if (m > FB_MAX_SIZE) {
      t("⚠️ صورة رقم " + (u + 1) + " أكبر من 1 ميجا.");
      break;
    }
    l += m;
  }
  return (
    l > FB_MAX_IMG_BYTES_TOTAL && t("📦 إجمالي حجم الصور كبير (الحد 4 ميجا)."),
    n("fb-hp") && t("🤖 تم رفض الطلب."),
    {
      ok: 0 === e.length,
      errors: e,
      clean: { text: a, name: r, ref: i, cType: s, cVal: o },
    }
  );
}
function fbSendCore(e) {
  var t = document.getElementById("fb-status"),
    n = document.querySelectorAll(".fb-btns button");
  function a(e, n) {
    t && ((t.className = e || ""), (t.textContent = n || ""));
  }
  function r(e) {
    [].forEach.call(n, function (t) {
      t.disabled = e;
    });
  }
  if (_recaptchaToken || _fbOtp.code) {
    var i = fbRemainingToday();
    if (i <= 0)
      a(
        "err",
        "🚫 وصلت للحد الأقصى (" +
          FB_DAILY_LIMIT +
          " رسائل في اليوم).\nممكن تجرّب تاني بكرة إن شاء الله.",
      );
    else {
      var s = fbValidateAll();
      if (s.ok) {
        (r(!0),
          a(
            "",
            "⏳ جاري الإرسال" +
              (_fbImages.length
                ? " (" + _fbImages.length + " صورة)..."
                : "...") +
              " — متبقي " +
              (i - 1) +
              " من " +
              FB_DAILY_LIMIT,
          ));
        var o = {
            channel: String(e || "").slice(0, 10),
            type: fbSanitize(
              (document.getElementById("fb-type") || {}).value || "",
              40,
            ),
            name: s.clean.name,
            contactType: s.clean.cType,
            contactValue: s.clean.cVal,
            ref: s.clean.ref,
            text: s.clean.text,
            images: _fbImages.map(function (e) {
              return {
                name: fbSanitize(e.name || "", 100),
                type: e.type,
                data: e.data,
              };
            }),
            website: (document.getElementById("fb-hp") || {}).value || "",
            recaptchaToken: _recaptchaToken,
            otp: _fbOtp.sid ? { sid: _fbOtp.sid, code: _fbOtp.code } : void 0,
            clientTime: new Date().toISOString(),
          },
          c =
            "undefined" != typeof AbortController
              ? new AbortController()
              : null,
          d = setTimeout(function () {
            if (c)
              try {
                c.abort();
              } catch (e) {}
          }, 45e3),
          l = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(o),
            credentials: "omit",
            redirect: "error",
          };
        (c && (l.signal = c.signal),
          fetch("/api/feedback", l)
            .then(function (e) {
              return e
                .json()
                .catch(function () {
                  return { ok: !1, code: "BAD_JSON", httpStatus: e.status };
                })
                .then(function (t) {
                  return ((t._httpStatus = e.status), t);
                });
            })
            .then(function (e) {
              if ((clearTimeout(d), e.ok)) {
                fbIncrRateLimit();
                var t = fbRemainingToday();
                (a(
                  "ok",
                  "✅ تم إرسال رسالتك. شكرًا!" +
                    (t > 0
                      ? " (متبقي " + t + " من " + FB_DAILY_LIMIT + ")"
                      : ""),
                ),
                  ["fb-text", "fb-ref", "fb-contact-val"].forEach(function (e) {
                    var t = document.getElementById(e);
                    t && (t.value = "");
                  }));
                var n = document.getElementById("fb-contact-type");
                return (
                  n && ((n.value = ""), n.dispatchEvent(new Event("change"))),
                  (_fbImages = []),
                  fbRenderPreviews(),
                  fbResetRecaptcha(),
                  void setTimeout(function () {
                    "function" == typeof closeFbModal && closeFbModal();
                  }, 2e3)
                );
              }
              if (e.code && 0 === String(e.code).indexOf("OTP_"))
                return void fbOtpError(e);
              if ("CAPTCHA_FAILED" === e.code)
                return (
                  a("err", "🔒 تعذّر التحقق الأمني — ممكن تجرّب تاني."),
                  void fbResetRecaptcha()
                );
              "RATE" !== e.code
                ? "CONFIG" === e.code
                  ? a("err", "⚙️ الإرسال مش متاح دلوقتي — ممكن تجرّب بعد شوية.")
                  : "INVALID" === e.code
                    ? a("err", "📝 البيانات المدخلة محتاجة مراجعة.")
                    : "BIG" === e.code
                      ? a("err", "📦 الصور كبيرة — ممكن تقلّل عددها.")
                      : "HONEYPOT" === e.code
                        ? a("err", "🤖 تم رفض الطلب.")
                        : e._httpStatus >= 500
                          ? a(
                              "err",
                              "🔧 فيه مشكلة مؤقتة عندنا — ممكن تحاول بعد شوية.",
                            )
                          : a(
                              "err",
                              "❌ تعذّر الإرسال — ممكن تراجع اتصالك بالنت وتحاول تاني.",
                            )
                : a(
                    "err",
                    "⏳ حاولت أكتر من مرة في وقت قصير.\nممكن تستنى شوية وتجرّب تاني.",
                  );
            })
            .catch(function (e) {
              (clearTimeout(d),
                e && "AbortError" === e.name
                  ? a("err", "⏰ الطلب اتأخر — ممكن تحاول تاني.")
                  : a(
                      "err",
                      "📡 تعذّر الاتصال — ممكن تتأكد من النت وتحاول تاني.",
                    ));
            })
            .finally(function () {
              r(!1);
            }));
      } else a("err", s.errors[0]);
    }
  } else a("err", "🤖 لازم تعلّم على مربع «I'm not a robot» الأول");
}

// ═══════════════════════════════════════════════════════════
// ★ طرق التواصل: واتساب مباشر | تليجرام وإيميل بكود تأكيد (OTP)
// ═══════════════════════════════════════════════════════════
function fbEl(id) {
  return document.getElementById(id);
}
function fbSay(cls, msg) {
  var t = fbEl("fb-status");
  t && ((t.className = cls || ""), (t.textContent = msg || ""));
}
function fbLockButtons(lock) {
  [].forEach.call(document.querySelectorAll(".fb-btns button"), function (b) {
    b.disabled = lock;
  });
}
function fbContactType() {
  var s = fbEl("fb-contact-type");
  return s ? s.value : "";
}

function fbSyncFormUI() {
  var t = fbContactType(),
    b = fbEl("fb-tg"),
    cap = document.querySelector(".fb-recaptcha-wrap");
  if (b)
    b.textContent =
      "whatsapp" === t
        ? "💬 فتح واتساب وإرسال"
        : "telegram" === t
          ? "✈️ فتح تليجرام وإرسال"
          : "email" === t
          ? _fbOtp.sid
            ? "✅ تأكيد وإرسال"
            : "📩 إرسال كود التأكيد"
          : "إرسال";
  // الـ reCAPTCHA مش محتاجة مع واتساب، ولا بعد ما التأكيد يبدأ
  if (cap) cap.style.display = _fbOtp.sid ? "none" : "";
}

function fbOtpReset() {
  _fbOtp = { sid: null, type: null, code: null };
  var box = fbEl("fb-otp-box"),
    code = fbEl("fb-otp-code");
  box && (box.style.display = "none");
  code && (code.value = "");
  fbSyncFormUI();
}

function fbOnContactChange() {
  var t = fbContactType(),
    wrap = fbEl("fb-contact-val-wrap"),
    val = fbEl("fb-contact-val"),
    note = fbEl("fb-contact-note"),
    notes = {
      email: "📧 هنبعتلك كود تأكيد على الإيميل ده، ولازم تكتبه علشان الرسالة تتبعت.",
      telegram:
        "✈️ هيتفتح تليجرام برسالة جاهزة وإنت اللي تضغط إرسال. (الصور مش بتتبعت من هنا)",
      whatsapp:
        "💬 هيتفتح واتساب برسالة جاهزة وإنت اللي تضغط إرسال. (الصور مش بتتبعت من واتساب)",
    };
  fbOtpReset();
  wrap && (wrap.style.display = "email" === t ? "" : "none");
  val &&
    ((val.value = ""),
    (val.type = "email" === t ? "email" : "text"),
    (val.placeholder = "email" === t ? "name@example.com" : ""));
  note &&
    ((note.textContent = notes[t] || ""),
    (note.style.display = notes[t] ? "" : "none"));
  fbSyncFormUI();
}

function fbSend(e) {
  var t = fbContactType();
  if ("whatsapp" === t || "telegram" === t) return fbSendChatLink(t);
  if ("email" === t) return fbSendOtpFlow(t);
  return fbSendCore(e);
}

// واتساب / تليجرام: بعد ما reCAPTCHA تتأكد من السيرفر، بنفتح محادثة معاك برسالة جاهزة.
// الطالب هو اللي يبدأ ويضغط إرسال، فمفيش أي رسالة بتروح لحد مكتوب في الفورم.
function fbSendChatLink(kind) {
  var v = fbValidateAll();
  if (!v.ok) return void fbSay("err", v.errors[0]);
  var wa = "whatsapp" === kind;
  if (!_recaptchaToken)
    return void fbSay("err", "🤖 لازم تعلّم على مربع «I'm not a robot» الأول");

  var typ = fbSanitize((fbEl("fb-type") || {}).value || "", 40),
    lines = [
      "📬 رسالة من منصة المواد",
      "النوع: " + (typ || "غير محدد"),
      "الاسم: " + (v.clean.name || "غير محدد"),
      "المرجع: " + (v.clean.ref || "غير محدد"),
      "",
      "التفاصيل:",
      v.clean.text,
    ],
    msg = encodeURIComponent(lines.join("\n")),
    url = "",
    win = window.open("", "_blank"); // بنفتح التبويب الأول علشان المتصفح ما يمنعوش بعد الانتظار

  fbLockButtons(!0);
  fbSay("", "⏳ جاري التحقق...");
  fetch("/api/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "captcha_check",
      kind: kind,
      recaptchaToken: _recaptchaToken,
      website: (fbEl("fb-hp") || {}).value || "",
    }),
    credentials: "omit",
    redirect: "error",
  })
    .then(function (r) {
      return r.json().catch(function () {
        return { ok: !1 };
      });
    })
    .then(function (j) {
      fbResetRecaptcha();
      if (
        !j.ok ||
        !/^https:\/\/(wa\.me|t\.me)\/[A-Za-z0-9_]+$/.test(j.base || "")
      ) {
        win && win.close();
        return void fbSay(
          "err",
          "CONFIG" === j.code
            ? "⚙️ طريقة التواصل دي مش متاحة دلوقتي."
            : "🔒 تعذّر التحقق الأمني — ممكن تجرّب تاني.",
        );
      }
      url = j.base + "?text=" + msg;
      win ? (win.location.href = url) : (window.location.href = url);
      fbSay(
        "ok",
        (wa ? "💬 اتفتح واتساب" : "✈️ اتفتح تليجرام") +
          " — اضغط إرسال هناك علشان الرسالة توصلنا." +
          (_fbImages.length ? "\n📷 الصور ابعتها في نفس المحادثة." : ""),
      );
    })
    .catch(function () {
      win && win.close();
      fbSay("err", "📡 تعذّر الاتصال — ممكن تتأكد من النت وتحاول تاني.");
    })
    .finally(function () {
      fbLockButtons(!1);
    });
}

// تليجرام / إيميل: مرحلتين — (1) بدء التأكيد  (2) كتابة الكود وإرسال الرسالة
function fbSendOtpFlow(ct) {
  // المرحلة 2
  if (_fbOtp.sid && _fbOtp.type === ct) {
    var codeEl = fbEl("fb-otp-code"),
      code = ((codeEl && codeEl.value) || "").replace(/\D/g, "");
    if (6 !== code.length) {
      fbSay("err", "🔐 اكتب كود التأكيد (6 أرقام).");
      codeEl && codeEl.focus();
      return;
    }
    _fbOtp.code = code;
    return fbSendCore("tg");
  }

  // المرحلة 1
  var v = fbValidateAll();
  if (!v.ok) return void fbSay("err", v.errors[0]);
  if (fbRemainingToday() <= 0)
    return void fbSay(
      "err",
      "🚫 وصلت للحد الأقصى (" + FB_DAILY_LIMIT + " رسائل في اليوم).",
    );
  if (!_recaptchaToken)
    return void fbSay("err", "🤖 لازم تعلّم على مربع «I'm not a robot» الأول");

  fbLockButtons(!0);
  fbSay("", "⏳ جاري تجهيز التأكيد...");
  fetch("/api/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "otp_start",
      contactType: ct,
      contactValue: "email" === ct ? v.clean.cVal : "",
      recaptchaToken: _recaptchaToken,
      website: (fbEl("fb-hp") || {}).value || "",
    }),
    credentials: "omit",
    redirect: "error",
  })
    .then(function (r) {
      return r.json().catch(function () {
        return { ok: !1, code: "BAD_JSON" };
      });
    })
    .then(function (j) {
      fbResetRecaptcha(); // التوكن اتستهلك
      if (!j.ok) return void fbOtpStartError(j);
      _fbOtp = { sid: j.sid, type: ct, code: null };
      fbShowOtpBox(ct, j);
    })
    .catch(function () {
      fbSay("err", "📡 تعذّر الاتصال — ممكن تتأكد من النت وتحاول تاني.");
    })
    .finally(function () {
      fbLockButtons(!1);
    });
}

function fbShowOtpBox(ct, j) {
  var box = fbEl("fb-otp-box"),
    hint = fbEl("fb-otp-hint"),
    tg = fbEl("fb-otp-tg"),
    rs = fbEl("fb-otp-resend"),
    code = fbEl("fb-otp-code");
  box && (box.style.display = "");
  code && (code.value = "");
  if ("email" === ct) {
    hint &&
      (hint.textContent =
        "📧 بعتنا كود من 6 أرقام على " +
        (j.maskedTo || "إيميلك") +
        " — اكتبه تحت (صالح 10 دقايق). لو مش لاقيه شوف الـ Spam.");
    tg && (tg.style.display = "none");
    rs && ((rs.style.display = ""), (rs.disabled = !1));
    code && code.focus();
  } else {
    hint &&
      (hint.textContent =
        "✈️ (1) اضغط الزرار وافتح البوت واضغط Start. (2) البوت هيبعتلك كود من 6 أرقام. (3) اكتبه هنا. لو الكود ما وصلش اضغط الزرار وStart تاني.");
    rs && (rs.style.display = "none");
    tg &&
      0 === String(j.botUrl || "").indexOf("https://t.me/") &&
      ((tg.href = j.botUrl), (tg.style.display = ""));
  }
  fbSay("ok", "اكتب الكود وبعدين اضغط «تأكيد وإرسال».");
  fbSyncFormUI();
}

function fbOtpResend() {
  if (!_fbOtp.sid || "email" !== _fbOtp.type) return;
  var btn = fbEl("fb-otp-resend");
  btn && (btn.disabled = !0);
  fbSay("", "⏳ جاري إعادة الإرسال...");
  fetch("/api/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "otp_resend", sid: _fbOtp.sid }),
    credentials: "omit",
    redirect: "error",
  })
    .then(function (r) {
      return r.json().catch(function () {
        return { ok: !1, code: "BAD_JSON" };
      });
    })
    .then(function (j) {
      if (j.ok) {
        fbSay("ok", "📧 بعتنا كود جديد على " + (j.maskedTo || "إيميلك") + ".");
        setTimeout(function () {
          btn && (btn.disabled = !1);
        }, 60000);
        return;
      }
      btn && (btn.disabled = !1);
      if ("OTP_EXPIRED" === j.code) {
        fbOtpReset();
        return void fbSay("err", "⌛ انتهت الجلسة. اطلب كود جديد.");
      }
      fbSay(
        "err",
        "COOLDOWN" === j.code
          ? "⏳ استنى دقيقة قبل إعادة الإرسال."
          : "RATE" === j.code || "RATE_EMAIL" === j.code
            ? "🚫 وصلت للحد الأقصى لإرسال الكود — جرّب بعد شوية."
            : "❌ تعذّرت إعادة الإرسال — جرّب بعد شوية.",
      );
    })
    .catch(function () {
      btn && (btn.disabled = !1);
      fbSay("err", "📡 تعذّر الاتصال — ممكن تتأكد من النت وتحاول تاني.");
    });
}

function fbOtpStartError(j) {
  var c = j && j.code,
    m =
      "CAPTCHA_FAILED" === c
        ? "🔒 تعذّر التحقق الأمني — ممكن تجرّب تاني."
        : "RATE_EMAIL" === c
          ? "🚫 اتبعتلك أكواد كتير على الإيميل ده — جرّب بعد ساعة."
          : "RATE" === c
            ? "⏳ طلبات تأكيد كتير — جرّب بعد شوية."
            : "MAIL" === c
              ? "📧 تعذّر إرسال الإيميل — اتأكد من العنوان أو جرّب تاني."
              : "INVALID" === c
                ? "📝 البيانات المدخلة محتاجة مراجعة."
                : "CONFIG" === c
                  ? "⚙️ التأكيد مش متاح دلوقتي — ممكن تجرّب بعد شوية."
                  : "❌ تعذّر بدء التأكيد — ممكن تجرّب تاني.";
  fbSay("err", m);
}

function fbOtpError(e) {
  var c = e.code;
  if ("OTP_WRONG" === c)
    return void fbSay(
      "err",
      "❌ الكود غلط" +
        (null != e.left ? " — فاضل " + e.left + " محاولات." : "."),
    );
  if ("OTP_NOT_STARTED" === c)
    return void fbSay(
      "err",
      "✈️ لسه ماضغطتش Start في البوت — افتحه الأول وهيبعتلك الكود.",
    );
  if ("OTP_BAD_CODE" === c)
    return void fbSay("err", "🔐 الكود لازم يكون 6 أرقام.");
  if ("OTP_ERROR" === c)
    return void fbSay("err", "🔧 تعذّر التحقق دلوقتي — جرّب بعد شوية.");
  fbOtpReset();
  fbSay(
    "err",
    "OTP_LOCKED" === c
      ? "🔒 محاولات غلط كتير. ابدأ التأكيد من جديد."
      : "OTP_MISMATCH" === c
        ? "📧 الإيميل اتغيّر بعد التأكيد — ابدأ من جديد."
        : "⌛ انتهت صلاحية الكود. اطلب كود جديد.",
  );
  fbResetRecaptcha();
}

function fbRefreshRateHint() {
  var e = document.getElementById("fb-rate-hint");
  if (e) {
    var t = fbRemainingToday();
    t <= 0
      ? ((e.textContent =
          "🚫 وصلت للحد اليومي (" +
          FB_DAILY_LIMIT +
          "/" +
          FB_DAILY_LIMIT +
          ")"),
        (e.style.color = "var(--danger)"))
      : ((e.textContent =
          "📩 متبقي " + t + " من " + FB_DAILY_LIMIT + " رسائل اليوم"),
        (e.style.color = t <= 1 ? "var(--warning)" : "var(--text-hint)"));
  }
}
function showNotFoundPage(e) {
  ((document.getElementById("main-title").textContent = "⚠️ المادة غير موجودة"),
    (document.getElementById("subject-bar").innerHTML = ""));
  var t = document.querySelector(".container");
  if (t) {
    [
      "main-view",
      "lecture-view",
      "quiz-view",
      "dashboard-view",
      "instructors-view",
      "progress-view",
    ].forEach(function (e) {
      var t = document.getElementById(e);
      t && t.classList.remove("active");
    });
    var n = document.getElementById("not-found-view");
    (n ||
      (((n = document.createElement("div")).id = "not-found-view"),
      (n.className = "content-section"),
      t.insertBefore(n, t.firstChild)),
      n.classList.add("active"),
      (n.innerHTML =
        '<div style="text-align:center;padding:60px 20px;"><div style="font-size:64px;margin-bottom:16px;">🔍</div><h2 style="color:var(--danger);margin:0 0 10px;">المادة غير موجودة أو تم تغيير رابطها</h2><p style="color:var(--text-hint);line-height:1.8;margin:0 0 24px;">تأكد من صحة الرابط' +
        (e ? ' (<code dir="ltr">' + esc(e) + "</code>)" : "") +
        ' أو ارجع للصفحة الرئيسية.</p><a href="' +
        location.pathname +
        '" class="d-btn d-green" style="text-decoration:none;display:inline-block;" onclick="location.reload();return false;">← العودة للصفحة الرئيسية</a></div>'));
  }
}
function hideNotFoundPage() {
  var e = document.getElementById("not-found-view");
  e && e.classList.remove("active");
}
function urlForSubject(e) {
  var t = SUBJECTS_INDEX[e];
  return t
    ? location.pathname + "?subject=" + encodeURIComponent(t.slug)
    : location.pathname;
}
function urlForLecture(e, t) {
  var n = SUBJECTS_INDEX[e],
    a = subjects[e];
  if (!n || !a || !a.lectures[t]) return location.pathname;
  var r = a.lectures[t],
    i = r.id || lecSlug(r.t) || "lecture-" + (t + 1);
  return (
    location.pathname +
    "?subject=" +
    encodeURIComponent(n.slug) +
    "&lecture=" +
    encodeURIComponent(i)
  );
}
function toggleFbBox() {
  var e = document.getElementById("fb-modal");
  if (e) {
    (e.classList.add("show"),
      e.setAttribute("aria-hidden", "false"),
      document.documentElement.classList.add("fb-modal-open"),
      "function" == typeof fbResetRecaptcha && fbResetRecaptcha(),
      void 0 !== _fbImages &&
        ((_fbImages = []),
        "function" == typeof fbRenderPreviews && fbRenderPreviews()));
    var t = document.getElementById("fb-status");
    (t && ((t.className = ""), (t.textContent = "")),
      fbLoadRecaptcha(),
      setTimeout(function () {
        try {
          var t = e.querySelector(
            'input:not([type="hidden"]):not(#fb-hp):not(#fb-images), textarea, select',
          );
          t && "function" == typeof t.focus && t.focus({ preventScroll: !0 });
        } catch (e) {}
      }, 150));
  } else showToast("⚠️ قسم الاقتراحات غير متاح");
}
function closeFbModal() {
  var e = document.getElementById("fb-modal");
  if (e) {
    (e.classList.remove("show"),
      e.setAttribute("aria-hidden", "true"),
      document.documentElement.classList.remove("fb-modal-open"),
      void 0 !== _fbImages &&
        ((_fbImages = []),
        "function" == typeof fbRenderPreviews && fbRenderPreviews()),
      "function" == typeof fbResetRecaptcha && fbResetRecaptcha());
    var t = document.getElementById("fb-status");
    t && ((t.className = ""), (t.textContent = ""));
  }
}
function shareThisPage() {
  var e = {
    title: document.title,
    text: "شوف الصفحة دي من منصة المواد التعليمية",
    url: location.href,
  };
  if (navigator.share)
    navigator.share(e).catch(function (e) {
      e && "AbortError" !== e.name && console.warn(e);
    });
  else {
    var t = location.href;
    navigator.clipboard && navigator.clipboard.writeText
      ? navigator.clipboard
          .writeText(t)
          .then(function () {
            showToast("✅ اتنسخ رابط الصفحة");
          })
          .catch(function () {
            fallbackCopy(t);
          })
      : fallbackCopy(t);
  }
}
function fallbackCopy(e) {
  var t = document.createElement("textarea");
  ((t.value = e),
    (t.style.position = "fixed"),
    (t.style.top = "-9999px"),
    (t.style.opacity = "0"),
    document.body.appendChild(t),
    t.select());
  try {
    (document.execCommand("copy"), showToast("✅ اتنسخ الرابط"));
  } catch (e) {
    showToast("❌ تعذّر نسخ الرابط");
  }
  t.remove();
}
function __initApp() {
  if (
    (setTimeout(function () {
      document.body.classList.add("app-ready");
    }, 2e3),
    "undefined" == typeof SUBJECTS_INDEX || !SUBJECTS_INDEX.length)
  )
    return (
      (document.getElementById("main-title").textContent =
        "⚠️ تعذّر تحميل المواد"),
      (document.getElementById("subject-bar").innerHTML = ""),
      void (document.querySelector(".container").innerHTML =
        '<div style="text-align:center;padding:50px 20px;"><h2 style="color:var(--danger)">⚠️ لا توجد مواد في هذا القسم لسه</h2><p style="color:var(--text-hint);line-height:1.8">لسه مفيش مواد مضافة للقسم ده — تقدر تختار قسم تاني.</p><button class="subj-btn" style="margin:10px auto" onclick="showDeptPicker(true)">🎓 تغيير القسم</button></div>')
    );
  (SUBJECTS_INDEX.forEach(function (e, t) {
    ensureSubjectSlug(e, t);
  }),
    loadNotifications(),
    syncAnswerEditsLog(),
    syncLecturesAddedLog(),
    updateNotifBadge(),
    syncAnnouncementsLog(),
    loadSectionStates());
  var e = new URLSearchParams(location.search),
    t = e.get("page"),
    n = e.get("subject"),
    a = e.get("lecture"),
    r = /[?&]view=schedule(&|$)/.test(location.search),
    i = null;
  try {
    var s = localStorage.getItem(LSKEY);
    s && (i = JSON.parse(s));
  } catch (e) {}
  if ("schedule" !== t)
    if ("dashboard" !== t && "progress" !== t)
      if ("myschedule" !== t)
        if (r) openMySchedule(!0);
        else if (n || !i || "dashboard" !== i.view)
          if (n || !i || "progress" !== i.view) {
            var o,
              c = getActiveSubjects();
            if (n) {
              o = -1;
              for (var d = 0; d < SUBJECTS_INDEX.length; d++)
                if (SUBJECTS_INDEX[d].slug === n && -1 !== c.indexOf(d)) {
                  o = d;
                  break;
                }
              if (-1 === o) return void showNotFoundPage(n);
            } else
              o =
                i && "number" == typeof i.subject && -1 !== c.indexOf(i.subject)
                  ? i.subject
                  : c[0] || 0;
            ((currentSubject = o),
              setSubjectTitle(SUBJECTS_INDEX[o]),
              renderSubjectBar(),
              requestAnimationFrame(function () {
                document.body.classList.add("app-ready");
              }),
              showSubjectLoading(),
              loadSubject(o)
                .then(function () {
                  var e = subjects[o];
                  updateSubTabsVisibility(e);
                  var t = !1;
                  if (a) {
                    for (var r = -1, s = 0; s < (e.lectures || []).length; s++)
                      if (
                        (e.lectures[s].id || lecSlug(e.lectures[s].t)) === a
                      ) {
                        r = s;
                        break;
                      }
                    -1 !== r
                      ? (openLecture(o, r, !0), (t = !0))
                      : showToast("⚠️ المحاضرة مش موجودة — فتحنا المادة");
                  }
                  if (
                    (!t &&
                    !n &&
                    i &&
                    "lecture" === i.view &&
                    "number" == typeof i.lecture &&
                    e.lectures &&
                    e.lectures[i.lecture]
                      ? (openLecture(o, i.lecture),
                        (t = !0),
                        showToast("🔙 رجعناك لآخر محاضرة مفتوحة"))
                      : !t &&
                        !n &&
                        i &&
                        "quiz" === i.view &&
                        i.prop &&
                        "number" == typeof i.qidx &&
                        ("lec" === i.prop
                          ? e.lectures && e.lectures[i.qidx]
                          : e[i.prop] && e[i.prop][i.qidx]) &&
                        (openQuiz(o, i.prop, i.qidx),
                        (t = !0),
                        showToast("🔙 رجعناك لآخر اختبار مفتوح")),
                    !t)
                  ) {
                    if (
                      (resetSubTabs(),
                      renderAllLists(),
                      showView("main-view"),
                      n)
                    )
                      try {
                        history.replaceState(
                          { subject: n, view: "main" },
                          "",
                          location.pathname +
                            "?subject=" +
                            encodeURIComponent(n),
                        );
                      } catch (e) {}
                    i &&
                      "section2" === i.tab &&
                      !n &&
                      (openTab(null, "section2"),
                      i.subTab && openSubTab(null, i.subTab));
                  }
                })
                .catch(function (e) {
                  document.getElementById("lectures-list").innerHTML =
                    '<p style="color:var(--danger);padding:24px;text-align:center;font-weight:bold;line-height:1.8;">⚠️ ' +
                    esc(userErrMsg(e)) +
                    '<br><button class="subj-btn" style="margin-top:12px" onclick="location.reload()">🔄 إعادة المحاولة</button></p>';
                }));
          } else openProgress(!0);
        else openDashboard(!0);
      else openMySchedule(!0);
    else openProgress(!0);
  else openDashboard(!0);
}
function __bootDept() {
  "undefined" != typeof DEPARTMENTS && DEPARTMENTS.length
    ? __bootDept2()
    : loadDataScript("datenew/departments.js")
        .then(function () {
          ((CUR_DEPT = __resolveCurDept()), __bootDept2());
        })
        .catch(function () {
          __bootDept2();
        });
}
function __bootDept2() {
  if ("undefined" == typeof DEPARTMENTS || !DEPARTMENTS.length)
    return (
      (document.getElementById("main-title").textContent =
        "⚠️ تعذّر تحميل الأقسام"),
      (document.getElementById("subject-bar").innerHTML = ""),
      void (document.querySelector(".container").innerHTML =
        '<div style="text-align:center;padding:50px 20px;"><h2 style="color:var(--danger)">⚠️ تعذّر تحميل الأقسام</h2><p style="color:var(--text-hint);line-height:1.8">ممكن تتأكد من اتصالك بالنت وتعمل تحديث للصفحة.</p><button class="subj-btn" style="margin:10px auto" onclick="location.reload()">🔄 إعادة المحاولة</button></div>')
    );
  CUR_DEPT
    ? loadDeptIndex(CUR_DEPT)
        .then(__initApp)
        .catch(function (e) {
          ((document.getElementById("subject-bar").innerHTML = ""),
            (document.querySelector(".container").innerHTML =
              '<div style="text-align:center;padding:50px 20px;"><h2 style="color:var(--danger)">⚠️ ' +
              esc(userErrMsg(e)) +
              '</h2><button class="subj-btn" style="margin:10px" onclick="location.reload()">🔄 إعادة المحاولة</button><button class="subj-btn" style="margin:10px" onclick="showDeptPicker(true)">🎓 تغيير القسم</button></div>'));
        })
    : showDeptPicker(!1);
}
(window.addEventListener("popstate", function (e) {
  if (!document.body.classList.contains("quiz-mode")) {
    var t = document.getElementById("lecture-view");
    if (
      !(t && t.classList.contains("active") && t.classList.contains("sec-open"))
    ) {
      var n = new URLSearchParams(location.search),
        a = n.get("page"),
        r = n.get("subject"),
        i = n.get("lecture");
      if ("schedule" !== a)
        if ("dashboard" !== a && "progress" !== a)
          if ("myschedule" !== a)
            if (
              (document.body.classList.remove("dashboard-mode"),
              document.body.classList.remove("instructors-mode"),
              document.body.classList.remove("progress-mode"),
              r)
            ) {
              for (var s = -1, o = 0; o < SUBJECTS_INDEX.length; o++)
                if (SUBJECTS_INDEX[o].slug === r) {
                  s = o;
                  break;
                }
              -1 !== s
                ? subjects[s]
                  ? d()
                  : (showSubjectLoading(),
                    loadSubject(s)
                      .then(d)
                      .catch(function () {
                        showToast(
                          "📴 تعذّر تحميل المادة — ممكن تتأكد من النت وتجرّب تاني",
                        );
                      }))
                : showNotFoundPage(r);
            } else {
              (hideNotFoundPage(),
                (document.getElementById("main-title").textContent =
                  "منصة المواد التعليمية"),
                renderSubjectBar());
              var c = getActiveSubjects();
              c.length ? selectSubject(c[0], !0) : showView("main-view");
            }
          else openMySchedule(!0);
        else openProgress(!0);
      else openDashboard(!0);
    }
  }
  function d() {
    var e = subjects[s];
    if (i && e && e.lectures) {
      for (var t = -1, n = 0; n < e.lectures.length; n++)
        if ((e.lectures[n].id || lecSlug(e.lectures[n].t)) === i) {
          t = n;
          break;
        }
      if (-1 !== t) return void openLecture(s, t, !0);
      showToast("⚠️ المحاضرة مش موجودة");
    }
    selectSubject(s, !0);
  }
}),
  document.addEventListener("keydown", function (e) {
    if ("Escape" === e.key || "Esc" === e.key) {
      var t = document.getElementById("fb-modal");
      t && t.classList.contains("show") && closeFbModal();
    }
  }),
  window.addEventListener("pageshow", function () {
    var e = document.getElementById("fb-modal");
    e && e.classList.contains("show") && closeFbModal();
  }),
  (function () {
    var e = document.getElementById("site-footer");
    e &&
      new MutationObserver(function () {
        var t = document.body.classList.contains("quiz-mode");
        (e.classList.toggle("hidden", t),
          document.body.classList.toggle("footer-hidden", t));
      }).observe(document.body, { attributes: !0, attributeFilter: ["class"] });
  })(),
  "loading" === document.readyState
    ? document.addEventListener("DOMContentLoaded", __bootDept)
    : __bootDept(),
  (function () {
    try {
      var e = document.getElementById("main-title");
      e &&
        "MutationObserver" in window &&
        new MutationObserver(function () {
          try {
            localStorage.setItem(
              "mainTitle_" + (CUR_DEPT || ""),
              e.textContent,
            );
          } catch (e) {}
        }).observe(e, { childList: !0, characterData: !0, subtree: !0 });
    } catch (e) {}
    function t() {
      var e = document.getElementById("subject-bar");
      if (e && e.firstElementChild) {
        var t = Math.round(e.getBoundingClientRect().height);
        if (t > 40 && t < 600)
          try {
            localStorage.setItem(
              "sbH_" + (innerWidth <= 640 ? "m" : "d"),
              String(t),
            );
          } catch (e) {}
        try {
          localStorage.setItem(
            "sbHtml_" + (CUR_DEPT || ""),
            e.innerHTML
              .replace(/\sonclick="[^"]*"/g, "")
              .replace(
                /<button /g,
                '<button tabindex="-1" aria-hidden="true" ',
              ),
          );
        } catch (e) {}
      }
    }
    window.addEventListener(
      "load",
      function () {
        (
          window.requestIdleCallback ||
          function (e) {
            setTimeout(e, 300);
          }
        )(t);
      },
      { once: !0 },
    );
  })(),
  (function () {
    var e = document.getElementById("menu-btn"),
      t = document.getElementById("subject-bar"),
      n = document.getElementById("menu-backdrop");
    if (e && t && n) {
      (e.addEventListener("click", function (t) {
        var a;
        (t.stopPropagation(),
          s()
            ? o()
            : ((a = document.querySelector("header")) &&
                document.documentElement.style.setProperty(
                  "--menu-top",
                  Math.round(a.getBoundingClientRect().bottom + 8) + "px",
                ),
              document.body.classList.add("menu-open"),
              (n.hidden = !1),
              e.setAttribute("aria-expanded", "true")));
      }),
        n.addEventListener("click", o),
        t.addEventListener("click", function (e) {
          e.target.closest && e.target.closest(".subj-btn") && o();
        }),
        document.addEventListener("keydown", function (e) {
          "Escape" === e.key && s() && o();
        }));
      var a = window.innerWidth;
      window.addEventListener("resize", function () {
        window.innerWidth !== a && ((a = window.innerWidth), s() && o());
      });
      var r = document.querySelector("header"),
        i = !1;
      (window.addEventListener(
        "scroll",
        function () {
          i || ((i = !0), requestAnimationFrame(c));
        },
        { passive: !0 },
      ),
        c(),
        window.addEventListener("popstate", o));
    }
    function s() {
      return document.body.classList.contains("menu-open");
    }
    function o() {
      (document.body.classList.remove("menu-open"),
        (n.hidden = !0),
        e.setAttribute("aria-expanded", "false"));
    }
    function c() {
      ((i = !1),
        document.body.classList.toggle(
          "hdr-away",
          !!r && window.scrollY > r.offsetHeight,
        ));
    }
  })(),
  (function () {
    var e = document.getElementById("install-btn");
    if (e) {
      var t =
          (window.matchMedia &&
            matchMedia("(display-mode: standalone)").matches) ||
          window.navigator.standalone,
        n = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
      if (!t) {
        var a = function () {
          e.hidden = !1;
        };
        ((window.__bip || n) && a(),
          window.addEventListener("beforeinstallprompt", function (e) {
            (e.preventDefault(), (window.__bip = e), a());
          }),
          window.addEventListener("appinstalled", function () {
            ((window.__bip = null), (e.hidden = !0));
          }));
      }
      var r = function () {
        for (
          var t = document.querySelectorAll('button,a,div[role="button"]'),
            n = 0;
          n < t.length;
          n++
        ) {
          var a = t[n];
          if (
            !(
              a === e ||
              e.contains(a) ||
              a.contains(e) ||
              a.children.length > 4
            )
          ) {
            var r = (a.textContent || "").replace(/\s+/g, " ").trim();
            r.length < 30 &&
              /ثبّ?ت التطبيق/.test(r) &&
              a.classList.toggle("dup-install", !e.hidden);
          }
        }
      };
      if ((r(), window.MutationObserver)) {
        var i = 0;
        new MutationObserver(function () {
          (clearTimeout(i), (i = setTimeout(r, 150)));
        }).observe(document.body, {
          childList: !0,
          subtree: !0,
          attributes: !0,
          attributeFilter: ["hidden"],
        });
      }
      window.installApp = function () {
        var t = window.__bip;
        if (t && "function" == typeof t.prompt)
          return (
            t.prompt(),
            void Promise.resolve(t.userChoice)
              .then(function () {
                ((window.__bip = null), (e.hidden = !0));
              })
              .catch(function () {})
          );
        showToast(
          n
            ? "من زر المشاركة هتلاقي «إضافة إلى الشاشة الرئيسية»"
            : "من قائمة المتصفح هتلاقي «تثبيت التطبيق»",
        );
      };
    }
    var s = document.getElementById("site-footer");
    if (s) {
      var o = function () {
        document.documentElement.style.setProperty(
          "--foot-h",
          s.offsetHeight + "px",
        );
      };
      (o(),
        window.addEventListener("resize", o),
        window.addEventListener("load", o),
        window.ResizeObserver && new ResizeObserver(o).observe(s));
    }
  })());