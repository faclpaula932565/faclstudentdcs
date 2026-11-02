/* بيانات مادة: هندسة البرمجيات (software-engineering)
   - المحاضرات (PDF) في lectures/  والأسئلة في questions/
   - المسارات دايمًا من جذر المشروع: datenew/subjects/software-engineering/lectures/lec-01.pdf
   - انسخي شكل المحاضرة/الأسئلة من مادة شغالة عندك (دليل صاحب المنصة، الخطوة 4 و5) */
subjects.push({
  name: "هندسة البرمجيات",
  en: "Software Engineering",
  icon: "🏗️",
  slug: "software-engineering",
  // lectures: [
  //   /* { t:"المحاضرة 1 — العنوان", d:"وصف", id:"lec-01",
  //        pdf:"datenew/subjects/software-engineering/lectures/lec-01.pdf", questions:[] } */
  // ]
  lectures: [
    {
      t: "المحاضرة الأولى — الفصل الأول: مقدمة في هندسة البرمجيات",
      d: "مقدمة في هندسة البرمجيات ونماذج دورة الحياة SDLC.",
      id: "software-engineering-lec-01",
      pdf: "datenew/subjects/software-engineering/lectures/Software Engineering Chapter 1 Lecture 1.pdf",
      pdf2: "datenew/subjects/software-engineering/questions/Questions on each lecture/SE_Chapter1_Section1.1_Questions.pdf",
      // فئات روابط منظمة مخصصة للفصل الأول (Chapter 1: Introduction) من كتاب Software Engineering - Ian Sommerville (10th Edition)
      notes:
        "الأسئلة المطلوبة من الكتاب:  1 , 2  ,3, 5 , 6 , 10  ,ال علينا في الفصل دي   1.1 Professional software development ",

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لمفاهيم الفصل الأول من Sommerville: تعريف هندسة البرمجيات، خصائص السوفت وير الجيد، والأنشطة الأساسية",
          links: [
            {
              t: "دورة هندسة البرمجيات بالعربي - Chapter 1 Introduction",
              d: "كورس عربي شامل يغطي: تعريف Software Engineering، الفرق بين SE و CS، خصائص البرمجيات الجيدة (Maintainability, Dependability, Efficiency)، والأنشطة الأساسية الأربعة من فديو 1 الي 8",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PL4mqzqquSRgaJ9XMQMUvMQjPyllD1xY5f",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "CS251 Software Engineering 1 - بالعربي",
              d: "محاضرات جامعية عربية: مقدمة في هندسة البرمجيات، Software Products (Generic vs Customized)، و Application Types",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLsnvpvHuTUbC-yJkvcf-Stp_kLwfesnn-",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "مقدمة في هندسة البرمجيات (الأجزاء 1 - 4) - د. محمد المدهون",
              d: "شرح كامل لمقدمة هندسة البرمجيات من كتاب Sommerville: التعريفات، المصطلحات الأساسية، والأخلاقيات",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://youtube.com/playlist?list=PLSdxbt9aypHLpUEjVa96utjc_lcDndJ8K&si=_12REw8yZYYYPJpQ",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Software Engineering - د. أحمد العقيد (المحاضرة الأولى)",
              d: "المحاضرة الأولى: مقدمة شاملة في هندسة البرمجيات والمفاهيم الأساسية للمادة",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🎬 مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=Kbt0cfPxTO8",
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
            "المحاضرة الرسمية من مؤلف الكتاب + مراجع عالمية مُتحقّق منها تطابق محتوى الفصل الأول",
          links: [
            {
              t: "Chapter 1 — Software Engineering (Ian Sommerville Official)",
              d: "الشرح المباشر المطابق للكتاب: Professional Software Development، Essential Attributes of Good Software، Ethics، والـ 4 Case Studies (Insulin Pump, Mentcare, Weather Station, iLearn)",
              icon: "🌍",
              actions: [
                {
                  label: "🎬 المحاضرة المباشرة",
                  url: "https://www.youtube.com/watch?v=GVDsxArvG2A",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Gate Smashers - Software Engineering Complete Course",
              d: "شرح شامل بالإنجليزية: SE Fundamentals، Software Attributes، Types of Software، و SE vs CS",
              icon: "🌍",
              actions: [
                {
                  label: "📖 Playlist كامل",
                  url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6Xup8p",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
        {
          category: "كل شي يخص السكشن",
          icon: "💻",
          description:
            "حلول وشرح تمارين الفصل الأول (Software Engineering Exercises).",
          links: [
            {
              t: "حلول وشرح تمارين Chapter 1",
              d: "شرح مبسط بالعربي لأهم مفاهيم هندسة البرمجيات وإجابات التمارين الـ 10 من كتاب Sommerville.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔍 عرض الملف",
                  url: "https://drive.google.com/drive/folders/1u-6l9DA9B123kEdBcPP_cTbIFv_BXDFu?usp=drive_link",
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
            "المراجع الرسمية للكتاب + مقالات تغطي نفس مفاهيم الفصل الأول",
          links: [
            {
              t: "Sommerville Official Website - Slides, Videos & Instructor Guide",
              d: "الموقع الرسمي للكتاب: Presentations لكل فصل، فيديوهات المؤلف، Instructor's Guide، و Supplements — **المرجع الأول**",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://software-engineering-book.com/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "GeeksforGeeks - Introduction to Software Engineering",
              d: "يغطي: تعريف SE، Objectives (Maintainability, Efficiency, Reliability, Correctness) — مطابق للـ Essential Attributes في الكتاب",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/software-engineering/software-engineering-introduction-to-software-engineering/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "TutorialsPoint - Software Engineering Tutorial",
              d: "مرجع منظم: SE Overview، SDLC، Software Design — لتعزيز الفهم العام",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح الدرس",
                  url: "https://www.tutorialspoint.com/software_engineering/index.htm",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },
        {
          category: "Case Studies والأخلاقيات",
          icon: "🔧",
          description:
            "دراسات الحالة الأربعة المذكورة في الفصل + ميثاق أخلاقيات المهنة",
          links: [
            {
              t: "Sommerville Case Studies (Insulin Pump, Mentcare, Weather Station, iLearn)",
              d: "التوثيق الرسمي لدراسات الحالة الأربعة الأساسية المذكورة في نهاية الفصل الأول + Airbus 340 و Ariane 5 — **مطابق تماماً للملف**",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح دراسات الحالة",
                  url: "https://software-engineering-book.com/case-studies/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "ACM Code of Ethics and Professional Conduct",
              d: "الميثاق الرسمي لأخلاقيات مهنة الكمبيوتر: Confidentiality, Competence, IP Rights — المذكور في قسم 1.2 Software Engineering Ethics",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الميثاق",
                  url: "https://www.acm.org/code-of-ethics",
                  type: "view",
                  color: "orange",
                },
              ],
            },
          ],
        },
      ],

      // ═══════════════════════════════════════════════════════════════════
      //  مادة: Software Engineering — هندسة البرمجيات
      //  المسار: datenew/software-engineering/software-engineering.js
      //  المرجع: Sommerville — Software Engineering (Chapter 1)
      //  الفهرس: subjects-index.js → { slug: "software-engineering" }
      // ═══════════════════════════════════════════════════════════════════

      questions: [
        // ═══════════════════════════════════════════════════════
        // MCQ
        // ═══════════════════════════════════════════════════════
        {
          q: "According to the text, what is the key distinction of professional software compared to software written by hobbyists?",
          options: [
            "It is written faster",
            "It is intended for use by someone apart from its developer, and is usually developed by teams",
            "It never needs documentation",
            "It is always open-source",
          ],
          correct: 1,
          translation:
            "حسب النص، ما الفرق الجوهري بين البرمجيات الاحترافية والبرمجيات التي يكتبها الهواة؟",
          explanation:
            "البرمجيات الاحترافية موجهة للاستخدام من شخص آخر غير المطوّر، وعادةً تُطوَّر بواسطة فرق — مش فرد واحد.",
        },
        {
          q: "When talking about software engineering, 'software' refers to:",
          options: [
            "Only the compiled executable program",
            "The programs plus associated documentation, libraries, support websites, and configuration data",
            "Only the source code",
            "Only the user interface",
          ],
          correct: 1,
          translation: "عند الحديث عن هندسة البرمجيات، 'البرمجيات' تشير إلى:",
          explanation:
            "مش بس البرنامج المترجم — كمان التوثيق والمكتبات ومواقع الدعم وبيانات الإعداد. كل ده جزء من 'البرمجيات'.",
        },
        {
          q: "What is the essential difference between Generic products and Customized (bespoke) software?",
          options: [
            "Generic products are always more expensive",
            "In generic products the developing organization controls the specification; in customized software the buying organization controls the specification",
            "Customized software is sold on the open market",
            "There is no real difference between them",
          ],
          correct: 1,
          translation:
            "ما الفرق الجوهري بين المنتجات العامة (Generic) والبرمجيات المخصصة (Customized)؟",
          explanation:
            "الفرق الأساسي في مين بيتحكم في المواصفات: المنتج العام المطوّر بيتحكم، والمخصص العميل (المشتري) بيتحكم.",
        },
        {
          q: "Which of the following is given as an example of a Generic software product?",
          options: [
            "An air traffic control system built for a specific customer",
            "A word processor sold on the open market",
            "A control system commissioned for a particular electronic device",
            "A system written to support one company's specific business process",
          ],
          correct: 1,
          translation: "أي مما يلي مثال على منتج برمجي عام (Generic)؟",
          explanation:
            "معالج النصوص المباع في السوق المفتوح — منتج عام بيتباع لأي عميل عايز يشتريه. باقي الأمثلة برمجيات مخصصة.",
        },
        {
          q: "Enterprise Resource Planning (ERP) systems such as those from SAP and Oracle are given as an example of:",
          options: [
            "Pure customized software only",
            "Pure generic software only",
            "The blurring line between generic and customized products, where a generic base is adapted for a company",
            "Embedded control systems",
          ],
          correct: 2,
          translation:
            "أنظمة تخطيط موارد المؤسسات (ERP) زي SAP و Oracle أمثلة على:",
          explanation:
            "الخط الفاصل بين العام والمخصص بقى ضبابي — أنظمة ERP مبنية على قاعدة عامة بيتم تكييفها لكل شركة حسب احتياجاتها.",
        },
        {
          q: "According to the text, the quality of professional software must take into account:",
          options: [
            "Only what the software does functionally",
            "Only the price paid for the software",
            "The software's behavior while executing, and the structure and organization of the system and its documentation",
            "Only the programming language used",
          ],
          correct: 2,
          translation:
            "حسب النص، جودة البرمجيات الاحترافية يجب أن تأخذ في الاعتبار:",
          explanation:
            "مش بس الوظائف — كمان سلوك البرنامج أثناء التنفيذ، وبنية النظام وتنظيمه وتوثيقه. الجودة شاملة.",
        },
        {
          q: "How does the book define 'software engineering'?",
          options: [
            "A branch of mathematics concerned with algorithms",
            "An engineering discipline concerned with all aspects of software production from early specification through to maintaining the system after it is in use",
            "The study of computer hardware design",
            "A marketing process for selling software products",
          ],
          correct: 1,
          translation: "كيف يعرّف الكتاب 'هندسة البرمجيات'؟",
          explanation:
            "تخصص هندسي بيهتم بكل جوانب إنتاج البرمجيات — من المواصفات المبكرة لصيانة النظام بعد الاستخدام.",
        },
        {
          q: "According to Figure 1.1, what are the four fundamental software engineering activities?",
          options: [
            "Coding, testing, debugging, deployment",
            "Software specification, software development, software validation, software evolution",
            "Planning, designing, marketing, selling",
            "Analysis, synthesis, compilation, execution",
          ],
          correct: 1,
          translation:
            "حسب الشكل 1.1، ما أنشطة هندسة البرمجيات الأربعة الأساسية؟",
          explanation:
            "المواصفات (Specification) + التطوير (Development) + التحقق (Validation) + التطور (Evolution).",
        },
        {
          q: "Per Figure 1.1, roughly what percentage of software costs are development costs versus testing costs?",
          options: [
            "50% development, 50% testing",
            "Roughly 60% development, 40% testing",
            "90% development, 10% testing",
            "20% development, 80% testing",
          ],
          correct: 1,
          translation:
            "حسب الشكل 1.1، تقريباً كام في المية تكاليف التطوير مقابل تكاليف الاختبار؟",
          explanation:
            "حوالي 60% تطوير و40% اختبار — الاختبار بيمثل جزء كبير من التكلفة الإجمالية.",
        },
        {
          q: "According to Figure 1.1, what is the difference between software engineering and computer science?",
          options: [
            "They are exactly the same field",
            "Computer science focuses on theory and fundamentals; software engineering is concerned with the practicalities of developing and delivering useful software",
            "Computer science only studies hardware",
            "Software engineering has no relation to computer science",
          ],
          correct: 1,
          translation:
            "حسب الشكل 1.1، ما الفرق بين هندسة البرمجيات وعلوم الحاسب؟",
          explanation:
            "علوم الحاسب بتركز على النظرية والأساسيات، وهندسة البرمجيات بتهتم بالجانب العملي لتطوير وتسليم برمجيات مفيدة.",
        },
        {
          q: "According to Figure 1.1, what key challenges face software engineering?",
          options: [
            "Coping with increasing diversity, demands for reduced delivery times, and developing trustworthy software",
            "Only reducing the cost of hardware",
            "Only writing faster compilers",
            "Only training more programmers",
          ],
          correct: 0,
          translation:
            "حسب الشكل 1.1، ما التحديات الرئيسية التي تواجه هندسة البرمجيات؟",
          explanation:
            "التعامل مع التنوع المتزايد + المطالب بتقليل أوقات التسليم + تطوير برمجيات موثوقة.",
        },
        {
          q: "Which set of attributes are listed in Figure 1.2 as essential characteristics of a professional software system?",
          options: [
            "Acceptability, Dependability and security, Efficiency, Maintainability",
            "Speed, Color, Size, Popularity",
            "Price, Marketing, Branding, Packaging",
            "Portability, Novelty, Simplicity, Humor",
          ],
          correct: 0,
          translation:
            "أي مجموعة صفات مذكورة في الشكل 1.2 كخصائص أساسية لنظام برمجي احترافي؟",
          explanation:
            "القبول (Acceptability) + الاعتمادية والأمان + الكفاءة + القابلية للصيانة — أربع صفات أساسية.",
        },
        {
          q: "According to Figure 1.2, what does 'Maintainability' mean for professional software?",
          options: [
            "The software should never be changed after release",
            "The software should be written so it can evolve to meet the changing needs of customers",
            "The software should only run on one type of machine",
            "The software must be free of charge",
          ],
          correct: 1,
          translation:
            "حسب الشكل 1.2، ماذا تعني 'القابلية للصيانة' للبرمجيات الاحترافية؟",
          explanation:
            "البرنامج لازم يُكتب بطريقة تسمح بتطويره عشان يلبي احتياجات العملاء المتغيرة — مش يتجمد بعد الإصدار.",
        },
        {
          q: "Section 1.1.1 states that software engineering involves two key phrases in its definition. What is the first?",
          options: [
            "Marketing strategy",
            "Engineering discipline",
            "Programming language",
            "Database design",
          ],
          correct: 1,
          translation:
            "القسم 1.1.1 ينص على أن هندسة البرمجيات تتضمن عبارتين مفتاحيتين في تعريفها. ما الأولى؟",
          explanation:
            "'التخصص الهندسي' (Engineering discipline) — أول عبارة في التعريف.",
        },
        {
          q: "What does the phrase 'Engineering discipline' imply, as explained in section 1.1.1?",
          options: [
            "Engineers must always use the newest tools available",
            "Engineers apply theories, methods, and tools selectively, and work within organizational and financial constraints",
            "Engineers never make compromises",
            "Engineers only follow fixed rules with no creativity",
          ],
          correct: 1,
          translation:
            "ماذا تعني عبارة 'التخصص الهندسي' كما هو موضح في القسم 1.1.1؟",
          explanation:
            "المهندسون بيطبقوا النظريات والأساليب والأدوات بشكل انتقائي، وبيشتغلوا في إطار قيود تنظيمية ومالية.",
        },
        {
          q: "What does 'All aspects of software production' mean in the definition of software engineering?",
          options: [
            "Only the coding phase",
            "Only the testing phase",
            "It includes technical development as well as project management, and the development of supporting tools, methods, and theories",
            "Only the marketing phase",
          ],
          correct: 2,
          translation:
            "ماذا تعني 'كل جوانب إنتاج البرمجيات' في تعريف هندسة البرمجيات؟",
          explanation:
            "بتشمل التطوير التقني + إدارة المشروع + تطوير الأدوات والأساليب والنظريات الداعمة — مش بس مرحلة واحدة.",
        },
        {
          q: "According to the text, why is software engineering important? (Reason 1)",
          options: [
            "Individuals and society increasingly rely on advanced software systems, so reliable and trustworthy systems must be produced economically and quickly",
            "It makes software more expensive",
            "It is a legal requirement in every country",
            "It eliminates the need for programmers",
          ],
          correct: 0,
          translation: "حسب النص، لماذا هندسة البرمجيات مهمة؟ (السبب الأول)",
          explanation:
            "الأفراد والمجتمع بيعتمدوا بشكل متزايد على أنظمة برمجية متقدمة، فلازم نظم موثوقة تُنتَج اقتصاديًا وبسرعة.",
        },
        {
          q: "According to the text, why is software engineering important? (Reason 2)",
          options: [
            "It is usually cheaper in the long run than treating software development as a personal programming project",
            "It guarantees zero bugs",
            "It removes the need for documentation",
            "It replaces the need for computer science knowledge",
          ],
          correct: 0,
          translation: "حسب النص، لماذا هندسة البرمجيات مهمة؟ (السبب الثاني)",
          explanation:
            "أرخص على المدى الطويل من التعامل مع تطوير البرمجيات كمشروع برمجة شخصي — لأنها بتقلل الأخطاء وتكاليف الصيانة.",
        },
        {
          q: "What is a 'software process' as defined in the text?",
          options: [
            "A single line of code",
            "A sequence of activities that leads to the production of a software product",
            "A hardware component",
            "A type of programming language",
          ],
          correct: 1,
          translation:
            "ما هي 'العملية البرمجية' (Software Process) كما هي معرّفة في النص؟",
          explanation:
            "تسلسل من الأنشطة يؤدي لإنتاج منتج برمجي — مش سطر كود ولا مكون عتاد.",
        },
        {
          q: "How does the text distinguish software engineering from computer science?",
          options: [
            "Computer science theory is often most applicable to relatively small programs, while software engineering deals with practical problems of producing software",
            "Computer science is only about hardware",
            "They are identical disciplines with no differences",
            "Software engineering does not require any computer science knowledge",
          ],
          correct: 0,
          translation: "كيف يميّز النص بين هندسة البرمجيات وعلوم الحاسب؟",
          explanation:
            "نظرية علوم الحاسب غالباً بتُطبَّق على برامج صغيرة نسبيًا، بينما هندسة البرمجيات بتتعامل مع المشاكل العملية لإنتاج البرمجيات.",
        },
        {
          q: "How is software engineering related to system engineering?",
          options: [
            "They are unrelated fields",
            "System engineering covers hardware development, policy and process design, and system deployment, of which software engineering is a part",
            "System engineering is a subset of software engineering",
            "System engineering focuses only on marketing",
          ],
          correct: 1,
          translation:
            "ما علاقة هندسة البرمجيات بهندسة النظم (System Engineering)؟",
          explanation:
            "هندسة النظم بتشمل تطوير العتاد + تصميم السياسات والعمليات + نشر النظام، وهندسة البرمجيات جزء منها.",
        },
        {
          q: "Which of the following is listed as one of the four issues affecting many different types of software (Heterogeneity, Business and social change, Security and trust, Scale)?",
          options: [
            "Heterogeneity — the need to operate across different types of computers, mobile devices, and legacy systems",
            "Font selection",
            "Color theory",
            "Marketing budgets",
          ],
          correct: 0,
          translation:
            "أي مما يلي مذكور كواحد من القضايا الأربعة التي تؤثر على أنواع مختلفة من البرمجيات؟",
          explanation:
            "التباين (Heterogeneity) — الحاجة للتشغيل عبر أنواع مختلفة من الحواسيب والأجهزة المحمولة والأنظمة القديمة.",
        },
        {
          q: "According to section 1.1.2, what determines which software engineering methods and techniques are most important?",
          options: [
            "The programmer's personal preference only",
            "The type of application being developed",
            "The price of the software",
            "The country where the company is based",
          ],
          correct: 1,
          translation:
            "حسب القسم 1.1.2، ما الذي يحدد أي طرق وتقنيات هندسة البرمجيات هي الأهم؟",
          explanation:
            "نوع التطبيق الذي يتم تطويره — كل نوع تطبيق له متطلباته وأساليبه المناسبة.",
        },
        {
          q: "Which of the following is given as an example of a 'Stand-alone application'?",
          options: [
            "An e-commerce web application",
            "Office applications on a PC or CAD programs",
            "A billing system that processes data in batches",
            "A web service accessed by many remote clients",
          ],
          correct: 1,
          translation:
            "أي مما يلي مذكور كمثال على 'تطبيق مستقل' (Stand-alone)؟",
          explanation:
            "تطبيقات الأوفيس على الحاسوب الشخصي أو برامج CAD — بتشتغل محليًا على الجهاز.",
        },
        {
          q: "Which type of system is described as controlling and managing hardware devices, such as software in a mobile phone or a car's antilock braking system?",
          options: [
            "Batch processing systems",
            "Entertainment systems",
            "Embedded control systems",
            "Systems of systems",
          ],
          correct: 2,
          translation:
            "أي نوع نظام موصوف بأنه يتحكم ويدير أجهزة العتاد، زي البرامج في هاتف محمول أو نظام الفرامل المانعة للانغلاق في السيارة؟",
          explanation:
            "أنظمة التحكم المدمجة (Embedded Control Systems) — بتُدمج في الأجهزة للتحكم فيها.",
        },
        {
          q: "What is a 'Batch processing system', as described in the text?",
          options: [
            "A system for playing games",
            "A business system designed to process large numbers of individual inputs to create corresponding outputs, such as phone billing",
            "A system that only runs once",
            "A system used exclusively for scientific simulation",
          ],
          correct: 1,
          translation:
            "ما هو 'نظام المعالجة بالدفعات' (Batch Processing) كما هو موصوف في النص؟",
          explanation:
            "نظام أعمال مصمم لمعالجة أعداد كبيرة من المدخلات الفردية لإنتاج مخرجات مقابلة، زي فواتير الهاتف.",
        },
        {
          q: "What are 'Systems of systems', as defined in the text?",
          options: [
            "Simple stand-alone mobile apps",
            "Systems used in enterprises that are composed of a number of other software systems, such as generic products combined with specially written software",
            "A single embedded controller",
            "A batch billing program only",
          ],
          correct: 1,
          translation:
            "ما هي 'أنظمة الأنظمة' (Systems of Systems) كما هي معرّفة في النص؟",
          explanation:
            "أنظمة مستخدمة في المؤسسات تتكون من عدد من الأنظمة البرمجية الأخرى — زي منتجات عامة مدمجة مع برامج مكتوبة خصيصًا.",
        },
        {
          q: "Why does an embedded control system in an automobile need extensive verification and validation, according to the text?",
          options: [
            "Because it is cheap and easy to update after installation",
            "Because it is safety-critical and burned into ROM, making it very expensive to change after installation",
            "Because it has no impact on safety",
            "Because users interact with it constantly",
          ],
          correct: 1,
          translation:
            "لماذا يحتاج نظام التحكم المدمج في السيارة إلى تحقق واختبار مكثفين حسب النص؟",
          explanation:
            "لأنه حرج من ناحية السلامة ومحروق في ROM، وده بيخلي تغييره بعد التركيب مكلفًا جدًا.",
        },
        {
          q: "Which software engineering fundamentals does the text say apply to ALL types of software systems?",
          options: [
            "Only testing and debugging",
            "A managed development process, dependability and performance, managing requirements, and effective reuse of existing resources",
            "Only marketing and sales strategy",
            "Only programming language choice",
          ],
          correct: 1,
          translation:
            "أي أساسيات هندسة البرمجيات يقول النص إنها تنطبق على كل أنواع الأنظمة البرمجية؟",
          explanation:
            "عملية تطوير مُدارة + الاعتمادية والأداء + إدارة المتطلبات + إعادة الاستخدام الفعّالة للموارد الموجودة.",
        },
        {
          q: "According to section 1.1.3, around what year did the web start evolving so that more functionality was added to browsers, enabling web-based systems?",
          options: ["1990", "Around 2000", "2010", "2020"],
          correct: 1,
          translation:
            "حسب القسم 1.1.3، في أي سنة تقريبًا بدأ الويب يتطور بحيث تُضاف وظائف أكثر للمتصفحات، مما مكّن الأنظمة القائمة على الويب؟",
          explanation:
            "حوالي سنة 2000 — بداية عصر الويب 2.0 وإضافة وظائف تفاعلية أكثر للمتصفحات.",
        },
        {
          q: "What does 'software as a service' mean, as introduced in section 1.1.3?",
          options: [
            "Software that must be installed on every PC individually",
            "The delivery of web-based system products such as Google Apps and Microsoft Office 365, where software runs on remote clouds instead of local servers",
            "A service that repairs broken software",
            "A subscription only for hardware maintenance",
          ],
          correct: 1,
          translation:
            "ماذا تعني 'البرمجيات كخدمة' (SaaS) كما وردت في القسم 1.1.3؟",
          explanation:
            "تسليم منتجات نظامية قائمة على الويب زي Google Apps و Office 365، حيث البرنامج بيشتغل على سحابات بعيدة بدل السيرفرات المحلية.",
        },
        {
          q: "Before the emergence of the web, how were most business applications organized, according to the text?",
          options: [
            "Highly distributed across the world",
            "Mostly monolithic, single programs running on single computers or clusters",
            "Entirely cloud-based",
            "Built using service-oriented architecture",
          ],
          correct: 1,
          translation:
            "قبل ظهور الويب، كيف كانت معظم تطبيقات الأعمال منظّمة حسب النص؟",
          explanation:
            "كانت في الأغلب كتلة واحدة (Monolithic) — برامج فردية تعمل على حاسوب واحد أو عنقود.",
        },
        {
          q: "Which of the following is listed as an effect of the web on software engineering for web-based systems?",
          options: [
            "Software reuse becoming the dominant approach for constructing web-based systems",
            "The complete disappearance of software specifications",
            "The elimination of incremental development",
            "A return to monolithic single-computer applications",
          ],
          correct: 0,
          translation:
            "أي مما يلي مذكور كتأثير للويب على هندسة البرمجيات للأنظمة القائمة على الويب؟",
          explanation:
            "إعادة استخدام البرمجيات (Software Reuse) بقت النهج السائد لبناء الأنظمة القائمة على الويب.",
        },
        {
          q: "According to the text, why is it now generally recognized as impractical to specify all requirements for web-based systems in advance?",
          options: [
            "Because such systems are always developed and delivered incrementally",
            "Because web-based systems never change once released",
            "Because users do not have any requirements",
            "Because specifications are illegal for web systems",
          ],
          correct: 0,
          translation:
            "حسب النص، لماذا أصبح من غير العملي تحديد كل متطلبات الأنظمة القائمة على الويب مسبقًا؟",
          explanation:
            "لأن هذه الأنظمة دائمًا تُطوَّر وتُسلَّم بشكل تدريجي (Incremental) — المتطلبات بتتطور مع الوقت.",
        },
        {
          q: "Which interface development technologies are mentioned as supporting rich interfaces within a web browser?",
          options: [
            "COBOL and Fortran",
            "AJAX and HTML5",
            "Assembly and C",
            "SQL and XML only",
          ],
          correct: 1,
          translation:
            "أي تقنيات تطوير واجهات مذكورة كداعمة للواجهات الغنية داخل متصفح الويب؟",
          explanation:
            "AJAX و HTML5 — تقنيات حديثة بتدعم واجهات غنية وتفاعلية داخل المتصفح.",
        },

        // ═══════════════════════════════════════════════════════
        // Essay
        // ═══════════════════════════════════════════════════════
        {
          type: "essay",
          q: "Explain the difference between Generic software products and Customized (bespoke) software, according to Section 1.1 of the textbook.",
          translation:
            "اشرح الفرق بين المنتجات البرمجية العامة (Generic) والبرمجيات المخصصة (Customized) حسب القسم 1.1 من الكتاب.",
          answer:
            "Generic products:\n" +
            "• Stand-alone systems produced by a development organization and sold on the open market to any customer able to buy them.\n" +
            "• Examples: mobile apps, PC software such as databases, word processors, drawing packages, project management tools, and 'vertical' applications like library information systems or accounting systems.\n" +
            "• The developing organization controls the software specification, so it can rethink what is to be developed if problems arise.\n\n" +
            "Customized (bespoke) software:\n" +
            "• Systems commissioned by and developed for a particular customer; a software contractor designs and implements the software especially for that customer.\n" +
            "• Examples: control systems for electronic devices, systems supporting a particular business process, air traffic control systems.\n" +
            "• The specification is developed and controlled by the buying organization, and developers must work to that specification.\n\n" +
            "Note: The distinction is becoming blurred, as many systems (e.g., ERP systems from SAP/Oracle) are now built from a generic base that is then adapted to a specific customer's needs.",
          tags: ["1.1", "Generic products", "Customized software"],
          ref: "Chapter 1 — Section 1.1",
        },
        {
          type: "essay",
          q: "According to Section 1.1.1, what is software engineering, and what are the two key phrases in its definition?",
          translation:
            "حسب القسم 1.1.1، ما هي هندسة البرمجيات، وما العبارتان المفتاحيتان في تعريفها؟",
          answer:
            "Definition:\n" +
            "Software engineering is an engineering discipline that is concerned with all aspects of software production, from the early stages of system specification through to maintaining the system after it has gone into use.\n\n" +
            "1. Engineering discipline:\n" +
            "• Engineers make things work by applying theories, methods, and tools selectively where appropriate.\n" +
            "• They also work within organizational and financial constraints, looking for solutions within these limits, and cannot be perfectionists.\n\n" +
            "2. All aspects of software production:\n" +
            "• Software engineering is not just about the technical process of development.\n" +
            "• It also includes activities such as software project management, and the development of tools, methods, and theories that support software development.",
          tags: ["1.1.1", "Software engineering definition"],
          ref: "Chapter 1 — Section 1.1.1",
        },
      ],
    },
    {
      t: "المحاضرة الثانية — الفصل الثاني: عمليات البرمجيات (Software Processes)",
      d: "مفاهيم الفصل الثاني: نماذج SDLC (Waterfall, Incremental, Reuse-oriented)، الأنشطة الأساسية الأربعة، التعامل مع التغيير (Prototyping & Incremental Delivery)، ونموذج CMMI.",
      id: "software-engineering-lec-02",
      pdf: "datenew/subjects/software-engineering/lectures/Software Engineering, 10th GLOBAL Edition - Chapter 2 - Software processes.pdf",
      pdf2: "datenew/subjects/software-engineering/questions/Questions on each lecture/SE_Chapter2_Sections2.1-2.2_Questions.pdf",
      // فئات روابط منظمة مخصصة للفصل الثاني (Chapter 1: Introduction) من كتاب Software Engineering - Ian Sommerville (10th Edition)
      notes:
        "الأسئلة المطلوبة من الكتاب:  1 , 3  , 4 , 6 , 8  ,ال علينا في الفصل دي  2.1 Software process models , 2.2 Process activities",
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لمفاهيم الفصل الثاني من Sommerville: نماذج عمليات البرمجيات، الأنشطة الأساسية، التعامل مع التغيير، وتحسين العمليات",
          links: [
            {
              t: "Software Engineering | Chapter 2 - Software processes  ",
              d: "شرح كامل لمفهوم Software Process، الأنشطة الأربعة الأساسية، ونماذج التطوير (Waterfall, Incremental, Reuse-oriented) فديو 9 الي 17",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://youtube.com/playlist?list=PL4mqzqquSRgaJ9XMQMUvMQjPyllD1xY5f&si=x04llH8nKxoNJTVU",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "هندسة البرمجيات Chapter 2 - د. محمد المدهون",
              d: "محاضرات جامعية عربية تشرح الفصل الثاني من كتاب Sommerville 10th Edition: نماذج SDLC، إدارة التغيير، والنماذج الأولية (Prototyping) من فديو 7 الي 9",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://youtube.com/playlist?list=PLSg6pyQoe5kI&si=DDBf84TRoHTZ3DRU",
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
            "المحاضرات الرسمية لمؤلف الكتاب Ian Sommerville والشروحات العالمية المعتمدة للفصل الثاني",
          links: [
            {
              t: "Plan-based and Agile Software Processes (Ian Sommerville Official)",
              d: "الشرح المباشر من مؤلف الكتاب للفرق بين العمليات القائمة على التخطيط والعمليات المرنة ونماذج SDLC العامة",
              icon: "🌍",
              actions: [
                {
                  label: "🎬 المحاضرة المباشرة",
                  url: "https://www.youtube.com/watch?v=YMbAdgb6pG8",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Fundamental Activities of Software Engineering (Ian Sommerville Official)",
              d: "محاضرة رسمية تشرح الأنشطة الأساسية الأربعة: Specification, Development, Validation, and Evolution",
              icon: "🌍",
              actions: [
                {
                  label: "🎬 المحاضرة المباشرة",
                  url: "https://www.youtube.com/watch?v=YMbAdgb6pG8",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "SWEG3301 Sommerville Chapter Two Software Processes",
              d: "شرح أكاديمي شامل لجميع محتويات الفصل الثاني وفق منهج Sommerville المعتمد في الجامعات العالمية",
              icon: "🌍",
              actions: [
                {
                  label: "📖 مشاهدة الشرح",
                  url: "https://www.youtube.com/watch?v=DybqiqW27h0",
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
            "المراجع الرسمية لكتاب Sommerville والمقالات التعليمية المعتمدة للفصل الثاني",
          links: [
            {
              t: "Sommerville Official Website - Chapter 2 Slides & Web Supplements",
              d: "الموقع الرسمي للكتاب: العروض التقديمية (PowerPoint)، ملحقات RUP والـ Spiral Model ومراجع الفصل الثاني",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://software-engineering-book.com/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "GeeksforGeeks - Software Processes in Software Engineering",
              d: "مقال تفصيلي يغطي: تعاريف Software Process، الأنشطة الأساسية، مقارنة SDLC Models (Waterfall, Agile, Scrum, DevOps)",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/software-engineering/software-processes-in-software-engineering/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "TutorialsPoint - Software Development Life Cycle (SDLC)",
              d: "مرجع منظم يغطي نماذج دورة حياة تطوير البرمجيات والأنشطة المرحلية بالتفصيل",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح الدرس",
                  url: "https://www.tutorialspoint.com/software_engineering/index.htm",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },
        // {
        //   category: "تحسين العمليات ومستويات النضج",
        //   icon: "🔧",
        //   description:
        //     "المراجع الخاصة بنماذج نضج العمليات (CMMI) والعمليات الموجهة للتغيير",
        //   links: [
        //     {
        //       t: "Sommerville Web Chapter - Rational Unified Process (RUP) & Spiral Model",
        //       d: "التوثيق المكمل من كتاب Sommerville لنموذج RUP ومستوياته الثلاثية ونموذج بوهم الحلزوني (Boehm's Spiral Model)",
        //       icon: "🔧",
        //       actions: [
        //         {
        //           label: "🌐 فتح المرجع",
        //           url: "https://software-engineering-book.com/web/rup/",
        //           type: "view",
        //           color: "blue",
        //         },
        //       ],
        //     },

        //   ],
        // },
      ],
      // ═══════════════════════════════════════════════════════════════════
      //  مادة: Software Engineering — هندسة البرمجيات
      //  المسار: datenew/software-engineering/software-engineering.js → lectures[1].questions
      //  المرجع: Sommerville — Software Engineering (Chapter 2)
      // ═══════════════════════════════════════════════════════════════════

      questions: [
        // ═══════════════════════════════════════════════════════
        // MCQ
        // ═══════════════════════════════════════════════════════
        {
          q: "A software process model (or Software Development Life Cycle, SDLC model) is best described as:",
          options: [
            "A simplified representation of a software process",
            "A complete and exhaustive description of every process activity",
            "A programming language",
            "A testing tool only",
          ],
          correct: 0,
          translation:
            "نموذج العملية البرمجية (أو نموذج دورة حياة تطوير البرمجيات SDLC) أفضل وصف له هو:",
          explanation:
            "تمثيل مبسّط لعملية برمجية — مش وصف كامل وشامل، ولا لغة برمجة، ولا أداة اختبار.",
        },
        {
          q: "Why does each process model only provide partial information about a process?",
          options: [
            "Because models are randomly generated",
            "Each model represents the process from a particular perspective, e.g., an activity model may not show the roles of people involved",
            "Because process models only apply to hardware",
            "Because process models are always outdated",
          ],
          correct: 1,
          translation:
            "لماذا يقدم كل نموذج عملية معلومات جزئية فقط عن العملية؟",
          explanation:
            "لأن كل نموذج يمثّل العملية من منظور معين — نموذج الأنشطة مثلاً مش بيوضح أدوار الأشخاص المشاركين.",
        },
        {
          q: "Which three general process models are covered in Section 2.1?",
          options: [
            "Spiral, V-model, and RUP only",
            "The waterfall model, incremental development, and integration and configuration",
            "Agile, Scrum, and Kanban",
            "Object-oriented, structured, and functional design",
          ],
          correct: 1,
          translation: "أي ثلاثة نماذج عملية عامة تُغطى في القسم 2.1؟",
          explanation:
            "نموذج الشلال (Waterfall) + التطوير التدريجي (Incremental) + التكامل والتهيئة (Integration and Configuration).",
        },
        {
          q: "What does the waterfall model do with the fundamental process activities of specification, development, validation, and evolution?",
          options: [
            "Represents them as separate, sequential process phases",
            "Runs them all in parallel",
            "Interleaves them continuously",
            "Removes validation entirely",
          ],
          correct: 0,
          translation:
            "ماذا يفعل نموذج الشلال بالأنشطة الأساسية: المواصفات، التطوير، التحقق، والتطور؟",
          explanation:
            "بيمثّلها كمراحل منفصلة ومتسلسلة — كل مرحلة تبدأ بعد انتهاء اللي قبلها.",
        },
        {
          q: "What does incremental development do with specification, development, and validation activities?",
          options: [
            "Keeps them strictly separate and sequential",
            "Skips validation until the very end",
            "Interleaves them, developing the system as a series of increasingly functional versions",
            "Performs them only once at the start",
          ],
          correct: 2,
          translation:
            "ماذا يفعل التطوير التدريجي بأنشطة المواصفات والتطوير والتحقق؟",
          explanation:
            "بيشبكهم مع بعض (Interleaves) — النظام بيتطور كسلسلة من الإصدارات المتزايدة الوظائف.",
        },
        {
          q: "What does the integration and configuration approach rely on?",
          options: [
            "Avoiding all software reuse",
            "A strictly sequential waterfall process",
            "The availability of reusable components or systems",
            "Writing every component from scratch",
          ],
          correct: 2,
          translation: "على ماذا يعتمد نهج التكامل والتهيئة؟",
          explanation:
            "على توفر مكونات أو أنظمة قابلة لإعادة الاستخدام — بيجمّعها بدل ما يكتب كل حاجة من الصفر.",
        },
        {
          q: "According to the text, what determines the right process model for a project?",
          options: [
            "Only the programming language chosen",
            "Only the preference of the lead programmer",
            "The customer and regulatory requirements, the environment where the software will be used, and the type of software being developed",
            "Only the size of the development team",
          ],
          correct: 2,
          translation: "حسب النص، ما الذي يحدد نموذج العملية المناسب للمشروع؟",
          explanation:
            "متطلبات العميل والجهات التنظيمية + بيئة استخدام البرنامج + نوع البرنامج المطوّر — ثلاث عوامل أساسية.",
        },
        {
          q: "Why is safety-critical software usually developed using a waterfall process?",
          options: [
            "Because safety-critical software never changes",
            "Because it is the cheapest approach",
            "Because waterfall requires no documentation",
            "Because lots of analysis and documentation is required before implementation begins",
          ],
          correct: 3,
          translation:
            "لماذا عادةً يُطوَّر البرنامج الحرج من ناحية السلامة باستخدام نموذج الشلال؟",
          explanation:
            "لأنه يتطلب تحليلاً وتوثيقاً كثيراً قبل بدء التنفيذ — خصوصاً تحليل السلامة والأمان لكل التصميم.",
        },
        {
          q: "According to the text, how are business systems increasingly being developed?",
          options: [
            "By configuring existing systems and integrating them to create a new system with the required functionality",
            "Always from scratch using the waterfall model",
            "Without any customer involvement",
            "Only through formal mathematical methods",
          ],
          correct: 0,
          translation: "حسب النص، كيف تُطوَّر أنظمة الأعمال بشكل متزايد؟",
          explanation:
            "بتهيئة أنظمة موجودة ودمجها لإنشاء نظام جديد بالوظائف المطلوبة — نهج إعادة الاستخدام.",
        },
        {
          q: "What does the Rational Unified Process (RUP) do?",
          options: [
            "Applies only to hardware engineering",
            "Brings together elements of all the general process models and supports prototyping and incremental delivery",
            "Replaces the need for any process model",
            "Is identical to the waterfall model",
          ],
          correct: 1,
          translation: "ماذا يفعل الـ RUP (عملية راشيونال الموحدة)؟",
          explanation:
            "بيجمع عناصر من كل نماذج العمليات العامة، ويدعم النماذج الأولية والتسليم التدريجي.",
        },
        {
          q: "The RUP is normally described from which three perspectives?",
          options: [
            "A hardware, software, and network perspective",
            "A testing, coding, and design perspective only",
            "A dynamic perspective, a static perspective, and a practice perspective",
            "A financial, legal, and marketing perspective",
          ],
          correct: 2,
          translation: "عادةً ما يوصف الـ RUP من أي ثلاث منظورات؟",
          explanation:
            "منظور ديناميكي (Dynamic) + منظور ثابت (Static) + منظور ممارسة (Practice).",
        },
        {
          q: "What are the four phases of the RUP?",
          options: [
            "Requirements, coding, debugging, and release",
            "Inception, elaboration, construction, and transition",
            "Planning, analysis, design, and testing",
            "Discovery, prototyping, scaling, and archiving",
          ],
          correct: 1,
          translation: "ما المراحل الأربعة للـ RUP؟",
          explanation:
            "البداية (Inception) + التفصيل (Elaboration) + البناء (Construction) + الانتقال (Transition).",
        },
        {
          q: "The first published model of the software development process was derived from:",
          options: [
            "Engineering process models used in large military systems engineering",
            "Object-oriented design principles",
            "Internet software engineering practices",
            "Agile manifesto principles",
          ],
          correct: 0,
          translation: "أول نموذج منشور لعملية تطوير البرمجيات اشتُق من:",
          explanation:
            "نماذج العمليات الهندسية المستخدمة في هندسة النظم العسكرية الكبيرة — الأصول التاريخية لنموذج الشلال.",
        },
        {
          q: "Why is the waterfall model also known as the 'software life cycle'?",
          options: [
            "Because every phase runs simultaneously",
            "Because it repeats infinitely",
            "Because of the cascade from one phase to another",
            "Because it was first used for websites",
          ],
          correct: 2,
          translation:
            "لماذا يُعرف نموذج الشلال أيضاً بـ 'دورة حياة البرمجيات'؟",
          explanation:
            "بسبب التتابع (Cascade) من مرحلة لأخرى — زي الشلال اللي بينزل من مستوى لمستوى.",
        },
        {
          q: "The waterfall model is described as an example of a:",
          options: [
            "Risk-driven process",
            "Reuse-driven process",
            "Test-driven process",
            "Plan-driven process",
          ],
          correct: 3,
          translation: "نموذج الشلال يُوصف كمثال على:",
          explanation:
            "عملية مدفوعة بالخطة (Plan-driven) — كل الأنشطة مخطط لها ومجدولة مسبقاً قبل بدء التطوير.",
        },
        {
          q: "What are the five stages of the waterfall model, in order?",
          options: [
            "Specification; prototyping; refactoring; release; archiving",
            "Design; coding; marketing; sales; support",
            "Requirements analysis and definition; system and software design; implementation and unit testing; integration and system testing; operation and maintenance",
            "Coding; testing; debugging; deployment; retirement",
          ],
          correct: 2,
          translation: "ما المراحل الخمس لنموذج الشلال بالترتيب؟",
          explanation:
            "تحليل وتعريف المتطلبات → تصميم النظام والبرمجيات → التنفيذ واختبار الوحدات → التكامل واختبار النظام → التشغيل والصيانة.",
        },
        {
          q: "In the waterfall model, what is normally the longest life-cycle phase?",
          options: [
            "Operation and maintenance",
            "Implementation and unit testing",
            "Requirements analysis and definition",
            "Integration and system testing",
          ],
          correct: 0,
          translation: "في نموذج الشلال، ما أطول مرحلة في دورة الحياة عادةً؟",
          explanation:
            "التشغيل والصيانة — لأن النظام بيفضل شغال لسنين بعد التسليم الأولي.",
        },
        {
          q: "Why do customers and developers sometimes prematurely freeze the software specification in a waterfall process?",
          options: [
            "Because it reduces testing time to zero",
            "Because freezing the specification is required by law",
            "Because changing documents at later stages requires customer approval and delays the overall process",
            "Because requirements never change in practice",
          ],
          correct: 2,
          translation:
            "لماذا يجمد العملاء والمطورون مواصفات البرنامج قبل أوانها أحياناً في عملية الشلال؟",
          explanation:
            "لأن تغيير المستندات في المراحل اللاحقة يتطلب موافقة العميل ويؤخر العملية الإجمالية — فبيفضلوا التجميد المبكر.",
        },
        {
          q: "According to the text, for which type of systems is the waterfall model appropriate? (choose the best single category)",
          options: [
            "Any system with changing requirements",
            "Systems developed informally by small teams",
            "Systems with no need for documentation",
            "Embedded systems where the software has to interface with hardware systems",
          ],
          correct: 3,
          translation:
            "حسب النص، لأي نوع من الأنظمة يكون نموذج الشلال مناسباً؟",
          explanation:
            "الأنظمة المدمجة حيث يجب أن يتفاعل البرنامج مع أنظمة العتاد — لأن العتاد ثابت والمتطلبات مستقرة.",
        },
        {
          q: "What is 'formal system development', mentioned as a variant of the waterfall model?",
          options: [
            "A method that skips specification entirely",
            "An approach where a mathematical model of a system specification is created and refined using mathematical transformations into executable code",
            "A purely visual, diagram-only design approach",
            "An informal agile technique with no documentation",
          ],
          correct: 1,
          translation:
            "ما هو 'تطوير النظام الرسمي' (Formal System Development) المذكور كتنويع لنموذج الشلال؟",
          explanation:
            "نهج بيتم فيه إنشاء نموذج رياضي لمواصفات النظام ثم تحويله عبر تحويلات رياضية لكود قابل للتنفيذ.",
        },
        {
          q: "Incremental development is based on the idea of:",
          options: [
            "Developing an initial implementation, getting feedback, and evolving the software through several versions",
            "Testing the system only after full development is complete",
            "Delivering only one final version with no feedback",
            "Writing complete documentation before any code is written",
          ],
          correct: 0,
          translation: "التطوير التدريجي يقوم على فكرة:",
          explanation:
            "تطوير تنفيذ أولي + الحصول على ملاحظات + تطوير البرنامج عبر عدة إصدارات — تطوير تكراري.",
        },
        {
          q: "In a plan-driven approach to incremental development, when are the system increments identified?",
          options: [
            "In advance",
            "Randomly during testing",
            "Only after the system is fully delivered",
            "They are never identified",
          ],
          correct: 0,
          translation:
            "في النهج المدفوع بالخطة للتطوير التدريجي، متى تُحدَّد زيادات النظام؟",
          explanation:
            "مسبقاً (In Advance) — كل الزيادات محددة في الخطة قبل البدء.",
        },
        {
          q: "In an agile approach to incremental development, how are later increments decided?",
          options: [
            "Early increments are identified, but later increments depend on progress and customer priorities",
            "They are decided purely by a random lottery",
            "Later increments are decided by a different company",
            "All increments are fixed in advance and never change",
          ],
          correct: 0,
          translation:
            "في النهج الرشيق (Agile) للتطوير التدريجي، كيف تُحدَّد الزيادات اللاحقة؟",
          explanation:
            "الزيادات المبكرة تُحدَّد، لكن الزيادات اللاحقة تعتمد على التقدم وأولويات العميل — مرونة أعلى.",
        },
        {
          q: "Incremental software development is better than a waterfall approach for systems:",
          options: [
            "Whose requirements are likely to change during the development process",
            "That have no functionality",
            "That require no customer feedback",
            "That will never be modified after release",
          ],
          correct: 0,
          translation: "التطوير التدريجي أفضل من نموذج الشلال للأنظمة التي:",
          explanation:
            "متطلباتها قابلة للتغيير أثناء عملية التطوير — لأن التطوير التدريجي بتعامل مع التغيير بسهولة أكبر.",
        },
        {
          q: "Which of the following is listed as a major advantage of incremental development over the waterfall model?",
          options: [
            "It removes the need for a development team",
            "It eliminates the need for testing",
            "The cost of implementing requirements changes is reduced",
            "It guarantees zero bugs",
          ],
          correct: 2,
          translation:
            "أي مما يلي مذكور كميزة رئيسية للتطوير التدريجي على نموذج الشلال؟",
          explanation:
            "تكلفة تنفيذ تغييرات المتطلبات بتقل — لأن التحليل والتوثيق اللي محتاج إعادة أقل.",
        },
        {
          q: "Why is it easier to get customer feedback with incremental development, according to the text?",
          options: [
            "Documentation replaces the need for any demonstration",
            "Feedback is collected only once a year",
            "Customers are not allowed to see the software until release",
            "Customers can comment on demonstrations of working software, which is easier to judge than design documents",
          ],
          correct: 3,
          translation:
            "لماذا يسهل الحصول على ملاحظات العميل مع التطوير التدريجي حسب النص؟",
          explanation:
            "لأن العميل يقدر يعلّق على عروض حية للبرنامج شغال — أسهل بكتير من الحكم على مستندات التصميم.",
        },
        {
          q: "From a management perspective, what is one problem with the incremental approach?",
          options: [
            "It produces too much documentation",
            "The process is not very visible, making it harder for managers to measure progress with regular deliverables",
            "It requires no planning at all",
            "It cannot be used for any business system",
          ],
          correct: 1,
          translation: "من منظور إداري، ما إحدى مشاكل النهج التدريجي؟",
          explanation:
            "العملية مش واضحة كفاية — صعب على المديرين قياس التقدم لأن مفيش مستندات منتظمة لكل نسخة.",
        },
        {
          q: "What tends to happen to system structure as new increments are added?",
          options: [
            "It automatically becomes cleaner",
            "It becomes impossible to test",
            "It stays exactly the same forever",
            "It tends to degrade, becoming messier as new functionality is added",
          ],
          correct: 3,
          translation: "ماذا يحدث عادةً لهيكل النظام مع إضافة زيادات جديدة؟",
          explanation:
            "بيتدهور — بيبقى أكتر فوضى مع إضافة وظائف جديدة. دي مشكلة معروفة في التطوير التدريجي.",
        },
        {
          q: "What do agile methods suggest to reduce structural degradation from incremental development?",
          options: [
            "Avoid testing to save time",
            "Regularly refactor (improve and restructure) the software",
            "Never modify the code after it is written",
            "Stop adding new increments after the second one",
          ],
          correct: 1,
          translation:
            "ماذا تقترح الطرق الرشيقة لتقليل التدهور الهيكلي الناتج عن التطوير التدريجي؟",
          explanation:
            "إعادة الهيكلة (Refactoring) بشكل دوري — تحسين وإعادة تنظيم الكود باستمرار.",
        },
        {
          q: "For large, complex, long-lifetime systems developed by different teams, what does incremental development's problems require?",
          options: [
            "A single developer working alone",
            "No planning at all",
            "Avoiding any architecture altogether",
            "A stable framework or architecture planned in advance, with clearly defined team responsibilities",
          ],
          correct: 3,
          translation:
            "للأنظمة الكبيرة المعقدة طويلة العمر التي تُطوَّر بواسطة فرق مختلفة، ماذا تتطلب مشاكل التطوير التدريجي؟",
          explanation:
            "إطار أو معمارية مستقرة مخطط لها مسبقاً + مسؤوليات واضحة لكل فريق — لازم هيكل يربط كل الفرق.",
        },
        {
          q: "What is the key difference between incremental development and incremental delivery?",
          options: [
            "Incremental delivery means no feedback is ever collected",
            "Incremental development does not necessarily mean delivering each increment to the customer, whereas incremental delivery means the software is used in real operational processes",
            "Incremental development always skips validation",
            "They are exactly the same concept",
          ],
          correct: 1,
          translation:
            "ما الفرق الجوهري بين التطوير التدريجي والتسليم التدريجي؟",
          explanation:
            "التطوير التدريجي مش بالضرورة بيوصّل كل زيادة للعميل، بينما التسليم التدريجي بيعني إن البرنامج بيُستخدم فعلاً في العمليات التشغيلية.",
        },
        {
          q: "What do reuse-oriented (integration and configuration) approaches rely on?",
          options: [
            "A purely sequential waterfall structure",
            "Avoiding all third-party software",
            "A base of reusable software components and an integrating framework for composing them",
            "Writing every line of code from scratch",
          ],
          correct: 2,
          translation:
            "على ماذا تعتمد المناهج الموجهة بإعادة الاستخدام (التكامل والتهيئة)؟",
          explanation:
            "قاعدة من مكونات برمجية قابلة لإعادة الاستخدام + إطار تكامل لتركيبها معاً.",
        },
        {
          q: "Which of the following is listed as a type of software component frequently reused?",
          options: [
            "Marketing brochures",
            "Physical hardware casings",
            "Printed user manuals",
            "Stand-alone application systems configured for use in a particular environment",
          ],
          correct: 3,
          translation:
            "أي مما يلي مذكور كنوع من المكونات البرمجية التي تُعاد استخدامها بشكل متكرر؟",
          explanation:
            "أنظمة تطبيقات مستقلة (Stand-alone) تُهيَّأ للاستخدام في بيئة معينة — زي أنظمة ERP.",
        },
        {
          q: "According to the text, what are the five stages of the reuse-oriented (integration and configuration) process model?",
          options: [
            "Specification; prototyping; refactoring; release; archiving",
            "Planning; coding; testing; debugging; deployment",
            "Design; marketing; sales; delivery; support",
            "Requirements specification; software discovery and evaluation; requirements refinement; application system configuration; component adaptation and integration",
          ],
          correct: 3,
          translation:
            "حسب النص، ما المراحل الخمس لنموذج العملية الموجه بإعادة الاستخدام؟",
          explanation:
            "مواصفات المتطلبات → اكتشاف البرمجيات وتقييمها → تحسين المتطلبات → تهيئة نظام التطبيق → تكييف المكونات وتكاملها.",
        },
        {
          q: "What is an obvious advantage of reuse-oriented software engineering, according to the text?",
          options: [
            "It eliminates the need for integration",
            "It guarantees the system perfectly meets every user need",
            "It removes the need for any requirements process",
            "It reduces the amount of software to be developed, reducing cost and risk, and usually leads to faster delivery",
          ],
          correct: 3,
          translation:
            "ما الميزة الواضحة لهندسة البرمجيات الموجهة بإعادة الاستخدام حسب النص؟",
          explanation:
            "بتقلل كمية البرمجيات المطلوب تطويرها — بتقلل التكلفة والمخاطر، وعادةً بتوصل لتسليم أسرع.",
        },
        {
          q: "What is a disadvantage of reuse-oriented software engineering mentioned in the text?",
          options: [
            "It removes the need for software discovery and evaluation",
            "Requirements compromises are inevitable, and some control over system evolution is lost since reusable components are not controlled by the organization using them",
            "It cannot be used with web services",
            "It is always more expensive than writing everything from scratch",
          ],
          correct: 1,
          translation:
            "ما عيب هندسة البرمجيات الموجهة بإعادة الاستخدام المذكور في النص؟",
          explanation:
            "لازم تقديم تنازلات في المتطلبات + فقدان بعض التحكم في تطور النظام لأن المكونات مش مملوكة للمنظمة المستخدمة.",
        },
        {
          q: "According to Section 2.2, what are the four basic process activities common to software processes?",
          options: [
            "Analysis, synthesis, compilation, and execution",
            "Planning, coding, marketing, and selling",
            "Design, testing, deployment, and retirement only",
            "Specification, development, validation, and evolution",
          ],
          correct: 3,
          translation:
            "حسب القسم 2.2، ما الأنشطة الأربعة الأساسية المشتركة بين العمليات البرمجية؟",
          explanation:
            "المواصفات (Specification) + التطوير (Development) + التحقق (Validation) + التطور (Evolution).",
        },
        {
          q: "How are these four basic activities organized in the waterfall model compared to incremental development?",
          options: [
            "They are only used in the waterfall model",
            "They are identical in both models",
            "In the waterfall model they are organized in sequence, whereas in incremental development they are interleaved",
            "They are skipped entirely in incremental development",
          ],
          correct: 2,
          translation:
            "كيف تُنظَّم هذه الأنشطة الأربعة في نموذج الشلال مقارنةً بالتطوير التدريجي؟",
          explanation:
            "في نموذج الشلال: متسلسلة (In Sequence). في التطوير التدريجي: متشابكة (Interleaved).",
        },
        {
          q: "Software specification (requirements engineering) is the process of:",
          options: [
            "Only designing the user interface",
            "Understanding and defining what services are required from the system and identifying constraints on its operation and development",
            "Writing the final source code",
            "Testing the system after release",
          ],
          correct: 1,
          translation: "مواصفات البرمجيات (هندسة المتطلبات) هي عملية:",
          explanation:
            "فهم وتعريف الخدمات المطلوبة من النظام + تحديد القيود على تشغيله وتطويره.",
        },
        {
          q: "What is the purpose of a feasibility or marketing study, carried out before requirements engineering starts?",
          options: [
            "To assess whether there is a need or market for the software and whether it is technically and financially realistic to develop",
            "To write the complete source code",
            "To train the future users of the system",
            "To test the final deployed system",
          ],
          correct: 0,
          translation:
            "ما الغرض من دراسة الجدوى أو السوق التي تُجرى قبل بدء هندسة المتطلبات؟",
          explanation:
            "تقييم إذا كان فيه حاجة أو سوق للبرنامج + إذا كان تطويره واقعياً تقنياً ومالياً.",
        },
        {
          q: "What are the three main activities in the requirements engineering process?",
          options: [
            "Planning, marketing, and sales",
            "Coding, testing, and debugging",
            "Requirements elicitation and analysis, requirements specification, and requirements validation",
            "Design, implementation, and deployment",
          ],
          correct: 2,
          translation: "ما الأنشطة الرئيسية الثلاثة في عملية هندسة المتطلبات؟",
          explanation:
            "استخلاص المتطلبات وتحليلها + مواصفات المتطلبات + التحقق من المتطلبات.",
        },
        {
          q: "What is the difference between user requirements and system requirements, as described in the text?",
          options: [
            "User requirements are abstract statements for the customer and end-user; system requirements are a more detailed description of the functionality",
            "They are exactly the same document",
            "System requirements are always shorter than user requirements",
            "User requirements are written only by programmers",
          ],
          correct: 0,
          translation:
            "ما الفرق بين متطلبات المستخدم ومتطلبات النظام حسب النص؟",
          explanation:
            "متطلبات المستخدم بيانات مجردة للعميل والمستخدم النهائي، ومتطلبات النظام وصف أكثر تفصيلاً للوظائف.",
        },
        {
          q: "What does requirements validation check for?",
          options: [
            "Realism, consistency, and completeness of the requirements",
            "Only the programming language to be used",
            "Only the budget of the project",
            "Only spelling errors in the document",
          ],
          correct: 0,
          translation: "ما الذي يتحقق منه التحقق من المتطلبات؟",
          explanation:
            "الواقعية والاتساق والاكتمال — ثلاث خصائص أساسية لمتطلبات صحيحة.",
        },
        {
          q: "In agile methods, how is requirements specification treated?",
          options: [
            "It is always a huge, separate document completed before any coding starts",
            "It is skipped entirely and never documented",
            "It is only done once at the very end of the project",
            "It is not a separate activity but part of system development, informally specified for each increment just before it is developed",
          ],
          correct: 3,
          translation: "في الطرق الرشيقة، كيف تُعالَج مواصفات المتطلبات؟",
          explanation:
            "مش نشاط منفصل، بل جزء من تطوير النظام — تُحدَّد بشكل غير رسمي لكل زيادة قبل تطويرها مباشرة.",
        },
        {
          q: "What is a software design, as defined in Section 2.2.2?",
          options: [
            "Only the marketing plan for the product",
            "Only the final compiled binary",
            "Only the user manual",
            "A description of the structure of the software to be implemented, the data models and structures used, the interfaces between components and, sometimes, the algorithms used",
          ],
          correct: 3,
          translation: "ما هو تصميم البرمجيات كما هو معرّف في القسم 2.2.2؟",
          explanation:
            "وصف هيكل البرنامج + نماذج وبنى البيانات + الواجهات بين المكونات + أحياناً الخوارزميات.",
        },
        {
          q: "According to Figure 2.5, which four activities may be part of the design process for information systems?",
          options: [
            "Architectural design, database design, interface design, and component selection and design",
            "Hardware design, network design, training design, and support design",
            "Testing design, debugging design, deployment design, and retirement design",
            "Marketing design, sales design, pricing design, and branding design",
          ],
          correct: 0,
          translation:
            "حسب الشكل 2.5، أي أربعة أنشطة قد تكون جزءاً من عملية التصميم لأنظمة المعلومات؟",
          explanation:
            "التصميم المعماري + تصميم قاعدة البيانات + تصميم الواجهات + اختيار وتصميم المكونات.",
        },
        {
          q: "What is architectural design concerned with?",
          options: [
            "Only designing the database schema",
            "Identifying the overall structure of the system, its principal components, their relationships, and how they are distributed",
            "Only choosing a programming language",
            "Only writing unit tests",
          ],
          correct: 1,
          translation: "بماذا يهتم التصميم المعماري؟",
          explanation:
            "تحديد الهيكل العام للنظام + المكونات الرئيسية + علاقاتها + كيفية توزيعها.",
        },
        {
          q: "Why must an interface specification be unambiguous?",
          options: [
            "So that it never needs to be documented",
            "So it can be skipped during testing",
            "So that only one developer can ever use it",
            "So a component may be used by other components without them having to know how it is implemented",
          ],
          correct: 3,
          translation: "لماذا يجب أن تكون مواصفات الواجهة غير غامضة؟",
          explanation:
            "عشان مكوّن يقدر يُستخدم بواسطة مكونات تانية بدون معرفة كيفية تنفيذه الداخلي — تجريد الواجهة.",
        },
        {
          q: "What is the difference between testing and debugging, according to the text?",
          options: [
            "Testing is only done by customers",
            "They are exactly the same activity",
            "Testing establishes the existence of defects, while debugging is concerned with locating and correcting these defects",
            "Debugging happens before any code is written",
          ],
          correct: 2,
          translation: "ما الفرق بين الاختبار والتنقيح (Debugging) حسب النص؟",
          explanation:
            "الاختبار بيثبت وجود العيوب، والتنقيح بيهتم بتحديد موقعها وتصحيحها — نشاطان مختلفان.",
        },
        {
          q: "What is the goal of software validation (verification and validation, V&V)?",
          options: [
            "To market the software product",
            "To show that a system both conforms to its specification and meets the expectations of the system customer",
            "To design the database schema",
            "To write new requirements for the next version",
          ],
          correct: 1,
          translation: "ما هدف التحقق من صحة البرمجيات (V&V)؟",
          explanation:
            "إثبات أن النظام يتوافق مع مواصفاته + يلبي توقعات العميل — الهدف المزدوج للـ V&V.",
        },
        {
          q: "What are the three stages of the testing process shown in Figure 2.6?",
          options: [
            "Design testing, documentation testing, and training testing",
            "Component testing, system testing, and customer testing",
            "Planning testing, coding testing, and marketing testing",
            "Unit testing, hardware testing, and network testing",
          ],
          correct: 1,
          translation:
            "ما المراحل الثلاث لعملية الاختبار الموضحة في الشكل 2.6؟",
          explanation:
            "اختبار المكونات (Component) + اختبار النظام (System) + اختبار العميل (Customer).",
        },
        {
          q: "What is component testing?",
          options: [
            "Testing performed only by the customer",
            "Testing individual components, such as functions or object classes, independently by the people developing the system",
            "Testing performed only after the product is released",
            "Testing the fully integrated system with real customer data",
          ],
          correct: 1,
          translation: "ما هو اختبار المكونات؟",
          explanation:
            "اختبار المكونات الفردية (زي الدوال أو الكلاسات) بشكل مستقل بواسطة المطورين — أداة JUnit مثلاً.",
        },
        {
          q: "What is system testing concerned with, according to the text?",
          options: [
            "Only testing a single isolated function",
            "Only checking spelling in the user manual",
            "Finding errors from unanticipated interactions between components and interface problems, and showing the system meets its requirements",
            "Only verifying the marketing plan",
          ],
          correct: 2,
          translation: "بماذا يهتم اختبار النظام حسب النص؟",
          explanation:
            "اكتشاف الأخطاء من التفاعلات غير المتوقعة بين المكونات + مشاكل الواجهات + إثبات أن النظام يلبي متطلباته.",
        },
        {
          q: "What is customer testing (also called beta testing for products)?",
          options: [
            "Testing performed only by the original programmer",
            "A stage that occurs before any requirements are gathered",
            "The final stage of testing where the system is tested by the system customer or potential customers rather than with simulated test data",
            "A stage used only for embedded hardware systems",
          ],
          correct: 2,
          translation:
            "ما هو اختبار العميل (المعروف أيضاً بالـ Beta Testing للمنتجات)؟",
          explanation:
            "المرحلة النهائية للاختبار حيث يُختبر النظام بواسطة العميل أو عملاء محتملين بدل بيانات اختبار مُحاكاة.",
        },
        {
          q: "What is the V-model of development, as mentioned in the text?",
          options: [
            "A model with no relationship to testing",
            "A representation (used in plan-driven testing) showing validation activities that correspond to each stage of the waterfall process, where test plans link testing and development",
            "A model that replaces the waterfall model entirely",
            "A model used only for agile development",
          ],
          correct: 1,
          translation: "ما هو نموذج V للتطوير كما ذُكر في النص؟",
          explanation:
            "تمثيل (يُستخدم في الاختبار المدفوع بالخطة) يوضح أنشطة التحقق المقابلة لكل مرحلة من عملية الشلال، حيث تربط خطط الاختبار بين الاختبار والتطوير.",
        },

        // ═══════════════════════════════════════════════════════
        // Essay
        // ═══════════════════════════════════════════════════════
        {
          type: "essay",
          q: "Describe the waterfall model, including its five stages, and explain why it is appropriate for some types of systems but problematic for others.",
          translation:
            "صِف نموذج الشلال بمراحله الخمس، واشرح لماذا هو مناسب لبعض الأنواع ومشكل لبعضها.",
          answer:
            "The waterfall model represents the fundamental software development activities as separate, sequential phases:\n" +
            "1. Requirements analysis and definition\n" +
            "2. System and software design\n" +
            "3. Implementation and unit testing\n" +
            "4. Integration and system testing\n" +
            "5. Operation and maintenance (normally the longest phase)\n" +
            "\n" +
            "It is a plan-driven process: in principle, all activities are planned and scheduled before development starts, and each phase's result is one or more approved documents, with the next phase not starting until the previous one has finished.\n" +
            "\n" +
            "Problems: in practice the software process is never purely linear — problems with requirements are found during design, design problems are found during coding, and so on, requiring feedback between phases. Both customers and developers may prematurely freeze the specification to avoid costly late changes, which can leave the system not doing what the user actually wants.\n" +
            "\n" +
            "It is appropriate for: (1) embedded systems that must interface with inflexible hardware, (2) critical systems needing extensive safety/security analysis of complete specification and design documents, and (3) large systems developed by several partner companies that need complete specifications for independent subsystem development. It is not appropriate where informal team communication is possible and requirements change quickly — iterative development and agile methods suit those cases better.",
          tags: ["Chapter 2", "2.1", "2.2"],
          ref: "Chapter 2 — Sections 2.1 and 2.2",
        },
        {
          type: "essay",
          q: "Explain incremental development: how it works, its three advantages over the waterfall model, and the two problems it creates from a management perspective.",
          translation:
            "اشرح التطوير التدريجي: كيف يعمل، مزاياه الثلاث على نموذج الشلال، والمشكلتين اللتين يخلقهما من منظور إداري.",
          answer:
            "How it works: an initial implementation is developed, feedback is gathered from users, and the software evolves through several increasingly functional versions. Specification, development, and validation are interleaved rather than separate. Each increment incorporates some needed functionality, usually with the most important/urgent functionality delivered earliest.\n" +
            "\n" +
            "Three advantages over the waterfall model:\n" +
            "1. The cost of implementing requirements changes is reduced, since less analysis and documentation needs to be redone.\n" +
            "2. It is easier to get customer feedback, since customers can comment on working demonstrations rather than design documents.\n" +
            "3. Early delivery and deployment of useful software is possible, even before all functionality is included.\n" +
            "\n" +
            "Two management-perspective problems:\n" +
            "1. The process is not very visible, since it is not cost-effective to produce documents reflecting every version, making it harder for managers to measure progress with regular deliverables.\n" +
            "2. System structure tends to degrade as new increments are added, becoming messier and more costly to extend — agile methods suggest regular refactoring to address this.",
          tags: ["Chapter 2", "2.1", "2.2"],
          ref: "Chapter 2 — Sections 2.1 and 2.2",
        },
        {
          type: "essay",
          q: "Describe the three main activities of the requirements engineering process (Section 2.2.1), and the four design activities shown in Figure 2.5 (Section 2.2.2).",
          translation:
            "صِف الأنشطة الثلاثة الرئيسية لعملية هندسة المتطلبات (القسم 2.2.1)، والأنشطة الأربعة للتصميم الموضحة في الشكل 2.5 (القسم 2.2.2).",
          answer:
            "Requirements engineering process (three activities):\n" +
            "1. Requirements elicitation and analysis — deriving system requirements through observation of existing systems, discussions with users/procurers, and task analysis, often involving system models and prototypes.\n" +
            "2. Requirements specification — translating the gathered information into a document defining a set of requirements, at two levels: user requirements (abstract, for customers/end-users) and system requirements (a more detailed description of functionality).\n" +
            "3. Requirements validation — checking the requirements for realism, consistency, and completeness, and modifying the document to correct any discovered errors.\n" +
            "\n" +
            "Design process activities (Figure 2.5, for information systems):\n" +
            "1. Architectural design — identifying the overall system structure, principal components/subsystems, their relationships, and distribution.\n" +
            "2. Database design — designing the system's data structures and how they will be represented in a database.\n" +
            "3. Interface design — defining unambiguous interfaces between system components so components can be used without knowing their implementation.\n" +
            "4. Component selection and design — searching for reusable components or designing new ones when none are suitable.",
          tags: ["Chapter 2", "2.1", "2.2"],
          ref: "Chapter 2 — Sections 2.1 and 2.2",
        },
        {
          type: "essay",
          q: "Explain the three stages of the testing process shown in Figure 2.6, and the difference between testing and debugging.",
          translation:
            "اشرح المراحل الثلاث لعملية الاختبار الموضحة في الشكل 2.6، والفرق بين الاختبار والتنقيح.",
          answer:
            "Testing vs. debugging: testing establishes the existence of defects in a program; debugging is the separate process of locating and correcting those defects (generating hypotheses about observed behavior and testing them, often with the help of interactive debugging tools).\n" +
            "\n" +
            "The three stages of testing:\n" +
            "1. Component testing — individual components (e.g., functions or object classes) are tested independently by the people developing the system, often with automated test tools (e.g., JUnit).\n" +
            "2. System testing — components are integrated into a complete system; this stage finds errors from unanticipated interactions between components and interface problems, and checks that functional and non-functional requirements are met.\n" +
            "3. Customer testing — the final stage before acceptance for operational use, where the system is tested with real customer data (for custom software) or through beta testing by selected users (for products).",
          tags: ["Chapter 2", "2.1", "2.2"],
          ref: "Chapter 2 — Sections 2.1 and 2.2",
        },
      ],
    },
    {
      t: "المحاضرة الثالثة — الفصل الثالث: التطوير الرشيق للبرمجيات (Agile Software Development)",
      d: "مبررات طرق Agile وبيان Agile ومبادئها، ممارسات XP (user stories، refactoring، test-first، pair programming)، إدارة المشاريع بـ Scrum، وتوسيع Agile.",
      id: "software-engineering-lec-03",

      notes:
        "3.4 Scaling agile   للقراء فقط  ,   الأسئلة المطلوبة من الكتاب:  من 1 لحد 7",

      pdf: "datenew/subjects/software-engineering/lectures/Software Engineering, 10th GLOBAL Edition - Chapter 3 - Agile software development.pdf",
      pdf2: "datenew/subjects/software-engineering/questions/Questions on each lecture/SE-Lecture-03-Questions.pdf",
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "فيديوهات تعليمية باللغة العربية تشرح أساسيات منهجيات Agile (سكرم، XP، ...).",
          links: [
            {
              t: "ما هي منهجية الأجايل Agile؟ ولماذا أصبحت الأشهر في إدارة المشاريع؟",
              d: "مقدمة لمنهجية تطوير البرمجيات الرشيقة Agile وأهم مميزاتها.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶️ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=MpeUJRRVdM8",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "المبادئ الـ12 في Agile ببساطة: السر الحقيقي لنجاح المشاريع الحديثة",
              d: "شرح مبسّط لأهم المبادئ الاثني عشر في منهجية Agile.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶️ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=cAjCxnzGDAY",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "كورس كامل: شرح إدارة المشاريع الرشيقة (Agile & Scrum) - د. أحمد السنوسي",
              d: "محاضرة شاملة تشرح منهجيات Agile و Scrum من الأساس للاحتراف.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶️ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=a8P3i8smmBw",
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
            "فيديوهات تعليمية باللغة الإنجليزية حول Agile وScrum وأطر عمل Agile الأخرى.",
          links: [
            {
              t: "Agile Software Development and Extreme Programming (Lecture 3) - Edureka",
              d: "محاضرة تشرح أطر عمل Agile المختلفة مثل Scrum وKanban وLean وXP.",
              icon: "🌍",
              actions: [
                {
                  label: "▶️ Watch Video",
                  url: "https://www.youtube.com/watch?v=KogKKAgN5Ps",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "What is Agile Project Management? (3min overview)",
              d: "شرح مختصر لمفهوم الإدارة الرشيقة للمشاريع (Agile PM) وفوائدها.",
              icon: "🌍",
              actions: [
                {
                  label: "▶️ Watch Video",
                  url: "https://www.youtube.com/watch?v=3wMQZ_0gkt8",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Scrum in 10 Minutes (David Sabine, PST) - Scrum.org",
              d: "فيديو قصير يشرح إطار عمل Scrum (الأدوار، الأحداث، والوثائق الرئيسية).",
              icon: "🌍",
              actions: [
                {
                  label: "▶️ Watch Video",
                  url: "https://www.youtube.com/watch?v=NtTXWAlIMC8",
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
            "مواقع ومراجع تشرح مفاهيم Agile وأطر عملها (Scrum وXP وغيرها) باللغتين العربية والإنجليزية.",
          links: [
            {
              t: "What is Scrum? - دليل إطار عمل Agile (Atlassian)",
              d: "دليل Atlassian يوضح مكونات إطار عمل Scrum وكيفية استخدامه في إدارة المشاريع.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.atlassian.com/agile/scrum",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "ما المقصود بإطار Scrum؟ - شرح إطار Scrum - AWS",
              d: "مقالة باللغة العربية تشرح إطار Scrum (سكرم) ومفاهيمه الرئيسية.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://aws.amazon.com/ar/what-is/scrum/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Agile Methodology - GeeksforGeeks",
              d: "مقال شامل يتناول أساسيات منهجية Agile ومبادئها الأساسية.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/software-testing/what-is-agile-methodology/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "البرمجة القصوى (Extreme Programming) - هارفارد بيزنس ريفيو بالعربية",
              d: "شرح لمعنى البرمجة القصوى (XP) وأهم ممارساتها في تطوير البرمجيات.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://hbrarabic.com/%D8%A7%D9%84%D9%85%D9%81%D8%A7%D9%87%D9%8A%D9%85-%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9/%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D8%A7%D9%84%D9%82%D8%B5%D9%88%D9%89/",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
        {
          category: "أدوات ومحاكاة",
          icon: "🔧",
          description:
            "أدوات برمجية لدعم منهجيات Agile، مثل إدارة المشاريع والأتمتة والاختبارات (Jira، Jest، GitHub Actions).",
          links: [
            {
              t: "Jira (Atlassian) - إدارة المشاريع بنهج Agile",
              d: "أداة شهيرة لإدارة المشاريع وتنظيم العمل باستخدام Scrum أو Kanban.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.atlassian.com/software/jira",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "GitHub Actions - التكامل المستمر (CI)",
              d: "منصة CI/CD مدمجة مع GitHub لأتمتة البناء والاختبار والنشر.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://github.com/features/actions",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Jest - إطار اختبار JavaScript",
              d: "إطار عمل لاختبار تطبيقات JavaScript (Node.js/React) بسهولة.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://jestjs.io",
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
          q: "1. According to the chapter, what is the most critical requirement for most business systems?",
          options: [
            "Complete and stable requirements",
            "Rapid software development and delivery",
            "Detailed design documentation",
            "Minimal use of development tools",
          ],
          correct: 1,
          translation: "حسب الفصل، ما هو أهم متطلب لمعظم أنظمة الأعمال؟",
          explanation:
            "الشركات تعمل في بيئة سريعة التغير فتحتاج برمجيات جديدة بسرعة لاستغلال الفرص، وقد تتنازل أحيانًا عن بعض الجودة أو المتطلبات مقابل التسليم السريع. وجود متطلبات كاملة ومستقرة شبه مستحيل في هذه البيئة.",
          tags: ["Agile", "Rapid delivery"],
          ref: "Lecture 03 — Chapter introduction",
        },
        {
          q: "2. For which type of software is a plan-driven approach still the right one, according to the chapter?",
          options: [
            "Small mobile apps",
            "Short-lived marketing websites",
            "Prototypes built for demonstrations",
            "Safety-critical control systems where a complete analysis is essential",
          ],
          correct: 3,
          translation:
            "لأي نوع من البرمجيات يظل النهج المبني على الخطة (plan-driven) هو الأنسب حسب الفصل؟",
          explanation:
            "الأنظمة الحرجة للسلامة مثل أنظمة التحكم تحتاج تحليلًا كاملًا للنظام، فالـ plan-driven مناسب لها. أما في بيئة الأعمال السريعة فقد يسبب مشاكل حقيقية.",
          tags: ["Plan-driven", "Safety-critical"],
          ref: "Lecture 03 — Chapter introduction",
        },
        {
          q: "3. Which of the following is a common characteristic of all agile methods?",
          options: [
            "Specification, design and implementation are interleaved",
            "A complete detailed specification is written before any coding",
            "Testing is done only after the whole system is built",
            "A new release is made once a year",
          ],
          correct: 0,
          translation: "أي مما يلي خاصية مشتركة بين كل طرق Agile؟",
          explanation:
            "في Agile عمليات المواصفات والتصميم والتنفيذ متداخلة ولا توجد مواصفات تفصيلية. الاختيارات الأخرى تصف نهجًا تقليديًا، كما أن الإصدارات في Agile تكون كل أسبوعين أو ثلاثة.",
          tags: ["Agile characteristics", "Interleaving"],
          ref: "Lecture 03 — Chapter introduction",
        },
        {
          q: "4. How does iteration differ between plan-driven and agile development (Figure 3.1)?",
          options: [
            "Plan-driven iterates across activities and agile iterates within activities",
            "Neither approach iterates",
            "In plan-driven development iteration occurs within activities, while in agile it occurs across activities",
            "Agile uses formal documents between stages while plan-driven does not",
          ],
          correct: 2,
          translation:
            "كيف يختلف التكرار (iteration) بين التطوير plan-driven وAgile (الشكل 3.1)؟",
          explanation:
            "في plan-driven يحدث التكرار داخل كل نشاط وتُستخدم مستندات رسمية للتواصل بين المراحل، أما في Agile فيحدث عبر الأنشطة فتُطوَّر المتطلبات والتصميم معًا. الاختيار الأول معكوس والرابع معكوس أيضًا.",
          tags: ["Plan-driven", "Agile", "Iteration"],
          ref: "Lecture 03 — Chapter introduction (Figure 3.1)",
        },
        {
          q: "5. According to the agile manifesto, which item is valued more than following a plan?",
          options: [
            "Comprehensive documentation",
            "Responding to change",
            "Contract negotiation",
            "Processes and tools",
          ],
          correct: 1,
          translation:
            "حسب بيان Agile (manifesto)، أي عنصر يُقدَّر أكثر من اتباع الخطة؟",
          explanation:
            "القيم الأربع: الأفراد والتفاعلات على العمليات والأدوات، والبرمجيات العاملة على التوثيق الشامل، وتعاون العميل على التفاوض على العقد، والاستجابة للتغيير على اتباع الخطة. بقية الاختيارات مذكورة كعناصر أقل قيمة.",
          tags: ["Agile manifesto", "Values"],
          ref: "Lecture 03 — 3.1 Agile methods",
        },
        {
          q: "6. Which agile principle says that the skills of the team should be exploited and team members should develop their own ways of working?",
          options: [
            "People, not process",
            "Incremental delivery",
            "Maintain simplicity",
            "Embrace change",
          ],
          correct: 0,
          translation:
            "أي مبدأ من مبادئ Agile ينص على استغلال مهارات الفريق وترك أعضائه يطورون طرق عملهم بأنفسهم؟",
          explanation:
            "مبدأ People, not process يعترف بمهارات الفريق ويتجنب العمليات الإلزامية. Incremental delivery عن التسليم على دفعات، وMaintain simplicity عن البساطة، وEmbrace change عن توقع تغيّر المتطلبات.",
          tags: ["Agile principles", "People not process"],
          ref: "Lecture 03 — 3.1 Agile methods (Figure 3.2)",
        },
        {
          q: "7. For which kinds of system development have agile methods been particularly successful?",
          options: [
            "Large systems built by many geographically dispersed teams",
            "Safety-critical systems with heavy regulation",
            "Systems tightly integrated with other systems built in parallel",
            "Small or medium-sized product development, and custom systems with a committed customer and few external stakeholders",
          ],
          correct: 3,
          translation: "في أي أنواع تطوير الأنظمة نجحت طرق Agile بشكل خاص؟",
          explanation:
            "نجحت في تطوير المنتجات الصغيرة والمتوسطة، وفي الأنظمة المخصصة داخل مؤسسة حيث العميل ملتزم بالمشاركة وعدد الجهات الخارجية والقوانين قليل. الاختيارات الأخرى بيئات تحتاج تنسيقًا وخطة.",
          tags: ["Agile", "Product development"],
          ref: "Lecture 03 — 3.1 Agile methods",
        },
        {
          q: "8. Why was the name 'Extreme Programming' (XP) chosen?",
          options: [
            "It was developed for extreme sports software",
            "It requires programmers to work extreme hours",
            "It pushes recognized good practices, such as iterative development, to 'extreme' levels",
            "It uses the largest possible amount of documentation",
          ],
          correct: 2,
          translation: "لماذا سُمّيت 'Extreme Programming' (XP) بهذا الاسم؟",
          explanation:
            "الاسم صاغه Kent Beck لأن النهج دفع الممارسات الجيدة المعروفة مثل التطوير التكراري إلى مستويات 'متطرفة'. وهو يرفض العمل لساعات طويلة (Sustainable pace)، فالاختيار الثاني خطأ.",
          tags: ["XP", "Kent Beck"],
          ref: "Lecture 03 — 3.2 Agile development techniques",
        },
        {
          q: "9. In XP, what does the practice 'collective ownership' mean?",
          options: [
            "Only the senior developer owns the core code",
            "Pairs of developers work on all areas of the system, so anyone can change anything and everyone takes responsibility for all the code",
            "Each developer owns one module exclusively",
            "The customer owns the source code",
          ],
          correct: 1,
          translation: "في XP، ماذا تعني ممارسة 'collective ownership'؟",
          explanation:
            "الأزواج يعملون على كل أجزاء النظام فلا تتكون جزر خبرة ويتحمل الجميع مسؤولية كل الكود. هذا عكس ملكية كل مبرمج لوحدة واحدة.",
          tags: ["XP", "Collective ownership"],
          ref: "Lecture 03 — 3.2 Agile development techniques (Figure 3.4)",
        },
        {
          q: "10. Which XP practice requires that, once finished work is integrated into the whole system, all the unit tests in the system must pass?",
          options: [
            "Continuous integration",
            "Sustainable pace",
            "Small releases",
            "Simple design",
          ],
          correct: 0,
          translation:
            "أي ممارسة في XP تتطلب أنه بعد دمج العمل المنتهي في النظام يجب أن تنجح كل اختبارات الوحدة؟",
          explanation:
            "Continuous integration: بمجرد انتهاء المهمة تُدمج في النظام كله ويجب أن تنجح كل unit tests بعد كل دمج. Small releases عن الإصدارات المتكررة، وSimple design عن التصميم بقدر الحاجة فقط.",
          tags: ["XP", "Continuous integration"],
          ref: "Lecture 03 — 3.2 Agile development techniques (Figure 3.4)",
        },
        {
          q: "11. Why does XP consider large amounts of overtime unacceptable (sustainable pace)?",
          options: [
            "It increases the cost of development tools",
            "It violates the customer contract",
            "The net effect is often to reduce code quality and medium-term productivity",
            "It makes pair programming impossible",
          ],
          correct: 2,
          translation:
            "لماذا تعتبر XP العمل الإضافي الكبير غير مقبول (sustainable pace)؟",
          explanation:
            "الفصل يوضح أن الأثر الصافي للإفراط في العمل غالبًا هو انخفاض جودة الكود والإنتاجية على المدى المتوسط. باقي الأسباب غير مذكورة.",
          tags: ["XP", "Sustainable pace"],
          ref: "Lecture 03 — 3.2 Agile development techniques (Figure 3.4)",
        },
        {
          q: "12. What is the principal problem with user stories mentioned in the chapter?",
          options: [
            "Customers cannot understand them",
            "They require a formal specification language",
            "They cannot be broken into tasks",
            "Completeness: it is difficult to judge whether enough stories have been written to cover all essential requirements",
          ],
          correct: 3,
          translation:
            "ما المشكلة الرئيسية في قصص المستخدم (user stories) المذكورة في الفصل؟",
          explanation:
            "المشكلة هي الاكتمال: يصعب الحكم إن كانت القصص تغطي كل المتطلبات الأساسية، وقد لا تعطي قصة واحدة صورة حقيقية للنشاط لأن المستخدم الخبير يترك تفاصيل. على العكس، الناس يربطون بالقصص بسهولة وتُقسَّم إلى tasks.",
          tags: ["User stories", "Completeness"],
          ref: "Lecture 03 — 3.2.1 User stories",
        },
        {
          q: "13. What is refactoring in XP?",
          options: [
            "Rewriting the whole system at the end of the project",
            "Continuously looking for and implementing code improvements to keep the code simple and avoid structural degradation",
            "Adding generality to the code to anticipate future changes",
            "Removing all tests after a release",
          ],
          correct: 1,
          translation: "ما هو الـ refactoring في XP؟",
          explanation:
            "هو البحث المستمر عن تحسينات للكود وتنفيذها فورًا حتى لو لم تكن هناك حاجة عاجلة، لتجنب تدهور بنية البرنامج مع التغييرات المتتالية. XP ترفض 'التصميم للتغيير' بإضافة العمومية مسبقًا.",
          tags: ["Refactoring", "XP"],
          ref: "Lecture 03 — 3.2.2 Refactoring",
        },
        {
          q: "14. What does test-first development mean?",
          options: [
            "Writing automated tests for new functionality before implementing that functionality",
            "Testing the system only after a code review",
            "Letting an external team write the tests later",
            "Skipping unit tests for simple tasks",
          ],
          correct: 0,
          translation:
            "ماذا يعني التطوير بكتابة الاختبارات أولًا (test-first development)؟",
          explanation:
            "تُكتب الاختبارات (باستخدام إطار اختبار آلي مثل JUnit) قبل كتابة الكود، فتُعرّف الواجهة وسلوك الوظيفة وتقل سوء الفهم. الاختيارات الأخرى تصف اختبارًا متأخرًا أو خارجيًا.",
          tags: ["Test-first", "TDD"],
          ref: "Lecture 03 — 3.2.3 Test-first development",
        },
        {
          q: "15. What is the problem of 'test-lag' in testing?",
          options: [
            "Automated tests run too slowly",
            "Tests fail at random",
            "The developer works faster than the tester, so implementation gets ahead of testing and tests tend to be skipped",
            "The customer delays writing acceptance tests",
          ],
          correct: 2,
          translation: "ما هي مشكلة 'test-lag' في الاختبار؟",
          explanation:
            "تحدث حين يعمل المطوّر أسرع من المختبِر فيتقدم التنفيذ على الاختبار ويميل الفريق لتخطي الاختبارات للحفاظ على الجدول. الـ test-first يتفادى ذلك.",
          tags: ["Test-lag", "Testing"],
          ref: "Lecture 03 — 3.2.3 Test-first development",
        },
        {
          q: "16. Why does pair programming work as an informal review process?",
          options: [
            "A manager checks every pair at the end of the day",
            "Pairs stay the same for the whole project",
            "Only one developer types the code",
            "Each line of code is looked at by at least two people",
          ],
          correct: 3,
          translation: "لماذا يعمل pair programming كعملية مراجعة غير رسمية؟",
          explanation:
            "لأن كل سطر كود يراه شخصان على الأقل. هو أرخص وأسهل تنظيمًا من المراجعات الرسمية (code inspections) لكنه غالبًا يكتشف أخطاء أقل منها. الأزواج في XP تتغير ديناميكيًا.",
          tags: ["Pair programming", "Review"],
          ref: "Lecture 03 — 3.2.4 Pair programming",
        },
        {
          q: "17. What did the studies with more experienced programmers (Arisholm et al.) find about pair programming?",
          options: [
            "A significant loss of productivity compared with two programmers working alone, with some quality benefits that did not fully compensate",
            "Productivity was doubled",
            "No difference in productivity or quality",
            "Pair programming produced more errors",
          ],
          correct: 0,
          translation:
            "ماذا وجدت الدراسات على مبرمجين أكثر خبرة (Arisholm وزملاؤه) عن pair programming؟",
          explanation:
            "وجدوا فقدانًا ملحوظًا في الإنتاجية مقارنة بمبرمجين يعملان منفردين، مع فوائد جودة لم تعوّض الكلفة بالكامل. دراسة Williams على الطلاب وجدت إنتاجية مماثلة. ومع ذلك مشاركة المعرفة تقلل المخاطر عند ترك أعضاء الفريق.",
          tags: ["Pair programming", "Productivity"],
          ref: "Lecture 03 — 3.2.4 Pair programming",
        },
        {
          q: "18. What is the recommended maximum size of a Scrum development team?",
          options: [
            "Three people",
            "Seven people",
            "Twelve people",
            "Twenty people",
          ],
          correct: 1,
          translation: "ما الحد الأقصى الموصى به لحجم فريق التطوير في Scrum؟",
          explanation:
            "Development team: مجموعة منظِّمة لنفسها لا تزيد عن سبعة أشخاص.",
          tags: ["Scrum", "Development team"],
          ref: "Lecture 03 — 3.3 Agile project management (Figure 3.8)",
        },
        {
          q: "19. How long is a Scrum sprint usually?",
          options: [
            "1 to 3 days",
            "1 to 2 months",
            "2 to 4 weeks",
            "6 to 12 months",
          ],
          correct: 2,
          translation: "كم تستغرق دورة Sprint عادةً في Scrum؟",
          explanation:
            "الـ Sprint هو تكرار تطوير (development iteration) مدته عادةً من 2 إلى 4 أسابيع وبطول ثابت.",
          tags: ["Scrum", "Sprint"],
          ref: "Lecture 03 — 3.3 Agile project management (Figure 3.8)",
        },
        {
          q: "20. What is the job of the Product Owner in Scrum?",
          options: [
            "Making sure the Scrum process is followed and shielding the team from outside interference",
            "Writing all the code of the product",
            "Deciding top-down who works on which task",
            "Identifying product features or requirements, prioritizing them, and continuously reviewing the product backlog",
          ],
          correct: 3,
          translation: "ما دور الـ Product Owner في Scrum؟",
          explanation:
            "الـ Product Owner يحدد الميزات أو المتطلبات ويرتبها حسب الأولوية ويراجع الـ product backlog باستمرار. الاختيار الأول دور الـ ScrumMaster، والثالث غير صحيح لأن الفريق ينظّم نفسه.",
          tags: ["Scrum", "Product Owner"],
          ref: "Lecture 03 — 3.3 Agile project management (Figure 3.8)",
        },
        {
          q: "21. What is the product backlog in Scrum?",
          options: [
            "A list of 'to do' items the Scrum team must tackle, such as features, requirements, user stories or supplementary tasks",
            "A list of bugs found after the release",
            "Only the work selected for the current sprint",
            "The minutes of the daily Scrum",
          ],
          correct: 0,
          translation: "ما هو الـ product backlog في Scrum؟",
          explanation:
            "هو قائمة بنود العمل التي يجب أن يتناولها الفريق: ميزات، متطلبات، user stories أو مهام مساعدة مثل تعريف المعمارية أو التوثيق. أما العمل المختار للـ sprint فيسمى sprint backlog.",
          tags: ["Scrum", "Product backlog"],
          ref: "Lecture 03 — 3.3 Agile project management (Figure 3.8)",
        },
        {
          q: "22. What is 'velocity' in Scrum?",
          options: [
            "The speed of the team's network connection",
            "An estimate of how much product backlog effort a team can cover in a single sprint",
            "The number of developers in the team",
            "The date of the final delivery",
          ],
          correct: 1,
          translation: "ما هي الـ 'velocity' في Scrum؟",
          explanation:
            "هي تقدير لحجم جهد الـ product backlog الذي يستطيع الفريق إنجازه في sprint واحد، وتُستخدم لتقدير ما يمكن تغطيته في الـ sprint القادم ولقياس تحسن الأداء.",
          tags: ["Scrum", "Velocity"],
          ref: "Lecture 03 — 3.3 Agile project management (Figure 3.8)",
        },
        {
          q: "23. What happens to items that cannot be completed within a sprint?",
          options: [
            "The sprint is extended until they are finished",
            "They are deleted from the project",
            "They are returned to the product backlog, because sprints are never extended",
            "They are handed to the ScrumMaster",
          ],
          correct: 2,
          translation: "ماذا يحدث للبنود التي لا يمكن إنجازها داخل الـ sprint؟",
          explanation:
            "لا تُمدَّد الـ sprints أبدًا لاستيعاب العمل غير المنتهي، وتُعاد البنود إلى الـ product backlog.",
          tags: ["Scrum", "Sprint backlog"],
          ref: "Lecture 03 — 3.3 Agile project management",
        },
        {
          q: "24. Which statement about the ScrumMaster is correct?",
          options: [
            "He or she prioritizes the product backlog",
            "He or she writes the sprint backlog alone",
            "He or she directs the team top-down",
            "He or she ensures the Scrum process is followed and interfaces with the rest of the company, and Scrum developers insist this is not a project manager",
          ],
          correct: 3,
          translation: "أي عبارة عن الـ ScrumMaster صحيحة؟",
          explanation:
            "الـ ScrumMaster مسؤول عن اتباع عملية Scrum وإرشاد الفريق والتعامل مع باقي الشركة وحماية الفريق من التشتت، ومطورو Scrum يؤكدون أنه ليس project manager. ترتيب الـ backlog من مهام الـ Product Owner، ولا يوجد توجيه من أعلى لأسفل.",
          tags: ["Scrum", "ScrumMaster"],
          ref: "Lecture 03 — 3.3 Agile project management (Figure 3.8)",
        },
        {
          q: "25. What is the purpose of the daily Scrum meeting?",
          options: [
            "A short meeting to review progress and prioritize the work to be done that day",
            "A formal review presented to senior management",
            "Planning the next product release",
            "Writing the project documentation",
          ],
          correct: 0,
          translation: "ما الغرض من اجتماع الـ Scrum اليومي؟",
          explanation:
            "هو اجتماع قصير (يُفضَّل وجهًا لوجه ويشمل كل الفريق) لمراجعة التقدم وترتيب عمل اليوم: ماذا أنجز كل فرد وما المشاكل وما المخطط للغد. الاختيارات الأخرى ليست غرضه.",
          tags: ["Scrum", "Daily meeting"],
          ref: "Lecture 03 — 3.3 Agile project management",
        },
        {
          type: "essay",
          q: "1. Compare plan-driven and agile development, explaining why agile methods appeared.",
          translation:
            "قارن بين التطوير plan-driven وAgile مع شرح سبب ظهور طرق Agile.",
          answer:
            "Plan-driven development separates the process into stages with outputs (for example a requirements specification) used to plan the next activity. Iteration occurs within activities and formal documents communicate between stages.\n" +
            "Agile treats design and implementation as the central activities and incorporates requirements elicitation and testing into them. Iteration occurs across activities, so requirements and design are developed together.\n" +
            "Plan-driven overhead is justified for large, critical, long-lived systems built by multiple teams, but for small and medium business systems the overhead dominates and requirements changes force rework.\n" +
            "Dissatisfaction with heavyweight approaches led to agile methods in the late 1990s (Extreme Programming, Scrum, DSDM), which focus on delivering working software quickly and avoiding documentation that will never be used.\n" +
            "In practice the two can be mixed: plan-driven processes may use agile practices and agile methods may include some planned activities.",
          tags: ["Agile", "Plan-driven"],
          ref: "Lecture 03 — Chapter introduction and 3.1",
        },
        {
          type: "essay",
          q: "2. State the agile manifesto and the principles of agile methods.",
          translation: "اذكر بيان Agile (manifesto) ومبادئ طرق Agile.",
          answer:
            "The manifesto values: individuals and interactions over processes and tools; working software over comprehensive documentation; customer collaboration over contract negotiation; responding to change over following a plan. The items on the right still have value, but those on the left are valued more.\n" +
            "Principles (Figure 3.2): customer involvement (customers provide and prioritize requirements and evaluate iterations); embrace change (expect requirements to change); incremental delivery (customer specifies the requirements of each increment); maintain simplicity (in the software and in the process); people, not process (exploit team skills and let the team choose its own ways of working).",
          tags: ["Agile manifesto", "Principles"],
          ref: "Lecture 03 — 3.1 Agile methods",
        },
        {
          type: "essay",
          q: "3. What are the common characteristics of agile methods and in which situations do they work well?",
          translation:
            "ما الخصائص المشتركة لطرق Agile وفي أي مواقف تعمل جيدًا؟",
          answer:
            "Common characteristics: (1) specification, design and implementation are interleaved, with no detailed specification and minimal design documentation; (2) the system is developed in a series of increments, with end-users and stakeholders involved in specifying and evaluating each increment; (3) extensive tool support (automated testing, configuration management, integration, UI production tools).\n" +
            "Increments are small, with new releases typically every two or three weeks, and informal communication is used instead of formal documents.\n" +
            "They work well for product development of small or medium-sized products, and for custom systems within an organization with a committed customer and few external stakeholders or regulations.\n" +
            "They work because the customer and team can communicate continuously, the system is stand-alone, and co-located teams can use informal communication.",
          tags: ["Agile characteristics"],
          ref: "Lecture 03 — Chapter introduction and 3.1",
        },
        {
          type: "essay",
          q: "4. List and explain the main Extreme Programming practices.",
          translation: "اذكر واشرح أهم ممارسات Extreme Programming.",
          answer:
            "Incremental planning: requirements are recorded on story cards and the stories for a release are chosen by time available and priority; developers break them into tasks.\n" +
            "Small releases: the minimal useful set of functionality is released first and frequent releases add functionality.\n" +
            "Simple design: enough design to meet current requirements and no more. Test-first development: automated unit tests are written before the functionality.\n" +
            "Refactoring: continuous code improvement to keep code simple. Pair programming: developers work in pairs and check each other's work.\n" +
            "Collective ownership: anyone can change anything. Continuous integration: finished work is integrated at once and all unit tests must pass.\n" +
            "Sustainable pace: large overtime is not acceptable. On-site customer: a customer representative is available full time and defines acceptance tests.",
          tags: ["XP", "Practices"],
          ref: "Lecture 03 — 3.2 Agile development techniques (Figure 3.4)",
        },
        {
          type: "essay",
          q: "5. Explain user stories: how they are used in planning, and their advantages and problems.",
          translation:
            "اشرح قصص المستخدم (user stories): كيف تُستخدم في التخطيط ومميزاتها ومشاكلها.",
          answer:
            "A user story is a scenario of use that might be experienced by a system user. The customer works with the team to write a story card that briefly describes it; the example in the chapter is the 'Prescribing medication' story for the Mentcare system.\n" +
            "The team breaks stories into tasks, estimates effort, and the customer prioritizes the stories for the next release, aiming for functionality that can be implemented in about two weeks.\n" +
            "Advantage: people find stories easier to relate to than conventional requirements documents or use cases, and they help involve users in suggesting requirements.\n" +
            "Problem: completeness. It is hard to judge whether enough stories cover all essential requirements or whether a single story gives a true picture, because experienced users leave things out.",
          tags: ["User stories", "Story cards"],
          ref: "Lecture 03 — 3.2.1 User stories",
        },
        {
          type: "essay",
          q: "6. Explain refactoring: why XP uses it and what its limitations are.",
          translation: "اشرح الـ refactoring: لماذا تستخدمه XP وما حدوده.",
          answer:
            "Traditional software engineering says to design for change. XP discards this because anticipated changes often never materialize, so adding generality is wasted effort.\n" +
            "Instead the code is refactored constantly: the team looks for improvements and implements them immediately, even without an immediate need.\n" +
            "Reason: local changes during incremental development degrade the software structure (duplicated code, inappropriate reuse of parts). Refactoring improves structure and readability. Examples: reorganizing a class hierarchy to remove duplication, renaming attributes and methods, replacing similar code with library calls.\n" +
            "Limitations: development pressure may delay refactoring, and some changes cannot be handled by code-level refactoring and require architecture changes.",
          tags: ["Refactoring"],
          ref: "Lecture 03 — 3.2.2 Refactoring",
        },
        {
          type: "essay",
          q: "7. Explain test-first development and the problems of ensuring complete test coverage.",
          translation:
            "اشرح الـ test-first development ومشاكل ضمان تغطية اختبارات كاملة.",
          answer:
            "Test-first development: instead of writing code and then tests, tests are written before the code, so problems are discovered during development. Writing tests implicitly defines an interface and specification of behavior, reducing misunderstandings.\n" +
            "Key features in XP: test-first development, incremental test development from scenarios, user involvement in test development and validation, and automated testing frameworks such as JUnit. Each task generates one or more unit tests, and the customer helps develop acceptance tests.\n" +
            "It avoids test-lag, where implementation gets ahead of testing.\n" +
            "Coverage problems: programmers prefer programming and may write incomplete tests; some tests (for example display logic and screen workflow in a complex UI) are hard to write incrementally; a large set of tests may give a false impression of completeness and crucial parts may stay untested.",
          tags: ["Test-first", "Testing"],
          ref: "Lecture 03 — 3.2.3 Test-first development",
        },
        {
          type: "essay",
          q: "8. Discuss the advantages of pair programming and the results of studies on its productivity.",
          translation:
            "ناقش مميزات pair programming ونتائج الدراسات عن إنتاجيته.",
          answer:
            "Pair programming: two programmers sit at the same computer, and pairs are created dynamically so all team members work with each other.\n" +
            "Advantages: (1) it supports collective ownership and responsibility (egoless programming); (2) it acts as an informal review process since each line is seen by at least two people, cheaper and easier than formal inspections though it finds fewer errors; (3) it encourages refactoring because others benefit immediately.\n" +
            "Studies: with student volunteers (Williams et al.) productivity was comparable to two people working independently, because pairs discuss before development and have fewer false starts and less rework. Studies with experienced programmers (Arisholm et al.) found a significant loss of productivity, with quality benefits that did not fully compensate.\n" +
            "Knowledge sharing reduces project risk when team members leave, which may by itself make it worthwhile.",
          tags: ["Pair programming"],
          ref: "Lecture 03 — 3.2.4 Pair programming",
        },
        {
          type: "essay",
          q: "9. Describe the Scrum sprint cycle and the main Scrum roles and terms, and mention the benefits users report.",
          translation:
            "صِف دورة الـ sprint في Scrum وأهم الأدوار والمصطلحات والفوائد التي يذكرها المستخدمون.",
          answer:
            "Scrum is a framework for organizing agile projects that follows the agile manifesto but does not mandate specific practices such as pair programming or test-first development. It gives some external visibility of what is going on.\n" +
            "Cycle: the input is the product backlog. At the start of each sprint (2 to 4 weeks, fixed length) the Product Owner prioritizes items; the team selects what it can complete using velocity, creating the sprint backlog, and self-organizes. During the sprint the team holds daily Scrums, optionally using a Scrum board. At the end a review meeting improves the process and gives input to the next backlog review. Each sprint produces a potentially shippable product increment. Unfinished items return to the backlog.\n" +
            "Roles: development team (self-organizing, at most seven people), Product Owner (prioritizes backlog), ScrumMaster (ensures the process is followed and interfaces with the company; not formally a project manager).\n" +
            "Benefits: manageable chunks, unstable requirements do not hold up progress, team visibility improves communication and morale, customers see on-time increments and give feedback, and trust between customers and developers is established.",
          tags: ["Scrum", "Sprint"],
          ref: "Lecture 03 — 3.3 Agile project management",
        },
        {
          type: "essay",
          q: "10. Explain the issues of scaling agile methods and how Scrum is adapted for distributed development.",
          translation:
            "اشرح مشاكل توسيع طرق Agile وكيف يُكيَّف Scrum للتطوير الموزع.",
          answer:
            "Agile methods were designed for small co-located teams communicating informally. Scaling has two facets: scaling up to large systems too big for one small team, and scaling out from specialized teams to widespread use in a large company with many years of experience.\n" +
            "Scrum was designed for co-located teams meeting daily, but much development now involves distributed teams in different places, which gives access to lower cost staff and specialist skills and allows 24-hour development.\n" +
            "Distributed Scrum (Figure 3.10) requires: videoconferencing between product owner and team; the ScrumMaster located with the development team; the Product Owner visiting the developers to build trust; real-time communications such as instant messaging and video calls; continuous integration so everyone knows the product state; and a common development environment for all teams.",
          tags: ["Scaling agile", "Distributed Scrum"],
          ref: "Lecture 03 — 3.3 and 3.4 Scaling agile methods",
        },
      ],
    },
    {
      t: "المحاضرة الرابعة — الفصل الرابع (جزء 1): Requirements Engineering",
      d: "هندسة المتطلبات: متطلبات المستخدم والنظام، الوظيفية وغير الوظيفية، الاستنباط (Interviews, Ethnography, Stories, Scenarios) وتحليل المتطلبات.",
      id: "software-engineering-lec-04",

      pdf: "datenew/subjects/software-engineering/lectures/Software Engineering, 10th GLOBAL Edition - Chapter 4 - Requirements engineering_Part 1.pdf",
      pdf2: "/datenew/subjects/software-engineering/questions/Questions on each lecture/Lecture-04-Questions.pdf",

      // الفصل الرابع: هندسة المتطلبات (Requirements Engineering) - كتاب Software Engineering (Ian Sommerville)

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "مجموعة من الفيديوهات الشارحة باللغة العربية لمفاهيم هندسة المتطلبات، والمتطلبات الوظيفية وغير الوظيفية، وطرق الاستخراج.",
          links: [
            {
              t: "شرح المتطلبات الوظيفية وغير الوظيفية - جامعة الملك خالد",
              d: "شرح أكاديمي ميسر يوضح الفرق بين المتطلبات الوظيفية ومتطلبات النظام والقيود التشغيلية وفق المناهج الجامعية.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=mq3MjT0_fKI",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "تحليل النظم: Functional and Non-Functional Requirements",
              d: "فيديو يتناول كيفية تحديد متطلبات النظام والأداء القياسي وتوثيق الخدمة المطلوبة للمستخدمين.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=dfh6DI_y8Tk",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "هندسة المتطلبات واستخراج قصص المستخدم",
              d: "محاضرة تركز على كيفية استخراج المتطلبات وتحويلها إلى قصص مستخدم ومواصفات تقنية قابلة للتنفيذ.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=lf3V_3WFGzk",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "مقدمة في هندسة المتطلبات البرمجية",
              d: "استعراض شامل لأهمية تحديد المتطلبات وأصحاب المصلحة (Stakeholders) ودورهم في نجاح المشروع البرمجي.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=XDey5x06ECI",
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
            "محاضرات ودروس تعليمية عالمية باللغة الإنجليزية تشرح هندسة المتطلبات وتقنيات الاستخراج والنمذجة.",
          links: [
            {
              t: "Functional vs Non-Functional Requirements Explained",
              d: "شرح مبسط وعملي يعتمد على الأمثلة التطبيقية للتمييز بين سلوك النظام وخصائص الأداء والأمان.",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=IGnECjeVVJg",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Requirements Elicitation - University of Virginia (UVA)",
              d: "درس أكاديمي يوضح المرحلة الأولى من هندسة المتطلبات وكيفية التواصل مع العملاء لاستكشاف احتياجاتهم.",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=pSQRetBoaRE",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Mastering Requirements Elicitation Techniques",
              d: "فيديو متقدم يشرح آليات إجراء المقابلات والملاحظة الإثنوغرافية لاستكشاف المتطلبات الضمنية للأنظمة.",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=HXdQ3NsaJbg",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Requirement Elicitation Methods - Tutorials Point",
              d: "استعراض لتقنيات العصف الذهني والاستبيانات وتحليل المستندات لاستخراج المتطلبات البرمجية.",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=1UEzc2E71Hk",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },
        {
          category: "مواقع ومراجع",
          icon: "📚",
          description:
            "مقالات موثوقة ومراجع علمية تفصيلية تغطي مراحل هندسة المتطلبات وكتابة وثيقة SRS من منصة GeeksforGeeks.",
          links: [
            {
              t: "GeeksforGeeks: Requirements Engineering Process",
              d: "مقال يتناول دراسة الجدوى، واستخراج المتطلبات، والتوثيق، والتحقق، وإدارة التغيير في البرمجيات.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/software-engineering/software-engineering-requirements-engineering-process/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "GeeksforGeeks: Requirements Elicitation Techniques",
              d: "دليل مرجعي يتناول أساليب جمع المتطلبات مثل المقابلات، ورش العمل، والاستبيانات، والنماذج الأولية.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/software-engineering/software-engineering-requirements-elicitation/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "GeeksforGeeks: How to Write a Good SRS Document",
              d: "شرح لكيفية كتابة مواصفات متطلبات البرمجيات (SRS) المعيارية وخصائصها كالاطراد والصحة والقابلية للاختبار.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/software-engineering/how-to-write-a-good-srs-for-your-project/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "GeeksforGeeks: Non-Functional Requirements in System Design",
              d: "تحليل مفصل لمتطلبات المنتجات ومتطلبات التنظيمية والخارجية مثل الأداء والاعتمادية والخصوصية.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/system-design/what-are-non-functional-requirements-in-system-design-examples-definition/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
          ],
        },
        {
          category: "أدوات ومحاكاة",
          icon: "🔧",
          description:
            "أدوات برمجية ومصادر تفاعلية رسمية لرسم المخططات وتوثيق متطلبات الأساليب الرشيقة وإدارة المشاريع.",
          links: [
            {
              t: "draw.io - Diagramming Software",
              d: "أداة مجانية ورسمية لرسم مخططات UML ومخططات تدفق البيانات (DFD) ومخططات حالات الاستخدام (Use Cases).",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.drawio.com/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Atlassian Jira - Agile Project & Requirements Management",
              d: "منصة لإدارة متطلبات المشاريع وتتبع قصص المستخدمين (User Stories) والمهام البرمجية في بيئات Agile.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.atlassian.com/software/jira/free",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Visual Paradigm - Systems & Requirements Modeling Tool",
              d: "بيئة عمل متكاملة لتوثيق وتصميم متطلبات البرمجيات وإدارة نماذج UML وSysML والمواصفات المعمارية.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.visual-paradigm.com/",
                  type: "view",
                  color: "green",
                },
              ],
            },
          ],
        },
      ],
      questions: [
        {
          q: "1. What is requirements engineering (RE)?",
          options: [
            "The process of writing and testing the code that implements the system services",
            "The process of finding out, analyzing, documenting and checking the services and constraints of a system",
            "The process of estimating the cost, schedule and staffing of a software project",
            "The process of deploying the system and training its users",
          ],
          correct: 1,
          translation: "ما هي هندسة المتطلبات (RE)؟",
          explanation:
            "الصح هو التعريف الأساسي: اكتشاف وتحليل وتوثيق والتحقق من الخدمات والقيود. الاختيار الأقرب (كتابة الكود) غلط لأنه تنفيذ مش متطلبات.",
          tags: ["RE definition"],
          ref: "Chapter 4 — Introduction",
          likely: "high",
        },
        {
          q: "2. Which statement best describes USER requirements?",
          options: [
            "Statements, in natural language plus diagrams, of the services the system is expected to provide to its users and the constraints under which it must operate",
            "Detailed descriptions of the system's functions, services and operational constraints that define exactly what is to be implemented",
            "Formal mathematical models of the system behavior written for the developers",
            "Descriptions of the system architecture and software design decisions",
          ],
          correct: 0,
          translation:
            "أي عبارة تصف متطلبات المستخدم (User requirements) بشكل أفضل؟",
          explanation:
            "متطلبات المستخدم بلغة طبيعية ورسومات وعلى مستوى عالٍ. الاختيار الأول وصف لمتطلبات النظام (System requirements) وهو الأقرب للغلط.",
          tags: ["User requirements", "User vs System"],
          ref: "Chapter 4 — Introduction",
          likely: "high",
        },
        {
          q: "3. Which statement best describes SYSTEM requirements?",
          options: [
            "High-level abstract statements of services written in natural language for the client managers",
            "More detailed descriptions of the system's functions, services and operational constraints that should define exactly what is to be implemented",
            "Statements of the needs of the end-users written without any technical detail",
            "A short early study of whether the system is technically and financially feasible",
          ],
          correct: 1,
          translation: "أي عبارة تصف متطلبات النظام (System requirements)؟",
          explanation:
            "متطلبات النظام أكثر تفصيلًا وتحدد بالظبط إيه اللي هيتنفذ. الاختيار الأول يخص User requirements، والأخير يخص Feasibility study.",
          tags: ["System requirements", "User vs System"],
          ref: "Chapter 4 — Introduction",
          likely: "high",
        },
        {
          q: "4. The system requirements document is sometimes called a:",
          options: [
            "Feasibility study",
            "User requirements definition",
            "Functional specification",
            "Software design document",
          ],
          correct: 2,
          translation: "وثيقة متطلبات النظام بتتسمى أحيانًا:",
          explanation:
            "الكتاب بيقول إن System requirements document ممكن تتسمى Functional specification. User requirements definition هي المستوى الأعلى وليست نفس الوثيقة.",
          tags: ["System requirements"],
          ref: "Chapter 4 — Introduction",
          likely: "high",
        },
        {
          q: "5. Why should requirements be written at different levels of detail?",
          options: [
            "Because natural language cannot express functional requirements",
            "Because different types of readers use them in different ways",
            "Because every contract legally requires two separate documents",
            "Because non-functional requirements cannot appear in the same document as functional ones",
          ],
          correct: 1,
          translation: "ليه لازم نكتب المتطلبات بمستويات تفصيل مختلفة؟",
          explanation:
            "السبب إن القراء مختلفين (مديرين، مستخدمين، مهندسين، مطورين) وكل نوع يستخدمها بطريقة. باقي الاختيارات ادعاءات مش مذكورة في المحاضرة.",
          tags: ["User vs System", "Readers"],
          ref: "Chapter 4 — Introduction (Figure 4.2)",
          likely: "high",
        },
        {
          q: "6. Which of the following is a definition of system stakeholders?",
          options: [
            "Only the end-users who interact directly with the system",
            "Anyone who is affected by the system in some way and so has a legitimate interest in it",
            "Only the customers who pay for the development of the system",
            "Only the developers and managers of the contractor",
          ],
          correct: 1,
          translation: "أي مما يلي تعريف الـ Stakeholders؟",
          explanation:
            "الـ Stakeholders هم أي حد يتأثر بالنظام وله اهتمام مشروع به (مستخدمين، مديرين، جهات تنظيمية...). الاختيارات الباقية بتضيّق التعريف.",
          tags: ["Stakeholders"],
          ref: "Chapter 4 — Introduction",
          likely: "high",
        },
        {
          q: "7. Which statement describes FUNCTIONAL requirements?",
          options: [
            "Constraints on timing, the development process and standards imposed on the system",
            "Requirements that apply only to the system as a whole, such as reliability",
            "Statements of services the system should provide, how it should react to particular inputs, and how it should behave in particular situations",
            "Requirements derived only from laws and regulations",
          ],
          correct: 2,
          translation:
            "أي عبارة تصف المتطلبات الوظيفية (Functional requirements)؟",
          explanation:
            "الوظيفية = خدمات النظام وردود أفعاله وسلوكه. الاختيار الأول والثاني تعريف الـ Non-functional.",
          tags: ["Functional requirements"],
          ref: "Chapter 4 — Section 4.1",
          likely: "high",
        },
        {
          q: "8. Non-functional requirements often apply to:",
          options: [
            "Only the individual services offered to the users",
            "Only the user interface of the system",
            "Only the database and data representation layer",
            "The system as a whole rather than to individual system features or services",
          ],
          correct: 3,
          translation: "المتطلبات غير الوظيفية غالبًا بتنطبق على:",
          explanation:
            "الـ NFR بتخص النظام ككل (زي الأداء والاعتمادية). الاختيار الأول غلط لأنه وصف للمتطلبات الوظيفية.",
          tags: ["Non-functional requirements"],
          ref: "Chapter 4 — Section 4.1",
          likely: "high",
        },
        {
          q: "9. Why are non-functional requirements often more critical than individual functional requirements?",
          options: [
            "Failing to meet a non-functional requirement can make the whole system unusable, while users can usually work around a function that does not meet their needs",
            "Because they are always cheaper to verify than functional requirements",
            "Because they can always be implemented in a single component",
            "Because customers find it easier to express them as measurable numbers",
          ],
          correct: 0,
          translation: "ليه الـ NFR غالبًا أهم من المتطلبات الوظيفية الفردية؟",
          explanation:
            "لأن فشل NFR (زي الاعتمادية في طيارة) ممكن يخلي النظام كله غير صالح، بينما وظيفة واحدة ممكن نلف حواليها. الباقي عكس اللي في المحاضرة (التحقق منها غالبًا مكلف وصعب).",
          tags: ["Non-functional requirements", "Importance"],
          ref: "Chapter 4 — Section 4.1.2",
          likely: "high",
        },
        {
          q: "10. According to Figure 4.3, non-functional requirements are classified into:",
          options: [
            "Product, process and operational requirements",
            "User, system and domain requirements",
            "Product, organizational and external requirements",
            "Functional, organizational and legislative requirements",
          ],
          correct: 2,
          translation: "حسب الشكل 4.3، المتطلبات غير الوظيفية بتتقسم إلى:",
          explanation:
            "التصنيف الصحيح: Product و Organizational و External. الاختيار الثاني مخلوط بمفاهيم مش من الشكل.",
          tags: ["Types of NFR", "Figure 4.3"],
          ref: "Chapter 4 — Section 4.1.2 (Figure 4.3)",
          likely: "high",
        },
        {
          q: "11. The Mentcare requirement that the system must be available Mon–Fri, 08:30–17:30 with downtime not exceeding 5 seconds a day is an example of a:",
          options: [
            "Organizational requirement",
            "External requirement",
            "Functional requirement",
            "Product requirement",
          ],
          correct: 3,
          translation:
            "متطلب إتاحة Mentcare (الإتاحة من 8:30 لـ 17:30 وDowntime لا يزيد عن 5 ثواني) هو مثال على:",
          explanation:
            "الإتاحة بتحدد سلوك النظام وقت التشغيل فهي Product requirement. ما بتقولش وظيفة معينة فمش Functional.",
          tags: ["Product requirements", "Figure 4.4"],
          ref: "Chapter 4 — Section 4.1.2 (Figure 4.4)",
          likely: "high",
        },
        {
          q: "12. Which type of non-functional requirement is derived from policies and procedures in the customer's and developer's organizations?",
          options: [
            "Organizational requirements",
            "Product requirements",
            "External requirements",
            "Domain requirements",
          ],
          correct: 0,
          translation:
            "أي نوع من الـ NFR بيجي من سياسات وإجراءات منظمة العميل والمطوّر؟",
          explanation:
            "الـ Organizational requirements (زي معايير التطوير ولغة البرمجة وطريقة الدخول بالكارت). الـ External بتيجي من عوامل خارج المنظمة.",
          tags: ["Organizational requirements"],
          ref: "Chapter 4 — Section 4.1.2",
          likely: "high",
        },
        {
          q: "13. Regulatory, legislative and ethical requirements belong to which category of non-functional requirements?",
          options: [
            "Product requirements",
            "Organizational requirements",
            "Dependability requirements only",
            "External requirements",
          ],
          correct: 3,
          translation:
            "المتطلبات التنظيمية (Regulatory) والتشريعية والأخلاقية تتبع أي فئة؟",
          explanation:
            "هذه كلها مصدرها خارج النظام وعملية تطويره، فهي External requirements.",
          tags: ["External requirements"],
          ref: "Chapter 4 — Section 4.1.2 (Figure 4.3)",
          likely: "high",
        },
        {
          q: "14. Whenever possible, non-functional requirements should be written:",
          options: [
            "Quantitatively, so that they can be objectively tested",
            "As general goals such as ease of use",
            "Only in natural language without any numbers",
            "As part of the user interface design",
          ],
          correct: 0,
          translation: "كلما أمكن، المتطلبات غير الوظيفية يجب أن تُكتب:",
          explanation:
            "تُكتب بشكل كمّي قابل للقياس والاختبار. الأهداف العامة (Goals) تترك مجال للتفسير والخلاف.",
          tags: ["Testable NFR", "Goals vs requirements"],
          ref: "Chapter 4 — Section 4.1.2",
          likely: "high",
        },
        {
          q: "15. Which metric is used to specify the RELIABILITY of a system?",
          options: [
            "Training time",
            "Mean time to failure",
            "Processed transactions per second",
            "Percentage of target dependent statements",
          ],
          correct: 1,
          translation: "أي مقياس يُستخدم لتحديد الاعتمادية (Reliability)؟",
          explanation:
            "Mean time to failure من مقاييس الاعتمادية. Training time للـ Ease of use، والـ transactions/second للـ Speed، والنسبة الأخيرة للـ Portability.",
          tags: ["Metrics", "Figure 4.5"],
          ref: "Chapter 4 — Section 4.1.2 (Figure 4.5)",
          likely: "high",
        },
        {
          q: "16. Which pair of metrics is used to specify EASE OF USE?",
          options: [
            "Screen refresh time and user/event response time",
            "Megabytes and number of ROM chips",
            "Time to restart after failure and probability of data corruption",
            "Training time and number of help frames",
          ],
          correct: 3,
          translation:
            "أي زوج من المقاييس يُستخدم لتحديد سهولة الاستخدام (Ease of use)؟",
          explanation:
            "Ease of use = Training time + Number of help frames. الاختيار الأول مقاييس Speed، والثاني Size، والثالث Robustness.",
          tags: ["Metrics", "Figure 4.5"],
          ref: "Chapter 4 — Section 4.1.2 (Figure 4.5)",
          likely: "high",
        },
        {
          q: "17. What does CONSISTENCY mean for a functional requirements specification?",
          options: [
            "All services and information required by the user should be defined",
            "Requirements should not be contradictory",
            "Every requirement should be objectively testable",
            "Every requirement should be written in natural language",
          ],
          correct: 1,
          translation:
            "ماذا تعني الـ Consistency في مواصفات المتطلبات الوظيفية؟",
          explanation:
            "Consistency = عدم تناقض المتطلبات. الاختيار الأول هو تعريف Completeness (الأقرب للتشويش).",
          tags: ["Completeness", "Consistency"],
          ref: "Chapter 4 — Section 4.1.1",
          likely: "high",
        },
        {
          q: "18. Which of the following is NOT one of the three key questions that a feasibility study should answer?",
          options: [
            "Does the system contribute to the overall objectives of the organization?",
            "Can the system be implemented within schedule and budget using current technology?",
            "Have all stakeholders agreed on every detailed requirement?",
            "Can the system be integrated with other systems that are used?",
          ],
          correct: 2,
          translation:
            "أي مما يلي ليس من الأسئلة الثلاثة الأساسية في دراسة الجدوى (Feasibility study)؟",
          explanation:
            "الأسئلة الثلاثة: مساهمة النظام في أهداف المنظمة، إمكانية التنفيذ في الميزانية والجدول بتقنية حالية، والتكامل مع الأنظمة الأخرى. الاتفاق على كل المتطلبات مش منها.",
          tags: ["Feasibility study"],
          ref: "Chapter 4 — Introduction (Feasibility studies box)",
          likely: "high",
        },
        {
          q: "19. Which are the three key activities of the requirements engineering process?",
          options: [
            "Elicitation and analysis, specification, and validation",
            "Elicitation, design, and implementation",
            "Specification, testing, and maintenance",
            "Elicitation, validation, and deployment",
          ],
          correct: 0,
          translation: "ما الأنشطة الثلاثة الأساسية في عملية هندسة المتطلبات؟",
          explanation:
            "الأنشطة: Elicitation & analysis، Specification، Validation. باقي الاختيارات فيها مراحل من دورة تطوير البرمجيات مش من RE.",
          tags: ["RE process"],
          ref: "Chapter 4 — Section 4.2",
          likely: "high",
        },
        {
          q: "20. How is the requirements engineering process presented in Figure 4.6?",
          options: [
            "As a strictly sequential process where each activity finishes before the next starts",
            "As a one-pass process that ends with system implementation",
            "As a process where validation is done only once at the very end",
            "As an iterative spiral in which elicitation, specification and validation are interleaved",
          ],
          correct: 3,
          translation: "كيف تُعرض عملية هندسة المتطلبات في الشكل 4.6؟",
          explanation:
            "الشكل Spiral: الأنشطة متداخلة وتتكرر. الاختيارات الأخرى بتصور العملية خطية، والمحاضرة بتؤكد إنها iterative.",
          tags: ["RE process", "Spiral model", "Figure 4.6"],
          ref: "Chapter 4 — Section 4.2 (Figure 4.6)",
          likely: "high",
        },
        {
          q: "21. Which of the following is NOT a reason why eliciting requirements from stakeholders is difficult?",
          options: [
            "Stakeholders often do not know what they want except in general terms",
            "Political factors may influence the requirements of the system",
            "The economic and business environment changes during the analysis",
            "Stakeholders always know exactly what they want and express it in precise technical terms",
          ],
          correct: 3,
          translation:
            "أي مما يلي ليس من أسباب صعوبة استنباط المتطلبات (Elicitation)؟",
          explanation:
            "الصعوبة سببها إن المعنيين غالبًا مش عارفين بالظبط عايزين إيه. الاختيار الصحيح عكس ده تمامًا، فهو ليس سببًا.",
          tags: ["Elicitation", "Difficulties"],
          ref: "Chapter 4 — Section 4.3",
          likely: "high",
        },
        {
          q: "22. What is the correct order of the activities in the requirements elicitation and analysis process (Figure 4.7)?",
          options: [
            "Classification and organization → discovery and understanding → documentation → prioritization and negotiation",
            "Discovery and understanding → prioritization and negotiation → classification and organization → documentation",
            "Discovery and understanding → classification and organization → prioritization and negotiation → documentation",
            "Documentation → discovery and understanding → classification and organization → prioritization and negotiation",
          ],
          correct: 2,
          translation:
            "ما الترتيب الصحيح لأنشطة الـ Elicitation and Analysis (الشكل 4.7)؟",
          explanation:
            "الترتيب: Discovery → Classification → Prioritization & negotiation → Documentation. الاختيار الثاني بيقدّم الـ prioritization قبل التصنيف وهو الأقرب للغلط.",
          tags: ["Elicitation and analysis", "Figure 4.7"],
          ref: "Chapter 4 — Section 4.3 (Figure 4.7)",
          likely: "high",
        },
        {
          q: "23. Which activity of the elicitation and analysis process is concerned with finding and resolving conflicts between stakeholders' requirements?",
          options: [
            "Requirements classification and organization",
            "Requirements prioritization and negotiation",
            "Requirements discovery and understanding",
            "Requirements documentation",
          ],
          correct: 1,
          translation:
            "أي نشاط مسؤول عن اكتشاف وحل التعارضات بين متطلبات أصحاب المصلحة؟",
          explanation:
            "الـ Prioritization and negotiation هو اللي بيحل التعارض عن طريق التفاوض. الـ Classification بيجمّع المتطلبات المرتبطة فقط.",
          tags: ["Prioritization and negotiation"],
          ref: "Chapter 4 — Section 4.3",
          likely: "high",
        },
        {
          q: "24. What is a VIEWPOINT in requirements analysis?",
          options: [
            "A working prototype shown to the stakeholders for evaluation",
            "A way of collecting and organizing a set of requirements from a group of stakeholders who have something in common",
            "A diagram of the system architecture showing the subsystems",
            "A meeting where stakeholders negotiate requirement conflicts",
          ],
          correct: 1,
          translation: "ما هو الـ Viewpoint في تحليل المتطلبات؟",
          explanation:
            "الـ Viewpoint = تجميع متطلبات مجموعة stakeholders بينهم قاسم مشترك. الاجتماع التفاوضي نشاط مختلف.",
          tags: ["Viewpoints"],
          ref: "Chapter 4 — Section 4.3 (Viewpoints box)",
          likely: "high",
        },
        {
          q: "25. What are the two fundamental approaches to requirements elicitation?",
          options: [
            "Prototyping and testing",
            "Reviews and feasibility studies",
            "Interviewing and observation (ethnography)",
            "Scenarios and user stories",
          ],
          correct: 2,
          translation: "ما الأسلوبان الأساسيان لاستنباط المتطلبات؟",
          explanation:
            "الأساسيان: المقابلات (Interviewing) والملاحظة (Ethnography). الـ Stories/Scenarios أدوات لالتقاط المعلومات وليست الأسلوبين الأساسيين.",
          tags: ["Elicitation techniques"],
          ref: "Chapter 4 — Section 4.3.1",
          likely: "high",
        },
        {
          q: "26. What is a CLOSED interview?",
          options: [
            "An interview with no predefined agenda where a range of issues is explored",
            "An interview where the analyst watches people doing their job",
            "An interview held only with external stakeholders",
            "An interview where the stakeholder answers a predefined set of questions",
          ],
          correct: 3,
          translation: "ما هي المقابلة المغلقة (Closed interview)؟",
          explanation:
            "المغلقة = أسئلة محددة مسبقًا. الاختيار الأول وصف للمقابلة المفتوحة (Open).",
          tags: ["Interviewing", "Closed vs Open"],
          ref: "Chapter 4 — Section 4.3.1.1",
          likely: "high",
        },
        {
          q: "27. Interviews are NOT an effective technique for eliciting knowledge about:",
          options: [
            "Organizational requirements and constraints",
            "The overall understanding of what stakeholders do",
            "How stakeholders might interact with the new system",
            "The difficulties stakeholders face with current systems",
          ],
          correct: 0,
          translation: "المقابلات ليست فعّالة في استنباط المعرفة عن:",
          explanation:
            "لأن في علاقات قوة خفية والناس مترددة تتكلم عن السياسة والتنظيم الحقيقي. الباقي هي نقاط قوة المقابلات.",
          tags: ["Interviewing", "Limitations"],
          ref: "Chapter 4 — Section 4.3.1.1",
          likely: "high",
        },
        {
          q: "28. Which of the following does the chapter recommend to get an interview discussion going?",
          options: [
            "A springboard question, a requirements proposal, or working together on a prototype",
            'Asking the stakeholder to simply "tell me what you want"',
            "Handing the stakeholder the complete formal specification",
            "Running a completely open-ended discussion with no questions",
          ],
          correct: 0,
          translation: "ما الذي توصي به المحاضرة لبدء النقاش في المقابلة؟",
          explanation:
            'نستخدم springboard question أو requirements proposal أو prototype. قول "قولّي عايز إيه" مش بيدّي معلومات مفيدة.',
          tags: ["Interviewing", "Effective interviewer"],
          ref: "Chapter 4 — Section 4.3.1.1",
          likely: "high",
        },
        {
          q: "29. What is ethnography in requirements elicitation?",
          options: [
            "A structured interview with a predefined set of questions",
            "An observational technique where the analyst immerses himself or herself in the working environment where the system will be used",
            "A technique for grouping requirements into coherent clusters",
            "A technique for writing high-level narrative descriptions of system use",
          ],
          correct: 1,
          translation: "ما هي الـ Ethnography في استنباط المتطلبات؟",
          explanation:
            "الـ Ethnography ملاحظة المحلل لبيئة العمل الفعلية. الاختيار الأول مقابلة مغلقة، والأخير عن Stories.",
          tags: ["Ethnography"],
          ref: "Chapter 4 — Section 4.3.1.2",
          likely: "high",
        },
        {
          q: "30. Ethnography is particularly effective for discovering which two types of requirements?",
          options: [
            "Requirements derived from formal business process definitions and from legislation",
            "Organizational requirements and domain requirements",
            "Requirements for innovative new products and for regulatory approval",
            "Requirements derived from how people actually work, and from cooperation and awareness of other people's activities",
          ],
          correct: 3,
          translation:
            "الـ Ethnography فعّالة بشكل خاص في اكتشاف أي نوعين من المتطلبات؟",
          explanation:
            "تكتشف طريقة العمل الفعلية (مش الرسمية) والتعاون والوعي بأنشطة الآخرين. الاختيارات الأخرى هي أشياء الـ Ethnography ضعيفة فيها.",
          tags: ["Ethnography"],
          ref: "Chapter 4 — Section 4.3.1.2",
          likely: "high",
        },
        {
          q: "31. What is the main difference between STORIES and SCENARIOS?",
          options: [
            "Stories are structured with inputs and outputs, whereas scenarios are narrative high-level text",
            "Stories describe only errors, whereas scenarios describe only the normal flow",
            "Stories are narrative high-level descriptions of system use, whereas scenarios are structured descriptions with specific information such as inputs and outputs",
            "Stories are written by developers, whereas scenarios are written by users",
          ],
          correct: 2,
          translation: "ما الفرق الرئيسي بين الـ Stories والـ Scenarios؟",
          explanation:
            "Stories سردية وعالية المستوى (الصورة الكبيرة)، وScenarios مهيكلة وأكثر تفصيلًا. الاختيار الأول معكوس.",
          tags: ["Stories", "Scenarios"],
          ref: "Chapter 4 — Section 4.3.2",
          likely: "high",
        },
        {
          q: "32. Which of the following is NOT a part of a general scenario?",
          options: [
            "An estimate of the cost of implementing the scenario",
            "A description of the normal flow of events",
            "A description of what can go wrong and how problems are handled",
            "A description of the system state when the scenario ends",
          ],
          correct: 0,
          translation: "أي مما يلي ليس جزءًا من الـ Scenario العام؟",
          explanation:
            "عناصر الـ Scenario: الافتراض الأولي، التدفق الطبيعي، ما قد يسوء، الأنشطة المتزامنة، حالة النظام عند النهاية. تقدير التكلفة ليس منها.",
          tags: ["Scenarios"],
          ref: "Chapter 4 — Section 4.3.2",
          likely: "high",
        },
        {
          q: "33. How should USER requirements be written?",
          options: [
            "In natural language with simple tables, forms and intuitive diagrams, without software jargon or formal notations",
            "Using formal mathematical notations to avoid ambiguity",
            "Using software jargon and structured notations that developers understand",
            "Using system architecture and design details",
          ],
          correct: 0,
          translation: "كيف تُكتب متطلبات المستخدم؟",
          explanation:
            "تُكتب بلغة طبيعية وجداول ورسومات بسيطة لأن قراءها غير تقنيين. الصيغ الرسمية والجارجون خاصة بمتطلبات النظام.",
          tags: ["Requirements specification", "User requirements"],
          ref: "Chapter 4 — Section 4.4",
          likely: "high",
        },
        {
          q: "34. If an organization decides that an off-the-shelf software product can meet its needs, the focus should be on developing:",
          options: [
            "A detailed functional specification",
            "Domain requirements",
            "Product requirements",
            "Information requirements",
          ],
          correct: 3,
          translation:
            "لو قررت المنظمة أن منتجًا جاهزًا يلبي احتياجاتها، يجب التركيز على:",
          explanation:
            "في هذه الحالة التفصيل الوظيفي بلا فائدة، والأفضل تحديد Information requirements (المعلومات اللازمة وطريقة تقديمها).",
          tags: ["Information requirements"],
          ref: "Chapter 4 — Section 4.1.1",
          likely: "medium",
        },
        {
          q: "35. Domain requirements are derived from:",
          options: [
            "The policies of the developing organization only",
            "The interviews conducted with end-users only",
            "The application domain of the system rather than from the specific needs of system users",
            "The budget constraints of the customer",
          ],
          correct: 2,
          translation: "متطلبات الـ Domain تُشتق من:",
          explanation:
            "مصدرها مجال تطبيق النظام نفسه وليس احتياجات المستخدمين المحددة. المشكلة أن المهندسين قد لا يفهمون الـ domain.",
          tags: ["Domain requirements"],
          ref: "Chapter 4 — Section 4.1.1 (Domain requirements box)",
          likely: "medium",
        },
        {
          q: "36. How does combining ethnography with prototyping help (Figure 4.8)?",
          options: [
            "It removes the need for any stakeholder meetings",
            "It guarantees that all organizational requirements are discovered",
            "Ethnography informs the prototype so fewer refinement cycles are needed, and prototyping focuses the ethnography on specific questions",
            "It replaces the need for requirements validation",
          ],
          correct: 2,
          translation:
            "كيف يفيد الجمع بين الـ Ethnography والـ Prototyping (الشكل 4.8)؟",
          explanation:
            "الـ Ethnography تقلل دورات تحسين الـ prototype، والـ prototype يوجّه الـ ethnography لأسئلة محددة. باقي الاختيارات مبالغات.",
          tags: ["Ethnography", "Prototyping", "Figure 4.8"],
          ref: "Chapter 4 — Section 4.3.1.2 (Figure 4.8)",
          likely: "medium",
        },
        {
          q: "37. What does the Nokia versus Apple example show about ethnography?",
          options: [
            "Ethnography helps in understanding existing systems but does not always help with innovation",
            "Ethnography is the best technique for discovering innovative product ideas",
            "Ethnography should never be used for new product development",
            "Ethnography is effective for discovering broad organizational requirements",
          ],
          correct: 0,
          translation: "ماذا يوضح مثال Nokia مقابل Apple عن الـ Ethnography؟",
          explanation:
            "تساعد في فهم النظم الحالية لكن لا تضمن الابتكار (Apple تجاهلت الاستخدام الحالي وابتكرت). الاختيار الأول عكس المثال.",
          tags: ["Ethnography", "Innovation"],
          ref: "Chapter 4 — Section 4.3.1.2",
          likely: "medium",
        },
        {
          type: "essay",
          q: "1. Define requirements engineering, and distinguish between user requirements and system requirements. Use the Mentcare monthly report example.",
          translation:
            "عرّف هندسة المتطلبات، وفرّق بين متطلبات المستخدم ومتطلبات النظام مستخدمًا مثال Mentcare.",
          answer:
            "Requirements engineering (RE) is the process of finding out, analyzing, documenting and checking the services that a system should provide and the constraints on its operation.\n" +
            "User requirements: statements, in natural language plus diagrams, of the services the system is expected to provide to users and the constraints under which it must operate. They are high-level and general.\n" +
            "System requirements: more detailed descriptions of the system's functions, services and operational constraints. They define exactly what is to be implemented (sometimes called a functional specification) and may be part of the contract.\n" +
            'Example: the user requirement "The Mentcare system shall generate monthly management reports showing the cost of drugs prescribed by each clinic" is expanded into several system requirements (1.1 to 1.5), e.g. generate the report on the last working day after 17:30, one report per clinic, separate reports per dose unit, and restricted access.\n' +
            "They are written differently because different readers use them differently (managers and end-users vs. architects and developers).",
          tags: ["RE definition", "User vs System"],
          ref: "Chapter 4 — Introduction (Figures 4.1, 4.2)",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. Compare functional and non-functional requirements. Give an example of each from the Mentcare system.",
          translation:
            "قارن بين المتطلبات الوظيفية وغير الوظيفية مع مثال لكل منهما من نظام Mentcare.",
          answer:
            'Functional requirements: statements of services the system should provide, how it should react to particular inputs, and how it should behave in particular situations (sometimes also what it should not do). Example: "A user shall be able to search the appointments lists for all clinics."\n' +
            "Non-functional requirements: constraints on the services or functions offered by the system, such as timing constraints, constraints on the development process, and constraints imposed by standards. They often apply to the system as a whole. Example: the system shall be available Mon-Fri 08:30-17:30 with downtime not exceeding 5 seconds a day.\n" +
            "Non-functional requirements are often more critical: failing to meet one can make the whole system unusable.\n" +
            "The distinction is not clear-cut: a security requirement (limit access to authorized users) can generate functional requirements such as user authentication facilities.",
          tags: ["Functional requirements", "Non-functional requirements"],
          ref: "Chapter 4 — Section 4.1",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Draw and label the classification of non-functional requirements (Figure 4.3), and give an example of each type.",
          translation:
            "ارسم واكتب أسماء تصنيف المتطلبات غير الوظيفية (الشكل 4.3) مع مثال لكل نوع.",
          answer:
            "Non-functional requirements are divided into three branches:\n" +
            "1) Product requirements (performance, space, usability, efficiency, dependability, security). They specify or constrain runtime behavior. Example: availability and allowed downtime.\n" +
            "2) Organizational requirements (operational, development, environmental). They come from policies and procedures of the customer's and developer's organizations. Example: users identify themselves using their health authority identity card.\n" +
            "3) External requirements (regulatory, ethical, legislative; safety/security and accounting sub-types). They come from factors external to the system and its development process. Example: implementing the patient privacy provisions of a national privacy standard.",
          tags: ["Types of NFR", "Figure 4.3"],
          ref: "Chapter 4 — Section 4.1.2 (Figures 4.3, 4.4)",
          likely: "high",
        },
        {
          type: "essay",
          q: '4. Explain why non-functional requirements should be written quantitatively. Rewrite the goal "The system should be easy to use by medical staff" as a testable requirement and list metrics for non-functional properties.',
          translation:
            'اشرح لماذا يجب كتابة المتطلبات غير الوظيفية بشكل كمّي. أعد كتابة الهدف "النظام سهل الاستخدام" كمتطلب قابل للاختبار واذكر مقاييس الخصائص غير الوظيفية.',
          answer:
            "Stakeholders often propose goals (ease of use, fast response, recovery from failure). Goals leave scope for interpretation and dispute after delivery, and cannot be objectively verified.\n" +
            "Quantitative requirements can be objectively tested during system testing (e.g. by instrumenting the software to count errors).\n" +
            'Testable version: "Medical staff shall be able to use all the system functions after two hours of training. After this training, the average number of errors made by experienced users shall not exceed two per hour of system use."\n' +
            "Metrics (Figure 4.5): Speed = transactions/second, response time, screen refresh time; Size = megabytes, number of ROM chips; Ease of use = training time, number of help frames; Reliability = mean time to failure, probability of unavailability, rate of failure occurrence, availability; Robustness = time to restart after failure, percentage of events causing failure, probability of data corruption on failure; Portability = percentage of target dependent statements, number of target systems.\n" +
            "Difficulties: customers struggle to translate goals into measurable requirements, some goals (e.g. maintainability) have no simple metrics, and verification can be costly.",
          tags: ["Testable NFR", "Metrics", "Figure 4.5"],
          ref: "Chapter 4 — Section 4.1.2 (Figure 4.5)",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. Explain the stages of the requirements elicitation and analysis process (Figure 4.7).",
          translation: "اشرح مراحل عملية استنباط وتحليل المتطلبات (الشكل 4.7).",
          answer:
            "It is an iterative process with continual feedback between activities; the cycle starts with discovery and ends with documentation, and understanding improves with each round.\n" +
            "1) Requirements discovery and understanding: interacting with stakeholders to discover their requirements, including domain requirements and documentation.\n" +
            "2) Requirements classification and organization: grouping related requirements into coherent clusters.\n" +
            "3) Requirements prioritization and negotiation: prioritizing requirements and resolving conflicts between stakeholders through negotiation and compromise.\n" +
            "4) Requirements documentation: documenting the requirements (draft document, whiteboards, wikis or shared documents) as input to the next round of the spiral, using simple language and diagrams.",
          tags: ["Elicitation and analysis", "Figure 4.7"],
          ref: "Chapter 4 — Section 4.3 (Figure 4.7)",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. List and explain the reasons why eliciting and understanding requirements from stakeholders is difficult.",
          translation:
            "اذكر واشرح أسباب صعوبة استنباط وفهم المتطلبات من أصحاب المصلحة.",
          answer:
            "1) Stakeholders often do not know what they want except in general terms, find it hard to articulate it, and may make unrealistic demands.\n" +
            "2) Stakeholders express requirements in their own terms with implicit knowledge of their work, which engineers without domain experience may not understand.\n" +
            "3) Different stakeholders with diverse requirements express them differently; engineers must find all sources and discover commonalities and conflicts.\n" +
            "4) Political factors may influence requirements, e.g. managers demanding requirements that increase their influence.\n" +
            "5) The economic and business environment is dynamic; requirements' importance changes and new stakeholders may appear.",
          tags: ["Elicitation", "Difficulties"],
          ref: "Chapter 4 — Section 4.3",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. Compare interviewing and ethnography as requirements elicitation techniques, mentioning the advantages and disadvantages of each.",
          translation:
            "قارن بين المقابلات والـ Ethnography كأساليب لاستنباط المتطلبات مع ذكر المميزات والعيوب.",
          answer:
            "Interviewing: talking to people about what they do. Types: closed (predefined questions) and open (no predefined agenda); in practice a mixture.\n" +
            "Advantages of interviews: good for an overall understanding of what stakeholders do, how they might use the new system and their difficulties with current systems; people like talking about their work.\n" +
            "Disadvantages of interviews: stakeholders rarely give specific detailed requirements without a prototype; domain jargon and tacit knowledge are hard to elicit; not effective for organizational requirements because of power relationships and reluctance to discuss politics; may miss essential information.\n" +
            "Ethnography: an analyst immerses himself or herself in the working environment and observes day-to-day work.\n" +
            "Advantages of ethnography: discovers implicit requirements reflecting how people actually work (not the formal process) and requirements from cooperation and awareness of others' activities; reveals critical process details missed by other techniques.\n" +
            "Disadvantages of ethnography: focused on the end-user, so not effective for broader organizational or domain requirements or for innovation.\n" +
            "Conclusion: use a mix of both, with other techniques.",
          tags: ["Interviewing", "Ethnography", "Comparison"],
          ref: "Chapter 4 — Section 4.3.1",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. What is the difference between stories and scenarios? List what a scenario may include.",
          translation:
            "ما الفرق بين الـ Stories والـ Scenarios؟ واذكر ما قد يتضمنه الـ Scenario.",
          answer:
            "Stories and scenarios are essentially the same: a description of how the system can be used for a particular task. The difference is in structure and level of detail.\n" +
            'Stories: narrative text, high-level description of system use; good for setting out the "big picture" and reaching a wider community (e.g. the iLearn photo-sharing story).\n' +
            "Scenarios: structured descriptions of example user interaction sessions with specific information such as inputs and outputs; more detailed and used to propose requirements.\n" +
            "A scenario may include: (1) what the system and users expect when it starts, (2) the normal flow of events, (3) what can go wrong and how it is handled, (4) other activities going on at the same time, (5) the system state when the scenario ends.",
          tags: ["Stories", "Scenarios"],
          ref: "Chapter 4 — Section 4.3.2 (Figures 4.9, 4.10)",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. What is a feasibility study? State the three key questions it should answer.",
          translation:
            "ما هي دراسة الجدوى؟ اذكر الأسئلة الثلاثة الرئيسية التي يجب أن تجيب عنها.",
          answer:
            "A feasibility study is a short, focused study early in the RE process that assesses whether the system is technically and financially feasible, helping management decide whether to go ahead with procurement or development.\n" +
            "Key questions: (1) Does the system contribute to the overall objectives of the organization? (2) Can the system be implemented within schedule and budget using current technology? (3) Can the system be integrated with other systems that are used?\n" +
            "If the answer to any of these is no, you should probably not go ahead with the project.",
          tags: ["Feasibility study"],
          ref: "Chapter 4 — Introduction (Feasibility studies box)",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Explain the spiral view of the requirements engineering process (Figure 4.6).",
          translation:
            "اشرح المنظور الحلزوني (Spiral) لعملية هندسة المتطلبات (الشكل 4.6).",
          answer:
            "RE involves three key activities: elicitation and analysis, specification, and validation. In practice they are interleaved and organized as an iterative spiral; the output is a system requirements document.\n" +
            "Effort on each activity depends on the stage of the process, the type of system and the available budget.\n" +
            "Early iterations focus on high-level business requirements and user requirements; outer rings focus on more detailed system requirements and non-functional requirements.\n" +
            "The number of iterations can vary, so the spiral can be exited after some or all user requirements are elicited. Agile development can be used instead of prototyping so requirements and implementation are developed together.\n" +
            "Requirements change in virtually all systems, so changes must be managed (requirements management).",
          tags: ["RE process", "Spiral model", "Figure 4.6"],
          ref: "Chapter 4 — Section 4.2 (Figure 4.6)",
          likely: "medium",
        },
        {
          type: "essay",
          q: "11. Who are the system stakeholders? Give examples of Mentcare stakeholders.",
          translation:
            "من هم الـ Stakeholders؟ اذكر أمثلة من أصحاب المصلحة في نظام Mentcare.",
          answer:
            "System stakeholders include anyone affected by the system in some way and so anyone with a legitimate interest in it: end-users, managers, and external stakeholders such as regulators who certify acceptability.\n" +
            "Mentcare examples: patients and their relatives; doctors; nurses; medical receptionists; IT staff; a medical ethics manager; health care managers; medical records staff.",
          tags: ["Stakeholders"],
          ref: "Chapter 4 — Introduction",
          likely: "medium",
        },
        {
          type: "essay",
          q: "12. Explain why it is only possible to achieve completeness and consistency for very small systems.",
          translation:
            "اشرح لماذا يمكن تحقيق الـ Completeness والـ Consistency فقط للأنظمة الصغيرة جدًا.",
          answer:
            "Completeness means all services and information required by the user are defined; consistency means requirements are not contradictory.\n" +
            "Reason 1: it is easy to make mistakes and omissions when writing specifications for large, complex systems.\n" +
            "Reason 2: large systems have many stakeholders with different backgrounds and expectations, whose needs are often inconsistent. These inconsistencies may only be discovered after deeper analysis or during development.\n" +
            "Imprecision can also lead to disputes: developers may interpret an ambiguous requirement in the way that is easiest to implement (e.g. the Mentcare search requirement).",
          tags: ["Completeness", "Consistency"],
          ref: "Chapter 4 — Section 4.1.1",
          likely: "medium",
        },
        {
          type: "essay",
          q: "13. Explain why non-functional requirements are difficult to implement and trace, and how they relate to functional requirements.",
          translation:
            "اشرح لماذا يصعب تنفيذ وتتبع المتطلبات غير الوظيفية وكيف ترتبط بالمتطلبات الوظيفية.",
          answer:
            "Their implementation may be spread throughout the system, for two reasons:\n" +
            "1) They may affect the overall architecture rather than individual components (e.g. organizing the system to minimize communication between components to meet performance requirements).\n" +
            "2) A single non-functional requirement, such as security, may generate several related functional requirements (new services) and may also constrain existing requirements, e.g. by limiting access to information.\n" +
            "Non-functional requirements also conflict and interact with others (e.g. a card-reader identification requirement conflicts with mobile access from tablets or smartphones).\n" +
            "Ideally, highlight requirements related to emergent properties such as performance or reliability, e.g. in a separate section.",
          tags: ["Non-functional requirements", "Emergent properties"],
          ref: "Chapter 4 — Section 4.1.2",
          likely: "medium",
        },
        {
          type: "essay",
          q: "14. Describe how ethnography can be combined with prototyping, and discuss its limitation for innovation (Nokia vs Apple).",
          translation:
            "صف كيف يمكن دمج الـ Ethnography مع الـ Prototyping، وناقش حدودها في الابتكار (Nokia مقابل Apple).",
          answer:
            "Figure 4.8: ethnographic analysis informs generic system development and prototyping, so fewer prototype refinement cycles are needed. Prototype evaluation identifies problems and questions that are discussed in debriefing meetings and then guide focused ethnography in the next phase.\n" +
            "Limitation: ethnography helps to understand existing systems but not always to innovate. Nokia is said to have used ethnography to see how people used phones, whereas Apple ignored current use and revolutionized the industry with the iPhone.\n" +
            "Because of its end-user focus it is not effective for broader organizational or domain requirements, so use it with other techniques.",
          tags: ["Ethnography", "Prototyping", "Figure 4.8"],
          ref: "Chapter 4 — Section 4.3.1.2 (Figure 4.8)",
          likely: "medium",
        },
        {
          type: "essay",
          q: "15. What makes an effective interviewer? Mention the difficulties of eliciting domain knowledge in interviews.",
          translation:
            "ما الذي يجعل المحاور فعّالًا؟ اذكر صعوبات استنباط معرفة المجال (Domain knowledge) في المقابلات.",
          answer:
            'An effective interviewer is open-minded, avoids preconceived ideas, and is willing to change his or her mind if surprising requirements appear; and prompts the interviewee with a springboard question, a requirements proposal, or a prototype instead of "tell me what you want".\n' +
            "Difficulties with domain knowledge: (1) specialists use jargon in a precise and subtle way that engineers may misunderstand; (2) some knowledge is so familiar that stakeholders find it hard to explain or think it is not worth mentioning (e.g. the librarian cataloguing every acquisition).\n" +
            "Interviewing alone may miss essential information, so combine it with other techniques.",
          tags: ["Interviewing", "Domain knowledge"],
          ref: "Chapter 4 — Section 4.3.1.1",
          likely: "medium",
        },
      ],
    },
    {
      t: "المحاضرة الخامسة — الفصل الرابع (جزء 2): Requirements Engineering (Spec, Validation, Change)",
      d: "هندسة المتطلبات — الفصول 4.4 حتى 4.6 من كتاب Sommerville: مواصفة المتطلبات، التحقق، وإدارة التغيير.",
      id: "software-engineering-lec-05",
      pdf: "datenew/subjects/software-engineering/lectures/lec 5/Software Engineering, 10th GLOBAL Edition - Chapter 4 - Requirements engineering-lec 5.pdf",
      pdf2: "datenew/subjects/software-engineering/questions/Questions on each lecture/Lecture-05-Questions.pdf",
      // المحاضرة: Lecture 5 (Chapter 4, Lec : 2) — Requirements Engineering (Sommerville Ch.4 — Sections 4.4-4.6) — موضوعها: مواصفة المتطلبات، التحقق، وإدارة تغيير المتطلبات، use cases، SRS، traceability.
      notes: "الاسئلة المطلوب حله من 1 لي 8.",
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شرح بالعربي لمواضيع هندسة المتطلبات: مواصفة المتطلبات، SRS، use cases، و traceability — مناسب لمراجعة المحاضرة كاملة.",
          links: [
            {
              t: "كورس هندسة متطلبات البرمجيات (Playlist)",
              d: "سلسلة محاضرات بالعربي تغطي أساسيات هندسة المتطلبات: تعريفها، أنواعها، عملية elicitation و specification و validation. مناسب لمراجعة القسم 4.4 و 4.5 من المحاضرة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ تشغيل القائمة",
                  url: "https://www.youtube.com/playlist?list=PLquXYvvn8Qk-vWE-6e8w8YKz-qv7gRFxG",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "هندسة البرمجيات — شرح كتاب Sommerville (Playlist)",
              d: "كورس شامل بالعربي لكتاب Sommerville العالمي (نفس كتاب المحاضرة). يشمل محاضرات عن Requirements Engineering وتطبيقاتها. مناسب لفهم السياق العام للمحاضرة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ تشغيل القائمة",
                  url: "https://www.youtube.com/playlist?list=PLSdxbt9aypHLpUEjVa96utjc_lcDndJ8K",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Requirements Engineering - Lecture 1 (بالعربي)",
              d: "محاضرة مقدمة في هندسة المتطلبات بالعربي تشرح المفاهيم الأساسية: functional vs non-functional requirements، وعملية requirements engineering. مناسب لمراجعة تعريفات القسم 4.4.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة",
                  url: "https://www.youtube.com/watch?v=lrIe_mI4asE",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "UML Use Case Diagram — شرح بالعربي",
              d: "شرح عربي لمخطط حالات الاستخدام (Use Case Diagram): الممثلون (actors)، التفاعلات، والعلاقات. مناسب لفهم القسم 4.4.3 من المحاضرة عن use cases و UML.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة",
                  url: "https://www.youtube.com/watch?v=nF18GZmTiYQ",
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
            "مصادر فيديو بالإنجليزي لتعميق الفهم: SRS document، use case diagrams، و requirements validation. ملاحظة: الزراي نوع search لأنه يفتح صفحة بحث يوتيوب لا فيديو محدد.",
          links: [
            {
              t: "🔎 بحث في يوتيوب: Requirements Engineering Tutorial",
              d: "صفحة بحث يوتيوب تعرض عشرات الفيديوهات العالمية عن هندسة المتطلبات. اختر فيديو مشاهدة عالية ومدته مناسبة. ملاحظة: هذا رابط بحث وليس فيديو محدد.",
              icon: "🌍",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=requirements+engineering+tutorial",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: Use Case Diagram UML",
              d: "صفحة بحث يوتيوب لفيديوهات UML Use Case Diagram. اختر فيديو يشرح الممثلين والتفاعلات و system boundary. ملاحظة: هذا رابط بحث وليس فيديو محدد.",
              icon: "🌍",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=use+case+diagram+UML+tutorial",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: Software Requirements Specification SRS",
              d: "صفحة بحث يوتيوب لفيديوهات تشرح SRS document وهيكل IEEE الخاص به. ملاحظة: هذا رابط بحث وليس فيديو محدد.",
              icon: "🌍",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=software+requirements+specification+SRS+document",
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
            "مقالات مرجعية مفصّلة تشرح مفاهيم المحاضرة: SRS format، Use Case Diagram، و Requirements Traceability Matrix.",
          links: [
            {
              t: "Software Requirement Specification (SRS) Format — GeeksforGeeks",
              d: "مقال مفصّل يشرح هيكل مستند SRS: المقدمة، الوصف العام، Functional Requirements، Interface Requirements، Performance Requirements، Non-Functional Attributes. مناسب لفهم القسم 4.4.4 من المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.geeksforgeeks.org/software-engineering/software-requirement-specification-srs-format",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Software Requirements Specification — Wikipedia",
              d: "مقال موسوعي عن SRS: تعريفها، تاريخ معايير IEEE (830-1984 و 29148:2018)، خصائص الجودة للمتطلبات (necessary, unambiguous, complete, consistent, feasible). مناسب لمراجعة تعريف SRS والمعايير.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://en.wikipedia.org/wiki/Software_requirements_specification",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "What is Use Case Diagram? — Visual Paradigm Guide",
              d: "دليل شامل عن Use Case Diagrams: المكونات (actors, use cases, communication links, system boundaries)، أنواع العلاقات (extends, include, generalization)، ونصائح للرسم. مناسب لفهم القسم 4.4.3.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-use-case-diagram",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Requirements Traceability Matrix (RTM) — GeeksforGeeks",
              d: "شرح كامل لـ RTM: تعريفها، أنواعها (Forward, Backward, Bidirectional)، مكوناتها، وأهميتها في تغطية الاختبارات. مناسب لفهم traceability المذكور في القسم 4.6.1.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.geeksforgeeks.org/software-testing/requirement-traceability-matrix",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Implementing Requirements Traceability — SodiusWillert",
              d: "دليل تطبيقي عن traceability: الفرق بين forward و backward traceability، الفوائد، تحديات التنفيذ، وأفضل الممارسات. مناسب لتعميق فهم إدارة تغيير المتطلبات في القسم 4.6.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.sodiuswillert.com/en/blog/implementing-requirements-traceability-in-systems-software-engineering",
                  type: "view",
                  color: "green",
                },
              ],
            },
          ],
        },
        {
          category: "أدوات ومحاكاة",
          icon: "🔧",
          description:
            "أدوات عملية لرسم Use Case Diagrams وإدارة المتطلبات بشكل احترافي — مناسبة للتطبيق العملي والتدريب على مفاهيم المحاضرة.",
          links: [
            {
              t: "Visual Paradigm Online — أداة Use Case Diagram مجانية",
              d: "أداة أونلاين مجانية لرسم UML Use Case Diagrams بمحرر drag-and-drop وقوالب جاهزة. تدعم التصدير بصيغ PNG, JPG, SVG, PDF. مناسب للتدريب العملي على رسم المخططات المذكورة في القسم 4.4.3.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://online.visual-paradigm.com/diagrams/features/use-case-diagram-software",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Lucidchart — Use Case Diagram Tool",
              d: "أداة شائعة لرسم المخططات من ضمنها Use Case Diagrams، مع شرح للرموز (actors as stick figures, use cases as ovals, system boundaries). مناسب للتدريب على use cases.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://lucid.co/diagram/uml/use-case-diagram-tutorial",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "IBM Engineering Requirements Management DOORS",
              d: "أداة DOORS من IBM لإدارة المتطلبات على المستوى المؤسسي — نفس الأداة المذكورة في المحاضرة (القسم 4.6.1) كأداة متخصصة للأنظمة الأكبر. تنفّذ traceability و change management.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.ibm.com/products/requirements-management",
                  type: "view",
                  color: "orange",
                },
              ],
            },
          ],
        },
      ],

      questions: [
        // ============ MCQ — likely: high ============
        {
          q: "1. What is requirements specification?",
          options: [
            "The process of writing down the user and system requirements in a requirements document.",
            "The process of gathering requirements from stakeholders using interviews.",
            "The process of checking that requirements define the system the customer wants.",
            "The process of managing changes to requirements after the document is approved.",
          ],
          correct: 0,
          translation: "ما هي مواصفة المتطلبات (Requirements specification)؟",
          explanation:
            'الإجابة الصحيحة هي الأولى لأن التعريف المذكور في المحاضرة هو "the process of writing down the user and system requirements in a requirements document". الخيارات الأخرى تصف عمليات أخرى: الثاني يصف الـ elicitation، الثالث يصف الـ validation، والرابع يصف الـ change management.',
          tags: ["Requirements specification", "Definitions"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4",
          likely: "high",
        },
        {
          q: "2. User requirements are almost always written in:",
          options: [
            "Mathematical specifications based on finite-state machines.",
            "Natural language supplemented by appropriate diagrams and tables.",
            "Programming language constructs with iteration and alternatives.",
            "Formal set-theory notations only.",
          ],
          correct: 1,
          translation: "متطلبات المستخدم تُكتب دائمًا تقريبًا باستخدام:",
          explanation:
            "المحاضرة تنص صراحة على أن user requirements تُكتب بلغة طبيعية معززة بمخططات وجداول. الرياضية والبرمجية تستخدم للـ system requirements وليست للـ user requirements لأنها تتطلب خبرة تقنية.",
          tags: ["User requirements", "Natural language"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4",
          likely: "high",
        },
        {
          q: "3. Ideally, user requirements should specify:",
          options: [
            "The internal architecture and design of the system.",
            "The database schema and implementation details.",
            "Only the external behavior of the system.",
            "The programming language and frameworks to be used.",
          ],
          correct: 2,
          translation: "من المفترض مثاليًا أن متطلبات المستخدم تحدد:",
          explanation:
            "المحاضرة تؤكد أن user requirements should specify only the external behavior of the system، ولا يجب أن تتضمن تفاصيل التصميم أو البنية المعمارية لأنها موجهة لمستخدمين غير تقنيين.",
          tags: ["User requirements", "External behavior"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4",
          likely: "high",
        },
        {
          q: "4. According to the lecture, which notation is the most widely used way of specifying system and software requirements?",
          options: [
            "Mathematical specifications.",
            "Graphical notations such as UML diagrams.",
            "Natural language.",
            "Structured programming constructs.",
          ],
          correct: 2,
          translation:
            "وفقًا للمحاضرة، ما هي الطريقة الأكثر استخدامًا لكتابة متطلبات النظام والبرمجيات؟",
          explanation:
            "رغم وجود بدائل كثيرة، المحاضرة تنص على أن natural language will continue to be the most widely used way. السبب أنها معبّرة وبديهية وعالمية، رغم مشاكل الغموض فيها.",
          tags: ["Natural language", "Notations"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.1",
          likely: "high",
        },
        {
          q: '5. In natural language requirements, the word "shall" is used to indicate:',
          options: [
            "Desirable requirements that are not essential.",
            "Mandatory requirements that the system must support.",
            "Optional requirements for future versions.",
            "Requirements that have been cancelled.",
          ],
          correct: 1,
          translation:
            'في متطلبات اللغة الطبيعية، كلمة "shall" تستخدم للإشارة إلى:',
          explanation:
            'المحاضرة تفرّق: mandatory requirements تُكتب بـ "shall"، أما desirable requirements فتُكتب بـ "should". هذا التمييز يساعد على فهم أولوية المتطلب.',
          tags: ["Natural language", "Guidelines", "shall vs should"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.1 (Guideline 2)",
          likely: "high",
        },
        {
          q: '6. In natural language requirements, the word "should" is used to indicate:',
          options: [
            "Mandatory requirements that must be supported.",
            "Desirable requirements that are not essential.",
            "Critical safety requirements only.",
            "Requirements that have already been implemented.",
          ],
          correct: 1,
          translation:
            'في متطلبات اللغة الطبيعية، كلمة "should" تستخدم للإشارة إلى:',
          explanation:
            'حسب التوجيه الثاني: "Desirable requirements are not essential and are written using should". هذا يفصل بين الإلزامي (shall) والمستحسن (should).',
          tags: ["Natural language", "Guidelines", "shall vs should"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.1 (Guideline 2)",
          likely: "high",
        },
        {
          q: "7. Which of the following is NOT one of the recommended guidelines for writing natural language requirements?",
          options: [
            "Invent a standard format and ensure all requirements adhere to it.",
            "Use text highlighting (bold, italic, or color) to pick out key parts.",
            'Use software jargon such as "architecture" and "module" to be precise.',
            "Associate a rationale with each user requirement.",
          ],
          correct: 2,
          translation:
            "أيٌّ مما يلي ليس من التوجيهات الموصى بها لكتابة متطلبات اللغة الطبيعية؟",
          explanation:
            "التوجيه الرابع يوصي بتجنب الـ jargon والاختصارات لأنها تُساء فهمها. الخيارات الأخرى كلها من التوجيهات الخمسة المذكورة في المحاضرة.",
          tags: ["Natural language", "Guidelines"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.1 (Guidelines)",
          likely: "high",
        },
        {
          q: "8. The fifth guideline for natural language requirements recommends associating each user requirement with a:",
          options: [
            "Source code reference.",
            "Rationale explaining why the requirement was included.",
            "Database schema diagram.",
            "Test case specification.",
          ],
          correct: 1,
          translation:
            "التوجيه الخامس لكتابة متطلبات اللغة الطبيعية يوصي بربط كل متطلب بـ:",
          explanation:
            "التوجيه الخامس يقول: try to associate a rationale with each user requirement يشرح سبب وجود المتطلب ومَن اقترحه، وهذا مفيد عند تغيير المتطلبات لمعرفة مَن تستشيره.",
          tags: ["Natural language", "Guidelines", "Rationale"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.1 (Guideline 5)",
          likely: "high",
        },
        {
          q: "9. Structured natural language specifications use:",
          options: [
            "Mathematical concepts such as finite-state machines.",
            "Standard templates or forms to specify requirements.",
            "Only graphical models without any text.",
            "Free-form text written by each developer independently.",
          ],
          correct: 1,
          translation: "المواصفات المنظّمة (Structured specifications) تستخدم:",
          explanation:
            "Structured language notations use templates to specify system requirements. هذا يحافظ على معظم مرونة اللغة الطبيعية لكنه يفرض توحيدًا على المواصفة.",
          tags: ["Structured specifications", "Templates"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.2",
          likely: "high",
        },
        {
          q: '10. In a structured specification form, the "precondition" field specifies:',
          options: [
            "What must be true after the function is called.",
            "What must be true before the function is called.",
            "The side effects of the operation.",
            "The destination of the outputs.",
          ],
          correct: 1,
          translation: 'في نموذج المواصفة المنظّمة، حقل "precondition" يحدد:',
          explanation:
            "precondition = what must be true before the function is called. أما postcondition فيحدد what is true after the function is called. هذا تمييز أساسي في النهج الوظيفي (functional approach).",
          tags: ["Structured specifications", "Precondition", "Postcondition"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.2 (Figure 4.13)",
          likely: "high",
        },
        {
          q: "11. Use cases were first introduced in:",
          options: [
            "The VOLERE method by Robertson and Robertson.",
            "The Objectory method by Jacobsen et al.",
            "The Waterfall model by Royce.",
            "The Agile Manifesto in 2001.",
          ],
          correct: 1,
          translation: "حالات الاستخدام (Use cases) ظهرت لأول مرة في:",
          explanation:
            "المحاضرة تقول: They were first introduced in the Objectory method (Jacobsen et al. 1993). ثم أصبحت جزءًا أساسيًا من UML.",
          tags: ["Use cases", "Objectory", "Jacobsen"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.3",
          likely: "high",
        },
        {
          q: "12. In a use case diagram, actors are represented as:",
          options: [
            "Named ellipses.",
            "Stick figures.",
            "Rectangles with rounded corners.",
            "Diamonds.",
          ],
          correct: 1,
          translation:
            "في مخطط حالات الاستخدام، يُمثَّل الممثلون (actors) على شكل:",
          explanation:
            "Actors may be human or other systems, and are represented as stick figures. أما الـ interactions فيتم تمثيلها كـ named ellipses.",
          tags: ["Use cases", "Actors", "UML"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.3",
          likely: "high",
        },
        {
          q: "13. In a use case diagram, each class of interaction is represented as:",
          options: [
            "A stick figure.",
            "A named ellipse.",
            "A rectangle.",
            "An arrow with a diamond head.",
          ],
          correct: 1,
          translation:
            "في مخطط حالات الاستخدام، يتم تمثيل كل صنف من التفاعلات على شكل:",
          explanation:
            "Each class of interaction is represented as a named ellipse. الـ stick figures للممثلين، والخطوط تربط الممثلين بالتفاعلات، والأسهم اختيارية لبيان direction of initiation.",
          tags: ["Use cases", "Interaction", "UML"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.3",
          likely: "high",
        },
        {
          q: "14. Use cases have now become a fundamental feature of:",
          options: [
            "The Unified Modeling Language (UML).",
            "The IEEE 830 standard for SRS.",
            "The DOORS requirements management tool.",
            "The VOLERE requirements method.",
          ],
          correct: 0,
          translation: "حالات الاستخدام أصبحت ميزة أساسية في:",
          explanation:
            "Use cases have now become a fundamental feature of the Unified Modeling Language (UML). الـ UML هو معيار قياسي للنمذجة object-oriented.",
          tags: ["Use cases", "UML"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.3",
          likely: "high",
        },
        {
          q: "15. The software requirements document is also called the:",
          options: [
            "Software Design Document (SDD).",
            "Software Requirements Specification (SRS).",
            "System Architecture Document (SAD).",
            "User Acceptance Document (UAD).",
          ],
          correct: 1,
          translation: "يُسمى مستند متطلبات البرمجيات أيضًا:",
          explanation:
            "The software requirements document (sometimes called the software requirements specification or SRS). هو البيان الرسمي لما يجب على مطوري النظام تنفيذه.",
          tags: ["SRS", "Definitions"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.4",
          likely: "high",
        },
        {
          q: "16. According to the IEEE standard structure of a requirements document, which chapter defines the technical terms used in the document?",
          options: ["Preface.", "Glossary.", "Introduction.", "Index."],
          correct: 1,
          translation:
            "وفقًا لمعيار IEEE لهيكل مستند المتطلبات، أي فصل يعرّف المصطلحات التقنية المستخدمة؟",
          explanation:
            "Glossary يعرّف المصطلحات التقنية، ويجب ألا تفترض خبرة القارئ. أما Preface فيتحدث عن readership و version history، و Introduction يشرح حاجة النظام، و Index فهو فهرس.",
          tags: ["SRS", "IEEE standard", "Glossary"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.4 (Figure 4.17)",
          likely: "high",
        },
        {
          q: "17. Which chapter of the IEEE-standard requirements document describes anticipated future changes to the system?",
          options: [
            "System architecture.",
            "System models.",
            "System evolution.",
            "Appendices.",
          ],
          correct: 2,
          translation:
            "أي فصل في مستند المتطلبات (معيار IEEE) يصف التغييرات المستقبلية المتوقعة على النظام؟",
          explanation:
            "System evolution يصف الافتراضات الأساسية والتغييرات المتوقعة بسبب تطور الـ hardware أو تغير احتياجات المستخدمين. هذا يساعد المصممين على تجنب قرارات تصميم مقيدة.",
          tags: ["SRS", "IEEE standard", "System evolution"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.4 (Figure 4.17)",
          likely: "high",
        },
        {
          q: "18. According to agile methods, requirements documents are often replaced with:",
          options: [
            "Detailed mathematical specifications.",
            "User stories written on cards or whiteboards.",
            "Formal contracts signed by all stakeholders.",
            "IEEE-standard requirements documents.",
          ],
          correct: 1,
          translation:
            "وفقًا للأساليب Agile، تُستبدل مستندات المتطلبات غالبًا بـ:",
          explanation:
            "Agile argues that requirements change so rapidly that a requirements document is out of date as soon as it is written. لذلك يستخدمون user stories مكتوبة على cards أو whiteboards، والمستخدم يعطيها أولوية.",
          tags: ["Agile", "User stories", "SRS"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.4",
          likely: "high",
        },
        {
          q: "19. Requirements validation is the process of checking that requirements define:",
          options: [
            "The system that developers prefer to build.",
            "The system that the customer really wants.",
            "The cheapest possible system within budget.",
            "The system architecture in detail.",
          ],
          correct: 1,
          translation:
            "التحقق من المتطلبات (Requirements validation) هو عملية التأكد من أن المتطلبات تحدد:",
          explanation:
            "Requirements validation is the process of checking that requirements define the system that the customer really wants. تختلف عن الـ specification (الكتابة) وعن الـ change management (إدارة التغيير).",
          tags: ["Requirements validation", "Definitions"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.5",
          likely: "high",
        },
        {
          q: "20. Which type of validation check ensures that requirements in the document do not conflict with each other?",
          options: [
            "Validity checks.",
            "Consistency checks.",
            "Completeness checks.",
            "Realism checks.",
          ],
          correct: 1,
          translation:
            "أي نوع من فحوص التحقق يضمن عدم تعارض المتطلبات مع بعضها؟",
          explanation:
            "Consistency checks: requirements should not conflict، أي لا توجد قيود متناقضة أو أوصاف مختلفة لنفس الوظيفة. الـ validity يفحص عكس احتياجات المستخدم، والـ completeness يفحص اكتمال الوظائف، والـ realism يفحص قابلية التنفيذ بالميزانية.",
          tags: ["Requirements validation", "Consistency checks"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.5",
          likely: "high",
        },
        {
          q: "21. Which type of validation check ensures that the requirements document includes all functions and constraints intended by the user?",
          options: [
            "Validity checks.",
            "Consistency checks.",
            "Completeness checks.",
            "Verifiability.",
          ],
          correct: 2,
          translation:
            "أي نوع من فحوص التحقق يضمن أن المستند يتضمن كل الوظائف والقيود التي قصدها المستخدم؟",
          explanation:
            "Completeness checks تتأكد من أن المستند يشمل كل functions و constraints المقصودة. الـ validity يقارن بالاحتياج الحقيقي للمستخدم، والـ verifiability تتعلق بإمكانية كتابة tests للمتطلبات.",
          tags: ["Requirements validation", "Completeness checks"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.5",
          likely: "high",
        },
        {
          q: "22. Which validation technique involves developing an executable model of the system and using it with end-users?",
          options: [
            "Requirements reviews.",
            "Prototyping.",
            "Test-case generation.",
            "Traceability analysis.",
          ],
          correct: 1,
          translation:
            "أي تقنية تحقق تشمل تطوير نموذج قابل للتنفيذ واستخدامه مع المستخدمين النهائيين؟",
          explanation:
            "Prototyping: developing an executable model of a system and using this with end-users and customers to see if it meets their needs. الـ reviews تعتمد على قراءة المستند، والـ test-case generation يكتب tests للمتطلبات.",
          tags: ["Requirements validation", "Prototyping"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.5",
          likely: "high",
        },
        {
          q: "23. According to the lecture, the cost of fixing a requirements problem by making a system change is usually:",
          options: [
            "Much less than repairing design or coding errors.",
            "About the same as fixing a coding error.",
            "Much greater than repairing design or coding errors.",
            "Negligible if discovered before implementation.",
          ],
          correct: 2,
          translation:
            "وفقًا للمحاضرة، تكلفة إصلاح مشكلة في المتطلبات عادةً تكون:",
          explanation:
            "The cost of fixing a requirements problem by making a system change is usually much greater than repairing design or coding errors. لأن تغيير المتطلب يعني تغيير التصميم والتنفيذ وإعادة الاختبار.",
          tags: ["Requirements validation", "Cost"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.5",
          likely: "high",
        },
        {
          q: "24. Requirements that are associated with the core, slow-to-change activities of an organization are called:",
          options: [
            "Volatile requirements.",
            "Enduring requirements.",
            "Functional requirements.",
            "Domain requirements.",
          ],
          correct: 1,
          translation:
            "المتطلبات المرتبطة بالأنشطة الأساسية بطيئة التغير في المنظمة تسمى:",
          explanation:
            "Enduring requirements ترتبط بالأنشطة الأساسية fundamental work activities. أما Volatile requirements فأكثر عرضة للتغير وترتبط بالأنشطة الداعمة supporting activities.",
          tags: ["Requirements change", "Enduring", "Volatile"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6 (sidebar)",
          likely: "high",
        },
        {
          q: "25. Requirements that are more likely to change and are usually associated with supporting activities are called:",
          options: [
            "Enduring requirements.",
            "Volatile requirements.",
            "Product requirements.",
            "Organizational requirements.",
          ],
          correct: 1,
          translation:
            "المتطلبات الأكثر عرضة للتغير والمرتبطة بالأنشطة الداعمة تسمى:",
          explanation:
            "Volatile requirements reflect how the organization does its work rather than the work itself. هذا التمييز بين enduring و volatile يساعد في إدارة المتطلبات المتغيرة.",
          tags: ["Requirements change", "Enduring", "Volatile"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6 (sidebar)",
          likely: "high",
        },
        {
          q: "26. Which of the following is NOT one of the issues that must be decided during requirements management planning?",
          options: [
            "Requirements identification.",
            "A change management process.",
            "Traceability policies.",
            "Selecting the programming language for implementation.",
          ],
          correct: 3,
          translation:
            "أيٌّ مما يلي ليس من المسائل التي تُقرر خلال تخطيط إدارة المتطلبات؟",
          explanation:
            "المحاضرة تذكر 4 مسائل: requirements identification، change management process، traceability policies، tool support. اختيار لغة البرمجة ليس من اختصاص إدارة المتطلبات بل من اختصاص التصميم.",
          tags: ["Requirements management", "Planning"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6.1",
          likely: "high",
        },
        {
          q: "27. The requirements management tool mentioned in the lecture as suitable for larger systems is:",
          options: [
            "Microsoft Word with track changes.",
            "Shared spreadsheets only.",
            "DOORS (by IBM).",
            "GitHub Issues.",
          ],
          correct: 2,
          translation:
            "أداة إدارة المتطلبات المذكورة في المحاضرة كمناسبة للأنظمة الأكبر هي:",
          explanation:
            "للأنظمة الصغيرة يمكن استخدام spreadsheets و databases، أما للأنظمة الأكبر فالمحاضرة تذكر DOORS (IBM 2013) كأداة متخصصة تسهل متابعة عدد كبير من المتطلبات المتغيرة.",
          tags: ["Requirements management", "DOORS", "Tools"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6.1",
          likely: "high",
        },
        {
          q: "28. The first stage of the requirements change management process is:",
          options: [
            "Problem analysis and change specification.",
            "Change analysis and costing.",
            "Change implementation.",
            "System testing and validation.",
          ],
          correct: 0,
          translation: "المرحلة الأولى من عملية إدارة تغيير المتطلبات هي:",
          explanation:
            "Problem analysis and change specification: تبدأ بمشكلة متطلب محددة أو اقتراح تغيير، يتم تحليلها للتحقق من صحتها. تليها change analysis and costing ثم change implementation.",
          tags: ["Requirements change", "Change management"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6.2 (Figure 4.19)",
          likely: "high",
        },
        {
          q: "29. The second stage of the requirements change management process, where the cost of the change is estimated, is:",
          options: [
            "Problem analysis and change specification.",
            "Change analysis and costing.",
            "Change implementation.",
            "Requirements review.",
          ],
          correct: 1,
          translation:
            "المرحلة الثانية من إدارة تغيير المتطلبات، حيث تُقدَّر تكلفة التغيير، هي:",
          explanation:
            "Change analysis and costing: تقييم أثر التغيير المقترح باستخدام traceability information ومعرفة عامة بالمتطلبات، وتقدير التكلفة من حيث تعديل المستند والتصميم والتنفيذ، ثم اتخاذ قرار المضي قدمًا.",
          tags: ["Requirements change", "Change management", "Costing"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6.2 (Figure 4.19)",
          likely: "high",
        },
        {
          q: "30. Requirements traceability means:",
          options: [
            "Tracking the project budget and schedule.",
            "Keeping track of relationships between requirements, their sources, and the system design.",
            "Tracking the development team's working hours.",
            "Tracking the number of bugs found in testing.",
          ],
          correct: 1,
          translation: "متطلبات الـ traceability تعني:",
          explanation:
            "Traceability: keeping track of relationships between requirements, their sources, and the system design. هذا يسمح بتحليل أسباب التغييرات المقترحة وأثرها على أجزاء النظام الأخرى عند حدوث تغيير.",
          tags: ["Traceability", "Requirements management"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6 (sidebar)",
          likely: "high",
        },

        // ============ MCQ — likely: medium ============
        {
          q: "31. The VOLERE requirements engineering method was developed by:",
          options: [
            "Jacobsen et al. in 1993.",
            "Robertson and Robertson in 2013.",
            "Rittel and Webber in 1973.",
            "IEEE in 1998.",
          ],
          correct: 1,
          translation: "طريقة VOLERE لهندسة المتطلبات طوّرها:",
          explanation:
            "المحاضرة تنص صراحة أن Robertsons (Robertson and Robertson 2013) في كتابهم عن VOLERE اقترحوا كتابة متطلبات المستخدم على بطاقات. Jacobsen طوّر الـ Objectory والـ use cases، و Rittel and Webber طوّرا مفهوم wicked problems.",
          tags: ["Structured specifications", "VOLERE", "Robertson"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.2",
          likely: "medium",
        },
        {
          q: "32. According to the author's experience, use cases are:",
          options: [
            "More helpful in requirements engineering than in system design.",
            "More helpful in systems design than in requirements engineering.",
            "Useless in both requirements engineering and design.",
            "Only useful for embedded systems.",
          ],
          correct: 1,
          translation: "وفقًا لتجربة المؤلف، حالات الاستخدام:",
          explanation:
            "المحاضرة تقول: I find use cases to be more helpful in systems design than in requirements engineering. السبب أن الـ stakeholders لا يفهمون مصطلح use case ولا يجدون النموذج الرسومي مفيدًا.",
          tags: ["Use cases", "Design", "Requirements engineering"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.3",
          likely: "medium",
        },
        {
          q: '33. The concept of "wicked problems" — problems that cannot be completely defined — was introduced by:',
          options: [
            "Robertson and Robertson (2013).",
            "Jacobsen et al. (1993).",
            "Rittel and Webber (1973).",
            "IEEE (1998).",
          ],
          correct: 2,
          translation: 'مفهوم "المشكلات الشريرة" (wicked problems) قدّمه:',
          explanation:
            "Rittel and Webber (1973) قدّما مفهوم wicked problems. ولأن هذه المشكلات لا يمكن تعريفها بالكامل، فمتطلبات البرمجيات تكون incomplete وتتغير مع تطور الفهم.",
          tags: ["Requirements change", "Wicked problems"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6",
          likely: "medium",
        },
        {
          q: "34. Which of the following is a reason why system requirements may include some design information?",
          options: [
            "An initial architecture may be needed to help structure the requirements specification.",
            "IEEE standards always require design details in the SRS.",
            "Customers prefer to review design details rather than requirements.",
            "Agile methods prohibit separating requirements from design.",
          ],
          correct: 0,
          translation:
            "أيٌّ مما يلي سبب لاحتواء متطلبات النظام على بعض معلومات التصميم؟",
          explanation:
            "المحاضرة تذكر 3 أسباب: (1) قد تضطر لتصميم architecture مبدئي لتنظيم المواصفة، (2) التشغيل البيني مع أنظمة موجودة يفرض قيود تصميم، (3) استخدام architecture محددة لتحقيق non-functional requirements أو لتلبية متطلبات regulator خارجي.",
          tags: ["System requirements", "Design information"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4",
          likely: "medium",
        },
        {
          q: "35. According to the lecture, the principal users of a requirements document include all of the following EXCEPT:",
          options: [
            "System customers.",
            "System test engineers.",
            "Marketing interns with no technical role.",
            "System maintenance engineers.",
          ],
          correct: 2,
          translation:
            "وفقًا للمحاضرة، المستخدمون الرئيسيون لمستند المتطلبات يشملون كل ما يلي ما عدا:",
          explanation:
            "المستخدمون المذكورون هم: system customers، managers، system engineers، system test engineers، system maintenance engineers. الـ marketing interns دون دور تقني ليسوا من مستخدمي المستند.",
          tags: ["SRS", "Document users"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.4 (Figure 4.16)",
          likely: "medium",
        },

        // ============ ESSAY — likely: high ============
        {
          type: "essay",
          q: "1. Define requirements specification and explain the difference between user requirements and system requirements.",
          translation:
            "عرّف مواصفة المتطلبات واشرح الفرق بين متطلبات المستخدم ومتطلبات النظام.",
          answer:
            "Requirements specification is the process of writing down the user and system requirements in a requirements document.\n" +
            "User requirements are written for system users who do not have detailed technical knowledge.\n" +
            "They are almost always written in natural language supplemented by diagrams and tables, and they should specify only the external behavior of the system without including design or implementation details.\n" +
            "System requirements are expanded versions of the user requirements that software engineers use as the starting point for system design.\n" +
            "They add detail and explain how the system should provide the user requirements.\n" +
            "They may be used as part of the contract for the implementation of the system and should therefore be a complete and detailed specification of the whole system.",
          tags: ["Requirements specification", "User vs System requirements"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. List and explain the five guidelines recommended for writing natural language requirements.",
          translation:
            "اذكر واشرح التوجيهات الخمسة الموصى بها لكتابة متطلبات اللغة الطبيعية.",
          answer:
            "1. Invent a standard format and ensure that all requirement definitions adhere to that format. Standardizing the format makes omissions less likely and requirements easier to check.\n" +
            '2. Use language consistently to distinguish between mandatory and desirable requirements. Use "shall" for mandatory requirements that the system must support, and "should" for desirable requirements that are not essential.\n' +
            "3. Use text highlighting (bold, italic, or color) to pick out key parts of the requirement.\n" +
            "4. Do not assume that readers understand technical, software engineering language. Avoid the use of jargon, abbreviations, and acronyms.\n" +
            "5. Whenever possible, associate a rationale with each user requirement explaining why the requirement has been included and who proposed it, so that you know whom to consult if the requirement has to be changed.",
          tags: ["Natural language", "Guidelines"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.1",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Compare natural language specification with structured specification. Mention the advantages and disadvantages of each.",
          translation:
            "قارن بين المواصفة باللغة الطبيعية والمواصفة المنظّمة. اذكر مميزات وعيوب كل منهما.",
          answer:
            "Natural language specification:\n" +
            "Advantages: It is expressive, intuitive, and universal. It has been used since the 1950s and is the most widely used way of specifying requirements.\n" +
            "Disadvantages: It is potentially vague and ambiguous, its interpretation depends on the background of the reader, it is easy to amalgamate several requirements into a single sentence, and structuring natural language requirements can be difficult.\n" +
            "Structured specification:\n" +
            "Advantages: It maintains most of the expressiveness and understandability of natural language but imposes some uniformity on the specification. Variability is reduced, and requirements are organized more effectively.\n" +
            "Disadvantages: It is still sometimes difficult to write requirements in a clear and unambiguous way, particularly when complex computations are to be specified.",
          tags: ["Natural language", "Structured specifications", "Comparison"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Sections 4.4.1 and 4.4.2",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. What is a use case? Describe the components of a use case diagram and how actors and interactions are represented.",
          translation:
            "ما هي حالة الاستخدام؟ صف مكونات مخطط حالات الاستخدام وكيف يتم تمثيل الممثلين والتفاعلات.",
          answer:
            "A use case is a way of describing interactions between users and a system using a graphical model and structured text.\n" +
            "Use cases were first introduced in the Objectory method (Jacobsen et al. 1993) and have become a fundamental feature of the Unified Modeling Language (UML).\n" +
            "A high-level use case diagram has the following components:\n" +
            "- Actors: entities (human or other systems) that interact with the system. They are represented as stick figures.\n" +
            "- Use cases (interactions): each class of interaction is represented as a named ellipse.\n" +
            "- Lines: they link the actors with the interactions.\n" +
            "- Optional arrowheads: may be added to lines to show how the interaction is initiated.\n" +
            "Each use case should be documented with a textual description that can be linked to other UML models such as sequence or state charts.",
          tags: ["Use cases", "UML", "Actors"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.3",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. Describe the structure of a software requirements document based on the IEEE standard. List its main chapters.",
          translation:
            "صف هيكل مستند متطلبات البرمجيات بناءً على معيار IEEE. اذكر الفصول الرئيسية.",
          answer:
            "The software requirements document (also called SRS) is an official statement of what the system developers should implement.\n" +
            "Its structure is based on an IEEE standard for requirements documents (IEEE 1998). The main chapters are:\n" +
            "1. Preface — defines the expected readership and version history.\n" +
            "2. Introduction — describes the need for the system and how it fits into business objectives.\n" +
            "3. Glossary — defines the technical terms used.\n" +
            "4. User requirements definition — describes the services provided for the user, including non-functional requirements.\n" +
            "5. System architecture — a high-level overview of the anticipated architecture.\n" +
            "6. System requirements specification — describes functional and non-functional requirements in detail.\n" +
            "7. System models — graphical models showing relationships between components.\n" +
            "8. System evolution — describes anticipated changes due to hardware evolution and changing user needs.\n" +
            "9. Appendices — detailed specific information such as hardware and database descriptions.\n" +
            "10. Index — alphabetic index and indexes of diagrams and functions.",
          tags: ["SRS", "IEEE standard", "Document structure"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.4 (Figure 4.17)",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. List and explain the five types of checks performed during requirements validation.",
          translation:
            "اذكر واشرح أنواع الفحوص الخمسة التي تُجرى أثناء التحقق من المتطلبات.",
          answer:
            "Requirements validation is the process of checking that requirements define the system that the customer really wants.\n" +
            "The five types of checks are:\n" +
            "1. Validity checks — check that the requirements reflect the real needs of system users, since circumstances may have changed since the requirements were originally elicited.\n" +
            "2. Consistency checks — requirements in the document should not conflict; there should not be contradictory constraints or different descriptions of the same system function.\n" +
            "3. Completeness checks — the requirements document should include requirements that define all functions and constraints intended by the system user.\n" +
            "4. Realism checks — the requirements should be checked to ensure that they can be implemented within the proposed budget and schedule for the system.\n" +
            "5. Verifiability — system requirements should be written so that they are verifiable, meaning that a set of tests can be written to demonstrate that the delivered system meets each specified requirement.",
          tags: ["Requirements validation", "Validation checks"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.5",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. Explain the three principal stages of the requirements change management process.",
          translation:
            "اشرح المراحل الثلاث الرئيسية لعملية إدارة تغيير المتطلبات.",
          answer:
            "Requirements change management should be applied to all proposed changes after the requirements document has been approved.\n" +
            "The three principal stages are:\n" +
            "1. Problem analysis and change specification: The process starts with an identified requirements problem or a specific change proposal. The problem or proposal is analyzed to check that it is valid. The analysis is fed back to the change requestor who may respond with a more specific proposal or withdraw the request.\n" +
            "2. Change analysis and costing: The effect of the proposed change is assessed using traceability information and general knowledge of the system requirements. The cost of making the change is estimated in terms of modifications to the requirements document and, if appropriate, to the system design and implementation. A decision is then made on whether or not to proceed.\n" +
            "3. Change implementation: The requirements document and, where necessary, the system design and implementation are modified. The document should be organized so that changes can be made without extensive rewriting, by minimizing external references and making sections as modular as possible.",
          tags: ["Requirements change", "Change management"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6.2 (Figure 4.19)",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. Discuss the reasons why requirements for large software systems are always changing.",
          translation:
            "ناقش الأسباب التي تجعل متطلبات أنظمة البرمجيات الكبيرة دائمًا في حالة تغيير.",
          answer:
            'Large software systems are often developed to address "wicked problems" — problems that cannot be completely defined. As the stakeholders\' understanding of the problem changes, the requirements must evolve.\n' +
            "After a system is installed, new requirements emerge for several reasons:\n" +
            "1. The business and technical environment always changes after installation. New hardware may be introduced, the system may need to interface with other systems, business priorities may change, and new legislation and regulations may require compliance.\n" +
            "2. The people who pay for a system and the users of that system are rarely the same people. Customers impose requirements because of organizational and budgetary constraints that may conflict with end-user requirements. After delivery, new features may have to be added for user support.\n" +
            "3. Large systems usually have a diverse stakeholder community with conflicting or contradictory priorities. The final requirements are a compromise. With experience, the balance of support given to different stakeholders often has to be changed and requirements re-prioritized.",
          tags: ["Requirements change", "Wicked problems"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. What is the difference between enduring and volatile requirements? Give an example of each.",
          translation:
            "ما الفرق بين المتطلبات الدائمة (enduring) والمتطلبات المتقلبة (volatile)؟ أعطِ مثالاً لكل منهما.",
          answer:
            "Enduring requirements are the requirements that are associated with the core, slow-to-change activities of an organization. They are associated with fundamental work activities and tend to remain stable over the lifetime of the system.\n" +
            "Volatile requirements are more likely to change. They are usually associated with supporting activities that reflect how the organization does its work rather than the work itself.\n" +
            "Example of enduring requirements: In a hospital system, the requirement that patient records must be kept confidential and accurate is enduring because patient care is a fundamental activity.\n" +
            "Example of volatile requirements: In the same hospital system, the requirement that reports must be printed on a specific type of form, or that data must be exchanged with a particular external system, is volatile because the supporting procedures and external systems change over time.",
          tags: ["Requirements change", "Enduring", "Volatile"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6 (sidebar)",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Explain what is meant by requirements management planning and list the issues that must be decided during this stage.",
          translation:
            "اشرح ما يقصد بتخطيط إدارة المتطلبات واذكر المسائل التي تُقرر خلال هذه المرحلة.",
          answer:
            "Requirements management planning is concerned with establishing how a set of evolving requirements will be managed.\n" +
            "During the planning stage, the following issues must be decided:\n" +
            "1. Requirements identification — each requirement must be uniquely identified so that it can be cross-referenced with other requirements and used in traceability assessments.\n" +
            "2. A change management process — the set of activities that assess the impact and cost of changes.\n" +
            "3. Traceability policies — these policies define the relationships between each requirement and between the requirements and the system design that should be recorded, and how these records should be maintained.\n" +
            "4. Tool support — requirements management involves processing large amounts of information. Tools may range from specialist requirements management systems to shared spreadsheets and simple database systems.\n" +
            "Tool support is needed for: requirements storage, change management, and traceability management. For larger systems, specialized tools such as DOORS make it easier to keep track of a large number of changing requirements.",
          tags: ["Requirements management", "Planning", "Traceability"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6.1",
          likely: "high",
        },
        {
          type: "essay",
          q: "11. What is requirements traceability and why is it important in requirements management?",
          translation:
            "ما هي الـ traceability في المتطلبات ولماذا هي مهمة في إدارة المتطلبات؟",
          answer:
            "Requirements traceability is the ability to keep track of the relationships between requirements, their sources, and the system design.\n" +
            "It allows you to trace how a change ripples its way through the system.\n" +
            "It is important for two main reasons:\n" +
            "1. To analyze the reasons for proposed changes — knowing the source and rationale of a requirement helps decide whether a change is necessary and whether it is desirable.\n" +
            "2. To assess the impact that changes are likely to have on other parts of the system — when a requirement changes, traceability links reveal which other requirements, design components, and tests are affected, so that the cost and risk of the change can be evaluated.\n" +
            "Traceability policies should define which relationships must be recorded (between requirements, between requirements and design, and between requirements and sources) and how these records should be maintained.",
          tags: ["Traceability", "Requirements management"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6.1 (sidebar)",
          likely: "high",
        },
        {
          type: "essay",
          q: "12. List the notations that can be used for writing system requirements and briefly describe each.",
          translation:
            "اذكر الطرق المستخدمة لكتابة متطلبات النظام وصف كلًا منها باختصار.",
          answer:
            "According to Figure 4.11, the possible notations for writing system requirements are:\n" +
            "1. Natural language sentences — the requirements are written using numbered sentences in natural language. Each sentence should express one requirement.\n" +
            "2. Structured natural language — the requirements are written in natural language on a standard form or template. Each field provides information about an aspect of the requirement.\n" +
            "3. Graphical notations — graphical models, supplemented by text annotations, are used to define the functional requirements for the system. UML use case and sequence diagrams are commonly used.\n" +
            "4. Mathematical specifications — these notations are based on mathematical concepts such as finite-state machines or sets. Although they are unambiguous, most customers do not understand a formal specification and cannot check that it represents what they want, so they are reluctant to accept it as a system contract.\n" +
            "Despite these alternatives, natural language remains the most widely used way of specifying system and software requirements.",
          tags: ["Notations", "System requirements"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4 (Figure 4.11)",
          likely: "high",
        },
        {
          type: "essay",
          q: "13. List and briefly describe the three requirements validation techniques mentioned in the lecture.",
          translation:
            "اذكر واشرح باختصار تقنيات التحقق الثلاث المذكورة في المحاضرة.",
          answer:
            "A number of requirements validation techniques can be used individually or in conjunction with one another:\n" +
            "1. Requirements reviews — the requirements are analyzed systematically by a team of reviewers who check for errors and inconsistencies.\n" +
            "2. Prototyping — this involves developing an executable model of a system and using this with end-users and customers to see if it meets their needs and expectations. Stakeholders experiment with the system and feed back requirements changes to the development team.\n" +
            "3. Test-case generation — requirements should be testable. If the tests for the requirements are devised as part of the validation process, this often reveals requirements problems. If a test is difficult or impossible to design, this usually means that the requirements will be difficult to implement and should be reconsidered. Developing tests from the user requirements before any code is written is an integral part of test-driven development.",
          tags: [
            "Requirements validation",
            "Reviews",
            "Prototyping",
            "Test-case generation",
          ],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.5",
          likely: "high",
        },
      ],
    },
  ],
});
