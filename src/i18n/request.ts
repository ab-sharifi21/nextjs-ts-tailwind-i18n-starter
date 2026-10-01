import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import { routing } from './routing';

export default getRequestConfig(async () => {
  const store = await cookies();
  const requested = store.get('NEXT_LOCALE')?.value;
  const locale =
    routing.locales.find((candidate) => candidate === requested) ??
    routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
