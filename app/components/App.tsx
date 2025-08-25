"use client";

import Image from "next/image";
import { Users, MessageSquare, BarChart3, Globe, Star } from "lucide-react";
import { DM_Sans } from "next/font/google"; // ajout
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["900"] }); // Black

export default function AppSection() {
  return (
    <section id="app" className="relative py-24 text-white">
      <div className="mx-auto w-[92%] max-w-6xl text-center space-y-12">
        {/* Heading */}
        <div className="space-y-3">
          <h2 className="text-[40px] sm:text-[48px] font-extrabold leading-snug">
            L’Application{" "}
            <span
              className={`${dmSans.className} font-black text-[#ED6D0B] inline-block
                          text-[52.5px] leading-[65.6px]`}
              style={{
                filter: `
                  drop-shadow(0 2px 6px rgba(0,0,0,0.25))
                  drop-shadow(0 10px 18px rgba(255,122,26,0.28))
                  drop-shadow(0 0 24px rgba(255,148,79,0.55))
                `,
              }}
            >
              Up Africa
            </span>
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
              <Image src="/Google_Play.png" alt="Google Play" width={140} height={42} />
              <Image src="/App_Store.png" alt="App Store" width={140} height={42} />
            </div>

            {/* Avis — fidèle au design fourni */}
            <div
              className="
                mt-6 w-[406px] min-h-[149px] p-[15px] rounded-[12.75px]
                bg-[rgba(42,42,42,0.40)]
                ring-1 ring-inset ring-white/8
                backdrop-blur-[40px]
                shadow-[0_8px_32px_rgba(0,0,0,0.40),inset_0_1px_0_1px_rgba(255,255,255,0.10)]
                text-left
              "
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1" aria-label="Note 4,9 sur 5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#ED6D0B]" fill="currentColor" stroke="none" />
                  ))}
                </div>
                <span className="text-white font-bold text-[18px]">4,9/5</span>
              </div>

              <p className="text-[#D1D5DC] leading-relaxed italic">
                "La meilleure application pour connecter avec l’écosystème entrepreneurial africain"
              </p>

              <p className="mt-3 text-[13px] text-[#99A1AF]">Basé sur plus de 2 500 avis</p>
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
      className="
        w-full min-h-[85px]
        p-[15px] rounded-[12.75px]
        bg-[rgba(42,42,42,0.40)]
        ring-1 ring-inset ring-white/8
        backdrop-blur-[40px]
        shadow-[0_8px_32px_rgba(0,0,0,0.40),inset_0_1px_0_1px_rgba(255,255,255,0.10)]
      "
    >
      <div className="flex items-start gap-4">
        <span
          className="grid place-items-center w-6 h-6 text-[#ED6D0B] shrink-0 mt-[2px]"
          aria-hidden
          style={{ filter: "drop-shadow(0px 1px 12px rgba(237,109,11,0.35))" }}
        >
          {icon}
        </span>

        <div className="flex-1">
          <h4 className="text-white font-semibold leading-tight text-[17.5px]">
            {title}
          </h4>
          <p className="mt-1 text-[14px] leading-relaxed text-[#D1D5DC]">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}