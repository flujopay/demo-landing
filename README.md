# dev3ch / nextjs-template

Template oficial de dev3ch para proyectos Next.js. Repositorio GitHub Template que extiende `create-next-app` con la estructura de módulos, auth completo y herramientas del equipo ya configuradas.

## Uso

```bash
npx create-next-app@latest mi-proyecto --example "https://github.com/dev3ch/nextjs-template"
```

> `create-next-app@latest` siempre instala la versión más reciente de Next.js. El template define la estructura y dependencias extra.

## Estructura

```
src/
├── app/
│   ├── layout.tsx              # Root layout con Providers
│   ├── page.tsx                # Home (redirect a /dashboard si auth)
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   └── (dashboard)/
│       └── dashboard/page.tsx
└── modules/
    ├── core/                           # Módulo compartido — sin dominio de negocio
    │   ├── lib/
    │   │   ├── services/
    │   │   │   └── http-client.ts      # Axios instance + interceptors
    │   │   ├── store/
    │   │   │   └── auth.store.ts       # Zustand — token + user
    │   │   └── providers/
    │   │       └── query-provider.tsx  # TanStack Query Provider
    │   └── ui/
    │       └── (componentes genéricos reutilizables)
    └── auth/                           # Módulo de negocio
        ├── lib/
        │   ├── services/auth.service.ts
        │   ├── hooks/use-login.ts
        │   ├── validators/login.schema.ts   # Zod
        │   └── types/auth.types.ts
        └── ui/
            ├── LoginForm.tsx
            └── RegisterForm.tsx
```

> `core` es un módulo dentro de `modules/`, no una carpeta fuera. Cualquier nuevo dominio (invoice, user, dashboard) va al mismo nivel que `auth` y `core`.

## Qué viene preconfigurado

### TypeScript

- `"strict": true`, sin `any`

### UI

- Tailwind CSS + `clsx` + `tailwind-merge`
- `next/font` con Inter preconfigurado

### HTTP y estado

- `axios` con `httpClient` e interceptors de auth (JWT) y errores
- `zustand` — store de auth (token, user, logout)
- `@tanstack/react-query` con `QueryProvider` y devtools

### Formularios y validación

- `react-hook-form` + `zod` — ejemplo funcional en LoginForm

### Auth completo listo

- `LoginForm` funcional con validación Zod
- `auth.service.ts` — `login()`, `register()`, `refreshToken()`
- `useLogin` hook con `useMutation` de TanStack Query
- Interceptor que refresca el token automáticamente en 401
- `logout()` que limpia store y redirige
- `middleware.ts` con auth guard (redirect a `/login` si no hay token)

### Tooling

- ESLint + Prettier + `lint-staged` + `husky`
- `.env.local.example` con las variables necesarias

## Mantenerse actualizado

```bash
npx npm-check-updates -u   # Revisar versiones disponibles
npm install
npm run build              # Verificar que compila
git commit -m "chore: update dependencies"
```

## Convención de módulos

| Carpeta              | Rol                                         |
| -------------------- | ------------------------------------------- |
| `modules/core/`      | Shared: http, store, providers, UI genérica |
| `modules/auth/`      | Dominio: auth completo incluido             |
| `modules/<dominio>/` | Nuevos dominios al mismo nivel              |

Cada módulo de dominio sigue la estructura `lib/` (services, hooks, validators, types) + `ui/` (componentes).
