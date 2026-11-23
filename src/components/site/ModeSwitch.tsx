import { ModeSwitchButton } from "@/components/site/ModeSwitchButton";
import type { Theme } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";

/**
 * Header switch between the playful site (on: Kit in colour) and the calm Focus layout (off: Kit in black and white).
 * A plain POST form like <ThemeToggle />, so it works without JS (the button animates first when JS is on); /api/theme saves the
 * choice and brings the visitor back to `path` (a page under /[lang]) in the other mode.
 */
export async function ModeSwitch({ current, path = "" }: { current: Theme; path?: string }) {
  const [locale, t] = await Promise.all([getLocale(), getDictionary()]);
  const on = current === "playful";
  const hint = on ? t.themeToggle.toFocusHint : t.themeToggle.toPlayfulHint;

  return (
    <form action="/api/theme" method="post" className="contents">
      <input type="hidden" name="theme" value={on ? "focus" : "playful"} />
      <input type="hidden" name="lang" value={locale} />
      <input type="hidden" name="path" value={path} />
      <ModeSwitchButton on={on} label={t.themeToggle.toPlayful} hint={hint} />
    </form>
  );
}
