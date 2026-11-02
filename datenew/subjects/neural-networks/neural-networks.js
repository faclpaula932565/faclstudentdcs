/* بيانات مادة: الشبكات العصبية (neural-networks)
   - المحاضرات (PDF) في lectures/  والأسئلة في questions/
   - المسارات دايمًا من جذر المشروع: datenew/subjects/neural-networks/lectures/lec-01.pdf
   - انسخي شكل المحاضرة/الأسئلة من مادة شغالة عندك (دليل صاحب المنصة، الخطوة 4 و5) */
subjects.push({
  name: "الشبكات العصبية",
  en: "Neural Networks",
  icon: "🧠",
  slug: "neural-networks",
  lectures: [
    /* { t:"المحاضرة 1 — العنوان", d:"وصف", id:"lec-01",
         pdf:"datenew/subjects/neural-networks/lectures/lec-01.pdf", questions:[] } */
    {
      id: "neural-networks-lecture-01",
      t: "المحاضرة الأولى: مقدمة في الشبكات العصبية (Neural Networks)",
      d: "تعريف الشبكات العصبية، النيرون البيولوجي والصناعي، البنية (input / hidden / output)، عملية التعلّم، دوال التنشيط (Binary / Linear threshold / Sigmoid / Gaussian / ReLU / Tanh)، المكونات الثمانية للشبكة، والبنى Feedforward وFeedback.",
      pdf: "datenew/subjects/neural-networks/lectures/Lec 1/Lec 1.pdf",
      pdf2: "datenew/subjects/neural-networks/questions/Questions on each lecture/Neural-Networks-Lecture-01-Questions.pdf",

      // فئات روابط منظمة - المحاضرة الأولى: مقدمة في الشبكات العصبية الاصطناعية (Introduction to Neural Networks)
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لمفاهيم الشبكات العصبية، الخلايا العصبية الاصطناعية، ودوال التنشيط",
          links: [
            {
              t: "شرح الشبكات العصبية الاصطناعية (Artificial Neural Networks)",
              d: "شرح تفصيلي لمفهوم الخلية العصبية الاصطناعية، الأوزان (Weights)، الانحياز (Bias)، ودوال التنشيط (Activation Functions)",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=bfmFfD2RIcg",
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
            "شروحات أكاديمية وعالمية لمفاهيم الأبنية والانتشار العكسي ودوال التنشيط",
          links: [
            {
              t: "3Blue1Brown - But what is a Neural Network?",
              d: "الشرح البصري الأفضل عالمياً لفهم الخلايا العصبية، الطبقات المخفية، وكيفية عمل الشبكات العصبية والتعلم",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=aircAruvnKk",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "StatQuest: Neural Networks Part 1",
              d: "شرح مبسط ومفصل للمفاهيم الرياضية الأساسية للشبكات العصبية والأوزان والانحياز ودوال التنشيط",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=CqOfi41LfDw",
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
            "مقالات ومرجعيات تفصيلية لمكونات الشبكات العصبية ودوال التنشيط وأنواعها",
          links: [
            {
              t: "DeepLearning.AI - Neural Networks and Deep Learning Resources",
              d: "مرجع عالمي موثوق لدراسة هندسة الشبكات العصبية، دوال التنشيط (ReLU, Sigmoid, Tanh)، وعمارة الشبكات",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.deeplearning.ai/",
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
            "أدوات تفاعلية ومحاكاة لتجربة الشبكات العصبية وتغيير الأوزان ودوال التنشيط بصرياً",
          links: [
            {
              t: "TensorFlow Playground - Interactive Neural Network",
              d: "أداة تفاعلية ممتازة من جوجل لتجربة بناء الشبكات العصبية ومراقبة تأثير دوال التنشيط والأوزان والطبقات المخفية",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح التفاعليات",
                  url: "https://playground.tensorflow.org/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Python & NumPy - Neural Network Implementation from Scratch",
              d: "مكتبات وأدوات البرمجة الأساسية لبناء خلية عصبية واختبار دوال التنشيط برمجياً",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ تحميل الأداة",
                  url: "https://numpy.org/",
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
          q: "1. Which description best fits a neural network, as defined in the lecture?",
          options: [
            "A rule-based system that follows fixed if-then statements written by human experts and never learns from data",
            "A database that stores records in related tables and answers queries on them",
            "A machine learning model of interconnected neurons that mimics brain functions and learns patterns from data",
            "A compiler that translates high-level source code into machine code for a processor",
          ],
          correct: 2,
          translation: "أي وصف يناسب الشبكة العصبية حسب تعريف المحاضرة؟",
          explanation:
            "المحاضرة بتعرّف الشبكة العصبية كنموذج تعلّم آلة من عقد (neurons) متصلة بتحاكي وظائف المخ، وبتتعلم الأنماط من البيانات. القواعد الثابتة وقواعد البيانات والـ compilers مش تعلّم.",
          tags: ["Neural Network", "Definition"],
          ref: "Lecture 01 — Slide 2",
        },
        {
          q: "2. What does synaptic efficacy mean?",
          options: [
            "How well the signal passes from the presynaptic to the postsynaptic neuron",
            "The number of axons that leave the body of a single neuron",
            "The size of the neuron's cell body and its nucleus",
            "The speed at which a neuron grows new dendrites over time",
          ],
          correct: 0,
          translation: "إيه معنى الـ synaptic efficacy؟",
          explanation:
            "الـ synapse هو الوصلة بين نيرونين، والـ synaptic efficacy بيعبّر عن مدى كفاءة تمرير الإشارة من النيرون الأول (presynaptic) للتاني (postsynaptic). وده اللي بتمثله الأوزان في النموذج الصناعي.",
          tags: ["Synapse", "Neuron Abstraction"],
          ref: "Lecture 01 — Slide 3",
        },
        {
          q: "3. In the artificial neuron, what do the connection weights w_ij model?",
          options: [
            "The synaptic efficacies of the various interneuron synapses",
            "The internal threshold of the neuron before activation",
            "The final output signal s_j of the neuron",
            "The number of different input sources n",
          ],
          correct: 0,
          translation:
            "في النيرون الصناعي، إيه اللي بتمثله أوزان الاتصال w_ij؟",
          explanation:
            "الأوزان w_ij بتحاكي كفاءة الـ synapses بين النيرونات. الـ threshold هو theta_j والـ output هو s_j، وn هو عدد المصادر.",
          tags: ["Weights", "Synaptic Efficacy"],
          ref: "Lecture 01 — Slide 6",
        },
        {
          q: "4. What does w_ij denote in the lecture's notation?",
          options: [
            "The weight from neuron j to neuron i",
            "The bias of neuron i",
            "The output signal of neuron j",
            "The weight from neuron i to neuron j",
          ],
          correct: 3,
          translation: "إيه معنى w_ij في ترميز المحاضرة؟",
          explanation:
            "الرمز w_ij بيمثل الوزن من النيرون i إلى النيرون j (i هو المصدر وj هو المستقبِل). عكس الاتجاه هو الاختيار الغلط الأقرب.",
          tags: ["Notation", "Weights"],
          ref: "Lecture 01 — Slide 6",
        },
        {
          q: "5. What is x_j in the equation x_j = sum_{i=1..n} w_ij s_i + theta_j?",
          options: [
            "A linear weighted aggregation of the impinging signals, modified by an internal threshold theta_j",
            "The output signal of neuron j after the activation function is applied to it",
            "The sum of the weights only, without using the inputs or the threshold",
            "The derivative of the activation function with respect to the weights",
          ],
          correct: 0,
          translation: "إيه هو x_j في المعادلة x_j = sum w_ij s_i + theta_j؟",
          explanation:
            "x_j هو التجميع الخطي الموزون للإشارات الداخلة مضافًا إليه الـ threshold. الـ output s_j بيطلع بعد تمرير x_j على الـ activation function.",
          tags: ["Net Input", "Artificial Neuron"],
          ref: "Lecture 01 — Slide 6",
        },
        {
          q: "6. Which layer of a neural network performs complex transformations and feature extraction?",
          options: [
            "The input layer",
            "The hidden layers",
            "The output layer",
            "The loss layer",
          ],
          correct: 1,
          translation:
            "أي طبقة في الشبكة العصبية بتعمل تحويلات معقدة واستخلاص للـ features؟",
          explanation:
            "الـ hidden layers هي اللي بتعمل التحويلات واستخلاص الـ features. الـ input layer بتستقبل البيانات الخام، والـ output layer بتطلع النتيجة النهائية.",
          tags: ["Network Structure", "Hidden Layers"],
          ref: "Lecture 01 — Slide 7",
        },
        {
          q: "7. Why is an activation function applied to the weighted sum plus bias of a neuron?",
          options: [
            "To reduce the number of weights in the network",
            "To introduce non-linearity",
            "To load the raw data into the input layer",
            "To compute the loss between predicted and actual outputs",
          ],
          correct: 1,
          translation:
            "ليه بنطبّق activation function على المجموع الموزون + الـ bias؟",
          explanation:
            "الـ activation function (زي ReLU وsigmoid وtanh) بتضيف non-linearity للشبكة. بدونها هتبقى الشبكة مجرد تحويل خطي.",
          tags: ["Activation Function", "Non-linearity"],
          ref: "Lecture 01 — Slide 9",
        },
        {
          q: "8. Which sequence correctly describes the training process of a neural network?",
          options: [
            "Backpropagation, forward propagation, loss calculation",
            "Loss calculation, backpropagation, forward propagation",
            "Forward propagation, loss calculation, backpropagation",
            "Forward propagation, backpropagation, loss calculation",
          ],
          correct: 2,
          translation: "أي ترتيب يصف عملية تدريب الشبكة العصبية صح؟",
          explanation:
            "الأول بنحسب الـ output من المدخلات (forward)، وبعدين نقيس الخطأ (loss)، وبعدين نعدّل الأوزان (backpropagation). الترتيبات التانية بتبدأ بالتعديل قبل ما يبقى فيه output أو loss.",
          tags: ["Training", "Backpropagation"],
          ref: "Lecture 01 — Slide 10",
        },
        {
          q: "9. What is the purpose of backpropagation?",
          options: [
            "Adjusting the weights to minimize the error, using methods such as gradient descent",
            "Computing the output of the network from the given inputs",
            "Measuring the error between the predicted and the actual outputs",
            "Receiving the raw data, such as the pixel values of an image",
          ],
          correct: 0,
          translation: "إيه هدف الـ backpropagation؟",
          explanation:
            "الـ backpropagation بتعدّل الأوزان لتقليل الخطأ باستخدام خوارزميات زي gradient descent. حساب الـ output هو forward propagation وقياس الخطأ هو loss calculation.",
          tags: ["Backpropagation", "Gradient Descent"],
          ref: "Lecture 01 — Slide 10",
        },
        {
          q: "10. Which type of neural network is suitable for sequential data such as text or time series?",
          options: [
            "Convolutional Neural Network (CNN)",
            "Feedforward Neural Network (FNN)",
            "Heteroassociator network",
            "Recurrent Neural Network (RNN)",
          ],
          correct: 3,
          translation:
            "أي نوع من الشبكات العصبية مناسب للبيانات المتسلسلة زي النص والـ time series؟",
          explanation:
            "الـ RNN مناسبة للبيانات المتسلسلة. الـ CNN بتُستخدم في معالجة الصور، والـ FNN بتمرر البيانات في اتجاه واحد.",
          tags: ["RNN", "Types of Networks"],
          ref: "Lecture 01 — Slide 11",
        },
        {
          q: "11. A network that associates vectors from one space with vectors of another space, f: R^n -> R^p, is called a:",
          options: [
            "autoassociator",
            "threshold logic unit",
            "stochastic neuron",
            "heteroassociator",
          ],
          correct: 3,
          translation:
            "الشبكة اللي بتربط متجهات من فراغ بمتجهات من فراغ تاني، f: R^n -> R^p، بتتسمى:",
          explanation:
            "الـ heteroassociator بتربط نمطين مختلفين (واحد مدخل والتاني مخرج). الـ autoassociator بتربط النمط بنفسه (R^n -> R^n).",
          tags: ["Heteroassociator", "Mappings"],
          ref: "Lecture 01 — Slide 35",
        },
        {
          q: "12. How is the activity aggregation rule of a neuron usually calculated?",
          options: [
            "As the dot product of the input vector and the weight vector",
            "As the maximum of the input signals, ignoring the weights",
            "As the sum of the weights without using the inputs",
            "As the difference between two output signals",
          ],
          correct: 0,
          translation:
            "إزاي بيتحسب الـ activity aggregation rule للنيرون عادةً؟",
          explanation:
            "الـ aggregation rule عادةً الـ dot product بين متجه المدخلات ومتجه الأوزان، والنتيجة هي مجموع الدخل الكلي قبل تطبيق الـ activation function.",
          tags: ["Aggregation Rule", "Dot Product"],
          ref: "Lecture 01 — Slide 32",
        },
        {
          q: "13. How does the binary threshold function produce its output?",
          options: [
            "It outputs 1 if x_j > 1 and 0 otherwise",
            "It outputs x_j itself when x_j is positive",
            "It outputs 1 if the total input x_j >= 0 and 0 if x_j < 0",
            "It outputs a value between -1 and 1 for every input",
          ],
          correct: 2,
          translation: "إزاي بتطلّع الـ binary threshold function مخرجاتها؟",
          explanation:
            "الدالة بتديّ 1 لو x_j أكبر من أو تساوي 0 وإلا 0، فهي نظام ON/OFF بحالتين ولذلك بتتسمى threshold logic unit. إخراج x_j نفسه هو ReLU.",
          tags: ["Binary Threshold", "Threshold Logic Unit"],
          ref: "Lecture 01 — Slide 16",
        },
        {
          q: "14. For a binary threshold neuron with x_j = q_j + theta_j, when does the neuron fire (output +1)?",
          options: [
            "When q_j >= theta_j",
            "When q_j < -theta_j",
            "When q_j >= -theta_j",
            "Only when q_j = 0",
          ],
          correct: 2,
          translation:
            "في neuron من نوع binary threshold حيث x_j = q_j + theta_j، متى بيطلّع الـ neuron القيمة +1؟",
          explanation:
            "بيطلّع 1 لما x_j >= 0 يعني q_j + theta_j >= 0 يعني q_j >= -theta_j، أي إننا بنقارن q_j بـ threshold هو سالب الـ bias. q_j < -theta_j بيدي 0.",
          tags: ["Threshold", "Bias"],
          ref: "Lecture 01 — Slide 18",
        },
        {
          q: "15. In the linear threshold activation function, the slope parameter alpha_j equals:",
          options: ["x_m", "1 / x_m", "1 / x_j", "lambda_j"],
          correct: 1,
          translation:
            "في الـ linear threshold activation function، معامل الميل alpha_j بيساوي:",
          explanation:
            "alpha_j = 1 / x_m، والدالة هي max(0, min(alpha_j x_j, 1)): صفر لو x_j <= 0، وخطية بين 0 وx_m، وواحد لو x_j >= x_m. lambda_j هو معامل الـ sigmoid.",
          tags: ["Linear Threshold", "Slope"],
          ref: "Lecture 01 — Slide 19",
        },
        {
          q: "16. What happens to the sigmoid function as the gain factor lambda_j tends to infinity?",
          options: [
            "It becomes a straight line through the origin",
            "It approaches the non-smooth binary threshold function",
            "It becomes a Gaussian bell shape centered at zero",
            "It always outputs exactly 0.5 for every input",
          ],
          correct: 1,
          translation:
            "إيه اللي بيحصل لدالة الـ sigmoid لما معامل الـ gain، lambda_j، يروح للـ infinity؟",
          explanation:
            "كلما زاد lambda بتبقى الدالة أحدّ (أكثر انحدارًا) وفي النهاية بتقرب من binary threshold function. مش بتبقى خط مستقيم ولا Gaussian.",
          tags: ["Sigmoid", "Gain Factor"],
          ref: "Lecture 01 — Slide 20",
        },
        {
          q: "17. Which set of properties describes the sigmoid function?",
          options: [
            "Monotonic, continuous, and bounded (usually between 0 and 1)",
            "Non-monotonic, discontinuous, and unbounded",
            "Monotonic, discontinuous, and bounded between -1 and 1",
            "Non-monotonic, continuous, and zero-centered",
          ],
          correct: 0,
          translation: "أي مجموعة من الخصائص تصف دالة الـ sigmoid؟",
          explanation:
            "الـ sigmoid دايمًا بتزيد (monotonic) ومن غير قفزات (continuous) وقيمها محصورة عادةً بين 0 و1 (bounded). المدى (-1, 1) هو للـ tanh.",
          tags: ["Sigmoid", "Properties"],
          ref: "Lecture 01 — Slide 20",
        },
        {
          q: "18. Which of the following activation functions is an example of a non-monotonic function?",
          options: ["Sigmoid", "ReLU", "Gaussian", "Binary threshold"],
          correct: 2,
          translation: "أي من دوال التنشيط دي مثال على دالة non-monotonic؟",
          explanation:
            "الـ Gaussian بتطلع لقمة عند المركز وبعدين تنزل (شكل جرس)، فهي non-monotonic. الـ sigmoid وReLU وbinary threshold مفيش فيها نزول.",
          tags: ["Gaussian", "Non-monotonic"],
          ref: "Lecture 01 — Slide 22",
        },
        {
          q: "19. What does increasing the spread factor sigma_j do to the Gaussian activation function?",
          options: [
            "It makes the function sharper (narrower)",
            "It shifts the function to the right along the activation axis",
            "It turns the function into a step function",
            "It makes the function more diffuse (wider)",
          ],
          correct: 3,
          translation:
            "إيه تأثير زيادة الـ spread factor، sigma_j، على الـ Gaussian activation function؟",
          explanation:
            "زيادة sigma بتخلي المنحنى أعرض وأكثر انتشارًا (diffuse)، وتقليلها بيخليه أحدّ. تغيير المركز c_j هو اللي بيحرّك المنحنى يمين أو شمال.",
          tags: ["Gaussian", "Spread Factor"],
          ref: "Lecture 01 — Slide 22",
        },
        {
          q: "20. What determines the output state (for example 0/1 or -1/1) of a stochastic neuron?",
          options: [
            "A fixed deterministic threshold at zero, with no randomness",
            "The number of hidden layers in the network",
            "A probabilistic function of its activation value, P(x_j)",
            "A randomly chosen set of weights at every step",
          ],
          correct: 2,
          translation:
            "إيه اللي بيحدد حالة الخرج (مثلًا 0/1 أو -1/1) في الـ stochastic neuron؟",
          explanation:
            "الـ stochastic neuron بتنتقل لإحدى حالتيها حسب دالة احتمالية في قيمة التنشيط P(x_j) = 1 / (1 + e^(-x_j / T)). التحديد الحتمي الثابت هو للـ binary threshold العادي.",
          tags: ["Stochastic Neuron", "Probability"],
          ref: "Lecture 01 — Slide 23",
        },
        {
          q: "21. What is a known drawback of the ReLU activation function?",
          options: [
            "Its output is strictly bounded between 0 and 1",
            "Dead neurons: once the output is 0, it might stay 0 forever",
            "It is much slower to compute than sigmoid",
            "It makes the vanishing gradient problem worse than tanh",
          ],
          correct: 1,
          translation: "إيه العيب المعروف في دالة التنشيط ReLU؟",
          explanation:
            "العيب هو الـ dead neurons (dying ReLU): لو الناتج بقى 0 ممكن يفضل 0 دايمًا. ReLU سريعة، وبتقلل مشكلة الـ vanishing gradient، ومخرجاتها مش bounded.",
          tags: ["ReLU", "Dead Neurons"],
          ref: "Lecture 01 — Slide 25",
        },
        {
          q: "22. According to the comparison table, which activation function is zero-centered?",
          options: ["ReLU", "Sigmoid", "All three are zero-centered", "Tanh"],
          correct: 3,
          translation: "حسب جدول المقارنة، أي دالة تنشيط تكون zero-centered؟",
          explanation:
            "الـ tanh مداها (-1, 1) وهي zero-centered، أما ReLU (مداها [0, infinity)) وsigmoid (مداها (0, 1)) فمش zero-centered.",
          tags: ["Tanh", "Zero-centered"],
          ref: "Lecture 01 — Slide 27",
        },
        {
          q: "23. According to the lecture, which activation function is typically used in the output layer for binary classification?",
          options: ["Sigmoid", "ReLU", "Gaussian", "Linear threshold"],
          correct: 0,
          translation:
            "حسب المحاضرة، أي دالة تنشيط بتُستخدم عادةً في الـ output layer للـ binary classification؟",
          explanation:
            "الـ sigmoid بتُستخدم في الـ output layer للـ binary classification لأن مخرجاتها بين 0 و1. أما ReLU فهي الأشهر للـ hidden layers في الشبكات العميقة.",
          tags: ["Sigmoid", "When to Use"],
          ref: "Lecture 01 — Slide 28",
        },
        {
          q: "24. In the pattern of connectivity, what does an inhibitory connection (-) do?",
          options: [
            "It increases the activation of the next neuron",
            "It means there is no connection between the neurons",
            "It copies the activation of the previous neuron unchanged",
            "It decreases the activation of the next neuron",
          ],
          correct: 3,
          translation:
            "في الـ pattern of connectivity، إيه اللي بتعمله الـ inhibitory connection (-)؟",
          explanation:
            "الـ inhibitory (-) بتقلل تنشيط النيرون التالي، والـ excitatory (+) بتزوّده، والـ absent (0) معناها مفيش اتصال.",
          tags: ["Pattern of Connectivity", "Inhibitory"],
          ref: "Lecture 01 — Slide 32",
        },
        {
          q: "25. What distinguishes a feedback (recurrent) architecture from a feedforward architecture?",
          options: [
            "The network has no hidden layers",
            "Loops occur in the network because of feedback connections",
            "The neurons use only the binary threshold function",
            "Data is passed through only one neuron",
          ],
          correct: 1,
          translation:
            "إيه اللي بيميز الـ feedback (recurrent) architecture عن الـ feedforward؟",
          explanation:
            "في الـ feedforward مفيش loops في الشبكة، أما في الـ feedback فبتحصل loops بسبب وصلات الـ feedback. عدد الـ hidden layers أو نوع الـ activation ملوش علاقة بالتمييز ده.",
          tags: ["Feedforward", "Feedback", "Architecture"],
          ref: "Lecture 01 — Slide 34",
        },
        {
          type: "essay",
          q: "1. What is a neural network? Describe its structure (layers), the function of each neuron, and some example use cases.",
          translation:
            "إيه هي الشبكة العصبية؟ صِف بنيتها (الطبقات) ووظيفة كل neuron وبعض أمثلة الاستخدام.",
          answer:
            "Neural networks are machine learning models that mimic complex functions of the human brain. They consist of interconnected nodes called neurons that process data, learn patterns, and enable tasks such as pattern recognition, decision making, or predicting outcomes.\n" +
            "Structure: layers of interconnected neurons (nodes): the input layer receives the raw data (e.g., pixel values of an image); hidden layers perform complex transformations and feature extraction; the output layer produces the final result (e.g., class label, value prediction).\n" +
            "Neuron function: each neuron computes a weighted sum of its inputs, adds a bias, and passes the result through an activation function (e.g., ReLU, sigmoid, tanh) to introduce non-linearity.\n" +
            "Use cases: image and speech recognition, natural language processing (NLP), medical diagnosis, financial forecasting, self-driving cars.",
          tags: ["Neural Network", "Structure"],
          ref: "Lecture 01 — Slides 2 and 7-12",
        },
        {
          type: "essay",
          q: "2. Explain the neuron abstraction: how the biological neuron is modeled by an artificial neuron, including the role of weights, threshold and the equation x_j.",
          translation:
            "اشرح تجريد النيرون: إزاي النيرون البيولوجي بيتمثّل بنيرون صناعي، مع دور الأوزان والـ threshold ومعادلة x_j.",
          answer:
            "Biological neurons send signals by changing them from electrical to chemical and then back to electrical. Each connection between two neurons is a synapse with a synaptic efficacy: how well the signal is passed from the presynaptic to the postsynaptic neuron.\n" +
            "Artificial neuron: the j-th neuron receives input signals s_i from possibly n sources. The connection weights w_ij model the synaptic efficacies; w_ij is the weight from neuron i to neuron j.\n" +
            "x_j = sum_{i=1..n} w_ij s_i + theta_j is a linear weighted aggregation of the impinging signals, modified by an internal threshold theta_j (the bias, w_0j with s_0 = +1).\n" +
            "The output signal is s_j = S(x_j), where S is the activation (signal) function.",
          tags: ["Artificial Neuron", "Weights", "Threshold"],
          ref: "Lecture 01 — Slides 3-6 and 13",
        },
        {
          type: "essay",
          q: "3. Describe the learning process (training) of a neural network.",
          translation: "اشرح عملية التعلّم (التدريب) في الشبكة العصبية.",
          answer:
            "Neural networks learn through training, which involves three steps:\n" +
            "1. Forward propagation: computing the output from the inputs.\n" +
            "2. Loss calculation: measuring the error between the predicted and the actual outputs.\n" +
            "3. Backpropagation: adjusting the weights to minimize the error, using algorithms such as gradient descent.\n" +
            "The cycle is repeated so that the weights improve and the loss decreases.",
          tags: ["Training", "Backpropagation"],
          ref: "Lecture 01 — Slide 10",
        },
        {
          type: "essay",
          q: "4. List the main types of neural networks mentioned in the lecture and what each is used for.",
          translation:
            "اذكر الأنواع الرئيسية للشبكات العصبية المذكورة في المحاضرة واستخدام كل نوع.",
          answer:
            "- Feedforward Neural Network (FNN): data flows in one direction.\n" +
            "- Convolutional Neural Network (CNN): used in image processing.\n" +
            "- Recurrent Neural Network (RNN): suitable for sequential data such as text or time series.\n" +
            "- Deep Neural Network (DNN): a network with multiple hidden layers.\n" +
            "Example uses: image and speech recognition, NLP, medical diagnosis, financial forecasting, self-driving cars.",
          tags: ["FNN", "CNN", "RNN", "DNN"],
          ref: "Lecture 01 — Slides 11-12",
        },
        {
          type: "essay",
          q: "5. Explain the role of the activation (signal) function and the binary threshold function, including the interpretation of the threshold.",
          translation:
            "اشرح دور الـ activation (signal) function ودالة الـ binary threshold مع تفسير الـ threshold.",
          answer:
            "After computing the total input x_j, the neuron passes it through an activation (signal) function S(x), giving the output signal s_j = S(x_j).\n" +
            "Binary threshold function: S(x_j) = 1 if x_j >= 0, and 0 if x_j < 0. The output is only 0 or 1, a two-state ON/OFF system, hence the name threshold logic unit.\n" +
            "Interpretation of threshold: x_j = sum_{i=1..n} w_ij s_i + w_0j = q_j + theta_j, where q_j is the weighted input and theta_j the bias. The neuron fires (+1) if x_j >= 0, i.e., q_j >= -theta_j; it outputs 0 if q_j < -theta_j. So the neuron compares q_j to a threshold equal to the negative of the bias. For theta_j = +3, the neuron fires when q_j >= -3.",
          tags: ["Activation Function", "Binary Threshold"],
          ref: "Lecture 01 — Slides 13-18",
        },
        {
          type: "essay",
          q: "6. Describe the linear threshold and the sigmoidal activation functions, including their formulas and parameters.",
          translation:
            "صِف دالتي الـ linear threshold والـ sigmoidal مع قوانينهم ومعاملاتهم.",
          answer:
            "Linear threshold function: S_j(x_j) = 0 for x_j <= 0; alpha_j x_j for 0 < x_j < x_m; 1 for x_j >= x_m, i.e., S_j(x_j) = max(0, min(alpha_j x_j, 1)). The slope parameter is alpha_j = 1/x_m (the lecture's figure uses alpha_j = 0.5).\n" +
            "Sigmoidal function: S_j(x_j) = 1 / (1 + e^(-lambda_j x_j)), where lambda_j is a gain scale factor. As lambda_j tends to infinity, the smooth logistic function approaches the binary threshold function.\n" +
            "Useful properties of the sigmoid: it is monotonic (always increases), continuous (no sudden jumps), and bounded (usually between 0 and 1).",
          tags: ["Linear Threshold", "Sigmoid"],
          ref: "Lecture 01 — Slides 19-21",
        },
        {
          type: "essay",
          q: "7. Explain the Gaussian activation function and stochastic neurons.",
          translation:
            "اشرح الـ Gaussian activation function والـ stochastic neurons.",
          answer:
            "Gaussian function: S_j(x_j) = exp( -(x_j - c_j)^2 / (2 sigma_j^2) ), where sigma_j is the spread factor and c_j is the center. Varying the spread makes the function sharper or more diffuse; changing the center shifts it right or left along the activation axis. It is an example of a non-monotonic activation function (bell-shaped, useful in radial basis function networks).\n" +
            "Stochastic neurons: the signal is two-state, S_j in {0, 1} or {-1, 1}. The neuron switches into these states depending on a probabilistic function of its activation value: P(x_j) = 1 / (1 + e^(-x_j / T)), where T is a temperature parameter.",
          tags: ["Gaussian", "Stochastic Neuron"],
          ref: "Lecture 01 — Slides 22-23",
        },
        {
          type: "essay",
          q: "8. Compare ReLU, sigmoid and tanh (range, zero-centering, gradient issues, speed) and state when to use each.",
          translation:
            "قارن بين ReLU وsigmoid وtanh (المدى، الـ zero-centering، مشاكل الـ gradient، السرعة) واذكر متى تُستخدم كل واحدة.",
          answer:
            "ReLU: S(x) = max(0, x); output range [0, infinity); not zero-centered; non-linear; gradient issue: dying ReLU (dead neurons); fast; simple, helps reduce vanishing gradient, but not bounded.\n" +
            "Sigmoid: range (0, 1); not zero-centered; non-linear; vanishing gradient; slower.\n" +
            "Tanh: f(x) = (e^x - e^-x) / (e^x + e^-x) = sinh(x)/cosh(x); range (-1, 1); zero-centered; non-linear; vanishing gradient; slower.\n" +
            "When to use: ReLU is the most common and best for hidden layers in deep networks; sigmoid for binary classification in the output layer; tanh can be better than sigmoid in hidden layers when a zero-centered output helps. Softmax is used for multi-class classification. Choosing the right function depends on the task.",
          tags: ["ReLU", "Sigmoid", "Tanh"],
          ref: "Lecture 01 — Slides 24-29",
        },
        {
          type: "essay",
          q: "9. List and explain the eight components of neural networks mentioned in the lecture.",
          translation:
            "اذكر واشرح المكونات الثمانية للشبكات العصبية المذكورة في المحاضرة.",
          answer:
            "1. Neurons: input (receive external data), hidden (compute intermediate functions and extract patterns), output (generate final results).\n" +
            "2. Activation state vector: X = (x_1, ..., x_n)^T in R^n, the activation levels of the neurons.\n" +
            "3. Signal (activation) function: generates the output signal of a neuron from its activation.\n" +
            "4. Pattern of connectivity: how neurons are connected; connections can be excitatory (+, increases the next neuron's activation), inhibitory (-, decreases it), or absent (0).\n" +
            "5. Activity aggregation rule: how a neuron combines input signals, usually the dot product of the input vector and the weight vector, giving the total input before the activation function.\n" +
            "6. Activation rule: determines the new activation level of a neuron from its current activation and its external inputs.\n" +
            "7. Learning rule: modifies connection strengths based on external stimuli and network performance, aiming to improve performance.\n" +
            "8. Environment: deterministic (noiseless) or stochastic (noisy).",
          tags: ["Eight Components", "Connectivity"],
          ref: "Lecture 01 — Slides 30-33",
        },
        {
          type: "essay",
          q: "10. Explain feedforward and feedback architectures, and the difference between heteroassociators and autoassociators.",
          translation:
            "اشرح معماريتي feedforward وfeedback والفرق بين heteroassociators وautoassociators.",
          answer:
            "Local groups of neurons can be connected in either a feedforward architecture, in which the network has no loops, or a feedback (recurrent) architecture, in which loops occur because of feedback connections.\n" +
            "Heteroassociator: a multilayered network that associates vectors from one space with vectors of another space, f: R^n -> R^p (maps two different patterns, one as input and the other as output).\n" +
            "Autoassociator: when the neurons in a single field connect back onto themselves, the network associates a single pattern in R^n with itself, f: R^n -> R^n.\n" +
            "The figures show a feedforward heteroassociator, a feedback autoassociator and a feedback heteroassociator.",
          tags: ["Feedforward", "Feedback", "Autoassociator"],
          ref: "Lecture 01 — Slides 34-35",
        },
        {
          type: "essay",
          q: "11. Calculation: A neuron has inputs s = (1, 0, 1), weights w = (0.5, -0.3, 0.8) and threshold theta = -1, and uses the binary threshold function. Compute x_j and the output. Then repeat for theta = -2.",
          translation:
            "مسألة حسابية: neuron مدخلاته s = (1, 0, 1) وأوزانه w = (0.5, -0.3, 0.8) والـ threshold theta = -1، وبيستخدم binary threshold function. احسب x_j والخرج، وبعدين كرر الحساب لـ theta = -2.",
          answer:
            "Formula: x_j = sum w_ij s_i + theta_j, output = 1 if x_j >= 0, else 0.\n" +
            "q_j = 0.5 x 1 + (-0.3) x 0 + 0.8 x 1 = 1.3.\n" +
            "Case theta = -1: x_j = 1.3 - 1 = 0.3 >= 0, so the output is 1 (equivalently q_j = 1.3 >= -theta = 1).\n" +
            "Case theta = -2: x_j = 1.3 - 2 = -0.7 < 0, so the output is 0 (equivalently q_j = 1.3 < -theta = 2).\n" +
            "A more negative bias raises the firing threshold.",
          tags: ["Net Input", "Binary Threshold"],
          ref: "Lecture 01 — Slides 5-6 and 16-18",
        },
        {
          type: "essay",
          q: "12. Calculation: For the linear threshold function with alpha_j = 0.5 (so x_m = 2), compute the output for x_j = -1, x_j = 1.2 and x_j = 3.",
          translation:
            "مسألة حسابية: للـ linear threshold function بـ alpha_j = 0.5 (يعني x_m = 2)، احسب الخرج لـ x_j = -1 وx_j = 1.2 وx_j = 3.",
          answer:
            "Formula: S_j(x_j) = max(0, min(alpha_j x_j, 1)), with alpha_j = 1/x_m = 0.5, so x_m = 2.\n" +
            "x_j = -1: alpha x = -0.5; min(-0.5, 1) = -0.5; max(0, -0.5) = 0. Output = 0 (since x_j <= 0).\n" +
            "x_j = 1.2: alpha x = 0.6; min(0.6, 1) = 0.6; max(0, 0.6) = 0.6. Output = 0.6 (linear region 0 < x_j < 2).\n" +
            "x_j = 3: alpha x = 1.5; min(1.5, 1) = 1; output = 1 (saturated since x_j >= x_m = 2).",
          tags: ["Linear Threshold"],
          ref: "Lecture 01 — Slide 19",
        },
        {
          type: "essay",
          q: "13. Calculation: Using the sigmoid S(x) = 1 / (1 + e^(-lambda x)), compute the output for (lambda = 1, x = 0), (lambda = 1, x = 2), (lambda = 1, x = -2) and (lambda = 3, x = 1).",
          translation:
            "مسألة حسابية: باستخدام الـ sigmoid S(x) = 1 / (1 + e^(-lambda x))، احسب الخرج للحالات (lambda = 1, x = 0) و(lambda = 1, x = 2) و(lambda = 1, x = -2) و(lambda = 3, x = 1).",
          answer:
            "lambda = 1, x = 0: S = 1 / (1 + e^0) = 1/2 = 0.5.\n" +
            "lambda = 1, x = 2: S = 1 / (1 + e^-2) = 1 / (1 + 0.1353) = 0.881.\n" +
            "lambda = 1, x = -2: S = 1 / (1 + e^2) = 1 / (1 + 7.389) = 0.119.\n" +
            "lambda = 3, x = 1: S = 1 / (1 + e^-3) = 1 / (1 + 0.0498) = 0.953.\n" +
            "A larger gain lambda gives a steeper curve (closer to the binary threshold function); all outputs stay inside (0, 1).",
          tags: ["Sigmoid", "Gain Factor"],
          ref: "Lecture 01 — Slides 20-21",
        },
        {
          type: "essay",
          q: "14. Calculation: Compute the outputs of ReLU and tanh for the inputs x = -3, x = 0 and x = 2, and state the output range of each function.",
          translation:
            "مسألة حسابية: احسب خرج الـ ReLU والـ tanh للمدخلات x = -3 وx = 0 وx = 2، واذكر مدى الخرج لكل دالة.",
          answer:
            "ReLU(x) = max(0, x): ReLU(-3) = 0; ReLU(0) = 0; ReLU(2) = 2. Range: [0, infinity).\n" +
            "tanh(x) = (e^x - e^-x) / (e^x + e^-x): tanh(-3) = (0.0498 - 20.086) / (0.0498 + 20.086) = -0.995; tanh(0) = 0; tanh(2) = (7.389 - 0.1353) / (7.389 + 0.1353) = 0.964. Range: (-1, 1).\n" +
            "Note: tanh is zero-centered and saturates at -1 and +1, while ReLU is not bounded above.",
          tags: ["ReLU", "Tanh"],
          ref: "Lecture 01 — Slides 24-27",
        },
        {
          type: "essay",
          q: "15. Calculation: Compute the Gaussian activation S(x) = exp(-(x - c)^2 / (2 sigma^2)) with c = 3 and sigma = 2 for x = 3, x = 5 and x = 0. Then compute the stochastic neuron probability P(x) = 1 / (1 + e^(-x/T)) for T = 2 with x = 2 and x = -2.",
          translation:
            "مسألة حسابية: احسب الـ Gaussian activation بـ c = 3 وsigma = 2 لـ x = 3 وx = 5 وx = 0. وبعدين احسب احتمال الـ stochastic neuron بـ T = 2 لـ x = 2 وx = -2.",
          answer:
            "Gaussian (c = 3, sigma = 2, 2 sigma^2 = 8):\n" +
            "x = 3: exp(0) = 1 (maximum at the center).\n" +
            "x = 5: exp(-(2)^2 / 8) = exp(-0.5) = 0.607.\n" +
            "x = 0: exp(-(-3)^2 / 8) = exp(-1.125) = 0.325.\n" +
            "The function is symmetric around c = 3 and non-monotonic.\n" +
            "Stochastic neuron (T = 2):\n" +
            "x = 2: P = 1 / (1 + e^(-2/2)) = 1 / (1 + e^-1) = 1 / (1 + 0.368) = 0.731.\n" +
            "x = -2: P = 1 / (1 + e^(1)) = 1 / (1 + 2.718) = 0.269.\n" +
            "So the neuron takes the state 1 with probability 0.731 when x = 2, and with probability 0.269 when x = -2.",
          tags: ["Gaussian", "Stochastic Neuron"],
          ref: "Lecture 01 — Slides 22-23",
        },
      ],
    },
    {
      id: "neural-networks-lecture-02",
      t: "المحاضرة 2: مقدمة في الشبكات العصبية",
      d: "بنك أسئلة شامل لمحاضرة Introduction to Neural Networks يغطي: تعريف الشبكة العصبية، العصبون الاصطناعي، طبقات الشبكة، دوال التفعيل (Binary Threshold, Linear Threshold, Sigmoid, Gaussian, ReLU, Tanh)، المكونات الثمانية للشبكة، أنواع الشبكات (FNN, CNN, RNN, DNN)، والمعمارية Feedforward vs Feedback، والمخططات Heteroassociator vs Autoassociator.",
      pdf: "datenew/subjects/neural-networks/lectures/Lec 2/Lec 2.pdf",
      pdf2: "datenew/subjects/neural-networks/questions/Questions on each lecture/Lecture-02-Questions.pdf",
      // المحاضرة: Introduction to Neural Networks — مقدمة في الشبكات العصبية، العصبون الاصطناعي، دوال التفعيل (Binary Threshold, Linear Threshold, Sigmoid, Gaussian, ReLU, Tanh)، المكونات الثمانية، أنواع الشبكات (FNN, CNN, RNN, DNN)، والمعمارية (Feedforward vs Feedback)

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "روابط بحث في يوتيوب بالعربي لتأسيس فهم الشبكات العصبية ودوال التفعيل، لأن مفيش قناة عربية واحدة مؤكدة تغطي كل مفاهيم المحاضرة، فالأفضل تبحث بنفسك وتختار اللي يناسبك.",
          links: [
            {
              t: "🔎 بحث في يوتيوب: شرح الشبكات العصبية بالعربي",
              d: "رابط بحث مش فيديو محدد. بيطلع قائمة فيديوهات عربية كتير عن Neural Networks وأنواعها وكيفية عمل العصبون الاصطناعي، اللي هو الموضوع الأساسي للمحاضرة. اختار فيديو بشرح واضح للـ Input/Hidden/Output Layers.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=شرح+الشبكات+العصبية+neural+networks+بالعربي",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: دوال التفعيل activation functions",
              d: "رابط بحث مش فيديو محدد. بيطلع فيديوهات عربية عن دوال التفعيل زي Sigmoid و ReLU و Tanh والـ Binary Threshold، وهي الجزء اللي الدكتور ركّز عليه في شرائح كتير. ميزة البحث إنك تلاقي شرح من قنوات مختلفة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=شرح+دوال+التفعيل+activation+functions+sigmoid+relu+tanh",
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
            "فيديوهات عالمية ممتازة بتفسّر الشبكات العصبية بصرياً وبأمثلة تفاعلية، أهمها سلسلة 3Blue1Brown الشهيرة اللي بتربط بين الدماغ البشري والشبكة الاصطناعية.",
          links: [
            {
              t: "3Blue1Brown — But what is a Neural Network? (Playlist)",
              d: "سلسلة فيديوهات شهيرة من Grant Sanderson بتفسر الشبكات العصبية بصرياً عبر مثال التعرف على الأرقام المكتوبة بخط اليد. بتربط مباشرة بمفاهيم المحاضرة: العصبونات، الطبقات (Input/Hidden/Output)، ودالة التفعيل Sigmoid.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ مشاهدة السلسلة",
                  url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "3Blue1Brown — Lesson Page: But what is a Neural Network?",
              d: "الصفحة الرسمية للدرس على موقع 3Blue1Brown فيها الشرح المكتوب للفيديو مع تطبيق تفاعلي للتعرف على الأرقام. بتفيد في فهم بنية الشبكة والـ Sigmoid Squishification المذكور في المحاضرة.",
              icon: "🌍",
              actions: [
                {
                  label: "📖 فتح الدرس",
                  url: "https://www.3blue1brown.com/lessons/neural-networks",
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
            "مواقع مرجعية موثوقة بتشرح مفاهيم المحاضرة بالتفصيل: تعريف الشبكة العصبية، الأوزان والـ Bias، دوال التفعيل، وأنواع الشبكات (FNN, CNN, RNN, DNN).",
          links: [
            {
              t: "GeeksforGeeks — Introduction to Neural Networks (Beginner Guide)",
              d: "مقال تعليمي شامل يبدأ من تعريف الشبكة العصبية كمقلّد للدماغ البشري، ثم يشرح الطبقات (Input/Hidden/Output) وعملية التعلم (Forward propagation, Loss, Backpropagation). بيطابق ترتيب محتوى المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح المقال",
                  url: "https://www.geeksforgeeks.org/deep-learning/neural-networks-a-beginners-guide",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "GeeksforGeeks — Activation Functions in Neural Networks",
              d: "مقال تفصيلي عن دوال التفعيل (Activation Functions) زي Sigmoid و ReLU و Tanh ودورها في إدخال الـ Non-linearity. بيمسك نفس موضوع شرائح 13-15 و 24-28 في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح المقال",
                  url: "https://www.geeksforgeeks.org/machine-learning/activation-functions-neural-networks",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "GeeksforGeeks — Types of Neural Networks",
              d: "مقال يفصّل أنواع الشبكات العصبية الأربعة المذكورة في المحاضرة: FNN, CNN, RNN, DNN، مع شرح كل نوع واستخداماته. مفيد جداً لسؤال المقارنة المتوقع في الامتحان.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح المقال",
                  url: "https://www.geeksforgeeks.org/deep-learning/types-of-neural-networks",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "IBM — What is a Neural Network?",
              d: "شرح رسمي من IBM للشبكات العصبية بيغطي الطبقات، الأوزان والـ Bias، دوال التفعيل (ReLU, Sigmoid, Tanh)، وأنواع الشبكات (CNN, RNN). مصدر موثوق بيكمّل المحاضرة بصناعي.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.ibm.com/think/topics/neural-networks",
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
            "أدوات تفاعلية تقدر تجرب عليها الشبكات العصبية بنفسك وتشوف تأثير دوال التفعيل وعدد الطبقات على التعلم بشكل مرئي.",
          links: [
            {
              t: "TensorFlow Playground — Neural Network Visualization",
              d: "أداة تفاعلية من Google تقدر تبني شبكة عصبية في المتصفح، تغيّر عدد الطبقات والعصبونات، تختار دالة التفعيل (ReLU, Sigmoid, Tanh, Linear)، وتشوف الشبكة وهيبتتعلم لحظياً. ممتازة لفهم تأثير كل دالة تفعيل عملياً.",
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
              t: "Google ML Crash Course — Neural Networks (Arabic)",
              d: "كورس تعليمي من Google فيه شرح تفاعلي للشبكات العصبية ودوال التفعيل والـ Backpropagation، متاح بالعربي عبر تغيير اللغة. مفيد لربط النظري بالعملي مع تمارين وتطبيقات.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الكورس",
                  url: "https://developers.google.com/machine-learning/crash-course/neural-networks/activation-functions?hl=ar",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },
      ],

      questions: [
        // ==================== MCQ Questions (1-36) ====================
        {
          q: "1. What is the primary inspiration behind neural networks?",
          options: [
            "The human brain",
            "Statistical models",
            "Computer architecture",
            "Graph theory",
          ],
          correct: 0,
          translation: "ما هو الإلهام الأساسي وراء الشبكات العصبية؟",
          explanation:
            "الإجابة الصحيحة هي العقل البشري لأن الشبكات العصبية بتقلد وظائف الدماغ المعقدة. الاختيارات التانية غلط: النماذج الإحصائية والإلكترونية مفيهاش فكرة المحاكاة البيولوجية للخلايا العصبية.",
          tags: ["Neural Network Definition", "Biological Inspiration"],
          ref: "Lecture 2 — Slide 2 (What is a Neural Network?)",
          likely: "high",
        },
        {
          q: "2. In biological neurons, the connection between two neurons is called:",
          options: ["Axon", "Synapse", "Dendrite", "Nucleus"],
          correct: 1,
          translation:
            "في الخلايا العصبية البيولوجية، الاتصال بين خليتين عصبيتين بيتسمى:",
          explanation:
            "الصحيح هو المشبق (Synapse) لأنه النقطة اللي بتحول الإشارة من خلية لأخرى. الـ Axon هو اللي بينقل الإشارة جوه الخلية، والـ Dendrite بيستقبل الإشارات، والـ Nucleus هو نواة الخلية.",
          tags: ["Neuron Abstraction", "Synapse"],
          ref: "Lecture 2 — Slide 3 (Neuron Abstraction)",
          likely: "high",
        },
        {
          q: '3. The term "synaptic efficacy" refers to:',
          options: [
            "The speed of electrical signals in the brain",
            "The number of neurons in a network",
            "How well a signal is passed from the presynaptic to the postsynaptic neuron",
            "The chemical composition of a neuron",
          ],
          correct: 2,
          translation: 'مصطلح "synaptic efficacy" بيشير إلى:',
          explanation:
            "الصحيح هو مدى كفاءة انتقال الإشارة من العصبون قبل المشبقي للعصبون بعد المشبقي. ده بيمثل فكرة الأوزان في الشبكات العصبية الاصطناعية. باقي الاختيارات بتعريفات تانية ملهاش علاقة بالكفاءة المشبقية.",
          tags: ["Neuron Abstraction", "Synaptic Efficacy"],
          ref: "Lecture 2 — Slide 3 (Neuron Abstraction)",
          likely: "high",
        },
        {
          q: "4. In an artificial neuron, what does the symbol wij represent?",
          options: [
            "The bias of neuron j",
            "The activation function of neuron j",
            "The input signal from neuron i",
            "The connection weight from neuron i to neuron j",
          ],
          correct: 3,
          translation: "في العصبون الاصطناعي، الرمز wij بيمثل إيه؟",
          explanation:
            "الصحيح هو وزن الاتصال من العصبون i للعصبون j، وده بيمثل الـ synaptic efficacy البيولوجية. الـ bias هو θj، ودالة التفعيل S(xj)، والإشارة هي si.",
          tags: ["Artificial Neuron", "Weights"],
          ref: "Lecture 2 — Slide 6 (Artificial Neuron)",
          likely: "high",
        },
        {
          q: "5. The total input xj to an artificial neuron is computed as:",
          options: [
            "A linear weighted aggregation of inputs modified by an internal threshold",
            "A nonlinear function of all inputs",
            "The product of all input signals",
            "The maximum of all input signals",
          ],
          correct: 0,
          translation: "المدخل الكلي xj للعصبون الاصطناعي بيُحسب إزاي؟",
          explanation:
            "الصحيح هو تجميع خطي موزون للمدخلات متعدّل بحد داخلي θj. ده بيتكتب xj = Σ(wij*si) + θj. باقي الاختيارات غلط لأنها بتوصف دوال تانية (nonlinear, product, max).",
          tags: ["Artificial Neuron", "Weighted Sum"],
          ref: "Lecture 2 — Slide 6 (Artificial Neuron)",
          likely: "high",
        },
        {
          q: "6. Which layer of a neural network is responsible for receiving raw data?",
          options: [
            "Hidden layer",
            "Input layer",
            "Output layer",
            "Activation layer",
          ],
          correct: 1,
          translation:
            "أي طبقة في الشبكة العصبية مسؤولة عن استقبال البيانات الخام؟",
          explanation:
            "الصحيح هي طبقة الإدخال (Input Layer) لأنها بتستقبل البيانات الخام زي قيم البكسل. الطبقة المخفية بتعمل التحويلات، والمخرج بيطلع النتيجة النهائية.",
          tags: ["Network Structure", "Input Layer"],
          ref: "Lecture 2 — Slide 7 (Structure)",
          likely: "high",
        },
        {
          q: "7. What is the main role of the hidden layers in a neural network?",
          options: [
            "To receive the raw input data",
            "To produce the final prediction",
            "To perform complex transformations and feature extraction",
            "To store the training dataset",
          ],
          correct: 2,
          translation:
            "إيه هو الدور الأساسي للطبقات المخفية في الشبكة العصبية؟",
          explanation:
            "الصحيح إنها بتعمل التحويلات المعقدة واستخلاص الميزات (feature extraction). الطبقة الأولى بتجيب البيانات الخام، والأخيرة بتطلع النتيجة النهائية، أما المخفية فبتتعامل مع التمثيلات الوسيطة.",
          tags: ["Network Structure", "Hidden Layers"],
          ref: "Lecture 2 — Slide 7 (Structure)",
          likely: "high",
        },
        {
          q: "8. What is the main purpose of applying an activation function in a neuron?",
          options: [
            "To compute the weighted sum of inputs",
            "To initialize the connection weights",
            "To reduce the number of parameters",
            "To introduce non-linearity into the network",
          ],
          correct: 3,
          translation: "إيه هو الهدف الأساسي من تطبيق دالة التفعيل في العصبون؟",
          explanation:
            "الصحيح هو إدخال اللاخطية (non-linearity) عشان الشبكة تقدر تتعلم علاقات معقدة. لو مفيش دالة تفعيل، الشبكة هتفضل خطية مهما زودت طبقاتها. الجمع الموزون بيتعمل قبل التفعيل مش بيها.",
          tags: ["Activation Function", "Non-linearity"],
          ref: "Lecture 2 — Slide 9 (Neuron Function)",
          likely: "high",
        },
        {
          q: "9. Which of the following is NOT one of the training stages mentioned in the lecture?",
          options: [
            "Data compression",
            "Forward propagation",
            "Loss calculation",
            "Backpropagation",
          ],
          correct: 0,
          translation:
            "أي واحد من الآتي مش مرحلة من مراحل التدريب المذكورة في المحاضرة؟",
          explanation:
            "الصحيح هو ضغط البيانات لأنه مش جزء من التدريب. المراحل المذكورة هي: الانتشار الأمامي (Forward propagation)، حساب الخسارة (Loss calculation)، والانتشار الخلفي (Backpropagation) لتعديل الأوزان.",
          tags: ["Learning Process", "Training"],
          ref: "Lecture 2 — Slide 10 (Learning Process)",
          likely: "high",
        },
        {
          q: "10. Which type of neural network is most suitable for image processing tasks?",
          options: [
            "Recurrent Neural Network (RNN)",
            "Convolutional Neural Network (CNN)",
            "Feedforward Neural Network (FNN)",
            "Single-layer Perceptron",
          ],
          correct: 1,
          translation:
            "أي نوع من الشبكات العصبية مناسب أكتر لمهام معالجة الصور؟",
          explanation:
            "الصحيح هو CNN لأنها مصممة للبيانات الشبكية زي الصور باستخدام الالتفاف. الـ RNN للبيانات المتسلسلة، والـ FNN للتدفق العام.",
          tags: ["Types of Neural Networks", "CNN"],
          ref: "Lecture 2 — Slide 11 (Types)",
          likely: "high",
        },
        {
          q: "11. Recurrent Neural Networks (RNNs) are best suited for:",
          options: [
            "Image recognition tasks",
            "Medical diagnosis only",
            "Sequential data such as text or time series",
            "Binary classification problems",
          ],
          correct: 2,
          translation: "الشبكات العصبية المتكررة (RNN) مناسبة أكتر لإيه؟",
          explanation:
            "الصحيح هو البيانات المتسلسلة زي النص أو السلاسل الزمنية لأنها بتدعم الاتصالات الراجعة. الصور بتتعامل معاها CNN، والتشخيص الطبي مش تطبيقها الأساسي.",
          tags: ["Types of Neural Networks", "RNN"],
          ref: "Lecture 2 — Slide 11 (Types)",
          likely: "high",
        },
        {
          q: "12. A Deep Neural Network (DNN) is defined as:",
          options: [
            "A network with no hidden layers",
            "A network with exactly one hidden layer",
            "A network used only for regression",
            "A network with multiple hidden layers",
          ],
          correct: 3,
          translation: "الشبكة العصبية العميقة (DNN) بتتعرّف إزاي؟",
          explanation:
            "الصحيح هي شبكة فيها عدة طبقات مخفية. كلمة Deep بتشير لعدد الطبقات المخفية. لو مفيش طبقات مخفية يبقى perceptron، ولو طبقة واحدة يبقى shallow network.",
          tags: ["Types of Neural Networks", "DNN"],
          ref: "Lecture 2 — Slide 11 (Types)",
          likely: "high",
        },
        {
          q: "13. In a Feedforward Neural Network (FNN), data flows:",
          options: [
            "In one direction only, with no loops",
            "In multiple directions with loops",
            "From the output layer back to the input layer",
            "Randomly between all layers",
          ],
          correct: 0,
          translation:
            "في الشبكة العصبية التغذية الأمامية (FNN)، البيانات بتتدفق إزاي؟",
          explanation:
            "الصحيح في اتجاه واحد بس من غير حلقات. ده عكس الـ RNN اللي فيها حلقات واتصالات راجعة.",
          tags: ["Types of Neural Networks", "FNN", "Architecture"],
          ref: "Lecture 2 — Slide 11 (Types)",
          likely: "high",
        },
        {
          q: "14. According to the binary threshold function, the output S(xj) equals:",
          options: [
            "-1 if xj < 0, and 1 if xj ≥ 0",
            "1 if xj ≥ 0, and 0 if xj < 0",
            "A value between 0 and 1",
            "The same value as the input xj",
          ],
          correct: 1,
          translation: "حسب دالة الحد الثنائي، المخرج S(xj) بيساوي:",
          explanation:
            "الصحيح: 1 لو xj ≥ 0، و0 لو xj < 0. ده بينشئ نظام ذو حالتين زي مفتاح ON/OFF. الخيار اللي بيقول -1 و1 ده بيشير لـ bipolar function مش binary.",
          tags: ["Activation Functions", "Binary Threshold"],
          ref: "Lecture 2 — Slide 16 (Binary Threshold Function)",
          likely: "high",
        },
        {
          q: "15. The binary threshold function is also referred to as a:",
          options: [
            "Smooth logistic unit",
            "Linear unit",
            "Threshold logic unit",
            "Gaussian unit",
          ],
          correct: 2,
          translation: "دالة الحد الثنائي بتُسمّى بردو:",
          explanation:
            "الصحيح هو Threshold Logic Unit لأنها بتشتغل كوحدة منطق بحد. السموث لوجستيك ده وصف الـ Sigmoid، والـ Gaussian نوع تاني خالص.",
          tags: ["Activation Functions", "Binary Threshold"],
          ref: "Lecture 2 — Slide 16 (Binary Threshold Function)",
          likely: "high",
        },
        {
          q: "16. What happens to the sigmoidal activation function as λj approaches infinity?",
          options: [
            "It becomes a linear function",
            "It approaches the Gaussian function",
            "It becomes unbounded",
            "It approaches the binary threshold function",
          ],
          correct: 3,
          translation:
            "إيه اللي بيحصل لدالة التفعيل السيجمويدية لما λj يقرب من اللانهاية؟",
          explanation:
            "الصحيح إنها بتقرب من دالة الحد الثنائي لأن المنحدر بيبقى حاد جداً. ده استنتاج مهم اتكرر في المحاضرة. الخيارات التانية غلط لأن السيجمويد مش بيتحول لخطي ولا Gaussian.",
          tags: ["Activation Functions", "Sigmoid"],
          ref: "Lecture 2 — Slide 20 (Sigmoidal Activation Function)",
          likely: "high",
        },
        {
          q: "17. Which of the following properties correctly describes the sigmoidal activation function?",
          options: [
            "Monotonic, continuous, and bounded",
            "Non-monotonic and unbounded",
            "Discontinuous and bounded",
            "Linear and unbounded",
          ],
          correct: 0,
          translation: "أي واحد من الآتي بيوصف دالة التفعيل السيجمويدية صح؟",
          explanation:
            "الصحيح: رتيبة (monotonic)، مستمرة (continuous)، ومحدودة (bounded) بين 0 و1. ده تلات خصائص مهمة اتذكروا في الشريحة. الـ Gaussian هي اللي non-monotonic.",
          tags: ["Activation Functions", "Sigmoid"],
          ref: "Lecture 2 — Slide 20 (Sigmoidal Activation Function)",
          likely: "high",
        },
        {
          q: "18. Which activation function is described as non-monotonic in the lecture?",
          options: ["Sigmoid", "Gaussian", "Tanh", "ReLU"],
          correct: 1,
          translation: "أي دالة تفعيل وُصفت في المحاضرة بأنها non-monotonic؟",
          explanation:
            "الصحيح هو Gaussian لأن شكلها الجرسي بيخليها تطلع وتنزل (مش رتيبة). السيجمويد والتانهوك وReLU كلها رتيبة.",
          tags: ["Activation Functions", "Gaussian"],
          ref: "Lecture 2 — Slide 22 (Gaussian Activation Function)",
          likely: "high",
        },
        {
          q: "19. In the Gaussian activation function, what does the parameter σj represent?",
          options: [
            "The center of the function",
            "The slope of the function",
            "The Gaussian spread factor",
            "The internal threshold",
          ],
          correct: 2,
          translation: "في دالة التفعيل الـ Gaussian، البارامتر σj بيمثل إيه؟",
          explanation:
            "الصحيح هو معامل الانتشار (spread factor) اللي بيحدد دالة حادة ولا منتشرة. الـ center هو cj، والـ slope خاص بالـ linear threshold.",
          tags: ["Activation Functions", "Gaussian"],
          ref: "Lecture 2 — Slide 22 (Gaussian Activation Function)",
          likely: "high",
        },
        {
          q: "20. The ReLU activation function is defined as:",
          options: [
            "S(x) = 1 / (1 + e^(-x))",
            "S(x) = tanh(x)",
            "S(x) = min(0, x)",
            "S(x) = max(0, x)",
          ],
          correct: 3,
          translation: "دالة التفعيل ReLU بتتعرّف إزاي؟",
          explanation:
            "الصحيح S(x) = max(0, x) - بترجع x لو موجب، و0 لو سالب. الخيار الأول ده السيجمويد، التاني التانهوك، والتالت غلط (min مش max).",
          tags: ["Activation Functions", "ReLU"],
          ref: "Lecture 2 — Slide 24 (ReLU)",
          likely: "high",
        },
        {
          q: "21. What is a major drawback of the ReLU activation function?",
          options: [
            '"Dead neurons" that may stay at zero forever',
            "Computationally very slow",
            "Suffers from vanishing gradient",
            "Bounded output range",
          ],
          correct: 0,
          translation: "إيه هو العيب الأساسي لدالة ReLU؟",
          explanation:
            'الصحيح هو ظاهرة "العصبونات الميتة" - لو خرج العصبون صفر، ممكن يفضل صفر للأبد. الـ ReLU سريعة (مش بطيئة)، بتحل مشكلة التلاشي (مش بتعاني منه)، ومش محدودة.',
          tags: ["Activation Functions", "ReLU", "Dead Neurons"],
          ref: "Lecture 2 — Slide 25 (ReLU Characteristics)",
          likely: "high",
        },
        {
          q: "22. Which activation function outputs values in the range [-1, 1]?",
          options: ["Sigmoid", "Tanh", "ReLU", "Softmax"],
          correct: 1,
          translation: "أي دالة تفعيل بتطلع قيم في المدى [-1, 1]؟",
          explanation:
            "الصحيح هو Tanh (الظل الزائدي) لأنه بيخرج قيم بين -1 و1. السيجمويد بين 0 و1، وReLU بين 0 و∞، وSoftmax للاحتمالات.",
          tags: ["Activation Functions", "Tanh", "Comparison"],
          ref: "Lecture 2 — Slide 26-27 (Comparison Table)",
          likely: "high",
        },
        {
          q: "23. The sigmoid function is known to suffer from which gradient issue?",
          options: [
            "Dying ReLU problem",
            "Exploding gradient",
            "Vanishing gradient",
            "No gradient issues",
          ],
          correct: 2,
          translation:
            "دالة السيجمويد معروفة بمعاناتها من مشكلة إيه في التدرج؟",
          explanation:
            "الصحيح هو تلاشي التدرج (vanishing gradient) لأن ميل السيجمويد بيقرب من صفر في الأطراف. الـ Dying ReLU مشكلة ReLU، والانفجار مش مشكلتها الأساسية.",
          tags: ["Activation Functions", "Sigmoid", "Vanishing Gradient"],
          ref: "Lecture 2 — Slide 26-27 (Comparison Table)",
          likely: "high",
        },
        {
          q: "24. Which activation function is most commonly used in the hidden layers of deep networks?",
          options: ["Sigmoid", "Tanh", "Softmax", "ReLU"],
          correct: 3,
          translation:
            "أي دالة تفعيل مستخدمة أكتر في الطبقات المخفية للشبكات العميقة؟",
          explanation:
            'الصحيح هو ReLU لأنها سريعة وبسيطة وتحل مشكلة التلاشي. ده مذكور صراحةً في شريحة "When to Use Each". السيجمويد للتصنيف الثنائي في المخرج.',
          tags: ["Activation Functions", "ReLU", "When to Use"],
          ref: "Lecture 2 — Slide 28 (When to Use Each)",
          likely: "high",
        },
        {
          q: "25. For binary classification, which activation function is typically used in the output layer?",
          options: ["Sigmoid", "ReLU", "Tanh", "Linear"],
          correct: 0,
          translation:
            "للتصنيف الثنائي، أي دالة تفعيل بتُستخدم عادةً في طبقة المخرج؟",
          explanation:
            "الصحيح هو Sigmoid لأنها بتخرج قيمة بين 0 و1 تمثل احتمال. ReLU للطبقات المخفية، التانهوك لما محتاجين zero-centered.",
          tags: ["Activation Functions", "Sigmoid", "When to Use"],
          ref: "Lecture 2 — Slide 28 (When to Use Each)",
          likely: "high",
        },
        {
          q: "26. According to the eight components of neural networks, how many types of neurons are there?",
          options: ["Two", "Three", "Four", "Five"],
          correct: 1,
          translation:
            "حسب المكونات الثمانية للشبكات العصبية، كم نوع من العصبونات موجود؟",
          explanation:
            "الصحيح 3 أنواع: Input (إدخال)، Hidden (مخفية)، Output (مخرج). ده اتذكر صراحةً في أول مكوّن من المكونات الثمانية.",
          tags: ["Eight Components", "Neurons"],
          ref: "Lecture 2 — Slides 30-31 (Eight Components)",
          likely: "high",
        },
        {
          q: "27. Which type of neuron serves as the entry point to the network?",
          options: [
            "Hidden neuron",
            "Output neuron",
            "Input neuron",
            "Bias neuron",
          ],
          correct: 2,
          translation: "أي نوع من العصبونات بيشتغل كنقطة الدخول للشبكة؟",
          explanation:
            "الصحيح هو Input neuron لأنه بيستقبل البيانات أو المحفزات الخارجية من البيئة. الـ Hidden بتعمل العمليات الوسيطة، والـ Output بتطلع النتيجة.",
          tags: ["Eight Components", "Neurons"],
          ref: "Lecture 2 — Slides 30-31 (Eight Components)",
          likely: "high",
        },
        {
          q: "28. The activation state vector X represents:",
          options: [
            "The connection weights of the network",
            "Only the input data values",
            "The final predictions of the network",
            "The activation levels of individual neurons",
          ],
          correct: 3,
          translation: "متجه حالة التفعيل X بيمثل إيه؟",
          explanation:
            "الصحيح: مستويات تفعيل العصبونات الفردية X = [x1, ..., xn]. ده المكوّن التاني من المكونات الثمانية. الأوزان والمدخلات والمخرجات مفاهيم تانية.",
          tags: ["Eight Components", "Activation State Vector"],
          ref: "Lecture 2 — Slides 30-31 (Eight Components)",
          likely: "high",
        },
        {
          q: "29. An excitatory connection between two neurons:",
          options: [
            "Increases the activation of the next neuron",
            "Decreases the activation of the next neuron",
            "Has no effect on activation",
            "Resets the activation to zero",
          ],
          correct: 0,
          translation:
            "الاتصال المثير (excitatory) بين خليتين عصبيتين بيعمل إيه؟",
          explanation:
            "الصحيح: بيزيد تفعيل العصبون التالي. ده عكس الـ Inhibitory (-) اللي بيقلل التفعيل. الـ Absent (0) مفيش اتصال أصلاً.",
          tags: ["Eight Components", "Connectivity Pattern"],
          ref: "Lecture 2 — Slide 32 (Pattern of Connectivity)",
          likely: "high",
        },
        {
          q: "30. The activity aggregation rule is typically computed as:",
          options: [
            "The maximum of inputs and weights",
            "The dot product of the input vector and the weight vector",
            "The element-wise multiplication only",
            "The concatenation of input and weight vectors",
          ],
          correct: 1,
          translation: "قاعدة تجميع النشاط بتُحسب عادةً إزاي؟",
          explanation:
            "الصحيح هو الضرب النقطي (dot product / inner product) بين متجه المدخلات ومتجه الأوزان. ده بيحدد المدخل الكلي للعصبون قبل دالة التفعيل. باقي الطرق مش اللي اتعمل في المحاضرة.",
          tags: ["Eight Components", "Aggregation Rule"],
          ref: "Lecture 2 — Slide 32 (Activity Aggregation Rule)",
          likely: "high",
        },
        {
          q: "31. According to the eight components, the environment of a neural network can be:",
          options: [
            "Only deterministic",
            "Only stochastic",
            "Either deterministic (noiseless) or stochastic (noisy)",
            "Always noisy",
          ],
          correct: 2,
          translation: "حسب المكونات الثمانية، بيئة الشبكة العصبية ممكن تكون:",
          explanation:
            "الصحيح إما deterministic (بلا ضوضاء) أو stochastic (فيها ضوضاء). ده المكوّن الثامن والأخير. الاتنين ممكنين مش واحد فيهم بس.",
          tags: ["Eight Components", "Environment"],
          ref: "Lecture 2 — Slide 33 (Eight Components)",
          likely: "high",
        },
        {
          q: "32. A feedback (recurrent) architecture is characterized by:",
          options: [
            "Data flowing only in the forward direction",
            "No connections between neurons",
            "Only a single layer of neurons",
            "Loops in the network due to feedback connections",
          ],
          correct: 3,
          translation: "المعمارية الراجعة (recurrent) بتتميز بـ:",
          explanation:
            "الصحيح: وجود حلقات في الشبكة بسبب اتصالات راجعة. ده عكس الـ feedforward اللي مفيهاش حلقات.",
          tags: ["Architecture", "Feedback"],
          ref: "Lecture 2 — Slide 34 (Architectures)",
          likely: "high",
        },
        {
          q: "33. A network that maps vectors from one space to another, written as f: R^n → R^p, is called:",
          options: [
            "A heteroassociator",
            "An autoassociator",
            "A feedforward-only network",
            "A stochastic network",
          ],
          correct: 0,
          translation:
            "الشبكة اللي بتربط متجهات من فضاء لفضاء تاني (f: R^n → R^p) بتسمّى:",
          explanation:
            "الصحيح هو heteroassociator لأنه بيربط نمطين مختلفين (مدخل ≠ مخرج). الـ autoassociator بيربط النمط بنفسه.",
          tags: ["Mappings", "Heteroassociator"],
          ref: "Lecture 2 — Slide 35 (Neural Networks Generate Mappings)",
          likely: "high",
        },
        {
          q: "34. An autoassociator is a network that:",
          options: [
            "Maps two different patterns to each other",
            "Associates a single pattern with itself",
            "Has no hidden layers at all",
            "Always uses the ReLU activation",
          ],
          correct: 1,
          translation: "الـ autoassociator هو شبكة بتعمل إيه؟",
          explanation:
            "الصحيح: بتربط نمط واحد في R^n بنفسه (لما العصبونات تتصل على نفسها). ده عكس الـ heteroassociator اللي بيربط نمطين مختلفين.",
          tags: ["Mappings", "Autoassociator"],
          ref: "Lecture 2 — Slide 35 (Neural Networks Generate Mappings)",
          likely: "high",
        },
        {
          q: "35. In the linear threshold function, the slope parameter αj equals:",
          options: ["xm", "xm / 2", "1 / xm", "0"],
          correct: 2,
          translation: "في دالة الحد الخطي، معامل الميل αj بيساوي:",
          explanation:
            "الصحيح αj = 1/xm. ده مذكور صراحةً في شريحة الـ Linear Threshold. xm هي قيمة الذروة اللي بعدها المخرج بيبقى 1.",
          tags: ["Activation Functions", "Linear Threshold"],
          ref: "Lecture 2 — Slide 19 (Linear Threshold Activation Function)",
          likely: "high",
        },
        {
          q: "36. The signal of a stochastic neuron is assumed to be:",
          options: [
            "Continuous only",
            "Always positive",
            "Always equal to zero",
            "Two-state: {0, 1} or {-1, 1}",
          ],
          correct: 3,
          translation:
            "إشارة العصبون العشوائي (stochastic neuron) بتفترض إنها:",
          explanation:
            "الصحيح ذو حالتين إما {0, 1} أو {-1, 1}، والعصبون بيتبدل بينهم بدالة احتمالية P(xj). ده عكس الدوال المستمرة زي السيجمويد.",
          tags: ["Activation Functions", "Stochastic Neurons"],
          ref: "Lecture 2 — Slide 23 (Stochastic Neurons)",
          likely: "medium",
        },

        // ==================== Essay Questions (1-12) ====================
        {
          type: "essay",
          q: "1. Define a neural network and explain how it relates to the human brain.",
          translation: "عرّف الشبكة العصبية واشرح علاقتها بالعقل البشري.",
          answer:
            "A neural network is a machine learning model that mimics the complex functions of the human brain. " +
            "It consists of interconnected nodes called neurons that process data, learn patterns, and enable tasks such as pattern recognition, decision making, and prediction.\n" +
            "Relation to the brain:\n" +
            "- Biological neurons send signals by converting them from electrical to chemical and back to electrical.\n" +
            "- The connection between two neurons is called a synapse, and its effectiveness is called synaptic efficacy.\n" +
            "- In the artificial model, connection weights wij model these synaptic efficacies.\n" +
            "- The internal threshold θj models the neuron's firing threshold.\n" +
            "Thus, the artificial neuron is an abstract mathematical model inspired by biological neurons, capturing the idea of weighted signal aggregation and threshold-based firing.",
          tags: ["Definition", "Biological Inspiration"],
          ref: "Lecture 2 — Slides 2-3 (Neural Network & Neuron Abstraction)",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. Explain the structure of a neural network and the function of each layer.",
          translation: "اشرح بنية الشبكة العصبية ووظيفة كل طبقة.",
          answer:
            "A neural network is organized into layers of interconnected nodes (neurons). It typically includes three types of layers:\n" +
            "1. Input Layer: Receives the raw data (e.g., pixel values of an image) and serves as the entry point to the network.\n" +
            "2. Hidden Layers: Perform complex transformations and feature extraction from the input data. They learn intermediate representations that help solve the task.\n" +
            "3. Output Layer: Produces the final result, such as a class label or a predicted numerical value.\n" +
            "Each neuron computes a weighted sum of its inputs, adds a bias, and passes the result through an activation function (e.g., ReLU, sigmoid, tanh) to introduce non-linearity.",
          tags: ["Structure", "Layers"],
          ref: "Lecture 2 — Slides 7-9 (Structure, Neuron Function)",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Describe the learning (training) process of a neural network in detail.",
          translation: "اشرح عملية التعلم (التدريب) للشبكة العصبية بالتفصيل.",
          answer:
            "Neural networks learn through a process called training, which involves three main stages:\n" +
            "1. Forward Propagation: The network computes its output from the given inputs by passing data through the layers and applying weights, biases, and activation functions.\n" +
            "2. Loss Calculation: The error between the predicted output and the actual (target) output is measured using a loss function.\n" +
            "3. Backpropagation: The network adjusts its weights to minimize the error. This is typically done using optimization algorithms such as gradient descent, which updates the weights in the direction that reduces the loss.\n" +
            "These three steps are repeated over many training examples until the network's predictions reach an acceptable accuracy.",
          tags: ["Learning Process", "Training"],
          ref: "Lecture 2 — Slide 10 (Learning Process)",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. Compare the four types of neural networks (FNN, CNN, RNN, DNN) in terms of data flow and use cases.",
          translation:
            "قارن الأنواع الأربعة للشبكات العصبية (FNN، CNN، RNN، DNN) من حيث تدفق البيانات وحالات الاستخدام.",
          answer:
            "1. Feedforward Neural Network (FNN): Data flows in one direction only (no loops). Used for general tasks where data has no spatial or temporal structure.\n" +
            "2. Convolutional Neural Network (CNN): Specialized for image processing and grid-like data; uses convolution operations to detect spatial features.\n" +
            "3. Recurrent Neural Network (RNN): Suitable for sequential data such as text or time series; uses feedback connections so previous outputs influence current computation.\n" +
            "4. Deep Neural Network (DNN): A network with multiple hidden layers; depth allows it to model very complex hierarchical features. DNN is a broad term that can include deep FNNs, CNNs, or RNNs.",
          tags: ["Types", "Comparison"],
          ref: "Lecture 2 — Slide 11 (Types)",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. What is an activation (signal) function in a neural network and why is it important? List the common types mentioned in the lecture.",
          translation:
            "إيه هي دالة التفعيل (الإشارة) في الشبكة العصبية وليه مهمة؟ اذكر الأنواع الشائعة المذكورة في المحاضرة.",
          answer:
            "After computing the total input xj, the neuron's activation is passed through an activation function (also called a signal function) denoted by S(x), where sj = S(xj). This function determines the output signal of the neuron.\n" +
            "Importance: The activation function introduces non-linearity, which is essential for the network to learn complex, non-linear patterns. Without it, stacking layers would still produce only linear transformations.\n" +
            "Common types from the lecture:\n" +
            "- Binary Threshold Function: outputs 0 or 1 based on a threshold.\n" +
            "- Linear Threshold Function: combines linearity and thresholding.\n" +
            "- Sigmoid Function: smooth, non-linear, used in logistic regression.\n" +
            "- Gaussian Function: bell-shaped, used in radial basis function networks.\n" +
            "- Probabilistic Function: outputs a probability value.\n" +
            "Modern additions: ReLU (max(0, x)), Softmax (multi-class classification), and Tanh (range [-1, 1]).",
          tags: ["Activation Function", "Types"],
          ref: "Lecture 2 — Slides 13-15 (Activation Functions)",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. Explain the binary threshold activation function and how a neuron decides to fire based on the threshold θj.",
          translation:
            "اشرح دالة التفعيل الثنائية (binary threshold) وإزاي العصبون بيقرر يطلق إشارة بناءً على الحد θj.",
          answer:
            "The binary threshold function is one of the simplest activation functions. It works as follows:\n" +
            "- S(xj) = 1 if xj >= 0\n" +
            "- S(xj) = 0 if xj < 0\n" +
            "Key characteristics: it produces outputs of either 0 or 1 only, creating a two-state system (like an ON/OFF switch). This is why it is called a threshold logic unit.\n" +
            "Threshold interpretation:\n" +
            "- The net activation is computed as xj = qj + θj, where qj = Σ(wij * si) is the weighted sum and θj is the internal threshold (bias).\n" +
            "- The neuron fires (outputs +1) when xj >= 0, which means qj >= -θj.\n" +
            "- The neuron outputs 0 when qj < -θj.\n" +
            "In simple terms, the neuron compares the weighted input qj against the negative of the bias (-θj) to decide whether to fire.",
          tags: [
            "Activation Functions",
            "Binary Threshold",
            "Threshold Interpretation",
          ],
          ref: "Lecture 2 — Slides 16-18 (Binary Threshold & Interpretation)",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. Compare ReLU, Sigmoid, and Tanh activation functions based on output range, zero-centered property, non-linearity, gradient issues, and speed.",
          translation:
            "قارن دوال التفعيل ReLU و Sigmoid و Tanh بناءً على مدى المخرج، خاصية التمركز حول الصفر، اللاخطية، مشاكل التدرج، والسرعة.",
          answer:
            "Comparison table (from the lecture):\n" +
            "| Property         | ReLU        | Sigmoid       | Tanh          |\n" +
            "| Output Range     | [0, ∞)      | (0, 1)        | (-1, 1)       |\n" +
            "| Zero-centered    | No          | No            | Yes           |\n" +
            "| Non-linear       | Yes         | Yes           | Yes           |\n" +
            "| Gradient Issues  | Dying ReLU  | Vanishing Gradient | Vanishing Gradient |\n" +
            "| Speed            | Fast        | Slower        | Slower        |\n" +
            "Key points:\n" +
            "- ReLU is the fastest and helps reduce the vanishing gradient problem, but it can suffer from 'dead neurons'.\n" +
            "- Sigmoid and Tanh are smooth but suffer from vanishing gradients, especially in deep networks.\n" +
            "- Tanh is preferred over Sigmoid for hidden layers when zero-centered output is helpful.",
          tags: ["Activation Functions", "Comparison"],
          ref: "Lecture 2 — Slides 26-27 (Comparison Table)",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. Explain when to use ReLU, Sigmoid, and Tanh in a neural network.",
          translation:
            "اشرح متى نستخدم ReLU و Sigmoid و Tanh في الشبكة العصبية.",
          answer:
            "When to use each activation function:\n" +
            "1. ReLU: The most common choice. Best for hidden layers in deep networks because it is fast to compute and helps reduce the vanishing gradient problem.\n" +
            "2. Sigmoid: Used for binary classification in the output layer, where the output needs to be interpreted as a probability in the range (0, 1).\n" +
            "3. Tanh: Can be better than Sigmoid for hidden layers when zero-centered output is helpful, because its output is in the range (-1, 1), which often makes optimization easier.\n" +
            "The right choice depends on the task: hidden layers usually use ReLU, while the output layer depends on whether the task is binary classification (Sigmoid), multi-class (Softmax), or regression (Linear).",
          tags: ["Activation Functions", "When to Use"],
          ref: "Lecture 2 — Slide 28 (When to Use Each)",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. List and briefly explain the eight components of a neural network.",
          translation: "اذكر واشرح بإيجاز المكونات الثمانية للشبكة العصبية.",
          answer:
            "The eight components of a neural network are:\n" +
            "1. Neurons: Come in three types - Input (receive external data), Hidden (compute intermediate functions and extract features), Output (generate the final result).\n" +
            "2. Activation state vector: A vector X = [x1, ..., xn] of the activation levels of individual neurons.\n" +
            "3. Signal function (activation function): Generates the output signal of the neuron based on its activation.\n" +
            "4. Pattern of Connectivity: Defines how neurons are connected. Connections can be Excitatory (+), Inhibitory (-), or Absent (0).\n" +
            "5. Activity Aggregation Rule: Explains how a neuron combines input signals, typically as the dot product of the input vector and the weight vector.\n" +
            "6. Activation rule: Determines the new activation level of a neuron based on its current activation and external inputs.\n" +
            "7. Learning rule: Modifies connection strengths based on external stimuli and network performance, aiming to improve the latter.\n" +
            "8. Environment: The environment in which the network operates - either deterministic (noiseless) or stochastic (noisy).",
          tags: ["Eight Components"],
          ref: "Lecture 2 — Slides 30-33 (Eight Components)",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Describe the three types of connectivity patterns (excitatory, inhibitory, absent) and their effects.",
          translation:
            "صف الأنواع الثلاثة من أنماط الاتصال (مثير، مثبط، غائب) وتأثيرها.",
          answer:
            "The pattern of connectivity defines how neurons are connected in the network. Each connection between neurons can have one of three effects:\n" +
            "1. Excitatory (+): Increases the activation of the next neuron. A positive weight strengthens the signal passed forward.\n" +
            "2. Inhibitory (-): Decreases the activation of the next neuron. A negative weight weakens or suppresses the signal.\n" +
            "3. Absent (0): No connection between the neurons. The signal is not transmitted at all.\n" +
            "These three patterns determine the structure of the network and influence which neurons affect which others, thereby shaping the computations the network can perform.",
          tags: ["Eight Components", "Connectivity"],
          ref: "Lecture 2 — Slide 32 (Pattern of Connectivity)",
          likely: "medium",
        },
        {
          type: "essay",
          q: "11. Compare feedforward and feedback (recurrent) architectures.",
          translation:
            "قارن بين المعماريات الـ feedforward والـ feedback (recurrent).",
          answer:
            "Local groups of neurons can be connected in either architecture:\n" +
            "1. Feedforward Architecture:\n" +
            "   - The network has no loops.\n" +
            "   - Data flows only in the forward direction, from input to output.\n" +
            "   - Examples: FNN, CNN.\n" +
            "2. Feedback (Recurrent) Architecture:\n" +
            "   - Loops occur in the network due to feedback connections.\n" +
            "   - The output of a neuron can influence its own future computation or the computation of neurons in earlier layers.\n" +
            "   - Suitable for sequential data such as text or time series.\n" +
            "   - Example: RNN.\n" +
            "The key difference is the presence or absence of loops, which determines whether the network has memory of previous inputs.",
          tags: ["Architecture", "Comparison"],
          ref: "Lecture 2 — Slide 34 (Architectures)",
          likely: "high",
        },
        {
          type: "essay",
          q: "12. Explain the difference between heteroassociators and autoassociators.",
          translation:
            "اشرح الفرق بين الـ heteroassociator والـ autoassociator.",
          answer:
            "Neural networks generate mappings between vector spaces:\n" +
            "1. Heteroassociator:\n" +
            "   - A multilayered network that associates vectors from one space to vectors of another space.\n" +
            "   - It maps two different patterns - one as input and another as output.\n" +
            "   - Mathematically: f: R^n → R^p (where n and p are different).\n" +
            "2. Autoassociator:\n" +
            "   - When neurons in a single field connect back onto themselves.\n" +
            "   - The network associates a single pattern in R^n with itself.\n" +
            "   - Used for tasks like pattern completion, where the network reconstructs a stored pattern from a partial or noisy version.\n" +
            "Key difference: Heteroassociators map input to a different output, while autoassociators map an input to itself.",
          tags: ["Mappings", "Comparison"],
          ref: "Lecture 2 — Slide 35 (Neural Networks Generate Mappings)",
          likely: "high",
        },

        // ==================== Calculation Questions (1-6) ====================
        {
          type: "essay",
          q: "Calculation 1. A neuron receives two input signals s1 = 2 and s2 = -1 with weights w1j = 0.5 and w2j = 0.8, and an internal threshold θj = -0.5. Using the binary threshold activation function, determine whether the neuron fires (output = 1) or not (output = 0).",
          translation:
            "مسألة 1. عصبون بيستقبل إشارتين s1 = 2 و s2 = -1 بأوزان w1j = 0.5 و w2j = 0.8 وحد داخلي θj = -0.5. باستخدام دالة الحد الثنائي، حدد هل العصبون هيطلق إشارة (مخرج = 1) ولا لأ (مخرج = 0).",
          answer:
            "Step 1: Compute the net input xj.\n" +
            "xj = Σ(wij * si) + θj\n" +
            "xj = (w1j * s1) + (w2j * s2) + θj\n" +
            "xj = (0.5)(2) + (0.8)(-1) + (-0.5)\n" +
            "xj = 1.0 - 0.8 - 0.5\n" +
            "xj = -0.3\n" +
            "Step 2: Apply the binary threshold function.\n" +
            "S(xj) = 1 if xj >= 0, else 0\n" +
            "Since xj = -0.3 < 0, the neuron does NOT fire.\n" +
            "Output = 0.",
          tags: ["Calculation", "Binary Threshold"],
          ref: "Lecture 2 — Slides 16-18 (Binary Threshold & Interpretation)",
          likely: "high",
        },
        {
          type: "essay",
          q: "Calculation 2. Compute the output of the sigmoidal activation function S(xj) = 1 / (1 + e^(-λj * xj)) for a neuron with net input xj = 0 and gain factor λj = 1.",
          translation:
            "مسألة 2. احسب مخرج دالة التفعيل السيجمويدية S(xj) = 1 / (1 + e^(-λj * xj)) لعصبون بمدخل xj = 0 ومعامل كسب λj = 1.",
          answer:
            "Formula: S(xj) = 1 / (1 + e^(-λj * xj))\n" +
            "Given: xj = 0, λj = 1\n" +
            "Substitute:\n" +
            "S(0) = 1 / (1 + e^(-1 * 0))\n" +
            "S(0) = 1 / (1 + e^0)\n" +
            "Since e^0 = 1:\n" +
            "S(0) = 1 / (1 + 1)\n" +
            "S(0) = 1 / 2\n" +
            "S(0) = 0.5\n" +
            "Interpretation: When the net input is zero, the sigmoid outputs 0.5 (its midpoint). This is the central property of the sigmoid function.",
          tags: ["Calculation", "Sigmoid"],
          ref: "Lecture 2 — Slide 20 (Sigmoidal Activation Function)",
          likely: "high",
        },
        {
          type: "essay",
          q: "Calculation 3. A neuron has a net input xj = -3.5. Compute the output of the ReLU activation function.",
          translation:
            "مسألة 3. عصبون بمدخل xj = -3.5. احسب مخرج دالة التفعيل ReLU.",
          answer:
            "Formula: ReLU(xj) = max(0, xj)\n" +
            "Given: xj = -3.5\n" +
            "Substitute:\n" +
            "ReLU(-3.5) = max(0, -3.5)\n" +
            "Since 0 > -3.5, the maximum is 0.\n" +
            "Output = 0.\n" +
            "Note: This illustrates the 'dead neuron' issue - when the input is negative, ReLU outputs 0, and the gradient is also 0, so the neuron may not learn.",
          tags: ["Calculation", "ReLU"],
          ref: "Lecture 2 — Slides 24-25 (ReLU)",
          likely: "high",
        },
        {
          type: "essay",
          q: "Calculation 4. Given a linear threshold activation function with xm = 2 (so αj = 1/xm = 0.5), compute the output S(xj) for: (a) xj = -1, (b) xj = 1, (c) xj = 3.",
          translation:
            "مسألة 4. بدالة الحد الخطي xm = 2 (يكون αj = 1/xm = 0.5)، احسب المخرج S(xj) لـ: (أ) xj = -1، (ب) xj = 1، (ج) xj = 3.",
          answer:
            "Function definition:\n" +
            "S(xj) = 0           if xj <= 0\n" +
            "S(xj) = αj * xj     if 0 < xj < xm\n" +
            "S(xj) = 1           if xj >= xm\n" +
            "Given: xm = 2, αj = 0.5\n" +
            "(a) xj = -1: since xj <= 0, S = 0\n" +
            "(b) xj = 1: since 0 < 1 < 2, S = αj * xj = 0.5 * 1 = 0.5\n" +
            "(c) xj = 3: since xj >= xm (3 >= 2), S = 1\n" +
            "Summary: (a) 0, (b) 0.5, (c) 1",
          tags: ["Calculation", "Linear Threshold"],
          ref: "Lecture 2 — Slide 19 (Linear Threshold Activation Function)",
          likely: "high",
        },
        {
          type: "essay",
          q: "Calculation 5. A neuron receives three input signals s1 = 1, s2 = 1, s3 = 0 with weights w1j = 1, w2j = 1, w3j = 1 and a bias θj = -1.5. Using the binary threshold activation function: (a) Compute the weighted sum qj = Σ(wij * si). (b) Compute the net activation xj = qj + θj. (c) Determine whether the neuron fires.",
          translation:
            "مسألة 5. عصبون بيستقبل 3 إشارات s1 = 1، s2 = 1، s3 = 0 بأوزان w1j = 1، w2j = 1، w3j = 1 وحد θj = -1.5. بدالة الحد الثنائي: (أ) احسب المجموع الموزون qj. (ب) احسب التفعيل الكلي xj. (ج) حدد هل العصبون هيطلق.",
          answer:
            "(a) Compute the weighted sum qj:\n" +
            "qj = Σ(wij * si) = (w1j * s1) + (w2j * s2) + (w3j * s3)\n" +
            "qj = (1)(1) + (1)(1) + (1)(0)\n" +
            "qj = 1 + 1 + 0\n" +
            "qj = 2\n" +
            "(b) Compute the net activation xj:\n" +
            "xj = qj + θj\n" +
            "xj = 2 + (-1.5)\n" +
            "xj = 0.5\n" +
            "(c) Apply the binary threshold function:\n" +
            "Since xj = 0.5 >= 0, the neuron fires. Output = 1.\n" +
            "Alternative check: qj >= -θj → 2 >= 1.5 → True → fires.",
          tags: ["Calculation", "Binary Threshold", "Threshold Interpretation"],
          ref: "Lecture 2 — Slide 18 (Interpretation of Threshold)",
          likely: "high",
        },
        {
          type: "essay",
          q: "Calculation 6. Compute the output of the tanh activation function for xj = 0. Use the formula tanh(x) = (e^x - e^(-x)) / (e^x + e^(-x)).",
          translation:
            "مسألة 6. احسب مخرج دالة التفعيل tanh لـ xj = 0. استخدم القانون tanh(x) = (e^x - e^(-x)) / (e^x + e^(-x)).",
          answer:
            "Formula: tanh(x) = (e^x - e^(-x)) / (e^x + e^(-x))\n" +
            "Given: xj = 0\n" +
            "Substitute:\n" +
            "tanh(0) = (e^0 - e^(-0)) / (e^0 + e^(-0))\n" +
            "Since e^0 = 1 and e^(-0) = 1:\n" +
            "tanh(0) = (1 - 1) / (1 + 1)\n" +
            "tanh(0) = 0 / 2\n" +
            "tanh(0) = 0\n" +
            "Interpretation: When the input is zero, tanh outputs 0. This is why tanh is called zero-centered, unlike sigmoid which outputs 0.5 at the midpoint.",
          tags: ["Calculation", "Tanh"],
          ref: "Lecture 2 — Slide 26 (Tanh Activation Function)",
          likely: "high",
        },
      ],
    },
  ],
});
