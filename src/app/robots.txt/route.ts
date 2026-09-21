import { NextRequest } from 'next/server';
import { isIndexable, origins } from '@/lib/site';

export function GET(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0];
  const origin = host === 'en.linkaza.com' ? origins.en : origins.ar;
  const live = isIndexable && ['linkaza.com','en.linkaza.com'].includes(host || '');
  const content = live ? `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n';
  return new Response(content,{headers:{'Content-Type':'text/plain; charset=utf-8','Cache-Control':'public, max-age=3600'}});
}
