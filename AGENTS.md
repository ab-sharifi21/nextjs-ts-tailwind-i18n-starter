# AGENTS.md

A Next.js 16 + TypeScript + Tailwind v4 starter with next-intl (en/es) and
next-themes wired up. It is a starter, not an app: `src/app/page.tsx` renders
one heading and one paragraph. `src/hooks/`, `src/lib/`, and `src/types/` are
empty placeholders.

Requires Node >= 20.9.0 (the README's 18.18 is wrong).

## Commands

`npm run dev`, `npm run build`, `npm run lint`, `npm run format`.

There is no typecheck script and no tests — `npm run build` is the only typecheck.
Run it before calling work done. The pre-commit hook only runs lint-staged.

## Forbidden

**Never install, add, upgrade, or remove any package.** write class strings directly. Don't add config files, a test framework, or new
npm scripts either. If something seems to need a library, ask first.

**Never hardcode user-facing strings.** Everything visible, including
`aria-label`s, comes from `messages/*.json`.

## Gotchas

- Adding a locale means editing **three** places — `i18n/routing.ts`,
  `locale-switcher.tsx` (labels _and_ the hardcoded array), and `app/layout.tsx`.
  Miss one and it fails silently.
- The `NEXT_LOCALE` cookie is the only locale persistence. The old `localStorage`
  write was removed as dead code — don't reintroduce it.
- `NEXT_LOCALE` is interpolated into an `import()` path unvalidated — a bad value
  crashes instead of falling back to English.
- Geist fonts are loaded but overridden by a hardcoded `Arial` in `globals.css`.
- Imports are relative throughout; the `@/*` alias in tsconfig is unused.
- TypeScript is strict but `noUncheckedIndexedAccess` is off, so misspelled
  locale/message keys compile and fail at runtime.
