/* بيانات مادة: الرسم بالحاسب (computer-graphics)
   - المحاضرات (PDF) في lectures/  والأسئلة في questions/
   - المسارات دايمًا من جذر المشروع: datenew/subjects/computer-graphics/lectures/lec-01.pdf
   - انسخي شكل المحاضرة/الأسئلة من مادة شغالة عندك (دليل صاحب المنصة، الخطوة 4 و5) */
subjects.push({
  name: "الرسم بالحاسب",
  en: "Computer Graphics",
  icon: "🖼️",
  slug: "computer-graphics",
  // lectures: [
  //   /* { t:"المحاضرة 1 — العنوان", d:"وصف", id:"lec-01",
  //        pdf:"datenew/subjects/computer-graphics/lectures/lec-01.pdf", questions:[] } */
  // ],
  lectures: [
    {
      id: "computer-graphic-lecture-01",
      t: "المحاضرة 1: مقدمة الرسوميات، الإسقاط المنظوري، والـ Rasterization",
      d: "تغطي المفاهيم الأساسية لرسوميات الحاسوب، تحويل المجسمات من 3D إلى 2D باستخدام الإسقاط المنظوري (Perspective Projection)، وخوارزميات تحويل الخطوط إلى بيكسلات (Rasterization).",
      pdf: "datenew/subjects/computer-graphics/lectures/Lecture 1/Lec1-Computer Graphics.pdf",
      pdf2: "datenew/subjects/computer-graphics/questions/Questions on each lecture/Lecture_1_Questions_Intro_to_Computer_Graphics.pdf",
      sectionTitle: "🧩 سكاشن الرسوميات",
      linkCategories: [
        {
          category: "فيديوهات عالمية",
          icon: "🌍",
          description:
            "المحاضرة الرسمية من مؤلف السلايدات (Keenan Crane - CMU) + كورس أكاديمي عالمي مرافق",
          links: [
            {
              t: "Keenan Crane - Lecture 01: Course Overview (CMU 15-462/662)",
              d: "المحاضرة الأولى الرسمية — هي نفسها محتوى هذا الملف بالضبط: تعريف CG، لماذا المعلومات البصرية، التطبيقات، نشاط رسم المكعب، الإسقاط المنظوري، والـ Rasterization",
              icon: "🌍",
              actions: [
                {
                  label: "🎬 المحاضرة المباشرة",
                  url: "https://www.youtube.com/watch?v=PhxV_JrXeVk",
                  type: "view",
                  color: "red",
                },
                {
                  label: "📚 القائمة الكاملة",
                  url: "https://www.youtube.com/playlist?list=PL9_jI1bdZmz2emSh0UQ5iOdT2xRHFHL7E",
                  type: "view",
                  color: "red",
                },
                {
                  label: "🌐 صفحة المادة الرسمية",
                  url: "https://15462.courses.cs.cmu.edu/fall2021/home",
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
            "مقالات تفصيلية تشرح بالضبط مفاهيم الملف: إسقاط المنظور (u=x/z, v=y/z) والـ Rasterization",
          links: [
            {
              t: "Scratchapixel - Computing Pixel Coordinates of a 3D Point (Perspective Projection)",
              d: "شرح تفاعلي مطابق تماماً للمحاضرة: نموذج الكاميرا الثقبية، المثلثات المتشابهة، حساب (u,v) من (x,y,z) بقسمة x,y على z",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المرجع",
                  url: "https://scratchapixel.com/lessons/3d-basic-rendering/computing-pixel-coordinates-of-3d-point/perspective-projection.html",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Scratchapixel - The Rasterization Algorithm",
              d: "شرح مفصل لعملية Rasterization: تحويل الأشكال المستمرة إلى شبكة بيكسلات، خوارزمية الرسم التدريجي — يطابق القسم الأخير من المحاضرة",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المرجع",
                  url: "https://scratchapixel.com/lessons/3d-basic-rendering/rasterization-practical-implementation/overview-rasterization-algorithm.html",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "GeeksforGeeks - Computer Graphics Tutorial",
              d: "توثيق شامل: Line Drawing Algorithms، التحويلات ثنائية وثلاثية الأبعاد، وVisible Surface Detection — مرجع سريع للمفاهيم",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/computer-graphics-2/",
                  type: "view",
                },
              ],
            },
          ],
        },
        {
          category: "أدوات ومحاكاة",
          icon: "🔧",
          description:
            "أدوات تفاعلية لتجربة مفاهيم المحاضرة عملياً: رسم المكعب، الكاميرا المنظورية، والتحكم بالبيكسلات",
          links: [
            {
              t: "Three.js - Interactive 3D Editor",
              d: "محرر ثلاثي الأبعاد عبر الويب: أنشئ مكعباً، جرّب Perspective Camera، وحرّك المجسمات — يربط مباشرة بنشاط رسم المكعب في المحاضرة",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح المحرر",
                  url: "https://threejs.org/editor/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },
      ],

      questions: [
        // ─── MCQ ───
        {
          q: "What are the two main objectives stated at the start of the lecture?",
          options: [
            "Learn a graphics API and write shader code",
            "Understand broadly what computer graphics is about, and implement the first algorithm for making images of 3D shapes",
            "Study hardware architecture and GPU pipelines",
            "Review linear algebra and calculus",
          ],
          correct: 1,
          translation: "ما هما الهدفان الرئيسيان المذكوران في بداية المحاضرة؟",
          explanation:
            "الهدفان هما: (1) فهم ماهية رسوميات الحاسوب بشكل عام، (2) تنفيذ أول خوارزمية لإنشاء صور لمجسمات ثلاثية الأبعاد. باقي الاختيارات أهداف ثانوية أو لاحقة في الكورس.",
        },
        {
          q: "According to the lecture's definition, computer graphics is:",
          options: [
            "The use of computers to synthesize visual information",
            "The study of pixel manipulation only",
            "A branch of computer hardware engineering",
            "The science of image compression",
          ],
          correct: 0,
          translation: "وفقاً لتعريف المحاضرة، رسوميات الحاسوب هي:",
          explanation:
            "التعريف الرسمي = استخدام الحواسيب لتخليق (synthesize) المعلومات البصرية. الباقي تعريفات ناقصة أو خاطئة.",
        },
        {
          q: "The lecture later revises the definition of graphics to include:",
          options: [
            "Only visual information",
            "The use of computation to turn digital information into sensory stimuli",
            "Only sound and touch",
            "Only 3D geometry",
          ],
          correct: 1,
          translation: "المحاضرة تعيد لاحقاً صياغة تعريف الرسوميات ليشمل:",
          explanation:
            "التعريف الموسّع = استخدام الحوسبة لتحويل المعلومات الرقمية إلى محفزات حسية (مش بصرية فقط). ده بيفتح الباب لمجالات زي Haptics والـ 3D Printing.",
        },
        {
          q: "Roughly what fraction of the brain is dedicated to visual processing, according to the lecture?",
          options: ["About 5%", "About 30%", "About 60%", "About 90%"],
          correct: 1,
          translation:
            "تقريباً كام في المية من المخ مخصص للمعالجة البصرية حسب المحاضرة؟",
          explanation:
            "حوالي 30% من المخ مسؤول عن المعالجة البصرية — رقم كبير يفسّر ليه الرسوميات مهمة جداً في التفاعل البشري-الحاسوبي.",
        },
        {
          q: "Why are eyes described as important in the lecture?",
          options: [
            "They are the slowest input to the brain",
            "They are the highest-bandwidth port into the head",
            "They only process color, not shape",
            "They are not relevant to computer graphics",
          ],
          correct: 1,
          translation: "لماذا وُصفت العين في المحاضرة بأنها مهمة؟",
          explanation:
            "العين هي أعلى منفذ (port) في bandwidth للدماغ — بترسل معلومات بصرية بمعدل ضخم جداً، وده اللي بيخلّي الرسوميات فعّالة كوسيلة تواصل.",
        },
        {
          q: "Which historical device is mentioned as an early computer (1945)?",
          options: ["Sketchpad", "ENIAC", "Apple II", "IBM PC"],
          correct: 1,
          translation: "أي جهاز تاريخي ذُكر كحاسوب مبكر (1945)؟",
          explanation:
            "ENIAC هو أول حاسوب إلكتروني رقمي عام الغرض (1945). Sketchpad جاء بعده (1963) وكان أول نظام رسوميات تفاعلي.",
        },
        {
          q: "Punch cards, as referenced in the lecture, stored roughly how much data?",
          options: ["~12 bytes", "~120 bytes", "~1.2 KB", "~12 KB"],
          correct: 1,
          translation:
            "بطاقات الـ Punch Cards، زي ما ذُكر في المحاضرة، كانت تخزّن تقريباً كام بيانات؟",
          explanation:
            "بطاقة الـ punch card الواحدة كانت تخزّن حوالي 120 بايت — رقم ضئيل جداً مقارنةً بصورة 8K واحدة (~95 MB).",
        },
        {
          q: "Sketchpad, an early interactive graphics system, was created by:",
          options: [
            "Alan Turing",
            "Ivan Sutherland",
            "John von Neumann",
            "Douglas Engelbart",
          ],
          correct: 1,
          translation: "Sketchpad، أول نظام رسوميات تفاعلي، صنعه:",
          explanation:
            "Ivan Sutherland صنع Sketchpad سنة 1963 كجزء من رسالة الدكتوراة بتاعته في MIT. يُعتبر أبو الرسوميات التفاعلية.",
        },
        {
          q: "In what year was Sketchpad created?",
          options: ["1945", "1955", "1963", "1980"],
          correct: 2,
          translation: "في أي سنة صُنع Sketchpad؟",
          explanation:
            "سنة 1963 — بعد ENIAC بحوالي 18 سنة. ده بيدّي فكرة عن سرعة تطور المجال.",
        },
        {
          q: "An 8K monitor (7680x4320) produces an image of roughly what size, per the lecture?",
          options: ["~9.5 MB", "~95 MB", "~950 MB", "~9.5 GB"],
          correct: 1,
          translation:
            "شاشة 8K (7680×4320) بتنتج صورة بحجم تقريبي كام حسب المحاضرة؟",
          explanation:
            "7680 × 4320 × 3 بايت (RGB) ≈ 95 ميجابايت للصورة الواحدة. ده يوضح ليه الـ bandwidth والـ compression موضوعات حرجة في الرسوميات.",
        },
        {
          q: "According to the lecture, a 2020 VR headset with two 2160x2160 displays at 90Hz produces data at roughly:",
          options: ["2.3 MB/s", "23 MB/s", "2.3 GB/s", "23 GB/s"],
          correct: 2,
          translation:
            "حسب المحاضرة، نظارة VR من 2020 بشاشتين 2160×2160 بمعدل 90Hz بتنتج بيانات بمعدل تقريبي:",
          explanation:
            "2.3 جيجابايت/ثانية — معدل ضخم جداً يفسّر التحديات الهندسية في نظارات الـ VR الحديثة.",
        },
        {
          q: "Which of the following is NOT listed as an application area of computer graphics in the lecture?",
          options: [
            "Entertainment (movies, games)",
            "Architecture",
            "Scientific/mathematical visualization",
            "Database indexing",
          ],
          correct: 3,
          translation:
            "أي مما يلي لم يُذكر كمجال تطبيقي للرسوميات في المحاضرة؟",
          explanation:
            "Database indexing مجال قواعد بيانات بحت ومالوش علاقة بالرسوميات. باقي الاختيارات مجالات تطبيقية مذكورة فعلاً (ترفيه، معمار، تصوير علمي).",
        },
        {
          q: "Which visualization type is specifically mentioned alongside scientific visualization?",
          options: [
            "Medical/anatomical visualization",
            "Financial visualization",
            "Network visualization",
            "Weather visualization",
          ],
          correct: 0,
          translation: "أي نوع تصوير ذُكر تحديداً بجانب التصوير العلمي؟",
          explanation:
            "التصوير الطبي/التشريحي (Medical/Anatomical). الرسوميات مهمة جداً في المجال الطبي — من الأشعة المقطعية لجراحة افتراضية.",
        },
        {
          q: "Which of the following is listed under the 'Theory' foundations of computer graphics?",
          options: [
            "Sampling & aliasing",
            "Compiler design",
            "Operating systems",
            "Database theory",
          ],
          correct: 0,
          translation: "أي مما يلي مذكور ضمن أسس 'النظرية' في رسوميات الحاسوب؟",
          explanation:
            "Sampling & aliasing أساس نظري في الرسوميات (بيتعامل مع تحويل الإشارات المستمرة لمنفصلة). الباقي فروع CS مختلفة تماماً.",
        },
        {
          q: "Which of the following is listed under the 'Theory' foundations of computer graphics?",
          options: [
            "Radiometry & light transport",
            "Network protocols",
            "File systems",
            "Cryptography",
          ],
          correct: 0,
          translation: "أي مما يلي مذكور ضمن أسس 'النظرية' في رسوميات الحاسوب؟",
          explanation:
            "Radiometry & light transport — أساس فهم الإضاءة والظلال الواقعية. بيقوم على فيزياء انتشار الضوء.",
        },
        {
          q: "Which of the following is listed under the 'Systems' foundations of computer graphics?",
          options: [
            "Parallel, heterogeneous processing",
            "Radiometry",
            "Perception",
            "Sampling & aliasing",
          ],
          correct: 0,
          translation: "أي مما يلي مذكور ضمن أسس 'الأنظمة' في رسوميات الحاسوب؟",
          explanation:
            "المعالجة المتوازية وغير المتجانسة (زي CPU+GPU) هي أساس الـ Systems في الرسوميات. Radiometry و Sampling نظرية، Perception إدراك بشري.",
        },
        {
          q: "In the cube-modeling activity, the cube is assumed to be centered at:",
          options: ["(1,1,1)", "The origin (0,0,0)", "(2,2,2)", "(-1,-1,-1)"],
          correct: 1,
          translation: "في نشاط نمذجة المكعب، المكعب مفترض إنه متمركز عند:",
          explanation:
            "المكعب متمركز عند نقطة الأصل (0,0,0) — ده التبسيط المعياري في الرسوميات عشان يسهّل الحسابات.",
        },
        {
          q: "What are the dimensions of the cube used in the modeling activity?",
          options: ["1x1x1", "2x2x2", "3x3x3", "4x4x4"],
          correct: 1,
          translation: "إيه هي أبعاد المكعب المستخدم في نشاط النمذجة؟",
          explanation:
            "2×2×2 — يعني كل ضلع طوله 2، والمكعب متمركز في الأصل فبيمتد من -1 لـ +1 على كل محور.",
        },
        {
          q: "How many vertices does the cube in the activity have?",
          options: ["4", "6", "8", "12"],
          correct: 2,
          translation: "كم عدد الرؤوس (vertices) في المكعب بالنشاط؟",
          explanation:
            "8 رؤوس — كل رأس هو نقطة عند تقاطع 3 أحرف. المكعب بشكل عام له 2³ = 8 رؤوس.",
        },
        {
          q: "How many edges does the cube in the activity have?",
          options: ["6", "8", "10", "12"],
          correct: 3,
          translation: "كم عدد الأحرف (edges) في المكعب بالنشاط؟",
          explanation: "12 حرف — المكعب له 12 حرف، 6 أوجه، و8 رؤوس.",
        },
        {
          q: "In the cube-drawing activity, what is the basic two-step strategy for turning a 3D cube into a 2D image?",
          options: [
            "Rotate the cube, then scale it",
            "Map 3D vertices to 2D points, then connect them with straight lines",
            "Apply color, then shade the faces",
            "Compute normals, then apply lighting",
          ],
          correct: 1,
          translation:
            "في نشاط رسم المكعب، إيه هي الاستراتيجية الأساسية المكونة من خطوتين لتحويل المكعب من 3D لصورة 2D؟",
          explanation:
            "الخطوتان: (1) إسقاط كل رأس من 3D إلى نقطة في 2D، (2) توصيل النقاط المتقابلة بخطوط مستقيمة = هيكل الوايرفريم.",
        },
        {
          q: "The lecture explains perspective projection using which simple camera model?",
          options: [
            "Lens camera",
            "Pinhole camera",
            "Fisheye camera",
            "Orthographic camera",
          ],
          correct: 1,
          translation:
            "المحاضرة تشرح الإسقاط المنظوري باستخدام أي نموذج كاميرا بسيط؟",
          explanation:
            "الكاميرا الثقبية (Pinhole) — أبسط نموذج: ثقب صغير + مستوي تصوير. بيدي الإسقاط المنظوري بشكل طبيعي.",
        },
        {
          q: "In perspective projection, objects appear smaller as they:",
          options: [
            "Get closer to the camera",
            "Get further away from the camera",
            "Rotate faster",
            "Change color",
          ],
          correct: 1,
          translation: "في الإسقاط المنظوري، الأجسام تبان أصغر لما:",
          explanation:
            "لما تبعُد عن الكاميرا — ده قانون أساسي في الإسقاط المنظوري، وبيظهر في معادلة u=x/z، v=y/z (كل ما z تكبر، u و v تصغّر).",
        },
        {
          q: "In the side-view derivation, the image point is called:",
          options: ["p = (x,y,z)", "q = (u,v)", "c = (2,3,5)", "s = slope"],
          correct: 1,
          translation: "في الاشتقاق من المنظر الجانبي، نقطة الصورة اسمها:",
          explanation:
            "نقطة الصورة في مستوي التصوير اسمها q = (u,v)، بينما p = (x,y,z) هي نقطة الجسم في الفضاء 3D، و c مركز الإسقاط.",
        },
        {
          q: "Under the assumption that the camera has unit size with origin at the pinhole c, the vertical image coordinate v is derived as:",
          options: [
            "v = y + z",
            "v = y/z (the slope y/z)",
            "v = y * z",
            "v = z/y",
          ],
          correct: 1,
          translation:
            "بافتراض إن الكاميرا حجمها وحدة والأصل عند الثقب c، الإحداثي الرأسي للصورة v يُشتق كالتالي:",
          explanation:
            "v = y/z — ناتج من تشابه المثلثات: النسبة بين y في الفضاء و v في الصورة = نسبة المسافة z لمستوي التصوير (=1).",
        },
        {
          q: "Following the same logic, the horizontal image coordinate u is given by:",
          options: ["u = x/z", "u = z/x", "u = x*z", "u = x+z"],
          correct: 0,
          translation: "بنفس المنطق، الإحداثي الأفقي للصورة u يُعطى بـ:",
          explanation:
            "u = x/z — نفس منطق v بالظبط، بس على المحور الأفقي. القسمة على z دي هي جوهر الإسقاط المنظوري.",
        },
        {
          q: "In the 'draw the cube' activity, what camera position is assumed?",
          options: ["c = (0,0,0)", "c = (1,1,1)", "c = (2,3,5)", "c = (5,3,2)"],
          correct: 2,
          translation: "في نشاط 'ارسم المكعب'، موضع الكاميرا المفترض هو:",
          explanation:
            "c = (2,3,5) — موضع كاميرا مثالي بيسمح برؤية المكعب بزاوية ثلاثية الأبعاد واضحة.",
        },
        {
          q: "To project each 3D vertex to 2D in the activity, the first step is to:",
          options: [
            "Divide (x,y) by z directly",
            "Subtract the camera position c from the vertex to get (x,y,z)",
            "Multiply the vertex by the camera position",
            "Add the camera position to the vertex",
          ],
          correct: 1,
          translation:
            "لإسقاط كل رأس من 3D إلى 2D في النشاط، الخطوة الأولى هي:",
          explanation:
            "اطرح موضع الكاميرا c من الرأس عشان تنقله لنظام إحداثيات نسبي للكاميرا — ده بيخلي الكاميرا في الأصل، وبعدين نطبق u=x/z، v=y/z.",
        },
        {
          q: "After subtracting the camera position, the second step to get (u,v) is to:",
          options: [
            "Multiply (x,y) by z",
            "Divide (x,y) by z",
            "Add z to (x,y)",
            "Take the square root of z",
          ],
          correct: 1,
          translation:
            "بعد طرح موضع الكاميرا، الخطوة الثانية للحصول على (u,v) هي:",
          explanation:
            "اقسم (x,y) على z — دي معادلة الإسقاط المنظوري الأساسية: u=x/z، v=y/z.",
        },
        {
          q: "Once the two endpoints of an edge have been projected to (u1,v1) and (u2,v2), what does the algorithm do next?",
          options: [
            "Fill the polygon between them",
            "Draw a line between the two 2D points",
            "Compute a normal vector",
            "Apply a color gradient",
          ],
          correct: 1,
          translation:
            "بعد إسقاط طرفي الحرف إلى (u1,v1) و(u2,v2)، الخوارزمية تعمل إيه بعدين؟",
          explanation:
            "ترسم خط مستقيم بين النقطتين في 2D. ده بيدي هيكل الوايرفريم للمكعب.",
        },
        {
          q: "According to the lecture, what did the cube-drawing exercise successfully demonstrate?",
          options: [
            "Turning visual information into digital information",
            "Turning purely digital information into purely visual information using a completely algorithmic procedure",
            "Compressing an image",
            "Simulating lighting",
          ],
          correct: 1,
          translation: "حسب المحاضرة، إيه اللي أثبته تمرين رسم المكعب بنجاح؟",
          explanation:
            "إننا قدرنا نحوّل معلومات رقمية بحتة إلى معلومات بصرية بحتة عبر إجراء خوارزمي كامل — وده جوهر رسوميات الحاسوب.",
        },
        {
          q: "The lecture describes a raster display using which common abstraction?",
          options: [
            "A continuous vector canvas",
            "A 2D grid of pixels, each with a color value",
            "A single scanning laser beam",
            "A 1D array of intensities",
          ],
          correct: 1,
          translation: "المحاضرة تصف شاشة الـ Raster بأي تجريد شائع؟",
          explanation:
            "شبكة 2D من البيكسلات، كل بيكسل له قيمة لونية. ده أبسط تجريد لشاشة الـ raster.",
        },
        {
          q: "The process of converting a continuous object (like a line) into a discrete pixel-grid representation is called:",
          options: [
            "Aliasing",
            "Rasterization",
            "Tessellation",
            "Quantization",
          ],
          correct: 1,
          translation:
            "عملية تحويل جسم مستمر (زي الخط) إلى تمثيل شبكة بيكسلات منفصلة اسمها:",
          explanation:
            "Rasterization (التنقيط) — تحويل الأشكال الهندسية المستمرة لبيكسلات منفصلة على الشاشة.",
        },
        {
          q: "Which rule for choosing which pixels to light up for a line is specifically named in the lecture, and used by modern GPUs?",
          options: [
            "The midpoint rule",
            "The diamond rule",
            "The Bresenham rule",
            "The scanline rule",
          ],
          correct: 1,
          translation:
            "أي قاعدة لاختيار البيكسلات اللي تنوّر لرسم خط ذُكرت تحديداً في المحاضرة، وتستخدمها الـ GPUs الحديثة؟",
          explanation:
            "قاعدة المعين (Diamond rule) — لو الخط يمر داخل المعين المرتبط بالبيكسل، البيكسل ينوّر. الـ GPUs الحديثة بتستخدمها فعلاً.",
        },
        {
          q: "Under the diamond rule, a pixel is lit up if:",
          options: [
            "The line passes through the pixel's associated diamond",
            "The line touches any corner of the pixel",
            "The pixel is closer to the camera",
            "The pixel's color matches the line's color",
          ],
          correct: 0,
          translation: "تحت قاعدة المعين، البيكسل ينوّر لو:",
          explanation:
            "الخط يمر خلال المعين المرتبط بالبيكسل. القاعدة دي بتدي نتائج أفضل من فحص الزوايا فقط، وبتُستخدم في العتاد الحديث.",
        },
        {
          q: "Why is naively checking every pixel in the image to rasterize a line considered inefficient?",
          options: [
            "It only works for horizontal lines",
            "It costs O(n^2) work in the number of image pixels, versus at most O(n) pixels actually lit up",
            "It cannot represent color",
            "It requires floating-point hardware that doesn't exist",
          ],
          correct: 1,
          translation:
            "ليه فحص كل بيكسل في الصورة بشكل ساذج لتنقيط خط يُعتبر غير فعّال؟",
          explanation:
            "لأنه بيكلّف O(n²) على عدد بيكسلات الصورة، بينما الخط فعلياً بينوّر O(n) بيكسل على الأكثر — إهدار هائل للموارد.",
        },
        {
          q: "In the incremental line rasterization algorithm described, the slope s of the line is computed as:",
          options: [
            "s = (u2-u1) / (v2-v1)",
            "s = (v2-v1) / (u2-u1)",
            "s = (u2+u1) / (v2+v1)",
            "s = u2 * v2",
          ],
          correct: 1,
          translation:
            "في خوارزمية التنقيط التدريجية الموصوفة، ميل الخط s يُحسب كالتالي:",
          explanation:
            "s = (v2-v1)/(u2-u1) — الفرق في v على الفرق في u. ده تعريف الميل القياسي.",
        },
        {
          q: "The easy special case handled by the incremental algorithm assumes:",
          options: [
            "u1 > u2 and v1 > v2",
            "u1 < u2, v1 < v2, and 0 < s < 1",
            "The line is vertical",
            "The slope is greater than 1",
          ],
          correct: 1,
          translation:
            "الحالة الخاصة السهلة اللي تتعامل معاها الخوارزمية التدريجية تفترض:",
          explanation:
            "u1 < u2، v1 < v2، و 0 < s < 1 — يعني الخط من أسفل-يسار لأعلى-يمين بميل أقل من 45°. الحالات التانية بتحتاج معالجة خاصة.",
        },
        {
          q: "In the incremental algorithm's loop, what is updated on every iteration as u increases by 1?",
          options: [
            "v is incremented by s, then rounded to draw the pixel",
            "u is divided by s",
            "The camera position is updated",
            "The color is incremented",
          ],
          correct: 0,
          translation:
            "في حلقة الخوارزمية التدريجية، إيه اللي بيتحدّث في كل تكرار لما u تزيد بمقدار 1؟",
          explanation:
            "v بتزيد بمقدار s، وبعدين تتقرّب (round) لرسم البيكسل. ده أساس فكرة 'الزيادة التدريجية' — بدل ما نحسب كل نقطة من الصفر.",
        },
        {
          q: "The lecture notes that although the incremental algorithm is easy to implement, it is:",
          options: [
            "Exactly how lines are drawn in modern software/hardware",
            "Not how lines are actually drawn in modern software/hardware",
            "Only usable for 3D lines",
            "The fastest possible method",
          ],
          correct: 1,
          translation:
            "المحاضرة بتلاحظ إن الخوارزمية التدريجية، رغم سهولتها، إلا إنها:",
          explanation:
            "مش هي الطريقة الفعلية لرسم الخطوط في البرمجيات/العتاد الحديث — الطرق الحقيقية أعقد بكتير (زي Bresenham والـ diamond rule).",
        },
        {
          q: "After completing the simple line-drawing algorithm for the cube, what does the lecture say is needed for more realistic pictures?",
          options: [
            "Only better monitors",
            "A richer model of the world, including geometry, materials, lights, cameras, and motion",
            "Faster punch card readers",
            "More pixels per inch only",
          ],
          correct: 1,
          translation:
            "بعد إكمال خوارزمية رسم الخطوط البسيطة للمكعب، إيه اللي المحاضرة بتقوله مطلوب لصور أكثر واقعية؟",
          explanation:
            "نموذج أغنى للعالم: هندسة + مواد (materials) + إضاءة + كاميرات + حركة. ده اللي بيفرق بين الرسم البسيط والصور الواقعية.",
        },
        {
          q: "Which of the following is explicitly listed as part of the 'richer model of the world' needed for realism?",
          options: ["Materials", "Punch cards", "Compilers", "Databases"],
          correct: 0,
          translation:
            "أي مما يلي مذكور صراحةً كجزء من 'النموذج الأغنى للعالم' المطلوب للواقعية؟",
          explanation:
            "المواد (Materials) — خصائص الأسطح (خشب، معدن، زجاج...) ضرورية لمحاكاة الإضاءة الواقعية.",
        },
        {
          q: "Which of the following is explicitly listed as part of the 'richer model of the world' needed for realism?",
          options: [
            "Motion",
            "Networking",
            "Cryptography",
            "Operating systems",
          ],
          correct: 0,
          translation:
            "أي مما يلي مذكور صراحةً كجزء من 'النموذج الأغنى للعالم' المطلوب للواقعية؟",
          explanation:
            "الحركة (Motion) — الأجسام المتحركة والأنيميشن جزء أساسي من الواقعية البصرية.",
        },
        {
          q: "The lecture frames the whole cube-drawing exercise as fundamentally illustrating:",
          options: [
            "What computer graphics is all about",
            "How to compress an image",
            "How compilers work",
            "How networks transmit images",
          ],
          correct: 0,
          translation: "المحاضرة بتأطّر تمرين رسم المكعب كتوضيح أساسي لـ:",
          explanation:
            "إن ده جوهر رسوميات الحاسوب — تحويل معلومات رقمية إلى صورة عبر خوارزمية واضحة.",
        },
        {
          q: "What footnote does the lecture add about the idea of a pixel as 'a little square'?",
          options: [
            "It is completely accurate and never questioned",
            "The notion will be strongly challenged later in the course",
            "Pixels are always circular",
            "Pixels do not have color",
          ],
          correct: 1,
          translation:
            "إيه الحاشية اللي أضافتها المحاضرة عن فكرة البيكسل كـ 'مربع صغير'؟",
          explanation:
            "الفكرة دي هتتحدّى بقوة لاحقاً في الكورس — لأن البيكسل فعلياً مفهوم أعقد بكتير في نظرية الإشارات والـ sampling.",
        },
        {
          q: "The lecture references a SIGGRAPH trailer to make which point?",
          options: [
            "That computer graphics is a narrow, niche field",
            "That even the broadened definition of graphics is still too narrow",
            "That SIGGRAPH only covers hardware",
            "That graphics has not changed since the 1960s",
          ],
          correct: 1,
          translation: "المحاضرة بتستشهد بإعلان SIGGRAPH عشان توضح أي نقطة؟",
          explanation:
            "إن حتى التعريف الموسّع للرسوميات لسه ضيق جداً — المجال بيتطور باستمرار لأبعد من التوقعات التقليدية.",
        },
        {
          q: "The lecture mentions turning digital information into physical matter as an example of graphics evolving beyond:",
          options: [
            "Just turning on pixels",
            "Just writing text",
            "Just playing sound",
            "Just 2D drawing",
          ],
          correct: 0,
          translation:
            "المحاضرة بتذكر تحويل المعلومات الرقمية إلى مادة فيزيائية كمثال على تطور الرسوميات لأبعد من:",
          explanation:
            "مجرد تشغيل البيكسلات — يعني الرسوميات بقت تشمل الطباعة ثلاثية الأبعاد، الـ Haptics، وغيرها.",
        },
        {
          q: "Where does the lecture say students can find all logistics for the course?",
          options: [
            "In the lecture slides only",
            "On the course webpage",
            "By email only",
            "In the textbook appendix",
          ],
          correct: 1,
          translation:
            "المحاضرة بتقول إن الطلاب يلاقوا كل اللوجستيات الخاصة بالكورس فين؟",
          explanation:
            "على صفحة الكورس الرسمية على الويب — فيها كل التفاصيل: المواعيد، الواجبات، السياسات، إلخ.",
        },
      ],
    },
    {
      id: "computer-graphic-lecture-02",

      t: "المحاضرة 2: مراجعة الرياضيات (الجزء الأول: الجبر الخطي والـ Vector Spaces)",
      d: "تغطي المفاهيم الأساسية للجبر الخطي في الرسوميات الحاسوبية: مسلمات الفضاءات المتجهة (Vector Spaces)، التمثيل بالإحداثيات الديكارتية، عمليات الجمع والتكبيس (Scaling)، حساب منتصف القطعة (Midpoint)، معاملة الدوال كمتجهات، ومعايير قياس الطول (Euclidean Norm وL2 Norm للدوال).",
      pdf: "datenew/subjects/computer-graphics/lectures/Lecture 2/Lecture 2.pdf",
      pdf2: "datenew/subjects/computer-graphics/questions/Questions on each lecture/Lecture2_Linear_Algebra_Questions.pdf",

      // فئات روابط منظمة لمادة رسوميات الحاسوب (Computer Graphics - Lecture 1)
      // فئات روابط منظمة ومخصصة لمحاضرة الجبر الخطي للرسوميات الحاسوبية (CMU Lecture 2)
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية تمس موضوعات المتجهات، المعيار، والفضاءات المتجهة المذكورة بالملف",
          links: [
            {
              t: "SpicyCoders - المتجهات | Vectors | الجبر الخطى",
              d: "شرح تفصيلي لمفهوم المتجهات، المركبات الديكارتية، وحساب طول المتجه (Magnitude) متوافق مع الشرائح 4-8 و 21-26",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=lMahHHwQ_Eo",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "د. أحمد حجاج - الجبر الخطي (فيديوهات التركيبات والفضاءات المتجهة)",
              d: "فيديوهات محددة للملف: فيديو #20 (Linear Combinations) وفيديو #24 (Linear Independence & Spanning Sets)",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 فتح قائمة التشغيل",
                  url: "https://youtube.com/playlist?list=PLxIvc-MGOs6iQXFnjF_STbhGdrZBphrv_&si=IaeoOStIm3rXMfNA",
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
            "المحاضرة الرسمية لجامعة CMU وسلسلة 3Blue1Brown المحددة بموضوعات الملف",
          links: [
            {
              t: "Prof. Keenan Crane - CMU 15-462 Math Review Part I: Linear Algebra",
              d: "المحاضرة الأكاديمية الرسمية المباشرة لمؤلف الشرائح من جامعة كارنيغي ميلون",
              icon: "🌍",
              actions: [
                {
                  label: "📖 المحاضرة الرسمية",
                  url: "http://15462.courses.cs.cmu.edu/fall2020/",
                  type: "view",
                  color: "red",
                },
                {
                  label: "🎬 المحاضرة المباشرة",
                  url: "https://youtu.be/2c8XQlQApx8",
                  type: "view",
                  color: "red",
                },
                {
                  label: "📚 القائمة الكاملة",
                  url: "https://www.youtube.com/playlist?list=PL9_jI1bdZmz2emSh0UQ5iOdT2xRHFHL7E",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "3Blue1Brown - Essence of Linear Algebra (مقاطع محددة للملف)",
              d: "المقاطع التابعة للملف: Ch 1 (Vectors)، Ch 2 (Span & Basis)، Ch 9 (Dot Products & Norms)، Ch 16 (Abstract Vector Spaces & Functions)",
              icon: "🌍",
              actions: [
                {
                  label: "📖 فتح القائمة المحددة",
                  url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
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
          description: "مقالات وتوثيقات هندسية متخصصة في الرياضيات للرسوميات",
          links: [
            {
              t: "Scratchapixel - Geometry: Points, Vectors and Normals",
              d: "مرجع متقدم يشرح تمثيل النقاط والمتجهات والمعايير في المحركات ثلاثية الأبعاد",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.scratchapixel.com/lessons/mathematics-physics-for-computer-graphics/geometry/points-vectors-and-normals.html",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "CMU 15-462/662 Official Course Page",
              d: "الموقع الرسمي لمساق الرسوميات الحاسوبية بجامعة CMU ويتضمن الشرائح والواجبات البرمجية (Scotty3D)",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "http://15462.courses.cs.cmu.edu/",
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
            "برامج تفاعلية لمحاكاة جمع المتجهات وحساب المعيار في ثنائي وثلاثي الأبعاد",
          links: [
            {
              t: "PhET Interactive Simulation - Vector Addition",
              d: "أداة محاكاة تفاعلية من جامعة كولورادو لتركيب المتجهات واختبار خصائص الجمع والمعيار",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح المحاكاة",
                  url: "https://phet.colorado.edu/en/simulations/vector-addition",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "GeoGebra 3D Visualizer - 3D Vector Addition",
              d: "بيئة تفاعلية ثلاثية الأبعاد لبناء المتجهات وتحليل المركبات وتطبيق متباينة المثلث هندسياً",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة 3D",
                  url: "https://www.geogebra.org/3d",
                  type: "view",
                  color: "orange",
                },
              ],
            },
          ],
        },
      ],
      // الأسئلة

      // ═══════════════════════════════════════════════════════════════════
      //  المحاضرة 2 — مراجعة الرياضيات (الجبر الخطي والـ Vector Spaces)
      //  المسار: datenew/graphics/graphics.js → lectures[1].questions
      // ═══════════════════════════════════════════════════════════════════

      questions: [
        // ─── MCQ ───
        {
          q: "Why is linear algebra described as important for computer graphics?",
          options: [
            "It is only used for drawing text",
            "It is only needed for hardware design",
            "It replaces the need for any programming",
            "It is an effective bridge between geometry, physics, etc., and computation",
          ],
          correct: 3,
          translation: "لماذا يُوصف الجبر الخطي بأنه مهم لرسوميات الحاسوب؟",
          explanation:
            "الجبر الخطي هو الجسر الفعّال بين الهندسة والفيزياء والحوسبة. بيمكّنك من صياغة المسائل الهندسية في صورة رياضية قابلة للحل حاسوبياً.",
        },
        {
          q: "According to the lecture, once you can express a graphics problem in terms of linear algebra, you are essentially done because:",
          options: [
            "The GPU automatically draws the result",
            "The problem no longer needs any input data",
            "The answer is always a single number",
            "You can ask the computer to solve Ax = b",
          ],
          correct: 3,
          translation:
            "حسب المحاضرة، بمجرد أن تعبّر عن مسألة رسوميات بلغة الجبر الخطي، تكون قد انتهيت فعلياً لأن:",
          explanation:
            "لأنك بتحوّل المسألة لنظام معادلات Ax = b، والحاسوب يحلها بكفاءة عالية. دي قوة الجبر الخطي كأداة — بتخلي الحل مهمة حسابية.",
        },
        {
          q: "Which of the following is listed as an area made possible by fast numerical linear algebra?",
          options: [
            "Image processing, physically-based animation, and geometry processing",
            "Only network routing",
            "Only database indexing",
            "Only file compression",
          ],
          correct: 0,
          translation:
            "أي مما يلي ذُكر كمجال أصبح ممكناً بفضل الجبر الخطي العددي السريع؟",
          explanation:
            "معالجة الصور + الأنيميشن الفيزيائي + معالجة الهندسة. كلها مجالات بتعتمد على عمليات مصفوفية سريعة، وهي أساس الرسوميات الحديثة.",
        },
        {
          q: "Linear algebra is defined in the lecture as the study of:",
          options: [
            "Only 3D rotations",
            "Vector spaces and linear maps between them",
            "Polynomials and nothing else",
            "Only matrices of integers",
          ],
          correct: 1,
          translation: "الجبر الخطي عُرّف في المحاضرة بأنه دراسة:",
          explanation:
            "الفضاءات المتجهية والخرائط الخطية بينها. ده التعريف الرياضي الرسمي، أوسع بكتير من مجرد المصفوفات.",
        },
        {
          q: "What is the intuitive mental model of a vector used in the lecture?",
          options: [
            "A closed curve",
            "A grid of pixels",
            "A little arrow",
            "A single point",
          ],
          correct: 2,
          translation:
            "ما هو النموذج الذهني البديهي للمتجه المستخدم في المحاضرة؟",
          explanation:
            "سهم صغير (Little arrow) — الصورة الذهنية الأبسط والأكثر فائدة لفهم المتجهات هندسياً قبل الدخول في التعريفات المجردة.",
        },
        {
          q: "Which of the following is mentioned as data in graphics that may not look like arrows but still behaves like vectors?",
          options: [
            "Only file names",
            "Only integers",
            "Polynomials, images, and radiance",
            "Only text strings",
          ],
          correct: 2,
          translation:
            "أي مما يلي ذُكر كبيانات في الرسوميات قد لا تشبه الأسهم لكنها تتصرف كمتجهات؟",
          explanation:
            "كثيرات الحدود + الصور + الإشعاع (Radiance). كلها كائنات رياضية قابلة للجمع والضرب في عدد = متجهات في فضاءات دالية.",
        },
        {
          q: "What information does a vector fundamentally encode?",
          options: [
            "Color and texture",
            "Only its starting point",
            "Position and mass",
            "Direction and magnitude",
          ],
          correct: 3,
          translation: "ما المعلومات التي يشفّرها المتجه أساساً؟",
          explanation:
            "الاتجاه والمقدار — دي الخصائص الجوهرية للمتجه، بغض النظر عن تمثيله الإحداثي أو نقطة بدايته.",
        },
        {
          q: "A vector in 2D can be encoded by a length and an angle relative to a fixed direction. This is called:",
          options: [
            "Barycentric coordinates",
            "Homogeneous coordinates",
            "Polar coordinates",
            "Cartesian coordinates",
          ],
          correct: 2,
          translation:
            "المتجه في 2D يمكن ترميزه بطول وزاوية نسبةً لاتجاه ثابت. ده اسمه:",
          explanation:
            "الإحداثيات القطبية (r, θ) — بديل للإحداثيات الديكارتية (x, y)، ومناسبة للمسائل اللي فيها دوران أو زوايا.",
        },
        {
          q: "Traditionally, a vector does NOT include a:",
          options: ["Basepoint", "Direction", "Length", "Magnitude"],
          correct: 0,
          translation: "تقليدياً، المتجه لا يتضمن:",
          explanation:
            "نقطة الأساس (Basepoint). المتجه له اتجاه ومقدار فقط، مش نقطة بداية محددة. لو أضفنا نقطة أساس، بيبقى اسمه Tangent Vector.",
        },
        {
          q: "A vector with a basepoint is sometimes called a:",
          options: [
            "Tangent vector",
            "Normal vector",
            "Unit vector",
            "Zero vector",
          ],
          correct: 0,
          translation: "المتجه الذي له نقطة أساس يُسمى أحياناً:",
          explanation:
            "Tangent Vector (متجه مماسي) — لأنه بيرتبط بنقطة معينة على سطح أو منحنى، زي المتجه المماس لمسار حركة.",
        },
        {
          q: "Measuring the components of a vector with respect to a chosen coordinate system gives which representation (named after Descartes)?",
          options: [
            "Spherical coordinates only",
            "Cartesian coordinates",
            "Polar coordinates",
            "Radiance coordinates",
          ],
          correct: 1,
          translation:
            "قياس مركبات المتجه بالنسبة لنظام إحداثيات مختار يعطي أي تمثيل (منسوب لديكارت)؟",
          explanation:
            "الإحداثيات الديكارتية (x, y, z) — سميت باسم رينيه ديكارت. أبسط وأشهر نظام إحداثيات في الرياضيات والرسوميات.",
        },
        {
          q: "What does the lecture warn about coordinates?",
          options: [
            "Only integer coordinates are valid",
            "You cannot directly compare coordinates in different systems, e.g., (r,θ) with (x,y)",
            "Coordinates can never be used on a computer",
            "Coordinates are always identical in every system",
          ],
          correct: 1,
          translation: "ما الذي تحذّر منه المحاضرة بخصوص الإحداثيات؟",
          explanation:
            "لا يمكن مقارنة إحداثيات في أنظمة مختلفة مباشرة (زي (r,θ) مع (x,y)). لازم تحوّل لنفس النظام الأول قبل أي مقارنة أو عملية.",
        },
        {
          q: "The first basic operation on vectors shown in the lecture is addition. How is it done geometrically?",
          options: [
            "Rotating one arrow by 90 degrees",
            "Taking the longer of the two",
            "Multiplying their lengths",
            "Placing the arrows end to end",
          ],
          correct: 3,
          translation:
            "أول عملية أساسية على المتجهات في المحاضرة هي الجمع. كيف تُنفّذ هندسياً؟",
          explanation:
            "ضع السهمين رأس بذيل (end to end). ناتج الجمع = السهم من ذيل الأول لرأس التاني. دي القاعدة الهندسية لجمع المتجهات.",
        },
        {
          q: "The fact that u + v = v + u means vector addition is:",
          options: [
            "Non-linear",
            "Associative only",
            "Commutative (abelian)",
            "Distributive",
          ],
          correct: 2,
          translation: "حقيقة أن u + v = v + u تعني أن جمع المتجهات:",
          explanation:
            "تبديلي (Commutative / Abelian). الترتيب مش مهم في الجمع — نفس النتيجة لو بدّلت u و v.",
        },
        {
          q: "The term 'abelian' used for commutative addition comes from the name of:",
          options: [
            "René Descartes",
            "Isaac Newton",
            "Niels Henrik Abel",
            "Carl Friedrich Gauss",
          ],
          correct: 2,
          translation: "مصطلح 'أبيلين' المستخدم للجمع التبديلي مشتق من اسم:",
          explanation:
            "نيلز هنريك أبيل (Niels Henrik Abel) — عالم رياضيات نرويجي شهير، واسمه أُطلق على العمليات التبديلية في الجبر المجرد.",
        },
        {
          q: "The second basic operation on vectors is:",
          options: [
            "Sorting the components",
            "Dividing one vector by another",
            "Scaling by a number (scalar)",
            "Squaring a vector",
          ],
          correct: 2,
          translation: "العملية الأساسية الثانية على المتجهات هي:",
          explanation:
            "الضرب في عدد (Scaling). بتغيّر طول المتجه دون تغيير اتجاهه (إلا لو العدد سالب، بيعكس الاتجاه).",
        },
        {
          q: "Which identity describes how scaling behaves with repeated scaling?",
          options: [
            "a(bu) = (a + b)u",
            "a(bu) = abu²",
            "a(bu) = a + bu",
            "a(bu) = (ab)u",
          ],
          correct: 3,
          translation: "أي متطابقة تصف سلوك التكبير عند تكراره؟",
          explanation:
            "a(bu) = (ab)u — التكبير المتكرر = حاصل ضرب المعاملين. خاصية أساسية في الفضاءات المتجهية.",
        },
        {
          q: "Which identity describes the interaction of addition and scaling?",
          options: [
            "a(u + v) = a + u + v",
            "a(u + v) = au · av",
            "a(u + v) = au + av",
            "a(u + v) = a(uv)",
          ],
          correct: 2,
          translation: "أي متطابقة تصف التفاعل بين الجمع والتكبير؟",
          explanation:
            "a(u + v) = au + av — خاصية التوزيع (Distributivity). أساسية في الفضاءات المتجهية وبتسمح بتبسيط الحسابات.",
        },
        {
          q: "According to the lecture, where do the rules (axioms) of a vector space come from?",
          options: [
            "They were given by an authority with no explanation",
            "They come only from computer hardware",
            "They are random conventions",
            "The geometric behavior of little arrows",
          ],
          correct: 3,
          translation:
            "حسب المحاضرة، من أين تأتي قواعد (بديهيات) الفضاء المتجهي؟",
          explanation:
            "من السلوك الهندسي للأسهم الصغيرة. القواعد مستنبطة من الواقع الهندسي، مش موضوعة اعتباطاً ولا 'نزلت من السماء'.",
        },
        {
          q: "Any collection of objects satisfying all of the vector-space properties is called:",
          options: [
            "An invalid set",
            "A matrix",
            "A vector space, even if the objects do not look like little arrows",
            "A scalar field only",
          ],
          correct: 2,
          translation:
            "أي مجموعة من الكائنات تحقق كل خصائص الفضاء المتجهي تُسمى:",
          explanation:
            "فضاء متجهي، حتى لو الكائنات مش أسهم — زي الدوال أو كثيرات الحدود. التعريف قائم على الخصائص مش الشكل.",
        },
        {
          q: "The most common example of a vector space, denoted Rⁿ, means:",
          options: [
            "n functions",
            "n complex numbers",
            "n integers only",
            "n real numbers",
          ],
          correct: 3,
          translation:
            "المثال الأكثر شيوعاً للفضاء المتجهي، ويُرمز له بـ Rⁿ، يعني:",
          explanation:
            "n من الأعداد الحقيقية — زي R² (مستوي) أو R³ (فضاء ثلاثي الأبعاد). أساس كل الرسوميات ثلاثية الأبعاد.",
        },
        {
          q: "The tuple (1.23, 4.56, π/2) is a point in which space?",
          options: ["R³", "R¹", "R⁴", "R²"],
          correct: 0,
          translation: "الثلاثية (1.23, 4.56, π/2) هي نقطة في أي فضاء؟",
          explanation:
            "R³ — لأن فيها 3 أعداد حقيقية. تمثيل قياسي لنقطة في فضاء ثلاثي الأبعاد.",
        },
        {
          q: "Why is Euclidean n-dimensional space such a common example? (choose the best answer)",
          options: [
            "It is the only vector space that exists",
            "It cannot represent images",
            "It looks a lot like the space we live in and is easy to encode on a computer as a list of floating-point numbers",
            "It needs no memory to store",
          ],
          correct: 2,
          translation:
            "لماذا الفضاء الإقليدي n-الأبعاد مثال شائع جداً؟ (اختر أفضل إجابة)",
          explanation:
            "لأنه يشبه الفضاء اللي بنعيش فيه، وسهل ترميزه حاسوبياً كقائمة أرقام عشرية (Floating-point). عملي ومألوف.",
        },
        {
          q: "Which of the following is given as another very important example of vector spaces in graphics?",
          options: [
            "Spaces of file names",
            "Spaces of passwords",
            "Spaces of functions",
            "Spaces of network packets",
          ],
          correct: 2,
          translation:
            "أي مما يلي ذُكر كمثال آخر مهم جداً للفضاءات المتجهية في الرسوميات؟",
          explanation:
            "فضاءات الدوال — لأن كثير من كائنات الرسوميات (الصور، الإضاءة، الأسطح) هي دوال قابلة للجمع والتكبير.",
        },
        {
          q: "Why are spaces of functions important in computer graphics?",
          options: [
            "They replace the need for coordinates",
            "Many objects we work with in graphics are functions",
            "Functions are always linear",
            "Functions never change",
          ],
          correct: 1,
          translation: "لماذا فضاءات الدوال مهمة في رسوميات الحاسوب؟",
          explanation:
            "لأن كثير من الكائنات اللي بنشتغل عليها في الرسوميات هي دوال — صور، إشعاع، أسطح، اهتزازات. وبالتالي بتتعامل معاها بأدوات الجبر الخطي.",
        },
        {
          q: "Which of the following is listed as an example of a function that behaves as a vector?",
          options: [
            "Only the size of a file",
            "Only memory addresses",
            "Only the keyboard state",
            "Images, radiance from a light source, surfaces, and modal vibrations",
          ],
          correct: 3,
          translation: "أي مما يلي ذُكر كمثال على دالة تتصرف كمتجه؟",
          explanation:
            "الصور + الإشعاع من مصدر ضوء + الأسطح + الاهتزازات النمطية — كلها دوال قابلة للجمع والتكبير، وبتتعامل كمتجهات.",
        },
        {
          q: "How can two functions be added, according to the lecture?",
          options: [
            "Add their values at each point x",
            "Multiply their graphs",
            "Take the maximum of the two graphs",
            "It is not possible to add functions",
          ],
          correct: 0,
          translation: "كيف يمكن جمع دالتين حسب المحاضرة؟",
          explanation:
            "اجمع قيمهما عند كل نقطة x — تعريف جمع الدوال نقطة بنقطة (Pointwise addition). الأساس اللي بيخلي الدوال فضاء متجهي.",
        },
        {
          q: "What is the 'zero vector' in a space of functions?",
          options: [
            "The function equal to one for all x",
            "There is no zero vector",
            "The function equal to zero for all x",
            "The function x",
          ],
          correct: 2,
          translation: "ما هو 'المتجه الصفري' في فضاء الدوال؟",
          explanation:
            "الدالة التي تساوي صفر لكل x — العنصر المحايد في الجمع. أي دالة تانية + الصفر = نفسها.",
        },
        {
          q: "Short answer given in the lecture: are functions vectors?",
          options: [
            "No, only arrows are vectors",
            "Only functions on [0,1] are",
            "Yes, even if they do not look like little arrows",
            "Only polynomial functions are",
          ],
          correct: 2,
          translation: "الإجابة القصيرة في المحاضرة: هل الدوال متجهات؟",
          explanation:
            "نعم، حتى لو مش شكلها أسهم — لأنها تحقق كل خصائص الفضاء المتجهي (جمع تبديلي، تكبير، عنصر محايد...).",
        },
        {
          q: "After coming up with a rule for adding pairs of numbers, how does the lecture check that it faithfully encodes the geometry of little arrows?",
          options: [
            "Test it on a single example only",
            "Check that it agrees with the list of rules the arrows must obey",
            "Draw it once and trust it",
            "Assume it works since it looks simple",
          ],
          correct: 1,
          translation:
            "بعد وضع قاعدة لجمع أزواج الأعداد، كيف تتحقق المحاضرة من أنها ترمّز هندسة الأسهم بأمانة؟",
          explanation:
            "التحقق إنها متفقة مع قائمة القواعد اللي لازم الأسهم تحققها. التحقق الرياضي أساسي — مش اختبار عيّنة واحدة.",
        },
        {
          q: "How are vectors added in Cartesian coordinates?",
          options: [
            "Component by component: (u1,u2) + (v1,v2) = (u1+v1, u2+v2)",
            "By adding the lengths only",
            "By multiplying the components",
            "By adding only the first components",
          ],
          correct: 0,
          translation: "كيف تُجمع المتجهات في الإحداثيات الديكارتية؟",
          explanation:
            "مركبة بمركبة: (u1,u2) + (v1,v2) = (u1+v1, u2+v2). ده تمثيل جبري للجمع الهندسي (رأس بذيل).",
        },
        {
          q: "According to the lecture, why is turning geometric observations into algebraic rules convenient?",
          options: [
            "It makes vectors non-commutative",
            "It is convenient for symbolic manipulation and numerical computation",
            "It is required by all graphics hardware",
            "It removes the need for geometry forever",
          ],
          correct: 1,
          translation:
            "حسب المحاضرة، لماذا تحويل الملاحظات الهندسية لقواعد جبرية مريح؟",
          explanation:
            "مريح للتلاعب الرمزي (Symbolic) والحسابات العددية (Numerical). الحاسوب بيتعامل مع الأرقام أحسن بكتير من الأشكال الهندسية.",
        },
        {
          q: "What should you always ask about a rule given to you by an authority?",
          options: [
            "Is it short enough to memorize?",
            "Who published it first?",
            "Where does this rule come from, and what does it mean geometrically (can you draw a picture)?",
            "Is it written in the textbook?",
          ],
          correct: 2,
          translation:
            "ما الذي يجب أن تسأله دائماً عن قاعدة تُعطى لك من مصدر موثوق؟",
          explanation:
            "من أين تأتي القاعدة، وما معناها هندسياً (هل تقدر ترسمها)؟ لا تقبل القواعد بدون فهم — الفهم أهم من الحفظ.",
        },
        {
          q: "How do we scale a vector in coordinates?",
          options: [
            "Divide the scalar by each component",
            "Add the scalar to each component",
            "Multiply each component by the scalar",
            "Multiply only the first component",
          ],
          correct: 2,
          translation: "كيف نكبّر متجهاً في الإحداثيات؟",
          explanation:
            "اضرب كل مركبة في العدد — نفس عملية الضرب القياسي بتم على كل مركبة على حدة. مثال: 3·(1,2) = (3,6).",
        },
        {
          q: "What is (3/2)·(4,2)?",
          options: ["(6, 3)", "(4, 3)", "(5.5, 3.5)", "(12, 6)"],
          correct: 0,
          translation: "ما هو (3/2)·(4,2)؟",
          explanation:
            "(3/2 × 4, 3/2 × 2) = (6, 3). الحساب مباشر مركبة بمركبة — تطبيق لقاعدة التكبير.",
        },
        {
          q: "The midpoint m of two points a and b is computed as:",
          options: ["m = 2(a + b)", "m = a − b", "m = ½(a + b)", "m = a · b"],
          correct: 2,
          translation: "نقطة المنتصف m بين نقطتين a و b تُحسب كالتالي:",
          explanation:
            "m = ½(a + b) — متوسط النقطتين. مثال مباشر على استخدام الجمع والتكبير لبناء عمليات مفيدة في الرسوميات.",
        },
        {
          q: "What is the midpoint of a = (3,4) and b = (7,2)?",
          options: ["(10, 6)", "(5, 3)", "(4, 2)", "(5, 6)"],
          correct: 1,
          translation: "ما هي نقطة المنتصف بين a = (3,4) و b = (7,2)؟",
          explanation:
            "(½(3+7), ½(4+2)) = (½·10, ½·6) = (5, 3). تطبيق مباشر للمعادلة m = ½(a+b).",
        },
        {
          q: "The midpoint example is used to show that:",
          options: [
            "Vectors cannot be added to points",
            "Combining vector operations builds up operations needed for computer graphics",
            "Midpoints cannot be computed with vectors",
            "Scaling is not a valid operation",
          ],
          correct: 1,
          translation: "مثال نقطة المنتصف يُستخدم لإظهار أن:",
          explanation:
            "دمج عمليات المتجهات يبني عمليات محتاجة في الرسوميات. نقطة المنتصف = جمع + تكبير — ودي أساس رسم كثير من الأشكال.",
        },
        {
          q: "What two quantities does a vector encode that we want to measure?",
          options: [
            "Orientation (direction) and magnitude",
            "Origin and destination only",
            "Mass and velocity",
            "Color and brightness",
          ],
          correct: 0,
          translation: "ما الكميتان اللي يشفّرهما المتجه واللي عايزين نقيسهما؟",
          explanation:
            "الاتجاه والمقدار — بنقدر نقيسهم بمعيار (Norm) المتجه، واللي هنشوفه بعد شوية.",
        },
        {
          q: "The number |v| assigned to a vector v is called its:",
          options: [
            "Basepoint",
            "Scalar field",
            "Component",
            "Length, magnitude, or norm",
          ],
          correct: 3,
          translation: "العدد |v| المخصص للمتجه v يُسمى:",
          explanation:
            "الطول أو المقدار أو المعيار (Norm). ثلاث مصطلحات لنفس المفهوم — بنستخدم أي واحد حسب السياق.",
        },
        {
          q: "Intuitively, the norm of a vector should capture:",
          options: [
            "Where it starts",
            "How 'big' the vector is",
            "Which direction it points",
            "How many components it has",
          ],
          correct: 1,
          translation: "بديهياً، معيار المتجه يجب أن يعبّر عن:",
          explanation:
            "حجم المتجه — قد إيه هو 'كبير'. مش اتجاهه ولا نقطة بدايته ولا عدد مركباته. ده جوهر مفهوم المعيار.",
        },
        {
          q: "Which natural property says the norm should not be negative?",
          options: [
            "Commutativity",
            "Positivity: |u| ≥ 0",
            "Triangle inequality",
            "Homogeneity: |cu| = |c||u|",
          ],
          correct: 1,
          translation: "أي خاصية طبيعية تقول إن المعيار لا يجب أن يكون سالباً؟",
          explanation:
            "الإيجابية: |u| ≥ 0 — الطول ما ينفعش يكون سالب، ومنطقياً |u| = 0 فقط للمتجه الصفري.",
        },
        {
          q: "A norm should be zero only for:",
          options: [
            "Every unit vector",
            "The zero vector",
            "Any vector in R²",
            "Every vector of length one",
          ],
          correct: 1,
          translation: "المعيار يجب أن يكون صفر فقط لـ:",
          explanation:
            "المتجه الصفري — أي متجه تاني لازم يكون له طول موجب. لو المعيار = 0 فده معناه إن المتجه صفر.",
        },
        {
          q: "If a vector is scaled by a factor c, its norm should:",
          options: [
            "Stay the same",
            "Become c²",
            "Scale by the same amount: |cu| = |c||u|",
            "Become negative",
          ],
          correct: 2,
          translation: "لو المتجه اتكبّر بمعامل c، فإن معياره يجب أن:",
          explanation:
            "يتكبّر بنفس المقدار: |cu| = |c||u| — خاصية التجانس (Homogeneity). مثال: |3·(4,0)| = 3·4 = 12.",
        },
        {
          q: "Which norm property expresses that the shortest path between two points is a straight line?",
          options: [
            "|u + v| ≤ |u| + |v|",
            "|u + v| = 0",
            "|u + v| ≥ |u| + |v|",
            "|u + v| = |u| · |v|",
          ],
          correct: 0,
          translation:
            "أي خاصية للمعيار تعبّر عن أن أقصر مسار بين نقطتين هو خط مستقيم؟",
          explanation:
            "متباينة المثلث: |u + v| ≤ |u| + |v| — المسار المباشر (u+v) أقصر من أو يساوي المسار غير المباشر (u ثم v).",
        },
        {
          q: "The slide says the final norm property is sometimes called the 'pentagon inequality' because:",
          options: [
            "It only applies in five dimensions",
            "The diagram looks like a pentagon",
            "It involves five vectors",
            "It was discovered by a mathematician named Penta",
          ],
          correct: 1,
          translation:
            "الشريحة بتقول إن خاصية المعيار الأخيرة بتُسمى أحياناً 'متباينة الخماسي' لأن:",
          explanation:
            "الرسم التوضيحي بيبان زي خماسي الأضلاع. اسم شكلي مش رياضي بحت — الاسم الرسمي متباينة المثلث.",
        },
        {
          q: "According to the formal definition, a norm is:",
          options: [
            "Only the length of an arrow in 2D",
            "Any function of a vector, with no conditions",
            "Any function that assigns a number to each vector and satisfies the norm properties for all vectors u, v and all scalars a",
            "Only the square root of a sum of squares",
          ],
          correct: 2,
          translation: "حسب التعريف الرسمي، المعيار هو:",
          explanation:
            "أي دالة تخصص عدداً لكل متجه وتحقق خصائص المعيار لكل المتجهات u, v وكل الأعداد a. التعريف قائم على الخصائص مش على صيغة محددة.",
        },
        {
          q: "Each norm rule has a concrete geometric picture that explains:",
          options: [
            "Which hardware to use",
            "Why the rule is there",
            "How to draw a texture",
            "How to avoid using it",
          ],
          correct: 1,
          translation: "كل قاعدة من قواعد المعيار لها صورة هندسية ملموسة تشرح:",
          explanation:
            "لماذا القاعدة موجودة — يعني مش مجرد قاعدة اعتباطية، لها معنى هندسي واضح تقدر ترسمه وتفهمه.",
        },
        {
          q: "What is the standard norm of n-vectors called?",
          options: [
            "The Manhattan norm",
            "The Euclidean norm",
            "The polar norm",
            "The L2 function norm",
          ],
          correct: 1,
          translation: "ما اسم المعيار القياسي للمتجهات ذات n من الأبعاد؟",
          explanation:
            "المعيار الإقليدي — الأشهر والأكثر استخداماً في الرسوميات والفيزياء والرياضيات التطبيقية.",
        },
        {
          q: "The Euclidean norm of u = (u1, …, un) is:",
          options: [
            "The product of the uᵢ",
            "The square root of the sum of uᵢ² (i = 1 to n)",
            "The largest uᵢ",
            "The sum of the uᵢ",
          ],
          correct: 1,
          translation: "المعيار الإقليدي لـ u = (u1, …, un) هو:",
          explanation:
            "جذر مجموع المربعات — تعميم لنظرية فيثاغورس على n من الأبعاد. الأساس في حساب المسافات والطول.",
        },
        {
          q: "What is the Euclidean norm of u = (4, 2)?",
          options: ["6", "2√5", "8", "√6"],
          correct: 1,
          translation: "ما هو المعيار الإقليدي لـ u = (4, 2)؟",
          explanation:
            "√(4² + 2²) = √(16 + 4) = √20 = √(4·5) = 2√5. تطبيق مباشر لنظرية فيثاغورس.",
        },
        {
          q: "The L² norm of functions measures:",
          options: [
            "The total magnitude of a function",
            "The slope at a single point",
            "The maximum input value",
            "The number of zeros of a function",
          ],
          correct: 0,
          translation: "معيار L² للدوال يقيس:",
          explanation:
            "المقدار الكلي للدالة — تعميم لفكرة حجم المتجه على الدوال. بيتعامل مع الدالة ككتلة كاملة مش كنقطة.",
        },
        {
          q: "The L² norm in the lecture is defined for functions on which domain?",
          options: [
            "All functions on the real line with no conditions",
            "Only integer-valued functions",
            "Only functions on [0,10]",
            "Real-valued functions on the unit interval [0,1] whose square has a well-defined integral",
          ],
          correct: 3,
          translation: "معيار L² في المحاضرة معرّف لدوال على أي نطاق؟",
          explanation:
            "دوال حقيقية على الفترة [0,1] ومربعها له تكامل محدد. الشرط ضروري لتعريف المعيار — لو التكامل مش موجود، المعيار مش معرّف.",
        },
        {
          q: "The L² norm of a function f on [0,1] is defined as:",
          options: [
            "The sum of f at the endpoints",
            "The integral of f(x) from 0 to 1",
            "The maximum of f(x)",
            "The square root of the integral of f(x)² from 0 to 1",
          ],
          correct: 3,
          translation: "معيار L² لدالة f على [0,1] يُعرّف كالتالي:",
          explanation:
            "جذر تكامل مربع الدالة من 0 لـ 1 — نفس فكرة المعيار الإقليدي بس بتكامل بدل جمع، وبنفس الترتيب (مربع → جمع/تكامل → جذر).",
        },
        {
          q: "How does the L² norm differ from the Euclidean norm, as described in the lecture?",
          options: [
            "We replaced the square root with a logarithm",
            "There is no relationship between them",
            "We replaced squares with cubes",
            "We just replaced a sum with an integral",
          ],
          correct: 3,
          translation:
            "كيف يختلف معيار L² عن المعيار الإقليدي كما هو موصوف في المحاضرة؟",
          explanation:
            "بس استبدلنا الجمع (Σ) بالتكامل (∫) — الفكرة الأساسية نفسها: مربع، ثم جمع/تكامل، ثم جذر. تمثيل موحّد.",
        },
        {
          q: "For f(x) = √3·x on [0,1], what is ||f||²?",
          options: ["√3", "3", "∫₀¹ 3x² dx = 1", "0"],
          correct: 2,
          translation: "لدالة f(x) = √3·x على [0,1]، ما هو ||f||²؟",
          explanation:
            "∫₀¹ (√3·x)² dx = ∫₀¹ 3x² dx = [x³]₀¹ = 1³ − 0³ = 1. الناتج النهائي هو 1.",
        },
        {
          q: "What is the L² norm ||f|| of f(x) = √3·x on [0,1]?",
          options: ["√3", "3", "0", "1"],
          correct: 3,
          translation: "ما هو معيار L² للدالة f(x) = √3·x على [0,1]؟",
          explanation:
            "||f|| = √(||f||²) = √1 = 1. الحساب مباشر بعد إيجاد ||f||² = 1.",
        },
        {
          q: "Which notation does the lecture use for the norm of a function versus the norm of a vector in Rⁿ?",
          options: [
            "Both use ||·||",
            "Both use |·|",
            "|·| for a function and ||·|| for a vector",
            "||·|| for a function and |·| for a vector in Rⁿ",
          ],
          correct: 3,
          translation:
            "أي ترميز تستخدمه المحاضرة لمعيار دالة مقابل معيار متجه في Rⁿ؟",
          explanation:
            "||·|| للدالة و |·| للمتجه في Rⁿ. التمييز مهم للوضوح الرياضي — بيميز بين فضاءات الدوال وفضاءات المتجهات العادية.",
        },
        {
          q: "What does the lecture say about how most integrals in graphics are calculated?",
          options: [
            "All are calculated by hand exactly",
            "They are never needed in graphics",
            "They are always replaced by matrices",
            "Most are not calculated analytically like this; numerical integration will be discussed later",
          ],
          correct: 3,
          translation:
            "ماذا تقول المحاضرة عن كيفية حساب معظم التكاملات في الرسوميات؟",
          explanation:
            "معظمها لا يُحسب تحليلياً زي كده؛ سيتم مناقشة التكامل العددي (Numerical Integration) لاحقاً — لأن التكاملات الفعلية في الرسوميات معقدة جداً.",
        },

        // ─── Essay ───
        {
          type: "essay",
          q: "Why is linear algebra important for computer graphics, according to the lecture?",
          translation: "لماذا الجبر الخطي مهم لرسوميات الحاسوب حسب المحاضرة؟",
          answer:
            "• It is an effective bridge between geometry, physics, etc., and computation.\n" +
            "• In many areas of graphics, once a problem is expressed in linear algebra, you are essentially done: you ask the computer to solve Ax = b.\n" +
            "• Fast numerical linear algebra has made modern computer graphics possible (image processing, physically-based animation, geometry processing).",
          tags: ["Lecture 2", "Linear algebra", "Motivation"],
          ref: "Lecture 2 — Linear Algebra",
        },
        {
          type: "essay",
          q: "Explain the two basic vector operations and the rules they obey, and where those rules come from. Why can functions also be treated as vectors?",
          translation:
            "اشرح عمليتي المتجهات الأساسيتين والقواعد اللي بيخضعوا ليها، ومن أين تأتي هذه القواعد. ولماذا يمكن معاملة الدوال كمتجهات؟",
          answer:
            "Two basic operations:\n" +
            "• Addition: place vectors end to end. It is commutative (abelian): u + v = v + u.\n" +
            "• Scaling: multiply a vector by a scalar a to get au. It behaves as expected, e.g., a(bu) = (ab)u.\n" +
            "• Interaction: a(u + v) = au + av.\n" +
            "\n" +
            "Where the rules come from:\n" +
            "• Each rule comes from the geometric behavior of 'little arrows'; the rules did not 'fall out of the sky'.\n" +
            "• Any collection of objects satisfying all the properties is a vector space, even if the objects do not look like arrows.\n" +
            "\n" +
            "Functions as vectors:\n" +
            "• Many objects in graphics are functions (images, radiance from a light source, surfaces, modal vibrations).\n" +
            "• Functions can be added and scaled, and the other properties hold too (e.g., the zero vector is the function equal to zero for all x), so functions are vectors.",
          tags: ["Lecture 2", "Vector spaces", "Functions as vectors"],
          ref: "Lecture 2 — Linear Algebra",
        },
        {
          type: "essay",
          q: "What properties should a norm satisfy? Give the Euclidean norm and the L² norm, with one worked example of each.",
          translation:
            "ما الخصائص اللي يجب أن يحققها المعيار؟ اذكر المعيار الإقليدي ومعيار L²، مع مثال محلول لكل منهما.",
          answer:
            "Natural properties of a norm:\n" +
            "• Positivity: |u| ≥ 0, and |u| = 0 only for the zero vector.\n" +
            "• Scaling: |cu| = |c||u|.\n" +
            "• Triangle inequality (the 'shortest path is a straight line' property): |u + v| ≤ |u| + |v|.\n" +
            "\n" +
            "Euclidean norm (vectors in Rⁿ):\n" +
            "• |u| = √(Σ uᵢ²). Example: u = (4,2) gives |u| = √(4² + 2²) = 2√5.\n" +
            "\n" +
            "L² norm (functions on [0,1]):\n" +
            "• ||f|| = √(∫₀¹ f(x)² dx), i.e., the Euclidean norm with a sum replaced by an integral.\n" +
            "• Example: f(x) = √3·x gives ||f||² = ∫₀¹ 3x² dx = [x³]₀¹ = 1, so ||f|| = 1.",
          tags: ["Lecture 2", "Norms", "Euclidean norm", "L2 norm"],
          ref: "Lecture 2 — Linear Algebra",
        },
      ],
    },
    {
      id: "computer-graphics-lecture-03",
      t: "المحاضرة 3: الجبر الخطي (Inner Product, Linear Maps, Span, Basis)",
      d: "الجزء الثاني من مراجعة الجبر الخطي: الـ inner product وخصائصه، الـ linear maps مقابل الـ affine، والـ span والـ basis والـ orthonormal basis.",
      notes: "البداية من صفحة 29 لحد 48.",
      pdf: "datenew/subjects/computer-graphics/lectures/Lecture 3/Lecture 3.pdf",
      pdf2: "datenew/subjects/computer-graphics/questions/Questions on each lecture/Lecture-03-Questions.pdf",
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية تشرح مفاهيم المتجهات، الفضاءات المتجهة، والعمليات الأساسية في الجبر الخطي",
          links: [
            {
              t: "SpicyCoders - المتجهات | Vectors | الجبر الخطى",
              d: "شرح تفصيلي لمفهوم المتجهات، المركبات الديكارتية، وحساب طول المتجه (Magnitude) والعمليات عليها",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=lMahHHwQ_Eo",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "د. أحمد حجاج - الجبر الخطي (فيديوهات التركيبات والفضاءات المتجهة)",
              d: "شرح أكاديمي للتركيبات الخطية (Linear Combinations) والاستقلال الخطي ومجموعات التوليد",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 فتح قائمة التشغيل",
                  url: "https://www.youtube.com/playlist?list=PLxIvc-MGOs6iQXFnjF_STbhGdrZBphrv_",
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
            "محاضرات أكاديمية رسمية من جامعة كارنيغي ميلون (CMU) وسلسلة 3Blue1Brown الهندسية المرئية",
          links: [
            {
              t: "Prof. Keenan Crane - CMU 15-462 Math Review Part I: Linear Algebra",
              d: "المحاضرة الأكاديمية الرسمية لمؤلف الشرائح تشمل المتجهات، الفضاءات المتجهة، المعيار، والجداء الداخلي",
              icon: "🌍",
              actions: [
                {
                  label: "🎬 مشاهدة المحاضرة",
                  url: "https://youtu.be/2c8XQlQApx8",
                  type: "view",
                  color: "red",
                },
                {
                  label: "🌐 الموقع الرسمي للمساق",
                  url: "http://15462.courses.cs.cmu.edu/fall2020/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "3Blue1Brown - Essence of Linear Algebra",
              d: "سلسلة مرئية تفاعلية تشرح جوهر المتجهات، الفضاءات، المعيار (Norm)، والضرب القياسي (Dot Product)",
              icon: "🌍",
              actions: [
                {
                  label: "📖 فتح القائمة",
                  url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
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
            "مقالات هندسية متخصصة تربط بين الرياضيات والرسوميات الحاسوبية",
          links: [
            {
              t: "Scratchapixel - Geometry: Points, Vectors and Norms",
              d: "مرجع متقدم يشرح تمثيل النقاط، المتجهات، المعايير (Norms)، والعمليات الرياضية المستخدمة في محركات الرسوميات ثلاثية الأبعاد",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.scratchapixel.com/lessons/mathematics-physics-for-computer-graphics/geometry/points-vectors-and-normals.html",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Khan Academy - Linear Algebra",
              d: "مراجعة شاملة ومبسطة لمفاهيم المتجهات، الفضاءات الجزئية، والتحويلات الخطية",
              icon: "📚",
              actions: [
                {
                  label: "🌐 زيارة الموقع",
                  url: "https://www.khanacademy.org/math/linear-algebra",
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
            "أدوات تفاعلية لمحاكاة العمليات على المتجهات والتحويلات الرياضية هندسياً",
          links: [
            {
              t: "PhET Interactive Simulation - Vector Addition",
              d: "أداة محاكاة تفاعلية لجمع المتجهات، قياس المعيار، وتحليل المركبات في الفضاء الثنائي والثلاثي",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح المحاكاة",
                  url: "https://phet.colorado.edu/en/simulations/vector-addition",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "GeoGebra 3D Visualizer",
              d: "بيئة تفاعلية ثلاثية الأبعاد لبناء المتجهات، حساب الجداء الداخلي، وتصور الفضاءات المتجهة هندسياً",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة 3D",
                  url: "https://www.geogebra.org/3d",
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
          q: "1. Which of the following are other names for the inner product?",
          options: [
            "Cross product and vector product",
            "Outer product and tensor product",
            "Scalar product and dot product",
            "Matrix product and norm product",
          ],
          correct: 2,
          translation: "إيه الأسماء التانية للـ inner product؟",
          explanation:
            "الـ inner product بيتسمى كمان scalar product أو dot product (وبيتكتب <u,v> أو u•v). الـ cross product شيء مختلف وبيطلّع vector مش رقم.",
          tags: ["Inner Product", "Dot Product"],
          ref: "Lecture 03 — Slide 30",
        },

        {
          q: "2. What does the inner product measure, in contrast to the norm?",
          options: [
            'How well two vectors "line up" (their alignment)',
            "The length of a single vector",
            "The area enclosed by two vectors",
            "The number of components in a vector",
          ],
          correct: 0,
          translation: "الـ inner product بيقيس إيه، بعكس الـ norm؟",
          explanation:
            "الـ norm بيقيس الطول، أما الـ inner product فبيقيس مدى توافق اتجاه (orientation) متجهين مع بعض. الاختيارين الأول والتاني بيتكلموا عن الطول والمساحة، مش عن التوافق.",
          tags: ["Inner Product", "Orientation"],
          ref: "Lecture 03 — Slide 29",
        },

        {
          q: "3. Which equation expresses the symmetry property of the inner product?",
          options: [
            "<u,v> = -<v,u>",
            "<u,v> = <u,u>",
            "<u,v> = 0 for all u,v",
            "<u,v> = <v,u>",
          ],
          correct: 3,
          translation: "أنهي معادلة بتعبّر عن خاصية التماثل (symmetry)؟",
          explanation:
            "الترتيب مش مهم: u متوافق مع v بنفس قدر توافق v مع u. المعادلة التانية معناها إن الترتيب بيعكس الإشارة وده غلط.",
          tags: ["Symmetry"],
          ref: "Lecture 03 — Slide 30",
        },

        {
          q: "4. For unit vectors |u| = |v| = 1, the inner product <u,v> measures:",
          options: [
            "The sum of the lengths of the two vectors",
            "The extent of one vector along the direction of the other",
            "The distance between the tips of the vectors",
            "The volume spanned by the two vectors",
          ],
          correct: 1,
          translation:
            "لو u و v طولهم 1 (unit vectors)، الـ inner product بيقيس إيه؟",
          explanation:
            "للـ unit vectors بيمثل الـ inner product امتداد (projection) متجه على اتجاه التاني. مجموع الأطوال أو المسافة بين الرأسين مش هو اللي بيقيسه.",
          tags: ["Projection", "Unit Vector"],
          ref: "Lecture 03 — Slide 31",
        },

        {
          q: "5. If we scale the vector u by a factor of 2, what happens to the inner product <u,v>?",
          options: [
            "It is also multiplied by 2",
            "It stays the same",
            "It is divided by 2",
            "It is squared",
          ],
          correct: 0,
          translation: "لو ضربنا u في 2، إيه اللي بيحصل للـ <u,v>؟",
          explanation:
            "خاصية الـ scaling: لو كبّرنا أي متجه، الـ inner product بيكبر بنفس المعامل. فبيتضاعف مش بيثبت ولا بيتربّع.",
          tags: ["Scaling"],
          ref: "Lecture 03 — Slide 31",
        },

        {
          q: "6. What does the positivity property require of <u,u>?",
          options: [
            "It should always be negative",
            "It should always be exactly zero",
            "It should be positive (or at least non-negative)",
            "It should always equal 1",
          ],
          correct: 2,
          translation: "خاصية الـ positivity بتطلب إيه من <u,u>؟",
          explanation:
            "المتجه لازم يكون متوافق مع نفسه، فالـ inner product بتاعه مع نفسه لازم يبقى موجب أو على الأقل غير سالب. القيمة 1 بتنطبق على الـ unit vectors بس.",
          tags: ["Positivity"],
          ref: "Lecture 03 — Slide 32",
        },

        {
          q: "7. If we define |u| = sqrt(<u,u>), then <u,u> is equal to:",
          options: [
            "|u|, the length of u",
            "|u|^2, the squared length of u",
            "2|u|",
            "1 for every vector u",
          ],
          correct: 1,
          translation: "لو عرّفنا |u| = sqrt(<u,u>)، يبقى <u,u> بتساوي إيه؟",
          explanation:
            "من تعريف الـ norm، تربيع الطرفين بيدّي <u,u> = |u|^2. الاختيار الأخير صح للـ unit vectors بس.",
          tags: ["Norm", "Positivity"],
          ref: "Lecture 03 — Slide 32",
        },

        {
          q: "8. According to the formal definition, an inner product is any function that assigns to two vectors u, v:",
          options: [
            "Another vector w of the same length",
            "A matrix of size n x n",
            "A set of basis vectors",
            "A number <u,v> satisfying certain properties",
          ],
          correct: 3,
          translation:
            "حسب التعريف الرسمي، الـ inner product هو أي دالة بتدّي لأي متجهين u و v إيه؟",
          explanation:
            "التعريف بيقول إنه دالة بترجّع رقم (scalar) يحقق مجموعة خصائص. مش بترجّع متجه ولا مصفوفة.",
          tags: ["Inner Product", "Definition"],
          ref: "Lecture 03 — Slide 33",
        },

        {
          q: "9. The Euclidean inner product of two n-vectors u and v is defined as:",
          options: [
            "The sum over i of u_i + v_i",
            "The product over i of u_i * v_i",
            "The sum over i of (u_i - v_i)^2",
            "The sum over i of u_i * v_i",
          ],
          correct: 3,
          translation:
            "الـ Euclidean inner product لمتجهين n-vectors بيتعرّف إزاي؟",
          explanation:
            "بنضرب المركّبات المتناظرة ونجمع النواتج. الجمع بدل الضرب أو الضرب الكلي أو مربع الفرق (ده مربع المسافة) كلهم غلط.",
          tags: ["Euclidean", "Cartesian"],
          ref: "Lecture 03 — Slide 34",
        },

        {
          q: "10. For u = (4,1) and v = (1,3), the Euclidean inner product <u,v> is:",
          options: ["12", "7", "8", "4"],
          correct: 1,
          translation: "لو u = (4,1) و v = (1,3)، قيمة <u,v> كام؟",
          explanation:
            "<u,v> = 4*1 + 1*3 = 4 + 3 = 7. الرقم 12 ناتج 4*3 بالغلط، و8 ناتج جمع كل الأرقام.",
          tags: ["Euclidean", "Example"],
          ref: "Lecture 03 — Slide 34",
        },

        {
          q: "11. For the L2 inner product of two functions, a small value means:",
          options: [
            'The functions do not "line up" much',
            "The functions are identical",
            "Both functions are constant",
            "Both functions have a large norm",
          ],
          correct: 0,
          translation:
            "في الـ L2 inner product لدالتين، القيمة الصغيرة معناها إيه؟",
          explanation:
            "زي المتجهات، القيمة الصغيرة معناها إن الدالتين مش متوافقتين كتير. التطابق بيدّي قيمة كبيرة.",
          tags: ["L2 Inner Product", "Functions"],
          ref: "Lecture 03 — Slide 35",
        },

        {
          q: "12. Measuring the norm of the derivative of an image mainly captures:",
          options: [
            "Overall brightness",
            "The file size",
            "Edges",
            "The image resolution",
          ],
          correct: 2,
          translation: "قياس norm مشتقة الصورة بيلقط إيه أساسًا؟",
          explanation:
            "المشتقة بتكبر عند التغيّر السريع في القيم، يعني عند الحواف. السطوع مش هو اللي بتقيسه المشتقة.",
          tags: ["Derivative", "Edges"],
          ref: "Lecture 03 — Slide 36",
        },

        {
          q: "13. A smooth blue-sky image with few details will have a derivative norm that is:",
          options: [
            "Larger than that of a detailed image",
            "Exactly infinite",
            "Smaller than that of a detailed image",
            "Always equal to its brightness",
          ],
          correct: 2,
          translation:
            "صورة سما زرقاء ناعمة من غير تفاصيل، الـ norm بتاع مشتقتها هيكون:",
          explanation:
            "السما فيها حواف قليلة جدًا فالمشتقة صغيرة، أما صورة الكلب المفصّلة فمشتقتها أكبر.",
          tags: ["Images", "Norm of Derivative"],
          ref: "Lecture 03 — Slide 36",
        },

        {
          q: "14. According to the lecture, the choice of inner product depends on:",
          options: [
            "The application",
            "The number of pixels in the image",
            "The programming language used",
            "Nothing, there is only one valid choice",
          ],
          correct: 0,
          translation: "حسب المحاضرة، اختيار الـ inner product بيعتمد على إيه؟",
          explanation:
            "في طرق كتير لقياس الحجم والتوافق، والاختيار بيتحدد حسب التطبيق. مفيش اختيار واحد صالح للكل.",
          tags: ["Inner Product", "Signals"],
          ref: "Lecture 03 — Slide 36",
        },

        {
          q: "15. Which of the following is NOT given as a reason why linear maps are useful for graphics?",
          options: [
            "Systems of linear equations are easy to solve computationally",
            "Rotation, translation and scaling can be expressed as linear maps",
            "Maps can be approximated as linear maps over short distances or times",
            "Linear maps always preserve the distances between points",
          ],
          correct: 3,
          translation:
            "أنهي واحدة دي مش من الأسباب اللي ذكرتها المحاضرة لفايدة الـ linear maps؟",
          explanation:
            "الأسباب هي: سهولة حل المعادلات الخطية، تمثيل التحويلات الأساسية، والتقريب الخطي محليًا. حفظ المسافات مش خاصية عامة للـ linear maps (التكبير مثلًا بيغيّرها).",
          tags: ["Linear Maps", "Graphics"],
          ref: "Lecture 03 — Slide 37",
        },

        {
          q: "16. Which theorem justifies approximating a general map by a linear map over a short distance?",
          options: [
            "Pythagorean theorem",
            "Taylor's theorem",
            "Fundamental theorem of algebra",
            "Central limit theorem",
          ],
          correct: 1,
          translation:
            "أنهي نظرية بتبرر تقريب أي map بـ linear map على مسافة قصيرة؟",
          explanation:
            "نظرية تايلور هي اللي ذكرتها المحاضرة، وبتتستخدم في الهندسة والأنيميشن والرندرنج ومعالجة الصور.",
          tags: ["Taylor", "Linear Approximation"],
          ref: "Lecture 03 — Slide 37",
        },

        {
          q: "17. Geometrically, the key idea of a linear map is that it:",
          options: [
            "Takes lines to curves while keeping the origin fixed",
            "Takes lines to lines while keeping the origin fixed",
            "Takes lines to lines but moves the origin",
            "Keeps all angles between lines unchanged",
          ],
          correct: 1,
          translation: "هندسيًا، الفكرة الأساسية للـ linear map إنه:",
          explanation:
            "الـ linear map بيحوّل الخطوط لخطوط ويفضّل f(0) = 0. الـ nonlinear map هو اللي بيحوّل الخطوط لمنحنيات.",
          tags: ["Linear Map", "Geometry"],
          ref: "Lecture 03 — Slide 38",
        },

        {
          q: "18. Which pair of conditions defines a linear map f algebraically?",
          options: [
            "f(u+v) = f(u) f(v) and f(au) = f(u) + a",
            "f(u+v) = f(u) + f(v) and f(0) = 1",
            "f(au) = f(u)^a and f(u+v) = f(u)",
            "f(u+v) = f(u) + f(v) and f(au) = a f(u)",
          ],
          correct: 3,
          translation: "أنهي زوج من الشروط بيعرّف الـ linear map جبريًا؟",
          explanation:
            "لازم الجمع والضرب في scalar يتبادلوا مع الـ map: نجمع ثم نطبّق f يساوي نطبّق f ثم نجمع، ونفس الشيء للـ scaling.",
          tags: ["Linear Map", "Algebraic Definition"],
          ref: "Lecture 03 — Slide 40",
        },

        {
          q: "19. For maps between R^m and R^n, a map is linear if it can be written as:",
          options: [
            "f(u_1,...,u_m) = sum of u_i * a_i for fixed vectors a_i",
            "f(u_1,...,u_m) = sum of u_i^2 for all i",
            "f(u_1,...,u_m) = u_1 * u_2 * ... * u_m",
            "f(u_1,...,u_m) = a + sum of u_i",
          ],
          correct: 0,
          translation:
            "للـ maps بين R^m و R^n، الـ map يبقى linear لو اتكتب كـ:",
          explanation:
            "الـ map الخطي هو توليفة خطية (linear combination) من مجموعة ثابتة من المتجهات a_i. الصيغ التانية فيها تربيع أو ضرب أو ثابت مضاف.",
          tags: ["Linear Combination", "Coordinates"],
          ref: "Lecture 03 — Slide 41",
        },

        {
          q: "20. Why is f(x) = ax + b (with b not equal to 0) NOT a linear function?",
          options: [
            "Because its graph is not a straight line",
            "Because it is not defined at x = 0",
            "Because f(0) is not 0, and it does not preserve sums",
            "Because a must be negative",
          ],
          correct: 2,
          translation: "ليه f(x) = ax + b (لما b مش صفر) مش دالة خطية؟",
          explanation:
            "الرسم بتاعها خط مستقيم فبيخدع، لكن مش بيعدّي بنقطة الأصل وفيه f(x+y) ≠ f(x)+f(y). دي اسمها affine function.",
          tags: ["Affine", "Linear"],
          ref: "Lecture 03 — Slide 43",
        },

        {
          q: "21. Which trick lets graphics turn affine functions such as translation into linear ones?",
          options: [
            "Homogeneous coordinates",
            "Polar coordinates",
            "Taylor expansion",
            "Orthonormal projection",
          ],
          correct: 0,
          translation:
            "أنهي حيلة بتخلّي الـ affine functions زي الـ translation تتحول لـ linear؟",
          explanation:
            "المحاضرة وعدت إننا هنشوف الـ homogeneous coordinates كحيلة مهمة في الجرافيكس لتحويل الـ affine لـ linear.",
          tags: ["Homogeneous Coordinates", "Translation"],
          ref: "Lecture 03 — Slide 43",
        },

        {
          q: "22. Geometrically, the span of two non-parallel vectors u, v in the plane is:",
          options: [
            "Only the vectors u and v themselves",
            "The set of all vectors of the form au + bv",
            "Only the vectors of unit length",
            "The single point at the origin",
          ],
          correct: 1,
          translation:
            "هندسيًا، الـ span لمتجهين u و v مش متوازيين في المستوى هو:",
          explanation:
            "الـ span هو كل المتجهات اللي ممكن تتكتب كتوليفة خطية au + bv لأي رقمين a و b.",
          tags: ["Span", "Linear Combination"],
          ref: "Lecture 03 — Slide 45",
        },

        {
          q: "23. The image of any linear map is:",
          options: [
            "Always a single vector",
            "Always the whole target space",
            "The span of some collection of vectors",
            "The set of unit vectors only",
          ],
          correct: 2,
          translation: "الـ image لأي linear map هو:",
          explanation:
            "المحاضرة بتربط بين الاتنين: الـ image هو الـ span لمجموعة متجهات (مثلًا a1 و a2). مش لازم يغطي الفضاء كله.",
          tags: ["Image", "Span"],
          ref: "Lecture 03 — Slide 46",
        },

        {
          q: "24. Exactly n vectors e_1,...,e_n whose span is R^n are called:",
          options: [
            "An orthogonal complement",
            "An affine map",
            "A scalar product",
            "A basis for R^n",
          ],
          correct: 3,
          translation: "n متجه بالظبط الـ span بتاعهم هو R^n بيتسموا:",
          explanation:
            "لو عندنا n متجه بالظبط وبيولّدوا R^n كله، يبقوا basis. ولاحظ إن فيه اختيارات كتير للـ basis.",
          tags: ["Basis", "Span"],
          ref: "Lecture 03 — Slide 47",
        },

        {
          q: "25. An orthonormal basis consists of vectors that are:",
          options: [
            "Mutually parallel and of unit length",
            "Unit length and mutually orthogonal",
            "Orthogonal but of arbitrary lengths",
            "Of equal length but not necessarily orthogonal",
          ],
          correct: 1,
          translation: "الـ orthonormal basis متكوّن من متجهات:",
          explanation:
            "الـ orthonormal معناها unit length (normal) + متعامدة على بعض (ortho). لو ناقص شرط يبقى مش orthonormal.",
          tags: ["Orthonormal Basis"],
          ref: "Lecture 03 — Slide 48",
        },

        {
          type: "essay",
          q: "1. Explain the motivation for the inner product and how it relates to the norm.",
          translation:
            "اشرح الدافع لاستخدام الـ inner product وعلاقته بالـ norm.",
          answer:
            "Besides magnitude, vectors have orientation.\n" +
            'The norm measures length; the inner product measures how well two vectors "line up".\n' +
            "Similar-looking vectors (or images) give a large alignment; very different ones give a small one.\n" +
            "It is also called the scalar product or dot product, written <u,v> or u.v.",
          tags: ["Inner Product", "Norm"],
          ref: "Lecture 03 — Slide 29",
        },

        {
          type: "essay",
          q: "2. What natural properties do we expect from a measure of alignment (symmetry, scaling, positivity)? Explain each geometrically.",
          translation:
            "إيه الخصائص الطبيعية المتوقعة من مقياس التوافق (symmetry, scaling, positivity)؟ اشرح كل واحدة هندسيًا.",
          answer:
            "Symmetry: <u,v> = <v,u>, since u is as aligned with v as v is with u (renaming vectors changes nothing).\n" +
            "Scaling: for unit vectors the inner product is the extent of one vector along the other; scaling a vector scales the inner product.\n" +
            "Positivity: a vector is always aligned with itself, so <u,u> is positive (or at least non-negative).",
          tags: ["Symmetry", "Scaling", "Positivity"],
          ref: "Lecture 03 — Slide 30 to Slide 32",
        },

        {
          type: "essay",
          q: "3. Show why <u,u> equals the squared norm |u|^2.",
          translation: "وضّح ليه <u,u> بتساوي مربع الـ norm يعني |u|^2.",
          answer:
            "For a unit vector, a vector is fully aligned with itself, so <u,u> = 1.\n" +
            "Writing any u as |u| times a unit vector and using the scaling property gives <u,u> = |u|^2.\n" +
            "Hence |u| = sqrt(<u,u>): the inner product defines the length.",
          tags: ["Norm", "Positivity"],
          ref: "Lecture 03 — Slide 32",
        },

        {
          type: "essay",
          q: "4. Define the Euclidean inner product and compute it for u = (4,1), v = (1,3).",
          translation:
            "عرّف الـ Euclidean inner product واحسبه لـ u = (4,1) و v = (1,3).",
          answer:
            "For n-vectors: <u,v> = sum_{i=1..n} u_i v_i.\n" +
            "Example: <u,v> = 4*1 + 1*3 = 7.",
          tags: ["Euclidean", "Example"],
          ref: "Lecture 03 — Slide 34",
        },

        {
          type: "essay",
          q: "5. Explain the L2 inner product of functions and what it measures.",
          translation: "اشرح الـ L2 inner product للدوال وبيقيس إيه.",
          answer:
            'Just as for vectors, we can define an inner product for functions that measures how well two functions "line up".\n' +
            "It is defined for square-integrable functions, e.g. on the unit interval.\n" +
            "A small value means the functions do not line up much.",
          tags: ["L2", "Functions"],
          ref: "Lecture 03 — Slide 35",
        },

        {
          type: "essay",
          q: "6. How can the norm of a derivative be used to measure images? Give an example.",
          translation: "إزاي ممكن نستخدم norm المشتقة لقياس الصور؟ مثال.",
          answer:
            'To find images with "interesting stuff", measure the norm of the derivative, which captures edges.\n' +
            "A detailed image (dog with a plaid coat) has a larger derivative norm.\n" +
            "A smooth blue sky has a smaller one.\n" +
            "The choice of inner product or norm depends on the application.",
          tags: ["Derivative", "Images"],
          ref: "Lecture 03 — Slide 36",
        },

        {
          type: "essay",
          q: "7. Why are linear maps useful in graphics? List the reasons given in the lecture.",
          translation:
            "ليه الـ linear maps مفيدة في الجرافيكس؟ اذكر الأسباب في المحاضرة.",
          answer:
            "1) Systems of linear equations are easy to solve computationally.\n" +
            "2) Basic transformations (rotation, translation, scaling) can be expressed as linear maps.\n" +
            "3) Any map can be approximated by a linear map over a short distance/time (Taylor's theorem), used in geometry, animation, rendering and image processing.",
          tags: ["Linear Maps", "Graphics"],
          ref: "Lecture 03 — Slide 37",
        },

        {
          type: "essay",
          q: "8. Define a linear map geometrically and algebraically.",
          translation: "عرّف الـ linear map هندسيًا وجبريًا.",
          answer:
            "Geometric: linear maps take lines to lines while keeping the origin fixed, so f(0) = 0.\n" +
            "Algebraic: f maps vectors to vectors and f(u+v) = f(u) + f(v), f(au) = a f(u).\n" +
            "In coordinates (R^m to R^n): f(u_1,...,u_m) = sum u_i a_i, a linear combination of fixed vectors a_i.",
          tags: ["Linear Map", "Definition"],
          ref: "Lecture 03 — Slide 38 to Slide 41",
        },

        {
          type: "essay",
          q: "9. Explain the difference between linear and affine maps using f(x) = ax + b.",
          translation:
            "اشرح الفرق بين الـ linear و الـ affine باستخدام f(x) = ax + b.",
          answer:
            "The graph is a line, but it does not pass through the origin: f(0) = b, not 0 (for b not 0).\n" +
            "It also does not preserve sums: f(x+y) = a(x+y)+b, while f(x)+f(y) = a(x+y)+2b.\n" +
            "So it is affine, not linear.\n" +
            "Homogeneous coordinates turn affine functions such as translation into linear ones.",
          tags: ["Affine", "Linear"],
          ref: "Lecture 03 — Slide 42 to Slide 43",
        },

        {
          type: "essay",
          q: "10. Explain span, basis and orthonormal basis, and the common bug related to non-orthonormal bases.",
          translation:
            "اشرح الـ span والـ basis والـ orthonormal basis، والغلطة الشائعة مع الـ basis غير orthonormal.",
          answer:
            "Span: all linear combinations of the vectors, e.g. au + bv; the image of a linear map is a span.\n" +
            "Basis: exactly n vectors whose span is R^n (many choices exist).\n" +
            "Orthonormal basis: vectors are unit length and mutually orthogonal, so the sum u_1^2+...+u_n^2 stays the length of u.\n" +
            "Common bug: projecting a vector onto a basis that is NOT orthonormal while still using the standard norm / inner product.",
          tags: ["Span", "Basis", "Orthonormal"],
          ref: "Lecture 03 — Slide 45 to Slide 48",
        },

        {
          type: "essay",
          q: "11. Compute the Euclidean inner product of u = (2,3) and v = (5,-1).",
          translation:
            "احسب الـ Euclidean inner product لـ u = (2,3) و v = (5,-1).",
          answer:
            "Given: u = (2,3), v = (5,-1).\n" +
            "Law: <u,v> = u_1 v_1 + u_2 v_2.\n" +
            "<u,v> = 2*5 + 3*(-1) = 10 - 3 = 7.",
          tags: ["Euclidean", "Calculation"],
          ref: "Lecture 03 — Slide 34",
        },

        {
          type: "essay",
          q: "12. For u = (3,4), compute <u,u> and the norm |u| using |u| = sqrt(<u,u>).",
          translation:
            "لـ u = (3,4) احسب <u,u> والـ norm |u| باستخدام |u| = sqrt(<u,u>).",
          answer:
            "Law: <u,u> = u_1^2 + u_2^2 and |u| = sqrt(<u,u>).\n" +
            "<u,u> = 3^2 + 4^2 = 9 + 16 = 25.\n" +
            "|u| = sqrt(25) = 5.",
          tags: ["Norm", "Calculation"],
          ref: "Lecture 03 — Slide 32",
        },

        {
          type: "essay",
          q: "13. Given <u,v> = 7 for u = (4,1), v = (1,3), compute <3u, v> and <u, 2v> using the scaling property, then verify <3u, v> directly.",
          translation:
            "لو <u,v> = 7 لـ u = (4,1) و v = (1,3)، احسب <3u,v> و <u,2v> بخاصية الـ scaling وتحقق من <3u,v> مباشرة.",
          answer:
            "Law (scaling): <au,v> = a<u,v> = <u,av>.\n" +
            "<3u,v> = 3*7 = 21; <u,2v> = 2*7 = 14.\n" +
            "Check: 3u = (12,3), so <3u,v> = 12*1 + 3*3 = 21.",
          tags: ["Scaling", "Calculation"],
          ref: "Lecture 03 — Slide 31",
        },

        {
          type: "essay",
          q: "14. Show that f(x) = 2x + 3 is not linear by testing f(0) and f(1+2) versus f(1)+f(2).",
          translation:
            "وضّح إن f(x) = 2x + 3 مش linear باختبار f(0) و f(1+2) مقابل f(1)+f(2).",
          answer:
            "Law: a linear map needs f(0) = 0 and f(u+v) = f(u) + f(v).\n" +
            "f(0) = 3, which is not 0.\n" +
            "f(1+2) = f(3) = 9, but f(1) + f(2) = 5 + 7 = 12.\n" +
            "Since 9 is not 12, f is not linear (it is affine).",
          tags: ["Affine", "Calculation"],
          ref: "Lecture 03 — Slide 43",
        },

        {
          type: "essay",
          q: "15. Let f: R^2 -> R^3 be linear with a1 = (1,0,2) and a2 = (0,1,1). Compute f(u) for u = (3,2).",
          translation:
            "لو f: R^2 -> R^3 خطية و a1 = (1,0,2) و a2 = (0,1,1)، احسب f(u) لـ u = (3,2).",
          answer:
            "Law: f(u) = u_1 a_1 + u_2 a_2.\n" +
            "f(u) = 3*(1,0,2) + 2*(0,1,1) = (3,0,6) + (0,2,2) = (3,2,8).",
          tags: ["Linear Map", "Calculation"],
          ref: "Lecture 03 — Slide 41",
        },
      ],
    },
    {
      id: "computer-graphic-lecture-04",
      t: "المحاضرة 4: رسم المثلث (Drawing a Triangle) ومقدمة في الـ Sampling",
      d: "الـ Rasterization، لماذا المثلثات، مشكلة الـ Visibility (Coverage و Occlusion)، الـ Sampling و الـ Reconstruction، وقواعد كسر التعادل (Top/Left edge).",
      pdf: "datenew/subjects/computer-graphics/lectures/Lecture 4/Lecture 4.pdf",
      pdf2: "/datenew/subjects/computer-graphics/questions/Questions on each lecture/Lecture-04-Questions.pdf",
      // CMU 15-462/662: Drawing a Triangle (and an Intro to Sampling) - Rasterization Pipeline & Sampling Theory

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "مجموعة من الفيديوهات والدروس المصورة باللغة العربية الشارحة لخط أنابيب الرسومات، التظبيط النقطي، وآليات معالجة الشظايا.",
          links: [
            {
              t: "شرح مسار الرسومات وعملية التظبيط النقطي (Vulkan Graphics Pipeline & Rasterization)",
              d: "فيديو باللغة العربية يوضح مراحل انتقال البيانات الرسومية وتطبيق عمليات التظبيط النقطي وتحويل الأشكال الهندسية إلى شظايا.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 مشاهدة الشرح",
                  url: "https://www.youtube.com/watch?v=j0S-oDMoPkI",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح مسار الرسومات ثنائي الأبعاد والتحويلات الهندسية (2D Graphics Pipeline)",
              d: "شرح عربي مخصص لمراحل خط أنابيب الرسومات والتحويلات الهندسية ومبادئ الإسقاط وعرض العناصر على شبكة البكسلات.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 مشاهدة الكورس",
                  url: "https://www.youtube.com/watch?v=dBweQJFczmk",
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
            "محاضرات كبرى الجامعات والشروحات العالمية المتقدمة المتخصصة في خوارزميات التظبيط النقطي ونظرية المعاينة.",
          links: [
            {
              t: "CMU 15-462/662: Triangle Rasterization & Barycentric Coordinates",
              d: "المحاضرة الأكاديمية الرسمية من جامعة كارنيجي ميلون للبروفيسور كينان كراين التي تشرح خوارزميات التظبيط النقطي، الإحداثيات الباريسنترية، ونظرية المعاينة.",
              icon: "🌍",
              actions: [
                {
                  label: "🚀 Watch Lecture",
                  url: "https://www.youtube.com/watch?v=aNpBlGbZ6tw",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "3D Graphics Pipeline & Rasterization from Scratch",
              d: "فيديو عالمي يقدم تطبيقاً عملياً لبناء محرك رسومات برمجي واختبار تغطية البكسلات وحساب الإحداثيات المنظورية.",
              icon: "🌍",
              actions: [
                {
                  label: "🚀 Watch Video",
                  url: "https://www.youtube.com/watch?v=x2bMBwu3hiM",
                  type: "view",
                  color: "orange",
                },
              ],
            },
          ],
        },
        {
          category: "مواقع ومراجع",
          icon: "📚",
          description:
            "توثيقات ومقالات أكاديمية متقدمة توضح الرياضيات خلف الإسقاط المنظوري وخوارزميات اختبار الحواف واختبار العمق.",
          links: [
            {
              t: "Scratchapixel: An Overview of the Rasterization Algorithm",
              d: "مرجع أكاديمي شامل يشرح تحويل الإحداثيات من الفضاء الثلاثي إلى فضاء الشاشة، واختبار حواف المثلثات، وحل مشكلة التحجب والعمق.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح المقال الأكاديمي",
                  url: "https://www.scratchapixel.com/lessons/3d-basic-rendering/rasterization-practical-implementation/overview-rasterization-algorithm.html",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "GeeksforGeeks: OpenGL Rendering Pipeline & Rasterization Overview",
              d: "مقال تعليمي منظم يغطي خط أنابيب OpenGL ورسم المثلثات، وتحويل الرؤوس إلى شظايا، واختبارات Depth & Stencil Test.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح الدرس",
                  url: "https://www.geeksforgeeks.org/blogs/opengl-rendering-pipeline-overview/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "LearnOpenGL: The Graphics Pipeline & Rasterization Stage",
              d: "الدليل المرجعي الأساسي لـ OpenGL الحديث الشارح لخط الأنابيب الرسومي والتجميع البدائي ومراحل التظبيط النقطي.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 قراءة المرجع",
                  url: "https://learnopengl.com/Getting-started/Hello-Triangle",
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
            "محاكيات تفاعلية وأدوات ويب تسمح باختبار وتتبع خوارزميات التظبيط النقطي وتقسيم البكسلات في الزمن الحقيقي.",
          links: [
            {
              t: "TinyDiffRast: Interactive Triangle Rasterization Simulator",
              d: "مشروع وأداة تفاعلية تسمح بمحاكاة خوارزميات التظبيط النقطي للمثلثات ودراسة تدرج التغطية ومعالجة حواف العناصر الرسومية.",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ فتح المحاكي التفاعلي",
                  url: "https://jjbannister.github.io/tinydiffrast/",
                  type: "download",
                  color: "green",
                },
              ],
            },
            {
              t: "Interactive 2D/3D Triangle Rasterizer",
              d: "تطبيق ويب تفاعلي لمحاكاة اختبار التغطية ورسم المثلثات على شبكة بكسلات وتتبع نتائج الترددات والتعريج.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 تجربة الأداة",
                  url: "https://andrewdcampbell.github.io/rasterizer/",
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
          q: "1. In rasterization, for each primitive (e.g., a triangle), the question we answer is:",
          options: [
            "Which ray hits the object first?",
            "Which light source illuminates the object?",
            "Which pixels light up?",
            "Which texture map is applied to the object?",
          ],
          correct: 2,
          translation:
            "في الـ Rasterization، لكل primitive (مثل المثلث) السؤال اللي بنجاوب عليه هو:",
          explanation:
            "الـ Rasterization بيمشي 'لكل primitive، أنهي pixels هتنور؟'. أما 'أنهي ray بتضرب الجسم أولاً' فده سؤال الـ ray tracing.",
          tags: ["Rasterization", "Rasterization vs Ray Tracing"],
          ref: "Lecture 04 — Slide: TODAY: Rasterization",
          likely: "high",
        },
        {
          q: "2. In ray tracing, the question asked for each pixel is:",
          options: [
            "Which primitives are seen?",
            "Which pixels light up?",
            "Which triangle has the largest area?",
            "Which vertex is closest to the camera?",
          ],
          correct: 0,
          translation: "في الـ Ray Tracing، السؤال اللي بنسأله لكل pixel هو:",
          explanation:
            "الـ Ray tracing بيمشي 'لكل pixel، أنهي primitives بتظهر؟'. السؤال التاني (أنهي pixels هتنور) ده بتاع الـ rasterization.",
          tags: ["Ray Tracing", "Rasterization vs Ray Tracing"],
          ref: "Lecture 04 — Slide: TODAY: Rasterization",
          likely: "high",
        },
        {
          q: "3. Which statement correctly compares rasterization with ray tracing?",
          options: [
            "Rasterization is generally slower, but photorealism is easier to achieve with it",
            "Both techniques have the same speed and the same ease of photorealism",
            "Ray tracing is extremely fast, with billions of triangles per second on a GPU",
            "Rasterization is extremely fast but photorealism is harder; ray tracing gets photorealism more easily but is generally slower",
          ],
          correct: 3,
          translation:
            "أي عبارة بتقارن صح بين الـ rasterization والـ ray tracing؟",
          explanation:
            "الـ rasterization سريع جدًا (مليارات المثلثات في الثانية على الـ GPU) لكن الـ photorealism أصعب، والـ ray tracing أسهل في الـ photorealism لكنه أبطأ عمومًا. باقي الاختيارات بتعكس أو بتساوي الخصائص غلط.",
          tags: ["Rasterization vs Ray Tracing"],
          ref: "Lecture 04 — Slide: TODAY: Rasterization",
          likely: "high",
        },
        {
          q: "4. What is the input of the modern real-time rasterization pipeline?",
          options: [
            "Bitmap images",
            "3D primitives, essentially all triangles",
            "Only lines and points",
            "Rays shot from each pixel",
          ],
          correct: 1,
          translation:
            "إيه هو الـ input بتاع الـ rasterization pipeline الحديثة في الوقت الحقيقي؟",
          explanation:
            "الـ input هو 3D primitives وهي في الأساس كلها مثلثات (ممكن تيجي معاها attributes زي اللون). الـ bitmap image هو الـ output مش الـ input.",
          tags: ["Rasterization Pipeline", "Input/Output"],
          ref: "Lecture 04 — Slide: Rasterization Pipeline",
          likely: "high",
        },
        {
          q: "5. What is the output of the rasterization pipeline?",
          options: [
            "A list of vertices and edges",
            "A set of 3D triangles with attributes",
            "A bitmap image (possibly with depth, alpha, ...)",
            "A ray-traced scene description",
          ],
          correct: 2,
          translation: "إيه هو الـ output بتاع الـ rasterization pipeline؟",
          explanation:
            "الـ output هو bitmap image (ممكن يكون معاها depth و alpha). قائمة الـ vertices والمثلثات هي الـ input.",
          tags: ["Rasterization Pipeline", "Input/Output"],
          ref: "Lecture 04 — Slide: Rasterization Pipeline",
          likely: "high",
        },
        {
          q: "6. Which is a reason given for converting all primitives to triangles?",
          options: [
            "Triangles are never planar, so they store more detail",
            "Triangles are always planar with a well-defined normal",
            "Triangles are the only shape a GPU can store",
            "Triangles have four corners, which makes interpolation simple",
          ],
          correct: 1,
          translation:
            "أي من التالي سبب مذكور لتحويل كل الـ primitives إلى مثلثات؟",
          explanation:
            "المثلث دايمًا مستوي (planar) وله normal معرّف بوضوح. المثلث له 3 أركان مش 4، ومش حقيقي إنه غير مستوي.",
          tags: ["Why triangles?"],
          ref: "Lecture 04 — Slide: Why triangles?",
          likely: "high",
        },
        {
          q: "7. Which technique makes it easy to interpolate data at the corners of a triangle?",
          options: [
            "Barycentric coordinates",
            "Piecewise constant sampling",
            "Pinhole projection",
            "Nearest-neighbor filtering",
          ],
          correct: 0,
          translation:
            "أي تقنية بتسهّل عمل interpolation للبيانات عند أركان المثلث؟",
          explanation:
            "الـ Barycentric coordinates هي المذكورة في المحاضرة لعمل interpolation للبيانات عند الأركان. الـ nearest neighbor خاص بالـ reconstruction مش بالمثلثات.",
          tags: ["Why triangles?", "Barycentric coordinates"],
          ref: "Lecture 04 — Slide: Why triangles?",
          likely: "high",
        },
        {
          q: "8. The key reason for reducing everything to triangles is that:",
          options: [
            "Triangles look more realistic than other shapes",
            "Triangles remove the need for a projection stage",
            "We can focus on building an extremely well-optimized pipeline for drawing them",
            "Triangles make a GPU unnecessary",
          ],
          correct: 2,
          translation: "السبب الأساسي لاختزال كل حاجة في مثلثات هو إن:",
          explanation:
            "لما كل حاجة تبقى مثلثات نقدر نركز على عمل pipeline متحسّنة جدًا لرسمها. المثلثات مش بتلغي الـ projection ولا الـ GPU.",
          tags: ["Why triangles?"],
          ref: "Lecture 04 — Slide: Why triangles?",
          likely: "high",
        },
        {
          q: "9. How does the rasterization pipeline treat points and lines?",
          options: [
            "It draws them directly without any conversion",
            "It ignores them",
            "It converts them to quads only",
            "It converts them to triangles too",
          ],
          correct: 3,
          translation:
            "الـ rasterization pipeline بتتعامل مع النقط والخطوط إزاي؟",
          explanation:
            "بتحوّل كل الـ primitives لمثلثات حتى النقط والخطوط (النقطة والخط بيتمثلوا بمثلثات صغيرة). مش بتتجاهلهم ولا بتستخدم quads.",
          tags: ["Why triangles?", "Primitives"],
          ref: "Lecture 04 — Slide: Why triangles?",
          likely: "high",
        },
        {
          q: '10. In the rasterization pipeline slide, "coverage" and "occlusion" refer to which two questions?',
          options: [
            "Coverage: which triangle is closest to the camera; Occlusion: which pixels does it overlap",
            "Coverage: what pixels does the triangle overlap; Occlusion: which triangle is closest to the camera in each pixel",
            "Coverage: what color is the pixel; Occlusion: what is the texture",
            "Coverage: how many triangles exist; Occlusion: how many pixels exist",
          ],
          correct: 1,
          translation:
            'في شريحة رسم المثلثات، الـ "coverage" و الـ "occlusion" بيشيروا لأنهي سؤالين؟',
          explanation:
            "Coverage = أنهي pixels المثلث بيغطيها. Occlusion = أنهي مثلث هو الأقرب للكاميرا في كل pixel. الاختيار الأول عاكس التعريفين.",
          tags: ["Coverage", "Occlusion", "Visibility"],
          ref: "Lecture 04 — Slide: Let's draw some triangles on the screen",
          likely: "high",
        },
        {
          q: "11. In the ray formulation of the visibility problem, OCCLUSION asks:",
          options: [
            "What scene geometry is hit by a ray from a pixel through the pinhole?",
            "How many rays pass through the pinhole?",
            "Which object is the first hit along that ray?",
            "Which pixels are covered by the triangle?",
          ],
          correct: 2,
          translation:
            "في صياغة مشكلة الـ visibility بالـ rays، الـ OCCLUSION بيسأل:",
          explanation:
            "الـ Occlusion = أنهي جسم بيتضرب أولاً على طول الـ ray. أما 'أنهي geometry بتتضرب بالـ ray' فده الـ COVERAGE.",
          tags: ["Occlusion", "Visibility", "Pinhole camera"],
          ref: "Lecture 04 — Slide: The visibility problem",
          likely: "high",
        },
        {
          q: "12. Instead of computing exact coverage, the lecture views coverage as:",
          options: [
            "An optimization problem",
            "A sampling problem",
            "A texture-mapping problem",
            "A clipping problem",
          ],
          correct: 1,
          translation:
            "بدل حساب الـ coverage بشكل دقيق، المحاضرة بتعتبر الـ coverage:",
          explanation:
            "حساب الـ coverage بدقة مش عملي، فبنعتبرها sampling problem: بنختبر مجموعة نقط (samples) بدل الحل التحليلي الدقيق.",
          tags: ["Coverage via sampling"],
          ref: "Lecture 04 — Slide: Coverage via sampling",
          likely: "high",
        },
        {
          q: "13. For rasterization, coverage(x, y) equals 1 when:",
          options: [
            "The triangle contains the point (x, y)",
            "The point (x, y) is on the screen border",
            "The triangle is the closest one to the camera",
            "The point (x, y) lies exactly on a vertex only",
          ],
          correct: 0,
          translation:
            "في الـ rasterization، الدالة coverage(x, y) بتساوي 1 لما:",
          explanation:
            "coverage(x, y) = 1 لو المثلث يحتوي النقطة (x, y)، وإلا = 0. الأقرب للكاميرا ده occlusion مش coverage.",
          tags: ["Coverage function", "Sampling"],
          ref: "Lecture 04 — Slide: For rasterization, what function are we sampling?",
          likely: "high",
        },
        {
          q: "14. Sampling is best defined as:",
          options: [
            "Generating a signal from a discrete set of samples",
            "Taking measurements of a signal",
            "Increasing the resolution of an image",
            "Smoothing a signal with a filter",
          ],
          correct: 1,
          translation: "أفضل تعريف للـ Sampling هو:",
          explanation:
            "الـ Sampling = قياس (measurement) للإشارة وتمثيلها كمجموعة منفصلة من العينات. أما توليد الإشارة من العينات فده الـ Reconstruction.",
          tags: ["Sampling", "Reconstruction"],
          ref: "Lecture 04 — Slide: Sampling 101: Summary",
          likely: "high",
        },
        {
          q: "15. Reconstruction is best defined as:",
          options: [
            "Generating a signal from a discrete set of samples",
            "Taking measurements of a signal at specific points",
            "Encoding a signal as a discrete set of samples",
            "Deciding which triangle is nearest to the camera",
          ],
          correct: 0,
          translation: "أفضل تعريف للـ Reconstruction هو:",
          explanation:
            "الـ Reconstruction = توليد إشارة من مجموعة منفصلة من العينات (بدالة بتعمل interpolate أو approximate). الاختيارين التاني والتالت تعريف الـ Sampling.",
          tags: ["Reconstruction", "Sampling"],
          ref: "Lecture 04 — Slide: Sampling 101: Summary",
          likely: "high",
        },
        {
          q: "16. In piecewise constant (nearest neighbor) reconstruction, the reconstructed value at x is:",
          options: [
            "The linear interpolation of the two closest samples",
            "The average of all samples",
            "The value of the sample closest to x",
            "Zero everywhere except at the sample points",
          ],
          correct: 2,
          translation:
            "في الـ piecewise constant (nearest neighbor) reconstruction، القيمة المعاد بناؤها عند x هي:",
          explanation:
            "القيمة = قيمة أقرب sample للنقطة x. الـ linear interpolation بين أقرب عينتين هو الـ piecewise linear.",
          tags: ["Reconstruction", "Piecewise constant"],
          ref: "Lecture 04 — Slide: Piecewise constant approximation",
          likely: "high",
        },
        {
          q: "17. In piecewise linear reconstruction, the reconstructed value at x is:",
          options: [
            "The value of the closest sample",
            "The maximum of the two closest samples",
            "The average of all samples",
            "A linear interpolation between the values of the two closest samples",
          ],
          correct: 3,
          translation:
            "في الـ piecewise linear reconstruction، القيمة المعاد بناؤها عند x هي:",
          explanation:
            "بنعمل linear interpolation بين قيمتي أقرب عينتين. أخذ قيمة أقرب عينة فقط هو الـ nearest neighbor.",
          tags: ["Reconstruction", "Piecewise linear"],
          ref: "Lecture 04 — Slide: Piecewise linear approximation",
          likely: "high",
        },
        {
          q: "18. When an edge falls exactly on a sample point, the sample is classified as inside the triangle if the edge is:",
          options: [
            "Any edge of the triangle",
            "A right edge or a bottom edge",
            "A top edge or a left edge",
            "Never; such samples are always outside",
          ],
          correct: 2,
          translation:
            "لما حرف (edge) يقع بالظبط على نقطة sample، الـ sample بتتصنف إنها جوه المثلث لو الحرف ده:",
          explanation:
            "القاعدة (المستخدمة في OpenGL/Direct3D): الـ sample جوه المثلث لو الحرف 'top edge' أو 'left edge'. كده نقطة على حرف مشترك بين مثلثين بتتحسب لمثلث واحد بس.",
          tags: ["Breaking ties", "Top edge", "Left edge"],
          ref: "Lecture 04 — Slide: Breaking Ties",
          likely: "high",
        },
        {
          q: '19. Which description matches a "top edge" of a triangle?',
          options: [
            "A horizontal edge that is above all other edges",
            "Any edge that is not exactly horizontal",
            "The longest edge of the triangle",
            "A vertical edge on the left side",
          ],
          correct: 0,
          translation: 'أي وصف يطابق الـ "top edge" في المثلث؟',
          explanation:
            "الـ top edge = حرف أفقي فوق كل الحروف التانية. الحرف الغير أفقي على الشمال هو left edge.",
          tags: ["Breaking ties", "Top edge"],
          ref: "Lecture 04 — Slide: Breaking Ties",
          likely: "high",
        },
        {
          q: '20. Which statement about a "left edge" is correct?',
          options: [
            "It is exactly horizontal",
            "It must be exactly vertical",
            "A triangle always has exactly one left edge",
            "It is not exactly horizontal and is on the left side; a triangle can have one or two left edges",
          ],
          correct: 3,
          translation: 'أي عبارة عن الـ "left edge" صحيحة؟',
          explanation:
            "الـ left edge = حرف مش أفقي بالظبط وعلى الجهة الشمال من المثلث، والمثلث ممكن يكون له left edge واحد أو اتنين. مش لازم يكون رأسي.",
          tags: ["Breaking ties", "Left edge"],
          ref: "Lecture 04 — Slide: Breaking Ties",
          likely: "high",
        },
        {
          q: "21. In the simple rasterization example, the coverage sample for pixel (x, y) is taken at:",
          options: [
            "(x, y)",
            "(x + 0.5, y + 0.5)",
            "(x + 1, y + 1)",
            "A random point inside the pixel",
          ],
          correct: 1,
          translation:
            "في مثال الـ simple rasterization، نقطة الـ coverage sample للـ pixel (x, y) بتتاخد عند:",
          explanation:
            "اختار المحاضر نقطة العينة عند مركز الـ pixel أي (x+0.5, y+0.5). النقطة (x, y) هي الركن مش المركز.",
          tags: ["Simple rasterization", "Pixel center"],
          ref: "Lecture 04 — Slide: Simple rasterization: just sample the coverage function",
          likely: "high",
        },
        {
          q: "22. Why is exact coverage hard to compute when occlusion is considered?",
          options: [
            "Triangles are never planar",
            "Pixels cannot be square",
            "The GPU does not store depth values",
            "A pixel can receive several (even non-convex) regions from different triangles, and triangles can interpenetrate",
          ],
          correct: 3,
          translation:
            "ليه حساب الـ coverage الدقيق صعب لما ناخد الـ occlusion في الاعتبار؟",
          explanation:
            "ممكن أكتر من منطقة (وحتى منطقة غير محدبة) من مثلث تساهم في pixel واحد، والمثلثات ممكن تتقاطع (interpenetration)، فالحساب بيتعقد.",
          tags: ["Coverage", "Occlusion"],
          ref: "Lecture 04 — Slide: Coverage gets tricky when considering occlusion",
          likely: "high",
        },
        {
          q: '23. In the "fraction of pixel area" option, a triangle covering 10% of a pixel should produce:',
          options: [
            "A pixel that is 10% red",
            "A fully red pixel",
            "A pixel that is not colored at all",
            "A pixel that is 90% red",
          ],
          correct: 0,
          translation:
            'في خيار "نسبة مساحة الـ pixel"، لو المثلث بيغطي 10% من الـ pixel فالـ pixel المفروض يكون:',
          explanation:
            "الحدس: لو المثلث بيغطي 10% من الـ pixel يبقى الـ pixel 10% أحمر. 90% هي نسبة غير المغطى.",
          tags: ["Coverage", "Pixel area fraction"],
          ref: "Lecture 04 — Slide: One option: compute fraction of pixel area covered",
          likely: "high",
        },
        {
          q: "24. Which is the correct order of the stages in the rough sketch of the rasterization pipeline?",
          options: [
            "Project onto the screen, transform objects, sample coverage, combine samples, interpolate attributes",
            "Sample coverage, transform objects, project onto the screen, sample textures, combine samples",
            "Transform objects, sample coverage, project onto the screen, interpolate attributes, combine samples",
            "Transform objects, project onto the screen, sample coverage, interpolate attributes, sample textures/evaluate shaders, combine samples",
          ],
          correct: 3,
          translation:
            "إيه الترتيب الصحيح لمراحل الـ rasterization pipeline في الرسم التقريبي؟",
          explanation:
            "الترتيب: تحويل/وضع الأجسام في العالم، ثم الإسقاط على الشاشة، ثم sample الـ coverage، ثم interpolate الـ attributes، ثم الـ textures/shaders، وأخيرًا دمج العينات في الصورة النهائية.",
          tags: ["Rasterization Pipeline", "Stages"],
          ref: "Lecture 04 — Slide: The Rasterization Pipeline",
          likely: "high",
        },
        {
          q: "25. The top-edge/left-edge tie-breaking rules are the rules used in:",
          options: [
            "Ray tracers only",
            "OpenGL/Direct3D (modern GPUs)",
            "Audio compression only",
            "Vector-art editors only",
          ],
          correct: 1,
          translation:
            "قواعد top-edge/left-edge لكسر التعادل هي القواعد المستخدمة في:",
          explanation:
            "المحاضرة بتقول إن دي قواعد OpenGL/Direct3D أي الـ GPUs الحديثة (المصدر: Direct3D Programming Guide).",
          tags: ["Breaking ties"],
          ref: "Lecture 04 — Slide: Breaking Ties",
          likely: "medium",
        },
        {
          q: "26. How can a sampled signal be represented more accurately?",
          options: [
            "Sample it more densely (increase the sampling rate)",
            "Use fewer samples",
            "Always use piecewise constant reconstruction",
            "Reduce the amplitude of the signal",
          ],
          correct: 0,
          translation: "إزاي نقدر نمثل الإشارة بدقة أكبر؟",
          explanation:
            "بزيادة كثافة العينات (sampling rate). تقليل العينات بيقلل الدقة، وتغيير الـ amplitude مش حل.",
          tags: ["Sampling rate", "Reconstruction"],
          ref: "Lecture 04 — Slide: How can we represent the signal more accurately?",
          likely: "medium",
        },
        {
          q: "27. Which pair names the two 2D reconstructions shown for the Earth image?",
          options: [
            "Piecewise linear and piecewise cubic",
            "Nearest neighbor and Gaussian",
            "Piecewise constant (nearest neighbor) and piecewise bi-linear",
            "Piecewise constant and exponential",
          ],
          correct: 2,
          translation:
            "أي زوج يسمّي الـ reconstructions ثنائية الأبعاد المعروضة لصورة الأرض؟",
          explanation:
            "الصورة عُرضت بـ piecewise constant ('nearest neighbor') و piecewise bi-linear. باقي الأنواع مش من المحاضرة.",
          tags: ["2D sampling", "Reconstruction"],
          ref: "Lecture 04 — Slide: 2D Sampling & Reconstruction",
          likely: "medium",
        },
        {
          q: "28. Most consumer audio is sampled at:",
          options: ["22.05 kHz", "44.1 kHz", "8 kHz", "96 kHz"],
          correct: 1,
          translation: "معظم الصوت الاستهلاكي بيتعمل له sampling بمعدل:",
          explanation:
            "معظم الصوت الاستهلاكي بيتاخد منه 44,100 عينة في الثانية أي 44.1 kHz. باقي القيم مش المذكورة.",
          tags: ["Sampling", "Audio"],
          ref: "Lecture 04 — Slide: Audio file: stores samples of a 1D signal",
          likely: "medium",
        },
        {
          q: '29. The word "pixel" stands for:',
          options: [
            "Pixel element",
            "Projected element",
            "Point element",
            "Picture element",
          ],
          correct: 3,
          translation: 'كلمة "pixel" اختصار لـ:',
          explanation:
            "الـ pixel = picture element، وهو مربع صغير من الضوء بلون مناسب على الشاشة.",
          tags: ["Pixels on a screen"],
          ref: "Lecture 04 — Slide: Pixels on a screen",
          likely: "medium",
        },
        {
          q: "30. If each screen pixel emits a perfectly uniform square of light, the displayed sampled coverage looks like:",
          options: [
            "A smooth image identical to the true coverage signal",
            "A blurred image",
            "A grid of uniformly colored squares that differs from the real coverage signal",
            "An empty screen",
          ],
          correct: 2,
          translation:
            "لو كل pixel بيطلّع مربع ضوء منتظم تمامًا، العرض الناتج لل sampled coverage بيبان زي:",
          explanation:
            "بنشوف مربعات كل واحد بلون واحد (مدرّجة)، وده مختلف عن الإشارة الحقيقية للـ coverage اللي كانت بحدود ناعمة. باقي الاختيارات مش بتوصف النتيجة.",
          tags: ["Pixels on a screen", "Display"],
          ref: "Lecture 04 — Slide: We see this when we look at the screen",
          likely: "medium",
        },
        {
          q: '31. In the "3D image generation pipeline" view, a pipeline is described in terms of:',
          options: [
            "Inputs, stages, and outputs",
            "Vertices, edges, and faces only",
            "Rays, lights, and materials",
            "Samples, filters, and displays only",
          ],
          correct: 0,
          translation:
            "في مفهوم الـ 3D image generation pipeline، بنوصف الـ pipeline بدلالة:",
          explanation:
            "الـ pipeline = INPUTS (إيه الصورة المطلوبة) + STAGES (تسلسل تحويلات من input إلى output) + OUTPUTS (الصورة النهائية).",
          tags: ["3D Image Generation Pipeline"],
          ref: "Lecture 04 — Slide: 3D Image Generation Pipeline(s)",
          likely: "medium",
        },
        {
          type: "essay",
          q: "1. Compare rasterization and ray tracing.",
          translation: "قارن بين الـ rasterization والـ ray tracing.",
          answer:
            "Rasterization: for each primitive (e.g., a triangle), which pixels light up?\n" +
            "- Extremely fast (billions of triangles per second on a GPU).\n" +
            "- Harder (but not impossible) to achieve photorealism.\n" +
            "- A perfect match for 2D vector art, fonts, quick 3D preview.\n" +
            "Ray tracing: for each pixel, which primitives are seen?\n" +
            "- Easier to get photorealism.\n" +
            "- Generally slower.\n" +
            "- Covered in more detail later in the semester.",
          tags: ["Rasterization vs Ray Tracing"],
          ref: "Lecture 04 — Slide: TODAY: Rasterization",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. Why does the rasterization pipeline convert all primitives to triangles? List the reasons.",
          translation:
            "ليه الـ rasterization pipeline بتحوّل كل الـ primitives لمثلثات؟ اذكر الأسباب.",
          answer:
            "The pipeline converts all primitives to triangles, even points and lines.\n" +
            "Reasons:\n" +
            "1) Triangles can approximate any shape.\n" +
            "2) A triangle is always planar and has a well-defined normal.\n" +
            "3) It is easy to interpolate data at the corners (barycentric coordinates).\n" +
            "Key reason: once everything is reduced to triangles, we can focus on making an extremely well-optimized pipeline for drawing them.",
          tags: ["Why triangles?"],
          ref: "Lecture 04 — Slide: Why triangles?",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. List and briefly explain the stages of the rough sketch of the rasterization pipeline.",
          translation:
            "اذكر واشرح باختصار مراحل الـ rasterization pipeline في الرسم التقريبي.",
          answer:
            "1) Transform/position objects in the world.\n" +
            "2) Project objects onto the screen.\n" +
            "3) Sample triangle coverage (which sample points are inside the triangle).\n" +
            "4) Interpolate triangle attributes at covered samples.\n" +
            "5) Sample texture maps / evaluate shaders.\n" +
            "6) Combine samples into the final image (depth, alpha, ...).\n" +
            "This reflects the standard real-world pipeline (OpenGL/Direct3D).",
          tags: ["Rasterization Pipeline", "Stages"],
          ref: "Lecture 04 — Slide: The Rasterization Pipeline",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. Explain the visibility problem. What are coverage and occlusion?",
          translation:
            "اشرح مشكلة الـ visibility. إيه هو الـ coverage والـ occlusion؟",
          answer:
            "Visibility is the problem of deciding what is seen at each pixel. It has two questions:\n" +
            "COVERAGE: what pixels does the triangle overlap? (in terms of rays: what scene geometry is hit by a ray from a pixel through the pinhole?)\n" +
            "OCCLUSION: which triangle is closest to the camera in each pixel? (in terms of rays: which object is the first hit along that ray?)\n" +
            "The pinhole camera can be simplified with a virtual sensor placed in front of the pinhole.",
          tags: ["Visibility", "Coverage", "Occlusion"],
          ref: "Lecture 04 — Slide: The visibility problem",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. Why is computing exact coverage not practical, and what is the alternative?",
          translation: "ليه حساب الـ coverage الدقيق مش عملي، وإيه البديل؟",
          answer:
            "Real scenes are complicated: occlusion, transparency, and interpenetrating triangles.\n" +
            "A pixel can receive several regions of a triangle (some not even convex) and parts of different triangles.\n" +
            "Alternative: view coverage as a sampling problem.\n" +
            "- Do not compute an exact/analytical answer.\n" +
            "- Instead, test a collection of sample points.\n" +
            "- With enough points and a smart choice of sample locations, we get a good estimate.",
          tags: ["Coverage via sampling"],
          ref: "Lecture 04 — Slide: Coverage via sampling",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. Define the coverage function and explain simple rasterization by sampling.",
          translation:
            "عرّف دالة الـ coverage واشرح الـ simple rasterization بالـ sampling.",
          answer:
            "The function being sampled is coverage(x, y): it equals 1 if the triangle contains the point (x, y), and 0 otherwise.\n" +
            "Simple rasterization: take one coverage sample per pixel at the pixel center (x + 0.5, y + 0.5).\n" +
            "If the triangle covers the sample, the pixel is lit with the triangle color; if not, it is not covered.",
          tags: ["Coverage function", "Simple rasterization"],
          ref: "Lecture 04 — Slide: For rasterization, what function are we sampling?",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. Explain the tie-breaking rules used when an edge falls exactly on a sample point.",
          translation:
            "اشرح قواعد كسر التعادل لما حرف يقع بالظبط على نقطة sample.",
          answer:
            "Problem: a sample point lying exactly on an edge could be claimed by both triangles sharing that edge (or by none).\n" +
            "Rule: the sample is classified as inside the triangle only if the edge is a top edge or a left edge.\n" +
            "- Top edge: a horizontal edge that is above all other edges.\n" +
            "- Left edge: an edge that is not exactly horizontal and is on the left side of the triangle (a triangle can have one or two left edges).\n" +
            "These are the rules used in OpenGL/Direct3D, i.e., in modern GPUs.",
          tags: ["Breaking ties", "Top edge", "Left edge"],
          ref: "Lecture 04 — Slide: Breaking Ties",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. Define sampling and reconstruction, and give examples of reconstruction methods.",
          translation:
            "عرّف الـ sampling والـ reconstruction واذكر أمثلة لطرق الـ reconstruction.",
          answer:
            "Sampling = measurement of a signal: encode the signal as a discrete set of samples (values at specific points).\n" +
            "Reconstruction = generating a signal from a discrete set of samples: construct a function that interpolates or approximates the function values.\n" +
            "Examples: piecewise constant (nearest neighbor) and piecewise linear; there are many more possibilities, for all kinds of signals (audio, images, geometry).",
          tags: ["Sampling", "Reconstruction"],
          ref: "Lecture 04 — Slide: Sampling 101: Summary",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. Compare piecewise constant and piecewise linear reconstruction. How can the signal be represented more accurately?",
          translation:
            "قارن بين الـ piecewise constant والـ piecewise linear reconstruction. وإزاي نمثل الإشارة بدقة أكبر؟",
          answer:
            "Piecewise constant: the reconstructed value at x equals the value of the sample closest to x.\n" +
            "Piecewise linear: the reconstructed value at x is the linear interpolation between the values of the two closest samples.\n" +
            "More accurate representation: sample the signal more densely (increase the sampling rate); both reconstructions then get closer to the original signal.",
          tags: ["Piecewise constant", "Piecewise linear", "Sampling rate"],
          ref: "Lecture 04 — Slide: Piecewise constant approximation / Piecewise linear approximation",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Calculation: for the pixel at (x, y) = (7, 12), at which point is the coverage sample taken in simple rasterization?",
          translation:
            "مسألة: للـ pixel عند (x, y) = (7, 12)، عند أي نقطة بتتاخد عينة الـ coverage في الـ simple rasterization؟",
          answer:
            "Given: pixel (x, y) = (7, 12).\n" +
            "Rule: the coverage sample is taken at the pixel center (x + 0.5, y + 0.5).\n" +
            "Steps: x + 0.5 = 7 + 0.5 = 7.5, and y + 0.5 = 12 + 0.5 = 12.5.\n" +
            "Result: the sample point is (7.5, 12.5).",
          tags: ["Calculation", "Simple rasterization", "Pixel center"],
          ref: "Lecture 04 — Slide: Simple rasterization: just sample the coverage function",
          likely: "high",
        },
        {
          type: "essay",
          q: "11. Explain 2D sampling and reconstruction for images.",
          translation:
            "اشرح الـ sampling والـ reconstruction ثنائي الأبعاد للصور.",
          answer:
            "The basic story is the same as in 1D:\n" +
            "- Sample values measure the image (the signal) at sample points.\n" +
            "- An interpolation/reconstruction filter is applied to approximate the image.\n" +
            "Examples shown for the Earth image: piecewise constant (nearest neighbor), which gives visible blocks, and piecewise bi-linear, which gives a smoother result.",
          tags: ["2D sampling", "Reconstruction"],
          ref: "Lecture 04 — Slide: 2D Sampling & Reconstruction",
          likely: "medium",
        },
        {
          type: "essay",
          q: "12. Describe the 3D image generation pipeline in terms of inputs, stages, and outputs, with the example from the first lecture.",
          translation:
            "صف الـ 3D image generation pipeline من حيث الـ inputs والـ stages والـ outputs مع مثال المحاضرة الأولى.",
          answer:
            "Image generation can be described as a pipeline:\n" +
            "- INPUTS: what image do we want to draw?\n" +
            "- STAGES: a sequence of transformations from input to output.\n" +
            "- OUTPUTS: the final image.\n" +
            "Example from the first lecture: INPUT (vertices and edges of a cube) -> PERSPECTIVE PROJECTION stage -> LINE DRAWING stage -> OUTPUT (the drawn cube).\n" +
            "In the rasterization pipeline, the input is triangles and the output is a bitmap image.",
          tags: ["3D Image Generation Pipeline"],
          ref: "Lecture 04 — Slide: 3D Image Generation Pipeline(s)",
          likely: "medium",
        },
        {
          type: "essay",
          q: "13. How are pixels shown on a screen, and why does the displayed image differ from the real coverage signal?",
          translation:
            "إزاي بتظهر الـ pixels على الشاشة، وليه الصورة المعروضة بتختلف عن إشارة الـ coverage الحقيقية؟",
          answer:
            "Each image sample sent to the display is converted into a little square of light of the appropriate color (pixel = picture element).\n" +
            "Assuming each pixel emits a square of perfectly uniform intensity, we see a grid of uniformly colored squares.\n" +
            "This is only an approximation of how real LCD displays work.\n" +
            "The displayed result differs from the real coverage signal, which has a smooth edge rather than a staircase of squares.",
          tags: ["Pixels on a screen", "Display"],
          ref: "Lecture 04 — Slide: Pixels on a screen / We see this when we look at the screen",
          likely: "medium",
        },
        {
          type: "essay",
          q: "14. Calculation: five boundary pixels are covered by a triangle by 10%, 35%, 60%, 85%, and 15%. Using the pixel-area-fraction option, what fraction of red should each pixel show, and which pixel is reddest?",
          translation:
            "مسألة: خمس pixels على الحافة المثلث بيغطيها بنسب 10% و35% و60% و85% و15%. باستخدام خيار نسبة مساحة الـ pixel، كام نسبة الأحمر في كل pixel، وأنهي pixel الأكثر احمرارًا؟",
          answer:
            "Given: coverage fractions 10%, 35%, 60%, 85%, 15%.\n" +
            "Rule: if the triangle covers p% of a pixel, the pixel should be p% red.\n" +
            "Steps: the pixels are colored 10% red, 35% red, 60% red, 85% red, and 15% red respectively.\n" +
            "Result: the pixel with 85% coverage is the reddest; the pixel with 10% coverage is the lightest.",
          tags: ["Calculation", "Coverage", "Pixel area fraction"],
          ref: "Lecture 04 — Slide: One option: compute fraction of pixel area covered",
          likely: "medium",
        },
        {
          type: "essay",
          q: "15. Calculation: audio is sampled at 44.1 kHz. How many samples are stored for 3 seconds of one audio channel?",
          translation:
            "مسألة: الصوت بيتاخد له sampling بمعدل 44.1 kHz. كام عينة بتتخزن لـ 3 ثواني من قناة صوت واحدة؟",
          answer:
            "Given: sampling rate = 44.1 kHz = 44,100 samples per second; duration = 3 seconds.\n" +
            "Law: number of samples = sampling rate x time.\n" +
            "Steps: 44,100 x 3 = 132,300.\n" +
            "Result: 132,300 samples.",
          tags: ["Calculation", "Sampling", "Audio"],
          ref: "Lecture 04 — Slide: Audio file: stores samples of a 1D signal",
          likely: "medium",
        },
        {
          type: "essay",
          q: "16. Calculation: a sample point lies exactly on a horizontal edge of a triangle. If the triangle is below that edge, is the sample covered? What if the triangle is above that edge?",
          translation:
            "مسألة: نقطة sample واقعة بالظبط على حرف أفقي من المثلث. لو المثلث تحت الحرف ده، هل الـ sample مغطاة؟ ولو المثلث فوق الحرف؟",
          answer:
            "Given: the sample lies exactly on a horizontal edge.\n" +
            "Rule: a sample on an edge is inside only if the edge is a top edge (horizontal and above all other edges) or a left edge (not exactly horizontal, on the left side).\n" +
            "Case 1: the triangle is below the edge, so the edge is above all other edges -> it is a top edge -> the sample IS covered.\n" +
            "Case 2: the triangle is above the edge, so the edge is below the other edges -> it is neither a top edge nor a left edge (a horizontal edge cannot be a left edge) -> the sample is NOT covered.",
          tags: ["Calculation", "Breaking ties", "Top edge"],
          ref: "Lecture 04 — Slide: Breaking Ties",
          likely: "medium",
        },
      ],
    },
    {
      id: "computer-graphic-lecture-05",
      t: "رسومات الحاسوب — المحاضرة 5: التعرّج، أخذ العينات وإعادة البناء (Aliasing, Sampling & Reconstruction)",
      d: "مقدمة في التعرّج (Aliasing) وأخذ العينات (Sampling) وإعادة البناء (Reconstruction)، تحليل الترددات، والفلاتر (Low/High/Band-pass) مع أمثلة كلاسيكية من كورس CMU 15-462/662.",
      pdf: "datenew/subjects/computer-graphics/lectures/Lecture 5/drawingatriangle_slides-lec 5.pdf",
      pdf2: "datenew/subjects/computer-graphics/questions/Questions on each lecture/Lecture-05-Questions.pdf",

      // المحاضرة: Computer Graphics — Lecture 5: Aliasing, Sampling & Reconstruction
      // المفاهيم الأساسية المغطّاة: Sampling/Reconstruction pipeline, Aliasing (spatial & temporal),
      // 1D signal as superposition of frequencies, Audio spectrum analyzer, Image frequency decomposition,
      // Low-pass / Band-pass / High-pass filters, sin(x^2+y^2) example, Wagon wheel effect, ω(t)=6000t audio demo.

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "قنوات يوتيوب عربية بتشرح Computer Graphics وتحويل فورييه وأخد العينات — مفيدة للمحاضرة كلها.",
          links: [
            {
              t: "Computer Graphics — الرسم بالحاسب بالعربي",
              d: "كورس كامل بالعربي في الرسم بالحاسب، فيه محاضرات بتغطي أساسيات أخد العينات والتعرّج بشكل تطبيقي مرتبط بمحاضرة CMU.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🎬 فتح القناة",
                  url: "https://www.youtube.com/playlist?list=PLwbG6FnsR09vOKjE6fQ8dhn0F5hWu7qjG",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Computer Graphics — كورس كامل بالعربي (Programming Secrets)",
              d: "كورس كامل بالعربي من البداية للاحتراف، يغطي مواضيع الرسم بالحاسب بما فيها معالجة الصور والتعرّج والفلاتر.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🎬 فتح الكورس",
                  url: "https://www.youtube.com/playlist?list=PLp2eAGIFKMEVpQoEqqEo4o-S1enQ59ocw",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "تحويل فورييه — شرح بالعربي (د. هشام)",
              d: "سلسلة فيديوهات بالعربي بتشرح تحويل فورييه خطوة بخطوة — مرتبط مباشرةً بفكرة تفكيك الإشارة لترددات في المحاضرة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🎬 فتح السلسلة",
                  url: "https://www.youtube.com/playlist?list=PLOpVxHldmrRFpZmbo8jPbt9hETaI7S8jP",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: Aliasing في الرسم بالحاسب",
              d: "رابط بحث في يوتيوب مش فيديو محدد — استخدمه لما تحتاج فيديو عربي محدد على التعرّج وأخد العينات في الكمبيوتر جرافيكس.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=aliasing+sampling+computer+graphics+arabic",
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
            "فيديوهات معتمدة عالميًا بتشرح تحويل فورييه وأخد العينات والتعرّج — الأساس النظري للمحاضرة.",
          links: [
            {
              t: "But what is the Fourier Transform? — 3Blue1Brown",
              d: "شرح مرئي مشهور لتحويل فورييه بأسلوب 3Blue1Brown. بيربط فكرة تجميع الدوال الجيبية بتفكيك الإشارات لترددات، وهو جوهر المحاضرة.",
              icon: "🌍",
              actions: [
                {
                  label: "🚀 فتح الدرس",
                  url: "https://www.3blue1brown.com/lessons/fourier-transforms",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "CMU 15-462/662 Computer Graphics — Lecture Videos",
              d: "قائمة تشغيل فيديوهات المحاضرات الرسمية لكورس CMU 15-462/662، بما فيها محاضرة Drawing a Triangle و Intro to Sampling — المصدر الأصلي للمحاضرة دي.",
              icon: "🌍",
              actions: [
                {
                  label: "🎬 فتح القائمة",
                  url: "https://www.youtube.com/playlist?list=PL9_jI1bdZmz2emSh0UQ5iOdT2xRHFHL7E",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Signals and systems — Khan Academy",
              d: "كورس Khan Academy عن الإشارات في المجالين الزمني والترددي. مرتبط بجزء تحويل الإشارة لترددات والـ audio spectrum analyzer.",
              icon: "🌍",
              actions: [
                {
                  label: "🌐 فتح الكورس",
                  url: "https://www.khanacademy.org/science/electrical-engineering/ee-signals",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Fourier Transform in Image Processing — YouTube",
              d: "فيديو عملي بيشرح إزاي نطبّق تحويل فورييه على الصور وإزاي نفكّك الصورة لترددات مكانية — مرتبط مباشرة بجزء 'Images as frequencies' في المحاضرة.",
              icon: "🌍",
              actions: [
                {
                  label: "🎬 فتح الفيديو",
                  url: "https://www.youtube.com/watch?v=o5EawXpa9AQ",
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
            "مقالات ومراجع موثوقة بتشرح مفاهيم التعرّج وأخد العينات وتحويل فورييه — مصادر رسمية بتفصيل أعمق من المحاضرة.",
          links: [
            {
              t: "Wagon-wheel effect — Wikipedia",
              d: "مقال ويكيبيديا الإنجليزي عن ظاهرة wagon wheel effect، بيعرّف التعرّج الزمني ويربطه بالـ stroboscopic effect. مرتبط مباشرة بشريحة Temporal aliasing.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://en.wikipedia.org/wiki/Wagon-wheel_effect",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Aliasing Effect — GeeksforGeeks",
              d: "مقال GeeksforGeeks عن التعرّج في معالجة الإشارات: تعريفه وأسبابه وإزاي نمنعه. تكملة ممتازة لجزء 'Undersampling high-frequency signals results in aliasing' في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.geeksforgeeks.org/electronics-engineering/aliasing-effect",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Temporal Aliasing: The Wagon Wheel Effect — UC Davis",
              d: "مقال تعليمي من UC Davis بيشرح wagon wheel effect باستخدام مثال عقارب الساعة ويربطه بمبرهنة Shannon-Nyquist — تكملة قوية للشرائح الخاصة بالـ temporal aliasing.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.cs.ucdavis.edu/~koehl/Teaching/ECS17/Chapters/Chapter1/wagon.html",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Aliasing in computer graphics — Apoorvaj",
              d: "مقال بتفصيل مرئي عالي للتعرّج في الكمبيوتر جرافيكس، بيغطي rasterization aliasing و texture aliasing و shading aliasing مع رسوم متحركة — تكملة ممتازة لجزء Spatial aliasing.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://apoorvaj.io/aliasing-in-computer-graphics",
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
            "محاكاة تفاعلية لتجربة تحويل فورييه والتعرّج وأخد العينات بنفسك — مفهوم يتثبت لما تشوفه حي.",
          links: [
            {
              t: "An Interactive Introduction to Fourier Transforms — Jez Swanson",
              d: "صفحة تفاعلية بتسمح تكتب أي منحنى وتشوف إزاي فورييه بيفكّكه لموجات جيبية. تكملة مثالية لجزء '1D signal as superposition of frequencies' في المحاضرة.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://www.jezzamon.com/fourier/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Wagon Wheel Effect — Circles Sines & Signals (Jack Schaedler)",
              d: "محاكاة تفاعلية لـ wagon wheel effect فيها slider لتغيير معدّل أخذ العينات وشوفة تأثيره على اتجاه دوران العجلة. بتفهم إزاي undersampling بيعمل aliasing زماني.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح المحاكاة",
                  url: "https://jackschaedler.github.io/circles-sines-signals/sampling4.html",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "2D Inverse Fourier Transform Playground",
              d: "أداة تفاعلية لتجربة الفلاتر في مجال التردد على صور حقيقية — تقدر تمسح مناطق معينة من الـ spectrum وتشوف النتيجة في المجال المكاني. مرتبطة مباشرة بـ low-pass / high-pass / band-pass.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح المحاكاة",
                  url: "https://monman53.github.io/2dfft/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "An Interactive Guide To The Fourier Transform — Better Explained",
              d: "شرح تفاعلي بأسلوب 'smoothie ingredients' لفهم فورييه حدسي بدون معادلات معقدة. مفيد لو حابب تفهم الفكرة ورا تحويل الإشارة لترددات قبل ما تتعمّق في المحاضرة.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/",
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
          q: "1. What is the primary goal of sampling and reconstruction in signal processing?",
          options: [
            "To compress the original signal as much as possible",
            "To reproduce the original signal as accurately as possible",
            "To increase the frequency of the original signal",
            "To convert the signal into a lower-resolution form",
          ],
          correct: 1,
          translation:
            "إيه هو الهدف الأساسي من أخذ العينات وإعادة البناء في معالجة الإشارات؟",
          explanation:
            "الشريحة بتقول صراحة: الهدف هو إعادة إنتاج الإشارة الأصلية بأكبر دقة ممكنة (reproduce original signal as accurately as possible). الاختيارات التانية غلط لأن الضغط أو تقليل الدقة أهداف ثانوية مش الأساسية.",
          tags: ["Sampling", "Reconstruction", "Goal"],
          ref: "Lecture 5 — Sampling & Reconstruction (intro slide)",
          likely: "high",
        },
        {
          q: "2. Aliasing is best described as:",
          options: [
            "Low frequencies in the original signal appearing as high frequencies after reconstruction",
            "High frequencies in the original signal masquerading as low frequencies after reconstruction due to undersampling",
            "The complete loss of all frequencies during sampling",
            "The process of converting a digital signal back to analog",
          ],
          correct: 1,
          translation: "تعريف التعرّج (Aliasing) هو:",
          explanation:
            "التعريف موجود حرفيًا في الشريحة: الترددات العالية في الإشارة الأصلية بتتنكر في هيئة ترددات منخفضة بعد إعادة البناء بسبب أخذ عينات قليلة (undersampling). الاختيار الأول عكس الكلام، والباقي مش تعريف صحيح.",
          tags: ["Aliasing", "Definitions"],
          ref: "Lecture 5 — Undersampling / Aliasing slide",
          likely: "high",
        },
        {
          q: "3. In the sampling/reconstruction pipeline, the intermediate 'digital information' stage represents:",
          options: [
            "The reconstructed continuous signal",
            "The original continuous signal before any processing",
            "The discrete samples taken from the original continuous signal",
            "A higher-frequency version of the original signal",
          ],
          correct: 2,
          translation:
            "في خط أخذ العينات وإعادة البناء، مرحلة 'digital information'بتعمل إيه؟",
          explanation:
            "الخط هو continuous signal → sample → digital information → reconstruct → continuous signal. فـ digital information هي العينات المدمجة (discrete samples) المأخوذة من الإشارة الأصلية. الاختيارات التانية بتمثل مراحل تانية في الخط.",
          tags: ["Sampling", "Pipeline"],
          ref: "Lecture 5 — Sampling & Reconstruction pipeline diagram",
          likely: "high",
        },
        {
          q: "4. According to the lecture, a 1D signal can be expressed as:",
          options: [
            "A single constant value",
            "A single high-frequency wave",
            "A random sequence of values",
            "A superposition (sum) of frequencies",
          ],
          correct: 3,
          translation: "حسب المحاضرة، الإشارة الـ 1D ممكن تتعرض كـ:",
          explanation:
            "الشريحة بتقول إن إشارة 1D ممكن تتعبّر عنها كـ superposition of frequencies (مجموع ترددات). ده أساس فورييه. الاختيارات التانية بتعكس سوء فهم للنظرية.",
          tags: ["Frequencies", "Fourier", "1D signals"],
          ref: "Lecture 5 — 1D signal / frequencies slide",
          likely: "high",
        },
        {
          q: "5. In the example f(x) = f1(x) + 0.75 f2(x) + 0.5 f4(x), the three component signals were:",
          options: [
            "sin(x), sin(2x), sin(4x)",
            "sin(pi*x), sin(3*pi*x), sin(5*pi*x)",
            "cos(x), cos(2x), cos(4x)",
            "sin(pi*x), sin(2*pi*x), sin(4*pi*x)",
          ],
          correct: 3,
          translation:
            "في المثال f(x) = f1 + 0.75 f2 + 0.5 f4، الإشارات الثلاثة f1, f2, f4 كانت:",
          explanation:
            "الشريحة بتعرّف f1(x)=sin(pi*x)، f2(x)=sin(2*pi*x)، f4(x)=sin(4*pi*x). الاختيار التاني هو الوحيد المطابق. الاختيار الأول مفقود عامل pi، والتالت رابع بيستبدل sin بـ cos أو بيغيّر المعاملات.",
          tags: ["Frequencies", "Example", "sin waves"],
          ref: "Lecture 5 — 1D signal decomposition slide",
          likely: "high",
        },
        {
          q: "6. An audio spectrum analyzer displays:",
          options: [
            "The total energy of the signal only",
            "The time-domain waveform of the signal",
            "The amplitude of each frequency in the signal",
            "The number of samples taken per second",
          ],
          correct: 2,
          translation: "محلل الطيف الصوتي (audio spectrum analyzer) بيعرض:",
          explanation:
            "الشريحة بتقول: محلل الطيف الصوتي بيعرض سعة كل تردد (amplitude of each frequency). ده عكس شكل الموجة اللي هو في المجال الزمني. الاختيارات التانية مش بتاع الطيف.",
          tags: ["Spectrum analyzer", "Frequencies"],
          ref: "Lecture 5 — Audio spectrum analyzer slide",
          likely: "high",
        },
        {
          q: "7. In the audio spectrum analyzer shown in the lecture, low frequencies correspond to:",
          options: [
            "Treble (high-pitched sounds)",
            "Background noise only",
            "Silence",
            "Bass (low-pitched sounds)",
          ],
          correct: 3,
          translation: "في محلل الطيف الصوتي، الترددات المنخفضة بتقابل:",
          explanation:
            "الشريحة بتقول صراحة: الترددات المنخفضة = bass (صوت جهير). ده مكتوب حرفيًا جنب المنطقة المنخفضة في الرسمة. الاختيار الأول غلط لأن treble هو الترددات العالية.",
          tags: ["Spectrum analyzer", "Audio", "Frequencies"],
          ref: "Lecture 5 — Audio spectrum analyzer slide",
          likely: "high",
        },
        {
          q: "8. In the lecture's audio demo, the tone frequency is given by w(t) = 6000*t. What happens as t increases?",
          options: [
            "The frequency increases over time and eventually aliasing occurs",
            "The tone stays at a constant frequency",
            "The audio becomes silent",
            "The amplitude decreases over time",
          ],
          correct: 0,
          translation:
            "في المثال الصوتي w(t)=6000*t، إيه اللي بيحصل لما t يزيد؟",
          explanation:
            "الشريحة بتسأل 'What happens if we increase w over time?' وبعدين بتعرض تجربة بتوضح إن aliasing بيحصل. التردد بيزيد بشكل خطي وبيتعدى قدرة أخذ العينات، فيظهر التعرّج. الاختيار الأول مخالف لطبيعة w(t)=6000*t أصله.",
          tags: ["Aliasing", "Audio demo", "Frequencies"],
          ref: "Lecture 5 — Aliasing in Audio slide",
          likely: "high",
        },
        {
          q: "9. Aliasing occurs because:",
          options: [
            "The signal is sampled too frequently",
            "High-frequency signals are insufficiently sampled (undersampled)",
            "The signal contains no high frequencies",
            "The reconstruction uses too many samples",
          ],
          correct: 1,
          translation: "التعرّج بيحصل بسبب:",
          explanation:
            "الشريحة بتقول صراحة: 'Undersampling high-frequency signals results in aliasing'. أخذ عينات قليلة لإشارة عالية التردد هو السبب. الاختيار الأول عكس الصحيح — أخذ عينات كتير بيلغي التعرّج مش بيعمله.",
          tags: ["Aliasing", "Undersampling"],
          ref: "Lecture 5 — Undersampling / Aliasing slide",
          likely: "high",
        },
        {
          q: "10. After undersampling a high-frequency signal, the reconstruction appears to come from:",
          options: [
            "A higher-frequency signal than the original",
            "A noise-free version of the original",
            "A signal with zero frequency",
            "A low-frequency signal",
          ],
          correct: 3,
          translation:
            "بعد أخذ عينات قليلة من إشارة عالية التردد، إعادة البناء بتظهر كأنها جاية من:",
          explanation:
            "الشريحة بتقول: 'reconstruction appears to be from a low frequency signal'. ده جوهر التعرّج — الترددات العالية بتتنكر في هيئة ترددات منخفضة. الاختيار الأول غلط تمامًا لأن التعرّج بيقلل التردد الظاهري مش بيزيده.",
          tags: ["Aliasing", "Reconstruction"],
          ref: "Lecture 5 — Undersampling / Aliasing slide",
          likely: "high",
        },
        {
          q: "11. Which type of signal can be sampled adequately for accurate reconstruction (according to the lecture)?",
          options: [
            "Only high-frequency signals",
            "Low-frequency signals",
            "Only signals with infinite frequency",
            "All signals regardless of frequency",
          ],
          correct: 1,
          translation:
            "أي نوع إشارة ممكن يتعمله أخذ عينات كافي لإعادة بناء دقيقة؟",
          explanation:
            "الشريحة بتقول: 'Low-frequency signal: sampled adequately for accurate reconstruction'. الترددات المنخفضة بتتحتاج عينات أقل عشان تتقال صح. الترددات العالية بتحتاج عينات أكتر، ولما متوفرش، بيحصل aliasing.",
          tags: ["Sampling", "Reconstruction", "Frequencies"],
          ref: "Lecture 5 — Undersampling / Aliasing slide",
          likely: "high",
        },
        {
          q: "12. According to the lecture, images can also be:",
          options: [
            "Decomposed into 'frequencies'",
            "Stored only as a single frequency",
            "Reconstructed without any sampling",
            "Compressed into a single pixel",
          ],
          correct: 0,
          translation: "حسب المحاضرة، الصور كمان ممكن:",
          explanation:
            "الشريحة بتقول حرفيًا: 'Images can also be decomposed into frequencies'. ده امتداد لنفس فكرة تحليل الإشارات للترددات، بس للمجال المكاني (spatial) بدل الزماني.",
          tags: ["Images", "Frequencies", "Decomposition"],
          ref: "Lecture 5 — Images as frequencies slide",
          likely: "high",
        },
        {
          q: "13. In image frequency analysis, low frequencies typically correspond to:",
          options: [
            "Sharp edges",
            "High contrast regions",
            "Random noise",
            "Smooth gradients",
          ],
          correct: 3,
          translation: "في تحليل ترددات الصور، الترددات المنخفضة بتقابل:",
          explanation:
            "الشريحة بتقول صراحة: 'Low frequencies only (smooth gradients)'. التردد المنخفض بيمثل تغيّر بطيء في قيم البيكسل (تدرّج ناعم). التردد العالي بيمثل التغيّر السريع زي الحدود.",
          tags: ["Images", "Frequencies", "Low-pass"],
          ref: "Lecture 5 — Low frequencies (low-pass) slide",
          likely: "high",
        },
        {
          q: "14. A low-pass filter applied to an image:",
          options: [
            "Removes low frequencies and keeps high frequencies",
            "Keeps all frequencies unchanged",
            "Keeps low frequencies and removes high frequencies",
            "Increases the amplitude of all frequencies",
          ],
          correct: 2,
          translation: "الفلتر low-pass لما يتطبّق على صورة بيعمل إيه؟",
          explanation:
            "اسم الفلتر 'low-pass' معناه يخلّي الترددات المنخفضة تعدي (pass) ويوقف العالية. بعد الفلتر: الترددات فوق cutoff بتبقى صفر. النتيجة المكانية: smooth gradients فقط.",
          tags: ["Filters", "Low-pass", "Images"],
          ref: "Lecture 5 — Low frequencies / low-pass filter slide",
          likely: "high",
        },
        {
          q: "15. After applying a low-pass filter, the spectrum shows:",
          options: [
            "All frequencies have the same magnitude",
            "Only high frequencies remain",
            "All frequencies above the cutoff have 0 magnitude",
            "All frequencies are amplified",
          ],
          correct: 2,
          translation: "بعد تطبيق فلتر low-pass، الطيف بيبين:",
          explanation:
            "الشريحة بتقول: 'All frequencies above cutoff have 0 magnitude'. ده تعريف low-pass filter في مجال التردد — بيصفر الترددات فوق نقطة القطع. الاختيارات التانية مخالفة لتعريف الفلتر.",
          tags: ["Low-pass", "Spectrum"],
          ref: "Lecture 5 — Low frequencies (after low-pass) slide",
          likely: "high",
        },
        {
          q: "16. Applying a high-pass filter to an image produces a result that contains mainly:",
          options: [
            "The strongest edges",
            "Smooth gradients only",
            "A completely black image",
            "A blurred version of the image",
          ],
          correct: 0,
          translation:
            "تطبيق فلتر high-pass على صورة بيطلّع نتيجة فيها أساسًا:",
          explanation:
            "الشريحة بتقول: 'High frequencies (edges) — Spatial domain result (strongest edges)'. الفلتر بيشيل الترددات المنخفضة (التدرّجات) وبيسيب العالية (الحدود). عشان كده النتيجة بتظهر الحدود بوضوح.",
          tags: ["High-pass", "Edges", "Filters"],
          ref: "Lecture 5 — High frequencies (high-pass) slide",
          likely: "high",
        },
        {
          q: "17. After applying a high-pass filter, the spectrum shows:",
          options: [
            "All frequencies above threshold have 0 magnitude",
            "Only the DC component remains",
            "All frequencies are kept unchanged",
            "All frequencies below threshold have 0 magnitude",
          ],
          correct: 3,
          translation: "بعد تطبيق فلتر high-pass، الطيف بيبين:",
          explanation:
            "الشريحة بتقول صراحة: 'All frequencies below threshold have 0 magnitude'. ده عكس الـ low-pass — الـ high-pass بيشيل الترددات المنخفضة (تحت العتبة) وبيسيب العالية.",
          tags: ["High-pass", "Spectrum"],
          ref: "Lecture 5 — High frequencies (high-pass) slide",
          likely: "high",
        },
        {
          q: "18. In image frequency analysis, high frequencies typically correspond to:",
          options: [
            "Smooth color regions",
            "The background of the image",
            "The average brightness of the image",
            "Edges",
          ],
          correct: 3,
          translation: "في تحليل ترددات الصور، الترددات العالية بتقابل:",
          explanation:
            "الشريحة بتقول: 'High frequencies (edges)'. التردد العالي بيمثل تغيّر سريع في قيم البيكسل زي اللي بيحصل عند الحدود. التدرّج الناعم هو التردد المنخفض.",
          tags: ["Images", "Frequencies", "High-pass"],
          ref: "Lecture 5 — High frequencies (high-pass) slide",
          likely: "high",
        },
        {
          q: "19. A band-pass filter on an image keeps:",
          options: [
            "Only the lowest frequencies",
            "Only the highest frequencies",
            "Only mid-range frequencies",
            "All frequencies except mid-range ones",
          ],
          correct: 2,
          translation: "الفلتر band-pass على صورة بيخلّي:",
          explanation:
            "الشريحة بتعرض 'Mid-range frequencies — Spectrum (after band-pass filter)'. الـ band-pass بيخلّي ترددات في نطاق وسط فقط — لا العالية ولا المنخفضة. ده عكس low-pass و high-pass.",
          tags: ["Band-pass", "Filters", "Mid-range"],
          ref: "Lecture 5 — Mid-range frequencies (band-pass) slide",
          likely: "high",
        },
        {
          q: "20. According to the lecture, an image can be viewed as:",
          options: [
            "A single frequency component",
            "A sum of its frequency components",
            "A random distribution of pixels",
            "An array of low frequencies only",
          ],
          correct: 1,
          translation: "حسب المحاضرة، الصورة ممكن تتعامل معاها كـ:",
          explanation:
            "الشريحة بتقول: 'An image as a sum of its frequency components'. ده نفس مبدأ superposition للإشارات 1D، بس مطبّق على المجال المكاني 2D.",
          tags: ["Images", "Frequencies", "Decomposition"],
          ref: "Lecture 5 — Image as a sum of frequency components slide",
          likely: "high",
        },
        {
          q: "21. The function sin(x^2 + y^2) shown in the lecture is used to demonstrate:",
          options: [
            "Temporal aliasing in audio",
            "The effect of low-pass filtering",
            "Spatial aliasing in images",
            "The wagon wheel effect",
          ],
          correct: 2,
          translation: "الدالة sin(x^2 + y^2) اللي ظهرت في المحاضرة بتوضّح:",
          explanation:
            "عنوان الشريحة بيقول 'Spatial aliasing: the function sin(x^2 + y^2)'. الدالة دي بتعمل حلقات (rings) متركّزة، ولما التردد بيزيد بسرعة، بيحصل aliasing مكاني — الحلقات اللي هي عالية التردد بتظهر كأنها منخفضة التردد.",
          tags: ["Spatial aliasing", "sin(x^2+y^2)", "Examples"],
          ref: "Lecture 5 — Spatial aliasing: sin(x^2 + y^2) slide",
          likely: "high",
        },
        {
          q: "22. In the sin(x^2 + y^2) example, the rings on the right side of the image illustrate:",
          options: [
            "True low-frequency oscillation of the signal",
            "The result of applying a low-pass filter",
            "Aliasing from undersampling a high-frequency oscillation",
            "A region with no signal",
          ],
          correct: 2,
          translation:
            "في مثال sin(x^2 + y^2)، الحلقات على يمين الصورة بتوضّح:",
          explanation:
            "الشريحة بتقول: 'Right: aliasing from undersampling high frequency oscillation makes it appear that rings are low-frequency (they are not!)'. الإشارة الحقيقية عالية التردد، لكن بسبب أخذ عينات قليلة بتظهر كأنها منخفضة التردد.",
          tags: ["Spatial aliasing", "sin(x^2+y^2)"],
          ref: "Lecture 5 — Spatial aliasing: sin(x^2 + y^2) slide",
          likely: "high",
        },
        {
          q: "23. In the sin(x^2 + y^2) image, the 'middle' rings represent:",
          options: [
            "Frequencies below the cutoff",
            "Frequencies approaching the limit of what individual pixels can represent",
            "The DC component of the image",
            "The result of band-pass filtering",
          ],
          correct: 1,
          translation: "في صورة sin(x^2 + y^2)، الحلقات 'الوسطى' بتمثل:",
          explanation:
            "الشريحة بتقول: 'Middle: ring frequency approaches limit of what we can represent w/ individual pixels'. هنا التردد بيقرب من حد قدرة البيكسل الفردي على تمثيله، وده بيدّي إنذار قبل ما aliasing يبدأ على اليمين.",
          tags: ["Spatial aliasing", "sin(x^2+y^2)", "Pixel resolution"],
          ref: "Lecture 5 — Spatial aliasing: sin(x^2 + y^2) slide",
          likely: "high",
        },
        {
          q: "24. The wagon wheel effect is a classic example of:",
          options: [
            "Spatial aliasing",
            "Color aliasing",
            "Audio aliasing",
            "Temporal aliasing",
          ],
          correct: 3,
          translation: "ظاهرة wagon wheel effect هي مثال كلاسيكي على:",
          explanation:
            "عنوان الشريحة بيقول: 'Temporal aliasing: wagon wheel effect'. 'Temporal' معناها زمني، والإشارة هنا متغيّرة في الزمن (عجلة بتلف)، فالتعرّج بيحصل في المحور الزمني مش المكاني.",
          tags: ["Temporal aliasing", "Wagon wheel"],
          ref: "Lecture 5 — Temporal aliasing: wagon wheel effect slide",
          likely: "high",
        },
        {
          q: "25. According to the lecture, the wagon wheel effect occurs because:",
          options: [
            "The camera's frame rate is too low for the rapidly spinning wheel",
            "The wheel is not actually moving",
            "The lighting is too bright",
            "The wheel is made of reflective material",
          ],
          correct: 0,
          translation: "حسب المحاضرة، wagon wheel effect بيحصل لأن:",
          explanation:
            "الشريحة بتقول: 'Camera's frame rate (temporal sampling rate) is too low for rapidly spinning wheel'. معدّل إطارات الكاميرا (= معدّل أخذ العينات الزمني) أقل من اللازم لالتقاط سرعة العجلة، فالتعرّج الزمني بيخلّيها تبان واقفة أو بتلف في الاتجاه المعاكس.",
          tags: ["Temporal aliasing", "Wagon wheel", "Frame rate"],
          ref: "Lecture 5 — Temporal aliasing: wagon wheel effect slide",
          likely: "high",
        },
        {
          q: "26. The fundamental difference between spatial aliasing and temporal aliasing is:",
          options: [
            "Spatial occurs in images (2D space); temporal occurs in time (video frames)",
            "Spatial is for audio; temporal is for images",
            "Spatial happens only with color; temporal only with grayscale",
            "There is no real difference between them",
          ],
          correct: 0,
          translation: "الفرق الأساسي بين التعرّج المكاني والتعرّج الزمني هو:",
          explanation:
            "التعرّج المكاني بيحصل في المجال المكاني (صور 2D زي sin(x^2+y^2))، والتعرّج الزمني بيحصل في المجال الزمني (فيديو، زي wagon wheel). السبب في الالاتنين هو نفسه (undersampling)، بس المحور مختلف.",
          tags: ["Spatial aliasing", "Temporal aliasing", "Comparison"],
          ref: "Lecture 5 — Spatial aliasing vs Temporal aliasing slides",
          likely: "high",
        },
        {
          q: "27. In the f(x) = f1(x) + 0.75 f2(x) + 0.5 f4(x) example, the largest amplitude coefficient belongs to:",
          options: [
            "f1 (coefficient = 1)",
            "f2 (coefficient = 0.75)",
            "f4 (coefficient = 0.5)",
            "All coefficients are equal",
          ],
          correct: 0,
          translation:
            "في مثال f(x)=f1+0.75 f2+0.5 f4، أكبر معامل سعة موجود في:",
          explanation:
            "المعاملات: f1 بـ 1، f2 بـ 0.75، f4 بـ 0.5. أكبر معامل هو 1 الخاص بـ f1. ده بيمثل إن التردد الأساسي (الأدنى) ليه أعلى مساهمة في الإشارة المركّبة.",
          tags: ["Frequencies", "Example", "Amplitude"],
          ref: "Lecture 5 — 1D signal decomposition slide",
          likely: "high",
        },
        {
          q: "28. The wavelength/period of f1(x) = sin(pi*x) compared to f4(x) = sin(4*pi*x) means:",
          options: [
            "f1 has the shortest wavelength (highest frequency)",
            "Both have the same frequency",
            "f4 has the highest frequency of the three",
            "f1 has zero frequency",
          ],
          correct: 2,
          translation: "مقارنة f1=sin(pi*x) بـ f4=sin(4*pi*x) معناه:",
          explanation:
            "معامل التردد في f4 هو 4*pi، أكبر من 2*pi في f2 و pi في f1. فـ f4 عندها أعلى تردد بين الإشارات الثلاثة. ده بيربط فكرة إن المعامل الأكبر = تردد أعلى.",
          tags: ["Frequencies", "sin waves", "Comparison"],
          ref: "Lecture 5 — 1D signal decomposition slide",
          likely: "medium",
        },
        {
          q: "29. The 'sample' stage in the sampling/reconstruction pipeline converts:",
          options: [
            "Continuous signal to discrete samples (digital information)",
            "Digital information back to continuous signal",
            "Low frequencies to high frequencies",
            "Audio signal to image signal",
          ],
          correct: 0,
          translation: "مرحلة 'sample' في خط المعالجة بتحوّل:",
          explanation:
            "الترتيب هو continuous → sample → digital → reconstruct → continuous. فـ sample بتحوّل الإشارة المستمرة لعينات منفصلة (digital). الـ reconstruct هي اللي بتعمل العكس — بتحوّل digital لـ continuous.",
          tags: ["Sampling", "Pipeline", "Digital"],
          ref: "Lecture 5 — Sampling & Reconstruction pipeline diagram",
          likely: "medium",
        },
        {
          q: "30. The 'reconstruct' stage in the pipeline is responsible for:",
          options: [
            "Converting digital information back to an approximate continuous signal",
            "Sampling the continuous signal",
            "Increasing the frequency of the signal",
            "Adding aliasing to the signal",
          ],
          correct: 0,
          translation: "مرحلة 'reconstruct' في خط المعالجة مسؤولة عن:",
          explanation:
            "الـ reconstruct بياخد digital information (عينات) ويعمل منها إشارة مستمرة تقريبية. الهدف مكتوب في الشريحة: reproduce original signal as accurately as possible. لو أخد العينات مش كفاية، الـ reconstruct بتعمل aliasing.",
          tags: ["Reconstruction", "Pipeline"],
          ref: "Lecture 5 — Sampling & Reconstruction pipeline diagram",
          likely: "medium",
        },
        {
          q: "31. In the spatial aliasing image of sin(x^2 + y^2), the rings on the 'center-left' represent:",
          options: [
            "Aliasing artifacts",
            "The actual (true) low-frequency oscillation of the signal",
            "The result of a high-pass filter",
            "Pixels outside the image bounds",
          ],
          correct: 1,
          translation: "في صورة sin(x^2+y^2)، الحلقات في 'الوسط-يسار' بتمثل:",
          explanation:
            "الشريحة بتقول: 'Rings in center-left: Actual signal (low frequency oscillation)'. هنا الإشارة لسه منخفضة التردد بشكل حقيقي وبتتمثّل صح. الـ aliasing بيبدأ على اليمين لما التردد يزيد.",
          tags: ["Spatial aliasing", "sin(x^2+y^2)"],
          ref: "Lecture 5 — Spatial aliasing: sin(x^2 + y^2) slide",
          likely: "medium",
        },
        {
          q: "32. After reconstruction, an undersampled high-frequency signal appears:",
          options: [
            "Identical to the original",
            "As if it came from a low-frequency signal",
            "As a constant DC value",
            "As a higher-frequency signal than before",
          ],
          correct: 1,
          translation:
            "بعد إعادة البناء، إشارة عالية التردد اتاخد منها عينات قليلة بتظهر:",
          explanation:
            "الشريحة بتقول صراحة: 'reconstruction appears to be from a low frequency signal'. التردد العالي بيتنكر في هيئة تردد منخفض — ده التعريف الأساسي للـ aliasing. الاختيار الأول غلط ولو كان صح مكانش فيه مشكلة.",
          tags: ["Aliasing", "Reconstruction", "Frequencies"],
          ref: "Lecture 5 — Undersampling / Aliasing slide",
          likely: "medium",
        },
        {
          type: "essay",
          q: "1. Define aliasing and explain why it occurs.",
          translation: "عرّف التعرّج (Aliasing) واشرح ليه بيحصل.",
          answer:
            "Aliasing is the phenomenon where high frequencies in the original signal masquerade as low frequencies after reconstruction, due to undersampling.\n" +
            "It occurs because the sampling rate is too low to capture the rapid changes of the high-frequency components. When the signal is reconstructed from these insufficient samples, the high-frequency content folds back into the low-frequency range, producing an apparent low-frequency signal that does not exist in the original.",
          tags: ["Aliasing", "Definitions"],
          ref: "Lecture 5 — Undersampling / Aliasing slide",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. Explain the sampling and reconstruction pipeline, listing its main stages.",
          translation:
            "اشرح خط أخذ العينات وإعادة البناء واذكر مراحله الأساسية.",
          answer:
            "The pipeline consists of four stages:\n" +
            "1. Continuous signal (original): the true analog signal we want to capture.\n" +
            "2. Sample: discretize the continuous signal into a finite set of values.\n" +
            "3. Digital information: the discrete samples stored/processed as digital data.\n" +
            "4. Reconstruct: convert the digital samples back into an approximate continuous signal.\n" +
            "The goal of the whole pipeline is to reproduce the original signal as accurately as possible. If the sampling rate is insufficient for the signal's high frequencies, aliasing occurs at the reconstruction stage.",
          tags: ["Sampling", "Reconstruction", "Pipeline"],
          ref: "Lecture 5 — Sampling & Reconstruction pipeline diagram",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Explain how a 1D signal can be expressed as a superposition of frequencies, using the lecture's example.",
          translation:
            "اشرح إزاي إشارة 1D ممكن تتعبر كـ superposition للترددات، باستخدام مثال المحاضرة.",
          answer:
            "A 1D signal can be expressed as a sum (superposition) of multiple sinusoidal waves, each at a different frequency and amplitude.\n" +
            "In the lecture example:\n" +
            "  f1(x) = sin(pi*x)\n" +
            "  f2(x) = sin(2*pi*x)\n" +
            "  f4(x) = sin(4*pi*x)\n" +
            "  f(x) = f1(x) + 0.75*f2(x) + 0.5*f4(x)\n" +
            "Here f1 is the lowest frequency, f4 is the highest, and each is weighted by an amplitude coefficient (1, 0.75, 0.5). Adding these three sinusoids produces a richer, more complex signal. This is the foundation of frequency-domain analysis (Fourier decomposition).",
          tags: ["Frequencies", "Fourier", "1D signals"],
          ref: "Lecture 5 — 1D signal decomposition slide",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. Compare spatial aliasing and temporal aliasing. Give one example of each from the lecture.",
          translation:
            "قارن بين التعرّج المكاني (Spatial) والتعرّج الزمني (Temporal)، واذكر مثال على كل واحد من المحاضرة.",
          answer:
            "Spatial aliasing:\n" +
            "- Occurs in the spatial domain (images, 2D).\n" +
            "- Cause: insufficient spatial sampling (pixel resolution) for high-frequency spatial oscillations.\n" +
            "- Example: the function sin(x^2 + y^2) shows rings; on the right side of the image, high-frequency oscillations appear as low-frequency rings due to undersampling by individual pixels.\n" +
            "Temporal aliasing:\n" +
            "- Occurs in the time domain (video, animation).\n" +
            "- Cause: camera frame rate (temporal sampling rate) is too low for a rapidly moving/spinning object.\n" +
            "- Example: the wagon wheel effect — a spinning wheel appears to rotate backwards, stand still, or move slower than its true rotation because the camera cannot sample its motion fast enough.\n" +
            "Both share the same underlying cause (undersampling) but differ in the axis along which sampling is insufficient.",
          tags: ["Spatial aliasing", "Temporal aliasing", "Comparison"],
          ref: "Lecture 5 — Spatial aliasing + Temporal aliasing slides",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. Explain what low-pass, band-pass, and high-pass filters do to an image, and describe the spatial-domain result of each.",
          translation:
            "اشرح إيه اللي بيعمله كل من فلتر low-pass و band-pass و high-pass على صورة، ووصف النتيجة في المجال المكاني لكل فيهم.",
          answer:
            "Low-pass filter:\n" +
            "- Keeps low frequencies; sets all frequencies above the cutoff to zero magnitude.\n" +
            "- Spatial result: smooth gradients only — edges are blurred out.\n" +
            "Band-pass filter:\n" +
            "- Keeps only mid-range frequencies; removes both the lowest and highest components.\n" +
            "- Spatial result: a mix that contains neither the smoothest gradients nor the sharpest edges — only mid-detail structure.\n" +
            "High-pass filter:\n" +
            "- Keeps high frequencies; sets all frequencies below a threshold to zero magnitude.\n" +
            "- Spatial result: the strongest edges of the image are emphasized, while smooth regions are suppressed.",
          tags: ["Low-pass", "Band-pass", "High-pass", "Filters"],
          ref: "Lecture 5 — Low / Mid-range / High frequencies slides",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. Explain why images can be decomposed into frequencies, and state what low and high frequencies correspond to in images.",
          translation:
            "اشرح ليه الصور ممكن تتفكّك لترددات، واذكر الترددات المنخفضة والعالية بتقابل إيه في الصور.",
          answer:
            "Just like a 1D audio signal can be expressed as a superposition of sinusoidal frequencies, a 2D image can also be decomposed into 'frequencies' — in this case, spatial frequencies that describe how rapidly pixel intensities change across the image.\n" +
            "Low frequencies correspond to smooth gradients — regions where pixel values change slowly, such as flat color areas or gradual shading.\n" +
            "High frequencies correspond to edges — regions where pixel values change sharply, such as object boundaries and fine detail.\n" +
            "An image can therefore be viewed as a sum of its frequency components, and filtering operations (low-pass, high-pass, band-pass) selectively keep or remove these components.",
          tags: ["Images", "Frequencies", "Decomposition"],
          ref: "Lecture 5 — Images as frequencies / Low / High slides",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. Explain the wagon wheel effect and its cause.",
          translation: "اشرح ظاهرة wagon wheel effect وسببها.",
          answer:
            "The wagon wheel effect is a form of temporal aliasing in which a spinning wheel appears to rotate more slowly than its true rotation, appears stationary, or even appears to rotate in the opposite direction.\n" +
            "Cause: the camera's frame rate (the temporal sampling rate) is too low for the rapidly spinning wheel. When samples are taken too infrequently relative to the wheel's rotation speed, the reconstructed motion is ambiguous — the high-frequency rotation 'masquerades' as a lower-frequency (or even reversed) rotation.\n" +
            "This is the temporal counterpart of spatial aliasing: the same underlying principle (undersampling a high-frequency signal) but applied along the time axis instead of the spatial axis.",
          tags: ["Temporal aliasing", "Wagon wheel"],
          ref: "Lecture 5 — Temporal aliasing: wagon wheel effect slide",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. Explain the sin(x^2 + y^2) example and what it demonstrates about spatial aliasing. Describe the three regions visible in the image.",
          translation:
            "اشرح مثال sin(x^2+y^2) وإيه اللي بيوضّحه عن التعرّج المكاني. وصف المناطق الثلاثة المرئية في الصورة.",
          answer:
            "The function sin(x^2 + y^2) produces concentric rings centered at the origin, and as we move away from the origin the ring frequency increases.\n" +
            "Three regions are visible in the rendered image:\n" +
            "1. Center-left (rings in the actual signal): the true low-frequency oscillation of the signal — these rings are genuinely low-frequency and are correctly represented.\n" +
            "2. Middle: the ring frequency approaches the limit of what individual pixels can represent. This is the boundary where the sampling resolution becomes insufficient.\n" +
            "3. Right: aliasing from undersampling the high-frequency oscillation. The actual signal is high-frequency here, but due to insufficient pixel resolution, it appears as low-frequency rings.\n" +
            "The example demonstrates that spatial aliasing makes high-frequency spatial content masquerade as low-frequency content — the same defining property of aliasing, but in the spatial (image) domain.",
          tags: ["Spatial aliasing", "sin(x^2+y^2)", "Examples"],
          ref: "Lecture 5 — Spatial aliasing: sin(x^2 + y^2) slide",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. State the goal of sampling and reconstruction, and explain how aliasing violates this goal.",
          translation:
            "اذكر هدف أخذ العينات وإعادة البناء، واشرح إزاي aliasing بيخالف الهدف ده.",
          answer:
            "The goal of sampling and reconstruction is to reproduce the original continuous signal as accurately as possible.\n" +
            "Aliasing violates this goal because, when the sampling rate is too low for the signal's high-frequency content, the reconstructed signal no longer matches the original. Instead, high frequencies in the original signal masquerade as low frequencies in the reconstruction. The reconstructed signal appears to come from a low-frequency signal that was never in the original — the output is a 'false identity' (an alias) of the input.\n" +
            "Therefore, aliasing directly breaks the 'reproduce as accurately as possible' objective: the reconstruction is not a faithful copy of the original.",
          tags: ["Sampling", "Reconstruction", "Aliasing", "Goal"],
          ref: "Lecture 5 — Sampling & Reconstruction goal slide",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Explain the audio aliasing demo in which the tone frequency is w(t) = 6000*t. What happens and why?",
          translation:
            "اشرح تجربة التعرّج الصوتي اللي فيها تردد النغمة w(t)=6000*t. إيه اللي بيحصل وليه؟",
          answer:
            "In the demo, the angular frequency of the tone is set to w(t) = 6000*t, meaning the frequency increases linearly over time.\n" +
            "At the beginning (small t), the frequency is low enough that the sampling rate captures it accurately, and the tone plays as expected.\n" +
            "As t increases, the frequency eventually exceeds what the (fixed) sampling rate can represent. Beyond this point, the high-frequency tone cannot be reconstructed faithfully — instead, it is misinterpreted as a lower-frequency tone due to aliasing.\n" +
            "The result is that the tone no longer sounds like a steadily rising pitch; instead, unexpected lower-frequency artifacts appear. This illustrates the general principle that increasing the signal's frequency beyond the capacity of the sampling rate produces aliasing.",
          tags: ["Aliasing", "Audio demo", "Frequencies"],
          ref: "Lecture 5 — Aliasing in Audio slide",
          likely: "high",
        },
        {
          type: "essay",
          q: "11. Explain what an audio spectrum analyzer shows and how it relates to the idea of decomposing a signal into frequencies.",
          translation:
            "اشرح إيه اللي بيعرضه محلل الطيف الصوتي وإزاي بيرتبط بفكرة تفكيك الإشارة لترددات.",
          answer:
            "An audio spectrum analyzer shows the amplitude of each frequency present in the signal.\n" +
            "Instead of displaying the signal as a time-domain waveform (amplitude versus time), it displays a frequency-domain representation: each position along the frequency axis corresponds to a specific frequency, and the height at that position represents how much of that frequency is present.\n" +
            "In the lecture's example, the low-frequency region corresponds to bass, and the high-frequency region corresponds to treble. This visualization directly illustrates the principle that a 1D signal can be expressed as a superposition (sum) of frequencies, each with its own amplitude — the spectrum analyzer simply makes this decomposition visible.",
          tags: ["Spectrum analyzer", "Frequencies", "Audio"],
          ref: "Lecture 5 — Audio spectrum analyzer slide",
          likely: "medium",
        },
        {
          type: "essay",
          q: "12. List the three frequency ranges produced by the three image filters shown in the lecture (low-pass, band-pass, high-pass), and state which spatial feature each emphasizes.",
          translation:
            "اذكر النطاقات الترددية الثلاثة اللي بيطلّعها كل من الفلاتر الثلاثة، واذكر الخاصية المكانية اللي بيركّز عليها كل فيهم.",
          answer:
            "1. Low-pass filter:\n" +
            "   - Frequency range kept: low frequencies only (all frequencies above the cutoff are set to zero magnitude).\n" +
            "   - Spatial feature emphasized: smooth gradients.\n" +
            "2. Band-pass filter:\n" +
            "   - Frequency range kept: mid-range frequencies only (both low and high are removed).\n" +
            "   - Spatial feature emphasized: medium-scale detail — neither the smoothest gradients nor the sharpest edges.\n" +
            "3. High-pass filter:\n" +
            "   - Frequency range kept: high frequencies only (all frequencies below a threshold are set to zero magnitude).\n" +
            "   - Spatial feature emphasized: the strongest edges.",
          tags: ["Filters", "Low-pass", "Band-pass", "High-pass"],
          ref: "Lecture 5 — Low / Mid-range / High frequencies slides",
          likely: "medium",
        },
        {
          type: "essay",
          q: "13. (Computational) Given f1(x) = sin(pi*x), f2(x) = sin(2*pi*x), f4(x) = sin(4*pi*x), and f(x) = f1(x) + 0.75*f2(x) + 0.5*f4(x), compute f(0.5). Show your steps.",
          translation:
            "(مسألة حسابية) بإعطاء f1=sin(pi*x)، f2=sin(2*pi*x)، f4=sin(4*pi*x)، و f(x)=f1+0.75*f2+0.5*f4، احسب f(0.5). اعرض خطواتك.",
          answer:
            "Given: f(x) = f1(x) + 0.75*f2(x) + 0.5*f4(x), with x = 0.5.\n" +
            "Step 1 — f1(0.5) = sin(pi*0.5) = sin(pi/2) = 1.\n" +
            "Step 2 — f2(0.5) = sin(2*pi*0.5) = sin(pi) = 0.\n" +
            "Step 3 — f4(0.5) = sin(4*pi*0.5) = sin(2*pi) = 0.\n" +
            "Step 4 — Combine: f(0.5) = 1 + 0.75*0 + 0.5*0 = 1 + 0 + 0 = 1.\n" +
            "Final answer: f(0.5) = 1.",
          tags: ["Computation", "sin waves", "Example"],
          ref: "Lecture 5 — 1D signal decomposition slide",
          likely: "high",
        },
        {
          type: "essay",
          q: "14. (Computational) Using the same definitions f1(x) = sin(pi*x), f2(x) = sin(2*pi*x), f4(x) = sin(4*pi*x) and f(x) = f1(x) + 0.75*f2(x) + 0.5*f4(x), compute f(0.25). Use the fact that sin(pi/4) = sqrt(2)/2 (approximately 0.7071).",
          translation:
            "(مسألة حسابية) بنفس التعريفات، احسب f(0.25) مع استخدام sin(pi/4)=sqrt(2)/2 تقريبًا 0.7071.",
          answer:
            "Given: f(x) = f1(x) + 0.75*f2(x) + 0.5*f4(x), with x = 0.25.\n" +
            "Step 1 — f1(0.25) = sin(pi*0.25) = sin(pi/4) = sqrt(2)/2 ≈ 0.7071.\n" +
            "Step 2 — f2(0.25) = sin(2*pi*0.25) = sin(pi/2) = 1.\n" +
            "Step 3 — f4(0.25) = sin(4*pi*0.25) = sin(pi) = 0.\n" +
            "Step 4 — Combine: f(0.25) = 0.7071 + 0.75*1 + 0.5*0 = 0.7071 + 0.75 + 0 = 1.4571.\n" +
            "Final answer: f(0.25) ≈ 1.4571.",
          tags: ["Computation", "sin waves", "Example"],
          ref: "Lecture 5 — 1D signal decomposition slide",
          likely: "medium",
        },
        {
          type: "essay",
          q: "15. (Computational) In the audio aliasing demo, the tone's angular frequency is w(t) = 6000*t. Compute w at t = 1 second and at t = 2 seconds. Then state at which of these two times aliasing is more likely to occur, and why.",
          translation:
            "(مسألة حسابية) في تجربة التعرّج الصوتي، التردد الزاوي w(t)=6000*t. احسب w عند t=1 ثانية و t=2 ثانية. وبعدين قول في أنهي وقت من الاثنين aliasing أرجح، وليه.",
          answer:
            "Given: w(t) = 6000*t.\n" +
            "Step 1 — w(1) = 6000 * 1 = 6000.\n" +
            "Step 2 — w(2) = 6000 * 2 = 12000.\n" +
            "Step 3 — Aliasing occurs when the signal's frequency is too high for the sampling rate to capture accurately. As t increases, w increases linearly, so the signal's frequency keeps rising while the sampling rate stays fixed.\n" +
            "Step 4 — Therefore, at t = 2 (w = 12000) aliasing is more likely than at t = 1 (w = 6000), because the higher frequency is more likely to exceed what the fixed sampling rate can represent.\n" +
            "Final answers: w(1) = 6000, w(2) = 12000, aliasing is more likely at t = 2.",
          tags: ["Computation", "Audio demo", "Aliasing"],
          ref: "Lecture 5 — Aliasing in Audio slide",
          likely: "high",
        },
        {
          type: "essay",
          q: "16. (Computational) Among the three component signals f1(x) = sin(pi*x), f2(x) = sin(2*pi*x), and f4(x) = sin(4*pi*x), identify which one has the highest frequency and which one has the lowest frequency. Justify your answer.",
          translation:
            "(مسألة حسابية) من بين الإشارات الثلاثة f1=sin(pi*x)، f2=sin(2*pi*x)، f4=sin(4*pi*x)، حدّد أنهي واحد عنده أعلى تردد وأنهي أدنى تردد، مع التبرير.",
          answer:
            "Step 1 — Recall the general form sin(k*pi*x): the coefficient k determines the frequency. A larger k means more oscillations per unit of x, i.e. a higher frequency.\n" +
            "Step 2 — For f1, k = 1 → lowest frequency of the three.\n" +
            "Step 3 — For f2, k = 2 → middle frequency.\n" +
            "Step 4 — For f4, k = 4 → highest frequency of the three.\n" +
            "Final answers: f4 has the highest frequency; f1 has the lowest frequency. This is also why, in the original example, the smaller coefficient 0.5 was placed on f4 — the high-frequency component contributes less to the overall shape of the combined signal f(x).",
          tags: ["Computation", "Frequencies", "sin waves"],
          ref: "Lecture 5 — 1D signal decomposition slide",
          likely: "medium",
        },
        {
          type: "essay",
          q: "17. (Computational) In f(x) = f1(x) + 0.75*f2(x) + 0.5*f4(x), list the amplitude coefficient of each component and identify which component contributes the smallest amplitude. Explain what this means physically.",
          translation:
            "(مسألة حسابية) في f(x)=f1+0.75 f2+0.5 f4، اذكر معامل سعة كل مكوّن وحدّد أنهي فيهم بيساهم بأصغر سعة. واشرح معنى ذلك فيزيائيًا.",
          answer:
            "Step 1 — Coefficient of f1 = 1.\n" +
            "Step 2 — Coefficient of f2 = 0.75.\n" +
            "Step 3 — Coefficient of f4 = 0.5.\n" +
            "Step 4 — The smallest coefficient is 0.5, which belongs to f4 (the highest-frequency component).\n" +
            "Physical meaning: the highest-frequency component contributes the least to the combined signal. This is consistent with the general observation that in many natural signals, the higher the frequency, the smaller its amplitude — most of the signal's energy is concentrated in the low frequencies. In image terms, this corresponds to smooth regions dominating the picture while sharp edges (high frequencies) contribute a smaller portion of the overall content.",
          tags: ["Computation", "Amplitude", "Frequencies"],
          ref: "Lecture 5 — 1D signal decomposition slide",
          likely: "medium",
        },
        {
          type: "essay",
          q: "18. (Computational) Using f(x) = f1(x) + 0.75*f2(x) + 0.5*f4(x) where f1(x)=sin(pi*x), f2(x)=sin(2*pi*x), f4(x)=sin(4*pi*x), compute f(0). Briefly explain the result.",
          translation:
            "(مسألة حسابية) بنفس التعريفات، احسب f(0) واشرح النتيجة باختصار.",
          answer:
            "Given: f(x) = f1(x) + 0.75*f2(x) + 0.5*f4(x), with x = 0.\n" +
            "Step 1 — f1(0) = sin(pi*0) = sin(0) = 0.\n" +
            "Step 2 — f2(0) = sin(2*pi*0) = sin(0) = 0.\n" +
            "Step 3 — f4(0) = sin(4*pi*0) = sin(0) = 0.\n" +
            "Step 4 — Combine: f(0) = 0 + 0.75*0 + 0.5*0 = 0.\n" +
            "Final answer: f(0) = 0.\n" +
            "Explanation: every sine wave passes through zero at x = 0, so any linear combination of sine waves also passes through zero at x = 0. This is a property of the choice of sin (rather than cos) basis — at the origin, all sine components vanish.",
          tags: ["Computation", "sin waves"],
          ref: "Lecture 5 — 1D signal decomposition slide",
          likely: "medium",
        },
      ],
    },
  ],
});
