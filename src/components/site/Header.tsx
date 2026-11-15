import Link from "next/link";
import { Kit } from "@/components/kit/Kit";
import { ButtonLink } from "@/components/ui/chunky";
import { nav } from "@/content/site";
import { localeNames, locales } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";

export async function Logo({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  const locale = await getLocale();
  return (
    <Link
      href={`/${locale}`}
      aria-label="tigers.build"
      className={`border-chunk font-display inline-flex shrink-0 items-center gap-2 rounded-full bg-white py-1.5 pl-2 text-lg whitespace-nowrap ${compact ? "pr-2 min-[420px]:pr-4 sm:shadow-chunk-sm" : "shadow-chunk-sm pr-4"} ${className}`}
    >
      <Kit className="size-7" />
      <span className={compact ? "hidden min-[420px]:inline" : undefined}>
        tigers<span className="text-tiger">.</span>build
      </span>
    </Link>
  );
}

/** EN / VI pill. Plain <a> so the whole document (html lang, fonts) reloads in the new language. */
async function LanguageSwitch() {
  const [locale, t] = await Promise.all([getLocale(), getDictionary()]);
  return (
    <nav aria-label={t.nav.language}>
      <ul className="border-chunk flex rounded-full bg-white p-0.5 text-sm font-bold">
        {locales.map((l) => (
          <li key={l}>
            <a
              href={`/${l}`}
              hrefLang={l}
              lang={l}
              aria-label={localeNames[l]}
              aria-current={l === locale ? "true" : undefined}
              className={`block rounded-full px-2.5 py-1 ${l === locale ? "bg-ink text-cream" : "hover:text-tiger-dark"}`}
            >
              {l.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export async function Header() {
  const t = await getDictionary();
  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Logo compact />
        <nav aria-label={t.nav.label} className="hidden md:block">
          <ul className="flex gap-7 font-bold">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="decoration-tiger decoration-[3px] underline-offset-4 hover:underline">
                  {t.nav[item.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageSwitch />
          <ButtonLink href="#contact" className="mr-[5px] px-3 py-1.5 text-sm whitespace-nowrap sm:px-4 sm:py-2 sm:text-[15px]">
            {t.nav.sayHi}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
