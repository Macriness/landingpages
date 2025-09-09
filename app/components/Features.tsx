"use client";

import { useState, useEffect } from "react";
import { Users, Briefcase, TrendingUp, MessageCircle, Globe, Shield, ArrowRight, Zap } from "lucide-react";

const features = [
  { title: "Réseau Global Ultra-Connecté", desc: "Connectez-vous avec une communauté d'élite d'entrepreneurs, d'investisseurs et d'innovateurs africains répartis dans 120+ pays.", icon: Users, img: "/Container.png", kicker: "Plus de 50 000 entrepreneurs vérifiés" },
  { title: "Opportunités Business Premium", kicker: "500M+ d'opportunités disponibles", desc: "Accédez à des milliers d'opportunités d'investissement exclusives, des partenariats stratégiques et des projets d'impact à travers l'Afrique.", icon: Briefcase, img: "/Container-1.png" },
  { title: "Intelligence Marché Avancée", kicker: "Des informations basées sur l'IA en temps réel", desc: "Bénéficiez d'analyses prédictives, de rapports sectoriels exclusifs et d'insights basés sur l'IA pour optimiser vos décisions d'investissement.", icon: TrendingUp, img: "/Container-2.png" },
  { title: "Communication Sécurisée", desc: "Bénéficiez d'une messagerie instantanée protégée pour vos échanges confidentiels.", icon: MessageCircle, img: "/Container-3.png" },
  { title: "Impact Continental Mesurable", desc: "Suivez vos collaborations et mesurez leur impact réel sur le développement en Afrique.", icon: Globe, img: "/Container-4.png" },
  { title: "KYC/AML Ultra-Robuste", desc: "Une infrastructure de conformité intégrée, conforme aux standards internationaux.", icon: Shield, img: "/Container-5.png" },
];

