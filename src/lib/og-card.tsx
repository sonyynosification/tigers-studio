import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Shared look for generated share cards (opengraph-image routes).
// Text must stay ASCII/English: the bundled OG font has no Vietnamese glyphs.
export const ogSize = { width: 1200, height: 630 };

export async function ogCard({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
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
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain <img> */}
        <img src={`data:image/svg+xml;base64,${kit}`} width={320} height={284} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
          <div style={{ fontSize: 40, color: "#ff7a1a" }}>{eyebrow}</div>
          <div style={{ fontSize: 80, lineHeight: 1.05, letterSpacing: -2 }}>{title}</div>
          <div style={{ fontSize: 32 }}>{subtitle}</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
