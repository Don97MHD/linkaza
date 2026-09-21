import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pages } from '@/lib/content';
import { articles } from '@/lib/articles';
import { canonical, choose, homeMeta, isIndexable, origins, resolveRoute, seoTitles, type Locale } from '@/lib/site';
import { HomePage } from '@/components/home-page';
import { ArticlePage, ContentPage } from '@/components/content-page';

type Props = { params: Promise<{segments?: string[]}> };

export function generateStaticParams() {
  const slugs = ['', ...Object.keys(pages), ...articles.map(article => `blog/${article.slug}`)];
  return (['ar','en'] as const).flatMap(locale => slugs.map(slug => ({ segments: [...(locale === 'en' ? ['en'] : []), ...slug.split('/').filter(Boolean)] })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = resolveRoute((await params).segments);
  const article = articles.find(item => `blog/${item.slug}` === slug);
  const content = !slug ? homeMeta[locale] : article ? { title: `${article.title[locale]} | ${choose(locale,'لينكازا','Linkaza')}`, description: article.description[locale] } : pages[slug]?.[locale];
  if (!content) return { title: choose(locale,'الصفحة غير موجودة | لينكازا','Page not found | Linkaza'), robots: {index:false,follow:false} };
  const title = seoTitles[slug]?.[locale] || (slug && !article ? `${content.title} | ${choose(locale,'لينكازا','Linkaza')}` : content.title);
  return {
    metadataBase: new URL(origins[locale]),
    title, description:content.description,
    alternates:{canonical:canonical(locale,slug),languages:{ar:canonical('ar',slug),en:canonical('en',slug),'x-default':canonical('ar',slug)}},
    robots: isIndexable ? {index:true,follow:true,'max-image-preview':'large'} : {index:false,follow:false},
    openGraph:{title,description:content.description,url:canonical(locale,slug),siteName:'Linkaza',locale:locale === 'ar' ? 'ar_AR' : 'en_US',alternateLocale:locale === 'ar' ? 'en_US' : 'ar_AR',type:article ? 'article' : 'website',images:[{url:`/og-${locale}.png`,width:1200,height:630,alt:choose(locale,'لينكازا — قصتك تستحق أن تصل أبعد','Linkaza — Your story. A wider world.')}]},
    twitter:{card:'summary_large_image',title,description:content.description,images:[`/og-${locale}.png`]},
    icons:{icon:{url:'/icon.svg',type:'image/svg+xml'}},
  };
}

function StructuredData({ locale, slug }: { locale: Locale; slug: string }) {
  const article = articles.find(item => `blog/${item.slug}` === slug);
  const root = origins[locale];
  const graph: Record<string,unknown>[] = [
    {'@type':'Organization','@id':'https://linkaza.com/#organization',name:'Linkaza',url:'https://linkaza.com/',logo:'https://linkaza.com/icon.svg',email:'support@linkaza.com'},
    {'@type':'WebSite','@id':`${root}/#website`,url:`${root}/`,name:'Linkaza',inLanguage:locale,publisher:{'@id':'https://linkaza.com/#organization'}},
  ];
  if (slug) {
    const crumbs = [{ '@type':'ListItem',position:1,name:choose(locale,'الرئيسية','Home'),item:canonical(locale) }];
    if (article) crumbs.push({'@type':'ListItem',position:2,name:choose(locale,'المعرفة','Resources'),item:canonical(locale,'blog')});
    crumbs.push({'@type':'ListItem',position:crumbs.length+1,name:article?.title[locale] || pages[slug][locale].eyebrow,item:canonical(locale,slug)});
    graph.push({'@type':'BreadcrumbList',itemListElement:crumbs});
  }
  if (article) graph.push({'@type':'Article',headline:article.title[locale],description:article.description[locale],inLanguage:locale,mainEntityOfPage:canonical(locale,slug),author:{'@type':'Organization',name:article.author[locale],url:canonical(locale,'about')},publisher:{'@id':'https://linkaza.com/#organization'},image:`${root}/og-${locale}.png`});
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@graph':graph}).replace(/</g,'\\u003c')}}/>;
}

export default async function Page({ params }: Props) {
  const { locale, slug } = resolveRoute((await params).segments);
  const article = articles.find(item => `blog/${item.slug}` === slug);
  if (slug && !pages[slug] && !article) notFound();
  return <><StructuredData locale={locale} slug={slug}/>{!slug ? <HomePage locale={locale}/> : article ? <ArticlePage locale={locale} article={article}/> : <ContentPage locale={locale} slug={slug}/>}</>;
}
