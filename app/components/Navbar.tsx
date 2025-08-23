"use client";

import Link from "next/link";
import { Zap } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-6 inset-x-0 z-50 flex justify-center">
      <div className="relative w-[92%] max-w-6xl">
        {/* halo externe léger */}
        <div className="pointer-events-none absolute -inset-1 rounded-full blur-xl opacity-40"
             style={{ background: "radial-gradient(100% 60% at 90% 50%, rgba(255,140,50,.25), transparent 60%)" }} />
        {/* pill */}
        <div className="relative rounded-full px-5 md:px-8 py-2.5 flex items-center justify-between glow-pane">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full"
                  style={{ background: "linear-gradient(135deg,#ff7a1a,#ffb347)" }}>
              <Zap className="h-4 w-4 text-white" />
            </span>
            <span className="font-extrabold tracking-tight">UpAfrica</span>
          </Link>

          {/* Menu centre (desktop) */}
          <div className="hidden md:flex items-center gap-9 text-sm text-white/90">
            <Link href="#features" className="hover:text-orange-400">Fonctionnalités</Link>
            <Link href="#pourquoi" className="hover:text-orange-400">Pourquoi UpAfrica</Link>
            <Link href="#ecosysteme" className="hover:text-orange-400">Ecosystème</Link>
            <Link href="#app" className="hover:text-orange-400">L’App</Link>
          </div>

          {/* CTA */}
          <div className="hidden sm:block">
            <Link href="#contact" className="btn-orange rounded-full px-5 py-2 font-semibold text-sm">
              Nous contacter
            </Link>
          </div>

          {/* Burger mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10"
            aria-label="Menu"
          >
            <span className="sr-only">Menu</span>
            <div className="h-3 w-4 grid gap-1">
              <span className="block h-[2px] bg-white/90"></span>
              <span className="block h-[2px] bg-white/90"></span>
              <span className="block h-[2px] bg-white/90"></span>
            </div>
          </button>
        </div>

        {/* Dropdown mobile */}
        {open && (
          <div className="mt-3 sm:hidden rounded-2xl p-3 glow-pane">
            <ul className="flex flex-col gap-2 text-white/90">
              {[
                ["#features","Fonctionnalités"],
                ["#pourquoi","Pourquoi UpAfrica"],
                ["#ecosysteme","Ecosystème"],
                ["#app","L’App"],
              ].map(([href,label]) => (
                <li key={href}>
                  <Link href={href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-white/5">
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="#contact" onClick={() => setOpen(false)} className="btn-orange block rounded-full px-4 py-2 text-center font-semibold">
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
