import { Logo } from "./Header";
import { formattedAddress, nav, site } from "@/content/site";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";

export async function Footer() {
  const [locale, t] = await Promise.all([getLocale(), getDictionary()]);
  return (
    <footer className="border-t-[2.5px] border-ink bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <Logo className="self-start md:self-auto" />
        <ul className="flex flex-wrap gap-6 font-bold">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={`/${locale}${item.href}`} className="hover:text-tiger-dark">
                {t.nav[item.key]}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${site.email}`} className="hover:text-tiger-dark">
              {t.footer.email}
            </a>
          </li>
        </ul>
        <p className="text-sm font-medium">
          {t.footer.madeWith} © {site.name}
        </p>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <p className="text-sm font-medium">
          {site.company.legalName} · {t.footer.taxId}: {site.company.taxId} · {formattedAddress}
        </p>
      </div>
    </footer>
  );
}
