import { site } from "@/content/site";
import { ogCard, ogSize } from "@/lib/og-card";

export const alt = "Tigers Store case study by tigers.build";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    eyebrow: `${site.name} · Case study`,
    title: "Tigers Store",
    subtitle: "Finished websites for small businesses",
  });
}
