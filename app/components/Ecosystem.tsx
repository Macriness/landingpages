"use client";

import type { ReactNode } from "react";
import { useRef, useEffect } from "react";
import { Earth } from 'lucide-react';
import { Users, Building, ArrowRight, Globe, Rocket } from "lucide-react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

// Effet press/hover unifié (comme "Rejoindre l'élite")
const PRESSABLE =
  "transition-transform duration-200 ease-in-out will-change-transform hover:scale-105 active:scale-95";

/* ===========================================================
   Compteur animé
=========================================================== */
function AnimatedCounter({
  value,
  duration = 2.2,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: false }); // rejoue à chaque scroll
  const mv = useMotionValue(0);

  const formatted = useTransform(mv, (latest) => {
    const n = Number(latest);
    const text = n.toLocaleString("fr-FR", {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
    });
    return `${prefix}${text}${suffix}`;
  });

  useEffect(() => {
    if (!inView) return;
    mv.set(0);
    const controls = animate(mv, value, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, mv, value, duration]);

  return (
    <span ref={ref}>
      <motion.span>{formatted}</motion.span>
    </span>
  );
}

/* ===========================================================
   SECTION
=========================================================== */
export default function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      className="relative text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/back3.png')" }}
    >
      <div className="mx-auto w-[92%] max-w-6xl text-center space-y-12 -mt-10">
        {/* Heading */}
        <div className="space-y-3">
          <h2
            className="
              text-2xl sm:text-3xl md:text-5xl
              font-extrabold
              leading-snug
              whitespace-nowrap
            "
          >
            Un{" "}
            <span
              className="font-bold text-[#ED6D0B]"
              style={{ textShadow: "0px 1px 40px #ED6D0B" }}
            >
              écosystème
            </span>{" "}
            connecté
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            UpAfrica unit trois piliers fondamentaux de l&apos;innovation africaine :
            la diaspora talentueuse, les startups ambitieuses et les investisseurs visionnaires.
          </p>
        </div>

        {/* === Features — cartes responsives === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:[grid-template-columns:repeat(3,266px)] gap-6 justify-center">
          {/* Diaspora */}
          <FeatureGlassCard
            image="/0103.png"
            icon={<Users className="w-[28px] h-[28px]" />}
            title="Diaspora africaine"
            subtitle={
              <>
                <AnimatedCounter value={2.1} decimals={1} suffix=" millions" /> de talents
              </>
            }
          >
            <p className="text-[#D1D5DC] text-sm">
              Professionnels, entrepreneurs et investisseurs africains répartis
              dans le monde entier
            </p>

            <StatsList
              items={[
                ["USA", <AnimatedCounter key="usa" value={2.1} decimals={1} suffix=" millions" />],
                ["France", <AnimatedCounter key="fr" value={1.8} decimals={1} suffix=" M" />],
                ["ROYAUME–UNI", <AnimatedCounter key="uk" value={1.2} decimals={1} suffix=" M" />],
                ["Canada", <AnimatedCounter key="ca" value={850000} />],
              ]}
            />
          </FeatureGlassCard>

          {/* Startups */}
          <FeatureGlassCard
            image="/0202.png"
            icon={<Building className="w-[28px] h-[28px]" />}
            title="Startups Africaines"
            subtitle={
              <>
                <AnimatedCounter value={50000} />+ entreprises
              </>
            }
          >
            <p className="text-[#D1D5DC] text-sm">
              Écosystème dynamique de startups et PME innovantes à travers le continent
            </p>

            <StatsList
              items={[
                ["Nigeria", <AnimatedCounter key="ng" value={15000} />],
                ["Kenya", <AnimatedCounter key="ke" value={8} suffix="k" />],
                ["Afrique du Sud", <AnimatedCounter key="za" value={12000} />],
                ["Ghana", <AnimatedCounter key="gh" value={5} suffix="k" />],
              ]}
            />
          </FeatureGlassCard>

          {/* Fonds */}
          <FeatureGlassCard
            image="/0301.png"
            icon={<Rocket className="w-[28px] h-[28px]" />}
            title="Fonds d’investissement"
            subtitle={
              <>
                Plus de <AnimatedCounter value={500} /> investisseurs
              </>
            }
          >
            <p className="text-[#D1D5DC] text-sm">
              VCs, business angels et fonds spécialisés dans l&apos;innovation africaine
            </p>
            <ul className="space-y-1.5 text-[12.5px] tracking-wide text-[#99A1AF]">
              <li>
                <AnimatedCounter value={2.5} decimals={1} suffix=" milliards d’euros levés" />
              </li>
              <li>
                <AnimatedCounter value={300} prefix="Plus de " suffix=" offres" />
              </li>
              <li>
                <AnimatedCounter value={25} suffix="%" /> de croissance
              </li>
              <li>
                <AnimatedCounter value={15} suffix=" pays" />
              </li>
            </ul>
          </FeatureGlassCard>
        </div>

        {/* === Stats — responsive === */}
        <div className="mt-14 grid grid-cols-2 sm:[grid-template-columns:repeat(4,198px)] gap-4 justify-center">
          <StatCard
            value={<AnimatedCounter value={54} />}
            title="Pays africains"
            sub="Présence sur tout le continent"
          />
          <StatCard
            value={<AnimatedCounter value={120} suffix="+" />}
            title="Pays de la diaspora"
            sub="Communauté mondiale"
          />
          <StatCard
            value={<AnimatedCounter value={500} prefix="€" suffix="M" />}
            title="Investissements"
            sub="Installations depuis 2020"
          />
          <StatCard
            value={<AnimatedCounter value={15000} suffix="+" />}
            title="Emplois créés"
            sub="Impact social direct"
          />
        </div>

        {/* === How it works panel === */}
        <div
          className="
            mt-10
            mx-auto max-w-[854px]
            rounded-[21px]
            px-[20px] sm:px-[29px] py-[29px]
            bg-[rgba(42,42,42,0.40)]
            ring-1 ring-inset ring-white/8
            backdrop-blur-[40px]
            shadow-[0_8px_32px_rgba(0,0,0,0.40),inset_0_1px_0_rgba(255,255,255,0.10),inset_0_-1px_0_rgba(0,0,0,0.20)]
          "
        >
          <h3 className="text-base sm:text-lg font-semibold text-white text-center mb-6">
            Comment ça{" "}
            <span className="text-[#ED6D0B]" style={{ textShadow: "0px 1px 40px #ED6D0B" }}>
              fonctionne
            </span>
          </h3>

          {/* Desktop */}
          <div className="hidden md:grid items-center justify-items-center gap-4 sm:gap-[0px] md:grid-cols-5 max-w-[1000px] mx-auto">
            <StepItem
              icon={<Users size={25} />}
              title="Connectez-vous"
              desc="Rejoignez notre communauté et créez votre profil professionnel"
            />
            <Arrow />{/* flèche 1 */}
            <StepItem
              icon= {<Earth size={25} />}
              title="Élevez"
              desc="Découvrez des opportunités et partenaires à travers l’Afrique"
            />
            <Arrow />{/* flèche 2 */}
            <StepItem
              icon={<Rocket size={25} />}
              title="Collaborez"
              desc="Lancez des projets ambitieux et créez un impact durable"
            />
          </div>

          {/* Mobile */}
          <div className="flex md:hidden flex-col items-center gap-4 max-w-[780px] mx-auto">
            <StepItem
              icon={<Users size={25} />}
              title="Connectez-vous"
              desc="Rejoignez notre communauté et créez votre profil professionnel"
            />
            <Arrow className="rotate-90 my-2" />
            <StepItem
              icon={<Earth size={25} />}
              title="Élevez"
              desc="Découvrez des opportunités et partenaires à travers l’Afrique"
            />
            <Arrow className="rotate-90 my-2" />
            <StepItem
              icon={<Rocket size={25} />}
              title="Collaborez"
              desc="Lancez des projets ambitieux et créez un impact durable"
            />
          </div>
        </div>

        {/* === CTA + image APRES le bouton === */}
        <div className="mt-14 flex flex-col items-center gap-6">
          <button
            className={`
              w-full max-w-[200px] h-[45px] rounded-[8px] px-4
              bg-[#ED6D0B] text-white font-semibold
              shadow-[0px_1px_20px_rgba(237,109,11,0.5),0px_4px_12px_rgba(0,0,0,0.15)]
              ${PRESSABLE}
              text-[clamp(12px,3.5vw,16px)] whitespace-nowrap
            `}
          >
            Rejoindre l’écosystème
          </button>

          {/* Image mobile uniquement */}
          <div className="md:hidden w-full flex justify-center">
            <div className="relative w-[100%] max-w-[780px] mt-10" style={{ aspectRatio: "9 / 16" }}>
              <img src="/ending_image.png" alt="Aperçu UpAfrica" className="object-contain w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------------------------
   Cartes vitrées (espaces bas réduits)
