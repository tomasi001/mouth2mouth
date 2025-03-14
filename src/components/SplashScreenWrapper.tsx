"use client";

import { useState } from "react";
import { SplashScreen } from "./SplashScreen";

export function SplashScreenWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="relative">{children}</div>
      <div
        className={`fixed inset-0 z-50 bg-black transition-opacity duration-1000 ease-out ${
          isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <SplashScreen onLoadComplete={() => setIsLoading(false)} />
      </div>
    </>
  );
}
