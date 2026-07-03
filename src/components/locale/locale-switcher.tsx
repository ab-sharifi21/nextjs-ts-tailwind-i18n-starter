'use client';

import { useLocale } from 'next-intl';
import { useLocaleState } from './locale-provider';

const labels: Record<string, string> = {
  en: 'EN',
  es: 'ES',
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const { setLocale } = useLocaleState();

  return (
    <div className="flex items-center gap-1">
      {['en', 'es'].map((loc) => (
        <button
          key={loc}
          onClick={() => setLocale(loc)}
          disabled={locale === loc}
          className="rounded px-1.5 py-0.5 text-xs font-medium text-zinc-500 transition-colors hover:cursor-pointer hover:text-zinc-900 disabled:text-zinc-400 dark:text-zinc-400 dark:hover:text-zinc-100 dark:disabled:text-zinc-600"
        >
          {labels[loc]}
        </button>
      ))}
    </div>
  );
}
