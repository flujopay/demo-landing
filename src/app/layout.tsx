import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { AuthHydrator } from "@/modules/core/lib/providers/auth-hydrator";
import { QueryProvider } from "@/modules/core/lib/providers/query-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App",
  description: "Generado con dev3ch/nextjs-template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <QueryProvider>
          <AuthHydrator>{children}</AuthHydrator>
        </QueryProvider>
      </body>
    </html>
  );
}
