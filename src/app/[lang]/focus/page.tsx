import type { Metadata } from "next";
import { FocusFooter } from "@/components/focus/FocusFooter";
import { FocusHeader } from "@/components/focus/FocusHeader";
import { FocusAbout, FocusContact, FocusHero, FocusProcess, FocusWork } from "@/components/focus/sections";
import { hasLocale } from "@/i18n/config";
import { getDictionaryFor } from "@/i18n/get-dictionary";

// Served at /[lang] by the proxy when the visitor picked Focus mode
// (see THEME_COOKIE). Same content as the playful page, in a calmer voice.
export async function generateMetadata({ params }: PageProps<"/[lang]/focus">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionaryFor(lang).focus;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    // One canonical homepage per language, whichever mode rendered it.
    alternates: { canonical: `/${lang}` },
  };
}

export default function FocusHome() {
  return (
    <>
      <FocusHeader />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-4 pt-4 pb-24 sm:px-6">
        <FocusHero />
        <FocusProcess />
        <FocusWork />
        <FocusAbout />
        <FocusContact />
      </main>
      <FocusFooter />
    </>
  );
}
