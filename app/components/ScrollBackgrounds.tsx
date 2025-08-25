// app/components/ScrollBackgrounds.tsx
"use client";

import { useEffect, useState } from "react";

const ScrollBackgrounds = () => {
  const [currentBackground, setCurrentBackground] = useState(0);

  // Définissez ici vos 3 images de fond
  const backgrounds = [
    "/back1.png", // Remplacez par vos vraies images
    "/back2.png",
    "/back3.png",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculer la progression du scroll (0 à 1)
      const scrollProgress = scrollY / (documentHeight - windowHeight);
      
      // Diviser en 3 sections pour les 3 images
      if (scrollProgress < 0.33) {
        setCurrentBackground(0);
      } else if (scrollProgress < 0.66) {
        setCurrentBackground(1);
      } else {
        setCurrentBackground(2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            currentBackground === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${bg})`,
          }}
        />
      ))}
      {/* Overlay pour assurer la lisibilité du texte */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default ScrollBackgrounds;