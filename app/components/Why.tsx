"use client";

import {
  ArrowUpRight,
  TrendingUp,
  ArrowRight,
  Award,
  Zap,
  LucideIcon,
  User,
  Dot,
  Heart,
} from "lucide-react";
import { Button } from "@heroui/react";
import Image from "next/image"; // Importe le composant Image de Next.js

/* --- Section WhyChoose --- */
export default function WhyChoose() {
  return (
    <section id="why" className="relative py-24 text-white">
      <div className="mx-auto w-[92%] max-w-6xl text-center space-y-20">
        {/* HEADER */}
        <div className="relative text-center mb-12">
          {/* Badge pill glossy */}
          <div
  className="
    inline-flex items-center gap-1.5 mb-6 flex-nowrap
    max-w-full justify-center
    px-2 py-1
    rounded-full uppercase tracking-[0.12em]
    font-semibold select-none
    text-[#ED6D0B]
    bg-[#232323]
    backdrop-blur-[20px]
    ring-1 ring-inset ring-[rgba(237,109,11,0.20)]
    shadow-[0_8px_32px_rgba(237,109,11,0.30),inset_0_1px_0_rgba(255,255,255,0.20)]
    overflow-hidden
  "
>
  <Dot size={24} className="opacity-90 shrink-0" />
  <span className="whitespace-nowrap text-[clamp(10px,2.5vw,14px)] leading-tight">
    PLUS DE 50 000 ENTREPRENEURS NOUS FONT CONFIANCE
  </span>
  <Zap size={12} className="opacity-90 shrink-0" />
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
          <h2
            className="
              mt-4
              text-2xl sm:text-3xl md:text-5xl lg:text-6xl
              font-black
              font-bold
              leading-snug md:leading-[65.6px]
              tracking-[0]
            "
          >
            <span className="text-white [filter:drop-shadow(0_2px_6px_rgba(0,0,0,0.25))]">
              Pourquoi choisir{" "}
            </span>

            {/* UpAfrica : utilise la variable --frame-full-orange-3 */}
            <span
              style={{
                color: "#E86A0C", // orange soutenu, plus chaud et plus foncé
                filter: "drop-shadow(0 1px 30px #E86A0C)",
                textShadow: "0 1px 30px #E86A0C",
              }}
              className="font-black font-bold"
            >
              UpAfrica
            </span>

            <span className="text-white font-bold"> ?</span>
          </h2>

          {/* Sous-texte */}
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Plus qu&apos;une plateforme, UpAfrica est l&apos;écosystème qui
            propulse l&apos;innovation africaine. Découvrez pourquoi les
            dirigeants du continent nous font confiance pour leurs projets les
            plus ambitieux.
          </p>
        </div>

        {/* MOBILE: Layout en colonne unique - Ajustement du gap pour plus de compacité */}
        <div className="flex flex-col items-center gap-4 md:hidden max-w-[1100px] mx-auto mt-16">
          <FeatureCard
            icon={TrendingUp}
            title="Plus de 750M d'euros"
            subtitle="Capital facilité"
            description="Investissements et financements réalisés via notre écosystème"
            badge={
              <>
                <ArrowUpRight size={14} className="ml-1 opacity-90" />
                +150% par rapport à 2023
              </>
            }
          />
          <FeatureCard
            icon={Award}
            title="99.2%"
            subtitle="Satisfaction client"
            description="Net Promoter Score exceptionnel de notre communauté premium"
            badge="#1 Plateforme Afrique"
          />
          <FeatureCard
            icon={Heart}
            title="5000+"
            subtitle="Histoires de réussite"
            description="Partenariats et collaborations fructueuses créées"
            badge="Record historique"
          />
        </div>

        {/* TABLETTE: Layout 3 cartes sur une ligne */}
        <div className="hidden md:flex lg:hidden justify-center gap-[20px] max-w-[1100px] mx-auto mt-16">
          <FeatureCard
            icon={TrendingUp}
            title="Plus de 750M d'euros"
            subtitle="Capital facilité"
            description="Investissements et financements réalisés via notre écosystème"
            isTablet={true}
            badge={
              <>
                <ArrowUpRight size={14} className="ml-1 opacity-90" />
                +150% par rapport à 2023
              </>
            }
          />
          <FeatureCard
            icon={Award}
            title="99.2%"
            subtitle="Satisfaction client"
            description="Net Promoter Score exceptionnel de notre communauté premium"
            badge="#1 Plateforme Afrique"
            isTablet={true}
          />
          <FeatureCard
            icon={Heart}
            title="5000+"
            subtitle="Histoires de réussite"
            description="Partenariats et collaborations fructueuses créées"
            badge="Record historique"
            isTablet={true}
          />
        </div>

        {/* DESKTOP: Layout original inchangé */}
        <div className="hidden lg:flex flex-wrap justify-center max-w-[1100px] mx-auto mt-24">
          <FeatureCard
            icon={TrendingUp}
            title="Plus de 750M d'euros"
            subtitle="Capital facilité"
            description="Investissements et financements réalisés via notre écosystème"
            badge={
              <>
                <ArrowUpRight size={14} className="ml-1 opacity-90" />
                +150% par rapport à 2023
              </>
            }
          />
          <FeatureCard
            icon={Award}
            title="99.2%"
            subtitle="Satisfaction client"
            description="Net Promoter Score exceptionnel de notre communauté premium"
            badge="#1 Plateforme Afrique"
            className="ml-[-50px]"
          />
          <FeatureCard
            icon={Heart}
            title="5000+"
            subtitle="Histoires de réussite"
            description="Partenariats et collaborations fructueuses créées"
            badge="Record historique"
            className="ml-[-50px]"
          />
        </div>
        
        {/* --- Stat Block Glassmorphism --- */}
        {/* Conteneur principal pour les stats desktop (caché sur mobile) */}
        <div
          className="
            relative w-full max-w-[925px] mx-auto
            rounded-[14px] border border-white/10
            bg-white/5 backdrop-blur-md
            shadow-[0_8px_24px_rgba(0,0,0,0.35)]
            pt-[43px] pr-[29px] pb-[29px] pl-[29px]
            hidden md:block
          "
        >
          {/* hotspot orangé */}
          <div
            className="
              pointer-events-none absolute -top-16 right-10 h-56 w-63 rounded-full
              bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,148,79,0.4),transparent_70%)]
              blur-3xl shadow-[0_0_40px_#232323]
            "
          />

          {/* Desktop: Liste horizontale comme avant */}
          <ul className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3">
            <StatV2 imgSrc="/ico.png" alt="Icone utilisateurs" value="25 000+" label="Emplois créés" />
            <StatV2 imgSrc="/ico3.png" alt="Icone fusée" value="500+" label="Startups financées" />
            <StatV2 imgSrc="/ico2.png" alt="Icone globe terrestre" value="54" label="Pays impactés" />
            <StatV2 imgSrc="/ico1.png" alt="Icone dollar" value="750 millions d'euros" label="Capital mobilisé" />
          </ul>
        </div>

        {/* Conteneur pour les stats mobiles (caché sur desktop) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:hidden">
            <StatV2Card imgSrc="/ico.png" alt="Icone utilisateurs" value="25 000+" label="Emplois créés" />
            <StatV2Card imgSrc="/ico3.png" alt="Icone fusée" value="500+" label="Startups financées" />
            <StatV2Card imgSrc="/ico2.png" alt="Icone globe terrestre" value="54" label="Pays impactés" />
            <StatV2Card imgSrc="/ico1.png" alt="Icone dollar" value="€750 M" label="Capital mobilisé" />
        </div>

        {/* === CTA Néomorphique === */}
        <div
          className="
            relative w-full max-w-[1100px] mx-auto
            rounded-[20px] p-6 md:p-8 text-center
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
              bg-[#232323]
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
                  drop-shadow(0_0_24px_rgba(255,148,79,0.55))
                `,
              }}
            >
              ses talents
            </span>
          </h3>

          {/* Description */}
          <p className="text-gray-400 max-w-3xl mx-auto mb-8 text-[15px] text-lg leading-relaxed">
            Rejoignez l&apos;écosystème d&apos;innovation le plus exclusif d&apos;Afrique.
            Connectez-vous avec l&apos;élite entrepreneuriale et participez à la révolution
            économique du continent.
          </p>

          {/* Boutons */}
          <div className="flex flex-row justify-center gap-2">
            <Button
              className="
                relative 
                w-auto h-9 
                px-3 py-1.5 gap-1.5 
                rounded-lg 
                bg-[#ED6D0B] 
                text-white font-semibold text-[13px]
                shadow-[0px_1px_20px_rgba(237,109,11,0.5),0px_4px_12px_rgba(0,0,0,0.15)]
                transition-transform duration-200 ease-in-out
                hover:scale-105
                active:scale-95
              "
            >
              Rejoindre l'élite
              <ArrowRight className="w-7 h-7 sm:w-4 sm:h-4" /> {/* Adjusted size for mobile */}
            </Button>

            <Button
              className="
                inline-flex items-center justify-center
                h-9 px-3 py-1.5 rounded-lg
                bg-[#2B2B2B] text-white font-semibold text-[13px] /* token Buttons/Full/Base grey */
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
  isTablet = false,
  className = "",
}: {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  description: string;
  badge: React.ReactNode;
  isTablet?: boolean;
  className?: string;
}) {
  // Dimensions adaptées pour tablette
  const cardWidth = isTablet ? "w-[240px]" : "w-[90%] max-w-[280px]"; // Ajustement ici pour mobile
  const cardPadding = isTablet ? "p-[22px]" : "p-6 sm:p-[28px]";
  const cardGap = isTablet ? "gap-[10px]" : "gap-[10px]";

  // Hauteur fixe pour l'uniformité
  const fixedHeight = isTablet ? "h-[290px]" : "h-[280px] sm:h-[310px]";

  return (
    <div
      className={`
        relative flex flex-col items-center text-center overflow-hidden
        ${cardWidth} ${fixedHeight} ${cardPadding} ${cardGap}
        rounded-[20px] bg-[#232323] border border-white/6
        shadow-[20px_20px_40px_rgba(0,0,0,0.40),-20px_-20px_40px_rgba(255,255,255,0.06),inset_2px_2px_6px_rgba(0,0,0,0.35),inset_-2px_-2px_6px_rgba(255,255,255,0.06)]
        mx-auto // Pour centrer la carte sur mobile si elle n'est pas pleine largeur
        ${className}
      `}
    >
      {/* halo derrière l'icône */}
      <span
        className="pointer-events-none absolute top-6 h-24 w-24 rounded-[18px] -z-10
          bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,148,79,0.35),transparent_65%)]
          blur-xl"
      />

      {/* Icône */}
      <div
        className={`
          grid place-items-center rounded-[14px]
          border border-white/10
          shadow-[0_14px_28px_rgba(255,122,26,0.45)]
          ${isTablet ? "h-12 w-12" : "h-14 w-14"}
        `}
        style={{
          background: "linear-gradient(180deg,#FF9A3C 0%,#FF7A1A 100%)",
        }}
      >
        <Icon className={`text-white ${isTablet ? "w-5 h-5" : "w-7 h-7"}`} />
      </div>

      {/* Titre */}
      <h3
        className={`
          leading-tight font-extrabold
          bg-gradient-to-b from-[#FFE6D1] via-[#FFB380] to-[#FFA366]
          bg-clip-text text-transparent
          drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]
          ${isTablet ? "text-[19px]" : "text-[21px] sm:text-[22px]"}
        `}
      >
        {title}
      </h3>

      {subtitle && (
        <h4 className={`font-semibold text-white/95 ${isTablet ? "text-[14px]" : "text-[15px]"}`}>
          {subtitle}
        </h4>
      )}

      <p className={`leading-relaxed text-gray-400 ${isTablet ? "text-[14px]" : "text-[15px]"}`}>
        {description}
      </p>

      {/* Badge */}
      <span
        className="
          inline-flex items-center gap-1.5
          px-3 py-1.5 rounded-full uppercase tracking-[0.12em]
          text-[9px] font-semibold select-none
          text-[#ED6D0B]
          bg-[#232323]
          backdrop-blur-[20px]
          ring-1 ring-inset ring-[rgba(237,109,11,0.20)]
          shadow-[0_8px_32px_rgba(237,109,11,0.30),inset_0_1px_0_rgba(255,255,255,0.20)]
          md:text-[8.5px] md:px-[22px] md:py-[8px] md:gap-2
        "
      >
          {badge}
      </span>
    </div>
  );
}

// Version desktop (inchangée)
function StatV2({
  imgSrc,
  alt,
  value,
  label,
}: {
  imgSrc: string;
  alt: string;
  value: string;
  label: string;
}) {
  return (
    <li className="flex flex-col items-center text-center select-none">
      {/* Icône */}
      <div className="relative mb-2">
        <Image src={imgSrc} alt={alt} width={32} height={32} className="w-8 h-8 opacity-90" />
        <span
          className="
            pointer-events-none absolute inset-0 rounded-full
            bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.35),transparent_70%)]
            blur-[2px] opacity-70
          "
        />
      </div>

      {/* Valeur */}
      <div
        className="
          text-base md:text-lg font-bold tracking-tight
          bg-gradient-to-br from-[#FFE6D1] via-[#FFB380] to-[#FFA366]
          bg-clip-text text-transparent
          drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]
          whitespace-nowrap
        "
      >
        {value}
      </div>

      {/* Label */}
      <div className="mt-1 text-[12px] md:text-[13px] text-gray-400/90">
        {label}
      </div>
    </li>
  );
}

// Nouvelle version carte pour mobile/tablette
function StatV2Card({
  imgSrc,
  alt,
  value,
  label,
}: {
  imgSrc: string;
  alt: string;
  value: string;
  label: string;
}) {
  return (
    <div
      className="
        relative flex flex-col items-center text-center select-none
        p-4 rounded-xl
        bg-white/5 border border-white/10
        shadow-[0_4px_12px_rgba(0,0,0,0.25)]
        backdrop-blur-sm
      "
    >
      {/* Halo subtil derrière l'icône */}
      <div
        className="
          pointer-events-none absolute top-2 left-1/2 -translate-x-1/2
          h-12 w-12 rounded-full
          bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,148,79,0.25),transparent_70%)]
          blur-lg -z-10
        "
      />

      {/* Icône */}
      <div className="relative mb-3">
        <Image src={imgSrc} alt={alt} width={32} height={32} className="w-8 h-8 opacity-90" />
        <span
          className="
            pointer-events-none absolute inset-0 rounded-full
            bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,148,79,0.4),transparent_70%)]
            blur-[2px] opacity-60
          "
        />
      </div>

      {/* Valeur */}
      <div
        className="
          text-sm sm:text-base font-bold tracking-tight mb-1
          bg-gradient-to-br from-[#FFE6D1] via-[#FFB380] to-[#FFA366]
          bg-clip-text text-transparent
          drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]
        "
      >
        {value}
      </div>

      {/* Label */}
      <div className="text-[11px] sm:text-[12px] text-gray-400/90 leading-tight">
        {label}
      </div>
    </div>
  );
}