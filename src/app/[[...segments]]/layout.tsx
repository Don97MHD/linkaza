import type { ReactNode } from 'react';
import type { Viewport } from 'next';
import { arabicFont, latinFont } from '@/lib/fonts';
import { choose, resolveRoute } from '@/lib/site';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { MotionReveal } from '@/components/motion-reveal';
import '../globals.css';

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#174e3e' };

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{segments?: string[]}> }) {
  const { locale, slug } = resolveRoute((await params).segments);
  return <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className={`${arabicFont.variable} ${latinFont.variable}`}><body><a className="skip-link" href="#main-content">{choose(locale,'انتقل إلى المحتوى','Skip to content')}</a><SiteHeader locale={locale} slug={slug}/><main id="main-content">{children}</main><SiteFooter locale={locale}/><MotionReveal/></body></html>;
}
