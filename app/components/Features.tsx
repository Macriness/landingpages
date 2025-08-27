"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Briefcase,
  TrendingUp,
  MessageCircle,
  Globe2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const features = [
  { title: "Réseau Global Ultra-Connecté", desc: "Connectez-vous avec une communauté d’élite d’entrepreneurs, d’investisseurs et d’innovateurs africains répartis dans 120+ pays.", icon: Users, img: "/Container.png", kicker: "Plus de 50 000 entrepreneurs vérifiés" },
  { title: "Opportunités Business Premium", kicker: "500M+ d'opportunités disponibles", desc: "Accédez à des milliers d’opportunités d’investissement exclusives, des partenariats stratégiques et des projets d’impact à travers l’Afrique.", icon: Briefcase, img: "/Container-1.png" },
  { title: "Intelligence Marché Avancée", kicker: "Des informations basées sur l’IA en temps réel", desc: "Bénéficiez d’analyses prédictives, de rapports sectoriels exclusifs et d’insights basés sur l’IA pour optimiser vos décisions d’investissement.", icon: TrendingUp, img: "/Container-2.png" },
  { title: "Communication Sécurisée", desc: "Bénéficiez d'une messagerie instantanée protégée pour vos échanges confidentiels.", icon: MessageCircle, img: "/Container-2.png" },
  { title: "Impact Continental Mesurable", desc: "Suivez vos collaborations et mesurez leur impact réel sur le développement en Afrique.", icon: Globe2, img: "/Container-3.png" },
  { title: "KYC/AML Ultra-Robuste", desc: "Une infrastructure de conformité intégrée, conforme aux standards internationaux.", icon: ShieldCheck, img: "/Container-4.png" },
];

export default function Features() {
  return (
    <section id="features" className={`relative py-24 ${dmSans.className} text-[24px]`}>
      {/* --- Header --- */}
      <div className="relative text-center mb-12">
        <div
          className="
            inline-flex items-center gap-2 rounded-full px-5 py-1.5
            text-[11px] uppercase tracking-[0.12em]
            border border-orange-400/40 text-orange-300
            bg-[linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.02))]
            shadow-[inset_0_1px_0_rgba(255,255,255,.14)]
          "
        >
          ⚡ Propulsé par l’IA et la Blockchain
        </div>

        <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug">
          <span className="text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
            Fonctionnalités<br />
          </span>{" "}
          <span
            className="font-black tracking-[-1.58px] text-[var(--text-orange-2,#FF944F)]"
            style={{
              filter: `
                drop-shadow(0 2px 6px rgba(0,0,0,0.25))
                drop-shadow(0 10px 18px rgba(255,122,26,0.28))
                drop-shadow(0 0 24px rgba(255,148,79,0.55))
              `,
            }}
          >
            Révolutionnaires
          </span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-3xl mx-auto leading-relaxed text-[17.5px]">
          UpAfrica redéfinit l’écosystème entrepreneurial africain avec des
          technologies de pointe. Découvrez comment notre plateforme transforme
          la collaboration intercontinentale.
        </p>
      </div>

      {/* --- Grid des features --- */}
      <div className="w-[92%] max-w-6xl mx-auto flex flex-col gap-[32px]">
        {Array.from({ length: Math.ceil(features.length / 3) }, (_, rowIndex) => (
          <div key={rowIndex} className="flex gap-[32px] justify-center flex-wrap">
            {features
              .slice(rowIndex * 3, rowIndex * 3 + 3)
              .map((f, i) => (
                <div
                  key={i}
                  className="
                    group relative w-[281px] h-[500px] overflow-hidden
                    rounded-[20px] border border-white/10 bg-black/10
                    shadow-[0_12px_30px_rgba(0,0,0,0.35)]
                    transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.45)]
                  "
                >
                  <Image
                    src={f.img}
                    alt={f.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div
                    className="absolute inset-0 rounded-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.22) 28%, rgba(0,0,0,0.58) 72%, rgba(0,0,0,0.75) 100%)",
                    }}
                  />
                  <div className="relative z-10 flex h-full">
                    <div className="mt-auto w-full px-5 pb-6">
                      <div
                        className="
                          inline-grid place-items-center h-14 w-14 rounded-[14px]
                          mb-4 bg-transparent
                          shadow-[0_0_20px_rgba(237,109,11,0.5)]
                        "
                      >
                        <f.icon size={22} className="text-white" />
                      </div>

                      <h3 className="text-[21px] font-bold leading-tight text-white">
                        {f.title}
                      </h3>

                      {"kicker" in f && (
                        <p className="mt-3 text-[10.5px] font-medium text-gray-200/95">
                          {(f as any).kicker}
                        </p>
                      )}

                      <p className="mt-2 text-[15.8px] leading-relaxed text-gray-300/90">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* --- CTA Section --- */}
      <div className="flex justify-center mt-[70px]">
  <div
    className="
      relative w-[1100px] max-w-[92%] min-h-[246px]
      rounded-[20px] p-[42px] text-center
      bg-[#232323]
      border-t-[6px] border-[#ED6D0B]
      shadow-[20px_20px_40px_rgba(0,0,0,0.4),0_0_40px_#232323]
    "
  >
    <h2 className="text-white text-[24px] md:text-[28px] font-bold mb-3">
      Prêt à transformer votre approche du business en Afrique ?
    </h2>

    <p className="text-[#D1D5DC] mb-6 max-w-2xl mx-auto leading-relaxed text-[17.5px]">
      Rejoignez l’élite des entrepreneurs africains qui utilisent déjà UpAfrica
      pour révolutionner leurs stratégies de développement continental.
    </p>

    <Link
      href="#contact"
      aria-label="Commencer maintenant"
      className="
        inline-flex items-center justify-center gap-3
        h-12 px-7 rounded-[12px]
        bg-[#ED6D0B]
        text-white text-[15px] font-medium
        shadow-[0_1px_10px_rgba(237,109,11,0.5),0_1px_20px_rgba(237,109,11,0.5)]
        transition-transform duration-150
        hover:-translate-y-[1px]
        active:translate-y-0
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-[#ED6D0B]/60
        focus-visible:ring-offset-2 focus-visible:ring-offset-[#232323]
      "
    >
      Commencer maintenant
      <ArrowRight className="h-4 w-4" />
    </Link>
  </div>
</div>
    </section>
  );
}
