"use client";

import Image from "next/image";
import { Users, MessageSquare, BarChart3, Globe, Star } from "lucide-react";
import { DM_Sans, Sora } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });
const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "700"] });

function FeatureCard({ icon, title, desc }: { icon: any; title: string; desc: any }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-[#ED6D0B]">{icon}</div>
      <div>
        <h4 className="text-white font-semibold text-[15px] sm:text-[16px]">{title}</h4>
        <p className="text-gray-300 text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <section className="relative bg-[#0B0B0F] px-6 py-20 sm:px-12 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Col gauche */}
        <div className="mx-auto w-full max-w-md text-left space-y-4">
          <h2
            className="
              text-2xl sm:text-4xl md:text-5xl
              font-extrabold
              leading-tight sm:leading-snug
              whitespace-nowrap sm:whitespace-normal
            "
          >
            Un{" "}
            <span
              className={`${sora.className} font-bold text-[#ED6D0B]`}
              style={{ textShadow: "0px 1px 40px #ED6D0B" }}
            >
              écosystème
            </span>{" "}
            connecté
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Une plateforme unique pensée pour les entrepreneurs africains.
          </p>

          {/* Features */}
          <div className="flex flex-col gap-3">
            <FeatureCard
              icon={<Users size={18} />}
              title="Réseau Social Professionnel"
              desc="Connectez-vous avec des entrepreneurs africains du monde entier."
            />
            <FeatureCard
              icon={<MessageSquare size={18} />}
              title="Messagerie Sécurisée"
              desc={<>Communiquez en toute sécurité avec vos <br /> partenaires.</>}
            />
            <FeatureCard
              icon={<BarChart3 size={18} />}
              title="Analytique de Marché"
              desc="Accédez aux dernières tendances et opportunités."
            />
            <FeatureCard
              icon={<Globe size={18} />}
              title="Impact Social"
              desc={<>Suivez l'impact de vos investissements sur le <br />continent.</>}
            />
          </div>

          {/* Stores */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold leading-tight text-[16px] sm:text-[17.5px]">
              Téléchargez dès maintenant
            </h4>
            <div className="flex flex-wrap gap-3">
              <Image src="/Google_Play.png" alt="Google Play" width={130} height={42} className="w-[120px] sm:w-[140px] h-auto" />
              <Image src="/App_Store.png" alt="App Store" width={130} height={42} className="w-[120px] sm:w-[140px] h-auto" />
            </div>
          </div>
        </div>

        {/* Col droite */}
        <div className="flex justify-center">
          <Image
            src="/phone_mockup.png"
            alt="Phone Mockup"
            width={350}
            height={600}
            className="w-[270px] sm:w-[320px] md:w-[350px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}

