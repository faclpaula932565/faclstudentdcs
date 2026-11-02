/* بيانات مادة: تحليل وتصميم الخوارزميات (algorithms)
   - المحاضرات (PDF) في lectures/  والأسئلة في questions/
   - المسارات دايمًا من جذر المشروع: datenew/subjects/algorithms/lectures/lec-01.pdf
   - انسخي شكل المحاضرة/الأسئلة من مادة شغالة عندك (دليل صاحب المنصة، الخطوة 4 و5) */
subjects.push({
  name: "تحليل وتصميم الخوارزميات",
  en: "Design and Analysis of Algorithms",
  icon: "🧮",
  slug: "algorithms",
  lectures: [
    {
      t: "المحاضرة 1 — مقدمة في تحليل الخوارزميات ومفاهيم التعقيد",
      d: "مفهوم الخوارزميات، حساب التعقيد الزمني والمكاني (Time & Space Complexity)، وتحليل الأداء الأساسي.",
      id: "algorithms-lecture-01",
      pdf: "datenew/subjects/algorithms/lectures/Lecture 1.pdf",
      pdf2: "datenew/subjects/algorithms/questions/Questions on each lecture/CS311_Lecture1_Intro_Questions.pdf",

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description: "شروحات أساسيات تحليل الخوارزميات وتعقيد الوقت",
          links: [
            {
              t: "A Grade - مقدمة وتحليل الخوارزميات",
              d: "شرح مفاهيم التعقيد الزمني والمكاني وحساب عدد العمليات",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=vZjB3KwnzyI",
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
          description: "محاضرات عالمية في أساسيات التحليل",
          links: [
            {
              t: "Abdul Bari - Introduction to Algorithm Analysis",
              d: "شرح مبسط لأساسيات تحليل الخوارزميات وحساب Time Complexity",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=7Y7UcBjUPYI",
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
          description: "مقالات أساسية في تحليل الأداء",
          links: [
            {
              t: "GeeksforGeeks - Analysis of Algorithms",
              d: "دليل شامل لأنواع التحليل والتعقيد الزمني والمكاني",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/",
                  type: "view",
                  color: "green",
                },
              ],
            },
          ],
        },
      ],
      questions: [
        // ─── MCQ ───
        {
          q: "What is the stated purpose of the course?",
          options: [
            "An introduction to database administration",
            "A rigorous introduction to the design and analysis of algorithms",
            "A hands-on introduction to a programming language",
            "A review of discrete mathematics proofs",
          ],
          correct: 1,
        },
        {
          q: "According to the first slide, the course is NOT:",
          options: [
            "A course that uses a textbook",
            "A lab or programming course, and not a math course either",
            "A course about algorithms",
            "A course with an exam",
          ],
          correct: 1,
        },
        {
          q: "Which textbook is used in the course?",
          options: [
            "The Art of Computer Programming by Knuth",
            "Introduction to Algorithms by Cormen, Leiserson, Rivest, and Stein (3rd edition)",
            "Data Structures and Algorithms in Java by Goodrich",
            "Algorithms by Sedgewick and Wayne (4th edition)",
          ],
          correct: 1,
        },
        {
          q: "How is the textbook described in the slides?",
          options: [
            "A book only for the teaching assistant",
            "An optional book that is rarely needed",
            "An excellent reference you should own",
            "A book replaced entirely by the slides",
          ],
          correct: 2,
        },
        {
          q: "What percentage of the grade is class work?",
          options: ["10%", "40%", "25%", "50%"],
          correct: 2,
        },
        {
          q: "What percentage of the grade is the midterm exam?",
          options: ["25%", "10%", "30%", "50%"],
          correct: 0,
        },
        {
          q: "What percentage of the grade is the final exam?",
          options: ["25%", "60%", "40%", "50%"],
          correct: 3,
        },
        {
          q: "What is the prerequisite of the course?",
          options: [
            "CS 211 Data Structures and Algorithms",
            "CS 311 Operating Systems",
            "CS 101 Introduction to Programming",
            "CS 411 Theory of Computation",
          ],
          correct: 0,
        },
        {
          q: "Which of the following is a stated learning outcome of the course?",
          options: [
            "Learning to administer computer networks",
            "Learning the main classic algorithms in various domains",
            "Learning to build graphical user interfaces",
            "Learning to design relational databases",
          ],
          correct: 1,
        },
        {
          q: "Which of the following is a stated learning outcome of the course?",
          options: [
            "Learning to write operating system kernels",
            "Learning to manage software projects",
            "Learning techniques for designing efficient algorithms",
            "Learning hardware circuit design",
          ],
          correct: 2,
        },
        {
          q: "Which of the following is a stated learning outcome of the course?",
          options: [
            "Avoiding the use of design techniques",
            "Studying only theoretical proofs with no problem solving",
            "Memorizing the textbook word for word",
            "Applying the algorithms and design techniques to solve problems",
          ],
          correct: 3,
        },
        {
          q: "Which of the following is a stated learning outcome of the course?",
          options: [
            "Knowing the history of programming languages",
            "Knowing only the syntax of pseudocode",
            "Having a sense of the complexities of various problems in different domains",
            "Knowing the prices of different computer systems",
          ],
          correct: 2,
        },
        {
          q: "In this course, what do we care about most?",
          options: [
            "The exact running time on one specific computer",
            "Asymptotic performance",
            "The length of the source code",
            "The programming language used",
          ],
          correct: 1,
        },
        {
          q: "Asymptotic performance asks:",
          options: [
            "How many programmers are needed to write it?",
            "How many lines of code does the algorithm have?",
            "How does the algorithm behave as the problem size gets very large?",
            "How fast is the algorithm on a tiny input?",
          ],
          correct: 2,
        },
        {
          q: "Which two resources are mentioned as being analyzed asymptotically?",
          options: [
            "Running time and memory/storage requirements",
            "Disk color and screen size",
            "Memory and network bandwidth only",
            "Running time and electricity cost",
          ],
          correct: 0,
        },
        {
          q: "The slides say that by now you should have an intuitive feel for which notation?",
          options: [
            "Roman numerals",
            "Binary-tree notation",
            "Matrix notation",
            "Asymptotic (big-O) notation",
          ],
          correct: 3,
        },
        {
          q: "Which running times does the slide use as examples when asking what big-O notation means?",
          options: [
            "O(1), O(log n), and O(2ⁿ)",
            "O(n), O(n²), and O(n lg n)",
            "O(n!), O(nⁿ), and O(√n)",
            "O(n³), O(n⁴), and O(n⁵)",
          ],
          correct: 1,
        },
        {
          q: "What question about big-O is posed for the student to think about?",
          options: [
            "How does asymptotic running time relate to asymptotic memory usage?",
            "How does big-O relate to the color of the monitor?",
            "How does big-O relate to the price of a computer?",
            "How does big-O relate to the number of lines of code?",
          ],
          correct: 0,
        },
        {
          q: "What is the first task stated in the notation section?",
          options: [
            "To design a user interface",
            "To define asymptotic notation more formally and completely",
            "To memorize the textbook index",
            "To install the software for the course",
          ],
          correct: 1,
        },
        {
          q: "Analysis of algorithms is performed with respect to:",
          options: [
            "A specific brand of computer",
            "A specific programming language only",
            "A random guess",
            "A computational model",
          ],
          correct: 3,
        },
        {
          q: "Which computational model will usually be used?",
          options: [
            "A distributed multi-processor cluster",
            "A quantum computer",
            "A GPU-only machine",
            "A generic uniprocessor random-access machine (RAM)",
          ],
          correct: 3,
        },
        {
          q: "What does RAM stand for in this context (the model)?",
          options: [
            "Read-only access memory",
            "Random-access machine",
            "Recursive array machine",
            "Rapid algorithm model",
          ],
          correct: 1,
        },
        {
          q: "In the RAM model, how expensive is it to access memory?",
          options: [
            "All memory is equally expensive to access",
            "Memory cost grows with the address",
            "Disk access is cheaper than RAM access",
            "Registers are cheaper than main memory",
          ],
          correct: 0,
        },
        {
          q: "Which of the following does the RAM model assume about concurrency?",
          options: [
            "Unlimited concurrent operations",
            "No concurrent operations",
            "Concurrent operations only for sorting",
            "Exactly two concurrent operations",
          ],
          correct: 1,
        },
        {
          q: "In the RAM model, how long do all reasonable instructions take?",
          options: [
            "A random amount of time",
            "Time proportional to the input size",
            "Unit time",
            "Time proportional to the number of bits",
          ],
          correct: 2,
        },
        {
          q: "Which kind of operation is explicitly an exception to the 'unit time' assumption?",
          options: ["Function calls", "Addition", "Assignment", "Comparison"],
          correct: 0,
        },
        {
          q: "What does the RAM model assume about word size?",
          options: [
            "Word size is unlimited",
            "Word size is always one bit",
            "Word size grows with the input size",
            "Constant word size, unless we are explicitly manipulating bits",
          ],
          correct: 3,
        },
        {
          q: "Which of the following is NOT an assumption of the RAM model?",
          options: [
            "Memory access time depends on the memory location",
            "All reasonable instructions take unit time",
            "There are no concurrent operations",
            "All memory is equally expensive to access",
          ],
          correct: 0,
        },
        {
          q: "Time and space complexity are generally a function of:",
          options: [
            "The color of the output",
            "The input size",
            "The language's syntax",
            "The programmer's experience",
          ],
          correct: 1,
        },
        {
          q: "For sorting, how is input size characterized?",
          options: [
            "By the number of loops in the code",
            "By the total number of bits",
            "By the number of nodes and edges",
            "By the number of input items",
          ],
          correct: 3,
        },
        {
          q: "For multiplication, how is input size characterized?",
          options: [
            "By the number of nodes and edges",
            "By the total number of bits",
            "By the number of input items",
            "By the number of function calls",
          ],
          correct: 1,
        },
        {
          q: "For graph algorithms, how is input size characterized?",
          options: [
            "By the number of input items only",
            "By the number of colors",
            "By the total number of bits only",
            "By the number of nodes and edges",
          ],
          correct: 3,
        },
        {
          q: "In the lecture, running time is defined as:",
          options: [
            "The number of lines in the source code",
            "The amount of memory used",
            "The number of seconds on a stopwatch",
            "The number of primitive steps that are executed",
          ],
          correct: 3,
        },
        {
          q: "Except for function calls, most statements roughly require:",
          options: [
            "The same amount of time",
            "No time at all",
            "An amount of time that depends on the line number",
            "Exponentially more time each time they run",
          ],
          correct: 0,
        },
        {
          q: "Which of the following is given as an example of a statement taking roughly constant time?",
          options: [
            "Sorting an array",
            "Searching a graph",
            "y = m * x + b",
            "Calling a recursive sort on a large array",
          ],
          correct: 2,
        },
        {
          q: "What does worst-case analysis provide?",
          options: [
            "The expected running time over random inputs",
            "A lower bound on running time",
            "An upper bound on running time, which is an absolute guarantee",
            "No information about running time",
          ],
          correct: 2,
        },
        {
          q: "What does average-case analysis provide?",
          options: [
            "The best possible running time",
            "An absolute guarantee on running time",
            "The expected running time",
            "The memory used",
          ],
          correct: 2,
        },
        {
          q: "Why should average-case analysis be 'treated with care', according to the slides?",
          options: [
            "Because it ignores the input size",
            "Because it always gives a wrong answer",
            "Because it only works for sorting",
            "Because it is unclear what 'average' means (random equally likely inputs vs. real-life inputs)",
          ],
          correct: 3,
        },

        // ─── Essay ───
        {
          type: "essay",
          q: "Describe the RAM (random-access machine) model used for analyzing algorithms in this course.",
          answer:
            "The analysis is performed with respect to a computational model; usually a generic uniprocessor random-access machine (RAM) is used:\n\n" +
            "• All memory is equally expensive to access.\n\n" +
            "• There are no concurrent operations.\n\n" +
            "• All reasonable instructions take unit time (except, of course, function calls).\n\n" +
            "• Constant word size, unless we are explicitly manipulating bits.",
          tags: ["CS311", "Lecture 1", "Asymptotic performance"],
          ref: "CS 311 — Lecture 1",
        },
        {
          type: "essay",
          q: "Explain how input size is characterized for different problems, and how running time is measured.",
          answer:
            "Input size: time and space complexity are generally a function of the input size, and how it is characterized depends on the problem:\n\n" +
            "• Sorting: the number of input items.\n\n" +
            "• Multiplication: the total number of bits.\n\n" +
            "• Graph algorithms: the number of nodes and edges.\n\n" +
            "\n\n" +
            "Running time: the number of primitive steps that are executed. Except for the time of executing a function call, most statements (e.g., y = m*x + b, c = 5/9*(t-32), z = f(x) + g(y)) roughly require the same amount of time. We can be more exact if need be.",
          tags: ["CS311", "Lecture 1", "Asymptotic performance"],
          ref: "CS 311 — Lecture 1",
        },
        {
          type: "essay",
          q: "Compare worst-case and average-case analysis.",
          answer:
            "Worst case: provides an upper bound on running time — an absolute guarantee.\n\n" +
            "\n\n" +
            "Average case: provides the expected running time. It is very useful but must be treated with care, because it is not obvious what 'average' means: random (equally likely) inputs, or real-life inputs.",
          tags: ["CS311", "Lecture 1", "Asymptotic performance"],
          ref: "CS 311 — Lecture 1",
        },
      ],
    },
    {
      t: "المحاضرة 2 — الترميزات المقاربة وخوارزميات الترتيب والبحث",
      d: "شرح Asymptotic Notations (Big-O, Omega, Theta)، وخوارزميات Insertion Sort, Sequential Search, وQuick Sort.",
      id: "algorithms-lecture-02",
      pdf: "datenew/subjects/algorithms/lectures/Lecture 2.pdf",
      pdf2: "datenew/subjects/algorithms/questions/Questions on each lecture/Lecture-02-Questions.pdf",
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description: "شروحات الترميزات المقاربة وخوارزميات الترتيب",
          links: [
            {
              t: "A Grade - Asymptotic Notations & Quick Sort",
              d: "شرح Big-O, Theta, Omega وخوارزميات البحث والترتيب",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=vZjB3KwnzyI",
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
          description: "محاضرات MIT وعبد الباري للترتيب والبحث",
          links: [
            {
              t: "MIT 6.006 - Asymptotic Complexity & Insertion Sort",
              d: "شرح أكاديمي للترتيب والترميزات المقاربة من MIT",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=ZA-tUyM_y7s",
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
          description: "جداول مرجعية لتعقيد الخوارزميات",
          links: [
            {
              t: "Big-O Algorithm Complexity Cheat Sheet",
              d: "جدول معيار المقارنة السريع لتعقيد الوقت والمساحة لجميع خوارزميات الترتيب والبحث",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.bigocheatsheet.com/",
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
          description: "محاكاة تفاعلية لحركة العناصر أثناء الترتيب",
          links: [
            {
              t: "VisuAlgo - Sorting & Searching",
              d: "محاكاة مرئية تفاعلية لخوارزميات Insertion Sort, Quick Sort, Binary Search",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح التفاعليات",
                  url: "https://visualgo.net/en/sorting",
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
          q: "1. What is an algorithm?",
          options: [
            "A program written in a specific language that only runs on one compiler",
            "A sequence of instructions that keeps running until it finds an answer, even if it never stops",
            "A sequence of unambiguous instructions that produces the required output for any legitimate input in a finite amount of time",
            "A hardware design that increases computer speed",
          ],
          correct: 2,
          translation: "ما هي الخوارزمية (Algorithm)؟",
          explanation:
            "التعريف في المحاضرة: خطوات واضحة غير ملتبسة تعطي المخرج المطلوب لأي مدخل صحيح في زمن منتهي. الخيار الذي يسمح بعدم التوقف غلط لأن الزمن لازم يكون منتهي، والخيارات الأخرى تخلط الخوارزمية بالبرنامج أو بالعتاد.",
          tags: ["Algorithm", "Definition"],
          ref: "Lecture 02 — Slide: Algorithm",
        },
        {
          q: "2. Which pair does the lecture list under 'Does there exist a better algorithm?'",
          options: [
            "Lower bounds and optimality",
            "Correctness and readability",
            "Compilation time and portability",
            "Parallelism and caching",
          ],
          correct: 0,
          translation: "أي زوج تذكره المحاضرة تحت سؤال: هل توجد خوارزمية أفضل؟",
          explanation:
            "المحاضرة تربط هذا السؤال بالحدود الدنيا (Lower bounds) والأمثلية (Optimality). الصحة (Correctness) من معايير الحكم على جودة الخوارزمية وليست من هذا السؤال.",
          tags: ["Lower Bounds", "Optimality"],
          ref: "Lecture 02 — Slide: Analysis of Algorithms",
        },
        {
          q: "3. Why should algorithm analysis NOT depend on the computing platform, language, or compiler?",
          options: [
            "Because all computers run at exactly the same speed",
            "Because compilers never change the running time",
            "Because programming languages are all identical",
            "Because it should reveal the intrinsic properties of the algorithm itself",
          ],
          correct: 3,
          translation:
            "لماذا يجب ألا يعتمد تحليل الخوارزمية على المنصة أو اللغة أو المترجم؟",
          explanation:
            "المحاضرة تقول إن التحليل يجب أن يكشف الخصائص الجوهرية للخوارزمية نفسها. الخيارات الأخرى ادعاءات غير صحيحة (الأجهزة تختلف في السرعة والمترجمات تؤثر على الزمن).",
          tags: ["Machine Model", "Analysis"],
          ref: "Lecture 02 — Slide: Machine Model",
        },
        {
          q: "4. Which of the following is an elementary step in the machine model?",
          options: [
            "Sorting an array of n elements",
            "Assigning a value to a scalar variable",
            "Searching a database for a key",
            "Multiplying two n x n matrices",
          ],
          correct: 1,
          translation:
            "أي مما يلي يعتبر خطوة أولية (Elementary step) في نموذج الآلة؟",
          explanation:
            "الخطوات الأولية هي العمليات الحسابية والمنطقية والمقارنة وإسناد قيمة لمتغير بسيط. الترتيب والبحث وضرب المصفوفات عمليات مركبة تتكون من خطوات كثيرة.",
          tags: ["Elementary Steps", "Machine Model"],
          ref: "Lecture 02 — Slide: Machine Model",
        },
        {
          q: "5. Assume a computer speed of 10^6 IPS and a database of size n = 10^6. About how long does an algorithm with time complexity n^2 take?",
          options: [
            "About 1 second",
            "About 20 seconds",
            "About 40 quadrillion years",
            "About 12 days",
          ],
          correct: 3,
          translation:
            "بافتراض سرعة 10^6 تعليمة في الثانية وحجم مدخل n = 10^6، كم يقارب زمن خوارزمية تعقيدها n^2؟",
          explanation:
            "n^2 = 10^12 عملية، والسرعة 10^6 عملية في الثانية، فالزمن 10^6 ثانية وهو حوالي 12 يوم. الثانية الواحدة تخص n، و20 ثانية تخص n log n، و40 كوادريليون سنة تخص 2^n.",
          tags: ["Time Complexity", "Execution Time"],
          ref: "Lecture 02 — Slide: Example (execution time table)",
        },
        {
          q: "6. In the same setting (10^6 IPS, n = 10^6), how long does an n log n algorithm take?",
          options: [
            "About 1 second",
            "About 20 seconds",
            "About 12 days",
            "About 40 quadrillion years",
          ],
          correct: 1,
          translation:
            "في نفس الفرض (10^6 IPS و n = 10^6)، كم يستغرق خوارزمية n log n؟",
          explanation:
            "n log n حوالي 20 × 10^6 عملية، فالزمن حوالي 20 ثانية. الثانية الواحدة لـ n فقط، و12 يوم لـ n^2.",
          tags: ["n log n", "Execution Time"],
          ref: "Lecture 02 — Slide: Example (execution time table)",
        },
        {
          q: "7. Which of the following is a use of time complexity according to the lecture?",
          options: [
            "It tells us how efficient a design is before its costly implementation",
            "It guarantees that the program has no bugs",
            "It gives the exact running time in seconds on every machine",
            "It automatically reduces the memory used",
          ],
          correct: 0,
          translation: "أي مما يلي من فوائد التعقيد الزمني حسب المحاضرة؟",
          explanation:
            "من فوائده أنه يخبرنا بكفاءة التصميم قبل تكلفة التنفيذ، ويكشف نقاط الاختناق ويقارن الخوارزميات. هو لا يضمن خلو البرنامج من الأخطاء ولا يعطي زمنًا دقيقًا بالثواني ولا يقلل الذاكرة.",
          tags: ["Time Complexity", "Efficiency"],
          ref: "Lecture 02 — Slide: Time Complexity",
        },
        {
          q: "8. What is T(n) = 23n^3 + 5n^2 log n + 7n log^2 n + 4 log n + 6 in Theta notation?",
          options: ["Θ(n^2 log n)", "Θ(23n^3)", "Θ(n^3)", "Θ(n^3 + n^2 log n)"],
          correct: 2,
          translation:
            "ما قيمة T(n) = 23n^3 + 5n^2 log n + 7n log^2 n + 4 log n + 6 بترميز Theta؟",
          explanation:
            "نحذف الحدود الأقل رتبة ثم المعامل الثابت للحد الأكبر فيبقى Θ(n^3). كتابة Θ(23n^3) أو إبقاء حد إضافي غلط لأن الثوابت والحدود الصغرى تُحذف.",
          tags: ["Theta", "Dominant Term"],
          ref: "Lecture 02 — Slide: T(n) = Θ(f(n))",
        },
        {
          q: "9. Why do we drop the constant multiplicative factor when simplifying T(n)?",
          options: [
            "Because constant factors are always equal to 1",
            "With a 10 times faster computer the leading coefficient changes, so it is technology dependent anyway",
            "Because constants make the algorithm slower",
            "Because the leading term never affects behavior for large n",
          ],
          correct: 1,
          translation: "لماذا نحذف المعامل الثابت عند تبسيط T(n)؟",
          explanation:
            "لأن المعامل يتغير مع التكنولوجيا (حاسوب أسرع 10 مرات يقسمه على 10) فهو يعتمد على التقنية. الخيار الأخير غلط لأن الحد الأكبر هو الذي يحدد السلوك عند القيم الكبيرة.",
          tags: ["Constants", "Simplification"],
          ref: "Lecture 02 — Slide: T(n) = Θ(f(n))",
        },
        {
          q: "10. Which ordering of function classes is correct (from slowest to fastest growth)?",
          options: [
            "Constant << Polynomial << Logarithmic << Exponential << Poly-logarithmic << Factorial",
            "Logarithmic << Constant << Poly-logarithmic << Polynomial << Factorial << Exponential",
            "Constant << Logarithmic << Polynomial << Poly-logarithmic << Factorial << Exponential",
            "Constant << Logarithmic << Poly-logarithmic << Polynomial << Exponential << Factorial",
          ],
          correct: 3,
          translation:
            "ما الترتيب الصحيح لفئات الدوال من الأبطأ نموًا إلى الأسرع؟",
          explanation:
            "الترتيب المذكور في المحاضرة هو ثابت ثم لوغاريتمي ثم لوغاريتمي متعدد الحدود ثم كثير حدود ثم أسي ثم Factorial. الخيارات الأخرى تبدل مواضع بعض الفئات.",
          tags: ["Growth Rates", "Ordering Functions"],
          ref: "Lecture 02 — Slide: Ordering Functions",
        },
        {
          q: "11. Which statement defines f(n) = Θ(g(n))?",
          options: [
            "There exist positive c1, c2, n0 such that c1 g(n) ≤ f(n) ≤ c2 g(n) for all n ≥ n0",
            "There exist c, n0 > 0 such that f(n) ≤ c g(n) for all n ≥ n0",
            "There exist c, n0 > 0 such that c g(n) ≤ f(n) for all n ≥ n0",
            "For every c > 0 there exists n0 such that f(n) < c g(n) for all n ≥ n0",
          ],
          correct: 0,
          translation: "أي عبارة تعرّف f(n) = Θ(g(n))؟",
          explanation:
            "Theta حد محكم من الجهتين: ثابتان c1 و c2 يحصران f بين c1·g و c2·g. الخيار الثاني تعريف Big Oh، والثالث تعريف Big Omega، والرابع تعريف little o.",
          tags: ["Theta", "Tight Bound"],
          ref: "Lecture 02 — Slide: Theta: Asymptotic Tight Bound",
        },
        {
          q: "12. What does f(n) = O(g(n)) mean?",
          options: [
            "g(n) is an asymptotic lower bound of f(n)",
            "f(n) < c g(n) for every c > 0 when n is large enough",
            "g(n) is an asymptotic upper bound: f(n) ≤ c g(n) for all n ≥ n0 for some c, n0 > 0",
            "f(n) is squeezed between c1 g(n) and c2 g(n)",
          ],
          correct: 2,
          translation: "ماذا تعني f(n) = O(g(n))؟",
          explanation:
            "Big Oh حد أعلى: توجد c و n0 بحيث f(n) ≤ c·g(n). الخيار الثاني Omega، والثالث little o (لكل c)، والرابع Theta.",
          tags: ["Big Oh", "Upper Bound"],
          ref: "Lecture 02 — Slide: Big Oh: Asymptotic Upper Bound",
        },
        {
          q: "13. Which statement defines f(n) = o(g(n)) (little oh)?",
          options: [
            "There exist c, n0 > 0 such that f(n) ≤ c g(n) for all n ≥ n0",
            "For every c > 0 there exists n0 > 0 such that c g(n) < f(n) for all n ≥ n0",
            "There exist c1, c2, n0 > 0 such that c1 g(n) ≤ f(n) ≤ c2 g(n)",
            "For every c > 0 there exists n0 > 0 such that f(n) < c g(n) for all n ≥ n0",
          ],
          correct: 3,
          translation: "أي عبارة تعرّف f(n) = o(g(n))؟",
          explanation:
            "little o تتطلب تحقق f(n) < c·g(n) لكل c > 0 مهما صغرت، وهذا حد أعلى غير محكم. الخيار الأول Big Oh، والثاني little omega، والثالث Theta.",
          tags: ["Little Oh", "Non-tight Bound"],
          ref: "Lecture 02 — Slide: Little oh: Non-tight Asymptotic Upper Bound",
        },
        {
          q: "14. If L = lim (n→∞) f(n)/g(n) = 0, which conclusion is correct?",
          options: [
            "f(n) = ω(g(n))",
            "f(n) = o(g(n)) and f(n) = O(g(n))",
            "f(n) = Θ(g(n))",
            "f(n) = Ω(g(n)) only",
          ],
          correct: 1,
          translation: "إذا كانت L = lim f(n)/g(n) = 0 فما النتيجة الصحيحة؟",
          explanation:
            "عندما تكون النهاية صفرًا فرتبة نمو f أقل من g، فتكون f = o(g) وأيضًا O(g). لا تصح Θ أو ω أو Ω لأنها تتطلب أن f لا تنمو أبطأ من g.",
          tags: ["Ratio Limit", "Little Oh"],
          ref: "Lecture 02 — Slide: Asymptotics by ratio limit",
        },
        {
          q: "15. If L = lim (n→∞) f(n)/g(n) = ∞, which conclusion is correct?",
          options: [
            "f(n) = o(g(n))",
            "f(n) = Θ(g(n))",
            "f(n) = ω(g(n))",
            "f(n) = O(g(n))",
          ],
          correct: 2,
          translation: "إذا كانت L = lim f(n)/g(n) = ∞ فما النتيجة الصحيحة؟",
          explanation:
            "النهاية اللانهائية تعني أن f تنمو أسرع من g، فتكون f = ω(g) وأيضًا Ω(g). كل من o و Θ و O يعني أن f لا تتفوق على g.",
          tags: ["Ratio Limit", "Little Omega"],
          ref: "Lecture 02 — Slide: Asymptotics by ratio limit",
        },
        {
          q: "16. How are log_b n and log_c n related asymptotically?",
          options: [
            "log_b n = Θ(log_c n), because the limit of their ratio is the constant log_b c",
            "log_b n = o(log_c n)",
            "log_b n = ω(log_c n)",
            "They are not comparable",
          ],
          correct: 0,
          translation: "ما العلاقة التقاربية بين log_b n و log_c n؟",
          explanation:
            "log_b n = log_b c · log_c n، فنسبة الدالتين ثابت موجب (log_b c)، وبالتالي Θ. لو كانت النسبة صفرًا أو ∞ لكانت o أو ω.",
          tags: ["Logarithms", "Ratio Limit"],
          ref: "Lecture 02 — Slide: Examples: log_b n vs. log_c n",
        },
        {
          q: "17. According to the Big O Fact, a polynomial of degree k is:",
          options: ["O(n^(k-1))", "O(n^k)", "O(k·n)", "O(2^k)"],
          correct: 1,
          translation: "حسب حقيقة Big O، كثيرة الحدود من الدرجة k هي:",
          explanation:
            "تُثبت المحاضرة أن f(n) ≤ c·n^k بأخذ القيم المطلقة للمعاملات وجمعها. الدرجة الأقل من k أو أسس مختلفة لا تصلح كحد أعلى.",
          tags: ["Polynomial", "Big Oh"],
          ref: "Lecture 02 — Slide: Big O Fact",
        },
        {
          q: "18. Which pair of sorting algorithms has worst-case time complexity Θ(n log n)?",
          options: [
            "Quick-Sort and Insertion-Sort",
            "Insertion-Sort and Selection-Sort",
            "Quick-Sort and Selection-Sort",
            "Merge-Sort and Heap-Sort",
          ],
          correct: 3,
          translation: "أي زوج من خوارزميات الترتيب أسوأ حالاته Θ(n log n)؟",
          explanation:
            "المحاضرة تذكر Merge-Sort و Heap-Sort بـ Θ(n log n)، أما Quick-Sort و Insertion-Sort و Selection-Sort فأسوأ حالاتها Θ(n^2).",
          tags: ["Sorting", "Worst Case"],
          ref: "Lecture 02 — Slide: Example Problem: Sorting",
        },
        {
          q: "19. For multiplying two matrices of floating point numbers, what are the input size measure and the basic operation?",
          options: [
            "Number of items in the list; key comparison",
            "Number of vertices and edges; visiting a vertex",
            "Dimensions of the matrices; floating point multiplication",
            "Number n; floating point addition",
          ],
          correct: 2,
          translation:
            "في ضرب مصفوفتين من الأعداد العشرية، ما مقياس حجم المدخل والعملية الأساسية؟",
          explanation:
            "الجدول في المحاضرة يحدد أبعاد المصفوفات كمقياس للحجم والضرب العشري كعملية أساسية. مقارنة المفتاح للبحث، وزيارة العقدة لمسائل الرسوم.",
          tags: ["Input Size", "Basic Operation"],
          ref: "Lecture 02 — Slide: Input size and basic operation examples",
        },
        {
          q: "20. How is the average-case time A(n) defined?",
          options: [
            "A weighted sum of the expected number of basic operations over all inputs of size n under an assumed probability distribution",
            "The average of the worst case and the best case",
            "The minimum number of basic operations over all inputs of size n",
            "The maximum number of basic operations over all inputs of size n",
          ],
          correct: 0,
          translation: "كيف يُعرَّف زمن الحالة المتوسطة A(n)؟",
          explanation:
            "المحاضرة تؤكد أنه ليس متوسط أسوأ وأفضل حالة، بل مجموع موزون للعمليات المتوقعة بافتراض توزيع احتمالي للمدخلات. الأقل والأكبر هما best و worst.",
          tags: ["Average Case", "Probability"],
          ref: "Lecture 02 — Slide: Best-case, average-case, worst-case",
        },
        {
          q: "21. What is the total cost bound of a simple if-else statement with costs c1 (condition), c2 (then) and c3 (else)?",
          options: [
            "Total cost = c1 + c2 + c3",
            "Total cost = c1 · max(c2, c3)",
            "Total cost ≤ c1 + min(c2, c3)",
            "Total cost ≤ c1 + max(c2, c3)",
          ],
          correct: 3,
          translation:
            "ما حد التكلفة الكلية لجملة if-else بتكاليف c1 للشرط و c2 للفرع الأول و c3 للفرع الآخر؟",
          explanation:
            "يُنفَّذ الشرط دائمًا وفرع واحد فقط من الفرعين، فنأخذ الأكبر منهما كحد أعلى. جمع الفرعين غلط لأنهما لا يُنفذان معًا، والأصغر لا يعطي حدًا أعلى.",
          tags: ["Execution Time", "If Statement"],
          ref: "Lecture 02 — Slide: The Execution Time of Algorithms (Simple If-Statement)",
        },
        {
          q: "22. In sequential search, which case gives O(1) for a successful search?",
          options: [
            "The item is in the last location of the array",
            "The item is in the first location of the array (best case)",
            "The item is in the middle of the array",
            "The item is not in the array",
          ],
          correct: 1,
          translation:
            "في البحث التتابعي (Sequential Search)، أي حالة تعطي O(1) لبحث ناجح؟",
          explanation:
            "الأفضل أن يكون العنصر في أول موضع فتتم مقارنة واحدة. الأخير يعطي O(n) أسوأ حالة، وغير الموجود يعطي O(n) أيضًا.",
          tags: ["Sequential Search", "Best Case"],
          ref: "Lecture 02 — Slide: Sequential Search",
        },
        {
          q: "23. What is the worst-case input for Insertion Sort and its time complexity?",
          options: [
            "A reverse-sorted array, giving Θ(n^2)",
            "An already sorted array, giving Θ(n log n)",
            "A reverse-sorted array, giving Θ(n log n)",
            "A reverse-sorted array, giving Θ(n)",
          ],
          correct: 0,
          translation: "ما أسوأ مدخل لـ Insertion Sort وما تعقيده؟",
          explanation:
            "في المصفوفة المرتبة عكسيًا يكون t_i = i، والمجموع Σi = n(n+1)/2 − 1 = Θ(n^2). باقي الخيارات تعطي تعقيدًا خاطئًا.",
          tags: ["Insertion Sort", "Worst Case"],
          ref: "Lecture 02 — Slide: Insertion Sort: Time Complexity",
        },
        {
          q: "24. In the Master theorem, if T(n) = aT(⌈n/b⌉) + O(n^d) and a = b^d, then:",
          options: [
            "T(n) ∈ Θ(n^d)",
            "T(n) ∈ Θ(n^(log_b a))",
            "T(n) ∈ Θ(n^d lg n)",
            "T(n) ∈ Θ(n^(d+1))",
          ],
          correct: 2,
          translation:
            "في نظرية Master، إذا كانت T(n) = aT(⌈n/b⌉) + O(n^d) و a = b^d فإن:",
          explanation:
            "الحالة a = b^d تعطي Θ(n^d lg n). Θ(n^d) تخص a < b^d، و Θ(n^(log_b a)) تخص a > b^d.",
          tags: ["Master Theorem", "Recurrence"],
          ref: "Lecture 02 — Slide: Master theorem",
        },
        {
          q: "25. What is the growth-rate function of the nested while-loop example where the inner loop runs n times for each of the n outer iterations?",
          options: ["O(n)", "O(n^2)", "O(n^3)", "O(2^n)"],
          correct: 1,
          translation:
            "ما دالة معدل النمو لمثال الحلقتين المتداخلتين حيث تتكرر الداخلية n مرة لكل تكرار من n؟",
          explanation:
            "التكلفة تساوي a·n^2 + b·n + c، فالحد الأكبر n^2 ولذلك O(n^2). المثال ذو الحلقات الثلاث هو الذي يعطي O(n^3).",
          tags: ["Nested Loop", "Growth Rate"],
          ref: "Lecture 02 — Slide: Growth-Rate Functions – Example2",
        },
        {
          type: "essay",
          q: "1. Define an algorithm, and list the criteria used to judge how good it is.",
          translation:
            "عرّف الخوارزمية واذكر المعايير التي يُحكم بها على جودتها.",
          answer:
            "An algorithm is a sequence of unambiguous instructions for solving a problem, i.e., for obtaining a required output for any legitimate input in a finite amount of time.\n" +
            "How good is it? Correctness, time efficiency, and space efficiency.\n" +
            "Does a better algorithm exist? Lower bounds and optimality.",
          tags: ["Algorithm", "Analysis"],
          ref: "Lecture 02 — Slide: Algorithm / Analysis of Algorithms",
        },
        {
          type: "essay",
          q: "2. Explain time complexity and give its uses.",
          translation: "اشرح التعقيد الزمني واذكر فوائده.",
          answer:
            "Time complexity shows the dependence of an algorithm's running time on input size (worst-case or average/expected-case).\n" +
            "Uses: tells how efficient a design is before costly implementation; reveals inefficiency bottlenecks; compares different algorithms for the same problem; helps find the true complexity of the problem itself (how fast is the fastest algorithm); helps classify problems by time complexity.",
          tags: ["Time Complexity"],
          ref: "Lecture 02 — Slide: Time Complexity",
        },
        {
          type: "essay",
          q: "3. Why do we simplify T(n) by dropping constants and lower order terms? Illustrate with the lecture example.",
          translation:
            "لماذا نبسّط T(n) بحذف الثوابت والحدود الأقل رتبة؟ وضّح بمثال المحاضرة.",
          answer:
            "Example: T(n) = 23n^3 + 5n^2 log n + 7n log^2 n + 4 log n + 6 = Θ(n^3).\n" +
            "1) Asymptotically (very large n) the leading term largely determines the behavior.\n" +
            "2) With new technology (e.g., 10 times faster) the leading coefficient changes (divided by 10), so it is technology dependent anyway.\n" +
            "3) The simplification can still distinguish important complexity classes, e.g., linear vs. quadratic, or polynomial vs. exponential.",
          tags: ["Theta", "Simplification"],
          ref: "Lecture 02 — Slide: T(n) = Θ(f(n))",
        },
        {
          type: "essay",
          q: "4. State the formal definitions of Θ, O, Ω, o and ω, and give the rough intuitive meaning of each.",
          translation:
            "اذكر التعريفات الرسمية للرموز Θ و O و Ω و o و ω مع المعنى التقريبي لكل منها.",
          answer:
            "Θ: exist c1, c2, n0 > 0 such that for all n ≥ n0, c1 g(n) ≤ f(n) ≤ c2 g(n). Meaning: f(n) ≈ c g(n) (tight bound).\n" +
            "O: exist c, n0 > 0 such that for all n ≥ n0, f(n) ≤ c g(n). Meaning: f(n) ≤ c g(n) (upper bound).\n" +
            "Ω: exist c, n0 > 0 such that for all n ≥ n0, c g(n) ≤ f(n). Meaning: f(n) ≥ c g(n) (lower bound).\n" +
            "o: for all c > 0 exists n0 > 0 such that for all n ≥ n0, f(n) < c g(n). Non-tight upper bound.\n" +
            "ω: for all c > 0 exists n0 > 0 such that for all n ≥ n0, c g(n) < f(n). Non-tight lower bound.",
          tags: ["Asymptotic Notation"],
          ref: "Lecture 02 — Slide: Definitions of Asymptotic Notations",
        },
        {
          type: "essay",
          q: "5. Explain how the ratio limit L = lim f(n)/g(n) is used to compare orders of growth.",
          translation:
            "اشرح كيف تُستخدم نهاية النسبة L = lim f(n)/g(n) للمقارنة بين رتب النمو.",
          answer:
            "If L = 0: order of growth of f < order of growth of g, so f = o(g) and f = O(g).\n" +
            "If 0 < L < ∞ (a positive constant): same order of growth, so f = Θ(g), f = O(g), f = Ω(g).\n" +
            "If L = ∞: order of growth of f > order of growth of g, so f = ω(g) and f = Ω(g).\n" +
            "Example: log_b n = log_b c · log_c n, so the limit of the ratio is the constant log_b c, hence log_b n = Θ(log_c n).",
          tags: ["Ratio Limit"],
          ref: "Lecture 02 — Slide: Asymptotics by ratio limit",
        },
        {
          type: "essay",
          q: "6. Describe Insertion Sort and derive its worst-case time complexity.",
          translation:
            "صف خوارزمية Insertion Sort واستنتج تعقيدها الزمني في أسوأ حالة.",
          answer:
            "Insertion Sort is an incremental algorithm: for i = 2..n, the prefix A[1..i-1] is sorted (loop invariant); A[i] is saved as key and inserted into the sorted prefix by shifting larger elements to the right.\n" +
            "T(n) = Θ(Σ_{i=2..n} (1 + t_i + 1)) = Θ(n + Σ t_i).\n" +
            "Worst case (reverse sorted): t_i = i, so Σ_{i=2..n} i = n(n+1)/2 − 1 = Θ(n^2).\n" +
            "Therefore T(n) = Θ(n + n^2) = Θ(n^2).",
          tags: ["Insertion Sort"],
          ref: "Lecture 02 — Slide: Insertion Sort: Time Complexity",
        },
        {
          type: "essay",
          q: "7. Explain the sorting example: list the algorithms and their worst-case complexities and state the complexity of the sorting problem.",
          translation:
            "اشرح مثال الترتيب: اذكر الخوارزميات وتعقيداتها في أسوأ حالة وتعقيد مسألة الترتيب نفسها.",
          answer:
            "Quick-Sort, Insertion-Sort, Selection-Sort: Θ(n^2). Merge-Sort and Heap-Sort: Θ(n log n).\n" +
            "There are infinitely many sorting algorithms, so Merge-Sort and Heap-Sort are worst-case optimal, and the complexity of the SORTING problem is Θ(n log n).",
          tags: ["Sorting", "Optimality"],
          ref: "Lecture 02 — Slide: Example Problem: Sorting",
        },
        {
          type: "essay",
          q: "8. Prove that a polynomial of degree k is O(n^k).",
          translation: "أثبت أن كثيرة الحدود من الدرجة k هي O(n^k).",
          answer:
            "Let f(n) = b_k n^k + b_(k-1) n^(k-1) + ... + b_1 n + b_0 and a_i = |b_i|.\n" +
            "Then f(n) ≤ a_k n^k + a_(k-1) n^(k-1) + ... + a_1 n + a_0.\n" +
            "f(n) ≤ n^k Σ a_i (n^i / n^k) ≤ n^k Σ a_i ≤ c n^k, where c = Σ a_i (for n ≥ 1).\n" +
            "Hence f(n) = O(n^k).",
          tags: ["Polynomial", "Proof"],
          ref: "Lecture 02 — Slide: Big O Fact",
        },
        {
          type: "essay",
          q: "9. Explain best, worst and average case, and list the steps of mathematical analysis of nonrecursive algorithms.",
          translation:
            "اشرح الحالة الأفضل والأسوأ والمتوسطة، واذكر خطوات التحليل الرياضي للخوارزميات غير التكرارية.",
          answer:
            "Worst case W(n): maximum over inputs of size n. Best case B(n): minimum over inputs of size n. Average case A(n): average over inputs of size n (NOT the average of worst and best), computed as a weighted sum of the expected C(n) under some assumption about the probability distribution of inputs.\n" +
            "Steps: 1) decide on parameter n indicating input size; 2) identify the basic operation; 3) determine worst, average and best case for inputs of size n; 4) set up a summation for C(n) reflecting the loop structure; 5) simplify the summation using standard formulas.",
          tags: ["Best Worst Average", "Nonrecursive Analysis"],
          ref: "Lecture 02 — Slide: Time efficiency of nonrecursive algorithms",
        },
        {
          type: "essay",
          q: "10. Analyze sequential search: unsuccessful search and the best, worst and average cases of a successful search.",
          translation:
            "حلل البحث التتابعي: البحث الفاشل، والحالات الأفضل والأسوأ والمتوسطة للبحث الناجح.",
          answer:
            "Unsuccessful search: the whole array is scanned, so O(n).\n" +
            "Best case: item in the first location, O(1). Worst case: item in the last location, O(n).\n" +
            "Average case: the number of key comparisons is 1, 2, ..., n, so the average is (Σ i)/n = ((n^2 + n)/2)/n = (n+1)/2, which is O(n).",
          tags: ["Sequential Search"],
          ref: "Lecture 02 — Slide: Sequential Search",
        },
        {
          type: "essay",
          q: "11. Using the lecture's assumptions (10^6 instructions per second, n = 10^6), compute the execution time of an n^2 algorithm and an n log n algorithm.",
          translation:
            "باستخدام فروض المحاضرة (10^6 تعليمة في الثانية و n = 10^6) احسب زمن تنفيذ خوارزمية n^2 وأخرى n log n.",
          answer:
            "Given: speed = 10^6 IPS, n = 10^6. Formula: time = (number of operations) / speed.\n" +
            "n^2: 10^12 operations / 10^6 = 10^6 seconds ≈ 11.6 days ≈ 12 days.\n" +
            "n log n: n log2 n ≈ 10^6 × 20 = 2 × 10^7 operations / 10^6 = 20 seconds.",
          tags: ["Execution Time"],
          ref: "Lecture 02 — Slide: Example (execution time table)",
        },
        {
          type: "essay",
          q: "12. Use the standard summation formulas to compute: (a) Σ_{i=1..100} i, (b) Σ_{i=1..10} i^2, (c) Σ_{i=0..9} 2^i.",
          translation:
            "استخدم قوانين المجاميع القياسية لحساب: (أ) مجموع i من 1 إلى 100، (ب) مجموع i^2 من 1 إلى 10، (ج) مجموع 2^i من 0 إلى 9.",
          answer:
            "(a) Σ i = n(n+1)/2 = 100 × 101 / 2 = 5050.\n" +
            "(b) Σ i^2 = n(n+1)(2n+1)/6 = 10 × 11 × 21 / 6 = 385.\n" +
            "(c) Σ_{i=0..n-1} 2^i = 2^n − 1 with n = 10: 2^10 − 1 = 1023.",
          tags: ["Summations"],
          ref: "Lecture 02 — Slide: Series / Some Mathematical Facts",
        },
        {
          type: "essay",
          q: "13. For the nested while-loop example (i from 1 to n, inner j from 1 to n) assume every cost c1..c8 = 1 and n = 10. Compute the total cost T(n) and its growth rate.",
          translation:
            "في مثال الحلقتين المتداخلتين (i من 1 إلى n والداخلية j من 1 إلى n) افترض أن كل التكاليف c1 إلى c8 تساوي 1 و n = 10. احسب التكلفة الكلية T(n) ومعدل نموها.",
          answer:
            "Counts: c1: 1, c2: 1, c3: n+1, c4: n, c5: n(n+1), c6: n*n, c7: n*n, c8: n.\n" +
            "T(n) = 1 + 1 + (n+1) + n + n(n+1) + n^2 + n^2 + n = 3n^2 + 4n + 3.\n" +
            "For n = 10: 2 + 11 + 10 + 110 + 100 + 100 + 10 = 343 (= 300 + 40 + 3).\n" +
            "Growth rate: T(n) = a n^2 + b n + c, so O(n^2).",
          tags: ["Nested Loop", "Cost Analysis"],
          ref: "Lecture 02 — Slide: Growth-Rate Functions – Example2",
        },
        {
          type: "essay",
          q: "14. Use the Master theorem to solve: (a) T(n) = 2T(n/2) + O(n), (b) T(n) = 4T(n/2) + O(n), (c) T(n) = T(n/2) + O(1).",
          translation:
            "استخدم نظرية Master لحل: (أ) T(n) = 2T(n/2) + O(n)، (ب) T(n) = 4T(n/2) + O(n)، (ج) T(n) = T(n/2) + O(1).",
          answer:
            "Rule: compare a with b^d. a < b^d: Θ(n^d). a = b^d: Θ(n^d lg n). a > b^d: Θ(n^(log_b a)).\n" +
            "(a) a = 2, b = 2, d = 1: b^d = 2 = a, so T(n) = Θ(n lg n).\n" +
            "(b) a = 4, b = 2, d = 1: b^d = 2 < a, so T(n) = Θ(n^(log_2 4)) = Θ(n^2).\n" +
            "(c) a = 1, b = 2, d = 0: b^d = 1 = a, so T(n) = Θ(n^0 lg n) = Θ(lg n).",
          tags: ["Master Theorem"],
          ref: "Lecture 02 — Slide: Master theorem",
        },
        {
          type: "essay",
          q: "15. Use the ratio limit to compare: (a) f(n) = 3n^2 + 5n with g(n) = n^2, (b) f(n) = n with g(n) = n^2.",
          translation:
            "استخدم نهاية النسبة للمقارنة بين: (أ) f(n) = 3n^2 + 5n و g(n) = n^2، (ب) f(n) = n و g(n) = n^2.",
          answer:
            "Formula: L = lim_{n→∞} f(n)/g(n).\n" +
            "(a) L = lim (3n^2 + 5n)/n^2 = lim (3 + 5/n) = 3, a positive constant, so f(n) = Θ(n^2).\n" +
            "(b) L = lim n/n^2 = lim 1/n = 0, so f(n) = o(n^2) (and also O(n^2)).",
          tags: ["Ratio Limit"],
          ref: "Lecture 02 — Slide: Asymptotics by ratio limit",
        },
      ],
    },
    {
      t: "المحاضرة 3 — استراتيجية Divide and Conquer ومبرهنة الماستر",
      d: "تطبيق استراتيجية فرق تسد، خوارزمية Merge Sort، وحل العلاقات التكرارية باستخدام Master Theorem.",
      id: "algorithms-lecture-03",
      pdf: "datenew/subjects/algorithms/lectures/Lecture 3.pdf",
      pdf2: "datenew/subjects/algorithms/questions/Questions on each lecture/CS311_Lecture3_Sorting_DivideConquer_Questions.pdf",

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description: "شروحات العلاقات التكرارية ومبرهنة الماستر بالعربي",
          links: [
            {
              t: "Start Practicing - Master Theorem & Recurrences",
              d: "حل العلاقات التكرارية وتطبيق Master Theorem بأسلوب مبسط",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=e7ozTC6txss",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Start Practicing - Master Theorem & Recurrences  شرح دكتور ماجد ",
              d: "حل العلاقات التكرارية وتطبيق Master Theorem بأسلوب مبسط",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://youtu.be/QEhxICw8F9E",
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
          description: "شرح Merge Sort وMaster Method عالمياً",
          links: [
            {
              t: "Abdul Bari - Divide and Conquer & Master Method",
              d: "الشرح الأشهر لعلاقات Recurrence ومبرهنة الماستر وMerge Sort",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=7Y7UcBjUPYI",
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
          description: "توثيقات وملاحظات مبرهنة الماستر",
          links: [
            {
              t: "GeeksforGeeks - Master Theorem",
              d: "دليل شامل لشرح حالات Master Theorem مع أمثلة محلولة للامتحانات",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/dsa/recurrence-relations-notes-for-gate-exam/",
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
          description: "محاكاة تتبع شجرة الاستدعاءات التكرارية",
          links: [
            {
              t: "Algorithm Visualizer - Merge Sort & Recursion",
              d: "منصة تفاعلية لتتبع خوارزميات التكرار والتقسيم خطوة بخطوة",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://algo-visualize-login-signup.vercel.app/login",
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
          q: "Which topics were covered in the previous lecture, as recalled at the start?",
          options: [
            "Compilers, parsing, and code generation",
            "Binary trees, heaps, and tries",
            "Graph algorithms, dynamic programming, and hashing",
            "Analysis of algorithms, asymptotic notation, and insertion sort",
          ],
          correct: 3,
        },
        {
          q: "Insertion sort is described as what kind of algorithm?",
          options: [
            "A divide-and-conquer algorithm",
            "A greedy algorithm",
            "An incremental algorithm",
            "A randomized algorithm",
          ],
          correct: 2,
        },
        {
          q: "In the slides' pseudocode, the outer loop of InsertionSort starts at:",
          options: ["i = 2", "i = 1", "i = 0", "i = n"],
          correct: 0,
        },
        {
          q: "What does each iteration of the outer loop store in 'key'?",
          options: [
            "The value A[n]",
            "The index i",
            "The value A[i]",
            "The value A[1]",
          ],
          correct: 2,
        },
        {
          q: "In the pseudocode, j is initially set to:",
          options: ["0", "i + 1", "n", "i − 1"],
          correct: 3,
        },
        {
          q: "What is the while-loop condition in InsertionSort?",
          options: [
            "j > 0 and A[j] > key",
            "j > 0 only",
            "j < n and A[j] < key",
            "A[j] = key",
          ],
          correct: 0,
        },
        {
          q: "What does the body of the while loop do?",
          options: [
            "Increments i",
            "Swaps A[j] with A[n]",
            "Deletes A[j]",
            "Shifts A[j] one position to the right (A[j+1] = A[j]) and decrements j",
          ],
          correct: 3,
        },
        {
          q: "After the while loop ends, what is done with key?",
          options: [
            "A[j] = key",
            "A[j+1] = key",
            "key is discarded",
            "A[1] = key",
          ],
          correct: 1,
        },
        {
          q: "What is the loop invariant stated in the lecture?",
          options: [
            "A[1..i] is reversed",
            "A[i..n] is sorted and A[1..i−1] is untouched",
            "A[1..n] is always sorted",
            "A[1..i−1] is sorted and A[i..n] is untouched",
          ],
          correct: 3,
        },
        {
          q: "In the first picture example (11 4 5 2 15 7), what is the array after the first step?",
          options: [
            "2 4 5 11 15 7",
            "4 11 5 2 15 7",
            "4 5 11 2 15 7",
            "11 4 5 2 7 15",
          ],
          correct: 1,
        },
        {
          q: "Which is the final sorted array in that example?",
          options: [
            "2 4 5 7 11 15",
            "4 2 5 7 11 15",
            "2 4 5 11 15 7",
            "15 11 7 5 4 2",
          ],
          correct: 0,
        },
        {
          q: "In the trace of 30 10 40 20, what are i, j, and key at the first outer iteration (i = 2)?",
          options: [
            "i = 2, j = 2, key = 40",
            "i = 2, j = 1, key = 10",
            "i = 1, j = 0, key = 30",
            "i = 3, j = 1, key = 20",
          ],
          correct: 1,
        },
        {
          q: "What is the final array in the trace of 30 10 40 20?",
          options: ["10 30 40 20", "10 20 30 40", "40 30 20 10", "20 10 30 40"],
          correct: 1,
        },
        {
          q: "In the worst case for insertion sort, how many while-loop iterations does the i-th step take (tᵢ)?",
          options: [
            "1 iteration",
            "n iterations always",
            "0 iterations",
            "i iterations (the input is reverse sorted)",
          ],
          correct: 3,
        },
        {
          q: "What does the sum of i for i = 2 to n equal?",
          options: ["2n", "n", "n log n", "n(n+1)/2 − 1, which is Θ(n²)"],
          correct: 3,
        },
        {
          q: "What is the worst-case running time of insertion sort?",
          options: ["Θ(n log n)", "Θ(n)", "Θ(log n)", "Θ(n²)"],
          correct: 3,
        },
        {
          q: "What are the three steps of the divide-and-conquer paradigm?",
          options: [
            "Initialize, iterate, and terminate",
            "Read, write, and execute",
            "Sort, search, and merge",
            "Divide, conquer (solve subproblems recursively), and combine",
          ],
          correct: 3,
        },
        {
          q: "In the divide step, we:",
          options: [
            "Combine the solutions",
            "Divide the problem into subproblems",
            "Sort the output",
            "Delete the input",
          ],
          correct: 1,
        },
        {
          q: "In the conquer step, we:",
          options: [
            "Merge the solutions",
            "Solve the subproblems recursively",
            "Ignore the subproblems",
            "Divide the input in half once",
          ],
          correct: 1,
        },
        {
          q: "In the divide-and-conquer technique picture, a problem of size n is split into:",
          options: [
            "n subproblems of size 1",
            "Two subproblems of size n/2",
            "One subproblem of size n−1",
            "Three subproblems of size n/3",
          ],
          correct: 1,
        },
        {
          q: "Which of the following is listed as a divide-and-conquer example?",
          options: [
            "Mergesort and quicksort",
            "Selection sort and counting sort",
            "Insertion sort and bubble sort",
            "Heap sort and radix sort",
          ],
          correct: 0,
        },
        {
          q: "Which of the following is also listed as a divide-and-conquer example?",
          options: [
            "Floyd-Warshall algorithm",
            "Strassen's algorithm for matrix multiplication",
            "Dijkstra's algorithm",
            "Kruskal's algorithm",
          ],
          correct: 1,
        },
        {
          q: "Which other problems are listed as divide-and-conquer examples?",
          options: [
            "Binary search, powering a number, and the closest pair problem",
            "Knapsack, coin change, and edit distance",
            "Huffman coding and the activity selector",
            "Topological sort and Euler tours",
          ],
          correct: 0,
        },
        {
          q: "What does binary search find?",
          options: [
            "The median of an unsorted array",
            "An element in a sorted array",
            "A cycle in a graph",
            "The maximum of any array",
          ],
          correct: 1,
        },
        {
          q: "In binary search, what is the 'divide' step?",
          options: [
            "Check the middle element",
            "Sort the array",
            "Merge two halves",
            "Pick a random element",
          ],
          correct: 0,
        },
        {
          q: "In binary search, what is the 'conquer' step?",
          options: [
            "Count the elements",
            "Recursively search one sub-array",
            "Sort the sub-arrays",
            "Search both sub-arrays",
          ],
          correct: 1,
        },
        {
          q: "In binary search, what is the 'combine' step?",
          options: [
            "Merging both halves",
            "Sorting the result",
            "Linear in the array size",
            "Trivial",
          ],
          correct: 3,
        },
        {
          q: "In the binarySearch code, mid is computed as:",
          options: [
            "(low + high) / 2",
            "(low − high) / 2",
            "size / 3",
            "low × high",
          ],
          correct: 0,
        },
        {
          q: "In the code, if a[mid] < x, what happens?",
          options: [
            "low = mid + 1",
            "return mid",
            "return −1",
            "high = mid − 1",
          ],
          correct: 0,
        },
        {
          q: "In the 'Find 9' example on the array 3 5 7 8 9 12 15, which element does the given code examine first?",
          options: ["9", "12", "8 (mid = (0 + 6)/2 = 3)", "3"],
          correct: 2,
        },
        {
          q: "What does the binarySearch code return if the element is not found?",
          options: ["0", "mid", "size", "−1"],
          correct: 3,
        },
        {
          q: "What is the basic strategy of mergesort?",
          options: [
            "Insert each element into a sorted prefix",
            "Pick a pivot and partition",
            "Repeatedly select the minimum",
            "Sort two sub-arrays recursively and merge the sorted arrays into one",
          ],
          correct: 3,
        },
        {
          q: "In the merge step, we repeatedly:",
          options: [
            "Compare the first elements of the remaining unprocessed portions and copy the smaller into A",
            "Sort each array again",
            "Copy the larger element first",
            "Swap adjacent elements",
          ],
          correct: 0,
        },
        {
          q: "When one of the arrays has been completely processed in merging, we:",
          options: [
            "Sort the remaining elements",
            "Stop and discard the rest",
            "Copy the remaining unprocessed elements from the other array into A",
            "Start over",
          ],
          correct: 2,
        },
        {
          q: "In the mergeSort pseudocode, mid is computed as:",
          options: [
            "(first − last) / 2",
            "first × last",
            "(first + last) / 2",
            "last − first",
          ],
          correct: 2,
        },
        {
          q: "In the mergeSort pseudocode, the recursive calls are on:",
          options: [
            "E[first..last] twice",
            "E[first..first] only",
            "E[mid..mid] only",
            "E[first..mid] and E[mid+1..last], followed by merge",
          ],
          correct: 3,
        },
        {
          q: "When does the mergeSort pseudocode do any work (recursion)?",
          options: [
            "When first < last",
            "When first > last",
            "Always",
            "When first = last",
          ],
          correct: 0,
        },
        {
          q: "What recurrence expresses the cost of merge sort in the slides?",
          options: [
            "T(n) = 2T(n−1) + Θ(n)",
            "T(n) = T(n/2) + Θ(1)",
            "T(n) = T(n−1) + Θ(1)",
            "T(n) = 2T(n/2) + Θ(n) for n > 1, with T(1) = 0",
          ],
          correct: 3,
        },
        {
          q: "What does that recurrence solve to?",
          options: ["Θ(lg n)", "Θ(n²)", "Θ(n)", "Θ(n lg n)"],
          correct: 3,
        },
        {
          q: "In merge sort, the combine step is:",
          options: [
            "Trivial",
            "Logarithmic",
            "Quadratic",
            "A linear-time merge",
          ],
          correct: 3,
        },
        {
          q: "In merge sort, the divide step is:",
          options: ["Quadratic", "Linear", "Trivial", "Logarithmic"],
          correct: 2,
        },
        {
          q: "The efficiency of mergesort in all cases is:",
          options: [
            "Θ(log n)",
            "Θ(n log n)",
            "Θ(n²) in the worst case only",
            "Θ(n) in the best case",
          ],
          correct: 1,
        },
        {
          q: "What is the space requirement of mergesort?",
          options: [
            "Θ(n), and it is not in-place",
            "Θ(log n), in-place",
            "Θ(1), in-place",
            "Θ(n²)",
          ],
          correct: 0,
        },
        {
          q: "How many comparisons does mergesort use compared with the theoretical minimum for comparison-based sorting?",
          options: [
            "The number is close to the theoretical minimum, about n lg n − 1.44n",
            "n² comparisons",
            "Far above the theoretical minimum",
            "Exactly n comparisons",
          ],
          correct: 0,
        },
        {
          q: "Mergesort can also be implemented:",
          options: [
            "Without recursion (bottom-up)",
            "Only in-place",
            "Only recursively",
            "Only with a stack",
          ],
          correct: 0,
        },
        {
          q: "The master theorem applies to recurrences of the form:",
          options: [
            "T(n) = aT(n) + n",
            "T(n) = aT(⌈n/b⌉) + O(nᵈ) for constants a > 0, b > 1, d ≥ 0",
            "T(n) = T(n−1) + n",
            "T(n) = aT(n/b) + 2ⁿ",
          ],
          correct: 1,
        },
        {
          q: "According to the master theorem, if a < bᵈ then:",
          options: [
            "T(n) ∈ Θ(nᵈ)",
            "T(n) ∈ Θ(nᵈ lg n)",
            "T(n) ∈ Θ(n^(log_b a))",
            "T(n) ∈ Θ(1)",
          ],
          correct: 0,
        },
        {
          q: "According to the master theorem, if a = bᵈ then:",
          options: [
            "T(n) ∈ Θ(n^(log_b a))",
            "T(n) ∈ Θ(nᵈ lg n)",
            "T(n) ∈ Θ(lg n)",
            "T(n) ∈ Θ(nᵈ)",
          ],
          correct: 1,
        },
        {
          q: "According to the master theorem, if a > bᵈ then:",
          options: [
            "T(n) ∈ Θ(n)",
            "T(n) ∈ Θ(nᵈ)",
            "T(n) ∈ Θ(nᵈ lg n)",
            "T(n) ∈ Θ(n^(log_b a))",
          ],
          correct: 3,
        },
        {
          q: "Applying the master theorem to mergesort, T(n) = 2T(n/2) + Θ(n), we have a = 2, b = 2, d = 1. Which case applies and what is the result?",
          options: [
            "a < bᵈ, giving Θ(n)",
            "a > bᵈ, giving Θ(n²)",
            "No case applies",
            "a = bᵈ, giving Θ(n lg n)",
          ],
          correct: 3,
        },
        {
          q: "For T(n) = 4T(n/2) + Θ(n) (a = 4, b = 2, d = 1), the master theorem gives:",
          options: [
            "Θ(n)",
            "Θ(n³)",
            "Θ(n lg n)",
            "Θ(n²), since a > bᵈ and log₂4 = 2",
          ],
          correct: 3,
        },

        // ─── Essay ───
        {
          type: "essay",
          q: "Explain insertion sort: how the algorithm works and why its worst-case running time is Θ(n²).",
          answer:
            "Insertion sort is an incremental algorithm. For i = 2 to n, it stores key = A[i], sets j = i − 1, and, while j > 0 and A[j] > key, shifts A[j] to A[j+1] and decrements j; finally it places key at A[j+1]. The loop invariant: A[1..i−1] is sorted and A[i..n] is untouched.\n\n" +
            "Worst case: the input is reverse sorted, so the while loop runs tᵢ = i times for each i. Therefore T(n) = Θ(n + Σ tᵢ) = Θ(n + Σ i) = Θ(n + n²) = Θ(n²), since the sum of i for i = 2 to n equals n(n+1)/2 − 1.",
          tags: ["CS311", "Lecture 3", "Sorting", "Divide and conquer"],
          ref: "CS 311 — Lecture 3",
        },
        {
          type: "essay",
          q: "Describe the divide-and-conquer paradigm, and show how binary search fits into it.",
          answer:
            "Divide-and-conquer has three steps: divide the problem into subproblems; conquer the subproblems by solving them recursively; combine the subproblem solutions. Examples: mergesort, quicksort, Strassen's matrix multiplication, binary search, powering a number, closest pair.\n\n" +
            "Binary search finds an element in a sorted array. Divide: check the middle element. Conquer: recursively search one sub-array (the left or the right, depending on the comparison). Combine: trivial. The code uses low, high, and mid = (low + high)/2, and returns −1 if the element is not found.",
          tags: ["CS311", "Lecture 3", "Sorting", "Divide and conquer"],
          ref: "CS 311 — Lecture 3",
        },
        {
          type: "essay",
          q: "Describe mergesort, give its recurrence and efficiency, and state its space requirement.",
          answer:
            "Strategy: sort the two halves recursively and merge the two sorted halves. Merging repeatedly compares the first elements of the unprocessed portions and copies the smaller into the output; when one array is exhausted, the rest of the other is copied.\n\n" +
            "Divide: trivial (mid = (first+last)/2). Conquer: recursively sort both halves. Combine: linear-time merge. Recurrence: T(n) = 2T(n/2) + Θ(n), T(1) = 0, which gives Θ(n lg n) in all cases.\n\n" +
            "Number of comparisons is close to the theoretical minimum for comparison-based sorting (≈ n lg n − 1.44n). Space: Θ(n), not in-place; it can be implemented without recursion (bottom-up).",
          tags: ["CS311", "Lecture 3", "Sorting", "Divide and conquer"],
          ref: "CS 311 — Lecture 3",
        },
        {
          type: "essay",
          q: "State the master theorem and use it to solve T(n) = 2T(n/2) + Θ(n).",
          answer:
            "If T(n) = aT(⌈n/b⌉) + O(nᵈ) for constants a > 0, b > 1, d ≥ 0, then: (1) if a < bᵈ, T(n) ∈ Θ(nᵈ); (2) if a = bᵈ, T(n) ∈ Θ(nᵈ lg n); (3) if a > bᵈ, T(n) ∈ Θ(n^(log_b a)).\n\n" +
            "For mergesort: a = 2, b = 2, d = 1, so bᵈ = 2 = a (case 2). Hence T(n) ∈ Θ(n¹ lg n) = Θ(n lg n).",
          tags: ["CS311", "Lecture 3", "Sorting", "Divide and conquer"],
          ref: "CS 311 — Lecture 3",
        },
      ],
    },
    {
      id: "algorithms-lecture-04",
      t: "المحاضرة 4: الجرافات (Graphs) وشجرة الامتداد الأدنى (MST)",
      d: "تمثيل الجرافات (مصفوفة وقائمة التجاور)، Hand-Shaking Lemma، ثم شجرة الامتداد الأدنى وخوارزمية Prim ومقارنتها بـ Kruskal.",
      pdf: "datenew/subjects/algorithms/lectures/CS 311 lec.4 by Majid A. Askar.pdf.pdf",
      pdf2: "/datenew/subjects/algorithms/questions/Questions on each lecture/Lecture-04-Questions.pdf",
      // CS 311 - Lecture 7: Graphs, Graph Representations, and Minimum Spanning Trees (MST)

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات عربية لفهم الجراف والشجرة الممتدة الأقل تكلفة، مع خطوات حل أمثلة على خوارزميتي Prim وKruskal.",
          links: [
            {
              t: "شرح وحل مثال خوارزمية Prim's Algorithm - Minimum Spanning Tree",
              d: "شرح مفهوم Minimum Spanning Tree ثم تنفيذ خوارزمية Prim خطوة بخطوة على مثال موزون، مع اختيار أقل حافة تربط الشجرة الحالية برأس لم يُضف بعد.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶️ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=7Miiq52nwzs",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح وحل مثال خوارزمية Kruskal Algorithm - Minimum Spanning Tree",
              d: "شرح خوارزمية Kruskal من خلال ترتيب الحواف حسب الوزن، وإضافة الحافة الأقل تكلفة ما دامت لا تُنشئ دورة، حتى تتكون الشجرة الممتدة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶️ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=SVqszHPv-I8",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح خوارزمية بريم Prim Algorithm",
              d: "شرح عربي إضافي لخوارزمية Prim وفكرة إيجاد أقل شجرة ممتدة في رسم بياني موزون، مع توضيح طريقة الاختيار التدريجي للحواف.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶️ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=-dBtzo2WDPk",
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
            "فيديوهات تعليمية باللغة الإنجليزية أو من قنوات تعليمية دولية تشرح تمثيل الجراف وخوارزميات MST بالأمثلة.",
          links: [
            {
              t: "Representation of Graph using Adjacency Matrix and Adjacency List - Techdose",
              d: "يقارن بين Adjacency Matrix وAdjacency List، ويشرح تمثيل الجراف الموجه وغير الموجه، ومزايا كل بنية وتكلفتها في الذاكرة والعمليات.",
              icon: "🌍",
              actions: [
                {
                  label: "▶️ Watch video",
                  url: "https://www.youtube.com/watch?v=4R7chuhzq7k",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Graph Representation using Adjacency Matrix and Adjacency List - GATEHUB",
              d: "شرح بصري لكيفية تخزين الرؤوس والحواف في المصفوفة وقائمة المجاورة، مع مناقشة تعقيد المساحة وبعض العمليات الأساسية.",
              icon: "🌍",
              actions: [
                {
                  label: "▶️ Watch video",
                  url: "https://www.youtube.com/watch?v=Gs_YMksyM_k",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Prim's Algorithm for MST - GeeksforGeeks",
              d: "فيديو يوضح مفهوم spanning tree وMST وكيفية اختيار الحواف ذات الوزن الأقل لبناء شجرة تشمل جميع الرؤوس دون تكوين دورة.",
              icon: "🌍",
              actions: [
                {
                  label: "▶️ Watch video",
                  url: "https://www.youtube.com/watch?v=eB61LXLZVqs",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Kruskal's Algorithm: Minimum Spanning Tree Tutorial",
              d: "شرح لخوارزمية Kruskal مع مثال وتطبيق برمجي، ويركز على ترتيب الحواف واختيار الحافة التي لا تُنشئ دورة.",
              icon: "🌍",
              actions: [
                {
                  label: "▶️ Watch video",
                  url: "https://www.youtube.com/watch?v=xDrLSOxaFrA",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Graphs: Representation - Algorithms with Attitude",
              d: "مقدمة مرئية لتمثيل الجراف مع مقارنة Adjacency Matrix وAdjacency List وتوضيح تأثير اختيار طريقة التمثيل على العمليات.",
              icon: "🌍",
              actions: [
                {
                  label: "▶️ Watch video",
                  url: "https://www.youtube.com/watch?v=WQ2Tzlxl_Xo",
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
            "مقالات ومراجع تفصيلية لتعريف الجراف، وطرق تمثيله، ودرجات الرؤوس، ولمّة المصافحة، وخصائص MST وتحليل Prim وKruskal.",
          links: [
            {
              t: "Introduction to Graphs - GeeksforGeeks",
              d: "مدخل إلى Graph Data Structure ومفاهيم Vertex وEdge، مع أساسيات تمثيل الجراف باستخدام المصفوفة وقائمة المجاورة.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/dsa/introduction-to-graphs-data-structure-and-algorithm-tutorials/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Graph and its Representations - GeeksforGeeks",
              d: "شرح مباشر لـ Adjacency Matrix وAdjacency List وكيفية تمثيل اتصال الرؤوس، وهو مناسب لمقارنة استهلاك الذاكرة وتكلفة الاستعلام عن الحواف.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/dsa/graph-and-its-representations/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Graph Theory Basics - GeeksforGeeks",
              d: "يغطي المصطلحات الأساسية مثل Degree وIn-degree وOut-degree وHandshaking Theorem، بما في ذلك علاقات مجموع درجات الرؤوس بعدد الحواف.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/engineering-mathematics/mathematics-graph-theory-basics/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Handshaking Lemma and Interesting Tree Properties - GeeksforGeeks",
              d: "شرح لمّة المصافحة: في الجراف غير الموجه يساوي مجموع درجات الرؤوس ضعف عدد الحواف، مع أمثلة تساعد على فهم العلاقة.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/dsa/handshaking-lemma-and-interesting-tree-properties/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "What is Minimum Spanning Tree (MST)? - GeeksforGeeks",
              d: "يعرف spanning tree وMST، ويوضح أن الهدف هو ربط جميع الرؤوس بأقل مجموع لأوزان الحواف، مع مقدمة إلى Prim وKruskal.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/dsa/what-is-minimum-spanning-tree-mst/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Prim's Algorithm for Minimum Spanning Tree - GeeksforGeeks",
              d: "شرح خطوات Prim وتهيئة قيم key، واختيار الرأس ذي المفتاح الأصغر، وتحديث مفاتيح الرؤوس المجاورة. يناقش أيضًا الفرق بين تمثيل المصفوفة واستخدام Min-Heap.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/dsa/prims-minimum-spanning-tree-mst-greedy-algo-5/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Kruskal's Minimum Spanning Tree Algorithm - GeeksforGeeks",
              d: "شرح فرز الحواف تصاعديًا بحسب الوزن، واختبار ما إذا كانت إضافة الحافة ستكوّن دورة، والتوقف بعد اختيار V-1 حافة في الجراف المتصل.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/dsa/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Minimum Spanning Trees - Princeton Algorithms",
              d: "مرجع أكاديمي يشرح MST وخوارزميتي Prim وKruskal ودور Priority Queue وUnion-Find، ويتناول الأداء والتعقيد في التنفيذ.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المرجع",
                  url: "https://algs4.cs.princeton.edu/43mst/index.php",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Minimum Spanning Tree - Prim's Algorithm - CP-Algorithms",
              d: "شرح تقني لخوارزمية Prim، وفكرة إضافة أقل حافة تصل الشجرة الحالية برأس خارجها، مع مناقشة التعقيد الزمني واختلافه حسب التنفيذ.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المرجع",
                  url: "https://cp-algorithms.com/graph/mst_prim.html",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Minimum Spanning Tree - Kruskal's Algorithm - CP-Algorithms",
              d: "شرح خوارزمية Kruskal من خلال ترتيب الحواف ودمج المكونات المتصلة، مع توضيح منع الدورات وتحليل الأداء واستخدام Disjoint Set Union.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المرجع",
                  url: "https://cp-algorithms.com/graph/mst_kruskal.html",
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
            "أدوات تفاعلية لرسم الجرافات وتعديل أوزان الحواف ومشاهدة بناء MST خطوة بخطوة، بالإضافة إلى تجربة تمثيلات الجراف المختلفة.",
          links: [
            {
              t: "VisuAlgo - Minimum Spanning Tree (Prim's and Kruskal's)",
              d: "محاكاة تفاعلية لخوارزميتي Prim وKruskal؛ يمكن تتبع الحواف المختارة، وملاحظة تجنب الدورات، ومقارنة طريقة نمو الشجرة والمكونات الوسيطة.",
              icon: "🔧",
              actions: [
                {
                  label: "🧪 فتح المحاكاة",
                  url: "https://visualgo.net/en/mst?slide=1",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "VisuAlgo - Graph Data Structures",
              d: "أداة لتجربة الجرافات وفهم Directed وUndirected وWeighted Graph، ومقارنة Adjacency Matrix وAdjacency List وEdge List.",
              icon: "🔧",
              actions: [
                {
                  label: "🧪 فتح المحاكاة",
                  url: "https://visualgo.net/en/graphds?slide=1",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Graph Online - Graph Editor and Algorithms",
              d: "محرر تفاعلي لإنشاء الرؤوس والحواف وتعيين الأوزان وتجربة خوارزميات على الرسم البياني، بما في ذلك إيجاد Minimum Spanning Tree وحساب درجات الرؤوس.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://graphonline.ru/en/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Graph Online - Help: Algorithms and Graph Editing",
              d: "تعليمات استخدام أداة رسم الجراف وتعديله، مع خطوات الوصول إلى خوارزمية Minimum Spanning Tree وعرض درجات الرؤوس ومصفوفة المجاورة.",
              icon: "🔧",
              actions: [
                {
                  label: "📖 فتح دليل الاستخدام",
                  url: "https://graphonline.ru/en/wiki/Help/Help",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Virtual Labs - Prim's Algorithm Demo",
              d: "تجربة تعليمية تفاعلية لخوارزمية Prim تعرض اختيار رأس البداية، وإضافة أقل حافة متاحة، وتكرار العملية حتى تضم الشجرة جميع الرؤوس.",
              icon: "🔧",
              actions: [
                {
                  label: "🧪 تشغيل التجربة",
                  url: "https://ds2-iiith.vlabs.ac.in/exp/min-spanning-trees/prims-algorithm/demo-of-prims-algorithm.html",
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
          q: "1. In a graph G = (V, E), what does E represent?",
          options: [
            "The set of vertices of G",
            "The set of pairs of vertices of G (the edge set)",
            "The set of weights of the edges of G",
            "The set of all paths in G",
          ],
          correct: 1,
          translation: "في الجراف G = (V, E)، ماذا تمثل E؟",
          explanation:
            "E هي مجموعة الأضلاع (edge set) وهي مجموعة أزواج من رؤوس G. مجموعة الرؤوس هي V، أما الأوزان فتُعرَّف بدالة منفصلة w في الجراف الموزون.",
          tags: ["Graph", "Edge set"],
          ref: "Lecture 07 — Graph",
        },
        {
          q: "2. In which kind of graph are the edges ordered pairs of vertices?",
          options: [
            "An undirected graph",
            "An unweighted graph",
            "A spanning tree",
            "A directed graph (digraph)",
          ],
          correct: 3,
          translation:
            "في أي نوع من الجرافات تكون الأضلاع أزواجًا مرتبة من الرؤوس؟",
          explanation:
            "الجراف الموجّه (digraph) أضلاعه أزواج مرتبة، فالضلع (1,2) يختلف عن (2,1). الجراف غير الموجّه أضلاعه أزواج غير مرتبة، والـ spanning tree هو subgraph وليس نوعًا من الجرافات بهذا المعنى.",
          tags: ["Directed graph", "Digraph"],
          ref: "Lecture 07 — Graph",
        },
        {
          q: "3. Which of the following is an application of a minimum spanning tree mentioned in the lecture?",
          options: [
            "Designing a minimum-cost network (telephone, power, cable, road) that connects all sites",
            "Sorting an array in linear time",
            "Multiplying two large integers",
            "Solving the Tower of Hanoi puzzle",
          ],
          correct: 0,
          translation:
            "أي مما يلي هو تطبيق على شجرة الامتداد الأدنى (MST) ذُكر في المحاضرة؟",
          explanation:
            "الـ MST يعطي أقل تكلفة لشبكة تربط كل المواقع (تليفون، كهرباء، كابلات، طرق). الاختيارات الأخرى مواضيع من المحاضرة السابقة (Linear sorting، ضرب الأعداد الكبيرة، Tower of Hanoi) ولا علاقة لها بالـ MST.",
          tags: ["MST", "Applications", "Network design"],
          ref: "Lecture 07 — MST Applications",
        },
        {
          q: "4. In an edge weighted graph G = (V, E, w), the weight function w maps each edge to which set?",
          options: [
            "The set of vertices V",
            "A subset of the edges E",
            "The set of real numbers",
            "The set of spanning trees of G",
          ],
          correct: 2,
          translation:
            "في الجراف الموزون G = (V, E, w)، الدالة w بتحوّل كل ضلع إلى أي مجموعة؟",
          explanation:
            "المحاضرة تعرّف w: E -> R أي أن كل ضلع يأخذ وزنًا هو عدد حقيقي. ولذلك يمكن أن يكون الوزن سالبًا، مثل الضلع (2,3) الذي وزنه -16 في المثال.",
          tags: ["Weighted graph", "Weight function"],
          ref: "Lecture 07 — Edge Weighted Graph",
        },
        {
          q: "5. In the directed weighted example, w(1,5) = 15 while w(5,1) = 14. What does this show?",
          options: [
            "The graph must actually be undirected",
            "In a directed graph the two directions between the same vertices can have different weights",
            "Edge weights must always be positive",
            "Vertices 1 and 5 are not adjacent",
          ],
          correct: 1,
          translation:
            "في مثال الجراف الموجّه الموزون، w(1,5) = 15 بينما w(5,1) = 14. ماذا يوضح ذلك؟",
          explanation:
            "في الجراف الموجّه (1,5) و(5,1) ضلعان مختلفان وكل واحد له وزنه. الاختيار الثالث غلط لأن المثال نفسه فيه وزن سالب (-16)، والرابع غلط لأن بين 1 و5 ضلعين فعلًا.",
          tags: ["Directed weighted graph", "Edge weight"],
          ref: "Lecture 07 — Edge Weighted Graph",
        },
        {
          q: "6. In the undirected edge weighted example, which statement is true?",
          options: [
            "w(1,5) = w(5,1) = 17",
            "w(1,5) = 15 and w(5,1) = 14",
            "w(1,5) = 17 but w(5,1) = 0",
            "w(5,1) is undefined",
          ],
          correct: 0,
          translation: "في مثال الجراف الموزون غير الموجّه، أي عبارة صحيحة؟",
          explanation:
            "في الجراف غير الموجّه الضلع (1,5) هو نفسه (5,1) فله وزن واحد هو 17. القيمتان 15 و14 هما للمثال الموجّه.",
          tags: ["Undirected weighted graph"],
          ref: "Lecture 07 — Edge Weighted Graph",
        },
        {
          q: "7. In the adjacency matrix of a graph, A[i, j] = 1 exactly when:",
          options: [
            "i is equal to j",
            "the weight of (i, j) is positive",
            "vertex i has a larger degree than vertex j",
            "the pair (i, j) belongs to E(G)",
          ],
          correct: 3,
          translation: "في مصفوفة التجاور، تكون A[i, j] = 1 بالضبط عندما:",
          explanation:
            "التعريف: A[i,j] = 1 لو (i,j) ينتمي إلى E(G) وإلا 0. المصفوفة العادية لا تهتم بالأوزان ولا بالدرجات.",
          tags: ["Adjacency matrix"],
          ref: "Lecture 07 — Adjacency Matrix",
        },
        {
          q: "8. Which property does the adjacency matrix of an undirected graph have?",
          options: [
            "All of its entries are equal to 1",
            "Non-zero entries appear only on the diagonal",
            "It is symmetric, because (i, j) and (j, i) denote the same edge",
            "It is always upper triangular",
          ],
          correct: 2,
          translation:
            "ما الخاصية التي تتميز بها مصفوفة التجاور لجراف غير موجّه؟",
          explanation:
            "لأن الضلع غير الموجّه (i,j) هو نفسه (j,i) تظهر القيمة 1 في الموضعين، فتكون المصفوفة متماثلة (مثال المحاضرة يوضح ذلك). المصفوفة للجراف الموجّه هي التي قد لا تكون متماثلة.",
          tags: ["Adjacency matrix", "Symmetric"],
          ref: "Lecture 07 — Adjacency Matrix",
        },
        {
          q: "9. In the weighted adjacency matrix, what is A[i, j] when i is not equal to j and (i, j) is not an edge?",
          options: ["0", "infinity", "1", "-1"],
          correct: 1,
          translation:
            "في مصفوفة التجاور الموزونة، ماذا تكون A[i, j] لو i لا تساوي j و(i, j) ليس ضلعًا؟",
          explanation:
            "التعريف: w(i,j) لو الضلع موجود، و0 لو i = j، وinfinity في باقي الحالات. لا نستخدم 0 لأن 0 قد يكون وزنًا حقيقيًا، ولا نستخدم 1 أو -1 لأنهما أوزان محتملة.",
          tags: ["Weighted adjacency matrix", "Infinity"],
          ref: "Lecture 07 — Weighted Adjacency Matrix",
        },
        {
          q: "10. If a min-heap is used for the priority queue Q, what is the running time of MST-Prim, where n = |V| and m = |E|?",
          options: ["O(m lg n)", "O(n^2 * m)", "O(m + n)", "O(lg n)"],
          correct: 0,
          translation:
            "لو استخدمنا min-heap كطابور أولوية Q، ما زمن تشغيل MST-Prim حيث n = |V| و m = |E|؟",
          explanation:
            "هناك n استدعاء لـ ExtractMin وm استدعاء لـ DecreaseKey، وكل واحد منهم O(lg n)، فالإجمالي O((n+m) lg n) = O(m lg n) لأن n - 1 <= m في جراف متصل. الاختيارات الأخرى لا تعكس تكلفة عمليات الـ heap.",
          tags: ["Prim", "Running time", "Min-heap"],
          ref: "Lecture 07 — Review: Prim's Algorithm",
        },
        {
          q: "11. In the (weighted) adjacency list structure, what does Adj[i] contain?",
          options: [
            "All vertices of V(G) in increasing order",
            "The weights of all edges in G",
            "The pairs <j, w(i, j)> for every edge (i, j) in E(G)",
            "The edges that are not incident to vertex i",
          ],
          correct: 2,
          translation: "في هيكل قائمة التجاور (الموزونة)، ماذا تحتوي Adj[i]؟",
          explanation:
            "Adj[i] = { <j, w(i,j)> | (i,j) in E(G) } أي أزواج (الجار، وزن الضلع) لكل ضلع خارج من i. القائمة تحتوي الجيران فقط وليس كل الرؤوس.",
          tags: ["Adjacency list"],
          ref: "Lecture 07 — (Weighted) Adjacency List Structure",
        },
        {
          q: "12. What is the space complexity (number of memory cells) of an adjacency matrix?",
          options: ["O(V + E)", "O(E)", "O(V log V)", "O(V^2)"],
          correct: 3,
          translation: "ما تعقيد المساحة (عدد خلايا الذاكرة) لمصفوفة التجاور؟",
          explanation:
            "المصفوفة V x V فتأخذ O(V^2) بغض النظر عن عدد الأضلاع. O(V + E) هي مساحة قائمة التجاور.",
          tags: ["Adjacency matrix", "Space complexity"],
          ref: "Lecture 07 — Adjacency Matrix vs Adjacency List",
        },
        {
          q: "13. What is the space complexity of an adjacency list structure?",
          options: ["O(V^2)", "O(V + E)", "O(V * E)", "O(1)"],
          correct: 1,
          translation: "ما تعقيد المساحة لهيكل قائمة التجاور؟",
          explanation:
            "نحتاج خلية لكل رأس في المصفوفة Adj ثم عقدة لكل ضلع، فالمجموع O(V + E). لذلك هي أوفر من المصفوفة في الجرافات المتفرقة (sparse).",
          tags: ["Adjacency list", "Space complexity"],
          ref: "Lecture 07 — Adjacency Matrix vs Adjacency List",
        },
        {
          q: "14. How long does it take to test whether (u, v) is in E(G) using an adjacency matrix?",
          options: ["O(1)", "O(V)", "O(|Adj[u]|)", "O(V + E)"],
          correct: 0,
          translation:
            "كم يستغرق اختبار هل (u, v) ينتمي إلى E(G) باستخدام مصفوفة التجاور؟",
          explanation:
            "نقرأ الخلية A[u][v] مباشرة فيكون الزمن O(1). في قائمة التجاور نحتاج المرور على Adj[u] فيكون O(|Adj[u]|).",
          tags: ["Adjacency matrix", "Edge lookup"],
          ref: "Lecture 07 — Adjacency Matrix vs Adjacency List",
        },
        {
          q: "15. How long does it take to test whether (u, v) is in E(G) using an adjacency list?",
          options: ["O(1)", "O(V^2)", "O(|Adj[u]|)", "O(V + E)"],
          correct: 2,
          translation:
            "كم يستغرق اختبار هل (u, v) ينتمي إلى E(G) باستخدام قائمة التجاور؟",
          explanation:
            "يجب البحث عن v داخل القائمة Adj[u] فالزمن O(|Adj[u]|). O(1) هي زمن المصفوفة، وO(V + E) هي زمن المرور على كل الهيكل.",
          tags: ["Adjacency list", "Edge lookup"],
          ref: "Lecture 07 — Adjacency Matrix vs Adjacency List",
        },
        {
          q: "16. How long does it take to list the vertices adjacent to a vertex u using an adjacency matrix?",
          options: ["O(1)", "O(|Adj[u]|)", "O(V^2)", "O(V)"],
          correct: 3,
          translation:
            "كم يستغرق سرد الرؤوس المجاورة للرأس u باستخدام مصفوفة التجاور؟",
          explanation:
            "يجب فحص الصف الكامل الخاص بـ u (V خلية) فالزمن O(V). في القائمة يكون O(|Adj[u]|) لأننا نمر على الجيران فقط.",
          tags: ["Adjacency matrix", "Neighbors"],
          ref: "Lecture 07 — Adjacency Matrix vs Adjacency List",
        },
        {
          q: "17. In MST-Prim(G, w, r), how are the key values initialized?",
          options: [
            "key[r] = 0 for the start vertex r, and key[u] = infinity for every other vertex",
            "key[u] = 0 for every vertex",
            "key[u] = w(u, r) for every vertex",
            "key[r] = infinity and key[u] = 0 for all other vertices",
          ],
          correct: 0,
          translation: "في MST-Prim(G, w, r)، كيف تُهيَّأ قيم key؟",
          explanation:
            "نضع key[r] = 0 حتى يكون r أول رأس يُستخرج من Q، وباقي الرؤوس infinity، وp[r] = NULL. باقي الاختيارات تجعل ExtractMin يختار رأسًا غير r أو يربك الخوارزمية.",
          tags: ["Prim", "Initialization"],
          ref: "Lecture 07 — Prim's Algorithm",
        },
        {
          q: "18. For a vertex v in a directed graph, how is deg(v) defined?",
          options: [
            "deg(v) = outdeg(v) - indeg(v)",
            "deg(v) = outdeg(v) + indeg(v)",
            "deg(v) = |Adj[v]| only",
            "deg(v) = |E|",
          ],
          correct: 1,
          translation: "لرأس v في جراف موجّه، كيف تُعرَّف deg(v)؟",
          explanation:
            "في الجراف الموجّه deg(v) = outdeg(v) + indeg(v). |Adj[v]| تساوي outdeg(v) فقط، لذلك الاختيار الثالث ناقص.",
          tags: ["Degree", "Indegree", "Outdegree"],
          ref: "Lecture 07 — The Hand-Shaking Lemma",
        },
        {
          q: "19. According to the Hand-Shaking Lemma, for any graph the sum of deg(v) over all vertices equals:",
          options: ["|E|", "|V|", "2|E|", "|V| + |E|"],
          correct: 2,
          translation:
            "حسب Hand-Shaking Lemma، مجموع deg(v) لكل الرؤوس في أي جراف يساوي:",
          explanation:
            "كل ضلع يساهم بدرجة واحدة عند كل طرف من طرفيه، أي 2 في المجموع، فالمجموع = 2|E|. القيمة |E| هي مجموع indeg أو مجموع outdeg في الجراف الموجّه.",
          tags: ["Hand-Shaking Lemma", "Degree"],
          ref: "Lecture 07 — The Hand-Shaking Lemma",
        },
        {
          q: "20. For any directed graph, the sum of indeg(v) over all vertices (which also equals the sum of outdeg(v)) is:",
          options: ["2|E|", "|V|", "|V|^2", "|E|"],
          correct: 3,
          translation:
            "في أي جراف موجّه، مجموع indeg(v) لكل الرؤوس (وهو أيضًا يساوي مجموع outdeg(v)) هو:",
          explanation:
            "كل ضلع موجّه له رأس بداية واحد (يزيد outdeg) ورأس نهاية واحد (يزيد indeg)، فكل من المجموعين = |E|. أما 2|E| فهو مجموع deg الكلية.",
          tags: ["Indegree", "Outdegree", "Directed graph"],
          ref: "Lecture 07 — The Hand-Shaking Lemma",
        },
        {
          q: "21. What is a spanning tree of a connected, undirected graph G = (V, E)?",
          options: [
            "A connected subgraph of G that forms an undirected tree incident with each vertex",
            "A subgraph made only of the lightest edge at each vertex",
            "A directed subgraph that contains every cycle of G",
            "Any subgraph of G with exactly |V| edges",
          ],
          correct: 0,
          translation:
            "ما هي شجرة الامتداد (spanning tree) لجراف متصل غير موجّه G = (V, E)؟",
          explanation:
            "هي subgraph متصل يكوّن شجرة غير موجّهة ويلمس كل رؤوس G. الاختيارات الأخرى غلط: الشجرة لا تحتوي دورات، وليست موجّهة، وعدد أضلاعها |V| - 1 وليس |V|.",
          tags: ["Spanning tree", "Subgraph"],
          ref: "Lecture 07 — Minimum Spanning Tree (MST)",
        },
        {
          q: "22. In a weighted graph G = (V, E, W), what is the weight of a subgraph?",
          options: [
            "The number of edges in the subgraph",
            "The sum of the weights of the edges in the subgraph",
            "The largest edge weight in the subgraph",
            "The sum of the degrees of its vertices",
          ],
          correct: 1,
          translation: "في جراف موزون G = (V, E, W)، ما هو وزن الـ subgraph؟",
          explanation:
            "وزن الـ subgraph هو مجموع أوزان أضلاعه. على هذا الأساس الـ MST هو شجرة الامتداد ذات أقل مجموع وزن.",
          tags: ["Subgraph weight", "MST"],
          ref: "Lecture 07 — Minimum Spanning Tree (MST)",
        },
        {
          q: "23. In the lecture's example graph G (vertices a, b, c, d, e), what is the cost of the minimum spanning tree T?",
          options: ["20", "18", "16", "14"],
          correct: 2,
          translation:
            "في مثال المحاضرة للجراف G (الرؤوس a, b, c, d, e)، ما تكلفة شجرة الامتداد الأدنى T؟",
          explanation:
            "الـ MST يستخدم الأضلاع 3 + 2 + 4 + 7 = 16. القيمة 20 هي تكلفة شجرة أخرى T' (3 + 5 + 4 + 8) وهي أغلى فليست minimum.",
          tags: ["MST", "Cost"],
          ref: "Lecture 07 — Minimum Spanning Tree (example graph G)",
        },
        {
          q: "24. Which algorithm grows a single tree by repeatedly adding the least-cost edge that connects a vertex in the tree to a vertex not in the tree?",
          options: [
            "Kruskal's algorithm",
            "Heap sort",
            "The Hand-Shaking Lemma",
            "Prim's algorithm",
          ],
          correct: 3,
          translation:
            "أي خوارزمية تنمّي شجرة واحدة بإضافة أقل ضلع تكلفة يربط رأسًا داخل الشجرة برأس خارجها في كل خطوة؟",
          explanation:
            "هذا وصف خوارزمية Prim، والحل الوسيط فيها دائمًا subtree. Kruskal يضيف أقل ضلع لا يكوّن دورة وحله الوسيط spanning forest. وHeap sort خوارزمية ترتيب، والـ Lemma نظرية في الدرجات.",
          tags: ["Prim", "Greedy"],
          ref: "Lecture 07 — Finding a MST",
        },
        {
          q: "25. In Kruskal's algorithm, what is the intermediary solution during the run?",
          options: [
            "A spanning forest",
            "A subtree",
            "A single vertex",
            "A directed cycle",
          ],
          correct: 0,
          translation: "في خوارزمية Kruskal، ما هو الحل الوسيط أثناء التنفيذ؟",
          explanation:
            "Kruskal يضيف أقل ضلع لا يكوّن دورة، فتتكون عدة أشجار منفصلة تُدمج تدريجيًا أي spanning forest. الـ subtree هو الحل الوسيط في Prim.",
          tags: ["Kruskal", "Spanning forest"],
          ref: "Lecture 07 — Finding a MST",
        },
        {
          type: "essay",
          q: "1. Define a graph G = (V, E) and distinguish between undirected and directed graphs, giving the lecture's examples.",
          translation:
            "عرّف الجراف G = (V, E) وفرّق بين الجراف غير الموجّه والموجّه مع أمثلة المحاضرة.",
          answer:
            "A graph G = (V, E) consists of V = V(G), the vertex set, and E = E(G), the edge set, which is a set of pairs of vertices of G.\n" +
            "Undirected graph: edges are unordered pairs of vertices, so (u, v) and (v, u) are the same edge. Example: V = {1,...,6}, E = {(1,2),(1,4),(1,5),(2,3),(2,5),(3,5),(4,5)}.\n" +
            "Directed graph (digraph): edges are ordered pairs, so (u, v) and (v, u) are different edges. Example: E = {(1,2),(1,4),(1,5),(3,2),(4,4),(4,5),(5,1),(5,2),(5,3)}, which even contains the edge (4,4) from vertex 4 to itself.\n" +
            "In both examples vertex 6 has no incident edges.",
          tags: ["Graph", "Directed", "Undirected"],
          ref: "Lecture 07 — Graph",
        },
        {
          type: "essay",
          q: "2. What is an edge weighted graph? Explain how the weights differ between the undirected and the directed example.",
          translation:
            "ما هو الجراف الموزون؟ اشرح كيف تختلف الأوزان بين المثال غير الموجّه والمثال الموجّه.",
          answer:
            "An edge weighted graph is G = (V, E, w) where w: E -> R assigns a real number (possibly negative) to every edge.\n" +
            "Undirected example: w(1,5) = w(5,1) = 17, because (1,5) and (5,1) are the same edge.\n" +
            "Directed example: w(1,5) = 15 but w(5,1) = 14, because they are two different edges, each with its own weight.\n" +
            "Negative weights are allowed, e.g. the edge (2,3) has weight -16.",
          tags: ["Weighted graph"],
          ref: "Lecture 07 — Edge Weighted Graph",
        },
        {
          type: "essay",
          q: "3. Explain the adjacency matrix and the weighted adjacency matrix, including their definitions.",
          translation:
            "اشرح مصفوفة التجاور ومصفوفة التجاور الموزونة مع تعريف كل منهما.",
          answer:
            "Adjacency matrix: A[i, j] = 1 if (i, j) is in E(G), and 0 otherwise, for i, j in V(G). For an undirected graph it is symmetric.\n" +
            "Weighted adjacency matrix: A[i, j] = w(i, j) if (i, j) is in E(G); A[i, j] = 0 if i = j and (i, j) is not in E(G); A[i, j] = infinity otherwise.\n" +
            "Example (undirected weighted graph): the first row is 0, 6, infinity, 9, 2, infinity, because vertex 1 has edges to vertices 2, 4 and 5 with weights 6, 9 and 2.",
          tags: ["Adjacency matrix", "Weighted"],
          ref: "Lecture 07 — Adjacency Matrix / Weighted Adjacency Matrix",
        },
        {
          type: "essay",
          q: "4. Describe the (weighted) adjacency list structure.",
          translation: "صِف هيكل قائمة التجاور (الموزونة).",
          answer:
            "Adj is an array indexed by the vertices; Adj[i] = { <j, w(i, j)> | (i, j) is in E(G) } for i in V(G).\n" +
            "Each entry of Adj[i] is a node holding a neighbor j and the weight w(i, j), linked to the next node of the list.\n" +
            "Example: in the first undirected weighted graph, Adj[1] holds the nodes (2, 6), (4, 9), (5, 2), and Adj[6] is empty because vertex 6 has no edges.\n" +
            "For undirected graphs each edge appears in two lists; |Adj[v]| equals deg(v).",
          tags: ["Adjacency list"],
          ref: "Lecture 07 — (Weighted) Adjacency List Structure",
        },
        {
          type: "essay",
          q: "5. State the Hand-Shaking Lemma and define degree, in-degree and out-degree.",
          translation:
            "اذكر Hand-Shaking Lemma وعرّف degree وin-degree وout-degree.",
          answer:
            "Undirected G: deg(v) = |{u | (v,u) in E(G)}| = |Adj[v]|.\n" +
            "Digraph G: outdeg(v) = |{u | (v,u) in E(G)}| = |Adj[v]|, indeg(v) = |{u | (u,v) in E(G)}|, and deg(v) = outdeg(v) + indeg(v).\n" +
            "Hand-Shaking Lemma: for any graph, directed or undirected, the sum of deg(v) over all v in V(G) equals 2|E|.\n" +
            "For any directed graph, the sum of indeg(v) equals the sum of outdeg(v), and both equal |E|.",
          tags: ["Hand-Shaking Lemma", "Degree"],
          ref: "Lecture 07 — The Hand-Shaking Lemma",
        },
        {
          type: "essay",
          q: "6. Compare the adjacency matrix and the adjacency list in terms of space and time.",
          translation:
            "قارن بين مصفوفة التجاور وقائمة التجاور من حيث المساحة والزمن.",
          answer:
            "Space: matrix O(V^2) versus list O(V + E).\n" +
            "Initialize structure: matrix O(V^2), list O(V + E).\n" +
            "Scan (incident edges of) all vertices: matrix O(V^2), list O(V + E).\n" +
            "List vertices adjacent to u: matrix O(V), list O(|Adj[u]|).\n" +
            "Is (u, v) in E(G)?: matrix O(1), list O(|Adj[u]|).\n" +
            "So the matrix is better for fast edge lookup, while the list is better for space and for scanning neighbors, especially in sparse graphs.",
          tags: ["Matrix vs list", "Complexity"],
          ref: "Lecture 07 — Adjacency Matrix vs Adjacency List",
        },
        {
          type: "essay",
          q: "7. Define a spanning tree and a minimum spanning tree, and mention some applications of an MST.",
          translation:
            "عرّف شجرة الامتداد وشجرة الامتداد الأدنى واذكر بعض تطبيقات الـ MST.",
          answer:
            "A spanning tree of a connected, undirected graph G = (V, E) is a connected subgraph of G that forms an undirected tree incident with each vertex.\n" +
            "In a weighted graph G = (V, E, W) the weight of a subgraph is the sum of the weights of its edges.\n" +
            "A minimum spanning tree is a spanning tree with the minimum weight. Example: T has cost 3+2+4+7 = 16 while another spanning tree T' has cost 3+5+4+8 = 20.\n" +
            "Applications: network design (telephone, electrical power, hydraulic, TV cable, computer, road). The MST gives a minimum-cost network connecting all sites, i.e. the most economical construction.",
          tags: ["MST", "Spanning tree", "Applications"],
          ref: "Lecture 07 — Minimum Spanning Tree (MST)",
        },
        {
          type: "essay",
          q: "8. Explain Prim's algorithm (MST-Prim) step by step.",
          translation: "اشرح خوارزمية Prim (MST-Prim) خطوة بخطوة.",
          answer:
            "Prim grows a single tree by repeatedly adding the least-cost edge that connects a vertex in the existing tree to a vertex not in the tree. The intermediary solution is a subtree.\n" +
            "Initialization: Q = V[G]; key[u] = infinity for every u; key[r] = 0 for the chosen start vertex r; p[r] = NULL.\n" +
            "While Q is not empty: u = ExtractMin(Q); for each v in Adj[u], if v is in Q and w(u, v) < key[v], then p[v] = u and key[v] = w(u, v).\n" +
            "The parent pointers p[] give the edges of the MST when Q becomes empty.",
          tags: ["Prim", "MST-Prim"],
          ref: "Lecture 07 — Prim's Algorithm",
        },
        {
          type: "essay",
          q: "9. Compare Prim's and Kruskal's algorithms for finding an MST.",
          translation: "قارن بين خوارزميتي Prim وKruskal لإيجاد الـ MST.",
          answer:
            "Both are principal greedy methods for finding an MST. MSTs satisfy the optimal substructure property: an optimal tree is composed of optimal subtrees.\n" +
            "Prim: grow a single tree by repeatedly adding the least-cost edge that connects a vertex in the existing tree to a vertex not in it. The intermediary solution is a subtree.\n" +
            "Kruskal: grow a tree by repeatedly adding the least-cost edge that does not introduce a cycle among the edges included so far. The intermediary solution is a spanning forest.",
          tags: ["Prim", "Kruskal", "Greedy"],
          ref: "Lecture 07 — Finding a MST",
        },
        {
          type: "essay",
          q: "10. What is the hidden cost in the MST-Prim code, and what is its running time with a min-heap?",
          translation:
            "ما هي التكلفة الخفية في كود MST-Prim، وما زمن التشغيل عند استخدام min-heap؟",
          answer:
            "The hidden cost is the update key[v] = w(u, v): when the key of a vertex stored in the min-heap changes, the heap must be fixed, which is the DecreaseKey operation. ExtractMin deletes the smallest element from the min-heap.\n" +
            "There are n = |V| ExtractMin calls and (at most) m = |E| DecreaseKey calls.\n" +
            "With a min-heap for Q each operation costs O(lg n), so the time is O((n + m) lg n) = O(m lg n), because for a connected graph n - 1 <= m.\n" +
            "The priority queue implementation has a large impact on the performance.",
          tags: ["Prim", "DecreaseKey", "Running time"],
          ref: "Lecture 07 — Review: Prim's Algorithm",
        },
        {
          type: "essay",
          q: "11. Using E = {(1,2),(1,4),(1,5),(2,3),(2,5),(3,5),(4,5)} on V = {1,...,6} (undirected), compute deg(v) for every vertex and verify the Hand-Shaking Lemma.",
          translation:
            "باستخدام E = {(1,2),(1,4),(1,5),(2,3),(2,5),(3,5),(4,5)} على V = {1,...,6} (جراف غير موجّه)، احسب deg(v) لكل رأس وتحقق من Hand-Shaking Lemma.",
          answer:
            "Formula: deg(v) = |Adj[v]|, and the sum of deg(v) = 2|E|.\n" +
            "Given: |E| = 7, so 2|E| = 14.\n" +
            "Adj[1] = {2,4,5} -> deg = 3; Adj[2] = {1,3,5} -> deg = 3; Adj[3] = {2,5} -> deg = 2; Adj[4] = {1,5} -> deg = 2; Adj[5] = {1,2,3,4} -> deg = 4; Adj[6] = {} -> deg = 0.\n" +
            "Sum = 3 + 3 + 2 + 2 + 4 + 0 = 14 = 2 * 7, so the lemma holds.",
          tags: ["Hand-Shaking Lemma", "Degree"],
          ref: "Lecture 07 — The Hand-Shaking Lemma",
        },
        {
          type: "essay",
          q: "12. For the digraph with E = {(1,2),(1,4),(1,5),(3,2),(4,4),(4,5),(5,1),(5,2),(5,3)} on V = {1,...,6}, compute indeg and outdeg of every vertex and check the lemma for directed graphs.",
          translation:
            "للجراف الموجّه E = {(1,2),(1,4),(1,5),(3,2),(4,4),(4,5),(5,1),(5,2),(5,3)} على V = {1,...,6}، احسب indeg وoutdeg لكل رأس وتحقق من النظرية للجرافات الموجّهة.",
          answer:
            "Formulas: outdeg(v) = |{u | (v,u) in E}|, indeg(v) = |{u | (u,v) in E}|, and the sum of indeg = the sum of outdeg = |E|.\n" +
            "Given: |E| = 9.\n" +
            "outdeg: v1 = 3, v2 = 0, v3 = 1, v4 = 2 (edges (4,4) and (4,5)), v5 = 3, v6 = 0. Sum = 9.\n" +
            "indeg: v1 = 1, v2 = 3, v3 = 1, v4 = 2 (edges (1,4) and (4,4)), v5 = 2, v6 = 0. Sum = 9.\n" +
            "Both sums equal |E| = 9, so the lemma holds. Also deg(4) = 2 + 2 = 4.",
          tags: ["Indegree", "Outdegree"],
          ref: "Lecture 07 — The Hand-Shaking Lemma",
        },
        {
          type: "essay",
          q: "13. A graph has |V| = 1000 vertices and |E| = 3000 edges. Compare the memory needed by an adjacency matrix and by an adjacency list.",
          translation:
            "جراف فيه |V| = 1000 رأس و|E| = 3000 ضلع. قارن حجم الذاكرة المطلوبة لمصفوفة التجاور وقائمة التجاور.",
          answer:
            "Formulas: matrix space = O(V^2); list space = O(V + E).\n" +
            "Matrix: V^2 = 1000^2 = 1,000,000 cells.\n" +
            "List: V + E = 1000 + 3000 = 4000 units (up to a constant factor, since an undirected edge appears in two lists).\n" +
            "The list needs about 250 times fewer cells, so for this sparse graph the adjacency list is much more economical.",
          tags: ["Space complexity", "Matrix vs list"],
          ref: "Lecture 07 — Adjacency Matrix vs Adjacency List",
        },
        {
          type: "essay",
          q: "14. Graph G has edges: a-b = 5, a-c = 3, b-c = 2, b-e = 4, c-d = 7, e-d = 8. Compute the cost of the spanning trees T = {a-c, b-c, b-e, c-d} and T' = {a-c, a-b, b-e, e-d}, and show how Prim finds the MST starting from a.",
          translation:
            "الجراف G أضلاعه: a-b = 5، a-c = 3، b-c = 2، b-e = 4، c-d = 7، e-d = 8. احسب تكلفة شجرتي الامتداد T وT' ووضح كيف تجد Prim الـ MST بالبدء من a.",
          answer:
            "Formula: cost of a tree = sum of its edge weights.\n" +
            "Cost(T) = 3 + 2 + 4 + 7 = 16. Cost(T') = 3 + 5 + 4 + 8 = 20. So T is better (difference 4).\n" +
            "Prim from a: tree {a}; cheapest crossing edge is a-c (3) -> add c.\n" +
            "Tree {a,c}: crossing edges a-b (5), c-b (2), c-d (7) -> add b-c (2).\n" +
            "Tree {a,b,c}: crossing edges b-e (4), c-d (7) -> add b-e (4).\n" +
            "Tree {a,b,c,e}: crossing edges c-d (7), e-d (8) -> add c-d (7). Total = 3 + 2 + 4 + 7 = 16, which is the MST.",
          tags: ["MST", "Prim", "Cost"],
          ref: "Lecture 07 — Minimum Spanning Tree (example graph G)",
        },
        {
          type: "essay",
          q: "15. Run MST-Prim with a min-heap on a connected graph with n = 1000 vertices and m = 5000 edges. How many ExtractMin and DecreaseKey calls are made at most, and what is the approximate running time?",
          translation:
            "نفّذ MST-Prim مع min-heap على جراف متصل فيه n = 1000 رأس وm = 5000 ضلع. كم عدد استدعاءات ExtractMin وDecreaseKey على الأكثر، وما الزمن التقريبي؟",
          answer:
            "Formula: time = O((n + m) lg n) = O(m lg n) for a connected graph.\n" +
            "ExtractMin is called n = 1000 times; DecreaseKey is called at most m = 5000 times.\n" +
            "Each heap operation costs O(lg n), and lg 1000 is about 10.\n" +
            "Time is about (1000 + 5000) * 10 = 60,000 basic steps, i.e. on the order of m lg n = 5000 * 10 = 50,000 (the same order).",
          tags: ["Prim", "Running time"],
          ref: "Lecture 07 — Review: Prim's Algorithm",
        },
      ],
    },
    {
      id: "algorithms-lecture-05",
      t: "المحاضرة 5 — شجرة الامتداد الأدنى (Kruskal) وأقصر مسار من مصدر واحد (Dijkstra)",
      d: "تمثيلات Graph الموزون، Hand-Shaking Lemma، خوارزمية Kruskal لـ MST، خوارزمية Dijkstra لأقصر مسار، وتحليل التعقيد الزمني لكل منهما.",
      pdf: "datenew/subjects/algorithms/lectures/CS 311 lec.8 by Majid A. Askar.pdf",
      pdf2: "datenew/subjects/algorithms/questions/Questions on each lecture/Lecture-08-Questions.pdf",
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شرح بالعربي لخوارزميات MST (Kruskal) وأقصر مسار (Dijkstra) وبنية Union-Find من قنوات يوتيوب عربية موثوقة.",
          links: [
            {
              t: "شرح خوارزمية كروسكال Kruskal بالعربي — Rasmi Bakkar",
              d: "شرح عربي واضح لخوارزمية Kruskal لإيجاد Minimum Spanning Tree في رسم بياني موزون، مع خطوات الفكرة الجشعة ودور ترتيب الحافات واستخدام Union-Find لكشف الحلقات. مناسب جدًا لمتابعة المحاضرة الثامنة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=QJ_MJm92XsQ",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح وحل مثال خوارزمية Kruskal — Minimum Spanning Tree",
              d: "فيديو عربي يطبّق خوارزمية Kruskal خطوة بخطوة على مثال عملي، وده بيتطابق مع الـ In-Class Exercise المذكور في شرائح المحاضرة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=SVqszHPv-I8",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Dijkstra's algorithm [Arabic] — شرح خوارزمية دكسترا",
              d: "شرح عربي لخوارزمية Dijkstra لحل مشكلة Single-Source Shortest Paths، يشمل تهيئة جدول المسافات واستخدام Priority Queue (Min-Heap) وعملية Relaxation وتتبع المسار بالـ predecessor.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=c0EWBzuKSto",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "خوارزمية ديكسترا (Dijkstra): شرح وتصور مرئي — Coddy.tech",
              d: "صفحة عربية تفاعلية فيها شرح لخوارزمية Dijkstra خطوة بخطوة مع كود في خمس لغات برمجية وتصور مرئي للرسم البياني. تربط بين النظري والتطبيقي.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://coddy.tech/visualize/ar/graphs/dijkstras-algorithm",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },
        {
          category: "فيديوهات عالمية",
          icon: "🌍",
          description:
            "فيديوهات إنجليزية عالية الجودة تشرح Kruskal و Dijkstra و Union-Find من قنوات أكاديمية معروفة عالميًا.",
          links: [
            {
              t: "Kruskal's algorithm in 2 minutes — Michael Sambol",
              d: "فيديو قصير (دقيقتين) يوضّح خطوات خوارزمية Kruskal بصريًا على مثال صغير، مع تركيز على ترتيب الحافات ومنع الحلقات. مفيد جدًا كمراجعة سريعة قبل الامتحان.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=71UQH7Pr9kU",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Prim's and Kruskal's Algorithms — Abdul Bari",
              d: "محاضرة كاملة من عبد الباري، أستاذ الخوارزميات الأشهر على يوتيوب، تشرح Greedy Method وتطبّقه على Prim و Kruskal مع مقارنة واضحة بين الاستراتيجيتين. دي القناة اللي بيتابعها أغلب طلاب CS311.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ مشاهدة القائمة",
                  url: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Dijkstra's Shortest Path Algorithm — GeeksforGeeks Videos",
              d: "شرح مرئي رسمي من GeeksforGeeks لخوارزمية Dijkstra، يشمل تهيئة جدول المسافات واستخدام Min-Heap وعملية Relaxation، مع مثال محلول بالكامل.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.geeksforgeeks.org/videos/dijkstras-shortest-path-algorithm",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Single-Source Shortest Paths Dijkstra — VisuAlgo",
              d: "صفحة محاكاة تفاعلية على VisuAlgo (موقع جامعة سنغافورة الوطنية) لخوارزمية Dijkstra، تتيح رسم الرسم البياني ومتابعة التحديث خطوة بخطوة. مناسبة للجزء العملي للمحاضرة.",
              icon: "🌍",
              actions: [
                {
                  label: "🌐 فتح المحاكي",
                  url: "https://visualgo.net/en/sssp",
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
            "مقالات ومراجع مكتوبة بالإنجليزية تشرح خوارزميات MST و Dijkstra و Union-Find بصيغ أكاديمية موثوقة.",
          links: [
            {
              t: "Kruskal's Minimum Spanning Tree Algorithm — GeeksforGeeks",
              d: "مقال مرجعي شامل لخوارزمية Kruskal: الفكرة الجشعة، الـ Pseudocode، استخدام Disjoint Set لكشف الحلقات، تحليل التعقيد الزمني O(E log E)، وتطبيقات بلغات متعددة. يغطي كل ما ورد في شرائح المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.geeksforgeeks.org/dsa/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Dijkstra's Shortest Path Algorithm — GeeksforGeeks",
              d: "مقال مرجعي كامل لخوارزمية Dijkstra: تعريف المشكلة، خطوات الخوارزمية، الـ Pseudocode، التعقيد الزمني O((V + E) log V)، تنبيهات حول الأوزان السالبة، وتطبيقات بلغات متعددة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.geeksforgeeks.org/dsa/dijkstras-shortest-path-algorithm-greedy-algo-7",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Difference between Prim's and Kruskal's Algorithms — GeeksforGeeks",
              d: "مقال مقارنة مفصّل بين Prim و Kruskal من حيث الاستراتيجية، الحل الوسيط (subtree vs spanning forest)، بنى البيانات، التعقيد، وحالات الاستخدام (dense vs sparse graphs). يتطابق مع المقارنة المذكورة في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.geeksforgeeks.org/dsa/difference-between-prims-and-kruskals-algorithm-for-mst",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Handshaking Lemma and Interesting Tree Properties — GeeksforGeeks",
              d: "مقال يشرح Hand-Shaking Lemma بشقيه (موجه وغير موجّه) ويقدّم البرهان على أن مجموع درجات الرؤوس = 2|E|، مع تطبيقات على الأشجار والرسوم الزوجية (even-degree vertices).",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.geeksforgeeks.org/dsa/handshaking-lemma-and-interesting-tree-properties",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Minimum Spanning Tree — Kruskal with Disjoint Set Union — CP-Algorithms",
              d: "مرجع أكاديمي عالي الجودة يشرح تطبيق Kruskal باستخدام بنية Disjoint Set Union (Union-Find) مع path compression و union by rank، وتحليل التعقيد الكامل O(m log n). مناسب للطلاب الراغبين في فهم أعمق.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://cp-algorithms.com/graph/mst_kruskal_with_dsu.html",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Handshaking Lemma — Wikipedia",
              d: "مقال موسوعي عن Hand-Shaking Lemma يشمل التعريف الرسمي، الصيغة الموجّهة، البراهين، وتطبيقات في مسارات أويلر ومسألة Königsberg السبعة جسور. مرجع جيد للقراءة الإضافية.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://en.wikipedia.org/wiki/Handshaking_lemma",
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
            "أدوات تفاعلية للمحاكاة الخطوة بخطوة لخوارزميات MST و Dijkstra على رسوم بيانية يرسمها المستخدم بنفسه.",
          links: [
            {
              t: "VisuAlgo — Minimum Spanning Tree (Kruskal & Prim)",
              d: "محاكي تفاعلي رسمي من جامعة سنغافورة الوطنية، يرسم الرسم البياني إدخالًا (Edge List / Adjacency Matrix / Adjacency List) ويتتبع خطوات Kruskal و Prim بصريًا مع عرض وزن MST الكلي. أداة مثالية للتحقق من حلول الـ In-Class Exercise.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://visualgo.net/en/mst",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "VisuAlgo — Single-Source Shortest Paths (Dijkstra)",
              d: "محاكي تفاعلي لتتبع خطوات خوارزمية Dijkstra على رسم بياني مرسوم يدويًا، مع عرض جدول المسافات والـ predecessor في كل خطوة. مناسب جدًا لمتابعة المثال العملي في المحاضرة.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://visualgo.net/en/sssp",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Graphisual — Dijkstra's Algorithm Visualizer",
              d: "أداة ويب لرسم الرسم البياني وإدخال أوزان الحافات ومشاهدة خطوات Dijkstra بشكل تفاعلي. تشمل شرح الخصائص الأساسية للخوارزمية (greedy، non-negative weights، time complexity).",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://graphisual.app/algorithm/dijkstra",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Minimum Spanning Tree (Kruskal & Prim) — The Coatless Professor",
              d: "أداة محاكاة بسيطة تعرض خطوات Kruskal (ترتيب الحافات + Union-Find) و Prim (النمو من رأس مصدر) جنبًا إلى جنب على نفس الرسم، مع إبراز الحافات المختارة باللون الأخضر وتحديث وزن MST حيًا.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://web-apps.thecoatlessprofessor.com/graph-algorithms/minimum-spanning-tree.html",
                  type: "view",
                  color: "green",
                },
              ],
            },
          ],
        },
      ],
      questions: [
        // ==================== MCQ (HIGH first) ====================
        {
          q: "1. In a weighted adjacency matrix, what value is stored at A[i][j] when there is NO edge between vertex i and vertex j (i != j)?",
          options: ["0", "w(i, j)", "Infinity", "-1"],
          correct: 2,
          translation:
            "في مصفوفة التجاور الموزونة، ما القيمة المخزنة في A[i][j] عندما لا يوجد حافة بين الرأسين i و j (i != j)؟",
          explanation:
            "الصحيح هو Infinity لأن عدم وجود حافة بين i و j (والفرق بينهما غير صفري) يُمثل بـ infinity. أما 0 فهو للقطر A[i][i] فقط، و w(i,j) هو الوزن لو كانت الحافة موجودة.",
          tags: ["Weighted Adjacency Matrix", "Graph Representation"],
          ref: "Lecture 8 — Weighted Adjacency Matrix slide",
          likely: "high",
        },
        {
          q: "2. The Hand-Shaking Lemma for any undirected graph states that:",
          options: [
            "sum of degrees = |V|",
            "sum of degrees = 2|E|",
            "sum of degrees = |E|",
            "sum of degrees = |V| + |E|",
          ],
          correct: 1,
          translation: "تنص Hand-Shaking Lemma لأي رسم بياني غير موجّه على أن:",
          explanation:
            "الصحيح هو أن مجموع درجات كل الرؤوس = 2 × عدد الحافات، لأن كل حافة تساهم بدرجتين (تلمس رأسين). لو كان |E| بس يبقى نص الحافة، ولو |V| يبقى مفيش علاقة مباشرة.",
          tags: ["Hand-Shaking Lemma", "Graph Theory"],
          ref: "Lecture 8 — The Hand-Shaking Lemma slide",
          likely: "high",
        },
        {
          q: "3. For any directed graph, the sum of in-degrees of all vertices equals:",
          options: ["|V|", "2|E|", "|E|", "|V| - 1"],
          correct: 2,
          translation:
            "لأي رسم بياني موجّه، مجموع in-degrees لكل الرؤوس يساوي:",
          explanation:
            "الصحيح هو |E| لأن كل حافة موجهة لها رأس واحد مصدر وواحد وجهة، فتساهم بـ 1 في الـ out-degree للمصدر و 1 في الـ in-degree للوجهة. وبالتالي مجموع الـ in-degrees = مجموع الـ out-degrees = |E|. الـ 2|E| هي للـ Hand-Shaking للموجه وغير الموجه.",
          tags: ["Hand-Shaking Lemma", "Directed Graph", "Graph Theory"],
          ref: "Lecture 8 — Hand-Shaking Lemma (directed form)",
          likely: "high",
        },
        {
          q: "4. In Kruskal's algorithm, the edges are sorted in:",
          options: [
            "non-increasing order of weight",
            "non-decreasing order of weight",
            "lexicographic order of vertex labels",
            "random order",
          ],
          correct: 1,
          translation: "في خوارزمية Kruskal، تُفرز الحافات بترتيب:",
          explanation:
            "الصحيح هو non-decreasing (تصاعدي) لأوزان الحافات عشان نختار أخف حافة اولًا في كل خطوة (greedy). non-increasing معناه تنازلي وده غلط، lexico مش بيعتمد على الوزن، random بيبطل ميزة greedy.",
          tags: ["Kruskal", "MST", "Greedy"],
          ref: "Lecture 8 — Kruskal's Algorithm High-Level Pseudocode",
          likely: "high",
        },
        {
          q: "5. Which data structure does Kruskal's algorithm use to efficiently detect cycles?",
          options: [
            "Stack",
            "Queue",
            "Disjoint Set (Union-Find)",
            "Hash Table",
          ],
          correct: 2,
          translation:
            "ما بنية البيانات التي تستخدمها خوارزمية Kruskal لكشف الحلقات بكفاءة؟",
          explanation:
            "الصحيح هو Disjoint Set (Union-Find) لأنها بتتيح MakeSet و FindSet و Union بكفاءة عالية، و FindSet لو الأخرجتين في نفس المجموعة يبقى الحافة هتعمل cycle. Stack/Queue مش بنوكشف cycles، Hash Table أبطأ في عمليات الـ Union.",
          tags: ["Kruskal", "Disjoint Set", "Union-Find"],
          ref: "Lecture 8 — Kruskal's Algorithm pseudocode (MakeSet/FindSet/Union)",
          likely: "high",
        },
        {
          q: "6. The overall time complexity of Kruskal's algorithm is:",
          options: ["O(n^2)", "O(m log n)", "O(m log m)", "O(n log n)"],
          correct: 2,
          translation: "التعقيد الزمني الكلي لخوارزمية Kruskal هو:",
          explanation:
            "الصحيح هو O(m log m) حيث m = |E|. السبب أن الفرز بياخد O(m log m) وده أكبر حد. لو قلنا O(m log n) ده بعد استبعاد الفرز مش صح ككلي، O(n^2) غلط تمامًا. والـ O(n log n) بيتجاهل عدد الحافات.",
          tags: ["Kruskal", "Time Complexity"],
          ref: "Lecture 8 — Kruskal's Algorithm: Running Time",
          likely: "high",
        },
        {
          q: "7. In Prim's algorithm, the intermediate solution is a:",
          options: [
            "spanning forest",
            "subtree",
            "single cycle",
            "disconnected set of edges",
          ],
          correct: 1,
          translation: "في خوارزمية Prim، الحل الوسيط هو:",
          explanation:
            "الصحيح هو subtree لأن Prim بيكبر شجرة واحدة فقط بإضافة أخف حافة تربط رأس في الشجرة برأس برّه. أما spanning forest فده وصف Kruskal، والـ cycle مش هدف MST، و disconnected set مش ممكن لإن Prim بيبني connected.",
          tags: ["Prim", "MST", "Comparison"],
          ref: "Lecture 8 — Finding a MST (Prim vs Kruskal)",
          likely: "high",
        },
        {
          q: "8. In Kruskal's algorithm, the intermediate solution is a:",
          options: [
            "subtree",
            "spanning forest",
            "single cycle",
            "complete graph",
          ],
          correct: 1,
          translation: "في خوارزمية Kruskal، الحل الوسيط هو:",
          explanation:
            "الصحيح هو spanning forest لأن Kruskal بيضيف الحافات الأرخص بغض النظر عن الترابط، فيمكن تكون مكونات منفصلة (forest) لحد ما تتحد. subtree هو وصف Prim، cycle غلط لأننا بنمنع cycles، و complete graph غير منطقي.",
          tags: ["Kruskal", "MST", "Comparison"],
          ref: "Lecture 8 — Finding a MST (Prim vs Kruskal)",
          likely: "high",
        },
        {
          q: "9. What problem does Dijkstra's algorithm solve?",
          options: [
            "Minimum Spanning Tree",
            "Single-Source Shortest Paths",
            "All-Pairs Shortest Paths",
            "Maximum Flow",
          ],
          correct: 1,
          translation: "ما المشكلة التي تحلها خوارزمية Dijkstra؟",
          explanation:
            "الصحيح هو Single-Source Shortest Paths أي أقصر مسار من مصدر واحد إلى كل باقي الرؤوس. MST بتحله خوارزميات تانية (Prim/Kruskal)، All-Pairs بيستخدم Floyd-Warshall، Maximum Flow بيستخدم Ford-Fulkerson.",
          tags: ["Dijkstra", "Shortest Path"],
          ref: "Lecture 8 — Single-Source Shortest-Paths Problem / Dijkstra's Algorithm",
          likely: "high",
        },
        {
          q: "10. Dijkstra's algorithm requires that all edge weights be:",
          options: [
            "positive only",
            "non-negative",
            "negative",
            "any real number",
          ],
          correct: 1,
          translation: "تتطلب خوارزمية Dijkstra أن تكون أوزان الحافات:",
          explanation:
            "الصحيح هو non-negative (غير سالبة، يعني تسمح بصفر) لأن Dijkstra بتفترض إن لما رأس يتحدد، المسار الأقصر ليه خلص، وهذا الافتراض بيبطل لو في أوزان سالبة. positive only يرفض الأصفار ومش لازم، negative بيفسد الخوارزمية.",
          tags: ["Dijkstra", "Constraints"],
          ref: "Lecture 8 — Single-Source Shortest-Paths Problem statement",
          likely: "high",
        },
        {
          q: "11. The time complexity of Dijkstra's algorithm using a binary heap is:",
          options: ["O(V^2)", "O((V + E) log V)", "O(V * E)", "O(E log E)"],
          correct: 1,
          translation:
            "التعقيد الزمني لخوارزمية Dijkstra باستخدام binary heap هو:",
          explanation:
            "الصحيح هو O((V + E) log V). V iteration لكل DeleteMin بـ log V، وكل حافة ممكن تعمل UpHeap بـ log V. O(V^2) للنسخة الـ simple بدون heap، O(V*E) لـ Bellman-Ford، O(E log E) مش معتاد لـ Dijkstra.",
          tags: ["Dijkstra", "Time Complexity"],
          ref: "Lecture 8 — Dijkstra pseudocode and Big-O note",
          likely: "high",
        },
        {
          q: "12. In the Dijkstra pseudocode, what is the initial value of dist[s] for the source vertex s?",
          options: ["infinity", "0", "-1", "the largest edge weight"],
          correct: 1,
          translation:
            "في pseudocode الخاص بـ Dijkstra، ما القيمة الابتدائية لـ dist[s] للرأس المصدر s؟",
          explanation:
            "الصحيح هو 0 لأن المسافة من المصدر لنفسه = 0. infinity لباقي الرؤوس، -1 مش قيمة منطقية، أكبر وزن حافة غلط لإنها لازم تبدأ من 0 للمصدر.",
          tags: ["Dijkstra", "Initialization"],
          ref: "Lecture 8 — Dijkstra pseudocode lines 1-2",
          likely: "high",
        },
        {
          q: "13. What is the role of the predecessor pointer p[v] in Dijkstra's algorithm?",
          options: [
            "stores the distance",
            "stores the previous vertex on the shortest path",
            "stores the edge weight",
            "stores the priority value",
          ],
          correct: 1,
          translation: "ما دور المؤشر السابق p[v] في خوارزمية Dijkstra؟",
          explanation:
            "الصحيح هو storing previous vertex على المسار الأقصر ل reconstruct المسار. dist[] بيخزن المسافة، w(u,v) هو الوزن، priority بيخزنه الـ heap داخليًا.",
          tags: ["Dijkstra", "Path Reconstruction"],
          ref: "Lecture 8 — Dijkstra pseudocode line 9",
          likely: "high",
        },
        {
          q: "14. In a weighted adjacency list, what does Adj[i] contain for each vertex i?",
          options: [
            "only the neighbor vertex ids",
            "pairs (j, w(i, j)) for each neighbor j",
            "only the edge weights",
            "the degree of vertex i only",
          ],
          correct: 1,
          translation:
            "في قائمة التجاور الموزونة، ماذا تحتوي Adj[i] لكل رأس i؟",
          explanation:
            "الصحيح هو pairs (j, w(i,j)) أي كل جار مع وزن الحافة ليه. لو ids بس يبقى list عادية مش موزونة، أوزان بس بتفقد معلومات الجيران، و degree بس مفيهاش التفاصيل.",
          tags: ["Adjacency List", "Graph Representation"],
          ref: "Lecture 8 — (Weighted) Adjacency List Structure",
          likely: "high",
        },
        {
          q: "15. For a directed graph, the degree of vertex v equals:",
          options: [
            "outdeg(v) only",
            "indeg(v) only",
            "outdeg(v) + indeg(v)",
            "outdeg(v) * indeg(v)",
          ],
          correct: 2,
          translation: "للرسم البياني الموجه، درجة الرأس v تساوي:",
          explanation:
            "الصحيح هو outdeg + indeg لأن كل حافة موجهة إما خارجة من v أو داخلة ليه. لو حد فقط يبقى نص المعلومة، وضرب غلط تمامًا.",
          tags: ["Directed Graph", "Degree", "Hand-Shaking"],
          ref: "Lecture 8 — Hand-Shaking Lemma slide",
          likely: "high",
        },
        {
          q: "16. Which of the following is NOT a typical MST application mentioned in the lecture?",
          options: [
            "telephone network design",
            "electrical power network",
            "sorting an array of numbers",
            "road network design",
          ],
          correct: 2,
          translation: "أيٌّ مما يلي ليس من تطبيقات MST المذكورة في المحاضرة؟",
          explanation:
            "الصحيح هو sorting an array لأن ده مش مرتبط بـ MST. المحاضرة ذكرت telephone, electrical power, hydraulic, TV cable, computer, road networks.",
          tags: ["MST Applications", "Network Design"],
          ref: "Lecture 8 — MST Applications slide",
          likely: "high",
        },
        {
          q: "17. In Dijkstra's algorithm, after a vertex is selected (DeleteMin) and processed, its shortest distance is:",
          options: [
            "still subject to update",
            "finalized and never changes",
            "set to infinity",
            "set to -1",
          ],
          correct: 1,
          translation:
            "في خوارزمية Dijkstra، بعد اختيار رأس (DeleteMin) ومعالجته، مسافته الأقصر:",
          explanation:
            "الصحيح هو finalized وده اللي بيخلي الخوارزمية greedy. لو مع weights غير سالبة، أول ما نطلع رأس من الـ Q يبقى مسافته مضايقتش. تحديث infinity أو -1 غلط.",
          tags: ["Dijkstra", "Greedy Property"],
          ref: "Lecture 8 — Dijkstra's Algorithm description",
          likely: "high",
        },
        {
          q: "18. The number of edges in a Minimum Spanning Tree of a connected graph with n vertices is:",
          options: ["n", "n - 1", "n + 1", "2n - 1"],
          correct: 1,
          translation: "عدد الحافات في MST لرسم بياني متصل بـ n رؤوس هو:",
          explanation:
            "الصحيح هو n-1 لأن أي spanning tree لرسم متصل بـ n رؤوس لازم يكون فيه n-1 حافة بالظبط (لا دوراير ولا غير متصل).",
          tags: ["MST", "Spanning Tree Properties"],
          ref: "Lecture 8 — Kruskal high-level pseudocode (while encounter < |V|-1)",
          likely: "high",
        },
        {
          q: "19. The MakeSet(v) operation in Kruskal's algorithm is used to:",
          options: [
            "sort edges",
            "create a singleton set containing only v",
            "merge two sets",
            "find the minimum edge",
          ],
          correct: 1,
          translation: "عملية MakeSet(v) في خوارزمية Kruskal تُستخدم لـ:",
          explanation:
            "الصحيح هو create singleton set for v أي مجموعة فيها v بس. sort بتتم بمعزل، merge هي Union، find minimum بيتم بترتيب الفرز.",
          tags: ["Kruskal", "Disjoint Set", "MakeSet"],
          ref: "Lecture 8 — Kruskal pseudocode (for each v MakeSet(v))",
          likely: "high",
        },
        {
          q: "20. The condition to add an edge (u, v) in Kruskal's algorithm is:",
          options: [
            "FindSet(u) == FindSet(v)",
            "FindSet(u) != FindSet(v)",
            "w(u,v) is minimum",
            "u and v are both in tree",
          ],
          correct: 1,
          translation: "شرط إضافة حافة (u, v) في خوارزمية Kruskal هو:",
          explanation:
            "الصحيح هو FindSet(u) != FindSet(v) يعني u و v في مجموعتين مختلفتين فالحافة مش هتعمل cycle. لو نفس المجموعة يبقى cycle ونمنعها. الوزن الأقل مش كفاية لو هيعمل cycle.",
          tags: ["Kruskal", "Cycle Detection", "Union-Find"],
          ref: "Lecture 8 — Kruskal pseudocode (if FindSet(u) != FindSet(v))",
          likely: "high",
        },
        {
          q: "21. How many FindSet() calls are made during Kruskal's algorithm?",
          options: ["O(n)", "O(m)", "O(n log n)", "O(m^2)"],
          correct: 1,
          translation: "كم عدد استدعاءات FindSet() أثناء خوارزمية Kruskal؟",
          explanation:
            "الصحيح هو O(m) لأن لكل حافة في E بنستدعي FindSet مرتين (مرة لـ u ومرة لـ v)، فالمجموع 2m = O(m). O(n) لـ MakeSet و Union بس.",
          tags: ["Kruskal", "Complexity Analysis"],
          ref: "Lecture 8 — Kruskal Running Time slide (O(m) FindSet calls)",
          likely: "high",
        },
        {
          q: "22. In Dijkstra's algorithm, the priority queue stores vertices ordered by:",
          options: [
            "vertex id",
            "their current dist[] value",
            "edge count",
            "alphabetical order",
          ],
          correct: 1,
          translation:
            "في خوارزمية Dijkstra، طابور الأولويات يخزن الرؤوس مرتبين بـ:",
          explanation:
            "الصحيح هو current dist[] value أي أقل مسافة معروفة لكل رأس. ده اللي بيخلّي DeleteMin يرجع أقرب رأس غير معالج. vertex id / alphabet / edge count مش ليها معنى في Dijkstra.",
          tags: ["Dijkstra", "Priority Queue"],
          ref: "Lecture 8 — Dijkstra pseudocode (ConstructMinHeap(V, dist))",
          likely: "high",
        },
        {
          q: "23. The Hand-Shaking Lemma implies that in any undirected graph, the number of vertices with odd degree is:",
          options: [
            "always odd",
            "always even",
            "always zero",
            "always equal to |V|",
          ],
          correct: 1,
          translation:
            "تستلزم Hand-Shaking Lemma أنه في أي رسم غير موجّه، عدد الرؤوس ذات الدرجة الفردية:",
          explanation:
            "الصحيح هو always even لأن لو جمع الدرجات = 2|E| (زوجي)، فلازم مجموع الدرجات الفردية يكون زوجي، فعدد الرؤوس ذات الدرجة الفردية لازم يكون زوجي. odd مستحيل، صفر ممكن بس مش دائمًا.",
          tags: ["Hand-Shaking Lemma", "Graph Theory"],
          ref: "Lecture 8 — Hand-Shaking Lemma + standard corollary",
          likely: "high",
        },
        {
          q: "24. The Dijkstra pseudocode uses which heap operation to update a vertex's distance after relaxation?",
          options: ["DeleteMin", "UpHeap", "Heapify", "BuildHeap"],
          correct: 1,
          translation:
            "pseudocode الخاص بـ Dijkstra يستخدم عملية heap ما لتحديث مسافة رأس بعد relaxation؟",
          explanation:
            "الصحيح هو UpHeap لأنها بترفع الرأس لو قلّت dist بتاعته عشان يحافظ على خاصية min-heap. DeleteMin لإخراج أصغر عنصر، Heapify/BuildHeap لإنشاء الـ heap مرة واحدة.",
          tags: ["Dijkstra", "Heap", "Priority Queue"],
          ref: "Lecture 8 — Dijkstra pseudocode line 10 (UpHeap(v,Q))",
          likely: "high",
        },
        {
          q: "25. The greedy strategy common to both Prim and Dijkstra is:",
          options: [
            "always sort all edges first",
            "repeatedly pick the locally best (minimum) option",
            "use recursion",
            "use dynamic programming",
          ],
          correct: 1,
          translation: "الاستراتيجية الجشعة المشتركة بين Prim و Dijkstra هي:",
          explanation:
            "الصحيح هو repeatedly pick locally best أي في كل خطوة تختار العنصر الأقل حاليًا. الفرز الشامل خاص بـ Kruskal، recursion/DP مش مستخدمة في أي منهم.",
          tags: ["Greedy", "Prim", "Dijkstra", "Comparison"],
          ref: "Lecture 8 — Prim and Dijkstra both use priority queue greedy selection",
          likely: "high",
        },
        {
          q: "26. Which operation is performed inside the inner for-loop of Dijkstra's algorithm?",
          options: [
            "BuildHeap",
            "Relaxation (if dist[v] > dist[u] + w(u,v) then update)",
            "MakeSet",
            "Sort edges",
          ],
          correct: 1,
          translation:
            "ما العملية التي تتم داخل for-loop الداخلية في خوارزمية Dijkstra؟",
          explanation:
            "الصحيح هو relaxation (الشرط if dist[v] > dist[u] + w(u,v)) وهي قلب الخوارزمية. BuildHeap يتم مرة واحدة في البداية، MakeSet و Sort خاصة بـ Kruskal.",
          tags: ["Dijkstra", "Relaxation"],
          ref: "Lecture 8 — Dijkstra pseudocode lines 7-10",
          likely: "high",
        },
        {
          q: "27. In Kruskal's algorithm, what is the role of the Union operation?",
          options: [
            "sort edges",
            "merge the sets containing u and v after adding edge (u,v)",
            "find the smallest edge",
            "initialize the tree",
          ],
          correct: 1,
          translation: "في خوارزمية Kruskal، ما دور عملية Union؟",
          explanation:
            "الصحيح هو merge sets containing u and v لما نضيف الحافة لTree عشان لو في حاجة تانية بعدها حاول تربط u بـ v ب FindSet نلاقيهم نفس المجموعة. sort تم قبل، find minimum بترتيب الفرز، initialize بـ MakeSet.",
          tags: ["Kruskal", "Union-Find", "Disjoint Set"],
          ref: "Lecture 8 — Kruskal pseudocode (Union(FindSet(u), FindSet(v)))",
          likely: "high",
        },
        {
          q: "28. For an undirected graph G, the degree of vertex v equals:",
          options: [
            "|Adj[v]|",
            "2 * |Adj[v]|",
            "|Adj[v]| / 2",
            "|V| - |Adj[v]|",
          ],
          correct: 0,
          translation: "للرسم البياني غير الموجه G، درجة الرأس v تساوي:",
          explanation:
            "الصحيح هو |Adj[v]| لإن Adj[v] بتحتوي على كل الجيران، وكل جار = حافة واحدة (غير الموجه بتعد مرة). ضرب في 2 غلط لأنها بتضاعف، القسمة على 2 غلط.",
          tags: ["Graph Theory", "Degree", "Adjacency List"],
          ref: "Lecture 8 — Hand-Shaking Lemma slide (deg(v) = |Adj[v]|)",
          likely: "high",
        },
        {
          q: "29. The ConstructMinHeap step in Dijkstra's pseudocode has time complexity:",
          options: ["O(V)", "O(V log V)", "O(V^2)", "O(E)"],
          correct: 1,
          translation:
            "خطوة ConstructMinHeap في pseudocode الخاص بـ Dijkstra لها تعقيد زمني:",
          explanation:
            "الصحيح هو O(V log V) لإدراج عناصر V في min-heap. ممكن يكون O(V) لو BuildHeap لكن الكلاسيكي O(V log V). O(V^2) كبير أوي، O(E) مش صحيح لإن الموضوع رؤوس.",
          tags: ["Dijkstra", "Heap Construction", "Time Complexity"],
          ref: "Lecture 8 — Dijkstra pseudocode line 3",
          likely: "medium",
        },
        {
          q: "30. Which algorithm does NOT use the Disjoint Set (Union-Find) data structure?",
          options: [
            "Kruskal's MST algorithm",
            "Dijkstra's shortest path algorithm",
            "Both use it",
            "Neither uses it",
          ],
          correct: 1,
          translation: "أي خوارزمية لا تستخدم بنية Disjoint Set (Union-Find)؟",
          explanation:
            "الصحيح هو Dijkstra لإنها بتستخدم priority heap فقط. Kruskal هو اللي بيستخدم Union-Find لكشف cycles.",
          tags: ["Kruskal", "Dijkstra", "Disjoint Set", "Comparison"],
          ref: "Lecture 8 — Kruskal pseudocode + Dijkstra pseudocode",
          likely: "high",
        },
        {
          q: "31. The condition to terminate Kruskal's while-loop is when:",
          options: [
            "all edges are processed",
            "encounter == |V| - 1",
            "encounter == |V|",
            "no more edges remain",
          ],
          correct: 1,
          translation: "شرط إنهاء حلقة while في خوارزمية Kruskal هو عندما:",
          explanation:
            "الصحيح هو encounter == |V| - 1 لأن MST لـ |V| رؤوس يحتاج |V|-1 حافة بالظبط. |V| غلط لإنه يعمل cycle. all edges processed بطيء وغير ضروري بعد ما نوصل لـ |V|-1.",
          tags: ["Kruskal", "Termination Condition"],
          ref: "Lecture 8 — Kruskal high-level pseudocode (while encounter < |V|-1)",
          likely: "high",
        },
        {
          q: "32. Which statement correctly compares Prim and Kruskal?",
          options: [
            "Prim grows a forest; Kruskal grows a single tree",
            "Prim grows a single tree; Kruskal grows a forest",
            "Both grow a single tree",
            "Both grow a forest",
          ],
          correct: 1,
          translation: "أي جملة تقارن بشكل صحيح بين Prim و Kruskal؟",
          explanation:
            "الصحيح هو Prim grows single tree, Kruskal grows forest. ده الفرق الأساسي المذكور في المحاضرة. العكس خلط، و both واحد غلط.",
          tags: ["Prim", "Kruskal", "Comparison", "MST"],
          ref: "Lecture 8 — Finding a MST slide",
          likely: "high",
        },

        // ==================== ESSAY QUESTIONS ====================
        {
          type: "essay",
          q: "1. Define a Minimum Spanning Tree (MST) and list three of its real-world applications mentioned in the lecture.",
          translation:
            "عرّف Minimum Spanning Tree (MST) واذكر ثلاثة تطبيقات واقعية له مذكورة في المحاضرة.",
          answer:
            "A Minimum Spanning Tree (MST) of a connected, weighted, undirected graph G = (V, E) is a subset of edges that:\n" +
            "1. Connects all the vertices together (i.e., it is a spanning subgraph),\n" +
            "2. Contains no cycles (i.e., it is a tree),\n" +
            "3. Has the minimum possible total edge weight among all such spanning trees.\n" +
            "A spanning tree of a graph with n vertices always contains exactly (n - 1) edges.\n" +
            "Applications mentioned in the lecture:\n" +
            "- Network design: telephone networks, electrical power networks, hydraulic networks, TV cable networks, computer networks, and road networks.\n" +
            "- MST gives the minimum-cost network connecting all sites.\n" +
            "- MST is the most economical construction of a network.",
          tags: ["MST", "Definition", "Applications"],
          ref: "Lecture 8 — Finding a MST + MST Applications slides",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. Compare Prim's and Kruskal's algorithms for finding MST in terms of the intermediate solution, the strategy used, and the data structures required.",
          translation:
            "قارن بين خوارزمية Prim و Kruskal لإيجاد MST من حيث: الحل الوسيط، الاستراتيجية، وبنى البيانات المطلوبة.",
          answer:
            "Both algorithms are greedy and find an MST, but they differ in strategy and intermediate state:\n" +
            "1. Intermediate solution:\n" +
            "   - Prim: the intermediate solution is a single subtree that grows one vertex at a time.\n" +
            "   - Kruskal: the intermediate solution is a spanning forest (possibly disconnected components) that gradually unifies.\n" +
            "2. Strategy:\n" +
            "   - Prim: repeatedly adds the least-cost edge that connects a vertex in the existing tree to a vertex NOT in the existing tree.\n" +
            "   - Kruskal: repeatedly adds the least-cost edge that does NOT introduce a cycle among the edges included so far.\n" +
            "3. Data structures:\n" +
            "   - Prim: a priority queue (min-heap) keyed by edge weights connecting tree to non-tree vertices.\n" +
            "   - Kruskal: a Disjoint Set (Union-Find) data structure to detect cycles efficiently via MakeSet, FindSet, and Union operations.\n" +
            "4. Time complexity:\n" +
            "   - Prim: O((n + m) log n) using a binary heap.\n" +
            "   - Kruskal: O(m log m) dominated by the sorting step.",
          tags: ["Prim", "Kruskal", "Comparison", "MST"],
          ref: "Lecture 8 — Finding a MST + Kruskal pseudocode + Dijkstra note",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Explain Kruskal's algorithm step by step using the pseudocode shown in the lecture.",
          translation:
            "اشرح خوارزمية Kruskal خطوة بخطوة باستخدام pseudocode المعروض في المحاضرة.",
          answer:
            "Kruskal's algorithm (greedy MST construction):\n" +
            "Step 1: Initialize T as an empty set of edges (the future MST).\n" +
            "Step 2: For each vertex v in V, call MakeSet(v) so each vertex becomes its own singleton set in a Disjoint Set (Union-Find) structure.\n" +
            "Step 3: Sort all edges in E in non-decreasing order of their weight w.\n" +
            "Step 4: Iterate over edges (u, v) in sorted order. For each edge:\n" +
            "   - If FindSet(u) != FindSet(v), then u and v are in different components (no cycle will be formed):\n" +
            "       * Add edge (u, v) to T.\n" +
            "       * Call Union(FindSet(u), FindSet(v)) to merge the two components.\n" +
            "   - Otherwise, discard the edge (it would form a cycle).\n" +
            "Step 5: Stop when T contains exactly |V| - 1 edges. Return T as the MST.\n" +
            "The algorithm grows a spanning forest that gradually unifies into a single tree.",
          tags: ["Kruskal", "Algorithm Steps", "Pseudocode"],
          ref: "Lecture 8 — Kruskal's Algorithm pseudocode",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. Derive the time complexity of Kruskal's algorithm in terms of n = |V| and m = |E|.",
          translation:
            "اشتق التعقيد الزمني لخوارزمية Kruskal بدلالة n = |V| و m = |E|.",
          answer:
            "Let n = |V| and m = |E|.\n" +
            "1. MakeSet: O(n) calls, each O(1) amortized in disjoint set with path compression => total O(n).\n" +
            "2. Sort E by weight: O(m log m) using comparison-based sort.\n" +
            "3. FindSet: O(m) calls (two per edge). With union-by-rank and path compression, each FindSet is nearly O(1) amortized (inverse Ackermann), but a tighter bound yields O(m log n) or essentially O(m alpha(n)).\n" +
            "4. Union: at most O(n) calls, each O(1) amortized.\n" +
            "5. Dominant term: O(m log m) for sorting edges.\n" +
            "Since m <= n(n-1)/2, we have log m <= 2 log n, so O(m log m) is essentially O(m log n) for connected graphs.\n" +
            "Overall complexity: O(m log m) (equivalently O(m log n) for connected graphs).",
          tags: ["Kruskal", "Time Complexity", "Analysis"],
          ref: "Lecture 8 — Kruskal's Algorithm: Running Time slide",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. State the Hand-Shaking Lemma for both undirected and directed graphs, and explain why it holds.",
          translation:
            "اذكر Hand-Shaking Lemma للرسوم البيانية الموجهة وغير الموجهة، واشرح لماذا تنطبق.",
          answer:
            "Undirected form: For any undirected graph G = (V, E),\n" +
            "   sum over v in V of deg(v) = 2 * |E|.\n" +
            "Directed form: For any directed graph G = (V, E),\n" +
            "   sum over v in V of in-deg(v) = sum over v in V of out-deg(v) = |E|.\n" +
            "   Also, deg(v) = out-deg(v) + in-deg(v).\n" +
            "Explanation: Each undirected edge is incident to exactly two vertices, so it contributes 1 to the degree of each of its endpoints, hence 2 to the sum. Each directed edge has exactly one source (contributing 1 to out-deg) and one destination (contributing 1 to in-deg), so the total in-degree equals the total out-degree equals the number of edges.\n" +
            "Corollary: In any undirected graph, the number of vertices with odd degree is even.",
          tags: ["Hand-Shaking Lemma", "Graph Theory", "Proof"],
          ref: "Lecture 8 — The Hand-Shaking Lemma slide",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. Explain Dijkstra's algorithm step by step using the pseudocode shown in the lecture.",
          translation:
            "اشرح خوارزمية Dijkstra خطوة بخطوة باستخدام pseudocode المعروض في المحاضرة.",
          answer:
            "Dijkstra's algorithm (single-source shortest paths with non-negative weights):\n" +
            "Step 1: For each vertex u in V(G), set dist[u] = infinity.\n" +
            "Step 2: Set dist[s] = 0 and p[s] = nil (s is the source; it will be the first vertex scanned).\n" +
            "Step 3: Build a min-heap Q containing all vertices, keyed by their current dist[] value (ConstructMinHeap).\n" +
            "Step 4: While Q is not empty (|V| iterations):\n" +
            "   - u = DeleteMin(Q) -> removes the vertex with the smallest dist[] (O(log V) per deletion).\n" +
            "   - For each neighbor v in Adj[u]:\n" +
            "       * If dist[v] > dist[u] + w(u, v) then:\n" +
            "           - Update dist[v] = dist[u] + w(u, v).\n" +
            "           - Set p[v] = u (record predecessor for path reconstruction).\n" +
            "           - UpHeap(v, Q) to restore the heap property.\n" +
            "Step 5: Stop when Q is empty. The dist[] array now holds shortest distances from s.\n" +
            "Total time: O(E log V) using a standard binary heap.",
          tags: ["Dijkstra", "Algorithm Steps", "Pseudocode"],
          ref: "Lecture 8 — Dijkstra pseudocode",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. Derive the time complexity of Dijkstra's algorithm using a binary heap.",
          translation:
            "اشتق التعقيد الزمني لخوارزمية Dijkstra باستخدام binary heap.",
          answer:
            "Let n = |V| and m = |E|.\n" +
            "1. Initialize dist[]: O(n).\n" +
            "2. ConstructMinHeap: O(n log n) using repeated insertion (or O(n) with BuildHeap).\n" +
            "3. The while loop iterates n times (once per vertex). Each iteration:\n" +
            "   - DeleteMin: O(log n).\n" +
            "   - Inner for-loop scans all neighbors of u. Across all iterations, each edge is examined at most twice (once from each endpoint), so total O(m) relaxations.\n" +
            "   - Each successful relaxation calls UpHeap: O(log n).\n" +
            "4. Therefore:\n" +
            "   - n DeleteMin operations: O(n log n).\n" +
            "   - O(m) UpHeap operations (worst case): O(m log n).\n" +
            "5. Total time = O(n log n) + O(m log n) = O((n + m) log n) = O(E log V) using the lecture's notation.\n" +
            "Note: A Fibonacci heap can improve the bound to O(m + n log n), but the lecture focuses on the binary heap version.",
          tags: ["Dijkstra", "Time Complexity", "Analysis"],
          ref: "Lecture 8 — Dijkstra pseudocode + Big-O note",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. Define the Single-Source Shortest-Paths problem and mention one real-world application.",
          translation:
            "عرّف مشكلة Single-Source Shortest-Paths واذكر تطبيقًا واقعيًا واحدًا لها.",
          answer:
            "Problem statement: Given a connected graph G with non-negative weights on the edges and a source vertex s in G, determine the shortest paths from s to all other vertices in G.\n" +
            "Formally: compute, for every vertex v in V(G), the minimum total weight of any path from s to v.\n" +
            "Real-world application: road map applications (e.g., GPS navigation), where the graph models a road network, vertices are intersections, edge weights are travel times or distances, and the user wants the shortest route from their current location to every other destination. Other applications include network routing protocols such as OSPF and game AI pathfinding.",
          tags: ["Shortest Path", "Problem Definition", "Applications"],
          ref: "Lecture 8 — Single-Source Shortest-Paths Problem slide",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. Explain the role of the Disjoint Set (Union-Find) data structure in Kruskal's algorithm. Mention its three core operations and what each does.",
          translation:
            "اشرح دور بنية Disjoint Set (Union-Find) في خوارزمية Kruskal. اذكر العمليات الأساسية الثلاث وماذا تفعل كل واحدة.",
          answer:
            "Role: The Disjoint Set (Union-Find) data structure allows Kruskal's algorithm to efficiently test whether adding an edge would create a cycle, and to merge components when an edge is added.\n" +
            "Three core operations:\n" +
            "1. MakeSet(v): creates a new singleton set containing only vertex v. Called once for each vertex during initialization (O(n) calls).\n" +
            "2. FindSet(v): returns the representative (root) of the set that contains vertex v. Two vertices are in the same connected component iff their FindSet results are equal.\n" +
            "3. Union(u, v): merges the two sets that contain u and v into a single set. Called after adding a safe edge to reflect that the two endpoints are now connected.\n" +
            "In Kruskal's main loop, an edge (u, v) is added to T only if FindSet(u) != FindSet(v) (different components => no cycle). After adding it, Union(u, v) is called to merge the components.\n" +
            "Using path compression and union by rank, all three operations are nearly constant (inverse Ackermann) amortized, which keeps Kruskal's overall complexity at O(m log m).",
          tags: ["Kruskal", "Disjoint Set", "Union-Find", "Data Structures"],
          ref: "Lecture 8 — Kruskal pseudocode (MakeSet/FindSet/Union)",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Compare weighted adjacency matrix and weighted adjacency list representations in terms of space and use cases.",
          translation:
            "قارن بين تمثيل مصفوفة التجاور الموزونة وقائمة التجاور الموزونة من حيث المساحة وحالات الاستخدام.",
          answer:
            "Weighted adjacency matrix:\n" +
            "- An n x n matrix A where A[i][j] = w(i, j) if (i, j) is in E, A[i][i] = 0, and A[i][j] = infinity otherwise (no edge).\n" +
            "- Space: O(n^2), regardless of how many edges the graph has.\n" +
            "- Best suited for dense graphs where m is close to n^2, or when fast O(1) edge-weight lookup is required.\n" +
            "- Iterating over neighbors of v requires scanning an entire row of n entries.\n" +
            "Weighted adjacency list:\n" +
            "- An array Adj[1..n] where Adj[i] is a list of pairs (j, w(i, j)) for every neighbor j of vertex i.\n" +
            "- Space: O(n + m), proportional to the actual number of edges.\n" +
            "- Best suited for sparse graphs where m is much smaller than n^2 (most real-world graphs).\n" +
            "- Iterating over neighbors of v takes O(deg(v)) time, which is exactly what graph traversal algorithms need.\n" +
            "Most MST and shortest-path algorithms (Prim, Kruskal, Dijkstra) prefer the adjacency list representation for sparse graphs.",
          tags: ["Adjacency Matrix", "Adjacency List", "Graph Representation"],
          ref: "Lecture 8 — Weighted Adjacency Matrix + (Weighted) Adjacency List Structure slides",
          likely: "high",
        },
        {
          type: "essay",
          q: "11. Why does Dijkstra's algorithm NOT work with negative edge weights? Give a brief conceptual justification.",
          translation:
            "لماذا لا تعمل خوارزمية Dijkstra مع الأوزان السالبة؟ اذكر تبريرًا مفاهيميًا موجزًا.",
          answer:
            "Dijkstra's algorithm relies on a greedy invariant: once a vertex u is extracted from the priority queue via DeleteMin, its dist[u] is considered finalized (the shortest possible) and is never updated again.\n" +
            "This invariant holds only when all edge weights are non-negative. With non-negative weights, any future path that goes through other vertices and arrives at u cannot be shorter than the current dist[u], because adding non-negative numbers can only keep the path length the same or increase it.\n" +
            "If even one edge has a negative weight, a later path through a vertex not yet processed might reduce dist[u] after u has been finalized, which violates the invariant. The algorithm would therefore return incorrect (too large) distances.\n" +
            "For graphs with negative weights, the Bellman-Ford algorithm should be used instead.",
          tags: ["Dijkstra", "Negative Weights", "Limitations"],
          ref: "Lecture 8 — Single-Source Shortest-Paths Problem statement (non-negative weights)",
          likely: "medium",
        },
        {
          type: "essay",
          q: "12. List the four standard categories of MST applications mentioned in the lecture and give a one-line example for each.",
          translation:
            "اذكر الفئات الأربعة لتطبيقات MST المذكورة في المحاضرة وأعطِ مثالًا من سطر واحد لكل منها.",
          answer:
            "The lecture lists MST applications under the general umbrella of network design, with the following examples:\n" +
            "1. Telephone networks: laying cables to connect a set of telephone exchanges at minimum total cost.\n" +
            "2. Electrical power networks: connecting power stations and substations with the minimum total length of transmission lines.\n" +
            "3. Hydraulic (water) networks: designing a pipeline system that links water sources to consumers at minimum cost.\n" +
            "4. Road networks: building the minimum-cost set of roads that connects a set of cities so that every city is reachable.\n" +
            "In every case, the MST provides the most economical construction of a network connecting all sites (vertices) using the minimum total edge weight.",
          tags: ["MST", "Applications", "Network Design"],
          ref: "Lecture 8 — MST Applications slide",
          likely: "medium",
        },

        // ==================== CALCULATION / PROBLEM QUESTIONS ====================
        {
          type: "essay",
          q: "1. Verify the Hand-Shaking Lemma on the following undirected graph: V = {A, B, C, D}, E = {(A,B), (A,C), (B,C), (B,D), (C,D)}. Show all degrees and confirm the sum equals 2|E|.",
          translation:
            "تحقق من Hand-Shaking Lemma على الرسم البياني غير الموجه التالي: V = {A, B, C, D}، E = {(A,B), (A,C), (B,C), (B,D), (C,D)}. اعرض كل الدرجات وأكد أن المجموع يساوي 2|E|.",
          answer:
            "Given: |V| = 4 and |E| = 5 (edges: AB, AC, BC, BD, CD).\n" +
            "Compute the degree of each vertex:\n" +
            "  deg(A) = 2 (edges AB, AC)\n" +
            "  deg(B) = 3 (edges AB, BC, BD)\n" +
            "  deg(C) = 3 (edges AC, BC, CD)\n" +
            "  deg(D) = 2 (edges BD, CD)\n" +
            "Sum of degrees = 2 + 3 + 3 + 2 = 10.\n" +
            "By the Hand-Shaking Lemma: sum of degrees = 2 * |E| = 2 * 5 = 10.\n" +
            "Both sides match (10 = 10), so the lemma is verified.\n" +
            "Bonus observation: the number of vertices with odd degree is 2 (B and C), which is even, consistent with the corollary of the lemma.",
          tags: ["Hand-Shaking Lemma", "Calculation", "Verification"],
          ref: "Lecture 8 — Hand-Shaking Lemma slide",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. Apply Kruskal's algorithm on the following weighted undirected graph and find the MST. Vertices = {A, B, C, D, E, F}. Edges with weights: (A,B,4), (A,C,3), (B,C,1), (B,D,2), (C,D,4), (C,E,5), (D,E,7), (D,F,6), (E,F,8). Show each step and the total MST weight.",
          translation:
            "طبّق خوارزمية Kruskal على الرسم البياني الموزون غير الموجه التالي وأوجد MST. الرؤوس = {A, B, C, D, E, F}. الحافات بأوزانها: (A,B,4), (A,C,3), (B,C,1), (B,D,2), (C,D,4), (C,E,5), (D,E,7), (D,F,6), (E,F,8). اعرض كل خطوة والوزن الكلي لـ MST.",
          answer:
            "Step 1 - Sort edges in non-decreasing order of weight:\n" +
            "  (B,C,1), (B,D,2), (A,C,3), (A,B,4), (C,D,4), (C,E,5), (D,F,6), (D,E,7), (E,F,8).\n" +
            "Step 2 - Initialize: T = empty, MakeSet for every vertex (each vertex is its own set). |V| - 1 = 5 edges needed.\n" +
            "Step 3 - Process edges in sorted order:\n" +
            "  - Edge (B,C,1): FindSet(B) != FindSet(C) => no cycle. Add to T. Union(B,C). T = {(B,C)}. edges = 1.\n" +
            "  - Edge (B,D,2): FindSet(B) != FindSet(D) => no cycle. Add to T. Union(B,D). T = {(B,C), (B,D)}. edges = 2.\n" +
            "  - Edge (A,C,3): FindSet(A) != FindSet(C) => no cycle. Add to T. Union(A,C). T = {(B,C), (B,D), (A,C)}. edges = 3.\n" +
            "  - Edge (A,B,4): FindSet(A) == FindSet(B) (both in same set after unions) => would create a cycle. SKIP.\n" +
            "  - Edge (C,D,4): FindSet(C) == FindSet(D) => cycle. SKIP.\n" +
            "  - Edge (C,E,5): FindSet(C) != FindSet(E) => no cycle. Add to T. Union(C,E). T = {(B,C), (B,D), (A,C), (C,E)}. edges = 4.\n" +
            "  - Edge (D,F,6): FindSet(D) != FindSet(F) => no cycle. Add to T. Union(D,F). T = {(B,C), (B,D), (A,C), (C,E), (D,F)}. edges = 5.\n" +
            "Step 4 - Stop: T now has |V| - 1 = 5 edges. MST is complete.\n" +
            "Final MST edges: (B,C), (B,D), (A,C), (C,E), (D,F).\n" +
            "Total MST weight = 1 + 2 + 3 + 5 + 6 = 17.",
          tags: ["Kruskal", "MST", "Calculation", "Step-by-step"],
          ref: "Lecture 8 — Kruskal's Algorithm + worked example",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Apply Dijkstra's algorithm to the following weighted graph and find the shortest distances from source A. Vertices = {A, B, C, D, E}. Edges (undirected, weighted): (A,B,10), (A,C,3), (A,D,20), (B,D,5), (C,B,4), (C,D,11), (D,E,1). Show the dist[] table after each iteration.",
          translation:
            "طبّق خوارزمية Dijkstra على الرسم البياني الموزون التالي وأوجد أقصر المسافات من المصدر A. الرؤوس = {A, B, C, D, E}. الحافات (غير موجّهة، موزونة): (A,B,10), (A,C,3), (A,D,20), (B,D,5), (C,B,4), (C,D,11), (D,E,1). اعرض جدول dist[] بعد كل تكرار.",
          answer:
            "Initialization: dist[A]=0, dist[B..E]=infinity. Q = {A,B,C,D,E}.\n" +
            "Iteration 1 - Select A (dist 0):\n" +
            "  Relax A->B: dist[B] = min(inf, 0+10) = 10\n" +
            "  Relax A->C: dist[C] = min(inf, 0+3) = 3\n" +
            "  Relax A->D: dist[D] = min(inf, 0+20) = 20\n" +
            "  dist = {A:0, B:10, C:3, D:20, E:inf}\n" +
            "Iteration 2 - Select C (dist 3, smallest in Q):\n" +
            "  Relax C->B: dist[B] = min(10, 3+4) = 7\n" +
            "  Relax C->D: dist[D] = min(20, 3+11) = 14\n" +
            "  dist = {A:0, B:7, C:3, D:14, E:inf}\n" +
            "Iteration 3 - Select B (dist 7):\n" +
            "  Relax B->D: dist[D] = min(14, 7+5) = 12\n" +
            "  dist = {A:0, B:7, C:3, D:12, E:inf}\n" +
            "Iteration 4 - Select D (dist 12):\n" +
            "  Relax D->E: dist[E] = min(inf, 12+1) = 13\n" +
            "  dist = {A:0, B:7, C:3, D:12, E:13}\n" +
            "Iteration 5 - Select E (dist 13): no further updates.\n" +
            "Final distances from A:\n" +
            "  dist[A] = 0 (path: A)\n" +
            "  dist[B] = 7 (path: A -> C -> B)\n" +
            "  dist[C] = 3 (path: A -> C)\n" +
            "  dist[D] = 12 (path: A -> C -> B -> D)\n" +
            "  dist[E] = 13 (path: A -> C -> B -> D -> E)",
          tags: ["Dijkstra", "Shortest Path", "Calculation", "Step-by-step"],
          ref: "Lecture 8 — Dijkstra example slides",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. Given a weighted directed graph with n = 6 vertices and m = 12 edges, compute the total running time of (a) Kruskal's algorithm and (b) Dijkstra's algorithm with a binary heap. Show the dominant term.",
          translation:
            "بالنظر إلى رسم بياني موجّه موزون بـ n = 6 رؤوس و m = 12 حافة، احسب الزمن الكلي لـ (a) خوارزمية Kruskal و (b) خوارزمية Dijkstra باستخدام binary heap. اعرض الحد المهيمن.",
          answer:
            "Given: n = |V| = 6, m = |E| = 12.\n" +
            "(a) Kruskal's algorithm:\n" +
            "  - Sort edges: O(m log m) = 12 * log(12) = 12 * 3.585 = 43.02 (approximately, in base-2).\n" +
            "  - MakeSet: O(n) = 6 operations.\n" +
            "  - FindSet: O(m) = 12 calls (two per edge).\n" +
            "  - Union: O(n) = up to 5 calls (n - 1).\n" +
            "  - Dominant term: O(m log m).\n" +
            "  - Using log2(12) approx 3.585, total work approx 12 * 3.585 = ~43 edge-comparisons (plus union-find overhead).\n" +
            "(b) Dijkstra's algorithm with binary heap:\n" +
            "  - O((n + m) log n) = (6 + 12) * log2(6) = 18 * 2.585 = ~46.53.\n" +
            "  - Equivalently O(E log V) = 12 * 2.585 = ~31, but the (V + E) form also accounts for the n DeleteMin operations.\n" +
            "Summary: Kruskal dominant term = O(m log m); Dijkstra dominant term = O((n + m) log n) = O(E log V).",
          tags: ["Kruskal", "Dijkstra", "Time Complexity", "Calculation"],
          ref: "Lecture 8 — Running Time slides for both algorithms",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. Construct the weighted adjacency matrix AND the weighted adjacency list for the following undirected weighted graph. Vertices = {1, 2, 3, 4}. Edges (undirected, weighted): (1,2,5), (1,4,2), (2,3,8), (3,4,3), (2,4,1). Use infinity for non-existent edges and 0 on the diagonal.",
          translation:
            "أنشئ مصفوفة التجاور الموزونة وقائمة التجاور الموزونة للرسم البياني غير الموجه الموزون التالي. الرؤوس = {1, 2, 3, 4}. الحافات: (1,2,5), (1,4,2), (2,3,8), (3,4,3), (2,4,1). استخدم infinity للحافات غير الموجودة و 0 على القطر.",
          answer:
            "Vertices: 1, 2, 3, 4. Edges (undirected, so symmetric): (1,2,5), (1,4,2), (2,3,8), (2,4,1), (3,4,3).\n" +
            "Weighted Adjacency Matrix A (size 4x4):\n" +
            "         1     2     3     4\n" +
            "    1 [  0     5   inf     2  ]\n" +
            "    2 [  5     0     8     1  ]\n" +
            "    3 [ inf    8     0     3  ]\n" +
            "    4 [  2     1     3     0  ]\n" +
            "Explanation:\n" +
            "  A[1][1] = A[2][2] = A[3][3] = A[4][4] = 0 (diagonal).\n" +
            "  A[1][2] = A[2][1] = 5 (edge 1-2).\n" +
            "  A[1][4] = A[4][1] = 2 (edge 1-4).\n" +
            "  A[2][3] = A[3][2] = 8 (edge 2-3).\n" +
            "  A[2][4] = A[4][2] = 1 (edge 2-4).\n" +
            "  A[3][4] = A[4][3] = 3 (edge 3-4).\n" +
            "  All other off-diagonal entries = infinity (no edge).\n" +
            "Weighted Adjacency List Adj:\n" +
            "  Adj[1] = [(2, 5), (4, 2)]\n" +
            "  Adj[2] = [(1, 5), (3, 8), (4, 1)]\n" +
            "  Adj[3] = [(2, 8), (4, 3)]\n" +
            "  Adj[4] = [(1, 2), (2, 1), (3, 3)]\n" +
            "Each list entry is a (neighbor, weight) pair.",
          tags: [
            "Adjacency Matrix",
            "Adjacency List",
            "Graph Representation",
            "Calculation",
          ],
          ref: "Lecture 8 — Weighted Adjacency Matrix + (Weighted) Adjacency List Structure slides",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. For a directed graph G with V = {A, B, C, D} and E = {(A->B), (A->C), (B->D), (C->D), (D->A)}, compute indeg(v) and outdeg(v) for every vertex, and verify that sum of in-degrees equals sum of out-degrees equals |E|.",
          translation:
            "بالنسبة للرسم البياني الموجه G بالرؤوس V = {A, B, C, D} والحافات E = {(A->B), (A->C), (B->D), (C->D), (D->A)}، احسب indeg(v) و outdeg(v) لكل رأس، وتحقق أن مجموع in-degrees يساوي مجموع out-degrees يساوي |E|.",
          answer:
            "Edges (directed): A->B, A->C, B->D, C->D, D->A. So |E| = 5.\n" +
            "Out-degrees (edges leaving each vertex):\n" +
            "  outdeg(A) = 2 (A->B, A->C)\n" +
            "  outdeg(B) = 1 (B->D)\n" +
            "  outdeg(C) = 1 (C->D)\n" +
            "  outdeg(D) = 1 (D->A)\n" +
            "  Sum of out-degrees = 2 + 1 + 1 + 1 = 5.\n" +
            "In-degrees (edges entering each vertex):\n" +
            "  indeg(A) = 1 (from D->A)\n" +
            "  indeg(B) = 1 (from A->B)\n" +
            "  indeg(C) = 1 (from A->C)\n" +
            "  indeg(D) = 2 (from B->D and C->D)\n" +
            "  Sum of in-degrees = 1 + 1 + 1 + 2 = 5.\n" +
            "Verification:\n" +
            "  sum of out-degrees = 5 = |E|. (matches)\n" +
            "  sum of in-degrees = 5 = |E|. (matches)\n" +
            "The directed form of the Hand-Shaking Lemma is verified.\n" +
            "Also, deg(v) = outdeg(v) + indeg(v):\n" +
            "  deg(A) = 3, deg(B) = 2, deg(C) = 2, deg(D) = 3.",
          tags: [
            "Hand-Shaking Lemma",
            "Directed Graph",
            "Calculation",
            "Verification",
          ],
          ref: "Lecture 8 — Hand-Shaking Lemma (directed form)",
          likely: "high",
        },
      ],
    },
  ],
});
