import '@styles/globals.css';
import { Outfit } from 'next/font/google';

import Toasts from '@components/global/Toasts/Toasts';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import Providers from '@components/layout/Providers';

const font = Outfit({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'latin-ext'],
});

export const metadata = {
  title: 'Open Dev Net',
  description: 'The Open Developer Network collaboration platform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <Providers>
        <body className={font.className}>
          <Toasts />

          <div className="relative h-14"></div>
          <div className="flex">
            <Header />

            <div className="flex-grow">
              <div className="min-h-[80vh]">{children}</div>
              <Footer />
            </div>
          </div>
        </body>
      </Providers>
    </html>
  );
}
