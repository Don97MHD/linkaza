export type Locale = 'ar' | 'en';

export const origins = { ar: 'https://linkaza.com', en: 'https://en.linkaza.com' } as const;
export const APP_URL = 'https://app.linkaza.com/';
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
  ar: { title: 'لينكازا | منصة باك لينك وجيست بوست للمواقع العربية', description: 'اختر فرص نشر تناسب علامتك مع لينكازا. استكشف الباك لينك والجيست بوست، قارن معايير الجودة وشروط النشر، وأدر طلباتك من مكان واحد.' },
  en: { title: 'Linkaza | Backlink & Guest Post Marketplace', description: 'Find the right publishing opportunities with Linkaza. Explore guest posts, compare publisher quality and placement terms, and manage your orders in one place.' },
};

export const seoTitles: Record<string, Record<Locale, string>> = {
  marketplace: { ar: 'شراء باك لينك وجيست بوست | سوق مواقع لينكازا', en: 'Backlink & Guest Post Marketplace | Linkaza' },
  pricing: { ar: 'أسعار الباك لينك والجيست بوست | لينكازا', en: 'Backlink & Guest Post Pricing | Linkaza' },
  'guest-posts': { ar: 'خدمة جيست بوست عربي وإنكليزي | لينكازا', en: 'Arabic & English Guest Posting | Linkaza' },
  publishers: { ar: 'انضم كناشر واعرض فرص النشر في موقعك | لينكازا', en: 'Join as a Publisher | Linkaza' },
  agencies: { ar: 'حلول الباك لينك والجيست بوست للوكالات | لينكازا', en: 'Link Building for Agencies | Linkaza' },
  blog: { ar: 'أدلة الباك لينك والجيست بوست | معرفة لينكازا', en: 'Link Building & Guest Posting Guides | Linkaza' },
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
    ['ما هي لينكازا؟', 'لينكازا سوق يربط أصحاب المواقع والوكالات بالناشرين لطلب المقالات الدعائية والجيست بوست. يمكنك مراجعة العرض وشروط النشر قبل اتخاذ قرارك، ثم إدارة الطلب في المنصة.'],
    ['كيف أختار الموقع المناسب للباك لينك؟', 'ابدأ بملاءمة تخصص الموقع وجمهوره لمشروعك. راجع جودة المحتوى، الزيارات ومصادرها، تاريخ النطاق، وشروط النشر. مؤشرات قوة النطاق مفيدة للمقارنة، لكنها لا تكفي وحدها.'],
    ['هل توجد باقات أو اشتراك إلزامي؟', 'النموذج الأساسي هو الدفع مقابل الطلب. يختلف السعر بحسب الناشر، الموقع ومتطلبات المحتوى. راجع السعر النهائي وشروط العرض داخل المنصة قبل الدفع.'],
    ['هل تضمنون ترتيباً محدداً في Google؟', 'لا. لا يمكن ضمان ترتيب أو عدد زيارات من شراء نشر أو رابط. Google تعتبر الروابط المدفوعة التي تمرر إشارات ترتيب مخالفة لسياساتها؛ يجب تمييز الإعلانات بروابط sponsored أو nofollow.'],
    ['هل يمكنني الانضمام بصفتي ناشراً؟', 'نعم، يمكنك إنشاء حساب في المنصة وإرسال بيانات موقعك وشروط النشر. يجب أن تكون لديك صلاحية النشر وأن تقدّم معلومات دقيقة عن الموقع والعروض.'],
    ['أين أتابع الطلبات والدعم؟', 'إدارة الطلبات تتم في app.linkaza.com. وللاستفسارات قبل الطلب أو المساعدة يمكنك مراسلة support@linkaza.com.'],
  ],
  en: [
    ['What is Linkaza?', 'Linkaza is a marketplace connecting businesses and agencies with publishers for sponsored content and guest posts. Review the offer and its publishing terms, then manage your order in the platform.'],
    ['How do I choose a relevant website?', 'Start with topic and audience relevance. Review content quality, traffic sources, domain history and publishing terms. Domain authority metrics can help you compare, but should never be your only selection criterion.'],
    ['Do I need a subscription?', 'The core model is pay per order. Pricing depends on the publisher, website and content requirements. Review the final price and offer terms inside the platform before paying.'],
    ['Do you guarantee Google rankings?', 'No. Buying a placement cannot guarantee rankings or traffic. Google considers paid links that pass ranking credit to be link spam; paid placements should use sponsored or nofollow link attributes.'],
    ['Can I join as a publisher?', 'Yes. Create a platform account and submit your website details and publishing terms. You must have permission to publish and provide accurate information about your website and offers.'],
    ['Where do I manage orders or get help?', 'Orders are managed at app.linkaza.com. For pre-order questions or help, email support@linkaza.com.'],
  ],
};
