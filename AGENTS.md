# AGENTS.md

A Next.js 16 + TypeScript + Tailwind v4 starter with next-intl (en/es) and
next-themes wired up. It is a starter, not an app: `src/app/page.tsx` renders
one heading and one paragraph. `src/hooks/`, `src/lib/`, and `src/types/` are
empty placeholders.

## Rules

- Minimal changes only. Do not refactor outside the task scope.
- Show only modified method or block. Not full file rewrite.
- No new packages unless explicitly requested.
- No comments or docstrings unless asked.

## Caveman Mode

- Short answers
- No filler words

## Commands

`npm run dev`, `npm run build`, `npm run lint`, `npm run format`.

## Forbidden

- Never install, add, upgrade, or remove any package
- Never commit, push, or open a PR.
- Big refactors without ask.
- Framework change
- Unneeded boilerplate

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
