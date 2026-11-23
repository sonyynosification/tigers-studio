import { nav, site } from "@/content/site";
import { getDictionary } from "@/i18n/get-dictionary";
import { FocusLogo } from "./FocusHeader";

export async function FocusFooter() {
  const t = await getDictionary();
  return (
    <footer className="border-t border-bt-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm sm:px-6 md:flex-row md:items-center md:justify-between">
        <FocusLogo className="self-start md:self-auto" />
        <ul className="flex flex-wrap gap-6 font-medium text-bt-muted">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-bt-ink">
                {t.nav[item.key]}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${site.email}`} className="hover:text-bt-ink">
              {site.email}
            </a>
          </li>
        </ul>
        <p className="text-bt-muted">
          © {site.name}. {t.focus.footer.rights}
        </p>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-8 text-sm text-bt-muted sm:px-6">
        <p>
          {site.company.legalName} · {t.footer.taxId}: {site.company.taxId} · {site.company.address}
        </p>
      </div>
    </footer>
  );
}
