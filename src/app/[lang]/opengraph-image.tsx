import { site } from "@/content/site";
import { locales } from "@/i18n/config";
import { ogCard, ogSize } from "@/lib/og-card";

export const alt = `${site.name} — design & development studio`;
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function Image() {
  return ogCard({
    title: site.name,
    subtitle: "Websites & apps that roar.",
  });
}
