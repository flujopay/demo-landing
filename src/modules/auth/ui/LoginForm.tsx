"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { useLogin } from "@/modules/auth/lib/hooks/use-login";
import { loginSchema, type LoginFormValues } from "@/modules/auth/lib/validators/login.schema";
import { Button } from "@/modules/core/ui/Button";
import { Input } from "@/modules/core/ui/Input";

export function LoginForm() {
  const { mutate: login, isPending, error } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    login(data);
  };

  return (
    <div className="mx-auto w-full max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">Iniciar sesión</h1>
        <p className="text-sm text-gray-500">Ingresa tu email y contraseña para continuar</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="tu@email.com"
          autoComplete="email"
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          id="password"
          type="password"
          label="Contraseña"
          placeholder="••••••••"
          autoComplete="current-password"
          error={errors.password?.message}
          {...register("password")}
        />

        {error ? (
          <p className="text-sm text-red-500">Email o contraseña incorrectos</p>
        ) : null}

        <Button type="submit" isLoading={isPending} className="w-full">
          Ingresar
        </Button>
      </form>

      <p className="text-center text-sm text-gray-500">
        ¿No tienes cuenta?{" "}
        <Link href="/register" className="font-medium text-gray-900 hover:underline">
          Regístrate
        </Link>
      </p>
    </div>
  );
}
