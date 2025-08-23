"use client";

import {
  Euro,
  Lock,
  Heart,
  Users,
  Building2,
  Globe,
  ArrowUpRight,
  Award,
} from "lucide-react";

/* --- Section WhyChoose --- */
export default function WhyChoose() {
  return (
    <section id="why" className="relative py-24 text-white">
      <div className="mx-auto w-[92%] max-w-6xl text-center space-y-20">
        
        {/* Badge */}
        <div
          className="
            inline-block rounded-full px-6 py-1.5 text-xs tracking-wide
            border border-white/10 text-orange-400
            bg-[linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,.02))]
            shadow-[inset_0_1px_0_rgba(255,255,255,.12)]
            relative
            before:content-[''] before:absolute before:-inset-3 before:rounded-full
            before:bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,140,50,.18),transparent)]
            before:-z-10
          "
        >
          → PLUS DE 5000 ENTREPRISES NOUS FONT CONFIANCE ←
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-snug">
            Pourquoi choisir <span className="text-orange-400">UpAfrica</span> ?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Plus qu&apos;une plateforme, UpAfrica est l&apos;écosystème qui propulse
            l&apos;innovation africaine. Découvrez pourquoi des milliers d&apos;entrepreneurs
            nous font confiance pour transformer leurs idées en succès.
          </p>
        </div>

        {/* === Feature Cards Container === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto mt-16">
          <FeatureCard
            icon={ArrowUpRight}
            title="Plus de 750M d'euros"
            subtitle="Capital facilité"
            description="Investissements et financements réalisés via notre écosystème"
            badge="+150% par rapport à 2023"
          />
          <FeatureCard
            icon={Award}
            title="Satisfaction client"
            subtitle=""
            description="Net Promoter Score exceptionnel de notre communauté premium"
            badge="#1 Plateforme Afrique"
          />
          <FeatureCard
            icon={Heart}
            title="Histoires de réussite"
            subtitle=""
            description="Partenariats et collaborations fructueuses créées"
            badge="Record historique"
          />
        </div>

        {/* Stats Bar */}
        <div
          className="
            grid grid-cols-2 sm:grid-cols-4 gap-8 px-8 py-6 rounded-2xl
            bg-[#121316]
            border border-white/6
            shadow-[10px_10px_28px_rgba(0,0,0,.6),_-8px_-8px_22px_rgba(255,255,255,.03),inset_0_1px_0_rgba(255,255,255,.08)]
            max-w-4xl mx-auto
          "
        >
          <Stat icon={<Users className="text-orange-400" size={22} />} value="25 000+" label="Utilisateurs actifs" />
          <Stat icon={<Building2 className="text-orange-400" size={22} />} value="500+" label="Entreprises" />
          <Stat icon={<Globe className="text-orange-400" size={22} />} value="54" label="Pays" />
          <Stat icon={<Euro className="text-orange-400" size={22} />} value="750M €" label="Échangés" />
        </div>

        {/* Final Block */}
        <div
          className="
            relative rounded-2xl p-12 text-center
            bg-[#121316]
            border border-white/6
            shadow-[12px_12px_32px_rgba(0,0,0,.65),_-10px_-10px_26px_rgba(255,255,255,.03),inset_0_1px_0_rgba(255,255,255,.08)]
            max-w-3xl mx-auto
          "
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug">
            L&apos;Afrique a besoin de <span className="text-orange-400">ses talents</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
            Plus qu&apos;une plateforme, UpAfrica est l&apos;écosystème qui propulse l&apos;innovation africaine.
            Découvrez pourquoi les dirigeants du continent nous font confiance pour leurs projets les plus ambitieux.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="
                rounded-full px-6 py-3 font-semibold text-white
                bg-[linear-gradient(135deg,#ff7a1a,#ffb347)]
                shadow-[0_12px_28px_rgba(255,140,50,.5)]
                hover:brightness-105 transition
              "
            >
              Télécharger l&apos;app
            </button>
            <button
              className="
                rounded-full px-6 py-3 font-semibold text-white
                border border-white/15 bg-white/[.03] hover:bg-white/[.06]
                shadow-[inset_0_1px_0_rgba(255,255,255,.08)]
                hover:border-orange-400/50 transition
              "
            >
              Rejoindre les success stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Nouveau FeatureCard --- */
function FeatureCard({
  icon: Icon,
  title,
  subtitle,
  description,
  badge,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle?: string;
  description: string;
  badge: string;
}) {
  return (
    <div
      className="relative rounded-2xl p-8 flex flex-col items-center text-center 
                 bg-gradient-to-b from-[#232323]/90 via-black/50 to-black/0 shadow-lg"
    >
      {/* Icon encadrée */}
      <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-orange-500 shadow-[0_0_25px_-5px_rgba(255,115,0,0.6)] mb-6">
        <Icon className="text-white w-8 h-8" />
      </div>

      {/* Texte principal */}
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      {subtitle && (
        <h4 className="text-lg font-semibold text-gray-300 mt-1">{subtitle}</h4>
      )}
      <p className="text-gray-400 mt-2">{description}</p>

      {/* Badge */}
      <div className="mt-6">
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-orange-400 border border-orange-400 shadow-[0_0_20px_-6px_rgba(255,115,0,0.6)]">
          {badge}
        </span>
      </div>
    </div>
  );
}

/* --- Stats --- */
function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div>{icon}</div>
      <p className="font-semibold text-lg">{value}</p>
      <p className="text-xs text-gray-400">{label}</p>
    </div>
  );
}
