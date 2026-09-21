'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { APP_URL, choose, hrefFor, navItems, type Locale } from '@/lib/site';
import { BrandMark, Icon } from './icon';

export function SiteHeader({ locale, slug }: { locale: Locale; slug: string }) {
  const [open, setOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, []);
  function toggleMotion() {
    document.documentElement.dataset.motion = paused ? 'on' : 'off';
    setPaused(!paused);
  }
  const other = locale === 'ar' ? 'en' : 'ar';
  return <header className="site-header">
    <div className="container header-inner">
      <Link href={hrefFor(locale)} className="brand" aria-label={choose(locale, 'لينكازا — الرئيسية', 'Linkaza — Home')} prefetch={false}><BrandMark/><span>linkaza<span className="brand-dot">.</span></span></Link>
      <nav className="desktop-nav" aria-label={choose(locale, 'التنقل الرئيسي', 'Main navigation')}>
        {navItems.map(item => <Link key={item.slug} href={hrefFor(locale, item.slug)} aria-current={slug === item.slug ? 'page' : undefined} prefetch={false}>{item[locale]}</Link>)}
      </nav>
      <div className="header-actions">
        <button className="motion-toggle" onClick={toggleMotion} aria-pressed={paused} aria-label={choose(locale, paused ? 'تشغيل الحركة' : 'إيقاف الحركة', paused ? 'Enable motion' : 'Pause motion')} title={choose(locale, 'التحكم بالحركة', 'Motion control')}><Icon name={paused ? 'play' : 'pause'}/></button>
        <a href={hrefFor(other, slug)} className="language-switch" lang={other} hrefLang={other}><Icon name="globe"/><span>{other === 'en' ? 'EN' : 'عربي'}</span></a>
        <a className="button button-small button-primary header-cta" href={APP_URL}>{choose(locale, 'ابدأ الآن', 'Get started')}<Icon name="up"/></a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={choose(locale, open ? 'إغلاق القائمة' : 'فتح القائمة', open ? 'Close menu' : 'Open menu')}><Icon name={open ? 'close' : 'menu'}/></button>
      </div>
    </div>
    {open && <nav id="mobile-menu" className="mobile-nav" aria-label={choose(locale, 'قائمة الهاتف', 'Mobile navigation')}>
      {navItems.map(item => <Link key={item.slug} href={hrefFor(locale, item.slug)} onClick={() => setOpen(false)} prefetch={false}>{item[locale]}<Icon name="arrow"/></Link>)}
      <a href={APP_URL}>{choose(locale, 'الدخول إلى المنصة', 'Open the platform')}<Icon name="up"/></a>
    </nav>}
  </header>;
}
