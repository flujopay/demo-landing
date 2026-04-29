import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_ROUTES = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // La cookie `has-session` la setea el store de Zustand al hacer login (client-side).
  // El middleware no puede leer localStorage porque corre en Edge runtime.
  const hasSession = request.cookies.get("has-session")?.value === "true";
  const isPublic = PUBLIC_ROUTES.some((route) => pathname.startsWith(route));

  // Si entra a /login o /register con sesión activa → mandarlo al dashboard
  if (isPublic && hasSession) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Si entra a ruta privada sin sesión → login
  if (!isPublic && !hasSession) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
