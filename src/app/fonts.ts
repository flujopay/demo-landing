import localFont from "next/font/local";

export const canaroFont = localFont({
  src: [
    {
      path: "../../public/fonts/FontsFree-Net-Canaro-W00-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-canaro",
  display: "swap",
});

export const adobeCleanFont = localFont({
  src: [
    {
      path: "../../public/fonts/AdobeClean-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/AdobeClean-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/AdobeClean-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/AdobeClean-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-adobe",
  display: "swap",
});

export const caslonFont = localFont({
  src: [
    {
      path: "../../public/fonts/caslon-graphique.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-caslon",
  display: "swap",
});
