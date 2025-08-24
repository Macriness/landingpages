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
  <span
    className="font-black tracking-[-1.58px] text-[var(--text-orange-2,#FF944F)]"
    style={{
      // 3 drop shadows comme dans Figma
      filter: `
        drop-shadow(0 2px 6px rgba(0,0,0,0.25))
        drop-shadow(0 10px 18px rgba(255,122,26,0.28))
        drop-shadow(0 0 24px rgba(255,148,79,0.55))
      `
    }}
  >
    l&apos;Afrique
  </span>{" "}
  qui
  <span
    className="font-black tracking-[-1.58px] text-[var(--text-orange-2,#FF944F)]"
    style={{
      filter: `
        drop-shadow(0 2px 6px rgba(0,0,0,0.25))
        drop-shadow(0 10px 18px rgba(255,122,26,0.28))
        drop-shadow(0 0 24px rgba(255,148,79,0.55))
      `
    }}
  >
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
  className="inline-flex items-center justify-center h-9 w-auto px-3 rounded-lg text-[14px] font-medium text-white gap-[6px]"
  style={{
    background: 'var(--btn-base-orange, #FF7A1A)',
    boxShadow: [
      '0 2px 6px rgba(0,0,0,0.25)',
      '0 10px 18px rgba(255,122,26,0.28)'
    ].join(', ')
  }}
>
  <Download size={18} />
  Télécharger maintenant →
</Link>
              <Link
  href="#features"
  className="inline-flex items-center justify-center h-9 w-auto px-3 rounded-lg text-[14px] font-medium text-white"
  style={{
    // Fill: Buttons/Full/Base grey (fallback fourni)
    background: 'var(--btn-base-grey, #2A2B2F)',
    // 2 drop-shadows (proche sombre + glow orange à 20%, Y=1, Blur=20)
    boxShadow: [
      '0 2px 6px rgba(0,0,0,0.25)',
      '0 1px 20px rgba(237,109,11,0.20)' // #ED6D0B @ 20%
    ].join(', ')
  }}
>
  Voir la démo
</Link>
            </div>

            {/* Stats Cards */}
<div className="flex flex-wrap gap-4 pt-6">
  {/* Card 1 */}
  <div
    className="relative rounded-[14px] h-[75.5px] px-2.5 py-2.5 flex items-center gap-[10px] select-none"
    style={{
      background: "rgba(42,42,42,0.40)",                  // Fill 2A2A2A @ 40%
      backdropFilter: "blur(14px) saturate(140%)",         // Background blur
      WebkitBackdropFilter: "blur(14px) saturate(140%)",
      border: "1px solid rgba(255,255,255,0.08)",          // Stroke inside 1px @ 8%
      boxShadow: [
        "0 8px 24px rgba(0,0,0,0.35)",                     // Drop shadow
        "inset 0 1px 0 rgba(255,255,255,0.08)",            // Inner highlight top
        "inset 0 -2px 8px rgba(0,0,0,0.35)"                // Inner depth bottom
      ].join(", ")
    }}
  >
    <Star className="text-[var(--text-orange-3,#ED6D0B)]" size={18} />
    <div className="text-left leading-tight">
      <p className="font-bold text-lg text-[var(--text-orange-3,#ED6D0B)]">50 000+</p>
      <p className="text-xs text-[var(--text-grey-2,rgba(255,255,255,0.56))]">Utilisateurs actifs</p>
    </div>
  </div>

  {/* Card 2 */}
  <div
    className="relative rounded-[14px] h-[75.5px] px-2.5 py-2.5 flex items-center gap-[10px] select-none"
    style={{
      background: "rgba(42,42,42,0.40)",
      backdropFilter: "blur(14px) saturate(140%)",
      WebkitBackdropFilter: "blur(14px) saturate(140%)",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: [
        "0 8px 24px rgba(0,0,0,0.35)",
        "inset 0 1px 0 rgba(255,255,255,0.08)",
        "inset 0 -2px 8px rgba(0,0,0,0.35)"
      ].join(", ")
    }}
  >
    <Globe className="text-[var(--text-orange-3,#ED6D0B)]" size={18} />
    <div className="text-left leading-tight">
      <p className="font-bold text-lg text-[var(--text-orange-3,#ED6D0B)]">500+</p>
      <p className="text-xs text-[var(--text-grey-2,rgba(255,255,255,0.56))]">Entreprises</p>
    </div>
  </div>

  {/* Card 3 */}
  <div
    className="relative rounded-[14px] h-[75.5px] px-2.5 py-2.5 flex items-center gap-[10px] select-none"
    style={{
      background: "rgba(42,42,42,0.40)",
      backdropFilter: "blur(14px) saturate(140%)",
      WebkitBackdropFilter: "blur(14px) saturate(140%)",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: [
        "0 8px 24px rgba(0,0,0,0.35)",
        "inset 0 1px 0 rgba(255,255,255,0.08)",
        "inset 0 -2px 8px rgba(0,0,0,0.35)"
      ].join(", ")
    }}
  >
    <Activity className="text-[var(--text-orange-3,#ED6D0B)]" size={18} />
    <div className="text-left leading-tight">
      <p className="font-bold text-lg text-[var(--text-orange-3,#ED6D0B)]">54</p>
      <p className="text-xs text-[var(--text-grey-2,rgba(255,255,255,0.56))]">Pays africains</p>
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
