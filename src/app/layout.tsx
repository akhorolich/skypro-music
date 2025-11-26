import { Montserrat } from 'next/font/google';
import ReduxProvider from './providers/reduxProvider';
import './globals.css';

export const metadata = {
  title: 'Skypro Music',
  description: 'Skypro Music App',
};

const montserrat = Montserrat({ subsets: ['cyrillic'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={montserrat.className}>
      <ReduxProvider>
        <body>{children}</body>
      </ReduxProvider>
    </html>
  );
}
