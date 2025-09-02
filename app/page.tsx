//page.tsx
import Navbar from "./components/Navbar";
//import Hero from "./components/Hero"; // ton composant actuel.
import Features from "./components/Features"; // si déjà créé
import WhyChoose from "./components/Why";
import AppSection from "./components/App";
import EcosystemSection from "./components/Ecosystem";
import CtaSection from "./components/CtaSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Features />
        <WhyChoose />
        <AppSection />
        <EcosystemSection />
        <CtaSection />
      </main>
    </>
  );
}
