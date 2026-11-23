import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { locales } from "@/i18n/config";

// One homepage per language, each listing every translation (hreflang).
// /[lang]/focus is left out on purpose: it is the same page served at /[lang].
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}`]));
  return locales.map((lang) => ({
    url: `${site.url}/${lang}`,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
