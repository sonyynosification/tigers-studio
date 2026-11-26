import type { Metadata, Viewport } from "next";
import { Archivo, Archivo_Black, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import Script from "next/script";
import { site } from "@/content/site";
import { hasLocale, locales, ogLocales } from "@/i18n/config";
import { getDictionaryFor } from "@/i18n/get-dictionary";
import "../globals.css";

// Archivo Black has no Vietnamese glyphs, so Vietnamese pages use Archivo at 900,
// the same family's black weight. Both fill the --font-display-face variable.
const archivoBlack = Archivo_Black({
  variable: "--font-display-face",
  weight: "400",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-display-face",
  weight: "900",
  subsets: ["vietnamese"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "vietnamese"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionaryFor(lang);
  return {
    metadataBase: new URL(site.url),
    title: { default: meta.title, template: `%s · ${site.name}` },
    description: meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `/${l}`])),
        "x-default": "/",
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/${lang}`,
      siteName: site.name,
      locale: ogLocales[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocales[l]),
      type: "website",
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
    robots: { index: true, follow: true, "max-image-preview": "large" },
  };
}

export const viewport: Viewport = {
  themeColor: "#ff7a1a",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const display = lang === "vi" ? archivo : archivoBlack;
  const { meta } = getDictionaryFor(lang);
  // Structured data so search engines know who the studio is and how to reach it.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#organization`,
        name: site.name,
        legalName: site.company.legalName,
        url: site.url,
        logo: `${site.url}/logo.png`,
        image: `${site.url}/${lang}/opengraph-image`,
        description: meta.description,
        email: site.email,
        telephone: site.phone.replace(/\s/g, ""),
        address: {
          "@type": "PostalAddress",
          streetAddress: site.company.address.street,
          addressLocality: site.company.address.ward,
          addressRegion: site.company.address.province,
          addressCountry: site.company.address.countryCode,
        },
        sameAs: [`https://t.me/${site.telegram}`],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: locales,
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
  };
  return (
    <html lang={lang} className={`${display.variable} ${spaceGrotesk.variable} overflow-x-clip antialiased`}>
      <body className="min-h-dvh overflow-x-clip">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
        <Script
          src={`${site.analytics.host}/script.js`}
          data-website-id={site.analytics.websiteId}
          data-domains={site.analytics.domains}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
