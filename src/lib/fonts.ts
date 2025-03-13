import localFont from "next/font/local";

// Load the Sailors font
export const sailors = localFont({
  src: [
    {
      path: "../../public/fonts/sailors-condensed.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sailors",
});
