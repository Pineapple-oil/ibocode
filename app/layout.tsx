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
  title: 'Ibocode | Barcode Scanners, Thermal Printers & POS Solutions',
  description: 'Ibocode (Guangzhou Ibocode Electronic Technology Co., Ltd.) manufactures barcode scanners, thermal printers, cash drawers, and POS machines with 10+ years of factory-direct OEM/ODM experience.',
  icons: {
    icon: '/images/ibocode-mark.png',
    shortcut: '/images/ibocode-mark.png',
    apple: '/images/ibocode-mark.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${fraunces.variable} font-sans bg-paper text-ink`}>
        <NextTopLoader
          color="#244683"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #244683,0 0 5px #244683"
        />
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
