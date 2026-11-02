/* بيانات مادة: تفاعل الانسان والحاسب (hci)
   - المحاضرات (PDF) في lectures/  والأسئلة في questions/
   - المسارات دايمًا من جذر المشروع: datenew/subjects/hci/lectures/lec-01.pdf
   - انسخي شكل المحاضرة/الأسئلة من مادة شغالة عندك (دليل صاحب المنصة، الخطوة 4 و5) */

    /* { t:"المحاضرة 1 — العنوان", d:"وصف", id:"lec-01",
         pdf:"datenew/subjects/hci/lectures/lec-01.pdf", questions:[] } */

subjects.push({
  name: "تفاعل الانسان والحاسب",
  en: "Human-Computer Interaction",
  icon: "🖱️",
  slug: "hci",
  lectures: [
    {
      t: "المحاضرة 1: مقدمة في التفاعل بين الإنسان والحاسوب (HCI)",
      d: "تعريف HCI، أمثلة من الحياة اليومية، أهميته، علاقته بالمجالات الأخرى (UX / UI / Interaction Design)، مبادئ التصميم، والمكونات الرئيسية.",
      id: "hci-lecture-01",

      pdf: "datenew/subjects/hci/lectures/Lec 1/Lec 1.pdf",
      pdf2: "/datenew/subjects/hci/questions/Questions on each lecture/Lecture-01-Questions.pdf",
      // فئات روابط منظمة - المحاضرة الأولى: مقدمة في تفاعل الإنسان والحاسوب (HCI)
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لمفاهيم HCI الأساسية، والفرق بين UI و UX والتصميم التفاعلي",
          links: [
            {
              t: "أ. أفنان العمري - التفاعل بين الإنسان والحاسب (HCI)",
              d: "شرح مفهوم HCI، الفرق بين Interaction و Interface، ومكونات النظام التفاعلي بالعربي",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=6NhQBpb0SHY",
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
            "مقالات وتوثيقات أكاديمية تشرح مفاهيم HCI ومبادئ التصميم",
          links: [
            {
              t: "GeeksforGeeks - Introduction to Human Computer Interaction (HCI)",
              d: "مقال شامل يغطي تعاريف HCI، الأبعاد الخمسة، الفرق بين UI/UX، وأهمية تصميم الواجهات",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/system-design/introduction-to-human-computer-interface-hci/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Interaction Design Foundation (IxDF) - What is HCI?",
              d: "المرجع العالمي لتفاعل الإنسان والحاسوب، مبادئ علم النفس المعرفي، وتصميم تجربة المستخدم",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.interaction-design.org/literature/topics/human-computer-interaction",
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
            "أدوات تفاعلية ومواقع لتطبيق مبادئ HCI وتصاميم الـ UI/UX",
          links: [
            {
              t: "Figma - Interactive UI/UX Design Tool",
              d: "الأداة الأولى لبناء واجهات المستخدم (UI)، النماذج التفاعلية (Prototypes)، واختبار تجربة المستخدم (UX)",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ فتح الأداة",
                  url: "https://www.figma.com/",
                  type: "download",
                  color: "blue",
                },
              ],
            },
          ],
        },
      ], // فئات روابط منظمة - المحاضرة الأولى: مقدمة في تفاعل الإنسان والحاسوب (HCI)
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لمفاهيم HCI الأساسية، والفرق بين UI و UX والتصميم التفاعلي",
          links: [
            {
              t: "أ. أفنان العمري - التفاعل بين الإنسان والحاسب (HCI)",
              d: "شرح مفهوم HCI، الفرق بين Interaction و Interface، ومكونات النظام التفاعلي بالعربي",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=6NhQBpb0SHY",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "أساسيات تجربة وواجهة المستخدم (UI/UX) - الشرح العربي",
              d: "توضيح العلاقة والفرق بين UX Design و UI Design و Interaction Design بالأمثلة",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLp44XwM31XG5a8G_87A8OwfS9fS2I12i0",
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
          description: "محاضرات أكاديمية عالمية ومفاهيم Don Norman في HCI و UX",
          links: [
            {
              t: "Georgia Tech - Human-Computer Interaction (CS6750)",
              d: "الكورس الأكاديمي الرسمي الشامل لمبادئ HCI والمكونات الأساسية (Users, Tasks, Tools, Interfaces, Context)",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLAWXFhe0N1vI492zbfS_7LneXflL3S1B2",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Nielsen Norman Group - UX & HCI Core Concepts",
              d: "شروحات قصيرة حول مبادئ التصميم (Discoverability, Feedback, Affordances, Constraints)",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/c/NielsenNormanGroup/playlists",
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
            "مقالات وتوثيقات أكاديمية تشرح مفاهيم HCI ومبادئ التصميم",
          links: [
            {
              t: "GeeksforGeeks - Introduction to Human Computer Interaction (HCI)",
              d: "مقال شامل يغطي تعاريف HCI، الأبعاد الخمسة، الفرق بين UI/UX، وأهمية تصميم الواجهات",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/system-design/introduction-to-human-computer-interface-hci/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Interaction Design Foundation (IxDF) - What is HCI?",
              d: "المرجع العالمي لتفاعل الإنسان والحاسوب، مبادئ علم النفس المعرفي، وتصميم تجربة المستخدم",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.interaction-design.org/literature/topics/human-computer-interaction",
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
            "أدوات تفاعلية ومواقع لتطبيق مبادئ HCI وتصاميم الـ UI/UX",
          links: [
            {
              t: "Laws of UX - Visual HCI & UX Principles",
              d: "موقع تفاعلي يستعرض قوانين ومبادئ HCI والنفسية المستخدمة في بناء الواجهات التفاعلية",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح التفاعليات",
                  url: "https://lawsofux.com/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Figma - Interactive UI/UX Design Tool",
              d: "الأداة الأولى لبناء واجهات المستخدم (UI)، النماذج التفاعلية (Prototypes)، واختبار تجربة المستخدم (UX)",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ فتح الأداة",
                  url: "https://www.figma.com/",
                  type: "download",
                  color: "blue",
                },
              ],
            },
          ],
        },
      ],

      questions: [
        {
          q: "1. What is Human-Computer Interaction (HCI)?",
          options: [
            "The study of computer hardware manufacturing only",
            "A multidisciplinary field that focuses on the design, evaluation, and implementation of interactive computing systems for human use",
            "A programming language for building user interfaces",
            "A field that studies only network protocols",
          ],
          correct: 1,
          translation: "ما هو التفاعل بين الإنسان والحاسوب (HCI)؟",
          explanation:
            "HCI مجال متعدد التخصصات يركز على تصميم وتقييم وتنفيذ الأنظمة الحاسوبية التفاعلية لاستخدام الإنسان. الاختيارات الأخرى تحصره في مجال ضيق (عتاد أو لغة أو شبكات).",
          tags: ["HCI", "Definition"],
          ref: "Lecture 01 — Slide 3",
        },

        {
          q: "2. Which question does the lecture raise about the abbreviation HCI?",
          options: [
            "Whether the 'C' stands for Computer or Communication",
            "Whether the 'I' stands for Interaction or Interfaces",
            "Whether the 'H' stands for Human or Hardware",
            "Whether the abbreviation should be dropped entirely",
          ],
          correct: 1,
          translation: "إيه السؤال اللي بتطرحه المحاضرة عن اختصار HCI؟",
          explanation:
            "المحاضرة بتسأل: حرف I معناه Interaction ولا Interfaces؟ والدكتور كان بيظن إنها Interfaces. باقي الاختيارات مش مذكورة.",
          tags: ["HCI", "Abbreviation"],
          ref: "Lecture 01 — Slide 4",
        },

        {
          q: "3. According to the Oxford definition shown in the lecture, which devices mediate human-computer interaction?",
          options: [
            "Only keyboards and mice",
            "Printers and scanners only",
            "Floppy disks and magnetic tapes",
            "Graphics devices, touch-sensitive devices, and voice-input devices",
          ],
          correct: 3,
          translation:
            "حسب تعريف أكسفورد في المحاضرة، أي أجهزة بتتوسط التفاعل بين الإنسان والحاسوب؟",
          explanation:
            "التعريف بيذكر أجهزة الرسوميات والأجهزة الحساسة للمس وأجهزة الإدخال الصوتي، وبيؤكد على الإدخال/الإخراج مع البرمجيات المساندة.",
          tags: ["Oxford", "Input/output devices"],
          ref: "Lecture 01 — Slide 4",
        },

        {
          q: "4. Which of the following is NOT listed as an example of HCI in daily life?",
          options: [
            "Industrial robots welding car bodies",
            "ATM machines",
            "Voice assistants such as Siri and Alexa",
            "Car dashboards",
          ],
          correct: 0,
          translation:
            "أي واحد من دول مش مذكور كمثال على HCI في الحياة اليومية؟",
          explanation:
            "الأمثلة المذكورة: الهواتف الذكية، ATM، لوحات السيارات، منصات التعلم، المساعدات الصوتية، المواقع والتطبيقات. روبوتات اللحام مش مذكورة.",
          tags: ["Daily life", "Examples"],
          ref: "Lecture 01 — Slide 5",
        },

        {
          q: "5. Which of the following is NOT stated as a result of good HCI?",
          options: [
            "Better productivity",
            "Better user satisfaction",
            "Higher hardware manufacturing speed",
            "Lower training and support costs",
          ],
          correct: 2,
          translation: "أي واحدة مش مذكورة كنتيجة لـ HCI الجيد؟",
          explanation:
            "HCI الجيد بيحسن الإنتاجية ورضا المستخدم ويقلل تكاليف التدريب والدعم. سرعة تصنيع العتاد مش منها.",
          tags: ["Why HCI matters", "Benefits"],
          ref: "Lecture 01 — Slide 6",
        },

        {
          q: "6. Why does the lecture say HCI matters in modern life?",
          options: [
            "It makes technology machine-centered to run faster",
            "It ensures technology is human-centered, not machine-centered",
            "It removes the need for interfaces",
            "It focuses on developers' convenience only",
          ],
          correct: 1,
          translation: "ليه HCI مهم في الحياة الحديثة حسب المحاضرة؟",
          explanation:
            "HCI بيضمن إن التكنولوجيا تكون human-centered مش machine-centered، وبيقلل الأخطاء ويخلي الواجهات متاحة للجميع بمن فيهم ذوي الإعاقة.",
          tags: ["Human-centered", "Accessibility"],
          ref: "Lecture 01 — Slide 6",
        },

        {
          q: "7. Which two fields feed into Human Factors Engineering in the hierarchy diagram?",
          options: [
            "Mathematics and Physics",
            "Engineering and Psychology",
            "Art and Marketing",
            "Networking and Databases",
          ],
          correct: 1,
          translation: "أي مجالين بيغذوا Human Factors Engineering في المخطط؟",
          explanation:
            "المخطط بيوضح إن Engineering وPsychology هما المدخلات لـ Human Factors Engineering.",
          tags: ["Human Factors", "Hierarchy"],
          ref: "Lecture 01 — Slide 7",
        },

        {
          q: "8. Which fields appear directly under Human Factors Engineering in the diagram?",
          options: [
            "Industrial Design, HCI, and Product Design",
            "UI Design, UX Design, and Interaction Design",
            "Engineering, Psychology, and Sociology",
            "Databases, Networks, and Security",
          ],
          correct: 0,
          translation: "أي مجالات بتظهر مباشرة تحت Human Factors Engineering؟",
          explanation:
            "تحته Industrial Design وHCI وProduct Design. أما UI وUX وInteraction Design فهم تحت HCI.",
          tags: ["Human Factors", "HCI hierarchy"],
          ref: "Lecture 01 — Slide 7",
        },

        {
          q: "9. Which definition matches UX Design?",
          options: [
            "The process of designing buttons, colours, fonts, icons, and layouts",
            "The process of designing how the system responds to user actions only",
            "The process of designing products or systems to provide a good, easy, and satisfying experience for users",
            "The process of designing computer hardware circuits",
          ],
          correct: 2,
          translation: "أي تعريف يطابق UX Design؟",
          explanation:
            "UX هو تصميم المنتجات لتوفير تجربة جيدة وسهلة ومُرضية. تصميم الأزرار والألوان والخطوط هو UI، وتصميم استجابة النظام لأفعال المستخدم أقرب لـ Interaction Design.",
          tags: ["UX", "Definition"],
          ref: "Lecture 01 — Slide 8",
        },

        {
          q: "10. Which definition matches UI Design?",
          options: [
            "The process of making the whole experience easy and satisfying",
            "The process of studying users' psychology in labs",
            "The process of choosing a database engine",
            "The process of designing the visual interface, including buttons, colours, fonts, icons, and layouts",
          ],
          correct: 3,
          translation: "أي تعريف يطابق UI Design؟",
          explanation:
            "UI هو تصميم الواجهة المرئية: الأزرار والألوان والخطوط والأيقونات والتخطيط. وصف جعل التجربة كلها سهلة ومُرضية هو تعريف UX.",
          tags: ["UI", "Definition"],
          ref: "Lecture 01 — Slide 8",
        },

        {
          q: "11. What does Interaction Design focus on?",
          options: [
            "The colour palette of the interface",
            "The physical shape of the device",
            "How users interact with a system and how the system responds to their actions",
            "The cost of the product",
          ],
          correct: 2,
          translation: "إيه اللي بيركز عليه Interaction Design؟",
          explanation:
            "بيركز على طريقة تفاعل المستخدم مع النظام وكيف يستجيب النظام لأفعاله. الألوان من اختصاص UI.",
          tags: ["Interaction Design"],
          ref: "Lecture 01 — Slide 8",
        },

        {
          q: "12. In a flight booking application, which concern belongs to UI Design?",
          options: [
            "Making searching, selecting, and booking a flight easy and clear",
            "Whether the steps are clear and logical",
            "Whether users can achieve their goals easily",
            "The colour, size, shape, and position of the Book Now button",
          ],
          correct: 3,
          translation: "في تطبيق حجز طيران، أي اهتمام بيندرج تحت UI Design؟",
          explanation:
            "المثال في المحاضرة: UI يركز على لون وحجم وشكل ومكان زر Book Now. الباقي أسئلة UX.",
          tags: ["UI", "Flight booking"],
          ref: "Lecture 01 — Slide 9",
        },

        {
          q: "13. Which question is typical of UX Design?",
          options: [
            "Which font size should the menu use?",
            "What colour should the icons be?",
            "How should the layout be arranged on the page?",
            "Can users find what they need easily?",
          ],
          correct: 3,
          translation: "أي سؤال نموذجي لـ UX Design؟",
          explanation:
            "UX بيسأل: هل التطبيق سهل؟ هل المستخدم يحقق أهدافه؟ هل يلاقي اللي محتاجه؟ أما الخط والألوان والتخطيط فهي UI.",
          tags: ["UX", "Questions"],
          ref: "Lecture 01 — Slide 9",
        },

        {
          q: "14. Which of the following is listed among the HCI design principles in the lecture?",
          options: ["Redundancy", "Tolerance", "Latency", "Encryption"],
          correct: 1,
          translation: "أي واحد من دول مذكور ضمن مبادئ تصميم HCI في المحاضرة؟",
          explanation:
            "الشريحة بتعرض Discoverability وFeedback وConstraints وMapping وConsistency وAffordances وStructure وSimplicity وTolerance وEquity وFlexibility وPerceptibility وEase وComfort وDocumentation.",
          tags: ["Design principles"],
          ref: "Lecture 01 — Slide 10",
        },

        {
          q: "15. How many HCI design principles appear in the lecture's figure?",
          options: ["10", "12", "20", "15"],
          correct: 3,
          translation: "كام مبدأ تصميم HCI ظاهر في شكل المحاضرة؟",
          explanation: "الشكل فيه 3 صفوف × 5 مبادئ = 15 مبدأ.",
          tags: ["Design principles"],
          ref: "Lecture 01 — Slide 10",
        },

        {
          q: "16. Which list contains the five main components of HCI?",
          options: [
            "Users, Tasks, Tools, Interfaces, Context",
            "Users, Data, Servers, Networks, Security",
            "Hardware, Software, Peopleware, Data, Network",
            "Input, Process, Output, Storage, Feedback",
          ],
          correct: 0,
          translation: "أي قائمة فيها المكونات الخمسة الرئيسية لـ HCI؟",
          explanation:
            "المكونات: Users وTasks وTools وInterfaces وContext. الباقي قوائم لمفاهيم مختلفة.",
          tags: ["HCI components"],
          ref: "Lecture 01 — Slide 11",
        },

        {
          q: "17. In the HCI components model, what is the role of Interfaces?",
          options: [
            "The connection between users and tools",
            "The environment where interaction occurs",
            "The activities users aim to complete",
            "The people interacting with technology",
          ],
          correct: 0,
          translation: "إيه دور Interfaces في مكونات HCI؟",
          explanation:
            "Interfaces = الربط بين المستخدمين والأدوات. البيئة هي Context، والأنشطة هي Tasks، والأشخاص هم Users.",
          tags: ["Interfaces", "Components"],
          ref: "Lecture 01 — Slide 11, 14",
        },

        {
          q: "18. Why do designers create various tasks and scenarios?",
          options: [
            "To understand the user journey",
            "To reduce the cost of servers",
            "To measure CPU temperature",
            "To replace human users",
          ],
          correct: 0,
          translation: "ليه المصممين بينشئوا مهام وسيناريوهات متنوعة؟",
          explanation:
            "عشان يفهموا رحلة المستخدم (user journey). باقي الاختيارات ملهاش علاقة.",
          tags: ["Tasks", "User journey"],
          ref: "Lecture 01 — Slide 13",
        },

        {
          q: "19. Why do researchers spend time understanding the needs and expectations of the target audience?",
          options: [
            "To reduce hardware costs",
            "To increase processor speed",
            "To create a user-centered design that ensures usefulness and usability",
            "To avoid testing the product",
          ],
          correct: 2,
          translation:
            "ليه الباحثين بيقضوا وقت في فهم احتياجات الجمهور المستهدف؟",
          explanation:
            "فهم الاحتياجات بيساعد في تصميم user-centered يضمن الفائدة وسهولة الاستخدام.",
          tags: ["Users", "User-centered design"],
          ref: "Lecture 01 — Slide 12",
        },

        {
          q: "20. According to the lecture, the tools used to create technology need to be robust and flexible enough to allow for what?",
          options: [
            "Hardware replacement",
            "Network deployment",
            "Iterations",
            "Legal compliance",
          ],
          correct: 2,
          translation:
            "حسب المحاضرة، الأدوات لازم تكون قوية ومرنة كفاية عشان تسمح بإيه؟",
          explanation: "لازم تسمح بالتكرار (iterations) في التصميم.",
          tags: ["Tools", "Iterations"],
          ref: "Lecture 01 — Slide 13",
        },

        {
          type: "essay",
          q: "1. Define HCI and explain what it studies.",
          translation: "عرّف HCI واشرح إيه اللي بيدرسه.",
          answer:
            "HCI is a multidisciplinary field that focuses on the design, evaluation, and implementation of interactive computing systems for human use.\n" +
            "It also studies the major phenomena surrounding these systems:\n" +
            "- how people interact with computers,\n" +
            "- how systems respond,\n" +
            "- and how interfaces can be improved for better usability.",
          tags: ["HCI"],
          ref: "Lecture 01 — Slide 3",
        },

        {
          type: "essay",
          q: "2. Explain the discussion about whether the 'I' in HCI means Interaction or Interfaces, and summarize the Oxford definition shown.",
          translation: "اشرح النقاش حول حرف I في HCI ولخص تعريف أكسفورد.",
          answer:
            "The lecture asks whether the I is for Interaction or Interfaces; the lecturer used to think it was Interfaces, and the abbreviation possibly adapted to the better word.\n" +
            "The Oxford definition describes the human-computer interface as the means of communication between a human user and a computer system, referring to input/output devices with supporting software.\n" +
            "Devices mentioned: graphics devices, touch-sensitive devices, and voice-input devices, configured to facilitate an efficient and desirable interaction.",
          tags: ["HCI", "Oxford"],
          ref: "Lecture 01 — Slide 4",
        },

        {
          type: "essay",
          q: "3. Give examples of HCI in daily life and explain why HCI matters.",
          translation:
            "اذكر أمثلة على HCI في الحياة اليومية واشرح ليه HCI مهم.",
          answer:
            "Examples: smartphone interfaces, ATM machines, car dashboards, e-learning platforms, voice assistants (Siri, Alexa), websites and mobile applications. Every button, menu, icon, and gesture is influenced by HCI principles.\n" +
            "Why it matters: users can interact with technology easily; systems reduce errors and confusion; interfaces are accessible to all, including people with disabilities; technology becomes human-centered, not machine-centered.\n" +
            "Good HCI leads to better productivity, better user satisfaction, and lower training and support costs.",
          tags: ["Daily life", "Why HCI matters"],
          ref: "Lecture 01 — Slide 5, 6",
        },

        {
          type: "essay",
          q: "4. Describe the relation between HCI and other fields using the hierarchy in the lecture.",
          translation:
            "اوصف علاقة HCI بالمجالات الأخرى حسب المخطط الهرمي في المحاضرة.",
          answer:
            "Engineering and Psychology feed into Human Factors Engineering.\n" +
            "Human Factors Engineering leads to Industrial Design, HCI, and Product Design.\n" +
            "HCI in turn includes UI Design, UX Design, and Interaction Design.",
          tags: ["Hierarchy", "Human Factors"],
          ref: "Lecture 01 — Slide 7",
        },

        {
          type: "essay",
          q: "5. Differentiate between UX Design, UI Design, and Interaction Design. Use the flight booking example.",
          translation:
            "فرّق بين UX وUI وInteraction Design مع مثال حجز الطيران.",
          answer:
            "UX Design: designing products or systems to give a good, easy, and satisfying experience; it asks whether the app is easy to use, whether users achieve goals, whether steps are clear and logical, and whether users find what they need and feel comfortable.\n" +
            "UI Design: designing the visual interface: menus, font size and colour, buttons, layout, icons.\n" +
            "Interaction Design: designing how users interact with the system and how the system responds to their actions.\n" +
            "Flight booking example: UX makes searching, selecting, and booking easy and clear; UI focuses on the colour, size, shape, and position of the Book Now button.",
          tags: ["UX", "UI", "Interaction Design"],
          ref: "Lecture 01 — Slide 8, 9",
        },

        {
          type: "essay",
          q: "6. List the principles of human-computer interaction design shown in the lecture.",
          translation: "اذكر مبادئ تصميم HCI المعروضة في المحاضرة.",
          answer:
            "Discoverability, Feedback, Constraints, Mapping, Consistency,\n" +
            "Affordances, Structure, Simplicity, Tolerance, Equity,\n" +
            "Flexibility, Perceptibility, Ease, Comfort, Documentation.",
          tags: ["Design principles"],
          ref: "Lecture 01 — Slide 10",
        },

        {
          type: "essay",
          q: "7. Explain the five main components of HCI.",
          translation: "اشرح المكونات الخمسة الرئيسية لـ HCI.",
          answer:
            "Users: people interacting with technology; researchers study their needs and expectations to create user-centered design ensuring usefulness and usability.\n" +
            "Tasks: activities users aim to complete; designers create tasks and scenarios to understand the user journey.\n" +
            "Tools: devices and software enabling tasks; they must be robust and flexible enough to allow iterations.\n" +
            "Interfaces: the connection between users and tools, helping users navigate the design effectively to accomplish goals.\n" +
            "Context: the environment where interaction occurs and how it affects the way the user interacts with the system.",
          tags: ["HCI components"],
          ref: "Lecture 01 — Slide 11-14",
        },

        {
          type: "essay",
          q: "8. Summarize the conclusion of Lecture 1.",
          translation: "لخّص خلاصة المحاضرة الأولى.",
          answer:
            "HCI focuses on the interaction between people and computers.\n" +
            "It aims to make systems easy, useful, efficient, and satisfying to use.\n" +
            "It is important because good design improves user experience and reduces errors.\n" +
            "It is applied in mobile applications, websites, healthcare systems, education, and automotive systems.",
          tags: ["Conclusion"],
          ref: "Lecture 01 — Slide 15",
        },
      ],
    },
    {
      t: "المحاضرة 2: الإنسان (The Human)",
      d: "القنوات الحسية والحركية، الذاكرة (الحسية، قصيرة المدى، طويلة المدى)، التفكير وحل المشكلات، العاطفة، والفروق الفردية.",
      id: "hci-lecture-02",
      pdf: "datenew/subjects/hci/lectures/Lec 2/Lec 2.pdf",
      pdf2: "/datenew/subjects/hci/questions/Questions on each lecture/Lecture-02-Questions.pdf",
      // فئات روابط منظمة - المحاضرة الثانية: الإنسان (The Human) والإدراك البشري في تفاعل الإنسان والحاسوب (HCI)
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لعلم النفس المعرفي، الحواس، الذاكرة، وقوانين الإدراك البشري في HCI",
          links: [
            {
              t: "أ. أفنان العمري - العامل البشري والإدراك في تفاعل الإنسان والحاسب (HCI)",
              d: "شرح تفصيلي بالعربي للحواس البشرية (الرؤية، السمع، اللمس)، الذاكرة قصيرة وطويلة الأجل، ونماذج المعالجة البشرية",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=6NhQBpb0SHY",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "أساسيات علم النفس المعرفي وتجربة المستخدم (UX Psychology)",
              d: "توضيح كيف تؤثر الذاكرة والعمليات العقلية وإدراك الألوان على تصميم واجهات المستخدم",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLp44XwM31XG5a8G_87A8OwfS9fS2I12i0",
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
            "مراجع أكاديمية ومقالات تفصيلية حول النماذج العقلية، الذاكرة البشرية، وقوانين الحركة مثل Fitts' Law",
          links: [
            {
              t: "GeeksforGeeks - Human Information Processing Model in HCI",
              d: "مقال توثيقي شامل حول نظام استقبال المعلومات البشري، الذاكرة، وعمليات التفكير والاستدلال",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/human-information-processing-model-in-hci/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Interaction Design Foundation (IxDF) - Human Cognitive Architecture & HCI",
              d: "مكتبة المراجع العالمية لدراسة علم النفس المعرفي، الانتباه، الذاكرة طويلة المدى، وتأثير العواطف على التفاعل",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.interaction-design.org/literature/topics/human-computer-interaction",
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
            "أدوات ومواقع تفاعلية لتطبيق قوانين الحركة (Fitts' Law) وقياس الحمل المعرفي",
          links: [
            {
              t: "Fitts' Law Simulator - Interactive Movement & Target Testing",
              d: "أداة تفاعلية لقياس وقت الحركة وسرعة استهداف الأزرار بناءً على مسافة وحجم الأهداف (Fitts' Law)",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ فتح الأداة",
                  url: "https://lawsofux.com/fitts-law/",
                  type: "download",
                  color: "blue",
                },
              ],
            },
          ],
        },
      ],

      questions: [
        {
          q: "1. Which of the following are listed as the human channels for information input and output?",
          options: [
            "Visual, olfactory, gustatory, and thermal",
            "Textual, numerical, graphical, and audio-only",
            "Sensory, short-term, long-term, and working",
            "Visual, auditory, haptic, and movement",
          ],
          correct: 3,
          translation:
            "أي قنوات مذكورة كقنوات إدخال وإخراج المعلومات عند الإنسان؟",
          explanation:
            "المحاضرة بتذكر: visual, auditory, haptic, movement. أنواع الذاكرة (sensory وshort-term وlong-term) مش قنوات الإدخال/الإخراج.",
          tags: ["Human i/o", "Senses"],
          ref: "Lecture 02 — Slide 2",
        },

        {
          q: "2. What is the role of rods and cones in the retina?",
          options: [
            "Rods are for colour vision and cones are for low-light vision",
            "Both are only for detecting movement",
            "Rods are for low-light vision and cones are for colour vision",
            "Both focus the image upright",
          ],
          correct: 2,
          translation: "إيه دور العصي (rods) والمخاريط (cones) في الشبكية؟",
          explanation:
            "الـ rods للرؤية في الإضاءة الضعيفة والـ cones للرؤية الملونة. الصور بتتركز مقلوبة على الشبكية.",
          tags: ["Retina", "Rods and cones"],
          ref: "Lecture 02 — Slide 4",
        },

        {
          q: "3. Which cells detect pattern and movement according to the lecture?",
          options: ["Cones", "Rods", "Ganglion cells", "Mechanoreceptors"],
          correct: 2,
          translation: "أي خلايا بتكتشف النمط والحركة؟",
          explanation:
            "الـ ganglion cells (مرتبطة بالمخ) هي اللي بتكتشف النمط والحركة. الـ mechanoreceptors خاصة باللمس.",
          tags: ["Ganglion cells", "Eye"],
          ref: "Lecture 02 — Slide 4",
        },

        {
          q: "4. What does the visual angle indicate?",
          options: [
            "How much of the view an object occupies, relating to its size and distance from the eye",
            "The ability to perceive fine detail",
            "The subjective reaction to light levels",
            "The sensitivity of cones to wavelengths",
          ],
          correct: 0,
          translation: "إيه اللي بتشير إليه زاوية الرؤية (visual angle)؟",
          explanation:
            "بتشير إلى مقدار ما يشغله الجسم من مجال الرؤية وبتتعلق بحجمه وبعده عن العين. القدرة على إدراك التفاصيل هي visual acuity.",
          tags: ["Visual angle", "Size and depth"],
          ref: "Lecture 02 — Slide 5",
        },

        {
          q: "5. Which three attributes make up colour according to the lecture?",
          options: [
            "Hue, intensity, and saturation",
            "Luminance, flicker, and contrast",
            "Pitch, loudness, and timbre",
            "Saccades, fixations, and shape",
          ],
          correct: 0,
          translation: "إيه الخصائص الثلاثة المكونة للون حسب المحاضرة؟",
          explanation:
            "اللون يتكون من hue وintensity وsaturation. pitch وloudness وtimbre للصوت.",
          tags: ["Colour", "Hue"],
          ref: "Lecture 02 — Slide 6",
        },

        {
          q: "6. What design implication follows from the fact that blue acuity is the lowest?",
          options: [
            "Blue should be used for all important text",
            "Blue is best for low-light displays",
            "Blue should be used to flash warnings",
            "Blue should not be used for important detail",
          ],
          correct: 3,
          translation:
            "إيه الاستنتاج التصميمي من إن حدة إدراك اللون الأزرق هي الأقل؟",
          explanation:
            "لأن blue acuity ضعيف، الأزرق ما ينفعش للتفاصيل المهمة. باقي الاختيارات عكس المنطق.",
          tags: ["Blue acuity", "Design implication"],
          ref: "Lecture 02 — Slide 6, 42",
        },

        {
          q: "7. According to the lecture, what percentage of males and females are colour blind?",
          options: [
            "1% of males and 8% of females",
            "50% of males and 25% of females",
            "0.1% of both",
            "8% of males and 1% of females",
          ],
          correct: 3,
          translation:
            "حسب المحاضرة، نسبة المصابين بعمى الألوان من الذكور والإناث؟",
          explanation: "8% من الذكور و1% من الإناث.",
          tags: ["Colour blindness"],
          ref: "Lecture 02 — Slide 6",
        },

        {
          q: "8. Why do optical illusions such as the Ponzo and Muller-Lyer illusions occur?",
          options: [
            "Due to rods failing in low light",
            "Due to damage in the outer ear",
            "Due to overcompensation by the visual system",
            "Due to slow reaction time",
          ],
          correct: 2,
          translation: "ليه بتحصل الخدع البصرية زي Ponzo وMuller-Lyer؟",
          explanation:
            "الخدع البصرية بتحصل أحياناً بسبب التعويض الزائد من النظام البصري (للحركة وتغيرات الإضاءة).",
          tags: ["Optical illusions", "Ponzo"],
          ref: "Lecture 02 — Slide 7, 8",
        },

        {
          q: "9. In reading, when does perception occur?",
          options: [
            "During saccades",
            "Only at the end of a line",
            "While the eyes are closed",
            "During fixations",
          ],
          correct: 3,
          translation: "في القراءة، إمتى بيحصل الإدراك؟",
          explanation:
            "القراءة فيها saccades وfixations، والإدراك بيحصل أثناء الـ fixations.",
          tags: ["Reading", "Saccades and fixations"],
          ref: "Lecture 02 — Slide 9",
        },

        {
          q: "10. Which statement about reading from a computer screen is correct?",
          options: [
            "Positive contrast always improves reading",
            "Negative contrast improves reading from a computer screen",
            "Word shape is not important to recognition",
            "Colour has no effect on reading",
          ],
          correct: 1,
          translation: "أي عبارة صحيحة عن القراءة من شاشة الحاسوب؟",
          explanation:
            "المحاضرة بتقول إن negative contrast بيحسن القراءة من الشاشة، وإن شكل الكلمة مهم للتعرف عليها.",
          tags: ["Reading", "Negative contrast"],
          ref: "Lecture 02 — Slide 9",
        },

        {
          q: "11. Which part of the ear transmits sound waves as vibrations to the inner ear?",
          options: ["Middle ear", "Outer ear", "Inner ear", "Auditory nerve"],
          correct: 0,
          translation:
            "أي جزء من الأذن بينقل الموجات الصوتية كاهتزازات للأذن الداخلية؟",
          explanation:
            "الأذن الوسطى بتنقل الاهتزازات. الخارجية بتحمي وبتضخم الصوت، والداخلية بتطلق مواد كيميائية تسبب نبضات في العصب السمعي.",
          tags: ["Hearing", "Ear"],
          ref: "Lecture 02 — Slide 10",
        },

        {
          q: "12. Which pairing of sound property and physical quantity is correct?",
          options: [
            "Pitch is amplitude",
            "Pitch is sound frequency",
            "Loudness is frequency",
            "Timbre is amplitude",
          ],
          correct: 1,
          translation: "أي ربط صحيح بين خاصية الصوت والكمية الفيزيائية؟",
          explanation:
            "pitch = التردد، loudness = السعة (amplitude)، timbre = النوع أو الجودة.",
          tags: ["Sound", "Pitch"],
          ref: "Lecture 02 — Slide 10",
        },

        {
          q: "13. What does the cocktail party phenomenon illustrate?",
          options: [
            "Humans hear frequencies above 20 kHz",
            "The auditory system can filter sounds and attend to them over background noise",
            "Hearing is more accurate for high frequencies",
            "Sound is always processed by the middle ear",
          ],
          correct: 1,
          translation: "إيه اللي بتوضحه ظاهرة cocktail party؟",
          explanation:
            "النظام السمعي بيفلتر الأصوات وبيركز على صوت معين وسط الضوضاء. والبشر بيسمعوا من 20Hz إلى 15kHz وأقل دقة في الترددات العالية.",
          tags: ["Cocktail party", "Hearing"],
          ref: "Lecture 02 — Slide 11",
        },

        {
          q: "14. Which receptor in the skin detects pain?",
          options: [
            "Thermoreceptors",
            "Nociceptors",
            "Mechanoreceptors",
            "Photoreceptors",
          ],
          correct: 1,
          translation: "أي مستقبل في الجلد بيكتشف الألم؟",
          explanation:
            "nociceptors للألم، thermoreceptors للحرارة والبرودة، mechanoreceptors للضغط.",
          tags: ["Touch", "Nociceptors"],
          ref: "Lecture 02 — Slide 12",
        },

        {
          q: "15. Which stimulus type has the shortest reaction time according to the lecture?",
          options: [
            "Auditory (about 150 ms)",
            "Visual (about 200 ms)",
            "Pain (about 700 ms)",
            "All are equal",
          ],
          correct: 0,
          translation: "أي نوع منبه له أقصر زمن رد فعل؟",
          explanation: "السمعي حوالي 150ms مقابل 200ms للبصري و700ms للألم.",
          tags: ["Reaction time", "Movement"],
          ref: "Lecture 02 — Slide 13",
        },

        {
          q: "16. What are the three types of memory function described in the lecture?",
          options: [
            "Episodic, semantic, and procedural memory",
            "Iconic, echoic, and haptic memory",
            "RAM, ROM, and cache",
            "Sensory memories, short-term (working) memory, and long-term memory",
          ],
          correct: 3,
          translation: "إيه أنواع وظائف الذاكرة الثلاثة في المحاضرة؟",
          explanation:
            "sensory وshort-term (working) وlong-term. الـ episodic وsemantic نوعان من LTM، وiconic وechoic وhaptic أنواع من sensory memory.",
          tags: ["Memory", "Memory types"],
          ref: "Lecture 02 — Slide 15",
        },

        {
          q: "17. Which sensory memory buffers aural stimuli?",
          options: [
            "Iconic memory",
            "Haptic memory",
            "Echoic memory",
            "Semantic memory",
          ],
          correct: 2,
          translation: "أي ذاكرة حسية بتخزن المنبهات السمعية؟",
          explanation: "echoic للسمعي، iconic للبصري، haptic للمسي.",
          tags: ["Sensory memory", "Echoic"],
          ref: "Lecture 02 — Slide 16",
        },

        {
          q: "18. What is the limited capacity of short-term memory?",
          options: [
            "70 ± 20 chunks",
            "About 200 chunks",
            "7 ± 2 chunks",
            "Unlimited",
          ],
          correct: 2,
          translation: "إيه السعة المحدودة للذاكرة قصيرة المدى؟",
          explanation:
            "7±2 chunks. زمن الوصول حوالي 70ms والاضمحلال السريع حوالي 200ms.",
          tags: ["STM", "Capacity"],
          ref: "Lecture 02 — Slide 17",
        },

        {
          q: "19. Which long-term memory type is a serial memory of events?",
          options: [
            "Semantic memory",
            "Episodic memory",
            "Iconic memory",
            "Working memory",
          ],
          correct: 1,
          translation:
            "أي نوع من الذاكرة طويلة المدى هو ذاكرة تسلسلية للأحداث؟",
          explanation:
            "episodic للأحداث، وsemantic للحقائق والمفاهيم والمهارات، وsemantic LTM مشتقة من episodic LTM.",
          tags: ["LTM", "Episodic"],
          ref: "Lecture 02 — Slide 19",
        },

        {
          q: "20. Which model of LTM represents procedural knowledge as condition/action rules?",
          options: [
            "Production rules",
            "Frames",
            "Scripts",
            "Semantic network",
          ],
          correct: 0,
          translation:
            "أي نموذج للـ LTM بيمثل المعرفة الإجرائية كقواعد شرط/فعل؟",
          explanation:
            "production rules (IF-THEN). الـ frames هياكل بيانات بخانات، والـ scripts معلومات نمطية لتفسير موقف.",
          tags: ["LTM models", "Production rules"],
          ref: "Lecture 02 — Slide 24",
        },

        {
          q: "21. What does the total time hypothesis state?",
          options: [
            "Learning is best in one single session",
            "Information is lost after exactly 200 ms",
            "Rehearsal is not needed for LTM",
            "The amount retained is proportional to rehearsal time",
          ],
          correct: 3,
          translation: "إيه اللي بتقوله total time hypothesis؟",
          explanation:
            "كمية ما يُحتفظ به متناسبة مع وقت المراجعة. وdistribution of practice effect بتقول التعلم الموزع على الزمن أفضل.",
          tags: ["LTM storage", "Rehearsal"],
          ref: "Lecture 02 — Slide 25",
        },

        {
          q: "22. In forgetting, what is retroactive interference?",
          options: [
            "New information replaces old information",
            "Old information interferes with new information",
            "Information is lost very slowly by decay",
            "Emotion causes subconscious forgetting",
          ],
          correct: 0,
          translation: "إيه هو الـ retroactive interference في النسيان؟",
          explanation:
            "هو أن المعلومة الجديدة بتحل محل القديمة. عكسها proactive inhibition حيث القديمة تتداخل مع الجديدة.",
          tags: ["Forgetting", "Interference"],
          ref: "Lecture 02 — Slide 26",
        },

        {
          q: "23. Which kind of reasoning goes from an event to its cause and can lead to false explanations?",
          options: ["Deduction", "Induction", "Abduction", "Analogy"],
          correct: 2,
          translation:
            "أي نوع من الاستدلال بيمشي من الحدث للسبب وممكن يعطي تفسيرات خاطئة؟",
          explanation:
            "الـ abduction (مثال: لو شفت Sam بيسوق بسرعة افترض إنه سكران). الـ deduction بيستنتج منطقياً من المقدمات.",
          tags: ["Abduction", "Reasoning"],
          ref: "Lecture 02 — Slide 33",
        },

        {
          q: "24. What is the difference between a slip and a mistake?",
          options: [
            "A slip is a right intention carried out wrongly, while a mistake is a wrong intention caused by incorrect understanding",
            "A slip is a wrong intention and a mistake is a right intention done wrong",
            "Both are caused only by hardware faults",
            "Slips are caused by incorrect mental models",
          ],
          correct: 0,
          translation: "إيه الفرق بين slip وmistake؟",
          explanation:
            "slip: نية صح لكن التنفيذ غلط (قلة انتباه أو مهارة). mistake: نية غلط بسبب فهم خاطئ أو mental model خاطئ.",
          tags: ["Slips", "Mistakes"],
          ref: "Lecture 02 — Slide 37",
        },

        {
          q: "25. How does positive affect influence problem solving according to the lecture?",
          options: [
            "It leads to narrow thinking",
            "It leads to creative problem solving",
            "It has no influence",
            "It makes easy tasks harder",
          ],
          correct: 1,
          translation: "إزاي بيأثر الـ positive affect على حل المشاكل؟",
          explanation:
            "positive affect بيؤدي لحل مشاكل إبداعي، وnegative بيؤدي لتفكير ضيق.",
          tags: ["Affect", "Emotion"],
          ref: "Lecture 02 — Slide 39",
        },

        {
          type: "essay",
          q: "1. Explain the two stages of vision and describe how the eye receives light.",
          translation: "اشرح مرحلتي الرؤية وكيف تستقبل العين الضوء.",
          answer:
            "Two stages: physical reception of the stimulus, and processing and interpretation of the stimulus.\n" +
            "The eye is a mechanism for receiving light and transforming it into electrical energy; light reflects from objects and images are focused upside-down on the retina.\n" +
            "The retina contains rods for low-light vision and cones for colour vision; ganglion cells (brain) detect pattern and movement.",
          tags: ["Vision", "Eye"],
          ref: "Lecture 02 — Slide 3, 4",
        },

        {
          type: "essay",
          q: "2. Explain how the visual signal is interpreted (size and depth, brightness, colour, and compensation).",
          translation: "اشرح كيف يتم تفسير الإشارة البصرية.",
          answer:
            "Size and depth: visual angle shows how much of the view an object occupies; visual acuity is the (limited) ability to perceive detail; familiar objects are perceived as constant size despite changes in visual angle; cues like overlapping help perception of size and depth.\n" +
            "Brightness: subjective reaction to light levels, affected by luminance and measured by just noticeable difference; acuity and flicker perception increase with luminance.\n" +
            "Colour: made up of hue, intensity, saturation; cones are sensitive to wavelengths; blue acuity is lowest; 8% of males and 1% of females are colour blind.\n" +
            "The visual system compensates for movement and luminance changes; context resolves ambiguity; over-compensation can cause optical illusions such as Ponzo and Muller-Lyer.",
          tags: ["Visual perception"],
          ref: "Lecture 02 — Slide 5-8",
        },

        {
          type: "essay",
          q: "3. Describe the stages of reading and the factors that affect it.",
          translation: "اوصف مراحل القراءة والعوامل المؤثرة فيها.",
          answer:
            "Stages: the visual pattern is perceived; it is decoded using the internal representation of language; it is interpreted using knowledge of syntax, semantics, and pragmatics.\n" +
            "Reading involves saccades and fixations, and perception occurs during fixations.\n" +
            "Word shape is important for recognition, and negative contrast improves reading from a computer screen.",
          tags: ["Reading"],
          ref: "Lecture 02 — Slide 9",
        },

        {
          type: "essay",
          q: "4. Explain hearing: the ear's physical apparatus, sound properties, and the filtering ability of the auditory system.",
          translation: "اشرح السمع: أجزاء الأذن وخصائص الصوت وقدرة الفلترة.",
          answer:
            "Hearing gives information about the environment: distances, directions, objects.\n" +
            "Outer ear protects the inner ear and amplifies sound; middle ear transmits sound waves as vibrations to the inner ear; inner ear releases chemical transmitters that cause impulses in the auditory nerve.\n" +
            "Sound: pitch is frequency, loudness is amplitude, timbre is type or quality.\n" +
            "Humans hear 20Hz to 15kHz and are less accurate distinguishing high frequencies than low. The auditory system filters sounds, e.g. the cocktail party phenomenon.",
          tags: ["Hearing"],
          ref: "Lecture 02 — Slide 10, 11",
        },

        {
          type: "essay",
          q: "5. Explain touch and movement, including reaction times and Fitts' Law.",
          translation: "اشرح اللمس والحركة مع أزمنة رد الفعل وقانون Fitts.",
          answer:
            "Touch provides feedback about the environment and may be the key sense for the visually impaired. Receptors in the skin: thermoreceptors (heat and cold), nociceptors (pain), mechanoreceptors (pressure, some instant, some continuous). Some areas such as fingers are more sensitive. Kinethesis is awareness of body position and affects comfort and performance.\n" +
            "Movement: response time = reaction time + movement time. Reaction time depends on stimulus: visual ~200 ms, auditory ~150 ms, pain ~700 ms. Increasing reaction time decreases accuracy in the unskilled operator but not in the skilled one.\n" +
            "Fitts' Law: Mt = a + b log2(D/S + 1), where a and b are empirical constants, Mt is movement time, D is distance, S is target size. Targets should be as large as possible and distances as small as possible.",
          tags: ["Touch", "Movement", "Fitts' Law"],
          ref: "Lecture 02 — Slide 12-14",
        },

        {
          type: "essay",
          q: "6. Describe the three types of memory and the characteristics of each.",
          translation: "اوصف أنواع الذاكرة الثلاثة وخصائص كل منها.",
          answer:
            "Sensory memory: buffers for stimuli received through the senses (iconic for visual, echoic for aural, haptic for tactile); continuously overwritten.\n" +
            "Short-term memory (working memory): scratch-pad for temporary recall; rapid access ~70 ms, rapid decay ~200 ms, limited capacity of 7 ± 2 chunks.\n" +
            "Long-term memory: repository for all knowledge; slow access ~1/10 second, slow decay if any, huge or unlimited capacity; two types: episodic (serial memory of events) and semantic (structured memory of facts, concepts, skills).\n" +
            "Attention moves information from sensory memory to STM, and rehearsal moves it from STM to LTM.",
          tags: ["Memory"],
          ref: "Lecture 02 — Slide 15-19",
        },

        {
          type: "essay",
          q: "7. Explain the models of long-term memory: semantic network, frames, scripts, and production rules.",
          translation: "اشرح نماذج الذاكرة طويلة المدى.",
          answer:
            "Semantic network: represents relationships between bits of information; child nodes inherit properties of parent nodes, which supports inference through inheritance (e.g. Dog, Collie, Beagle, Snoopy).\n" +
            "Frames: information organized in data structures with slots instantiated with values, and type-subtype relationships (fixed, default, and variable slots, e.g. DOG and COLLIE).\n" +
            "Scripts: models of stereotypical information required to interpret a situation, with elements instantiated for context (entry conditions, result, props, roles, scenes, tracks, e.g. a visit to the vet).\n" +
            "Production rules: representation of procedural knowledge as condition/action rules (e.g. IF dog is wagging tail THEN pat dog).",
          tags: ["LTM models"],
          ref: "Lecture 02 — Slide 20-24",
        },

        {
          type: "essay",
          q: "8. Explain how information is stored in, forgotten from, and retrieved from long-term memory.",
          translation: "اشرح تخزين المعلومات في LTM ونسيانها واسترجاعها.",
          answer:
            "Storage: rehearsal moves information from STM to LTM; total time hypothesis (retention proportional to rehearsal time); distribution of practice effect (optimized by spreading learning over time); structure, meaning and familiarity make information easier to remember.\n" +
            "Forgetting: decay (information lost gradually but very slowly); interference (new replaces old = retroactive interference; old interferes with new = proactive inhibition). Memory is selective and affected by emotion, so we may subconsciously choose to forget.\n" +
            "Retrieval: recall (reproducing information, assisted by cues such as categories and imagery) and recognition (knowing that information has been seen before; less complex than recall because the information is the cue).",
          tags: ["LTM storage", "Forgetting", "Retrieval"],
          ref: "Lecture 02 — Slide 25-27",
        },

        {
          type: "essay",
          q: "9. Compare deduction, induction, and abduction, and explain the problem solving theories mentioned in the lecture.",
          translation:
            "قارن بين deduction وinduction وabduction واشرح نظريات حل المشكلات.",
          answer:
            "Deduction: derive a logically necessary conclusion from given premises (e.g. If it is Friday she goes to work; it is Friday; therefore she goes to work). A logical conclusion is not necessarily true, and people bring world knowledge to bear.\n" +
            "Induction: generalize from cases seen to cases unseen (e.g. all elephants seen have trunks). Unreliable since it can only prove false not true, but useful. Humans are not good at using negative evidence (Wason's cards).\n" +
            "Abduction: reasoning from event to cause (e.g. Sam drives fast when drunk). Unreliable as it can lead to false explanations.\n" +
            "Problem solving: finding a solution to an unfamiliar task using knowledge. Gestalt theory: productive and reproductive problem solving, insight and restructuring. Problem space theory: problem states, legal operators, heuristics such as means-ends analysis, within human information processing limits (e.g. STM). Analogy uses knowledge of a similar problem from a similar domain. Skill acquisition is characterized by chunking and more effective structuring of information.",
          tags: ["Reasoning", "Problem solving"],
          ref: "Lecture 02 — Slide 28-36",
        },

        {
          type: "essay",
          q: "10. Explain slips and mistakes, the role of emotion in interaction, and why individual differences matter in design.",
          translation:
            "اشرح الـ slips والـ mistakes ودور العاطفة والفروق الفردية في التصميم.",
          answer:
            "Slips: right intention but failed to do it right (poor physical skill, inattention; a change to skilled behaviour can cause a slip). Mistakes: wrong intention caused by incorrect understanding; humans create mental models, and if they differ from the actual system, errors occur.\n" +
            "Emotion: theories include James-Lange, Cannon, and Schacter-Singer; emotion involves both cognitive and physical responses. Affect is the biological response to physical stimuli: positive affect leads to creative problem solving, negative affect to narrow thinking. Implications: stress increases problem-solving difficulty, relaxed users are more forgiving, and aesthetically pleasing interfaces increase positive affect.\n" +
            "Individual differences: long term (sex, physical and intellectual abilities), short term (stress, fatigue), changing (age). Designers should ask whether a design decision will exclude a section of the user population.",
          tags: ["Errors", "Emotion", "Individual differences"],
          ref: "Lecture 02 — Slide 37-41",
        },

        {
          type: "essay",
          q: "11. Using Fitts' Law Mt = a + b log2(D/S + 1) with a = 0.1 s and b = 0.15 s/bit, calculate the movement time to hit a target of size S = 30 pixels at distance D = 300 pixels. Then calculate it again if the target size is doubled to 60 pixels.",
          translation:
            "باستخدام قانون Fitts مع a = 0.1 ثانية وb = 0.15، احسب زمن الحركة لهدف حجمه 30 بكسل على بعد 300 بكسل، ثم احسبه لو الحجم اتضاعف لـ 60 بكسل.",
          answer:
            "Law: Mt = a + b log2(D/S + 1).\n" +
            "Case 1: D/S = 300/30 = 10; log2(10 + 1) = log2(11) = 3.459; Mt = 0.1 + 0.15 x 3.459 = 0.619 s (about 0.62 s).\n" +
            "Case 2: D/S = 300/60 = 5; log2(5 + 1) = log2(6) = 2.585; Mt = 0.1 + 0.15 x 2.585 = 0.488 s (about 0.49 s).\n" +
            "Conclusion: larger targets reduce movement time, consistent with the rule 'targets as large as possible'.",
          tags: ["Fitts' Law", "Calculation"],
          ref: "Lecture 02 — Slide 14",
        },

        {
          type: "essay",
          q: "12. A user responds to a visual stimulus and to an auditory stimulus. Assume the movement time is 300 ms in both cases. Using the typical reaction times from the lecture, calculate the total response time for each.",
          translation:
            "مستخدم بيستجيب لمنبه بصري وآخر سمعي، وزمن الحركة 300ms في الحالتين. احسب زمن الاستجابة الكلي لكل واحد.",
          answer:
            "Law: response time = reaction time + movement time.\n" +
            "Visual: 200 ms + 300 ms = 500 ms.\n" +
            "Auditory: 150 ms + 300 ms = 450 ms.\n" +
            "The auditory response is 50 ms faster because auditory reaction time (~150 ms) is shorter than visual (~200 ms).",
          tags: ["Reaction time", "Calculation"],
          ref: "Lecture 02 — Slide 13",
        },

        {
          type: "essay",
          q: "13. The lecture shows the digit string 212348278493202 and the grouped number 0121 414 2626. Assuming each digit in the first string is one chunk and each group in the second is one chunk, how many chunks is each, and which is within the short-term memory capacity?",
          translation:
            "المحاضرة بتعرض سلسلة 212348278493202 والرقم المجمّع 0121 414 2626. لو كل رقم في الأولى chunk وكل مجموعة في التانية chunk، كام chunk في كل واحدة وأيهما ضمن سعة STM؟",
          answer:
            "Capacity of STM = 7 ± 2 chunks (5 to 9 chunks).\n" +
            "212348278493202 has 15 digits, so 15 chunks, which exceeds the maximum of 9, so it is hard to hold in STM.\n" +
            "0121 414 2626 has 3 groups, so 3 chunks, which is within capacity (the lecture's point: chunking helps optimize STM).",
          tags: ["STM", "Chunking", "Calculation"],
          ref: "Lecture 02 — Slide 17, 18",
        },
      ],
    },
    {
      t: "المحاضرة 3: الحاسوب (The Computer)",
      d: "أجهزة الإدخال والإخراج، الذاكرة، المعالجة، وأجهزة التفاعل (النص، الرسوميات، الفيديو، الصوت).",
      id: "hci-lecture-03",
      pdf: "datenew/subjects/hci/lectures/Lec 3/Lec 3.pdf",
      pdf2: "/datenew/subjects/hci/questions/Questions on each lecture/Lecture-03-Questions.pdf",
      // فئات محاضرات تفاعل الإنسان والحاسوب (HCI)
      // فئات روابط منظمة - المحاضرة الثالثة: مكونات الحاسوب والأجهزة الطرفية في تفاعل الإنسان والحاسوب (HCI)
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لمكونات الحاسوب، أجهزة الإدخال والإخراج، والذاكرة في HCI",
          links: [
            {
              t: "أ. أفنان العمري - أجهزة الحاسوب وأساليب التفاعل (Input & Output Devices)",
              d: "شرح تفصيلي بالعربي لأجهزة الإدخال (لوحة المفاتيح، الفأرة، الشاشات اللمسية) والإخراج وأثرها على تفاعل المستخدم",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=6NhQBpb0SHY",
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
            "مراجع أكاديمية ومقالات تفصيلية حول أجهزة الحاسوب وقوانين التفاعل مثل Fitts' Law وتصميم الأجهزة",
          links: [
            {
              t: "Interaction Design Foundation (IxDF) - Hardware & Interface Devices in HCI",
              d: "مكتبة المراجع العالمية لدراسة العلاقة بين الأجهزة المادية وتجربة المستخدم وسهولة الاستخدام",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.interaction-design.org/literature/topics/human-computer-interaction",
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
            "أدوات ومواقع محاكاة تفاعلية لاختبار الأجهزة، النماذج ثلاثية الأبعاد، وتجربة التفاعل",
          links: [
            {
              t: "Blender - 3D Modeling & VR Simulation Tool",
              d: "أداة احترافية لتصميم النماذج ثلاثية الأبعاد وبيئات الواقع الافتراضي (VR) وأنظمة التفاعل المتقدمة",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ تحميل الأداة",
                  url: "https://www.blender.org/",
                  type: "download",
                  color: "blue",
                },
              ],
            },
          ],
        },
      ],
      questions: [
        {
          q: "1. According to the lecture, the devices used in a computer system dictate what?",
          options: [
            "The styles of interaction the system supports",
            "The price of the system",
            "The speed of the network",
            "The size of the memory",
          ],
          correct: 0,
          translation:
            "حسب المحاضرة، الأجهزة المستخدمة في نظام الحاسوب بتحدد إيه؟",
          explanation:
            "الأجهزة هي اللي بتحدد أنماط التفاعل اللي النظام يدعمها، ولو غيّرنا الأجهزة يتغير نمط التفاعل. السعر والسرعة والذاكرة مش هي اللي المحاضرة بتربطها بنمط التفاعل.",
          tags: ["Interaction styles", "Devices"],
          ref: "Lecture 03 — Slide 4",
        },

        {
          q: "2. In the era of batch processing, which description is correct?",
          options: [
            "Punched card stacks were prepared, followed by a long wait for line printer output",
            "Users received rapid feedback and were in control",
            "Voice commands were used to run programs",
            "Touch screens were the main input device",
          ],
          correct: 0,
          translation: "في عصر المعالجة الدفعية (batch processing)، أي وصف صح؟",
          explanation:
            "في الـ batch كانوا يجهزوا كروت مثقبة وبعدها انتظار طويل لمخرجات الطابعة. وصف التغذية الراجعة السريعة وتحكم المستخدم بيخص الحوسبة التفاعلية الحالية مش الـ batch.",
          tags: ["Batch processing", "Interactivity"],
          ref: "Lecture 03 — Slide 7",
        },

        {
          q: "3. Why is the QWERTY layout described as not optimal for typing?",
          options: [
            "It was designed to prevent typewriters from jamming",
            "It places vowels far from the home row on purpose",
            "It was designed for one-handed use",
            "It was created for phone pads",
          ],
          correct: 0,
          translation: "ليه ترتيب QWERTY مش الأمثل للكتابة؟",
          explanation:
            "الترتيب اتصمم أصلاً عشان يمنع تعليق الآلات الكاتبة. باقي الاختيارات مش سبب ذكره الدكتور.",
          tags: ["QWERTY", "Keyboards"],
          ref: "Lecture 03 — Slide 12",
        },

        {
          q: "4. Which keyboard layout places common letters under the dominant fingers and alternates common letter combinations between hands?",
          options: ["Dvorak", "Alphabetic", "QWERTY", "Chord"],
          correct: 0,
          translation:
            "أي ترتيب كيبورد بيحط الحروف الشائعة تحت الأصابع القوية وبيبدّل بين اليدين في تركيبات الحروف؟",
          explanation:
            "ده تعريف Dvorak وبيعطي تحسن 10-15% في السرعة. الـ Alphabetic مش أسرع لا للمحترفين ولا للمبتدئين.",
          tags: ["Dvorak", "Keyboard layouts"],
          ref: "Lecture 03 — Slide 15",
        },

        {
          q: "5. Which statement about chord keyboards is correct?",
          options: [
            "They have a full set of 100+ keys",
            "Letters are typed as a combination of keypresses on only a few keys",
            "They are the slowest text-entry device",
            "They need no learning time and have no fatigue issues",
          ],
          correct: 1,
          translation: "أي عبارة عن chord keyboards صحيحة؟",
          explanation:
            "الـ chord keyboard فيه 4 أو 5 مفاتيح بس، والحرف بيتكتب بمجموعة ضغطات. هو سريع بعد التدريب وحجمه صغير، لكن فيه مقاومة اجتماعية وتعب بعد الاستخدام الطويل.",
          tags: ["Chord keyboards"],
          ref: "Lecture 03 — Slide 17",
        },

        {
          q: "6. In T9 predictive text entry, how is the word guessed?",
          options: [
            "By pressing each key multiple times",
            "By recognizing the user's handwriting",
            "By measuring pressure on the key",
            "By typing one key per letter and using a dictionary to guess the word",
          ],
          correct: 3,
          translation: "في T9، إزاي بيتخمن الكلمة؟",
          explanation:
            "في T9 بتضغط مفتاح واحد لكل حرف والنظام بيستخدم قاموس يخمن الكلمة. الضغط المتكرر هو الطريقة العادية للـ phone pad قبل T9.",
          tags: ["T9", "Phone pad"],
          ref: "Lecture 03 — Slide 19",
        },

        {
          q: "7. Speech recognition works best in which situation?",
          options: [
            "Many speakers with a large vocabulary in a noisy room",
            "A single trained user with a limited vocabulary",
            "Any user with imprecise pronunciation",
            "Several users speaking at once",
          ],
          correct: 1,
          translation: "التعرف على الكلام بيشتغل أحسن في أنهي حالة؟",
          explanation:
            "بينجح أكتر مع مستخدم واحد مدرَّب ومفردات محدودة. الضوضاء وتعدد المتحدثين والمفردات الكبيرة كلها مشاكل.",
          tags: ["Speech recognition"],
          ref: "Lecture 03 — Slide 21",
        },

        {
          q: "8. Why is the mouse called an indirect manipulation device?",
          options: [
            "Mouse movement is in the (x, z) plane while the cursor moves in the (x, y) plane",
            "It needs a cable to connect",
            "It cannot detect movement",
            "It obscures the screen",
          ],
          correct: 0,
          translation: "ليه الماوس اسمه جهاز تحكم غير مباشر؟",
          explanation:
            "حركة الماوس في المستوى (x, z) بينما المؤشر على الشاشة في (x, y). الماوس مش بيحجب الشاشة، وده من مميزاته.",
          tags: ["Mouse", "Indirect manipulation"],
          ref: "Lecture 03 — Slide 25",
        },

        {
          q: "9. What is an advantage of optical mice over mechanical mice?",
          options: [
            "They require a ball on the underside",
            "They only work on a special grid pad",
            "They are less susceptible to dust and dirt",
            "They detect absolute position",
          ],
          correct: 2,
          translation: "إيه ميزة الماوس الضوئي مقارنة بالميكانيكي؟",
          explanation:
            "الضوئي أقل تأثراً بالتراب. الكرة موجودة في الميكانيكي، والماوس بيكتشف الحركة النسبية بس مش المطلقة.",
          tags: ["Optical mouse", "Mechanical mouse"],
          ref: "Lecture 03 — Slide 26",
        },

        {
          q: "10. Which is a disadvantage of touch-sensitive screens?",
          options: [
            "They require a specialised pointer",
            "They are imprecise for small regions and the finger can mark the screen",
            "They are slow for menu selection",
            "They cannot be used in hostile environments",
          ],
          correct: 1,
          translation: "أي واحدة من عيوب شاشات اللمس؟",
          explanation:
            "الإصبع مش دقيق ويسيب علامات على الشاشة. باقي الاختيارات غلط لأن الشاشات اللمسية مش محتاجة مؤشر خاص، وسريعة في اختيار القوائم، ومناسبة للبيئات القاسية.",
          tags: ["Touch screen"],
          ref: "Lecture 03 — Slide 31",
        },

        {
          q: "11. What is the main use of eyegaze today according to the lecture?",
          options: [
            "Mainly for gaming",
            "Mainly for printing",
            "Mainly for text entry on phones",
            "Mainly for evaluation, with potential for hands-free control",
          ],
          correct: 3,
          translation:
            "إيه الاستخدام الرئيسي لتتبع النظر (eyegaze) حسب المحاضرة؟",
          explanation:
            "بيُستخدم أساساً للتقييم، ولديه إمكانية للتحكم بدون استخدام اليدين. الدقة العالية محتاجة headset.",
          tags: ["Eyegaze"],
          ref: "Lecture 03 — Slide 34",
        },

        {
          q: "12. What does 'colour depth' mean?",
          options: [
            "The density of pixels per inch",
            "The ratio between width and height",
            "The number of pixels on the screen",
            "How many different colours each pixel can have",
          ],
          correct: 3,
          translation: "إيه معنى عمق اللون (colour depth)؟",
          explanation:
            "عمق اللون = عدد الألوان المختلفة لكل بكسل (مثلاً 8 بت لكل لون من RGB = ملايين الألوان). كثافة البكسل هي الـ dpi، والنسبة بين العرض والارتفاع هي aspect ratio.",
          tags: ["Colour depth", "Resolution"],
          ref: "Lecture 03 — Slide 39",
        },

        {
          q: "13. What does anti-aliasing do?",
          options: [
            "Makes lines thicker",
            "Increases the refresh rate",
            "Softens jagged edges by using shades of the line colour",
            "Removes colours from the screen",
          ],
          correct: 2,
          translation: "إيه وظيفة الـ anti-aliasing؟",
          explanation:
            "بيخفف حواف الـ jaggies باستخدام درجات من لون الخط، وبيُستخدم مع النصوص كمان.",
          tags: ["Anti-aliasing", "Jaggies"],
          ref: "Lecture 03 — Slide 40",
        },

        {
          q: "14. In a cathode ray tube (CRT), what makes the screen glow?",
          options: [
            "Liquid crystal polarisation",
            "A beam of electrons hitting a phosphor-coated screen",
            "A laser reflected off a mirror",
            "Reflected ambient light",
          ],
          correct: 1,
          translation: "في شاشة CRT، إيه اللي بيخلي الشاشة تتوهج؟",
          explanation:
            "شعاع إلكترونات من المدفع الإلكتروني بيصطدم بشاشة مغطاة بالفوسفور فتتوهج. الاستقطاب البلوري خاص بـ LCD.",
          tags: ["CRT"],
          ref: "Lecture 03 — Slide 41",
        },

        {
          q: "15. Why do LCDs cause less eye strain according to the lecture?",
          options: [
            "They are brighter",
            "Light is reflected, not emitted",
            "They use phosphor",
            "They have higher refresh rates",
          ],
          correct: 1,
          translation: "ليه شاشات LCD بتسبب إجهاد عين أقل حسب المحاضرة؟",
          explanation:
            "الضوء بيتعكس مش بينبعث (N.B. في الشريحة). الفوسفور خاص بـ CRT.",
          tags: ["LCD", "Eye strain"],
          ref: "Lecture 03 — Slide 44",
        },

        {
          q: "16. What causes VR motion sickness according to the lecture?",
          options: [
            "Too much battery usage",
            "Loud sounds in the headset",
            "Conflicting cues such as time delay between head movement and display, and eye angle vs. focus",
            "Low colour depth",
          ],
          correct: 2,
          translation: "إيه سبب دوار الحركة في الواقع الافتراضي؟",
          explanation:
            "الأشارات المتضاربة: تأخر الشاشة عن حركة الراس، وتعارض زاوية العين مع مستوى التركيز. الأسباب الأخرى مش مذكورة.",
          tags: ["VR", "Motion sickness"],
          ref: "Lecture 03 — Slide 55",
        },

        {
          q: "17. Which device uses fibre optics to detect finger position?",
          options: ["Data glove", "3D mouse", "VR helmet", "Joystick"],
          correct: 0,
          translation: "أي جهاز بيستخدم الألياف الضوئية لاكتشاف موضع الأصابع؟",
          explanation:
            "الـ data glove. الـ 3D mouse ليه ست درجات حرية، والـ VR helmet بيكتشف حركة الراس.",
          tags: ["Data glove", "3D interaction"],
          ref: "Lecture 03 — Slide 51",
        },

        {
          q: "18. Devices that provide touch and force feedback, such as vibration in games, are called what?",
          options: [
            "Optical devices",
            "Situated devices",
            "Haptic devices",
            "Raster devices",
          ],
          correct: 2,
          translation:
            "الأجهزة اللي بتوفر إحساس اللمس وقوة الارتداد زي الاهتزاز في الألعاب اسمها إيه؟",
          explanation:
            "اسمها haptic devices. ومثال ذلك BMW iDrive بيحس المستخدم بـ bumps لكل عنصر في القائمة.",
          tags: ["Haptic", "BMW iDrive"],
          ref: "Lecture 03 — Slide 60, 61",
        },

        {
          q: "19. Which printer uses an inked ribbon and a line of pins, with a typical resolution of 80-120 dpi?",
          options: [
            "Laser printer",
            "Dot-matrix printer",
            "Ink-jet printer",
            "Thermal printer",
          ],
          correct: 1,
          translation: "أي طابعة بتستخدم شريط حبر وصف دبابيس وبدقة 80-120 dpi؟",
          explanation:
            "الـ dot-matrix. الـ ink-jet بدقة 300 dpi أو أفضل، والـ laser حوالي 600 dpi أو أكتر، والـ thermal بتستخدم ورق حساس للحرارة.",
          tags: ["Printers", "dpi"],
          ref: "Lecture 03 — Slide 66, 67",
        },

        {
          q: "20. What does OCR do?",
          options: [
            "Converts text into a bitmap",
            "Compresses images losslessly",
            "Converts a bitmap back into text",
            "Predicts the next word",
          ],
          correct: 2,
          translation: "إيه وظيفة الـ OCR؟",
          explanation:
            "بيحول الـ bitmap (صورة ممسوحة) لنص. الماسح الضوئي هو اللي بيحول الورق لـ bitmap.",
          tags: ["OCR", "Scanners"],
          ref: "Lecture 03 — Slide 73, 75",
        },

        {
          q: "21. Which is true about RAM compared with disks?",
          options: [
            "RAM is non-volatile and slower",
            "RAM stores data for decades without power",
            "RAM is on silicon chips, has fast access (~100 ns) and is usually volatile",
            "RAM is optical",
          ],
          correct: 2,
          translation: "أي عبارة صحيحة عن الـ RAM مقارنة بالأقراص؟",
          explanation:
            "الـ RAM على شرائح سيليكون وسريعة (حوالي 100 نانو ثانية) وعادة تفقد البيانات بانقطاع الكهرباء (volatile). الأقراص أبطأ (~10ms).",
          tags: ["RAM", "Volatile"],
          ref: "Lecture 03 — Slide 78, 79",
        },

        {
          q: "22. What problem does virtual memory solve, and what is its drawback?",
          options: [
            "Not enough RAM; swapping to disk slows things down",
            "Not enough disk space; it makes the CPU hotter",
            "Screen resolution; it blurs text",
            "Network speed; it loses packets",
          ],
          correct: 0,
          translation: "الـ virtual memory بيحل أنهي مشكلة، وإيه عيبه؟",
          explanation:
            "بيخزن بعض البرامج مؤقتاً على القرص فيبان إن الـ RAM أكبر، لكن الـ swapping (النسخ من القرص للـ RAM) بيبطّئ النظام.",
          tags: ["Virtual memory", "Swapping"],
          ref: "Lecture 03 — Slide 82",
        },

        {
          q: "23. Which of these is a lossless compression format?",
          options: ["JPEG", "MP3", "MPEG lossy audio", "GIF"],
          correct: 3,
          translation: "أي واحد من دول بيستخدم ضغط بدون فقدان (lossless)؟",
          explanation:
            "الـ GIF وZIP من أمثلة lossless. الـ JPEG وMP3 من أمثلة lossy بيستغلوا حدود الإدراك الحسي.",
          tags: ["Compression", "Lossless"],
          ref: "Lecture 03 — Slide 83",
        },

        {
          q: "24. According to Moore's law as described in the lecture, how often does processor speed double?",
          options: [
            "Every 6 months",
            "Every 12 months",
            "Every 5 years",
            "Every 18 months",
          ],
          correct: 3,
          translation:
            "حسب قانون مور كما في المحاضرة، كل قد إيه بتتضاعف سرعة المعالج؟",
          explanation:
            "كل 18 شهر. الذاكرة بتتضاعف كل 12 شهر فمدة الـ 12 شهر خاصة بالذاكرة مش المعالج.",
          tags: ["Moore's law"],
          ref: "Lecture 03 — Slide 89",
        },

        {
          q: "25. Which limitation is described as 'bottleneck in transference of data from disk to memory'?",
          options: [
            "Computation bound",
            "Graphics bound",
            "Network capacity",
            "Storage channel bound",
          ],
          correct: 3,
          translation:
            "أي قيد وُصف بأنه 'عنق زجاجة في نقل البيانات من القرص للذاكرة'؟",
          explanation:
            "ده الـ Storage channel bound. الـ Computation bound يعني الحساب بياخد وقت طويل، والـ Graphics bound عن تحديث الشاشة.",
          tags: ["Performance limits", "Storage"],
          ref: "Lecture 03 — Slide 91",
        },

        {
          type: "essay",
          q: "1. List the elements of a computer system that affect interaction, and explain why we need to understand computers in HCI.",
          translation:
            "اذكر عناصر نظام الحاسوب المؤثرة على التفاعل وليه لازم نفهم الحاسوب في HCI.",
          answer:
            "Elements: input devices (text entry and pointing), output devices (screens, digital paper), virtual reality (special interaction and display devices), physical interaction (sound, haptic, bio-sensing), paper (print and scan), memory (RAM and permanent media), processing (speed, networks).\n" +
            "Each element affects the interaction. To understand HCI we need to understand what goes in and out (devices, paper, sensors) and what the computer can do (memory, processing, networks). The devices dictate the styles of interaction the system supports.",
          tags: ["Computer system", "Interaction"],
          ref: "Lecture 03 — Slide 2-4",
        },

        {
          type: "essay",
          q: "2. Compare the QWERTY, alphabetic, and Dvorak keyboard layouts, and explain why QWERTY remains dominant.",
          translation:
            "قارن بين ترتيبات QWERTY وAlphabetic وDvorak وليه QWERTY لسه مسيطر.",
          answer:
            "QWERTY: standardised layout, but not optimal for typing because it was designed to prevent typewriters jamming.\n" +
            "Alphabetic: keys in alphabetic order; not faster for trained typists or beginners.\n" +
            "Dvorak: common letters under dominant fingers, biased towards the right hand, common letter combinations alternate between hands; 10-15% improvement in speed and less fatigue.\n" +
            "QWERTY remains dominant because the large social base of QWERTY typists creates market pressure and reluctance to change.",
          tags: ["Keyboards", "QWERTY", "Dvorak"],
          ref: "Lecture 03 — Slide 12-15",
        },

        {
          type: "essay",
          q: "3. Explain chord keyboards and phone-pad text entry (multi-tap and T9).",
          translation:
            "اشرح chord keyboards والكتابة على لوحة الهاتف (multi-tap وT9).",
          answer:
            "Chord keyboards: only 4 or 5 keys; letters typed as combinations of keypresses; compact (ideal for portable use), short learning time, fast once trained; but social resistance and fatigue after extended use; a niche market for some wearables.\n" +
            "Phone pad: numeric keys pressed multiple times (e.g. hello = 4433555 [pause] 555666), surprisingly fast. T9 predictive entry: type one key per letter and a dictionary guesses the word (hello = 43556); ambiguities such as 26 produce a menu of 'am' or 'an'.",
          tags: ["Chord keyboards", "T9"],
          ref: "Lecture 03 — Slide 17-19",
        },

        {
          type: "essay",
          q: "4. Compare the pointing devices: mouse, touchpad, trackball, joystick, and touch screen. Which are direct and which are indirect?",
          translation: "قارن بين أجهزة الإشارة وحدد المباشر وغير المباشر.",
          answer:
            "Mouse: handheld, planar movement and buttons; relative movement only; indirect manipulation (mouse moves in the x-z plane, cursor in x-y); does not obscure the screen, accurate and fast; hand-eye coordination problems for novices; mechanical (ball) or optical (LED, less susceptible to dust).\n" +
            "Touchpad: small touch-sensitive tablet stroked to move the pointer, used in laptops; good acceleration settings are important.\n" +
            "Trackball: ball rotated inside a static housing, like an upside-down mouse; indirect, fairly accurate, very fast for gaming.\n" +
            "Joystick: indirect; pressure of stick = velocity of movement; used for games, aircraft controls and 3D navigation.\n" +
            "Touch screen: direct pointing device; fast, no specialised pointer, good for menu selection; but the finger marks the screen, is imprecise, and lifting the arm is tiring. Stylus and light pen are also direct but can obscure the screen.",
          tags: ["Pointing devices", "Direct vs indirect"],
          ref: "Lecture 03 — Slide 24-32",
        },

        {
          type: "essay",
          q: "5. Compare CRT and LCD displays, including how they work and the health considerations.",
          translation:
            "قارن بين شاشات CRT وLCD من حيث طريقة العمل والاعتبارات الصحية.",
          answer:
            "CRT: a stream of electrons from an electron gun, focused and deflected by magnetic fields, hits a phosphor-coated screen which glows; used in TVs and monitors. Health hazards: X-rays (largely absorbed by the screen), UV/IR (insignificant), radio-frequency and ultrasound emissions, electrostatic field (can cause rashes), electromagnetic fields (concerns about cataracts and reproductive disorders).\n" +
            "LCD: smaller, lighter, no radiation problems. Top plate transparent and polarised, bottom plate reflecting; voltage applied to the crystal changes polarisation and hence colour; light is reflected, not emitted, so there is less eye strain.\n" +
            "Health hints: do not sit too close, avoid very small fonts, take breaks, avoid placing the screen in front of a bright window, work in well-lit surroundings; also consider posture, ergonomics, and stress.",
          tags: ["CRT", "LCD", "Health"],
          ref: "Lecture 03 — Slide 41-44",
        },

        {
          type: "essay",
          q: "6. Define resolution, aspect ratio, colour depth, and anti-aliasing for bitmap displays.",
          translation:
            "عرّف resolution وaspect ratio وcolour depth وanti-aliasing.",
          answer:
            "Resolution: used for the number of pixels (e.g. SVGA 1024 x 768) or pixel density in dpi (typically 72 to 96 dpi).\n" +
            "Aspect ratio: ratio between width and height (4:3 for most screens, 16:9 for wide-screen TV).\n" +
            "Colour depth: how many different colours each pixel can have (black/white or greys, 256 from a palette, 8 bits each for red/green/blue = millions of colours).\n" +
            "Anti-aliasing: softens jagged edges (jaggies, caused by the horizontal raster scan) by using shades of the line colour; also used for text.",
          tags: ["Bitmap displays", "Anti-aliasing"],
          ref: "Lecture 03 — Slide 38-40",
        },

        {
          type: "essay",
          q: "7. Explain large displays, situated displays (with the Hermes example), and digital paper.",
          translation:
            "اشرح الشاشات الكبيرة والـ situated displays مع مثال Hermes وورق الـ digital paper.",
          answer:
            "Large displays: used for meetings and lectures; technologies include plasma, video walls, projected (hand/body may obscure the screen) and back-projected (frosted glass and a projector behind).\n" +
            "Situated displays: displays in public places, display-only or interactive (stylus, touch); location matters because the meaning of information or interaction relates to the location. Hermes: small displays beside office doors where handwritten notes are left using a stylus and the office owner reads them using a web interface.\n" +
            "Digital paper: thin flexible sheets updated electronically while retaining the display, made with small spheres turned or channels with coloured liquid and contrasting spheres; a rapidly developing area.",
          tags: ["Large displays", "Situated displays", "Digital paper"],
          ref: "Lecture 03 — Slide 46-49",
        },

        {
          type: "essay",
          q: "8. Explain virtual reality interaction: 3D positioning devices, VR headsets, and the causes of VR motion sickness.",
          translation: "اشرح التفاعل في الواقع الافتراضي وأسباب دوار الحركة.",
          answer:
            "Positioning in 3D: cockpit and virtual controls, 3D mouse (six degrees of movement: x, y, z plus roll, pitch, yaw), data glove (fibre optics detect finger position), VR helmets (detect head motion and possibly eye gaze), whole-body tracking (accelerometers or reflective dots with video processing).\n" +
            "3D displays: desktop VR with perspective and motion; stereoscopic vision via VR helmets or shuttered glasses; VR headsets use a small screen for each eye at slightly different angles. Simulators and VR caves project scenes on walls with real controls.\n" +
            "Motion sickness: time delay between head movement and display movement, and depth perception conflict (stereo distance versus all being focused in the same plane); conflicting cues cause sickness.",
          tags: ["VR", "3D interaction", "Motion sickness"],
          ref: "Lecture 03 — Slide 50-56",
        },

        {
          type: "essay",
          q: "9. Describe physical controls and sensing: dedicated displays, sounds, haptic devices, and environment and bio-sensing.",
          translation:
            "اوصف التحكم المادي والاستشعار: الشاشات المخصصة والأصوات والأجهزة اللمسية والاستشعار البيئي والحيوي.",
          answer:
            "Dedicated displays: analogue (dials, gauges, lights), digital (small LCD screens, LEDs), head-up displays (aircraft cockpits, showing the most important controls depending on context).\n" +
            "Sounds: beeps, bongs, clonks, whistles and whirrs, used for error indications and confirmation of actions (e.g. keyclick).\n" +
            "Touch, feel, smell: touch is important in games (vibration, force feedback) and simulation (feel of surgical instruments), called haptic devices; texture, smell and taste technology is very limited. Example: BMW iDrive gives small bumps for each menu item.\n" +
            "Environment and bio-sensing: car courtesy light switch, ultrasound detectors, RFID tags, temperature, weight, location; and body sensing such as iris scanners, body temperature, heart rate, galvanic skin response, blink rate.",
          tags: ["Physical controls", "Haptic", "Sensors"],
          ref: "Lecture 03 — Slide 57-63",
        },

        {
          type: "essay",
          q: "10. Explain printing, fonts, and scanning: printer types, font properties, readability, page description languages, scanners, and OCR.",
          translation: "اشرح الطباعة والخطوط والمسح الضوئي.",
          answer:
            "Printing: images made from small dots; critical features are resolution (dpi), speed (pages per minute), and cost. Dot-matrix (inked ribbon and pins, 80-120 dpi), ink-jet/bubble-jet (300 dpi or better), laser (electrostatic drum and toner, 600 dpi or better), thermal (heat-sensitive paper, simple and low maintenance).\n" +
            "Fonts: size measured in points (1 pt about 1/72 inch); fixed-pitch vs variable-pitched; serif vs sans-serif. Readability: lowercase makes word shape easy to read; UPPERCASE is better for individual letters and non-words such as flight numbers; serif helps on long printed lines, but sans-serif is often better on screen.\n" +
            "Page description languages (e.g. PostScript) send a description of the page instead of a huge bitmap. WYSIWYG aims for screen and print to match but they differ (72 dpi landscape vs 600+ dpi portrait).\n" +
            "Scanners convert paper to a bitmap (flat-bed or hand-held, 600-2400 dpi); OCR converts the bitmap back into text, facing issues with different fonts and page formats.",
          tags: ["Printing", "Fonts", "Scanning", "OCR"],
          ref: "Lecture 03 — Slide 65-75",
        },

        {
          type: "essay",
          q: "11. Compare short-term memory (RAM) and long-term storage (disks), and explain virtual memory and compression.",
          translation: "قارن بين RAM والأقراص واشرح virtual memory والضغط.",
          answer:
            "RAM: silicon chips, ~100 ns access, usually volatile, ~100 Mbytes/s transfer; typical desktop 64 to 256 Mbytes; some non-volatile RAM stores set-up information.\n" +
            "Disks: magnetic (floppy ~1.4 Mbytes; hard disks 40 Gbytes to hundreds of Gbytes, ~10 ms access) and optical (lasers, more robust than magnetic; CD-ROM, DVD). Flash memory is silicon-based but persistent.\n" +
            "Virtual memory: stores some programs temporarily on disk to make RAM appear bigger, but swapping from disk to RAM slows things down.\n" +
            "Compression: lossless (exact recovery, e.g. GIF, ZIP, by finding commonalities such as 10A5B8C) and lossy (something like the original, e.g. JPEG, MP3, exploiting perception).",
          tags: ["Memory", "Virtual memory", "Compression"],
          ref: "Lecture 03 — Slide 77-83",
        },

        {
          type: "essay",
          q: "12. Explain the effect of finite processing speed, Moore's law, and the myth of the infinitely fast machine. What limits interactive performance?",
          translation:
            "اشرح تأثير محدودية سرعة المعالجة وقانون مور وخرافة الآلة السريعة بلا حدود وما الذي يحد من الأداء التفاعلي.",
          answer:
            "Finite speed: designers assume fast processors and make interfaces more complicated, but processing cannot keep up (cursor overshooting from buffered keypresses; icon wars). Too fast can also be a problem (help screens scroll too quickly).\n" +
            "Moore's law: processor speed doubles every 18 months (1987: 1.5 MHz, 2002: 1.5 GHz); memory doubles every 12 months.\n" +
            "Myth of the infinitely fast machine: assuming no delays; good design must account for real machines (e.g. the telephone tones are an accident of implementation that was emulated in design).\n" +
            "Limitations: computation bound, storage channel bound, graphics bound, network capacity. Networked computing gives access to large memory and processing, other people, shared resources, but brings network delays, conflicts when many people update data, and unpredictability.",
          tags: ["Processing speed", "Moore's law", "Networks"],
          ref: "Lecture 03 — Slide 87-92",
        },

        {
          type: "essay",
          q: "13. Describe the history and common protocols of the Internet as presented in the lecture.",
          translation: "اوصف تاريخ الإنترنت والبروتوكولات المشتركة.",
          answer:
            "1969: DARPANET (US Department of Defense) with 4 sites; 1971: 23; 1984: 1000; 1989: 10000.\n" +
            "Common language (protocols): TCP (Transmission Control Protocol) is lower level, sending packets (like letters) between machines; IP (Internet Protocol) provides a reliable channel (like a phone call) between programs on machines; email and HTTP build on top of these.",
          tags: ["Internet", "TCP/IP"],
          ref: "Lecture 03 — Slide 93",
        },

        {
          type: "essay",
          q: "14. A page 11 x 8 inches is scanned at 1200 dpi with 8-bit greyscale (1 byte per pixel), uncompressed. Estimate the file size.",
          translation:
            "صفحة 11 × 8 بوصة اتمسحت بدقة 1200 dpi وبتدرج رمادي 8 بت. قدّر حجم الملف بدون ضغط.",
          answer:
            "Pixels along height = 11 x 1200 = 13,200; along width = 8 x 1200 = 9,600.\n" +
            "Total pixels = 13,200 x 9,600 = 126,720,000 pixels.\n" +
            "At 1 byte per pixel = about 126.7 Mbytes. The lecture quotes roughly 128 Mbytes for this example (rounded).",
          tags: ["Scanning", "Storage size", "Calculation"],
          ref: "Lecture 03 — Slide 81",
        },

        {
          type: "essay",
          q: "15. Calculate the data rate of uncompressed video with resolution 512 x 512, 12-bit colour, and 25 frames per second.",
          translation:
            "احسب معدل بيانات فيديو غير مضغوط بدقة 512×512 ولون 12 بت و25 إطار/ثانية.",
          answer:
            "Pixels per frame = 512 x 512 = 262,144.\n" +
            "Bits per frame = 262,144 x 12 = 3,145,728 bits = 393,216 bytes.\n" +
            "Per second = 393,216 x 25 = 9,830,400 bytes/s, about 10 Mbytes per second (matches the lecture).",
          tags: ["Video", "Storage size", "Calculation"],
          ref: "Lecture 03 — Slide 81",
        },

        {
          type: "essay",
          q: "16. Using Moore's law (processor speed doubles every 18 months), check the lecture's claim that a PC went from 1.5 MHz in 1987 to about 1.5 GHz in 2002.",
          translation:
            "باستخدام قانون مور تحقق من أن سرعة الحاسوب وصلت من 1.5 MHz عام 1987 إلى حوالي 1.5 GHz عام 2002.",
          answer:
            "Time span = 2002 - 1987 = 15 years = 180 months.\n" +
            "Number of doublings = 180 / 18 = 10.\n" +
            "Growth factor = 2^10 = 1024; 1.5 MHz x 1024 = 1,536 MHz, about 1.5 GHz. This matches the lecture.",
          tags: ["Moore's law", "Calculation"],
          ref: "Lecture 03 — Slide 89",
        },

        {
          type: "essay",
          q: "17. Using the run-length idea from the lecture, compress the string AAAAAAAAAABBBBBCCCCCCCC. How many characters are saved, and is this lossless or lossy?",
          translation:
            "باستخدام فكرة الضغط في المحاضرة اضغط السلسلة AAAAAAAAAABBBBBCCCCCCCC وكام حرف اتوفر وهل الضغط lossless ولا lossy؟",
          answer:
            "Count runs: A x 10, B x 5, C x 8.\n" +
            "Compressed form: 10A5B8C (6 characters) versus the original 10 + 5 + 8 = 23 characters, saving 17 characters.\n" +
            "It is lossless compression, because the exact original can be recovered by expanding the counts (like GIF and ZIP).",
          tags: ["Compression", "Lossless", "Calculation"],
          ref: "Lecture 03 — Slide 83",
        },
      ],
    },
    // المحاضرة: Interaction Design Basics — أساسيات تصميم التفاعل (الأهداف، القيود، المستخدم، السيناريوهات، التنقل، تصميم الشاشة، النمذجة والتكرار)
    {
      t: "المحاضرة 5: أساسيات تصميم التفاعل (Interaction Design Basics)",
      d: "أساسيات تصميم التفاعل: الأهداف والقيود، عملية التصميم، المستخدم والـ Persona، السيناريوهات، تصميم التنقل، تصميم الشاشة، والنماذج الأولية والتكرار.",
      id: "hci-lecture-05",
      pdf: "datenew/subjects/hci/lectures/Lec 5/Ch 5_HCI_compressed.pdf",
      pdf2: "datenew/subjects/hci/questions/Questions on each lecture/Lecture-05-Questions.pdf",
      // المحاضرة: Interaction Design Basics — أساسيات تصميم التفاعل (الأهداف والقيود، المستخدم والـ Persona، السيناريوهات، التنقل، تصميم الشاشة، النمذجة والتكرار، التوطين)

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "قناة وكورسات عربية بالعربي الفصيح لتغطية مفاهيم تصميم التفاعل وتجربة المستخدم.",
          links: [
            {
              t: "كورس تصميم UX/UI وتصميم المنتجات من البداية",
              d: "بليلايست عربي كامل يشرح التفكير التصميمي (Design Thinking) وأبحاث المستخدم وبناء الـ Persona وتصميم التفاعل — مرتبط بموضوعات المحاضرة حول المستخدم والسيناريوهات وعملية التصميم.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة البلايلايست",
                  url: "https://www.youtube.com/playlist?list=PL1h8Fv-RGaUJU3qOThMMja-ACCU1Vn4NF",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "أسس تصميم تجربة المستخدم (UX) بالعربي — Coursera",
              d: "كورس مجاني بالعربي من Coursera يغطي أساسيات تصميم تجربة المستخدم والـ Design Thinking والـ User-Centered Design — مرتبط مباشرة بتعريف المحاضرة للتصميم والقاعدة الذهبية «افهم موادّك».",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🌐 فتح الكورس",
                  url: "https://www.coursera.org/learn/foundations-of-user-experience-ux-design-arabic",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "خريطة تعلم UX/UI Designer بالعربي (Figma Community)",
              d: "ملف داخل Figma Community يقدم خريطة طريق عربية لتعلم تصميم تجربة المستخدم وواجهة المستخدم خطوة بخطوة — مرتبط بكل أجزاء عملية التصميم المذكورة في المحاضرة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🌐 فتح الخريطة",
                  url: "https://www.figma.com/community/file/1252399728161316440/ux-ui-designer-roadmap",
                  type: "view",
                  color: "orange",
                },
              ],
            },
          ],
        },
        {
          category: "فيديوهات عالمية",
          icon: "🌍",
          description:
            "قنوات ومقاطع موثوقة بالإنجليزي تشرح نفس مفاهيم المحاضرة بعمق أكبر.",
          links: [
            {
              t: "Interaction Design Foundation — YouTube Channel",
              d: "قناة IxDF الرسمية وفيها مقطع «Interaction Design Basics» و«5 Principles of Interaction» — مرتبط بتعريف التصميم وتفهم المواد والقاعدة الذهبية للمحاضرة.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ زيارة القناة",
                  url: "https://www.youtube.com/@InteractionDesignOrg",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Nielsen Norman Group — YouTube Channel",
              d: "قناة NNGroup فيها شروحات لأبحاث المستخدم والـ Persona والـ Breadcrumbs وتصميم التنقل — مفاهيم مذكورة مباشرة في المحاضرة (الـ Persona، الـ Breadcrumbs، أفكار التنقل).",
              icon: "🌍",
              actions: [
                {
                  label: "▶ زيارة القناة",
                  url: "https://www.youtube.com/channel/UC2oCugzU6W8-h95W7eBTUEg",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Don Norman — Authorized Videos Playlist",
              d: "بلايلايست من NN/G فيه فيديوهات لـ Don Norman مؤسس مصطلح UX يشرح التصميم العاطفي وتصميم الأشياء اليومية — يربط بفهم المحاضرة لمبدأ «الجمال والوظيفة» والـ Human-Centered Design.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ مشاهدة البلايلايست",
                  url: "https://www.youtube.com/playlist?list=PLJOFJ3Ok_idv_6hQGNt23xVXuQwKFmfxG",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "User Persona and Scenarios (YouTube)",
              d: "مقطع فيديو يشرح كيف نبني Personas و Scenarios للمستخدمين المُجزئين — مرتبط مباشرة بقسمي Persona و Scenarios في المحاضرة وكيف نستخدم الـ Persona كمستخدم بديل.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ تشغيل الفيديو",
                  url: "https://www.youtube.com/watch?v=ZveHCx0ms8c",
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
            "مقالات مرجعية موثوقة تشرح نفس المفاهيم بأمثلة إضافية وبيانات بحثية.",
          links: [
            {
              t: "What is Interaction Design? — Figma Resource Library",
              d: "مقال شامل من Figma يعرّف Interaction Design ويفصّل أبعاده الخمسة ومبادئه — مرتبط بتعريف المحاضرة للتصميم والأهداف والقيود و«فهم موادّك».",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.figma.com/resource-library/interaction-design",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Personas Make Users Memorable — Nielsen Norman Group",
              d: "مقال من NN/G يشرح فكرة الـ Persona ودورها في User-Centered Design — مرتبط مباشرة بقسم Persona في المحاضرة و«استخدامها كمستخدم بديل».",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.nngroup.com/articles/persona",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Breadcrumbs: 11 Design Guidelines — NN/G",
              d: "مقال يقدم 11 قاعدة لتصميم الـ Breadcrumbs — مرتبط مباشرة بقسم «Local (where you are – breadcrumbs)» في المحاضرة ووظيفة الـ Breadcrumbs في إظهار مسار الموقع.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.nngroup.com/articles/breadcrumbs",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Prototyping in HCI — GeeksforGeeks",
              d: "مقال يشرح النمذجة في HCI ودورها في عملية التصميم التكرارية — مرتبط بقسم Prototyping في المحاضرة ومبدأ «You never get it right first time».",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.geeksforgeeks.org/system-design/prototyping-in-human-computer-interactionhci",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Internationalization vs Localization — UXPin",
              d: "مقال يفرّق بين Internationalization و Localization مع ممارسات عملية — مرتبط بقسم «Across countries and cultures» في المحاضرة واستخدام قاعدة بيانات resource بدل النص الحرفي.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.uxpin.com/studio/blog/internationalization-vs-localization-in-app-design",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "The Encyclopedia of HCI — Interaction Design Foundation",
              d: "موسوعة مجانية من IxDF يكتبها أكثر من 100 مصمم محترف، تغطي تصميم المنتجات والخدمات التفاعلية — مرجع شامل لمفاهيم المحاضرة كلها من تعريف التصميم للنمذجة.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموسوعة",
                  url: "https://ixdf.org/literature/book/the-encyclopedia-of-human-computer-interaction-2nd-ed",
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
            "أدوات وتوتورالز عملية لتطبيق مفاهيم المحاضرة (النمذجة، التنقل، تصميم الشاشة).",
          links: [
            {
              t: "Figma — أداة تصميم ونمذجة تفاعلية",
              d: "Figma هي أداة مجانية للتصميم والنمذجة التفاعلية (prototyping) لتطبيق مفاهيم المحاضرة عمليًا: تصميم الشاشة، التجميع، المحاذاة، المسافة الفاضية، والنمذجة التكرارية.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.figma.com",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Guide to Prototyping in Figma — Official Docs",
              d: "دليل Figma الرسمي لإنشاء النماذج التفاعلية والتدفقات — مرتبط بقسم Prototyping في المحاضرة وحلقة «prototype → evaluate → (re-)design».",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الدليل",
                  url: "https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Free Figma Prototype Tutorials — Figma Community",
              d: "توتورالز مجانية تفاعلية لتعلّم النمذجة في Figma خطوة بخطوة (إطارات، اتصالات، انتقالات) — تطبيق مباشر لمبدأ التكرار والنمذجة في المحاضرة.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح التوتورالز",
                  url: "https://www.figma.com/community/design-tutorials/prototyping",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "How to Create an Interactive Prototype in Figma (YouTube)",
              d: "مقطع تعليمي خطوة بخطوة لإنشاء نموذج تفاعلي في Figma من البداية للنهاية — مناسب لتطبيق حلقة التكرار في المحاضرة عمليًا.",
              icon: "🔧",
              actions: [
                {
                  label: "▶ تشغيل الفيديو",
                  url: "https://www.youtube.com/watch?v=3TSnohhwbpc",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
      ],
      questions: [
        {
          q: "1. According to the lecture, what is design?",
          options: [
            "Achieving goals within constraints",
            "Drawing aesthetically pleasing screens",
            "Writing program code",
            "Selecting color palettes",
          ],
          correct: 0,
          translation: "وفقًا للمحاضرة، ما هو التصميم؟",
          explanation:
            "التصميم هو تحقيق الأهداف ضمن القيود. الأهداف = الغرض (لمَن ولماذا يريدونه). القيود = المواد والمنصات والأجهزة والوقت والتكاليف والخلفية. باقي الاختيارات تمثل أجزاء سطحية فقط من عملية التصميم وليست تعريفه الكامل.",
          tags: ["Design", "Goals", "Constraints"],
          ref: "Lecture 05 — Section: What is design?",
          likely: "high",
        },
        {
          q: "2. The golden rule of design states that you should:",
          options: [
            "Always follow form over function",
            "Understand your materials",
            "Iterate exactly three times",
            "Keep the design as simple as possible",
          ],
          correct: 1,
          translation: "القاعدة الذهبية للتصميم تنص على أنه يجب عليك:",
          explanation:
            "القاعدة الذهبية للتصميم هي «افهم موادّك». في HCI ده معناه تفهم الحاسوب (قيوده وأدواته ومنصاته)، وتفهم الناس (نفسية واجتماعيًا وأخطاء البشر)، وتفهم التفاعل بينهم. الاختيارات التانية مبادئ تانية مش القاعدة الذهبية.",
          tags: ["Golden Rule", "Materials"],
          ref: "Lecture 05 — Section: Golden rule of design",
          likely: "high",
        },
        {
          q: "3. For HCI, understanding your materials means understanding:",
          options: [
            "Only the programming language used",
            "Only the UI component library",
            "Computers, people, and their interaction",
            "Only the underlying hardware",
          ],
          correct: 2,
          translation: "في HCI، فهم موادّك معناه فهم:",
          explanation:
            "المحاضرة بتقول إن لازم نفهم: (1) الحاسوب بقيوده وأدواته ومنصاته، (2) الناس بجوانبهم النفسية والاجتماعية وأخطاء البشر، (3) والتفاعل بينهم. الاختيارات التانية جزئية ومش كاملة.",
          tags: ["Materials", "Computers", "People"],
          ref: "Lecture 05 — Section: Understand your materials (for HCI)",
          likely: "high",
        },
        {
          q: "4. Which of the following is NOT one of the design constraints mentioned in the lecture?",
          options: ["Time", "Costs", "Platforms", "Weather"],
          correct: 3,
          translation: "أيٌّ مما يلي ليس من قيود التصميم المذكورة في المحاضرة؟",
          explanation:
            "القيود المذكورة هي: المواد والمنصات والأجهزة والوقت والتكاليف والخلفية. الطقس (Weather) ليس من القيود المذكورة. الاختيارات التانية كلها قيود حقيقية مذكورة في الشريحة.",
          tags: ["Constraints"],
          ref: "Lecture 05 — Section: What is design? (Constraints)",
          likely: "medium",
        },
        {
          q: "5. The design process described in the lecture begins with:",
          options: [
            "Requirements / what is wanted",
            "Implementation and deployment",
            "Evaluation",
            "Prototyping",
          ],
          correct: 0,
          translation: "عملية التصميم الموصوفة في المحاضرة تبدأ بـ:",
          explanation:
            "الخطوات حسب المحاضرة: Requirements (ما الموجود وما المطلوب) → Analysis → Design → Iteration and Prototyping → Implementation and Deployment. فلابد نبدأ بتحديد المتطلبات. التنفيذ والتقييم والنمذجة خطوات لاحقة.",
          tags: ["Design Process", "Requirements"],
          ref: "Lecture 05 — Section: Steps ...",
          likely: "high",
        },
        {
          q: "6. A persona is best described as:",
          options: [
            "A real user you have interviewed",
            "A description of an example user, not necessarily a real person",
            "The project manager's profile",
            "The designer's own profile",
          ],
          correct: 1,
          translation: "يُوصف الـ Persona أفضل وصف بأنه:",
          explanation:
            "الـ Persona هو وصف لمستخدم «مثالي»، مش بالضرورة شخص حقيقي، يُستخدم كمستخدم بديل: «ماذا كانت ستظن Betty؟». التفاصيل مهمة عشان تخليه حقيقيًا. الاختيار الأول غلط لأن الـ Persona مش لازم يكون شخص حقيقي بالضرورة.",
          tags: ["Persona", "User Focus"],
          ref: "Lecture 05 — Section: Persona",
          likely: "high",
        },
        {
          q: "7. According to the lecture, scenarios are mainly used to:",
          options: [
            "Replace the need for user testing",
            "Document the source code of the system",
            "Communicate design stories and validate other models",
            "Serve as the database schema",
          ],
          correct: 2,
          translation: "وفقًا للمحاضرة، السيناريوهات تُستخدم أساسًا لـ:",
          explanation:
            "السيناريوهات قصص للتصميم، تُستخدم لـ: (1) التواصل مع الآخرين (مصممين وعملاء ومستخدمين)، (2) التحقق من النماذج الأخرى بـ«تشغيلها» ضدها، (3) التعبير عن الديناميكيات. هي مش بديل عن اختبار المستخدم ولا عن قاعدة البيانات ولا عن كود المصدر.",
          tags: ["Scenarios", "Communication"],
          ref: "Lecture 05 — Section: Use scenarios to ...",
          likely: "high",
        },
        {
          q: "8. According to the lecture, scenarios are linear because:",
          options: [
            "The designer is lazy",
            "The system requires it",
            "Users always prefer linear flows",
            "Time is linear and our lives are linear",
          ],
          correct: 3,
          translation: "وفقًا للمحاضرة، السيناريوهات خطية لأن:",
          explanation:
            "المحاضرة بتقول: «الوقت خطي - حياتنا خطية»، لكن السيناريوهات لا تُظهر البدائل. فالخطية تأتي من طبيعة الزمن والحياة، مش من كسل المصمم ولا من متطلبات النظام.",
          tags: ["Scenarios", "Linearity"],
          ref: "Lecture 05 — Section: Scenarios (Linearity)",
          likely: "medium",
        },
        {
          q: "9. The step-by-step walkthrough of a scenario considers which three aspects?",
          options: [
            "What users can see, do, and think",
            "Only the visual design of the screens",
            "Only the technical stack used",
            "Only the marketing goals",
          ],
          correct: 0,
          translation:
            "المراجعة خطوة بخطوة للسيناريو تأخذ في الاعتبار أي ثلاث جوانب؟",
          explanation:
            "السيناريو يغطي: ماذا يمكن للمستخدم أن يرى (مخططات ولقطات شاشة)، وماذا يفعل (لوحة المفاتيح والماوس)، وماذا يفكر فيه. الجوانب البصرية والفنية والتسويقية وحدها قاصرة.",
          tags: ["Scenarios", "Walkthrough"],
          ref: "Lecture 05 — Section: Scenarios ...",
          likely: "high",
        },
        {
          q: "10. Which of the following is NOT one of the levels of navigation design?",
          options: [
            "Widget choice (menus, buttons, etc.)",
            "Database schema design",
            "Screen design (arrangement of buttons)",
            "Application navigation design",
          ],
          correct: 1,
          translation: "أيٌّ مما يلي ليس من مستويات تصميم التنقل؟",
          explanation:
            "المستويات المذكورة: اختيار الـ Widget، تصميم الشاشة، تصميم تنقل التطبيق، والبيئة (تطبيقات أخرى ونظام التشغيل). تصميم قاعدة البيانات مش من مستويات التنقل.",
          tags: ["Navigation", "Levels"],
          ref: "Lecture 05 — Section: Navigation design (Levels)",
          likely: "high",
        },
        {
          q: "11. Breadcrumbs are used to:",
          options: [
            "Replace the global navigation bar entirely",
            "Add decorative icons to the page",
            "Show path through website hierarchy and aid navigation",
            "Display advertisements",
          ],
          correct: 2,
          translation: "تُستخدم فُتات الخبز (Breadcrumbs) لـ:",
          explanation:
            "الـ Breadcrumbs بتوضح مكانك الحالي ضمن هرم الموقع وبتعرض المسار وروابط حية للمستويات الأعلى. هي مش بديل عن التنقل العام ولا عن التنقل المحلي، بل مكمّلة له. الإعلانات والأيقونات الزخرفية مش وظيفتها.",
          tags: ["Navigation", "Breadcrumbs"],
          ref: "Lecture 05 — Section: Local (where you are – breadcrumbs)",
          likely: "high",
        },
        {
          q: '12. The "big button trap" warns designers about:',
          options: [
            "Buttons that are too small to click",
            "Color contrast issues on buttons",
            "Buttons with no text labels",
            "Lots of room for extra text, but where do they actually go?",
          ],
          correct: 3,
          translation: "يحذّر «فخ الزر الكبير» (big button trap) المصممين من:",
          explanation:
            "المحاضرة بتسأل «فين بيمشيوا؟» يعني الزراير الكبيرة بتيجي بمساحة كبيرة للنص لكن مش واضح الوجهة. الفخ مش في الحجم ولا التباين ولا غياب النص، بل في غموض الوجهة.",
          tags: ["Navigation", "Big Button Trap"],
          ref: "Lecture 05 — Section: Beware the big button trap",
          likely: "medium",
        },
        {
          q: "13. Network diagrams in navigation design are used to:",
          options: [
            "Show different paths through the system",
            "Show a strict tree-like structure",
            "Replace hierarchical diagrams",
            "Display database connections only",
          ],
          correct: 0,
          translation:
            "تُستخدم المخططات الشبكية (Network diagrams) في تصميم التنقل لـ:",
          explanation:
            "Network diagrams بتعرض مسارات مختلفة عبر النظام (بمعنى آخر مسارات متعددة بين الشاشات). الـ Hierarchical diagrams بتعرض شكل شجري. الاختيار التالت غلط لأن النوعين مكملين لبعض، والتالت غلط لأنها مش لقواعد البيانات بس.",
          tags: ["Navigation", "Network Diagrams"],
          ref: "Lecture 05 — Section: Network diagrams",
          likely: "high",
        },
        {
          q: "14. The basic principles of screen design and layout include:",
          options: [
            "Only color theory",
            "Grouping, alignment, and use of white space",
            "Only typography choices",
            "Animation principles only",
          ],
          correct: 1,
          translation: "تشمل المبادئ الأساسية لتصميم الشاشة وتنسيقها:",
          explanation:
            "المحاضرة ذكرت: التجميع والبنية والترتيب (grouping, structure, order)، والمحاذاة (alignment)، واستخدام المسافة البيضاء (white space). نظرية الألوان والطباعة والأنيميشن مبادئ تانية مش الأساس المذكور هنا.",
          tags: ["Screen Design", "Layout"],
          ref: "Lecture 05 — Section: Screen design and layout (basic principles)",
          likely: "high",
        },
        {
          q: '15. The principle "form follows function" means that:',
          options: [
            "Aesthetics should always come first",
            "Code structure dictates the UI",
            "Design should match the user's task and purpose",
            "All forms should be circular in shape",
          ],
          correct: 2,
          translation:
            "مبدأ «الشكل يتبع الوظيفة» (form follows function) يعني:",
          explanation:
            "المبدأ معناه إن الشكل يتبع الوظيفة: نسأل إيه اللي المستخدم بيعمله، نفكر المعلومات والمقارنات والترتيب، نصمم على أساس الوظيفة. الجمال أولاً غلط، وكود الـ UI مش اللي يفرض الشكل، والشكل الدائري مجرد مثال مضحك.",
          tags: ["Screen Design", "Form Follows Function"],
          ref: "Lecture 05 — Section: Basic principles (ask / think / design)",
          likely: "high",
        },
        {
          q: "16. For English and European text, the lecture recommends aligning:",
          options: [
            "Center-aligned for readability",
            "Right-aligned for emphasis",
            "Justified for a clean look",
            "Left-aligned because that is how we read",
          ],
          correct: 3,
          translation: "بالنسبة للنص الإنجليزي والأوروبي، توصي المحاضرة بـ:",
          explanation:
            "القراءة من الشمال لليمين (في الإنجليزي والأوروبي)، فالمحاذاة لليسار هي الأسهل للمسح. المحاذاة لليمين أو في الوسط «مناسبة للمؤثرات الخاصة لكن صعبة المسح»، والـ Justified مش مذكور كتوصية.",
          tags: ["Alignment", "Text"],
          ref: "Lecture 05 — Section: Alignment - text",
          likely: "high",
        },
        {
          q: "17. When displaying names for scanning, the lecture suggests:",
          options: [
            "Putting surnames first (e.g., Dix, Alan)",
            "Sorting by first name only",
            "Random order to add variety",
            "Always centering the names",
          ],
          correct: 0,
          translation: "عند عرض الأسماء لأغراض المسح، تقترح المحاضرة:",
          explanation:
            "المستخدم غالبًا بيمسح للألقاب (surnames)، فنضع اللقب أول (مثل: Dix, Alan) عشان أسهل في المسح. الترتيب عشوائي أو توسيط الأسماء مش المسح السهل، والترتيب بالاسم الأول بس غلط.",
          tags: ["Alignment", "Names"],
          ref: "Lecture 05 — Section: Alignment - names",
          likely: "medium",
        },
        {
          q: "18. To make multi-column data easier to scan, the lecture suggests using:",
          options: [
            "Brighter colors for emphasis",
            "Leaders or greying (vertical too)",
            "Larger fonts only",
            "Removing the columns",
          ],
          correct: 1,
          translation:
            "لتسهيل مسح البيانات متعددة الأعمدة، تقترح المحاضرة استخدام:",
          explanation:
            "المسح عبر فجوات الأعمدة صعب، فالمحاضرة بتقترح: (1) Leaders (نقاط رابطة)، (2) Greying (تعتيق عمودي كمان). الألوان الألمع والخط الأكبر مش الحل المذكور، وحذف الأعمدة مش عملي.",
          tags: ["Alignment", "Multiple Columns"],
          ref: "Lecture 05 — Section: Multiple columns (2 / 3)",
          likely: "medium",
        },
        {
          q: "19. White space in design serves to:",
          options: [
            "Waste space on the screen",
            "Add background images",
            "Separate, structure, and highlight",
            "Replace missing content",
          ],
          correct: 2,
          translation: "المسافة البيضاء في التصميم تؤدي وظيفة:",
          explanation:
            "المحاضرة بتقول إن المسافة الفاضية بتخدم ثلاث أغراض: تفصل (separate)، تُبنى (structure)، وبتُبرز (highlight). مثال الـ counter بيوضح إن ما تشوفه هو الفجوات بين العناصر، فالمسافة مش هدر ولا خلفية ولا بديل عن محتوى.",
          tags: ["White Space", "Layout"],
          ref: "Lecture 05 — Section: White space (space to ...)",
          likely: "high",
        },
        {
          q: '20. The "counter" example in the lecture is used to illustrate:',
          options: [
            "A shopping cart interface",
            "A numeric display only",
            "A button design pattern",
            "The contrast between what you see and the gaps between",
          ],
          correct: 3,
          translation: "يُستخدم مثال «الكونتر» (the counter) في المحاضرة لـ:",
          explanation:
            "المحاضرة بتعمل مقارنة بين «WHAT YOU SEE» (ما تراه) و«THE GAPS BETWEEN» (الفجوات بينها)، يعني المسافة البيضاء كمانها من العناصر مهمة زي العناصر نفسها. مش عربة تسوق ولا عرض رقمي ولا نمط زر.",
          tags: ["White Space", "Counter Example"],
          ref: "Lecture 05 — Section: White space - the counter",
          likely: "medium",
        },
        {
          q: "21. For physical controls (e.g., a microwave), grouping should be based on:",
          options: [
            "Function (e.g., defrost settings, type of food, time to cook)",
            "Random order",
            "Color only",
            "Size only",
          ],
          correct: 0,
          translation:
            "بالنسبة للأزرار المادية (مثل الميكروويف)، يجب أن يكون التجميع مبنياً على:",
          explanation:
            "المحاضرة بتجمع الأزرار حسب الوظيفة: إعدادات الإذابة Defrost settings، نوع الطعام type of food، وقت الطبخ time to cook. الترتيب العشوائي أو اللون أو الحجم لوحده مش أساس التجميع.",
          tags: ["Physical Controls", "Grouping"],
          ref: "Lecture 05 — Section: Physical controls (grouping of items)",
          likely: "medium",
        },
        {
          q: "22. According to the lecture, aesthetically pleasing designs:",
          options: [
            "Decrease productivity",
            "Increase user satisfaction and improve productivity",
            "Have no effect on users",
            "Always conflict with usability",
          ],
          correct: 1,
          translation:
            "وفقًا للمحاضرة، التصاميم الجميلة جذريًا (aesthetically pleasing):",
          explanation:
            "المحاضرة بتقول إن التصاميم الجذابة بتزيد رضا المستخدم وبتحسّن الإنتاجية. بس الجمال والوظيفة ممكن يتعارضوا في حالات (زي خلفيات نصية صعبة القراءة). فمش دايماً بيتعارضوا، ومش بيسببو إنتاجية.",
          tags: ["Aesthetics", "Utility"],
          ref: "Lecture 05 — Section: Aesthetics and utility",
          likely: "high",
        },
        {
          q: "23. According to the lecture, beauty and utility may conflict when:",
          options: [
            "Never — they always work together",
            "Only in mobile applications",
            "Mixed visual styles or backgrounds behind text make it hard to read",
            "Only in websites with images",
          ],
          correct: 2,
          translation: "وفقًا للمحاضرة، قد يتعارض الجمال والوظيفة عندما:",
          explanation:
            "أمثلة المحاضرة: أنماط بصرية مختلطة بتبقى سهلة التمييز بس، تصميم نضيف قليل التمايز بيخلطط، خلفيات ورا نص صعبة القراءة (حلوة بس صعبة). مش محصور في موبايل أو ويب، ومش «أبدًا».",
          tags: ["Aesthetics", "Utility", "Conflict"],
          ref: "Lecture 05 — Section: Aesthetics and utility (Beauty and utility may conflict)",
          likely: "medium",
        },
        {
          q: "24. The lecture recommends using color in interfaces:",
          options: [
            "As much as possible to attract attention",
            "Only red and green for status",
            "Only for buttons and links",
            "Sparingly, to reinforce other information",
          ],
          correct: 3,
          translation: "توصي المحاضرة باستخدام اللون في الواجهات:",
          explanation:
            "اللون كتير بيُستاءل لأنه «موجود»، لكن لازم يُستخدم بحذر عشان يعزز معلومات تانية، وننتبه لعمى الألوان (colour blind) وحدود شاشات قديمة. استخدامه بكثرة أو لونين بس أو للأزرار فقط غلط.",
          tags: ["Color", "Design"],
          ref: "Lecture 05 — Section: Colour and 3D",
          likely: "high",
        },
        {
          q: "25. According to the lecture, 3D effects are best used for:",
          options: [
            "Physical information and some graphs",
            "All text for emphasis",
            "Pie charts always",
            "Buttons only",
          ],
          correct: 0,
          translation: "وفقًا للمحاضرة، تأثيرات الـ 3D أفضل استخدامها مع:",
          explanation:
            "الـ 3D كويس للمعلومات المادية وبعض الرسوم البيانية، لكن لو اتحطَّط بيتستخدم (نص في perspective، فطيرة 3D). مش كل النص ولا كل الفطاير ولا الأزرار بس.",
          tags: ["3D", "Color"],
          ref: "Lecture 05 — Section: Colour and 3D (3D effects)",
          likely: "medium",
        },
        {
          q: '26. Which of the following is NOT listed as a "bad use of colour"?',
          options: [
            "Overuse without a good reason",
            "Adjusting your monitor to greys to test readability",
            "Poor use of contrast",
            "Ignoring colour blindness",
          ],
          correct: 1,
          translation: "أيٌّ مما يلي ليس من «الاستخدام السيء للون» المذكور؟",
          explanation:
            "الاستخدام السيء يشمل: الإفراط بلا سبب، تجاهل عمى الألوان، وسوء التباين. أما ضبط الشاشة على الرمادي لاختبار القراءة فهي نصيحة جيدة (do adjust your set!) ومش من الأخطاء. فالاختيار التاني هو الصحيح لأنه «مش سيء».",
          tags: ["Color", "Bad Use"],
          ref: "Lecture 05 — Section: Bad use of colour",
          likely: "medium",
        },
        {
          q: "27. Localisation, as defined in the lecture, means:",
          options: [
            "Same interface for all users worldwide",
            "Removing language options",
            "Changing interfaces for particular cultures/languages",
            "Using only one language throughout",
          ],
          correct: 2,
          translation: "تعني التوطين (Localisation) كما وردت في المحاضرة:",
          explanation:
            "الـ Localisation هي تغيير الواجهات لثقافات ولغات معينة. الـ Internationalisation هي بناء المنتج عشان يقبل التعديل، والـ Globalisation هي اختيار رموز تنفع في كل مكان. فالاختيار التالت هو الصحيح، والتاني والرابع غلط، والأول غلط.",
          tags: ["Localization", "Internationalization"],
          ref: "Lecture 05 — Section: Across countries and cultures",
          likely: "high",
        },
        {
          q: "28. Globalisation, as defined in the lecture, means:",
          options: [
            "Forcing one culture's design on everyone",
            "Translating the UI word-for-word only",
            "Using only English worldwide",
            "Choosing symbols etc. that work everywhere",
          ],
          correct: 3,
          translation: "تعني العولمة (Globalisation) كما وردت في المحاضرة:",
          explanation:
            "الـ Globalisation هي محاولة اختيار رموز ورموز بصريه تنفع في كل مكان. مش فرض تصميم ثقافة، ولا ترجمة حرفية، ولا استخدام إنجليزي فقط. ده يشبه اختيار رموز مشتركة عالميًا.",
          tags: ["Globalization", "Cultures"],
          ref: "Lecture 05 — Section: Across countries and cultures (globalisation)",
          likely: "high",
        },
        {
          q: "29. To support language changes in a localized interface, the lecture recommends using:",
          options: [
            "A 'resource' database instead of literal text",
            "Hard-coded strings in source code",
            "Re-designing the whole interface for each language",
            "Avoiding translation entirely",
          ],
          correct: 0,
          translation:
            "لدعم تغييرات اللغة في واجهة معرّبة، توصي المحاضرة باستخدام:",
          explanation:
            "بدل النص الحرفي (literal text) في الكود، استخدم قاعدة بيانات «resource» فيها النصوص المترجمة. بس انتبه إن الترجمة بتغيّر المقاسات وترتيب الشمال-اليمين. الكود الجاف (hard-coded) أو إعادة التصميم لكل لغة أو تجنب الترجمة كلها غلط.",
          tags: ["Localization", "Resource Database"],
          ref: "Lecture 05 — Section: Across countries and cultures (simply change language?)",
          likely: "medium",
        },
        {
          q: "30. The lecture warns that cultural symbols such as tick and cross:",
          options: [
            "Mean the same thing in every culture",
            "Can have opposite meanings in different cultures",
            "Should never be used in interfaces",
            "Are always positive worldwide",
          ],
          correct: 1,
          translation:
            "تحذّر المحاضرة من أن الرموز الثقافية مثل الصحيحة والخطأ (tick/cross):",
          explanation:
            "في بعض الثقافات الـ tick و الـ cross معناه موجب وسالب (+ve / -ve)، وفي ثقافات تانية معناه «حدّد هذا» (mark this). فمش نفس المعنى في كل مكان، ومش دايماً موجبة، ومش ممنوع استخدامها بس لازم تنتبه.",
          tags: ["Cultural Symbols", "Localization"],
          ref: "Lecture 05 — Section: Across countries and cultures (deeper issues)",
          likely: "medium",
        },
        {
          q: "31. The prototyping principle in the lecture states:",
          options: [
            "Get it right the first time",
            "Skip prototyping in agile projects",
            "You never get it right first time; iterate",
            "Only prototype once, then ship",
          ],
          correct: 2,
          translation: "ينص مبدأ النمذجة في المحاضرة على:",
          explanation:
            "المحاضرة بتقول صراحةً «You never get it right first time» يعني مش هتظبطها من المرة الأولى. لازم تكرر: prototype → evaluate → (re-)design. الوصول للصح من المرة الأولى أو تجاوز النمذجة أو نمذجة وحدة بس كلها غلط.",
          tags: ["Prototyping", "Iteration"],
          ref: "Lecture 05 — Section: Prototyping (You never get it right first time)",
          likely: "high",
        },
        {
          q: "32. The prototyping iteration loop described in the lecture is:",
          options: [
            "Design → deploy → done",
            "Code → test → ship",
            "Sketch → final product",
            "Prototype → evaluate → (re-)design",
          ],
          correct: 3,
          translation: "حلقة تكرار النمذجة الموصوفة في المحاضرة هي:",
          explanation:
            "المحاضرة بتعطي الدايرة: prototype → evaluate → design / re-design → done. لو مش تمامًا، نعيد الكرة. الاختيارات التانية عمليات تطوير برمجي خطي مش دايرة تكرار تصميمي.",
          tags: ["Prototyping", "Iteration Loop"],
          ref: "Lecture 05 — Section: Prototyping (if at first you don't succeed ...)",
          likely: "high",
        },
        {
          type: "essay",
          q: "1. Define design as presented in the lecture, and explain its goals and constraints.",
          translation: "عرّف التصميم كما ورد في المحاضرة، واشرح أهدافه وقيوده.",
          answer:
            'Design is defined in the lecture as "achieving goals within constraints."\nGoals (the purpose):\n  - Who the design is for (the intended users).\n  - Why those users want it (their needs and motivations).\nConstraints (the things that bound the design):\n  - Materials, platforms, and devices available.\n  - Time available for delivery.\n  - Costs and budget.\n  - Background of the team and context.\nIn short, design is the act of meeting the users\' purpose within the limits of the available materials, time, money, and context.',
          tags: ["Design", "Goals", "Constraints"],
          ref: "Lecture 05 — Section: What is design?",
          likely: "high",
        },
        {
          type: "essay",
          q: '2. Explain the golden rule of design and, for HCI, what it means to "understand your materials".',
          translation:
            "اشرح القاعدة الذهبية للتصميم، وماذا يعني في HCI «افهم موادّك».",
          answer:
            'The golden rule of design is: "understand your materials."\nFor Human–Computer Interaction, this means understanding three things:\n  1. Computers — their limitations, capacities, available tools, and the platforms they run on.\n  2. People — their psychological and social aspects, including human error.\n  3. The interaction between computers and people — how the two sides influence each other.\nWithout understanding these three layers, designers cannot make sound decisions about what is feasible, what users actually need, and how the two will work together.',
          tags: ["Golden Rule", "Materials", "HCI"],
          ref: "Lecture 05 — Section: Golden rule of design + Understand your materials",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. List and briefly describe the steps of the design process as presented in the lecture.",
          translation:
            "اذكر واشرح باختصار خطوات عملية التصميم كما عرضت في المحاضرة.",
          answer:
            "The lecture lists the following steps:\n  1. Requirements — what is there now and what is wanted.\n  2. Analysis — ordering and understanding the requirements and context.\n  3. Design — deciding what to do and how to make design choices.\n  4. Iteration and prototyping — getting it right by trying, and finding what is really needed.\n  5. Implementation and deployment — building the system and getting it out to users.\nThese steps are not strictly linear; techniques such as interviews, ethnography, scenarios, task analysis, guidelines, heuristics, dialogue notations, and precise specifications can be applied at several points, and evaluation runs throughout.",
          tags: ["Design Process", "Steps"],
          ref: "Lecture 05 — Section: Steps ...",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. What is a persona? Explain how it is used as a surrogate user during design.",
          translation:
            "ما هو الـ Persona؟ اشرح كيف يُستخدم كمستخدم بديل خلال التصميم.",
          answer:
            'A persona is a description of an "example" user.\nKey characteristics:\n  - It is not necessarily a real person — it is a synthesized description.\n  - It is used as a surrogate user throughout design: the team keeps asking, "what would Betty think?"\n  - Details matter — adding concrete personal details (name, age, habits, goals) makes the persona feel "real," which helps designers reason about design decisions empathetically.\nBy anchoring design discussions around a persona, the team maintains a consistent user perspective rather than designing for an abstract or self-referential audience.',
          tags: ["Persona", "User Focus"],
          ref: "Lecture 05 — Section: Persona",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. Discuss the purpose and characteristics of scenarios in interaction design.",
          translation: "ناقش غرض وخصائص السيناريوهات في تصميم التفاعل.",
          answer:
            'Scenarios are "stories for design." Their purposes:\n  - Communicate with others (designers, clients, users).\n  - Validate other models by "playing" the scenario against them.\n  - Express dynamics: a screenshot shows appearance, while a scenario shows behaviour.\nCharacteristics:\n  - They are linear because time is linear and our lives are linear — but this also means they do not show alternatives.\n  - A scenario is a step-by-step walkthrough that considers what users can see (sketches, screen shots), what they do (keyboard, mouse, etc.), and what they are thinking.\n  - Scenarios are used and reused throughout the design process.',
          tags: ["Scenarios", "Walkthrough", "Dynamics"],
          ref: "Lecture 05 — Sections: Scenarios / Use scenarios to ...",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. Compare local, global, and wider-level navigation design as presented in the lecture.",
          translation:
            "قارن بين تصميم التنقل المحلي والعالمي والأوسع كما ورد في المحاضرة.",
          answer:
            'Navigation design considers structure at several levels:\n  - Local — looking out from a single screen. Includes breadcrumbs (showing the path through the web site hierarchy) and live links to higher levels. Designers should "beware the big button trap."\n  - Global — the structure of the whole site and movement between screens. Used through hierarchical diagrams (tree-like) and network diagrams (different paths through the system).\n  - Wider still — the relationship with other applications and the operating system. Concerns here include style issues (platform standards, consistency), functional issues (cut and paste), and navigation issues (embedded applications, links to other apps, the web).\nLocal design keeps the user oriented on a page; global design ensures coherent movement across screens; the wider level makes the application a good citizen of the wider environment.',
          tags: ["Navigation", "Local", "Global", "Wider"],
          ref: "Lecture 05 — Sections: Think about structure / Local / Global / Wider still",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. Compare hierarchical diagrams and network diagrams in global navigation design.",
          translation:
            "قارن بين المخططات الهرمية والمخططات الشبكية في تصميم التنقل العالمي.",
          answer:
            "Both are used in global navigation design, but they expose different structures:\n  - Hierarchical diagrams — show a tree-like structure of screens. They are useful when the system has a clear parent–child relationship between screens (e.g., a settings tree or content categories).\n  - Network diagrams — show different paths through the system. They are useful when users can reach the same screen through multiple routes (e.g., dashboards, search, and shortcuts that cross the hierarchy).\nIn practice, designers often need both: the hierarchy to ensure a clear primary structure, and the network to recognize and design for the cross-links that real use will create.",
          tags: ["Navigation", "Hierarchical", "Network"],
          ref: "Lecture 05 — Section: Global structure / Network diagrams",
          likely: "medium",
        },
        {
          type: "essay",
          q: "8. Explain the basic principles of screen design and layout, including the available tools mentioned.",
          translation:
            "اشرح المبادئ الأساسية لتصيم الشاشة والتنسيق، بما في ذلك الأدوات المتاحة المذكورة.",
          answer:
            'Basic principles (the lecture\'s "ask / think / design" framing):\n  - Ask: what is the user doing?\n  - Think: what information, comparisons, and order are needed?\n  - Design: form follows function — the layout should serve the task.\nThe lecture groups the basic principles under: grouping, structure, and order; alignment; and use of white space.\nAvailable tools:\n  - Grouping of items.\n  - Order of items.\n  - Decoration — fonts, boxes, etc.\n  - Alignment of items.\n  - White space between items.\nDecoration should be used sparingly — boxes to group logical items, fonts for emphasis and headings — but not too many, to avoid visual noise.',
          tags: ["Screen Design", "Layout", "Tools"],
          ref: "Lecture 05 — Sections: Basic principles / Available tools / Decoration",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. Discuss the alignment rules for different content types presented in the lecture (text, names, numbers, multi-column data).",
          translation:
            "ناقش قواعد المحاذاة لأنواع المحتوى المختلفة المذكورة في المحاضرة (نصوص، أسماء، أرقام، بيانات متعددة الأعمدة).",
          answer:
            'Alignment rules differ by content type:\n  - Text (English/European): align left, because that is the reading direction. Centered or right-aligned text is fine for special effects but hard to scan.\n  - Names: usually users scan for surnames, so put surnames first (e.g., "Dix, Alan") to make scanning easy.\n  - Numbers: think about purpose — for example, when comparing magnitudes, use alignment (often right alignment or decimal alignment) so that the largest value is easy to identify.\n  - Multi-column data: scanning across gaps is hard. The lecture suggests two fixes — leaders (e.g., dotted lines connecting items to values) and greying (alternating row/column shading, possibly vertical too).\nThe underlying principle is purpose-driven alignment: choose the alignment that makes the user\'s task easiest.',
          tags: ["Alignment", "Text", "Names", "Numbers", "Multiple Columns"],
          ref: "Lecture 05 — Sections: Alignment - text / names / numbers / multiple columns",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Explain the role of white space in design, using the lecture's counter example.",
          translation:
            "اشرح دور المسافة البيضاء في التصميم، مستخدمًا مثال الكونتر من المحاضرة.",
          answer:
            'White space is not empty or wasted — it is an active design tool. The lecture identifies three uses:\n  - Space to separate — keeps distinct items visually distinct.\n  - Space to structure — communicates grouping and hierarchy.\n  - Space to highlight — draws attention to the item that has space around it.\nThe counter example makes the point visually: there are two ways to see a counter — "WHAT YOU SEE" (the items on top) and "THE GAPS BETWEEN" (the spaces). Both matter. A designer who only sees the items and ignores the gaps will produce cluttered, hard-to-read layouts, even when every individual item looks fine.',
          tags: ["White Space", "Counter Example"],
          ref: "Lecture 05 — Section: White space (the counter)",
          likely: "medium",
        },
        {
          type: "essay",
          q: "11. Compare aesthetics and utility. When can they conflict, and when can they work together?",
          translation:
            "قارن بين الجمال والوظيفة. متى يتعارضان، ومتى يعملان معًا؟",
          answer:
            "Aesthetics and utility are not opposites — aesthetically pleasing designs can increase user satisfaction and improve productivity.\nHowever, they can conflict:\n  - Mixed-up visual styles can be easy to distinguish visually but confusing overall.\n  - A clean design with little differentiation can be confusing because nothing stands out.\n  - Backgrounds behind text can look good but make the text hard to read.\nThey can also work together — the lecture cites the design of the counter as an example where form and function reinforce each other, and consumer products where aesthetics are a key differentiator (e.g., the iMac).\nIn short, beauty should support the task; when it interferes with reading, scanning, or distinguishing, it has gone wrong.",
          tags: ["Aesthetics", "Utility"],
          ref: "Lecture 05 — Section: Aesthetics and utility",
          likely: "high",
        },
        {
          type: "essay",
          q: "12. Discuss the bad uses of colour mentioned in the lecture and how to test for them.",
          translation:
            "ناقش الاستخدامات السيئة للون المذكورة في المحاضرة وكيفية اختبارها.",
          answer:
            'Bad uses of colour mentioned in the lecture:\n  - Overuse — using many colours without a very good reason (children\'s sites are an exception).\n  - Colour blindness — ignoring users who cannot distinguish certain colours.\n  - Poor use of contrast — text and background colours that make content hard to read.\nThe lecture also notes that older monitors had limited palettes, that colour tends to be overused simply because "it is there," and that colour should be used sparingly to reinforce other information (not to carry meaning on its own).\nHow to test:\n  - "Do adjust your set!" — adjust your monitor to greys only and check whether you can still read your screen. If the design depends on colour alone, it will fail this test, and you need to add redundant cues (shape, position, labels).',
          tags: ["Color", "Bad Use", "Testing"],
          ref: "Lecture 05 — Sections: Colour and 3D / Bad use of colour",
          likely: "high",
        },
        {
          type: "essay",
          q: "13. Explain localisation, internationalisation, and globalisation as presented in the lecture, with examples.",
          translation:
            "اشرح التوطين والدولنة والعولمة كما وردت في المحاضرة، مع أمثلة.",
          answer:
            "Three related but distinct ideas:\n  - Localisation & internationalisation — changing interfaces for particular cultures/languages. The practical tip is to use a 'resource' database instead of literal text in the source, because translations change text sizes and left-to-right order.\n  - Globalisation — trying to choose symbols, colours, and conventions that work everywhere, so the same design can serve many cultures without modification.\n  - Deeper issues — cultural assumptions and values, and the meanings of symbols. For example, a tick and a cross mean +ve and -ve in some cultures, but in others both mean the same thing (\"mark this\").\nThe lecture's takeaway: simply translating text is not enough. Designers must consider how the interface is built (resource database), what symbols they choose (globalisation), and the deeper cultural meanings those symbols carry.",
          tags: [
            "Localization",
            "Internationalization",
            "Globalization",
            "Cultures",
          ],
          ref: "Lecture 05 — Section: Across countries and cultures",
          likely: "high",
        },
        {
          type: "essay",
          q: "14. Why is prototyping and iteration necessary in design? Describe the iteration loop.",
          translation:
            "لماذا النمذجة والتكرار ضروريان في التصميم؟ صف حلقة التكرار.",
          answer:
            'The lecture states bluntly: "you never get it right first time." Designs rarely survive contact with real users unchanged, so iteration is necessary to find what is really needed.\nThe iteration loop is:\n  - Prototype — build a partial, experimental version of the design.\n  - Evaluate — test it (with users, heuristics, scenarios, etc.).\n  - (Re-)design — revise the design based on what was learned.\n  - Repeat until "OK!" → done!\nIteration lets designers get something concrete in front of users early, learn from the gaps between expectation and behaviour, and improve the design over multiple cycles rather than committing to a single, untested guess.',
          tags: ["Prototyping", "Iteration"],
          ref: "Lecture 05 — Section: Prototyping (You never get it right first time / iteration loop)",
          likely: "high",
        },
      ],
    },
    {
      id: "hci-lecture-06",
      t: "المحاضرة 6 — HCI in the Software Process",
      d: "بنك أسئلة شامل لمحاضرة تفاعل الإنسان مع الحاسوب: دورة حياة البرمجيات، هندسة الاستخدام، النماذج الأولية، ومرجعيات التصميم.",
      pdf: "datenew/subjects/hci/lectures/Lec 6/e3-chap-06_compressed.pdf",
      pdf2: "/datenew/subjects/hci/questions/Questions on each lecture/Lecture-06-Questions.pdf",
      // المحاضرة: HCI in the Software Process (Chapter 6) — دورة حياة البرمجيات، هندسة الاستخدام، النماذج الأولية، مرجعيات التصميم

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "قنوات عربية بتشرح أساسيات هندسة البرمجيات ودورة الحياة وتصميم التفاعل.",
          links: [
            {
              t: "دورة هندسة البرمجيات بالعربي",
              d: "قائمة تشغيل بتغطّي دورة حياة البرمجيات ونماذج التطوير زي الشلال، مرتبطة بموضوع دورة الحياة في المحاضرة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶️ مشاهدة القائمة",
                  url: "https://www.youtube.com/playlist?list=PL4mqzqquSRgaJ9XMQMUvMQjPyllD1xY5f",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: HCI في دورة حياة البرمجيات",
              d: "رابط بحث يوتيوب (مش فيديو محدّد) لفيديوهات عربية عن تفاعل الإنسان مع الحاسوب ودورة الحياة وتصميم الاستخدامية.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=تفاعل+الإنسان+مع+الحاسوب+دورة+حياة+البرمجيات",
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
            "محتوى عالمي لشرح النماذج الأولية وتقنية Wizard of Oz ودورة حياة البرمجيات.",
          links: [
            {
              t: "🔎 بحث في يوتيوب: Waterfall Model SDLC",
              d: "رابط بحث يوتيوب لفيديوهات تشرح نموذج الشلال ومراحله، المرتبط مباشرة بقسم The waterfall model.",
              icon: "🌍",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=waterfall+model+SDLC+phases",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: Wizard of Oz prototyping HCI",
              d: "رابط بحث يوتيوب لشرح تقنية Wizard of Oz في الـ HCI والـ prototyping.",
              icon: "🌍",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=wizard+of+oz+prototyping+HCI",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: ISO 9241 usability",
              d: "رابط بحث يوتيوب لشرح معيار ISO 9241 وثلاثي effectiveness / efficiency / satisfaction.",
              icon: "🌍",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=ISO+9241+usability+effectiveness+efficiency+satisfaction",
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
          description: "مراجع رسمية وموثوقة لتعميق فهم مفاهيم المحاضرة.",
          links: [
            {
              t: "Waterfall Model — GeeksforGeeks",
              d: "شرح مفصّل لمراحل نموذج الشلال في هندسة البرمجيات، مرتبط بقسم The waterfall model في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.geeksforgeeks.org/software-engineering/waterfall-model",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Waterfall model — Wikipedia",
              d: "مقال ويكيبيديا الشامل لنموذج الشلال وتاريخه واستخداماته في دورة حياة البرمجيات.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://en.wikipedia.org/wiki/Waterfall_model",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "The Wizard of Oz Method — Nielsen Norman Group",
              d: "مقال NN/g الرسمي يشرح تقنية Wizard of Oz في أبحاث المستخدم، يغطّي نفس المفهوم المذكور في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.nngroup.com/articles/wizard-of-oz/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "What Is ISO 9241? Guide to HCI & Usability",
              d: "دليل شامل لمعيار ISO 9241 والأبعاد الثلاثة (effectiveness / efficiency / satisfaction) المطابقة لما ورد في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.alekvs.com/what-is-iso-9241-a-complete-guide-to-hci-and-usability-standards",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Storyboards in UX Design — IxDF",
              d: "شرح Interaction Design Foundation لمفهوم الـ Storyboard ودوره في تصميم رحلة المستخدم، مرتبط بقسم Techniques for prototyping.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://ixdf.org/literature/topics/storyboards",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "هندسة سهولة الاستخدام — ويكيبيديا العربية",
              d: "مقال عربي عن usability engineering يربط بمحور هندسة الاستخدامية ومواصفاتها في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://ar.wikipedia.org/wiki/%D9%87%D9%86%D8%AF%D8%B3%D8%A9_%D8%B3%D9%87%D9%88%D9%84%D8%A9_%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85",
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
            "أدوات تصميم تفاعلي وprototyping لتطبيق مفاهيم المحاضرة عمليًا.",
          links: [
            {
              t: "Figma — أداة تصميم وprototyping",
              d: "أداة تصميم تفاعلي رئيسية لعمل storyboards ونماذج أولية محدودة الوظائف، تطبّق مفاهيم النماذج الأولية من المحاضرة.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.figma.com/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Wizard of Oz Prototypes — IxDF",
              d: "صفحة IxDF بتشرح أداة وتقنية Wizard of Oz prototyping من منظور تطبيقي.",
              icon: "🔧",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://ixdf.org/literature/topics/wizard-of-oz-prototypes",
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
          q: "1. What is software engineering primarily concerned with, according to the lecture?",
          options: [
            "The discipline for understanding the software design process, or life cycle",
            "The marketing and commercialization of software products",
            "Designing the physical hardware that runs software",
            "Writing source code without following any structured process",
          ],
          correct: 0,
          translation:
            "ما الذي تهتم به هندسة البرمجيات بشكل أساسي حسب المحاضرة؟",
          explanation:
            "المحاضرة بتعرّف هندسة البرمجيات على إنها التخصص اللي بيفهم عملية تصميم البرمجيات أو دورة الحياة. الباقي غلط لأنه بيتكلم عن تسويق أو هاردوير أو كتابة كود من غير منهجية.",
          tags: ["Software Engineering", "Life Cycle"],
          ref: "Lecture 6 — Software engineering & the design process",
          likely: "high",
        },
        {
          q: "2. According to the lecture, when does designing for usability occur in the software life cycle?",
          options: [
            "Only during the requirements specification phase",
            "As a single isolated activity performed after deployment",
            "At all stages of the life cycle, not as a single isolated activity",
            "Only during the integration and testing phase",
          ],
          correct: 2,
          translation:
            "متى يحدث تصميم الاستخدامية في دورة حياة البرمجيات حسب المحاضرة؟",
          explanation:
            "المحاضرة بتأكد إن تصميم الاستخدامية بيحصل في كل مراحل دورة الحياة، مش نشاط معزول. الخيارات التانية بتقصره على مرحلة واحدة فقط.",
          tags: ["Usability", "Life Cycle"],
          ref: "Lecture 6 — HCI in the software process",
          likely: "high",
        },
        {
          q: "3. What is the main characteristic of the waterfall model?",
          options: [
            "A non-linear iterative process with continuous feedback",
            "A linear sequential flow of activities from one phase to the next",
            "A random exploratory approach with no phases",
            "A prototype-only model without documentation",
          ],
          correct: 1,
          translation: "ما هي الخاصية الرئيسية لنموذج الشلال؟",
          explanation:
            "نموذج الشلال بيفترض تسلسل خطي للأنشطة. خيار الـ feedback هو خاصية الأنظمة التفاعلية مش الشلال، والباقي وصف خاطئ للنموذج.",
          tags: ["Waterfall Model", "Life Cycle"],
          ref: "Lecture 6 — The waterfall model",
          likely: "high",
        },
        {
          q: "4. What distinguishes the life cycle for interactive systems from the waterfall model?",
          options: [
            "It assumes a strict linear sequence with no feedback",
            "It cannot assume a linear sequence of activities and involves lots of feedback",
            "It consists of only one phase: coding",
            "It uses the same phases as the waterfall but in reverse order",
          ],
          correct: 1,
          translation:
            "ما الذي يميز دورة حياة الأنظمة التفاعلية عن نموذج الشلال؟",
          explanation:
            "المحاضرة بتوضّح إن دورة حياة الأنظمة التفاعلية ما تقدرش تفترض تسلسل خطي زي الشلال، وإن فيها feedback كتير بين المراحل.",
          tags: ["Interactive Systems", "Waterfall Model"],
          ref: "Lecture 6 — The life cycle for interactive systems",
          likely: "high",
        },
        {
          q: "5. Which activity in the software life cycle involves capturing what the system is expected to provide?",
          options: [
            "Architectural design",
            "Detailed design",
            "Requirements specification",
            "Coding and unit testing",
          ],
          correct: 2,
          translation:
            "أي نشاط في دورة حياة البرمجيات بيشمل التقاط ما يُتوقّع من النظام أن يقدّمه؟",
          explanation:
            "مواصفات المتطلبات (Requirements specification) هي اللي بتلتقط توقعات النظام. التصميم المعماري بيعمل وصف عالي المستوى، والتصميم التفصيلي بيعمل refinement، والـ coding بكتابة الكود.",
          tags: ["Requirements", "Life Cycle"],
          ref: "Lecture 6 — Activities in the life cycle",
          likely: "high",
        },
        {
          q: "6. What does architectural design produce?",
          options: [
            "A high-level description that factors the system into major components and how they are interrelated",
            "The final code modules ready for compilation",
            "User manuals and deployment documentation",
            "Maintenance reports produced after release",
          ],
          correct: 0,
          translation: "ماذا ينتج التصميم المعماري؟",
          explanation:
            "التصميم المعماري بيعمل وصف عالي المستوى بيحوّل النظام لمكونات رئيسية وعلاقاتها. الخيارات التانية بتنتمي لمراحل تانية (coding، توثيق، صيانة).",
          tags: ["Architectural Design"],
          ref: "Lecture 6 — Activities in the life cycle",
          likely: "high",
        },
        {
          q: "7. What does detailed design involve?",
          options: [
            "Capturing system expectations in natural language",
            "Refinement of architectural components to identify modules implemented separately",
            "Performing final operation and maintenance",
            "Integrating all components and testing them as a whole",
          ],
          correct: 1,
          translation: "ماذا يتضمن التصميم التفصيلي؟",
          explanation:
            "التصميم التفصيلي بيعمل refinement للمكونات المعمارية لتحديد modules منفصلة، محكوم بالمتطلبات غير الوظيفية. الباقي أنشطة مراحل تانية.",
          tags: ["Detailed Design"],
          ref: "Lecture 6 — Activities in the life cycle",
          likely: "high",
        },
        {
          q: "8. What does usability specification define?",
          options: [
            "Only the visual appearance and colors of the interface",
            "Clear and measurable requirements for how easy and effective a system should be to use",
            "The marketing strategy and pricing of the product",
            "The hardware and network requirements of the system",
          ],
          correct: 1,
          translation:
            "ماذا تعرّف مواصفات الاستخدامية (usability specification)؟",
          explanation:
            "مواصفات الاستخدامية بتعمل متطلبات واضحة وقابلة للقياس لسهولة وفعالية استخدام النظام. الباقي يتعلق بمظاهر بصرية أو تسويق أو هاردوير.",
          tags: ["Usability Engineering", "Usability Specification"],
          ref: "Lecture 6 — Usability engineering",
          likely: "high",
        },
        {
          q: "9. Which of the following is NOT one of the main components of usability specification?",
          options: [
            "Usability attribute",
            "Measuring concept",
            "Measuring method",
            "Marketing budget",
          ],
          correct: 3,
          translation:
            "أيٌّ مما يلي ليس من المكوّنات الرئيسية لمواصفات الاستخدامية؟",
          explanation:
            "المحاضرة بتعدّ ثلاثة مكوّنات: usability attribute، measuring concept، measuring method، بالإضافة لمستويات. الميزانية التسويقية مش مكوّن.",
          tags: ["Usability Specification"],
          ref: "Lecture 6 — Usability engineering",
          likely: "high",
        },
        {
          q: "10. According to ISO usability standard 9241, what does 'effectiveness' mean?",
          options: [
            "Can you do it without wasting effort?",
            "Do you enjoy the process?",
            "Can you achieve what you want to?",
            "Is the system free of programming bugs?",
          ],
          correct: 2,
          translation:
            "حسب معيار ISO 9241، ماذا تعني الفعالية (effectiveness)؟",
          explanation:
            "المحاضرة بتعرّف effectiveness بـ 'can you achieve what you want to?'. efficiency = without wasting effort، وsatisfaction = enjoy the process.",
          tags: ["ISO 9241", "Usability"],
          ref: "Lecture 6 — ISO usability standard 9241",
          likely: "high",
        },
        {
          q: "11. According to ISO 9241, what does 'efficiency' mean?",
          options: [
            "Can you achieve what you want to?",
            "Can you do it without wasting effort?",
            "Do you enjoy the process?",
            "Is the system aesthetically pleasing?",
          ],
          correct: 1,
          translation: "حسب معيار ISO 9241، ماذا تعني الكفاءة (efficiency)؟",
          explanation:
            "efficiency بتتركّز على إنك تعمل المطلوب من غير إهدار مجهود. effectiveness = تحقيق الهدف، satisfaction = الاستمتاع بالعملية.",
          tags: ["ISO 9241", "Usability"],
          ref: "Lecture 6 — ISO usability standard 9241",
          likely: "high",
        },
        {
          q: "12. According to ISO 9241, what does 'satisfaction' mean?",
          options: [
            "Can you achieve what you want to?",
            "Can you do it without wasting effort?",
            "Do you enjoy the process?",
            "Does the system produce zero errors?",
          ],
          correct: 2,
          translation: "حسب معيار ISO 9241، ماذا تعني الرضا (satisfaction)؟",
          explanation:
            "satisfaction بتتعلّق بالاستمتاع بالعملية. effectiveness = تحقيق الهدف، efficiency = بدون إهدار مجهود.",
          tags: ["ISO 9241", "Usability"],
          ref: "Lecture 6 — ISO usability standard 9241",
          likely: "high",
        },
        {
          q: "13. What does iterative design overcome?",
          options: [
            "Excessive documentation overhead",
            "Inherent problems of incomplete requirements",
            "Hardware limitations of the system",
            "Programming language complexity",
          ],
          correct: 1,
          translation:
            "ما الذي يتغلّب عليه التصميم التكراري (iterative design)؟",
          explanation:
            "المحاضرة بتوضّح إن التصميم التكراري بيتغلّب على المشاكل المتأصّلة للمتطلبات غير المكتملة. الباقي مش أسباب للتصميم التكراري حسب المحاضرة.",
          tags: ["Iterative Design", "Prototyping"],
          ref: "Lecture 6 — Iterative design and prototyping",
          likely: "high",
        },
        {
          q: "14. Which type of prototype is described as 'throw-away' (paper, sketch, etc.)?",
          options: ["Incremental", "Evolutionary", "Throw-away", "Operational"],
          correct: 2,
          translation:
            "أي نوع من النماذج الأولية يُوصف بأنه يُرمى بعد الاستخدام (ورق، رسم تخطيطي)؟",
          explanation:
            "المحاضرة بتذكر throw-away ضمن الأنواع الثلاثة (throw-away, incremental, evolutionary). incremental = step by step، evolutionary = تحسين وتوسيع.",
          tags: ["Prototyping", "Prototype Types"],
          ref: "Lecture 6 — Iterative design and prototyping",
          likely: "high",
        },
        {
          q: "15. Which prototype type is described as 'step by step'?",
          options: [
            "Throw-away",
            "Incremental",
            "Evolutionary",
            "Wizard of Oz",
          ],
          correct: 1,
          translation: "أي نوع من النماذج الأولية يُوصف بأنه خطوة بخطوة؟",
          explanation:
            "incremental = step by step. throw-away = ورق/رسم ويُرمى، evolutionary = تحسين وزيادة features. Wizard of Oz تقنية مش نوع.",
          tags: ["Prototyping", "Prototype Types"],
          ref: "Lecture 6 — Iterative design and prototyping",
          likely: "high",
        },
        {
          q: "16. Which prototype type improves and increases features over time?",
          options: ["Throw-away", "Incremental", "Evolutionary", "Storyboards"],
          correct: 2,
          translation:
            "أي نوع من النماذج الأولية بيحسّن ويزيد المزايا بمرور الوقت؟",
          explanation:
            "evolutionary = improve, increase features. Storyboard تقنية مش نوع نموذج.",
          tags: ["Prototyping", "Prototype Types"],
          ref: "Lecture 6 — Iterative design and prototyping",
          likely: "high",
        },
        {
          q: "17. What is a storyboard?",
          options: [
            "A sequence of drawings that shows how a user interacts with a system",
            "A type of compiled source code",
            "A final production system ready for deployment",
            "A type of database schema diagram",
          ],
          correct: 0,
          translation: "ما هو الـ storyboard؟",
          explanation:
            "المحاضرة بتعرف الـ storyboard على إنه تسلسل رسومات بيوضّح كيفية تفاعل المستخدم مع النظام، ومش ضروري يكون computer-based.",
          tags: ["Prototyping Techniques", "Storyboard"],
          ref: "Lecture 6 — Techniques for prototyping",
          likely: "high",
        },
        {
          q: "18. What is a limited functionality simulation?",
          options: [
            "A prototype that looks or behaves like the real system, but only some functions are implemented",
            "The final released product with all features",
            "A non-functional sketch drawn on paper",
            "A user manual containing only screenshots",
          ],
          correct: 0,
          translation:
            "ما هي المحاكاة محدودة الوظائف (limited functionality simulation)؟",
          explanation:
            "محاكاة شكلها وسلوكها زي النظام الحقيقي لكن جزء فقط من الوظائف متاحة. الخيارات التانية غلط لأنها بتخلط بين النموذج والمنتج النهائي أو الورقي.",
          tags: ["Prototyping Techniques"],
          ref: "Lecture 6 — Techniques for prototyping",
          likely: "high",
        },
        {
          q: "19. In the Wizard of Oz technique, who performs some of the system's functions?",
          options: [
            "Another backup computer system",
            "A human secretly",
            "An automated AI agent",
            "The end user themselves",
          ],
          correct: 1,
          translation:
            "في تقنية Wizard of Oz، مَن الذي ينفّذ بعض وظائف النظام؟",
          explanation:
            "المحاضرة بتقول إن المستخدم بيتفاعل مع النموذج كأنه حقيقي، لكن إنسان (سرًا) بينفّذ بعض وظائف النظام. خيار الـ AI غلط لأنه مش مذكور.",
          tags: ["Prototyping Techniques", "Wizard of Oz"],
          ref: "Lecture 6 — Techniques for prototyping",
          likely: "high",
        },
        {
          q: "20. What is design rationale?",
          options: [
            "An explanation of why a system was designed in a particular way",
            "A list of all features the final system contains",
            "The marketing plan for the product",
            "The maintenance schedule of the system",
          ],
          correct: 0,
          translation: "ما هو الـ design rationale؟",
          explanation:
            "design rationale بيوضّح ليه النظام اتتصمّم بطريقة معيّنة. الباقي مش تعريف له.",
          tags: ["Design Rationale"],
          ref: "Lecture 6 — Design rationale",
          likely: "high",
        },
        {
          q: "21. Which is NOT a benefit of design rationale mentioned in the lecture?",
          options: [
            "It helps team members understand design decisions",
            "Designers learn from previous projects",
            "It records the reasons for choosing one solution over another",
            "It provides the final source code of the system",
          ],
          correct: 3,
          translation:
            "أيٌّ مما يلي ليس من فوائد design rationale المذكورة في المحاضرة؟",
          explanation:
            "الفوائد المذكورة: فهم قرارات التصميم، التعلّم من المشاريع السابقة، تسجيل أسباب اختيار حلّ، ومساعدة المطورين المستقبليين. توفير الكود المصدري مش من الفوائد.",
          tags: ["Design Rationale"],
          ref: "Lecture 6 — Benefits of design rationale",
          likely: "high",
        },
        {
          q: "22. Which type of design rationale records the discussion step by step, from the first question to the final decision?",
          options: [
            "Structure-oriented",
            "Process-oriented",
            "Hybrid-oriented",
            "User-oriented",
          ],
          correct: 1,
          translation:
            "أي نوع من design rationale يسجّل النقاش خطوة بخطوة من أول سؤال للقرار النهائي؟",
          explanation:
            "process-oriented بيسجّل النقاش خطوة بخطوة. structure-oriented بيركّز على تنظيم البدائل وأسبابها للمقارنة.",
          tags: ["Design Rationale", "Process vs Structure"],
          ref: "Lecture 6 — Design rationale (cont'd)",
          likely: "high",
        },
        {
          q: "23. Which type of design rationale organises design alternatives and their reasons, focusing on comparing options?",
          options: [
            "Process-oriented",
            "Structure-oriented",
            "Sequential-oriented",
            "Linear-oriented",
          ],
          correct: 1,
          translation:
            "أي نوع من design rationale ينظّم البدائل وأسبابها ويركّز على مقارنة الخيارات؟",
          explanation:
            "structure-oriented بيرتّب البدائل وأسبابها ويركّز على المقارنة وتفسير الاختيار النهائي. process-oriented بيسجّل النقاش تسلسليًا.",
          tags: ["Design Rationale", "Process vs Structure"],
          ref: "Lecture 6 — Design rationale (cont'd)",
          likely: "high",
        },
        {
          q: "24. What are the main elements of IBIS?",
          options: [
            "Issues, positions, arguments",
            "Questions, options, criteria",
            "Goals, plans, actions",
            "Tasks, methods, results",
          ],
          correct: 0,
          translation: "ما هي العناصر الرئيسية لـ IBIS؟",
          explanation:
            "IBIS عناصرها: issues (هيكل هرمي root)، positions (حلول محتملة)، arguments (بتعدّل العلاقة بين positions وissues). QOC = questions, options, criteria.",
          tags: ["IBIS", "Design Rationale"],
          ref: "Lecture 6 — Issue-based information system (IBIS)",
          likely: "high",
        },
        {
          q: "25. In IBIS, what is the hierarchical structure with one 'root' issue?",
          options: ["Positions", "Arguments", "Issues", "Criteria"],
          correct: 2,
          translation:
            "في IBIS، ما هو ال structure الهرمي الذي له root issue واحد؟",
          explanation:
            "issues بتشكّل هيكل هرمي فيه root issue واحد. positions = حلول محتملة، arguments = بتعدّل العلاقة، criteria تخص QOC مش IBIS.",
          tags: ["IBIS"],
          ref: "Lecture 6 — Issue-based information system (IBIS)",
          likely: "high",
        },
        {
          q: "26. Which design rationale approach is the basis for much of design rationale research?",
          options: [
            "Issue-based information system (IBIS)",
            "Design space analysis",
            "Waterfall model",
            "Storyboard technique",
          ],
          correct: 0,
          translation:
            "أي أسلوب من design rationale هو أساس معظم أبحاث design rationale؟",
          explanation:
            "المحاضرة بتصف IBIS على إنه basis لمعظم أبحاث design rationale. design space analysis أسلوب تاني (structure-oriented).",
          tags: ["IBIS", "Design Rationale"],
          ref: "Lecture 6 — Issue-based information system (IBIS)",
          likely: "high",
        },
        {
          q: "27. What does QOC stand for in design space analysis?",
          options: [
            "Questions, Options, Criteria",
            "Quality, Operation, Cost",
            "Queries, Outputs, Commands",
            "Quotas, Objects, Classes",
          ],
          correct: 0,
          translation: "ماذا يعني QOC في design space analysis؟",
          explanation:
            "QOC = Questions, Options, Criteria. الباقي اختصارات من عائلات تانية (جودة، استعلامات، كائنات).",
          tags: ["QOC", "Design Space Analysis"],
          ref: "Lecture 6 — Design space analysis",
          likely: "high",
        },
        {
          q: "28. Which design space analysis structure is hierarchical with questions, options, and criteria?",
          options: ["QOC", "IBIS", "Waterfall", "Storyboard"],
          correct: 0,
          translation:
            "أي بنية في design space analysis تكون هرمية بأسئلة وخيارات ومعايير؟",
          explanation:
            "QOC = Questions/Options/Criteria وهيكل هرمي. IBIS بيستخدم issues/positions/arguments.",
          tags: ["QOC", "Design Space Analysis"],
          ref: "Lecture 6 — Design space analysis",
          likely: "high",
        },
        {
          q: "29. In the usability specification, what does the 'measuring concept' refer to?",
          options: [
            "What will be measured (e.g. task completion time or number of errors)",
            "How the measurement will be collected (e.g. observing users)",
            "The existing performance of the current system",
            "The target performance level only",
          ],
          correct: 0,
          translation:
            "في مواصفات الاستخدامية، ماذا يشير الـ measuring concept؟",
          explanation:
            "measuring concept = اللي هيتقاس (مثل زمن إنجاز المهمة أو عدد الأخطاء). measuring method = كيفية جمع القياس. Current و Planned هي مستويات.",
          tags: ["Usability Specification"],
          ref: "Lecture 6 — Usability engineering",
          likely: "medium",
        },
        {
          q: "30. Which usability level represents the existing performance of the system?",
          options: [
            "Worst-case level",
            "Planned level",
            "Best-case level",
            "Current level",
          ],
          correct: 3,
          translation: "أي مستوى استخدامية يمثّل الأداء الحالي للنظام؟",
          explanation:
            "Current level = الأداء الحالي. Worst-case = أقل أداء مقبول، Planned = المستهدف، Best-case = الأفضل المتوقّع.",
          tags: ["Usability Levels"],
          ref: "Lecture 6 — Usability engineering",
          likely: "medium",
        },
        {
          q: "31. Which usability level represents the least acceptable performance?",
          options: [
            "Current level",
            "Planned level",
            "Worst-case level",
            "Best-case level",
          ],
          correct: 2,
          translation: "أي مستوى استخدامية يمثّل أقل أداء مقبول؟",
          explanation:
            "Worst-case level = أقل أداء مقبول. Planned = الهدف، Best-case = الأفضل المتوقّع، Current = الحالي.",
          tags: ["Usability Levels"],
          ref: "Lecture 6 — Usability engineering",
          likely: "medium",
        },
        {
          q: "32. Which usability level represents the target performance?",
          options: [
            "Current level",
            "Worst-case level",
            "Planned level",
            "Best-case level",
          ],
          correct: 2,
          translation: "أي مستوى استخدامية يمثّل الأداء المستهدف؟",
          explanation:
            "Planned level = الأداء الهدف. Best-case = الأفضل المتوقّع، Worst-case = أقل مقبول، Current = الحالي.",
          tags: ["Usability Levels"],
          ref: "Lecture 6 — Usability engineering",
          likely: "medium",
        },
        {
          q: "33. Does a storyboard need to be computer-based?",
          options: [
            "Yes, it must always be computer-based",
            "Only if it is for a web application",
            "No, it does not need to be computer-based",
            "Yes, but only on mobile devices",
          ],
          correct: 2,
          translation: "هل يجب أن يكون الـ storyboard مبنياً على الحاسوب؟",
          explanation:
            "المحاضرة بتقول صراحةً 'It does not need to be computer-based'. باقي الخيارات بتفترض عكس ذلك.",
          tags: ["Storyboard"],
          ref: "Lecture 6 — Techniques for prototyping",
          likely: "medium",
        },
        {
          q: "34. Which tool is mentioned in the lecture as common for limited functionality simulations?",
          options: [
            "AutoCAD",
            "Microsoft Word",
            "Adobe Photoshop",
            "HyperCard",
          ],
          correct: 3,
          translation:
            "أي أداة تذكرها المحاضرة كأداة شائعة للمحاكاة محدودة الوظائف؟",
          explanation:
            "المحاضرة بتذكر HyperCard تحديدًا. الباقي أدوات مكتبية/تصميمية مش مذكورة.",
          tags: ["Prototyping Tools"],
          ref: "Lecture 6 — Techniques for prototyping",
          likely: "medium",
        },
        {
          q: "35. In QOC, what do 'questions' represent?",
          options: [
            "Alternative solutions to a question",
            "The final chosen decision only",
            "The means to assess options",
            "Major issues of a design (and sub-questions)",
          ],
          correct: 3,
          translation: "في QOC، ماذا تمثّل الأسئلة (questions)؟",
          explanation:
            "questions بتمثّل القضايا الرئيسية للتصميم (وممكن sub-questions). options = حلول بديلة، criteria = وسائل تقييم الخيارات.",
          tags: ["QOC"],
          ref: "Lecture 6 — Design space analysis",
          likely: "medium",
        },
        {
          q: "36. In QOC, what do 'options' provide?",
          options: [
            "Major issues of a design",
            "The means to assess options",
            "The final chosen decision only",
            "Alternative solutions to the question",
          ],
          correct: 3,
          translation: "في QOC، ماذا تقدّم الـ options؟",
          explanation:
            "options بتوفّر حلولًا بديلة للسؤال. questions = قضايا رئيسية، criteria = وسائل التقييم لاختيار الحل.",
          tags: ["QOC"],
          ref: "Lecture 6 — Design space analysis",
          likely: "medium",
        },
        {
          q: "37. In QOC, what is the role of 'criteria'?",
          options: [
            "To represent major design issues",
            "To provide alternative solutions",
            "To record the discussion step by step",
            "To be the means to assess the options in order to make a choice",
          ],
          correct: 3,
          translation: "في QOC، ما دور الـ criteria؟",
          explanation:
            "criteria هي وسائل تقييم الخيارات لاتخاذ قرار. تسجيل النقاش خطوة بخطوة دة خاص بـ process-oriented زي IBIS.",
          tags: ["QOC"],
          ref: "Lecture 6 — Design space analysis",
          likely: "medium",
        },
        {
          q: "38. In IBIS, what are 'positions'?",
          options: [
            "The means to assess the options",
            "The final decision only",
            "The major issues of a design",
            "Potential resolutions of an issue",
          ],
          correct: 3,
          translation: "في IBIS، ما هي الـ positions؟",
          explanation:
            "positions = حلول محتملة لـ issue. issues = هيكل هرمي، arguments = بتعدّل العلاقة بين positions وissues. criteria خاصّة بـ QOC.",
          tags: ["IBIS"],
          ref: "Lecture 6 — Issue-based information system (IBIS)",
          likely: "medium",
        },
        {
          q: "39. Which is NOT a management issue mentioned for prototypes?",
          options: [
            "Time",
            "Non-functional features",
            "These are the only two management issues listed in the lecture",
            "Budget for marketing campaigns",
          ],
          correct: 3,
          translation:
            "أيٌّ مما يلي ليس من قضايا الإدارة المذكورة للنماذج الأولية؟",
          explanation:
            "المحاضرة ذكرت management issues بس: time وnon-functional features. ميزانية التسويق مش مذكورة.",
          tags: ["Prototyping", "Management"],
          ref: "Lecture 6 — Iterative design and prototyping",
          likely: "medium",
        },
        {
          q: "40. Which is the process-oriented example mentioned in the lecture for design rationale?",
          options: [
            "Design space analysis",
            "Storyboard technique",
            "Waterfall model",
            "Issue-based information system (IBIS)",
          ],
          correct: 3,
          translation:
            "أيٌّ مما يلي هو المثال process-oriented المذكور في المحاضرة؟",
          explanation:
            "المحاضرة بتعطي مثالين: IBIS (process-oriented) وDesign space analysis (structure-oriented).",
          tags: ["Design Rationale", "IBIS"],
          ref: "Lecture 6 — Design rationale (cont'd)",
          likely: "medium",
        },
        {
          type: "essay",
          q: "1. List and briefly explain the main activities in the software life cycle according to the waterfall model.",
          translation:
            "اذكر واشرح باختصار الأنشطة الرئيسية في دورة حياة البرمجيات حسب نموذج الشلال.",
          answer:
            "The waterfall model defines the following sequential activities:\n" +
            "1) Requirements specification: designer and customer capture what the system is expected to provide (natural language or precise languages such as task analysis).\n" +
            "2) Architectural design: a high-level description of how the system will provide the required services; factors the system into major components and how they are interrelated; satisfies functional and nonfunctional requirements.\n" +
            "3) Detailed design: refinement of architectural components and interrelations to identify modules to be implemented separately; governed by nonfunctional requirements.\n" +
            "4) Coding and unit testing: implementation of the modules and testing each one individually.\n" +
            "5) Integration and testing: combining modules and testing the system as a whole.\n" +
            "6) Operation and maintenance: deploying the system and maintaining it over time.\n",
          tags: ["Waterfall Model", "Life Cycle"],
          ref: "Lecture 6 — Activities in the life cycle",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. Explain why the life cycle for interactive systems cannot assume a linear sequence of activities.",
          translation:
            "اشرح لماذا لا تستطيع دورة حياة الأنظمة التفاعلية افتراض تسلسل خطي للأنشطة.",
          answer:
            "The life cycle for interactive systems cannot assume a linear sequence of activities as in the waterfall model because interactive systems involve lots of feedback between activities.\n" +
            "Designing for usability occurs at all stages of the life cycle, not as a single isolated activity.\n" +
            "User requirements change as users interact with prototypes, so earlier phases (requirements, architectural design) must be revisited based on findings from later phases such as testing or evaluation.\n" +
            "This iterative, feedback-driven nature is the main distinction from the strict waterfall model.\n",
          tags: ["Interactive Systems", "Life Cycle", "Waterfall Model"],
          ref: "Lecture 6 — The life cycle for interactive systems",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Define usability specification and list its main components.",
          translation: "عرّف مواصفات الاستخدامية واذكر مكوّناتها الرئيسية.",
          answer:
            "Usability specification defines clear and measurable requirements for how easy and effective a system should be to use.\n" +
            "Main components:\n" +
            "1) Usability attribute: such as efficiency or learnability.\n" +
            "2) Measuring concept: what will be measured, such as task completion time or number of errors.\n" +
            "3) Measuring method: how the measurement will be collected, such as observing users performing a task.\n" +
            "4) Usability levels: current level, worst-case level, planned level, and best-case level.\n",
          tags: ["Usability Specification", "Usability Engineering"],
          ref: "Lecture 6 — Usability engineering",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. List and explain the four usability levels in the usability specification.",
          translation:
            "اذكر واشرح المستويات الأربعة للاستخدامية في مواصفات الاستخدامية.",
          answer:
            "The usability specification defines four usability levels:\n" +
            "1) Current level: the existing performance of the system before changes.\n" +
            "2) Worst-case level: the least acceptable performance; below this the system is considered unacceptable.\n" +
            "3) Planned level: the target performance the design aims to achieve.\n" +
            "4) Best-case level: the best expected performance, often beyond the planned target.\n",
          tags: ["Usability Levels", "Usability Engineering"],
          ref: "Lecture 6 — Usability engineering",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. State the three usability categories adopted by ISO 9241 and explain each.",
          translation:
            "اذكر الفئات الثلاث للاستخدامية المعتمدة في ISO 9241 واشرح كلًّا منها.",
          answer:
            "ISO usability standard 9241 adopts the traditional usability categories:\n" +
            "1) Effectiveness: can you achieve what you want to? It measures whether the user can complete the intended task and reach the correct goal.\n" +
            "2) Efficiency: can you do it without wasting effort? It measures the resources (time, mental effort) expended to achieve the goal.\n" +
            "3) Satisfaction: do you enjoy the process? It measures the user's subjective attitude toward the system and the interaction experience.\n",
          tags: ["ISO 9241", "Usability"],
          ref: "Lecture 6 — ISO usability standard 9241",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. Compare throw-away, incremental, and evolutionary prototypes.",
          translation:
            "قارن بين النماذج الأولية: throw-away وincremental وevolutionary.",
          answer:
            "1) Throw-away prototype: built from cheap materials (paper, sketch, etc.) to explore ideas quickly, then discarded; not part of the final product.\n" +
            "2) Incremental prototype: built step by step; each increment adds new functionality until the full system is delivered.\n" +
            "3) Evolutionary prototype: starts as a basic version and is continuously improved, increasing features over time; the prototype may evolve into the final delivered system.\n",
          tags: ["Prototyping", "Prototype Types"],
          ref: "Lecture 6 — Iterative design and prototyping",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. Explain the three techniques for prototyping discussed in the lecture.",
          translation:
            "اشرح تقنيات النماذج الأولية الثلاث المذكورة في المحاضرة.",
          answer:
            "1) Storyboards: a sequence of drawings that shows how a user interacts with a system; it does not need to be computer-based.\n" +
            "2) Limited functionality simulations: a prototype that looks or behaves like the real system, but only some functions are implemented (e.g. using tools such as HyperCard).\n" +
            "3) Wizard of Oz technique: users interact with a prototype as if it were a real system, but a human secretly performs some of the system's functions.\n",
          tags: ["Prototyping Techniques", "Storyboard", "Wizard of Oz"],
          ref: "Lecture 6 — Techniques for prototyping",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. Define design rationale and mention its benefits.",
          translation: "عرّف design rationale واذكر فوائده.",
          answer:
            "Design rationale explains why a system was designed in a particular way.\n" +
            "Benefits:\n" +
            "1) It helps team members understand design decisions.\n" +
            "2) Designers learn from previous projects.\n" +
            "3) It records the reasons for choosing one solution over another.\n" +
            "4) It helps future developers understand the system and improve it.\n",
          tags: ["Design Rationale"],
          ref: "Lecture 6 — Design rationale & Benefits",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. What is the difference between process-oriented and structure-oriented design rationale?",
          translation:
            "ما الفرق بين design rationale من نوع process-oriented ومن نوع structure-oriented؟",
          answer:
            "Process-oriented design rationale records the discussion step by step, from the first question to the final decision. Its main example in the lecture is IBIS (Issue-Based Information System).\n" +
            "Structure-oriented design rationale organises design alternatives and their reasons; it focuses on comparing options and explaining the final choice. Its main example is Design space analysis using the QOC (Questions, Options, Criteria) hierarchy.\n" +
            "In short: process-oriented captures the chronological reasoning; structure-oriented captures the comparison space of design alternatives.\n",
          tags: ["Design Rationale", "Process vs Structure"],
          ref: "Lecture 6 — Design rationale (cont'd)",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Explain IBIS and its main elements.",
          translation: "اشرح IBIS وعناصره الرئيسية.",
          answer:
            "IBIS (Issue-Based Information System) is the basis for much of design rationale research; it is a process-oriented approach.\n" +
            "Main elements:\n" +
            "1) Issues: form a hierarchical structure with one 'root' issue at the top.\n" +
            "2) Positions: potential resolutions of an issue.\n" +
            "3) Arguments: modify the relationship between positions and issues (they support or rebut positions).\n",
          tags: ["IBIS", "Design Rationale"],
          ref: "Lecture 6 — Issue-based information system (IBIS)",
          likely: "high",
        },
        {
          type: "essay",
          q: "11. Explain the QOC structure used in design space analysis.",
          translation: "اشرح بنية QOC المستخدمة في design space analysis.",
          answer:
            "Design space analysis is a structure-oriented approach to design rationale. It uses the QOC hierarchical structure:\n" +
            "1) Questions (and sub-questions): represent the major issues of a design.\n" +
            "2) Options: provide alternative solutions to the question.\n" +
            "3) Criteria: the means to assess the options in order to make a choice.\n" +
            "By comparing options against criteria, designers can justify why a particular design choice was selected.\n",
          tags: ["QOC", "Design Space Analysis"],
          ref: "Lecture 6 — Design space analysis",
          likely: "high",
        },
      ],
    },
    {
      id: "hci-lecture-07",
      t: "Design Rules — Chapter 7",
      d: "قواعد التصميم في تفاعل الإنسان والآلة: المبادئ والمعايير والإرشادات وقواعد شنايدرمان ونورمان",
      pdf: "datenew/subjects/hci/lectures/Lec 7/e3-chap-07_compressed.pdf",
      pdf2: "datenew/subjects/hci/questions/Questions on each lecture/Lecture-07-Questions.pdf",
      // المحاضرة: Design Rules — Chapter 7 — قواعد التصميم ومبادئ الاستخدامية وقواعد شنايدرمان ونورمان ومعايير ISO 9241

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شرح عربي لمبادئ تصميم التفاعل وقواعد التصميم وقواعد شنايدرمان الذهبية الثمانية ومبادئ نورمان السبعة.",
          links: [
            {
              t: "تفاعل الإنسان مع الحاسوب - قواعد ومبادئ تصميم الواجهات",
              d: "شرح عربي لقواعد تصميم الواجهات والمبادئ الأساسية في تفاعل الإنسان والآلة (HCI) ومبادئ الاستخدامية Learnability وFlexibility وRobustness.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=تفاعل+الإنسان+مع+الحاسوب+قواعد+تصميم+الواجهات",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "قواعد شنايدرمان الذهبية الثمانية في تصميم الواجهات",
              d: "بحث يوتيوب عربي عن شرح قواعد Shneiderman الثمانية الذهبية وهي من أهم نقاط المحاضرة المتكررة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=قواعد+شنايدرمان+الذهبية+الثمانية+تصميم+الواجهات",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "مبادئ نورمان السبعة في تصميم التفاعل",
              d: "بحث يوتيوب عربي عن شرح مبادئ Norman السبعة (Use both knowledge in the world and the head، Simplify tasks، Make things visible...).",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=مبادئ+نورمان+السبعة+تصميم+التفاعل+HCI",
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
            "شرح عالمي لمبادئ تصميم التفاعل وقواعد شنايدرمان ونورمان وهيورستيك نيلسن ومعيار ISO 9241.",
          links: [
            {
              t: "Shneiderman's 8 Golden Rules of Interface Design (GeeksforGeeks)",
              d: "شرح فيديو لقواعد Shneiderman الثمانية الذهبية وهي محور أساسي في المحاضرة (consistency, shortcuts, feedback, dialog closure...).",
              icon: "🌍",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.geeksforgeeks.org/software-engineering/ben-shneiderman-eight-golden-rules-of-interface-design-human-computer-interaction",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Don Norman's Principles of Design",
              d: "شرح مبادئ Norman الستة الأساسية من كتاب The Design of Everyday Things (Visibility, Feedback, Constraints, Mapping, Consistency, Affordance) ومرتبط بمبادئ نورمان السبعة في المحاضرة.",
              icon: "🌍",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://principles.design/examples/don-norman-s-principles-of-design",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Nielsen's 10 Usability Heuristics",
              d: "شرح هيورستيك نيلسن العشرة لتحليل الاستخدامية، والمحاضرة بتربطها بـ Shneiderman وNorman كأمثلة على Golden Rules and Heuristics (broad brush design rules).",
              icon: "🌍",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.nngroup.com/articles/ten-usability-heuristics",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Shneiderman 8 Golden Rules - original source",
              d: "الصفحة الرسمية لـ Ben Shneiderman بقواعده الثمانية الذهبية من قسم علوم الحاسوب في University of Maryland، المصدر الأصلي للقواعد المذكورة في المحاضرة.",
              icon: "🌍",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.cs.umd.edu/users/ben/goldenrules.html",
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
            "مراجع ومقالات شاملة لمبادئ الاستخدامية ومعايير ISO وأنواع قواعد التصميم في HCI.",
          links: [
            {
              t: "Principles of Usability in HCI (GeeksforGeeks)",
              d: "شرح مفصل لمبادئ الاستخدامية الثلاثة (Learnability, Flexibility, Robustness) ومبادئها الفرعية مثل Predictability وObservability وRecoverability وCustomizability، وهي قلب المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.geeksforgeeks.org/system-design/principles-of-usability",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Guidelines in Human Computer Interface (GeeksforGeeks)",
              d: "شرح قواعد Shneiderman الذهبية ومبادئ Norman السبعة وهيورستيك نيلسن العشرة وإرشادات تصميم الواجهات، ومطابق لترتيب المحاضرة في قسم Golden Rules and Heuristics.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.geeksforgeeks.org/system-design/guidelines-in-human-computer-interfacehci",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "ISO 9241 usability definition (Usability Partners)",
              d: "تعريف ISO 9241-11 للاستخدامية (effectiveness, efficiency, satisfaction) ومطابق لنص المحاضرة في قسم Standards. يشرح كمان العلاقة بين المعايير والسياق.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.usabilitypartners.se/about-usability/iso-standards",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "How to Conduct a Heuristic Evaluation (NN/g)",
              d: "شرح طريقة التقييم الهيورستيكي بناءً على Heuristics، وده مرتبط بقسم Golden Rules and Heuristics في المحاضرة اللي بيوصفها بأنها broad brush design rules useful as a checklist.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation",
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
            "أدوات لتصميم ومحاكاة الواجهات وتطبيق مبادئ الاستخدامية وقواعد التصميم عمليًا.",
          links: [
            {
              t: "Figma - Collaborative Interface Design Tool",
              d: "أداة تصميم واجهات احترافية فيها prototyping وتتيح تطبيق مبادئ Consistency وFeedback وVisibility وMapping اللي بنتكلم عنها في قواعد Shneiderman وNorman. تستخدم لعمل النماذج وتقييمها.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.figma.com",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Adobe XD - UI/UX Design and Prototyping",
              d: "أداة تصميم ومحاكاة واجهات بتمكنك من تجربة flow والـ dialog closure والـ feedback. مناسبة لتطبيق قواعد التصميم عمليًا في مشاريع HCI.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.adobe.com/products/xd.html",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Axure RP - Interactive Prototypes",
              d: "أداة لعمل نماذج تفاعلية متقدمة تدعم الـ multithreading والـ task migratability والـ recoverability وتمكنك من اختبار مبادئ Robustness وFlexibility على واجهات حقيقية.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.axure.com",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },
      ],
      questions: [
        {
          q: "1. What is the main goal of interaction design according to the lecture?",
          options: [
            "Maximizing system performance",
            "Reducing development cost",
            "Designing for maximum usability",
            "Increasing visual appeal",
          ],
          correct: 2,
          translation: "إيه هو الهدف الأساسي لتصميم التفاعل حسب المحاضرة؟",
          explanation:
            "الصح هو Designing for maximum usability لأن المحاضرة فتحت بـ Designing for maximum usability – the goal of interaction design. الباقي غلط لأن الأداء والتكلفة والشكل مش هدف تصميم التفاعل الأساسي.",
          tags: ["Design Rules", "Usability"],
          ref: "Lecture 7 — Introduction",
          likely: "high",
        },
        {
          q: "2. Which type of design rule is described as abstract, with low authority and high generality?",
          options: ["Principles", "Guidelines", "Heuristics", "Standards"],
          correct: 0,
          translation:
            "نوع قواعد التصميم اللي بيتم وصفه بأنه مجرد، بسلطة منخفضة وعمومية عالية؟",
          explanation:
            "الصح Principles لأن المحاضرة بتقول principles – abstract design rules, low authority, high generality. Guidelines سلطتها أقل بس أعم. Standards سلطتها عالية وتطبيقها محدود. Heuristics مش نوع أساسي في التصنيف.",
          tags: ["Types of Design Rules", "Principles"],
          ref: "Lecture 7 — Types of Design Rules",
          likely: "high",
        },
        {
          q: "3. Standards are best characterized by which of the following?",
          options: [
            "Low authority and high generality",
            "High authority and limited application",
            "Low authority and limited application",
            "High authority and high generality",
          ],
          correct: 1,
          translation: "المعايير (Standards) بيتم وصفها بأيه من الخيارات دي؟",
          explanation:
            "الصح High authority and limited application لأن المحاضرة بتقول standards – specific design rules, high authority, limited application. بقية الخيارات بتخلط السلطة والعمومية.",
          tags: ["Types of Design Rules", "Standards"],
          ref: "Lecture 7 — Types of Design Rules",
          likely: "high",
        },
        {
          q: "4. Which statement correctly describes guidelines?",
          options: [
            "Higher authority than standards",
            "The same authority as standards",
            "No authority at all",
            "Lower authority and more general application",
          ],
          correct: 3,
          translation: "إيه الوصف الصح للإرشادات (Guidelines)؟",
          explanation:
            "الصح Lower authority and more general application لأن المحاضرة بتقول guidelines – lower authority, more general application. Guidelines مش أعلى من Standards في السلطة، وأكيد ليها سلطة.",
          tags: ["Types of Design Rules", "Guidelines"],
          ref: "Lecture 7 — Types of Design Rules",
          likely: "high",
        },
        {
          q: "5. The three principles that support usability in the lecture are:",
          options: [
            "Speed, Accuracy, Satisfaction",
            "Consistency, Feedback, Error prevention",
            "Learnability, Flexibility, Robustness",
            "Visibility, Mapping, Control",
          ],
          correct: 2,
          translation:
            "المبادئ التلاتة اللي بتدعم الاستخدامية (usability) في المحاضرة هي؟",
          explanation:
            "الصح Learnability, Flexibility, Robustness لأن المحاضرة قسمت مبادئ الاستخدامية لثلاثة: Learnability وFlexibility وRobustness. الخيارات التانية مفاهيم تانية زي معايير ISO أو قواعد Shneiderman.",
          tags: ["Usability Principles"],
          ref: "Lecture 7 — Principles to support usability",
          likely: "high",
        },
        {
          q: "6. Learnability is defined as:",
          options: [
            "The ease with which new users can begin effective interaction and achieve maximal performance",
            "The level of support provided to the user",
            "The multiplicity of ways the user and system exchange information",
            "The ability to evaluate the internal state of the system",
          ],
          correct: 0,
          translation: "إيه تعريف Learnability؟",
          explanation:
            "الصح التعريف اللي يتكلم عن سهولة بداية المستخدم الجديد وتحقيق أقصى أداء، وده نص المحاضرة حرفيًا. خيارات Robustness وFlexibility وObservability تعريفات لمبادئ تانية.",
          tags: ["Learnability"],
          ref: "Lecture 7 — Principles to support usability",
          likely: "high",
        },
        {
          q: "7. Flexibility refers to:",
          options: [
            "The ease of learning the system",
            "The level of error recovery support",
            "The speed of system response",
            "The multiplicity of ways the user and system exchange information",
          ],
          correct: 3,
          translation: "إيه تعريف Flexibility؟",
          explanation:
            "الصح The multiplicity of ways the user and system exchange information وده نص المحاضرة. Learnability بيعرف السهولة، Recoverability وResponsiveness مبادئ تانية.",
          tags: ["Flexibility"],
          ref: "Lecture 7 — Principles to support usability",
          likely: "high",
        },
        {
          q: "8. Robustness is defined as:",
          options: [
            "The ease of learning",
            "The multiplicity of interaction ways",
            "The level of support provided to the user in determining successful achievement and assessment of goal-directed behaviour",
            "The visual design quality",
          ],
          correct: 2,
          translation: "إيه تعريف Robustness؟",
          explanation:
            "الصح التعريف اللي بيتكلم عن مستوى الدعم للمستخدم في تحقيق وتقييم السلوك الموجه نحو الهدف. ده نص المحاضرة. Learnability وFlexibility مبادئ تانية والشكل مش جزء من Robustness.",
          tags: ["Robustness"],
          ref: "Lecture 7 — Principles to support usability",
          likely: "high",
        },
        {
          q: "9. Predictability, as a principle of learnability, means:",
          options: [
            "How prior knowledge applies to a new system",
            "Extending interaction knowledge to new situations",
            "Determining the effect of future actions based on past interaction history",
            "Likeness in input/output behaviour",
          ],
          correct: 2,
          translation: "إيه معنى Predictability ضمن مبادئ Learnability؟",
          explanation:
            "الصح تحديد تأثير الأفعال المستقبلية بناءً على تاريخ التفاعل السابق (operation visibility). Familiar = المعرفة السابقة، Generalizability = التعميم، Consistency = التشابه في السلوك.",
          tags: ["Learnability", "Predictability"],
          ref: "Lecture 7 — Principles of learnability",
          likely: "high",
        },
        {
          q: "10. The 'Familiar' principle of learnability refers to:",
          options: [
            "Determining future actions from past interaction",
            "Extending knowledge to new situations",
            "Consistency across situations",
            "How prior knowledge applies to a new system",
          ],
          correct: 3,
          translation: "مبدأ Familiar ضمن Learnability بيشير لإيه؟",
          explanation:
            "الصح كيف تنطبق المعرفة السابقة على نظام جديد (guessability, affordance). Predictability = توقع المستقبل، Generalizability = التعميم، Consistency = التشابه.",
          tags: ["Learnability", "Familiar"],
          ref: "Lecture 7 — Principles of learnability",
          likely: "medium",
        },
        {
          q: "11. Generalizability means:",
          options: [
            "Extending specific interaction knowledge to new situations",
            "Determining future effects from past history",
            "Likeness in input/output behaviour",
            "Prior knowledge application",
          ],
          correct: 0,
          translation: "إيه معنى Generalizability؟",
          explanation:
            "الصح توسيع معرفة تفاعل معينة لمواقف جديدة. Predictability = التوقع من التاريخ، Consistency = التشابه، Familiar = تطبيق المعرفة السابقة على نظام جديد.",
          tags: ["Learnability", "Generalizability"],
          ref: "Lecture 7 — Principles of learnability",
          likely: "medium",
        },
        {
          q: "12. Consistency in learnability is defined as:",
          options: [
            "Extending interaction knowledge",
            "Determining future actions",
            "Likeness in input/output behaviour arising from similar situations or task objectives",
            "Prior knowledge application",
          ],
          correct: 2,
          translation: "إيه تعريف Consistency ضمن Learnability؟",
          explanation:
            "الصح التشابه في سلوك الإدخال/الإخراج الناتج عن مواقف أو أهداف مهام متشابهة. الباقي تعريفات لمبادئ تانية.",
          tags: ["Learnability", "Consistency"],
          ref: "Lecture 7 — Principles of learnability",
          likely: "high",
        },
        {
          q: "13. Multithreading, as a principle of flexibility, means:",
          options: [
            "Ability of the system to support user interaction for more than one task at a time",
            "Freedom from system imposed constraints",
            "Passing responsibility between user and system",
            "Allowing equivalent values of input/output",
          ],
          correct: 0,
          translation: "إيه معنى Multithreading ضمن مبادئ Flexibility؟",
          explanation:
            "الصح قدرة النظام على دعم تفاعل المستخدم لأكثر من مهمة في نفس الوقت. Dialogue initiative = الحرية من قيود النظام، Task migratability = نقل المسؤولية، Substitutability = استبدال القيم.",
          tags: ["Flexibility", "Multithreading"],
          ref: "Lecture 7 — Principles of flexibility",
          likely: "medium",
        },
        {
          q: "14. Task migratability refers to:",
          options: [
            "Ability to support more than one task",
            "Modifiability of the user interface",
            "Ability to evaluate internal state",
            "Passing responsibility for task execution between user and system",
          ],
          correct: 3,
          translation: "Task migratability بيشير لإيه؟",
          explanation:
            "الصح نقل مسؤولية تنفيذ المهمة بين المستخدم والنظام. Multithreading = تعدد المهام، Customizability = التعديل، Observability = تقييم الحالة الداخلية.",
          tags: ["Flexibility", "Task migratability"],
          ref: "Lecture 7 — Principles of flexibility",
          likely: "medium",
        },
        {
          q: "15. Customizability can be achieved by:",
          options: [
            "User only (adaptability)",
            "System only (adaptivity)",
            "User (adaptability) or system (adaptivity)",
            "Neither user nor system",
          ],
          correct: 2,
          translation: "Customizability ممكن يتحقق عن طريق مين؟",
          explanation:
            "الصح المستخدم (adaptability) أو النظام (adaptivity)، حسب نص المحاضرة. التفرقة بين adaptability وadaptivity نقطة مهمة. الخيارات التانية ناقصة.",
          tags: ["Flexibility", "Customizability"],
          ref: "Lecture 7 — Principles of flexibility",
          likely: "high",
        },
        {
          q: "16. Observability in robustness means:",
          options: [
            "Ability to take corrective action after an error",
            "Ability of the user to evaluate the internal state of the system from its perceivable representation",
            "How the user perceives the communication rate",
            "Degree to which services support all tasks",
          ],
          correct: 1,
          translation: "إيه معنى Observability ضمن مبادئ Robustness؟",
          explanation:
            "الصح قدرة المستخدم على تقييم الحالة الداخلية للنظام من تمثيله المدرك (browsability, defaults, reachability, persistence). Recoverability = التصحيح، Responsiveness = سرعة الاستجابة، Task conformance = دعم المهام.",
          tags: ["Robustness", "Observability"],
          ref: "Lecture 7 — Principles of robustness",
          likely: "high",
        },
        {
          q: "17. Recoverability refers to:",
          options: [
            "Ability to evaluate the internal state",
            "Ability of the user to take corrective action once an error has been recognized",
            "The rate of communication",
            "Task completeness",
          ],
          correct: 1,
          translation: "Recoverability بيشير لإيه؟",
          explanation:
            "الصح قدرة المستخدم على اتخاذ إجراء تصحيحي بمجرد التعرف على خطأ (forward/backward recovery). Observability = تقييم الحالة، Responsiveness = سرعة الاستجابة، Task conformance = اكتمال المهام.",
          tags: ["Robustness", "Recoverability"],
          ref: "Lecture 7 — Principles of robustness",
          likely: "high",
        },
        {
          q: "18. Responsiveness is defined as:",
          options: [
            "The level of support for goal achievement",
            "The ability to recover from errors",
            "The degree of task support",
            "How the user perceives the rate of communication with the system",
          ],
          correct: 3,
          translation: "إيه تعريف Responsiveness؟",
          explanation:
            "الصح كيف يدرك المستخدم معدل التواصل مع النظام. Robustness نفسه = الدعم، Recoverability = التصحيح، Task conformance = دعم المهام.",
          tags: ["Robustness", "Responsiveness"],
          ref: "Lecture 7 — Principles of robustness",
          likely: "medium",
        },
        {
          q: "19. Task conformance refers to:",
          options: [
            "The rate of communication",
            "The degree to which system services support all of the user's tasks",
            "The ability to evaluate internal state",
            "The ease of learning",
          ],
          correct: 1,
          translation: "Task conformance بيشير لإيه؟",
          explanation:
            "الصح الدرجة اللي خدمات النظام بتدعم بيها كل مهام المستخدم (task completeness). Responsiveness = معدل التواصل، Observability = تقييم الحالة، Learnability = السهولة.",
          tags: ["Robustness", "Task conformance"],
          ref: "Lecture 7 — Principles of robustness",
          likely: "medium",
        },
        {
          q: "20. According to ISO 9241, usability is defined by which three attributes?",
          options: [
            "Speed, accuracy, and satisfaction",
            "Learnability, flexibility, robustness",
            "Effectiveness, efficiency and satisfaction",
            "Consistency, feedback, error prevention",
          ],
          correct: 2,
          translation: "حسب ISO 9241، الاستخدامية بتتحدد بثلاث سمات إيه؟",
          explanation:
            "الصح effectiveness, efficiency, satisfaction وده نص المحاضرة (ISO 9241 defines usability as effectiveness, efficiency and satisfaction). Learnability/Flexibility/Robustness مبادئ Dix، والباقي مفاهيم تانية.",
          tags: ["Standards", "ISO 9241", "Usability"],
          ref: "Lecture 7 — Standards",
          likely: "high",
        },
        {
          q: "21. According to the lecture, hardware standards are:",
          options: [
            "Less common than software standards",
            "More common than software standards",
            "Same as software standards",
            "Not mentioned in the lecture",
          ],
          correct: 1,
          translation: "حسب المحاضرة، معايير الهاردوير مقارنة بالسوفتوير؟",
          explanation:
            "الصح More common than software لأن المحاضرة بتقول hardware standards more common than software. السبب إن السوفتوير بيتغير بسرعة وصعب توحيد معاييره.",
          tags: ["Standards"],
          ref: "Lecture 7 — Standards",
          likely: "medium",
        },
        {
          q: "22. Standards require which of the following to be effective?",
          options: [
            "Fast changing technology",
            "No underlying theory",
            "Rapid development cycles",
            "Sound underlying theory and slowly changing technology",
          ],
          correct: 3,
          translation: "المعايير (Standards) بتتطلب إيه عشان تبقى فعّالة؟",
          explanation:
            "الصح Sound underlying theory and slowly changing technology وده نص المحاضرة. لو التكنولوجيا بتتغير بسرعة صعب تثبيت معيار، ونظرية سليمة ضرورية.",
          tags: ["Standards"],
          ref: "Lecture 7 — Standards",
          likely: "medium",
        },
        {
          q: "23. How many golden rules did Shneiderman propose?",
          options: ["8", "7", "10", "12"],
          correct: 0,
          translation: "شنايدرمان اقترح كام قاعدة ذهبية؟",
          explanation:
            "الصح 8 (Shneiderman's 8 Golden Rules). نورمان ليه 7 مبادئ وNielsen ليه 10 هيورستيك.",
          tags: ["Golden Rules", "Shneiderman"],
          ref: "Lecture 7 — Shneiderman's 8 Golden Rules",
          likely: "high",
        },
        {
          q: "24. How many principles did Norman propose?",
          options: ["8", "7", "10", "5"],
          correct: 1,
          translation: "نورمان اقترح كام مبدأ؟",
          explanation:
            "الصح 7 (Norman's 7 Principles). شنايدرمان 8 قواعد وNielsen 10 هيورستيك.",
          tags: ["Golden Rules", "Norman"],
          ref: "Lecture 7 — Norman's 7 Principles",
          likely: "high",
        },
        {
          q: "25. Golden rules and heuristics are described in the lecture as:",
          options: [
            "Specific design rules with high authority",
            "International standards",
            "Detailed style guides",
            "Broad brush design rules",
          ],
          correct: 3,
          translation: "القواعد الذهبية والهيورستيك بتتوصف في المحاضرة بإيه؟",
          explanation:
            "الصح Broad brush design rules وده نص المحاضرة (they are broad brush design rules, useful checklist). مش معايير ولا إرشادات تفصيلية، بل قواعد عامة مفيدة كـ checklist.",
          tags: ["Golden Rules", "Heuristics"],
          ref: "Lecture 7 — Golden rules and heuristics",
          likely: "high",
        },
        {
          q: "26. Which of the following is NOT one of Shneiderman's 8 Golden Rules?",
          options: [
            "Strive for consistency",
            "Enable frequent users to use shortcuts",
            "Maximize system performance",
            "Offer informative feedback",
          ],
          correct: 2,
          translation: "إيه من الخيارات دي مش من قواعد شنايدرمان الثمانية؟",
          explanation:
            "الصح Maximize system performance لأنها مش في القائمة. الباقي قواعد فعلية: consistency, shortcuts, informative feedback. الشكل والأداء مش قواعد شنايدرمان.",
          tags: ["Golden Rules", "Shneiderman"],
          ref: "Lecture 7 — Shneiderman's 8 Golden Rules",
          likely: "high",
        },
        {
          q: "27. Substitutability, as a principle of flexibility, means:",
          options: [
            "Passing responsibility between user and system",
            "Supporting more than one task at a time",
            "Modifying the interface by the user",
            "Allowing equivalent values of input and output to be replaced for each other",
          ],
          correct: 3,
          translation: "Substitutability ضمن Flexibility بتعني إيه؟",
          explanation:
            "الصح السماح باستبدال القيم المكافئة للإدخال والإخراج ببعضها (representation multiplicity). Task migratability = نقل المسؤولية، Multithreading = تعدد المهام، Customizability = التعديل.",
          tags: ["Flexibility", "Substitutability"],
          ref: "Lecture 7 — Principles of flexibility",
          likely: "medium",
        },
        {
          q: "28. Dialogue initiative refers to:",
          options: [
            "Freedom from system imposed constraints on input dialogue",
            "Ability to support multiple tasks",
            "Passing responsibility for tasks",
            "Allowing equivalent values",
          ],
          correct: 0,
          translation: "Dialogue initiative بيشير لإيه؟",
          explanation:
            "الصح الحرية من القيود اللي النظام بيفرضها على حوار الإدخال (system vs. user pre-emptiveness). Multithreading = تعدد المهام، Task migratability = نقل المسؤولية، Substitutability = الاستبدال.",
          tags: ["Flexibility", "Dialogue initiative"],
          ref: "Lecture 7 — Principles of flexibility",
          likely: "medium",
        },
        {
          q: "29. Detailed guidelines (style guides) are applicable during which phase?",
          options: [
            "Early life cycle activities",
            "Later life cycle activities",
            "Testing phase only",
            "Maintenance phase only",
          ],
          correct: 1,
          translation:
            "الإرشادات التفصيلية (style guides) بتُستخدم في أنهي مرحلة؟",
          explanation:
            "الصح Later life cycle activities لأن المحاضرة بتقول detailed guidelines (style guides) applicable during later life cycle activities. المبادئ (abstract guidelines) بتيجي في المراحل المبكرة.",
          tags: ["Guidelines", "Life cycle"],
          ref: "Lecture 7 — Guidelines",
          likely: "medium",
        },
        {
          q: "30. Abstract guidelines (principles) are applicable during which phase?",
          options: [
            "Maintenance only",
            "Later life cycle activities",
            "Early life cycle activities",
            "Testing only",
          ],
          correct: 2,
          translation: "الإرشادات المجردة (المبادئ) بتُستخدم في أنهي مرحلة؟",
          explanation:
            "الصح Early life cycle activities لأن المحاضرة بتقول abstract guidelines (principles) applicable during early life cycle activities. Style guides بتيجي بعدين في المراحل المتأخرة.",
          tags: ["Guidelines", "Life cycle"],
          ref: "Lecture 7 — Guidelines",
          likely: "medium",
        },

        {
          type: "essay",
          q: "1. Define the three types of design rules and explain their authority and generality.",
          translation:
            "عرّف الأنواع الثلاثة لقواعد التصميم واشرح سلطتها وعموميتها.",
          answer:
            "There are three types of design rules:\n" +
            "1) Principles: abstract design rules with low authority and high generality.\n" +
            "2) Standards: specific design rules with high authority and limited application.\n" +
            "3) Guidelines: lower authority than standards but more general application.\n" +
            "As authority increases, generality decreases, so principles are the most general and standards the most specific.",
          tags: [
            "Types of Design Rules",
            "Principles",
            "Standards",
            "Guidelines",
          ],
          ref: "Lecture 7 — Types of Design Rules",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. Explain the three principles that support usability.",
          translation: "اشرح المبادئ الثلاثة اللي بتدعم الاستخدامية.",
          answer:
            "The three principles to support usability are:\n" +
            "1) Learnability: the ease with which new users can begin effective interaction and achieve maximal performance.\n" +
            "2) Flexibility: the multiplicity of ways the user and system exchange information.\n" +
            "3) Robustness: the level of support provided to the user in determining successful achievement and assessment of goal-directed behaviour.",
          tags: [
            "Usability Principles",
            "Learnability",
            "Flexibility",
            "Robustness",
          ],
          ref: "Lecture 7 — Principles to support usability",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. List and briefly explain the principles of learnability.",
          translation: "اذكر واشرح بإيجاز مبادئ Learnability.",
          answer:
            "The principles of learnability are:\n" +
            "1) Predictability: determining the effect of future actions based on past interaction history (operation visibility).\n" +
            "2) Familiar: how prior knowledge applies to a new system (guessability, affordance).\n" +
            "3) Generalizability: extending specific interaction knowledge to new situations.\n" +
            "4) Consistency: likeness in input/output behaviour arising from similar situations or task objectives.",
          tags: [
            "Learnability",
            "Predictability",
            "Familiar",
            "Generalizability",
            "Consistency",
          ],
          ref: "Lecture 7 — Principles of learnability",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. List and briefly explain the principles of flexibility.",
          translation: "اذكر واشرح بإيجاز مبادئ Flexibility.",
          answer:
            "The principles of flexibility are:\n" +
            "1) Dialogue initiative: freedom from system imposed constraints on input dialogue (system vs. user pre-emptiveness).\n" +
            "2) Multithreading: ability of the system to support user interaction for more than one task at a time.\n" +
            "3) Task migratability: passing responsibility for task execution between user and system.\n" +
            "4) Substitutability: allowing equivalent values of input and output to be replaced for each other (representation multiplicity).\n" +
            "5) Customizability: modifiability of the user interface by the user (adaptability) or by the system (adaptivity).",
          tags: [
            "Flexibility",
            "Dialogue initiative",
            "Multithreading",
            "Task migratability",
            "Substitutability",
            "Customizability",
          ],
          ref: "Lecture 7 — Principles of flexibility",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. List and briefly explain the principles of robustness.",
          translation: "اذكر واشرح بإيجاز مبادئ Robustness.",
          answer:
            "The principles of robustness are:\n" +
            "1) Observability: ability of the user to evaluate the internal state of the system from its perceivable representation (browsability, defaults, reachability, persistence).\n" +
            "2) Recoverability: ability of the user to take corrective action once an error has been recognized (forward/backward recovery, commensurate effort).\n" +
            "3) Responsiveness: how the user perceives the rate of communication with the system.\n" +
            "4) Task conformance: the degree to which system services support all of the user's tasks (task completeness).",
          tags: [
            "Robustness",
            "Observability",
            "Recoverability",
            "Responsiveness",
            "Task conformance",
          ],
          ref: "Lecture 7 — Principles of robustness",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. Compare standards and guidelines.",
          translation: "قارن بين المعايير (Standards) والإرشادات (Guidelines).",
          answer:
            "Standards:\n" +
            "- Set by national or international bodies to ensure compliance by a large community of designers.\n" +
            "- Have high authority and a low level of detail.\n" +
            "- Require sound underlying theory and slowly changing technology.\n" +
            "- Hardware standards are more common than software standards.\n" +
            "Guidelines:\n" +
            "- More suggestive and general; found in many textbooks and reports.\n" +
            "- Lower authority than standards but more general application.\n" +
            "- Two types: abstract guidelines (principles) for early life cycle activities, and detailed guidelines (style guides) for later life cycle activities.\n" +
            "- Understanding the justification for guidelines helps in resolving conflicts.",
          tags: ["Standards", "Guidelines", "Comparison"],
          ref: "Lecture 7 — Standards and Guidelines",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. List Shneiderman's 8 Golden Rules.",
          translation: "اذكر قواعد شنايدرمان الثمانية الذهبية.",
          answer:
            "Shneiderman's 8 Golden Rules:\n" +
            "1) Strive for consistency.\n" +
            "2) Enable frequent users to use shortcuts.\n" +
            "3) Offer informative feedback.\n" +
            "4) Design dialogs to yield closure.\n" +
            "5) Offer error prevention and simple error handling.\n" +
            "6) Permit easy reversal of actions.\n" +
            "7) Support internal locus of control.\n" +
            "8) Reduce short-term memory load.",
          tags: ["Golden Rules", "Shneiderman"],
          ref: "Lecture 7 — Shneiderman's 8 Golden Rules",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. List Norman's 7 Principles.",
          translation: "اذكر مبادئ نورمان السبعة.",
          answer:
            "Norman's 7 Principles:\n" +
            "1) Use both knowledge in the world and knowledge in the head.\n" +
            "2) Simplify the structure of tasks.\n" +
            "3) Make things visible: bridge the gulfs of Execution and Evaluation.\n" +
            "4) Get the mappings right.\n" +
            "5) Exploit the power of constraints, both natural and artificial.\n" +
            "6) Design for error.\n" +
            "7) When all else fails, standardize.",
          tags: ["Golden Rules", "Norman"],
          ref: "Lecture 7 — Norman's 7 Principles",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. What are golden rules and heuristics? Mention three different collections.",
          translation:
            "إيه هي القواعد الذهبية والهيورستيك؟ اذكر ثلاث مجموعات مختلفة.",
          answer:
            "Golden rules and heuristics are broad brush design rules that act as a useful checklist for good design. They are better than using nothing, and there are different collections such as:\n" +
            "1) Nielsen's 10 Heuristics.\n" +
            "2) Shneiderman's 8 Golden Rules.\n" +
            "3) Norman's 7 Principles.",
          tags: [
            "Golden Rules",
            "Heuristics",
            "Nielsen",
            "Shneiderman",
            "Norman",
          ],
          ref: "Lecture 7 — Golden rules and heuristics",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Explain the ISO 9241 definition of usability.",
          translation: "اشرح تعريف ISO 9241 للاستخدامية.",
          answer:
            "ISO 9241 is an international standard that defines usability as the effectiveness, efficiency and satisfaction with which users accomplish tasks.\n" +
            "- Effectiveness: accuracy and completeness with which users achieve goals.\n" +
            "- Efficiency: resources used in relation to the accuracy and completeness achieved.\n" +
            "- Satisfaction: comfort and acceptability of use.\n" +
            "Standards like ISO 9241 require sound underlying theory and slowly changing technology, and hardware standards are more common than software standards.",
          tags: ["Standards", "ISO 9241", "Usability"],
          ref: "Lecture 7 — Standards",
          likely: "high",
        },
        {
          type: "essay",
          q: "11. What is the difference between adaptability and adaptivity in customizability?",
          translation:
            "إيه الفرق بين adaptability و adaptivity في Customizability؟",
          answer:
            "Customizability is the modifiability of the user interface, and it can be done in two ways:\n" +
            "- Adaptability: the user modifies the interface themselves (e.g., changing the font).\n" +
            "- Adaptivity: the system modifies the interface automatically according to the user's behaviour or context.\n" +
            "So adaptability is user-driven, while adaptivity is system-driven.",
          tags: [
            "Flexibility",
            "Customizability",
            "Adaptability",
            "Adaptivity",
          ],
          ref: "Lecture 7 — Principles of flexibility",
          likely: "high",
        },
      ],
    },
  ],
});
