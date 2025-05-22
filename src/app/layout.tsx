import type { Metadata } from 'next';
import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ErrorBoundary } from '@/components/shared/ErrorBoundary';
import { Separator } from '@/components/ui/separator';
import { PreloadRoutes } from '@/components/PreloadRoutes';
import ClientWrapper from '@/components/ClientWrapper';
import BodyAttributesWrapper from '@/components/BodyAttributesWrapper';

// Dynamically import components
const Navbar = dynamic(() => import('@/components/layout/Navbar'), {
  loading: () => <div className="h-20" />, // Placeholder height
});

const Footer = dynamic(() => import('@/components/layout/Footer'), {
  loading: () => <div className="h-40" />, // Placeholder height
});

// Optimize font loading
const headingFont = Montserrat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-croogla',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const bodyFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-harmonia',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

/* 
// TODO: Replace with actual custom fonts when available
// Configure Croogla 4F Medium font
const croogla = localFont({
  src: '../fonts/Croogla-4F-Medium.woff2',
  variable: '--font-croogla',
  display: 'swap',
});

// Configure Harmonia Sans Pro Condensed font
const harmoniaSans = localFont({
  src: [
    {
      path: '../fonts/HarmoniaSansProCond-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/HarmoniaSansProCond-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-harmonia',
  display: 'swap',
});
*/

export const metadata: Metadata = {
  metadataBase: new URL('https://www.creatornex.com'),
  title: {
    default: 'CreatorNex - India\'s First AI Agent-Powered Influencer & Business Marketing Platform',
    template: '%s | CreatorNex',
  },
  description: 'CreatorNex is India\'s pioneering AI Agent-Powered platform revolutionizing influencer and business marketing. Transform your digital presence with our innovative AI-driven solutions.',
  openGraph: {
    title: 'CreatorNex - India\'s First AI Agent-Powered Marketing Platform',
    description: 'India\'s pioneering AI Agent-Powered platform revolutionizing influencer and business marketing.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.creatornex.com',
    siteName: 'CreatorNex',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'CreatorNex - AI-Powered Marketing Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CreatorNex - AI-Powered Marketing Platform',
    description: 'India\'s First AI Agent-Powered Influencer & Business Marketing Platform',
    images: ['/logo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body
        className={cn(
          headingFont.variable,
          bodyFont.variable,
          'min-h-screen bg-background font-harmonia antialiased'
        )}
      >
        <BodyAttributesWrapper />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ErrorBoundary>
            <PreloadRoutes />
            <div className="relative flex min-h-screen flex-col">
              <Suspense fallback={<div className="h-20" />}>
                <Navbar />
              </Suspense>
              <main className="flex-grow">
                <ErrorBoundary>
                  {children}
                </ErrorBoundary>
              </main>
              <div className="container mx-auto max-w-screen-xl px-6">
                <Separator className="my-4 bg-black" />
              </div>
              <Suspense fallback={<div className="h-40" />}>
                <Footer />
              </Suspense>
            </div>
            <ClientWrapper />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
