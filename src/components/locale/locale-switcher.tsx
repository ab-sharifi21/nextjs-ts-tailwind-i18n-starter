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

  function switchLocale(nextLocale: string) {
    localStorage.setItem('locale', nextLocale);
    setLocale(nextLocale);
  }

  return (
    <div className="flex items-center gap-1">
      {['en', 'es'].map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          disabled={locale === loc}
          className="rounded px-1.5 py-0.5 text-xs font-medium transition-colors disabled:cursor-not-allowed disabled:text-zinc-400 dark:disabled:text-zinc-600 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          {labels[loc]}
        </button>
      ))}
    </div>
  );
}
