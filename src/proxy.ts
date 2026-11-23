import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, focusPaths, hasLocale, LOCALE_COOKIE, THEME_COOKIE, type Locale } from "@/i18n/config";

/** Saved choice first, then the browser's Accept-Language, then English. */
function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  if (hasLocale(saved)) return saved;

  const ranked = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return {
        lang: tag.split("-")[0].toLowerCase(),
        q: q ? Number(q.trim().slice(2)) || 0 : 1,
      };
    })
    .sort((a, b) => b.q - a.q);

  return (ranked.find((r) => hasLocale(r.lang))?.lang as Locale | undefined) ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  if (hasLocale(first)) {
    // Focus mode: serve the formal Bento version at the same URL, so links and the
    // language switch keep working and the address bar never shows /focus.
    const rest = pathname.slice(first.length + 1).replace(/\/$/, "");
    const focus = request.cookies.get(THEME_COOKIE)?.value === "focus" && focusPaths.includes(rest);
    const response = focus
      ? NextResponse.rewrite(new URL(`/${first}/focus${rest}`, request.url))
      : NextResponse.next();
    // Remember the language the visitor is reading (including via the switcher).
    if (request.cookies.get(LOCALE_COOKIE)?.value !== first) {
      response.cookies.set(LOCALE_COOKIE, first, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
    }
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals and anything that looks like a file (icon.svg, kit.svg, …).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
