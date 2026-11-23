import { InteractiveKit } from "@/components/kit/InteractiveKit";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { ButtonLink, Sticker, Tape } from "@/components/ui/chunky";
import { getDictionary } from "@/i18n/get-dictionary";

export async function Hero() {
  const t = await getDictionary();
  const { title } = t.hero;
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-16 sm:px-6 md:grid-cols-[1.3fr_1fr] md:pt-16 md:pb-24">
      <div>
        <Sticker tone="sun" className="-rotate-3">
          {t.hero.sticker}
        </Sticker>
        <h1 className="font-display mt-5 text-[clamp(44px,7.5vw,88px)] leading-[0.92] tracking-[-0.02em] text-balance">
          {title.before}
          <Tape>{title.tape}</Tape>
          {title.after}
        </h1>
        <p className="mt-6 max-w-[42ch] text-lg font-medium md:text-xl">
          {t.hero.lead}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="#contact">{t.hero.ctaPrimary}</ButtonLink>
          <ButtonLink href="#work" tone="white">
            {t.hero.ctaSecondary}
          </ButtonLink>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[420px] flex-col items-center">
        <div className="relative aspect-square w-full">
          <div className="border-chunk shadow-chunk-lg absolute inset-[8%] grid place-items-center rounded-3xl bg-lilac">
            <InteractiveKit label={t.hero.kitLabel} className="w-[64%]" />
          </div>
          <Sticker className="absolute top-[2%] -left-[2%] -rotate-10">
            {t.hero.stickerWebsites}
          </Sticker>
          <Sticker
            tone="sun"
            className="absolute right-1.5 bottom-[4%] rotate-8 sm:right-[-2%]"
          >
            {t.hero.stickerApps}
          </Sticker>
          <Sticker
            tone="white"
            className="absolute top-[40%] right-1.5 rotate-14 sm:-right-[5%]"
          >
            {"</> grr :)"}
          </Sticker>
        </div>

        {/* Kit's tip: an exit to the calmer Focus layout for anyone the fun is too much for. */}
        <ThemeToggle
          current="playful"
          className="border-chunk shadow-chunk-sm relative -mt-1 flex-col gap-0 rounded-2xl bg-white px-4 py-2.5 text-center transition hover:-translate-y-0.5 hover:bg-sun"
        >
          <span
            aria-hidden
            className="absolute -top-[9px] left-1/2 size-4 -translate-x-1/2 rotate-45 border-t-[2.5px] border-l-[2.5px] border-ink bg-inherit"
          />
          <span className="relative text-sm font-medium text-ink/70">
            {t.themeToggle.kitTip.lead}
          </span>
          <span className="relative font-bold underline decoration-tiger decoration-2 underline-offset-4">
            {t.themeToggle.kitTip.action}
          </span>
        </ThemeToggle>
      </div>
    </section>
  );
}