------------------------------------------------------------ */
function FeatureGlassCard({
  image,
  icon,
  title,
  subtitle,
  children,
}: {
  image: string;
  icon: ReactNode;
  title: string;
  subtitle: ReactNode;
  children: ReactNode;
}) {
  return (
    <article
      className={`
        relative overflow-hidden
        rounded-[14px]
        bg-[rgba(42,42,42,0.40)]
        ring-1 ring-inset ring-white/8
        backdrop-blur-[40px]
        shadow-[0_8px_32px_rgba(0,0,0,0.40),
                inset_0_1px_0_rgba(255,255,255,0.10),
                inset_0_-1px_0_rgba(0,0,0,0.20)]
        flex flex-col
        w-full max-w-[270px] mx-auto sm:w-[256px]
        cursor-pointer select-none ${PRESSABLE}
      `}
    >
      {/* Top image */}
      <div className="relative h-[233px] w-full">
        <img src={image} alt={title} className="object-cover absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,.55)_70%,rgba(0,0,0,.85)_100%)]" />

        {/* Title inline */}
        <div className="absolute left-3 bottom-3 flex items-center gap-2">
          <span className="text-[#ED6D0B]">{icon}</span>
          <div className="leading-tight text-left">
            <h3 className="text-[17.5px] font-semibold text-white">{title}</h3>
            <p className="text-[12.5px] font-medium text-[#ED6D0B]">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Body (padding réduit) */}
      <div className="px-5 py-6 sm:p-6 space-y-3 text-left">{children}</div>
    </article>
  );
}

