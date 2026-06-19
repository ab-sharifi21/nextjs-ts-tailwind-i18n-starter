import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '../components/theme/theme-provider';
import { Header } from '../components/layout/header';
import { LocaleProvider } from '../components/locale/locale-provider';
import enMessages from '../../messages/en.json';
import esMessages from '../../messages/es.json';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <LocaleProvider messages={{ en: enMessages, es: esMessages }}>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
