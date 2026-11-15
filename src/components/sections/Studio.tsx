import { Kit } from "@/components/kit/Kit";
import { SectionHeading, Sticker } from "@/components/ui/chunky";
import { getDictionary } from "@/i18n/get-dictionary";

const tones = ["mint", "sun", "lilac", "white", "tiger"] as const;
const tilts = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2"];

function KitCard({ title, className = "" }: { title: string; className?: string }) {
  return (
    <div
      className={`border-chunk shadow-chunk-lg mx-auto w-[calc(100%-0.5rem)] max-w-sm -translate-x-1 rounded-3xl bg-sun p-8 ${className}`}
    >
      <Kit body scarf className="mx-auto h-auto w-3/4" title={title} />
    </div>
  );
}

export async function Studio() {
  const { studio } = await getDictionary();
  return (
    <section
      id="studio"
      className="mx-auto grid max-w-6xl scroll-mt-24 items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.2fr]"
    >
      <KitCard title={studio.kitTitle} className="hidden md:block" />
      <div>
        <SectionHeading eyebrow={studio.eyebrow}>{studio.title}</SectionHeading>
        <p className="mt-6 max-w-[52ch] text-lg">{studio.body}</p>
        {/* On mobile the card sits between the paragraphs; from md it has its own column. */}
        <KitCard title={studio.kitTitle} className="my-10 md:hidden" />
        <p className="mt-4 max-w-[52ch] text-lg">{studio.kit}</p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {studio.values.map((v, i) => (
            <li key={v}>
              <Sticker tone={tones[i % tones.length]} className={`${tilts[i % tilts.length]} text-[15px]`}>
                {v}
              </Sticker>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
