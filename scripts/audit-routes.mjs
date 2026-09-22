import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import ts from 'typescript';

const base = process.env.TEST_BASE_URL || 'http://localhost:3000';
function data(file) {
  const source = readFileSync(new URL(`../src/lib/${file}.ts`, import.meta.url), 'utf8');
  const compiled = ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
  const exports = {};
  new Function('exports',compiled)(exports);
  return exports;
}
const {pages} = data('content');
const {articles} = data('articles');
const slugs = ['',...Object.keys(pages),...articles.map(article => `blog/${article.slug}`)];
let count = 0;
for (const locale of ['ar','en']) {
  const origin = locale === 'ar' ? 'https://linkaza.com' : 'https://en.linkaza.com';
  for (const slug of slugs) {
    const path = `${locale === 'en' ? '/en' : ''}${slug ? `/${slug}` : ''}` || '/';
    const response = await fetch(`${base}${path}`);
    const html = await response.text();
    assert.equal(response.status,200,path);
    assert.ok(html.includes(`lang="${locale}"`),`${path} language`);
    assert.ok(html.includes(`dir="${locale === 'ar' ? 'rtl' : 'ltr'}"`),`${path} direction`);
    assert.equal((html.match(/<h1[ >]/g) || []).length,1,`${path} single H1`);
    const canonicalMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
    assert.equal(new URL(canonicalMatch?.[1] || 'https://missing.invalid').href,`${origin}${slug ? `/${slug}` : '/'}`,`${path} canonical`);
    assert.ok(html.includes('hrefLang="ar"') || html.includes('hreflang="ar"'),`${path} Arabic alternate`);
    assert.ok(html.includes('hrefLang="en"') || html.includes('hreflang="en"'),`${path} English alternate`);
    assert.ok(html.includes('application/ld+json'),`${path} structured data`);
    for (const block of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)) JSON.parse(block[1]);
    count++;
  }
}
for (const path of ['/nonexistent-route-check','/en/nonexistent-route-check']) {
  assert.equal((await fetch(`${base}${path}`)).status,404,`${path} real 404`);
}
const redirect = await fetch(`${base}/ar/pricing?ref=audit`,{redirect:'manual'});
assert.equal(redirect.status,301);
assert.equal(new URL(redirect.headers.get('location'),base).pathname,'/pricing');
assert.equal(new URL(redirect.headers.get('location'),base).search,'?ref=audit');
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
assert.equal((sitemap.match(/<url>/g) || []).length,25);
assert.ok(sitemap.includes('https://en.linkaza.com/'));
const robots = await (await fetch(`${base}/robots.txt`)).text();
assert.ok(robots.includes('Disallow: /'),'Local preview is not indexable');
const image = await fetch(`${base}/og-ar.png`);
assert.equal(image.status,200);
assert.ok(image.headers.get('content-type')?.includes('image/png'));
console.log(`PASS: ${count} bilingual pages, single H1s, self-canonicals, reciprocal alternates, JSON-LD, real 404s, 301 + query preservation, 25-URL sitemap, preview robots and OG image.`);
