"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);              // léger + types OK
    }).then(() => setReady(true));
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: true, zIndex: 0 },
      background: { color: "transparent" },
      detectRetina: true,
      particles: {
        number: { value: 55, density: { enable: true, area: 900 } },
        color: { value: "#ff8c32" },
        shape: { type: "circle" },
        size: { value: 2, random: { enable: true, minimumValue: 0.8 } },
        opacity: {
          value: 0.35,
          random: { enable: true, minimumValue: 0.15 },
          animation: { enable: true, speed: 0.6, minimumValue: 0.1, sync: false },
        },
        move: {
          enable: true,
          direction: "none",
          speed: 0.35,
          random: true,
          outModes: { default: "out" },
        },
      },
      interactivity: {
        events: { onHover: { enable: false }, onClick: { enable: false } },
      },
    }),
    []
  );

  if (!ready) return null;

  return (
    <Particles
      id="ua-particles"
      options={options}
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
