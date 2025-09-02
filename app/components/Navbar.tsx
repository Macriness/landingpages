"use client";

import { Download, Star, Globe, TrendingUp, X, ArrowRight, Play, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import ParticlesBackground from "./ParticlesBackground";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-300 w-full"
        style={{ height: "72px", "--header-h": "72px" } as React.CSSProperties}
      >
        <div className="relative w-[92%] max-w-6xl mt-10">
          <div
            className="
              relative overflow-hidden
              flex items-center justify-between gap-8
              rounded-full px-8 py-[18px]
              bg-[rgba(26,27,31,0.24)]
              backdrop-blur-[20px] backdrop-saturate-[140%]
              border border-white/10
              shadow-[0_8px_24px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.12)]
            "
            style={{ WebkitBackdropFilter: "blur(20px) saturate(140%)" }}
          >
            <div className="absolute inset-0 rounded-full pointer-events-none">
              <div className="absolute -top-10 -left-8 w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.15),transparent_65%)] blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 right-6 w-56 h-56 rounded-full bg-[radial-gradient(circle,rgba(255,140,50,0.18),transparent_70%)] blur-2xl pointer-events-none" />
            </div>

            <a href="/" className="flex items-center gap-2.5 relative z-10">
              <span className="font-bold text-white text-[24px]">UpAfrica</span>
            </a>

            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center">
              <ul className="flex flex-row items-center gap-8">
                {[
                  ["#features", "Fonctionnalités"],
                  ["#why", "Pourquoi UpAfrica"],
                  ["#ecosystem", "Ecosystème"],
                  ["#app", "L'App"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-white/80 hover:text-white transition-colors text-[14px] font-medium"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden sm:block relative z-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-9 px-3 rounded-lg text-[14px] font-medium text-white"
                style={{
                  background: "var(--btn-base-orange, #FF7A1A)",
                  boxShadow:
                    "0 2px 6px rgba(0,0,0,0.25), 0 8px 16px rgba(255,122,26,0.28)",
                }}
              >
                Nous contacter
              </a>
            </div>

            <button
              onClick={() => setOpen(true)}
              aria-controls="mobile-sidebar"
              aria-expanded={open}
              className="sm:hidden ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full relative z-[120] hover:bg-white/10 transition-colors"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <div className="h-3 w-4 grid gap-0.5">
                <span className="block h-[1.5px] bg-white/90 rounded-full" />
                <span className="block h-[1.5px] bg-white/90 rounded-full" />
                <span className="block h-[1.5px] bg-white/90 rounded-full" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-sidebar"
        className={`fixed inset-0 z-[200] sm:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          } bg-black/60 backdrop-blur-sm`}
          onClick={() => setOpen(false)}
        />

        <aside
          className={`
            fixed left-2 top-2 bottom-2
            transform transition-transform duration-300 ease-out
            ${open ? "translate-x-0" : "-translate-x-[calc(100%+8px)]"}
            w-[280px] rounded-[10px] overflow-hidden
            shadow-[0_8px_32px_rgba(0,0,0,0.40)]
            border border-white/10
            bg-[rgba(26,27,31,0.85)] backdrop-blur-[24px]
            relative
          `}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[10px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0) 35%)",
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[10px]"
            style={{
              boxShadow:
                "inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -z-0"
            style={{
              left: 16,
              top: 12,
              width: 96,
              height: 96,
              borderRadius: 24,
              background:
                "radial-gradient(60px 60px at 24px 24px, rgba(255,122,26,0.45), rgba(255,122,26,0.18) 48%, rgba(255,122,26,0.05) 70%, transparent 80%)",
              filter: "blur(8px)",
            }}
          />

          <div className="relative z-10 h-[760] flex flex-col">
            <div className="flex items-center justify-between px-5 py-4">
              <a
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl grid place-items-center
                    shadow-[0_6px_18px_rgba(255,122,26,0.35)]
                    border border-white/10
                    bg-gradient-to-br from-[#FF8A1A] to-[#FF6A00]">
                    <Zap size={18} className="text-white" />
                  </div>
                </div>
                <span className="font-bold text-white text-[22px] leading-none">
                  UpAfrica
                </span>
              </a>
            </div>

            <nav className=" px-4 pt-4">
              <ul className="space-y-4">
                {[
                  ["#features", "Fonctionnalités"],
                  ["#why", "Pourquoi UpAfrica"],
                  ["#ecosystem", "Ecosystème"],
                  ["#app", "L'App"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={() => setOpen(false)}
                      className="block w-full px-4 py-3 rounded-xl
                                 text-white/95 text-[18px] font-medium
                                 hover:bg-white/10 active:bg-white/15
                                 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-6">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-full h-12 rounded-xl
                           text-[16px] font-semibold text-white
                           bg-gradient-to-b from-[#FF8A1A] to-[#FF6A00]
                           shadow-[0_8px_24px_rgba(255,122,26,0.35)]
                           border border-white/10
                           hover:shadow-[0_10px_28px_rgba(255,122,26,0.45)]
                           active:translate-y-[1px] transition-all"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

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

function Hero() {
  return (
    <section
      className="
        relative overflow-hidden from-gray-900 via-amber-900/20 to-gray-900
        mt-5 md:mt-0 xl:mt-20 bg-cover bg-center bg-no-repeat
      "
      style={{ paddingTop: "0px", backgroundImage: "url('/back1.png')" }}
    >
      <div
        className="
          w-[92%] xl:w-[76%] max-w-6xl
          grid grid-cols-1 xl:grid-cols-[560px_auto] items-center gap-4 xl:gap-20
          mx-auto xl:mx-0 xl:ml-auto xl:mr-[9vw]
        "
        style={{ minHeight: "calc(90dvh - var(--header-h, 0px))" }}
      >
        <div className="w-full flex flex-col items-center xl:items-start text-center xl:text-left space-y-4 xl:space-y-[30px] order-1 xl:order-1 xl:mb-20">
          <h1 className="font-sora text-4xl lg:text-5xl font-extrabold leading-tight">
            Connectez-vous à{" "}
            <span className="whitespace-nowrap">
              <span
                className="font-sora font-black tracking-[-1.58px] text-[var(--text-orange-2,#FF944F)]"
                style={{
                  filter: `
                    drop-shadow(0 0 20px rgba(255,148,79,1))
                    drop-shadow(0 0 60px rgba(255,122,26,0.8))
                    drop-shadow(0 0 100px rgba(255,148,79,1))
                  `,
                }}
              >
                l&apos;Afrique
              </span>{" "}
              qui{" "}
              <span
                className="font-sora font-black tracking-[-1.58px] text-[var(--text-orange-2,#FF944F)]"
                style={{
                  filter: `
                    drop-shadow(0 0 20px rgba(255,148,79,1))
                    drop-shadow(0 0 60px rgba(255,122,26,0.8))
                    drop-shadow(0 0 100px rgba(255,148,79,1))
                  `,
                }}
              >
                innove
              </span>
            </span>
          </h1>

          <p className="font-dm-sans text-[var(--text-grey-2,#D1D5DC)] text-base lg:text-lg xl:text-lg max-w-lg xl:max-w-xl leading-relaxed px-4 xl:px-0">
            UpAfrica révolutionne la façon dont la diaspora africaine et les
            entrepreneurs du continent collaborent. Découvrez des opportunités uniques,
            créez des partenariats stratégiques et participez à la transformation
            numérique de l&apos;Afrique.
          </p>

          <div className="w-full flex justify-center xl:hidden">
            <div
              className="relative h-[80vh] sm:h-[90vh] max-h-[850px] aspect-[9/19.5] animate-bounce-slow"
              style={{ width: "195%" }}
            >
              <img
                src="/hero.png"
                alt="UpAfrica App"
                className="object-contain drop-shadow-2xl absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-row gap-3 xl:gap-4 w-full justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-12 xl:h-10 px-4 xl:px-4 rounded-lg text-[14px] xl:text-[14px] font-medium text-white gap-[6px] w-full sm:flex-1 whitespace-nowrap"
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
              <ArrowRight size={18} />
            </a>

            <a
              href="#features"
              className="inline-flex items-center justify-center h-12 xl:h-10 px-4 xl:px-4 rounded-lg text-[14px] xl:text-[14px] gap-[6px] font-medium text-white w-full sm:flex-1 whitespace-nowrap"
              style={{
                background: "var(--btn-base-grey, #232323)",
                boxShadow: [
                  "0 2px 6px rgba(0,0,0,0.25)",
                  "0 1px 20px rgba(237,109,11,0.20)",
                ].join(", "),
              }}
            >
                <Play size={18}/>
              Voir la démo
            </a>
          </div>

          <div className="flex flex-row justify-center xl:justify-start gap-2 xl:gap-4 w-full px-2 xl:px-0">
            {[
              { icon: Star, value: 50000, label: "Utilisateurs actifs", suffix: "+" },
              { icon: Globe, value: 500, label: "Entreprises", suffix: "+" },
              { icon: TrendingUp, value: 54, label: "Pays africains" },
            ].map(({ icon: Icon, value, label, suffix }) => (
              <div
                key={label}
                className="relative rounded-[14px] h-[75.5px] px-2 xl:px-3 py-2.5 flex items-center gap-[8px] xl:gap-[10px] select-none w-full sm:flex-1"
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
                <Icon
                  className="text-[var(--text-orange-3,#ED6D0B)] flex-shrink-0"
                  size={16}
                />
                <div className="text-left leading-tight min-w-0">
                  <p className="font-bold text-base xl:text-lg text-[var(--text-orange-3,#ED6D0B)] whitespace-nowrap">
                    <AnimatedCounter value={value} suffix={suffix} />
                  </p>
                  <p className="text-xs text-[var(--text-grey-2,#D1D5DC)] whitespace-nowrap">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden xl:flex w-full justify-start order-2 xl:order-2">
          <div className="relative h-[110dvh] lg:h-[130dvh] max-h-[920px] aspect-[9/19.5] animate-bounce-slow xl:w-[100%] xl:mb-8">
            <img
              src="/hero.png"
              alt="UpAfrica App"
              className="object-contain drop-shadow-2xl absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}