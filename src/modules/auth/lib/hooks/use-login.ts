"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { authService } from "@/modules/auth/lib/services/auth.service";
import type { LoginRequest } from "@/modules/auth/lib/types/auth.types";
import { useAuthStore } from "@/modules/core/lib/store/auth.store";

export function useLogin() {
  const router = useRouter();
  const { setTokens } = useAuthStore();

  return useMutation({
    mutationFn: (data: LoginRequest) => authService.login(data),
    onSuccess: (tokens) => {
      setTokens(tokens.access, tokens.refresh);
      router.push("/dashboard");
    },
  });
}
