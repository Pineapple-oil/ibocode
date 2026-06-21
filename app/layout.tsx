import type { Metadata } from 'next';
import { Bricolage_Grotesque, Fraunces } from 'next/font/google';
import Script from 'next/script';
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
      <head>
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function() {
              var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/69c9e17fecf7021c3668053a/1jku9hnc7';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
      </head>
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
