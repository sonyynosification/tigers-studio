import { Bricolage_Grotesque, Inter } from "next/font/google";

// Focus mode (Theme B, Bento) fonts. Loaded only on this route, so the playful
// site never downloads them. Both families cover Vietnamese.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "vietnamese"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

export default function FocusLayout({ children }: LayoutProps<"/[lang]/focus">) {
  return (
    <div
      className={`theme-focus ${bricolage.variable} ${inter.variable} font-bento-body min-h-dvh bg-bt-paper text-bt-ink selection:bg-tiger selection:text-bt-ink`}
    >
      {children}
    </div>
  );
}
