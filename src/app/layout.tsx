import { ThemeProvider } from '@/components/theme/ThemeProvider'
import ClientWrapper from '@/components/ClientWrapper'
import '@/app/globals.css'
import fs from 'fs'
import path from 'path'

// Add this before the RootLayout component
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

// Read critical CSS
const criticalCss = fs.readFileSync(
  path.join(process.cwd(), 'src/app/critical.css'),
  'utf8'
);

export const metadata = {
  title: 'CreatorNex LLC - Powering Your Social & AI Presence',
  description: 'CreatorNex LLC offers AI Agents, Social Media Marketing, Design, and Video services to elevate your brand. Book a free consult today!',
}

// Add cache control metadata
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inline critical CSS */}
        <style dangerouslySetInnerHTML={{ __html: criticalCss }} />
        
        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/fonts/harmonia-sans-pro-condensed.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/croogla-4f-medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Defer non-critical CSS */}
        <link
          rel="stylesheet"
          href="/assets/index.DEpDAEYH.css"
          media="print"
          onLoad={(e) => {
            const target = e.target as HTMLLinkElement;
            target.media = 'all';
          }}
        />
        
        {/* Defer GTM loading */}
        {GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GTM_ID}', {
                  send_page_view: false
                });
              `,
            }}
            defer
          />
        )}

        {/* Add bfcache support script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('pageshow', (event) => {
                if (event.persisted) {
                  // Page was restored from bfcache
                  window.location.reload();
                }
              });
            `,
          }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider defaultTheme="light" storageKey="creatornex-theme">
          <ClientWrapper />
          {children}
        </ThemeProvider>
        
        {/* Load GTM script after page load */}
        {GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
            defer
          />
        )}

        {/* Fallback for CSS loading */}
        <noscript>
          <link rel="stylesheet" href="/assets/index.DEpDAEYH.css" />
        </noscript>
      </body>
    </html>
  )
} 