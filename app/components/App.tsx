//app
"use client";

import { useRef, useEffect } from "react";
import { Users, MessageSquare, BarChart3, Globe, Star, MessageCircle, TrendingUp, Heart } from "lucide-react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";


/* -----------------------------------------------------------
    Compteur animé : 0 ➜ valeur finale, formaté fr-FR
    Options: prefix/suffix, décimales, déclenchement au scroll
------------------------------------------------------------ */
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
  const inView = useInView(ref, { once: false });
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

export default function AppSection() {
  return (
    <section
      id="app"
      className="relative py-16 sm:py-20 lg:py-24 text-white text-[16px] sm:text-[18px] overflow-hidden xl:pt-40 scroll-mt-15 sm:scroll-mt-20"
    >
      <div className="mx-auto w-[92%] max-w-6xl text-center space-y-10 sm:space-y-12">
        {/* Heading */}
        <div className="space-y-3">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-extrabold leading-snug">
            L’Application{" "}
            <span
              className="font-black text-[#E86A0C] inline-block text-[34px] sm:text-[42px] lg:text-[52.5px] leading-tight lg:leading-[65.6px]"
              style={{
                filter: `
                  drop-shadow(0 2px 6px rgba(0,0,0,0.25))
                  drop-shadow(0 10px 18px rgba(232,106,12,0.28))
                  drop-shadow(0 0 24px rgba(232,106,12,0.55))
                `,
              }}
            >
              UpAfrica
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-[14px] sm:text-[15px] leading-relaxed">
            Découvrez une expérience fluide et des fonctionnalités puissantes de notre application mobile.
            Tout ce dont vous avez besoin pour réussir en Afrique, dans votre poche.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] lg:gap-12 items-center mt-6">
          {/* Col gauche */}
          <div className="mx-auto w-full max-w-md text-left space-y-4">
            {/* Features */}
            <div className="flex flex-col gap-3">
              <FeatureCard
                icon={<Users size={18} />}
                title="Réseau Social Professionnel"
                desc="Connectez-vous avec des entrepreneurs africains du monde entier."
              />
              <FeatureCard
                icon={<MessageCircle size={18} />}
                title="Messagerie Sécurisée"
                desc={<>Communiquez en toute sécurité avec vos <br /> partenaires.</>}
              />
              <FeatureCard
                icon={<TrendingUp size={18} />}
                title="Analytique de Marché"
                desc="Accédez aux dernières tendances et opportunités."
              />
              <FeatureCard
                icon={<Heart size={18} />}
                title="Impact Social"
                desc={<>Suivez l'impact de vos investissements sur le <br />continent.</>}
              />
            </div>

            {/* Stores */}
            <div className="flex flex-col gap-3 items-center sm:items-start">
              <h4 className="text-white font-semibold leading-tight text-[16px] sm:text-[17.5px] text-center sm:text-left">
                Téléchargez dès maintenant
              </h4>
	       <div className="flex flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                 <StoreBadge href="/" src="/Google_Play.png" alt="Télécharger sur Google Play" width={160} height={48} />
                 <StoreBadge href="/" src="/App_Store.png" alt="Télécharger sur l’App Store" width={150} height={48} />
              </div>
            </div>

            <div
              className="
                mt-6 w-full sm:w-[406px] min-h-[120px] sm:min-h-[149px]
                p-[12px] sm:p-[15px] rounded-[12.75px]
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
                    <Star key={i} className="w-4 h-4 text-[#E86A0C]" fill="currentColor" stroke="none" />
                  ))}
                </div>
                <span className="text-white font-bold text-[16px] sm:text-[18px]">
                  <AnimatedCounter value={4.9} decimals={1} />/5
                </span>
              </div>
              <p className="text-[#D1D5DC] leading-relaxed text-[13px] sm:text-[15px]">
                "La meilleure application pour connecter avec l’écosystème entrepreneurial africain"
              </p>
              <p className="mt-2 sm:mt-3 text-[12px] sm:text-[13px] text-[#99A1AF]">
                Basé sur plus de <AnimatedCounter value={2500} /> avis
              </p>
            </div>
          </div>

          {/* Col droite (image) */}
          <div className="relative flex justify-center w-full h-[400px] sm:h-[500px] lg:h-[850px] lg:-ml-20 -mt-10 lg:scale-145">
            <img
              src="/contain.png"
              alt="Aperçu application UpAfrica"
              style={{ objectFit: 'contain' }}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
/* ----------- Subcomponents ----------- */
function StoreBadge({
  href, src, alt, width, height, external = false,
}: {
  href: string; src: string; alt: string; width: number; height: number; external?: boolean;
}) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        <Image src={src} alt={alt} width={width} height={height} priority />
      </a>
    );
  }
  return (
    <Link href={href} className="inline-block">
      <Image src={src} alt={alt} width={width} height={height} priority />
    </Link>
  );
}
// Feature Card
function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: React.ReactNode;
}) {
  return (
    <div
      className="
        w-full min-h-[75px] sm:min-h-[85px]
        p-[12px] sm:p-[15px] rounded-[12.75px]
        bg-[rgba(42,42,42,0.40)]
        ring-1 ring-inset ring-white/8
        backdrop-blur-[40px]
        shadow-[0_8px_32px_rgba(0,0,0,0.40),inset_0_1px_0_1px_rgba(255,255,255,0.10)]
      "
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <span
          className="grid place-items-center w-6 h-6 text-[#E86A0C] shrink-0 mt-[2px]"
          aria-hidden
          style={{ filter: "drop-shadow(0px 1px 12px rgba(232,106,12,0.35))" }}
        >
          {icon}
        </span>
        <div className="flex-1">
          <h5 className="text-white font-semibold leading-tight text-[15px] sm:text-[17.5px]">
            {title}
          </h5>
          <p className="mt-1 text-[14px] sm:text-[14px] leading-relaxed text-[#D1D5DC]">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
