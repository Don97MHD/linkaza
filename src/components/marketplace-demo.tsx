'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { choose, type Locale } from '@/lib/site';
import { AuthLink } from './auth-link';
import { Icon } from './icon';

// Public preview data only. A future inventory endpoint must project safe fields
// on the server and must never return a publisher domain, URL, or identifying ID.
const samples = [
  { id: '01', category: 'tech', language: 'en', country: { ar: 'الولايات المتحدة', en: 'United States' }, authority: 32, visits: '18K', lifespan: '5+' },
  { id: '02', category: 'business', language: 'ar', country: { ar: 'الإمارات', en: 'UAE' }, authority: 27, visits: '12K', lifespan: '5+' },
  { id: '03', category: 'lifestyle', language: 'en', country: { ar: 'المملكة المتحدة', en: 'United Kingdom' }, authority: 41, visits: '24K', lifespan: '5+' },
  { id: '04', category: 'tech', language: 'ar', country: { ar: 'السعودية', en: 'Saudi Arabia' }, authority: 36, visits: '16K', lifespan: '5+' },
  { id: '05', category: 'business', language: 'en', country: { ar: 'الولايات المتحدة', en: 'United States' }, authority: 29, visits: '14K', lifespan: '5+' },
] as const;

const categories = [
  { id: 'all', ar: 'الكل', en: 'All' },
  { id: 'tech', ar: 'تقنية', en: 'Technology' },
  { id: 'business', ar: 'أعمال', en: 'Business' },
  { id: 'lifestyle', ar: 'أسلوب حياة', en: 'Lifestyle' },
] as const;

