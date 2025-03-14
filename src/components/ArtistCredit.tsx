"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function ArtistCredit() {
  const pathname = usePathname();
  const showFooter = pathname === "/" || pathname === "/about";

  if (!showFooter) return null;

  return (
    <>
      {/* Desktop Footer (hidden on mobile) */}
      <footer className="fixed bottom-0 left-0 right-0 p-4 hidden md:block">
        <div className="w-full flex justify-end">
          <Link
            href="https://www.instagram.com/_frangry_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[20px] text-[#bac8c4] bg-white/10 backdrop-blur-lg shadow-xl transition-opacity duration-200 font-sailors bg-green-500 cursor-pointer px-2"
          >
            art by @frangry
          </Link>
        </div>
      </footer>

      {/* Mobile Footer (hidden on desktop) */}
      <footer className="fixed top-0 left-0 right-0 p-2 md:hidden z-50">
        <div className="w-full flex justify-end">
          <Link
            href="https://www.instagram.com/_frangry_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[18px] text-[#bac8c4] bg-white/10 backdrop-blur-lg shadow-xl transition-opacity duration-200 font-sailors bg-green-500 cursor-pointer px-2"
          >
            art by @frangry
          </Link>
        </div>
      </footer>
    </>
  );
}
