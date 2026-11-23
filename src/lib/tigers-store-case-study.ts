import type { Metadata } from "next";
import { site, tigersStoreUrl } from "@/content/site";
import { locales, ogLocales, type Locale } from "@/i18n/config";
import { getDictionaryFor } from "@/i18n/get-dictionary";

// Shared by the playful page and its Focus version, which the proxy serves at the same URL.
export const TIGERS_STORE_PATH = "/work/tigers-store";

export function tigersStoreMetadata(lang: Locale): Metadata {
  const { meta } = getDictionaryFor(lang).caseStudy.tigersStore;
  const url = `/${lang}${TIGERS_STORE_PATH}`;
  const image = { url: `${url}/opengraph-image`, width: 1200, height: 630, alt: meta.title };
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}${TIGERS_STORE_PATH}`])),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: site.name,
      locale: ogLocales[lang],
      type: "article",
      images: [image],
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: [image] },
  };
}

/** JSON-LD for the page: breadcrumbs, the page itself and the product it is about. */
export function tigersStoreJsonLd(lang: Locale) {
  const dict = getDictionaryFor(lang);
  const c = dict.caseStudy;
  const name = dict.work.items.tigersStore.name;
  const pageUrl = `${site.url}/${lang}${TIGERS_STORE_PATH}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: c.home, item: `${site.url}/${lang}` },
          { "@type": "ListItem", position: 2, name: c.work, item: `${site.url}/${lang}#work` },
          { "@type": "ListItem", position: 3, name, item: pageUrl },
        ],
      },
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: c.tigersStore.meta.title,
        description: c.tigersStore.meta.description,
        inLanguage: lang,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${tigersStoreUrl}#app` },
      },
      {
        "@type": "WebApplication",
        "@id": `${tigersStoreUrl}#app`,
        name,
        url: tigersStoreUrl,
        applicationCategory: "DesignApplication",
        operatingSystem: "Web",
        creator: { "@id": `${site.url}/#organization` },
      },
    ],
  };
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
