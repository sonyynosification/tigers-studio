import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale, hasTheme, THEME_COOKIE } from "@/i18n/config";

/**
 * Theme switch, posted by <ThemeToggle /> as a plain form so it works without JS.
 * Saves the choice and sends the visitor back to the homepage in their language,
 * where the proxy picks the matching version.
 */
export async function POST(request: NextRequest) {
  const data = await request.formData();
  const theme = data.get("theme");
  const lang = data.get("lang");
  const locale = typeof lang === "string" && hasLocale(lang) ? lang : defaultLocale;

  // Only ever redirect to our own locale root (no open redirect). Relative on purpose:
  // request.url reports the server's own host (localhost in dev, the internal host
  // behind a proxy), so the browser resolves this against the address it's actually on.
  const response = new NextResponse(null, { status: 303, headers: { Location: `/${locale}` } });
  if (typeof theme === "string" && hasTheme(theme)) {
    if (theme === "focus") {
      response.cookies.set(THEME_COOKIE, theme, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
    } else {
      response.cookies.delete(THEME_COOKIE);
    }
  }
  return response;
}
