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
    <div className="relative isolate text-white bg-[#0f0f11]">
      {/* ===== CTA ===== */}
      <section className="px-6 lg:px-12 py-20">
        <div className="mx-auto w-full max-w-[854px]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-10 md:gap-[42px]">
            {/* LEFT */}
            <div className="w-full md:w-[406px] flex flex-col items-center md:items-start text-center md:text-left space-y-8">
              {/* rating */}
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-orange-400/90">
                  4.9/5 · 50 000+ téléchargements
                </span>
              </div>

              {/* heading */}
              <div className="space-y-6">
                <h1 className={`${dmSans.className} text-[42px] leading-[1.2] font-bold text-white`}>
                  Prêt à transformer
                  <br />
                  votre avenir ?
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Rejoignez des milliers d&apos;entrepreneurs africains qui utilisent déjà UpAfrica
                  pour développer leurs projets et créer des partenariats durables.
                </p>
              </div>

              {/* store badges */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <StoreBadge href="/" src="/Google_Play.png" alt="Télécharger sur Google Play" width={180} height={54} />
                <StoreBadge href="/" src="/App_Store.png" alt="Télécharger sur l’App Store" width={180} height={54} />
              </div>
              <p className="text-xs text-gray-500">Disponible sur iOS 15+ et Android 7+</p>

              {/* features */}
              <div className="grid grid-cols-2 gap-4 md:gap-[14px] pt-2 w-full">
                <FeatureCard icon={<Download size={18} />} title="Téléchargement gratuit" subtitle="Toutes les fonctionnalités incluses" />
                <FeatureCard icon={<Users size={18} />} title="Réseau vérifié" subtitle="Profils et activités contrôlés" />
                <FeatureCard icon={<Shield size={18} />} title="Sécurité" subtitle="Chiffrement de niveau bancaire" />
                <FeatureCard icon={<Zap size={18} />} title="Mises à jour" subtitle="Nouveautés chaque mois" />
              </div>
            </div>

            {/* RIGHT — image seule */}
            <div className="w-full md:w-[406px] flex justify-center">
              <Image
                src="/ending image.png" // idéal: renommer sans espace
                alt="Aperçu de l’app UpAfrica"
                width={406}
                height={670}
                priority
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER (maquette appliquée) ===== */}
      <section className="px-6 lg:px-12 pb-20">
        <div className="mx-auto w-full max-w-[854px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Texte gauche */}
            <div className="flex-1 max-w-[420px] text-center md:text-left">
              <h3 className={`${dmSans.className} text-[18px] leading-[1.2] font-bold text-white`}>
                Restez connecté à l&apos;innovation africaine
              </h3>
              <p className="mt-2 text-sm text-[#99A1AF]">
                Recevez les dernières nouvelles, opportunités et insights du continent africain directement dans votre boîte mail.
              </p>
            </div>

            {/* Formulaire droite — fidèle à la maquette */}
