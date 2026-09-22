import Link from 'next/link';
import Image from 'next/image';
import { pages } from '@/lib/content';
import { articles } from '@/lib/articles';
import { choose, hrefFor, type Locale } from '@/lib/site';
import { AuthLink } from './auth-link';
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
  const target = legal ? 'mailto:legal@linkaza.com' : contact ? 'mailto:support@linkaza.com' : hrefFor(locale,'contact');
  const externalTarget = !legal && !contact && !['analytics','content-service','strategy-builder','affiliate'].includes(slug);
  const icon = ({marketplace:'globe',pricing:'chart',publishers:'document',about:'link',contact:'mail',support:'mail',blog:'document','quality-standards':'shield',terms:'shield','privacy-policy':'shield',solutions:'layers','guest-posts':'document','how-it-works':'layers'} as Record<string,string>)[slug] || 'spark';
  return <>
    <section className="page-hero"><div className="container"><Breadcrumbs locale={locale} title={content.eyebrow}/><div className="page-hero-inner"><div><span className="eyebrow">{content.eyebrow}</span><h1>{content.title}</h1><p className="page-intro">{content.intro}</p>{slug !== 'blog' && (externalTarget ? <AuthLink locale={locale} destination="register" className="button button-primary">{content.cta}<Icon name="up"/></AuthLink> : <a className="button button-primary" href={target}>{content.cta}<Icon name={contact || legal ? 'mail' : 'up'}/></a>)}</div><div className="page-emblem" aria-hidden="true"><Icon name={icon}/></div></div></div></section>
    {slug === 'blog' ? <Resources locale={locale} full/> : <div className={`container subpage-body ${legal ? 'legal-body' : ''}`}>
      {slug === 'marketplace' && <div style={{marginBottom:50}}><MarketplaceDemo locale={locale} expanded/></div>}
      <div className="detail-grid">{content.sections.map((section,index) => <section className="detail-card" key={section.title}><span className="card-kicker">0{index+1} / LINKAZA</span><h2>{section.title}</h2><p>{section.body}</p></section>)}</div>
      {slug === 'how-it-works' && <GuideVisuals locale={locale}/>}
      {content.bullets.length > 0 && <div className="subpage-checks">{content.bullets.map(bullet => <span key={bullet}><Icon name="check"/>{bullet}</span>)}</div>}
      {contact && <div className="contact-panel"><section className="contact-card"><Icon name="mail"/><h2>{choose(locale,'لنبدأ الحديث','Let’s start a conversation')}</h2><p>{choose(locale,'اذكر هدفك، لغة المحتوى ورابط موقعك لنفهم احتياجك. سيفتح الرابط تطبيق البريد لديك.','Tell us your goal, content language and website so we can understand your needs. This link opens your email app.')}</p><a href="mailto:support@linkaza.com" dir="ltr">support@linkaza.com</a></section><section className="contact-card"><Icon name="layers"/><h2>{choose(locale,'لديك طلب قائم؟','Already placed an order?')}</h2><p>{choose(locale,'راجع حالة الطلب من حسابك. وعند مراسلة الدعم أرفق رقم الطلب، ولا ترسل كلمة المرور أو بيانات الدفع.','Check the order in your account. Include your order number when contacting support, but never share your password or payment credentials.')}</p><AuthLink locale={locale} destination="login" className="text-link">{choose(locale,'تسجيل الدخول لحسابك','Log in to your account')}<Icon name="up"/></AuthLink></section></div>}
      {['solutions','about','how-it-works'].includes(slug) && <div className="related-grid">{['agencies','businesses','publishers'].map(key => <Link className="related-card" key={key} href={hrefFor(locale,key)} prefetch={false}>{pages[key][locale].eyebrow}<Icon name="up"/></Link>)}</div>}
      {['guest-posts','quality-standards','pricing','marketplace'].includes(slug) && <div className="related-grid">{['quality-standards','guest-posts','pricing'].filter(key => key !== slug).map(key => <Link className="related-card" key={key} href={hrefFor(locale,key)} prefetch={false}>{pages[key][locale].eyebrow}<Icon name="arrow"/></Link>)}</div>}
      {['guest-posts','quality-standards','pricing','marketplace'].includes(slug) && <div className="related-grid">{articles.filter(article => slug === 'marketplace' || article.slug === (slug === 'guest-posts' ? 'guest-posting-guide' : slug === 'pricing' ? 'link-building-budget' : 'backlink-quality-checklist')).map(article => <Link className="related-card" key={article.slug} href={hrefFor(locale,`blog/${article.slug}`)} prefetch={false}>{article.title[locale]}<Icon name="arrow"/></Link>)}</div>}
    </div>}
    {slug === 'faq' && <FaqSection locale={locale}/>}
    {!legal && !contact && <ClosingCta locale={locale}/>}
  </>;
}