export default function FeaturesSection() {
  return (
    <section id="features" className={`relative py-8 md:py-0 lg:-mt-2 text-[24px] md:pt-18 xl:pt-20 scroll-mt-10 sm:scroll-mt-20`}>
      <div className="relative text-center mb-6 md:mb-8 px-4 z-10">
        <div
          className="
            inline-flex items-center gap-1.5 mb-4  // Gap réduit, marge inférieure réduite
            px-3 py-1.5                           // Padding réduit pour la version mobile
            rounded-full uppercase tracking-[0.12em]
            text-[10px] font-semibold select-none // Taille de police réduite
            text-[#ED6D0B]
            bg-[#232323]
            backdrop-blur-[20px]
            ring-1 ring-inset ring-[rgba(237,109,11,0.20)]
            shadow-[0_8px_32px_rgba(237,109,11,0.30),inset_0_1px_0_rgba(255,255,255,0.20)]
            md:px-[22px] md:py-[8px] md:text-[12px] md:gap-2 md:mb-6 // Styles pour les écrans md et plus
          "
        >
          <Zap size={14} aria-hidden className="shrink-0" /> {/* Icône Zap */}
          <span>Propulsé par l'IA et la Blockchain</span>
        </div>

        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-snug px-2 font-sora">
          <span className="text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
            Fonctionnalités<br />
          </span>{" "}
          <span
            className="font-black tracking-[-1.58px] text-[var(--text-orange-2,#FF944F)]"
            style={{
              filter: `
                drop-shadow(0 0 20px rgba(255,148,79,1))
                drop-shadow(0 0 60px rgba(255,122,26,0.8))
                drop-shadow(0 0 100px rgba(255,148,79,1))
              `,
            }}
          >
            Révolutionnaires
          </span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-3xl mx-auto leading-relaxed text-[15px] md:text-[17.5px] px-4">
          UpAfrica redéfinit l'écosystème entrepreneurial africain avec des
          technologies de pointe. Découvrez comment notre plateforme transforme
          la collaboration intercontinentale.
        </p>
      </div>

      <div className="w-[92%] max-w-6xl mx-auto flex flex-col gap-6 md:gap-[32px]">
        {/* MOBILE: Layout en colonne unique */}
        <div className="flex flex-col gap-6 md:hidden">
          {features.map((f, i) => (
            <div
              key={i}
              className="
                group relative w-full max-w-[354px] mx-auto h-[630px] overflow-hidden
                rounded-[16px] md:rounded-[20px] border border-white/10 bg-black/10
                shadow-[0_8px_24px_rgba(0,0,0,0.35)]
                transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.45)]
              "
            >
              <img
                src={f.img}
                alt={f.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div
                className="absolute inset-0 rounded-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.22) 28%, rgba(0,0,0,0.58) 72%, rgba(0,0,0,0.75) 100%)",
                }}
              />
              <div className="relative z-10 flex h-full">
                <div className="mt-auto w-full px-10 pb-12 flex flex-col items-start text-left">
                  <div
                    className="
                      inline-grid place-items-center h-12 w-12 md:h-14 md:w-14 rounded-[12px] md:rounded-[14px]
                      mb-3 md:mb-4 bg-transparent
                      shadow-[0_0_20px_rgba(237,109,11,0.5)]
                    "
                  >
                    <f.icon size={20} className="text-white md:hidden" />
                    <f.icon size={22} className="text-white hidden md:block" />
                  </div>

                  <h3 className="text-[24.8px] font-bold leading-tight text-white">
                    {f.title}
                  </h3>

                  {"kicker" in f && (
                    <p className="mt-2 md:mt-3 text-[13.28px] font-semibold text-[#D9D9D9]">
                      {(f as any).kicker}
                    </p>
                  )}

                  <p className="mt-2 text-[15.53px] font-normal leading-relaxed text-[#D1D5DC]">
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TABLET: Layout en grille 2 colonnes */}
        <div className="hidden md:flex lg:hidden flex-col gap-[32px]">
          {Array.from({ length: Math.ceil(features.length / 2) }, (_, rowIndex) => (
            <div key={rowIndex} className="flex gap-[24px] justify-center flex-wrap">
              {features
                .slice(rowIndex * 2, rowIndex * 2 + 2)
                .map((f, i) => (
                  <div
                    key={i}
                    className="
                      group relative w-[320px] h-[500px] overflow-hidden
                      rounded-[20px] border border-white/10 bg-black/10
                      shadow-[0_12px_30px_rgba(0,0,0,0.35)]
                      transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.45)]
                    "
                  >
                    <img
                      src={f.img}
                      alt={f.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div
                      className="absolute inset-0 rounded-none"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.22) 28%, rgba(0,0,0,0.58) 72%, rgba(0,0,0,0.75) 100%)",
                      }}
                    />
                    <div className="relative z-10 flex h-full">
                      <div className="mt-auto w-full px-10 pb-12 flex flex-col items-start text-left">
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
                          <p className="mt-3 text-[10.5px] font-medium text-[#D9D9D9]">
                            {(f as any).kicker}
                          </p>
                        )}

                        <p className="mt-2 text-[15.8px] font-normal leading-relaxed text-[#D1D5DC]">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* DESKTOP: Layout en grille (3 colonnes) */}
        <div className="hidden lg:flex lg:flex-col lg:gap-[32px]">
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
                    <img
                      src={f.img}
                      alt={f.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div
                      className="absolute inset-0 rounded-none"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.22) 28%, rgba(0,0,0,0.58) 72%, rgba(0,0,0,0.75) 100%)",
                      }}
                    />
                    <div className="relative z-10 flex h-full">
                      <div className="mt-auto w-full px-10 pb-12 flex flex-col items-start text-left">
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
                          <p className="mt-3 text-[12.5px] font-medium text-[#D9D9D9]">
                            {(f as any).kicker}
                          </p>
                        )}

                        <p className="mt-2 text-[15.8px] font-normal leading-relaxed text-[#D1D5DC]">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* --- CTA Section --- */}
      <div className="flex justify-center mt-12 md:mt-[70px] px-4">
        <div
          className="
            relative w-full max-w-[1100px] min-h-[200px] md:min-h-[246px]
            rounded-[16px] md:rounded-[20px] p-6 md:p-[42px] text-center
            bg-[#232323]
            border-t-[4px] md:border-t-[6px] border-[#ED6D0B]
            shadow-[20px_20px_40px_rgba(0,0,0,0.4),0_0_40px_#232323]
          "
        >
          <h2 className="text-white text-[28px] md:text-[24px] lg:text-[28px] font-bold mb-3 leading-tight">
            Prêt à transformer votre approche du business en Afrique ?
          </h2>

          <p className="text-[#7F7F7F] mb-6 max-w-2xl mx-auto leading-relaxed text-[14px] md:text-[17.5px] px-2">
            Rejoignez l'élite des entrepreneurs africains qui utilisent déjà UpAfrica
            pour révolutionner leurs stratégies de développement continental.
          </p>

          <a
            href="#contact"
            aria-label="Commencer maintenant"
            className="
              inline-flex items-center justify-center gap-3
              h-12 md:h-12 px-6 md:px-7 rounded-[12px]
              bg-[#ED6D0B]
              text-white text-[14px] md:text-[15px] font-medium
              shadow-[0_1px_10px_rgba(237,109,11,0.5),0_1px_20px_rgba(237,109,11,0.5)]
              transition-transform duration-200 ease-in-out
              hover:scale-105 active:scale-95
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-[#ED6D0B]/60
              focus-visible:ring-offset-2 focus-visible:ring-offset-[#232323]
            "
            role="button"
          >
            Commencer maintenant
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

