'use client';

import { useId, useState } from 'react';
import { choose, type Locale } from '@/lib/site';
import { AuthLink } from './auth-link';
import { Icon } from './icon';

const samples = [
  { id: 'tech-horizon', name: { ar: 'أفق التقنية', en: 'Tech Horizon' }, category: 'tech', language: 'ar', dr: 62, traffic: '24.8k', icon: 'spark', color: 'mint', domain: 'tech-horizon.example' },
  { id: 'business-point', name: { ar: 'نقطة أعمال', en: 'Business Point' }, category: 'business', language: 'ar', dr: 54, traffic: '18.2k', icon: 'chart', color: 'sand', domain: 'business-point.example' },
  { id: 'daily-living', name: { ar: 'مساحة حياة', en: 'Daily Living' }, category: 'lifestyle', language: 'en', dr: 58, traffic: '32.6k', icon: 'globe', color: 'lavender', domain: 'daily-living.example' },
  { id: 'future-notes', name: { ar: 'مدوّنة المستقبل', en: 'Future Notes' }, category: 'tech', language: 'en', dr: 47, traffic: '12.5k', icon: 'layers', color: 'mint', domain: 'future-notes.example' },
  { id: 'founder-journal', name: { ar: 'دفتر الريادي', en: 'Founder Journal' }, category: 'business', language: 'en', dr: 51, traffic: '16.4k', icon: 'document', color: 'sand', domain: 'founder-journal.example' },
  { id: 'life-stories', name: { ar: 'حكايات يومية', en: 'Life Stories' }, category: 'lifestyle', language: 'ar', dr: 43, traffic: '9.8k', icon: 'globe', color: 'lavender', domain: 'life-stories.example' },
];
const categories = [
  { id: 'all', ar: 'الكل', en: 'All' },
  { id: 'tech', ar: 'تقنية', en: 'Technology' },
  { id: 'business', ar: 'أعمال', en: 'Business' },
  { id: 'lifestyle', ar: 'أسلوب حياة', en: 'Lifestyle' },
];

export function MarketplaceDemo({ locale, expanded = false }: { locale: Locale; expanded?: boolean }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [language, setLanguage] = useState('all');
  const id = useId();
  const matches = samples.filter(item => {
    const topic = categories.find(cat => cat.id === item.category);
    const searchable = `${item.name.ar} ${item.name.en} ${item.domain} ${topic?.ar} ${topic?.en}`.toLowerCase();
    return (category === 'all' || item.category === category) && (language === 'all' || item.language === language) && searchable.includes(query.trim().toLowerCase());
  });
  const visible = expanded || query || category !== 'all' || language !== 'all' ? matches : matches.slice(0, 3);
  function reset() { setQuery(''); setCategory('all'); setLanguage('all'); }
  return <div className="marketplace-demo">
    <div className="demo-topbar"><span className="demo-indicator"><span/>{choose(locale, 'جرّب تجربة الاستكشاف', 'Explore the experience')}</span><span className="sample-label">{choose(locale, 'نموذج توضيحي • ليس مخزوناً حقيقياً', 'Illustrative demo • Not live inventory')}</span></div>
    <div className="demo-controls">
      <div className="search-field"><Icon name="search"/><label htmlFor={`${id}-search`} className="sr-only">{choose(locale, 'ابحث في النموذج', 'Search the demo')}</label><input id={`${id}-search`} type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={choose(locale, 'ابحث عن موقع أو تخصّص…', 'Search a website or topic…')}/></div>
      <div className="language-filter"><Icon name="globe"/><label htmlFor={`${id}-language`} className="sr-only">{choose(locale, 'لغة الموقع', 'Website language')}</label><select id={`${id}-language`} value={language} onChange={event => setLanguage(event.target.value)}><option value="all">{choose(locale, 'كل اللغات', 'All languages')}</option><option value="ar">{choose(locale, 'العربية', 'Arabic')}</option><option value="en">{choose(locale, 'الإنكليزية', 'English')}</option></select></div>
    </div>
    <div className="demo-categories" aria-label={choose(locale, 'تصفية حسب التخصص', 'Filter by topic')}>{categories.map(item => <button key={item.id} aria-pressed={category === item.id} onClick={() => setCategory(item.id)}>{item[locale]}</button>)}<span className="result-count" role="status" aria-live="polite">{visible.length} {choose(locale, 'نتائج توضيحية', 'demo results')}</span></div>
    <div className="publisher-grid">
      {visible.map(item => <article className="publisher-card" key={item.id}>
        <div className="publisher-card-heading"><span className={`publisher-monogram ${item.color}`}><Icon name={item.icon}/></span><span className="tag">{categories.find(cat => cat.id === item.category)?.[locale]}</span></div>
        <h3>{item.name[locale]}</h3><span className="publisher-domain" dir="ltr">{item.domain}</span>
        <div className="publisher-metrics"><div><span>{choose(locale, 'قوة النطاق', 'Domain rating')}</span><strong dir="ltr">{item.dr}<small> / 100</small></strong><div className="metric-bar"><span style={{ width: `${item.dr}%` }}/></div></div><div><span>{choose(locale, 'زيارات نموذجية', 'Sample visits')}</span><strong dir="ltr">{item.traffic}</strong><span className="metric-caption">{choose(locale, 'بيانات افتراضية', 'Illustrative data')}</span></div></div>
        <div className="publisher-bottom"><span><Icon name="globe"/>{item.language === 'ar' ? choose(locale, 'العربية', 'Arabic') : choose(locale, 'الإنكليزية', 'English')}</span><AuthLink locale={locale} destination="register">{choose(locale, 'سجّل لعرض المواقع', 'Sign up to view')}<Icon name="arrow"/></AuthLink></div>
      </article>)}
    </div>
    {visible.length === 0 && <div className="empty-state"><Icon name="search"/><h3>{choose(locale, 'لا توجد نتائج مطابقة في النموذج', 'No matching demo results')}</h3><p>{choose(locale, 'جرّب كلمة أخرى أو غيّر خيارات التصفية.', 'Try another search or adjust your filters.')}</p><button className="button button-outline" onClick={reset}>{choose(locale, 'إعادة ضبط الفلاتر', 'Reset filters')}</button></div>}
    <div className="demo-note"><Icon name="shield"/><p>{choose(locale, 'الأسماء والأرقام هنا لتجربة الواجهة فقط. المواقع المتاحة والأسعار وشروط النشر تظهر داخل المنصة.', 'Names and metrics are sample data for this preview. Available websites, prices and publishing terms are shown inside the platform.')}</p></div>
  </div>;
}
