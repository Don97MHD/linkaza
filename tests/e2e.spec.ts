import AxeBuilder from '@axe-core/playwright';
import { test as base, expect, type Page } from '@playwright/test';

const test = base.extend<{ clientErrors: string[] }>({
  clientErrors: [async ({ page }, use) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => {
      if (message.type() === 'error') errors.push(message.text());
    });
    await use(errors);
    expect(errors, 'No uncaught JavaScript or browser console errors').toEqual([]);
  }, { auto: true }],
});

const locales = [
  {
    locale: 'ar', direction: 'rtl', root: '/', prefix: '',
    canonical: 'https://linkaza.com/', search: 'ابحث في النموذج',
    all: 'الكل', categories: ['تقنية', 'أعمال', 'أسلوب حياة'],
    reset: 'إعادة ضبط الفلاتر', openMenu: 'فتح القائمة', marketplace: 'سوق المواقع',
  },
  {
    locale: 'en', direction: 'ltr', root: '/en', prefix: '/en',
    canonical: 'https://en.linkaza.com/', search: 'Search the demo',
    all: 'All', categories: ['Technology', 'Business', 'Lifestyle'],
    reset: 'Reset filters', openMenu: 'Open menu', marketplace: 'Marketplace',
  },
] as const;

function resultCount(text: string | null) {
  const normalized = (text || '').replace(/[٠-٩]/g, digit => String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit)));
  const count = normalized.match(/\d+/);
  expect(count, 'The live status announces the number of matching publishers').not.toBeNull();
  return Number(count![0]);
}

async function expectHealthyPage(page: Page) {
  await expect(page.getByRole('main')).toBeVisible();
  await page.evaluate(() => document.fonts.ready);
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect.poll(() => page.evaluate(() => {
    const pageWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
    return pageWidth - window.innerWidth;
  }), { message: 'The document must not overflow horizontally' }).toBeLessThanOrEqual(1);
}

