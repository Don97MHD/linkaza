import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import ts from 'typescript';

function readModule(file) {
  const source = readFileSync(new URL(`../src/lib/${file}.ts`, import.meta.url), 'utf8');
  const transpiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const exports = {};
  new Function('exports', transpiled)(exports);
  return exports;
}

const { pages } = readModule('content');
const { articles } = readModule('articles');

test('every marketing page has complete native content in both languages', () => {
  assert.equal(Object.keys(pages).length, 21);
  for (const locale of ['ar', 'en']) {
    const titles = new Set();
    const descriptions = new Set();
    for (const [slug, translations] of Object.entries(pages)) {
      const page = translations[locale];
      for (const key of ['eyebrow','title','description','intro','cta']) assert.ok(page[key]?.length > 0, `${locale}/${slug} ${key}`);
      assert.ok(page.sections.length >= 3, `${locale}/${slug} sections`);
      assert.ok(page.bullets.length >= 1, `${locale}/${slug} bullets`);
      titles.add(page.title);
      descriptions.add(page.description);
    }
    assert.equal(titles.size, 21, `${locale} unique titles`);
    assert.equal(descriptions.size, 21, `${locale} unique descriptions`);
  }
});

test('all articles are substantive and translated with cited sources', () => {
  assert.equal(articles.length, 3);
  for (const article of articles) {
    assert.match(article.slug, /^[a-z-]+$/);
    assert.ok(article.sections.length >= 4);
    assert.ok(article.sources.length > 0);
    for (const locale of ['ar','en']) {
      assert.ok(article.title[locale] && article.description[locale] && article.author[locale]);
      for (const section of article.sections) {
        assert.ok(section.heading[locale]);
        assert.ok(section.paragraphs[locale].every(paragraph => paragraph.length > 70));
      }
    }
    for (const source of article.sources) assert.match(source.url, /^https:\/\//);
  }
});

test('original legal and privacy pages retain their full sections', () => {
  assert.equal(pages.terms.ar.sections.length, 7);
  assert.equal(pages.terms.en.sections.length, 7);
  assert.equal(pages['privacy-policy'].ar.sections.length, 8);
  assert.equal(pages['privacy-policy'].en.sections.length, 8);
});
