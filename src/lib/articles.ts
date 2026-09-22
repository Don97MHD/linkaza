import type { Locale } from './site';

type LocalizedText = Record<Locale, string>;

export type Article = {
  slug: string;
  category: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  author: LocalizedText;
  readTime: number;
  sections: {
    heading: LocalizedText;
    paragraphs: Record<Locale, string[]>;
  }[];
  sources: { title: string; url: string }[];
};

const editorialTeam: LocalizedText = {
  ar: 'فريق تحرير Linkaza',
  en: 'Linkaza editorial team',
};

export const articles: Article[] = [
  {
    slug: 'backlink-quality-checklist',
    category: { ar: 'جودة الروابط', en: 'Publisher quality' },
    title: {
      ar: 'كيف تقيّم جودة موقع قبل شراء باك لينك؟',
      en: 'How to evaluate a website before buying a backlink',
    },
    description: {
      ar: 'قائمة عملية لتقييم الصلة بالموضوع والجمهور والزيارات والمحتوى وشروط النشر، بعيداً عن الاعتماد على قوة النطاق وحدها.',
      en: 'A practical checklist for relevance, audience, traffic evidence, editorial quality and placement terms, beyond a single domain score.',
    },
    author: editorialTeam,
    readTime: 5,
    sections: [
      {
        heading: { ar: 'ابدأ بسبب النشر، لا بدرجة الموقع', en: 'Start with the reason for publishing' },
        paragraphs: {
          ar: [
            'قبل فتح أي أداة، اكتب جملة تشرح لماذا يجب أن يظهر موقعك لدى هذا الناشر. هل يصل إلى عملائك المحتملين؟ هل يناقش موضوعاً تملك فيه خبرة؟ وهل تستطيع تقديم مقال يفيد قرّاءه؟ إذا لم تجد جواباً محدداً، فلن تحل درجة مرتفعة هذه الفجوة.',
            'مثلاً، منصة محاسبة للشركات الصغيرة قد تجد سياقاً مناسباً في موقع يشرح إدارة المشاريع والضرائب. وجود قسم أعمال عام وحده لا يكفي؛ اقرأ أمثلة المقالات، وتأكد من أن الجمهور واللغة والسوق يناسبون الحملة.',
          ],
          en: [
            'Before opening a tool, write one sentence explaining why your brand belongs on this publication. Does it reach potential customers? Does it cover a subject where you have expertise? Could you contribute something useful to its readers? A high score cannot supply a missing answer.',
            'For example, a small-business accounting platform may fit a publication about running a business. A broad “business” category is not enough on its own. Read actual articles and check whether the language, market and readership match the campaign.',
          ],
        },
      },
      {
        heading: { ar: 'استخدم مؤشرات النطاق للمقارنة', en: 'Use domain metrics for comparison' },
        paragraphs: {
          ar: [
            'مؤشر DR من Ahrefs يصف قوة ملف الروابط مقارنةً بمواقع قاعدة بيانات الأداة. إنه مؤشر نسبي تابع لأداة خارجية، وليس تقييماً تمنحه Google للموقع. لذلك لا تضع حداً رقمياً وتعتبر كل ما يتجاوزه مناسباً تلقائياً.',
            'دوّن مصدر كل مؤشر وتاريخ قراءته، وقارن مواقع متقاربة في المجال. استعمل الرقم كإشارة تدعوك للفحص، ثم اتخذ القرار اعتماداً على تفاصيل الموقع والفرصة نفسها.',
          ],
          en: [
            'Ahrefs Domain Rating describes backlink-profile strength relative to other websites in its database. It is a comparative metric from a third-party tool, not a Google-issued quality grade. A website does not automatically become suitable because it passes a numeric threshold.',
            'Record each metric’s source and the date you checked it, and compare similar publications. Treat the score as an invitation to investigate, then make the decision using the website and the specific opportunity.',
          ],
        },
      },
      {
        heading: { ar: 'افحص اتجاه الزيارات ومصدرها', en: 'Check the traffic trend and source' },
        paragraphs: {
          ar: [
            'الرقم الشهري وحده يخفي تفاصيل مهمة. راجع التغيّر عبر الوقت، والدول والموضوعات والصفحات التي تجذب الزيارات. ارتفاع مفاجئ يحتاج تفسيراً؛ فقد يكون مرتبطاً بخبر أو موسم أو موضوع لا صلة له بحملتك.',
            'ميّز بين تقدير أداة خارجية وقياس مباشر يشاركه الناشر من تحليلاته. وعند مشاركة بيانات مباشرة، اسأل عن الفترة والقناة والبلدان التي تغطيها. لا تفترض أن كامل جمهور الموقع سيشاهد مقالك.',
          ],
          en: [
            'One monthly number hides important context. Review the trend over time and the countries, subjects and pages attracting visits. A sudden spike needs an explanation; it may come from an event, a season or a topic unrelated to your campaign.',
            'Separate third-party estimates from direct measurements a publisher shares from its own analytics. For direct data, ask about the period, channel and countries included. Do not assume the publication’s entire audience will see your article.',
          ],
        },
      },
      {
        heading: { ar: 'اقرأ الموقع كقارئ', en: 'Read the website as a reader' },
        paragraphs: {
          ar: [
            'افتح عدداً من المقالات الحديثة، واقرأ النص فعلياً. هل تجد معلومات متماسكة ومصادر وأمثلة؟ هل المواضيع متصلة بهوية الموقع؟ وهل تستطيع الوصول إلى المقالات من التصنيفات والروابط الداخلية، أم أنها صفحات يصعب العثور عليها؟',
            'تحقّق أيضاً من تجربة الهاتف ووضوح الصفحة وتوازن الإعلانات. كثرة المقالات المتباعدة موضوعياً أو النصوص المتشابهة تستحق مراجعة إضافية؛ لا تستخدم علامة واحدة للحكم النهائي، بل اجمع الملاحظات في تقييم واحد.',
          ],
          en: [
            'Open several recent articles and actually read them. Look for coherent information, useful examples and supporting sources. Check whether the subjects belong to the publication and whether articles are discoverable through its sections and internal links.',
            'Review the mobile experience, readability and advertising as well. Unrelated subjects or repetitive articles deserve closer investigation. Avoid making a final judgment from one isolated signal; combine your observations.',
          ],
        },
      },
      {
        heading: { ar: 'حوّل الفحص إلى قرار موثّق', en: 'Turn the review into a documented decision' },
        paragraphs: {
          ar: [
            'سجّل رابط الموقع، وسبب الملاءمة، ومصدر البيانات، وسعر النشر، وتكلفة الكتابة، والمدة المتوقعة، وخصائص الرابط وشروط بقائه. اطلب توضيح أي نقطة ناقصة قبل الشراء، وراجع المقال مقابل هذه القائمة بعد التسليم.',
            'في النشر المدفوع، راجع الإفصاح ووسم الروابط المناسب. توصي Google باستخدام sponsored للروابط الإعلانية والمدفوعة، وتقبل nofollow أيضاً. جودة قرار النشر لا تعني ضمان ترتيب أو زيادة في الزيارات.',
          ],
          en: [
            'Record the publisher URL, your relevance rationale, data source, placement price, writing cost, expected timeline, link attributes and retention terms. Resolve missing details before purchasing and review the live article against this record.',
            'For paid publication, check disclosure and link qualification. Google recommends sponsored for advertising and paid links and also accepts nofollow. A well-reviewed placement still cannot guarantee rankings or traffic gains.',
          ],
        },
      },
    ],
    sources: [
      { title: 'Ahrefs: What is Domain Rating?', url: 'https://help.ahrefs.com/en/articles/1409408-what-is-domain-rating-dr' },
      { title: 'Google Search Central: Qualify your outbound links', url: 'https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links' },
    ],
  },
  {
    slug: 'guest-posting-guide',
    category: { ar: 'الجيست بوست', en: 'Guest posting' },
    title: {
      ar: 'دليل الجيست بوست: من اختيار الموضوع إلى مراجعة النشر',
      en: 'A practical guest posting guide, from brief to publication',
    },
    description: {
      ar: 'كيف تختار ناشراً مناسباً، وتكتب موجز مقال واضحاً، وتراجع الرابط والمحتوى عند النشر؟ خطوات عملية لحملة جيست بوست منظّمة.',
      en: 'Choose a relevant publisher, prepare a useful article brief and review the published content and link with a clear guest posting workflow.',
    },
    author: editorialTeam,
    readTime: 5,
    sections: [
      {
        heading: { ar: 'حدّد ما الذي ستضيفه', en: 'Decide what you can contribute' },
        paragraphs: {
          ar: [
            'الجيست بوست مقال تنشره لدى موقع آخر. تبدأ فائدته من الإضافة التي تقدّمها لقرّاء ذلك الموقع: تجربة موثّقة، شرح متخصص، مقارنة مفيدة أو طريقة تحل مشكلة. اكتب الفكرة قبل اختيار النص الرابط، ثم اختبر ملاءمتها لهوية الناشر.',
            'إذا كنت تعمل في التجارة الإلكترونية مثلاً، يمكن أن تشرح طريقة تنظيم المرتجعات استناداً إلى خطوات عملية. هذا أكثر تحديداً من مقال عام عن «أهمية التجارة الإلكترونية»، ويمنح المحرر والقارئ سبباً واضحاً للاهتمام.',
          ],
          en: [
            'A guest post is an article contributed to another publication. Its usefulness begins with what you add for that readership: documented experience, an expert explanation, a helpful comparison or a practical solution. Develop the idea before choosing anchor text, then test whether it fits the publisher.',
            'For an ecommerce business, an article explaining a practical returns workflow is a focused contribution. It gives an editor and a reader a clearer reason to care than a generic piece about why ecommerce matters.',
          ],
        },
      },
      {
        heading: { ar: 'اقرأ شروط الناشر وعينات محتواه', en: 'Study the publication and its requirements' },
        paragraphs: {
          ar: [
            'راجع المقالات الحديثة لفهم عمق المحتوى ونبرته وأسلوب العناوين والمصادر. تأكد من الموضوعات المقبولة واللغة ومتطلبات الصور وحقوقها وعدد الروابط الممكنة ومكان ظهور المقال.',
            'اتفق كذلك على السعر وما يشمله، والمدة المتوقعة، وطريقة مراجعة المسودة وشروط التعديلات. احتفظ بالموافقة على هذه التفاصيل؛ فهي أسهل مرجع عند اختلاف التوقعات بعد الكتابة.',
          ],
          en: [
            'Read recent articles to understand the publication’s depth, tone, headlines and sourcing. Confirm accepted subjects, language, image requirements and rights, permitted links and where the article will appear.',
            'Agree on the price and its scope, the expected timeline, draft review and revision terms. Keep the approved requirements together; they provide a clear reference if expectations differ after writing.',
          ],
        },
      },
      {
        heading: { ar: 'اكتب موجزاً يمكن تنفيذه', en: 'Write a brief someone can execute' },
        paragraphs: {
          ar: [
            'يتضمن الموجز الجيد: القارئ، والسؤال الرئيسي، وزاوية المقال، والمحاور، والمصادر، والأمثلة المتاحة، والصفحة التي تريد الربط بها. أضف ما يجب تجنّبه من ادعاءات أو مصطلحات تخص علامتك، ولا تترك الكاتب يخمّن الحقائق.',
            'في المقال العربي، حدّد السوق حين يؤثر في الأمثلة أو المصطلحات. وفي النسخة الإنكليزية، أعد صياغة الأمثلة لتناسب القارئ المقصود. المحتوى المفيد يبدأ من حاجة الإنسان الذي سيقرأه، لا من عدد الكلمات وحده.',
          ],
          en: [
            'A useful brief names the reader, central question, article angle, outline, sources, available examples and destination page. Add brand-specific terminology and claims to avoid. Do not leave the writer to invent the facts.',
            'For Arabic content, identify the market when it affects terminology or examples. For English content, adapt those examples to the intended reader. Useful writing starts with the reader’s need, not a word-count target alone.',
          ],
        },
      },
      {
        heading: { ar: 'اجعل الرابط امتداداً طبيعياً للفكرة', en: 'Let the link continue the reader’s task' },
        paragraphs: {
          ar: [
            'اختَر صفحة تكمّل الفقرة التي سيظهر فيها الرابط: شرح أعمق، أداة، بيانات أصلية أو خدمة ترتبط مباشرةً بالموضوع. استخدم نصاً رابطاً يصف الوجهة بوضوح، وتجنّب تكرار عبارة تجارية داخل فقرة لا تحتاج إليها.',
            'إذا كان النشر مدفوعاً، ناقش الإفصاح وخصائص الرابط مع الناشر. استخدام sponsored أو nofollow للروابط المدفوعة ينسجم مع إرشادات Google، ولا ينبغي تقديم شراء الرابط بوصفه ضماناً لتحسين الترتيب.',
          ],
          en: [
            'Choose a destination that continues the paragraph’s subject: a deeper explanation, a tool, original data or a directly relevant service. Use descriptive anchor text that helps the reader anticipate the destination, and avoid forcing a commercial phrase into a paragraph.',
            'For paid publication, discuss disclosure and link attributes with the publisher. Sponsored or nofollow attributes are appropriate for paid links under Google’s guidance. Purchasing a placement should not be presented as a ranking guarantee.',
          ],
        },
      },
      {
        heading: { ar: 'افحص التسليم واحتفظ بسجل', en: 'Review delivery and keep a record' },
        paragraphs: {
          ar: [
            'عند النشر، افحص المقال على الهاتف وسطح المكتب. راجع العنوان والنص والصور والروابط وخصائصها، ثم تأكد من أن الرابط يصل إلى الصفحة الصحيحة من دون خطأ. سجّل تاريخ النشر ورابط المقال وأي اختلاف عن الموجز.',
            'تابع ما تستطيع قياسه فعلاً مثل زيارات الإحالة والتفاعل. إذا لم تكن لديك بيانات كافية، سجّل أن النتيجة غير محسومة. توثيق ما تعرفه وما لا تعرفه يجعل قرارات النشر التالية أفضل.',
          ],
          en: [
            'When the article goes live, review it on mobile and desktop. Check the title, text, images, links and attributes, and make sure the destination works. Record the publication date, article URL and any differences from the approved brief.',
            'Follow outcomes you can actually observe, such as referral visits and engagement. If there is not enough data, record the result as inconclusive. Knowing the limits of the evidence makes your next publishing decisions better.',
          ],
        },
      },
    ],
    sources: [
      { title: 'Google Search Central: Creating helpful, reliable, people-first content', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
      { title: 'Google Search Central: Link best practices', url: 'https://developers.google.com/search/docs/crawling-indexing/links-crawlable' },
      { title: 'Google Search Central: Qualify your outbound links', url: 'https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links' },
    ],
  },
  {
    slug: 'link-building-budget',
    category: { ar: 'التخطيط والميزانية', en: 'Strategy & budgets' },
    title: {
      ar: 'كيف تخطّط ميزانية بناء الروابط دون شراء عشوائي؟',
      en: 'How to plan a link building budget with a clear purpose',
    },
    description: {
      ar: 'إطار عملي لتوزيع ميزانية الباك لينك بين اختيار الناشرين والمحتوى والمراجعة، وتحديد الأولويات وقراءة النتائج قبل التوسّع.',
      en: 'Plan publisher, content and review costs, prioritize useful destination pages and define what you will measure before expanding your backlink campaign.',
    },
    author: editorialTeam,
    readTime: 5,
    sections: [
      {
        heading: { ar: 'ابدأ بالهدف والصفحة', en: 'Start with a goal and a destination' },
        paragraphs: {
          ar: [
            '«نريد المزيد من الروابط» لا يكفي لتحديد الميزانية. اختر هدفاً يمكن مناقشته، مثل تعريف جمهور متخصص بدليل جديد أو الوصول إلى قرّاء في سوق محدد. ثم اختر صفحة مكتملة تناسب هذا الهدف.',
            'راجع الصفحة قبل تمويل النشر: هل تشرح الموضوع بوضوح؟ هل تعمل جيداً على الهاتف؟ هل يعرف الزائر ما يفعله بعدها؟ قد يكون تخصيص جزء من الميزانية لتحسين الصفحة أكثر فائدة من إرسال زيارات إضافية إليها بحالتها الحالية.',
          ],
          en: [
            '“We need more links” is not enough to set a budget. Choose a goal you can discuss, such as introducing a specialist audience to a new guide or reaching readers in a specific market. Then select a complete destination page that serves it.',
            'Review that page before funding placements. Is the subject clear? Does it work well on mobile? Does the visitor know what to do next? Improving the destination may be more useful than sending additional visitors to it as it stands.',
          ],
        },
      },
      {
        heading: { ar: 'احسب تكلفة التنفيذ الكاملة', en: 'Include the complete delivery cost' },
        paragraphs: {
          ar: [
            'سعر النشر ليس كامل تكلفة الحملة. أضف البحث عن الناشرين وتقييمهم، وكتابة المقال وتحريره، وإعداد الصور المرخّصة عند الحاجة، ووقت المراجعة والتنسيق. تأكد من عدم احتساب الكتابة مرتين إذا كانت مشمولة في العرض.',
            'استخدم معادلة بسيطة: ميزانية الحملة = عروض النشر + المحتوى + وقت التقييم والمتابعة. اترك مجالاً للتعديلات المطلوبة فعلاً، ولا تخصّص احتياطياً عشوائياً أو نسبة ثابتة لا ترتبط بطبيعة العمل.',
          ],
          en: [
            'The placement price is not the full campaign cost. Include publisher research and evaluation, writing and editing, licensed imagery where needed, and coordination and review time. Avoid counting writing twice when it is already part of the offer.',
            'Use a simple model: campaign budget equals publication offers plus content plus evaluation and follow-up time. Allow for revisions the work actually requires, rather than applying an arbitrary reserve percentage.',
          ],
        },
      },
      {
        heading: { ar: 'قارن فرصاً متشابهة', en: 'Compare like-for-like opportunities' },
        paragraphs: {
          ar: [
            'ضع العروض في قائمة تتضمن اللغة والتخصص والجمهور والسعر وما يشمله وشروط النشر. قارن مواقع تؤدي دوراً متقارباً في خطتك. السعر الأقل أو المؤشر الأعلى لا يحددان وحدهما القيمة الأفضل.',
            'إذا كان أحد العروض أغلى، دوّن سبباً ملموساً لدفع الفرق: جمهور أكثر صلة، أو إنتاج محتوى مشمول، أو شروط تناسب حاجتك. إذا لم تستطع تفسير الفرق، اطلب معلومات إضافية أو احتفظ بالميزانية لفرصة أوضح.',
          ],
          en: [
            'Build a shortlist with language, subject coverage, audience, price, included services and publication terms. Compare offers that play similar roles in your plan. Neither the lowest price nor the highest metric establishes the best value by itself.',
            'If an offer costs more, document a concrete reason to pay the difference: a closer audience fit, included content production or terms that suit your needs. If you cannot explain it, request more information or keep the budget for a clearer opportunity.',
          ],
        },
      },
      {
        heading: { ar: 'ابدأ بحجم تستطيع مراجعته', en: 'Start at a scale you can review' },
        paragraphs: {
          ar: [
            'اختر مجموعة أولية تستطيع إعداد محتواها ومراجعة تسليمها بعناية. ليس هناك عدد موحّد يصلح لكل موقع أو ميزانية. سرعة التنفيذ المناسبة تعتمد على جودة الأفكار والموارد المتاحة ومتطلبات الناشرين.',
            'بعد الدفعة الأولى، راجع طريقة العمل: هل كان الموجز واضحاً؟ هل ظهرت تكاليف لم تحسبها؟ هل جاءت المقالات بالمستوى المطلوب؟ عالج هذه النقاط قبل توسيع عدد الطلبات.',
          ],
          en: [
            'Choose an initial group of placements you can brief and review carefully. There is no universal count that suits every website or budget. The right pace depends on useful article ideas, available resources and publisher requirements.',
            'After the first group, review the workflow. Was the brief clear? Did unexpected costs appear? Did the articles meet the agreed standard? Resolve those issues before increasing the order volume.',
          ],
        },
      },
      {
        heading: { ar: 'حدّد القياس قبل الإنفاق', en: 'Define measurement before spending' },
        paragraphs: {
          ar: [
            'سجّل مستوى الأداء قبل بدء الحملة، واختر فترة مراجعة تناسب حجم بياناتك. استخدم تحليلات موقعك لمتابعة الإحالات والتفاعل، وSearch Console لمقارنة النقرات والظهور حسب الصفحة أو الاستعلام أو البلد عندما يلزم.',
            'لا تقسّم أي زيادة في الزيارات على تكلفة الحملة وتسميها عائداً مثبتاً من الروابط. يلزم فهم الإسناد والمبيعات والتكاليف والعوامل الأخرى المؤثرة. عندما تكون البيانات غير كافية، قيّم جودة التنفيذ والتعلّم المحقق وأجّل الحكم المالي القاطع.',
          ],
          en: [
            'Record a baseline before the campaign and choose a review period that suits the amount of data available. Use your website analytics for referrals and engagement, and Search Console to compare clicks and impressions by page, query or country where useful.',
            'Do not divide any increase in traffic by campaign cost and call it proven link-building ROI. Attribution, sales, costs and other changes need consideration. When the evidence is limited, evaluate delivery quality and what you learned, and leave the financial conclusion open.',
          ],
        },
      },
    ],
    sources: [
      { title: 'Google Search Console: Performance report overview', url: 'https://support.google.com/webmasters/answer/7576553' },
    ],
  },
];
