export type Locale = 'ar' | 'en';

export const origins = { ar: 'https://linkaza.com', en: 'https://en.linkaza.com' } as const;
export const productionDomains = process.env.NEXT_PUBLIC_SITE_MODE === 'production';
export const isIndexable = process.env.INDEXABLE_SITE === 'true';

export function resolveRoute(segments: string[] = []) {
  const locale: Locale = segments[0] === 'en' ? 'en' : 'ar';
  return { locale, slug: (locale === 'en' ? segments.slice(1) : segments).join('/') };
}

export function canonical(locale: Locale, slug = '') {
  return `${origins[locale]}${slug ? `/${slug}` : '/'}`;
}

export function hrefFor(locale: Locale, slug = '') {
  if (productionDomains) return canonical(locale, slug);
  return `${locale === 'en' ? '/en' : ''}${slug ? `/${slug}` : ''}` || '/';
}

export function choose<T>(locale: Locale, ar: T, en: T): T { return locale === 'ar' ? ar : en; }

export const homeMeta = {
  ar: { title: 'لينكازا | شراء باك لينك وجيست بوست عربي وإنجليزي', description: 'منصة Linkaza لشراء باك لينك وجيست بوست من مواقع عربية وإنجليزية. قارن الناشرين، الأسعار، التخصصات وشروط النشر، ثم أدر طلباتك من لوحة واحدة.' },
  en: { title: 'Linkaza | Buy Backlinks & Guest Posts in Arabic and English', description: 'Linkaza is a backlink and guest post marketplace for Arabic and English campaigns. Compare publishers, prices, niches and placement terms in one platform.' },
};

export const seoTitles: Record<string, Record<Locale, string>> = {
  marketplace: { ar: 'شراء باك لينك وجيست بوست | سوق مواقع لينكازا', en: 'Backlink & Guest Post Marketplace | Linkaza' },
  pricing: { ar: 'أسعار الباك لينك والجيست بوست | لينكازا', en: 'Backlink & Guest Post Pricing | Linkaza' },
  solutions: { ar: 'حلول بناء الروابط للوكالات والشركات | لينكازا', en: 'Link Building Solutions for Agencies & Brands | Linkaza' },
  agencies: { ar: 'خدمة باك لينك للوكالات وشركات السيو | لينكازا', en: 'White Label Link Building for SEO Agencies | Linkaza' },
  consultants: { ar: 'أدوات اختيار باك لينك لمستشاري السيو | لينكازا', en: 'Backlink Selection for SEO Consultants | Linkaza' },
  businesses: { ar: 'باك لينك للشركات والمتاجر الإلكترونية | لينكازا', en: 'Backlinks for Businesses & Ecommerce Brands | Linkaza' },
  'content-service': { ar: 'كتابة محتوى جيست بوست وسيو | لينكازا', en: 'SEO Content Writing for Guest Posts | Linkaza' },
  'strategy-builder': { ar: 'استراتيجية بناء الروابط والسايلو | لينكازا', en: 'Link Building Strategy & Content Silo Planning | Linkaza' },
  analytics: { ar: 'تحليل نتائج الباك لينك وقياس الحملات | لينكازا', en: 'Backlink Analytics & Campaign Measurement | Linkaza' },
  'guest-posts': { ar: 'خدمة جيست بوست عربي وإنكليزي | لينكازا', en: 'Arabic & English Guest Posting | Linkaza' },
  'how-it-works': { ar: 'كيف تعمل Linkaza؟ شراء باك لينك خطوة بخطوة', en: 'How Linkaza Works | Buy Guest Posts Step by Step' },
  'quality-standards': { ar: 'معايير جودة الباك لينك قبل الشراء | لينكازا', en: 'Backlink Quality Standards Before You Buy | Linkaza' },
  publishers: { ar: 'انضم كناشر واعرض فرص النشر في موقعك | لينكازا', en: 'Join as a Publisher | Linkaza' },
  about: { ar: 'عن لينكازا | سوق باك لينك عربي وإنجليزي', en: 'About Linkaza | Arabic & English Backlink Marketplace' },
  faq: { ar: 'أسئلة شائعة عن شراء الباك لينك والجيست بوست | لينكازا', en: 'Backlink & Guest Post FAQ | Linkaza' },
  blog: { ar: 'أدلة الباك لينك والجيست بوست | معرفة لينكازا', en: 'Link Building & Guest Posting Guides | Linkaza' },
  affiliate: { ar: 'برنامج شراكات وإحالات لخدمات الباك لينك | لينكازا', en: 'Link Building Referral Partnership | Linkaza' },
  support: { ar: 'دعم Linkaza لطلبات الباك لينك والناشرين', en: 'Linkaza Support for Backlink Orders & Publishers' },
  contact: { ar: 'تواصل مع Linkaza لخدمات الباك لينك والجيست بوست', en: 'Contact Linkaza for Backlinks & Guest Posts' },
};

