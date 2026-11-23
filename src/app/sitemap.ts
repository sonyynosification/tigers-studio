import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { locales } from "@/i18n/config";

// Paths under /[lang]; each is listed once per language with every translation (hreflang).
// /[lang]/focus is left out on purpose: it is the same page served at /[lang].
const pages = [
  { path: "", priority: 1 },
  { path: "/work/tigers-store", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, priority }) => {
    const languages = Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}${path}`]));
    return locales.map((lang) => ({
      url: `${site.url}/${lang}${path}`,
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages },
    }));
  });
}
