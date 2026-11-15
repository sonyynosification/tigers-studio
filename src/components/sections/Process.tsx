import Image from "next/image";
import { Kit } from "@/components/kit/Kit";
import { SectionHeading } from "@/components/ui/chunky";
import { processMascots } from "@/content/site";
import { getDictionary } from "@/i18n/get-dictionary";

export async function Process() {
  const { process } = await getDictionary();
  return (
    <section
      id="process"
      className="scroll-mt-24 border-y-[2.5px] border-ink bg-paper"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow={process.eyebrow}>
          {process.title}
        </SectionHeading>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2">
          {process.steps.map((p, i) => {
            const mascot = processMascots[i];
            return (
              <li
                key={p.title}
                className="border-chunk shadow-chunk mr-[5px] rounded-[18px] bg-white p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <span className="font-display border-chunk inline-grid size-11 place-items-center rounded-full bg-tiger text-lg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display mt-4 text-xl">{p.title}</h3>
                  </div>
                  {/* Square, as tall as the number badge + one-line heading beside it (44 + 16 + 28px). */}
                  <div className="relative grid size-22 shrink-0 place-items-center">
                    {mascot ? (
                      <Image
                        src={mascot}
                        alt=""
                        fill
                        sizes="96px"
                        className="object-contain"
                      />
                    ) : (
                      // Placeholder until the step's mascot art exists (see processMascots).
                      <div
                        aria-hidden
                        className="grid size-full place-items-center rounded-2xl border-[2.5px] border-dashed border-ink/30"
                      >
                        <Kit className="w-3/5 opacity-25 grayscale" />
                      </div>
                    )}
                  </div>
                </div>
                <p className="mt-2 text-[15px]">{p.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
