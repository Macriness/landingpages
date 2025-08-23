"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Play, Star, Globe, Activity } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen from-gray-900 via-amber-900/20 to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="mx-auto w-[92%] max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          
          {/* Texte */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Connectez-vous à<br />
              <span className="text-orange-400 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                l&apos;Afrique
              </span>{" "}
              qui
              <span className="text-orange-400 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                {" "}innove
              </span>
            </h1>

            <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
              UpAfrica révolutionne la façon dont la diaspora africaine et les 
              entrepreneurs du continent collaborent. Découvrez des opportunités uniques, 
              créez des partenariats stratégiques et participez à la transformation 
              numérique de l&apos;Afrique.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="#contact"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-6 py-3 font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-orange-500/40 hover:-translate-y-1 drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]"
              >
                <Download size={18} /> Télécharger maintenant &rarr;
              </Link>
              <Link
                href="#features"
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-400/40 text-white rounded-full px-6 py-3 font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]"
              >
                <Play size={18} /> Voir la démo
              </Link>
            </div>

            {/* Stats Cards */}
            <div className="flex flex-wrap gap-4 pt-6">
              <div className="bg-[#0F1012] rounded-xl px-4 py-3 flex items-center gap-3 transition-all duration-300 hover:bg-gray-800 shadow-lg shadow-black/50 hover:shadow-xl hover:shadow-black/60 hover:-translate-y-1">
                <Star className="text-orange-400" size={18} />
                <div className="text-left">
                  <p className="font-bold text-orange-400 text-lg">50 000+</p>
                  <p className="text-xs text-gray-400">Utilisateurs actifs</p>
                </div>
              </div>
              <div className="bg-[#0F1012] rounded-xl px-4 py-3 flex items-center gap-3 transition-all duration-300 hover:bg-gray-800 shadow-lg shadow-black/50 hover:shadow-xl hover:shadow-black/60 hover:-translate-y-1">
                <Globe className="text-orange-400" size={18} />
                <div className="text-left">
                  <p className="font-bold text-orange-400 text-lg">500+</p>
                  <p className="text-xs text-gray-400">Entreprises</p>
                </div>
              </div>
              <div className="bg-[#0F1012] rounded-xl px-4 py-3 flex items-center gap-3 transition-all duration-300 hover:bg-gray-800 shadow-lg shadow-black/50 hover:shadow-xl hover:shadow-black/60 hover:-translate-y-1">
                <Activity className="text-orange-400" size={18} />
                <div className="text-left">
                  <p className="font-bold text-orange-400 text-lg">54</p>
                  <p className="text-xs text-gray-400">Pays africains</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image simple sans cadre */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/hero.png"
              alt="UpAfrica App"
              width={420}
              height={640}
              priority
            />
          </div>
          
        </div>
      </section>
    </div>
  );
}
