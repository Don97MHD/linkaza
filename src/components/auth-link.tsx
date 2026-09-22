'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import type { Locale } from '@/lib/site';

type AuthDestination = 'register' | 'login';

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  locale: Locale;
  destination: AuthDestination;
  children: ReactNode;
};

export function AuthLink({ locale, destination, children, onClick, ...props }: Props) {
  const href = `https://app.linkaza.com/${destination}`;

  function handOffLocale() {
    if (!/(^|\.)linkaza\.com$/.test(window.location.hostname)) return;

    // Nuxt i18n reads this cookie on the app origin. The path-scoped, short-lived
    // copy wins over an older host-only app cookie during the initial navigation.
    const base = `i18n_redirected=${locale}; Domain=.linkaza.com; SameSite=Lax; Secure`;
    document.cookie = `${base}; Path=/; Max-Age=31536000`;
    document.cookie = `${base}; Path=/${destination}; Max-Age=30`;
  }

  return <a {...props} href={href} onClick={event => { handOffLocale(); onClick?.(event); }}>{children}</a>;
}
