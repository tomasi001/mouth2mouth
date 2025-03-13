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
    <div className="relative">
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 1s ease-in",
          visibility: isLoading ? "hidden" : "visible",
        }}
      >
        {children}
      </div>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 50,
          visibility: isLoading ? "visible" : "hidden",
        }}
      >
        <SplashScreen onLoadComplete={() => setIsLoading(false)} />
      </div>
    </div>
  );
}
