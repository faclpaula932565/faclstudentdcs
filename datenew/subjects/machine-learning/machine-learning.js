/* بيانات مادة: تعلم الالة (machine-learning)
   - المحاضرات (PDF) في lectures/  والأسئلة في questions/
   - المسارات دايمًا من جذر المشروع: datenew/subjects/machine-learning/lectures/lec-01.pdf
   - انسخي شكل المحاضرة/الأسئلة من مادة شغالة عندك (دليل صاحب المنصة، الخطوة 4 و5) */
subjects.push({
  name: "تعلم الالة",
  en: "Machine Learning",
  icon: "🤖",
  slug: "machine-learning",
  lectures: [
    /* { t:"المحاضرة 1 — العنوان", d:"وصف", id:"lec-01",
         pdf:"datenew/subjects/machine-learning/lectures/lec-01.pdf", questions:[] } */
    {
      id: "machine-learning-lecture-01",
      t: "المحاضرة الأولى: مقدمة في تعلم الآلة وخوارزمية أقرب الجيران (kNN)",
      d: "مقدمة عن تعلم الآلة وأنواعه (Supervised / Unsupervised / Reinforcement)، تمثيل البيانات كمتجهات، وخوارزمية K-Nearest Neighbors مع اختيار k والـ validation والـ curse of dimensionality والـ normalization وتكلفة الحساب.",
      pdf: "datenew/subjects/machine-learning/lectures/Lec 1/lec01.pdf",
      pdf2: "datenew/subjects/machine-learning/questions/Questions on each lecture/Machine-Learning-Lecture-01-Questions.pdf",
      // فئات محاضرات تعلم الآلة والتعرف على الأنماط (Machine Learning & Pattern Recognition)
      // المحاضرة الأولى: مقدمة في تعلم الآلة وخوارزمية الجيران الأقرب (Introduction and Nearest Neighbors)

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات مرئية باللغة العربية توضح المفاهيم الأساسية لتعلم الآلة وخوارزمية الجيران الأقرب وتطبيقاتها.",
          links: [
            {
              t: "K Nearest Neighbors (KNN) Algorithm | شرح بالعربي",
              d: "شرح تفصيلي لخوارزمية الجيران الأقرب وآلية حساب المسافات والتصنيف بناءً على تصويت الأغلبية.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=tmzZPAikEy4",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح خوارزمية K-Nearest Neighbors (KNN) ببساطة للمبتدئين",
              d: "فيديو مبسط يشرح كيفية اختيار الجيران وأثر معامل K على دقة النموذج في التصنيف.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=xTLW-hjcVnc",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح خوارزمية KNN في أقل من 6 دقائق",
              d: "ملخص سريع لأساسيات الخوارزمية وتطبيقها المباشر في مسائل التعلم الخاضع للإشراف.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=yjNYPfWts0U",
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
            "مقاطع مرئية باللغة الإنجليزية تقدم شرحاً رياضياً وبصرياً ممتازاً لمفهوم KNN ولعنة الأبعاد.",
          links: [
            {
              t: "StatQuest: K-nearest neighbors, Clearly Explained",
              d: "شرح متكامل من قناة StatQuest يوضح عمل الخوارزمية وااختيار قيمة K والتعامل مع الميزات المختلفة.",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=HVXime0nQeI",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "K-nearest Neighbors (KNN) in 3 min - Visually Explained",
              d: "توضيح بصري سريع لكيفية تشكيل حدود القرار وتحديد الأنماط في المساحات متعددة الأبعاد.",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=gs9E7E0qOIc",
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
            "مقالات وأدلة علمية تشرح الأساس الرياضي والتطبيقي لـ KNN ومقاييس المسافة ولعنة الأبعاد.",
          links: [
            {
              t: "Mathematical Explanation of K-Nearest Neighbour - GeeksforGeeks",
              d: "مرجع شامل يتناول الرياضيات المتقدمة لمقياس Distance Metric وكيفية اختيار K المناسبة.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/machine-learning/mathematical-explanation-of-k-nearest-neighbour/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "How to Choose the Right Distance Metric in KNN - GeeksforGeeks",
              d: "مقالة تقارن بين مقاييس المسافات المختلفة مثل المسافة الإقليدية والمانهاتن والمانكوفسكي.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/machine-learning/how-to-choose-the-right-distance-metric-in-knn/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "How to Find The Optimal Value of K in KNN - GeeksforGeeks",
              d: "شرح عملي لطرق اختيار المعامل الفائق K باستخدام Cross-Validation وتجنب Overfitting.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/machine-learning/how-to-find-the-optimal-value-of-k-in-knn/",
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
            "أدوات تفاعلية ومستودعات برمجية لتجربة الخوارزمية وتصور حدود القرار تفاعلياً.",
          links: [
            {
              t: "Interactive K-Nearest Neighbors Visualizer",
              d: "أداة تفاعلية تجريبية لتحديد نقاط البيانات وتعديل قيمة K وملاحظة تغير حدود القرار بشكل مباشر.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.luseratech.com/knn-visual",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "K-Nearest Neighbors Tutorial with Scikit-Learn",
              d: "دليل برمجي لتطبيق KNN وتجهيز البيانات وتطبيع الميزات باستخدام مكتبة Scikit-Learn في بايثون.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://kevinzakka.github.io/2016/07/13/k-nearest-neighbor/",
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
          q: "1. According to Tom Mitchell's definition, a computer program is said to learn from experience E with respect to tasks T and performance measure P if:",
          options: [
            "its source code is rewritten by the programmer each time new data arrives",
            "its performance at tasks in T, as measured by P, improves with experience E",
            "it memorizes every training example exactly and reproduces it on request",
            "it follows a fixed set of rules that the programmer wrote before seeing any data",
          ],
          correct: 1,
          translation:
            "حسب تعريف Tom Mitchell، البرنامج بيتعلم من الخبرة E لما:",
          explanation:
            "التعريف بيربط التعلم بتحسّن الأداء P على المهام T مع زيادة الخبرة E. الحفظ الحرفي أو القواعد الثابتة مش بتمثل تحسّن مع الخبرة، وطول الكود ملوش علاقة بالأداء.",
          tags: ["Definition of Learning", "Tom Mitchell"],
          ref: "Lecture 01 — Slide 5",
        },
        {
          q: "2. Which of the following is given in the lecture as a reason to use a learning algorithm?",
          options: [
            "The correct behavior can easily be programmed by hand using a few rules",
            "Labeled data is never needed because the system ignores experience",
            "The goal is to avoid using any data and rely on fixed formulas",
            "The system must adapt to a changing environment, such as spam detection",
          ],
          correct: 3,
          translation:
            "أي من التالي مذكور في المحاضرة كسبب لاستخدام خوارزمية تعلّم؟",
          explanation:
            "من الأسباب المذكورة: صعوبة كتابة الحل يدويًا، وحاجة النظام للتكيّف مع بيئة متغيرة (مثل spam detection). لو الحل سهل يدويًا فمفيش داعي للتعلم، والتعلم محتاج بيانات أو خبرة.",
          tags: ["Why ML", "Spam Detection"],
          ref: "Lecture 01 — Slide 6",
        },
        {
          q: "3. In which type of machine learning does an agent interact with the world and learn to maximize a scalar reward signal?",
          options: [
            "Reinforcement learning",
            "Supervised learning",
            "Unsupervised learning",
            "Instance-based regression",
          ],
          correct: 0,
          translation:
            "في أي نوع من تعلم الآلة بيتفاعل الـ agent مع العالم ويتعلم يعظّم إشارة مكافأة رقمية؟",
          explanation:
            "الـ reinforcement learning هو اللي فيه agent وreward. الـ supervised محتاج labels صحيحة، والـ unsupervised مفيهوش labels وبيدور على أنماط.",
          tags: ["Types of ML", "Reinforcement Learning"],
          ref: "Lecture 01 — Slide 7",
        },
        {
          q: "4. In supervised learning, which is the training set composed of?",
          options: [
            "Inputs only, with no labels",
            "Only reward signals received from an environment",
            "Only the hyperparameters of the model",
            "Inputs together with their corresponding labels",
          ],
          correct: 3,
          translation:
            "في الـ supervised learning، مكوّنة من إيه مجموعة التدريب؟",
          explanation:
            "الـ supervised learning معناه إن عندنا مدخلات ومعاها labels (الإجابة الصحيحة). المدخلات بدون labels هي حالة unsupervised، والـ rewards هي reinforcement.",
          tags: ["Supervised Learning", "Training Set"],
          ref: "Lecture 01 — Slide 16",
        },
        {
          q: "5. In a regression problem, the target t is:",
          options: [
            "an element of a discrete set {1, ..., C}",
            "always a binary value 0 or 1",
            "always a vector of pixel values",
            "a real number, for example a stock price",
          ],
          correct: 3,
          translation: "في مسألة الـ regression، الـ target t بيكون:",
          explanation:
            "في الـ regression الـ t رقم حقيقي (زي سعر سهم). العنصر من مجموعة منفصلة {1..C} ده تعريف الـ classification.",
          tags: ["Regression", "Classification"],
          ref: "Lecture 01 — Slide 20",
        },
        {
          q: "6. Why is representing the input as a vector in R^d a good strategy?",
          options: [
            "Because it removes the need for any labels in supervised problems",
            "Because vectors are easy to manipulate and we can apply linear algebra",
            "Because it always reduces every data type to two dimensions",
            "Because it guarantees zero error on the training set for any model",
          ],
          correct: 1,
          translation: "ليه تمثيل المدخلات كمتجه في R^d استراتيجية كويسة؟",
          explanation:
            "المحاضرة بتقول إن المتجهات تمثيل ممتاز لأننا نقدر نستخدم الجبر الخطي. التمثيل مبيلغيش الـ labels ولا بيضمن خطأ صفر.",
          tags: ["Input Vectors", "Representation"],
          ref: "Lecture 01 — Slide 18",
        },
        {
          q: "7. Why does the lecture recommend vectorizing computations (for example with NumPy)?",
          options: [
            "Expressing them as matrix/vector operations exploits hardware efficiency and makes code cleaner",
            "It removes the need to derive the algorithm mathematically before coding",
            "It makes the training data larger so the model fits it better",
            "It is required for the model to have labels in supervised learning",
          ],
          correct: 0,
          translation:
            "ليه المحاضرة بتنصح بعمل vectorization للحسابات (مثلًا بـ NumPy)؟",
          explanation:
            "صياغة الحسابات كعمليات matrix/vector بتستغل كفاءة الهاردوير وبتخلي الكود أنضف وأسهل في القراءة. ملهاش علاقة بحجم البيانات ولا بالـ labels.",
          tags: ["NumPy", "Vectorization"],
          ref: "Lecture 01 — Slide 14",
        },
        {
          q: "8. What is the basic idea of the nearest neighbor method for classifying a novel input x?",
          options: [
            "Fit a straight line through all training points",
            "Average the labels of all training examples",
            "Find the nearest training input to x and copy its label",
            "Build a tree by splitting on features",
          ],
          correct: 2,
          translation:
            "إيه الفكرة الأساسية لطريقة أقرب جار (nearest neighbor) لتصنيف مدخل جديد x؟",
          explanation:
            "الفكرة إننا نلاقي أقرب مدخل في الـ training set وننسخ الـ label بتاعه. الخط المستقيم هو regression، والشجرة هي decision tree، والمتوسط الكلي بيتجاهل القرب.",
          tags: ["Nearest Neighbors"],
          ref: "Lecture 01 — Slide 21",
        },
        {
          q: "9. How does the lecture formalize 'nearest' in nearest neighbors?",
          options: [
            "Using Euclidean distance, although other choices are possible",
            "Using Manhattan distance only, with no other choices allowed",
            "Using Hamming distance only, with no other choices allowed",
            "Using the number of shared labels between two examples",
          ],
          correct: 0,
          translation: "إزاي المحاضرة بتعرّف كلمة 'أقرب' في nearest neighbors؟",
          explanation:
            "المحاضرة بتستخدم المسافة الإقليدية (Euclidean) وتذكر إن في اختيارات تانية ممكنة، فمفيش مسافة واحدة بس مفروضة (Manhattan أو Hamming).",
          tags: ["Euclidean Distance", "kNN"],
          ref: "Lecture 01 — Slide 21",
        },
        {
          q: "10. What is a decision boundary in a classification task?",
          options: [
            "A line or surface that divides different groups in the classification task",
            "The training example that has the largest numeric label value",
            "The set of all misclassified test examples in the dataset",
            "The validation set that is used to tune the value of k",
          ],
          correct: 0,
          translation: "إيه هو الـ decision boundary في مسألة تصنيف؟",
          explanation:
            "الـ decision boundary خط أو سطح بيفصل المجموعات (classes) المختلفة وبيوضح أي منطقة تنتمي لأي class.",
          tags: ["Decision Boundary"],
          ref: "Lecture 01 — Slide 22",
        },
        {
          q: "11. What is a main weakness of the 1-nearest-neighbor classifier?",
          options: [
            "It cannot be applied to numeric features such as pixel values",
            "It requires a very long training phase before predicting",
            "It is sensitive to noise or mislabeled data (class noise)",
            "It always underfits the data regardless of the labels",
          ],
          correct: 2,
          translation: "إيه نقطة الضعف الأساسية في 1-nearest-neighbor؟",
          explanation:
            "لأنه بينسخ label أقرب نقطة بس، فلو النقطة دي غلط أو فيها noise التصنيف هيغلط. وهو غالبًا بيعمل overfit مش underfit، ومفيهوش مرحلة تدريب طويلة.",
          tags: ["Nearest Neighbors", "Class Noise"],
          ref: "Lecture 01 — Slide 23",
        },
        {
          q: "12. What is the proposed solution to the noise sensitivity of nearest neighbors?",
          options: [
            "Smooth the decision by having the k nearest neighbors vote",
            "Use only the single nearest neighbor with a larger weight",
            "Remove all training points that are far from x",
            "Double the number of dimensions",
          ],
          correct: 0,
          translation: "إيه الحل المقترح لحساسية nearest neighbors للـ noise؟",
          explanation:
            "الحل إن k جيران يصوّتوا فبنعمل smoothing، فتأثير نقطة واحدة غلط بيقل. الاعتماد على جار واحد بس هو أصل المشكلة.",
          tags: ["kNN", "Voting"],
          ref: "Lecture 01 — Slide 24",
        },
        {
          q: "13. What is the classification output of the kNN algorithm?",
          options: [
            "The majority class among the k examples closest to the test instance",
            "The class of the farthest training example in the set",
            "The mean of the k distances to the test instance",
            "The class that has the fewest examples among the neighbors",
          ],
          correct: 0,
          translation: "إيه ناتج التصنيف في خوارزمية kNN؟",
          explanation:
            "الخوارزمية بتلاقي k أمثلة الأقرب للـ test instance وبتطلع الـ majority class بينهم.",
          tags: ["kNN Algorithm"],
          ref: "Lecture 01 — Slide 25",
        },
        {
          q: "14. What is the risk of choosing a very small k?",
          options: [
            "Underfitting: the model averages over too many examples",
            "The algorithm cannot produce any prediction for new inputs",
            "Overfitting: it becomes sensitive to random abnormalities in the training data",
            "The memory requirement becomes zero because nothing is stored",
          ],
          correct: 2,
          translation: "إيه خطر اختيار k صغيرة جدًا؟",
          explanation:
            "k الصغيرة بتلقط الأنماط الدقيقة لكن ممكن تعمل overfit وتتأثر بالقيم الشاذة العشوائية. الـ underfitting هو مشكلة k الكبيرة.",
          tags: ["Choosing k", "Overfitting"],
          ref: "Lecture 01 — Slide 31",
        },
        {
          q: "15. What is the risk of choosing a very large k?",
          options: [
            "Overfitting to random abnormalities in the training data",
            "Underfitting: it may fail to capture important regularities",
            "The model becomes sensitive to every single noisy point",
            "The algorithm needs the labels to be removed from the data",
          ],
          correct: 1,
          translation: "إيه خطر اختيار k كبيرة جدًا؟",
          explanation:
            "k الكبيرة بتخلي التنبؤ مستقر لأنه بيتوسّط على أمثلة كتير، لكن ممكن تفوّت أنماط مهمة فيحصل underfitting.",
          tags: ["Choosing k", "Underfitting"],
          ref: "Lecture 01 — Slide 31",
        },
        {
          q: "16. Compared with k = 1, the decision boundary of kNN with k = 15 (shown in the figures) is:",
          options: [
            "more jagged and more complex",
            "exactly identical",
            "undefined for two classes",
            "smoother and less complex",
          ],
          correct: 3,
          translation:
            "مقارنةً بـ k = 1، الـ decision boundary في kNN لما k = 15 بيكون:",
          explanation:
            "زيادة k بتعمل averaging على جيران أكتر فالحدود بتبقى أنعم وأبسط. k = 1 بيدي حدود متعرجة بتتبع كل نقطة.",
          tags: ["Decision Boundary", "Choosing k"],
          ref: "Lecture 01 — Slides 26-27 and 31",
        },
        {
          q: "17. How can we measure the generalization error of a model?",
          options: [
            "By computing the error rate on the training set only",
            "By counting the number of hyperparameters in the model",
            "By measuring the error rate on new examples (a test set)",
            "By measuring the training time of the algorithm",
          ],
          correct: 2,
          translation: "إزاي نقيس generalization error لنموذج؟",
          explanation:
            "الـ generalization error هو نسبة الخطأ على أمثلة جديدة لم يشوفها النموذج، وبنقيسه بـ test set. الخطأ على الـ training set ممكن يكون صغير جدًا من غير ما النموذج يعمم.",
          tags: ["Generalization", "Test Set"],
          ref: "Lecture 01 — Slide 32",
        },
        {
          q: "18. Why is k in kNN called a hyperparameter?",
          options: [
            "It is learned automatically by gradient descent during training",
            "It cannot be fit as part of the learning algorithm itself",
            "It is the label of the nearest training point",
            "It is one of the input features of each example",
          ],
          correct: 1,
          translation: "ليه k في kNN بتتسمى hyperparameter؟",
          explanation:
            "الـ hyperparameter قيمة مبنقدرش نتعلمها كجزء من خوارزمية التعلّم نفسها، فبنضبطها بـ validation set. مش feature ولا label.",
          tags: ["Hyperparameter"],
          ref: "Lecture 01 — Slide 33",
        },
        {
          q: "19. What is the validation set used for?",
          options: [
            "Tuning hyperparameters such as k",
            "Measuring the final generalization performance",
            "Storing the training data in memory",
            "Computing the Euclidean distances",
          ],
          correct: 0,
          translation: "الـ validation set بيُستخدم في إيه؟",
          explanation:
            "الـ validation set بنضبط بيه الـ hyperparameters زي k. أما قياس الأداء النهائي فده دور الـ test set اللي بيُستخدم في الآخر بس.",
          tags: ["Validation Set", "Test Set"],
          ref: "Lecture 01 — Slide 33",
        },
        {
          q: "20. What happens to the volume of the feature space as the number of dimensions increases?",
          options: [
            "It shrinks, so the data becomes denser",
            "It grows exponentially, so the data becomes sparse",
            "It stays constant while the points move closer",
            "It grows linearly and the data stays dense",
          ],
          correct: 1,
          translation:
            "إيه اللي بيحصل لحجم فراغ الـ features لما عدد الأبعاد يزيد؟",
          explanation:
            "الحجم بيزيد أُسّيًا فالبيانات بتبقى متباعدة (sparse). ده أساس الـ curse of dimensionality وبيأثر على kNN.",
          tags: ["Curse of Dimensionality", "Sparsity"],
          ref: "Lecture 01 — Slide 34",
        },
        {
          q: "21. Why does high dimensionality hurt nearest neighbors?",
          options: [
            "Distances become exactly zero between all pairs of points in the set",
            "The nearest neighbor always turns out to be the farthest point",
            "The labels of the training points disappear from the dataset",
            "All points appear roughly equidistant, so picking a label is hard",
          ],
          correct: 3,
          translation: "ليه الأبعاد العالية بتضر nearest neighbors؟",
          explanation:
            "في الأبعاد العالية المسافات بين أي نقطتين بتقارب بعض فالمقارنة بالقرب تفقد معناها. المسافات مش بتبقى صفر ولا بتتعكس.",
          tags: ["Curse of Dimensionality", "Equidistance"],
          ref: "Lecture 01 — Slide 36",
        },
        {
          q: "22. What is the simple fix proposed for the sensitivity of nearest neighbors to feature ranges?",
          options: [
            "Set k equal to the total number of training examples available",
            "Delete every feature except the first one in the vector",
            "Normalize each dimension to have zero mean and unit variance",
            "Use only binary labels for all of the examples",
          ],
          correct: 2,
          translation:
            "إيه الحل البسيط المقترح لحساسية nearest neighbors لمدى قيم الـ features؟",
          explanation:
            "بنحسب mean وstandard deviation لكل بُعد ونعمل x~ = (x - mu) / sigma. المحاضرة بتحذّر إن في بعض المسائل الـ scale بيكون مهم.",
          tags: ["Normalization"],
          ref: "Lecture 01 — Slide 37",
        },
        {
          q: "23. How many computations does naive kNN need at training time?",
          options: [
            "O(ND) for computing all pairwise distances",
            "Zero, since it only stores the data",
            "O(N log N) for sorting the training set",
            "O(N^2) for building a distance matrix",
          ],
          correct: 1,
          translation: "كام عملية حسابية بتحتاجها kNN البسيطة وقت التدريب؟",
          explanation:
            "kNN بتخزّن البيانات بس، فتكلفة التدريب صفر. التكلفة كلها وقت الاختبار لكل query: O(ND) للمسافات وO(N log N) للترتيب.",
          tags: ["Computational Cost"],
          ref: "Lecture 01 — Slide 38",
        },
        {
          q: "24. In the digit classification example, what error did KNN with shape contexts achieve on MNIST compared with Euclidean KNN?",
          options: [
            "3% error versus 0.63% error",
            "0% error versus 3% error",
            "10% error versus 5% error",
            "0.63% error versus 3% error",
          ],
          correct: 3,
          translation:
            "في مثال تصنيف الأرقام، إيه نسبة الخطأ اللي حققتها KNN باستخدام shape contexts على MNIST مقارنةً بـ Euclidean KNN؟",
          explanation:
            "الـ shape contexts حققت 0.63% مقابل 3% للـ Euclidean KNN، وده بيوضح إن مقياس تشابه كويس بيحسّن kNN كتير. الاختيار العكسي بيقلب الأرقام.",
          tags: ["Shape Contexts", "MNIST"],
          ref: "Lecture 01 — Slide 40",
        },
        {
          q: "25. What was special about the '80 Million Tiny Images' dataset?",
          options: [
            "It was a small dataset of high-resolution medical images for diagnosis",
            "It contained only audio waveforms recorded from speakers",
            "The first extremely large image dataset: color images scaled down to 32 x 32",
            "It was a dataset of only 80 labeled images used for testing",
          ],
          correct: 2,
          translation: "إيه المميز في dataset اسمها '80 Million Tiny Images'؟",
          explanation:
            "كانت أول dataset ضخمة جدًا للصور، مكوّنة من صور ملونة مصغّرة لـ 32 x 32، ومع البيانات الكبيرة بتلاقي matches دلالية أحسن (مع مقياس تشابه مختار بعناية).",
          tags: ["80 Million Tiny Images", "Large Datasets"],
          ref: "Lecture 01 — Slide 41",
        },
        {
          type: "essay",
          q: "1. Define machine learning and explain why we may want to use a learning algorithm instead of hand-written rules.",
          translation:
            "عرّف تعلم الآلة واشرح ليه ممكن نستخدم خوارزمية تعلّم بدل القواعد المكتوبة يدويًا.",
          answer:
            "Machine learning: programming an algorithm to automatically learn from data or from experience. Tom Mitchell: a program learns from experience E for tasks T with performance P if its performance on T, measured by P, improves with E.\n" +
            "Reasons to use learning:\n" +
            "- Hard to code a solution by hand (e.g., vision, speech).\n" +
            "- The system must adapt to a changing environment (e.g., spam detection).\n" +
            "- We want the system to perform better than the human programmers.\n" +
            "- Privacy/fairness (e.g., ranking search results).",
          tags: ["Definition of ML", "Why ML"],
          ref: "Lecture 01 — Slides 5-6",
        },
        {
          type: "essay",
          q: "2. Compare supervised, unsupervised and reinforcement learning, and mention application areas of machine learning from the lecture.",
          translation:
            "قارن بين supervised وunsupervised وreinforcement learning واذكر مجالات تطبيق ML من المحاضرة.",
          answer:
            "Supervised learning: we have labeled examples of the correct behavior.\n" +
            "Unsupervised learning: no labeled examples; we look for interesting patterns in the data.\n" +
            "Reinforcement learning: an agent interacts with the world and learns to maximize a scalar reward signal.\n" +
            "Applications: computer vision (object detection, semantic segmentation, pose estimation), natural language processing (machine translation, sentiment analysis, spam filtering, chatbots), and e-commerce/recommender systems (Amazon, Netflix).",
          tags: ["Types of ML", "Applications"],
          ref: "Lecture 01 — Slides 7-10",
        },
        {
          type: "essay",
          q: "3. Describe the supervised learning setup: inputs, labels, input vectors, and the difference between regression and classification.",
          translation:
            "اشرح إعداد الـ supervised learning: المدخلات والـ labels والـ input vectors والفرق بين regression وclassification.",
          answer:
            "We are given a training set of inputs and corresponding labels (e.g., image -> object category, audio -> text).\n" +
            "Inputs of any type (images, text, audio, transactions) are represented as an input vector x in R^d; vectors allow linear algebra. We can use raw pixels, but a vector of meaningful features is much better.\n" +
            "The training set is {(x(1), t(1)), ..., (x(N), t(N))}.\n" +
            "Regression: t is a real number (e.g., stock price).\n" +
            "Classification: t is an element of a discrete set {1, ..., C}.",
          tags: ["Supervised Learning", "Input Vectors"],
          ref: "Lecture 01 — Slides 16-20",
        },
        {
          type: "essay",
          q: "4. Explain the nearest neighbor and k-nearest neighbors algorithms, including how the kNN prediction is made.",
          translation:
            "اشرح خوارزميتي nearest neighbor وk-nearest neighbors وإزاي بيتعمل التنبؤ في kNN.",
          answer:
            "Nearest neighbor: given a novel input x, find the nearest input vector in the training set D_tr and copy its label. 'Nearest' is formalized with Euclidean distance (other choices possible).\n" +
            "Problem: it is sensitive to noise or mislabeled data (class noise).\n" +
            "Solution (kNN): smooth by letting the k nearest neighbors vote.\n" +
            "Algorithm: (1) find the k examples in D_tr closest to the test instance x; (2) the classification output is the majority class among them.",
          tags: ["Nearest Neighbors", "kNN"],
          ref: "Lecture 01 — Slides 21-25",
        },
        {
          type: "essay",
          q: "5. Discuss the trade-off in choosing k in kNN, and what the decision boundaries for k = 1 and k = 15 show.",
          translation:
            "ناقش الـ trade-off في اختيار k في kNN وإيه اللي بتوضحه حدود القرار لـ k = 1 وk = 15.",
          answer:
            "Small k: good at capturing fine-grained patterns, but may overfit, i.e., be sensitive to random abnormalities in the training data. The boundary for k = 1 follows individual points and is jagged.\n" +
            "Large k: makes stable predictions by averaging over many examples, but may underfit, i.e., fail to capture important regularities. The boundary for k = 15 is smoother.\n" +
            "The optimal k depends on the number of data points n. We control the complexity of the model by varying k.",
          tags: ["Choosing k", "Overfitting", "Underfitting"],
          ref: "Lecture 01 — Slides 26-27 and 31",
        },
        {
          type: "essay",
          q: "6. What is a hyperparameter? Explain the roles of the validation set and the test set and how generalization is measured.",
          translation:
            "إيه هو الـ hyperparameter؟ اشرح دور الـ validation set والـ test set وإزاي بنقيس الـ generalization.",
          answer:
            "We want the algorithm to generalize to data it has not seen before. Generalization error = error rate on new examples, measured with a test set.\n" +
            "k is a hyperparameter: something we cannot fit as part of the learning algorithm itself.\n" +
            "We tune hyperparameters using a validation set.\n" +
            "The test set is used only at the very end, to measure the generalization performance of the final configuration.",
          tags: ["Hyperparameter", "Validation Set", "Test Set"],
          ref: "Lecture 01 — Slides 32-33",
        },
        {
          type: "essay",
          q: "7. Explain the curse of dimensionality and its impact on the performance of kNN.",
          translation: "اشرح الـ curse of dimensionality وتأثيره على أداء kNN.",
          answer:
            "The curse of dimensionality refers to phenomena that arise with high-dimensional data. As the number of dimensions increases, the volume of the space grows exponentially, so the data becomes sparse (points are farther apart).\n" +
            "Consequences: increased computational complexity, overfitting, and deteriorating performance of some algorithms.\n" +
            "For kNN: it assumes that points close in input space have close (the same) outputs. In high dimensions, distances become more uniform and all points appear roughly equidistant, so the notion of distance loses meaning and it is hard to select the label for a test point.",
          tags: ["Curse of Dimensionality", "kNN"],
          ref: "Lecture 01 — Slides 34-36",
        },
        {
          type: "essay",
          q: "8. Why and how do we normalize features in nearest neighbors? Is normalization always appropriate?",
          translation:
            "ليه وإزاي بنعمل normalization للـ features في nearest neighbors؟ وهل دايمًا مناسب؟",
          answer:
            "Nearest neighbors is sensitive to the ranges of different features; often the units are arbitrary, so a feature with a large range dominates the distance.\n" +
            "Fix: normalize each dimension to zero mean and unit variance. Compute the mean mu_j and standard deviation sigma_j, and take x~_j = (x_j - mu_j) / sigma_j.\n" +
            "Caution: depending on the problem, the scale might be important, so normalization is not always appropriate.",
          tags: ["Normalization", "Feature Scaling"],
          ref: "Lecture 01 — Slide 37",
        },
        {
          type: "essay",
          q: "9. Analyze the computational cost of naive kNN at training time and test time, and mention its memory requirement.",
          translation:
            "حلّل تكلفة الحساب في kNN البسيطة وقت التدريب ووقت الاختبار واذكر متطلبات الذاكرة.",
          answer:
            "Training time: 0 computations (it only stores the data).\n" +
            "Test time, per query (naive algorithm): compute D-dimensional Euclidean distances to N data points: O(ND); then sort the distances: O(N log N).\n" +
            "This is repeated for every query, which is very expensive by the standards of a learning algorithm. It also needs to store the entire dataset in memory.\n" +
            "Much work has gone into algorithms and data structures for efficient nearest neighbors in high dimensions or with large datasets.",
          tags: ["Computational Cost", "kNN"],
          ref: "Lecture 01 — Slide 38",
        },
        {
          type: "essay",
          q: "10. Why does the lecture derive algorithms by hand although frameworks such as PyTorch and TensorFlow do much of the work? Summarize the conclusions about kNN.",
          translation:
            "ليه المحاضرة بتشتق الخوارزميات يدويًا رغم إن frameworks زي PyTorch وTensorFlow بتعمل شغل كتير؟ ولخّص الخلاصة عن kNN.",
          answer:
            "Frameworks (PyTorch, TensorFlow, JAX) provide automatic differentiation, computation graphs, algorithm libraries and GPU support. We still derive things by hand so we know what to do if something goes wrong: debugging learning algorithms requires understanding what goes on beneath the hood.\n" +
            "Conclusions on kNN: a simple algorithm that does all its work at test time (in a sense, no learning); the complexity can be controlled by varying k; it suffers from the curse of dimensionality. The next topic is parametric models, which learn a compact summary of the data.",
          tags: ["Frameworks", "kNN Conclusions"],
          ref: "Lecture 01 — Slides 15 and 43",
        },
        {
          type: "essay",
          q: "11. Calculation: Compute the Euclidean distance between the points p = (1, 2, 3) and q = (4, 6, 3).",
          translation:
            "مسألة حسابية: احسب المسافة الإقليدية بين النقطتين p = (1, 2, 3) وq = (4, 6, 3).",
          answer:
            "Formula: d(p, q) = sqrt( sum_i (p_i - q_i)^2 ).\n" +
            "Differences: (1-4) = -3, (2-6) = -4, (3-3) = 0.\n" +
            "Squares: 9 + 16 + 0 = 25.\n" +
            "d = sqrt(25) = 5.",
          tags: ["Euclidean Distance"],
          ref: "Lecture 01 — Slide 21",
        },
        {
          type: "essay",
          q: "12. Calculation: Using the first example in the lecture, x = [4, 5, 10, 4, 3, 11, 14, 9, 8, 10, 12], y = [21, 19, 24, 17, 16, 25, 24, 23, 22, 21, 21], classes = [0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1], classify the new point (8, 21) with k = 1, k = 3 and k = 5.",
          translation:
            "مسألة حسابية: باستخدام المثال الأول في المحاضرة، صنّف النقطة الجديدة (8, 21) بـ k = 1 وk = 3 وk = 5.",
          answer:
            "Euclidean distances from (8, 21), sorted from nearest:\n" +
            "(8, 22) class 0: d = 1.00\n" +
            "(10, 21) class 1: d = 2.00\n" +
            "(9, 23) class 1: d = sqrt(1 + 4) = 2.24\n" +
            "(5, 19) class 0: d = sqrt(9 + 4) = 3.61\n" +
            "(10, 24) class 1: d = sqrt(4 + 9) = 3.61\n" +
            "(4, 21) class 0 and (12, 21) class 1: d = 4.00\n" +
            "k = 1: nearest neighbor is class 0, so predicted class = 0.\n" +
            "k = 3: neighbors are classes 0, 1, 1, majority = 1.\n" +
            "k = 5: neighbors are classes 0, 1, 1, 0, 1 (three of class 1 versus two of class 0), majority = 1.\n" +
            "Note: the prediction changes from 0 to 1 as k grows, which shows the effect of k.",
          tags: ["kNN", "Worked Example"],
          ref: "Lecture 01 — Slide 28",
        },
        {
          type: "essay",
          q: "13. Calculation: Using the second example in the lecture (heights x and weights y), classify the new point (170, 55) with k = 3.",
          translation:
            "مسألة حسابية: باستخدام المثال الثاني في المحاضرة، صنّف النقطة الجديدة (170, 55) بـ k = 3.",
          answer:
            "Data: x = [167, 182, 176, 173, 172, 174, 169, 173, 170], y = [51, 62, 69, 64, 65, 56, 58, 57, 55], classes = [0, 1, 1, 1, 1, 0, 1, 1, 1].\n" +
            "Distances to (170, 55): (170,55): 0 (class 1); (169,58): sqrt(1+9) = 3.16 (class 1); (173,57): sqrt(9+4) = 3.61 (class 1); (174,56): sqrt(16+1) = 4.12 (class 0); (167,51): 5.00 (class 0).\n" +
            "3 nearest = class 1, class 1, class 1.\n" +
            "Majority vote: predicted class = 1.",
          tags: ["kNN", "Worked Example"],
          ref: "Lecture 01 — Slide 30",
        },
        {
          type: "essay",
          q: "14. Calculation: Normalize the feature values [2, 4, 6, 8] to zero mean and unit variance (use the population standard deviation).",
          translation:
            "مسألة حسابية: اعمل normalization للقيم [2, 4, 6, 8] لتبقى zero mean وunit variance (استخدم الانحراف المعياري للمجتمع).",
          answer:
            "Formula: x~ = (x - mu) / sigma.\n" +
            "mu = (2 + 4 + 6 + 8) / 4 = 5.\n" +
            "Variance = ((-3)^2 + (-1)^2 + 1^2 + 3^2) / 4 = 20 / 4 = 5, so sigma = sqrt(5) = 2.236.\n" +
            "Normalized values: (2-5)/2.236 = -1.342; (4-5)/2.236 = -0.447; (6-5)/2.236 = 0.447; (8-5)/2.236 = 1.342.",
          tags: ["Normalization"],
          ref: "Lecture 01 — Slide 37",
        },
        {
          type: "essay",
          q: "15. Calculation: A naive kNN classifier has N = 10,000 training points with D = 50 features. Estimate the number of operations for one query and for 200 queries, and the training cost.",
          translation:
            "مسألة حسابية: مصنّف kNN بسيط عنده N = 10,000 نقطة تدريب وD = 50 feature. قدّر عدد العمليات لـ query واحد ولـ 200 query وتكلفة التدريب.",
          answer:
            "Training cost: 0 (only stores the data).\n" +
            "Distances per query: O(ND) = 10,000 x 50 = 500,000.\n" +
            "Sorting per query: O(N log N) = 10,000 x log2(10,000) = 10,000 x 13.29 ≈ 132,877.\n" +
            "Total per query ≈ 500,000 + 132,877 ≈ 632,877 operations.\n" +
            "For 200 queries: 200 x 632,877 ≈ 1.27 x 10^8 operations.\n" +
            "The entire dataset (10,000 x 50 values) must also be kept in memory.",
          tags: ["Computational Cost"],
          ref: "Lecture 01 — Slide 38",
        },
      ],
    },
    {
      id: "machine-learning-lecture-02",
      t: "المحاضرة الثانية: شجرة القرار (Decision Trees) وتحليل الـ Bias-Variance",
      d: "بناء Decision Trees بطريقة greedy، الـ entropy والـ information gain وقواعد الـ conditional entropy، مثال Play Tennis، مقارنة الشجرة بـ kNN، الـ ensembles، وتحليل Bias-Variance والـ Bayes error.",
      pdf: "datenew/subjects/machine-learning/lectures/Lec 2/lec02.pdf",
      pdf2: "datenew/subjects/machine-learning/questions/Questions on each lecture/Machine-Learning-Lecture-02-Questions.pdf",
      // المحاضرة الثانية: أشجار القرار وتفكيك الانحياز والتباين (Decision Trees and Bias-Variance Decomposition)
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "مقاطع تعليمية بالعربية تشرح بناء أشجار القرار وحساب الإنتروبيا وكسب المعلومات وتفكيك الخطأ.",
          links: [
            {
              t: "شرح خوارزمية Decision Tree في تعلم الآلة بأسلوب سهل",
              d: "شرح تفصيلي لمفهوم شجرة القرار وكيفية اختيار الميزات وتقسيم البيانات بناءً على كسب المعلومات.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=G2AJBYnCsc0",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Decision Tree (Entropy Function and Information Gain) شرح عربي",
              d: "توضيح شامل لدالة Entropy وكيفية حساب Information Gain بالتفصيل لبناء شجرة قرار دقيقة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=oESGP84jr80",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Decision Tree - Classification | شجرة القرارات للتصنيف",
              d: "عرض متكامل لمبادئ التصنيف باستخدام أشجار القرار ودورها في معالجة البيانات المتنوعة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=PIOXA37gyzA",
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
            "دروس عالمية موثوقة تبسط بناء أشجار القرار والأسس النظرية للإنتروبيا وتوازن Bias-Variance.",
          links: [
            {
              t: "Decision and Classification Trees, Clearly Explained!!!",
              d: "شرح مبسط وواضح من StatQuest لكيفية بناء أشجار القرار والتصنيف واستخدام المقاييس المختلفة للنقاء.",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=_L39rN6gz7Y",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Stanford CS229: Decision Trees and Ensemble Methods",
              d: "محاضرة جامعة ستانفورد الشاملة حول أشجار القرار والإنتروبيا ومقدمة لطرق التجميع Ensembles.",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=r7T-aT8f9X4",
                  type: "view",
                  color: "orange",
                },
              ],
            },
          ],
        },
        {
          category: "م مواقع ومراجع",
          icon: "📚",
          description:
            "مقالات وأبحاث توثق الخوارزميات الحثية لأشجار القرار وتقسيم المساحة وتحليل التباين والانحياز.",
          links: [
            {
              t: "Decision Tree Algorithm in Machine Learning - GeeksforGeeks",
              d: "دليل مقالي شامل يغطي كيفية بناء أشجار القرار وتطبيقاتها في التصنيف والانحدار مع المبادئ الرياضية.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/decision-tree/",
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
            "أدوات تفاعلية ومكتبات برمجية لتصور تفكيك الأشجار ومحاكاة حدود القرار في الفضاء.",
          links: [
            {
              t: "dtreeviz: Decision Tree Visualization Library",
              d: "مكتبة بايثون احترافية لتصور وتحليل هيكل شجرة القرار وتوزيع البيانات داخل كل عقدة بشكل تفاعلي.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://github.com/parrt/dtreeviz",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Interactive Decision Tree Builder & Visualizer",
              d: "أداة تفاعلية مستندة إلى الويب لبناء شجرة القرار ومتابعة عملية التقسيم التدريجي لمساحة الميزات.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://ai.williamtheisen.com/",
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
          q: "1. In a decision tree, what do the internal nodes and the leaf nodes represent?",
          options: [
            "Internal nodes store predictions; leaf nodes test a feature",
            "Internal nodes test a feature; leaf nodes are the outputs (predictions)",
            "Internal nodes store the training labels; leaf nodes store hyperparameters",
            "Both internal and leaf nodes only compute distances",
          ],
          correct: 1,
          translation:
            "في الـ decision tree، إيه اللي بتمثله الـ internal nodes والـ leaf nodes؟",
          explanation:
            "الـ internal node بتختبر feature والتفرّع بيعتمد على قيمته، أما الـ leaf node فهي المخرجات (التنبؤات). العكس غلط، والمسافات من kNN مش من الشجرة.",
          tags: ["Decision Trees", "Tree Structure"],
          ref: "Lecture 02 — Slide 7",
        },
        {
          q: "2. How are continuous features split in a decision tree?",
          options: [
            "By creating one branch for every distinct value of the feature",
            "By computing the Euclidean distance to the nearest leaf",
            "By removing the feature from the data before splitting",
            "By checking whether the feature is greater than or less than some threshold",
          ],
          correct: 3,
          translation:
            "إزاي بيتم تقسيم الـ continuous features في الـ decision tree؟",
          explanation:
            "الـ continuous feature بنقارنها بـ threshold (أكبر أو أصغر)، وبكده الـ decision boundary بتتكوّن من مستويات موازية للمحاور (axis-aligned). فرع لكل قيمة ده بيناسب الـ discrete features.",
          tags: ["Continuous Features", "Threshold"],
          ref: "Lecture 02 — Slide 6",
        },
        {
          q: "3. In a regression tree, how is the leaf value y_m typically set?",
          options: [
            "To the most common target value in the region",
            "To the mean of the target values in the region",
            "To the largest target value in the region",
            "To the number of examples in the region",
          ],
          correct: 1,
          translation:
            "في الـ regression tree، إزاي بتتحدد قيمة الـ leaf وهي y_m عادةً؟",
          explanation:
            "الـ regression tree بتديّ مخرجات مستمرة، فقيمة الـ leaf هي متوسط الـ targets في المنطقة. أما أكثر قيمة شيوعًا فهي للـ classification tree.",
          tags: ["Regression Tree", "Leaf Value"],
          ref: "Lecture 02 — Slide 10",
        },
        {
          q: "4. What does each path from the root to a leaf define in a decision tree?",
          options: [
            "A region R_m of the input space",
            "A single training example",
            "A new hyperparameter",
            "A probability distribution over all features",
          ],
          correct: 0,
          translation:
            "إيه اللي بيحدده كل مسار من الـ root لحد leaf في الـ decision tree؟",
          explanation:
            "كل مسار بيحدد region R_m في فراغ المدخلات، والأمثلة اللي بتقع فيها هي اللي بتحدد قيمة الـ leaf.",
          tags: ["Decision Trees", "Regions"],
          ref: "Lecture 02 — Slide 10",
        },
        {
          q: "5. How are discrete features split in a decision tree?",
          options: [
            "By a single numeric threshold chosen on the feature",
            "By averaging the values of the feature over all examples",
            "Into a partition of the possible values of the feature",
            "By sorting the examples by their labels",
          ],
          correct: 2,
          translation:
            "إزاي بنقسّم الـ discrete features في الـ decision tree؟",
          explanation:
            "الـ discrete feature بنقسّم قيمها الممكنة إلى partition (مجموعات)، زي Outlook = {Sunny, Overcast, Rain}. الـ threshold الرقمي للـ continuous.",
          tags: ["Discrete Features", "Partition"],
          ref: "Lecture 02 — Slide 12",
        },
        {
          q: "6. What does the lecture say about constructing a tree with one leaf per training point?",
          options: [
            "It is always possible, but it probably will not generalize",
            "It is impossible for most real datasets with many features",
            "It guarantees the best possible test performance",
            "It is only possible for regression problems",
          ],
          correct: 0,
          translation:
            "إيه اللي بتقوله المحاضرة عن بناء شجرة فيها leaf لكل نقطة تدريب؟",
          explanation:
            "الـ decision trees universal function approximators، فنقدر دايمًا نبني شجرة بـ leaf لكل مثال، لكنها غالبًا overfit ومش هتعمم.",
          tags: ["Universal Approximator", "Overfitting"],
          ref: "Lecture 02 — Slide 13",
        },
        {
          q: "7. What is the computational complexity class of finding the smallest decision tree that correctly classifies a training set?",
          options: [
            "Solvable in linear time",
            "NP-complete",
            "Solvable in logarithmic time",
            "Solvable by one pass of gradient descent",
          ],
          correct: 1,
          translation:
            "ما هو تصنيف التعقيد الحسابي لإيجاد أصغر decision tree يصنف الـ training set صح؟",
          explanation:
            "إيجاد أصغر شجرة NP-complete، ولذلك بنستخدم greedy heuristic بدل البحث عن الحل الأمثل.",
          tags: ["NP-Complete", "Decision Trees"],
          ref: "Lecture 02 — Slide 13",
        },
        {
          q: "8. Which strategy is used to construct a useful decision tree in practice?",
          options: [
            "A greedy heuristic: pick the split that most reduces a loss, then recurse on the subpartitions",
            "An exhaustive search over every possible tree for the given data",
            "A single split on a randomly chosen feature, with no recursion",
            "Averaging the labels of all training points to form one prediction",
          ],
          correct: 0,
          translation:
            "أي استراتيجية بنستخدمها لبناء decision tree مفيدة عمليًا؟",
          explanation:
            "بنستخدم greedy heuristic: نختار الـ feature والـ split اللي بيقلل الـ loss أكتر، وبعدين نكرر على الأجزاء. البحث الشامل مكلف لأن المشكلة NP-complete.",
          tags: ["Greedy Heuristic", "Loss"],
          ref: "Lecture 02 — Slide 14",
        },
        {
          q: "9. Which leaf node has the highest uncertainty in its prediction?",
          options: [
            "A leaf in which all examples have the same class",
            "A leaf in which 9 of the 10 examples are oranges",
            "A leaf in which each class has the same number of examples",
            "A leaf whose entropy is exactly zero",
          ],
          correct: 2,
          translation: "أي leaf node بيكون عدم اليقين في تنبؤه أعلى؟",
          explanation:
            "لو كل class ليه نفس عدد الأمثلة في الـ leaf فعدم اليقين أعلى ما يمكن (high uncertainty). لو كل الأمثلة من نفس الـ class فالـ uncertainty منخفضة (entropy = 0).",
          tags: ["Uncertainty", "Leaf Node"],
          ref: "Lecture 02 — Slide 18",
        },
        {
          q: "10. How many bits of entropy does a fair coin flip have?",
          options: ["1 bit", "0 bits", "2 bits", "0.5 bits"],
          correct: 0,
          translation: "كام bit من الـ entropy في رمية عملة عادلة؟",
          explanation:
            "الـ fair coin (p = 0.5) أقصى عدم يقين ممكن لمتغير ثنائي، فالـ entropy = -0.5 log2(0.5) - 0.5 log2(0.5) = 1 bit. الـ entropy بتبقى 0 فقط لما p = 0 أو 1.",
          tags: ["Entropy", "Fair Coin"],
          ref: "Lecture 02 — Slide 22",
        },
        {
          q: "11. For regression trees, how are the splits chosen?",
          options: [
            "To minimize squared error rather than maximize information gain",
            "To maximize information gain, exactly as in classification",
            "To maximize the number of leaves",
            "To make all leaf values equal",
          ],
          correct: 0,
          translation: "في الـ regression trees، إزاي بيتم اختيار الـ splits؟",
          explanation:
            "الـ regression trees بتختار الـ splits اللي بتقلل الـ squared error بدل ما تعظّم الـ information gain (اللي بيُستخدم في الـ classification).",
          tags: ["Regression Tree", "Squared Error"],
          ref: "Lecture 02 — Slide 40",
        },
        {
          q: "12. What did Claude Shannon show about storing the outcome of a random draw?",
          options: [
            "Any random outcome can always be stored using exactly one bit of memory",
            "The entropy of a variable is always equal to its number of outcomes",
            "Storing outcomes always requires more bits than the number of outcomes",
            "You cannot store it using fewer expected bits than the entropy without losing information",
          ],
          correct: 3,
          translation:
            "إيه اللي أثبته Claude Shannon عن تخزين نتيجة سحب عشوائي؟",
          explanation:
            "Shannon أثبت إن مينفعش نخزّن النتيجة بعدد bits متوقع أقل من الـ entropy من غير فقدان معلومات، عشان كده وحدة الـ entropy هي bits.",
          tags: ["Entropy", "Claude Shannon"],
          ref: "Lecture 02 — Slide 22",
        },
        {
          q: "13. What does the information gain of an attribute measure?",
          options: [
            "The total number of leaves produced by the split in the tree",
            "The expected reduction in entropy caused by partitioning on that attribute",
            "The Euclidean distance between the two partitions of the data",
            "The accuracy of the final tree on the held-out test set",
          ],
          correct: 1,
          translation: "إيه اللي بيقيسه الـ information gain لـ attribute؟",
          explanation:
            "الـ information gain هو التخفيض المتوقع في الـ entropy (عدم اليقين عن الـ label) بعد التقسيم على الـ attribute، وهو بالظبط اللي نحتاجه لاختيار أفضل split.",
          tags: ["Information Gain"],
          ref: "Lecture 02 — Slide 31",
        },
        {
          q: "14. In Gain(S, a) = Entropy(S) - sum over v of (|S_v| / |S|) Entropy(S_v), how is the entropy of the partitions combined?",
          options: [
            "The entropies of the partitions are averaged without any weights",
            "Only the entropy of the largest partition is used in the formula",
            "Each partition's entropy is weighted by its size relative to the original set",
            "The entropies of the partitions are simply summed over all values of v",
          ],
          correct: 2,
          translation: "في قانون Gain(S, a)، إزاي بيتم دمج entropy الأجزاء؟",
          explanation:
            "كل جزء بيتوزن بحجمه نسبةً للمجموعة الأصلية |S_v| / |S|، فالجزء الأكبر بياخد وزن أكبر. المتوسط غير الموزون أو المجموع بيدي نتيجة غلط.",
          tags: ["Information Gain", "Weighted Entropy"],
          ref: "Lecture 02 — Slide 31",
        },
        {
          q: "15. In the Play Tennis example, which feature has the highest information gain and is chosen for the root split?",
          options: [
            "Humidity, with a gain of about 0.151",
            "Outlook, with a gain of about 0.246",
            "Wind, with a gain of about 0.048",
            "Temperature, with a gain of about 0.029",
          ],
          correct: 1,
          translation:
            "في مثال Play Tennis، أي feature ليه أعلى information gain ويتختار للـ root؟",
          explanation:
            "الـ gains: Outlook 0.246 وHumidity 0.151 وWind 0.048 وTemperature 0.029، فـ Outlook هو الأعلى فيتختار للـ split الأول.",
          tags: ["Play Tennis", "Information Gain"],
          ref: "Lecture 02 — Tennis example slides (Play Tennis, Information Gain)",
        },
        {
          q: "16. In the Play Tennis data (9 positive and 5 negative examples), what is the entropy of the target Play?",
          options: ["About 0.94", "About 0.50", "Exactly 1.00", "Exactly 0"],
          correct: 0,
          translation:
            "في بيانات Play Tennis (9 أمثلة موجبة و5 سالبة)، كام entropy المتغير Play؟",
          explanation:
            "p+ = 9/14 وp- = 5/14 فالـ entropy = -(9/14)log2(9/14) - (5/14)log2(5/14) ≈ 0.94. هي مش 1 لأن التوزيع مش متساوي ومش 0 لأن فيه classes مختلطة.",
          tags: ["Entropy", "Play Tennis"],
          ref: "Lecture 02 — Tennis example slides (Play Tennis, Information Gain)",
        },
        {
          q: "17. In the Play Tennis tree, why does the Overcast branch of Outlook become a leaf that predicts Yes?",
          options: [
            "Overcast has the lowest number of attributes",
            "Overcast has equal numbers of positive and negative examples",
            "The Overcast branch contains no examples",
            "All four Overcast examples are positive, so its entropy is 0",
          ],
          correct: 3,
          translation:
            "في شجرة Play Tennis، ليه فرع Overcast بقى leaf بيتنبأ بـ Yes؟",
          explanation:
            "كل أمثلة Overcast الأربعة موجبة (4+, 0-) فالـ entropy = 0 ولا يوجد داعي للتقسيم. لو كانت متساوية كانت الـ entropy أعلى ما يمكن.",
          tags: ["Play Tennis", "Leaf Node"],
          ref: "Lecture 02 — Tennis example slides (Play Tennis, Information Gain)",
        },
        {
          q: "18. In the decision tree construction algorithm, what is returned for a group of examples that is empty?",
          options: [
            "The majority class from the parent",
            "The class with the fewest examples overall",
            "A random class label",
            "The feature with the highest gain",
          ],
          correct: 0,
          translation:
            "في خوارزمية بناء الـ decision tree، إيه اللي بيتم إرجاعه لمجموعة أمثلة فاضية؟",
          explanation:
            "لو مفيش أمثلة في المجموعة بنرجّع الـ majority class من الـ parent. لو كل الأمثلة من نفس الـ class بنرجع الـ class ده، ولو لأ بنكمل التقسيم.",
          tags: ["Tree Construction", "Stopping Rule"],
          ref: "Lecture 02 — Slide 35",
        },
        {
          q: "19. Which statement about conditional entropy is correct?",
          options: [
            "Knowing X can increase the uncertainty about Y: H(Y|X) > H(Y)",
            "H(Y|Y) = 1 for every non-constant random variable Y",
            "If X and Y are independent, then H(Y|X) = 0 exactly",
            "By knowing X we can only decrease our uncertainty about Y: H(Y|X) <= H(Y)",
          ],
          correct: 3,
          translation: "أي عبارة عن الـ conditional entropy صحيحة؟",
          explanation:
            "معرفة X ممكن تقلل عدم اليقين عن Y بس مش تزوده، فـ H(Y|X) <= H(Y). وH(Y|Y) = 0 مش 1، ولو X وY مستقلين فـ H(Y|X) = H(Y).",
          tags: ["Conditional Entropy"],
          ref: "Lecture 02 — Slide 29",
        },
        {
          q: "20. In the restaurant example, what are the information gains of the attributes Type and Patrons?",
          options: [
            "IG(Type) is about 0.541 and IG(Patrons) = 0",
            "Both IG(Type) and IG(Patrons) are equal to 1",
            "IG(Type) = 0 and IG(Patrons) is about 0.541",
            "Both IG(Type) and IG(Patrons) are equal to 0",
          ],
          correct: 2,
          translation:
            "في مثال المطعم، كام الـ information gain للـ attributes: Type وPatrons؟",
          explanation:
            "Type ملهوش أي قدرة تمييز (IG = 0) لأن كل نوع فيه نص أمثلة موجبة ونصها سالبة، بينما Patrons ≈ 0.541 فهو الأفضل. الاختيارات التانية بتعكس أو بتساوي القيم غلط.",
          tags: ["Restaurant Example", "Feature Selection"],
          ref: "Lecture 02 — Slide 37",
        },
        {
          q: "21. According to Occam's razor, which hypothesis should we prefer?",
          options: [
            "The most complex hypothesis that fits the training data",
            "The hypothesis with the largest number of parameters",
            "The hypothesis that ignores the observations",
            "The simplest hypothesis that fits the observations",
          ],
          correct: 3,
          translation: "حسب Occam's razor، أي فرضية نفضّلها؟",
          explanation:
            "المبدأ بيقول نبحث عن أبسط فرضية تفسر الملاحظات. لهذا نفضّل trees صغيرة بنودها المعلوماتية قريبة من الـ root، مع صعوبة تعريف 'البساطة' رسميًا.",
          tags: ["Occam's Razor", "Good Tree"],
          ref: "Lecture 02 — Slide 39",
        },
        {
          q: "22. Which of the following is an advantage of decision trees over kNN?",
          options: [
            "They have very few hyperparameters",
            "They can easily incorporate interesting distance measures such as shape contexts",
            "They are fast at test time and more interpretable",
            "They can never overfit the training data",
          ],
          correct: 2,
          translation: "أي من التالي ميزة للـ decision trees على kNN؟",
          explanation:
            "الشجرة سريعة وقت الاختبار وأسهل في التفسير. قلة الـ hyperparameters وإمكانية استخدام مقاييس مسافة خاصة هما مميزات kNN، والشجرة ممكن تعمل overfit.",
          tags: ["Decision Trees", "kNN"],
          ref: "Lecture 02 — Slide 41",
        },
        {
          q: "23. For an ensemble of classifiers to be nontrivial, the classifiers must:",
          options: [
            "be exactly identical copies of one classifier trained on the same data",
            "always use the same training data and the same hyperparameters",
            "differ somehow, for example in algorithm, hyperparameters, data or weighting",
            "be limited to decision trees of depth one trained on the same data",
          ],
          correct: 2,
          translation:
            "عشان الـ ensemble يبقى مفيد (nontrivial)، لازم المصنفات:",
          explanation:
            "لو المصنفات متطابقة فالتصويت بينها مفيهوش جديد. لازم تختلف في الخوارزمية أو الـ hyperparameters أو بيانات التدريب أو أوزان الأمثلة.",
          tags: ["Ensemble", "Majority Vote"],
          ref: "Lecture 02 — Slide 42",
        },
        {
          q: "24. In the decomposition E[(y - t)^2] = (y* - E[y])^2 + Var(y) + Var(t), what are the three terms called, in order?",
          options: [
            "Variance, bias, and training error",
            "Bias, variance, and Bayes error",
            "Underfitting, overfitting, and test error",
            "Mean, median, and mode",
          ],
          correct: 1,
          translation:
            "في تفكيك الـ expected loss، إيه أسماء الحدود الثلاثة بالترتيب؟",
          explanation:
            "الحد الأول bias (مدى خطأ التنبؤ المتوقع، يقابل underfitting)، والثاني variance (تذبذب التنبؤات، يقابل overfitting)، والثالث Bayes error (عدم القابلية الذاتية للتنبؤ بالـ targets).",
          tags: ["Bias-Variance", "Bayes Error"],
          ref: "Lecture 02 — Slide 54",
        },
        {
          q: "25. Under squared error loss, which prediction y* is the best possible, given the conditional distribution p(t|x)?",
          options: [
            "y* = Var[t | x]",
            "y* = the largest value of t",
            "y* = 0 for every x",
            "y* = E[t | x]",
          ],
          correct: 3,
          translation:
            "تحت squared error loss، أي تنبؤ y* هو الأفضل إذا عرفنا التوزيع الشرطي p(t|x)؟",
          explanation:
            "الإثبات بيوضح إن E[(y - t)^2 | x] = (y - y*)^2 + Var[t | x] وبالتالي أفضل y هو y* = E[t | x]. الحد التاني Var[t|x] هو الـ Bayes error ومبيعتمدش على y.",
          tags: ["Bayes Optimality", "Squared Error"],
          ref: "Lecture 02 — Slide 51",
        },
        {
          type: "essay",
          q: "1. Describe the structure of a decision tree and explain how it makes predictions for continuous and discrete features, including the difference between regression and classification trees.",
          translation:
            "صِف بنية الـ decision tree واشرح إزاي بيعمل تنبؤات مع الـ continuous والـ discrete features، وإيه الفرق بين regression وclassification trees.",
          answer:
            "A decision tree makes predictions by splitting on features according to a tree structure. Internal nodes test a feature, branching is determined by the feature value, and leaf nodes are the outputs (predictions).\n" +
            "Continuous features: split by checking whether the feature is greater or less than a threshold; the decision boundary is made of axis-aligned planes.\n" +
            "Discrete features: split into a partition of the possible values.\n" +
            "Each path from the root to a leaf defines a region R_m of the input space containing training examples.\n" +
            "Regression tree: continuous output; the leaf value y_m is typically the mean of the targets in R_m.\n" +
            "Classification tree: discrete output; the leaf value is typically the most common label in R_m.",
          tags: ["Decision Trees", "Regression vs Classification"],
          ref: "Lecture 02 — Slides 4-12",
        },
        {
          type: "essay",
          q: "2. Why do we use a greedy heuristic to learn decision trees? Describe the greedy procedure.",
          translation:
            "ليه بنستخدم greedy heuristic لتعلّم الـ decision trees؟ اشرح خطوات الإجراء.",
          answer:
            "Decision trees are universal function approximators: for any training set we can build a tree with exactly one leaf per training point, but it probably will not generalize. Finding the smallest decision tree that correctly classifies a training set is NP-complete.\n" +
            "So we resort to a greedy heuristic:\n" +
            "1. Start with the whole training set and an empty tree.\n" +
            "2. Pick a feature and a candidate split that would most reduce a loss (a scalar number: low is good, high is bad).\n" +
            "3. Split on that feature and recurse on the sub-partitions.\n" +
            "Greedy algorithms do not necessarily yield the global optimum.",
          tags: ["Greedy Heuristic", "NP-Complete"],
          ref: "Lecture 02 — Slides 13-14 and 40",
        },
        {
          type: "essay",
          q: "3. Define entropy. Use the two-coin example to explain what high and low entropy mean and state the units of entropy.",
          translation:
            "عرّف الـ entropy. استخدم مثال العملتين لتوضيح معنى الـ entropy العالية والمنخفضة واذكر وحدة القياس.",
          answer:
            "Entropy is a property of a random variable: a number that quantifies the uncertainty inherent in its possible outcomes. For a discrete variable Y, H(Y) = - sum_y p(y) log2 p(y). For a loaded coin with probability p of heads: -p log2(p) - (1-p) log2(1-p).\n" +
            "The coin whose outcomes are more certain has lower entropy; for p = 0 or p = 1 the entropy is 0. A fair coin has 1 bit.\n" +
            "High entropy: uniform-like distribution over many outcomes, flat histogram, less predictable samples.\n" +
            "Low entropy: distribution concentrated on a few outcomes, more predictable samples.\n" +
            "Units: bits (Shannon: you cannot store a random outcome with fewer expected bits than the entropy without losing information). Entropy can also be seen as the expected information content of a random draw.",
          tags: ["Entropy", "Uncertainty"],
          ref: "Lecture 02 — Slides 19-23",
        },
        {
          type: "essay",
          q: "4. Explain information gain and why it is used to choose splits in a decision tree. Write the formula and the main properties of conditional entropy used with it.",
          translation:
            "اشرح الـ information gain وليه بيُستخدم لاختيار الـ splits في الـ decision tree. اكتب القانون وأهم خصائص الـ conditional entropy.",
          answer:
            "Information gain measures how much information about the class label Y is gained by knowing which side of a split we are on, i.e., the expected reduction in entropy: IG(Y|X) = H(Y) - H(Y|X) (the mutual information of Y and X).\n" +
            "For an attribute a: Gain(S, a) = Entropy(S) - sum over v of (|S_v| / |S|) Entropy(S_v), weighting each partition by its relative size.\n" +
            "If X is completely uninformative about Y: IG = 0. If X is completely informative: IG = H(Y).\n" +
            "Properties: H is non-negative; chain rule H(X,Y) = H(X|Y) + H(Y) = H(Y|X) + H(X); if X and Y are independent H(Y|X) = H(Y); H(Y|Y) = 0; H(Y|X) <= H(Y).\n" +
            "At each node we choose the feature (and threshold) with the highest gain.",
          tags: ["Information Gain", "Conditional Entropy"],
          ref: "Lecture 02 — Slides 24-31 and 34",
        },
        {
          type: "essay",
          q: "5. Explain the Play Tennis example: compute the root entropy, the gain of each feature, the root choice and the resulting tree.",
          translation:
            "اشرح مثال Play Tennis: الـ entropy للـ root، والـ gain لكل feature، واختيار الـ root، والشجرة الناتجة.",
          answer:
            "The data has 14 examples (9 positive, 5 negative), so Entropy(Play) = 0.94.\n" +
            "Information gains: Outlook 0.246, Humidity 0.151, Wind 0.048, Temperature 0.029, so we split on Outlook.\n" +
            "Outlook branches: Sunny (2+, 3-), Overcast (4+, 0-), Rain (3+, 2-). Overcast is pure, so it becomes a leaf: Yes.\n" +
            "Sunny subset: Gain(Humidity) = 0.97, Gain(Temp) = 0.57, Gain(Wind) = 0.02, so split on Humidity: High -> No, Normal -> Yes.\n" +
            "Rain subset: split on Wind: Strong -> No, Weak -> Yes.\n" +
            "Final tree: Outlook at the root, Humidity under Sunny, Wind under Rain.",
          tags: ["Play Tennis", "ID3 Example"],
          ref: "Lecture 02 — Tennis example slides (Play Tennis, Information Gain)",
        },
        {
          type: "essay",
          q: "6. Write and explain the decision tree construction algorithm (induceDecisionTree) and its stopping conditions.",
          translation:
            "اكتب واشرح خوارزمية بناء الـ decision tree (induceDecisionTree) وشروط التوقف.",
          answer:
            "Simple, greedy, recursive approach that builds the tree node by node:\n" +
            "1. If all examples in S have the same label y, return a leaf with that label.\n" +
            "2. Otherwise find the feature with the most information gain: i = argmax_i Gain(S, X_i).\n" +
            "3. Split the examples into groups by the value of that feature.\n" +
            "4. For each group: if it has no examples, return the majority class from the parent; else if all examples are in the same class, return the class; otherwise recurse (induceDecisionTree on the subset).\n" +
            "Termination: when all leaves contain only examples of the same class or are empty (or every attribute is already included in the path).\n" +
            "Questions: how to choose the feature to split on, and how to choose the threshold for continuous features (the threshold that maximizes information gain).",
          tags: ["Tree Construction", "Algorithm"],
          ref: "Lecture 02 — Slides 35, 41 and 40",
        },
        {
          type: "essay",
          q: "7. What makes a good decision tree? Discuss Occam's razor and the main problems of decision trees.",
          translation:
            "إيه اللي بيخلّي الـ decision tree كويسة؟ ناقش Occam's razor والمشاكل الأساسية للـ decision trees.",
          answer:
            "A good tree is not too small: it must handle important but subtle distinctions in the data. It is also not too big: for computational efficiency (avoid redundant or spurious attributes), to avoid over-fitting the training examples, and for human interpretability.\n" +
            "Occam's razor: find the simplest hypothesis that fits the observations. It is useful but hard to formalize (how to define simplicity?).\n" +
            "We desire small trees with informative nodes near the root.\n" +
            "Problems: exponentially less data at lower levels; too big a tree can overfit; greedy algorithms do not necessarily yield the global optimum.",
          tags: ["Occam's Razor", "Overfitting"],
          ref: "Lecture 02 — Slides 39-40",
        },
        {
          type: "essay",
          q: "8. Compare decision trees with kNN: state the advantages of each.",
          translation: "قارن بين الـ decision trees وkNN: اذكر مميزات كل واحد.",
          answer:
            "Advantages of decision trees over kNN: simple to deal with discrete features, missing values, and poorly scaled data; fast at test time; more interpretable.\n" +
            "Advantages of kNN over decision trees: few hyperparameters; can incorporate interesting distance measures (e.g., shape contexts).",
          tags: ["Decision Trees", "kNN Comparison"],
          ref: "Lecture 02 — Slide 41",
        },
        {
          type: "essay",
          q: "9. What is an ensemble of classifiers? Why must its members differ, and in what ways can they differ?",
          translation:
            "إيه هو الـ ensemble من المصنفات؟ ولماذا لازم تختلف أعضاؤه وبأي طرق ممكن تختلف؟",
          answer:
            "An ensemble is a set of predictors whose individual decisions are combined in some way to classify new examples, e.g., a (possibly weighted) majority vote.\n" +
            "For this to be nontrivial, the classifiers must differ somehow, for example: a different algorithm, a different choice of hyperparameters, training on different data, or training with a different weighting of the training examples.\n" +
            "Specific ensembling techniques are studied in the next lecture, and the bias-variance decomposition helps us understand them.",
          tags: ["Ensemble", "Majority Vote"],
          ref: "Lecture 02 — Slides 42 and 44",
        },
        {
          type: "essay",
          q: "10. Explain the bias-variance decomposition of the expected squared error, including the proof that y* = E[t|x] is the best prediction and the meaning of each term.",
          translation:
            "اشرح تفكيك الـ bias-variance للـ expected squared error، مع إثبات إن y* = E[t|x] هو أفضل تنبؤ ومعنى كل حد.",
          answer:
            "Setup: fix a query point x; repeatedly sample a training set D i.i.d. from p_sample, run the learner to get a prediction y at x (a random variable, since the randomness comes from the dataset), sample the true target t from p(t|x), and compute the loss. y is independent of t.\n" +
            "Optimal prediction for squared error: E[(y - t)^2 | x] = y^2 - 2y E[t|x] + E[t^2|x] = (y - y*)^2 + Var[t|x], with y* = E[t|x]. The first term is zero when y = y*; the second term is the Bayes error (noise, inherent unpredictability of t), independent of y; it is the best any algorithm can do. An algorithm achieving it is Bayes optimal.\n" +
            "Treating y as random: E[(y - t)^2] = (y* - E[y])^2 + Var(y) + Var(t).\n" +
            "Bias = (y* - E[y])^2: how wrong the expected prediction is (underfitting). Variance = Var(y): variability of predictions across datasets (overfitting). Bayes error = Var(t): inherent unpredictability of the targets.\n" +
            "Overly simple models underfit and overly complex models overfit.",
          tags: ["Bias-Variance", "Bayes Optimality"],
          ref: "Lecture 02 — Slides 44-55",
        },
        {
          type: "essay",
          q: "11. Calculation: Compute the entropy (in bits) of three leaf nodes: A with 3 positive and 1 negative examples, B with 2 positive and 2 negative examples, and C with 4 positive and 0 negative examples.",
          translation:
            "مسألة حسابية: احسب الـ entropy (بالـ bits) لثلاث leaf nodes: A فيها 3 موجب و1 سالب، وB فيها 2 موجب و2 سالب، وC فيها 4 موجب و0 سالب.",
          answer:
            "Formula: H = -p+ log2(p+) - p- log2(p-), with 0 log2 0 = 0.\n" +
            "A: p+ = 3/4, p- = 1/4: H = -0.75 log2(0.75) - 0.25 log2(0.25) = 0.311 + 0.5 = 0.811 bits.\n" +
            "B: p+ = p- = 1/2: H = 0.5 + 0.5 = 1 bit (maximum uncertainty).\n" +
            "C: p+ = 1, p- = 0: H = 0 bits (pure leaf, no uncertainty).\n" +
            "So B is the most uncertain leaf and C the most certain.",
          tags: ["Entropy"],
          ref: "Lecture 02 — Slides 18-23",
        },
        {
          type: "essay",
          q: "12. Calculation: In the Play Tennis data (entropy 0.940), compute the information gain of Wind. Wind = Weak has 8 examples (6 positive, 2 negative) and Wind = Strong has 6 examples (3 positive, 3 negative).",
          translation:
            "مسألة حسابية: في بيانات Play Tennis (الـ entropy = 0.940)، احسب الـ information gain للـ Wind. Wind = Weak فيها 8 أمثلة (6 موجب و2 سالب) وWind = Strong فيها 6 أمثلة (3 موجب و3 سالب).",
          answer:
            "Entropy(Weak) = -(6/8) log2(6/8) - (2/8) log2(2/8) = 0.811.\n" +
            "Entropy(Strong) = -(3/6) log2(3/6) - (3/6) log2(3/6) = 1.0.\n" +
            "Expected entropy = (8/14) x 0.811 + (6/14) x 1.0 = 0.463 + 0.429 = 0.892.\n" +
            "Gain(S, Wind) = 0.940 - 0.892 = 0.048.\n" +
            "This matches the lecture (Wind: 0.048), which is much lower than Outlook (0.246).",
          tags: ["Information Gain", "Play Tennis"],
          ref: "Lecture 02 — Tennis example slides (Play Tennis, Information Gain)",
        },
        {
          type: "essay",
          q: "13. Calculation: In the Play Tennis data (entropy 0.940), compute the information gain of Temperature. Hot has 4 examples (2+, 2-), Mild has 6 examples (4+, 2-), and Cool has 4 examples (3+, 1-).",
          translation:
            "مسألة حسابية: في بيانات Play Tennis (الـ entropy = 0.940)، احسب الـ information gain للـ Temperature. Hot فيها 4 أمثلة (2+ و2-)، وMild فيها 6 أمثلة (4+ و2-)، وCool فيها 4 أمثلة (3+ و1-).",
          answer:
            "Entropy(Hot) = 1.0 (2+, 2-).\n" +
            "Entropy(Mild) = -(4/6) log2(4/6) - (2/6) log2(2/6) = 0.918.\n" +
            "Entropy(Cool) = -(3/4) log2(3/4) - (1/4) log2(1/4) = 0.811.\n" +
            "Expected entropy = (4/14) x 1.0 + (6/14) x 0.918 + (4/14) x 0.811 = 0.286 + 0.393 + 0.232 = 0.911.\n" +
            "Gain(S, Temperature) = 0.940 - 0.911 = 0.029.\n" +
            "This matches the lecture and is the lowest gain among the four features.",
          tags: ["Information Gain", "Play Tennis"],
          ref: "Lecture 02 — Tennis example slides (Play Tennis, Information Gain)",
        },
        {
          type: "essay",
          q: "14. Calculation: For the joint distribution of Raining (X) and Cloudy (Y): P(Raining, Cloudy) = 24/100, P(Raining, Not cloudy) = 1/100, P(Not raining, Cloudy) = 25/100, P(Not raining, Not cloudy) = 50/100. Compute H(Y|X = raining), H(Y|X) and the information gain IG(Y|X).",
          translation:
            "مسألة حسابية: للتوزيع المشترك بين Raining (X) وCloudy (Y) المذكور بالأرقام أعلاه، احسب H(Y|X = raining) وH(Y|X) والـ information gain IG(Y|X).",
          answer:
            "p(x = raining) = 25/100 = 1/4; p(x = not raining) = 75/100 = 3/4.\n" +
            "H(Y|X = raining) = -(24/25) log2(24/25) - (1/25) log2(1/25) = 0.24 bits.\n" +
            "H(Y|X = not raining) = -(25/75) log2(25/75) - (50/75) log2(50/75) = 0.918 bits.\n" +
            "H(Y|X) = (1/4)(0.24) + (3/4)(0.918) ≈ 0.75 bits.\n" +
            "H(Y): P(cloudy) = 49/100, so H(Y) = H(0.49) ≈ 1.0 bit.\n" +
            "IG(Y|X) = H(Y) - H(Y|X) ≈ 1.0 - 0.75 = 0.25 bits.\n" +
            "Check with the chain rule: H(X, Y) = H(Y|X) + H(X) = 0.75 + 0.811 ≈ 1.56 bits (matches the lecture).",
          tags: ["Conditional Entropy", "Information Gain"],
          ref: "Lecture 02 — Slides 25-30",
        },
        {
          type: "essay",
          q: "15. Calculation: At a query point x the Bayes-optimal prediction is y* = 5, the expected prediction of the learner is E[y] = 3, its variance is Var(y) = 0.5, and the target noise is Var(t) = 1. Compute the expected squared loss and each of its terms. Also find the leaf value of a regression tree whose region contains the targets {2, 4, 6}.",
          translation:
            "مسألة حسابية: عند نقطة استعلام x، التنبؤ الأمثل y* = 5، والتنبؤ المتوقع للمتعلّم E[y] = 3، والتباين Var(y) = 0.5، وضوضاء الهدف Var(t) = 1. احسب الـ expected squared loss وكل حد فيه، وكمان قيمة leaf لـ regression tree منطقتها فيها الـ targets {2, 4, 6}.",
          answer:
            "Formula: E[(y - t)^2] = (y* - E[y])^2 + Var(y) + Var(t).\n" +
            "Bias term = (5 - 3)^2 = 4.\n" +
            "Variance term = 0.5.\n" +
            "Bayes error = 1 (cannot be reduced by any learner).\n" +
            "Expected loss = 4 + 0.5 + 1 = 5.5.\n" +
            "If the learner had E[y] = y*, the bias would be 0 and the loss would be 0.5 + 1 = 1.5.\n" +
            "Regression tree leaf value = mean of the targets = (2 + 4 + 6) / 3 = 4.",
          tags: ["Bias-Variance", "Regression Tree"],
          ref: "Lecture 02 — Slides 10 and 53-54",
        },
      ],
    },
    {
      id: "machine-learning-lecture-03",
      t: "المحاضرة 3: الانحدار الخطي (Linear Regression)",
      d: "إعداد التعلم المُشرَف، الانحدار الخطي البسيط وطريقة المربعات الصغرى، النموذج متعدد الخصائص، دالة الخسارة والتكلفة، والـ vectorization ومصفوفة التصميم.",
      pdf: "datenew/subjects/machine-learning/lectures/Lec 3/lec03-2.pptx.pdf",
      pdf2: "datenew/subjects/machine-learning/questions/Questions on each lecture/ML-Lecture-03-Questions.pdf",
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "فيديوهات عربية تشرح مفاهيم الانحدار الخطي البسيط والمتعدد، بما في ذلك تفسير المعاملات (الميل والثابت) واستخدام النموذج للتنبؤ بالقيم.",
          links: [
            {
              t: "معادلة الانحدار الخطي البسيط | شرح التنبؤ بالمستقبل",
              d: "يوضح هذا الفيديو كيفية إيجاد معادلة الانحدار الخطي البسيط بالتفصيل، مع مثال عملي لحساب الميل والثابت واستخدامهما في التنبؤ بقيم جديدة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶️ مشاهدة الشرح",
                  url: "https://www.youtube.com/watch?v=uq8tr7zxzPs",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "كورس تعلم الآلة | ١٢. شرح الانحدار الخطي (Linear Regression)",
              d: "في هذا الفيديو التعليمي يشرح شادي أمجد خوارزمية الانحدار الخطي البسيط، مع تطبيق عملي في بايثون لبناء النموذج وحساب المعاملات (الميل والاعتراض) واستخدامه للتنبؤ.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶️ مشاهدة الشرح",
                  url: "https://www.youtube.com/watch?v=c_1a2KZUVe8",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "ما هو الانحدار الخطي؟ — Shand Academy",
              d: "شرح مبسط باللغة العربية يقدم مفهوم الانحدار الخطي (Linear Regression)، وكيفية رسم أفضل خط مناسب للبيانات واستخدامه في التنبؤ، مع أمثلة تطبيقية.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶️ مشاهدة الشرح",
                  url: "https://www.youtube.com/watch?v=1VPbwM3wL4o",
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
            "مصادر تعليمية عالمية باللغة الإنجليزية تشرح نموذج الانحدار الخطي، ودوال الخسارة، وتجربة تحسين النموذج باستخدام الانحدار التدريجي، مع أمثلة وبصريات لتوضيح المفاهيم.",
          links: [
            {
              t: "Linear Regression — Google Machine Learning Crash Course",
              d: "درس شامل من Google يشرح مفهوم الانحدار الخطي ومعادلة النموذج (y' = w₀ + w₁x₁ + ...)، ودور دالة الخسارة، وكيفية تحسين المعاملات باستخدام النزول التدريجي (Gradient Descent).",
              icon: "🌍",
              actions: [
                {
                  label: "📖 فتح الدرس",
                  url: "https://developers.google.com/machine-learning/crash-course/linear-regression",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Linear Regression, Clearly Explained — StatQuest",
              d: "فيديو تعليمي من قناة StatQuest يقدمه Josh Starmer، يشرح الانحدار الخطي بوضوح مع صور مرئية للمفاهيم الأساسية مثل اختيار خط أفضل تمثيلاً للبيانات وشرح دور الميل والثابت.",
              icon: "🌍",
              actions: [
                {
                  label: "▶️ مشاهدة الشرح",
                  url: "https://www.youtube.com/watch?v=7ArmBVF2dCs",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Regression line example — Khan Academy",
              d: "شرح عملي من أكاديمية خان يوضح كيفية رسم أفضل خط مستقيم (انحدار خطي) لنقاط بيانات معطاة والتنبؤ بالقيم المستقبلية، كأبسط تطبيق لمفهوم الانحدار الخطي.",
              icon: "🌍",
              actions: [
                {
                  label: "▶️ مشاهدة الشرح",
                  url: "https://www.khanacademy.org/math/statistics-probability/describing-relationships-quantitative-data/more-on-regression/v/regression-line-example",
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
            "مراجع تقنية ووثائق رسمية توضِّح معادلات الانحدار الخطي وطريقة الحل بالحد الأدنى لمجموع المربعات، بالإضافة إلى المكتبات المستخدمة في التطبيق (NumPy, SciPy, scikit-learn).",
          links: [
            {
              t: "Scikit-learn — LinearRegression",
              d: "المرجع الرسمي لفئة LinearRegression في Scikit-learn، يشرح كيفية تدريب نموذج الانحدار الخطي (Ordinary Least Squares) لحساب المعاملات coef_ والثابت intercept_، واستخدام الدالة predict للتنبؤ بالنتائج.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح التوثيق",
                  url: "https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "SciPy — linregress",
              d: "توثيق دالة scipy.stats.linregress لحساب انحدار خطي بسيط بين مجموعتين من القيم، حيث تُرجع الميل (slope) والثابت (intercept) ومعامل الارتباط (rvalue) والخطأ المعياري كنواتج رئيسية.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح التوثيق",
                  url: "https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.linregress.html",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "NumPy — numpy.dot",
              d: "المرجع الرسمي لدالة numpy.dot في مكتبة NumPy التي تحسب الضرب النقطي للمتجهات والمصفوفات، وهو أساسي في التمثيل المتجهي للانحدار الخطي عند استخدام y = wᵀx + b.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح التوثيق",
                  url: "https://numpy.org/doc/stable/reference/generated/numpy.dot.html",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Scikit-learn — Linear models",
              d: "قسم النماذج الخطية في وثائق Scikit-learn، يغطي نماذج الانحدار (OLS) والانحدار المنتظم مثل Ridge وLasso، ويوضح أهداف كل نموذج وكيفية استخدامه مع توضيح رياضي مبسط.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المرجع",
                  url: "https://scikit-learn.org/stable/api/sklearn.linear_model.html",
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
            "أدوات وتطبيقات تفاعلية لتجربة الانحدار الخطي عملياً، تشمل تمارين برمجية تفاعلية، وبيئات تنفيذ Python عبر الإنترنت، بالإضافة إلى أدوات رسم بيانية لفهم العلاقة بين النقاط وخط الانحدار.",
          links: [
            {
              t: "Google — Linear Regression Interactive Exercises",
              d: "تمارين تفاعلية من Google Machine Learning Crash Course لفهم معاملات الانحدار الخطي ودالة الخسارة وGradient Descent، تتضمن اختبارات قصيرة وبرمجة عملية عبر Colab.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح التمارين",
                  url: "https://colab.research.google.com/github/google/eng-edu/blob/main/ml/cc/exercises/linear_regression_taxi.ipynb?utm_source=mlcc&utm_campaign=colab-external&utm_medium=referral&utm_content=linear_regression",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Google Colab",
              d: "بيئة عمل تفاعلية عبر المتصفح لتشغيل أكواد Python وتطبيقات التعلم الآلي دون إعداد محلي، يمكن استخدامها لتجربة أمثلة الانحدار الخطي مع NumPy وscikit-learn بسهولة.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح Colab",
                  url: "https://colab.research.google.com/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "GeoGebra Graphing Calculator",
              d: "أداة رسم بياني تفاعلية تمكنك من تخطيط نقاط البيانات وإنشاء الخط المستقيم المناسب (best fit line)، لتصور تأثير تغيير الميل والثابت على النموذج الانحداري.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح أداة الرسم",
                  url: "https://www.geogebra.org/graphing",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Desmos Graphing Calculator",
              d: "حاسبة رسومية عبر الإنترنت تتيح رسم النقاط البيانية والخطوط المستقيمة تفاعلياً، مما يساعد على دراسة العلاقة بين المتغيرات ورؤية توافق بيانات الانحدار الخطي بشكل بصري.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح Desmos",
                  url: "https://www.desmos.com/calculator",
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
          q: "1. What is the task of linear regression, as stated in the lecture?",
          options: [
            "Group unlabeled data into clusters",
            "Predict scalar-valued targets (for example stock prices)",
            "Classify images into discrete categories",
            "Compress data into fewer dimensions",
          ],
          correct: 1,
          translation:
            "ما هي مهمة الانحدار الخطي (linear regression) كما ورد في المحاضرة؟",
          explanation:
            "المهمة هي التنبؤ بقيم مستهدفة عددية (scalar-valued targets) مثل أسعار الأسهم، والبنية هي دالة خطية للمدخلات. التجميع والتصنيف وضغط البيانات مهام أخرى.",
          tags: ["Linear regression", "Task"],
          ref: "Lecture 03 — Slide 2: Linear Regression",
        },
        {
          q: "2. In the modular approach to ML, which component expresses a preference over different models?",
          options: [
            "The model",
            "The loss function",
            "The optimization algorithm",
            "The regularizer",
          ],
          correct: 3,
          translation:
            "في النهج المعياري (modular) للتعلم الآلي، أي مكوّن يعبّر عن تفضيل بين النماذج المختلفة؟",
          explanation:
            "الـ regularizer يعبّر عن التفضيل بين النماذج (قيد أو عقوبة). الـ model يصف العلاقات بين المتغيرات، والـ loss function تقيس مدى ملاءمة النموذج للبيانات، والـ optimization algorithm تُستخدم لإيجاد النموذج الأمثل.",
          tags: ["Modular approach", "Regularizer"],
          ref: "Lecture 03 — Slide 3: A Modular Approach to ML",
        },
        {
          q: "3. In the supervised learning setup, what is the objective?",
          options: [
            "Learn a function f: X -> T from the data such that t is approximately y = f(x)",
            "Find clusters in X without using the targets t",
            "Maximize the number of features in x",
            "Make y exactly equal to x for every example",
          ],
          correct: 0,
          translation:
            "في إعداد التعلم المُشرَف (supervised learning)، ما هو الهدف؟",
          explanation:
            "الهدف تعلّم دالة f: X -> T من البيانات D = {(x(i), t(i))} بحيث يكون t قريبًا من y = f(x). الاختيار الثاني وصف للتعلم غير المُشرَف.",
          tags: ["Supervised learning", "Objective"],
          ref: "Lecture 03 — Slide 4: Supervised Learning Setup",
        },
        {
          q: "4. In the simple linear regression model Y = b0 + b1 X, what does b1 represent?",
          options: [
            "The y-intercept",
            "The dependent variable",
            "The slope of the line",
            "The error term",
          ],
          correct: 2,
          translation:
            "في نموذج الانحدار الخطي البسيط Y = b0 + b1 X، ماذا تمثل b1؟",
          explanation:
            "b1 هي ميل الخط (slope) وتساوي Δy/Δx. أما b0 فهي المقطع y-intercept، وY هو المتغير التابع.",
          tags: ["Simple linear regression", "Slope"],
          ref: "Lecture 03 — Slide 6: Simple Linear Regression Model",
        },
        {
          q: "5. In the simple linear regression model Y = b0 + b1 X, what does b0 represent?",
          options: [
            "The slope of the line",
            "The y-intercept",
            "The independent variable",
            "The residual",
          ],
          correct: 1,
          translation: "في النموذج Y = b0 + b1 X، ماذا تمثل b0؟",
          explanation:
            "b0 هي المقطع (y-intercept) أي قيمة y عند x = 0. الميل هو b1، والمتغير المستقل هو x.",
          tags: ["Simple linear regression", "Intercept"],
          ref: "Lecture 03 — Slide 6: Simple Linear Regression Model",
        },
        {
          q: "6. Why is the model Y = b0 + b1 X called 'simple'?",
          options: [
            "Because it has only one X",
            "Because it has no parameters",
            "Because it has no error term",
            "Because it uses the squared loss",
          ],
          correct: 0,
          translation: "لماذا يُسمّى النموذج Y = b0 + b1 X 'بسيطًا' (simple)؟",
          explanation:
            "لأنه يحتوي على متغير مستقل واحد فقط X. وجود المعاملات والخطأ والـ squared loss لا علاقة له بكلمة simple.",
          tags: ["Simple linear model"],
          ref: "Lecture 03 — Slide 7: Simple Linear Model",
        },
        {
          q: "7. What does 'linear in the parameters' mean?",
          options: [
            "X appears only in the first power",
            "The model has only one parameter",
            "The data points lie exactly on a line",
            "No parameter appears as an exponent or is multiplied or divided by another parameter",
          ],
          correct: 3,
          translation: "ماذا تعني عبارة 'linear in the parameters'؟",
          explanation:
            "تعني أن أي معامل لا يظهر كأس ولا يُضرب أو يُقسم على معامل آخر. الاختيار الأول يصف 'linear in the predictor variable' وهو شرط مختلف.",
          tags: ["Linear in parameters"],
          ref: "Lecture 03 — Slide 7: Simple Linear Model",
        },
        {
          q: "8. What does 'linear in the predictor variable (X)' mean?",
          options: [
            "No parameter is multiplied by another parameter",
            "The model has exactly one parameter",
            "X appears only in the first power",
            "X is always positive",
          ],
          correct: 2,
          translation:
            "ماذا تعني عبارة 'linear in the predictor variable (X)'؟",
          explanation:
            "تعني أن X يظهر بالأس الأول فقط (بدون X تربيع مثلًا). الاختيار الأول يخص الخطية في المعاملات.",
          tags: ["Linear in predictor"],
          ref: "Lecture 03 — Slide 7: Simple Linear Model",
        },
        {
          q: "9. In the scikit-learn example (Example 2), which attribute of the fitted LinearRegression model gives the slope?",
          options: [
            "model.intercept_",
            "model.coef_[0]",
            "model.predict",
            "model.fit",
          ],
          correct: 1,
          translation:
            "في مثال scikit-learn (Example 2)، أي خاصية في نموذج LinearRegression بعد التدريب تعطي الميل (slope)؟",
          explanation:
            "الكود يطبع Slope باستخدام model.coef_[0] وIntercept باستخدام model.intercept_. أما fit وpredict فهما دالتان للتدريب والتنبؤ وليستا قيم المعاملات.",
          tags: ["scikit-learn", "coef_"],
          ref: "Lecture 03 — Example 2: Linear Regression in Public Policy",
        },
        {
          q: "10. In the 'Minimizing error' slide, what are the sums of squared errors of the fitted line and of the horizontal line Y = mean(Y)?",
          options: [
            "20.43 for the fitted line and 1647.33 for the mean line",
            "1647.33 for the fitted line and 20.43 for the mean line",
            "Both are equal to 20.43",
            "Both are equal to 1647.33",
          ],
          correct: 0,
          translation:
            "في شريحة 'Minimizing error'، كم مجموع مربعات الأخطاء للخط المُلائم وللخط الأفقي Y = mean(Y)؟",
          explanation:
            "الخط المُلائم (least squares) أعطى 20.43 بينما الخط الأفقي عند المتوسط أعطى 1647.33، أي أن خط least squares هو الذي يصغّر الخطأ. الاختيار الثاني معكوس.",
          tags: ["Least squares", "Sum of squared errors"],
          ref: "Lecture 03 — Slide 12: Minimizing error",
        },
        {
          q: "11. What does the least squares method minimize?",
          options: [
            "The sum of the absolute x values",
            "The number of data points",
            "The sum of squared errors, sum of (y_i - b0 - b1 x_i)^2",
            "The slope of the line",
          ],
          correct: 2,
          translation: "ماذا تُصغّر طريقة المربعات الصغرى (least squares)؟",
          explanation:
            "تُصغّر مجموع مربعات الأخطاء Σ(yi − β0 − β1xi)² ويُنتج منه الخط ŷ = β0 + β1x. لا تصغّر الميل ولا عدد النقاط.",
          tags: ["Least squares"],
          ref: "Lecture 03 — Slide 11: Least Squares",
        },
        {
          q: "12. How is the residual of the i-th point defined?",
          options: [
            "x_i - mean(x)",
            "y_hat_i - x_i",
            "y_i + y_hat_i",
            "R_i = y_i - y_hat_i",
          ],
          correct: 3,
          translation: "كيف يُعرَّف الـ residual للنقطة رقم i؟",
          explanation:
            "الـ residual هو الفرق بين القيمة الحقيقية والمتوقعة: Ri = yi − ŷi. وفي دالة الخسارة لاحقًا في المحاضرة يُكتب كـ y − t (التنبؤ ناقص الهدف) والمقصود نفس الحجم.",
          tags: ["Residual"],
          ref: "Lecture 03 — Slide 11: Least Squares",
        },
        {
          q: "13. If we assume a normal error, how should the residuals look?",
          options: [
            "All equal to zero",
            "Approximately normal",
            "Always increasing",
            "Always positive",
          ],
          correct: 1,
          translation:
            "إذا افترضنا أن الخطأ طبيعي (normal)، كيف يجب أن تبدو البواقي (residuals)؟",
          explanation:
            "الشريحة تنص على أنه لو افترضنا خطأ طبيعيًا فالبواقي يجب أن تبدو طبيعية التوزيع. لا يمكن أن تكون كلها صفرًا لأن النقاط ليست على خط واحد.",
          tags: ["Residuals", "Normal error"],
          ref: "Lecture 03 — Slide 11: Least Squares",
        },
        {
          q: "14. Which formula gives the least squares slope estimate?",
          options: [
            "b1 = SSxy / SSx",
            "b1 = SSx / SSxy",
            "b1 = SSxy * SSx",
            "b1 = SSxy - SSx",
          ],
          correct: 0,
          translation: "أي صيغة تعطي تقدير الميل بطريقة المربعات الصغرى؟",
          explanation:
            "الميل = SSxy / SSx حيث SSxy = Σ(xi − x̄)(yi − ȳ) وSSx = Σ(xi − x̄)². القسمة بالعكس أو الضرب أو الطرح غير صحيحة.",
          tags: ["Least squares", "Slope formula"],
          ref: "Lecture 03 — Slide 13: The Simple Linear Regression Model",
        },
        {
          q: "15. Which formula gives the least squares intercept estimate?",
          options: [
            "b0 = y_bar + b1 * x_bar",
            "b0 = x_bar - b1 * y_bar",
            "b0 = y_bar - b1 * x_bar",
            "b0 = b1 / x_bar",
          ],
          correct: 2,
          translation:
            "أي صيغة تعطي تقدير المقطع (intercept) بطريقة المربعات الصغرى؟",
          explanation:
            "المقطع = ȳ − β1·x̄، أي أن خط الانحدار يمر بنقطة المتوسطات. الاختيارات الأخرى تبدّل المتغيرات أو الإشارة.",
          tags: ["Least squares", "Intercept formula"],
          ref: "Lecture 03 — Slide 13: The Simple Linear Regression Model",
        },
        {
          q: "16. Which expression equals SSx in the lecture?",
          options: [
            "Sum of (x_i - x_bar)(y_i - y_bar)",
            "Sum of y_i^2 - (sum of y_i)^2 / n",
            "(sum of x_i)^2 / n",
            "Sum of (x_i - x_bar)^2 = sum of x_i^2 - (sum of x_i)^2 / n",
          ],
          correct: 3,
          translation: "أي تعبير يساوي SSx في المحاضرة؟",
          explanation:
            "SSx = Σ(xi − x̄)² = Σxi² − (Σxi)²/n. الاختيار الأول هو SSxy، والثاني خاص بـ y، والثالث جزء فقط من الصيغة.",
          tags: ["SSx", "Sum of squares"],
          ref: "Lecture 03 — Slide 13: The Simple Linear Regression Model",
        },
        {
          q: "17. In the education-income example the slope is 3.74. How is it interpreted?",
          options: [
            "On average, each additional year of education raises income by $3.74 thousand",
            "Income is $3.74 thousand when education is zero",
            "Education falls by 3.74 years for each $1000 of income",
            "3.74 percent of people have a degree",
          ],
          correct: 0,
          translation: "في مثال التعليم والدخل الميل = 3.74. كيف يُفسَّر؟",
          explanation:
            "الميل يعني أنه في المتوسط كل سنة تعليم إضافية ترفع الدخل بمقدار 3.74 ألف دولار (الدخل بالآلاف). الاختيار الثاني تفسير للمقطع وليس الميل.",
          tags: ["Interpretation", "Slope"],
          ref: "Lecture 03 — Slide 18: The Least Squares Regression Line",
        },
        {
          q: "18. In the same example the intercept is -13.93. According to the lecture, what is this value?",
          options: [
            "The average income of everyone in the sample",
            "The expected income at zero education, which is meaningless here",
            "The slope of the line",
            "The standard error of the estimate",
          ],
          correct: 1,
          translation:
            "في نفس المثال المقطع = -13.93. ما هذه القيمة حسب المحاضرة؟",
          explanation:
            "هي الدخل المتوقع لشخص مستوى تعليمه صفر، وهي قيمة بلا معنى هنا (دخل سالب). متوسط الدخل في العينة هو 30.2 وليس -13.93.",
          tags: ["Interpretation", "Intercept"],
          ref: "Lecture 03 — Slide 18: The Least Squares Regression Line",
        },
        {
          q: "19. In the education-income example, which variable is the dependent variable?",
          options: ["Education", "The sample size", "Income", "The intercept"],
          correct: 2,
          translation:
            "في مثال التعليم والدخل، أي متغير هو المتغير التابع (dependent)؟",
          explanation:
            "المتغير التابع هو ما نريد التنبؤ به وتحليله وهو الدخل (y)، والتعليم هو المتغير المستقل (x) الذي يُفترض أنه يؤثر في الدخل.",
          tags: ["Dependent variable", "Independent variable"],
          ref: "Lecture 03 — Slide 15: Dependent and Independent Variables",
        },
        {
          q: "20. In the multi-feature linear model y = w^T x + b, what are the parameters?",
          options: [
            "The features x and the targets t",
            "Only the target t",
            "The loss and the regularizer",
            "The weights w and the bias (intercept) b",
          ],
          correct: 3,
          translation:
            "في النموذج الخطي متعدد الخصائص y = w^T x + b، ما هي المعاملات (parameters)؟",
          explanation:
            "المعاملات هي الأوزان w والـ bias/intercept b. أما x فهي الخصائص (المدخلات) وt هو الهدف، وهما بيانات وليسا معاملات.",
          tags: ["Parameters", "Weights", "Bias"],
          ref: "Lecture 03 — Slide 19: Model",
        },
        {
          q: "21. The squared error loss is L(y, t) = 1/2 (y - t)^2. Why is the factor 1/2 used?",
          options: [
            "It makes calculations convenient",
            "It keeps the loss below 1",
            "It converts the loss into a probability",
            "It removes the need for the residual",
          ],
          correct: 0,
          translation:
            "دالة الخسارة المربعة L(y, t) = 1/2 (y - t)^2. لماذا يُستخدم العامل 1/2؟",
          explanation:
            "المحاضرة تذكر أن الـ 1/2 يجعل الحسابات مريحة (عند الاشتقاق يلغي الأس 2). لا يجعل الخسارة أقل من 1 ولا يحوّلها إلى احتمال.",
          tags: ["Squared error loss"],
          ref: "Lecture 03 — Slide 20: Loss Function",
        },
        {
          q: "22. What is a cost function, according to the lecture?",
          options: [
            "The loss for a single example",
            "The loss function averaged over all training examples (the empirical or average loss)",
            "The number of parameters in the model",
            "The time needed to train the model",
          ],
          correct: 1,
          translation: "ما هي دالة التكلفة (cost function) حسب المحاضرة؟",
          explanation:
            "هي دالة الخسارة مُتوسَّطة على كل أمثلة التدريب وتسمى أيضًا empirical أو average loss. الخسارة لمثال واحد هي الـ loss function.",
          tags: ["Cost function", "Average loss"],
          ref: "Lecture 03 — Slide 20: Loss Function",
        },
        {
          q: "23. Why is vectorized code such as y = np.dot(w, x) + b preferred over Python loops?",
          options: [
            "It uses more memory, so it is more accurate",
            "It removes the bias term",
            "It is simpler and much faster (less interpreter overhead, optimized linear algebra libraries, GPU support)",
            "It works only with one feature",
          ],
          correct: 2,
          translation:
            "لماذا يُفضَّل الكود المتجه (vectorized) مثل y = np.dot(w, x) + b على حلقات Python؟",
          explanation:
            "لأنه أبسط وأسهل قراءة وأسرع بكثير: يقلل عبء مفسر Python ويستخدم مكتبات جبر خطي محسّنة ودعمًا من العتاد، والضرب المصفوفي سريع على GPU. لا علاقة له بالدقة أو الـ bias.",
          tags: ["Vectorization", "NumPy"],
          ref: "Lecture 03 — Slides 22-23: Loops vs Vectorized Code",
        },
        {
          q: "24. After adding a column of 1s to the design matrix X, how are the predictions for the whole dataset written?",
          options: [
            "y = X + w",
            "y = X^T w^T",
            "y = w / X",
            "y = Xw, with X in R^(N x (D+1)) and w in R^(D+1)",
          ],
          correct: 3,
          translation:
            "بعد إضافة عمود من الأحاد إلى مصفوفة التصميم X، كيف تُكتب التنبؤات لكل مجموعة البيانات؟",
          explanation:
            "ندمج الـ bias مع الأوزان فيصبح w = (b, w1, ..., wD) وتصبح y = Xw حيث X أبعادها N x (D+1). باقي الصيغ لا تحقق أبعاد الضرب.",
          tags: ["Design matrix", "Bias"],
          ref: "Lecture 03 — Slide 26: Combining Bias and Weights",
        },
        {
          q: "25. For J = 1/2 ||y - t||^2 without the 1/N normalizer, what is true about the minimizer?",
          options: [
            "It does not depend on N (although the optimization might)",
            "It depends strongly on N",
            "It is always zero",
            "It cannot be found",
          ],
          correct: 0,
          translation:
            "بالنسبة لـ J = 1/2 ||y - t||^2 بدون المعامل 1/N، ما الصحيح عن النقطة المُصغِّرة (minimizer)؟",
          explanation:
            "الشريحة تنص على أن الـ minimizer لا يعتمد على N (لكن عملية الـ optimization قد تتأثر). هذه الصيغة تقابل مجموع الخسائر وليس متوسطها.",
          tags: ["Cost function", "Normalizer"],
          ref: "Lecture 03 — Slide 25: Computing Squared Error Cost",
        },
        {
          type: "essay",
          q: "1. Explain the supervised learning setup and the modular approach to ML.",
          translation:
            "اشرح إعداد التعلم المُشرَف والنهج المعياري (modular) للتعلم الآلي.",
          answer:
            "Supervised learning: input x in X is a vector of features, target t in T, and the data is D = {(x(i), t(i)) for i = 1, ..., N}. The objective is to learn a function f: X -> T from the data such that t is approximately y = f(x).\n" +
            "Modular approach: choose a model describing relationships between variables; define a loss function quantifying how well the model fits the data; choose a regularizer expressing a preference over different models.\n" +
            "Then fit a model that minimizes the loss function and satisfies the regularizer's constraint or penalty, possibly using an optimization algorithm.",
          tags: ["Supervised learning", "Modular approach"],
          ref: "Lecture 03 — Slides 3-4",
        },
        {
          type: "essay",
          q: "2. Describe the simple linear regression model and explain what 'simple', 'linear in the parameters' and 'linear in the predictor' mean.",
          translation:
            "صِف نموذج الانحدار الخطي البسيط واشرح معنى simple وlinear in the parameters وlinear in the predictor.",
          answer:
            "Model: Y = b0 + b1 X, where y is the dependent variable, x is the independent variable, b0 is the y-intercept and b1 is the slope of the line (slope = change in y over change in x).\n" +
            "Simple: there is only one X.\n" +
            "Linear in the parameters: no parameter appears as an exponent or is multiplied or divided by another parameter.\n" +
            "Linear in the predictor variable (X): X appears only in the first power.\n" +
            "Regression analysis estimates a functional relationship between X and Y, and the regression equation is used to predict a value of Y for a given X.",
          tags: ["Simple linear regression"],
          ref: "Lecture 03 — Slides 5-8",
        },
        {
          type: "essay",
          q: "3. Explain the difference between a mathematical and a statistical relation, and why an error term is needed.",
          translation:
            "اشرح الفرق بين العلاقة الرياضية والعلاقة الإحصائية ولماذا نحتاج حد الخطأ.",
          answer:
            "In a mathematical relation all points lie exactly on the line y = -5.3562 + 3.3988x. In a statistical relation the scatterplot shows that the points are not on a line.\n" +
            "So, in addition to the relationship Y = b0 + b1 X, there is an error term, and the actual response is the line plus an error.\n" +
            "The Y's are the response (dependent) variable and the x's are the independent variables.\n" +
            "The line is estimated by least squares, which finds the line that minimizes the errors.",
          tags: ["Statistical relation", "Error"],
          ref: "Lecture 03 — Slides 9-10",
        },
        {
          type: "essay",
          q: "4. Explain the least squares method and how the slope and intercept are computed.",
          translation:
            "اشرح طريقة المربعات الصغرى (least squares) وكيف يُحسب الميل والمقطع.",
          answer:
            "Least squares minimizes the sum of squared errors: sum of (y_i - b0 - b1 x_i)^2, giving the fitted line y_hat = b0_hat + b1_hat x.\n" +
            "The residuals R_i = y_i - y_hat_i should look normal if a normal error is assumed.\n" +
            "Slope: b1_hat = SSxy / SSx. Intercept: b0_hat = y_bar - b1_hat * x_bar.\n" +
            "SSx = sum of (x_i - x_bar)^2 = sum of x_i^2 - (sum of x_i)^2 / n; SSxy = sum of (x_i - x_bar)(y_i - y_bar) = sum of x_i y_i - (sum of x_i)(sum of y_i) / n.\n" +
            "Example: the fitted line has a sum of squared errors of 20.43, while the horizontal line Y = mean(Y) has 1647.33.",
          tags: ["Least squares", "Formulas"],
          ref: "Lecture 03 — Slides 11-13",
        },
        {
          type: "essay",
          q: "5. Describe the education and income example and interpret the regression coefficients.",
          translation: "صِف مثال التعليم والدخل وفسّر معاملات الانحدار.",
          answer:
            "An economist samples 10 individuals and records education (years) and income (in $1000s) to find the least squares line. Income (y) is the dependent variable and education (x) the independent variable that most affects income.\n" +
            "Sums: sum x = 118, sum x^2 = 1450, sum y = 302, sum xy = 3779. SSxy = 215.4, SSx = 57.6, so slope = 215.4 / 57.6 = 3.74 and intercept = 30.2 - 3.74 * 11.8 = -13.93.\n" +
            "Line: y_hat = -13.93 + 3.74 x.\n" +
            "Slope: on average each additional year of education raises income by $3.74 thousand. Intercept: the expected income at zero education, which is meaningless here.",
          tags: ["Example", "Interpretation"],
          ref: "Lecture 03 — Slides 14-18",
        },
        {
          type: "essay",
          q: "6. Describe the multi-feature linear model, its parameters and why it is useful.",
          translation:
            "صِف النموذج الخطي متعدد الخصائص ومعاملاته ولماذا هو مفيد.",
          answer:
            "Model: a linear function of the features x = (x_1, ..., x_D) in R^D that makes a prediction y in R of the target t in R: y = f(x) = sum over j of w_j x_j + b = w^T x + b.\n" +
            "Parameters are the weights w and the bias or intercept b.\n" +
            "We want the prediction to be close to the target: y is approximately t.\n" +
            "It is a highly interpretable model, which is useful for debugging.",
          tags: ["Linear model", "Parameters"],
          ref: "Lecture 03 — Slide 19: Model",
        },
        {
          type: "essay",
          q: "7. Define the loss function and the cost function for linear regression.",
          translation:
            "عرّف دالة الخسارة (loss) ودالة التكلفة (cost) في الانحدار الخطي.",
          answer:
            "The loss function L(y, t) defines how badly the algorithm's prediction y fits the target t for some example x.\n" +
            "Squared error loss: L(y, t) = 1/2 (y - t)^2, where y - t is the residual and we want to minimize its magnitude; the factor 1/2 makes calculations convenient.\n" +
            "The cost function is the loss averaged over all training examples (the empirical or average loss): J(w, b) = 1/(2N) * sum over i of (y(i) - t(i))^2 = 1/(2N) * sum over i of (w^T x(i) + b - t(i))^2.\n" +
            "Without the 1/N normalizer J corresponds to the sum of losses; the minimizer does not depend on N.",
          tags: ["Loss function", "Cost function"],
          ref: "Lecture 03 — Slides 20 and 25",
        },
        {
          type: "essay",
          q: "8. Explain vectorization and its benefits, comparing a loop with vectorized code.",
          translation:
            "اشرح الـ vectorization ومميزاته مع مقارنة الحلقة بالكود المتجه.",
          answer:
            "Loop version for one data point: y = b; for j in range(M): y += w[j] * x[j]. Excessive super/sub scripts are hard to work with and Python loops are slow.\n" +
            "Vectorized version: express algorithms with vectors and matrices, w = (w_1, ..., w_D)^T and x = (x_1, ..., x_D)^T, so y = w^T x + b, written in code as y = np.dot(w, x) + b.\n" +
            "Benefits: the code is simpler and more readable with no dummy variables or indices; it is much faster because it cuts down Python interpreter overhead, uses highly optimized linear algebra libraries with hardware support, and matrix multiplication is very fast on a GPU.",
          tags: ["Vectorization"],
          ref: "Lecture 03 — Slides 22-23",
        },
        {
          type: "essay",
          q: "9. Explain how predictions for the whole dataset are computed using the design matrix, and how the bias is combined with the weights.",
          translation:
            "اشرح كيف تُحسب تنبؤات كل مجموعة البيانات باستخدام مصفوفة التصميم وكيف يُدمج الـ bias مع الأوزان.",
          answer:
            "Put the training examples into a design matrix X (one row per example) and the targets into the target vector t. The predictions for the whole dataset are y = Xw + b1, where 1 is a vector of ones.\n" +
            "The squared error cost across the dataset is J = 1/(2N) ||y - t||^2.\n" +
            "To combine the bias and the weights, add a column of 1s to the design matrix: X in R^(N x (D+1)) and w = (b, w_1, ..., w_D) in R^(D+1). The predictions become simply y = Xw.",
          tags: ["Design matrix", "Bias"],
          ref: "Lecture 03 — Slides 24-26",
        },
        {
          type: "essay",
          q: "10. Explain the two Python examples in the lecture (scipy linregress and scikit-learn LinearRegression).",
          translation:
            "اشرح مثالَي Python في المحاضرة (scipy linregress وscikit-learn LinearRegression).",
          answer:
            "Example 1: the age and speed of 13 cars are plotted with plt.scatter. Then stats.linregress(x, y) returns slope, intercept, r, p and std_err; a function myfunc(x) = slope * x + intercept maps every x to a predicted value, and plt.plot draws the regression line over the scatter. The printed loss is 0.428.\n" +
            "Example 2 (public policy): government spending on employment programs is used to predict the unemployment rate. The arrays are reshaped, a LinearRegression model is created and trained with model.fit(spending, unemployment).\n" +
            "model.predict([[95]]) predicts the unemployment rate for a new spending value, model.coef_[0] gives the slope and model.intercept_ gives the intercept.",
          tags: ["Python", "scikit-learn"],
          ref: "Lecture 03 — Examples (age/speed and public policy)",
        },
        {
          type: "essay",
          q: "11. Education-income example: using sum x = 118, sum x^2 = 1450, sum y = 302, sum xy = 3779 and n = 10, compute SSx, SSxy, the slope and the intercept, then predict the income of a person with 12 years of education.",
          translation:
            "مثال التعليم والدخل: باستخدام Σx = 118 وΣx² = 1450 وΣy = 302 وΣxy = 3779 وn = 10، احسب SSx وSSxy والميل والمقطع ثم تنبأ بدخل شخص تعليمه 12 سنة.",
          answer:
            "Formulas: SSx = sum x^2 - (sum x)^2 / n; SSxy = sum xy - (sum x)(sum y) / n; b1 = SSxy / SSx; b0 = y_bar - b1 * x_bar.\n" +
            "SSxy = 3779 - (118)(302) / 10 = 3779 - 3563.6 = 215.4.\n" +
            "SSx = 1450 - (118)^2 / 10 = 1450 - 1392.4 = 57.6.\n" +
            "b1 = 215.4 / 57.6 = 3.74. b0 = 302/10 - 3.74 * (118/10) = 30.2 - 44.13 = -13.93.\n" +
            "Line: y_hat = -13.93 + 3.74 x. For x = 12: y_hat = -13.93 + 44.88 = 30.95, i.e. about $30.95 thousand.",
          tags: ["Least squares", "Computation"],
          ref: "Lecture 03 — Slides 16-18",
        },
        {
          type: "essay",
          q: "12. Public policy example: for spending x = 50, 60, ..., 120 (million $) and unemployment y = 9.5, 9.0, 8.7, 8.0, 7.8, 7.2, 6.8, 6.5 (%), compute the least squares line by hand and predict the unemployment rate for a spending of 95.",
          translation:
            "مثال السياسة العامة: للإنفاق x = 50 و60 ... و120 (مليون دولار) والبطالة y = 9.5 و9.0 و8.7 و8.0 و7.8 و7.2 و6.8 و6.5 (%)، احسب خط least squares يدويًا وتنبأ بنسبة البطالة عند إنفاق 95.",
          answer:
            "Formulas: SSx, SSxy, b1 = SSxy / SSx, b0 = y_bar - b1 * x_bar.\n" +
            "n = 8: sum x = 680, so x_bar = 85; sum y = 63.5, so y_bar = 7.9375; sum x^2 = 62000; sum xy = 5214.\n" +
            "SSx = 62000 - 680^2 / 8 = 62000 - 57800 = 4200. SSxy = 5214 - (680)(63.5) / 8 = 5214 - 5397.5 = -183.5.\n" +
            "b1 = -183.5 / 4200 = -0.0437. b0 = 7.9375 - (-0.0437)(85) = 11.65.\n" +
            "Line: y_hat = 11.65 - 0.0437 x. For x = 95: y_hat = 11.65 - 4.15 = about 7.50 percent. The negative slope means more spending is associated with lower unemployment (this is what model.coef_[0] and model.predict([[95]]) return in the code).",
          tags: ["Least squares", "Prediction"],
          ref: "Lecture 03 — Example 2: Linear Regression in Public Policy",
        },
        {
          type: "essay",
          q: "13. A model predicts y = (3, 5, 2, 7) for four examples whose targets are t = (2, 5, 4, 6). Compute the cost J = 1/(2N) * sum of (y - t)^2.",
          translation:
            "نموذج تنبأ بـ y = (3, 5, 2, 7) لأربعة أمثلة أهدافها t = (2, 5, 4, 6). احسب التكلفة J = 1/(2N) * Σ(y - t)².",
          answer:
            "Formula: J = 1/(2N) * sum of (y(i) - t(i))^2, with N = 4.\n" +
            "Residuals y - t: 1, 0, -2, 1.\n" +
            "Squares: 1, 0, 4, 1, whose sum is 6.\n" +
            "J = 6 / (2 * 4) = 0.75.",
          tags: ["Cost function", "Computation"],
          ref: "Lecture 03 — Slide 20: Loss Function",
        },
        {
          type: "essay",
          q: "14. A linear model has w = (2, -1, 0.5) and b = 1. Compute the prediction for x = (3, 4, 2). Also give the shapes of X and w if there are N = 100 examples and D = 5 features and the bias is combined with the weights.",
          translation:
            "نموذج خطي فيه w = (2, -1, 0.5) وb = 1. احسب التنبؤ لـ x = (3, 4, 2). وأعطِ أبعاد X وw لو N = 100 مثال وD = 5 خصائص مع دمج الـ bias في الأوزان.",
          answer:
            "Formula: y = w^T x + b.\n" +
            "y = 2*3 + (-1)*4 + 0.5*2 + 1 = 6 - 4 + 1 + 1 = 4 (in code: np.dot(w, x) + b).\n" +
            "With the bias combined and a column of 1s added: X is in R^(N x (D+1)) = 100 x 6 and w is in R^(D+1), a vector of length 6, so that y = Xw.",
          tags: ["Linear model", "Design matrix"],
          ref: "Lecture 03 — Slides 19, 22 and 26",
        },
        {
          type: "essay",
          q: "15. Decision tree quiz: the training set below classifies names as location or person. Attribute 1 is 'first name' and attribute 2 is 'geo-term'. (George Washington Bridge: yes, yes, location; John Hancock Tower: yes, yes, location; Ronald Reagan Building: yes, yes, location; Azore Islands: no, yes, location; Michael Jackson: yes, no, person; Justin Bieber: yes, no, person; Lady Gaga: no, no, person; Adele: yes, no, person; Stalin: no, no, person.) Which attribute is more useful, and why?",
          translation:
            "سؤال Decision tree: مجموعة التدريب تصنّف الأسماء إلى location أو person. الخاصية 1 هي 'first name' والخاصية 2 هي 'geo-term'. أي خاصية أكثر فائدة ولماذا؟",
          answer:
            "Split on attribute 1 (first name): yes gives 3 locations and 3 persons (mixed); no gives 1 location and 2 persons (mixed). Both branches are impure, so it separates the classes poorly.\n" +
            "Split on attribute 2 (geo-term): yes gives 4 locations and 0 persons; no gives 0 locations and 5 persons. Both branches are pure.\n" +
            "Therefore attribute 2 (geo-term) is more useful: it perfectly separates the two classes, while attribute 1 leaves both branches mixed.",
          tags: ["Decision tree", "Attribute selection"],
          ref: "Lecture 03 — Quiz slide (decision tree)",
        },
      ],
    },
    // المحاضرة: Lecture 4 - Machine Learning (Ensemble Methods, Bias/Variance, Bagging, Random Forests, Optimization, Feature Mapping)

    {
      id: "machine-learning-lecture-04",
      t: "المحاضرة 4 - Ensemble Methods & Optimization",
      d: "أساليب التجميع (Ensembling)، مفهومي Bias و Variance، تقنية Bagging، الغابات العشوائية Random Forests، الانحدار التدريجي Gradient Descent، وتعيين الميزات Feature Mapping.",
      pdf: "datenew/subjects/machine-learning/lectures/Lec 4/Lec 4.pdf",
      pdf2: "datenew/subjects/machine-learning/questions/Questions on each lecture/Lecture-04-Questions.pdf",
      // المحاضرة: Lecture 4 - Machine Learning (Ensemble Methods, Bias/Variance, Bagging, Random Forests, Optimization, Feature Mapping)

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شرح بالعربي لمفاهيم المحاضرة: Gradient Descent و Random Forest مع أمثلة توضيحية.",
          links: [
            {
              t: "Gradient Descent شرح بالعربي",
              d: "فيديو يشرح خوارزمية Gradient Descent بالعربي مع توضيح آلية عملها واستخدامها في تدريب نماذج تعلم الآلة زي Linear Regression والشبكات العصبية. مرتبط مباشرة بقسم Optimization في المحاضرة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=dboM7Ra3z7M",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح خوارزمية Gradient Descent بالتفصيل",
              d: "شرح تفصيلي لخوارزمية Gradient Descent وطريقة عملها خطوة بخطوة، يوضح قاعدة التحديث wj → wj − α ∂J/∂wj ودور الـ learning rate. مفيد لفهم قسم Gradient Descent في المحاضرة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=QPCVU5Qbj88",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Random Forest شرح عربي",
              d: "شرح بالعربي لخوارزمية Random Forest مع الربط بـ Decision Tree وشرح مفاهيم Bagging و Feature Bagging. يغطي نفس محتوى قسم Random Forests في المحاضرة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=BFgw2HhZ5l4",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح Random Forest من الصفر للاحتراف",
              d: "شرح مفصل لخوارزمية الغابة العشوائية Random Forest وليه بتعتبر من أقوى خوارزميات الـ black-box في تعلم الآلة. يوضح مفهومي wisdom of the crowd و diversification المذكورين في المحاضرة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=LctyPmApQv4",
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
            "شرح بالإنجليزي لمفاهيم المحاضرة من قنوات تعليمية موثوقة (StatQuest وغيرها).",
          links: [
            {
              t: "StatQuest: Gradient Descent, Step-by-Step",
              d: "فيديو من قناة StatQuest الشهيرة يشرح Gradient Descent خطوة بخطوة، يوضح المشتقات والـ learning rate وكيفية تقليل دالة التكلفة J(w). يغطي نفس محتوى قسم Optimization في المحاضرة.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ Watch on YouTube",
                  url: "https://www.youtube.com/watch?v=sDv4f4s2SB8",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "StatQuest: Random Forests Playlist",
              d: "Playlist كامل من StatQuest عن Random Forests يشرح بناء الأشجار واستخدامها وتقييمها، مع شرح Bagging والـ Random Subspace Method. مرتبط مباشرة بقسم Random Forests في المحاضرة.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ Open Playlist",
                  url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUIE96dI3U7oxHaCAbZgfhHk",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "StatQuest with Josh Starmer — Channel",
              d: "قناة StatQuest التعليمية الشهيرة، فيها شروحات لكل مفاهيم المحاضرة: Bias/Variance و Ensemble Methods و Decision Trees و Gradient Descent. غالبًا بيستخدم رسومات بسيطة لتوضيح المفاهيم الصعبة.",
              icon: "🌍",
              actions: [
                {
                  label: "🌐 Visit Channel",
                  url: "https://www.youtube.com/c/joshstarmer",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Gradient Descent from Scratch — From Math to Code",
              d: "فيديو يشرح Gradient Descent من الأساسيات لحد المستوى المتقدم، بيوفر شرح رياضي وتطبيق عملي بالكود. مفيد جدًا لفهم اشتقاق قاعدة التحديث المذكورة في المحاضرة.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ Watch on YouTube",
                  url: "https://www.youtube.com/watch?v=yS0nTt1x_CQ",
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
            "مقالات ومراجع تعليمية بالعربي والإنجليزي تشرح كل مفاهيم المحاضرة بالتفصيل.",
          links: [
            {
              t: "Bias-Variance Trade Off — GeeksforGeeks",
              d: "مقال شامل عن المقايضة بين Bias و Variance في تعلم الآلة، يشرح Under-fitting و Over-fitting وطرق إدارة المقايضة زي Cross-Validation. مرتبط مباشرة بقسم Bias/Variance في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المقال",
                  url: "https://www.geeksforgeeks.org/machine-learning/ml-bias-variance-trade-off",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Random Forest Algorithm — GeeksforGeeks",
              d: "مقال تفصيلي عن خوارزمية Random Forest، يشرح كيف بتبني عدة أشجار قرار على subsets عشوائية وبتدمج النتائج بـ voting أو averaging. يوضح أيضًا Random Subspace Method.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المقال",
                  url: "https://www.geeksforgeeks.org/machine-learning/random-forest-algorithm-in-machine-learning",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Gradient Descent Algorithm — GeeksforGeeks",
              d: "شرح شامل لخوارزمية Gradient Descent وأنواعها (Batch و Stochastic و Mini-batch)، مع شرح قاعدة التحديث ودور الـ learning rate. مرتبط بقسم Optimization في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المقال",
                  url: "https://www.geeksforgeeks.org/machine-learning/gradient-descent-algorithm-and-its-variants",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Bootstrap aggregating — Wikipedia",
              d: "مقال Wikipedia عن Bagging (Bootstrap Aggregating)، يشرح المفهوم الأساسي وأمثلة عملية. مرتبط بقسم Bagging: The Idea في المحاضرة، وبيوضح كيف bootstrap sampling بقلل الـ variance.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح المقال",
                  url: "https://en.wikipedia.org/wiki/Bootstrap_aggregating",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Polynomial Features Transforms — Machine Learning Mastery",
              d: "مقال يشرح Polynomial Feature Mapping وكيف بتتحول الميزات لدرجات أعلى عشان تسمح للـ Linear Regression بنمذجة علاقات غير خطية. مرتبط مباشرة بقسم Feature Mapping في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المقال",
                  url: "https://www.machinelearningmastery.com/polynomial-features-transforms-for-machine-learning",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "النزول أو الانحدار المتدرج (Gradient Descent) — فِهم",
              d: "شرح بالعربي لخوارزمية Gradient Descent منصة فِهم (fihm.ai)، يشرح أنواعها وخطواتها وتحدياتها والمصطلحات الأساسية. مرتبط بقسم Optimization في المحاضرة وبيقدم شرح مكمل بالعربي.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة الشرح",
                  url: "https://fihm.ai/tutorials/gradient-descent",
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
            "أدوات تفاعلية ومحاكاة لتجربة مفاهيم المحاضرة بنفسك: تعديل learning rate و model complexity و feature selection.",
          links: [
            {
              t: "TensorFlow Playground — Neural Network Visualization",
              d: "أداة تفاعلية من Google بتسمح بتجربة Neural Network في المتصفح، تقدر تتحكم في learning rate وعدد الطبقات والميزات (Feature Mapping) وتشوف التأثير على under-fitting و over-fitting لحظيًا. ممتازة لفهم تأثير الـ learning rate المذكور في المحاضرة.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://playground.tensorflow.org",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Bias-Variance Tradeoff — Interactive Visualization (MLU)",
              d: "محاكاة تفاعلية من Amazon ML University لشرح Bias-Variance Tradeoff، تقدر تتحكم في model complexity (مثل K في KNN) وتشوف كيف بيتغير الـ bias و variance. مرتبط مباشرة بأمثلة KNN في المحاضرة (k كبير = high bias، k=1 = high variance).",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح المحاكاة",
                  url: "https://mlu-explain.github.io/bias-variance",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "RandomForestClassifier — scikit-learn",
              d: "التوثيق الرسمي لـ RandomForestClassifier في مكتبة scikit-learn، يشرح المعاملات (parameters) زي n_estimators و max_features (اللي بيتحكم في Random Subspace Method). مفيد للتطبيق العملي لمفاهيم المحاضرة.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح التوثيق",
                  url: "https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "PolynomialFeatures — scikit-learn",
              d: "التوثيق الرسمي لـ PolynomialFeatures في scikit-learn، الأداة اللي بتنفذ Polynomial Feature Mapping المذكور في المحاضرة (ψ(x) = [1, x, x², ..., x^M]). تقدر تستخدمها لتجربة قيم M مختلفة وشوف تأثيرها على under/over-fitting.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح التوثيق",
                  url: "https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.PolynomialFeatures.html",
                  type: "view",
                  color: "orange",
                },
              ],
            },
          ],
        },
      ],
      questions: [
        // ===================== MCQ Questions =====================
        {
          q: "1. What is the primary goal of ensemble methods in machine learning?",
          options: [
            "Reduce model complexity",
            "Combine multiple models to improve prediction accuracy and stability",
            "Increase training speed",
            "Reduce the size of the training dataset",
          ],
          correct: 1,
          translation:
            "ما هو الهدف الأساسي من أساليب التجميع (Ensemble Methods) في تعلم الآلة؟",
          explanation:
            "الإجابة الصحيحة هي دمج عدة نماذج لتحسين دقة التنبؤ واستقرار النموذج. أساليب التجميع بتجمع نماذج ضعيفة لتكوين نموذج قوي، والباقي غلط لأن تقليل التعقيد أو زيادة السرعة أو تقليل البيانات مش الهدف الأساسي.",
          tags: ["Ensemble Methods", "Introduction"],
          ref: "Lecture 04 — Introduction / Ensemble Methods",
          likely: "high",
        },
        {
          q: "2. Bias in machine learning corresponds to which problem?",
          options: [
            "Over-fitting",
            "High variance",
            "Under-fitting",
            "Data noise",
          ],
          correct: 2,
          translation: "الانحياز (Bias) في تعلم الآلة بيقابل أي مشكلة؟",
          explanation:
            "الـ Bias بيقابل مشكلة Under-fitting (نقص التخصيص)، لأن النموذج البسيط جدًا مش قادر يلتقط اتجاه البيانات. الـ Over-fitting بيقابل الـ Variance مش الـ Bias.",
          tags: ["Bias/Variance", "Under-fitting"],
          ref: "Lecture 04 — Bias/Variance Section",
          likely: "high",
        },
        {
          q: "3. Variance in machine learning corresponds to which problem?",
          options: [
            "Under-fitting",
            "Over-fitting",
            "High bias",
            "Model simplicity",
          ],
          correct: 1,
          translation: "التباين (Variance) في تعلم الآلة بيقابل أي مشكلة؟",
          explanation:
            "الـ Variance بيقابل مشكلة Over-fitting، لأن النموذج بيبقى حساس جدًا للتغييرات في بيانات التدريب وبيتعلم من الـ noise. الـ Under-fitting بيقابل الـ Bias.",
          tags: ["Bias/Variance", "Over-fitting"],
          ref: "Lecture 04 — Variance Section",
          likely: "high",
        },
        {
          q: "4. An overly simple model (e.g., KNN with large k) typically has:",
          options: [
            "High bias and high variance",
            "Low bias and high variance",
            "High bias and low variance",
            "Low bias and low variance",
          ],
          correct: 2,
          translation:
            "النموذج البسيط جدًا (زي KNN بقيمة k كبيرة) عادة بيكون عنده:",
          explanation:
            "النموذج البسيط جدًا عنده High bias (مش قادر يلتقط هيكل البيانات) و Low variance (بينتج تقديرات مستقرة). ده عكس النموذج المعقد اللي عنده Low bias و High variance.",
          tags: ["Bias/Variance", "KNN", "Model Complexity"],
          ref: "Lecture 04 — Overly Simple Model Slide",
          likely: "high",
        },
        {
          q: "5. An overly complex model (e.g., KNN with k = 1) typically has:",
          options: [
            "High bias and high variance",
            "High bias and low variance",
            "Low bias and low variance",
            "Low bias and high variance",
          ],
          correct: 3,
          translation:
            "النموذج المعقد جدًا (زي KNN بقيمة k = 1) عادة بيكون عنده:",
          explanation:
            "النموذج المعقد جدًا عنده Low bias (بيتعلم كل الهيكل المهم) و High variance (بيناسب غرائب البيانات اللي اتسample منها). ده عكس النموذج البسيط.",
          tags: ["Bias/Variance", "KNN", "Model Complexity"],
          ref: "Lecture 04 — Overly Complex Model Slide",
          likely: "high",
        },
        {
          q: "6. What is a bootstrap sample in bagging?",
          options: [
            "A subset sampled without replacement",
            "The entire training dataset",
            "A subset of features only",
            "A random subset of the data sampled with replacement",
          ],
          correct: 3,
          translation: "إيه هو الـ bootstrap sample في الـ Bagging؟",
          explanation:
            "الـ bootstrap sample عينة عشوائية من البيانات بتتسample مع الاستبدال (with replacement)، يعني نفس النقطة ممكن تختار أكتر من مرة. ده مش subset بدون استبدال ولا الـ dataset كله.",
          tags: ["Bagging", "Bootstrap"],
          ref: "Lecture 04 — Bagging: The Idea",
          likely: "high",
        },
        {
          q: "7. What does bagging primarily reduce?",
          options: [
            "Variance",
            "Bias",
            "Both bias and variance equally",
            "Neither bias nor variance",
          ],
          correct: 0,
          translation: "الـ Bagging بقلل أساسًا إيه؟",
          explanation:
            "الـ Bagging بقلل الـ Variance عن طريق المتوسط بين تنبؤات مستقلة. الـ Bias بيفضل زي ما هو (unchanged) لأن المتوسط ليه نفس الـ expectation.",
          tags: ["Bagging", "Variance"],
          ref: "Lecture 04 — Bagging Properties",
          likely: "high",
        },
        {
          q: "8. What is the effect of bagging on bias (for squared error)?",
          options: [
            "It increases bias",
            "It decreases bias significantly",
            "It makes bias zero",
            "Bias remains unchanged",
          ],
          correct: 3,
          translation:
            "إيه تأثير الـ Bagging على الـ Bias (في حالة الخطأ التربيعي)؟",
          explanation:
            "الـ Bias بيفضل unchanged لأن المتوسط للتنبؤات ليه نفس الـ expectation. ده من ضمن محدوديات الـ Bagging: مش بقلل الـ Bias في حالة squared error.",
          tags: ["Bagging", "Bias", "Limitations"],
          ref: "Lecture 04 — Bagging Summary / Limitations",
          likely: "high",
        },
        {
          q: "9. How are predictions aggregated in bagging?",
          options: [
            "Only by voting",
            "By voting, averaging, or weighting",
            "Only by averaging",
            "By taking the maximum prediction",
          ],
          correct: 1,
          translation: "إزاي بتتجمع التنبؤات في الـ Bagging؟",
          explanation:
            "التنبؤات بتتجمع عن طريق voting أو averaging أو weighting. محدش منهم الطريقة الوحيدة، والـ maximum مش طريقة صحيحة للتجميع.",
          tags: ["Bagging", "Aggregation"],
          ref: "Lecture 04 — Ensemble Methods Overview",
          likely: "medium",
        },
        {
          q: "10. How does Random Forest reduce correlation between bagged decision trees?",
          options: [
            "By using fewer trees in the forest",
            "By using smaller training datasets",
            "By choosing a random subset of features at each node",
            "By limiting the depth of every tree",
          ],
          correct: 2,
          translation:
            "إزاي الـ Random Forest بقلل الارتباط بين أشجار القرار المجمعة؟",
          explanation:
            "الـ Random Forest بيختار subset عشوائي من الميزات عند كل node وبيقترن الـ splits على الميزات دي بس. ده بيقول الـ correlation بين الأشجار، على عكس تقليل عدد الأشجار أو العمق.",
          tags: ["Random Forest", "Feature Selection"],
          ref: "Lecture 04 — Random Forests (Trick Section)",
          likely: "high",
        },
        {
          q: "11. The 'wisdom of the crowd' concept in Random Forests means:",
          options: [
            "A large group of experts is collectively smarter than individual experts",
            "A single expert is always better than a group",
            "Crowd voting always produces wrong answers",
            "Each individual tree must be perfect",
          ],
          correct: 0,
          translation: "مفهوم 'حكمة الجمهور' في الـ Random Forests معناه:",
          explanation:
            "مجموعة كبيرة من الخبراء بتكون أذكى جماعيًا من الخبراء الأفراد. ده المبدأ الأساسي وراء الـ Random Forest. الباقي غلط لأن الخبير الفردي مش دايمًا أحسن، ولا لازم كل شجرة تكون مثالية.",
          tags: ["Random Forest", "Wisdom of Crowd"],
          ref: "Lecture 04 — Random Forests Concepts",
          likely: "medium",
        },
        {
          q: "12. In optimization, a direct solution to minimize J(w) is obtained by:",
          options: [
            "Iteratively updating the weights",
            "Randomly searching the weight space",
            "Setting the gradient to zero and solving in closed form",
            "Using a small learning rate",
          ],
          correct: 2,
          translation:
            "في الـ Optimization، الحل المباشر لتقليل J(w) بيتحصل بإيه؟",
          explanation:
            "الحل المباشر (Direct Solution) بيساوي الـ gradient للصفر ويحل بشكل مغلق (closed form). الـ Iterative updating ده طريقة Gradient Descent مش الحل المباشر.",
          tags: ["Optimization", "Direct Solution"],
          ref: "Lecture 04 — Solving the Minimization Problem",
          likely: "high",
        },
        {
          q: "13. Gradient descent is what type of algorithm?",
          options: [
            "Iterative",
            "Direct / closed-form",
            "Random search",
            "Brute-force enumeration",
          ],
          correct: 0,
          translation: "الـ Gradient Descent هو خوارزمية من أي نوع؟",
          explanation:
            "الـ Gradient Descent خوارزمية Iterative (تكرارية) بنطبق فيها update rule بشكل متكرر لحد ما نحقق معيار معين. مش Direct solution ولا Random search.",
          tags: ["Gradient Descent", "Optimization"],
          ref: "Lecture 04 — Iterative Solution: Gradient Descent",
          likely: "high",
        },
        {
          q: "14. The gradient descent update rule is:",
          options: [
            "wj → wj + α ∂J/∂wj",
            "wj → α ∂J/∂wj",
            "wj → wj − ∂J/∂wj",
            "wj → wj − α ∂J/∂wj",
          ],
          correct: 3,
          translation: "قاعدة تحديث الـ Gradient Descent هي:",
          explanation:
            "القاعدة الصحيحة هي wj → wj − α ∂J/∂wj. بنقص α ضرب المشتقة من الوزن. الخيار الأول غلط لأنه بيزود بدل ما ينقص، والباقي ناقص α أو المشتقة.",
          tags: ["Gradient Descent", "Update Rule"],
          ref: "Lecture 04 — Deriving Update Rule",
          likely: "high",
        },
        {
          q: "15. In the gradient descent update rule, α represents:",
          options: [
            "The gradient value",
            "The learning rate",
            "The weight parameter",
            "The cost function",
          ],
          correct: 1,
          translation: "في قاعدة تحديث الـ Gradient Descent، α بتمثل:",
          explanation:
            "α هي الـ learning rate أو step size، قيمة موجبة صغيرة بتحدد حجم الخطوة. مش الـ gradient ولا الوزن ولا دالة التكلفة.",
          tags: ["Gradient Descent", "Learning Rate"],
          ref: "Lecture 04 — Setting Learning Rate",
          likely: "high",
        },
        {
          q: "16. If ∂J/∂wj > 0, to decrease J we should:",
          options: [
            "Increase wj",
            "Keep wj unchanged",
            "Decrease wj",
            "Set wj to zero",
          ],
          correct: 2,
          translation: "لو ∂J/∂wj > 0، عشان نقلل J لازم:",
          explanation:
            "لما المشتقة موجبة، تقليل J بيحتاج تقليل wj (عشان النزول في الاتجاه المعاكس للمشتقة). لو زودنا wj هيزود J، ولو ثابت J مش هيتغير.",
          tags: ["Gradient Descent", "Update Rule"],
          ref: "Lecture 04 — Deriving Update Rule",
          likely: "medium",
        },
        {
          q: "17. Typical values of the learning rate α are:",
          options: [
            "1.0 or 10.0",
            "100 or 1000",
            "Negative values like −0.5",
            "0.01 or 0.0001",
          ],
          correct: 3,
          translation: "القيم النموذجية لـ learning rate α هي:",
          explanation:
            "القيم النموذجية صغيرة زي 0.01 أو 0.0001. القيم الكبيرة بتسبب divergence، والقيم السالبة غلط لأن α لازم يكون موجب.",
          tags: ["Gradient Descent", "Learning Rate"],
          ref: "Lecture 04 — Setting Learning Rate",
          likely: "medium",
        },
        {
          q: "18. Why is gradient descent preferred over the direct solution for high-dimensional regression?",
          options: [
            "Direct solution requires matrix inversion which is O(D^3)",
            "Gradient descent is always more accurate",
            "Gradient descent always converges to the global minimum",
            "Direct solution cannot work for regression",
          ],
          correct: 0,
          translation:
            "ليه الـ Gradient Descent مفضل على الحل المباشر في الانحدار عالي الأبعاد؟",
          explanation:
            "الحل المباشر للانحدار الخطي (X⊤X)⁻¹X⊤t بيحتاج matrix inversion بتكلفة O(D³)، وده مكلف جدًا في الأبعاد العالية. الـ GD update بتكلف O(ND) أو أقل مع SGD.",
          tags: ["Gradient Descent", "Why Use GD"],
          ref: "Lecture 04 — Why Use Gradient Descent?",
          likely: "high",
        },
        {
          q: "19. The cost of a single gradient descent update (or stochastic GD) is approximately:",
          options: [
            "O(D^3)",
            "O(ND) or less with stochastic gradient descent",
            "O(N^2)",
            "O(D^2)",
          ],
          correct: 1,
          translation:
            "تكلفة تحديث واحد في الـ Gradient Descent (أو SGD) تقريبًا:",
          explanation:
            "تكلفة تحديث GD هي O(ND) أو أقل مع SGD. O(D³) دي تكلفة الحل المباشر، و O(N²) و O(D²) مش تكاليف صحيحة لتحديث GD.",
          tags: ["Gradient Descent", "Complexity"],
          ref: "Lecture 04 — Why Use Gradient Descent?",
          likely: "high",
        },
        {
          q: "20. Feature mapping ψ(x) transforms the input from:",
          options: [
            "A lower-dimensional space to a higher-dimensional space",
            "A higher-dimensional space to a lower-dimensional space",
            "The same dimensional space to itself",
            "Categorical to numerical data only",
          ],
          correct: 0,
          translation: "الـ Feature Mapping ψ(x) بتحول المدخلات من:",
          explanation:
            "الـ Feature Mapping بتحول من فضاء أقل أبعاد لفضاء أعلى أبعاد، حيث البيانات تقدر تتحلل أو تتصنف بسهولة أكبر. مش العكس ولا نفس البعد.",
          tags: ["Feature Mapping"],
          ref: "Lecture 04 — Feature Mapping",
          likely: "high",
        },
        {
          q: "21. For polynomial feature mapping of degree M, the feature vector is:",
          options: [
            "ψ(x) = [x, x^2, ..., x^M]",
            "ψ(x) = [1, x, ..., x^(M−1)]",
            "ψ(x) = [1, x, x^2, ..., x^M]",
            "ψ(x) = [x, x^2, ..., x^(M+1)]",
          ],
          correct: 2,
          translation:
            "للـ Polynomial Feature Mapping من الدرجة M، الـ feature vector هو:",
          explanation:
            "الـ feature vector الصحيح هو [1, x, x^2, ..., x^M]، بيبدأ بـ 1 (للـ bias term w0) وينتهي بـ x^M. الخيارات التانية ناقصة الـ 1 أو بتعدى M.",
          tags: ["Feature Mapping", "Polynomial"],
          ref: "Lecture 04 — Polynomial Feature Mapping",
          likely: "high",
        },
        {
          q: "22. Which polynomial degree M shows under-fitting according to the lecture?",
          options: ["M = 0", "M = 3", "M = 9", "M = 12"],
          correct: 0,
          translation: "أي درجة كثيرة M بتظهر Under-fitting حسب المحاضرة؟",
          explanation:
            "M = 0 (نموذج بسيط جدًا: y = w0) بيتسبب في Under-fitting لأنه مش قادر يلتقط اتجاه البيانات. M = 3 نموذج جيد، و M = 9 بيعمل over-fitting.",
          tags: ["Polynomial", "Under-fitting", "Model Complexity"],
          ref: "Lecture 04 — Model Complexity and Generalization",
          likely: "high",
        },
        {
          q: "23. Which polynomial degree M shows over-fitting according to the lecture?",
          options: ["M = 0", "M = 1", "M = 3", "M = 9"],
          correct: 3,
          translation: "أي درجة كثيرة M بتظهر Over-fitting حسب المحاضرة؟",
          explanation:
            "M = 9 (نموذج معقد جدًا) بيتسبب في Over-fitting، بيمثل بيانات التدريب بشكل مثالي لكن بيفشل في بيانات اختبار جديدة. M = 0 under-fitting و M = 3 نموذج جيد.",
          tags: ["Polynomial", "Over-fitting", "Model Complexity"],
          ref: "Lecture 04 — Model Complexity and Generalization",
          likely: "high",
        },
        {
          q: "24. Which polynomial degree M gives a good model that generalizes well?",
          options: ["M = 0", "M = 3", "M = 9", "M = 12"],
          correct: 1,
          translation: "أي درجة كثيرة M بتدّي نموذج جيد بيعمم كويس؟",
          explanation:
            "M = 3 بيدي نموذج جيد بـ test error صغير وبيعمم كويس. M = 0 under-fitting و M = 9 over-fitting، و M = 12 برضو هيعمل over-fitting.",
          tags: ["Polynomial", "Generalization", "Model Complexity"],
          ref: "Lecture 04 — Model Complexity and Generalization",
          likely: "high",
        },
        {
          q: "25. The Random Subspace Method is also known as:",
          options: ["Feature Bagging", "Data Bagging", "Boosting", "Stacking"],
          correct: 0,
          translation: "الـ Random Subspace Method معروف كمان بإسم:",
          explanation:
            "الـ Random Subspace Method معروف كـ Feature Bagging لأنه بيشتغل على subset عشوائي من الميزات (مش البيانات). Boosting و Stacking أساليب تانية خالص.",
          tags: ["Random Forest", "Random Subspace Method"],
          ref: "Lecture 04 — Random Forest (Bagging + Random Subspace)",
          likely: "medium",
        },
        {
          q: "26. Random Forests can be used for which type of tasks?",
          options: [
            "Classification only",
            "Both classification and regression",
            "Regression only",
            "Clustering only",
          ],
          correct: 1,
          translation: "الـ Random Forests ممكن يُستخدم لأي نوع من المهام؟",
          explanation:
            "الـ Random Forest خوارزمية supervised بتشتغل لـ Classification (تنبؤ بقيمة منفصلة/فئة) و Regression (تنبؤ بقيمة مستمرة). مش للـ Clustering لأنه supervised.",
          tags: ["Random Forest", "Tasks"],
          ref: "Lecture 04 — Random Forests",
          likely: "medium",
        },
        {
          q: "27. Which of the following is NOT a way to reduce high bias?",
          options: [
            "Use a more complex model",
            "Increase the number of features",
            "Increase the size of the training data",
            "Reduce the number of features",
          ],
          correct: 3,
          translation: "أي من الخيارات دي مش طريقة لتقليل الـ Bias العالي؟",
          explanation:
            "تقليل عدد الميزات بيقلل التعقيد وبالتالي يزيد الـ Bias، فهو مش طريقة لتقليله. الطرق الصحيحة لتقليل Bias: نموذج أعقد، ميزات أكتر، أو بيانات تدريب أكتر.",
          tags: ["Bias Reduction", "Ways to Reduce Bias"],
          ref: "Lecture 04 — Ways to reduce high bias",
          likely: "high",
        },
        {
          q: "28. Which of the following is a valid way to reduce variance?",
          options: [
            "Use a more complex model",
            "Add more features to the model",
            "Use cross-validation",
            "Increase the polynomial degree M",
          ],
          correct: 2,
          translation: "أي من الخيارات دي طريقة صحيحة لتقليل الـ Variance؟",
          explanation:
            "الـ Cross-validation طريقة صحيحة لتقليل Variance عن طريق تقسيم البيانات لتدريب واختبار عدة مرات. باقي الخيارات بتزيد التعقيد و بالتالي تزيد الـ Variance.",
          tags: ["Variance Reduction", "Ways to Reduce Variance"],
          ref: "Lecture 04 — Ways to Reduce the Variance",
          likely: "high",
        },
        {
          q: "29. A key limitation of bagging is:",
          options: [
            "It increases the variance of the model",
            "It cannot be used for classification tasks",
            "It does not reduce bias in case of squared error",
            "It always overfits the training data",
          ],
          correct: 2,
          translation: "أي من الخيارات دي محدودية أساسية للـ Bagging؟",
          explanation:
            "الـ Bagging مش بقلل الـ Bias في حالة squared error، وده من محدودياته المذكورة. هو بقلل الـ Variance مش بيزيده، وبيشتغل للـ classification، ومش بيoperfit.",
          tags: ["Bagging", "Limitations"],
          ref: "Lecture 04 — Bagging Summary / Limitations",
          likely: "high",
        },
        {
          q: "30. If the m datasets in bagging are NOT independent, what happens?",
          options: [
            "We get the full 1/m variance reduction",
            "Variance becomes exactly zero",
            "Bias increases dramatically",
            "We do not get the full 1/m variance reduction",
          ],
          correct: 3,
          translation:
            "لو الـ m datasets في الـ Bagging مش مستقلة، إيه اللي بيحصل؟",
          explanation:
            "لو الـ datasets مش مستقلة، مبنحصلش على تخفيض الـ Variance الكامل بمقدار 1/m. عشان كده بنستخدم Random Forest عشان نقلل الـ correlation بين الـ datasets.",
          tags: ["Bagging", "Independence", "Variance Reduction"],
          ref: "Lecture 04 — Bagging Properties",
          likely: "high",
        },

        // ===================== Essay Questions =====================
        {
          type: "essay",
          q: "1. Define Bias and Variance in machine learning, and explain what each one corresponds to.",
          translation:
            "عرّف الـ Bias والـ Variance في تعلم الآلة، ووضّح كل واحد فيهم بيقابل إيه.",
          answer:
            "Bias is the error due to wrong assumptions about the data (e.g., assuming the data is linear when it follows a complex function).\n" +
            "It measures how wrong the expected prediction is, and corresponds to under-fitting (a high-bias model cannot capture the dataset trend).\n" +
            "Variance is the variability of the model — how sensitive it is to a different subset of the training data.\n" +
            "It corresponds to over-fitting, where the model fits the training data too closely and performs poorly on new, unseen data.",
          tags: ["Bias/Variance", "Definitions"],
          ref: "Lecture 04 — Bias/Variance Section",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. Explain the bias-variance tradeoff using KNN with different values of k.",
          translation:
            "اشرح المقايضة بين الـ Bias والـ Variance باستخدام KNN بقيم k مختلفة.",
          answer:
            "KNN with large k is an overly simple model: it has high bias (cannot capture the structure in the data) and low variance (stable estimates because it averages many neighbors).\n" +
            "KNN with k = 1 is an overly complex model: it has low bias (learns all the relevant structure) and high variance (fits the quirks of the particular sampled data).\n" +
            "The tradeoff: as model complexity increases, bias decreases but variance increases. The goal is to find a balance that minimizes total error on unseen data.",
          tags: ["Bias/Variance", "KNN", "Tradeoff"],
          ref: "Lecture 04 — Overly Simple/Complex Model Slides",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Compare Bagging and Random Forests. What do they share and how do they differ?",
          translation:
            "قارن بين الـ Bagging والـ Random Forests. إيه المشترك وإيه الفرق؟",
          answer:
            "Similarities: Both are ensemble methods that train multiple models on random subsets of data (bootstrapped) and aggregate predictions (voting/averaging). Both aim to reduce variance.\n" +
            "Differences: Bagging uses the same algorithm on different bootstrapped datasets, while Random Forest specifically uses decision trees and adds an extra layer of randomness by selecting a random subset of features at each node (Random Subspace Method / Feature Bagging).\n" +
            "This extra randomness in Random Forest reduces the correlation between trees, which gives a stronger variance reduction than plain bagging.\n" +
            "Random Forest is described as the best black-box ML algorithm — it works well with no tuning and is widely used in Kaggle competitions.",
          tags: ["Bagging", "Random Forest", "Comparison"],
          ref: "Lecture 04 — Random Forests & Bagging Properties",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. Explain how bagging reduces variance. Why does it leave bias unchanged?",
          translation:
            "اشرح إزاي الـ Bagging بقلل الـ Variance. وليه بسيب الـ Bias زي ما هو؟",
          answer:
            "Bagging trains m models independently on m different bootstrap samples of the data.\n" +
            "Variance is reduced because we are averaging over (approximately) independent predictions — averaging reduces variability.\n" +
            "Bias remains unchanged because the averaged prediction has the same expectation as the individual predictions — taking the average does not change what the model is fundamentally able to learn.\n" +
            "This is why bagging is most useful on high-variance, low-bias models (like deep decision trees).",
          tags: ["Bagging", "Variance", "Bias"],
          ref: "Lecture 04 — Bagging (effect on bias and variance)",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. List and briefly explain the ways to reduce high bias in machine learning.",
          translation:
            "اذكر واشرح بإختصار طرق تقليل الـ Bias العالي في تعلم الآلة.",
          answer:
            "1) Use a more complex model — e.g., add hidden layers in a deep neural network, or use polynomial regression for non-linear datasets.\n" +
            "2) Increase the number of features — adding more features increases model complexity and helps capture underlying patterns in the data.\n" +
            "3) Increase the size of the training data — providing the model with more examples to learn from can help reduce bias.",
          tags: ["Bias Reduction", "Ways to Reduce Bias"],
          ref: "Lecture 04 — Ways to reduce high bias",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. List and briefly explain the ways to reduce variance in machine learning.",
          translation:
            "اذكر واشرح بإختصار طرق تقليل الـ Variance في تعلم الآلة.",
          answer:
            "1) Cross-validation — split the data into training and testing sets multiple times.\n" +
            "2) Feature selection — choosing only the relevant features decreases the model's complexity.\n" +
            "3) Ensemble methods — combine multiple models to improve generalization (e.g., Bagging, Boosting).\n" +
            "4) Simplifying the model — reduce complexity such as decreasing the number of parameters or layers in a neural network.",
          tags: ["Variance Reduction", "Ways to Reduce Variance"],
          ref: "Lecture 04 — Ways to Reduce the Variance",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. Explain gradient descent and derive its update rule. What is the role of the learning rate α?",
          translation:
            "اشرح الـ Gradient Descent واشتق قاعدة التحديث. إيه دور الـ learning rate α؟",
          answer:
            "Gradient descent is an iterative optimization algorithm used to minimize a cost function J(w).\n" +
            "Key observation: if ∂J/∂wj > 0, decreasing J requires decreasing wj; if ∂J/∂wj < 0, decreasing J requires increasing wj.\n" +
            "Update rule: wj → wj − α * (∂J / ∂wj). This update always decreases the cost function for small enough α (unless ∂J/∂wj = 0).\n" +
            "The learning rate α > 0 controls the step size. Larger α means faster weight changes; typical values are small (e.g., 0.01 or 0.0001). Too large α can cause divergence; too small α makes convergence slow.",
          tags: ["Gradient Descent", "Update Rule", "Learning Rate"],
          ref: "Lecture 04 — Iterative Solution: Gradient Descent & Deriving Update Rule",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. Compare direct solution and iterative (gradient descent) solution for minimizing the cost function J(w).",
          translation:
            "قارن بين الحل المباشر والحل التكراري (Gradient Descent) لتقليل دالة التكلفة J(w).",
          answer:
            "Direct solution: set the gradient ∇w J(w) = 0 and solve in closed form to directly find provably optimal parameters.\n" +
            "Iterative solution (Gradient Descent): repeatedly apply an update rule that gradually moves the weights toward the solution.\n" +
            "Why use gradient descent over direct solution:\n" +
            "1) Applicable to a much broader set of models (many problems have no closed-form solution).\n" +
            "2) Easier to implement than direct solutions.\n" +
            "3) More efficient for regression in high-dimensional space — direct solution for linear regression (X⊤X)⁻¹X⊤t requires matrix inversion which is O(D^3), while a GD update costs only O(ND) or less with stochastic GD.",
          tags: ["Optimization", "Direct vs Iterative", "Gradient Descent"],
          ref: "Lecture 04 — Solving the Minimization Problem & Why Use GD",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. Explain feature mapping. Why is it used, and how does it relate to linear regression?",
          translation:
            "اشرح الـ Feature Mapping. ليه بتُستخدم، وإزاي بترتبط بالـ Linear Regression؟",
          answer:
            "Feature mapping transforms input features from a lower-dimensional space to a higher-dimensional space using a function ψ(x): R^D → R^d, where the data can be more easily analyzed or classified.\n" +
            "It allows linear regression to model non-linear relationships — by mapping the input features to another space and then treating the mapped features as the input of a linear regression procedure.\n" +
            "Example (Polynomial feature mapping): for a degree-M polynomial, ψ(x) = [1, x, x^2, ..., x^M]⊤. The model y = ψ(x)⊤w is still linear in w0, w1, ..., so we can use linear regression to find w even though the relationship with x is non-linear.",
          tags: ["Feature Mapping", "Polynomial", "Linear Regression"],
          ref: "Lecture 04 — Feature Mapping & Polynomial Feature Mapping",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Discuss model complexity and generalization using polynomial feature mapping with different values of M.",
          translation:
            "ناقش تعقيد النموذج والتعميم باستخدام Polynomial Feature Mapping بقيم M مختلفة.",
          answer:
            "Using polynomial feature mapping of degree M:\n" +
            "M = 0 (y = w0): under-fitting — the model is too simple and does not fit the data well.\n" +
            "M = 1 (y = w0 + w1*x): still a simple linear fit.\n" +
            "M = 3 (y = w0 + w1*x + w2*x^2 + w3*x^3): good model — small test error, generalizes well.\n" +
            "M = 9 (y = w0 + ... + w9*x^9): over-fitting — the model is too complex, fits the training data perfectly but fails on new data.\n" +
            "Conclusion: as M (complexity) increases, training error decreases, but test error first decreases then increases. The goal is to choose M that minimizes test error, not training error.",
          tags: ["Polynomial", "Model Complexity", "Generalization"],
          ref: "Lecture 04 — Polynomial Feature Mapping (M=0,1,3,9) & Model Complexity",
          likely: "high",
        },
        {
          type: "essay",
          q: "11. Explain the Random Subspace Method (Feature Bagging) and how it is used in Random Forests.",
          translation:
            "اشرح الـ Random Subspace Method (Feature Bagging) وإزاي بيُستخدم في الـ Random Forests.",
          answer:
            "The Random Subspace Method (also called Feature Bagging) fits N different decision trees by constraining each one to operate on a random subset of features.\n" +
            "In Random Forests, both techniques are combined:\n" +
            "1) Bagging — take random subsets of data points (with replacement) to create N smaller datasets and fit a tree on each subset, giving low variance.\n" +
            "2) Random Subspace Method — at each node of each tree, choose a random subset of features and consider splits on these features only.\n" +
            "This extra randomness at the node level reduces correlation between the bagged trees, which gives a stronger variance reduction than plain bagging alone. This is the trick that makes Random Forests work so well.",
          tags: ["Random Forest", "Random Subspace Method", "Feature Bagging"],
          ref: "Lecture 04 — Random Forest (Bagging + Random Subspace)",
          likely: "medium",
        },
        {
          type: "essay",
          q: "12. List and briefly explain at least six techniques for feature mapping mentioned in the lecture.",
          translation:
            "اذكر واشرح بإختصار ست تقنيات على الأقل للـ Feature Mapping مذكورة في المحاضرة.",
          answer:
            "1) Feature extraction — transform input data into a new set of features that capture the most important information (e.g., extracting edges, corners, textures from images).\n" +
            "2) Feature transformation — apply mathematical functions to transform input into new features (e.g., bag-of-words representation in text classification).\n" +
            "3) Feature selection — select a subset of the available features that are most relevant to the task.\n" +
            "4) Feature scaling — scale features so they have similar ranges and are on the same scale (important for distance-based algorithms).\n" +
            "5) Feature engineering — create new features from existing ones (e.g., ratio of transaction amount to average transaction amount in fraud detection).\n" +
            "6) Dimensionality reduction — reduce the number of features while retaining the most important information; helps reduce overfitting and improve computational efficiency.\n" +
            "7) Embeddings — vector representations that capture semantic meaning (e.g., word2vec, GloVe for words in NLP).\n" +
            "8) Data augmentation — create new examples by applying transformations to existing data (e.g., rotating, flipping, cropping images).\n" +
            "9) Domain knowledge — use expert knowledge about the domain to guide feature selection/engineering (e.g., medical symptoms and risk factors for diagnosis).",
          tags: ["Feature Mapping", "Techniques"],
          ref: "Lecture 04 — Techniques for feature mapping",
          likely: "medium",
        },

        // ===================== Numerical / Computational Questions =====================
        {
          type: "essay",
          q: "1. (Numerical) For a polynomial feature mapping of degree M = 3 and an input x = 2, write the full feature vector ψ(x).",
          translation:
            "(سؤال حسابي) لـ Polynomial Feature Mapping من الدرجة M = 3 ومدخل x = 2، اكتب الـ feature vector ψ(x) كامل.",
          answer:
            "Given: M = 3, x = 2.\n" +
            "Formula: ψ(x) = [1, x, x^2, x^3]⊤\n" +
            "Step 1: 1 = 1\n" +
            "Step 2: x = 2\n" +
            "Step 3: x^2 = 2^2 = 4\n" +
            "Step 4: x^3 = 2^3 = 8\n" +
            "Result: ψ(2) = [1, 2, 4, 8]⊤\n" +
            "Note: the feature vector has M + 1 = 4 components because it starts from x^0 = 1.",
          tags: ["Polynomial", "Feature Mapping", "Numerical"],
          ref: "Lecture 04 — Polynomial Feature Mapping",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. (Numerical) In gradient descent, the current weight is wj = 2.0, the partial derivative ∂J/∂wj = 0.5, and the learning rate α = 0.1. Compute the new value of wj after one update.",
          translation:
            "(سؤال حسابي) في الـ Gradient Descent، الوزن الحالي wj = 2.0، المشتقة الجزئية ∂J/∂wj = 0.5، ومعدل التعلم α = 0.1. احسب القيمة الجديدة لـ wj بعد تحديث واحد.",
          answer:
            "Given: wj = 2.0, ∂J/∂wj = 0.5, α = 0.1\n" +
            "Update rule: wj_new = wj − α * (∂J / ∂wj)\n" +
            "Step 1: α * (∂J / ∂wj) = 0.1 * 0.5 = 0.05\n" +
            "Step 2: wj_new = 2.0 − 0.05 = 1.95\n" +
            "Result: wj_new = 1.95\n" +
            "Interpretation: because ∂J/∂wj > 0, the update correctly decreases wj to reduce J.",
          tags: ["Gradient Descent", "Numerical", "Update Rule"],
          ref: "Lecture 04 — Deriving Update Rule & Setting Learning Rate",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. (Numerical) For a polynomial feature mapping of degree M = 9, how many features (components) are in the feature vector ψ(x)? Justify your answer.",
          translation:
            "(سؤال حسابي) لـ Polynomial Feature Mapping من الدرجة M = 9، كام ميزة (عنصر) في الـ feature vector ψ(x)؟ برر إجابتك.",
          answer:
            "Formula: ψ(x) = [1, x, x^2, ..., x^M]⊤\n" +
            "The vector contains the powers of x from x^0 (= 1) up to x^M.\n" +
            "Number of components = M + 1 (because we start counting from 0).\n" +
            "For M = 9: number of features = 9 + 1 = 10.\n" +
            "The features are: [1, x, x^2, x^3, x^4, x^5, x^6, x^7, x^8, x^9].\n" +
            "Conclusion: a degree-9 polynomial fit requires estimating 10 weights (w0 through w9).",
          tags: ["Polynomial", "Feature Mapping", "Numerical"],
          ref: "Lecture 04 — Polynomial Feature Mapping (M=9 case)",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. (Numerical) Compare the cost of the direct solution versus one gradient descent update for a regression problem with D = 100 features and N = 1000 training examples.",
          translation:
            "(سؤال حسابي) قارن تكلفة الحل المباشر مقابل تحديث واحد في الـ Gradient Descent لمشكلة regression فيها D = 100 ميزة و N = 1000 مثال تدريب.",
          answer:
            "Direct solution cost (matrix inversion): O(D^3) = O(100^3) = 1,000,000 operations.\n" +
            "Gradient descent update cost: O(N*D) = O(1000 * 100) = 100,000 operations per update.\n" +
            "Comparison: GD update is about 10x cheaper than the direct solution per iteration.\n" +
            "Conclusion: For high-dimensional regression (large D), gradient descent is more efficient than the direct solution, which requires expensive matrix inversion. With stochastic gradient descent (SGD), the per-iteration cost can be even lower (O(D) per example).",
          tags: ["Gradient Descent", "Complexity", "Numerical"],
          ref: "Lecture 04 — Why Use Gradient Descent?",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. (Numerical) Write the polynomial equation and the corresponding feature vector for the case M = 1, and explain what kind of model it represents.",
          translation:
            "(سؤال حسابي) اكتب معادلة الكثيرة والـ feature vector المقابل لحالة M = 1، واشرح نوع النموذج اللي بتمثله.",
          answer:
            "Polynomial equation for M = 1: y = w0 + w1*x\n" +
            "Feature vector: ψ(x) = [1, x]⊤\n" +
            "Number of features = M + 1 = 2.\n" +
            "Interpretation: M = 1 represents simple linear regression — a straight line that fits the data with a single slope (w1) and intercept (w0).\n" +
            "Note from the lecture: M = 1 is still a simple model. If the true relationship is non-linear, M = 1 (like M = 0) will under-fit the data. M = 3 is needed for a good fit on the lecture's example dataset.",
          tags: ["Polynomial", "Linear Regression", "Numerical"],
          ref: "Lecture 04 — Polynomial Feature Mapping with M = 1",
          likely: "medium",
        },
        {
          type: "essay",
          q: "6. (Numerical) In the bagging example from the lecture, m = 3 datasets are created by sampling with replacement, each containing n = 7 examples. If the original dataset D has 7 examples, what is the total number of model predictions made and how is the final prediction obtained?",
          translation:
            "(سؤال حسابي) في مثال الـ Bagging من المحاضرة، m = 3 datasets بتتخلق بأخذ عينات مع استبدال، كل واحد فيهم n = 7 أمثلة. لو الـ dataset الأصلي D فيه 7 أمثلة، إيه العدد الكلي للتنبؤات اللي بتتعمل وإزاي بيتحصل على التنبؤ النهائي؟",
          answer:
            "Given: m = 3 datasets, each with n = 7 examples, sampled with replacement from D (which has 7 examples).\n" +
            "Step 1 — Training: Train one model on each of the m = 3 bootstrap datasets, producing 3 trained models.\n" +
            "Step 2 — Prediction: For each test sample, each of the 3 models produces a prediction yi (i = 1, 2, 3). Total = 3 predictions per test sample.\n" +
            "Step 3 — Aggregation: Average the 3 predictions: y_final = (y1 + y2 + y3) / 3.\n" +
            "Conclusion: 3 model predictions are made per test sample, and the final prediction is the average of these 3 predictions.\n" +
            "Note: because sampling is with replacement, some original examples may appear multiple times in the same bootstrap dataset, and some may not appear at all.",
          tags: ["Bagging", "Numerical", "Aggregation"],
          ref: "Lecture 04 — Bagging Example 1/2 & 2/2",
          likely: "high",
        },
      ],
    },
    // المحاضرة: Lecture 5 - Linear Models II (Convexity, Learning Rate, Binary Linear Classification, Logistic Regression)

    {
      id: "ml-lecture-05",
      t: "المحاضرة 5 - Linear Models II",
      d: "التحدب Convexity، ضبط معدل التعلم، التصنيف الخطي الثنائي Binary Linear Classification، والانحدار اللوجستي Logistic Regression مع دالة Sigmoid والـ Cross-Entropy Loss.",
      pdf: "datenew/subjects/machine-learning/lectures/Lec 5/Lec 5.pdf",
      pdf2: "datenew/subjects/machine-learning/questions/Questions on each lecture/Lecture-05-Questions.pdf",
      // المحاضرة: Lecture 5 - Linear Models II (Convexity, Learning Rate, Binary Linear Classification, Logistic Regression, Cross-Entropy Loss)

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شرح بالعربي لمفاهيم المحاضرة: الانحدار اللوجستي، التصنيف الخطي، ودالة الـ Sigmoid.",
          links: [
            {
              t: "Logistic Regression شرح عربي",
              d: "فيديو عربي يشرح الانحدار اللوجستي (Logistic Regression) ودالة الـ Sigmoid وكيف بيتعمل التصنيف الثنائي. مرتبط مباشرة بقسم Logistic Regression في المحاضرة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=O2il_DIrDm0",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Logistic Regression (Classification) — Python Arabic",
              d: "شرح بالعربي لتطبيق Logistic Regression في Python مع شرح التابع Sigmoid والـ Cross-Entropy Loss. مكمل لقسم Logistic Regression والـ Gradient of Logistic Loss.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=s5SVsMR8yDk",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح خوارزمية التصنيف في تعلم الآلة (Logistic Regression)",
              d: "شرح عربي لخوارزمية الانحدار اللوجستي وتطبيقاتها في التصنيف (Classification) مع أمثلة في Python. مفيد لفهم why logistic regression رغم اسمه regression بيُستخدم للتصنيف.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=logistic+regression+%D8%B4%D8%B1%D8%AD+%D8%B9%D8%B1%D8%A8%D9%8A",
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
            "شرح بالإنجليزي لمفاهيم المحاضرة من قناة StatQuest التعليمية الشهيرة في تعلم الآلة.",
          links: [
            {
              t: "StatQuest: Logistic Regression — Playlist",
              d: "Playlist كامل من StatQuest عن Logistic Regression، بيشرح الـ Sigmoid Function والـ Maximum Likelihood وطريقة تدريب النموذج. مرتبط مباشرة بقسم Logistic Regression في المحاضرة.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ Open Playlist",
                  url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUKxzEP5HA2d-Li7IJkHfXSe",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "StatQuest: Logistic Regression (main video)",
              d: "الفيديو الأساسي لـ StatQuest عن Logistic Regression، بيوضح لي بنستخدم Sigmoid بدل Linear Regression وليه اسمه regression رغم إنه للتصنيف. مرتبط بقسم Logistic Regression.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ Watch on YouTube",
                  url: "https://www.youtube.com/watch?v=yIYKR4sgzI8",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "StatQuest — Video Index (All Topics)",
              d: "الفهرس الكامل لفيديوهات StatQuest، فيه شروحات لـ Logistic Regression و Cross Entropy و Gradient Descent و Linear Classification. مفيد كمرجع شامل لمحاضرة Linear Models II.",
              icon: "🌍",
              actions: [
                {
                  label: "🌐 Visit Video Index",
                  url: "https://statquest.org/video_index.html",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "StatQuest with Josh Starmer — Channel",
              d: "قناة StatQuest التعليمية الشهيرة، فيها شروحات لكل مفاهيم المحاضرة: Logistic Regression و Cross Entropy و Gradient Descent. الأسلوب بسيط وبيستخدم رسومات توضيحية.",
              icon: "🌍",
              actions: [
                {
                  label: "🌐 Visit Channel",
                  url: "https://www.youtube.com/c/joshstarmer",
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
            "مقالات ومراجع تعليمية تشرح كل مفاهيم المحاضرة بالتفصيل: التحدب، الـ Learning Rate، التصنيف الخطي، والـ Cross-Entropy Loss.",
          links: [
            {
              t: "Convexity Optimization — GeeksforGeeks",
              d: "مقال شامل عن دور التحدب (Convexity) في تحسين نماذج تعلم الآلة، بيوضح إن أي local minimum هو global minimum. مرتبط مباشرة بقسم Convexity في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المقال",
                  url: "https://www.geeksforgeeks.org/machine-learning/convexity-optimization",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Learning Rate in Neural Network — GeeksforGeeks",
              d: "شرح الـ Learning Rate وتأثيره على النموذج، بيوضح ليه α صغير بيبطئ التقارب و α كبير بيعمل oscillations. مرتبط بقسم Setting the Learning Rate في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المقال",
                  url: "https://www.geeksforgeeks.org/machine-learning/impact-of-learning-rate-on-a-model",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "What is Learning Rate? — IBM",
              d: "مقال من IBM يشرح الـ Learning Rate ودوره في Gradient Descent وكيف بيحدد حجم الخطوة عند كل iteration. مرتبط بقسم Setting the Learning Rate في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المقال",
                  url: "https://www.ibm.com/think/topics/learning-rate",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "What Is Cross-Entropy Loss Function? — GeeksforGeeks",
              d: "شرح تفصيلي لدالة خسارة الـ Cross-Entropy في مسائل التصنيف، مع الصيغة الرياضية واشتقاق الـ Gradient. مرتبط بقسم Gradient of Logistic Loss في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المقال",
                  url: "https://www.geeksforgeeks.org/machine-learning/what-is-cross-entropy-loss-function",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Cost Function in Logistic Regression — GeeksforGeeks",
              d: "شرح دالة التكلفة في Logistic Regression (Log Loss / Binary Cross-Entropy) ولية بنستخدمها بدل Mean Squared Error. مرتبط بقسم Logistic Regression في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المقال",
                  url: "https://www.geeksforgeeks.org/machine-learning/ml-cost-function-in-logistic-regression",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Logistic classification with cross-entropy — Peter's Notes",
              d: "مقال تقني بيشرح الـ Logistic Function والـ Cross-Entropy Loss مع اشتقاق الـ Gradients المستخدمة في تحسين المعاملات. مرتبط بقسم Gradient of Logistic Loss.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المقال",
                  url: "https://peterroelants.github.io/posts/cross-entropy-logistic",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Understanding Decision Boundaries in Machine Learning — Medium",
              d: "مقال يشرح الـ Decision Boundary (حد القرار) في التصنيف، بيوضح إنه خط في 2-D أو hyperplane في الأبعاد العالية. مرتبط بقسم Binary Linear Classification في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المقال",
                  url: "https://medium.com/@okeshakarunarathne/understanding-decision-boundaries-in-machine-learning-d00c5d81ed1d",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Why Convex Optimization Matters in Machine Learning — Medium",
              d: "مقال يشرح أهمية التحسين المحدب (Convex Optimization) في تعلم الآلة، بيوضح إن قيمة الدالة عند المركب لا بتعدى التركيب الخطي لقيمها. مرتبط بقسم Convexity في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المقال",
                  url: "https://yilmazbe7.medium.com/why-convex-optimization-matters-in-machine-learning-the-geometry-of-learning-f178b6843ec9",
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
            "أدوات تفاعلية ومحاكاة لتجربة مفاهيم المحاضرة: Logistic Regression و Decision Boundary و تأثير الـ Learning Rate.",
          links: [
            {
              t: "LogisticRegression — scikit-learn Documentation",
              d: "التوثيق الرسمي لـ LogisticRegression في scikit-learn، بيشرح المعاملات زي penalty و C و solver. مفيد للتطبيق العملي للـ Logistic Regression المذكور في المحاضرة.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح التوثيق",
                  url: "https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "TensorFlow Playground — Neural Network Visualization",
              d: "أداة تفاعلية من Google بتسمح بتجربة Neural Networks (اللي بتستخدم Logistic/Sigmoid) في المتصفح، تقدر تتحكم في الـ Learning Rate وعدد الطبقات وتشوف تأثيرها على التقارب والـ Decision Boundary لحظيًا.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://playground.tensorflow.org",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Decision Boundary Visualizer — Wolfram Cloud",
              d: "أداة تفاعلية لتصور حدود القرار (Decision Boundaries) لتصنيف بيانات 2D، تقدر تشوف كيف الـ linear classifier بيفصل بين الفئات. مرتبط بقسم Binary Linear Classification.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://resources.wolframcloud.com/ExampleRepository/resources/8dd50680-698a-4759-ab67-233d016ed4dd",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Interactive Decision Tree / Classifier Visualizer — PythonAlchemist",
              d: "أداة تفاعلية لتصور الـ classifiers وحدود القرار. مفيد لفهم كيف الـ linear classifier بيفصل البيانات وكيف الـ Decision Boundary بيتشكل. مرتبط بقسم Binary Linear Classification.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://www.pythonalchemist.com",
                  type: "view",
                  color: "orange",
                },
              ],
            },
          ],
        },
      ],

      questions: [
        // ===================== MCQ Questions =====================
        {
          q: "1. If a function is convex, what can we say about its critical points?",
          options: [
            "Every critical point is a global optimum",
            "Every critical point is a local optimum only",
            "Critical points do not exist",
            "Only saddle points exist",
          ],
          correct: 0,
          translation:
            "لو الدالة محدبة (convex)، إيه اللي نقدر نقوله عن نقاطها الحرجة (critical points)؟",
          explanation:
            "الإجابة الصحيحة إن كل نقطة حرجة في الدالة المحدبة هي نقطة مثلى عالمية (global optimum). ده الخاصية الأساسية للتحدب اللي بتخلي Gradient Descent يلاقي الحل الأمثل.",
          tags: ["Convexity", "Critical Points"],
          ref: "Lecture 05 — When are Critical Points Optimal?",
          likely: "high",
        },
        {
          q: "2. A set S is convex if for any x1, x2 in S, the line segment connecting them:",
          options: [
            "Lies entirely outside S",
            "Passes through the origin",
            "Lies entirely within S",
            "Has zero length",
          ],
          correct: 2,
          translation:
            "المجموعة S محدبة لو لأي نقطتين x1, x2 فيها، القطعة المستقيمة اللي بتوصّلهم:",
          explanation:
            "الخاصية الأساسية للمجموعة المحدبة: أي قطعة مستقيمة بتوصّل نقطتين فيها لازم تكون موجودة بالكامل داخل S. ده تعريف الـ convex set.",
          tags: ["Convexity", "Convex Sets"],
          ref: "Lecture 05 — Convex Sets",
          likely: "high",
        },
        {
          q: "3. A function f is convex if the line segment between any two points on f's graph:",
          options: [
            "Lies below the graph",
            "Intersects the graph exactly once",
            "Is parallel to the x-axis",
            "Lies above the graph",
          ],
          correct: 3,
          translation:
            "الدالة f محدبة لو القطعة المستقيمة بين أي نقطتين على رسمها:",
          explanation:
            "في الدالة المحدبة، القطعة المستقيمة بين أي نقطتين على الرسم بتفوق الرسم (lie above). ده بيعطي شكل الـ bowl-shape. لو بتفوق تحت (lie below) تبقى concave.",
          tags: ["Convexity", "Convex Functions"],
          ref: "Lecture 05 — Convex Functions",
          likely: "high",
        },
        {
          q: "4. The convexity condition for a function f is mathematically written as:",
          options: [
            "f((1−λ)x0 + λx1) ≥ (1−λ)f(x0) + λf(x1)",
            "f((1−λ)x0 + λx1) ≤ (1−λ)f(x0) + λf(x1)",
            "f((1−λ)x0 + λx1) = (1−λ)f(x0) + λf(x1)",
            "f((1−λ)x0 + λx1) < 0",
          ],
          correct: 1,
          translation: "شرط التحدب للدالة f بيتكتب رياضيًا كده:",
          explanation:
            "الشرط الصحيح: f((1−λ)x0 + λx1) ≤ (1−λ)f(x0) + λf(x1) لـ 0 ≤ λ ≤ 1. ده معناه إن قيمة الدالة عند المركب ≤ التركيب الخطي لقيمها.",
          tags: ["Convexity", "Convex Functions"],
          ref: "Lecture 05 — Convex Functions",
          likely: "high",
        },
        {
          q: "5. For linear models, z = w⊤x + b is a linear function of w and b. If the loss function is a convex function of z, then:",
          options: [
            "It is convex only in w",
            "It is convex only in b",
            "It is also a convex function of w and b",
            "It is non-convex in w and b",
          ],
          correct: 2,
          translation:
            "للنماذج الخطية، z = w⊤x + b دالة خطية في w و b. لو دالة الخسارة محدبة في z، يبقى:",
          explanation:
            "لو الخسارة محدبة في z و z خطية في w و b، يبقى الخسارة محدبة في w و b كمان. ده بيسهل تحسين النموذج بالـ GD ويضمن إيجاد الحل الأمثل.",
          tags: ["Convexity", "Linear Models", "Loss Functions"],
          ref: "Lecture 05 — Convex Loss Functions",
          likely: "high",
        },
        {
          q: "6. What happens when the learning rate α is too small in gradient descent?",
          options: [
            "Oscillations around the minimum",
            "Instability and divergence",
            "Slow progress and slow convergence",
            "Immediate convergence to the optimum",
          ],
          correct: 2,
          translation:
            "إيه اللي بيحصل لما الـ learning rate α صغير جدًا في الـ Gradient Descent؟",
          explanation:
            "لو α صغير جدًا، التقدّم بيكون بطيء والتقارب (convergence) بياخد وقت طويل وعدد iterations كبير. التذبذب والعدم استقرار بيحصلوا لما α كبير جدًا.",
          tags: ["Learning Rate", "Gradient Descent"],
          ref: "Lecture 05 — Impact of Learning Rate",
          likely: "high",
        },
        {
          q: "7. What happens when the learning rate α is too large in gradient descent?",
          options: [
            "Slow convergence",
            "Oscillations and possibly instability",
            "Immediate convergence",
            "No effect on convergence",
          ],
          correct: 1,
          translation: "إيه اللي بيحصل لما الـ learning rate α كبير جدًا؟",
          explanation:
            "لو α كبير جدًا، الخوارزمية بتعمل oscillations (تذبذب) حوالين الـ minimum ويمكن تستقر (instability) وتعمل divergence. التقارب البطيء بيحصل لما α صغير.",
          tags: ["Learning Rate", "Gradient Descent"],
          ref: "Lecture 05 — Impact of Learning Rate",
          likely: "high",
        },
        {
          q: "8. What are typical good values for the learning rate α?",
          options: [
            "Between 0.001 and 0.1",
            "Between 1 and 10",
            "Between 100 and 1000",
            "Negative values like −0.5",
          ],
          correct: 0,
          translation: "إيه القيم النموذجية الجيدة لـ learning rate α؟",
          explanation:
            "القيم الجيدة عادة بين 0.001 و 0.1. القيم الكبيرة بتسبب oscillations/divergence، والقيم السالبة غلط لأن α لازم يكون موجب.",
          tags: ["Learning Rate", "Hyperparameter Tuning"],
          ref: "Lecture 05 — Finding a Good Learning Rate",
          likely: "high",
        },
        {
          q: "9. How can we determine the best value for the learning rate?",
          options: [
            "Grid search and training curves",
            "Always use 0.5",
            "Random guessing only",
            "Use the largest possible value",
          ],
          correct: 0,
          translation: "إزاي نحدد أفضل قيمة لـ learning rate؟",
          explanation:
            "بنستخدم Grid search (نجرب قيم زي 0.1, 0.03, 0.01, ...) ونشوف الـ training curves عشان نشخّص مشاكل التحسين. ده اللي المحاضرة نصحت بيه.",
          tags: ["Learning Rate", "Grid Search", "Training Curves"],
          ref: "Lecture 05 — Finding a Good Learning Rate",
          likely: "high",
        },
        {
          q: "10. In binary linear classification, what does the model predict?",
          options: [
            "A binary target t ∈ {0, 1}",
            "A continuous-valued target",
            "A multi-class target with 10 classes",
            "An unordered categorical variable",
          ],
          correct: 0,
          translation:
            "في التصنيف الخطي الثنائي (Binary Linear Classification)، النموذج بيتوقع إيه؟",
          explanation:
            "الـ BLC بيتوقع target ثنائي t ∈ {0, 1} (أو t ∈ {−1, +1} للسهولة الحسابية). t=1 هو positive example و t=0 هو negative example.",
          tags: ["Binary Linear Classification", "Targets"],
          ref: "Lecture 05 — Introducing Binary Linear Classification",
          likely: "high",
        },
        {
          q: "11. In the simplified binary linear classification model, the prediction y is defined as:",
          options: [
            "y = 1 if z ≥ 0, y = 0 otherwise",
            "y = 1 if z ≥ r, y = 0 otherwise (with r != 0)",
            "y = z always",
            "y = 0 always",
          ],
          correct: 0,
          translation:
            "في النموذج المبسّط للتصنيف الخطي الثنائي، التوقع y بيتعرف كده:",
          explanation:
            "بعد تبسيط النموذج (eliminating threshold r = 0 و eliminating bias b بـ dummy feature x0 = 1)، التوقع بقى: y = 1 لو z ≥ 0، y = 0 لو z < 0، حيث z = w⊤x.",
          tags: ["Binary Linear Classification", "Simplified Model"],
          ref: "Lecture 05 — Simplified Model",
          likely: "high",
        },
        {
          q: "12. How is the bias b eliminated in the simplified binary linear classification model?",
          options: [
            "By removing it completely",
            "By setting b = 0 always",
            "By adding a dummy feature x0 = 1, with w0 = b",
            "By multiplying it by the learning rate",
          ],
          correct: 2,
          translation:
            "إزاي بيتشال الـ bias b من النموذج المبسّط للتصنيف الخطي الثنائي؟",
          explanation:
            "بنضيف dummy feature x0 = 1، فالوزن w0 بيبقى مكافئ للـ bias b (نفس الفكرة المستخدمة في Linear Regression). كده z = w⊤x شامل الـ bias.",
          tags: ["Binary Linear Classification", "Bias", "Dummy Feature"],
          ref: "Lecture 05 — Simplified Model",
          likely: "high",
        },
        {
          q: "13. The decision boundary in binary linear classification is defined by:",
          options: [
            "{x : w⊤x = 1}",
            "{x : w⊤x = r}",
            "{x : w⊤x = 0}",
            "{x : w⊤x = max(w)}",
          ],
          correct: 2,
          translation:
            "حد القرار (decision boundary) في التصنيف الخطي الثنائي بيتعرف بـ:",
          explanation:
            "حد القرار هو {x : w⊤x = 0}. ده خط في 2-D أو hyperplane في الأبعاد العالية، وبيعدّي عبر نقطة الأصل لأننا شلنا الـ bias.",
          tags: ["Binary Linear Classification", "Decision Boundary"],
          ref: "Lecture 05 — Visualizing NOT in Data Space",
          likely: "high",
        },
        {
          q: "14. Data is said to be linearly separable if:",
          options: [
            "No linear decision rule can separate the examples",
            "The data has more than 2 features",
            "The data is normally distributed",
            "A linear decision rule can perfectly separate the training examples",
          ],
          correct: 3,
          translation: "البيانات بتتوصف بـ linearly separable لو:",
          explanation:
            "البيانات linearly separable لو فيه قاعدة قرار خطية (linear decision rule) تقدر تفصل أمثلة التدريب بشكل مثالي. زي ما اتعرض في NOT و AND.",
          tags: ["Linear Separability", "Decision Boundary"],
          ref: "Lecture 05 — Visualizing NOT in Data Space",
          likely: "high",
        },
        {
          q: "15. In the weight space visualization, what does each training example x specify?",
          options: [
            "A half-space that w must lie in to guarantee correct classification",
            "A single point that w must equal",
            "A line through the origin",
            "A circular region around w",
          ],
          correct: 0,
          translation: "في تصوّر الـ weight space، كل مثال تدريب x بيمثل إيه؟",
          explanation:
            "كل مثال تدريب x بيمثل half-space (نصف فضاء) لازم w يكون جواه عشان يضمن التصنيف الصحيح. المنطقة الممكنة (feasible region) بتحقق كل القيود.",
          tags: ["Weight Space", "Half-Space", "Visualization"],
          ref: "Lecture 05 — Visualizing NOT in Weight Space",
          likely: "high",
        },
        {
          q: "16. The feasible region in weight space is:",
          options: [
            "The region where all constraints are satisfied",
            "The region where w = 0",
            "The region with no constraints",
            "The region outside all half-spaces",
          ],
          correct: 0,
          translation:
            "المنطقة الممكنة (feasible region) في الـ weight space هي:",
          explanation:
            "الـ feasible region هي المنطقة اللي بتحقق كل القيود (constraints) المفروضة من أمثلة التدريب. المشكلة feasible لو الـ feasible region مش فاضية (nonempty).",
          tags: ["Weight Space", "Feasible Region"],
          ref: "Lecture 05 — Visualizing NOT in Weight Space",
          likely: "high",
        },
        {
          q: "17. For the AND function, an example solution is w0 = −1.5, w1 = 1, w2 = 1. The decision boundary equation is:",
          options: [
            "−1.5 + x1 + x2 = 0",
            "x1 + x2 = 1.5",
            "w0 + w1 + w2 = 0",
            "x0 + x1 + x2 = 0",
          ],
          correct: 0,
          translation:
            "للدالة AND، حل مثالي هو w0 = −1.5, w1 = 1, w2 = 1. معادلة حد القرار هي:",
          explanation:
            "حد القرار w0x0 + w1x1 + w2x2 = 0، وبما إن x0 = 1: −1.5 + x1 + x2 = 0. ده اللي ظهر في المحاضرة كـ Example Solution.",
          tags: ["AND Function", "Decision Boundary"],
          ref: "Lecture 05 — Visualizing AND in Data and Weight Spaces",
          likely: "high",
        },
        {
          q: "18. Which algorithms can be used to learn weights for a linearly separable data-set?",
          options: [
            "Linear programming and perceptron algorithm",
            "K-means clustering and PCA",
            "Decision trees and random forests",
            "KNN and Naive Bayes",
          ],
          correct: 0,
          translation:
            "أي الخوارزميات ممكن تُستخدم لتعلّم الأوزان لبيانات linearly separable؟",
          explanation:
            "محاضرة بتذكر خيارين: Linear programming و Perceptron algorithm. الخيارات التانية خوارزميات تانية (clustering, trees) مش مخصصة لتعلم حدود خطية.",
          tags: ["Linear Programming", "Perceptron"],
          ref: "Lecture 05 — Main Takeaways on Binary Linear Classification 2/2",
          likely: "high",
        },
        {
          q: "19. The sigmoid function σ(z) maps any real value to a value in the range:",
          options: ["[−1, 1]", "[0, ∞)", "[0, 1]", "(−∞, ∞)"],
          correct: 2,
          translation:
            "دالة الـ sigmoid σ(z) بتحوّل أي قيمة حقيقية لقيمة في المدى:",
          explanation:
            "الـ sigmoid بترجع قيمة بين 0 و 1، عشان كده بتنفع لتمثيل الاحتمالات في Logistic Regression. الصيغة: σ(z) = 1 / (1 + e^(−z)).",
          tags: ["Logistic Regression", "Sigmoid", "Probability"],
          ref: "Lecture 05 — Logistic Function / Sigmoid Function",
          likely: "high",
        },
        {
          q: "20. Despite its name, logistic regression is mainly used for:",
          options: [
            "Regression problems only",
            "Clustering tasks",
            "Classification problems",
            "Dimensionality reduction",
          ],
          correct: 2,
          translation:
            "رغم اسمها، الانحدار اللوجستي (Logistic Regression) بيُستخدم أساسًا لـ:",
          explanation:
            "رغم اسمه regression، اللوجستي بيُستخدم للتصنيف (classification). بيعمل تقدير للاحتمال، ولو الاحتمال > 0.5 بيتوقع الفئة 1، غير كده الفئة 0.",
          tags: ["Logistic Regression", "Classification"],
          ref: "Lecture 05 — Logistic regression",
          likely: "high",
        },
        {
          q: "21. In logistic regression, the default threshold for classifying an instance as class 1 is:",
          options: ["0.0", "0.25", "0.5", "1.0"],
          correct: 2,
          translation:
            "في الانحدار اللوجستي، الحد الافتراضي لتصنيف المثال كـ class 1 هو:",
          explanation:
            "الحد الافتراضي هو 0.5. لو الاحتمال المقدّر ≥ 0.5، النموذج بيتوقع class 1؛ غير كده class 0. ده اللي المحاضرة ذكرته.",
          tags: ["Logistic Regression", "Threshold"],
          ref: "Lecture 05 — Logistic regression",
          likely: "high",
        },
        {
          q: '22. Which type of logistic regression handles 3 or more unordered categories like "cat", "dog", "sheep"?',
          options: ["Binomial", "Ordinal", "Linear", "Multinomial"],
          correct: 3,
          translation:
            'أي نوع من الانحدار اللوجستي بيتعامل مع 3 فئات أو أكتر غير مرتبة زي "cat", "dog", "sheep"؟',
          explanation:
            "Multinomial logistic regression بيتعامل مع 3+ فئات غير مرتبة (unordered). Binomial لفئتين بس، و Ordinal لفئات مرتبة (low, medium, high).",
          tags: ["Logistic Regression", "Multinomial"],
          ref: "Lecture 05 — Types of Logistic Regression",
          likely: "high",
        },
        {
          q: "23. Ordinal logistic regression is used when the dependent variable has:",
          options: [
            "Exactly 2 categories",
            "3 or more unordered categories",
            '3 or more ordered categories like "low", "medium", "high"',
            "Continuous values",
          ],
          correct: 2,
          translation:
            "الانحدار اللوجستي الترتيبي (Ordinal) بيُستخدم لما المتغير التابع فيه:",
          explanation:
            "Ordinal logistic regression بيُستخدم لما الفئات مرتبة (ordered) زي low, medium, high. Binomial لفئتين، و Multinomial لفئات غير مرتبة.",
          tags: ["Logistic Regression", "Ordinal"],
          ref: "Lecture 05 — Types of Logistic Regression",
          likely: "medium",
        },
        {
          q: "24. The cross-entropy loss for logistic regression is given by:",
          options: [
            "LCE(y, t) = t·log(y) + (1−t)·log(1−y)",
            "LCE(y, t) = (y − t)²",
            "LCE(y, t) = |y − t|",
            "LCE(y, t) = −t·log(y) − (1−t)·log(1−y)",
          ],
          correct: 3,
          translation: "خسارة الـ cross-entropy للانحدار اللوجستي بتعطى بـ:",
          explanation:
            "الصيغة الصحيحة: LCE(y, t) = −t·log(y) − (1−t)·log(1−y). الإجابة الأولى بدون الإشارة السالبة غلط، والباقي دوال خسارة تانية (MSE, MAE).",
          tags: ["Logistic Regression", "Cross-Entropy Loss"],
          ref: "Lecture 05 — Gradient of Logistic Loss",
          likely: "high",
        },
        {
          q: "25. The gradient of the cross-entropy loss with respect to wj in logistic regression simplifies to:",
          options: ["(y − t)·xj", "(t − y)·xj", "(y − t)²·xj", "y·t·xj"],
          correct: 0,
          translation:
            "تدرج خسارة الـ cross-entropy بالنسبة لـ wj في الانحدار اللوجستي بتبسّط لـ:",
          explanation:
            "بعد الاشتقاق بالـ chain rule: ∂LCE/∂wj = (y − t)·xj. ده نفس شكل تدرج Linear Regression تقريبًا، بس y هنا مخرج الـ sigmoid.",
          tags: ["Logistic Regression", "Gradient", "Cross-Entropy"],
          ref: "Lecture 05 — Gradient of Logistic Loss",
          likely: "high",
        },
        {
          q: "26. The gradient descent update rule for logistic regression is:",
          options: [
            "wj → wj + α · (1/N) · Σ(y(i) − t(i))·xj(i)",
            "wj → wj − α · (1/N) · Σ(t(i) − y(i))·xj(i)",
            "wj → α · (1/N) · Σ(y(i) − t(i))·xj(i)",
            "wj → wj − α · (1/N) · Σ(y(i) − t(i))·xj(i)",
          ],
          correct: 3,
          translation: "قاعدة تحديث الـ Gradient Descent للانحدار اللوجستي هي:",
          explanation:
            "الصيغة الصحيحة: wj → wj − α · (1/N) · Σ(y(i) − t(i))·xj(i). بنقص α ضرب المشتقة من الوزن. الخيار التالت إشارته معكوسة (ده بيعمل زيادة في الخسارة مش نقصان).",
          tags: ["Logistic Regression", "Gradient Descent", "Update Rule"],
          ref: "Lecture 05 — Gradient of Logistic Loss",
          likely: "high",
        },
        {
          q: "27. The sigmoid function is described as having what shape?",
          options: [
            "A straight line",
            "A parabola",
            "A circle",
            'An "S" shape',
          ],
          correct: 3,
          translation: "دالة الـ sigmoid بيتوصف شكلها بـ:",
          explanation:
            "الـ sigmoid ليها شكل حرف S (S-shaped curve). عشان كده بتتحول القيم المتطرفة (سالبة جدًا أو موجبة جدًا) لقيم قريبة من 0 أو 1 على الترتيب.",
          tags: ["Logistic Regression", "Sigmoid", "Shape"],
          ref: "Lecture 05 — Logistic Function – Sigmoid Function",
          likely: "medium",
        },
        {
          q: "28. In a typical logistic regression training procedure, weights are initialized to:",
          options: [
            "Large values like 1000",
            "Small random values",
            "Exactly zero",
            "Negative values only",
          ],
          correct: 1,
          translation:
            "في إجراء التدريب النموذجي للانحدار اللوجستي، الأوزان بتبدأ بـ:",
          explanation:
            "الأوزان بتُهيّأ عادة لـ small random values. ده بيساعد على كسر التماثل (symmetry breaking) وبيسمح للـ GD يكتشف حلول مختلفة.",
          tags: ["Logistic Regression", "Initialization"],
          ref: "Lecture 05 — Example (Initialization step)",
          likely: "medium",
        },
        {
          q: "29. What does the term z = w⊤x + b represent in logistic regression?",
          options: [
            "The probability of class 1",
            "The linear combination (input to the sigmoid function)",
            "The loss value",
            "The gradient of the loss",
          ],
          correct: 1,
          translation: "المصطلح z = w⊤x + b بيمثل إيه في الانحدار اللوجستي؟",
          explanation:
            "z هو التركيب الخطي اللي بيدخل لدالة الـ sigmoid. الاحتمال y = σ(z) = 1/(1+e^(−z)). فـ z مش الاحتمال نفسه، لكن مدخل الـ sigmoid.",
          tags: ["Logistic Regression", "Linear Combination"],
          ref: "Lecture 05 — Logistic regression (How does it work?)",
          likely: "high",
        },
        {
          q: "30. If the sigmoid output for an input is exactly 0.5, what does the model typically predict?",
          options: [
            "Always class 1",
            "Always class 0",
            "Class 1 (since threshold is ≥ 0.5)",
            "Reject the input",
          ],
          correct: 2,
          translation:
            "لو مخرج الـ sigmoid لمُدخل هو 0.5 بالظبط، النموذج بيتوقع إيه عادة؟",
          explanation:
            "بما إن الحد هو p ≥ 0.5 يبقى class 1، فلو المخرج = 0.5 بالظبط، النموذج بيتوقع class 1. (ملاحظة: بعض التطبيقات بتختار 0.5 = class 0، لكن المحاضرة استخدمت ≥).",
          tags: ["Logistic Regression", "Threshold", "Prediction"],
          ref: "Lecture 05 — Logistic regression",
          likely: "medium",
        },

        // ===================== Essay Questions =====================
        {
          type: "essay",
          q: "1. Define a convex set and a convex function. Why is convexity important for optimization in machine learning?",
          translation:
            "عرّف المجموعة المحدبة (convex set) والدالة المحدبة (convex function). ليه التحدب مهم في تحسين نماذج تعلم الآلة؟",
          answer:
            "Convex set: A set S is convex if any line segment connecting two points in S lies entirely within S. Formally, for x1, x2 ∈ S, λ·x1 + (1−λ)·x2 ∈ S for 0 ≤ λ ≤ 1.\n" +
            "Convex function: A function f is convex if the line segment between any two points on f's graph lies above f's graph. Formally, f((1−λ)x0 + λx1) ≤ (1−λ)f(x0) + λf(x1).\n" +
            "Importance: If a function is convex, then every critical point is a global optimum. This means gradient descent is guaranteed to find the global minimum (no local optima traps). For linear models, if the loss is convex in z = w⊤x + b, it is also convex in w and b, making optimization tractable.",
          tags: [
            "Convexity",
            "Convex Sets",
            "Convex Functions",
            "Optimization",
          ],
          ref: "Lecture 05 — Convex Sets & Convex Functions",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. Explain the impact of the learning rate α on gradient descent. What happens when α is too small or too large?",
          translation:
            "اشرح تأثير الـ learning rate α على الـ Gradient Descent. إيه اللي بيحصل لما α صغير جدًا أو كبير جدًا؟",
          answer:
            "The learning rate α controls the step size at each iteration of gradient descent.\n" +
            "α too small: slow progress and slow convergence — the algorithm may need a very large number of iterations to reach the minimum.\n" +
            "α too large: oscillations around the minimum, possibly overshooting it.\n" +
            "α much too large: instability and divergence — the cost function may grow instead of shrink.\n" +
            "How to find a good value: typical good values are between 0.001 and 0.1. Use grid search (try 0.1, 0.03, 0.01, ...) and diagnose optimization problems using training curves. Alternatively, change the algorithm (e.g., line search).",
          tags: ["Learning Rate", "Gradient Descent", "Hyperparameter Tuning"],
          ref: "Lecture 05 — Impact of Learning Rate & Finding a Good Learning Rate",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Describe the simplified model for Binary Linear Classification. How are the threshold r and the bias b eliminated?",
          translation:
            "وصف النموذج المبسّط للتصنيف الخطي الثنائي. إزاي بيتشال الـ threshold r و الـ bias b؟",
          answer:
            "Binary Linear Classification predicts a binary target t ∈ {0, 1} using a linear function of inputs followed by thresholding.\n" +
            "General model: z = w⊤x + b, y = 1 if z ≥ r, y = 0 if z < r.\n" +
            "Eliminating the threshold r: assume r = 0, so w⊤x + b ≥ r becomes w⊤x + b' ≥ 0 where b' = b − r.\n" +
            "Eliminating the bias b: add a dummy feature x0 = 1. The weight w0 = b acts as the bias (same trick as in linear regression).\n" +
            "Simplified model: z = w⊤x, y = 1 if z ≥ 0, y = 0 if z < 0.",
          tags: [
            "Binary Linear Classification",
            "Simplified Model",
            "Bias",
            "Threshold",
          ],
          ref: "Lecture 05 — Simplified Model",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. Compare data space and weight space visualizations in Binary Linear Classification. What do points, lines, and half-spaces represent in each?",
          translation:
            "قارن بين تصوّر الـ data space و الـ weight space في التصنيف الخطي الثنائي. النقاط والخطوط وأنصاف الفضاءات بتمثل إيه في كل واحد؟",
          answer:
            "Data space:\n" +
            "- Points represent training examples.\n" +
            "- A line (or hyperplane in high dimensions) represents a set of weights — the decision boundary {x : w⊤x = 0}.\n" +
            "- The boundary separates the data into two regions (positive vs. negative predictions).\n" +
            "Weight space:\n" +
            "- Points represent sets of values for the weights w.\n" +
            "- Each training example specifies a half-space that w must lie in to guarantee correct classification.\n" +
            "- The feasible region (where all constraints are satisfied) is the intersection of all half-spaces. The problem is feasible if this region is nonempty.",
          tags: ["Data Space", "Weight Space", "Visualization", "Half-Space"],
          ref: "Lecture 05 — Visualizing NOT/AND in Data and Weight Spaces",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. Model the AND logical function using Binary Linear Classification. Give an example set of weights and derive the decision boundary.",
          translation:
            "مثّل دالة AND المنطقية باستخدام التصنيف الخطي الثنائي. اذكر مجموعة أوزان مثالية واشتق حد القرار.",
          answer:
            "AND truth table (with dummy x0 = 1):\n" +
            "  x0 x1 x2 | t\n" +
            "  1  0  0  | 0\n" +
            "  1  0  1  | 0\n" +
            "  1  1  0  | 0\n" +
            "  1  1  1  | 1\n" +
            "Model: z = w0·x0 + w1·x1 + w2·x2, y = 1 if z ≥ 0, else 0.\n" +
            "Constraints from training examples (need to be satisfied for correct classification):\n" +
            "  w0 < 0            (for x = (1,0,0), t = 0)\n" +
            "  w0 + w2 < 0       (for x = (1,0,1), t = 0)\n" +
            "  w0 + w1 < 0       (for x = (1,1,0), t = 0)\n" +
            "  w0 + w1 + w2 ≥ 0  (for x = (1,1,1), t = 1)\n" +
            "Example solution: w0 = −1.5, w1 = 1, w2 = 1.\n" +
            "Decision boundary: w0·x0 + w1·x1 + w2·x2 = 0  →  −1.5 + x1 + x2 = 0  →  x1 + x2 = 1.5.",
          tags: [
            "AND Function",
            "Binary Linear Classification",
            "Decision Boundary",
          ],
          ref: "Lecture 05 — Modeling AND & Visualizing AND",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. What is logistic regression? Explain why it is used for classification despite its name, and describe the role of the sigmoid function.",
          translation:
            "إيه هو الانحدار اللوجستي؟ اشرح ليه بيُستخدم للتصنيف رغم اسمه، ووضّح دور دالة الـ sigmoid.",
          answer:
            'Logistic regression is a supervised learning algorithm used for binary classification. Despite its name containing "regression", it is mainly used for classification (it estimates the probability that an instance belongs to a particular class).\n' +
            "The model computes z = w⊤x + b, then applies the sigmoid function σ(z) = 1 / (1 + e^(−z)) to map z to a probability value between 0 and 1.\n" +
            'Role of sigmoid: it maps any real-valued input to a value in (0, 1), forming an "S"-shaped curve. This lets us interpret the output as a probability.\n' +
            "Classification rule: if the estimated probability ≥ 0.5, predict class 1; otherwise predict class 0.\n" +
            'It\'s called "regression" because it is the extension of linear regression, but the sigmoid turns the continuous output into a categorical one.',
          tags: ["Logistic Regression", "Sigmoid", "Classification"],
          ref: "Lecture 05 — Logistic regression & Logistic Function",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. List and briefly explain the three types of logistic regression.",
          translation:
            "اذكر واشرح بإختصار الأنواع الثلاثة من الانحدار اللوجستي.",
          answer:
            "1) Binomial: the dependent variable has exactly 2 possible types, such as 0 or 1, Pass or Fail.\n" +
            '2) Multinomial: the dependent variable has 3 or more possible unordered types, such as "cat", "dog", or "sheep".\n' +
            '3) Ordinal: the dependent variable has 3 or more possible ordered types, such as "low", "medium", or "high".',
          tags: [
            "Logistic Regression",
            "Types",
            "Binomial",
            "Multinomial",
            "Ordinal",
          ],
          ref: "Lecture 05 — Types of Logistic Regression",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. Derive the gradient of the cross-entropy loss for logistic regression. Show that ∂LCE/∂wj simplifies to (y − t)·xj.",
          translation:
            "اشتق تدرج خسارة الـ cross-entropy للانحدار اللوجستي. وضّح إن ∂LCE/∂wj بتبسّط لـ (y − t)·xj.",
          answer:
            "Given:\n" +
            "  LCE(y, t) = −t·log(y) − (1−t)·log(1−y)\n" +
            "  y = σ(z) = 1 / (1 + e^(−z))\n" +
            "  z = w⊤x\n" +
            "Apply the chain rule: ∂LCE/∂wj = (∂LCE/∂y) · (∂y/∂z) · (∂z/∂wj).\n" +
            "Step 1 — ∂LCE/∂y = −t/y + (1−t)/(1−y).\n" +
            "Step 2 — ∂y/∂z = y·(1−y)  (the derivative of the sigmoid).\n" +
            "Step 3 — ∂z/∂wj = xj  (since z = w⊤x is linear in wj).\n" +
            "Combine:\n" +
            "  ∂LCE/∂wj = [−t/y + (1−t)/(1−y)] · y·(1−y) · xj\n" +
            "           = [−t·(1−y) + (1−t)·y] · xj\n" +
            "           = (−t + t·y + y − t·y) · xj\n" +
            "           = (y − t) · xj.\n" +
            "So ∂LCE/∂wj = (y − t)·xj — the same form as linear regression's gradient, but with y = σ(z).",
          tags: [
            "Logistic Regression",
            "Gradient",
            "Cross-Entropy",
            "Derivation",
          ],
          ref: "Lecture 05 — Gradient of Logistic Loss",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. Write the gradient descent update rule for logistic regression and explain each term.",
          translation:
            "اكتب قاعدة تحديث الـ Gradient Descent للانحدار اللوجستي واشرح كل مصطلح.",
          answer:
            "Update rule:\n" +
            "  wj → wj − α · (1/N) · Σ_{i=1..N} (y(i) − t(i)) · xj(i)\n" +
            "Where:\n" +
            "  wj is the j-th weight being updated.\n" +
            "  α > 0 is the learning rate (controls step size).\n" +
            "  N is the number of training examples.\n" +
            "  y(i) = σ(w⊤x(i)) is the predicted probability for the i-th example.\n" +
            "  t(i) is the true label (0 or 1) for the i-th example.\n" +
            "  xj(i) is the j-th feature of the i-th example.\n" +
            "  (1/N)·Σ(...) is the average gradient of the cross-entropy loss over all training examples.\n" +
            "Intuition: we move wj in the direction opposite to the average gradient (i.e., the direction that decreases the loss).",
          tags: ["Logistic Regression", "Gradient Descent", "Update Rule"],
          ref: "Lecture 05 — Gradient of Logistic Loss",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Explain the typical training procedure for logistic regression, step by step.",
          translation:
            "اشرح إجراء التدريب النموذجي للانحدار اللوجستي خطوة بخطوة.",
          answer:
            "1) Initialize the weights (often to small random values).\n" +
            "2) For each training example:\n" +
            "   a. Calculate the predicted probability using the current weights: y = σ(w⊤x).\n" +
            "   b. Compare this probability to the actual class label by calculating its log loss (cross-entropy loss).\n" +
            "3) Update the weights to minimize the loss (using gradient descent or another optimization algorithm). This means repeatedly doing Step 2 until the log loss cannot get any smaller (convergence).\n" +
            "4) Classification of new instances (after training): compute p = σ(w⊤x_new). If p ≥ 0.5, predict class 1; otherwise predict class 0.",
          tags: [
            "Logistic Regression",
            "Training Procedure",
            "Gradient Descent",
          ],
          ref: "Lecture 05 — Example (training & classification steps)",
          likely: "high",
        },
        {
          type: "essay",
          q: "11. Give two real-world examples where logistic regression can be applied, as mentioned in the lecture.",
          translation:
            "اذكر مثالين من العالم الحقيقي ممكن نطبّق فيهم الانحدار اللوجستي، زي ما المحاضرة ذكرت.",
          answer:
            "1) Business example: For an online retailer, predict which product a particular customer is most likely to buy. The data set contains past visitors and their purchases from the online retailer.\n" +
            "2) Medical example: Investigate whether a person is susceptible to a certain disease. The data set contains diseased and non-diseased persons as well as other medical parameters.\n" +
            "(Additional example from the lecture: a weather dataset with columns 'Outlook', 'Temperature', 'Humidity', 'Wind', and 'Play' (target). Categorical columns like Outlook & Windy are encoded using one-hot encoding, while numerical columns are scaled using standard scaling / z-normalization.)",
          tags: ["Logistic Regression", "Applications", "Examples"],
          ref: "Lecture 05 — Examples",
          likely: "medium",
        },
        {
          type: "essay",
          q: "12. Explain what happens when the data-set is not linearly separable, and how logistic regression addresses this.",
          translation:
            "اشرح إيه اللي بيحصل لما البيانات مش linearly separable، وإزاي الانحدار اللوجستي بيتعامل مع المشكلة دي.",
          answer:
            "When the data is not linearly separable, no set of weights can perfectly classify all training examples using a linear decision rule.\n" +
            "Logistic regression addresses this by:\n" +
            "1) Defining a loss function (the cross-entropy loss LCE(y, t) = −t·log(y) − (1−t)·log(1−y)).\n" +
            "2) Finding weights that minimize the average loss over the training examples (using gradient descent), instead of trying to perfectly separate the data.\n" +
            "The result is a soft probabilistic prediction (between 0 and 1) rather than a hard 0/1 classification, which gracefully handles overlap between classes. The threshold 0.5 is then applied to convert probabilities into class labels.",
          tags: ["Logistic Regression", "Linear Separability", "Loss Function"],
          ref: "Lecture 05 — Data Isn't Linearly Separable & Logistic regression",
          likely: "high",
        },

        // ===================== Numerical / Computational Questions =====================
        {
          type: "essay",
          q: "1. (Numerical) Compute the sigmoid σ(z) for z = 0. What does the result mean?",
          translation:
            "(سؤال حسابي) احسب الـ sigmoid σ(z) لـ z = 0. إيه معنى النتيجة؟",
          answer:
            "Given: z = 0.\n" +
            "Formula: σ(z) = 1 / (1 + e^(−z)).\n" +
            "Step 1: e^(−0) = e^0 = 1.\n" +
            "Step 2: σ(0) = 1 / (1 + 1) = 1 / 2 = 0.5.\n" +
            "Result: σ(0) = 0.5.\n" +
            "Interpretation: when z = 0 (i.e., w⊤x + b = 0), the model is exactly on the decision boundary and assigns probability 0.5 to class 1 — maximum uncertainty. This is consistent with the threshold of 0.5.",
          tags: ["Sigmoid", "Numerical", "Decision Boundary"],
          ref: "Lecture 05 — Logistic Function / Sigmoid Function",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. (Numerical) For the AND function with w0 = −1.5, w1 = 1, w2 = 1, compute z and the predicted class y for the input x = (x0=1, x1=1, x2=0).",
          translation:
            "(سؤال حسابي) لدالة AND مع w0 = −1.5, w1 = 1, w2 = 1، احسب z والفئة المتوقعة y للمُدخل x = (1, 1, 0).",
          answer:
            "Given: w = (−1.5, 1, 1), x = (1, 1, 0).\n" +
            "Step 1 — Compute z = w⊤x = w0·x0 + w1·x1 + w2·x2.\n" +
            "  z = (−1.5)(1) + (1)(1) + (1)(0) = −1.5 + 1 + 0 = −0.5.\n" +
            "Step 2 — Apply threshold: y = 1 if z ≥ 0, else y = 0.\n" +
            "  Since z = −0.5 < 0, y = 0.\n" +
            "Result: z = −0.5, y = 0 (predicted class 0).\n" +
            "Verification: this matches the AND truth table (input (1,1,0) → output 0).",
          tags: ["AND Function", "Binary Linear Classification", "Numerical"],
          ref: "Lecture 05 — Modeling AND & Visualizing AND",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. (Numerical) For the AND function with w0 = −1.5, w1 = 1, w2 = 1, verify that the input x = (1, 1, 1) is classified correctly as class 1.",
          translation:
            "(سؤال حسابي) لدالة AND مع w0 = −1.5, w1 = 1, w2 = 1، تحقّق إن المُدخل x = (1, 1, 1) بيُصنّف صح كـ class 1.",
          answer:
            "Given: w = (−1.5, 1, 1), x = (1, 1, 1).\n" +
            "Step 1 — Compute z = w⊤x = w0·x0 + w1·x1 + w2·x2.\n" +
            "  z = (−1.5)(1) + (1)(1) + (1)(1) = −1.5 + 1 + 1 = 0.5.\n" +
            "Step 2 — Apply threshold: y = 1 if z ≥ 0, else y = 0.\n" +
            "  Since z = 0.5 ≥ 0, y = 1.\n" +
            "Result: z = 0.5, y = 1 (predicted class 1).\n" +
            "Verification: this matches the AND truth table (input (1,1,1) → output 1). The chosen weights correctly classify this example.",
          tags: ["AND Function", "Binary Linear Classification", "Numerical"],
          ref: "Lecture 05 — Modeling AND & Visualizing AND",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. (Numerical) Given a logistic regression model with weights w = (0.5, 2.0) (so w0 = 0.5, w1 = 2.0), and an input x = (1, 0.3), compute the predicted probability y = σ(w⊤x).",
          translation:
            "(سؤال حسابي) لنموذج انحدار لوجستي بأوزان w = (0.5, 2.0) (يعني w0 = 0.5, w1 = 2.0) ومُدخل x = (1, 0.3)، احسب الاحتمال المتوقع y = σ(w⊤x).",
          answer:
            "Given: w0 = 0.5, w1 = 2.0, x0 = 1, x1 = 0.3.\n" +
            "Step 1 — Compute z = w⊤x = w0·x0 + w1·x1 = (0.5)(1) + (2.0)(0.3) = 0.5 + 0.6 = 1.1.\n" +
            "Step 2 — Compute σ(z) = 1 / (1 + e^(−z)) = 1 / (1 + e^(−1.1)).\n" +
            "Step 3 — e^(−1.1) ≈ 0.3329.\n" +
            "Step 4 — σ(1.1) = 1 / (1 + 0.3329) = 1 / 1.3329 ≈ 0.7503.\n" +
            "Result: y ≈ 0.75.\n" +
            "Interpretation: the model assigns probability ~0.75 to class 1. Since 0.75 ≥ 0.5, the predicted class is 1.",
          tags: ["Logistic Regression", "Sigmoid", "Numerical"],
          ref: "Lecture 05 — Logistic regression (How does it work?)",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. (Numerical) For a logistic regression model, the predicted probability is y = 0.8 and the true label is t = 1. Compute the cross-entropy loss LCE(y, t).",
          translation:
            "(سؤال حسابي) لنموذج انحدار لوجستي، الاحتمال المتوقع y = 0.8 والفئة الحقيقية t = 1. احسب خسارة الـ cross-entropy LCE(y, t).",
          answer:
            "Given: y = 0.8, t = 1.\n" +
            "Formula: LCE(y, t) = −t·log(y) − (1−t)·log(1−y).\n" +
            "Step 1 — Substitute: LCE = −(1)·log(0.8) − (1−1)·log(1−0.8).\n" +
            "Step 2 — Simplify: LCE = −log(0.8) − 0·log(0.2) = −log(0.8).\n" +
            "Step 3 — Compute log(0.8) ≈ −0.2231 (natural log).\n" +
            "Step 4 — LCE ≈ −(−0.2231) = 0.2231.\n" +
            "Result: LCE(0.8, 1) ≈ 0.2231.\n" +
            "Interpretation: the loss is small because the prediction (0.8) is close to the true label (1). If y had been 0.99, the loss would be even smaller; if y had been 0.1, the loss would be large (~2.3).",
          tags: ["Logistic Regression", "Cross-Entropy Loss", "Numerical"],
          ref: "Lecture 05 — Gradient of Logistic Loss",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. (Numerical) In a logistic regression training step, the current weight is wj = 0.4, the predicted probability is y = 0.7, the true label is t = 1, the feature value is xj = 2.0, and the learning rate is α = 0.1. Compute the new value of wj after one gradient descent update.",
          translation:
            "(سؤال حسابي) في خطوة تدريب للانحدار اللوجستي، الوزن الحالي wj = 0.4، الاحتمال المتوقع y = 0.7، الفئة الحقيقية t = 1، قيمة الميزة xj = 2.0، ومعدل التعلم α = 0.1. احسب القيمة الجديدة لـ wj بعد تحديث واحد.",
          answer:
            "Given: wj = 0.4, y = 0.7, t = 1, xj = 2.0, α = 0.1.\n" +
            "Update rule (for a single example): wj_new = wj − α · (y − t) · xj.\n" +
            "Step 1 — Compute the gradient term: (y − t) · xj = (0.7 − 1) · 2.0 = (−0.3) · 2.0 = −0.6.\n" +
            "Step 2 — Multiply by α: α · (−0.6) = 0.1 · (−0.6) = −0.06.\n" +
            "Step 3 — Update: wj_new = 0.4 − (−0.06) = 0.4 + 0.06 = 0.46.\n" +
            "Result: wj_new = 0.46.\n" +
            "Interpretation: because y < t (model under-predicted), the gradient (y − t) is negative, so subtracting a negative value increases wj. This moves the prediction closer to the true label (t = 1).",
          tags: [
            "Logistic Regression",
            "Gradient Descent",
            "Numerical",
            "Update Rule",
          ],
          ref: "Lecture 05 — Gradient of Logistic Loss",
          likely: "high",
        },
      ],
    },
  ],
});
