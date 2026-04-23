"use client";

import { useEffect } from "react";

import { useAuthStore } from "@/modules/core/lib/store/auth.store";

// Rehidrata el store de Zustand en el cliente.
// skipHydration=true evita el mismatch SSR; esto ejecuta la hidratación manualmente tras montar.
export function AuthHydrator({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    void useAuthStore.persist.rehydrate();
  }, []);

  return <>{children}</>;
}
