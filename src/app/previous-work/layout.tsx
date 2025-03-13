import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Previous Work | MOUTH2MOUTH",
  description: "Explore our previous events and projects.",
};

export default function PreviousWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