<form className="w-full md:w-[412px]">
  <div className="flex items-center gap-[4px]">
    <label htmlFor="nl-email" className="sr-only">Votre adresse email</label>
    <input
      id="nl-email"
      type="email"
      inputMode="email"
      placeholder="Votre adresse email"
      className="
        h-[44px] flex-1 min-w-0 px-4
        rounded-full
        bg-[#2A2A2A] border border-[#4A5565]
        text-white placeholder-[#99A1AF]
        outline-none focus:border-[#ED6D0B] focus:ring-0
      "
    />
    <button
      type="submit"
      className="
        h-[44px] px-5
        rounded-full
        font-semibold text-white
        bg-[#ED6D0B] hover:brightness-110
        shadow-[0_6px_20px_rgba(237,109,11,0.35)]
        transition
        flex items-center gap-2
      "
    >
      S’abonner
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  </div>
</form>
          </div>
        </div>
      </section>
      {/* Divider centré */}
<div className="w-[80%] h-[1px] bg-[#4A5565] opacity-60 mt-[42px] mx-auto"></div>
<footer className="px-6 lg:px-12 py-12 border-t border-white/10">
  <div className="mx-auto w-full max-w-[854px]">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
      {/* Colonne 1 — UpAfrica + description */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#ED6D0B] grid place-items-center">
            <Zap size={16} className="text-white" />
          </div>
          <span className="text-xl font-bold text-white">UpAfrica</span>
        </div>
        <p className="text-sm text-[#99A1AF] leading-relaxed">
          La première plateforme qui connecte les entrepreneurs africains avec les investisseurs du
          continent. Ensemble, nous construisons l’avenir de l’Afrique.
        </p>
      </div>

      {/* Colonne 2 — Produit */}
      <div className="space-y-3">
        <h4 className="text-white font-semibold text-lg">Produit</h4>
        <ul className="space-y-2 text-sm">
          <li><a className="text-[#99A1AF] hover:text-white transition-colors" href="#">Fonctionnalités</a></li>
          <li><a className="text-[#99A1AF] hover:text-white transition-colors" href="#">Tarifs</a></li>
          <li><a className="text-[#99A1AF] hover:text-white transition-colors" href="#">Sécurité</a></li>
          <li><a className="text-[#99A1AF] hover:text-white transition-colors" href="#">Mises à jour</a></li>
        </ul>
      </div>

      {/* Colonne 3 — Entreprise */}
      <div className="space-y-3">
        <h4 className="text-white font-semibold text-lg">Entreprise</h4>
        <ul className="space-y-2 text-sm">
          <li><a className="text-[#99A1AF] hover:text-white transition-colors" href="#">À propos de nous</a></li>
          <li><a className="text-[#99A1AF] hover:text-white transition-colors" href="#">Carrières</a></li>
          <li><a className="text-[#99A1AF] hover:text-white transition-colors" href="#">Presse</a></li>
          <li><a className="text-[#99A1AF] hover:text-white transition-colors" href="#">Partenaires</a></li>
        </ul>
      </div>

      {/* Colonne 4 — Légal */}
      <div className="space-y-3">
        <h4 className="text-white font-semibold text-lg">Légal</h4>
        <ul className="space-y-2 text-sm">
          <li><a className="text-[#99A1AF] hover:text-white transition-colors" href="#">Confidentialité</a></li>
          <li><a className="text-[#99A1AF] hover:text-white transition-colors" href="#">Conditions</a></li>
          <li><a className="text-[#99A1AF] hover:text-white transition-colors" href="#">Cookies</a></li>
          <li><a className="text-[#99A1AF] hover:text-white transition-colors" href="#">Licences</a></li>
        </ul>
      </div>

      {/* Colonne 5 — Contact + Réseaux sociaux */}
      <div className="space-y-3">
        {/* Contact */}
        <div className="space-y-2 text-sm">
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

        {/* Réseaux sociaux */}
        <div className="flex items-center gap-2 pt-2">
          {[
            { Icon: Facebook, href: "#" },
            { Icon: Twitter, href: "#" },
            { Icon: Instagram, href: "#" },
            { Icon: Linkedin, href: "#" },
            { Icon: Youtube, href: "#" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="w-8 h-8 rounded-lg grid place-items-center
                         bg-[#2A2A2A] border border-[#4A5565]
                         text-white/80 hover:text-white hover:border-[#ED6D0B]
                         transition-colors"
              aria-label="Réseau social"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
</footer>
{/* ===== Divider d'ouverture de section ===== */}
<section className="px-6 lg:px-12">
  <div className="mx-auto w-full max-w-[854px]">
    {/* trait centré, discret */}
    <div className="w-[80%] h-px bg-[#4A5565] opacity-60 mx-auto"></div>
  </div>
</section>

{/* ===== Notre présence en Afrique ===== */}
<section className="px-6 lg:px-12 py-8">
  <div className="mx-auto w-full max-w-[854px]">
    <h3 className="text-center text-sm font-semibold text-[#FCDD0A] mb-4">
      Notre présence en Afrique
    </h3>

    {/* grille avec gap 14px fidèle à la maquette */}
    <div className="flex justify-center items-center gap-[14px] overflow-x-auto">
  <FlagCard country="Nigeria"        users="15 000+" imgSrc="/5.png" />
  <FlagCard country="Kenya"          users="8 000+"  imgSrc="/4.png" />
  <FlagCard country="Afrique du Sud" users="12 000+" imgSrc="/7.png" />
  <FlagCard country="Ghana"          users="6 000+"  imgSrc="/3.png" />
  <FlagCard country="Sénégal"        users="3 000+"  imgSrc="/6.png" />
  <FlagCard country="Éthiopie"       users="4 000+"  imgSrc="/2.png" />
  <FlagCard country="Bénin"          users="2 000+"  imgSrc="/1.png" />
</div>
  </div>
</section>
{/* ===== Barre finale ===== */}
<section className="px-6 lg:px-12 py-3 border-t border-white/10">
  <div className="mx-auto w-full max-w-[1026px] flex flex-col md:flex-row items-center justify-between">
    {/* gauche */}
    <p className="text-[12px] leading-none text-[#99A1AF]">
      © 2024 UpAfrica. Tous droits réservés. Construisons ensemble l'avenir de l'Afrique.
    </p>

    {/* droite */}
    <nav className="mt-2 md:mt-0 flex items-center text-[12px] leading-none text-[#99A1AF]">
      <Link href="/privacy" className="hover:text-white/80 transition-colors">
        Politique de confidentialité
      </Link>
      <span className="mx-2">•</span>
      <Link href="/terms" className="hover:text-white/80 transition-colors">
        Conditions d'utilisation
      </Link>
      <span className="mx-2">•</span>
      <Link href="/sitemap" className="hover:text-white/80 transition-colors">
        Plan du site
      </Link>
    </nav>
  </div>
</section>

    </div>
  );
}

/* ---------------- subcomponents ---------------- */

function StoreBadge({
  href,
  src,
  alt,
  width,
  height,
  external = false,
}: {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  external?: boolean;
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
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className="
        relative flex items-center
        h-[120px] w-full md:w-[196px] p-[15px]
        rounded-[8.75px]
        bg-[#2A2A2A]/40 backdrop-blur-[40px]
        border border-white/8
        shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_1px_rgba(255,255,255,0.1),inset_0_-1px_0_1px_rgba(0,0,0,0.2)]
      "
    >
      <div className="flex items-start gap-[12px]">
        {/* Icône simple, fond transparent */}
        <div className="text-[#ED6D0B] flex items-center justify-center">{icon}</div>
        <div className="leading-tight">
          <h4 className="text-[14px] font-semibold text-white mb-[4px]">{title}</h4>
          <p className="text-[12px] text-[#99A1AF]">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function FlagCard({
  country,
  users,
  imgSrc,
}: {
  country: string;
  users: string;
  imgSrc: string; // fichiers PNG/SVG dans /public/flags
}) {
  return (
    <div
      className="
        w-[130.66px] h-[94px]
        rounded-[8.75px]
        bg-[#2A2A2A]/40 backdrop-blur-[40px]
        border border-white/8
        shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_1px_rgba(255,255,255,0.1),inset_0_-1px_0_1px_rgba(0,0,0,0.2)]
        px-[16px] py-[10px]
        flex flex-col items-center justify-center gap-[10px]
      "
    >
      <Image
        src={imgSrc}
        alt={`Drapeau ${country}`}
        width={24}
        height={16}
        className="rounded-[2px] object-cover"
      />
      <div className="text-center leading-tight">
        <div className="text-[13px] font-semibold text-white">{country}</div>
        {/* Orange doux = “Text/Full/Orange 2” de ta palette */}
        <div className="text-[12px] font-medium text-[#F6B27A]">{users}</div>
      </div>
    </div>
  );
}
