"use client";

import { useEffect, useState, useMemo } from "react";

type PartBackgroundProps = {
  isVisible?: boolean;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  blurPx?: number;
  opacity?: number;
  fixedLeft?: number | null;
  fixedTop?: number | null;
  enableDrift?: boolean;
  leftRange?: [number, number];
  topRange?: [number, number];
  numHalos?: number;
};

// Renamed and refactored for a single-use effect
function PartHalo({
  color,
  size,
  blurPx,
  opacity,
  fixedLeft,
  fixedTop,
  enableDrift,
  leftRange,
  topRange,
}: Omit<PartBackgroundProps, 'isVisible' | 'numHalos'>) {

  const [halo, setHalo] = useState<{
    size: number;
    leftPct: number;
    topPct: number;
  } | null>(null);

  const sizeMap = {
    small: { sizeMin: 150, sizeMax: 200, blur: 40, opacity: 0.5 },
    medium: { sizeMin: 320, sizeMax: 520, blur: 60, opacity: 0.34 },
    large: { sizeMin: 500, sizeMax: 800, blur: 80, opacity: 0.25 },
  };

  const selectedSize = sizeMap[size || 'medium'];

  // This useEffect now runs only once when the component mounts
  useEffect(() => {
    const finalSize = Math.round(selectedSize.sizeMin + Math.random() * (selectedSize.sizeMax - selectedSize.sizeMin));
    
    // Default ranges if not provided
    const defaultLeftRange = Math.random() < 0.5 ? [-10, 10] : [90, 110];
    const defaultTopRange = [20, 80];

    const finalLeftPct =
      fixedLeft !== null
        ? fixedLeft
        : (leftRange ?? defaultLeftRange)[0] + Math.random() * ((leftRange ?? defaultLeftRange)[1] - (leftRange ?? defaultLeftRange)[0]);
        
    const finalTopPct =
      fixedTop !== null
        ? fixedTop
        : (topRange ?? defaultTopRange)[0] + Math.random() * ((topRange ?? defaultTopRange)[1] - (topRange ?? defaultTopRange)[0]);

    setHalo({ size: finalSize, leftPct: finalLeftPct, topPct: finalTopPct });
  }, []); // Empty dependency array ensures it runs only once

  if (!halo) return null;

  const safeColor = color ?? "#ff8c32";
  const background = `radial-gradient(circle at 45% 40%, ${hexWithAlpha(
    safeColor,
    1
  )} 0%, ${hexWithAlpha(safeColor, 0.55)} 40%, ${hexWithAlpha(safeColor, 0)} 100%)`;

  const driftStyle = enableDrift
    ? {
        animation: "pb-drift 8s ease-in-out infinite alternate",
      }
    : undefined;

  return (
    <div
      style={{
        position: "absolute",
        left: `${halo.leftPct}%`,
        top: `${halo.topPct}%`,
        width: `${halo.size}px`,
        height: `${halo.size}px`,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        borderRadius: "50%",
        background,
        filter: `blur(${blurPx}px)`,
        opacity: opacity || selectedSize.opacity,
        mixBlendMode: "normal",
        willChange: "filter, opacity, transform",
        ...(driftStyle || {}),
      }}
    />
  );
}

// Composant principal qui gère le nombre de halos
export default function PartBackground({
  isVisible = true,
  color = "#ff8c32",
  size = 'medium',
  blurPx = 60,
  opacity = 0.34,
  fixedLeft = null,
  fixedTop = null,
  enableDrift = false,
  leftRange = Math.random() < 0.5 ? [-10, 10] : [90, 110], 
  topRange = [20, 80], 
  numHalos = Math.round(1 + Math.random() * 2),
}: PartBackgroundProps) {
  
  if (!isVisible) return null;

  const halos = Array.from({ length: numHalos }).map((_, i) => (
    <PartHalo
      key={i}
      color={color}
      size={size}
      blurPx={blurPx}
      opacity={opacity}
      fixedLeft={fixedLeft}
      fixedTop={fixedTop}
      enableDrift={enableDrift}
      leftRange={leftRange}
      topRange={topRange}
    />
  ));

  return (
    <>
      <style>
        {`
          @keyframes pb-drift {
            from { transform: translate(-50%, -50%) translateY(-6px); }
            to { transform: translate(-50%, -50%) translateY(6px); }
          }
        `}
      </style>
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden
        style={{ willChange: "transform, opacity" }}
      >
        {halos}
      </div>
    </>
  );
}

function hexWithAlpha(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  if (h.length === 3) {
    const r = h[0] + h[0];
    const g = h[1] + h[1];
    const b = h[2] + h[2];
    return `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, ${alpha})`;
  }
  if (h.length === 6) {
    const r = h.slice(0, 2);
    const g = h.slice(2, 4);
    const b = h.slice(4, 6);
    return `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, ${alpha})`;
  }
  return `rgba(255,140,50,${alpha})`;
}