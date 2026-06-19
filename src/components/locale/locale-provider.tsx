'use client';

import { createContext, useCallback, useContext, useState } from 'react';
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

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value};path=/;max-age=31536000;SameSite=Lax`;
}

export function LocaleProvider({
  locale: initialLocale,
  messages,
  children,
}: {
  locale: string;
  messages: Messages;
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState(initialLocale);

  const setLocale = useCallback((nextLocale: string) => {
    setLocaleState(nextLocale);
    localStorage.setItem('locale', nextLocale);
    setCookie('NEXT_LOCALE', nextLocale);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider locale={locale} messages={messages[locale]}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}
