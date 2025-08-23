"use client";

import Image from "next/image";
import { Users, MessageSquare, BarChart3, Globe } from "lucide-react";

export default function AppSection() {
  return (
    <section id="app" className="relative py-24 text-white">
      <div className="mx-auto w-[92%] max-w-6xl text-center space-y-12">
        {/* Heading */}
        <div className="space-y-3">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-snug">
            L’Application <span className="text-orange-400">UpAfrica</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-[15px] leading-relaxed">
            Découvrez une expérience fluide et des fonctionnalités puissantes.
            Tout ce dont vous avez besoin pour réussir en Afrique, dans votre poche.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
          {/* Feature list + stores + review (col gauche) */}
          <div className="mx-auto w-full max-w-md text-left">
            <div className="flex flex-col gap-4">
              <FeatureCard
                icon={<Users size={18} />}
                title="Réseau Social Professionnel"
                desc="Connectez-vous avec des entrepreneurs africains partout."
              />
              <FeatureCard
                icon={<MessageSquare size={18} />}
                title="Messagerie Sécurisée"
                desc="Échangez des opportunités en toute confiance."
              />
              <FeatureCard
                icon={<BarChart3 size={18} />}
                title="Analytique de Marché"
                desc="Des insights clairs pour de meilleures décisions."
              />
              <FeatureCard
                icon={<Globe size={18} />}
                title="Impact Social"
                desc="Participez à des projets qui transforment le continent."
              />
            </div>

            {/* Stores */}
            <div className="flex gap-3 pt-5">
              <Image src="/googleplay.png" alt="Google Play" width={140} height={42} />
              <Image src="/appstore.png" alt="App Store" width={140} height={42} />
            </div>

            {/* Avis */}
            <div
              className="mt-6 max-w-[360px] p-4 rounded-2xl
                            bg-[#121316] border border-white/10
                            shadow-[8px_8px_26px_rgba(0,0,0,.65),_-6px_-6px_22px_rgba(255,255,255,.03),inset_0_1px_0_rgba(255,255,255,.08)]"
            >
              <p className="text-amber-400 font-bold text-lg">★ 4.8/5</p>
              <p className="text-gray-400 text-sm">Basé sur plus de 10 000 avis utilisateurs.</p>
            </div>
          </div>

	{/* Contain image (col droite) */}
	<div className="relative flex justify-center w-full h-[650px] -ml-20 scale-125">
 	 <Image
   	 src="/contain.png"
   	 alt="Aperçu application UpAfrica"
   	 fill
   	 className="object-contain"
   	 priority
	  />
	</div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="flex items-center gap-4 p-4 rounded-xl
                 bg-[#121316] border border-white/10
                 shadow-[6px_6px_18px_rgba(0,0,0,.65),_-6px_-6px_18px_rgba(255,255,255,.03),inset_0_1px_0_rgba(255,255,255,.08)]
                 hover:-translate-y-0.5 transition"
    >
      <div
        className="w-10 h-10 flex items-center justify-center rounded-lg
                   bg-[linear-gradient(180deg,#ff8a2a_0%,#ffb04e_100%)]
                   shadow-[0_6px_16px_rgba(255,140,50,.4)] border border-white/10 text-white"
        aria-hidden
      >
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-orange-400">{title}</h4>
        <p className="text-sm text-gray-400">{desc}</p>
      </div>
    </div>
  );
}

