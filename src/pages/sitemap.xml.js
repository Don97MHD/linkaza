import { SITE_URL } from "@/src/lib/schema";

const PAGES = [
    { path: "/", changefreq: "weekly", priority: "1.0", translated: true },
    { path: "/marketplace", changefreq: "weekly", priority: "0.9", translated: true },
    { path: "/pricing", changefreq: "weekly", priority: "0.9", translated: true },
    { path: "/how-it-works", changefreq: "monthly", priority: "0.9", translated: true },
    { path: "/solutions", changefreq: "monthly", priority: "0.9", translated: true },
    { path: "/agencies", changefreq: "monthly", priority: "0.8", translated: true },
    { path: "/consultants", changefreq: "monthly", priority: "0.8", translated: true },
    { path: "/businesses", changefreq: "monthly", priority: "0.8", translated: true },
    { path: "/publishers", changefreq: "monthly", priority: "0.8", translated: true },
    { path: "/content-service", changefreq: "monthly", priority: "0.8", translated: true },
    { path: "/strategy-builder", changefreq: "monthly", priority: "0.8", translated: true },
    { path: "/analytics", changefreq: "monthly", priority: "0.8", translated: true },
    { path: "/about", changefreq: "monthly", priority: "0.6", translated: true },
    { path: "/blog", changefreq: "weekly", priority: "0.7", translated: true },
    { path: "/affiliate", changefreq: "monthly", priority: "0.6", translated: true },
    { path: "/support", changefreq: "monthly", priority: "0.6", translated: true },
    { path: "/contact", changefreq: "monthly", priority: "0.6", translated: true },
    { path: "/terms", changefreq: "yearly", priority: "0.3", translated: true },
    { path: "/privacy-policy", changefreq: "yearly", priority: "0.3", translated: true },
];

const LOCALES = ["en", "ar"];
const localeUrl = (locale, path) => `${SITE_URL}${locale === "en" ? "" : `/${locale}`}${path}`;

const buildSitemap = () => {
    const lastmod = new Date().toISOString().split("T")[0];
    const urls = PAGES.flatMap((p) => {
        if (!p.translated) {
            return [`  <url>
    <loc>${SITE_URL}${p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`];
        }
        const alternates = LOCALES.map(
            (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${localeUrl(l, p.path)}" />`
        ).join("\n");
        return LOCALES.map(
            (l) => `  <url>
    <loc>${localeUrl(l, p.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
${alternates}
  </url>`
        );
    });

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>`;
};

export const getServerSideProps = async ({ res }) => {
    res.setHeader("Content-Type", "application/xml");
    res.write(buildSitemap());
    res.end();
    return { props: {} };
};

const Sitemap = () => null;
export default Sitemap;
