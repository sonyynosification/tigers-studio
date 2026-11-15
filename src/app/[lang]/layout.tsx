import type { Metadata, Viewport } from "next";
import { Archivo, Archivo_Black, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
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
  };
}

export const viewport: Viewport = {
  themeColor: "#ff7a1a",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const display = lang === "vi" ? archivo : archivoBlack;
  return (
    <html lang={lang} className={`${display.variable} ${spaceGrotesk.variable} overflow-x-clip antialiased`}>
      <body className="min-h-dvh overflow-x-clip">{children}</body>
    </html>
  );
}
