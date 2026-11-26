import { site } from "@/content/site";
import { ogCard, ogSize } from "@/lib/og-card";

export const alt = "Tigers Store case study by tigers.build";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    title: "Tigers Store",
    subtitle: `Case study by ${site.name}`,
  });
}
