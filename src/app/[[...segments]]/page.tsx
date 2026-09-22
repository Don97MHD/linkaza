import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pages } from '@/lib/content';
import { articles } from '@/lib/articles';
import { canonical, choose, faqs, homeMeta, isIndexable, origins, resolveRoute, seoKeywords, seoTitles, type Locale } from '@/lib/site';
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
  const keywordList = seoKeywords[slug]?.[locale] || seoKeywords.default[locale];
  return {
    metadataBase: new URL(origins[locale]),
    title, description:content.description, keywords: keywordList,
    alternates:{canonical:canonical(locale,slug),languages:{ar:canonical('ar',slug),en:canonical('en',slug),'x-default':canonical('ar',slug)}},
    robots: isIndexable ? {index:true,follow:true,'max-image-preview':'large'} : {index:false,follow:false},
    openGraph:{title,description:content.description,url:canonical(locale,slug),siteName:'Linkaza',locale:locale === 'ar' ? 'ar_AR' : 'en_US',alternateLocale:locale === 'ar' ? 'en_US' : 'ar_AR',type:article ? 'article' : 'website',images:[{url:`/og-${locale}.png`,width:1200,height:630,alt:choose(locale,'لينكازا — شراء باك لينك وجيست بوست','Linkaza — buy backlinks and guest posts')}]},
    twitter:{card:'summary_large_image',title,description:content.description,images:[`/og-${locale}.png`]},
    icons:{icon:{url:'/icon.svg',type:'image/svg+xml'}},
  };
}

function StructuredData({ locale, slug }: { locale: Locale; slug: string }) {
  const article = articles.find(item => `blog/${item.slug}` === slug);
  const root = origins[locale];
  const pageContent = !article && slug ? pages[slug]?.[locale] : null;
  const currentTitle = article?.title[locale] || pageContent?.title || homeMeta[locale].title;
  const currentDescription = article?.description[locale] || pageContent?.description || homeMeta[locale].description;
  const keywordList = seoKeywords[slug]?.[locale] || seoKeywords.default[locale];
  const graph: Record<string,unknown>[] = [
    {'@type':'Organization','@id':'https://linkaza.com/#organization',name:'Linkaza',url:'https://linkaza.com/',logo:'https://linkaza.com/icon.svg',email:'support@linkaza.com'},
    {'@type':'WebSite','@id':`${root}/#website`,url:`${root}/`,name:'Linkaza',inLanguage:locale,publisher:{'@id':'https://linkaza.com/#organization'}},
    {'@type':'WebPage','@id':`${canonical(locale,slug)}#webpage`,url:canonical(locale,slug),name:currentTitle,description:currentDescription,inLanguage:locale,isPartOf:{'@id':`${root}/#website`},publisher:{'@id':'https://linkaza.com/#organization'},keywords:keywordList.join(', ')},
  ];
  if (slug) {
    const crumbs = [{ '@type':'ListItem',position:1,name:choose(locale,'الرئيسية','Home'),item:canonical(locale) }];
    if (article) crumbs.push({'@type':'ListItem',position:2,name:choose(locale,'المعرفة','Resources'),item:canonical(locale,'blog')});
    crumbs.push({'@type':'ListItem',position:crumbs.length+1,name:article?.title[locale] || pages[slug][locale].eyebrow,item:canonical(locale,slug)});
    graph.push({'@type':'BreadcrumbList',itemListElement:crumbs});
  }
  if (article) graph.push({'@type':'Article',headline:article.title[locale],description:article.description[locale],inLanguage:locale,mainEntityOfPage:canonical(locale,slug),author:{'@type':'Organization',name:article.author[locale],url:canonical(locale,'about')},publisher:{'@id':'https://linkaza.com/#organization'},image:`${root}/og-${locale}.png`});
  if (slug === 'how-it-works') {
    const steps = pages['how-it-works'][locale].sections.slice(0,6).map((section,index) => ({
      '@type':'HowToStep',
      position:index + 1,
      name:section.title.replace(/^\d+\.\s*/,''),
      text:section.body,
    }));
    graph.push({'@type':'HowTo',name:pages['how-it-works'][locale].title,description:pages['how-it-works'][locale].description,inLanguage:locale,totalTime:'PT10M',step:steps});
  }
  if (slug === 'faq') {
    graph.push({'@type':'FAQPage',mainEntity:faqs[locale].map(([question,answer]) => ({'@type':'Question',name:question,acceptedAnswer:{'@type':'Answer',text:answer}}))});
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@graph':graph}).replace(/</g,'\\u003c')}}/>;
}

export default async function Page({ params }: Props) {
  const { locale, slug } = resolveRoute((await params).segments);
  const article = articles.find(item => `blog/${item.slug}` === slug);
  if (slug && !pages[slug] && !article) notFound();
  return <><StructuredData locale={locale} slug={slug}/>{!slug ? <HomePage locale={locale}/> : article ? <ArticlePage locale={locale} article={article}/> : <ContentPage locale={locale} slug={slug}/>}</>;
}
