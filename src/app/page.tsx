"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [imagesLoaded, setImagesLoaded] = useState({
    background: false,
    overlay: false,
  });

  // Function to check if all images are loaded
  const allImagesLoaded = () =>
    imagesLoaded.background &&
    (window.innerWidth < 1024 || imagesLoaded.overlay);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out"
        style={{
          opacity: imagesLoaded.background ? 1 : 0,
        }}
      >
        {/* Mobile and medium screens - single image */}
        <div className="lg:hidden">
          <Image
            src="/images/fran/i_fell_asleep_against_the_window_of_the_cornershop.png"
            alt="Background"
            fill
            className="object-cover"
            priority
            onLoadingComplete={() =>
              setImagesLoaded((prev) => ({ ...prev, background: true }))
            }
          />
        </div>

        {/* Large screens - repeating background */}
        <div
          className="hidden lg:block w-full h-full"
          style={{
            backgroundImage:
              "url('/images/fran/i_fell_asleep_against_the_window_of_the_cornershop.png')",
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Layered overlay image */}
      <div
        className="hidden lg:block absolute inset-0 z-10 transition-opacity duration-1000 ease-in-out"
        style={{ opacity: imagesLoaded.overlay ? 1 : 0 }}
      >
        <Image
          src="/backgrounds/landing_layer_2.png"
          alt="Overlay"
          fill
          className="object-cover"
          priority
          onLoadingComplete={() =>
            setImagesLoaded((prev) => ({ ...prev, overlay: true }))
          }
        />
      </div>

      {/* Mobile Logo and Text - ONLY visible on mobile */}
      <div
        className="md:hidden absolute top-10 left-0 right-0 flex flex-col items-center z-20 transition-opacity duration-1000 ease-in-out delay-300"
        style={{ opacity: allImagesLoaded() ? 1 : 0 }}
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
        <h1
          className="text-[32px] text-[#bac8c4] uppercase font-sailors text-center"
          style={{ fontFamily: "var(--font-sailors)" }}
        >
          Mouth2Mouth
        </h1>
        <p
          className="text-[16px] text-[#bac8c4] font-sailors text-center mt-1"
          style={{ fontFamily: "var(--font-sailors)" }}
        >
          Cape Town, South Africa, Est. 2017
        </p>
      </div>
    </div>
  );
}
