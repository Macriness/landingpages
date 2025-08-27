"use client";

import { Users, Building2, Landmark, ArrowRight, Globe, Rocket } from "lucide-react";
import { Button } from "@heroui/react";

import { Sora } from "next/font/google";
const sora = Sora({ subsets: ["latin"], weight: ["700"] }); // Bold

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative py-24 text-white">
      <div className="mx-auto w-[92%] max-w-6xl text-center space-y-12">
        {/* Heading */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
            Un{" "}
            <span
              className={`${sora.className} font-bold text-[#ED6D0B]`}
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
          <FeatureGlassCard
            image="/0103.png"
            icon={<Users className="w-[28px] h-[28px]" />}
            title="Diaspora africaine"
            subtitle="15 millions de talents"
          >
            <p className="text-[#D1D5DC] text-sm">
              Professionnels, entrepreneurs et investisseurs africains répartis
              dans le monde entier
            </p>

            <StatsList
              items={[
                ["USA", "2,1 millions"],
                ["France", "1,8 M"],
                ["ROYAUME–UNI", "1,2 M"],
                ["Canada", "850 000"],
              ]}
            />
          </FeatureGlassCard>

          <FeatureGlassCard
            image="/0202.png"
            icon={<Building2 className="w-[28px] h-[28px]" />}
            title="Startups Africaines"
            subtitle="50 000+ entreprises"
          >
            <p className="text-[#D1D5DC] text-sm">
              Écosystème dynamique de startups et PME innovantes à travers le continent
            </p>

            <StatsList
              items={[
                ["Nigeria", "15 000"],
                ["Kenya", "8k"],
                ["Afrique du Sud", "12 000"],
                ["Ghana", "5k"],
              ]}
            />
          </FeatureGlassCard>

          <FeatureGlassCard
            image="/0301.png"
            icon={<Landmark className="w-[28px] h-[28px]" />}
            title="Fonds d’investissement"
            subtitle="Plus de 500 investisseurs"
          >
            <p className="text-[#D1D5DC] text-sm">
              VCs, business angels et fonds spécialisés dans l'innovation africaine
            </p>
            <ul className="space-y-1.5 text-[12.5px] tracking-wide text-[#99A1AF]">
              <li>2,5&nbsp;milliards d&apos;euros levés</li>
              <li>Plus de 300 offres</li>
              <li>25% de croissance</li>
              <li>15 pays</li>
            </ul>
          </FeatureGlassCard>
        </div>

        {/* === Stats — responsive === */}
        <div className="mt-14 grid grid-cols-2 sm:[grid-template-columns:repeat(4,198px)] gap-4 justify-center">
          <StatCard
            value="54"
            title="Pays africains"
            sub="Présence sur tout le continent"
          />
          <StatCard
            value="120+"
            title="Pays de la diaspora"
            sub="Communauté mondiale"
          />
          <StatCard
            value="€500M"
            title="Investissements"
            sub="Installations depuis 2020"
          />
          <StatCard
            value="15 000+"
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
            <span className={`${sora.className} text-[#ED6D0B]`} style={{ textShadow: "0px 1px 40px #ED6D0B" }}>
              fonctionne
            </span>
          </h3>

          <div className="grid items-center justify-items-center gap-6 sm:gap-[17px] md:grid-cols-5 max-w-[780px] mx-auto">
            <StepItem
              icon={<Users size={20} />}
              title="Connectez-vous"
              desc="Rejoignez notre communauté et créez votre profil professionnel"
            />

            <Arrow className="hidden md:flex" />

            <StepItem
              icon={<Globe size={20} />}
              title="Élevez"
              desc="Découvrez des opportunités et partenaires à travers l’Afrique"
            />

            <Arrow className="hidden md:flex" />

            <StepItem
              icon={<Rocket size={20} />}
              title="Collaborez"
              desc="Lancez des projets ambitieux et créez un impact durable"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Button
            className="
              w-[205px] h-[44px] rounded-[8px] px-4
              bg-[#ED6D0B] text-white font-semibold
              shadow-[0_8px_24px_rgba(237,109,11,0.35),inset_0_1px_0_rgba(255,255,255,0.18)]
              hover:brightness-105 active:translate-y-[1px] transition
            "
          >
            Rejoindre l’écosystème
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ================= Components ================= */

function FeatureGlassCard({
  image,
  icon,
  title,
  subtitle,
  children,
}: {
  image: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <article
      className="
        relative overflow-hidden
        rounded-[14px]
        bg-[rgba(42,42,42,0.40)]
        ring-1 ring-inset ring-white/8
        backdrop-blur-[40px]
        shadow-[0_8px_32px_rgba(0,0,0,0.40),inset_0_1px_0_rgba(255,255,255,0.10),inset_0_-1px_0_rgba(0,0,0,0.20)]
        flex flex-col
        w-full sm:w-[266px]
      "
      style={{ minHeight: 389 }}
    >
      {/* Top image */}
      <div
        className="relative h-[168px] w-full"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,.55)_70%,rgba(0,0,0,.85)_100%)]" />

        {/* Title inline */}
        <div className="absolute left-3 bottom-3 flex items-center gap-2">
          <span className="text-[#ED6D0B] ">{icon}</span>
          <div className="leading-tight text-left">
            <h3 className="text-[17.5px] font-semibold text-white">{title}</h3>
            <p className="text-[12.5px] font-medium text-[#ED6D0B]">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5 space-y-4 text-left">{children}</div>
    </article>
  );
}

function StatsList({ items }: { items: [string, string][] }) {
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

/* --- Stats block --- */
function StatCard({
  value,
  title,
  sub,
}: {
  value: string;
  title: string;
  sub: string;
}) {
  return (
    <div
      className="
        w-full sm:w-[198px] min-h-[132px]
        px-[22px] py-[9px]
        rounded-[12.75px]
        bg-[rgba(42,42,42,0.40)]
        ring-1 ring-inset ring-white/8
        backdrop-blur-[40px]
        shadow-[0_8px_32px_rgba(0,0,0,0.40),inset_0_1px_0_rgba(255,255,255,0.10),inset_0_-1px_0_rgba(0,0,0,0.20)]
        grid place-items-center text-center
      "
    >
      <div className="space-y-1.5">
        <div className="text-[22px] font-semibold text-[var(--text-orange-2,#F5AA71)]">{value}</div>
        <div className="text-[15px] font-semibold text-white">{title}</div>
        <div className="text-[12px] text-[#99A1AF]">{sub}</div>
      </div>
    </div>
  );
}

/* --- How it works elements --- */
function StepItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center text-center max-w-[230px] gap-2">
      <div className="w-12 h-12 rounded-full bg-[#ED6D0B] grid place-items-center shadow-[0_6px_16px_rgba(237,109,11,.4)]">
        <span className="text-white">{icon}</span>
      </div>
      <div className="font-semibold text-[#7F7F7F]">{title}</div>
      <div className="text-[10px] text-[#99A1AF] leading-relaxed break-words">
        {desc}
      </div>
    </div>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <div className={`items-center justify-center ${className}`}>
      <ArrowRight className="w-5 h-5 text-[#ED6D0B]" />
    </div>
  );
}

