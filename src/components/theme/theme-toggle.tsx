'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { Monitor, Moon, Sun } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const options = ['light', 'system', 'dark'] as const;

type Option = (typeof options)[number];

const subscribe = () => () => {};

const icons: Record<Option, LucideIcon> = {
  light: Sun,
  system: Monitor,
  dark: Moon,
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const index = mounted
    ? Math.max(options.indexOf((theme ?? 'system') as Option), 0)
    : 0;

  return (
    <div
      role="group"
      aria-label="Theme"
      className="relative flex items-center rounded-full border border-zinc-200 bg-zinc-100 p-0.5 dark:border-zinc-800 dark:bg-zinc-900"
    >
      {mounted && (
        <span
          aria-hidden="true"
          className="absolute top-0.5 left-0.5 h-7 w-7 rounded-full bg-white shadow-sm ring-1 ring-zinc-900/5 dark:bg-zinc-700 dark:ring-white/10"
          style={{ transform: `translateX(${index * 100}%)` }}
        />
      )}
      {options.map((option, i) => {
        const Icon = icons[option];

        return (
          <button
            key={option}
            type="button"
            onClick={() => setTheme(option)}
            aria-label={option}
            aria-pressed={mounted ? theme === option : undefined}
            className={`relative flex h-7 w-7 items-center justify-center rounded-full focus-visible:ring-2 focus-visible:ring-zinc-900/20 focus-visible:outline-none dark:focus-visible:ring-zinc-100/30 ${
              index === i
                ? 'text-zinc-900 dark:text-zinc-50'
                : 'text-zinc-500 hover:cursor-pointer hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
            }`}
          >
            <Icon className="size-3.5" />
          </button>
        );
      })}
    </div>
  );
}
