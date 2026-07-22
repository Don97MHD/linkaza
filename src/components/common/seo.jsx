import Head from "next/head";
import { useRouter } from "next/router";
import { SITE_URL, SITE_NAME } from "@/src/lib/schema";

const DEFAULT_DESCRIPTION =
    "Linkaza is the intelligent link building platform that combines a massive publisher marketplace, expert content, and powerful analytics. No subscriptions. Get started free.";
const DEFAULT_OG_IMAGE = "/assets/img/slider/slider-image.png";

const localeUrl = (locale, path) => {
    const prefix = locale === "en" ? "" : `/${locale}`;
    return `${SITE_URL}${prefix}${path === "/" ? "" : path}`;
};

const SEO = ({
    pageTitle,
    title,
    description = DEFAULT_DESCRIPTION,
    path = "/",
    ogImage = DEFAULT_OG_IMAGE,
    schema,
    noindex = false,
    translated = ["en"],
}) => {
    const router = useRouter();
    const locale = router.locale || "en";
    const hasThisLocale = translated.includes(locale);
    const effectiveNoindex = noindex || !hasThisLocale;

    const resolvedTitle = title || pageTitle;
    const fullTitle = resolvedTitle ? `${resolvedTitle} | ${SITE_NAME}` : `${SITE_NAME} - The All-in-One Link Building Platform`;
    const canonical = hasThisLocale ? localeUrl(locale, path) : localeUrl("en", path);
    const absoluteOgImage = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;
    const schemaList = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="description" content={description} />
            <meta name="robots" content={effectiveNoindex ? "noindex, nofollow" : "index, follow"} />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="canonical" href={canonical} />
            <link rel="icon" href="/favicon.ico" />

            {hasThisLocale && translated.length > 1 && (
                <>
                    {translated.map((l) => (
                        <link key={l} rel="alternate" hrefLang={l} href={localeUrl(l, path)} />
                    ))}
                    <link rel="alternate" hrefLang="x-default" href={localeUrl("en", path)} />
                </>
            )}

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={absoluteOgImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={absoluteOgImage} />

            {schemaList.map((item, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
                />
            ))}
        </Head>
    );
};

export default SEO;
