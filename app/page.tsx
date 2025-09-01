// app/page.tsx
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import WhyChoose from "./components/Why";
import AppSection from "./components/App";
import EcosystemSection from "./components/Ecosystem";
import CtaSection from "./components/CtaSection";
import SectionWithParticles from "./components/SectionWithParticles";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Features />

        <WhyChoose />

        <SectionWithParticles
          // halo pour AppSection (coin sup gauche)
          color="#ff8c32"
          size={420}
          blur={64}
          opacity={0.34}
          posX={13.32}
          posY={14.49}
          className="min-h-[360px]"
          id="particles-app"
        >
          <AppSection />
        </SectionWithParticles>

        <SectionWithParticles
          // halo pour EcosystemSection (milieu-gauche)
          color="#ff8c32"
          size={360}
          blur={56}
          opacity={0.28}
          posX={20}
          posY={30}
          className="min-h-[320px]"
          id="particles-ecosystem"
        >
          <EcosystemSection />
        </SectionWithParticles>

        <SectionWithParticles
          // halo pour CtaSection (coin droit)
          color="#ff8c32"
          size={300}
          blur={48}
          opacity={0.22}
          posX={85}
          posY={18}
          className="min-h-[280px]"
          id="particles-cta"
        >
          <CtaSection />
        </SectionWithParticles>
      </main>
    </>
  );
}
