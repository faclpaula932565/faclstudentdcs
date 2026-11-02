/* بيانات مادة: نظم التشغيل (operating-systems)
   - المحاضرات (PDF) في lectures/  والأسئلة في questions/
   - المسارات دايمًا من جذر المشروع: datenew/subjects/operating-systems/lectures/lec-01.pdf
   - انسخي شكل المحاضرة/الأسئلة من مادة شغالة عندك (دليل صاحب المنصة، الخطوة 4 و5) */
subjects.push({
  name: "نظم التشغيل",
  en: "Operating Systems",
  icon: "🖥️",
  slug: "operating-systems",
  // lectures: [
  //   /* { t:"المحاضرة 1 — العنوان", d:"وصف", id:"lec-01",
  //        pdf:"datenew/subjects/operating-systems/lectures/lec-01.pdf", questions:[] } */
  // ]
  lectures: [
    {
      t: "المحاضرة الأولى",
      d: "مقدمة في نظم التشغيل والعمليات Processes.",
      id: "operating-systems-lecture-01",
      notes: "من صفحة 1 لي 24.",
      pdf: "datenew/subjects/operating-systems/lectures/chapter 1 - OS.pdf",
      notes: " Slides 1-23 .",
      pdf2: "datenew/subjects/operating-systems/questions/Questions on each lecture/OS_Chapter1_Slides1-23_Questions.pdf",
      // فئات روابط منظمة مخصصة للجزء الأول فقط (من صفحة 1 إلى صفحة 23) من الفصل الأول
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لمفاهيم نظم التشغيل، بنية الحاسوب، المقاطعات، وهرمية التخزين (الفصل الأول – الشرائح 1.1 إلى 1.61)",
          links: [
            {
              t: "د. حسن الأنصاري - Operating System Concepts (متوافق مع الطبعتين 7 و 9)",
              d: "شرح أكاديمي متميز: القائمة معنونة بالطبعة التاسعة (ed. 9) على يوتيوب، لكن الشرح والسلايدات المعتمدة بالداخل هي للطبعة السابعة (7th Edition) القائمة عليها المناهج الجامعية. يغطي مفاهيم الفصل الأول، والفيديوهات من 1 إلى 5.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://youtube.com/playlist?list=PLKlTaCM87WvrO0RElCsK30uS-ylzRLgFM&si=k8zMbDdhG90MbUEY",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح نظم التشغيل - د. أحمد حجاج (Ch1 - Part 1 & 2 & 3)",
              d: "تغطية: تعريف الـ OS وأهدافه، المكونات الأربعة للنظام، الـ OS كموزع موارد وبرنامج تحكم، النواة (Kernel)، الإقلاع (Bootstrap) والـ Firmware، وبنية المقاطعات (Interrupt Vector) والـ Traps.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLxIvc-MGOs6ib0oK1z9C46DeKd9rRcSMY",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "SoftwareTube - كورس نظم التشغيل بالعربي (Chapter 1 Part 1 & 2 & 3)",
              d: "شرح مفصل لـ: Computer-System Operation، الـ Local Buffers، الـ Interrupt Handling، الفرق بين Spooling و Buffering، الـ Device Drivers، بنية I/O والـ Device-Status Table، الـ DMA، هرمية التخزين، والـ Caching.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://youtube.com/playlist?list=PLTr1xN4uMK5seRz6IO7Am9Zp2UKdnzO_n&si=jq6nhzK3LKOC3ZLx",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
        {
          category: "فيديوهات عالمية",
          icon: "🌍",
          description:
            "محاضرات أكاديمية عالمية تغطي القسم الأول من Chapter 1 في كتاب Silberschatz (صفحة 1 - 23)",
          links: [
            {
              t: "Last Minute Lecture - Operating System Concepts (Ch1: Hardware & Storage)",
              d: "مراجعة مركزة: الـ Interrupt-driven architecture، الـ Traps، هيكلية الـ DMA، بنية التخزين الثانوي (Tracks & Sectors)، هرمية التخزين وأداء مستوياتها، والـ Caching.",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLI3TocC2xS26LoF6tSsgTLv44HTr2l2Ol",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Ghassan Shobaki - OS Introduction & Computer System Organization (Chapter 1 Part 1 & 2 & 3)",
              d: "شرح بنيوي مفصل: الـ Bus والذاكرة المشتركة، التفاعل بين العتاد الصلب والنواة والمتحكمات (Device Controllers)، وتدفق المقاطعات في الذاكرة.",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://youtube.com/playlist?list=PL6KMWPQP_DM-7tMNjUa7X2zGrc8jipPeI&si=RoVSJl0eqxdd8arm",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
        {
          category: "مواقع ومراجع",
          icon: "📚",
          description:
            "مقالات وتوثيقات مرجعية لمفاهيم صفحات (1 - 23) من كتاب Silberschatz",
          links: [
            {
              t: "GeeksforGeeks - Operating System Fundamentals",
              d: "توثيق شامل: تعريف الـ OS ومكونات النظام، أنواع المقاطعات (Hardware & Traps)، هيكلية الـ DMA، والتدرج التخزيني.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/operating-systems/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Silberschatz & Galvin Official Student Resources",
              d: "الموقع الرسمي للطلاب لكتاب Operating System Concepts - المرجع والمصادر للطلاب من موقع الناشر الرسمي.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://bcs.wiley.com/college/bcs/redesign/student/0,,_0471694665_BKS_2217____,00.html",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },
        // {
        //   category: "أدوات ومحاكاة",
        //   icon: "🔧",
        //   description:
        //     "برامج تفاعلية ومحاكاة لتجسيد تنفيذ التعليمات، معالجة المقاطعات، ونقل البيانات عبر DMA والذاكرة",
        //   links: [
        //     {
        //       t: "CPU-OS Simulator - Teach-Sim Interactive Tool",
        //       d: "محاكي تفاعلي متقدم لتتبع تنفيذ التعليمات داخل المسجلات، معالجة المقاطعات، وحركة البيانات في الـ Cache والذاكرة الرئيسية.",
        //       icon: "🔧",
        //       actions: [
        //         {
        //           label: "🌐 فتح المحاكي",
        //           url: "https://teach-sim.com/os/",
        //           type: "view",
        //           color: "orange",
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
      // ═══════════════════════════════════════════════════════════════════
      //  مادة: Operating Systems — نظم التشغيل
      //  المسار: datenew/operating-systems/operating-systems.js
      //  المرجع: Silberschatz — Operating System Concepts (Chapter 1)
      //  الفهرس: subjects-index.js → { slug: "operating-systems" }
      // ═══════════════════════════════════════════════════════════════════

      questions: [
        // ═══════════════════════════════════════════════════════
        // MCQ
        // ═══════════════════════════════════════════════════════
        {
          q: "An operating system is best described as:",
          options: [
            "A piece of hardware that speeds up the CPU",
            "A programming language compiler",
            "A program that only manages files",
            "A program that acts as an intermediary between a user of a computer and the computer hardware",
          ],
          correct: 3,
          translation: "أفضل وصف لنظام التشغيل هو:",
          explanation:
            "نظام التشغيل = وسيط بين المستخدم والعتاد. مش عتاد، مش compiler، ومش مجرد مدير ملفات — ده دوره الأساسي.",
        },
        {
          q: "Which of the following is NOT listed as an operating system goal?",
          options: [
            "Execute user programs and make solving user problems easier",
            "Increase the physical size of main memory",
            "Use the computer hardware in an efficient manner",
            "Make the computer system convenient to use",
          ],
          correct: 1,
          translation: "أي مما يلي ليس هدفاً من أهداف نظام التشغيل؟",
          explanation:
            "زيادة الحجم الفيزيائي للذاكرة الرئيسية مسؤولية العتاد، مش نظام التشغيل. باقي الأهداف (تنفيذ البرامج، الكفاءة، السهولة) كلها أهداف حقيقية.",
        },
        {
          q: "Which of the following is NOT one of the four components of a computer system?",
          options: [
            "Hardware",
            "Operating system",
            "Application programs",
            "Network cables",
          ],
          correct: 3,
          translation: "أي مما يلي ليس من مكونات نظام الحاسوب الأربعة؟",
          explanation:
            "المكونات الأربعة: Hardware + OS + Application Programs + Users. كابلات الشبكة مجرد جزء من العتاد.",
        },
        {
          q: "In the four-component view of a computer system, which component provides the basic computing resources (CPU, memory, I/O devices)?",
          options: [
            "Users",
            "Application programs",
            "Hardware",
            "Operating system",
          ],
          correct: 2,
          translation:
            "في الرؤية الرباعية لمكونات نظام الحاسوب، أي مكوّن يوفّر موارد الحوسبة الأساسية (CPU، الذاكرة، أجهزة I/O)؟",
          explanation:
            "العتاد (Hardware) هو اللي بيوفّر الموارد الأساسية: المعالج، الذاكرة، أجهزة الإدخال/الإخراج.",
        },
        {
          q: "Which component controls and coordinates the use of hardware among various applications and users?",
          options: [
            "Application programs",
            "Users",
            "Operating system",
            "Hardware",
          ],
          correct: 2,
          translation:
            "أي مكوّن يتحكم وينسّق استخدام العتاد بين التطبيقات والمستخدمين المختلفين؟",
          explanation:
            "نظام التشغيل هو المنسّق — بيوزّع موارد العتاد بين التطبيقات والمستخدمين بطريقة عادلة وفعّالة.",
        },
        {
          q: "Word processors, compilers, web browsers, database systems, and video games are examples of:",
          options: [
            "Application programs",
            "Operating systems",
            "Hardware",
            "Device controllers",
          ],
          correct: 0,
          translation:
            "معالجات النصوص، المترجمات، متصفحات الويب، قواعد البيانات، والألعاب أمثلة على:",
          explanation:
            "برامج التطبيقات (Application Programs) — بتحدد كيف تُستخدم موارد النظام لحل مشاكل المستخدم.",
        },
        {
          q: "In the slides, 'users' can be:",
          options: [
            "Only application programs",
            "People, machines, or other computers",
            "Only people",
            "Only other computers",
          ],
          correct: 1,
          translation: "في الشرائح، 'المستخدمون' يمكن أن يكونوا:",
          explanation:
            "بشر، آلات، أو حواسيب أخرى — مصطلح 'مستخدم' واسع في نظم التشغيل.",
        },
        {
          q: "When the OS is described as a 'resource allocator', it:",
          options: [
            "Manages all resources and decides between conflicting requests for efficient and fair resource use",
            "Prevents users from using resources",
            "Only allocates memory to the compiler",
            "Only allocates disk space",
          ],
          correct: 0,
          translation: "عندما يوصف نظام التشغيل بأنه 'موزّع موارد'، فهو:",
          explanation:
            "بيدير كل الموارد ويقرر بين الطلبات المتعارضة — بهدف استخدام فعّال وعادل. ده دوره كمُوزّع.",
        },
        {
          q: "When the OS is described as a 'control program', it:",
          options: [
            "Controls only the printer",
            "Controls the execution of programs to prevent errors and improper use of the computer",
            "Decides which application is installed",
            "Compiles user programs",
          ],
          correct: 1,
          translation: "عندما يوصف نظام التشغيل بأنه 'برنامج تحكم'، فهو:",
          explanation:
            "يتحكم في تنفيذ البرامج لمنع الأخطاء والاستخدام غير السليم للحاسوب — ده دوره كبرنامج تحكم.",
        },
        {
          q: "According to the slides, the one program running at all times on the computer is called the:",
          options: [
            "System program",
            "Kernel",
            "Bootstrap program",
            "Application program",
          ],
          correct: 1,
          translation:
            "حسب الشرائح، البرنامج الوحيد الذي يعمل طوال الوقت على الحاسوب يُسمى:",
          explanation:
            "النواة (Kernel) — البرنامج الوحيد اللي بيفضل شغّال دايماً بعد تحميل نظام التشغيل.",
        },
        {
          q: "Everything other than the kernel is either:",
          options: [
            "A cache or a buffer",
            "A system program (ships with the OS) or an application program",
            "A device driver or a trap",
            "An interrupt or a spool",
          ],
          correct: 1,
          translation: "كل حاجة غير النواة تكون إما:",
          explanation:
            "إما برنامج نظام (بيجي مع نظام التشغيل) أو برنامج تطبيقي — تقسيم شامل لكل البرامج.",
        },
        {
          q: "When is the bootstrap program loaded?",
          options: [
            "When the printer is connected",
            "Only when an application crashes",
            "At power-up or reboot",
            "When a file is deleted",
          ],
          correct: 2,
          translation: "متى يتم تحميل برنامج الإقلاع (Bootstrap)؟",
          explanation:
            "عند التشغيل أو إعادة التشغيل (Power-up / Reboot) — أول برنامج يعمل لما تشغّل الجهاز.",
        },
        {
          q: "Where is the bootstrap program typically stored?",
          options: ["RAM only", "The cache", "ROM or EEPROM", "Magnetic tape"],
          correct: 2,
          translation: "أين يُخزَّن برنامج الإقلاع عادةً؟",
          explanation:
            "في ROM أو EEPROM — ذاكرة غير متطايرة عشان يفضل موجود حتى لو الجهاز مطفأ.",
        },
        {
          q: "Firmware is described in the slides as:",
          options: [
            "A user interface",
            "A kind of magnetic disk",
            "A type of application program",
            "A type of software etched directly into a piece of hardware",
          ],
          correct: 3,
          translation: "الـ Firmware يُوصف في الشرائح بأنه:",
          explanation:
            "نوع من البرمجيات محفور مباشرة في العتاد — مش قابل للتغيير بسهولة زي البرامج العادية.",
        },
        {
          q: "Which of the following is NOT a job of the bootstrap program?",
          options: [
            "Scheduling user applications on the printer",
            "Starting execution of the kernel",
            "Loading the operating system kernel",
            "Initializing all aspects of the system",
          ],
          correct: 0,
          translation: "أي مما يلي ليس من مهام برنامج الإقلاع؟",
          explanation:
            "جدولة تطبيقات المستخدم على الطابعة مهمة نظام التشغيل، مش برنامج الإقلاع. الباقي كله من مهامه.",
        },
        {
          q: "EEPROM stands for:",
          options: [
            "Electrically Erasable Programmable Read-Only Memory",
            "Extended Executable Program ROM Module",
            "Electronic Embedded Processor Memory",
            "Electrically Enabled Peripheral ROM",
          ],
          correct: 0,
          translation: "ما اختصار EEPROM؟",
          explanation:
            "ذاكرة قراءة فقط قابلة للبرمجة والمسح كهربائياً — نوع من الذاكرة غير المتطايرة اللي بتحتفظ بالبيانات.",
        },
        {
          q: "In a computer-system organization, CPUs and device controllers connect through a common bus that provides access to:",
          options: [
            "Shared memory",
            "Only the hard disk",
            "Only the printer",
            "The bootstrap program",
          ],
          correct: 0,
          translation:
            "في تنظيم نظام الحاسوب، المعالجات ووحدات التحكم في الأجهزة تتصل عبر ناقل مشترك يوفّر وصولاً إلى:",
          explanation:
            "الذاكرة المشتركة (Shared Memory) — كل المكونات بتوصل لنفس الذاكرة عبر الناقل المشترك.",
        },
        {
          q: "Concurrent execution of CPUs and devices leads to them:",
          options: [
            "Sharing the same registers",
            "Running only one at a time",
            "Ignoring the bus",
            "Competing for memory cycles",
          ],
          correct: 3,
          translation: "التنفيذ المتزامن للمعالجات والأجهزة يؤدي إلى:",
          explanation:
            "تنافس على دورات الذاكرة (Memory Cycles) — لأن كله بيحاول يوصل للذاكرة في نفس الوقت.",
        },
        {
          q: "Each device controller is in charge of:",
          options: [
            "Only main memory",
            "Only the CPU",
            "A particular device type",
            "All devices in the system",
          ],
          correct: 2,
          translation: "كل وحدة تحكم في الأجهزة مسؤولة عن:",
          explanation:
            "نوع معين من الأجهزة — كل وحدة تحكم متخصصة في جهاز أو نوع من الأجهزة.",
        },
        {
          q: "Each device controller has a:",
          options: ["Bootstrap program", "Local buffer", "Kernel", "Compiler"],
          correct: 1,
          translation: "كل وحدة تحكم في الأجهزة لديها:",
          explanation:
            "مخزن محلي (Local Buffer) — مكان مؤقت لتخزين البيانات قبل نقلها للذاكرة الرئيسية.",
        },
        {
          q: "Who moves data between main memory and the local buffers of the device controllers?",
          options: [
            "The user",
            "The compiler",
            "The CPU",
            "The bootstrap program",
          ],
          correct: 2,
          translation:
            "من ينقل البيانات بين الذاكرة الرئيسية والمخازن المحلية لوحدات التحكم؟",
          explanation:
            "المعالج (CPU) — هو المسؤول عن نقل البيانات ذهاباً وإياباً بين الذاكرة والمخازن.",
        },
        {
          q: "How does a device controller inform the CPU that it has finished its operation?",
          options: [
            "By causing an interrupt",
            "By shutting down the system",
            "By deleting its buffer",
            "By rebooting the CPU",
          ],
          correct: 0,
          translation: "كيف تُخبر وحدة التحكم المعالج بأنها أنهت عمليتها؟",
          explanation:
            "بإحداث مقاطعة (Interrupt) — إشارة للمعالج إن العملية خلصت.",
        },
        {
          q: "How can hardware trigger an interrupt?",
          options: [
            "By sending a signal to the CPU through the system bus",
            "By executing a system call",
            "By rewriting the kernel",
            "By running the compiler",
          ],
          correct: 0,
          translation: "كيف يمكن للعتاد إحداث مقاطعة؟",
          explanation:
            "بإرسال إشارة للمعالج عبر الناقل (System Bus) — آلية العتاد للمقاطعات.",
        },
        {
          q: "How can software trigger an interrupt?",
          options: [
            "By executing a special operation called a system call (monitor call)",
            "By sending a signal over the system bus",
            "By clearing the cache",
            "By turning off the device controller",
          ],
          correct: 0,
          translation: "كيف يمكن للبرمجيات إحداث مقاطعة؟",
          explanation:
            "عن طريق تنفيذ عملية خاصة اسمها System Call (أو Monitor Call) — نداء للنظام.",
        },
        {
          q: "The interrupt vector contains:",
          options: [
            "The contents of main memory",
            "The addresses of all the service routines",
            "The list of all installed applications",
            "The disk sectors",
          ],
          correct: 1,
          translation: "متجه المقاطعة (Interrupt Vector) يحتوي على:",
          explanation:
            "عناوين كل روتينات الخدمة — جدول بيعرف النظام فين يروح لما تحصل مقاطعة معينة.",
        },
        {
          q: "When are the addresses in the interrupt vector loaded by the OS?",
          options: [
            "At shutdown",
            "At the OS initialization phase",
            "Every time an interrupt occurs",
            "Only when the disk is full",
          ],
          correct: 1,
          translation: "متى يُحمِّل نظام التشغيل العناوين في متجه المقاطعة؟",
          explanation:
            "في مرحلة تهيئة نظام التشغيل (OS Initialization) — مرة واحدة عند بدء التشغيل.",
        },
        {
          q: "Why must the interrupt architecture save the address of the interrupted instruction?",
          options: [
            "To speed up the disk",
            "So the interrupt vector can be erased",
            "To free memory",
            "So the CPU can return to the interrupted computation after handling the interrupt",
          ],
          correct: 3,
          translation:
            "لماذا يجب على بنية المقاطعة حفظ عنوان التعليمة المُقاطَعة؟",
          explanation:
            "عشان المعالج يقدر يرجع للحساب اللي كان بيعمله بعد ما يخلّص من معالجة المقاطعة.",
        },
        {
          q: "Why are incoming interrupts disabled while another interrupt is being processed?",
          options: [
            "To save disk space",
            "To prevent a lost interrupt",
            "To speed up the CPU clock",
            "To reset the device controller",
          ],
          correct: 1,
          translation:
            "لماذا تُعطَّل المقاطعات الواردة أثناء معالجة مقاطعة أخرى؟",
          explanation:
            "لمنع فقدان مقاطعة (Lost Interrupt) — لو حصلت مقاطعة جديدة أثناء معالجة القديمة، ممكن تتجاهل.",
        },
        {
          q: "A trap (exception) is:",
          options: [
            "A software-generated interrupt caused by an error or a user program request",
            "A hardware failure of the bus",
            "A type of storage device",
            "A type of cache",
          ],
          correct: 0,
          translation: "الفخ (Trap) أو الاستثناء هو:",
          explanation:
            "مقاطعة مُولَّدة برمجياً — بسبب خطأ أو طلب من برنامج المستخدم. مش عطل عتاد.",
        },
        {
          q: "Which of the following is an example of a trap caused by an error?",
          options: [
            "Division by zero",
            "Printing a document",
            "Saving a file",
            "Opening a browser",
          ],
          correct: 0,
          translation: "أي مما يلي مثال على فخ (Trap) ناتج عن خطأ؟",
          explanation:
            "القسمة على صفر — خطأ حسابي بيولّد فخ (Trap) عشان النظام يتعامل معاه.",
        },
        {
          q: "The slides state that an operating system is:",
          options: [
            "Cache driven",
            "Interrupt driven",
            "Disk driven",
            "Compiler driven",
          ],
          correct: 1,
          translation: "الشرائح بتقول إن نظام التشغيل:",
          explanation:
            "مدفوع بالمقاطعات (Interrupt Driven) — معظم شغله بيتم استجابةً لمقاطعات من العتاد أو البرامج.",
        },
        {
          q: "To preserve the state of the CPU during interrupt handling, the OS stores:",
          options: [
            "The registers and the program counter",
            "Only the kernel",
            "Only the cache",
            "Only the disk sectors",
          ],
          correct: 0,
          translation:
            "للحفاظ على حالة المعالج أثناء معالجة المقاطعة، يخزّن نظام التشغيل:",
          explanation:
            "السجلات (Registers) وعداد البرنامج (Program Counter) — عشان يقدر يرجع لنفس الحالة بالظبط.",
        },
        {
          q: "According to the slides, spooling is used for:",
          options: [
            "Managing the cache",
            "Booting the system",
            "Input only",
            "Output (e.g., saving printer jobs in a buffer)",
          ],
          correct: 3,
          translation: "حسب الشرائح، الـ Spooling يُستخدم لـ:",
          explanation:
            "الإخراج (Output) — زي حفظ مهام الطباعة في مخزن عشان الطابعة تنفذها واحدة واحدة.",
        },
        {
          q: "Why is spooling needed for a printer?",
          options: [
            "The printer replaces the CPU",
            "The printer has no power",
            "The printer cannot print all the jobs at the same time, so jobs are saved in a buffer",
            "The printer stores the kernel",
          ],
          correct: 2,
          translation: "لماذا نحتاج الـ Spooling للطابعة؟",
          explanation:
            "لأن الطابعة مش قادرة تطبع كل المهام في نفس الوقت — فبيتم تخزينها في مخزن لحين تنفيذها بالترتيب.",
        },
        {
          q: "The device controller is responsible for:",
          options: [
            "Scheduling the CPU",
            "Compiling programs",
            "Moving data between the peripheral devices it controls and its local buffer storage",
            "Loading the bootstrap program",
          ],
          correct: 2,
          translation: "وحدة التحكم في الأجهزة مسؤولة عن:",
          explanation:
            "نقل البيانات بين الأجهزة الطرفية اللي بتتحكم فيها ومخزنها المحلي — مش جدولة ولا ترجمة.",
        },
        {
          q: "What does the OS have for each device controller to present a uniform interface to the rest of the OS?",
          options: [
            "A cache",
            "A device driver",
            "A bootstrap program",
            "A spool",
          ],
          correct: 1,
          translation:
            "ما الذي يمتلكه نظام التشغيل لكل وحدة تحكم لتقديم واجهة موحّدة لبقية النظام؟",
          explanation:
            "مشغّل الجهاز (Device Driver) — بيفهم تفاصيل الجهاز وبيقدّم واجهة موحّدة للنظام.",
        },
        {
          q: "To start an I/O operation, the device driver first:",
          options: [
            "Loads the appropriate registers within the device controller",
            "Reboots the system",
            "Flushes the cache",
            "Sends a trap to the user",
          ],
          correct: 0,
          translation: "لبدء عملية إدخال/إخراج، يقوم مشغّل الجهاز أولاً بـ:",
          explanation:
            "تحميل السجلات المناسبة داخل وحدة التحكم — عشان يحدد نوع العملية المطلوبة.",
        },
        {
          q: "After the driver loads the registers, the controller:",
          options: [
            "Turns off the device",
            "Examines the register contents to determine what action to take",
            "Loads the kernel again",
            "Erases the registers",
          ],
          correct: 1,
          translation: "بعد ما يحمّل المشغّل السجلات، تقوم وحدة التحكم بـ:",
          explanation:
            "فحص محتوى السجلات لتحديد الإجراء المطلوب — قراءة الأوامر المنقولة من المشغّل.",
        },
        {
          q: "Then the controller starts the transfer of data from:",
          options: [
            "The cache to the registers",
            "The CPU to the compiler",
            "The kernel to the disk",
            "The device to its local buffer",
          ],
          correct: 3,
          translation: "ثم تبدأ وحدة التحكم نقل البيانات من:",
          explanation:
            "من الجهاز لمخزنه المحلي — الخطوة الأولى قبل نقل البيانات للذاكرة الرئيسية.",
        },
        {
          q: "In the first I/O method, control returns to the user program:",
          options: [
            "Immediately without waiting",
            "Only after a reboot",
            "Never",
            "Only upon I/O completion",
          ],
          correct: 3,
          translation:
            "في طريقة الإدخال/الإخراج الأولى، تعود السيطرة لبرنامج المستخدم:",
          explanation:
            "فقط عند اكتمال عملية الإدخال/الإخراج — يعني البرنامج بيستنى لحد ما العملية تخلّص.",
        },
        {
          q: "The first I/O method (waiting for completion) is suitable for:",
          options: [
            "Only the cache",
            "Only tape drives",
            "Small amounts of data",
            "Bulk data",
          ],
          correct: 2,
          translation:
            "طريقة الإدخال/الإخراج الأولى (الانتظار حتى الاكتمال) مناسبة لـ:",
          explanation:
            "كميات صغيرة من البيانات — لأن الانتظار بيضيّع وقت المعالج لو البيانات كتير.",
        },
        {
          q: "In the first I/O method, at most how many I/O requests are outstanding at a time?",
          options: ["One", "Two", "Unlimited", "Eight"],
          correct: 0,
          translation:
            "في طريقة الإدخال/الإخراج الأولى، كم طلب إدخال/إخراج معلّق في المرة الواحدة على الأكثر؟",
          explanation:
            "طلب واحد فقط — لأن البرنامج بيتوقف لحد ما الطلب يخلص، فمفيش مكان لطلب تاني.",
        },
        {
          q: "In the second I/O method, control returns to the user program:",
          options: [
            "Only after a trap",
            "Only after shutdown",
            "Without waiting for I/O completion",
            "Only upon I/O completion",
          ],
          correct: 2,
          translation:
            "في طريقة الإدخال/الإخراج الثانية، تعود السيطرة لبرنامج المستخدم:",
          explanation:
            "بدون انتظار اكتمال الإدخال/الإخراج — البرنامج بيكمل شغله والعملية بتتم في الخلفية.",
        },
        {
          q: "The second I/O method (no waiting) is suitable for:",
          options: [
            "Very small data only",
            "Large amounts of data (bulk data)",
            "Registers only",
            "Nothing",
          ],
          correct: 1,
          translation: "طريقة الإدخال/الإخراج الثانية (بدون انتظار) مناسبة لـ:",
          explanation:
            "كميات كبيرة من البيانات (Bulk Data) — عشان متضيّعش وقت المعالج في الانتظار.",
        },
        {
          q: "The device-status table contains an entry for each I/O device indicating its:",
          options: [
            "Owner and password",
            "Type, address, and state",
            "Color and shape",
            "Price, brand, and size",
          ],
          correct: 1,
          translation:
            "جدول حالة الأجهزة يحتوي على مدخل لكل جهاز إدخال/إخراج يوضح:",
          explanation:
            "النوع والعنوان والحالة — المعلومات الأساسية اللي النظام محتاجها لإدارة الأجهزة.",
        },
        {
          q: "What does the OS do with the device-status table?",
          options: [
            "Uses it as a cache",
            "Deletes it after boot",
            "Indexes into it to determine device status and to modify the table entry to include an interrupt",
            "Stores the kernel in it",
          ],
          correct: 2,
          translation: "ماذا يفعل نظام التشغيل بجدول حالة الأجهزة؟",
          explanation:
            "بيفهرس فيه لتحديد حالة الجهاز، وبيعدّل المدخل عشان يضيف معلومات المقاطعة.",
        },
        {
          q: "DMA stands for:",
          options: [
            "Device Memory Allocation",
            "Dynamic Module Address",
            "Direct Memory Access",
            "Data Management Application",
          ],
          correct: 2,
          translation: "ما اختصار DMA؟",
          explanation:
            "الوصول المباشر للذاكرة — تقنية بتسمح للأجهزة بالوصول للذاكرة بدون مرور بالمعالج.",
        },
        {
          q: "DMA is used for:",
          options: [
            "Only the bootstrap program",
            "High-speed I/O devices able to transmit information at close to memory speeds",
            "Only slow keyboards",
            "Only compilers",
          ],
          correct: 1,
          translation: "يُستخدم DMA لـ:",
          explanation:
            "أجهزة الإدخال/الإخراج عالية السرعة اللي بتنقل البيانات بسرعة قريبة من سرعة الذاكرة.",
        },
        {
          q: "In DMA, the device controller transfers blocks of data directly from buffer storage to main memory:",
          options: [
            "Only after a reboot",
            "Without CPU intervention",
            "Only through the printer",
            "Only with CPU intervention for each byte",
          ],
          correct: 1,
          translation:
            "في DMA، تنقل وحدة التحكم كتل البيانات مباشرة من المخزن للذاكرة الرئيسية:",
          explanation:
            "بدون تدخل المعالج (Without CPU Intervention) — المعالج بيبقى فاضي يعمل حاجات تانية.",
        },
        {
          q: "How many interrupts does DMA generate?",
          options: [
            "None at all",
            "One per second",
            "One per byte of data",
            "One per block of data",
          ],
          correct: 3,
          translation: "كم عدد المقاطعات التي يولّدها DMA؟",
          explanation:
            "مقاطعة واحدة لكل كتلة بيانات — بدل مقاطعة لكل بايت، وده بيوفّر وقت كبير.",
        },
        {
          q: "What is the only large storage medium that the CPU can access directly?",
          options: [
            "Secondary storage",
            "Optical disk",
            "Magnetic tape",
            "Main memory",
          ],
          correct: 3,
          translation:
            "ما هو وسط التخزين الكبير الوحيد الذي يمكن للمعالج الوصول إليه مباشرة؟",
          explanation:
            "الذاكرة الرئيسية (Main Memory) — المعالج بيوصلها مباشرة عكس باقي وسائط التخزين.",
        },
        {
          q: "Secondary storage is described as:",
          options: [
            "The fastest storage in the system",
            "A small volatile storage",
            "Part of the CPU",
            "An extension of main memory that provides large nonvolatile storage capacity",
          ],
          correct: 3,
          translation: "التخزين الثانوي يُوصف بأنه:",
          explanation:
            "امتداد للذاكرة الرئيسية يوفر سعة تخزين كبيرة غير متطايرة — بيحتفظ بالبيانات بعد إطفاء الجهاز.",
        },
        {
          q: "Magnetic disks consist of:",
          options: [
            "Rigid metal or glass platters covered with magnetic recording material",
            "Plastic ribbons",
            "Optical lenses",
            "Silicon chips only",
          ],
          correct: 0,
          translation: "الأقراص المغناطيسية تتكون من:",
          explanation:
            "أقراص صلبة معدنية أو زجاجية مغطاة بمادة تسجيل مغناطيسية — الوسيط الأشهر للتخزين الثانوي.",
        },
        {
          q: "A magnetic disk surface is logically divided into:",
          options: [
            "Pages and frames",
            "Tracks, which are subdivided into sectors",
            "Sectors, which are subdivided into tracks",
            "Blocks and buffers",
          ],
          correct: 1,
          translation: "سطح القرص المغناطيسي مقسّم منطقياً إلى:",
          explanation:
            "مسارات (Tracks) مقسّمة إلى قطاعات (Sectors) — تنظيم منطقي للقراءة والكتابة.",
        },
        {
          q: "The disk controller determines:",
          options: [
            "The size of the cache",
            "The logical interaction between the device and the computer",
            "Which application runs first",
            "The interrupt vector contents",
          ],
          correct: 1,
          translation: "وحدة التحكم في القرص تحدد:",
          explanation:
            "التفاعل المنطقي بين الجهاز والحاسوب — الواجهة بين العتاد والنظام.",
        },
        {
          q: "Storage systems are organized in a hierarchy according to:",
          options: [
            "Age, weight, and location",
            "Speed, cost, and volatility",
            "Brand, price, and warranty",
            "Color, size, and shape",
          ],
          correct: 1,
          translation: "أنظمة التخزين منظّمة في هرمية حسب:",
          explanation:
            "السرعة والتكلفة والتطاير (Volatility) — كل مستوى بيوازن بين التلاتة.",
        },
        {
          q: "Main memory can be viewed as:",
          options: [
            "A last cache for secondary storage",
            "The slowest storage",
            "Non-volatile backup",
            "A device driver",
          ],
          correct: 0,
          translation: "الذاكرة الرئيسية يمكن اعتبارها:",
          explanation:
            "آخر مستوى cache للتخزين الثانوي — بتخزن نسخة من البيانات الأكثر استخداماً.",
        },
        {
          q: "In the storage-device hierarchy figure, which level is at the very top (fastest)?",
          options: ["Cache", "Registers", "Main memory", "Magnetic tapes"],
          correct: 1,
          translation:
            "في شكل هرمية أجهزة التخزين، أي مستوى في القمة (الأسرع)؟",
          explanation:
            "السجلات (Registers) — الأسرع على الإطلاق، موجودة جوه المعالج نفسه.",
        },
        {
          q: "In the storage-device hierarchy figure, which level is at the very bottom?",
          options: [
            "Electronic disk",
            "Optical disk",
            "Magnetic disk",
            "Magnetic tapes",
          ],
          correct: 3,
          translation: "في شكل هرمية أجهزة التخزين، أي مستوى في القاع؟",
          explanation:
            "الأشرطة المغناطيسية (Magnetic Tapes) — الأبطأ لكن الأرخص والأكثر سعة.",
        },
        {
          q: "Which is the correct order of the hierarchy from top to bottom?",
          options: [
            "Cache, registers, main memory, magnetic disk, electronic disk, magnetic tapes, optical disk",
            "Main memory, registers, cache, optical disk, magnetic disk, electronic disk, magnetic tapes",
            "Registers, main memory, cache, magnetic tapes, optical disk, magnetic disk, electronic disk",
            "Registers, cache, main memory, electronic disk, magnetic disk, optical disk, magnetic tapes",
          ],
          correct: 3,
          translation: "ما الترتيب الصحيح للهرمية من القمة للقاع؟",
          explanation:
            "Registers ← Cache ← Main Memory ← Electronic Disk ← Magnetic Disk ← Optical Disk ← Magnetic Tapes — من الأسرع والأغلى للأبطأ والأرخص.",
        },
        {
          q: "Caching means:",
          options: [
            "Deleting old files",
            "Rebooting the CPU",
            "Increasing disk size",
            "Copying information into a faster storage system",
          ],
          correct: 3,
          translation: "الـ Caching يعني:",
          explanation:
            "نسخ المعلومات لنظام تخزين أسرع — مبدأ أساسي في تحسين الأداء.",
        },
        {
          q: "When information is needed, which storage is checked first?",
          options: [
            "The slower storage",
            "The faster storage (cache)",
            "Magnetic tape",
            "Optical disk",
          ],
          correct: 1,
          translation: "عندما نحتاج معلومة، أي تخزين يُفحص أولاً؟",
          explanation:
            "التخزين الأسرع (Cache) — لو المعلومة موجودة فيه، بنستخدمها مباشرة.",
        },
        {
          q: "If the required information is not in the cache, then:",
          options: [
            "The system crashes",
            "It is copied to the cache and used there",
            "The CPU ignores the request",
            "The kernel is reloaded",
          ],
          correct: 1,
          translation: "لو المعلومة المطلوبة مش موجودة في الـ Cache، فـ:",
          explanation:
            "تُنسَخ للـ Cache وتُستخدم هناك — لحد ما تحصل Cache Miss، بنجيب من المستوى الأبطأ.",
        },
        {
          q: "Why is cache management an important design problem?",
          options: [
            "The cache has no speed advantage",
            "The cache is smaller than the storage being cached",
            "The cache never changes",
            "The cache is larger than main memory",
          ],
          correct: 1,
          translation: "لماذا إدارة الـ Cache مشكلة تصميمية مهمة؟",
          explanation:
            "لأن الـ Cache أصغر من التخزين اللي بيعمل Cache له — لازم نختار إيه نحتفظ بيه وإيه نشيله.",
        },
        {
          q: "Which two aspects of cache management are named in the slides?",
          options: [
            "Cache owner and password",
            "Cache brand and price",
            "Cache size and replacement policy",
            "Cache color and shape",
          ],
          correct: 2,
          translation: "أي جانبين لإدارة الـ Cache مذكورين في الشرائح؟",
          explanation:
            "حجم الـ Cache وسياسة الاستبدال (Replacement Policy) — قراران رئيسيان في التصميم.",
        },
        {
          q: "Caching is performed at which levels?",
          options: [
            "Hardware, operating system, and software",
            "Only software",
            "Only hardware",
            "Only the operating system",
          ],
          correct: 0,
          translation: "الـ Caching يتم على أي مستويات؟",
          explanation:
            "في العتاد ونظام التشغيل والبرمجيات — مبدأ عام مطبّق في كل المستويات.",
        },
        {
          q: "According to the performance table, the typical size of registers is:",
          options: [
            "More than 16 GB",
            "More than 16 MB",
            "Less than 1 KB",
            "More than 100 GB",
          ],
          correct: 2,
          translation: "حسب جدول الأداء، الحجم النموذجي للسجلات هو:",
          explanation: "أقل من 1 كيلوبايت — سعة صغيرة جداً لكن سرعة فائقة.",
        },
        {
          q: "According to the performance table, cache is typically implemented using:",
          options: [
            "Optical tape",
            "CMOS DRAM",
            "On-chip or off-chip CMOS SRAM",
            "Magnetic disk",
          ],
          correct: 2,
          translation: "حسب جدول الأداء، الـ Cache عادةً يُنفَّذ باستخدام:",
          explanation:
            "SRAM من نوع CMOS، إما على الشريحة أو خارجها — أسرع من DRAM لكن أغلى.",
        },
        {
          q: "Main memory is implemented using:",
          options: [
            "CMOS DRAM",
            "Magnetic disk",
            "Custom multi-port memory",
            "CMOS SRAM",
          ],
          correct: 0,
          translation: "الذاكرة الرئيسية تُنفَّذ باستخدام:",
          explanation:
            "CMOS DRAM — أرخص من SRAM لكن أبطأ، وده مناسب للذاكرة الرئيسية.",
        },
        {
          q: "Which storage level is managed by the compiler?",
          options: ["Registers", "Main memory", "Cache", "Disk storage"],
          correct: 0,
          translation: "أي مستوى تخزين يديره المترجم (Compiler)؟",
          explanation:
            "السجلات (Registers) — المترجم هو اللي بيقرر إيه اللي يتخزن في السجلات.",
        },
        {
          q: "Which storage level is managed by hardware?",
          options: ["Main memory", "Registers", "Cache", "Disk storage"],
          correct: 2,
          translation: "أي مستوى تخزين يديره العتاد؟",
          explanation:
            "الـ Cache — إدارته بتتم في العتاد نفسه بدون تدخل النظام أو المترجم.",
        },
        {
          q: "Which storage levels are managed by the operating system?",
          options: [
            "Only registers",
            "Main memory and disk storage",
            "Registers and cache",
            "Only cache",
          ],
          correct: 1,
          translation: "أي مستويات تخزين يديرها نظام التشغيل؟",
          explanation:
            "الذاكرة الرئيسية والتخزين على القرص — المستويات الكبيرة اللي محتاجة إدارة النظام.",
        },
        {
          q: "According to the table, disk storage is typically backed by:",
          options: ["Cache", "Main memory", "CD or tape", "Registers"],
          correct: 2,
          translation: "حسب الجدول، التخزين على القرص عادةً مدعوم بـ:",
          explanation:
            "CD أو شريط (Tape) — كطبقة تخزين أبطأ وأرخص للنسخ الاحتياطي والأرشفة.",
        },
        {
          q: "Which storage level has the lowest access time according to the table?",
          options: ["Disk storage", "Main memory", "Registers", "Cache"],
          correct: 2,
          translation: "أي مستوى تخزين له أقل زمن وصول حسب الجدول؟",
          explanation:
            "السجلات (Registers) — أقل زمن وصول على الإطلاق، لأنها جوه المعالج.",
        },
        {
          q: "In a multitasking environment, why must the OS be careful about which value is used for a piece of data?",
          options: [
            "More than one copy of the data may exist (e.g., changed in cache but not yet on disk), so the most recent value must be used",
            "Because there is only ever one copy of the data",
            "Because the cache is always up to date",
            "Because the disk is faster than the cache",
          ],
          correct: 0,
          translation:
            "في بيئة متعددة المهام، لماذا يجب على نظام التشغيل الحرص على أي قيمة تُستخدم للبيانات؟",
          explanation:
            "لأن ممكن تكون فيه أكثر من نسخة للبيانات (متغيرة في الـ Cache لكن لسه مش على القرص)، فيجب استخدام أحدث قيمة.",
        },
        {
          q: "What must a multiprocessor environment provide so that all CPUs have the most recent value in their cache?",
          options: [
            "More disks",
            "Cache coherency (in hardware)",
            "A larger kernel",
            "A faster printer",
          ],
          correct: 1,
          translation:
            "ما الذي يجب أن توفّره بيئة متعددة المعالجات حتى تحصل كل المعالجات على أحدث قيمة في الـ Cache؟",
          explanation:
            "تماسك الـ Cache (Cache Coherency) في العتاد — يضمن إن كل المعالجات شايفة نفس البيانات.",
        },
        {
          q: "Cache coherency ensures that:",
          options: [
            "Only one CPU can run",
            "Main memory is disabled",
            "Caches are erased regularly",
            "An update to a value in one cache is reflected in all other caches",
          ],
          correct: 3,
          translation: "تماسك الـ Cache يضمن أن:",
          explanation:
            "أي تحديث لقيمة في Cache معالج معين ينعكس على كل الـ Caches التانية — بيانات متسقة.",
        },
        {
          q: "Why is data consistency even more complex in a distributed environment?",
          options: [
            "Because there is only one location",
            "Several copies of a datum can exist in distributed locations connected by a network, and all must be updated",
            "Because caches do not exist",
            "Because there is no network",
          ],
          correct: 1,
          translation: "لماذا اتساق البيانات أكثر تعقيداً في بيئة موزعة؟",
          explanation:
            "لأن ممكن تكون فيه نسخ متعددة للبيانات في مواقع مختلفة متصلة بشبكة، ولازم كلها تتحدّث.",
        },

        // ═══════════════════════════════════════════════════════
        // Essay
        // ═══════════════════════════════════════════════════════
        {
          type: "essay",
          q: "Explain the four components of a computer system and the role of each one.",
          translation: "اشرح مكونات نظام الحاسوب الأربعة ودور كل مكوّن.",
          answer:
            "Hardware: provides the basic computing resources (CPU, memory, I/O devices).\n" +
            "Operating system: controls and coordinates the use of the hardware among the various applications and users.\n" +
            "Application programs: define the ways in which the system resources are used to solve the computing problems of users (word processors, compilers, web browsers, database systems, video games).\n" +
            "Users: people, machines, or other computers.",
          tags: ["Chapter 1", "Computer System Structure"],
          ref: "Chapter 1 — Slides 1 to 23",
        },
        {
          type: "essay",
          q: "Describe how an interrupt is handled, from the moment it occurs until the CPU resumes the interrupted work.",
          translation:
            "صِف كيف تُعالَج المقاطعة، من لحظة حدوثها حتى يستأنف المعالج العمل المُقاطَع.",
          answer:
            "• A device controller (hardware, via the system bus) or a program (software, via a system call/trap) signals an interrupt.\n" +
            "• The CPU stops what it is doing; the OS preserves the CPU state by saving the registers and the program counter (the address of the interrupted instruction).\n" +
            "• Control is transferred, through the interrupt vector (which holds the addresses of all service routines, loaded at OS initialization), to the appropriate interrupt service routine.\n" +
            "• Incoming interrupts are disabled while another is being processed, to prevent a lost interrupt.\n" +
            "• When the service routine finishes, the saved address is retrieved and the CPU returns to the interrupted computation.",
          tags: ["Chapter 1", "Interrupts"],
          ref: "Chapter 1 — Slides 1 to 23",
        },
        {
          type: "essay",
          q: "Compare the two I/O methods (synchronous vs. asynchronous) and explain the role of DMA.",
          translation:
            "قارن بين طريقتي الإدخال/الإخراج (المتزامنة واللامتزامنة) واشرح دور DMA.",
          answer:
            "Method 1: control returns to the user program only upon I/O completion. The CPU idles (wait instruction or wait loop), at most one I/O request is outstanding, and it is suitable for small amounts of data.\n" +
            "Method 2: control returns to the user program without waiting for I/O completion. It is suitable for bulk data; a system call lets the user wait for completion while the CPU does other work, and the device-status table tracks each device's type, address, and state.\n" +
            "DMA: used for high-speed devices; the device controller transfers blocks of data directly between its buffer and main memory without CPU intervention, generating only one interrupt per block instead of one per byte.",
          tags: ["Chapter 1", "I/O Structure", "DMA"],
          ref: "Chapter 1 — Slides 1 to 23",
        },
        {
          type: "essay",
          q: "Explain caching and why maintaining consistency of data is a challenge in multitasking, multiprocessor, and distributed environments.",
          translation:
            "اشرح الـ Caching ولماذا يمثل الحفاظ على اتساق البيانات تحدياً في البيئات متعددة المهام ومتعددة المعالجات والموزعة.",
          answer:
            "Caching: information in use is copied temporarily from slower to faster storage. The faster storage (cache) is checked first; if the data is there it is used directly, otherwise it is copied to the cache and used there. Because the cache is smaller than the storage being cached, cache size and replacement policy are important design problems.\n" +
            "Multitasking: multiple copies of the same data may exist at different levels of the hierarchy, so the most recent value must always be used.\n" +
            "Multiprocessor: hardware must provide cache coherency so every CPU sees the latest value.\n" +
            "Distributed: copies may exist in several locations connected by a network, so all must be updated as soon as possible (and disconnections make this harder).",
          tags: ["Chapter 1", "Caching", "Cache coherency"],
          ref: "Chapter 1 — Slides 1 to 23",
        },
      ],
    },
    {
      t: "المحاضرة الثانية ",
      d: "مقدمة في نظم التشغيل والعمليات: التخزين المؤقت، تعدد البرمجة، المشاركة الزمنية، النمط المزدوج، وإدارة العمليات.",

      id: "operating-systems-lecture-02",
      pdf: "datenew/subjects/operating-systems/lectures/chapter 1 - OS.pdf",
      notes: "Slides 24 - 30.",
      pdf2: "datenew/subjects/operating-systems/questions/Questions on each lecture/OS_Chapter1_Slides24-30_Questions.pdf",
      // فئات روابط منظمة مخصصة للجزء الثاني فقط (من صفحة 24 إلى صفحة 30) من الفصل الأول
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات بالعربية لمفاهيم العمليات، تعدد البرمجة، المشاركة الزمنية، النمط المزدوج، وإدارة العمليات (صفحة 24 - 30)",
          links: [
            {
              t: "د. حسن الأنصاري - Operating System Concepts (Chapter 1 Part 6: OS Operations & Process Management)",
              d: "الفيديو السادس: Operating System Chapter 1 Part 6. يغطي هذا الجزء: Operating-System Operations، Process Management، Memory Management، وStorage Management. يتضمن شرحًا لمفاهيم العمليات، إدارتها، وجدولة المعالج، وهي مواضيع تتقاطع مع المحاضرة الثانية (صفحات 24–30).",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://youtu.be/RBMya76uNZY",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "د. أحمد حجاج - Operating Systems | نظم التشغيل (Ch1-4 Storage Structure)",
              d: "الفيديو الرابع: 04–Operating Systems | Ch1-4 | Storage Structure. يغطي بنية التخزين، هرمية التخزين، والـ Caching.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLxIvc-MGOs6ib0oK1z9C46DeKd9rRcSMY",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "SoftwareTube - كورس نظم التشغيل بالعربي (مفاهيم تمهيدية: بنية التخزين، بنية النظام، عمليات النظام)",
              d: "شاهد الفيديوهات: 4 (Storage Structure - Chapter 1 Part 4)، 5 (Computer Systems Architecture - Chapter 1 Part 5)، و 6 (OS Structure and Operation, OS Definition - Chapter 1 Part 6). تغطي بنية التخزين، بنية نظام الحاسوب، عمليات نظام التشغيل، وتعريف نظام التشغيل. هذه مفاهيم أساسية تمهد لفهم إدارة العمليات.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://youtube.com/playlist?list=PLTr1xN4uMK5seRz6IO7Am9Zp2UKdnzO_n",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
        {
          category: "فيديوهات عالمية",
          icon: "🌍",
          description:
            "محاضرات أكاديمية تغطي العمليات، تعدد البرمجة، المشاركة الزمنية، النمط المزدوج، وإدارة العمليات (صفحة 24 - 30)",
          links: [
            {
              t: "Neso Academy - Operating Systems: Process Management",
              d: "شاهد الفيديوهات: 17 (Process State)، 18 (Process Control Block)، 19 (Process Scheduling)، 20 (Context Switch)، 21 (Operations on Processes)، و 22 (Interprocess Communication). تغطية شاملة لإدارة العمليات.",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Gate Smashers - Operating System: Process Management & Dual Mode",
              d: "شاهد الدروس: L-1.2 (System Calls)، L-1.3 (Multiprogramming vs Multitasking)، L-1.4 (Process in OS)، L-1.5 (Process States)، L-1.6 (Process Control Block)، و L-1.7 (Process Scheduling). تغطية مبسطة ومباشرة.",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Ghassan Shobaki - OS Introduction & Processes",
              d: "شاهد المحاضرات: Lecture 4 (Multiprogramming vs Time Sharing)، Lecture 5 (The OS is Interrupt Driven)، Lecture 6 (Processes Part 1)، Lecture 7 (Processes Part 2: Process States)، و Lecture 8 (Processes Part 3: Process Control Block).",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://youtube.com/playlist?list=PL6KMWPQP_DM-7tMNjUa7X2zGrc8jipPeI",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
        {
          category: "مواقع ومراجع",
          icon: "📚",
          description:
            "مقالات وتوثيقات مرجعية لمفاهيم العمليات وإدارة نظام التشغيل (صفحة 24 - 30)",
          links: [
            {
              t: "GeeksforGeeks - Introduction of Process Management",
              d: "مرجع شامل: تعريف العملية، الفرق بين Program و Process، حالات العملية، PCB، وجدولة المهام والمعالج.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/introduction-of-process-management/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },
      ],
      // ═══════════════════════════════════════════════════════════════════
      //  مادة: Operating Systems — نظم التشغيل
      //  المسار: datenew/operating-systems/operating-systems.js → lectures[1].questions
      //  المرجع: Silberschatz — Operating System Concepts (Chapter 1)
      // ═══════════════════════════════════════════════════════════════════

      questions: [
        // ═══════════════════════════════════════════════════════
        // MCQ
        // ═══════════════════════════════════════════════════════
        {
          q: "A program loaded into memory and executing is called a:",
          options: ["Process", "Job", "Task", "Thread"],
          correct: 0,
          translation: "البرنامج المحمّل في الذاكرة وقيد التنفيذ يُسمى:",
          explanation:
            "عملية (Process) — البرنامج في حالة التنفيذ الفعلي. البرنامج نفسه كيان سلبي، لكن لما يتحمّل وينفّذ بيبقى عملية نشطة.",
        },
        {
          q: "The job pool is typically located on:",
          options: ["Main memory", "Cache", "Hard disk", "Registers"],
          correct: 2,
          translation: "مجمّع المهام (Job Pool) عادةً يوجد على:",
          explanation:
            "القرص الصلب (Hard Disk) — لأن عدد المهام اللي عايزة تتنفذ أكبر من إنها تستوعبها الذاكرة الرئيسية.",
        },
        {
          q: "Job scheduling is used to:",
          options: [
            "Choose which processes in the pool to bring to main memory",
            "Choose which process in main memory to execute next",
            "Allocate CPU time to threads",
            "Manage I/O devices",
          ],
          correct: 0,
          translation: "جدولة المهام (Job Scheduling) تُستخدم لـ:",
          explanation:
            "اختيار أي عمليات من المجمّع تُنقل للذاكرة الرئيسية — بتحكّم في دخول المهام للنظام.",
        },
        {
          q: "CPU scheduling is needed when:",
          options: [
            "Several jobs in main memory are ready to execute at the same time",
            "A job is waiting for I/O",
            "The system boots",
            "A new job is added to the job pool",
          ],
          correct: 0,
          translation: "جدولة المعالج (CPU Scheduling) مطلوبة عندما:",
          explanation:
            "عدة مهام في الذاكرة الرئيسية جاهزة للتنفيذ في نفس الوقت — لازم نختار أي واحدة تشتغل.",
        },
        {
          q: "Multiprogramming organizes jobs so that:",
          options: [
            "The CPU always has one to execute",
            "Only one job runs at a time",
            "I/O devices are idle",
            "Users can interact directly",
          ],
          correct: 0,
          translation: "البرمجة المتعددة (Multiprogramming) تنظّم المهام بحيث:",
          explanation:
            "المعالج دايماً عنده مهمة ينفذها — ده بيزيد استغلال المعالج ويقلل وقت الفراغ.",
        },
        {
          q: "When a job has to wait for I/O, the OS switches to another job using:",
          options: ["Job scheduling", "CPU scheduling", "Swapping", "Paging"],
          correct: 1,
          translation:
            "لما مهمة تنتظر الإدخال/الإخراج، نظام التشغيل ينتقل لمهمة تانية باستخدام:",
          explanation:
            "جدولة المعالج (CPU Scheduling) — بتختار المهمة التالية من المهام الموجودة في الذاكرة.",
        },
        {
          q: "Timesharing is a logical extension of:",
          options: [
            "Multiprogramming",
            "Multitasking",
            "Multiprocessing",
            "Networking",
          ],
          correct: 0,
          translation: "المشاركة الزمنية (Timesharing) امتداد منطقي لـ:",
          explanation:
            "البرمجة المتعددة (Multiprogramming) — بتزيد عليها التفاعل مع المستخدمين.",
        },
        {
          q: "In timesharing, the response time should be:",
          options: [
            "< 1 second",
            "< 1 millisecond",
            "> 1 second",
            "> 1 minute",
          ],
          correct: 0,
          translation: "في المشاركة الزمنية، زمن الاستجابة يجب أن يكون:",
          explanation:
            "أقل من ثانية واحدة — عشان المستخدم يحس إن النظام تفاعلي ومش بطيء.",
        },
        {
          q: "Swapping is used when:",
          options: [
            "Processes don't fit in memory",
            "The CPU is idle",
            "I/O is completed",
            "A job is created",
          ],
          correct: 0,
          translation: "الـ Swapping يُستخدم عندما:",
          explanation:
            "العمليات مش بتتسع في الذاكرة — بننقلها بين الذاكرة والقرص لتوفير مساحة.",
        },
        {
          q: "Virtual memory allows:",
          options: [
            "Execution of processes not completely in memory",
            "Faster disk access",
            "More registers",
            "Larger cache",
          ],
          correct: 0,
          translation: "الذاكرة الافتراضية (Virtual Memory) تسمح بـ:",
          explanation:
            "تنفيذ عمليات مش موجودة كاملة في الذاكرة — بتوفر إحساس بذاكرة أكبر من الحقيقية.",
        },
        {
          q: "Modern operating systems are:",
          options: [
            "Interrupt driven",
            "Polling driven",
            "Batch driven",
            "Time driven",
          ],
          correct: 0,
          translation: "أنظمة التشغيل الحديثة تعمل بـ:",
          explanation:
            "المقاطعات (Interrupt Driven) — معظم شغل النظام بيتم استجابةً لمقاطعات من العتاد أو البرامج.",
        },
        {
          q: "A software-generated interrupt caused by an error or a user program request is called a:",
          options: [
            "Trap (exception)",
            "Hardware interrupt",
            "System call",
            "Signal",
          ],
          correct: 0,
          translation:
            "المقاطعة المُولَّدة برمجياً بسبب خطأ أو طلب من برنامج المستخدم تُسمى:",
          explanation:
            "فخ (Trap) أو استثناء (Exception) — عكس المقاطعة العتادية اللي بتيجي من الأجهزة.",
        },
        {
          q: "Division by zero is an example of:",
          options: [
            "A trap caused by an error",
            "A hardware interrupt",
            "A system call",
            "A normal termination",
          ],
          correct: 0,
          translation: "القسمة على صفر مثال على:",
          explanation:
            "فخ ناتج عن خطأ (Trap caused by an error) — خطأ حسابي بيولّد مقاطعة برمجية.",
        },
        {
          q: "Dual-mode operation allows the OS to:",
          options: [
            "Protect itself and other system components",
            "Run faster",
            "Reduce memory usage",
            "Increase disk space",
          ],
          correct: 0,
          translation: "التشغيل ثنائي النمط (Dual-Mode) يسمح لنظام التشغيل بـ:",
          explanation:
            "حماية نفسه وباقي مكونات النظام — بيمنع برامج المستخدم من تنفيذ عمليات خطيرة.",
        },
        {
          q: "The mode bit is set to 0 for:",
          options: [
            "Kernel mode",
            "User mode",
            "Supervisor mode",
            "Privileged mode",
          ],
          correct: 0,
          translation: "بت النمط (Mode Bit) بيتضبط على 0 لـ:",
          explanation:
            "نمط النواة (Kernel Mode) — 0 معناه إن النظام في وضع الصلاحيات الكاملة.",
        },
        {
          q: "The mode bit is set to 1 for:",
          options: ["User mode", "Kernel mode", "System mode", "Monitor mode"],
          correct: 0,
          translation: "بت النمط (Mode Bit) بيتضبط على 1 لـ:",
          explanation:
            "نمط المستخدم (User Mode) — 1 معناه إن النظام في وضع الصلاحيات المحدودة.",
        },
        {
          q: "Privileged instructions can only be executed in:",
          options: ["Kernel mode", "User mode", "Any mode", "Debug mode"],
          correct: 0,
          translation:
            "التعليمات المميزة (Privileged Instructions) تُنفَّذ فقط في:",
          explanation:
            "نمط النواة (Kernel Mode) — لأنها تعليمات خطيرة ممكن تأثر على النظام كله.",
        },
        {
          q: "A system call changes the mode to:",
          options: ["Kernel mode", "User mode", "Idle mode", "Safe mode"],
          correct: 0,
          translation: "نداء النظام (System Call) يغيّر النمط إلى:",
          explanation:
            "نمط النواة (Kernel Mode) — لأن طلب الخدمة لازم يتنفذ بصلاحيات النواة.",
        },
        {
          q: "To prevent infinite loops and process hogging resources, the OS uses:",
          options: ["A timer", "A cache", "A semaphore", "A mutex"],
          correct: 0,
          translation:
            "لمنع الحلقات اللانهائية واستحواذ العمليات على الموارد، يستخدم نظام التشغيل:",
          explanation:
            "مؤقت (Timer) — بيقاطع العملية بعد فترة محددة عشان النظام يستعيد السيطرة.",
        },
        {
          q: "The timer generates an interrupt after:",
          options: [
            "A specific period",
            "Each instruction",
            "Each I/O operation",
            "Each system call",
          ],
          correct: 0,
          translation: "المؤقت يولّد مقاطعة بعد:",
          explanation:
            "فترة محددة (Specific Period) — الفترة بتتحدد لما النظام يجدول العملية.",
        },
        {
          q: "A process is:",
          options: [
            "A program in execution",
            "A passive entity",
            "A file on disk",
            "A hardware component",
          ],
          correct: 0,
          translation: "العملية (Process) هي:",
          explanation:
            "برنامج قيد التنفيذ — كيان نشط، عكس البرنامج اللي كيان سلبي.",
        },
        {
          q: "Which of the following is NOT a resource needed by a process?",
          options: ["CPU", "Memory", "I/O", "Compiler"],
          correct: 3,
          translation: "أي مما يلي ليس مورداً تحتاجه العملية؟",
          explanation:
            "المترجم (Compiler) مش مورد أساسي لكل عملية — ممكن تكون عملية من غير مترجم خالص.",
        },
        {
          q: "Process termination requires:",
          options: [
            "Reclaim of any reusable resources",
            "Deletion of all files",
            "Formatting the disk",
            "Restarting the system",
          ],
          correct: 0,
          translation: "إنهاء العملية يتطلب:",
          explanation:
            "استعادة الموارد القابلة لإعادة الاستخدام — عشان تتحرر وتُستخدم في عمليات تانية.",
        },
        {
          q: "A single-threaded process has:",
          options: [
            "One program counter",
            "Multiple program counters",
            "No program counter",
            "One stack",
          ],
          correct: 0,
          translation: "العملية أحادية الخيط (Single-threaded) لديها:",
          explanation:
            "عداد برنامج واحد (One Program Counter) — لأنها بتنفذ تعليمة واحدة في كل لحظة.",
        },
        {
          q: "A multi-threaded process has:",
          options: [
            "One program counter per thread",
            "One program counter for all threads",
            "No program counter",
            "One program counter per process",
          ],
          correct: 0,
          translation: "العملية متعددة الخيوط (Multi-threaded) لديها:",
          explanation:
            "عداد برنامج لكل خيط (One Program Counter per Thread) — كل خيط له مسار تنفيذ مستقل.",
        },
        {
          q: "Concurrency in a system with many processes is achieved by:",
          options: [
            "Multiplexing the CPUs among processes/threads",
            "Running processes sequentially",
            "Using multiple disks",
            "Increasing memory",
          ],
          correct: 0,
          translation:
            "التزامن (Concurrency) في نظام فيه عمليات كتير يتحقق عن طريق:",
          explanation:
            "تقسيم وقت المعالجات بين العمليات/الخيوط (Multiplexing) — كل عملية بتاخد شريحة زمنية.",
        },
        {
          q: "Which of the following is NOT a process management activity of the OS?",
          options: [
            "Creating and deleting processes",
            "Suspending and resuming processes",
            "Providing mechanisms for process synchronization",
            "Managing the file system",
          ],
          correct: 3,
          translation:
            "أي مما يلي ليس من أنشطة إدارة العمليات في نظام التشغيل؟",
          explanation:
            "إدارة نظام الملفات (File System Management) وظيفة منفصلة عن إدارة العمليات.",
        },
        {
          q: "The OS is responsible for providing mechanisms for:",
          options: [
            "Process communication",
            "Deadlock handling",
            "Both a and b",
            "None of the above",
          ],
          correct: 2,
          translation: "نظام التشغيل مسؤول عن توفير آليات لـ:",
          explanation:
            "التواصل بين العمليات + معالجة الجمود (Deadlock) — الاتنين من مسؤوليات إدارة العمليات.",
        },
        {
          q: "In the transition from user to kernel mode, a system call triggers a:",
          options: ["Trap", "Hardware interrupt", "Signal", "Exception"],
          correct: 0,
          translation:
            "في الانتقال من نمط المستخدم لنمط النواة، نداء النظام (System Call) يُحدِث:",
          explanation: "فخ (Trap) — مقاطعة برمجية بتنقل التحكم لنمط النواة.",
        },
        {
          q: "After the system call completes, the mode bit is set back to:",
          options: ["1 (user mode)", "0 (kernel mode)", "2", "-1"],
          correct: 0,
          translation: "بعد اكتمال نداء النظام، بت النمط يُعاد ضبطه على:",
          explanation:
            "1 (نمط المستخدم) — النظام بترجع الصلاحيات المحدودة للمستخدم بعد تنفيذ الطلب.",
        },
        {
          q: "The timer is set up before scheduling a process to:",
          options: [
            "Regain control or terminate a program that exceeds allocated time",
            "Increase CPU speed",
            "Reduce power consumption",
            "Improve disk performance",
          ],
          correct: 0,
          translation: "المؤقت يُضبط قبل جدولة العملية عشان:",
          explanation:
            "النظام يستعيد السيطرة أو ينهي برنامج تجاوز الوقت المخصص له — حماية من الاستحواذ.",
        },
        {
          q: "The operating system decrements the timer counter until it reaches zero, then:",
          options: [
            "Generates an interrupt",
            "Restarts the process",
            "Switches to user mode",
            "Clears the cache",
          ],
          correct: 0,
          translation: "نظام التشغيل ينقّص عدّاد المؤقت حتى يصل للصفر، ثم:",
          explanation:
            "يولّد مقاطعة (Generates an Interrupt) — عشان النظام يستعيد التحكم.",
        },
        {
          q: "Which of the following is an example of a system call?",
          options: [
            "Requesting an OS service",
            "Division by zero",
            "Infinite loop",
            "Hardware interrupt",
          ],
          correct: 0,
          translation: "أي مما يلي مثال على نداء النظام (System Call)؟",
          explanation:
            "طلب خدمة من نظام التشغيل — ده بالظبط تعريف نداء النظام.",
        },
        {
          q: "The job pool contains:",
          options: [
            "Processes ready and awaiting allocation to main memory",
            "Processes currently executing",
            "Completed processes",
            "I/O requests",
          ],
          correct: 0,
          translation: "مجمّع المهام (Job Pool) يحتوي على:",
          explanation:
            "عمليات جاهزة في انتظار تخصيصها للذاكرة الرئيسية — كل المهام اللي عايزة تتنفذ.",
        },
        {
          q: "Multiprogramming increases CPU utilization by:",
          options: [
            "Organizing jobs so CPU always has one to execute",
            "Running only one job at a time",
            "Reducing I/O operations",
            "Increasing memory size",
          ],
          correct: 0,
          translation: "البرمجة المتعددة تزيد استغلال المعالج عن طريق:",
          explanation:
            "تنظيم المهام بحيث المعالج دايماً عنده مهمة ينفذها — مفيش وقت فراغ.",
        },

        // ═══════════════════════════════════════════════════════
        // Essay
        // ═══════════════════════════════════════════════════════
        {
          type: "essay",
          q: "Explain the concepts of multiprogramming and timesharing (multitasking). How do they differ, and what is the role of job scheduling and CPU scheduling in each?",
          translation:
            "اشرح مفهومي البرمجة المتعددة والمشاركة الزمنية (تعدد المهام). كيف يختلفان، وما دور جدولة المهام وجدولة المعالج في كل منهما؟",
          answer:
            "Multiprogramming organizes jobs (code and data) so that the CPU always has one to execute. A subset of total jobs is kept in memory. When a job has to wait (e.g., for I/O), the OS switches to another job using CPU scheduling. This increases CPU utilization.\n" +
            "Timesharing is a logical extension of multiprogramming in which the CPU switches jobs so frequently that users can interact with each job while it is running, creating interactive computing. Response time should be < 1 second. Each user has at least one program executing in memory (process). If several jobs are ready to run, CPU scheduling is used. If processes don't fit in memory, swapping moves them in and out. Virtual memory allows execution of processes not completely in memory. A timeshared OS uses both CPU scheduling and job scheduling to provide users with a small portion of a time-shared computer.",
          tags: ["Chapter 1", "Multiprogramming", "Timesharing"],
          ref: "Chapter 1 — Slides 24 to 30",
        },
        {
          type: "essay",
          q: "Describe dual-mode operation in operating systems. Why is it necessary? Explain the mode bit, user mode, kernel mode, privileged instructions, and how system calls, traps, and interrupts cause mode changes.",
          translation:
            "صِف التشغيل ثنائي النمط في أنظمة التشغيل. لماذا هو ضروري؟ اشرح بت النمط، نمط المستخدم، نمط النواة، التعليمات المميزة، وكيف تسبب نداءات النظام والفخاخ والمقاطعات تغييرات في النمط.",
          answer:
            "Dual-mode operation allows the OS to protect itself and other system components. It uses two modes: user mode and kernel mode (also called supervisor, privileged, or system mode). A mode bit provided by hardware distinguishes between them: 0 for kernel mode, 1 for user mode. Some instructions are designated as privileged and can only be executed in kernel mode. System calls, traps, and interrupts change the mode to kernel. A system call is issued when a user application requests a service from the OS. This transition ensures that the OS maintains control over the CPU and prevents user programs from executing privileged operations directly.",
          tags: ["Chapter 1", "Dual-Mode", "Kernel Mode"],
          ref: "Chapter 1 — Slides 24 to 30",
        },
        {
          type: "essay",
          q: "Explain the purpose of the timer in an operating system and how it helps maintain control over the CPU.",
          translation:
            "اشرح الغرض من المؤقت في نظام التشغيل وكيف يساعد في الحفاظ على السيطرة على المعالج.",
          answer:
            "To ensure that the OS maintains control over the CPU, it uses a timer. The timer is set to interrupt the computer after a specific period. The operating system decrements a counter until it reaches zero; when the counter is zero, an interrupt is generated. The timer is set up before scheduling a process to regain control or terminate a program that exceeds its allocated time. This prevents infinite loops or a process from hogging resources indefinitely.",
          tags: ["Chapter 1", "Timer", "CPU Control"],
          ref: "Chapter 1 — Slides 24 to 30",
        },
        {
          type: "essay",
          q: "Discuss the process management responsibilities of an operating system. What is a process, what resources does it need, and what activities does the OS perform in connection with process management?",
          translation:
            "ناقش مسؤوليات إدارة العمليات في نظام التشغيل. ما هي العملية، وما الموارد التي تحتاجها، وما الأنشطة التي يقوم بها نظام التشغيل فيما يتعلق بإدارة العمليات؟",
          answer:
            "A process is a program in execution. It is a unit of work within the system. A program is a passive entity, while a process is an active entity. A process needs resources to accomplish its task: CPU, memory, I/O, files, and initialization data. Process termination requires reclaim of any reusable resources. A single-threaded process has one program counter specifying the location of the next instruction to execute. A multi-threaded process has one program counter per thread. Typically, a system has many processes, some user, some operating system, running concurrently on one or more CPUs. Concurrency is achieved by multiplexing the CPUs among the processes/threads. The operating system is responsible for: creating and deleting both user and system processes; suspending and resuming processes; providing mechanisms for process synchronization; providing mechanisms for process communication; and providing mechanisms for deadlock handling.",
          tags: ["Chapter 1", "Process Management"],
          ref: "Chapter 1 — Slides 24 to 30",
        },
      ],
    },
    {
      t: "المحاضرة 3 (Chapter 3 — الجزء الأول): Processes",
      d: "مفهوم الـ Process وحالاته وPCB والـ Schedulers والـ Context Switch وعمليات الإنشاء والإنهاء والتواصل بين العمليات (IPC) — الجزء الأول من الفصل الثالث.",
      id: "operating-systems-lecture-03",

      pdf: "datenew/subjects/operating-systems/lectures/ch3 Processes-1-25_compressed.pdf",
      pdf2: "datenew/subjects/operating-systems/questions/Questions on each lecture/Lecture-03-Questions.pdf",
      // المحاضرة: Chapter 3 - Processes (Operating System Concepts, Silberschatz) — Process Concept, States, PCB, Scheduling Queues, Schedulers, Context Switch, Process Creation/Termination, Cooperating Processes, IPC

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شرح بالعربي لمفاهيم العمليات (Processes) في أنظمة التشغيل: حالات العملية، PCB، الجدولة، والـ IPC.",
          links: [
            {
              t: "د. حسن الأنصاري - Operating System Concepts (Chapter 3 Part 1–4)",
              d: "قائمة تشغيل تضم الفيديوهات من 16 إلى 19: Operating System Chapter 3 Part 1 (17:38)، Chapter 3 Part 2 (16:31)، Chapter 3 Part 3 (23:15)، Chapter 3 Part 4 (19:25).",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://youtube.com/playlist?list=PLKlTaCM87WvrO0RElCsK30uS-ylzRLgFM&si=W72cPbhDWdPcJHVf",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "ما هو Process في نظام التشغيل؟ شرح بالعربي",
              d: "فيديو عربي يشرح مفهوم العملية (Process) في نظام التشغيل والمكونات الأساسية ليها زي Program Counter و Stack و Data Section و Heap. مرتبط مباشرة بقسم Process Concept في المحاضرة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=0Dzw7BQ_hmU",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح Processes ببساطة في نظام التشغيل",
              d: "شرح مبسط للعمليات (Processes) في نظام التشغيل، بيغطي حالات العملية (States) وآلية إنشائها وإنهائها. مفيد لفهم أقسام Process State و Operations on Processes في المحاضرة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=ykzFTxGdRTo",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "كورس أنظمة التشغيل باللغة العربية",
              d: "Playlist كامل لأنظمة التشغيل بالعربي، بيغطي Processes و Process States وكل مفاهيم المحاضرة. منصة تعليمية عربية شاملة للطلبة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ فتح الـ Playlist",
                  url: "https://www.youtube.com/playlist?list=PLHKTPL-jkzUqgHIBdC2I16QqZCSDN_6oS",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "نظم التشغيل - Operating Systems (بالعربي)",
              d: "Playlist شامل لنظم التشغيل باللغة العربية من د. أحمد حجاج، بيغطي العمليات والجدولة وإدارة الذاكرة. مرتبط بكل أقسام المحاضرة ومفيد كمرجع عربي متكامل.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ فتح الـ Playlist",
                  url: "https://www.youtube.com/playlist?list=PLxIvc-MGOs6ib0oK1z9C46DeKd9rRcSMY",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
        {
          category: "فيديوهات عالمية",
          icon: "🌍",
          description:
            "شرح بالإنجليزي لمفاهيم المحاضرة من قناة Neso Academy التعليمية الشهيرة في أنظمة التشغيل.",
          links: [
            {
              t: "Processes — Chapter 3 (Operating System) — Neso Academy",
              d: "Playlist كامل من Neso Academy عن Chapter 3: Processes، بيغطي Process Concept و States و PCB و Scheduling Queues و Schedulers و Context Switch. ده المرجع الأساسي المطابق للمحاضرة بالظبط.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ Open Playlist",
                  url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgKl0MbI6kbI5ffNt7BF8Fn",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Operating System — Full Course (Neso Academy)",
              d: "الكورس الكامل لأنظمة التشغيل من Neso Academy، فيه Chapter 3: Processes بـ 15 محاضرة. كل المحتوى متطابق مع فصول كتاب Silberschatz اللي المحاضرة مبنية عليه.",
              icon: "🌍",
              actions: [
                {
                  label: "🌐 Visit Course Page",
                  url: "https://www.nesoacademy.org/cs/03-operating-system",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Operating System — Neso Academy Channel Playlist",
              d: "الـ Playlist الكامل لقناة Neso Academy عن أنظمة التشغيل، فيه شروحات لكل فصول الكتاب بما فيها Process Management و CPU Scheduling. مناسب لمراجعة سريعة قبل الامتحان.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ Open Playlist",
                  url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "CPU Scheduling — Chapter 5 (Operating System)",
              d: "Playlist من Neso Academy عن CPU Scheduling، مكمل لقسم Schedulers في المحاضرة. بيشرح الفرق بين Long-term و Short-term Scheduler وأنواع الجدولة بتفصيل أكبر.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ Open Playlist",
                  url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRitWSE_AyyySWfhRgyA-rHk",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
        {
          category: "مواقع ومراجع",
          icon: "📚",
          description:
            "مقالات ومراجع تعليمية بالعربي والإنجليزي تشرح كل مفاهيم المحاضرة بالتفصيل مع الرسومات التوضيحية.",
          links: [
            {
              t: "States of a Process in Operating Systems — GeeksforGeeks",
              d: "مقال شامل عن حالات العملية الخمس (new, ready, running, waiting, terminated) والانتقالات بينها. مرتبط مباشرة بقسم Process State في المحاضرة وفيه رسمة الـ state diagram.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المقال",
                  url: "https://www.geeksforgeeks.org/operating-systems/states-of-a-process-in-operating-systems",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Process Control Block (PCB) in OS — GeeksforGeeks",
              d: "شرح تفصيلي للـ PCB ومكوناته: Process State و PC و CPU Registers و Scheduling Information و Memory Management Info و Accounting Info و I/O Status. مرتبط بقسم PCB في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المقال",
                  url: "https://www.geeksforgeeks.org/operating-systems/process-control-block-in-os",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Process Control Block — Wikipedia",
              d: "مقال Wikipedia موثوق عن PCB، يشرح دوره في إدارة العمليات و Context Switch وبنيته (Process Identification + Process State + Process Control). مرجع أكاديمي شامل.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح المقال",
                  url: "https://en.wikipedia.org/wiki/Process_control_block",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Types of Scheduling Queues — GeeksforGeeks",
              d: "شرح أنواع طوابير الجدولة: Job Queue و Ready Queue و Device Queue وكيف العمليات بتهاجر بينهم. مرتبط بقسم Process Scheduling Queues في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المقال",
                  url: "https://www.geeksforgeeks.org/operating-systems/types-of-scheduling-queues",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Difference between Long-Term and Short-Term Scheduler — GeeksforGeeks",
              d: "مقال بيقارن بين Long-term و Short-term Scheduler، بيوضح إن Long-term بيتحكم في الـ degree of multiprogramming و Short-term بينفذ الـ CPU scheduling. مرتبط مباشرة بقسم Schedulers.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المقال",
                  url: "https://www.geeksforgeeks.org/operating-systems/difference-between-long-term-and-short-term-scheduler",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Context Switching in Operating System — GeeksforGeeks",
              d: "شرح الـ Context Switching والـ overhead المرتبط بيه واعتماده على hardware support. مرتبط بقسم Context Switch في المحاضرة وبيوضح ليه الوقت ده considered overhead.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المقال",
                  url: "https://www.geeksforgeeks.org/operating-systems/context-switch-in-operating-system",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Inter Process Communication (IPC) — GeeksforGeeks",
              d: "شرح الـ IPC والنموذجين الأساسيين: Shared Memory (أسرع، للبيانات الكبيرة) و Message Passing (أبطأ، للبيانات الصغيرة). مرتبط بقسم Cooperating Processes و IPC في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المقال",
                  url: "https://www.geeksforgeeks.org/operating-systems/inter-process-communication-ipc",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Process Creation and Deletions in Operating Systems — GeeksforGeeks",
              d: "شرح إنشاء العمليات (Process Creation) من الـ parent و الـ child وإنهائها (Process Termination) ومفهوم Cascading Termination. مرتبط بقسم Operations on Processes في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المقال",
                  url: "https://www.geeksforgeeks.org/operating-systems/process-creation-and-deletions-in-operating-systems",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "الفصل الثاني: العمليات (Processes) في أنظمة التشغيل — حسوب",
              d: "مقال عربي من أكاديمية حسوب يشرح العمليات (Processes) في أنظمة التشغيل، بيتناول التجريد والعزل ومكونات العملية. مرتبط بقسم Process Concept ومرجع عربي ممتاز.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المقال",
                  url: "https://academy.hsoub.com/programming/c/%D8%A7%D9%84%D9%81%D8%B5%D9%84-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A-%D8%A7%D9%84%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA-processes-%D9%81%D9%8A-%D8%A3%D9%86%D8%B8%D9%85%D8%A9-%D8%A7%D9%84%D8%AA%D8%B4%D8%BA%D9%8A%D9%84-r977",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "التواصل بين العمليات (IPC) — ويكيبيديا العربية",
              d: "مقال ويكيبيديا بالعربي عن الـ Interprocess Communication (IPC)، بيشرح آليات التواصل بين العمليات ومشاركة البيانات. مرتبط بقسم Cooperating Processes و IPC في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح المقال",
                  url: "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84_%D8%A8%D9%8A%D9%86_%D8%A7%D9%84%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "تبديل السياق (Context Switch) — ويكيبيديا العربية",
              d: "مقال ويكيبيديا بالعربي عن تبديل السياق (Context Switch)، بيشرح آلية حفظ حالة العملية واسترجاعها في تعدد المهام. مرتبط بقسم Context Switch في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح المقال",
                  url: "https://ar.wikipedia.org/wiki/%D8%AA%D8%A8%D8%AF%D9%8A%D9%84_%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D9%82",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },
        {
          category: "أدوات ومحاكاة",
          icon: "🔧",
          description:
            "أدوات تفاعلية ومحاكاة لتجربة مفاهيم المحاضرة: حالات العمليات، PCB، وجدولة الـ CPU بشكل مرئي.",
          links: [
            {
              t: "OS Simulator — Process Management Visualization",
              d: "محاكي تفاعلي للعمليات بيعرض العمليات في حالاتها (running, ready, waiting) مع PCB مستقل لكل عملية فيه معلومات حالتها. ممتاز لفهم Process State و PCB و Scheduling Queues بشكل بصري.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح المحاكي",
                  url: "https://teach-sim.com/os",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Process Scheduling Solver",
              d: "أداة تفاعلية لحل مسائل جدولة العمليات بـ Gantt Chart، تقدر تدخل Arrival Time و Burst Time وتشوف النتائج. مفيد لفهم عملي لـ Ready Queue و Short-term Scheduler.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://process-scheduling-solver.boonsuen.com",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "CPU Scheduling Simulator",
              d: "محاكي تفاعلي لخوارزميات جدولة الـ CPU (FCFS, SJF, RR, Priority) مع Step-by-Step Mode و Gantt Chart و Performance Metrics. مرتبط بمفاهيم Schedulers و Context Switch في المحاضرة.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح المحاكي",
                  url: "https://smartcpuscheduler.com",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "CPU Scheduling Algorithm Calculator",
              d: "حاسبة لخوارزميات جدولة الـ CPU تحسب Average Turnaround Time و Waiting Time و Throughput لخوارزميات مختلفة (FCFS, SJF, SRTF, Priority, Round Robin). مفيد لفهم تأثير الـ schedulers على الأداء.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://www.algorithmroom.com/calculator/process-scheduling",
                  type: "view",
                  color: "orange",
                },
              ],
            },
          ],
        },
      ],
      questions: [
        {
          q: "1. What is a process?",
          options: [
            "A program stored on the hard disk",
            "A set of jobs sent to the operating system for execution",
            "A program in execution",
            "A table that stores information about a program",
          ],
          correct: 2,
          translation: "ما هو الـ process؟",
          explanation:
            "الـ process هو برنامج قيد التنفيذ (a program in execution) وتنفيذه لازم يتقدم بشكل تسلسلي. البرنامج المخزن على القرص مش process، والـ jobs مفهوم الـ batch system، والجدول ده الـ PCB.",
          tags: ["Process Concept"],
          ref: "Lecture 3 — Slide: Process Concept",
          likely: "high",
        },
        {
          q: "2. Which option correctly lists what a process includes?",
          options: [
            "Program counter, stack, data section, and heap",
            "Program counter, ready queue, data section, and PCB",
            "Stack, job pool, heap, and scheduler",
            "PCB, device queue, stack, and context switch",
          ],
          correct: 0,
          translation: "أي اختيار يعرض بشكل صحيح ما يتضمنه الـ process؟",
          explanation:
            "الـ process بيتضمن program counter وstack وdata section وheap. الباقي (queues وPCB وscheduler وcontext switch) مفاهيم إدارة العمليات مش مكونات الـ process نفسه.",
          tags: ["Process Concept", "Process in Memory"],
          ref: "Lecture 3 — Slides: Process Concept / Process in Memory",
          likely: "high",
        },
        {
          q: "3. Which part of a process contains the global variables?",
          options: ["Stack", "Heap", "Program counter", "Data section"],
          correct: 3,
          translation:
            "أي جزء من الـ process يحتوي على المتغيرات العامة (global variables)؟",
          explanation:
            "الـ data section هو اللي فيه الـ global variables. الـ stack فيه البيانات المؤقتة (متغيرات محلية وبارامترات الدوال)، والـ heap ذاكرة بتتحجز وقت التشغيل، والـ program counter بيشاور على النشاط الحالي.",
          tags: ["Process in Memory", "Data Section"],
          ref: "Lecture 3 — Slide: Process Concept",
          likely: "high",
        },
        {
          q: "4. What does the ready state mean?",
          options: [
            "Instructions are being executed",
            "The process is waiting to be assigned to a processor",
            "The process is waiting for some event to occur",
            "The process is being created",
          ],
          correct: 1,
          translation: "ماذا تعني حالة ready؟",
          explanation:
            "الـ ready معناها العملية مستنية تتخصص لها معالج (CPU). الأولى هي running، والثالثة waiting، والرابعة new.",
          tags: ["Process State"],
          ref: "Lecture 3 — Slide: Process State",
          likely: "high",
        },
        {
          q: "5. In the process state diagram, which event moves a process from the running state back to the ready state?",
          options: [
            "Interrupt",
            "Scheduler dispatch",
            "I/O or event completion",
            "Admitted",
          ],
          correct: 0,
          translation:
            "في مخطط حالات الـ process، أي حدث ينقل العملية من running إلى ready؟",
          explanation:
            "الـ interrupt بيرجّع العملية من running لـ ready. الـ scheduler dispatch من ready لـ running، والـ I/O or event completion من waiting لـ ready، والـ admitted من new لـ ready.",
          tags: ["Process State", "State Diagram"],
          ref: "Lecture 3 — Slide: Diagram of Process State",
          likely: "high",
        },
        {
          q: "6. In the process state diagram, which event moves a process from the ready state to the running state?",
          options: [
            "Admitted",
            "Exit",
            "Scheduler dispatch",
            "I/O or event wait",
          ],
          correct: 2,
          translation:
            "في مخطط حالات الـ process، أي حدث ينقل العملية من ready إلى running؟",
          explanation:
            "الـ scheduler dispatch هو اختيار الـ CPU scheduler للعملية من الـ ready queue. الـ admitted من new لـ ready، والـ exit من running لـ terminated، والـ I/O or event wait من running لـ waiting.",
          tags: ["Process State", "State Diagram"],
          ref: "Lecture 3 — Slide: Diagram of Process State",
          likely: "high",
        },
        {
          q: "7. In the process state diagram, which event moves a process from the running state to the waiting state?",
          options: [
            "Admitted",
            "Interrupt",
            "I/O or event completion",
            "I/O or event wait",
          ],
          correct: 3,
          translation:
            "في مخطط حالات الـ process، أي حدث ينقل العملية من running إلى waiting؟",
          explanation:
            "لما العملية تطلب I/O أو تستنى حدث بتتحول من running لـ waiting (I/O or event wait). الـ I/O or event completion بيعمل العكس: بيرجّعها من waiting لـ ready.",
          tags: ["Process State", "State Diagram"],
          ref: "Lecture 3 — Slide: Diagram of Process State",
          likely: "high",
        },
        {
          q: "8. How is each process represented in the operating system?",
          options: [
            "By an entry in the job pool",
            "By a process control block (PCB)",
            "By the header of the ready queue",
            "By the program counter register",
          ],
          correct: 1,
          translation: "كيف يتم تمثيل كل process داخل نظام التشغيل؟",
          explanation:
            "كل process بيتمثل في الـ OS بـ PCB (ويسمى كمان task control block). الـ job pool هو مكان تخزين كل العمليات على القرص، والـ program counter مجرد حقل واحد جوه الـ PCB.",
          tags: ["PCB"],
          ref: "Lecture 3 — Slide: Process Control Block (PCB)",
          likely: "high",
        },
        {
          q: "9. Which PCB field stores the process priority?",
          options: [
            "CPU scheduling information",
            "Memory-management information",
            "Accounting information",
            "I/O status information",
          ],
          correct: 0,
          translation: "أي حقل في الـ PCB يخزن أولوية الـ process؟",
          explanation:
            "الـ CPU scheduling information فيها كل البارامترات المتعلقة بالجدولة زي الـ priority. الـ memory-management فيها قيم base وlimit، والـ accounting فيها استهلاك الـ CPU والحدود الزمنية، والـ I/O status فيها الأجهزة والملفات المفتوحة.",
          tags: ["PCB", "CPU Scheduling Information"],
          ref: "Lecture 3 — Slide: Process Control Block (PCB)",
          likely: "high",
        },
        {
          q: "10. What is the job of the long-term scheduler (job scheduler)?",
          options: [
            "To select which process in the ready queue executes next",
            "To swap processes out of memory to reduce multiprogramming",
            "To select which processes are brought from the job pool into the ready queue in main memory",
            "To save the state of the old process and load the state of the new one",
          ],
          correct: 2,
          translation: "ما وظيفة الـ long-term scheduler (job scheduler)؟",
          explanation:
            "الـ long-term scheduler بيختار العمليات اللي هتتنقل من الـ job pool (على القرص) للـ ready queue في الذاكرة الرئيسية، وبيتحكم في degree of multiprogramming. الأولى للـ short-term، والثانية للـ medium-term، والرابعة هي الـ context switch.",
          tags: ["Schedulers", "Long-Term Scheduler"],
          ref: "Lecture 3 — Slide: Schedulers",
          likely: "high",
        },
        {
          q: "11. What is the job of the short-term scheduler (CPU scheduler)?",
          options: [
            "To control the degree of multiprogramming",
            "To select which process in the ready queue should be executed next and allocate the CPU to it",
            "To bring new jobs from the hard disk to main memory",
            "To swap processes in and out of memory",
          ],
          correct: 1,
          translation: "ما وظيفة الـ short-term scheduler (CPU scheduler)؟",
          explanation:
            "الـ short-term scheduler بيختار العملية الجاية من الـ ready queue ويدّيها الـ CPU. التحكم في degree of multiprogramming وجلب jobs من القرص وظيفة الـ long-term، والـ swapping للـ medium-term.",
          tags: ["Schedulers", "Short-Term Scheduler"],
          ref: "Lecture 3 — Slide: Schedulers",
          likely: "high",
        },
        {
          q: "12. According to the lecture, what is the main difference between the long-term and the short-term scheduler?",
          options: [
            "The type of memory they use",
            "The number of processes they create",
            "The type of I/O devices they manage",
            "How frequently they are invoked (time)",
          ],
          correct: 3,
          translation:
            "حسب المحاضرة، ما الفرق الرئيسي بين الـ long-term والـ short-term scheduler؟",
          explanation:
            "الفرق الرئيسي هو الزمن: الـ short-term بيتنفذ كل حوالي 100 ملي ثانية ولازم يكون سريع، والـ long-term بياخد ثواني أو دقايق وممكن يكون بطيء. الاختيارات التانية مش ذكرتها المحاضرة كفرق.",
          tags: ["Schedulers", "Long-Term vs Short-Term"],
          ref: "Lecture 3 — Slides: Schedulers / Schedulers (Cont.)",
          likely: "high",
        },
        {
          q: "13. What is the idea behind medium-term scheduling?",
          options: [
            "To control the degree of multiprogramming by swapping processes out and in",
            "To select the next process for the CPU every 100 milliseconds",
            "To create child processes from parent processes",
            "To increase the number of CPU registers saved on an interrupt",
          ],
          correct: 0,
          translation: "ما فكرة الـ medium-term scheduling؟",
          explanation:
            "الـ medium-term scheduler بيستخدم الـ swap لزيادة أو تقليل عدد العمليات فيتحكم في degree of multiprogramming في أنظمة الـ time-sharing. الباقي وظايف الـ short-term أو إنشاء العمليات.",
          tags: ["Schedulers", "Medium-Term Scheduler", "Swapping"],
          ref: "Lecture 3 — Slide: Addition of Medium Term Scheduling",
          likely: "high",
        },
        {
          q: "14. Which description matches an I/O-bound process?",
          options: [
            "Spends more time doing computations, with few very long CPU bursts",
            "Spends no time waiting for I/O devices",
            "Spends more time doing I/O than computations, with many short CPU bursts",
            "Stays permanently in the new state",
          ],
          correct: 2,
          translation: "أي وصف يطابق الـ I/O-bound process؟",
          explanation:
            "الـ I/O-bound بيقضي وقت في الـ I/O أكتر من الحسابات وعنده CPU bursts قصيرة كتير. الوصف الأول للـ CPU-bound.",
          tags: ["I/O-Bound", "CPU-Bound"],
          ref: "Lecture 3 — Slide: Schedulers (Cont.)",
          likely: "high",
        },
        {
          q: "15. What happens if all processes in the system are I/O-bound?",
          options: [
            "The I/O waiting queue will be empty",
            "The ready queue will be empty",
            "The job queue will be empty",
            "The context-switch time will become zero",
          ],
          correct: 1,
          translation: "ماذا يحدث إذا كانت كل العمليات في النظام I/O-bound؟",
          explanation:
            "لو كلها I/O-bound فهتقضي وقتها في الانتظار على الأجهزة وبالتالي الـ ready queue هتفضل فاضية تقريبًا. العكس: لو كلها CPU-bound يبقى الـ I/O waiting queue هي اللي تفضى. عشان كده الـ schedulers لازم تختار mix كويس من النوعين.",
          tags: ["I/O-Bound", "Ready Queue"],
          ref: "Lecture 3 — Slide: Schedulers (Cont.)",
          likely: "high",
        },
        {
          q: "16. Why is context-switch time considered overhead?",
          options: [
            "Because the CPU runs at a slower speed during the switch",
            "Because it creates a new child process each time",
            "Because it deletes the old process from memory",
            "Because the system does no useful work while switching",
          ],
          correct: 3,
          translation: "لماذا يعتبر زمن الـ context switch overhead؟",
          explanation:
            "أثناء الـ context switch النظام بيحفظ حالة العملية القديمة ويحمّل حالة الجديدة ومبيعملش شغل مفيد. والزمن بيعتمد على دعم الـ hardware. الاختيارات التانية مش وصف صحيح للـ context switch.",
          tags: ["Context Switch"],
          ref: "Lecture 3 — Slide: Context Switch",
          likely: "high",
        },
        {
          q: "17. According to the lecture, which statement correctly compares the two IPC models?",
          options: [
            "Shared memory is faster and suits large amounts of data; message passing suits small amounts of data and is slower",
            "Message passing is faster and suits large amounts of data; shared memory suits small amounts of data",
            "Both models are equally fast but differ in the type of data",
            "Shared memory is used only by independent processes",
          ],
          correct: 0,
          translation:
            "حسب المحاضرة، أي عبارة تقارن بشكل صحيح بين نموذجي الـ IPC؟",
          explanation:
            "الـ shared memory أسرع ومناسب لكميات البيانات الكبيرة، والـ message passing للكميات الصغيرة وأبطأ. والـ IPC أصلًا للـ cooperating processes مش independent.",
          tags: ["IPC", "Shared Memory", "Message Passing"],
          ref: "Lecture 3 — Slide: Cooperating Processes",
          likely: "high",
        },
        {
          q: "18. Which statement describes an independent process?",
          options: [
            "It can affect or be affected by the execution of another process",
            "It always shares data through shared memory",
            "It cannot affect or be affected by the execution of another process",
            "It is always the parent of other processes",
          ],
          correct: 2,
          translation: "أي عبارة تصف الـ independent process؟",
          explanation:
            "الـ independent process لا يؤثر ولا يتأثر بتنفيذ أي process تاني ولا بيشارك بيانات. الأولى هي تعريف الـ cooperating process.",
          tags: ["Independent Process", "Cooperating Process"],
          ref: "Lecture 3 — Slide: Cooperating Processes",
          likely: "high",
        },
        {
          q: "19. What is cascading termination?",
          options: [
            "The child process returns its output data to the parent through wait",
            "The parent process aborts a child that exceeded its allocated resources",
            "A process asks the operating system to delete it using exit",
            "When a parent terminates, the OS terminates all its children",
          ],
          correct: 3,
          translation: "ما هو الـ cascading termination؟",
          explanation:
            "الـ cascading termination هو إنهاء كل الأبناء بواسطة الـ OS لما الأب يتوقف، لأن بعض أنظمة التشغيل مش بتسمح للابن يكمل بعد انتهاء أبوه. الباقي حالات تانية: wait وabort وexit.",
          tags: ["Process Termination", "Cascading Termination"],
          ref: "Lecture 3 — Slide: Process Termination",
          likely: "high",
        },
        {
          q: "20. When a process executes its last statement, what does it do and what happens next?",
          options: [
            "It calls abort and its parent is terminated",
            "It asks the OS to delete it (exit), its output is passed to the parent via wait, and its resources are deallocated",
            "It stays in the waiting state until the parent exits",
            "It is moved to the job pool on the hard disk",
          ],
          correct: 1,
          translation:
            "عندما ينفذ الـ process آخر جملة فيه، ماذا يفعل وماذا يحدث بعد ذلك؟",
          explanation:
            "العملية بتطلب من الـ OS حذفها (exit)، ويتم إرسال بيانات الخرج للأب عن طريق wait، وبعدين الـ OS بيفرّج الموارد. الـ abort بيستخدمه الأب لإنهاء الابن، مش العكس.",
          tags: ["Process Termination", "exit", "wait"],
          ref: "Lecture 3 — Slide: Process Termination",
          likely: "high",
        },
        {
          q: "21. Which of the following is NOT listed as an advantage of process cooperation?",
          options: [
            "Reduced context-switch time",
            "Information sharing",
            "Computation speed-up",
            "Modularity",
          ],
          correct: 0,
          translation:
            "أي مما يلي ليس من مميزات التعاون بين العمليات (process cooperation) المذكورة؟",
          explanation:
            "المميزات الأربعة هي: information sharing وcomputation speed-up وmodularity وconvenience. تقليل زمن الـ context switch مش منها.",
          tags: ["Cooperating Processes", "Advantages"],
          ref: "Lecture 3 — Slide: Cooperating Processes (advantages)",
          likely: "high",
        },
        {
          q: "22. What is the heap in a process?",
          options: [
            "Memory that contains temporary data such as local variables",
            "Memory that is dynamically allocated during process run time",
            "The memory that contains the global variables",
            "The register that points to the next instruction",
          ],
          correct: 1,
          translation: "ما هو الـ heap في الـ process؟",
          explanation:
            "الـ heap ذاكرة بتتحجز ديناميكيًا أثناء تشغيل الـ process. الأولى هي الـ stack، والثالثة الـ data section، والرابعة الـ program counter.",
          tags: ["Heap", "Process in Memory"],
          ref: "Lecture 3 — Slide: Process Concept",
          likely: "medium",
        },
        {
          q: "23. Which queue is the set of all processes residing in main memory that are ready and waiting to execute?",
          options: [
            "Job queue",
            "Device queue",
            "Ready queue",
            "Waiting queue of the hard disk",
          ],
          correct: 2,
          translation:
            "أي queue هي مجموعة كل العمليات الموجودة في الذاكرة الرئيسية الجاهزة والمنتظرة للتنفيذ؟",
          explanation:
            "الـ ready queue هي العمليات في الذاكرة الرئيسية الجاهزة للتنفيذ. الـ job queue كل العمليات في النظام (job pool على القرص)، والـ device queues العمليات المنتظرة لجهاز I/O.",
          tags: ["Scheduling Queues", "Ready Queue"],
          ref: "Lecture 3 — Slide: Process Scheduling Queues",
          likely: "medium",
        },
        {
          q: "24. What does a device queue contain?",
          options: [
            "All the processes in the system",
            "Processes in main memory waiting for the CPU",
            "Processes that have terminated",
            "Processes waiting for an I/O device",
          ],
          correct: 3,
          translation: "ماذا تحتوي الـ device queue؟",
          explanation:
            "الـ device queues فيها العمليات المنتظرة لجهاز I/O. كل العمليات في النظام هي الـ job queue، والمنتظرة للـ CPU هي الـ ready queue.",
          tags: ["Scheduling Queues", "Device Queue"],
          ref: "Lecture 3 — Slide: Process Scheduling Queues",
          likely: "medium",
        },
        {
          q: "25. How is each scheduling queue stored, according to the lecture?",
          options: [
            "As a linked list of PCBs, where each PCB points to the next one",
            "As an array of CPU registers",
            "As a stack of processes in the hard disk",
            "As a table of program counters",
          ],
          correct: 0,
          translation: "كيف يتم تخزين كل scheduling queue حسب المحاضرة؟",
          explanation:
            "كل queue بتتخزن كـ linked list: رأس الـ ready queue فيه مؤشرات لأول وآخر PCB، وكل PCB فيه حقل مؤشر للـ PCB التالي.",
          tags: ["Scheduling Queues", "Linked List", "PCB"],
          ref: "Lecture 3 — Slide: Process Scheduling Queues",
          likely: "medium",
        },
        {
          q: "26. In terms of execution, which two possibilities exist when a process creates a new process?",
          options: [
            "Parent and child share all resources, or share no resources",
            "Child is a duplicate of the parent, or has a program loaded into it",
            "Parent and children execute concurrently, or the parent waits until the children terminate",
            "Parent terminates immediately, or the child terminates immediately",
          ],
          correct: 2,
          translation:
            "من حيث التنفيذ، ما الاحتمالان عند إنشاء process لـ process جديد؟",
          explanation:
            "من حيث التنفيذ: الأب والأبناء ينفذوا بالتوازي (concurrently)، أو الأب يستنى لحد ما الأبناء يخلصوا. الاختيار الأول عن مشاركة الموارد، والثاني عن الـ address space.",
          tags: ["Process Creation"],
          ref: "Lecture 3 — Slide: Process Creation",
          likely: "medium",
        },
        {
          q: "27. Which PCB field includes the list of I/O devices allocated to the process and a list of open files?",
          options: [
            "CPU scheduling information",
            "Memory-management information",
            "Accounting information",
            "I/O status information",
          ],
          correct: 3,
          translation:
            "أي حقل في الـ PCB يحتوي على قائمة أجهزة الـ I/O المخصصة للـ process وقائمة الملفات المفتوحة؟",
          explanation:
            "الـ I/O status information بتشمل الأجهزة المخصصة والملفات المفتوحة. الـ accounting فيها استهلاك الـ CPU وأرقام العمليات والحدود الزمنية.",
          tags: ["PCB", "I/O Status Information"],
          ref: "Lecture 3 — Slide: Process Control Block (PCB)",
          likely: "medium",
        },
        {
          q: "28. Which description matches a batch system?",
          options: [
            "User programs or tasks are executed simultaneously using CPU scheduling",
            "A number of jobs are sent for execution, the OS transfers control from one job to the next, and the user does not interact directly with the OS",
            "The user interacts with every job while it runs",
            "Processes migrate between queues using swapping only",
          ],
          correct: 1,
          translation: "أي وصف يطابق الـ batch system؟",
          explanation:
            "في الـ batch system بيتبعت عدد من الـ jobs والـ OS بينقل التحكم من job للتالي والمستخدم مش بيتفاعل مباشرة مع الـ OS. الوصف الأول للـ time-shared systems.",
          tags: ["Batch System", "Time-Shared Systems"],
          ref: "Lecture 3 — Slide: Process Concept",
          likely: "medium",
        },

        {
          type: "essay",
          q: "1. Define a process and list the components it includes.",
          translation: "عرّف الـ process واذكر المكونات التي يتضمنها.",
          answer:
            "A process is a program in execution; process execution must progress in a sequential fashion.\n" +
            "A process includes:\n" +
            "- Program counter: indicates the current activity.\n" +
            "- Stack: contains temporary data such as local variables and function parameters.\n" +
            "- Data section: contains global variables.\n" +
            "- Heap: memory that is dynamically allocated during process run time.",
          tags: ["Process Concept"],
          ref: "Lecture 3 — Slide: Process Concept",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. Draw and label the process state diagram and explain the five states and the transitions between them.",
          translation:
            "ارسم وسمِّ مخطط حالات الـ process واشرح الحالات الخمس والانتقالات بينها.",
          answer:
            "States:\n" +
            "- new: the process is being created.\n" +
            "- ready: the process is waiting to be assigned to a processor.\n" +
            "- running: instructions are being executed.\n" +
            "- waiting: the process is waiting for some event to occur.\n" +
            "- terminated: the process has finished execution.\n" +
            "Transitions (as labeled in the diagram):\n" +
            "- new to ready: admitted.\n" +
            "- ready to running: scheduler dispatch.\n" +
            "- running to ready: interrupt.\n" +
            "- running to waiting: I/O or event wait.\n" +
            "- waiting to ready: I/O or event completion.\n" +
            "- running to terminated: exit.",
          tags: ["Process State", "State Diagram"],
          ref: "Lecture 3 — Slides: Process State / Diagram of Process State",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. What is a Process Control Block (PCB)? List the information associated with each process.",
          translation:
            "ما هو الـ Process Control Block (PCB)؟ اذكر المعلومات المرتبطة بكل process.",
          answer:
            "Each process is represented in the OS by a PCB, also known as a task control block. It holds:\n" +
            "- Process state (ready, running, etc.).\n" +
            "- Program counter: the address of the next instruction to be executed.\n" +
            "- CPU registers: their information must be stored when an interrupt occurs so the process can continue correctly afterward.\n" +
            "- CPU scheduling information: parameters such as process priority.\n" +
            "- Memory-management information: such as the values of the base and limit registers.\n" +
            "- Accounting information: amount of CPU used, process numbers, time limits.\n" +
            "- I/O status information: I/O devices allocated to the process, list of open files.",
          tags: ["PCB"],
          ref: "Lecture 3 — Slides: Process Control Block (PCB)",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. Compare the long-term, short-term, and medium-term schedulers.",
          translation:
            "قارن بين الـ long-term والـ short-term والـ medium-term schedulers.",
          answer:
            "Long-term scheduler (job scheduler): selects which processes are brought from the job pool on the hard disk into the ready queue in main memory. It controls the degree of multiprogramming (the number of processes in memory). It is invoked very infrequently (seconds, minutes), may be slow, and could take minutes to bring a new job into memory.\n" +
            "Short-term scheduler (CPU scheduler): selects which process in the ready queue should be executed next and allocates the CPU. It is invoked very frequently (milliseconds, about once every 100 ms), so it must be fast.\n" +
            "Medium-term scheduler: uses swapping to reduce or increase the number of processes in memory, controlling the degree of multiprogramming in time-sharing systems.\n" +
            "Main difference between long-term and short-term: time (how often they are invoked).",
          tags: ["Schedulers"],
          ref: "Lecture 3 — Slides: Schedulers / Medium Term Scheduling / Schedulers (Cont.)",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. Compare I/O-bound and CPU-bound processes. Why should the schedulers choose a good mix of both?",
          translation:
            "قارن بين الـ I/O-bound والـ CPU-bound processes. ولماذا يجب أن تختار الـ schedulers خليطًا جيدًا من النوعين؟",
          answer:
            "I/O-bound process: spends more time doing I/O than computations; has many short CPU bursts.\n" +
            "CPU-bound process: spends more time doing computations; has few very long CPU bursts.\n" +
            "Why a good mix: if all processes are I/O-bound, the ready queue will be empty (the CPU is idle). If all processes are CPU-bound, the I/O waiting queue will be empty (the I/O devices are idle). A good mix keeps both the CPU and the I/O devices busy.",
          tags: ["I/O-Bound", "CPU-Bound", "Schedulers"],
          ref: "Lecture 3 — Slide: Schedulers (Cont.)",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. What is a context switch? Why is it considered overhead?",
          translation: "ما هو الـ context switch؟ ولماذا يعتبر overhead؟",
          answer:
            "When the CPU switches to another process, the system must save the state of the old process and load the saved state for the new process. This is a context switch (the state is kept in the PCB).\n" +
            "Context-switch time is overhead because the system does no useful work while switching. Its time depends on hardware support.",
          tags: ["Context Switch", "PCB"],
          ref: "Lecture 3 — Slides: Context Switch / CPU Switch From Process to Process",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. Describe the process scheduling queues and how they are stored.",
          translation:
            "صف طوابير جدولة العمليات (scheduling queues) وكيف يتم تخزينها.",
          answer:
            "- Job queue: the set of all processes in the system, stored in the job pool (on the hard disk).\n" +
            "- Ready queue: the set of all processes residing in main memory, ready and waiting to execute.\n" +
            "- Device queues: the set of processes waiting for an I/O device.\n" +
            "Processes migrate among the various queues during their lifetime.\n" +
            "Each queue is stored as a linked list: the ready queue header contains pointers to the first and final PCBs in the list, and each PCB includes a pointer field that points to the next PCB in the queue.",
          tags: ["Scheduling Queues", "Linked List"],
          ref: "Lecture 3 — Slides: Process Scheduling Queues / Ready Queue And Various I/O Device Queues",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. Explain process creation and the possibilities that exist when a process creates a new process.",
          translation:
            "اشرح إنشاء العمليات (process creation) والاحتمالات الموجودة عندما ينشئ process آخر جديدًا.",
          answer:
            "A parent process creates children processes, which in turn create other processes, forming a tree of processes.\n" +
            "Possibilities in terms of resource sharing: parent and children share all resources; children share a subset of the parent's resources; or parent and child share no resources.\n" +
            "Possibilities in terms of execution: parent and children execute concurrently; or the parent waits until the children terminate.\n" +
            "Possibilities in terms of address space of the new process: the child is a duplicate of the parent (same program and data); or the child has a program loaded into it.",
          tags: ["Process Creation", "Process Tree"],
          ref: "Lecture 3 — Slides: Process Creation / Process Creation (Cont.)",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. Explain process termination and cascading termination.",
          translation:
            "اشرح إنهاء العمليات (process termination) والـ cascading termination.",
          answer:
            "A process terminates when it executes its last statement and asks the OS to delete it (exit). Output data is passed from the child to the parent via wait, and the process' resources are deallocated by the OS.\n" +
            "A parent may terminate its children (abort) when: the child has exceeded its allocated resources, the task assigned to the child is no longer required, or the parent is exiting.\n" +
            "Cascading termination: some operating systems do not allow a child to continue if its parent terminates, so all the children are terminated. It is usually started by the OS when a parent terminates.",
          tags: ["Process Termination", "Cascading Termination"],
          ref: "Lecture 3 — Slide: Process Termination",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Compare independent and cooperating processes, and compare the two IPC models.",
          translation:
            "قارن بين الـ independent والـ cooperating processes، وقارن بين نموذجي الـ IPC.",
          answer:
            "Independent process: cannot affect or be affected by the execution of another process; it does not share data with other processes, so no cooperation is needed.\n" +
            "Cooperating process: can affect or be affected by the execution of another process; it requires an interprocess communication (IPC) mechanism that allows it to exchange data.\n" +
            "IPC models:\n" +
            "- Shared memory: faster; suitable for a large amount of data.\n" +
            "- Message passing: suitable for a small amount of data; slower.",
          tags: ["Cooperating Processes", "IPC"],
          ref: "Lecture 3 — Slides: Cooperating Processes / Communications Models",
          likely: "high",
        },
        {
          type: "essay",
          q: "11. Mention the advantages of process cooperation.",
          translation:
            "اذكر مميزات التعاون بين العمليات (process cooperation).",
          answer:
            "- Information sharing: two processes share the same file, which is faster than each reading its own copy; the file can be loaded once for both.\n" +
            "- Computation speed-up: dividing a process into sub-processes that execute concurrently speeds up the computation.\n" +
            "- Modularity: building the system in a modular fashion, with system functions divided into separate processes.\n" +
            "- Convenience: a user may execute many tasks at the same time, such as printing and watching a movie.",
          tags: ["Cooperating Processes", "Advantages"],
          ref: "Lecture 3 — Slide: Cooperating Processes (advantages)",
          likely: "high",
        },
        {
          type: "essay",
          q: "12. Explain the difference between a batch system and a time-shared system.",
          translation:
            "اشرح الفرق بين الـ batch system والـ time-shared system.",
          answer:
            "Batch system (jobs): a number of jobs are sent for execution; the OS transfers control from one job to the next. The user does not interact directly with the OS; the user just prepares the data and program for the job and sends it with other jobs to the OS for execution.\n" +
            "Time-shared systems (user programs or tasks): programs or tasks are executed simultaneously using CPU scheduling.",
          tags: ["Batch System", "Time-Shared Systems"],
          ref: "Lecture 3 — Slide: Process Concept",
          likely: "medium",
        },
      ],
    },
    {
      t: "المحاضرة 4 (Chapter 3 — الجزء الثاني والأخير): Processes - Interprocess Communication (IPC)",
      d: "بنك أسئلة شامل لمحاضرة IPC (Lecture 4 - Chapter 3, Lec 2) في نظم التشغيل: المنتج-المستهلك، الاتصال المباشر وغير المباشر، التزامن، التخزين المؤقت، Sockets، RPC، RMI، وMarshalling — الجزء الثاني والأخير من الفصل الثالث.",
      id: "operating-systems-lecture-04",
      pdf: "datenew/subjects/operating-systems/lectures/lec 4/ch3 Processes-lec 4 .pdf",
      pdf2: "/datenew/subjects/operating-systems/questions/Questions on each lecture/Lecture-04-Questions.pdf",
      // المحاضرة 4 (Chapter 3, Lec 2): Processes — Interprocess Communication (IPC)
      // مادة نظم التشغيل (Operating Systems) — الموضوع الرئيسي: IPC, Message Passing, Sockets, RPC, RMI

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شرح بالعربي لمفاهيم IPC و RPC و Sockets اللي بتغطيها المحاضرة.",
          links: [
            {
              t: "د. حسن الأنصاري - Operating System Concepts (Chapter 1 Part 6: OS Operations & Process Management)",
              d: "الفيديو السادس: Operating System Chapter 1 Part 6. يغطي هذا الجزء: Operating-System Operations، Process Management، Memory Management، وStorage Management. يتضمن شرحًا لمفاهيم العمليات، إدارتها، وجدولة المعالج، وهي مواضيع تتقاطع مع المحاضرة الثانية (صفحات 24–30).",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://youtu.be/RBMya76uNZY",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "د. أحمد حجاج - Operating Systems | نظم التشغيل (Ch1-4 Storage Structure)",
              d: "الفيديو الرابع: 04–Operating Systems | Ch1-4 | Storage Structure. يغطي بنية التخزين، هرمية التخزين، والـ Caching.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLxIvc-MGOs6ib0oK1z9C46DeKd9rRcSMY",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "SoftwareTube - كورس نظم التشغيل بالعربي (مفاهيم تمهيدية: بنية التخزين، بنية النظام، عمليات النظام)",
              d: "شاهد الفيديوهات: 4 (Storage Structure - Chapter 1 Part 4)، 5 (Computer Systems Architecture - Chapter 1 Part 5)، و 6 (OS Structure and Operation, OS Definition - Chapter 1 Part 6). تغطي بنية التخزين، بنية نظام الحاسوب، عمليات نظام التشغيل، وتعريف نظام التشغيل. هذه مفاهيم أساسية تمهد لفهم إدارة العمليات.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://youtube.com/playlist?list=PLTr1xN4uMK5seRz6IO7Am9Zp2UKdnzO_n",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح Remote Procedure Call (RPC) للشبكات وأنظمة التشغيل الموزعة",
              d: "فيديو بالعربي بيشرح مفهوم استدعاء الإجراءات عن بعد (RPC) ومرتبط مباشرة بموضوع RPC و Marshalling في المحاضرة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶️ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=uftFUtVCQqI",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: شرح Interprocess Communication IPC",
              d: "بحث في يوتيوب بيطلع فيديوهات عربية بشرح IPC ومشكلة المنتج-المستهلك والـ message passing. ده رابط بحث مش فيديو محدد.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=شرح+Interprocess+Communication+IPC+أنظمة+تشغيل",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: شرح Socket برمجة شبكات",
              d: "بحث في يوتيوب بيطلع فيديوهات عربية بشرح الـ socket و الـ IP:Port اللي بتغطيه شريحة Sockets. ده رابط بحث مش فيديو محدد.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=شرح+Socket+برمجة+شبكات+IP+Port",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
        {
          category: "فيديوهات عالمية",
          icon: "🌍",
          description:
            "فيديوهات بالإنجليزي بشرح عميق لمفاهيم IPC و Sockets و RPC و RMI.",
          links: [
            {
              t: "🔎 بحث في يوتيوب: Interprocess Communication IPC tutorial",
              d: "بحث في يوتيوب بيطلع فيديوهات عالمية (GeeksforGeeks, Neso Academy, وغيرهم) بشرح IPC، Message Passing، Direct/Indirect communication، و Buffering. ده رابط بحث مش فيديو محدد.",
              icon: "🌍",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=Interprocess+Communication+IPC+tutorial+operating+system",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: Socket programming networking tutorial",
              d: "بحث في يوتيوب بيطلع فيديوهات عالمية بشرح الـ Socket كـ endpoint للاتصال (IP + Port) وكيفية إنشاء pair of sockets للتواصل. ده رابط بحث مش فيديو محدد.",
              icon: "🌍",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=socket+programming+networking+tutorial+IP+port",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: Remote Procedure Call RPC explained",
              d: "بحث في يوتيوب بيطلع فيديوهات عالمية بشرح RPC والـ stubs و Marshalling و كيفية عمل client-side و server-side stub. ده رابط بحث مش فيديو محدد.",
              icon: "🌍",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=Remote+Procedure+Call+RPC+explained+stub+marshalling",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: Java RMI Remote Method Invocation tutorial",
              d: "بحث في يوتيوب بيطلع فيديوهات عالمية بشرح RMI كآلية Java شبه RPC، وكيفية استدعاء method على remote object. ده رابط بحث مش فيديو محدد.",
              icon: "🌍",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=Java+RMI+Remote+Method+Invocation+tutorial",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
        {
          category: "مواقع ومراجع",
          icon: "📚",
          description:
            "مصادر تعليمية موثوقة بشرح مفصل لمفاهيم المحاضرة: IPC، Stub Generation، Sockets، RMI.",
          links: [
            {
              t: "Inter Process Communication (IPC) - GeeksforGeeks",
              d: "مقال شامل بيشرح IPC كآلية للتواصل والتزامن بين العمليات، مرورًا بـ Message Passing ومشكلة المنتج-المستهلك والأنواع الكلاسيكية للمشاكل المتعلقة بـ IPC.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.geeksforgeeks.org/operating-systems/inter-process-communication-ipc/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Methods in Inter Process Communication - GeeksforGeeks",
              d: "مقال بيشرح طرق IPC المختلفة: Shared Memory، Message Passing، Pipes، Sockets، Semaphores، Message Queues، مع شرح كل طريقة وعلاقتها بمحتوى المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.geeksforgeeks.org/operating-systems/methods-in-interprocess-communication/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Stub Generation in Distributed System - GeeksforGeeks",
              d: "مقال بيركز على الـ stubs في أنظمة RPC: شرح الـ client-side stub والـ server-side stub، عملية Marshalling و Unmarshalling للمعاملات، و دور Interface Definition Language (IDL). مرتبط مباشرة بشريحة RPC.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.geeksforgeeks.org/computer-networks/stub-generation-in-distributed-system/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Network socket - Wikipedia",
              d: "مقال موسوعي بشرح الـ Network socket كـ endpoint للاتصال، وتكوينه من IP address + port number، وأنواع الـ sockets (Datagram, Stream, Raw). مرتبط مباشرة بشريحة Sockets والمثال 161.25.19.8:1625.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://en.wikipedia.org/wiki/Network_socket",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },
        {
          category: "أدوات ومحاكاة",
          icon: "🔧",
          description:
            "أدوات وبرامج محاكاة بتساعدك تفهم وترى عمليًا كيفية تواصل العمليات وتبادل الرسائل عبر الشبكة.",
          links: [
            {
              t: "Cisco Packet Tracer - Networking Simulation Tool",
              d: "أداة محاكاة شبكات مجانية من Cisco، بتسمح ببناء شبكات افتراضية ومتابعة تبادل الرسائل والـ sockets بين الأجهزة. مرتبط بمفاهيم Client-Server Communication و Sockets.",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ تحميل الأداة",
                  url: "https://www.netacad.com/courses/getting-started-cisco-packet-tracer",
                  type: "download",
                  color: "orange",
                },
              ],
            },
            {
              t: "Wireshark - Network Protocol Analyzer",
              d: "أداة مفتوحة المصدر لتحليل حركة الشبكة، بتقدر تتابع بيها الـ packets المتبادلة بين الـ sockets وتشوف عمليًا كيفية التواصل بين client و server.",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ تحميل الأداة",
                  url: "https://www.wireshark.org/download.html",
                  type: "download",
                  color: "orange",
                },
              ],
            },
            {
              t: "Java RMI Official Documentation - Oracle",
              d: "الوثائق الرسمية لـ Java RMI من Oracle، فيها شرح وخطوات تنفيذ لاستدعاء method على remote object. مفيد جدًا لفهم شريحة RMI وتطبيق المفاهيم عمليًا.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://docs.oracle.com/en/java/javase/17/rmi/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },
      ],
      questions: [
        // ============== MCQ - High Priority ==============
        {
          q: "1. The Producer-Consumer problem is a paradigm for which of the following?",
          options: [
            "Competing processes that fight over CPU time",
            "Cooperating processes where a producer produces information consumed by a consumer",
            "Processes that share the same source code file",
            "Processes running on different operating systems without any interaction",
          ],
          correct: 1,
          translation: "مشكلة المنتج-المستهلك هي نموذج لأي مما يلي؟",
          explanation:
            "الصحيح هو الخيار الثاني لأن المشكلة بتعبر عن عمليتين بتتعاونوا: واحدة بتنتج بيانات والتانية بتستهلكها عبر buffer مشترك. الخيارات التانية غلط لأن المشكلة مش عن تنافس على CPU ولا مشاركة كود ولا عمليات معزولة.",
          tags: ["Producer-Consumer", "Cooperating Processes"],
          ref: "Lecture 4 — Slide 26 (Producer-Consumer Problem)",
          likely: "high",
        },
        {
          q: "2. In a bounded-buffer solution, when must the producer wait?",
          options: [
            "When the buffer is empty",
            "When the buffer is full",
            "When the consumer is slower than the producer",
            "When the buffer size is unlimited",
          ],
          correct: 1,
          translation: "في حل الـ bounded-buffer، متى يجب على المنتج أن ينتظر؟",
          explanation:
            "المنتج لازم ينتظر لما الـ buffer يكون ممتلئ لأن مفيش مساحة فاضية يكتب فيها. أما الـ buffer الفاضي فمش سبب للمنتج (ده سبب للمستهلك ينتظر). وكون الـ consumer أبطأ مش شرط وحده للانتظار، والـ bounded buffer حجمه محدود مش غير محدود.",
          tags: ["Bounded Buffer", "Producer-Consumer"],
          ref: "Lecture 4 — Slide 26 (Producer-Consumer Problem)",
          likely: "high",
        },
        {
          q: "3. In a bounded-buffer solution, when must the consumer wait?",
          options: [
            "When the buffer is full",
            "When the producer has finished",
            "When the buffer is empty",
            "When the buffer is unbounded",
          ],
          correct: 2,
          translation:
            "في حل الـ bounded-buffer، متى يجب على المستهلك أن ينتظر؟",
          explanation:
            "المستهلك لازم ينتظر لما الـ buffer يكون فاضي لأن مفيش حاجة يستهلكها. الـ buffer الممتلئ مش مشكلة للمستهلك (دي مشكلة المنتج). والـ producer خلص مش معناه إن الـ buffer فاضي، والـ unbounded buffer مش شرط يخلي المستهلك ينتظر.",
          tags: ["Bounded Buffer", "Producer-Consumer"],
          ref: "Lecture 4 — Slide 26 (Producer-Consumer Problem)",
          likely: "high",
        },
        {
          q: "4. Interprocess Communication (IPC) is defined as:",
          options: [
            "A mechanism for processes to communicate and synchronize their actions",
            "A technique to share CPU time between processes",
            "A method to allocate memory to processes",
            "A way to schedule processes in a round-robin fashion",
          ],
          correct: 0,
          translation: "الاتصال بين العمليات (IPC) يُعرّف بأنه:",
          explanation:
            "الصحيح هو الخيار الأول لأن IPC بيوفر آلية للعمليات تتواصل وتزامن أفعالها. الخيارات التانية غلط لأن IPC مش بيعمل scheduling للـ CPU ولا بيوفر ذاكرة ولا round-robin، دي مهام تانية لنظام التشغيل.",
          tags: ["IPC", "Definitions"],
          ref: "Lecture 4 — Slide 27 (Interprocess Communication)",
          likely: "high",
        },
        {
          q: "5. In message-passing IPC, the two basic operations provided are:",
          options: [
            "read() and write()",
            "send(message) and receive(message)",
            "open() and close()",
            "lock() and unlock()",
          ],
          correct: 1,
          translation: "في تمرير الرسائل IPC، العمليتان الأساسيتان هما:",
          explanation:
            "IPC facility بيوفر send(message) و receive(message) كعمليتين أساسيتين. read/write دي عمليات ملفات، open/close برضه ملفات، وlock/unlock أدوات تزامن مش عمليات IPC.",
          tags: ["IPC", "Message Passing"],
          ref: "Lecture 4 — Slide 27 (Interprocess Communication)",
          likely: "high",
        },
        {
          q: "6. In direct communication, the link is associated with how many processes?",
          options: [
            "Exactly one pair of communicating processes",
            "Any number of processes",
            "At least three processes",
            "Only the sender process",
          ],
          correct: 0,
          translation: "في الاتصال المباشر، يرتبط الـ link بكم عملية؟",
          explanation:
            "في الـ direct communication الـ link بيرتبط بزوج واحد فقط من العمليات المتصلة (sender و receiver). أما في الـ indirect فالـ link ممكن يرتبط بعمليات كتير عبر mailbox مشترك.",
          tags: ["Direct Communication", "Communication Link"],
          ref: "Lecture 4 — Slide 30 (Direct Communication)",
          likely: "high",
        },
        {
          q: "7. In indirect communication, messages are sent to and received from:",
          options: [
            "A shared memory segment",
            "A CPU register",
            "Mailboxes (also referred to as ports)",
            "A direct network connection",
          ],
          correct: 2,
          translation: "في الاتصال غير المباشر، يتم إرسال واستقبال الرسائل من:",
          explanation:
            "في الـ indirect communication الرسائل بتتبعت وتستقبل من mailboxes (بتسمى كمان ports). كل mailbox ليه ID مميز، والعمليات تتواصل لو بس بتشارك نفس الـ mailbox. الـ shared memory دي آلية تانية (مش رسائل)، والـ CPU register صغير جدًا، والـ direct network connection دي خاصية الـ sockets.",
          tags: ["Indirect Communication", "Mailbox"],
          ref: "Lecture 4 — Slide 31 (Indirect Communication)",
          likely: "high",
        },
        {
          q: "8. In indirect communication, a link may be associated with how many processes?",
          options: [
            "Exactly one pair",
            "At most two processes",
            "Many processes",
            "Only the kernel",
          ],
          correct: 2,
          translation:
            "في الاتصال غير المباشر، يمكن أن يرتبط الـ link بكم عملية؟",
          explanation:
            "في الـ indirect communication الـ link ممكن يرتبط بعمليات كتير لأن كل العمليات اللي بتشارك نفس الـ mailbox بتتوصّل عبر نفس الـ link. ده الفرق الأساسي بينه وبين الـ direct communication اللي الـ link فيه مرتبط بزوج واحد فقط.",
          tags: ["Indirect Communication", "Communication Link"],
          ref: "Lecture 4 — Slide 31 (Indirect Communication)",
          likely: "high",
        },
        {
          q: "9. Symmetric addressing in direct communication means:",
          options: [
            "Only the sender names the recipient",
            "Both sender and receiver name each other",
            "Neither process names the other",
            "Only the kernel handles naming",
          ],
          correct: 1,
          translation:
            "العنونة المتناظرة (Symmetric addressing) في الاتصال المباشر تعني:",
          explanation:
            "في الـ symmetric addressing الاتنين (المرسل والمستقبل) لازم يسمّوا بعض. ده غالبًا بيستخدم في bidirectional communication. أما الـ asymmetric فالمرسل بس هو اللي يسمّي المستلم، وبيستخدم في unidirectional communication.",
          tags: ["Direct Communication", "Symmetric vs Asymmetric"],
          ref: "Lecture 4 — Slide 30 (Direct Communication)",
          likely: "high",
        },
        {
          q: "10. Asymmetric addressing in direct communication means:",
          options: [
            "Only the sender names the recipient",
            "Both processes name each other",
            "Messages are sent to a mailbox",
            "The link is bi-directional only",
          ],
          correct: 0,
          translation:
            "العنونة غير المتناظرة (Asymmetric addressing) في الاتصال المباشر تعني:",
          explanation:
            "في الـ asymmetric addressing المرسل بس هو اللي يسمّي المستلم. ده بيستخدم غالبًا في unidirectional (اتجاه واحد) communication. الـ symmetric هو اللي الاتنين يسمّوا بعض، والـ mailbox فكرة indirect مش direct.",
          tags: ["Direct Communication", "Symmetric vs Asymmetric"],
          ref: "Lecture 4 — Slide 30 (Direct Communication)",
          likely: "high",
        },
        {
          q: "11. Blocking send is considered:",
          options: ["Asynchronous", "Indirect", "Unbounded", "Synchronous"],
          correct: 3,
          translation: "إرسال الحظر (Blocking send) يعتبر:",
          explanation:
            "الـ blocking send متزامن (synchronous) لأن المرسل بيتحظر (block) لحد ما الرسالة تتستقبل. الـ non-blocking send هو اللي asynchronous لأن المرسل بيبعت الرسالة ويكمل شغله من غير استجابة.",
          tags: ["Synchronization", "Blocking vs Non-blocking"],
          ref: "Lecture 4 — Slide 35 (Synchronization)",
          likely: "high",
        },
        {
          q: "12. Non-blocking receive returns:",
          options: [
            "A valid message or null",
            "Only a valid message, blocking if none available",
            "An error code always",
            "The kernel address",
          ],
          correct: 0,
          translation: "الاستقبال غير الحظر (Non-blocking receive) يرجّع:",
          explanation:
            "الـ non-blocking receive بيرجّع رسالة صحيحة لو موجودة، أو null لو مفيش. الـ blocking receive هو اللي بيستنى لحد ما رسالة تظهر. ده اللي بيخلي الـ non-blocking يعتبر asynchronous.",
          tags: ["Synchronization", "Blocking vs Non-blocking"],
          ref: "Lecture 4 — Slide 35 (Synchronization)",
          likely: "high",
        },
        {
          q: "13. In a zero-capacity buffer, the sender must:",
          options: [
            "Continue immediately after sending",
            "Send the message to a mailbox",
            "Store the message in a queue of infinite length",
            "Wait for the receiver (rendezvous)",
          ],
          correct: 3,
          translation:
            "في الـ buffer بسعة صفر (zero capacity)، يجب على المرسل أن:",
          explanation:
            "في الـ zero capacity (0 messages)، مفيش طابور للرسائل، فالمرسل لازم يستنى المستلم يستقبل الرسالة فعلًا (وده اسمه rendezvous). يعني blocking send و blocking receive سوا. الاختيارات التانية غلط: continue هو الـ non-blocking، طابور لا نهائي هو الـ unbounded، والـ mailbox فكرة indirect communication.",
          tags: ["Buffering", "Zero Capacity", "Rendezvous"],
          ref: "Lecture 4 — Slide 36 (Buffering)",
          likely: "high",
        },
        {
          q: "14. In a bounded-capacity buffer of length n, the sender must wait when:",
          options: [
            "The link is empty",
            "The receiver is busy",
            "The link is full",
            "n equals zero",
          ],
          correct: 2,
          translation:
            "في الـ buffer ذو السعة المحدودة بطول n، ينتظر المرسل عندما:",
          explanation:
            "في الـ bounded capacity بطول n، المرسل بيستنى بس لما الـ link يكون ممتلئ (full). طالما الـ link مش ممتلئ، الـ send بيكون non-blocking. لو الـ link فاضي ده مش مشكلة للمرسل، ولو n=0 ده يبقى zero capacity.",
          tags: ["Buffering", "Bounded Capacity"],
          ref: "Lecture 4 — Slide 36 (Buffering)",
          likely: "high",
        },
        {
          q: "15. In an unbounded-capacity buffer, the sender:",
          options: [
            "Never waits",
            "Always waits for the receiver",
            "Waits only when the buffer is full",
            "Waits only if the receiver is null",
          ],
          correct: 0,
          translation:
            "في الـ buffer ذو السعة غير المحدودة (unbounded capacity)، المرسل:",
          explanation:
            "في الـ unbounded capacity المرسل مبيستنيش أبدًا لأن الطابور بيطول لأي حد (infinite length). ده عكس الـ zero (بيستنى دايمًا) والـ bounded (بيستنى لو ممتلئ).",
          tags: ["Buffering", "Unbounded Capacity"],
          ref: "Lecture 4 — Slide 36 (Buffering)",
          likely: "high",
        },
        {
          q: "16. A socket is defined as:",
          options: [
            "A type of memory buffer",
            "A kernel data structure for scheduling",
            "An endpoint for communication",
            "A network protocol for file transfer",
          ],
          correct: 2,
          translation: "الـ socket يُعرّف بأنه:",
          explanation:
            "الـ socket هو endpoint (نقطة نهاية) للاتصال. بيتكون من IP address + port number. مش نوع ذاكرة ولا بنية scheduling ولا بروتوكول FTP.",
          tags: ["Sockets", "Client-Server Communication"],
          ref: "Lecture 4 — Slide 38 (Sockets)",
          likely: "high",
        },
        {
          q: "17. A socket consists of the concatenation of:",
          options: [
            "MAC address and port number",
            "Process ID and memory address",
            "Hostname and protocol",
            "IP address and port",
          ],
          correct: 3,
          translation: "يتكون الـ socket من دمج:",
          explanation:
            "الـ socket هو دمج (concatenation) الـ IP address مع الـ port. مثال: 161.25.19.8:1625. الـ MAC address مع الـ port غلط لأن الـ socket بيشتغل على مستوى الـ IP، والـ hostname مش جزء من الـ socket، والـ process ID مفهوم تاني.",
          tags: ["Sockets", "IP Address", "Port"],
          ref: "Lecture 4 — Slide 38 (Sockets)",
          likely: "high",
        },
        {
          q: "18. The socket 161.25.19.8:1625 refers to:",
          options: [
            "Port 1615 on host 25.19.8",
            "A mailbox with ID 1625",
            "IP address 1625 with port 161.25.19.8",
            "Port 1625 on host 161.25.19.8",
          ],
          correct: 3,
          translation: "الـ socket 161.25.19.8:1625 يشير إلى:",
          explanation:
            "الصيغة IP:Port يعني 161.25.19.8 هو الـ IP، و1625 هو الـ port. الاختيارات التانية بتعكس الترتيب أو بتفسر الـ port كـ mailbox ID، وده غلط.",
          tags: ["Sockets", "IP Address", "Port"],
          ref: "Lecture 4 — Slide 38 (Sockets)",
          likely: "high",
        },
        {
          q: "19. Communication using sockets consists between:",
          options: [
            "A single socket and the kernel",
            "A socket and a mailbox",
            "Three sockets minimum",
            "A pair of sockets",
          ],
          correct: 3,
          translation: "الاتصال باستخدام sockets يتم بين:",
          explanation:
            "الاتصال بـ sockets بيحصل بين زوج من الـ sockets (one on each side). مفيش socket واحد لوحده، ولا ثلاثة، ولا socket مع mailbox (دي أنواع مختلفة).",
          tags: ["Sockets", "Client-Server Communication"],
          ref: "Lecture 4 — Slide 38 (Sockets)",
          likely: "high",
        },
        {
          q: "20. Remote Procedure Call (RPC) is similar to IPC but differs in that:",
          options: [
            "In RPC the processes are on the same machine",
            "RPC uses shared memory only",
            "In RPC the processes are not at the same machine (networked systems)",
            "RPC does not use messages",
          ],
          correct: 2,
          translation: "نداء الإجراء البعيد (RPC) يشبه IPC لكن يختلف في أن:",
          explanation:
            "RPC شبه IPC لكن الفرق إن في RPC العمليات على آلات مختلفة (networked)، بينما في IPC العمليات على نفس الآلة. الاختيارات التانية غلط لأن RPC مش بيستخدم shared memory وبيعتمد على messages فعليًا.",
          tags: ["RPC", "IPC vs RPC"],
          ref: "Lecture 4 — Slide 40 (Remote Procedure Calls)",
          likely: "high",
        },
        {
          q: "21. A stub in an RPC system is:",
          options: [
            "The server-side actual procedure",
            "A type of network socket",
            "A client-side proxy for the actual procedure on the server",
            "A kernel-level buffer",
          ],
          correct: 2,
          translation: "الـ stub في نظام RPC هو:",
          explanation:
            "الـ stub هو proxy على جانب العميل (client-side) للإجراء الفعلي على السيرفر. بيخفي تفاصيل الاتصال. مش الإجراء الفعلي نفسه (ده على السيرفر)، ومش socket ولا buffer.",
          tags: ["RPC", "Stub"],
          ref: "Lecture 4 — Slide 40 (Remote Procedure Calls)",
          likely: "high",
        },
        {
          q: "22. Marshalling in RPC refers to:",
          options: [
            "Receiving a message from the network",
            "Locating the port on the server",
            "Packaging the parameters into a form that can be transmitted over a network",
            "Destroying a mailbox after use",
          ],
          correct: 2,
          translation: "Marshalling في RPC يشير إلى:",
          explanation:
            "Marshalling هو تغليف (packaging) المعاملات في صورة تنقل عبر الشبكة. الـ client-side stub بيعمل marshalling للمعاملات قبل الإرسال، والـ server-side stub بيرجعها (unmarshalling). استقبال الرسالة و تحديد الـ port وظايف تانية.",
          tags: ["RPC", "Marshalling", "Stub"],
          ref: "Lecture 4 — Slide 40 (Remote Procedure Calls)",
          likely: "high",
        },
        {
          q: "23. Which side receives the marshalled message, unpacks the parameters, and performs the procedure on the server?",
          options: [
            "The client-side stub",
            "The mailbox",
            "The server-side stub",
            "The operating system kernel only",
          ],
          correct: 2,
          translation:
            "أي جانب يستقبل الرسالة المُغلّفة (marshalled)، يفك المعاملات، وينفذ الإجراء على السيرفر؟",
          explanation:
            "الـ server-side stub هو اللي بيستقبل الرسالة، يعمل unmarshalling للمعاملات، وينفذ الإجراء على السيرفر. الـ client-side stub بيبعت و يستلم الرد، أما الـ mailbox و الـ kernel فمش بيينفذوا الإجراء.",
          tags: ["RPC", "Server Stub", "Marshalling"],
          ref: "Lecture 4 — Slide 40 (Remote Procedure Calls)",
          likely: "high",
        },
        {
          q: "24. Remote Method Invocation (RMI) is a mechanism provided by which language?",
          options: ["C++", "Java", "Python", "C"],
          correct: 1,
          translation: "Remote Method Invocation (RMI) هو آلية توفرها لغة:",
          explanation:
            "RMI هي آلية Java شبه RPC. الـ RPC غالبًا مت implement في C++، لكن RMI خاص بـ Java وبيسمح لبرنامج Java على آلة يستدعي method على remote object. Python و C ليهم آليات تانية.",
          tags: ["RMI", "Java", "RPC vs RMI"],
          ref: "Lecture 4 — Slide 42 (Remote Method Invocation)",
          likely: "high",
        },
        {
          q: "25. RPCs are usually implemented in which language?",
          options: ["Java", "C++", "Python", "JavaScript"],
          correct: 1,
          translation: "RPCs تُنفّذ عادةً بأي لغة؟",
          explanation:
            "حسب الشريحة: RPCs usually implemented in C++، بينما RMI بـ Java. الفرق ده مهم لأن RMI بيدعم object-oriented features بشكل أعمق.",
          tags: ["RPC", "C++", "RPC vs RMI"],
          ref: "Lecture 4 — Slide 42 (Remote Method Invocation)",
          likely: "high",
        },
        {
          q: "26. In Java terminology, the stub for the remote object is called:",
          options: ["Proxy", "Port", "Mailbox", "Skeleton"],
          correct: 3,
          translation:
            "في مصطلحات Java، الـ stub للكائن البعيد (remote object) يسمى:",
          explanation:
            "في Java، الـ stub للـ remote object بيتسمى skeleton. ده المصطلح الخاص بـ Java للـ server-side stub. الـ proxy مصطلح عام، والـ mailbox و الـ port مفاهيم تانية خالص.",
          tags: ["RMI", "Skeleton", "Java"],
          ref: "Lecture 4 — Slide 43 (Marshalling Parameters)",
          likely: "high",
        },
        {
          q: "27. RMI allows a Java program to:",
          options: [
            "Schedule threads remotely",
            "Compile code on a remote machine",
            "Share memory between two JVMs",
            "Invoke a method on a remote object",
          ],
          correct: 3,
          translation: "RMI يسمح لبرنامج Java بأن:",
          explanation:
            "RMI بيسمح لـ Java program على آلة يستدعي (invoke) method على remote object. الـ compilation مش وظيفة RMI، والـ shared memory مش مدعوم، والـ thread scheduling وظيفة OS مش RMI.",
          tags: ["RMI", "Java", "Remote Object"],
          ref: "Lecture 4 — Slide 42 (Remote Method Invocation)",
          likely: "high",
        },
        {
          q: "28. Which of the following is NOT among the three client-server communication mechanisms mentioned in the lecture?",
          options: [
            "Shared Memory",
            "Remote Procedure Calls",
            "Remote Method Invocation",
            "Sockets",
          ],
          correct: 0,
          translation:
            "أي مما يلي ليس من آليات اتصال العميل-الخادم الثلاث المذكورة في المحاضرة؟",
          explanation:
            "المحاضرة ذكرت 3 بس: Sockets، RPC، RMI. الـ Shared Memory مش ضمن آليات الـ client-server communication في المحاضرة دي (دي آلية IPC على نفس الآلة).",
          tags: ["Client-Server Communication", "Sockets", "RPC", "RMI"],
          ref: "Lecture 4 — Slide 37 (Client-Server Communication)",
          likely: "high",
        },
        {
          q: "29. In direct communication, between each pair of processes there exists:",
          options: [
            "Multiple links",
            "Exactly one link",
            "Zero links",
            "A shared mailbox",
          ],
          correct: 1,
          translation: "في الاتصال المباشر، بين كل زوج عمليات يوجد:",
          explanation:
            "في الـ direct communication بين كل زوج فيهم بالظبط link واحد (exactly one). ده عكس الـ indirect اللي ممكن يكون في عدة links بين الزوج الواحد لو بيتشاركوا في عدة mailboxes.",
          tags: ["Direct Communication", "Communication Link"],
          ref: "Lecture 4 — Slide 30 (Direct Communication)",
          likely: "high",
        },
        {
          q: "30. The link in direct communication is usually:",
          options: [
            "Unidirectional only",
            "Bi-directional",
            "Broadcast-based",
            "Multicast-only",
          ],
          correct: 1,
          translation: "الـ link في الاتصال المباشر يكون عادةً:",
          explanation:
            "الـ link في الـ direct communication ممكن يكون unidirectional، لكن عادةً bi-directional. الـ broadcast و الـ multicast مش خصائص الـ direct communication.",
          tags: ["Direct Communication", "Communication Link"],
          ref: "Lecture 4 — Slide 30 (Direct Communication)",
          likely: "high",
        },
        {
          q: "31. Which of the following is a property of communication links in indirect communication?",
          options: [
            "Only one link can exist between any two processes",
            "A link is associated with exactly one pair of processes",
            "Links are never bi-directional",
            "A link may be associated with many processes",
          ],
          correct: 3,
          translation:
            "أي مما يلي خاصية من خصائص communication links في الاتصال غير المباشر؟",
          explanation:
            "في الـ indirect communication الـ link ممكن يرتبط بعمليات كتير (لو بيتشاركوا نفس الـ mailbox). ده عكس الـ direct اللي بيرتبط بزوج واحد فقط. كمان الـ link ممكن يكون uni أو bi-directional، وممكن يكون في عدة links بين زوج واحد.",
          tags: ["Indirect Communication", "Communication Link"],
          ref: "Lecture 4 — Slide 31 (Indirect Communication)",
          likely: "high",
        },
        {
          q: "32. Blocking receive means the receiver:",
          options: [
            "Continues if no message is available",
            "Blocks until a message is available",
            "Returns null immediately",
            "Sends an acknowledgment first",
          ],
          correct: 1,
          translation: "الاستقبال الحظر (Blocking receive) يعني أن المستقبل:",
          explanation:
            "الـ blocking receive بيخلي المستقبل يحظر (block) لحد ما رسالة تكون متاحة. ده synchronous. الـ non-blocking receive هو اللي بيرجّع null أو valid message و يكمّل شغله.",
          tags: ["Synchronization", "Blocking Receive"],
          ref: "Lecture 4 — Slide 35 (Synchronization)",
          likely: "high",
        },
        {
          q: "33. The rendezvous situation (sender waits for receiver) occurs in which buffering scheme?",
          options: [
            "Bounded capacity when the link is not full",
            "Bounded capacity when the link is empty",
            "Unbounded capacity when the link is full",
            "Zero capacity",
          ],
          correct: 3,
          translation:
            "موقف الـ rendezvous (المرسل ينتظر المستلم) بيحصل في أي نظام تخزين مؤقت؟",
          explanation:
            "الـ rendezvous بيحصل في الـ zero capacity لأن مفيش طابور نهائيًا، فالمرسل لازم يستنى المستلم يستقبل فعليًا (blocking send و blocking receive معًا). في الـ bounded capacity المرسل بيستنى بس لما الـ link ممتلئ (مش فاضي)، و في الـ unbounded المرسل مبيستنيش أبدًا.",
          tags: ["Buffering", "Zero Capacity", "Rendezvous"],
          ref: "Lecture 4 — Slide 36 (Buffering)",
          likely: "medium",
        },

        // ============== MCQ - Medium Priority ==============
        {
          q: "34. The two main types of buffer in the Producer-Consumer problem are:",
          options: [
            "Synchronous and Asynchronous buffer",
            "Direct and Indirect buffer",
            "Blocking and Non-blocking buffer",
            "Bounded and Unbounded buffer",
          ],
          correct: 3,
          translation:
            "النوعان الرئيسيان للـ buffer في مشكلة المنتج-المستهلك هما:",
          explanation:
            "الأنواع هي bounded-buffer (حجم ثابت) و unbounded-buffer (بدون حد عملي). الـ direct/indirect دي أنواع communication، و الـ blocking/non-blocking دي أنواع synchronization، و الـ sync/async مفهوم مش نوع buffer.",
          tags: ["Producer-Consumer", "Buffer Types"],
          ref: "Lecture 4 — Slide 26 (Producer-Consumer Problem)",
          likely: "medium",
        },
        {
          q: "35. The unbounded-buffer solution assumes that:",
          options: [
            "There is no practical limit on the size of the shared buffer",
            "There is a fixed buffer size",
            "The consumer must wait if the buffer is empty",
            "The producer must wait if the buffer is full",
          ],
          correct: 0,
          translation: "حل الـ unbounded-buffer يفترض أن:",
          explanation:
            "الـ unbounded-buffer بيفترض إن مفيش حد عملي لحجم الـ buffer. الاختيارات التانية غلط: الـ fixed size دي characteristic للـ bounded، والانتظار للمستهلك/المنتج بيحصل في الـ bounded مش الـ unbounded.",
          tags: ["Producer-Consumer", "Unbounded Buffer"],
          ref: "Lecture 4 — Slide 26 (Producer-Consumer Problem)",
          likely: "medium",
        },
        {
          q: "36. The basic primitives for indirect communication are:",
          options: [
            "send(P, message) and receive(Q, message)",
            "read() and write()",
            "send(A, message) and receive(A, message) where A is a mailbox",
            "lock() and unlock()",
          ],
          correct: 2,
          translation: "الـ primitives الأساسية للاتصال غير المباشر هي:",
          explanation:
            "في الـ indirect communication: send(A, message) و receive(A, message) حيث A هو الـ mailbox. أما send(P, message) و receive(Q, message) فدي direct communication (P و Q أسماء عمليات).",
          tags: ["Indirect Communication", "Primitives"],
          ref: "Lecture 4 — Slide 32 (Indirect Communication)",
          likely: "medium",
        },
        {
          q: "37. The operations on a mailbox in indirect communication include all EXCEPT:",
          options: [
            "Allocate CPU time to the mailbox",
            "Send and receive messages through mailbox",
            "Destroy a mailbox",
            "Create a new mailbox",
          ],
          correct: 0,
          translation:
            "عمليات الـ mailbox في الاتصال غير المباشر تشمل الكل ما عدا:",
          explanation:
            "الـ mailbox ليه 3 عمليات: create، send/receive، و destroy. تخصيص CPU time مش وظيفة الـ mailbox (دي وظيفة الـ OS scheduler).",
          tags: ["Indirect Communication", "Mailbox Operations"],
          ref: "Lecture 4 — Slide 32 (Indirect Communication)",
          likely: "medium",
        },
        {
          q: "38. When P1, P2, and P3 share mailbox A and P1 sends a message, who gets it?",
          options: [
            "All three processes get a copy",
            "Only P2 receives it",
            "The system must determine which one receives (a problem to solve)",
            "Only P3 receives it",
          ],
          correct: 2,
          translation:
            "لما P1 و P2 و P3 يتشاركوا mailbox A و P1 يبعت رسالة، مين بياخدها؟",
          explanation:
            "ده مشكلة: مين بياخد الرسالة؟ المحاضرة بتذكر 3 حلول: (1) الـ link يرتبط بعمليتين فقط، (2) عملية واحدة بس تعمل receive في المرة، (3) النظام يختار المستلم عشوائيًا ويعرف المرسل. مفيش حل افتراضي.",
          tags: ["Indirect Communication", "Mailbox Sharing"],
          ref: "Lecture 4 — Slide 33-34 (Indirect Communication)",
          likely: "medium",
        },
        {
          q: "39. The three solutions to the mailbox sharing problem include all EXCEPT:",
          options: [
            "Allow a link to be associated with at most two processes",
            "Allow only one process at a time to execute a receive operation",
            "Allow the system to select arbitrarily the receiver and notify the sender",
            "Allow all processes to receive the same message simultaneously",
          ],
          correct: 3,
          explanation:
            "الحلول التلاتة المذكورة في المحاضرة هي: (1) الـ link يرتبط بعمليتين على الأكثر، (2) عملية واحدة بس تعمل receive في المرة، (3) النظام يختار المستلم عشوائيًا ويعرف المرسل. الخيار الرابع (كل العمليات تستقبل نفس الرسالة) مش من الحلول، ده سيناريو broadcast مش حل لمشكلة مين ياخد الرسالة.",
          translation:
            "الحلول الثلاث لمشكلة مشاركة الـ mailbox تشمل الكل ما عدا:",
          tags: ["Indirect Communication", "Mailbox Sharing"],
          ref: "Lecture 4 — Slide 34 (Indirect Communication)",
          likely: "medium",
        },
        {
          q: "40. How many ways can a message queue attached to a link be implemented?",
          options: ["Three ways", "Two ways", "Four ways", "One way only"],
          correct: 0,
          translation:
            "بكم طريقة يمكن تنفيذ طابور الرسائل (message queue) المرتبط بالـ link؟",
          explanation:
            "الـ message queue بينفذ بـ 3 طرق: zero capacity، bounded capacity، و unbounded capacity. ده اللي بتذكره شريحة Buffering.",
          tags: ["Buffering", "Message Queue"],
          ref: "Lecture 4 — Slide 36 (Buffering)",
          likely: "medium",
        },
        {
          q: "41. The client-side stub in RPC is responsible for:",
          options: [
            "Locating the server and marshalling the parameters",
            "Performing the actual procedure on the server",
            "Destroying the mailbox",
            "Allocating memory on the client",
          ],
          correct: 0,
          translation: "الـ client-side stub في RPC مسؤول عن:",
          explanation:
            "الـ client-side stub بيحدد مكان السيرفر (locates the server) وبيعمل marshalling للمعاملات. تنفيذ الإجراء الفعلي بيحصل على السيرفر بواسطة الـ server-side stub. الـ mailbox و تخصيص الذاكرة وظايف تانية.",
          tags: ["RPC", "Client Stub"],
          ref: "Lecture 4 — Slide 40 (Remote Procedure Calls)",
          likely: "medium",
        },
        {
          q: "42. The stub in an RPC system is used to:",
          options: [
            "Speed up CPU execution",
            "Hide the details that allow communication to take place",
            "Encrypt messages",
            "Schedule network traffic",
          ],
          correct: 1,
          translation: "الـ stub في نظام RPC يُستخدم لـ:",
          explanation:
            "الـ stub بيخفي (hide) التفاصيل اللي بتخلي الاتصال يحصل، عشان المبرمج يتعامل مع الإجراء كأنه محلي. التسريع و التشفير و الـ scheduling مش وظائف الـ stub.",
          tags: ["RPC", "Stub"],
          ref: "Lecture 4 — Slide 40 (Remote Procedure Calls)",
          likely: "medium",
        },
        {
          q: "43. Usually, how many stubs does each RPC have?",
          options: [
            "One shared stub",
            "A separate stub",
            "No stubs needed",
            "Exactly four stubs",
          ],
          correct: 1,
          translation: "عادةً، كم stub لكل RPC؟",
          explanation:
            "المحاضرة بتقول: Usually each RPC has a separate stub. ده معناه إن كل إجراء بعيد ليه stub خاص بيه، مش shared ولا بدون stub ولا أربعة.",
          tags: ["RPC", "Stub"],
          ref: "Lecture 4 — Slide 40 (Remote Procedure Calls)",
          likely: "medium",
        },
        {
          q: "44. Which of the following best describes the relationship between RPC and RMI?",
          options: [
            "RMI is the C++ version of RPC",
            "RMI is a Java mechanism similar to RPCs",
            "RPC is a Java-specific feature",
            "They are completely unrelated technologies",
          ],
          correct: 1,
          translation: "أي مما يلي يصف بشكل أفضل العلاقة بين RPC و RMI؟",
          explanation:
            "RMI هي آلية Java شبه RPCs. RPC عادةً بـ C++، و RMI بـ Java، لكن المفهوم متشابه (استدعاء إجراء/method عن بعد). مش RMI إصدار C++ من RPC، ولا RPC خاص بـ Java.",
          tags: ["RPC", "RMI", "RPC vs RMI"],
          ref: "Lecture 4 — Slide 42 (Remote Method Invocation)",
          likely: "medium",
        },
        {
          q: "45. The communication link in direct communication is established:",
          options: [
            "Automatically",
            "Manually by the programmer",
            "Through a mailbox",
            "Only after a handshake protocol",
          ],
          correct: 0,
          translation: "الـ link في الاتصال المباشر يتم إنشاؤه:",
          explanation:
            "في الـ direct communication الـ links بتتأنشئ تلقائيًا (automatically) لما العمليات تسمّي بعض. مفيش إنشاء يدوي ولا mailbox (دي indirect) ولا handshake protocol مذكور.",
          tags: ["Direct Communication", "Communication Link"],
          ref: "Lecture 4 — Slide 30 (Direct Communication)",
          likely: "medium",
        },
        {
          q: "46. In indirect communication, a link is established only when:",
          options: [
            "Processes share a common mailbox",
            "The operating system boots",
            "A socket is created",
            "The kernel allocates memory",
          ],
          correct: 0,
          translation: "في الاتصال غير المباشر، يتم إنشاء الـ link فقط عندما:",
          explanation:
            "الـ link بيتأنشأ بس لو العمليات بيتشاركوا في mailbox مشترك. ده الشرط الوحيد. boot الـ OS، إنشاء socket، و تخصيص الذاكرة مفاهيم تانية.",
          tags: ["Indirect Communication", "Communication Link"],
          ref: "Lecture 4 — Slide 31 (Indirect Communication)",
          likely: "medium",
        },
        {
          q: "47. The size of a message in IPC send() operation is:",
          options: [
            "Always fixed",
            "Always variable",
            "Always 64 bytes",
            "Fixed or variable",
          ],
          correct: 3,
          translation: "حجم الرسالة في عملية send() في IPC هو:",
          explanation:
            "حسب المحاضرة: send(message) — message size fixed or variable. يعني ممكن يكون ثابت أو متغير حسب التطبيق.",
          tags: ["IPC", "Message Passing"],
          ref: "Lecture 4 — Slide 27 (Interprocess Communication)",
          likely: "medium",
        },

        // ============== ESSAY QUESTIONS (high priority first) ==============
        {
          type: "essay",
          q: "1. Define the Producer-Consumer problem and explain the role of the shared buffer.",
          translation:
            "عرّف مشكلة المنتج-المستهلك واشرح دور الـ shared buffer.",
          answer:
            "The Producer-Consumer problem is a paradigm for cooperating processes in which a producer process produces information that is consumed by a consumer process.\n" +
            "A solution is implemented using a shared buffer that can be:\n" +
            "1. Unbounded-buffer: places no practical limit on the size of the shared buffer.\n" +
            "2. Bounded-buffer: assumes a fixed buffer size.\n" +
            "Key waiting rules:\n" +
            "- If the buffer is empty, the consumer must wait.\n" +
            "- If the buffer is full, the producer must wait.\n" +
            "We must also prevent the consumer from reading the buffer value unless the producer has finished producing the output.",
          tags: ["Producer-Consumer", "Buffer"],
          ref: "Lecture 4 — Slide 26 (Producer-Consumer Problem)",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. Define Interprocess Communication (IPC) and state its two basic operations.",
          translation:
            "عرّف الاتصال بين العمليات (IPC) واذكر عمليتيه الأساسيتين.",
          answer:
            "Interprocess Communication (IPC) is a mechanism for processes to communicate and to synchronize their actions.\n" +
            "It uses a message system (message passing) in which processes communicate with each other without resorting to shared variables.\n" +
            "The IPC facility provides two operations:\n" +
            "1. send(message) — message size is fixed or variable.\n" +
            "2. receive(message)\n" +
            "If two processes P and Q wish to communicate, they need to:\n" +
            "- Establish a communication link between them.\n" +
            "- Exchange messages via send/receive.",
          tags: ["IPC", "Message Passing"],
          ref: "Lecture 4 — Slide 27 (Interprocess Communication)",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Compare Direct Communication and Indirect Communication in IPC.",
          translation: "قارن بين الاتصال المباشر والاتصال غير المباشر في IPC.",
          answer:
            "Direct Communication:\n" +
            "- Processes must name each other explicitly: send(P, message), receive(Q, message).\n" +
            "- Links are established automatically.\n" +
            "- A link is associated with exactly one pair of communicating processes.\n" +
            "- Between each pair there exists exactly one link.\n" +
            "- The link may be unidirectional but is usually bi-directional.\n" +
            "- Divided into: Symmetric addressing (both name each other) and Asymmetric addressing (only sender names the recipient).\n" +
            "Indirect Communication:\n" +
            "- Messages are sent to and received from mailboxes (also called ports).\n" +
            "- Each mailbox has a unique ID.\n" +
            "- Processes can communicate only if they share a mailbox.\n" +
            "- A link is established only if processes share a common mailbox.\n" +
            "- A link may be associated with many processes.\n" +
            "- Each pair of processes may share several communication links.\n" +
            "- Link may be unidirectional or bi-directional.",
          tags: ["Direct vs Indirect", "Communication"],
          ref: "Lecture 4 — Slides 30-31 (Naming)",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. Explain the difference between Symmetric and Asymmetric addressing in direct communication, and state when each is typically used.",
          translation:
            "اشرح الفرق بين العنونة المتناظرة وغير المتناظرة في الاتصال المباشر، ومتى تُستخدم كل منهما عادةً.",
          answer:
            "Symmetric addressing:\n" +
            "- Both processes (sender and receiver) should name each other.\n" +
            "- Usually needed for bidirectional communications.\n" +
            "Asymmetric addressing:\n" +
            "- Only the sender names the recipient.\n" +
            "- Usually needed for unidirectional (one direction) communications.\n" +
            "Key difference: in symmetric, both sides know each other's identity; in asymmetric, only the sender needs to know the receiver.",
          tags: ["Symmetric vs Asymmetric", "Direct Communication"],
          ref: "Lecture 4 — Slide 30 (Direct Communication)",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. Explain the difference between Blocking (Synchronous) and Non-blocking (Asynchronous) message passing.",
          translation:
            "اشرح الفرق بين تمرير الرسائل الحظر (المتزامن) وغير الحظر (غير المتزامن).",
          answer:
            "Blocking (Synchronous):\n" +
            "- Blocking send: the sender blocks until the message is received.\n" +
            "- Blocking receive: the receiver blocks until a message is available.\n" +
            "Non-blocking (Asynchronous):\n" +
            "- Non-blocking send: the sender sends the message and continues (does not wait).\n" +
            "- Non-blocking receive: the receiver receives a valid message or null.\n" +
            "Key difference: blocking operations wait for completion before proceeding; non-blocking operations allow the process to continue immediately and either retrieve a result later or handle a null result.",
          tags: ["Synchronization", "Blocking vs Non-blocking"],
          ref: "Lecture 4 — Slide 35 (Synchronization)",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. List and explain the three methods of buffering in IPC.",
          translation:
            "اذكر واشرح طرق التخزين المؤقت (Buffering) الثلاث في IPC.",
          answer:
            "Whether communication is direct or indirect, messages exchanged by communicating processes reside in a temporary queue attached to the link. The queue can be implemented in three ways:\n" +
            "1. Zero capacity (0 messages):\n" +
            "   - Sender must wait for receiver (this is called rendezvous).\n" +
            "   - Both blocking send and blocking receive.\n" +
            "2. Bounded capacity (finite length of n messages):\n" +
            "   - Sender must wait if the link is full (blocking send).\n" +
            "   - If the link is not full, then non-blocking send.\n" +
            "3. Unbounded capacity (infinite length):\n" +
            "   - Sender never waits.",
          tags: [
            "Buffering",
            "Zero Capacity",
            "Bounded Capacity",
            "Unbounded Capacity",
          ],
          ref: "Lecture 4 — Slide 36 (Buffering)",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. Define a Socket and give an example showing how IP and port are combined.",
          translation:
            "عرّف الـ Socket واذكر مثال يوضح كيف يُدمج الـ IP مع الـ port.",
          answer:
            "A socket is defined as an endpoint for communication.\n" +
            "A socket is the concatenation of an IP address and a port number.\n" +
            "Example:\n" +
            "  The socket 161.25.19.8:1625 refers to port 1625 on host 161.25.19.8.\n" +
            "Communication using sockets consists between a pair of sockets (one socket on each communicating side).",
          tags: ["Sockets", "Client-Server Communication"],
          ref: "Lecture 4 — Slide 38 (Sockets)",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. Define Remote Procedure Call (RPC) and explain the role of stubs.",
          translation: "عرّف نداء الإجراء البعيد (RPC) واشرح دور الـ stubs.",
          answer:
            "Remote Procedure Call (RPC) abstracts procedure calls between processes on networked systems. It is similar to IPC, but in RPC the processes are not at the same machine (while in IPC they are on the same machine).\n" +
            "Stubs:\n" +
            "- A stub is a client-side proxy for the actual procedure on the server.\n" +
            "- Stubs are used to hide the details that allow communication to take place.\n" +
            "- Usually each RPC has a separate stub.\n" +
            "Two main functions of the stub:\n" +
            "1. Locates the port on the server for the remote procedure.\n" +
            "2. Marshals the parameters for the remote procedure.\n" +
            "Workflow:\n" +
            "- The client-side stub locates the server and marshals (packages) the parameters into a form that can be transmitted over a network.\n" +
            "- The server-side stub receives this message, unpacks the marshalled parameters, and performs the procedure on the server.",
          tags: ["RPC", "Stub", "Marshalling"],
          ref: "Lecture 4 — Slide 40 (Remote Procedure Calls)",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. Define Marshalling and explain its purpose in RPC.",
          translation: "عرّف Marshalling واشرح هدفه في RPC.",
          answer:
            "Marshalling is the process of packaging the parameters into a form that can be transmitted over a network.\n" +
            "Purpose:\n" +
            "- Allows the client-side stub to convert local procedure parameters into a network-transmittable format.\n" +
            "- The server-side stub then unpacks (unmarshals) the marshalled parameters and performs the actual procedure.\n" +
            "In Java terminology, the stub for the remote object is called a skeleton.",
          tags: ["Marshalling", "RPC", "Stub", "Skeleton"],
          ref: "Lecture 4 — Slides 40 & 43 (RPC and Marshalling Parameters)",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Compare RPC and RMI in terms of language, mechanism, and what they invoke.",
          translation: "قارن بين RPC و RMI من حيث اللغة والآلية وماذا يستدعون.",
          answer:
            "Remote Procedure Call (RPC):\n" +
            "- Usually implemented in C++.\n" +
            "- Abstracts procedure calls between processes on networked systems.\n" +
            "- Processes are not on the same machine.\n" +
            "- Invokes a procedure (function/subroutine) on a remote machine.\n" +
            "Remote Method Invocation (RMI):\n" +
            "- A Java mechanism similar to RPCs.\n" +
            "- Allows a Java program on one machine to invoke a method on a remote object.\n" +
            "- Object-oriented: works on objects and methods, not just procedures.\n" +
            "Key similarity: both hide network details from the programmer using stubs.\n" +
            "Key difference: RPC is procedural (C++) and invokes procedures; RMI is object-oriented (Java) and invokes methods on remote objects.",
          tags: ["RPC", "RMI", "RPC vs RMI"],
          ref: "Lecture 4 — Slides 40 & 42 (RPC and RMI)",
          likely: "high",
        },
        {
          type: "essay",
          q: "11. List the implementation questions that must be considered when designing an IPC facility.",
          translation:
            "اذكر أسئلة التنفيذ اللي لازم تتعتبر عند تصميم منشأة IPC.",
          answer:
            "The implementation questions for IPC are:\n" +
            "1. How are links established?\n" +
            "2. Can a link be associated with more than two processes?\n" +
            "3. How many links can there be between every pair of communicating processes?\n" +
            "4. What is the capacity of a link?\n" +
            "5. Is the size of a message that the link can accommodate fixed or variable?\n" +
            "6. Is a link unidirectional or bi-directional?",
          tags: ["IPC", "Implementation Questions"],
          ref: "Lecture 4 — Slide 28 (Implementation Questions)",
          likely: "high",
        },
        {
          type: "essay",
          q: "12. List the properties of the communication link in Direct Communication.",
          translation: "اذكر خصائص الـ communication link في الاتصال المباشر.",
          answer:
            "Properties of the communication link in Direct Communication:\n" +
            "1. Links are established automatically.\n" +
            "2. A link is associated with exactly one pair of communicating processes.\n" +
            "3. Between each pair there exists exactly one link.\n" +
            "4. The link may be unidirectional, but is usually bi-directional.\n" +
            "Direct communication is divided into:\n" +
            "- Symmetry in addressing: both processes (sender and receiver) should name each other (usually needed for bidirectional communications).\n" +
            "- Asymmetry in addressing: only the sender names the recipient (usually needed for unidirectional communications).",
          tags: ["Direct Communication", "Communication Link"],
          ref: "Lecture 4 — Slide 30 (Direct Communication)",
          likely: "high",
        },
        {
          type: "essay",
          q: "13. List the properties of the communication link in Indirect Communication, and state the operations on a mailbox.",
          translation:
            "اذكر خصائص الـ communication link في الاتصال غير المباشر، واذكر عمليات الـ mailbox.",
          answer:
            "Properties of the communication link in Indirect Communication:\n" +
            "1. A link is established only if processes share a common mailbox.\n" +
            "2. A link may be associated with many processes.\n" +
            "3. Each pair of processes may share several communication links.\n" +
            "4. A link may be unidirectional or bi-directional.\n" +
            "Operations on a mailbox:\n" +
            "1. Create a new mailbox.\n" +
            "2. Send and receive messages through the mailbox.\n" +
            "3. Destroy a mailbox.\n" +
            "Primitives:\n" +
            "- send(A, message) — send a message to mailbox A.\n" +
            "- receive(A, message) — receive a message from mailbox A.",
          tags: ["Indirect Communication", "Mailbox"],
          ref: "Lecture 4 — Slides 31-32 (Indirect Communication)",
          likely: "high",
        },
        {
          type: "essay",
          q: "14. List the three mechanisms for client-server communication mentioned in the lecture.",
          translation:
            "اذكر آليات اتصال العميل-الخادم الثلاث المذكورة في المحاضرة.",
          answer:
            "The three mechanisms for client-server communication are:\n" +
            "1. Sockets — defined as an endpoint for communication; concatenation of IP address and port.\n" +
            "2. Remote Procedure Calls (RPC) — abstracts procedure calls between processes on networked systems; uses stubs and marshalling.\n" +
            "3. Remote Method Invocation (RMI) — a Java mechanism similar to RPCs; allows a Java program to invoke a method on a remote object.",
          tags: ["Client-Server Communication", "Sockets", "RPC", "RMI"],
          ref: "Lecture 4 — Slide 37 (Client-Server Communication)",
          likely: "high",
        },
        {
          type: "essay",
          q: "15. Explain the mailbox sharing problem and list its solutions.",
          translation: "اشرح مشكلة مشاركة الـ mailbox واذكر حلولها.",
          answer:
            "Mailbox sharing problem:\n" +
            "- Suppose P1, P2, and P3 share mailbox A.\n" +
            "- P1 sends a message; P2 and P3 receive.\n" +
            "- Question: who gets the message?\n" +
            "Solutions:\n" +
            "1. Allow a link to be associated with at most two processes.\n" +
            "2. Allow only one process at a time to execute a receive operation (this raises a blocking question).\n" +
            "3. Allow the system to select arbitrarily the receiver. The sender is then notified who the receiver was.",
          tags: ["Indirect Communication", "Mailbox Sharing"],
          ref: "Lecture 4 — Slide 34 (Indirect Communication)",
          likely: "medium",
        },

        // ============== CALCULATION / PROBLEM-SOLVING QUESTIONS ==============
        {
          type: "essay",
          q: "1. Given the socket 161.25.19.8:1625, identify the IP address and the port number. Explain the format.",
          translation:
            "بالاعتماد على الـ socket 161.25.19.8:1625، حدّد الـ IP address والـ port number، واشرح الصيغة.",
          answer:
            "Given: socket = 161.25.19.8:1625\n" +
            "Rule: A socket is the concatenation of an IP address and a port, in the form IP:Port.\n" +
            "Step 1: The part before the colon is the IP address.\n" +
            "  IP address = 161.25.19.8\n" +
            "Step 2: The part after the colon is the port number.\n" +
            "  Port number = 1625\n" +
            "Conclusion:\n" +
            "  The socket 161.25.19.8:1625 refers to port 1625 on host 161.25.19.8.\n" +
            "Explanation of the format: the colon ':' separates the IP address from the port number, allowing a unique endpoint identification across the network.",
          tags: ["Sockets", "IP Address", "Port", "Calculation"],
          ref: "Lecture 4 — Slide 38 (Sockets)",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. A bounded-capacity buffer has a maximum length of n = 10 messages and currently contains 4 messages. How many more messages can the producer add without waiting, and what happens when the buffer becomes full?",
          translation:
            "لدينا bounded-capacity buffer بطول أقصى n = 10 رسائل ويحتوي حاليًا على 4 رسائل. كم رسالة إضافية يمكن للمنتج إضافتها دون انتظار، وماذا يحدث عندما يمتلئ الـ buffer؟",
          answer:
            "Given:\n" +
            "  Buffer capacity (n) = 10 messages\n" +
            "  Current messages in buffer = 4\n" +
            "Rule (from lecture): In bounded capacity, the sender must wait only if the link is full. If the link is not full, the send is non-blocking.\n" +
            "Step 1: Calculate the available slots.\n" +
            "  Available slots = capacity - current = 10 - 4 = 6 messages\n" +
            "Step 2: Conclusion for the producer.\n" +
            "  The producer can add 6 more messages without waiting.\n" +
            "Step 3: Behavior when the buffer becomes full.\n" +
            "  Once the buffer reaches its capacity of 10 messages, the producer must wait (blocking send) until the consumer removes at least one message and frees a slot.\n" +
            "Final answer: 6 messages can be added without waiting; when the buffer is full, the producer blocks.",
          tags: ["Buffering", "Bounded Capacity", "Calculation"],
          ref: "Lecture 4 — Slide 36 (Buffering)",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. In a direct communication system, how many communication links exist among 5 processes (P1, P2, P3, P4, P5), assuming each pair has exactly one link?",
          translation:
            "في نظام اتصال مباشر، كم communication link موجود بين 5 عمليات (P1, P2, P3, P4, P5)، بافتراض أن كل زوج له link واحد فقط؟",
          answer:
            "Given:\n" +
            "  Number of processes (n) = 5\n" +
            "Rule (from lecture): In direct communication, between each pair of processes there exists exactly one link.\n" +
            "Formula: The number of unique pairs among n processes is n × (n − 1) / 2.\n" +
            "Step 1: Apply the formula.\n" +
            "  Number of links = n × (n − 1) / 2 = 5 × (5 − 1) / 2 = 5 × 4 / 2 = 20 / 2 = 10\n" +
            "Step 2: List the pairs to verify.\n" +
            "  (P1,P2), (P1,P3), (P1,P4), (P1,P5),\n" +
            "  (P2,P3), (P2,P4), (P2,P5),\n" +
            "  (P3,P4), (P3,P5),\n" +
            "  (P4,P5)\n" +
            "  Total = 4 + 3 + 2 + 1 = 10\n" +
            "Final answer: There are exactly 10 communication links among the 5 processes.",
          tags: ["Direct Communication", "Communication Link", "Calculation"],
          ref: "Lecture 4 — Slide 30 (Direct Communication)",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. Three processes P1, P2, and P3 share a single mailbox A. P1 sends a message to A, while P2 and P3 both attempt to receive from A. Based on the lecture, list the three solutions to determine who receives the message, and explain what each solution does.",
          translation:
            "ثلاث عمليات P1, P2, P3 تتشارك mailbox واحد A. P1 يرسل رسالة إلى A، بينما P2 و P3 يحاولان الاستقبال من A. بناءً على المحاضرة، اذكر الحلول الثلاثة لتحديد من يستقبل الرسالة، واشرح ماذا يفعل كل حل.",
          answer:
            "Given:\n" +
            "  Mailbox A is shared by P1, P2, P3.\n" +
            "  P1 sends a message; P2 and P3 attempt to receive.\n" +
            "  Problem: who gets the message?\n" +
            "Rule (from lecture): The three solutions are:\n" +
            "Solution 1: Allow a link to be associated with at most two processes.\n" +
            "  Effect: Only one of P2 or P3 can be associated with the link along with P1, so only one of them receives.\n" +
            "Solution 2: Allow only one process at a time to execute a receive operation.\n" +
            "  Effect: P2 or P3 is allowed to receive first (mutual exclusion on receive); the other must wait or get nothing.\n" +
            "Solution 3: Allow the system to select arbitrarily the receiver.\n" +
            "  Effect: The system picks either P2 or P3 arbitrarily, and the sender (P1) is then notified who the receiver was.\n" +
            "Final answer: The three solutions are (1) two-process-only links, (2) one-receive-at-a-time, and (3) arbitrary system selection with sender notification.",
          tags: ["Indirect Communication", "Mailbox Sharing", "Calculation"],
          ref: "Lecture 4 — Slide 34 (Indirect Communication)",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. Consider a zero-capacity communication link between a sender S and a receiver R. If S issues 3 send operations in quick succession, how many of these sends can complete immediately, and what is the state of S after each send? Explain using the concept of rendezvous.",
          translation:
            "اعتبر communication link بسعة صفر (zero capacity) بين مرسل S ومستقبل R. إذا أصدر S 3 عمليات send متتالية وسريعة، كم من هذه العمليات يمكن أن تكتمل فورًا، وما هي حالة S بعد كل send؟ اشرح باستخدام مفهوم rendezvous.",
          answer:
            "Given:\n" +
            "  Link capacity = 0 messages (zero capacity)\n" +
            "  Sender S performs 3 send operations in succession.\n" +
            "Rule (from lecture): In zero capacity, the sender must wait for the receiver (rendezvous). This means blocking send and blocking receive.\n" +
            "Step 1: Analyze the first send.\n" +
            "  S issues send #1.\n" +
            "  Because the link has zero capacity, the message cannot be queued.\n" +
            "  S must block (wait) until R physically receives the message.\n" +
            "  State of S after send #1: blocked (waiting for R to receive).\n" +
            "Step 2: Analyze the second send.\n" +
            "  S cannot proceed to send #2 until R has received send #1 and S has been unblocked.\n" +
            "  Therefore send #2 cannot even start until send #1 completes.\n" +
            "Step 3: Analyze the third send.\n" +
            "  Same logic: send #3 cannot start until send #2 completes.\n" +
            "Step 4: Total sends completed immediately.\n" +
            "  Number of sends that complete immediately = 0.\n" +
            "  All sends require rendezvous with R before completion.\n" +
            "Concept of rendezvous: rendezvous means the sender and receiver must meet at the same instant for the message to be transferred, because there is no buffer to hold the message in the meantime.\n" +
            "Final answer: 0 sends complete immediately; S blocks on the first send and waits for R; subsequent sends can only proceed after the previous rendezvous completes.",
          tags: ["Buffering", "Zero Capacity", "Rendezvous", "Calculation"],
          ref: "Lecture 4 — Slide 36 (Buffering)",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. Suppose a bounded-capacity link has a maximum of n = 8 messages. The producer adds 8 messages (link is now full), then the consumer removes 3 messages. How many messages are now in the link, and how many more can the producer add without waiting?",
          translation:
            "افترض bounded-capacity link بحد أقصى n = 8 رسائل. المنتج يضيف 8 رسائل (الـ link الآن ممتلئ)، ثم المستهلك يزيل 3 رسائل. كم رسالة الآن في الـ link، وكم رسالة إضافية يمكن للمنتج إضافتها دون انتظار؟",
          answer:
            "Given:\n" +
            "  Link capacity (n) = 8 messages\n" +
            "  Initial messages added by producer = 8 (link is full)\n" +
            "  Messages removed by consumer = 3\n" +
            "Rule: In bounded capacity, the producer waits only when the link is full. As soon as a slot is freed, the producer can send again (non-blocking while space is available).\n" +
            "Step 1: Calculate current number of messages in the link.\n" +
            "  Current = added - removed = 8 - 3 = 5 messages\n" +
            "Step 2: Calculate available slots.\n" +
            "  Available = capacity - current = 8 - 5 = 3 slots\n" +
            "Step 3: Conclusion.\n" +
            "  The producer can add 3 more messages without waiting.\n" +
            "  After adding those 3 messages, the link will be full again (8 messages) and the producer must then block.\n" +
            "Final answer: There are currently 5 messages in the link, and the producer can add 3 more messages without waiting.",
          tags: ["Buffering", "Bounded Capacity", "Calculation"],
          ref: "Lecture 4 — Slide 36 (Buffering)",
          likely: "medium",
        },
      ],
    },
  ],
});
