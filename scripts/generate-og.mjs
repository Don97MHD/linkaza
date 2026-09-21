// Pre-render with a real browser so Arabic shaping matches the actual website.
// Static PNGs avoid runtime font/rendering dependencies and are committed assets.
import { chromium } from '@playwright/test';
import { readFile } from 'node:fs/promises';
const arFont = (await readFile(new URL('../node_modules/@fontsource-variable/cairo/files/cairo-arabic-wght-normal.woff2',import.meta.url))).toString('base64');
const enFont = (await readFile(new URL('../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2',import.meta.url))).toString('base64');
const browser = await chromium.launch({channel:process.env.PLAYWRIGHT_CHANNEL || undefined});
try {
  const page = await browser.newPage({viewport:{width:1200,height:630},deviceScaleFactor:1});
  for (const locale of ['ar','en']) {
    const ar = locale === 'ar';
    await page.setContent(`<!doctype html><html lang="${locale}" dir="${ar ? 'rtl' : 'ltr'}"><head><meta charset="utf-8"><style>
      @font-face{font-family:Arabic;src:url(data:font/woff2;base64,${arFont}) format('woff2');font-weight:100 900}
      @font-face{font-family:Manrope;src:url(data:font/woff2;base64,${enFont}) format('woff2');font-weight:200 800}
      *{box-sizing:border-box}body{margin:0;width:1200px;height:630px;background:#f4f7ec;color:#174e3e;padding:62px 80px;font-family:${ar ? 'Arabic' : 'Manrope'},sans-serif;overflow:hidden}
      .brand{font:800 44px Manrope,sans-serif;letter-spacing:-2px;direction:ltr;width:fit-content}.eyebrow{font-size:15px;color:#5b7744;margin-top:40px}
      h1{font-size:${ar ? '69' : '77'}px;line-height:1.5;letter-spacing:${ar ? '-2' : '-3'}px;margin:12px 0;font-weight:650}h1 span{color:#638b3f}p{font-size:17px;color:#597147;margin-top:22px}
      .art{position:absolute;${ar ? 'left' : 'right'}:80px;top:145px;width:330px;height:330px;display:grid;place-items:center}.ring{position:absolute;inset:0;border:1px solid #c6d6b5;border-radius:50%}.ring:nth-child(2){inset:27px;border-style:dashed}.ring:nth-child(3){inset:-25px;transform:scaleX(.6) rotate(40deg)}
      .tile{width:160px;height:170px;border-radius:37px;background:linear-gradient(135deg,#2d7251,#0e352d);transform:rotate(-14deg);box-shadow:8px 13px 0 #103e2f,0 20px 55px #25432f33;display:grid;place-items:center;position:relative}.tile svg{width:105px;height:105px}
      .dot{position:absolute;left:37px;top:46px;width:13px;height:13px;background:#8eae60;border:4px solid #e5efdb;border-radius:50%;box-sizing:content-box}.small{position:absolute;right:26px;bottom:25px;padding:12px 17px;border:1px solid #dce4cc;border-radius:8px;background:#fffdf7;color:#607e43;font-size:13px;transform:rotate(5deg)}
    </style></head><body><div class="brand">linkaza.</div><div class="eyebrow">${ar ? 'منصة الباك لينك والجيست بوست' : 'BACKLINKS. GUEST POSTS. REAL CONNECTIONS.'}</div><h1>${ar ? 'قصّتك تستحق<br><span>أن تصل أبعد.</span>' : 'Your story.<br><span>A wider world.</span>'}</h1><p>${ar ? 'الفكرة الصحيحة، في المكان الصحيح.' : 'Your story. The right place.'}</p><div class="art"><i class="ring"></i><i class="ring"></i><i class="ring"></i><i class="dot"></i><div class="tile"><svg viewBox="0 0 36 36" fill="none"><path d="m17 12 2-2a5 5 0 0 1 7 7l-4 4a5 5 0 0 1-7 0m4 3-2 2a5 5 0 0 1-7-7l4-4a5 5 0 0 1 7 0m-6 6 6-6" stroke="#d5f599" stroke-width="2.4" stroke-linecap="round"/></svg></div><div class="small">${ar ? 'روابط تصنع الفرق' : 'Meaningful connections'}</div></div></body></html>`);
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({path:new URL(`../public/og-${locale}.png`,import.meta.url).pathname.replace(/^\/([A-Za-z]:)/,'$1')});
    console.log(`Generated public/og-${locale}.png (1200×630)`);
  }
} finally { await browser.close(); }
