'use client';
import { useParams } from 'next/navigation';
import { choose, hrefFor, resolveRoute } from '@/lib/site';

export default function NotFound() {
  const params = useParams<{segments?: string[]}>();
  const {locale} = resolveRoute(params.segments);
  return <section className="not-found"><strong>404</strong><h1>{choose(locale,'هذه الصفحة غير موجودة','This page couldn’t be found')}</h1><p>{choose(locale,'ربما تغيّر الرابط، لكن فرصتك التالية ما زالت هنا. لنعد إلى المسار الصحيح.','The link may have changed, but your next opportunity is still here. Let’s get you back on track.')}</p><a className="button button-primary" href={hrefFor(locale)}>{choose(locale,'العودة إلى الرئيسية','Back to home')}</a></section>;
}
