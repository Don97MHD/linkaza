import localFont from 'next/font/local';

export const arabicFont = localFont({
  src: '../../node_modules/@fontsource-variable/cairo/files/cairo-arabic-wght-normal.woff2',
  variable: '--font-arabic', display: 'swap', weight: '100 900', preload: true,
});
export const latinFont = localFont({
  src: '../../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2',
  variable: '--font-latin', display: 'swap', weight: '200 800', preload: true,
});
