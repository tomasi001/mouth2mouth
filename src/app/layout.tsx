import { sailors } from "@/lib/fonts";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MOUTH2MOUTH | Cape Town, South Africa",
  description: "MOUTH2MOUTH - Established 2017 in Cape Town, South Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sailors.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navigation />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
