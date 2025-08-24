"use client";

import Link from "next/link";
import { Zap } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-6 z-[60] flex justify-center">
      <div className="relative w-[92%] max-w-6xl">
        {/* Container principal - design sombre et simple */}
        <div 
          className="relative rounded-full px-8 md:px-8 py-[22px] flex items-center justify-between overflow-hidden"
          style={{
            // Frost + Refraction
            background: 'rgba(26,27,31,0.32)',
            backdropFilter: 'blur(24px) saturate(140%)',
            WebkitBackdropFilter: 'blur(24px) saturate(140%)',
            // Depth + Dispersion (inner highlight chaud + outer shadow)
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow:
              '0 24px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.14), inset 0 0 0 1px rgba(255,140,50,0.08)'
          }}
        >
          {/* halos directionnels (Light -45°, intensité ~80%) */}
          <div className="absolute inset-0 rounded-full pointer-events-none">
            {/* highlight en haut-gauche */}
            <div className="absolute -top-10 -left-8 w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_65%)] blur-2xl" />
            {/* teinte chaude en bas-droite (dispersion) */}
            <div className="absolute -bottom-12 right-6 w-56 h-56 rounded-full bg-[radial-gradient(circle,rgba(255,140,50,0.25),transparent_70%)] blur-2xl" />
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
  <span
    className="
      inline-flex items-center justify-center
      h-[42px] w-[42px] rounded-[14px]
      transform rotate-[0.9deg]
    "
    style={{
      background: 'var(--ua-base-orange, #FF7A1A)', // Frame/Full/Base orange
      boxShadow: [
        '0 2px 6px rgba(0,0,0,0.28)',           // depth proche (noir)
        '0 10px 18px rgba(255,122,26,0.28)',    // glow moyen (orange)
        '0 22px 40px rgba(255,122,26,0.18)',    // glow large (orange)
      ].join(', ')
    }}
  >
    <Zap className="h-5 w-5 text-white" />
  </span>
  <span className="font-bold text-white text-[15px]">UpAfrica</span>
</Link>

          {/* Menu centre (desktop) */}
          <nav className="hidden md:flex items-center">
            <ul className="flex items-center gap-[10px]">
              <li>
                <Link 
                  href="#features" 
                  className="text-white/80 hover:text-white transition-colors text-[14px] font-medium"
                >
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link 
                  href="#pourquoi" 
                  className="text-white/80 hover:text-white transition-colors text-[14px] font-medium"
                >
                  Pourquoi UpAfrica
                </Link>
              </li>
              <li>
                <Link 
                  href="#ecosysteme" 
                  className="text-white/80 hover:text-white transition-colors text-[14px] font-medium"
                >
                  Ecosystème
                </Link>
              </li>
              <li>
                <Link 
                  href="#app" 
                  className="text-white/80 hover:text-white transition-colors text-[14px] font-medium"
                >
                  L'App
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
<div className="hidden sm:block">
  <Link
    href="#contact"
    className="inline-flex items-center justify-center h-9 w-auto px-3 rounded-lg text-[14px] font-medium text-white"
    style={{
      background: 'var(--btn-base-orange, #FF7A1A)', // Buttons/Full/Base orange
      boxShadow: [
        '0 2px 6px rgba(0,0,0,0.25)',          // drop shadow #1 (proche)
        '0 10px 18px rgba(255,122,26,0.28)'    // drop shadow #2 (glow orange)
      ].join(', ')
    }}
  >
    Nous contacter
  </Link>
</div>

          {/* Burger mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.10)'
            }}
            aria-label="Menu"
          >
            <div className="h-3 w-4 grid gap-0.5">
              <span className="block h-[1.5px] bg-white/90 rounded-full"></span>
              <span className="block h-[1.5px] bg-white/90 rounded-full"></span>
              <span className="block h-[1.5px] bg-white/90 rounded-full"></span>
            </div>
          </button>
        </div>

        {/* Dropdown mobile */}
        {open && (
          <div 
            className="mt-2 sm:hidden rounded-2xl p-4 relative overflow-hidden"
            style={{
              background: 'rgba(26,27,31,0.32)',
              backdropFilter: 'blur(24px) saturate(140%)',
              WebkitBackdropFilter: 'blur(24px) saturate(140%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow:
                '0 24px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.14), inset 0 0 0 1px rgba(255,140,50,0.08)'
            }}
          >
            {/* halos */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none">
              <div className="absolute -top-6 left-0 w-40 h-40 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_65%)] blur-2xl" />
              <div className="absolute bottom-0 right-0 w-44 h-44 rounded-full bg-[radial-gradient(circle,rgba(255,140,50,0.22),transparent_70%)] blur-2xl" />
            </div>

            <ul className="flex flex-col gap-1 text-white/80 relative z-10">
              {[
                ["#features", "Fonctionnalités"],
                ["#pourquoi", "Pourquoi UpAfrica"],
                ["#ecosysteme", "Ecosystème"],
                ["#app", "L'App"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-[14px] font-medium transition-colors hover:text-white hover:bg-white/5"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
  <Link
    href="#contact"
    onClick={() => setOpen(false)}
    className="block h-9 w-auto px-3 rounded-lg text-center text-[14px] font-medium text-white"
    style={{
      background: 'var(--btn-base-orange, #FF7A1A)',
      boxShadow: [
        '0 2px 6px rgba(0,0,0,0.25)',
        '0 10px 18px rgba(255,122,26,0.28)'
      ].join(', ')
    }}
  >
    Nous contacter
  </Link>
</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
