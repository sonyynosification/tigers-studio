import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Shared look for generated share cards (opengraph-image routes).
// Text must stay ASCII/English: the bundled OG font has no Vietnamese glyphs.
//
// Google search shows this image as a small thumbnail, often cropped to a square around
// the centre. So the mascot sits large in the middle and the text is short and big;
// nothing important goes near the left or right edges.
export const ogSize = { width: 1200, height: 630 };

export async function ogCard({ title, subtitle }: { title: string; subtitle: string }) {
  const kit = await readFile(join(process.cwd(), "src/app/icon.svg"), "base64");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          background: "#fff8ef",
          color: "#111",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain <img> */}
        <img src={`data:image/svg+xml;base64,${kit}`} width={400} height={400} alt="" />
        <div style={{ fontSize: 76, lineHeight: 1, letterSpacing: -2, fontWeight: 700 }}>{title}</div>
        <div style={{ fontSize: 34, color: "#ff7a1a", marginTop: 12 }}>{subtitle}</div>
      </div>
    ),
    ogSize,
  );
}
