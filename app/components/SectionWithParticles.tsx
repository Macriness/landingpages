// app/components/SectionWithParticles.tsx
import ParticlesBackground from "./ParticlesBackground";
import React from "react";

export default function SectionWithParticles({
  children,
  // props primitives pour contrôler ParticlesBackground
  color = "#ff8c32",
  size = 360,
  blur = 56,
  opacity = 0.28,
  posX = 13.32, // position en %
  posY = 14.49, // position en %
  id,
  className = "",
}: {
  children: React.ReactNode;
  color?: string;
  size?: number;
  blur?: number;
  opacity?: number;
  posX?: number;
  posY?: number;
  id?: string;
  className?: string;
}) {
  return (
    <section className={`relative ${className}`}>
      {/* ParticlesBackground doit accepter props primitives similaires */}
      <ParticlesBackground
        color={color}
        size={size}
        blur={blur}
        opacity={opacity}
        position={{ xPct: posX, yPct: posY }} // si ton composant accepte un objet position, OK
        id={id}
        count={1}
      />

      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
