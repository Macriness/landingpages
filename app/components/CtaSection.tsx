//CTA
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Star, Download, Users, Shield, Zap,
  Mail, Phone, MapPin,
  Facebook, Twitter, Instagram, Linkedin, Youtube
} from "lucide-react";

import * as React from "react";
import { DM_Sans } from "next/font/google";
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function CtaSection() {
  return (
    <div className="relative isolate text-white">
      {/* ==== CTA ==== */}
      <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
        <div className="mx-auto w-full max-w-[854px]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8 sm:gap-10 md:gap-[42px]">
            {/* LEFT */}
            <div className="w-full md:w-[406px] flex flex-col items-center md:items-start text-center md:text-left space-y-6 sm:space-y-8">
              {/* rating */}
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="sm:size-16 text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-medium text-orange-400/90">
                  4.9/5 · 50 000+ téléchargements
                </span>
              </div>

              {/* heading */}
              <div className="space-y-4 sm:space-y-6">
                <h1
                  className={`${dmSans.className} text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2] font-bold text-white`}
                >
                  Prêt à transformer
                  <br className="hidden sm:block" />
                  votre avenir ?
                </h1>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  Rejoignez des milliers d&apos;entrepreneurs africains qui utilisent déjà UpAfrica
                  pour développer leurs projets et créer des partenariats durables.
                </p>
              </div>

              {/* store badges */}
              <div className="flex flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <StoreBadge href="/" src="/Google_Play.png" alt="Télécharger sur Google Play" width={160} height={48} />
                <StoreBadge href="/" src="/App_Store.png" alt="Télécharger sur l’App Store" width={150} height={48} />
              </div>
              <p className="text-xs text-gray-500 text-center md:text-left">
                Disponible sur iOS 15+ et Android 7+
              </p>

              {/* features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-[14px] pt-2 w-full">
                <FeatureCard
                  icon={<Download size={20} />}
                  title="Téléchargement gratuit"
                  subtitle="Applications entièrement gratuites avec toutes les fonctionnalités"
                />
                <FeatureCard
                  icon={<Users size={20} />}
                  title="Réseau vérifié"
                  subtitle="Tous les membres sont vérifiés pour garantir la qualité"
                />
                <FeatureCard
                  icon={<Shield size={20} />}
                  title="Sécurisé"
                  subtitle="Vos données sont protégées avec un cryptage de niveau bancaire"
                />
                <FeatureCard
                  icon={<Zap size={20} />}
                  title="Mises à jour"
                  subtitle="Nouvelles fonctionnalités ajoutées chaque mois"
                />
              </div>
            </div>

            {/* RIGHT — image seule */}
            <div className="w-full md:w-[406px] flex justify-center animate-bounce-slow">
              <Image
                src="/ending image.png"
                alt="Aperçu de l’app UpAfrica"
                width={406}
                height={670}
                priority
                className="w-4/5 sm:w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="px-4 sm:px-6 lg:px-12 pb-12 sm:pb-20">
        <div className="mx-auto w-full max-w-[854px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Texte gauche */}
            <div className="flex-1 max-w-[420px] text-center md:text-left">
              <h3 className={`${dmSans.className} text-[16px] sm:text-[18px] leading-[1.2] font-bold text-white`}>
                Restez connecté à l&apos;innovation africaine
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#99A1AF]">
                Recevez les dernières nouvelles, opportunités et insights du continent africain directement dans votre boîte mail.
              </p>
            </div>

            {/* Formulaire droite */}
            <form className="w-full md:w-[412px]">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-[4px]">
                <label htmlFor="nl-email" className="sr-only">
                  Votre adresse email
                </label>
                <input
                  id="nl-email"
                  type="email"
                  inputMode="email"
                  placeholder="Votre adresse email"
                  className="
                    h-[44px] flex-1 min-w-0 px-4
                    rounded-[12px]
                    bg-[#2A2A2A] border border-[#4A5565]
                    text-white placeholder-[#99A1AF]
                    outline-none focus:border-[#ED6D0B] focus:ring-0
                  "
                />
                <button
                  type="submit"
                  className="
                    h-[44px] px-5
                    rounded-[12px]
                    font-semibold text-white
                    bg-[#ED6D0B] hover:brightness-110
                    shadow-[0_6px_20px_rgba(237,109,11,0.35)]
                    transition
                    flex items-center justify-center gap-2
                  "
                >
                  S’abonner
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      {/* ... le reste de ton footer reste inchangé ... */}
    </div>
  );
}

/* ----------- Subcomponents ----------- */

function StoreBadge({ href, src, alt, width, height, external = false }: { href: string; src: string; alt: string; width: number; height: number; external?: boolean; }) {
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

function FeatureCard({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string; }) {
  return (
    <div className="relative flex items-center h-[110px] w-full md:w-[182px] p-[15px] rounded-[8.75px] bg-[#2A2A2A]/40 backdrop-blur-[40px] border border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div className="flex items-start gap-[12px]">
        <div className="text-[#ED6D0B]">{icon}</div>
        <div className="leading-tight">
          <h4 className="text-[14px] font-semibold text-white mb-[4px]">{title}</h4>
          <p className="text-[12px] text-[#99A1AF]">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function FlagCard({ country, users, imgSrc }: { country: string; users: string; imgSrc: string; }) {
  return (
    <div className="w-[150px] sm:w-[160px] h-[94px] rounded-[8.75px] bg-[#2A2A2A]/40 backdrop-blur-[40px] border border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] px-[16px] py-[10px] flex flex-col items-center justify-center gap-[10px]">
      <Image src={imgSrc} alt={`Drapeau ${country}`} width={24} height={16} className="rounded-[2px] object-cover" />
      <div className="text-center leading-tight">
        <div className="text-[12px] font-semibold text-white">{country}</div>
        <div className="text-[12px] font-medium text-[#F6B27A]">{users}</div>
      </div>
    </div>
  );
}

