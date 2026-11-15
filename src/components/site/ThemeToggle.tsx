import type { Theme } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";

/**
 * Switches between the playful site and the calmer Focus layout.
 * A plain POST form (no JS needed): /api/theme saves the cookie and reloads the page.
 */
export async function ThemeToggle({
  current,
  className = "",
  children,
}: {
  current: Theme;
  className?: string;
  /** Custom button content (e.g. Kit's speech bubble). Defaults to icon + label. */
  children?: React.ReactNode;
}) {
  const [locale, t] = await Promise.all([getLocale(), getDictionary()]);
  const next: Theme = current === "focus" ? "playful" : "focus";
  const label = next === "focus" ? t.themeToggle.toFocus : t.themeToggle.toPlayful;
  const hint = next === "focus" ? t.themeToggle.toFocusHint : t.themeToggle.toPlayfulHint;

  return (
    <form action="/api/theme" method="post" className="contents">
      <input type="hidden" name="theme" value={next} />
      <input type="hidden" name="lang" value={locale} />
      <button type="submit" title={hint} className={`inline-flex cursor-pointer items-center gap-1.5 ${className}`}>
        {children ?? (
          <>
            {next === "focus" ? <FocusIcon /> : <PlayfulIcon />}
            <span className="sr-only lg:not-sr-only">{label}</span>
          </>
        )}
      </button>
    </form>
  );
}

/** Three straight lines: a tidy layout. */
function FocusIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[18px] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
      <path d="M4 7h16M4 12h10M4 17h13" />
    </svg>
  );
}

/** A small sparkle: back to the fun version. */
function PlayfulIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[18px] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden>
      <path d="M12 3c.6 4.4 2.6 6.4 7 7-4.4.6-6.4 2.6-7 7-.6-4.4-2.6-6.4-7-7 4.4-.6 6.4-2.6 7-7Z" />
      <path d="M19 16.5c.2 1.4.8 2 2.2 2.2-1.4.2-2 .8-2.2 2.2-.2-1.4-.8-2-2.2-2.2 1.4-.2 2-.8 2.2-2.2Z" />
    </svg>
  );
}
