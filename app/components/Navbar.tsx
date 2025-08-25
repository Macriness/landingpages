"use client";

import Link from "next/link";
import { Zap } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-300">

      <div className="relative w-[92%] max-w-6xl mt-4">
        {/* Container principal - flottant & transparent */}
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
          {/* halos directionnels */}
          <div className="absolute inset-0 rounded-full pointer-events-none">
            <div className="absolute -top-10 -left-8 w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.15),transparent_65%)] blur-2xl" />
            <div className="absolute -bottom-12 right-6 w-56 h-56 rounded-full bg-[radial-gradient(circle,rgba(255,140,50,0.18),transparent_70%)] blur-2xl" />
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <span
              className="inline-flex items-center justify-center h-[40px] w-[40px] rounded-[12px]"
              style={{
                background: "var(--ua-base-orange, #FF7A1A)",
                boxShadow:
                  "0 2px 6px rgba(0,0,0,0.25), 0 8px 16px rgba(255,122,26,0.28)",
              }}
            >
              <Zap className="h-5 w-5 text-white" />
            </span>
            <span className="font-bold text-white text-[15px]">UpAfrica</span>
          </Link>

          {/* Menu centre (desktop) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center">
            <ul className="flex flex-row items-center gap-8">
              {[
                ["#features", "Fonctionnalités"],
                ["#why", "Pourquoi UpAfrica"],
                ["#ecosystem", "Ecosystème"],
                ["#app", "L'App"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/80 hover:text-white transition-colors text-[14px] font-medium"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="hidden sm:block">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center h-9 px-3 rounded-lg text-[14px] font-medium text-white"
              style={{
                background: "var(--btn-base-orange, #FF7A1A)",
                boxShadow:
                  "0 2px 6px rgba(0,0,0,0.25), 0 8px 16px rgba(255,122,26,0.28)",
              }}
            >
              Nous contacter
            </Link>
          </div>

          {/* Burger mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full"
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

        {/* Dropdown mobile */}
        {open && (
          <div
            className="mt-2 sm:hidden rounded-2xl p-4 relative overflow-hidden
                       bg-[rgba(26,27,31,0.28)] backdrop-blur-[20px] backdrop-saturate-[140%]
                       border border-white/10
                       shadow-[0_12px_32px_rgba(0,0,0,0.25)]"
          >
          
          <ul className="flex flex-col gap-1 text-white/80 relative z-10">
              {[
                ["#features", "Fonctionnalités"],
                ["#why", "Pourquoi UpAfrica"],
                ["#ecosystem", "Ecosystème"],
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
                    background: "var(--btn-base-orange, #FF7A1A)",
                    boxShadow:
                      "0 2px 6px rgba(0,0,0,0.25), 0 8px 16px rgba(255,122,26,0.28)",
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