/* -----------------------------------------------------------
   Liste de stats (dans les cartes)
------------------------------------------------------------ */
function StatsList({ items }: { items: [string, ReactNode][] }) {
  return (
    <div className="mt-2 space-y-2">
      {items.map(([k, v]) => (
        <div key={k} className="flex items-baseline justify-between">
          <span className="text-[12.5px] tracking-wide text-[#99A1AF]">{k}</span>
          <span className="text-[12.5px] font-semibold text-[#ED6D0B]">{v}</span>
        </div>
      ))}
    </div>
  );
}

/* -----------------------------------------------------------
   StatCard (bas de section)
------------------------------------------------------------ */
function StatCard({
  value,
  title,
  sub,
}: {
  value: ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <div
      className={`
        w-full sm:w-[198px] min-h-[132px]
        px-[22px] py-[9px]
        rounded-[12.75px]
        bg-[rgba(42,42,42,0.40)]
        ring-1 ring-inset ring-white/8
        backdrop-blur-[40px]
        shadow-[0_8px_32px_rgba(0,0,0,0.40),
                inset_0_1px_0_rgba(255,255,255,0.10),
                inset_0_-1px_0_rgba(0,0,0,0.20)]
        grid place-items-center text-center
        cursor-pointer select-none ${PRESSABLE}
      `}
    >
      <div className="space-y-1.5">
        <div className="text-[22px] font-semibold text-[var(--text-orange-2,#F5AA71)]">
          {value}
        </div>
        <div className="text-[15px] font-semibold text-white">{title}</div>
        <div className="text-[15.75px] sm:text-[11.70px] text-[#99A1AF]">{sub}</div>
      </div>
    </div>
  );
}

/* -----------------------------------------------------------
   Etapes + flèches
------------------------------------------------------------ */
function StepItem({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div
      className={`
        flex flex-col items-center text-center max-w-[270px] sm:max-w-[450px]
        cursor-pointer select-none ${PRESSABLE}
      `}
    >
      <div className="w-16 h-16 rounded-full bg-[#ED6D0B] grid place-items-center shadow-[0_6px_16px_rgba(237,109,11,.4)] mb-3">
        <span className="text-white text-3xl">{icon}</span>
      </div>
      <div className="font-semibold text-lg text-white">{title}</div>
      <div className="text-[15px] sm:text-[11px] text-[#99A1AF] leading-snug mt-[1px]">
        {desc}
      </div>
    </div>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <ArrowRight className="w-8 h-8 md:w-7 md:h-7 text-[#ED6D0B] md:-mt-10" />
    </div>
  );
}

