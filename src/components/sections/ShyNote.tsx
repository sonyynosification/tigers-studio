import { getDictionary } from "@/i18n/get-dictionary";
import { ContactForm } from "./ContactForm";

/** Collapsible "leave a note" form for visitors who'd rather not call or email. */
export async function ShyNote() {
  const { form } = (await getDictionary()).contact;
  return (
    <section
      id="note"
      aria-label={form.title}
      className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-20 sm:px-6"
    >
      <details className="group border-chunk shadow-chunk-lg mr-2 rounded-[28px] bg-white text-ink">
        <summary className="flex cursor-pointer list-none items-center gap-4 rounded-[26px] p-5 sm:gap-6 sm:px-12 sm:py-8 [&::-webkit-details-marker]:hidden">
          <span
            aria-hidden
            className="border-chunk hidden size-12 shrink-0 -rotate-6 sm:grid place-items-center rounded-2xl bg-lilac text-2xl transition group-open:rotate-0"
          >
            ✉
          </span>
          <span className="min-w-0 flex-1">
            <span className="font-display block text-[clamp(20px,3vw,30px)] leading-[1.15]">
              {form.title}
            </span>
            <span className="mt-1 block font-medium text-ink/70">
              {form.body}
            </span>
          </span>
          <span
            aria-hidden
            className="border-chunk sm:shadow-chunk-sm font-display grid size-11 shrink-0 place-items-center rounded-full bg-tiger text-2xl leading-none transition group-open:rotate-45"
          >
            +
          </span>
        </summary>
        <div className="border-t-[2.5px] border-ink px-5 pt-6 pb-8 sm:px-12 sm:pb-10">
          <div className="max-w-2xl">
            <ContactForm t={form} />
          </div>
        </div>
      </details>
    </section>
  );
}
