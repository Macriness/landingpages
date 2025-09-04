"use client";
import { useState } from "react";

import Navbar from "./components/Navbar";
import ContactFormModal from "./components/ContactForm";
import Features from "./components/Features";
import WhyChoose from "./components/Why";
import AppSection from "./components/App";
import EcosystemSection from "./components/Ecosystem";
import CtaSection from "./components/CtaSection";

export default function Home() {
  // ✅ État qui gère l’ouverture de la modal
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      {/* 🚨 Navbar visible seulement si le formulaire est fermé */}
      {!contactOpen && <Navbar onContactClick={() => setContactOpen(true)} />}

      <main className="relative z-10">
        <Features />
        <WhyChoose />
        <AppSection />
        <EcosystemSection />
        <CtaSection />

        {/* ✅ Modal de contact */}
        <ContactFormModal
          open={contactOpen}
          onClose={() => setContactOpen(false)}
        />
      </main>
    </>
  );
}

