"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="bg-[url('/images/fran/i_fell_asleep_against_the_window_of_the_cornershop.png')] bg-cover lg:bg-contain bg-center h-screen absolute inset-0 z-0" />

      {/* Layered overlay image */}
      <div className="hidden lg:block bg-[url('/backgrounds/landing_layer_2.png')] bg-cover bg-center h-screen absolute inset-0 z-10" />

      {/* Mobile Logo and Text - ONLY visible on mobile */}
      <div className="md:hidden absolute top-10 left-0 right-0 flex flex-col items-center z-20">
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
          className="text-[32px] text-black uppercase font-sailors text-center"
          style={{ fontFamily: "var(--font-sailors)" }}
        >
          Mouth2Mouth
        </h1>
        <p
          className="text-[16px] text-black font-sailors text-center mt-1"
          style={{ fontFamily: "var(--font-sailors)" }}
        >
          Cape Town, South Africa, Est. 2017
        </p>
      </div>
    </div>
  );
}
