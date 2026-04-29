"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { useRegister } from "@/modules/auth/lib/hooks/use-register";
import {
  registerSchema,
  type RegisterFormValues,
} from "@/modules/auth/lib/validators/register.schema";
import { Button } from "@/modules/core/ui/Button";
import { Input } from "@/modules/core/ui/Input";

export function RegisterForm() {
  const { mutate: register, isPending, error } = useRegister();

  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = ({ passwordConfirm: _passwordConfirm, ...data }: RegisterFormValues) => {
    register(data);
  };

  return (
    <div className="mx-auto w-full max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">Crear cuenta</h1>
        <p className="text-sm text-gray-500">Completa los datos para registrarte</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Input
            id="name"
            label="Nombre"
            placeholder="Juan"
            error={errors.name?.message}
            {...registerField("name")}
          />
          <Input
            id="surname"
            label="Apellido"
            placeholder="Pérez"
            error={errors.surname?.message}
            {...registerField("surname")}
          />
        </div>
        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="tu@email.com"
          autoComplete="email"
          error={errors.email?.message}
          {...registerField("email")}
        />
        <Input
          id="password"
          type="password"
          label="Contraseña"
          placeholder="••••••••"
          error={errors.password?.message}
          {...registerField("password")}
        />
        <Input
          id="passwordConfirm"
          type="password"
          label="Confirmar contraseña"
          placeholder="••••••••"
          error={errors.passwordConfirm?.message}
          {...registerField("passwordConfirm")}
        />

        {error ? (
          <p className="text-sm text-red-500">Ocurrió un error. Intenta nuevamente.</p>
        ) : null}

        <Button type="submit" isLoading={isPending} className="w-full">
          Crear cuenta
        </Button>
      </form>

      <p className="text-center text-sm text-gray-500">
        ¿Ya tienes cuenta?{" "}
        <Link href="/login" className="font-medium text-gray-900 hover:underline">
          Inicia sesión
        </Link>
      </p>
    </div>
  );
}