export const seoKeywords: Record<string, Record<Locale, string[]>> = {
  default: {
    ar: ['باك لينك', 'شراء باك لينك', 'جيست بوست', 'تحسين محركات البحث', 'روابط خلفية', 'بناء روابط خارجية', 'فحص الباك لينك'],
    en: ['link building service', 'buy backlinks', 'guest posting service', 'guest post marketplace', 'backlink marketplace', 'backlink services'],
  },
  marketplace: {
    ar: ['باك لينك', 'شراء باك لينك', 'جيست بوست', 'سوق باك لينك', 'مواقع بيع باك لينك', 'شراء جيست بوست'],
    en: ['buy backlinks', 'backlink marketplace', 'guest post marketplace', 'buy guest posts', 'backlink services', 'publisher marketplace'],
  },
  'how-it-works': {
    ar: ['كيف اشتري باك لينك', 'طريقة شراء جيست بوست', 'آلية شراء باك لينك', 'خطوات نشر مقال ضيف'],
    en: ['how to buy backlinks', 'how guest posting works', 'buy guest posts step by step', 'backlink order workflow'],
  },
  'guest-posts': {
    ar: ['جيست بوست عربي', 'شراء جيست بوست', 'نشر مقال ضيف', 'خدمة كتابة ونشر مقالات'],
    en: ['guest posting service', 'guest posting services', 'buy guest posts', 'guest post marketplace', 'guest posts', 'arabic guest posts'],
  },
  pricing: {
    ar: ['أسعار الباك لينك', 'تكلفة جيست بوست', 'سعر نشر مقال', 'ميزانية بناء الروابط'],
    en: ['backlink pricing', 'guest post pricing', 'link building budget', 'guest post cost'],
  },
  'quality-standards': {
    ar: ['جودة الباك لينك', 'تقييم موقع باك لينك', 'معايير اختيار جيست بوست', 'روابط خارجية آمنة'],
    en: ['backlink quality', 'website quality checklist', 'guest post quality', 'safe link building'],
  },
  publishers: {
    ar: ['بيع باك لينك', 'بيع جيست بوست', 'الانضمام كناشر', 'ربح من نشر المقالات'],
    en: ['sell guest posts', 'sell backlinks', 'join as publisher', 'publisher monetization'],
  },
  solutions: {
    ar: ['حلول بناء الروابط', 'خدمة باك لينك', 'جيست بوست للشركات', 'تحسين محركات البحث'],
    en: ['link building solutions', 'link building service', 'backlink services', 'guest posting service'],
  },
  agencies: {
    ar: ['باك لينك للوكالات', 'خدمة سيو', 'حملات جيست بوست', 'بناء روابط للعملاء'],
    en: ['white label link building', 'link building agency', 'seo link building services', 'backlink services'],
  },
  consultants: {
    ar: ['مستشار سيو', 'تحليل الباك لينك', 'اختيار باك لينك', 'تحسين محركات البحث'],
    en: ['seo consultant', 'backlink selection', 'link building consultant', 'guest post outreach'],
  },
  businesses: {
    ar: ['باك لينك للشركات', 'جيست بوست للشركات', 'روابط خلفية للمتاجر', 'تحسين محركات البحث للشركات'],
    en: ['backlinks for business', 'backlinks for ecommerce', 'guest posts for brands', 'seo backlink services'],
  },
  'content-service': {
    ar: ['كتابة محتوى سيو', 'خدمة كتابة محتوى', 'كتابة جيست بوست', 'محتوى باك لينك'],
    en: ['seo content writing service', 'content writing service', 'guest post content writing', 'seo content brief'],
  },
  'strategy-builder': {
    ar: ['استراتيجية بناء الروابط', 'سايلو سيو', 'تخطيط باك لينك', 'تحليل فجوة المنافسين'],
    en: ['link building strategy', 'content silo', 'competitor gap analysis', 'link building plan'],
  },
  analytics: {
    ar: ['تحليل الباك لينك', 'تحليل السيو', 'قياس حملات الباك لينك', 'Google Search Console'],
    en: ['backlink analytics', 'seo analytics', 'search console reporting', 'link building measurement'],
  },
  about: {
    ar: ['سوق باك لينك عربي', 'منصة جيست بوست', 'لينكازا', 'شراء باك لينك'],
    en: ['backlink marketplace', 'guest post marketplace', 'Linkaza', 'buy backlinks'],
  },
  blog: {
    ar: ['دليل باك لينك', 'فحص الباك لينك', 'جيست بوست', 'تحسين محركات البحث'],
    en: ['link building guide', 'backlink checker', 'guest posting guide', 'backlink quality checklist'],
  },
  affiliate: {
    ar: ['برنامج افلييت', 'شراكة سيو', 'إحالات باك لينك', 'برنامج شركاء'],
    en: ['affiliate program', 'seo affiliate program', 'link building referral', 'partner program'],
  },
  support: {
    ar: ['دعم سيو', 'دعم باك لينك', 'مساعدة طلب جيست بوست', 'دعم الناشرين'],
    en: ['seo support', 'backlink order support', 'guest post support', 'publisher support'],
  },
  contact: {
    ar: ['تواصل شركة سيو', 'تواصل باك لينك', 'خدمة جيست بوست', 'لينكازا تواصل'],
    en: ['contact seo agency', 'contact link building service', 'guest posting service', 'Linkaza contact'],
  },
};

