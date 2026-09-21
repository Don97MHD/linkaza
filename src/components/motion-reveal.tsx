'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const revealSelector = [
  '.section-heading', '.quality-heading', '.quality-card', '.step',
  '.audience-layout', '.resource-card', '.faq-intro', '.faq-list',
  '.closing-copy', '.page-hero-inner', '.detail-card', '.contact-card',
  '.article-header', '.article-copy section',
].join(',');

export function MotionReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    for (const element of targets) {
      element.classList.remove('is-visible');
      element.dataset.reveal = '';
      if (element.getBoundingClientRect().top < window.innerHeight - 30) element.classList.add('is-visible');
      else observer.observe(element);
    }
    document.documentElement.classList.add('motion-ready');

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('motion-ready');
      targets.forEach(element => { delete element.dataset.reveal; element.classList.remove('is-visible'); });
    };
  }, [pathname]);

  return null;
}
