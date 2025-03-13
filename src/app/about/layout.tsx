import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | MOUTH2MOUTH",
  description: "MOUTH2MOUTH is a music and design collective founded in 2017.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
