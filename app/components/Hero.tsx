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
          w-[92%] xl:w-[76%] max-w-6xl
          grid grid-cols-1 xl:grid-cols-[560px_auto] items-center gap-8 xl:gap-24
          mx-auto xl:mx-0 xl:ml-auto xl:mr-[9vw]
          pt-20 xl:pt-0
        "
        style={{ minHeight: "calc(90dvh - var(--header-h, 0px))" }}
      >
        <div className="w-full flex flex-col items-center xl:items-start text-center xl:text-left space-y-6 xl:space-y-[35px] order-1 xl:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold leading-tight">
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

          <p className="text-[var(--text-grey-2,#D1D5DC)] text-base lg:text-lg xl:text-lg max-w-lg xl:max-w-xl leading-relaxed px-4 xl:px-0">
            UpAfrica révolutionne la façon dont la diaspora africaine et les
            entrepreneurs du continent collaborent. Découvrez des opportunités uniques,
            créez des partenariats stratégiques et participez à la transformation
            numérique de l&apos;Afrique.
          </p>

          {/* === IMAGE MOBILE/TABLETTE === */}
          <div className="w-full flex justify-center xl:hidden">
            <div className="relative h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px] aspect-[9/19.5] animate-bounce-slow">
              <Image
                src="/hero.png"
                alt="UpAfrica App"
                fill
                priority
                className="object-contain drop-shadow-2xl"
                sizes="(max-width:640px) 50vh, (max-width:768px) 60vh, (max-width:1024px) 65vh, (max-width:1280px) 70vh, 68dvh"
              />
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-row gap-3 xl:gap-4 w-full max-w-l xl:max-w-none">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center h-12 xl:h-10 px-4 xl:px-4 rounded-lg text-[14px] xl:text-[14px] font-medium text-white gap-[6px] flex-1"
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
              className="inline-flex items-center justify-center h-12 xl:h-10 px-4 xl:px-4 rounded-lg text-[14px] xl:text-[14px] font-medium text-white flex-1"
              style={{
                background: "var(--btn-base-grey, #333333)",
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
          <div className="flex flex-row justify-center xl:justify-start gap-2 xl:gap-4 w-full px-2 xl:px-0">
            {[
              { icon: Star, value: "50 000+", label: "Utilisateurs actifs" },
              { icon: Globe, value: "500+", label: "Entreprises" },
              { icon: TrendingUp, value: "54", label: "Pays africains" },
            ].map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="relative rounded-[14px] h-[75.5px] px-2 xl:px-3 py-2.5 flex items-center gap-[8px] xl:gap-[10px] select-none flex-1 min-w-0"
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
                <Icon className="text-[var(--text-orange-3,#ED6D0B)] flex-shrink-0" size={16} />
                <div className="text-left leading-tight min-w-0">
                  <p className="font-bold text-base xl:text-lg text-[var(--text-orange-3,#ED6D0B)] truncate">{value}</p>
                  <p className="text-xs text-[var(--text-grey-2,#D1D5DC)] truncate">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === COLONNE IMAGE DESKTOP === */}
        <div className="hidden xl:flex w-full justify-center xl:justify-start xl:-ml-12 order-2 xl:order-2">
          <div className="relative h-[98dvh] lg:h-[120dvh] max-h-[820px] aspect-[9/19.5] animate-bounce-slow">
            <Image
              src="/hero.png"
              alt="UpAfrica App"
              fill
              priority
              className="object-contain drop-shadow-2xl"
              sizes="68dvh"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
