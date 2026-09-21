# Linkaza — الموقع التسويقي

إعادة تصميم الموقع التسويقي لـ [linkaza.com](https://linkaza.com). الواجهة العربية هي الأساسية، والإنكليزية لها نسخ كاملة على [en.linkaza.com](https://en.linkaza.com). تطبيق الحسابات والطلبات على `app.linkaza.com` مستقل عن هذا المشروع.

## التشغيل

يتطلب Node.js 20.9 أو أحدث.

```bash
npm ci
npm run dev
```

افتح `http://localhost:3000/` للعربية و`http://localhost:3000/en` للإنكليزية. للإنتاج: `npm run build` ثم `npm start`، أو انشر المشروع على استضافة Next.js تدعم App Router وProxy.

## إعداد الإنتاج

اربط `linkaza.com` و`en.linkaza.com` **بالبناء نفسه**، واضبط المتغيرين قبل البناء:

```env
NEXT_PUBLIC_SITE_MODE=production
INDEXABLE_SITE=true
```

في المعاينة المحلية تبقى `INDEXABLE_SITE` غير مفعّلة؛ لذلك تُطبع `noindex` وتمنع `robots.txt` الفهرسة. لا تنشر البناء التجريبي كما هو. بعد الربط تأكد من استجابة 200 لكل صفحة على نطاقها، ومن تحويل `/ar/...` إلى الرابط العربي الأساسي، وتحويل `/en/...` على النطاق العربي إلى النطاق الإنكليزي. أرسل `sitemap.xml` لكل نطاق في Search Console وتابع التحويلات والفهرسة بعد الإطلاق.

`marketplace` في الموقع **نموذج واجهة ببيانات افتراضية موسومة بوضوح**. العروض الحقيقية والأسعار وحالة الطلبات تُعرض داخل تطبيق الحسابات. لا يحتاج الموقع التسويقي إلى ملف حساب خدمة أو مفاتيح Google Search Console؛ احتفظ بملفات الاعتماد خارج المستودع.

## الجودة والتحديث

```bash
npm run typecheck
npm test
npm run build
# بعد تشغيل الموقع:
npm run test:seo
npm run test:e2e
```

لتوليد صور المشاركة عند تعديل الهوية، ثبّت Chrome/Chromium وشغّل `npm run generate:og`. على جهاز يستخدم Chrome مثبتاً: عيّن `PLAYWRIGHT_CHANNEL=chrome` قبل الأمر.

محتوى الصفحات في `src/lib/content.ts`، والمقالات في `src/lib/articles.ts`، ومسارات اللغات والروابط في `src/lib/site.ts`. توجد تفاصيل الإطلاق والحدود الحالية في [دليل التسليم](docs/REDESIGN_HANDOFF_AR.md).
