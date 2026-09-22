'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { choose, hrefFor, navItems, type Locale } from '@/lib/site';
import { AuthLink } from './auth-link';
import { BrandMark, Icon } from './icon';

export function SiteHeader({ locale, slug }: { locale: Locale; slug: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, []);
  const other = locale === 'ar' ? 'en' : 'ar';
  return <header className="site-header">
    <div className="container header-inner">
      <Link href={hrefFor(locale)} className="brand" aria-label={choose(locale, 'لينكازا — الرئيسية', 'Linkaza — Home')} prefetch={false}><BrandMark/><span>linkaza<span className="brand-dot">.</span></span></Link>
      <nav className="desktop-nav" aria-label={choose(locale, 'التنقل الرئيسي', 'Main navigation')}>
        {navItems.map(item => <Link key={item.slug} href={hrefFor(locale, item.slug)} aria-current={slug === item.slug ? 'page' : undefined} prefetch={false}>{item[locale]}</Link>)}
      </nav>
      <div className="header-actions">
        <a href={hrefFor(other, slug)} className="language-switch" lang={other} hrefLang={other}><Icon name="globe"/><span>{other === 'en' ? 'EN' : 'عربي'}</span></a>
        <AuthLink locale={locale} destination="login" className="header-login">{choose(locale, 'تسجيل الدخول', 'Log in')}</AuthLink>
        <AuthLink locale={locale} destination="register" className="button button-small button-primary header-cta">{choose(locale, 'أنشئ حساباً', 'Create account')}<Icon name="up"/></AuthLink>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={choose(locale, open ? 'إغلاق القائمة' : 'فتح القائمة', open ? 'Close menu' : 'Open menu')}><Icon name={open ? 'close' : 'menu'}/></button>
      </div>
    </div>
    {open && <nav id="mobile-menu" className="mobile-nav" aria-label={choose(locale, 'قائمة الهاتف', 'Mobile navigation')}>
      {navItems.map(item => <Link key={item.slug} href={hrefFor(locale, item.slug)} onClick={() => setOpen(false)} prefetch={false}>{item[locale]}<Icon name="arrow"/></Link>)}
      <AuthLink locale={locale} destination="login">{choose(locale, 'تسجيل الدخول', 'Log in')}<Icon name="up"/></AuthLink>
      <AuthLink locale={locale} destination="register">{choose(locale, 'أنشئ حساباً', 'Create account')}<Icon name="up"/></AuthLink>
    </nav>}
  </header>;
}
