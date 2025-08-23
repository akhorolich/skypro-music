import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import '@/app/styles/globals.css';

const montserrat = Montserrat({ subsets: ['cyrillic'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  );
}
