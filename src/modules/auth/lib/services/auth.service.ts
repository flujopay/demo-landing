import type {
  LoginRequest,
  RefreshTokenResponse,
  RegisterRequest,
  TokenResponse,
  User,
} from "@/modules/auth/lib/types/auth.types";
import { httpClient } from "@/modules/core/lib/services/http-client";

export const authService = {
  login: async (data: LoginRequest): Promise<TokenResponse> => {
    const response = await httpClient.post<TokenResponse>("/auth/token/", data);
    return response.data;
  },

  register: async (data: RegisterRequest): Promise<User> => {
    const response = await httpClient.post<User>("/users/register/", data);
    return response.data;
  },

  refreshToken: async (refresh: string): Promise<RefreshTokenResponse> => {
    const response = await httpClient.post<RefreshTokenResponse>("/auth/token/refresh/", {
      refresh,
    });
    return response.data;
  },

  getMe: async (): Promise<User> => {
    const response = await httpClient.get<User>("/users/me/");
    return response.data;
  },
};
