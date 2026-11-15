import Link from "next/link";
import { nav } from "@/content/site";
import { localeNames, locales } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";

/** Wordmark: tigers●build, the dot in tiger orange. */
export async function FocusLogo({ className = "" }: { className?: string }) {
  const locale = await getLocale();
  return (
    <Link
      href={`/${locale}`}
      aria-label="tigers.build"
      className={`font-bento inline-flex shrink-0 items-center text-[19px] font-extrabold tracking-[-0.02em] ${className}`}
    >
      tigers
      <span aria-hidden className="mx-[3px] inline-block size-[9px] rounded-full bg-tiger" />
      build
    </Link>
  );
}

async function FocusLanguageSwitch() {
  const [locale, t] = await Promise.all([getLocale(), getDictionary()]);
  return (
    <nav aria-label={t.nav.language}>
      <ul className="flex rounded-full border border-bt-line bg-white p-0.5 text-sm font-semibold">
        {locales.map((l) => (
          <li key={l}>
            <a
              href={`/${l}`}
              hrefLang={l}
              lang={l}
              aria-label={localeNames[l]}
              aria-current={l === locale ? "true" : undefined}
              className={`block rounded-full px-2.5 py-1 ${l === locale ? "bg-bt-ink text-bt-paper" : "text-bt-muted hover:text-bt-ink"}`}
            >
              {l.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export async function FocusHeader() {
  const t = await getDictionary();
  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-bt-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <FocusLogo />
        <nav aria-label={t.nav.label} className="hidden md:block">
          <ul className="flex gap-7 text-[15px] font-medium text-bt-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-bt-ink">
                  {t.nav[item.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <FocusLanguageSwitch />
          <a
            href="#contact"
            className="font-bento rounded-full bg-bt-ink px-4 py-2 text-sm font-bold whitespace-nowrap text-bt-paper transition-colors hover:bg-black sm:text-[15px]"
          >
            {t.focus.nav.contact}
          </a>
        </div>
      </div>
    </header>
  );
}