for (const locale of locales) {
  test.describe(`${locale.locale} marketing experience`, () => {
    test('header and primary CTAs open the matching auth pages without a motion toggle', async ({ page }) => {
      await page.goto(locale.root);
      await expect(page.locator('.motion-toggle')).toHaveCount(0);
      await expect(page.locator('.header-login')).toHaveAttribute('href', 'https://app.linkaza.com/login');
      await expect(page.locator('.header-cta')).toHaveAttribute('href', 'https://app.linkaza.com/register');
      await expect(page.locator('.hero-buttons .button-primary')).toHaveAttribute('href', 'https://app.linkaza.com/register');
      await page.goto(`${locale.prefix}/businesses`);
      await expect(page.locator('.page-hero .button-primary')).toHaveAttribute('href', 'https://app.linkaza.com/register');
    });

    test('homepage has correct language, direction and search metadata', async ({ page }) => {
      const response = await page.goto(locale.root);
      expect(response?.status()).toBe(200);
      await expect(page.locator('html')).toHaveAttribute('lang', locale.locale);
      await expect(page.locator('html')).toHaveAttribute('dir', locale.direction);
      await expectHealthyPage(page);
      await expect(page).toHaveTitle(/لينكازا|Linkaza/);
      const description = await page.locator('meta[name="description"]').getAttribute('content');
      expect(description?.length).toBeGreaterThan(60);
      for (const [selector, expected] of [
        ['link[rel="canonical"]', locale.canonical],
        ['link[rel="alternate"][hreflang="ar"]', 'https://linkaza.com/'],
        ['link[rel="alternate"][hreflang="en"]', 'https://en.linkaza.com/'],
      ]) {
        const link = page.locator(selector);
        await expect(link).toHaveCount(1);
        const href = await link.getAttribute('href');
        expect(href).toBeTruthy();
        // Next may omit an origin's trailing slash; URL normalization preserves equivalence.
        expect(new URL(href!).href).toBe(expected);
      }
    });

    test('marketplace category filters, empty search and reset work together', async ({ page }) => {
      await page.goto(`${locale.prefix}/marketplace`);
      await expectHealthyPage(page);
      const main = page.getByRole('main');
      const status = main.getByRole('status');
      const search = main.getByRole('searchbox', { name: locale.search });
      const allButton = main.getByRole('button', { name: locale.all, exact: true });

      await expect(status).toBeVisible();
      const initialCount = resultCount(await status.textContent());
      expect(initialCount).toBeGreaterThan(0);
      await expect(allButton).toHaveAttribute('aria-pressed', 'true');

      for (const category of locale.categories) {
        const button = main.getByRole('button', { name: category, exact: true });
        await button.click();
        await expect(button).toHaveAttribute('aria-pressed', 'true');
        await expect(allButton).toHaveAttribute('aria-pressed', 'false');
        const filteredCount = resultCount(await status.textContent());
        expect(filteredCount).toBeGreaterThan(0);
        expect(filteredCount).toBeLessThan(initialCount);
      }

      await search.fill('no-matching-publisher-839162');
      await expect.poll(async () => resultCount(await status.textContent())).toBe(0);
      const reset = main.getByRole('button', { name: locale.reset, exact: true });
      await expect(reset).toBeVisible();
      await reset.click();
      await expect(search).toHaveValue('');
      await expect(allButton).toHaveAttribute('aria-pressed', 'true');
      await expect.poll(async () => resultCount(await status.textContent())).toBe(initialCount);
    });

    test('FAQ answers can be toggled with the keyboard', async ({ page }) => {
      await page.goto(locale.root);
      const firstQuestion = page.getByRole('main').locator('details').first();
      const summary = firstQuestion.locator('summary');
      await summary.scrollIntoViewIfNeeded();
      await expect(summary).toBeVisible();
      const initiallyOpen = await firstQuestion.evaluate(element => (element as HTMLDetailsElement).open);
      await summary.focus();
      await page.keyboard.press('Enter');
      await expect(firstQuestion).toHaveJSProperty('open', !initiallyOpen);
      await page.keyboard.press('Enter');
      await expect(firstQuestion).toHaveJSProperty('open', initiallyOpen);
    });

    test('backlink quality guide is readable and has a localized canonical', async ({ page }) => {
      const slug = '/blog/backlink-quality-checklist';
      const response = await page.goto(`${locale.prefix}${slug}`);
      expect(response?.status()).toBe(200);
      await expect(page.locator('html')).toHaveAttribute('lang', locale.locale);
      await expectHealthyPage(page);
      await expect(page.getByRole('main').getByRole('heading', { level: 2 }).first()).toBeVisible();
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${locale.canonical.slice(0, -1)}${slug}`);
    });

    for (const slug of ['', '/marketplace', '/blog/backlink-quality-checklist']) {
      test(`${slug || '/'} has no serious or critical accessibility violations`, async ({ page }, testInfo) => {
        await page.goto(slug ? `${locale.prefix}${slug}` : locale.root);
        await expectHealthyPage(page);
        const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
        const violations = results.violations.filter(violation => ['serious', 'critical'].includes(violation.impact || ''));
        await testInfo.attach('accessibility-results', {
          body: JSON.stringify({ url: page.url(), violations: results.violations }, null, 2),
          contentType: 'application/json',
        });
        expect(violations.map(({ id, impact, nodes }) => ({
          id, impact, elements: nodes.map(node => ({ target: node.target, explanation: node.failureSummary })),
        }))).toEqual([]);
      });
    }

    test.describe('mobile viewport', () => {
      test.use({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });

      test('navigation opens accessibly and leads to marketplace', async ({ page }) => {
        await page.goto(locale.root);
        await expectHealthyPage(page);
        const header = page.getByRole('banner');
        const toggle = header.getByRole('button', { name: locale.openMenu, exact: true });
        await expect(toggle).toBeVisible();
        await expect(toggle).toHaveAttribute('aria-expanded', 'false');
        await toggle.click();
        await expect(header.locator('button[aria-expanded="true"]')).toHaveCount(1);
        const marketplaceLink = header.getByRole('link', { name: locale.marketplace, exact: true });
        await expect(marketplaceLink).toBeVisible();
        await marketplaceLink.click();
        await expect(page).toHaveURL(new RegExp(`${locale.prefix}/marketplace/?$`));
        await expectHealthyPage(page);
      });

      test('marketplace fits a 390px screen', async ({ page }) => {
        await page.goto(`${locale.prefix}/marketplace`);
        await expectHealthyPage(page);
        await expect(page.getByRole('searchbox', { name: locale.search })).toBeVisible();
      });

      test('homepage remains accessible with responsive typography', async ({ page }, testInfo) => {
        await page.goto(locale.root);
        await expectHealthyPage(page);
        const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
        const violations = results.violations.filter(violation => ['serious', 'critical'].includes(violation.impact || ''));
        await testInfo.attach('mobile-accessibility-results', {
          body: JSON.stringify({ url: page.url(), violations: results.violations }, null, 2),
          contentType: 'application/json',
        });
        expect(violations.map(({ id, impact, nodes }) => ({
          id, impact, elements: nodes.map(node => ({ target: node.target, explanation: node.failureSummary })),
        }))).toEqual([]);
      });
    });
  });
}

test('legacy Arabic pricing URL redirects permanently and preserves the query', async ({ request }) => {
  const response = await request.get('/ar/pricing?ref=legacy', { maxRedirects: 0 });
  expect(response.status()).toBe(301);
  const destination = new URL(response.headers().location, response.url());
  expect(destination.pathname).toBe('/pricing');
  expect(destination.searchParams.get('ref')).toBe('legacy');
});
