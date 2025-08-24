import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // ton composant actuel
import Features from "./components/Features"; // si déjà créé
import WhyChoose from "./components/WhyChoose";
import AppSection from "./components/App";
import EcosystemSection from "./components/EcosystemSection";
import CtaSection from "./components/CtaSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <WhyChoose />
        <AppSection />
        <EcosystemSection />
        <CtaSection />
      </main>
    </>
  );
}
