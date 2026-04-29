import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.string().email("Email inválido"),
    name: z.string().min(1, "El nombre es obligatorio"),
    surname: z.string().min(1, "El apellido es obligatorio"),
    password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Las contraseñas no coinciden",
    path: ["passwordConfirm"],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
