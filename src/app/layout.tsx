import type { Metadata } from "next";
import { adobeCleanFont, canaroFont, caslonFont } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sena - Demo Landing",
  description: "Optimiza tu gestión de cobranza y pagos con Sena.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" dir="ltr">
      <body
        className={`${canaroFont.variable} ${adobeCleanFont.variable} ${caslonFont.variable} font-adobe antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
