"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface SplashScreenProps {
  onLoadComplete: () => void;
}

const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = src;
    img.onload = () => resolve();
    img.onerror = reject;
  });
};

export function SplashScreen({ onLoadComplete }: Readonly<SplashScreenProps>) {
  const [opacity, setOpacity] = useState(1);

  const criticalImages = [
    "/images/logo/Latest-Logo.png",
    "/backgrounds/about-us.png",
  ];

  useEffect(() => {
    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages++;
      if (loadedImages === 1) handleFadeOut();
    };

    Promise.all(
      criticalImages.map((src) => preloadImage(src).then(handleImageLoad))
    ).catch((error) => {
      console.error("Error preloading images:", error);
      handleFadeOut();
    });
  }, []);

  const handleFadeOut = () => {
    setOpacity(0);
    setTimeout(() => {
      onLoadComplete();
    }, 1000);
  };

  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-black"
      style={{
        opacity,
        transition: "opacity 1s ease-out",
      }}
    >
      <div className="w-80 h-80 relative animate-gentle-float">
        <Image
          src="/images/logo/Latest-Logo.png"
          alt="Mouth2Mouth Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
