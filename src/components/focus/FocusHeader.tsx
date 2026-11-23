import Link from "next/link";
import { LanguagePill } from "@/components/site/LanguagePill";
import { ModeSwitch } from "@/components/site/ModeSwitch";
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
      className={`font-bento inline-flex shrink-0 items-center text-[17px] min-[400px]:text-[19px] font-extrabold tracking-[-0.02em] ${className}`}
    >
      tigers
      <span aria-hidden className="mx-[3px] inline-block size-[9px] rounded-full bg-tiger" />
      build
    </Link>
  );
}

/** `path`: the current page under /[lang], so switching language keeps the reader on it. */
async function FocusLanguageSwitch({ path = "" }: { path?: string }) {
  const [locale, t] = await Promise.all([getLocale(), getDictionary()]);
  const links = locales.map((l) => ({ locale: l, name: localeNames[l], href: `/${l}${path}` }));
  return <LanguagePill current={locale} links={links} label={t.nav.language} variant="focus" />;
}

/** `path`: the current page under /[lang]; empty on the homepage. */
export async function FocusHeader({ path = "" }: { path?: string }) {
  const [locale, t] = await Promise.all([getLocale(), getDictionary()]);
  // Section links point at the homepage so they also work from other pages.
  const home = path ? `/${locale}` : "";
  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-bt-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 min-[400px]:gap-3 min-[400px]:px-4 py-4 sm:px-6">
        <FocusLogo />
        <nav aria-label={t.nav.label} className="hidden md:block">
          <ul className="flex gap-7 text-[15px] font-medium text-bt-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={`${home}${item.href}`} className="transition-colors hover:text-bt-ink">
                  {t.nav[item.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-1.5 min-[400px]:gap-2">
          <ModeSwitch current="focus" path={path} />
          <FocusLanguageSwitch path={path} />
          <a
            href={`${home}#contact`}
            className="font-bento rounded-full bg-bt-ink px-3 py-2 text-sm min-[400px]:px-4 font-bold whitespace-nowrap text-bt-paper transition-colors hover:bg-black sm:text-[15px]"
          >
            {t.focus.nav.contact}
          </a>
        </div>
      </div>
    </header>
  );
}
