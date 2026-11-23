// Plain module (no server-only imports) so proxy.ts can use it too.
export const locales = ["en", "vi"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const LOCALE_COOKIE = "NEXT_LOCALE";

/** Each language's name written in that language, for the switcher. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  vi: "Tiếng Việt",
};
export const ogLocales: Record<Locale, string> = { en: "en_US", vi: "vi_VN" };

export const hasLocale = (value: string | undefined): value is Locale =>
  !!value && (locales as readonly string[]).includes(value);

/**
 * Site theme. "playful" is the default Chunky & Cheeky site; "focus" is the calmer,
 * formal Bento layout for visitors who find the playful one distracting.
 * The proxy serves /[lang]/focus at /[lang] when this cookie is "focus".
 */
export const THEME_COOKIE = "TIGERS_THEME";
/** Pages (under /[lang]) that have a Focus version at /[lang]/focus/…; the proxy serves it in place. */
export const focusPaths = ["", "/work/tigers-store"];
export const themes = ["playful", "focus"] as const;
export type Theme = (typeof themes)[number];
export const hasTheme = (value: string | undefined | null): value is Theme =>
  !!value && (themes as readonly string[]).includes(value);
