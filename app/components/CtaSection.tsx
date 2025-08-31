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
                    <Star key={i} size={14} className="text-orange-400 fill-orange-400" />
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
                  <br className="block sm:hidden" />
                  votre avenir ?
                  <br className="hidden sm:block" />
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
                Disponible sur iOS 13+ et Android 7+
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

            {/* RIGHT — image (masquée sur mobile et tablette) */}
            <div className="hidden md:flex w-full md:w-[406px] justify-center animate-bounce-slow">
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
              <div className="flex flex-row gap-2 sm:gap-[4px]">
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
      <footer className="px-4 sm:px-6 lg:px-12 py-12 border-t border-white/10">
        <div className="mx-auto w-full max-w-[1054px] grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Colonne gauche */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#ED6D0B] grid place-items-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">UpAfrica</span>
            </div>
            <p className="text-sm text-[#99A1AF] leading-relaxed text-left">
              La première plateforme qui connecte les entrepreneurs africains avec les investisseurs du
              continent. Ensemble, nous construisons l’avenir de l’Afrique.
            </p>
          </div>

          {/* Colonnes droites */}
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Produit */}
            <div className="space-y-2.5 text-left">
              <h4 className="text-white font-semibold text-lg">Produit</h4>
              <ul className="space-y-1 text-sm">
                <li><a className="text-[#99A1AF] hover:text-white" href="#">Fonctionnalités</a></li>
                <li><a className="text-[#99A1AF] hover:text-white" href="#">Tarifs</a></li>
                <li><a className="text-[#99A1AF] hover:text-white" href="#">Sécurité</a></li>
                <li><a className="text-[#99A1AF] hover:text-white" href="#">Mises à jour</a></li>
              </ul>
            </div>

            {/* Entreprise */}
            <div className="space-y-2.5 text-left">
              <h4 className="text-white font-semibold text-lg">Entreprise</h4>
              <ul className="space-y-1 text-sm">
                <li><a className="text-[#99A1AF] hover:text-white" href="#">À propos</a></li>
                <li><a className="text-[#99A1AF] hover:text-white" href="#">Carrières</a></li>
                <li><a className="text-[#99A1AF] hover:text-white" href="#">Presse</a></li>
                <li><a className="text-[#99A1AF] hover:text-white" href="#">Partenaires</a></li>
              </ul>
            </div>

            {/* Légal */}
            <div className="space-y-2.5 text-left">
              <h4 className="text-white font-semibold text-lg">Légal</h4>
              <ul className="space-y-1 text-sm">
                <li><a className="text-[#99A1AF] hover:text-white" href="#">Confidentialité</a></li>
                <li><a className="text-[#99A1AF] hover:text-white" href="#">Conditions</a></li>
                <li><a className="text-[#99A1AF] hover:text-white" href="#">Cookies</a></li>
                <li><a className="text-[#99A1AF] hover:text-white" href="#">Licences</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact + Réseaux sociaux */}
        <div className="mx-auto w-full max-w-[1054px] mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 text-sm text-left">
            <div className="flex items-center gap-2 text-[#99A1AF]">
              <Mail size={16} className="text-[#ED6D0B]" />
              <span>contact@upafrica.com</span>
            </div>
            <div className="flex items-center gap-2 text-[#99A1AF]">
              <Phone size={16} className="text-[#ED6D0B]" />
              <span>+33 1 23 45 67 89</span>
            </div>
            <div className="flex items-center gap-2 text-[#99A1AF]">
              <MapPin size={16} className="text-[#ED6D0B]" />
              <span>Paris, France et Lagos, Nigéria</span>
            </div>
          </div>

          <div className="flex md:justify-end gap-2 pt-3 md:pt-0">
            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-lg grid place-items-center bg-[#7F7F7F] border border-[#4A5565] text-white/80 hover:text-white hover:border-[#ED6D0B] transition transform hover:scale-110"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Divider */}
      <div className="w-[80%] h-px bg-[#4A5565] opacity-60 mx-auto"></div>

      {/* ===== Présence Afrique ===== */}
      <section className="px-4 sm:px-6 lg:px-12 py-8">
        <div className="mx-auto w-full max-w-[1200px]">
          <h3 className="text-center text-sm font-semibold text-[#F6B27A] mb-6">
            Notre présence en Afrique
          </h3>
          <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-4 sm:gap-[14px] overflow-x-auto md:overflow-visible">
            <FlagCard country="Nigeria" users="15 000+" imgSrc="/5.png" />
            <FlagCard country="Kenya" users="8 000+" imgSrc="/4.png" />
            <FlagCard country="Afrique du Sud" users="12 000+" imgSrc="/7.png" />
            <FlagCard country="Ghana" users="6 000+" imgSrc="/3.png" />
            <FlagCard country="Sénégal" users="3 000+" imgSrc="/6.png" />
            <FlagCard country="Éthiopie" users="4k+" imgSrc="/2.png" />
            <FlagCard country="Bénin" users="4k+" imgSrc="/1.png" />
          </div>
        </div>
      </section>

      {/* ===== Barre finale ===== */}
      <section className="px-4 sm:px-6 lg:px-12 py-3 border-t border-white/10">
        <div className="mx-auto w-full max-w-[1026px] flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-center md:text-left text-[#99A1AF]">
            © 2024 UpAfrica. Tous droits réservés. Construisons ensemble l&apos;avenir de l&apos;Afrique.
          </p>
          <nav className="flex flex-wrap justify-center md:justify-end items-center text-[12px] text-[#99A1AF]">
            <Link href="/privacy" className="px-2 hover:text-[#7F7F7F]">Politique de confidentialité</Link>
            <span className="hidden sm:inline mx-1">•</span>
            <Link href="/terms" className="px-2 hover:text-[#7F7F7F]">Conditions</Link>
            <span className="hidden sm:inline mx-1">•</span>
            <Link href="/sitemap" className="px-2 hover:text-[#7F7F7F]">Plan du site</Link>
          </nav>
        </div>
      </section>
    </div>
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

function FeatureCard({
  icon, title, subtitle,
}: {
  icon: React.ReactNode; title: string; subtitle: string;
}) {
  return (
    <div className="relative flex items-center h-[110px] w-full md:w-[182px] p-[15px] rounded-[8.75px] bg-[#2A2A2A]/40 backdrop-blur-[40px] border border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div className="flex items-start gap-[12px]">
        <div className="text-[#ED6D0B]">{icon}</div>
        <div className="flex flex-col text-left">
          <h4 className="text-[14px] font-semibold text-white">{title}</h4>
          <p className="text-[12px] text-[#99A1AF] leading-snug">{subtitle}</p>
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


