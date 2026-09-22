import { NextRequest } from 'next/server';
import { pages } from '@/lib/content';
import { articles } from '@/lib/articles';
import { canonical } from '@/lib/site';

export function GET(request: NextRequest) {
  const locale = request.headers.get('host')?.split(':')[0] === 'en.linkaza.com' ? 'en' : 'ar';
  const slugs = ['',...Object.keys(pages),...articles.map(article => `blog/${article.slug}`)];
  const urls = slugs.map(slug => [
    '  <url>',
    `    <loc>${canonical(locale,slug)}</loc>`,
    `    <xhtml:link rel="alternate" hreflang="ar" href="${canonical('ar',slug)}" />`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${canonical('en',slug)}" />`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${canonical('ar',slug)}" />`,
    '  </url>',
  ].join('\n')).join('\n');
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urls,
    '</urlset>',
    '',
  ].join('\n');
  return new Response(xml,{headers:{'Content-Type':'application/xml; charset=utf-8','Cache-Control':'public, max-age=3600'}});
}
