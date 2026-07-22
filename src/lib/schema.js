export const SITE_URL = "https://linkaza.com";
export const SITE_NAME = "Linkaza";

export const organizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/img/logo/logo.png`,
    sameAs: [],
});

export const websiteSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
});

/**
 * @param {{name: string, description: string, path: string, priceFrom?: number}} opts
 */
export const serviceSchema = ({ name, description, path, priceFrom }) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    ...(priceFrom !== undefined && {
        offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: String(priceFrom),
            url: `${SITE_URL}${path}`,
        },
    }),
});

/**
 * @param {{question: string, answer: string}[]} qa
 */
export const faqPageSchema = (qa) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
            "@type": "Answer",
            text: answer,
        },
    })),
});

/**
 * @param {{name: string, path: string}[]} items — in order, home first
 */
export const breadcrumbSchema = (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
    })),
});