export const navItems = [
  { slug: 'marketplace', ar: 'سوق المواقع', en: 'Marketplace' },
  { slug: 'how-it-works', ar: 'كيف تعمل', en: 'How it works' },
  { slug: 'solutions', ar: 'الحلول', en: 'Solutions' },
  { slug: 'pricing', ar: 'الأسعار', en: 'Pricing' },
  { slug: 'blog', ar: 'المعرفة', en: 'Resources' },
];

export const faqs = {
  ar: [
    ['ما هي لينكازا؟', 'لينكازا سوق باك لينك وجيست بوست يربط أصحاب المواقع والوكالات والشركات بالناشرين. يمكنك مقارنة العروض حسب اللغة، التخصص، السعر، مؤشرات السيو وشروط النشر، ثم إدارة الطلب من لوحة واحدة.'],
    ['كيف أختار الموقع المناسب للباك لينك؟', 'ابدأ بملاءمة تخصص الموقع وجمهوره لمشروعك. راجع جودة المحتوى، الزيارات ومصادرها، تاريخ النطاق، وتجربة القراءة على الهاتف. مؤشرات قوة النطاق مفيدة للمقارنة، لكنها لا تكفي وحدها.'],
    ['ما الفرق بين باك لينك وجيست بوست؟', 'الباك لينك هو الرابط نفسه من موقع آخر إلى موقعك، أما الجيست بوست فهو مقال منشور لدى موقع آخر وقد يتضمن رابطاً مناسباً داخل المحتوى أو التعريف. في الحملات الجيدة يكون المقال مفيداً قبل أن يكون حاملاً للرابط.'],
    ['هل توجد باقات أو اشتراك إلزامي؟', 'النموذج الأساسي هو الدفع مقابل الطلب. يختلف السعر بحسب الناشر، الموقع، اللغة ومتطلبات المحتوى. راجع السعر النهائي وشروط العرض داخل المنصة قبل الدفع أو استخدام رصيد الحساب.'],
    ['كيف تعمل عملية شراء باك لينك؟', 'تنشئ حساباً، تشحن الرصيد، تختار موقعاً مناسباً، ترسل الرابط المستهدف والنص الرابط والمحتوى أو التعليمات، ثم تتابع حالة الطلب حتى النشر والمراجعة النهائية.'],
    ['هل تضمنون ترتيباً محدداً في Google؟', 'لا. لا يمكن ضمان ترتيب أو عدد زيارات من شراء نشر أو رابط. النشر المدفوع يجب أن يكون واضحاً، والروابط المدفوعة تحتاج خصائص مناسبة مثل sponsored أو nofollow وفق سياسات محركات البحث.'],
    ['هل يمكنني الانضمام بصفتي ناشراً؟', 'نعم، يمكنك إنشاء حساب في المنصة وإرسال بيانات موقعك وشروط النشر واللغة والسعر والتخصصات. يجب أن تكون لديك صلاحية النشر وأن تقدّم معلومات دقيقة عن الموقع والعروض.'],
    ['أين أتابع الطلبات والدعم؟', 'إدارة الطلبات تتم في app.linkaza.com. يمكنك متابعة الحالات مثل Pending وApproved وPublished وSettled، وللاستفسارات قبل الطلب أو المساعدة يمكنك مراسلة support@linkaza.com.'],
  ],
  en: [
    ['What is Linkaza?', 'Linkaza is a backlink and guest post marketplace connecting businesses, agencies and publishers. Compare offers by language, niche, price, SEO signals and placement terms, then manage orders from one dashboard.'],
    ['How do I choose a relevant website?', 'Start with topic and audience relevance. Review content quality, traffic sources, domain history, mobile readability and publishing terms. Authority metrics can help you compare, but should never be your only selection criterion.'],
    ['What is the difference between a backlink and a guest post?', 'A backlink is the link from another website to yours. A guest post is an article published on another website that may include a relevant link in the content or author information. Good campaigns treat the article as useful content first.'],
    ['Do I need a subscription?', 'The core model is pay per order. Pricing depends on the publisher, website, language and content requirements. Review the final price and offer terms inside the platform before paying or using account balance.'],
    ['How does buying a backlink work?', 'Create an account, top up your balance, choose a relevant publisher, submit the destination URL, anchor text and content or instructions, then follow the order until publication and final review.'],
    ['Do you guarantee Google rankings?', 'No. Buying a placement cannot guarantee rankings or traffic. Paid publication should be disclosed, and paid links should use appropriate attributes such as sponsored or nofollow under search engine policies.'],
    ['Can I join as a publisher?', 'Yes. Create a platform account and submit your website details, publishing terms, language, price and niches. You must have permission to publish and provide accurate information about your website and offers.'],
    ['Where do I manage orders or get help?', 'Orders are managed at app.linkaza.com. You can follow statuses such as Pending, Approved, Published and Settled. For pre-order questions or support, email support@linkaza.com.'],
  ],
};
