# Next.js + TypeScript + Tailwind CSS + i18n Starter

A production-ready starter for small-to-medium Next.js projects with internationalization, dark/light mode, and code quality tooling.

## Stack

| Layer      | Choice                                 |
| ---------- | -------------------------------------- |
| Framework  | Next.js 16 (App Router)                |
| Language   | TypeScript (strict)                    |
| Styling    | Tailwind CSS v4                        |
| i18n       | next-intl                              |
| Theme      | next-themes                            |
| Linting    | ESLint 9 + eslint-config-next          |
| Formatting | Prettier + prettier-plugin-tailwindcss |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command          | Description          |
| ---------------- | -------------------- |
| `npm run dev`    | Start dev server     |
| `npm run build`  | Production build     |
| `npm run lint`   | Run ESLint           |
| `npm run format` | Format with Prettier |

## Features

### Internationalization

- Locale-aware routing via `next-intl` middleware
- Supports **en**, **ar**, **fr** with automatic detection
- RTL support for Arabic

### Dark / Light Mode

- Theme toggle via `next-themes` with `class` strategy
- Persists user preference; respects system preference by default
- Tailwind v4 dark variant (`@custom-variant dark`)

### Code Quality

- ESLint 9 with `eslint-config-next` for core-web-vitals + TypeScript rules
- Prettier with `prettier-plugin-tailwindcss` for consistent class ordering
- Format on save via VS Code settings

> 🚧 Setup in progress — more features coming soon.
