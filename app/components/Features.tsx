"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Briefcase, Brain, MessageCircle, Globe2, ShieldCheck } from "lucide-react";

const features = [
  { title: "Réseau Global Ultra-Connecté", desc: "Accédez instantanément à un réseau de décideurs, d'investisseurs et d'entrepreneurs sur tout le continent.", icon: Users, img: "/Container.png" },
  { title: "Opportunités Business Premium", desc: "Découvrez des appels d'offres exclusifs et des opportunités stratégiques réservés aux membres.", icon: Briefcase, img: "/Container-1.png" },
  { title: "Intelligence Marché Avancée", desc: "Exploitez nos tableaux de bord interactifs et nos analyses de tendances pour prendre les meilleures décisions.", icon: Brain, img: "/Container-2.png" },
  { title: "Communication Sécurisée", desc: "Bénéficiez d'une messagerie instantanée protégée pour vos échanges confidentiels.", icon: MessageCircle, img: "/Container-2.png" },
  { title: "Impact Continental Mesurable", desc: "Suivez vos collaborations et mesurez leur impact réel sur le développement en Afrique.", icon: Globe2, img: "/Container-3.png" },
  { title: "KYC/AML Ultra-Robuste", desc: "Une infrastructure de conformité intégrée, conforme aux standards internationaux.", icon: ShieldCheck, img: "/Container-4.png" },
];

export default function Features() {
  return (
    <section className="relative py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Fonctionnalités <span className="text-orange-400">Révolutionnaires</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          UpAfrica solidifie l'écosystème entrepreneurial africain avec des technologies de pointe.
          Découvrez comment nos solutions transforment les interactions et accélèrent la croissance.
        </p>
      </div>

      {/* Grille des features : 3 par ligne avec 32px de gap */}
      <div className="w-[92%] max-w-6xl mx-auto flex flex-col gap-[32px]">
        {Array.from({ length: Math.ceil(features.length / 3) }, (_, rowIndex) => (
          <div key={rowIndex} className="flex gap-[32px] justify-center">
            {features.slice(rowIndex * 3, rowIndex * 3 + 3).map((f, i) => (
              <div
  key={i}
  className="relative w-[280px] h-[500px] rounded-[21px] overflow-hidden group bg-[#0f1012] border border-white/10 hover:border-orange-400/30 transition-all duration-500 flex flex-col shadow-[0_12px_10px_rgba(0,0,0,0.18)]"
>
  {/* Background Image */}
  <Image
    src={f.img}
    alt={f.title}
    width={600}
    height={400}
    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
  />
  {/* Overlay avec le gradient linéaire pour assombrissement léger */}
  <div className="absolute inset-0" style={{background: 'linear-gradient(180deg, rgba(35, 35, 35, 0.2) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.5) 90%)'}}></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col h-full p-6">
    {/* Icon positioned lower */}
    <div className="flex-grow flex items-end justify-start pb-8">
      <div className="w-16 h-16 rounded-[20px] bg-transparent border border-orange-400/40 shadow-[0_0_20px_rgba(255,165,0,0.35)] flex items-center justify-center">
        <f.icon className="text-white" size={28} />
      </div>
    </div>

    {/* Text pinned to bottom */}
    <div className="mt-auto">
      <h3 className="text-xl font-bold text-white">{f.title}</h3>
      <p className="text-gray-300 text-base mt-2">{f.desc}</p>
    </div>
  </div>
</div>
            ))}
          </div>
        ))}
      </div>

      {/* CTA Section sous les containers */}
      <div className="flex justify-center mt-[70px]">
        <div className="relative w-[1100px] min-h-[246px] rounded-[20px] bg-[#1a1b1f] border border-white/10 p-[42px] top-[6px] overflow-visible shadow-[0_10px_30px_rgba(0,0,0,0.55)] text-center">
          {/* Bande orange en haut */}
          <div className="pointer-events-none absolute -top-[6px] left-3 right-3 h-[10px] rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.6)]" />
          <div className="pointer-events-none absolute -top-[16px] left-6 right-6 h-[22px] bg-orange-500/20 blur-lg rounded-full" />

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prêt à transformer votre approche du business en Afrique ?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez l'élite des entrepreneurs africains qui utilisent déjà UpAfrica pour
            révolutionner leurs stratégies de développement continental.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-orange-500/25 transition-all"
          >
            Commencer maintenant →
          </Link>
        </div>
      </div>
    </section>
  );
}