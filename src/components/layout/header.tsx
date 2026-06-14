import { ThemeToggle } from '../theme/theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4">
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Next.js Starter
        </span>
        <ThemeToggle />
      </div>
    </header>
  );
}
