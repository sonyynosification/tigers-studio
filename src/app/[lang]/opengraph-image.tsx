import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { locales } from "@/i18n/config";

// Share card for links to /en and /vi. Text stays in English (brand + tagline)
// because the bundled OG font has no Vietnamese glyphs.
export const alt = `${site.name} — design & development studio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Image() {
  const kit = await readFile(join(process.cwd(), "src/app/icon.svg"), "base64");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: "0 88px",
          background: "#fff8ef",
          border: "16px solid #111",
          color: "#111",
        }}
      >
        <img src={`data:image/svg+xml;base64,${kit}`} width={320} height={284} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
          <div style={{ fontSize: 40, color: "#ff7a1a" }}>{site.name}</div>
          <div style={{ fontSize: 80, lineHeight: 1.05, letterSpacing: -2 }}>
            Websites & apps that roar.
          </div>
          <div style={{ fontSize: 32 }}>Design & development studio</div>
        </div>
      </div>
    ),
    size,
  );
}
