"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Star, Globe, Activity, ArrowRight, TrendingUp} from "lucide-react";

export default function Hero() {
  return (
    <section 
  className="
    relative overflow-hidden from-gray-900 via-amber-900/20 to-gray-900
    -mt-20
  "
>
  <div
    className="
      w-[92%] md:w-[76%] max-w-6xl
      grid md:grid-cols-[560px_auto] items-center gap-24
      mx-auto md:mx-0 md:ml-auto md:mr-[9vw]
    "
    style={{ minHeight: "calc(90dvh - var(--header-h, 0px))" }}
  >
        {/* === COLONNE TEXTE === */}
        <div className="w-full flex flex-col items-start text-left space-y-[35px]">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
  Connectez-vous à{" "}
  <span className="whitespace-nowrap">
    <span
      className="font-black tracking-[-1.58px] text-[var(--text-orange-2,#FF944F)]"
      style={{
        filter: `
          drop-shadow(0 2px 6px rgba(0,0,0,0.25))
          drop-shadow(0 10px 18px rgba(255,122,26,0.28))
          drop-shadow(0 0 24px rgba(255,148,79,0.55))
        `,
      }}
    >
      l&apos;Afrique
    </span>{" "}
    qui{" "}
    <span
      className="font-black tracking-[-1.58px] text-[var(--text-orange-2,#FF944F)]"
      style={{
        filter: `
          drop-shadow(0 2px 6px rgba(0,0,0,0.25))
          drop-shadow(0 10px 18px rgba(255,122,26,0.28))
          drop-shadow(0 0 24px rgba(255,148,79,0.55))
        `,
      }}
    >
      innove
    </span>
  </span>
</h1>

          <p className="text-[var(--text-grey-2,#D1D5DC)] text-lg max-w-xl leading-relaxed">
            UpAfrica révolutionne la façon dont la diaspora africaine et les
            entrepreneurs du continent collaborent. Découvrez des opportunités uniques,
            créez des partenariats stratégiques et participez à la transformation
            numérique de l&apos;Afrique.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center h-10 px-4 rounded-lg text-[14px] font-medium text-white gap-[6px]"
              style={{
                background: "var(--btn-base-orange, #FF7A1A)",
                boxShadow: [
                  "0 2px 6px rgba(0,0,0,0.25)",
                  "0 10px 18px rgba(255,122,26,0.28)",
                ].join(", "),
              }}
            >
              <Download size={18} />
              Télécharger maintenant
              <ArrowRight size={18}/>
            </Link>

            <Link
              href="#features"
              className="inline-flex items-center justify-center h-10 px-4 rounded-lg text-[14px] font-medium text-white"
              style={{
                background: "var(--btn-base-grey, #000000ff)",
                boxShadow: [
                  "0 2px 6px rgba(0,0,0,0.25)",
                  "0 1px 20px rgba(237,109,11,0.20)",
                ].join(", "),
              }}
            >
              Voir la démo
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            {[
              { icon: Star, value: "50 000+", label: "Utilisateurs actifs" },
              { icon: Globe, value: "500+", label: "Entreprises" },
              { icon: TrendingUp, value: "54", label: "Pays africains" },
            ].map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="relative rounded-[14px] h-[75.5px] px-3 py-2.5 flex items-center gap-[10px] select-none"
                style={{
                  background: "rgba(42,42,42,0.40)",
                  backdropFilter: "blur(14px) saturate(140%)",
                  WebkitBackdropFilter: "blur(14px) saturate(140%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: [
                    "0 8px 24px rgba(0,0,0,0.35)",
                    "inset 0 1px 0 rgba(255,255,255,0.08)",
                    "inset 0 -2px 8px rgba(0,0,0,0.35)",
                  ].join(", "),
                }}
              >
                <Icon className="text-[var(--text-orange-3,#ED6D0B)]" size={18} />
                <div className="text-left leading-tight">
                  <p className="font-bold text-lg text-[var(--text-orange-3,#ED6D0B)]">{value}</p>
                  <p className="text-xs text-[var(--text-grey-2,#D1D5DC)]">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === COLONNE IMAGE === */}
        <div className="w-full flex justify-center md:justify-start md:-ml-12">
          <div className="relative h-[98dvh] md:h-[120dvh] max-h-[820px] aspect-[9/19.5] animate-bounce-slow">
            <Image
              src="/hero.png"
              alt="UpAfrica App"
              fill
              priority
              className="object-contain drop-shadow-2xl"
              sizes="(max-width:768px) 58dvh, 68dvh"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
