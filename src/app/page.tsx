import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('home');

  return (
    <div className="flex min-h-screen">
      <main className="flex h-full w-full flex-col p-4">
        <h1 className="text-2xl font-bold">{t('title')}</h1>
        <p>{t('description')}</p>
      </main>
    </div>
  );
}
