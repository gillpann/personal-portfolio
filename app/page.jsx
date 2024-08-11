
// components
import About from "@/components/About";
import Hero from "@/components/Hero";
import MarqueeDemo from "@/components/MarqueeDemo";
import Services from "@/components/Services";
import Work  from "@/components/Work";
import Cta from "@/components/Cta";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MarqueeDemo />
      <Services />
      <Work />
      <Cta />
    </main>
  );
}
