import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('home');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function Home() {
  const t = await getTranslations('home');

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)]">
      <main className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          {t('title')}
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
          {t('description')}
        </p>
      </main>
    </div>
  );
}
