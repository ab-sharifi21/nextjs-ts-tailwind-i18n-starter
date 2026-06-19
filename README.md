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

## Requirements

- **Node.js** >= 18.18
- **npm**, **pnpm**, or **yarn**

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

## Project structure

```
src/
├── app/              # Next.js App Router pages & layout
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/       # Header, footer, etc.
│   ├── locale/       # Locale provider & switcher
│   └── theme/        # Theme provider & toggle
├── i18n/
│   ├── request.ts    # next-intl server config (reads locale from cookie)
│   └── routing.ts    # Locale definitions & routing config
messages/
├── en.json           # English translations
└── es.json           # Spanish translations
```

## Features

### Internationalization

- Locale selection via `next-intl` with cookie + localStorage persistence
- Supports **en**, **es**
- No URL prefix — locale is stored in a `NEXT_LOCALE` cookie and synced to `localStorage`

### Adding a new locale

1. Create `messages/{code}.json` with the same key structure as `en.json`
2. Add the locale code to the `locales` array in `src/i18n/routing.ts`
3. Add the locale label to `labels` in `src/components/locale/locale-switcher.tsx`
4. Import the new messages file in `src/app/layout.tsx` and pass it to `LocaleProvider`

### How locale persistence works

- **Client-side:** on switch, locale is saved to `localStorage` and a `NEXT_LOCALE` cookie
- **Server-side:** `src/i18n/request.ts` reads the `NEXT_LOCALE` cookie so all server components render in the correct language
- **Hydration:** the initial locale from the cookie is passed as a prop to `LocaleProvider`, preventing hydration mismatches

### Dark / Light Mode

- Theme toggle via `next-themes` with `class` strategy
- Persists user preference; respects system preference by default
- Tailwind v4 dark variant (`@custom-variant dark`)

### Code Quality

- ESLint 9 with `eslint-config-next` for core-web-vitals + TypeScript rules
- Prettier with `prettier-plugin-tailwindcss` for consistent class ordering
- Format on save via VS Code settings
