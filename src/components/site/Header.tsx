import Link from "next/link";
import { Kit } from "@/components/kit/Kit";
import { LanguagePill } from "@/components/site/LanguagePill";
import { ModeSwitch } from "@/components/site/ModeSwitch";
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

/**
 * EN / VI pill (see <LanguagePill />): a full page load so html lang and fonts change.
 * `path` is the current page under /[lang] (e.g. "/work/tigers-store"), so switching keeps the reader on it.
 */
async function LanguageSwitch({ path = "" }: { path?: string }) {
  const [locale, t] = await Promise.all([getLocale(), getDictionary()]);
  const links = locales.map((l) => ({ locale: l, name: localeNames[l], href: `/${l}${path}` }));
  return <LanguagePill current={locale} links={links} label={t.nav.language} variant="playful" />;
}

/** `path`: the current page under /[lang]; empty on the homepage. */
export async function Header({ path = "" }: { path?: string }) {
  const [locale, t] = await Promise.all([getLocale(), getDictionary()]);
  // Section links point at the homepage so they also work from other pages.
  const home = path ? `/${locale}` : "";
  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Logo compact />
        <nav aria-label={t.nav.label} className="hidden md:block">
          <ul className="flex gap-7 font-bold">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={`${home}${item.href}`} className="decoration-tiger decoration-[3px] underline-offset-4 hover:underline">
                  {t.nav[item.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ModeSwitch current="playful" path={path} />
          <LanguageSwitch path={path} />
          <ButtonLink href={`${home}#contact`} size="sm" className="mr-[5px] whitespace-nowrap">
            {t.nav.sayHi}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
