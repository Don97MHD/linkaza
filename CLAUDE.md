# CLAUDE.md — Linkaza Project Context

> ملف تسليم (handoff) لِـ Claude Code. اقرأه أول كل جلسة. الشرح بالعربي/الإنجليزي.
> الخطة الكاملة المفصّلة موجودة في `docs/linkaza-master-plan.md` — ارجع لها دائماً.

## نظرة عامة (Overview)
Linkaza منصة بيع باك لينك (link building) — https://linkaza.com/ . التطبيق الفعلي على `app.linkaza.com`. هذا المستودع هو **الموقع التسويقي** (marketing site) فقط.
المنافس المرجعي: **https://bazoom.com/** — الفكرة والقيم مقتبسة منه (80,000+ ناشر، بدون اشتراك، دعم 24/7، Marketplace، Content service، Strategy Builder، Analytics).

## الهدف (Goal)
هوية بصرية جديدة كاملة + سيو احترافي (يتصدّر جوجل) + نصوص تبيع وتتأرشف (بأسلوب أورويل). التفاصيل في الخطة.

## الستاك (Tech Stack)
- **Next.js 13.4.1** — Pages Router (`src/pages/`). أصل القالب: `xisen-next`، الهوم يستخدم `home-7`.
- React 18.2، **Bootstrap 5**، CSS مخصّص في `public/assets/css/` (`style.css` هو الأساس).
- أنيميشن مثبّت بس غير مستغل: **framer-motion**، **aos**، **react-slick**، **react-countup**. الحالي يعتمد `WOW.js`/`AOS` (`wow fadeInUp`) — قديم.
- Redux Toolkit، react-hook-form + yup، react-toastify.

## خريطة المشروع (Structure)
- `src/pages/` — 21 صفحة (index, marketplace, pricing, solutions, agencies, consultants, businesses, publishers, content-service, strategy-builder, analytics, about, blog, contact, affiliate, support, terms, privacy-policy, 404...).
- `src/components/homes/home-7/` — أقسام الهوم (hero-area, feature-area, service-area, price-area, testimonial-area...).
- `src/components/common/seo.jsx` — **مكوّن SEO (بدائي، يحتاج إعادة بناء — أولوية P0)**.
- `src/pages/_document.jsx` — الخطوط (فيه خطأ مطبعي، انظر أدناه).
- `src/pages/_app.jsx` — AOS init + Providers.
- `public/` — `robots.txt`, `sitemap.xml`, `llms-full.txt`, assets.
- `src/layout/wrapper.jsx` — الهيدر/الفوتر.

## نتائج تدقيق SEO (الثغرات الحرجة — مرتّبة بالأثر)
1. **صفر Structured Data/Schema** بكل الموقع (`grep ld+json` = 0). لا Organization/Product/FAQ/Article.
2. **`seo.jsx` ثابت**: عنوان + وصف hardcoded واحد لكل الصفحات. لازم props لكل صفحة.
3. **لا Open Graph ولا Twitter Cards** → روابط السوشال/واتساب بلا صورة.
4. **لا canonical** → خطر duplicate content.
5. **محتوى رقيق/عام** — bazoom عندو 1500–2500 كلمة بالهوم لحالها.
6. **`_document.jsx` سطر 8: خطأ مطبعي** `display=swapj` → لازم `swap`. يُفضّل النقل لـ `next/font`.
7. **`robots.txt` سطر 10: توجيه مخترع** `Clean:` — احذفه.
8. **`sitemap.xml` ثابت** — كل `lastmod`=2025-10-24، `changefreq daily` غير صادق. اجعله ديناميكياً.
9. **`lang="en"` ثابت** مع زر تبديل عربي بالناف بلا محتوى عربي ولا hreflang → سوق خليجي ضائع.

## الأنيميشن
الحالي WOW.js/AOS (`data-wow-delay`). الخطة: استبداله بـ **framer-motion** (مثبّت) — scroll-reveal، micro-interactions، عدّادات (`react-countup`)، مع احترام `prefers-reduced-motion` وعدم إضرار LCP.

## أسلوب النصوص: قواعد أورويل الستة
1. تجنّب الكليشيهات/الاستعارات المستهلكة. 2. لا كلمة طويلة إذا القصيرة تكفي. 3. احذف أي كلمة زائدة. 4. مبني للمعلوم لا مجهول. 5. لا مصطلح أجنبي إذا في مقابل يومي. 6. اكسر القاعدة قبل كتابة شيء بشع.
السبب SEO: الوضوح والجمل القصيرة والإجابة المباشرة = readability أعلى = ترتيب أفضل.

## خطة التنفيذ بمراحل (ملخّص — التفصيل في docs/linkaza-master-plan.md)
- **Phase 0 (P0):** أساس SEO التقني — إعادة بناء `seo.jsx` (props لكل صفحة) + Schema (Organization/Product/FAQ/Breadcrumb/Article) + OG + Twitter + canonical + إصلاح الخط + تنظيف robots + sitemap ديناميكي + جاهزية hreflang.
- **Phase 1 (P0/P1):** هوية بصرية جديدة كاملة — Design tokens (CSS variables): ألوان جديدة (نبتعد عن الأزرق التقني)، خطوط حديثة (Sora/Satoshi + Inter)، لوغو، إعادة تصميم Hero، مكتبة مكوّنات موحّدة.
- **Phase 2 (P1):** طبقة أنيميشن framer-motion.
- **Phase 3 (P0 محتوى):** إعادة كتابة الـ21 صفحة (أورويل) + محتوى طويل بالهوم + صفحات pillar/supporting + ربط داخلي + تقييمات/ثقة حقيقية (استبدال الأسماء الوهمية المكرّرة David/James/Sarah) + FAQ.
- **Phase 4 (P1):** تحسين التحويل — CTA، social proof، جدول أسعار محسّن، landing لكل شريحة.
- **Phase 5 (P2 مستمر):** محرّك المدونة + ربط Search Console (بيانات 28 يوم) لقرارات مبنية على الأرقام.

## ابدأ من هنا (Start Here)
نفّذ **Phase 0** أولاً (أعلى مردود، أرخص). أول خطوة ملموسة: إعادة بناء `src/components/common/seo.jsx` ليقبل props ويحقن JSON-LD، ثم مرّره من كل صفحة بعنوان/وصف/canonical/schema فريد.

## قرارات معلّقة من المالك (Ali)
- اتجاه اللون (نبتعد عن الأزرق التقني؟ لون مفضّل؟).
- اللوغو: نهائي أم نعيد رسمه؟
- نسخة عربية فعلية للسوق الخليجي أم نبقى إنجليزي؟

## أوامر (Commands)
- تطوير: `npm run dev` — عاين على http://localhost:3000
- بناء: `npm run build` ثم `npm start`
- فحص: `npm run lint`

## ملاحظات
- تعليقات الكود الحالية بالعربي — حافظ على نفس الأسلوب.
- Search Console: سحب البيانات كان موقوفاً في بيئة Cowork بسبب مساحة القرص؛ في Claude Code المحلي تقدر تشغّله عبر service-account JSON (المفتاح كان باسم `seo-claude-503117-*.json`).
- **مبدأ الجودة:** جوجل يعاقب الروابط منخفضة الجودة (Panda/Penguin) — النصوص يجب أن تعكس قيمة حقيقية لا حشو.
