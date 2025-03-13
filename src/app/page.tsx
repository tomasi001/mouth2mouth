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

export default function Home() {
  const [isMailingListOpen, setIsMailingListOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="bg-[url('/backgrounds/landing.png')] bg-cover bg-center h-screen absolute inset-0 z-0" />

      {/* Layered overlay image */}
      <div className="bg-[url('/backgrounds/landing_layer_2.png')] bg-cover bg-center h-screen absolute inset-0 z-10" />

      {/* Navigation menu on the right */}
      <div className="absolute top-20 right-10 z-20 flex flex-col items-end space-y-4">
        <div className="flex flex-col items-end">
          <a
            href="/previous-work"
            className="text-black uppercase font-medium hover:underline transition-all text-[22px] font-sailors"
            style={{ fontFamily: "var(--font-sailors)" }}
          >
            Previous Work
          </a>

          <a
            href="/about"
            className="text-black uppercase font-medium hover:underline transition-all text-[22px] font-sailors"
            style={{ fontFamily: "var(--font-sailors)" }}
          >
            About Us
          </a>
        </div>

        <Dialog open={isMailingListOpen} onOpenChange={setIsMailingListOpen}>
          <DialogTrigger asChild>
            <button
              className="px-4 py-2 rounded-sm border-2 border-black bg-transparent text-black uppercase font-medium hover:bg-black/5 transition-all text-[18px]"
              style={{ fontFamily: "var(--font-sailors)" }}
            >
              Mailing List Sign Up
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Sign up for our mailing list</DialogTitle>
              <DialogDescription>
                Stay updated with our latest news and announcements.
              </DialogDescription>
            </DialogHeader>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Subscribe
                </Button>
              </form>
            ) : (
              <div className="py-6 text-center">
                <p className="text-green-600 font-medium">
                  Thank you for subscribing!
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  We&apos;ll send updates to {email}
                </p>
                <Button
                  className="mt-4"
                  variant="outline"
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
  );
}
