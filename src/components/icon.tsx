import type { CSSProperties } from 'react';

const paths: Record<string, React.ReactNode> = {
  arrow: <><path d="M5 12h14m-6-6 6 6-6 6" /></>,
  up: <><path d="M6 18 18 6M6 6h12v12" /></>,
  search: <><circle cx="10.7" cy="10.7" r="6.7"/><path d="m16 16 5 5"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/></>,
  check: <path d="m5 12 4.5 4.5L19 7" />,
  shield: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Z"/><path d="m8 12 3 3 5-6"/></>,
  link: <><path d="m10 14 4-4m-6 7-1 1a4 4 0 0 1-5-5l4-4a4 4 0 0 1 5 0m2-2 1-1a4 4 0 0 1 5 5l-4 4a4 4 0 0 1-5 0"/></>,
  layers: <><path d="m12 3 10 5-10 5L2 8Zm-9 9 9 5 9-5m-18 5 9 5 9-5"/></>,
  chart: <><path d="M4 3v17h17M8 15l4-5 4 2 5-7"/></>,
  plus: <path d="M12 5v14M5 12h14"/>,
  menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
  close: <path d="m6 6 12 12M6 18 18 6"/>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 6 9 7 9-7"/></>,
  spark: <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z"/>,
  play: <path d="m9 5 10 7-10 7Z"/>,
  pause: <path d="M9 5v14M15 5v14"/>,
  document: <><path d="M14 3H5v18h14V8Zm0 0v5h5M8 12h8m-8 4h5"/></>,
  users: <><circle cx="9" cy="8" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3m2-16a3 3 0 0 1 0 6m4 10v-3a6 6 0 0 0-4-5"/></>,
};
export function Icon({ name, className = '', style }: { name: string; className?: string; style?: CSSProperties }) {
  return <svg className={`icon ${className}`} style={style} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.link}</svg>;
}
export function BrandMark() {
  return <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true"><rect width="36" height="36" rx="11" fill="currentColor"/><path d="m17 12 2-2a5 5 0 0 1 7 7l-4 4a5 5 0 0 1-7 0m4 3-2 2a5 5 0 0 1-7-7l4-4a5 5 0 0 1 7 0" stroke="#E5FFB7" strokeWidth="2.4" strokeLinecap="round"/><path d="m15 21 6-6" stroke="#E5FFB7" strokeWidth="2.4" strokeLinecap="round"/></svg>;
}
