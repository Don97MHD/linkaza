import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host')?.split(':')[0].toLowerCase();
  const path = url.pathname;
  if (path === '/ar' || path.startsWith('/ar/')) {
    url.pathname = path.slice(3) || '/';
    if (host === 'en.linkaza.com') url.hostname = 'linkaza.com';
    return NextResponse.redirect(url, 301);
  }
  if (host === 'www.linkaza.com') {
    url.hostname = 'linkaza.com';
    return NextResponse.redirect(url, 301);
  }
  if (host === 'linkaza.com' && (path === '/en' || path.startsWith('/en/'))) {
    url.hostname = 'en.linkaza.com';
    url.pathname = path.slice(3) || '/';
    return NextResponse.redirect(url, 301);
  }
  if (host === 'en.linkaza.com') {
    if (path === '/en' || path.startsWith('/en/')) {
      url.pathname = path.slice(3) || '/';
      return NextResponse.redirect(url, 301);
    }
    url.pathname = `/en${path === '/' ? '' : path}`;
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = { matcher: ['/((?!_next|api|robots.txt|sitemap.xml|favicon.ico|icon.svg|.*\\.[a-zA-Z0-9]+$).*)'] };
