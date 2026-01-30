import type { Metadata } from 'next';
import { Bricolage_Grotesque, Fraunces } from 'next/font/google';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';
import { Providers } from '../components/Providers';
import { Layout } from '../components/Layout';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bricolage',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-fraunces',
});

export const metadata: Metadata = {
  title: 'COSUN | Global Electronic Manufacturing',
  description: 'Global electronic manufacturing partner for automotive accessories and OEM/ODM programs.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${fraunces.variable} font-sans bg-paper text-ink`}>
        <NextTopLoader
          color="#F3E32F"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #F3E32F,0 0 5px #F3E32F"
        />
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
