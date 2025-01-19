// components
import WelcomeScreen from "@/components/WelcomeScreen";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MarqueeDemo from "@/components/MarqueeDemo";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <>
      <WelcomeScreen />
      <main>
        <Hero />
        <About />
        <MarqueeDemo />
        <Services />
        <Work />
        <Cta />
      </main>
    </>
  );
}