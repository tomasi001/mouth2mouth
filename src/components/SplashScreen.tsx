"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onLoadComplete: () => void;
}

const MAX_WIDTH = 1920; // Reduced from 3840 to a more reasonable size

const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    // Use lower quality for preload
    img.src = `/_next/image?url=${encodeURIComponent(src)}&w=${MAX_WIDTH}&q=50`;
    img.sizes = "(max-width: 768px) 100vw, 90vw";
    img.loading = "eager"; // Force eager loading
    img.onload = () => resolve();
    img.onerror = reject;
  });
};

export function SplashScreen({ onLoadComplete }: Readonly<SplashScreenProps>) {
  const [opacity, setOpacity] = useState(1);
  const [animationStage, setAnimationStage] = useState(0); // 0: initial, 1: entrance, 2: rotation, 3: float

  const criticalImages = [
    "/images/logo/Latest-Logo.png",
    "/images/fran/i_fell_asleep_against_the_window_of_the_cornershop.png",
    "/images/fran/so_bright_it_hurts.png",
    "/images/events/Copy_of_Portland-M2M_Stage_Day.JPG",
    "/images/events/Copy_of_STB_Hangout_2.jpg",
    "/images/events/Copy_of_STB_Warehouse_EL_Wire_2.jpg",
    "/images/events/Copy_of_STB_Warm-up.jpg",
    "/images/events/Copy_of_WhatsApp_Image_2022-11-07_at_16.41.31.jpeg",
    "/images/events/Fynn_Wilson_for_M2M_On_the_Traxx_2-7.jpg",
    "/images/events/Fynn_Wilson_for_M2M_On_the_Traxx_2-27.jpg",
    "/images/events/Fynn_Wilson_M2M_12_Hours_at_Camp_2020.jpg",
  ];

  useEffect(() => {
    const totalImages = criticalImages.length;
    let loadedImages = 0;

    // Preload images in chunks to avoid overwhelming the browser
    const preloadChunk = async (startIndex: number, chunkSize: number) => {
      const chunk = criticalImages.slice(startIndex, startIndex + chunkSize);
      await Promise.all(chunk.map((src) => preloadImage(src)));
      loadedImages += chunk.length;

      if (loadedImages >= 3) {
        setAnimationStage(1);
        setTimeout(() => {
          setAnimationStage(2);
          setTimeout(() => {
            setAnimationStage(3);
            setTimeout(handleFadeOut, 0);
          }, 3000);
        }, 2000);
      } else if (startIndex + chunkSize < totalImages) {
        // Load next chunk
        preloadChunk(startIndex + chunkSize, chunkSize);
      }
    };

    // Start preloading in chunks of 3
    preloadChunk(0, 3);
  }, []);

  const handleFadeOut = () => {
    setOpacity(0);
    setTimeout(() => {
      onLoadComplete();
    }, 1000);
  };

  return (
    <div
      className="flex items-center justify-center h-full"
      style={{
        opacity,
        transition: "opacity 1s ease-out",
      }}
    >
      <div
        className={cn(
          "w-80 h-80 relative",
          // Initial state - positioned at bottom and invisible
          "translate-y-full opacity-0",
          // Stage 1: Entrance animation
          animationStage >= 1 &&
            "transition-all duration-2000 ease-out translate-y-0 opacity-100",
          // Stage 2: Rotation animation
          animationStage >= 2 &&
            "transition-transform duration-[3000ms] rotate-y-360",
          // Stage 3: Gentle float animation
          animationStage >= 3 && "animate-gentle-float"
        )}
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src="/images/logo/Latest-Logo.png"
          alt="Mouth2Mouth Logo"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 80vw, 40vw"
          priority
        />
      </div>
    </div>
  );
}
