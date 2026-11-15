import type { Metadata } from "next";
import { Kit } from "@/components/kit/Kit";
import { ButtonLink, Sticker } from "@/components/ui/chunky";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getDictionary();
  return { title: t.meta.notFoundTitle };
}

export default async function NotFound() {
  const [locale, t] = await Promise.all([getLocale(), getDictionary()]);
  return (
    <main className="grid min-h-dvh place-items-center px-4 py-16 text-center">
      <div>
        <div className="relative mx-auto w-56">
          <Kit eyes="sleepy" mouth="classic" className="h-auto w-full" />
          <Sticker tone="white" className="absolute -top-2 -right-6 rotate-12">
            zzz…
          </Sticker>
        </div>
        <h1 className="font-display mt-8 text-[clamp(40px,7vw,72px)] leading-none">404</h1>
        <p className="mx-auto mt-3 max-w-[34ch] text-lg font-medium">{t.notFound.body}</p>
        <ButtonLink href={`/${locale}`} className="mt-8">
          {t.notFound.back}
        </ButtonLink>
      </div>
    </main>
  );
}
