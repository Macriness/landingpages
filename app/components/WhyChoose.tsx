"use client";

import {
  Euro,
  Lock,
  Heart,
  Users,
  Building2,
  Globe,
  ArrowUpRight,
  ArrowRight,
  Award,
  Rocket,
  Zap,
  LucideIcon,
   User
  } from "lucide-react";
  import { Button } from "@heroui/react";

/* --- Section WhyChoose --- */
export default function WhyChoose() {
  return (
    <section id="why" className="relative py-24 text-white">
      <div className="mx-auto w-[92%] max-w-6xl text-center space-y-20">
        {/* HEADER */}
        <div className="relative text-center mb-12">
          {/* Badge pill glossy */}
          <div
            className="relative inline-flex items-center gap-2 rounded-full px-5 py-1.5
                        text-[11px] uppercase tracking-[0.12em]
                        border border-orange-400/40 text-orange-300
                        bg-[linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.02))]
                        shadow-[inset_0_1px_0_rgba(255,255,255,.14)]"
          >
            <Zap size={14} className="opacity-90" />
            <span>PLUS DE 50 000 ENTREPRENEURS NOUS FONT CONFIANCE</span>
            <Zap size={14} className="opacity-90" />
          </div>

          {/* glow badge */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-3
                        h-16 w-[60%] rounded-full
                        bg-[radial-gradient(65%_70%_at_50%_50%,rgba(255,148,79,0.22),transparent_70%)]
                        blur-2xl"
          />

          {/* Heading */}
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug tracking-[-0.01em]">
  <span className="text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
    Pourquoi choisir{" "}
  </span>
  <span
    className="bg-gradient-to-b from-[#FFD3A8] via-[#FF944F] to-[#FF7A1A]
               bg-clip-text text-transparent font-black"
    style={{
      filter: `
        drop-shadow(0 2px 6px rgba(0,0,0,0.25))
        drop-shadow(0 10px 18px rgba(255,122,26,0.28))
        drop-shadow(0 0 24px rgba(255,148,79,0.55))
      `,
    }}
  >
    UpAfrica
  </span>
  <span className="text-white"> ?</span>
</h2>

          {/* Orbes décoratifs */}
          <span
            aria-hidden
            className="pointer-events-none absolute -left-1 top-1 h-2 w-2 rounded-full
                       bg-orange-400/90 shadow-[0_0_10px_rgba(255,148,79,.8)]"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute right-7 top-9 h-[7px] w-[7px] rounded-full
                       bg-orange-400/90 shadow-[0_0_14px_rgba(255,148,79,.9)]"
          />

          {/* Sous-texte */}
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Plus qu&apos;une plateforme, UpAfrica est l&apos;écosystème qui
            propulse l&apos;innovation africaine. Découvrez pourquoi les
            dirigeants du continent nous font confiance pour leurs projets les
            plus ambitieux.
          </p>
        </div>

        {/* === Feature Cards === */}
        <div className="flex flex-wrap justify-center gap-[28px] max-w-[1100px] mx-auto mt-16">
          <FeatureCard
            icon={ArrowUpRight}
            title="Plus de 750M d'euros"
            subtitle="Capital facilité"
            description="Investissements et financements réalisés via notre écosystème"
            badge="+150% par rapport à 2023"
          />
          <FeatureCard
            icon={Award}
            title=""
            subtitle="Satisfaction client"
            description="Net Promoter Score exceptionnel de notre communauté premium"
            badge="#1 Plateforme Afrique"
          />
          <FeatureCard
            icon={Heart}
            title=""
            subtitle="Histoires de réussite"
            description="Partenariats et collaborations fructueuses créées"
            badge="Record historique"
          />
        </div>

        {/* === Stat Block Glassmorphism === */}
        <div
          className="
            relative w-full max-w-[854px] mx-auto
            rounded-[14px] border border-white/10
            bg-white/5 backdrop-blur-md
            shadow-[0_8px_24px_rgba(0,0,0,0.35)]
            pt-[43px] pr-[29px] pb-[29px] pl-[29px]
          "
        >
          {/* hotspot orangé */}
          <div
            className="
              pointer-events-none absolute -top-16 right-10 h-56 w-56 rounded-full
              bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,148,79,0.4),transparent_70%)]
              blur-3xl
            "
          />

          <ul className="grid grid-cols-2 sm:grid-cols-4 place-items-center gap-y-8 gap-x-10">
            <StatV2 icon={<Users size={22} />} value="25 000+" label="Emplois créés" />
            <StatV2 icon={<Rocket size={22} />} value="500+" label="Startups financées" />
            <StatV2 icon={<Globe size={22} />} value="54" label="Pays impactés" />
            <StatV2 icon={<Euro size={22} />} value="750 millions d&apos;euros" label="Capital mobilisé" />
          </ul>
        </div>

        {/* === CTA Néomorphique === */}
        <div
          className="
            relative w-full max-w-[1100px] mx-auto
            rounded-[20px] p-12 text-center
            bg-[#232323] border border-white/6
            shadow-[20px_20px_40px_rgba(0,0,0,0.40),-20px_-20px_40px_rgba(255,255,255,0.06),inset_2px_2px_6px_rgba(0,0,0,0.35),inset_-2px_-2px_6px_rgba(255,255,255,0.06)]
          "
        >
          {/* Badge top — selon tes specs Figma */}
          <div
            className="
              inline-flex items-center gap-2 mb-6
              px-[22px] py-[8px]
              rounded-full uppercase tracking-[0.12em]
              text-[12px] font-semibold select-none
              text-[#ED6D0B]
              bg-[rgba(237,109,11,0.10)]
              backdrop-blur-[20px]
              ring-1 ring-inset ring-[rgba(237,109,11,0.20)]
              shadow-[0_8px_32px_rgba(237,109,11,0.30),inset_0_1px_0_rgba(255,255,255,0.20)]
            "
          >
            <User size={14} aria-hidden className="shrink-0" />
            <span>REJOIGNEZ L&apos;ÉLITE</span>
          </div>

          {/* Title */}
<h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug">
  L&apos;Afrique a besoin de{" "}
  <span
    className="bg-gradient-to-b from-[#FFD3A8] via-[#FF944F] to-[#FF7A1A]
               bg-clip-text text-transparent font-black"
    style={{
      filter: `
        drop-shadow(0 2px 6px rgba(0,0,0,0.25))
        drop-shadow(0 10px 18px rgba(255,122,26,0.28))
        drop-shadow(0 0 24px rgba(255,148,79,0.55))
      `,
    }}
  >
    ses talents
  </span>
</h3>

          {/* Description */}
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
            Rejoignez l&apos;écosystème d&apos;innovation le plus exclusif d&apos;Afrique.
            Connectez-vous avec l&apos;élite entrepreneuriale et participez à la révolution
            économique du continent.
          </p>

          {/* Boutons */}
          <div className="flex flex-wrap justify-center gap-4">
                <Button
      className="
        relative 
        w-auto h-9 
        px-3 py-1.5 gap-1.5 
        rounded-lg 
        bg-[#ED6D0B] 
        text-white font-semibold 
        shadow-[0px_1px_20px_rgba(237,109,11,0.5),0px_4px_12px_rgba(0,0,0,0.15)]
        transition-transform duration-200 ease-in-out
        hover:scale-105
        active:scale-95
      "
    >
      Rejoindre l’élite
      <ArrowRight className="w-4 h-4 ml-1" />
    </Button>

            <Button
    className="
      inline-flex items-center justify-center
      h-9 px-3 py-1.5 rounded-lg
      bg-[#2B2B2B] text-white font-semibold   /* token Buttons/Full/Base grey */
      shadow-[0_1px_20px_rgba(237,109,11,0.20),0_4px_12px_rgba(0,0,0,0.15)]
      transition-colors duration-200
      hover:brightness-110
    "
  >
    Découvrez les success stories
  </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- FeatureCard --- */
function FeatureCard({
  icon: Icon,
  title,
  subtitle,
  description,
  badge,
}: {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  description: string;
  badge: string;
}) {
  return (
    <div
      className="
        relative flex flex-col items-center text-center overflow-hidden
        w-[266px] min-h-[381px] p-[28px] gap-[23px]
        rounded-[20px] bg-[#232323]
        shadow-[8px_8px_20px_rgba(0,0,0,0.65),-8px_-8px_20px_rgba(255,255,255,0.05),
                inset_1px_1px_2px_rgba(255,255,255,0.04),inset_-1px_-1px_3px_rgba(0,0,0,0.28)]
      "
    >
      {/* halo derrière l’icône */}
      <span
        className="pointer-events-none absolute top-6 h-24 w-24 rounded-[18px] -z-10
                   bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,148,79,0.35),transparent_65%)]
                   blur-xl"
      />

      {/* Icône */}
      <div
        className="
          grid place-items-center h-14 w-14 rounded-[14px]
          border border-white/10
          shadow-[0_14px_28px_rgba(255,122,26,0.45)]
        "
        style={{
          background: "linear-gradient(180deg,#FF9A3C 0%,#FF7A1A 100%)",
        }}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Titre */}
      <h3
        className="
          text-[22px] leading-tight font-extrabold
          bg-gradient-to-b from-[#FFE6D1] via-[#FFD1A6] to-[#FF9A3C]
          bg-clip-text text-transparent
          drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]
        "
      >
        {title}
      </h3>

      {subtitle && (
        <h4 className="text-[15px] font-semibold text-white/95">{subtitle}</h4>
      )}

      <p className="text-[13px] leading-relaxed text-gray-400">{description}</p>

      {/* Badge */}
      <span
        className="
          inline-flex items-center gap-1.5
          px-3.5 py-1.5 rounded-full text-[12px] font-medium
          text-orange-200
          bg-[rgba(255,149,79,0.10)]
          backdrop-blur-md
          border border-orange-400/35
          shadow-[0_8px_24px_rgba(255,122,26,0.25),inset_0_1px_0_rgba(255,255,255,0.12)]
        "
      >
        ↑ {badge}
      </span>
    </div>
  );
}

function StatV2({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <li className="flex flex-col items-center text-center select-none">
      <div className="relative mb-2">
        <span className="grid place-items-center w-9 h-9 text-gray-200/90">
          {icon}
        </span>
        <span
          className="
            pointer-events-none absolute inset-0 rounded-full
            bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.35),transparent_70%)]
            blur-[2px] opacity-70
          "
        />
      </div>

      <div
        className="
          text-xl md:text-2xl font-extrabold tracking-tight
          bg-gradient-to-br from-orange-200 via-orange-300 to-orange-500
          bg-clip-text text-transparent
          drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]
        "
      >
        {value}
      </div>

      <div className="mt-1 text-[13px] md:text-sm text-gray-400/90">{label}</div>
    </li>
  );
}
