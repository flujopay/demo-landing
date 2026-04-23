import { redirect } from "next/navigation";

// La raíz redirige al dashboard; el middleware se encarga de redirigir a /login si no hay sesión
export default function Home() {
  redirect("/dashboard");
}
