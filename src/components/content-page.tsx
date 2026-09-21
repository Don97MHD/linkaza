import Link from 'next/link';
import { pages } from '@/lib/content';
import { articles } from '@/lib/articles';
import { APP_URL, choose, hrefFor, type Locale } from '@/lib/site';
import { Icon } from './icon';
import { MarketplaceDemo } from './marketplace-demo';
import { Resources, FaqSection } from './sections';
import { ClosingCta } from './site-footer';

export function Breadcrumbs({ locale, title, article = false }: { locale: Locale; title: string; article?: boolean }) {
  return <nav className="breadcrumbs" aria-label={choose(locale,'مسار الصفحة','Breadcrumb')}><Link href={hrefFor(locale)} prefetch={false}>{choose(locale,'الرئيسية','Home')}</Link><span aria-hidden="true">/</span>{article && <><Link href={hrefFor(locale,'blog')} prefetch={false}>{choose(locale,'المعرفة','Resources')}</Link><span aria-hidden="true">/</span></>}<span aria-current="page">{title}</span></nav>;
}

export function ContentPage({ locale, slug }: { locale: Locale; slug: string }) {
  const content = pages[slug][locale];
  const legal = ['terms','privacy-policy'].includes(slug);
  const contact = ['contact','support'].includes(slug);
  const target = legal ? 'mailto:legal@linkaza.com' : contact ? 'mailto:support@linkaza.com' : ['analytics','content-service','strategy-builder','affiliate'].includes(slug) ? hrefFor(locale,'contact') : APP_URL;
  const icon = ({marketplace:'globe',pricing:'chart',publishers:'document',about:'link',contact:'mail',support:'mail',blog:'document','quality-standards':'shield',terms:'shield','privacy-policy':'shield',solutions:'layers','guest-posts':'document','how-it-works':'layers'} as Record<string,string>)[slug] || 'spark';
  return <>
    <section className="page-hero"><div className="container"><Breadcrumbs locale={locale} title={content.eyebrow}/><div className="page-hero-inner"><div><span className="eyebrow">{content.eyebrow}</span><h1>{content.title}</h1><p className="page-intro">{content.intro}</p>{slug !== 'blog' && <a className="button button-primary" href={target}>{content.cta}<Icon name={contact || legal ? 'mail' : 'up'}/></a>}</div><div className="page-emblem" aria-hidden="true"><Icon name={icon}/></div></div></div></section>
    {slug === 'blog' ? <Resources locale={locale} full/> : <div className={`container subpage-body ${legal ? 'legal-body' : ''}`}>
      {slug === 'marketplace' && <div style={{marginBottom:50}}><MarketplaceDemo locale={locale} expanded/></div>}
      <div className="detail-grid">{content.sections.map((section,index) => <section className="detail-card" key={section.title}><span className="card-kicker">0{index+1} / LINKAZA</span><h2>{section.title}</h2><p>{section.body}</p></section>)}</div>
      {content.bullets.length > 0 && <div className="subpage-checks">{content.bullets.map(bullet => <span key={bullet}><Icon name="check"/>{bullet}</span>)}</div>}
      {contact && <div className="contact-panel"><section className="contact-card"><Icon name="mail"/><h2>{choose(locale,'لنبدأ الحديث','Let’s start a conversation')}</h2><p>{choose(locale,'اذكر هدفك، لغة المحتوى ورابط موقعك لنفهم احتياجك. سيفتح الرابط تطبيق البريد لديك.','Tell us your goal, content language and website so we can understand your needs. This link opens your email app.')}</p><a href="mailto:support@linkaza.com" dir="ltr">support@linkaza.com</a></section><section className="contact-card"><Icon name="layers"/><h2>{choose(locale,'لديك طلب قائم؟','Already placed an order?')}</h2><p>{choose(locale,'راجع حالة الطلب من حسابك. وعند مراسلة الدعم أرفق رقم الطلب، ولا ترسل كلمة المرور أو بيانات الدفع.','Check the order in your account. Include your order number when contacting support, but never share your password or payment credentials.')}</p><a className="text-link" href={APP_URL}>{choose(locale,'انتقل إلى حسابك','Go to your account')}<Icon name="up"/></a></section></div>}
      {['solutions','about','how-it-works'].includes(slug) && <div className="related-grid">{['agencies','businesses','publishers'].map(key => <Link className="related-card" key={key} href={hrefFor(locale,key)} prefetch={false}>{pages[key][locale].eyebrow}<Icon name="up"/></Link>)}</div>}
      {['guest-posts','quality-standards','pricing','marketplace'].includes(slug) && <div className="related-grid">{['quality-standards','guest-posts','pricing'].filter(key => key !== slug).map(key => <Link className="related-card" key={key} href={hrefFor(locale,key)} prefetch={false}>{pages[key][locale].eyebrow}<Icon name="arrow"/></Link>)}</div>}
      {['guest-posts','quality-standards','pricing','marketplace'].includes(slug) && <div className="related-grid">{articles.filter(article => slug === 'marketplace' || article.slug === (slug === 'guest-posts' ? 'guest-posting-guide' : slug === 'pricing' ? 'link-building-budget' : 'backlink-quality-checklist')).map(article => <Link className="related-card" key={article.slug} href={hrefFor(locale,`blog/${article.slug}`)} prefetch={false}>{article.title[locale]}<Icon name="arrow"/></Link>)}</div>}
    </div>}
    {slug === 'faq' && <FaqSection locale={locale}/>}
    {!legal && !contact && <ClosingCta locale={locale}/>}
  </>;
}

export function ArticlePage({ locale, article }: { locale: Locale; article: typeof articles[number] }) {
  return <article><header className="container article-header"><Breadcrumbs locale={locale} title={article.title[locale]} article/><span className="eyebrow">{article.category[locale]}</span><h1>{article.title[locale]}</h1><p>{article.description[locale]}</p><div className="article-byline"><span>{article.author[locale]}</span><span>{article.readTime} {choose(locale,'دقائق قراءة','min read')}</span></div></header><div className="container article-layout"><nav className="article-toc" aria-label={choose(locale,'محتويات المقال','On this page')}><h2>{choose(locale,'في هذا الدليل','In this guide')}</h2>{article.sections.map((section,index) => <a key={section.heading[locale]} href={`#section-${index+1}`}>{section.heading[locale]}</a>)}</nav><div className="article-copy">{article.sections.map((section,index) => <section id={`section-${index+1}`} key={section.heading[locale]}><h2>{section.heading[locale]}</h2>{section.paragraphs[locale].map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}<section className="article-sources"><h2>{choose(locale,'مصادر ومراجع','Sources & further reading')}</h2><ul>{article.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a></li>)}</ul></section><Link className="button button-outline" href={hrefFor(locale,'quality-standards')} prefetch={false}>{choose(locale,'معايير الجودة في لينكازا','Linkaza’s quality principles')}<Icon name="arrow"/></Link></div></div><ClosingCta locale={locale}/></article>;
}
