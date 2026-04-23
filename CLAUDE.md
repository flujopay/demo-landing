# nextjs-template — Contexto para Claude Code

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript strict
- Tailwind CSS + clsx + tailwind-merge
- Axios (HTTP) + Zustand (estado) + TanStack Query (server state)
- react-hook-form + Zod (formularios y validación)
- Yarn como gestor de paquetes

## Estructura de módulos

```
src/
├── app/                     # Rutas Next.js (App Router)
│   ├── (auth)/              # Rutas públicas: login, register
│   └── (dashboard)/         # Rutas protegidas
└── modules/
    ├── core/                # Shared: sin dominio de negocio
    │   ├── lib/services/    # http-client con interceptors JWT
    │   ├── lib/store/       # auth.store (Zustand)
    │   ├── lib/providers/   # QueryProvider (TanStack)
    │   └── ui/              # Button, Input y componentes genéricos
    └── auth/                # Módulo de autenticación
        ├── lib/services/    # auth.service (login, register, refresh, getMe)
        ├── lib/hooks/       # useLogin, useRegister
        ├── lib/validators/  # login.schema, register.schema (Zod)
        ├── lib/types/       # auth.types
        └── ui/              # LoginForm, RegisterForm
```

## Convenciones clave

- `@/` → alias para `src/`
- Nuevos dominios van en `src/modules/<dominio>/` con la misma estructura de `auth/`
- Nunca usar `any` — TypeScript strict
- Componentes de UI genérica van en `modules/core/ui/`
- El store de Zustand vive en `modules/core/lib/store/`
- El `httpClient` maneja el refresh de token automáticamente en 401

## Comandos frecuentes

```bash
# Desarrollo
yarn dev

# Build
yarn build

# Typecheck
yarn typecheck

# Lint
yarn lint

# Formato
yarn format
```

## Variables de entorno

```bash
cp .env.local.example .env.local
# Editar NEXT_PUBLIC_API_URL con la URL del backend Django
```

## Agregar un nuevo módulo de dominio

```
src/modules/<dominio>/
├── lib/
│   ├── services/<dominio>.service.ts
│   ├── hooks/use-<accion>.ts
│   ├── validators/<dominio>.schema.ts
│   └── types/<dominio>.types.ts
└── ui/
    └── <Componente>.tsx
```