function GuideVisuals({ locale }: { locale: Locale }) {
  const items = [
    { src: '/guide/market.png', title: choose(locale,'تصفح السوق وقارن المواقع','Browse the marketplace'), text: choose(locale,'استعرض المواقع حسب اللغة، التخصص، السعر ومؤشرات السيو قبل اختيار فرصة النشر المناسبة.','Compare publishers by language, niche, price and SEO signals before choosing an opportunity.') },
    { src: '/guide/buy.png', title: choose(locale,'أرسل تفاصيل الطلب','Submit order details'), text: choose(locale,'أدخل رابط الصفحة المستهدفة والنص الرابط، وأضف المحتوى أو التعليمات المطلوبة للناشر.','Enter the destination URL and anchor text, then add content or instructions for the publisher.') },
    { src: '/guide/order.png', title: choose(locale,'تابع دورة الطلب','Track order progress'), text: choose(locale,'راجع الحالة من المراجعة إلى النشر والتسوية، واحتفظ بسجل واضح لكل حملة.','Follow the order from review to publication and settlement, with a clear record for each campaign.') },
    { src: '/guide/add.png', title: choose(locale,'للناشرين: أضف موقعك','For publishers: list your site'), text: choose(locale,'أضف موقعك وشروط النشر والسعر والنيتشات حتى تظهر الفرصة للمشترين المناسبين بعد المراجعة.','Add your website, publishing terms, price and niches so suitable buyers can discover it after review.') },
  ];
  return <section className="guide-visuals" aria-label={choose(locale,'صور توضيحية من لوحة لينكازا','Linkaza dashboard guide visuals')}><div className="guide-visuals-heading"><span className="eyebrow">{choose(locale,'نظرة من داخل التجربة','INSIDE THE WORKFLOW')}</span><h2>{choose(locale,'خطوات تراها وتراجعها داخل الحساب.','Steps you can see and review inside your account.')}</h2></div><div className="guide-visual-grid">{items.map(item => <article className="guide-visual-card" key={item.src}><Image src={item.src} alt={item.title} width={980} height={520} sizes="(max-width: 700px) 100vw, 50vw"/><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></section>;
}

export function ArticlePage({ locale, article }: { locale: Locale; article: typeof articles[number] }) {
  return <article><header className="container article-header"><Breadcrumbs locale={locale} title={article.title[locale]} article/><span className="eyebrow">{article.category[locale]}</span><h1>{article.title[locale]}</h1><p>{article.description[locale]}</p><div className="article-byline"><span>{article.author[locale]}</span><span>{article.readTime} {choose(locale,'دقائق قراءة','min read')}</span></div></header><div className="container article-layout"><nav className="article-toc" aria-label={choose(locale,'محتويات المقال','On this page')}><h2>{choose(locale,'في هذا الدليل','In this guide')}</h2>{article.sections.map((section,index) => <a key={section.heading[locale]} href={`#section-${index+1}`}>{section.heading[locale]}</a>)}</nav><div className="article-copy">{article.sections.map((section,index) => <section id={`section-${index+1}`} key={section.heading[locale]}><h2>{section.heading[locale]}</h2>{section.paragraphs[locale].map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}<section className="article-sources"><h2>{choose(locale,'مصادر ومراجع','Sources & further reading')}</h2><ul>{article.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a></li>)}</ul></section><Link className="button button-outline" href={hrefFor(locale,'quality-standards')} prefetch={false}>{choose(locale,'معايير الجودة في لينكازا','Linkaza’s quality principles')}<Icon name="arrow"/></Link></div></div><ClosingCta locale={locale}/></article>;
}