export function MarketplaceDemo({ locale, expanded = false }: { locale: Locale; expanded?: boolean }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [language, setLanguage] = useState('all');
  const [gateOpen, setGateOpen] = useState(false);
  const [prompted, setPrompted] = useState(false);
  const id = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (gateOpen && !dialog.open) dialog.showModal();
    if (!gateOpen && dialog.open) dialog.close();
  }, [gateOpen]);

  const matches = samples.filter(item => {
    const topic = categories.find(cat => cat.id === item.category);
    const searchable = `${topic?.ar} ${topic?.en} ${item.country.ar} ${item.country.en} ${item.id}`.toLowerCase();
    return (category === 'all' || item.category === category) &&
      (language === 'all' || item.language === language) &&
      searchable.includes(query.trim().toLowerCase());
  });

  function openGate() { setPrompted(true); setGateOpen(true); }
  function reset() { setQuery(''); setCategory('all'); setLanguage('all'); if (viewportRef.current) viewportRef.current.scrollTop = 0; }

  return <div className={`marketplace-demo backlink-preview${expanded ? ' backlink-preview--expanded' : ''}`}>
    <div className="preview-appbar">
      <div className="preview-appbar-title"><span className="preview-appbar-mark"><Icon name="link"/></span><div><strong>{choose(locale, 'سوق فرص النشر', 'Publishing opportunities')}</strong><span>{choose(locale, 'معاينة من لينكازا', 'A Linkaza preview')}</span></div></div>
      <span className="preview-appbar-badge"><span/>{choose(locale, '٥ فرص للمعاينة', '5 preview opportunities')}</span>
    </div>
    <div className="demo-topbar"><span className="demo-indicator"><span/>{choose(locale, 'استكشف قبل إنشاء حسابك', 'Explore before signing up')}</span><span className="sample-label">{choose(locale, 'بيانات توضيحية، ليست مخزوناً أو أسعاراً حقيقية', 'Illustrative data, not live inventory or prices')}</span></div>
    <div className="demo-controls">
      <div className="search-field"><Icon name="search"/><label htmlFor={`${id}-search`} className="sr-only">{choose(locale, 'ابحث في النموذج', 'Search the demo')}</label><input id={`${id}-search`} type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={choose(locale, 'ابحث حسب التخصص أو الدولة…', 'Search topic or country…')}/></div>
      <div className="language-filter"><Icon name="globe"/><label htmlFor={`${id}-language`} className="sr-only">{choose(locale, 'لغة الموقع', 'Website language')}</label><select id={`${id}-language`} value={language} onChange={event => setLanguage(event.target.value)}><option value="all">{choose(locale, 'كل اللغات', 'All languages')}</option><option value="ar">{choose(locale, 'العربية', 'Arabic')}</option><option value="en">{choose(locale, 'الإنكليزية', 'English')}</option></select></div>
    </div>
    <div className="demo-categories" aria-label={choose(locale, 'تصفية حسب التخصص', 'Filter by topic')}>{categories.map(item => <button key={item.id} aria-pressed={category === item.id} onClick={() => setCategory(item.id)}>{item[locale]}</button>)}<span className="result-count" role="status" aria-live="polite">{matches.length} {choose(locale, 'نتائج توضيحية', 'demo results')}</span></div>
    {matches.length > 0 ? <div ref={viewportRef} className="preview-viewport" role="region" tabIndex={0} aria-label={choose(locale, 'معاينة الفرص؛ مرّر داخلها لاستكشاف المزيد', 'Opportunity preview; scroll inside to see more')} onScroll={event => { if (!prompted && event.currentTarget.scrollTop > 8) openGate(); }}>
      <div className="preview-table-head" aria-hidden="true"><span>{choose(locale, 'الناشر', 'Publisher')}</span><span>{choose(locale, 'التخصص', 'Category')}</span><span>{choose(locale, 'الدولة واللغة', 'Country / language')}</span><span>AS</span><span>{choose(locale, 'زيارات تقديرية', 'Est. visits')}</span><span>{choose(locale, 'بقاء الرابط', 'Link lifespan')}</span><span>{choose(locale, 'تفاصيل', 'Details')}</span></div>
      <div className="preview-rows">{matches.map(item => <article className="preview-row" key={item.id}>
        <div className="preview-identity"><span className="preview-index" aria-hidden="true">{item.id}</span><div><h3>{choose(locale, `فرصة نشر ${item.id}`, `Placement ${item.id}`)}</h3><span className="preview-domain-mask" aria-label={choose(locale, 'رابط الموقع محجوب', 'Website address hidden')} dir="ltr">••••••••.•••</span></div></div>
        <span className="preview-category"><Icon name={item.category === 'tech' ? 'spark' : item.category === 'business' ? 'chart' : 'globe'}/>{categories.find(cat => cat.id === item.category)?.[locale]}</span>
        <span className="preview-place">{item.country[locale]}<small>{item.language === 'ar' ? choose(locale, 'العربية', 'Arabic') : choose(locale, 'الإنكليزية', 'English')}</small></span>
        <span className="preview-authority"><strong>{item.authority}</strong><small>/ 100</small></span>
        <span className="preview-visits" dir="ltr">{item.visits}</span>
        <span className="preview-time" dir="ltr">{item.lifespan}</span>
        <button type="button" className="preview-unlock" onClick={openGate}><Icon name="lock"/>{choose(locale, 'اكشف العرض', 'View offer')}</button>
      </article>)}</div>
      <div className="preview-scroll-tail"><Icon name="lock"/><span>{choose(locale, 'مرّر للمزيد • الدخول مطلوب لعرض المواقع الحقيقية والأسعار', 'Scroll for more • Sign in to view live publishers and prices')}</span></div>
    </div> : <div className="empty-state"><Icon name="search"/><h3>{choose(locale, 'لا توجد نتائج مطابقة في النموذج', 'No matching demo results')}</h3><p>{choose(locale, 'جرّب كلمة أخرى أو غيّر خيارات التصفية.', 'Try another search or adjust your filters.')}</p><button className="button button-outline" onClick={reset}>{choose(locale, 'إعادة ضبط الفلاتر', 'Reset filters')}</button></div>}
    <div className="demo-note"><Icon name="shield"/><p>{choose(locale, 'البيانات أعلاه مثال للواجهة فقط. رابط الناشر الأصلي غير موجود في الصفحة أو كود المتصفح؛ العروض الحقيقية تظهر داخل حسابك.', 'These are illustrative listings. No real publisher URL is present in the page or browser code; live offers appear in your account.')}</p></div>
    <dialog ref={dialogRef} className="preview-dialog" aria-labelledby={`${id}-gate-title`} onClose={() => setGateOpen(false)}>
      <button type="button" className="preview-dialog-close" onClick={() => setGateOpen(false)} aria-label={choose(locale, 'إغلاق', 'Close')}><Icon name="close"/></button>
      <span className="preview-dialog-icon"><Icon name="lock"/></span>
      <span className="eyebrow">{choose(locale, 'أكمل الاستكشاف', 'KEEP EXPLORING')}</span>
      <h2 id={`${id}-gate-title`}>{choose(locale, 'فرصتك المناسبة بانتظارك.', 'Your next opportunity awaits.')}</h2>
      <p>{choose(locale, 'سجّل دخولك لعرض أسماء المواقع وروابطها وأسعارها وشروط النشر الحقيقية داخل منصة لينكازا.', 'Sign in to see real publisher names, websites, prices and placement terms inside the Linkaza platform.')}</p>
      <div className="preview-dialog-actions"><AuthLink locale={locale} destination="login" className="button button-primary">{choose(locale, 'تسجيل الدخول', 'Log in')}<Icon name="up"/></AuthLink><AuthLink locale={locale} destination="register" className="button button-outline">{choose(locale, 'إنشاء حساب جديد', 'Create account')}</AuthLink></div>
      <span className="preview-dialog-note">{choose(locale, 'لن نطلب كلمة المرور هنا؛ تسجيل الدخول يتم بأمان في app.linkaza.com', 'We never ask for your password here; sign-in happens at app.linkaza.com.')}</span>
    </dialog>
  </div>;
}
