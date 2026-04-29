"use client";

import Image from "next/image";
import { AssetImage } from "@/lib/assets/image";
import { useHome } from "../lib/hooks/use-home";

export function HomePage() {
  useHome();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-8 px-4 text-center">
        <Image src={AssetImage.logoBlack} alt="Sena" width={160} height={48} priority unoptimized />

        <div className="flex flex-col items-center gap-3">
          <span className="text-brand-secondary text-sm font-medium tracking-widest uppercase">
            Próximamente
          </span>
          <h1 className="font-canaro text-brand-primary-dark text-4xl leading-tight font-bold md:text-6xl">
            Demo en construcción
          </h1>
          <p className="font-adobe max-w-md text-lg text-gray-500">
            Estamos preparando algo increíble. Vuelve pronto.
          </p>
        </div>

        <div className="bg-brand-secondary h-1 w-12 rounded-full" />
      </div>
    </main>
  );
}
