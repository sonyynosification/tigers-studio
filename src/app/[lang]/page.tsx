import { FloatingKit } from "@/components/kit/FloatingKit";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Process } from "@/components/sections/Process";
import { ShyNote } from "@/components/sections/ShyNote";
import { Services } from "@/components/sections/Services";
import { Studio } from "@/components/sections/Studio";
import { Work } from "@/components/sections/Work";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function Home() {
  const { hero } = await getDictionary();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Work />
        <Studio />
        <Contact />
        <ShyNote />
      </main>
      <Footer />
      <FloatingKit bubble={hero.floatingKit.bubble} label={hero.floatingKit.label} />
    </>
  );
}
