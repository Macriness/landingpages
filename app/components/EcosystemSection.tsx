"use client";

import { Users, Globe, Building2, Share2, CheckCircle2 } from "lucide-react";

export default function EcosystemSection() {
  return (
    <section className="relative py-24 text-white">
      <div className="mx-auto w-[92%] max-w-6xl text-center space-y-12">
        {/* Heading */}
        <div className="space-y-3">
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            Un <span className="text-orange-400">écosystème</span> connecté
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            UpAfrica unit trois piliers fondamentaux de l’innovation africaine :
            la diaspora internationale, les startups ambitieuses et les
            investisseurs inspirants.
          </p>
        </div>

        {/* 3 Main Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <MainCard title="Diaspora africaine" desc="Valorisez votre expertise et vos ressources." />
          <MainCard title="Entrepreneurs africains" desc="Accélérez vos projets avec un réseau fiable." />
          <MainCard title="Investisseurs internationaux" desc="Soutenez des projets porteurs de sens." />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 max-w-3xl mx-auto">
          <Stat value="54" label="Pays d’Afrique" />
          <Stat value="120+" label="Partenaires clés" />
          <Stat value="€500M+" label="Capital mobilisé" />
          <Stat value="15 000+" label="Entreprises actives" />
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-12">
          <Step icon={<Users size={22} />} title="Connectez-vous" desc="Créez votre profil en quelques minutes." />
          <Step icon={<Share2 size={22} />} title="Échangez" desc="Trouvez des partenaires et investisseurs." />
          <Step icon={<CheckCircle2 size={22} />} title="Collaborez" desc="Transformez vos idées en réussites." />
        </div>

        {/* CTA */}
        <div className="pt-10">
          <button
            className="rounded-full px-6 py-3 font-semibold text-white
                       bg-[linear-gradient(135deg,#ff7a1a,#ffb347)]
                       shadow-[0_12px_28px_rgba(255,140,50,.5)]
                       hover:brightness-105 transition"
          >
            Rejoindre l’écosystème
          </button>
        </div>
      </div>
    </section>
  );
}

/* --- Components --- */
function MainCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-8 rounded-2xl bg-[#121316] border border-white/10
                    shadow-[10px_10px_28px_rgba(0,0,0,.65),_-8px_-8px_24px_rgba(255,255,255,.03),inset_0_1px_0_rgba(255,255,255,.08)]">
      <h3 className="text-xl font-bold text-orange-400 mb-2">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <p className="text-2xl font-bold text-orange-400">{value}</p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
}

function Step({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="p-6 rounded-2xl bg-[#121316] border border-white/10
                    shadow-[8px_8px_26px_rgba(0,0,0,.65),_-6px_-6px_22px_rgba(255,255,255,.03),inset_0_1px_0_rgba(255,255,255,.08)]
                    flex flex-col items-center text-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl
                      bg-[linear-gradient(180deg,#ff8a2a_0%,#ffb04e_100%)]
                      shadow-[0_6px_16px_rgba(255,140,50,.4)] border border-white/10 text-white">
        {icon}
      </div>
      <h4 className="font-semibold text-orange-400">{title}</h4>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  );
}
