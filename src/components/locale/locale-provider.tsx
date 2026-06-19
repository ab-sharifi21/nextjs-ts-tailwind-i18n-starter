'use client';

import { createContext, useCallback, useContext, useSyncExternalStore } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import type { AbstractIntlMessages } from 'next-intl';

type Messages = Record<string, AbstractIntlMessages>;

type LocaleContextValue = {
  locale: string;
  setLocale: (locale: string) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function useLocaleState() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocaleState must be used within LocaleProvider');
  return ctx;
}

function subscribeToStorage(onStoreChange: () => void) {
  window.addEventListener('storage', onStoreChange);
  return () => window.removeEventListener('storage', onStoreChange);
}

function readLocale() {
  return localStorage.getItem('locale') ?? 'en';
}

function getServerSnapshot() {
  return 'en';
}

export function LocaleProvider({
  messages,
  children,
}: {
  messages: Messages;
  children: React.ReactNode;
}) {
  const locale = useSyncExternalStore(subscribeToStorage, readLocale, getServerSnapshot);

  const setLocale = useCallback((nextLocale: string) => {
    localStorage.setItem('locale', nextLocale);
    window.dispatchEvent(new Event('storage'));
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider locale={locale} messages={messages[locale]}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}
