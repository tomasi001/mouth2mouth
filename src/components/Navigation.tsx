"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Navigation() {
  const [isMailingListOpen, setIsMailingListOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/mailing-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to sign up");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error signing up for mailing list:", error);
      // You might want to show an error message to the user here
    } finally {
      setIsLoading(false);
    }
  };

  // Function to get navigation links based on current path (for mobile only)
  const getNavigationLinks = () => {
    const links = [];

    // Always show Home if we're not on the home page
    if (pathname !== "/") {
      links.push({
        href: "/",
        label: "Home",
      });
    }

    // Show Previous Works only if we're not on that page
    if (pathname !== "/previous-work") {
      links.push({
        href: "/previous-work",
        label: "Previous Works",
      });
    }

    // Show About Us only if we're not on that page
    if (pathname !== "/about") {
      links.push({
        href: "/about",
        label: "About Us",
      });
    }

    return links;
  };

  const navigationLinks = getNavigationLinks();
  const isHomePage = pathname === "/";

  return (
    <>
      {/* Desktop Navigation - Only shown on home page */}
      {isHomePage && (
        <div className="hidden md:flex absolute top-20 right-10 z-20 flex-col items-end space-y-4">
          <div className="flex flex-col items-end">
            <Link
              href="/previous-work"
              className="text-[#bac8c4] uppercase font-medium hover:underline hover:text-[#bac8c4]/80 transition-all text-[22px] font-sailors"
              style={{ fontFamily: "var(--font-sailors)" }}
            >
              Previous Works
            </Link>
            <Link
              href="/about"
              className="text-[#bac8c4] uppercase font-medium hover:underline hover:text-[#bac8c4]/80 transition-all text-[22px] font-sailors"
              style={{ fontFamily: "var(--font-sailors)" }}
            >
              About Us
            </Link>
          </div>

          <Dialog open={isMailingListOpen} onOpenChange={setIsMailingListOpen}>
            <DialogTrigger asChild>
              <button
                className="px-4 py-2 rounded-sm border-2 border-white bg-transparent text-white uppercase font-medium hover:bg-[#bac8c4]/5 transition-all text-[18px]"
                style={{ fontFamily: "var(--font-sailors)" }}
              >
                Mailing List Sign Up
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">
              <DialogHeader>
                <DialogTitle className="text-[#bac8c4] text-2xl">
                  Sign up for our mailing list
                </DialogTitle>
                <DialogDescription className="text-[#bac8c4]/80 text-base">
                  Stay updated with our latest news and announcements.
                </DialogDescription>
              </DialogHeader>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-[#bac8c4] mt-2"
                    >
                      Email address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="text-[#bac8c4] bg-white/5 border-white/20 focus:border-[#bac8c4]/50 transition-all"
                      disabled={isLoading}
                    />
                  </div>
                  <Button
                    type="submit"
                    className={`w-full border-2 transition-all ${
                      isLoading
                        ? "bg-[#bac8c4]/10 border-[#bac8c4]/30 text-[#bac8c4]/70"
                        : "bg-transparent hover:bg-[#bac8c4]/10 border-[#bac8c4] text-[#bac8c4]"
                    }`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Signing up...</span>
                      </div>
                    ) : (
                      "Subscribe"
                    )}
                  </Button>
                </form>
              ) : (
                <div className="py-6 text-center">
                  <p className="text-[#bac8c4] font-medium text-xl">
                    Thank you for subscribing!
                  </p>
                  <p className="mt-2 text-[#bac8c4]/80">
                    We&apos;ll send updates to {email}
                  </p>
                  <Button
                    className="mt-6 border-2 bg-transparent hover:bg-[#bac8c4]/10 text-[#bac8c4] border-[#bac8c4]"
                    onClick={() => {
                      setIsSubmitted(false);
                      setEmail("");
                      setIsMailingListOpen(false);
                    }}
                  >
                    Close
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      )}

      {/* Desktop Back Arrow - Shown on all pages except home */}
      {!isHomePage && (
        <div className="hidden md:flex absolute top-5 left-5 z-20">
          <Link
            href="/"
            className="text-[#bac8c4] hover:text-[#bac8c4]/80 transition-colors flex items-center gap-2 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-1 transition-transform"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
          </Link>
        </div>
      )}

      {/* Mobile Navigation - visible only on mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-30 border-t border-black/10">
        <div className="flex justify-around items-center py-4">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-black uppercase font-medium text-[16px] font-sailors"
              style={{ fontFamily: "var(--font-sailors)" }}
            >
              {link.label}
            </Link>
          ))}
          <Dialog open={isMailingListOpen} onOpenChange={setIsMailingListOpen}>
            <DialogTrigger asChild>
              <button
                className="px-3 py-1 rounded-sm border-2 border-black bg-transparent text-black uppercase font-medium text-[14px]"
                style={{ fontFamily: "var(--font-sailors)" }}
              >
                Sign Up
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">
              <DialogHeader>
                <DialogTitle className="text-[#bac8c4] text-2xl">
                  Sign up for our mailing list
                </DialogTitle>
                <DialogDescription className="text-[#bac8c4]/80 text-base">
                  Stay updated with our latest news and announcements.
                </DialogDescription>
              </DialogHeader>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="email-mobile"
                      className="text-sm font-medium text-[#bac8c4]"
                    >
                      Email address
                    </label>
                    <Input
                      id="email-mobile"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="text-[#bac8c4] bg-white/5 border-white/20 focus:border-[#bac8c4]/50 transition-all mt-2"
                      disabled={isLoading}
                    />
                  </div>
                  <Button
                    type="submit"
                    className={`w-full border-2 transition-all ${
                      isLoading
                        ? "bg-[#bac8c4]/10 border-[#bac8c4]/30 text-[#bac8c4]/70"
                        : "bg-transparent hover:bg-[#bac8c4]/10 border-[#bac8c4] text-[#bac8c4]"
                    }`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Signing up...</span>
                      </div>
                    ) : (
                      "Subscribe"
                    )}
                  </Button>
                </form>
              ) : (
                <div className="py-6 text-center">
                  <p className="text-[#bac8c4] font-medium text-xl">
                    Thank you for subscribing!
                  </p>
                  <p className="mt-2 text-[#bac8c4]/80">
                    We&apos;ll send updates to {email}
                  </p>
                  <Button
                    className="mt-6 border-2 bg-transparent hover:bg-[#bac8c4]/10 text-[#bac8c4] border-[#bac8c4]"
                    onClick={() => {
                      setIsSubmitted(false);
                      setEmail("");
                      setIsMailingListOpen(false);
                    }}
                  >
                    Close
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
