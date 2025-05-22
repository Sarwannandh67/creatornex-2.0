import { Helmet } from 'react-helmet-async';

export const Preload = () => {
  return (
    <Helmet>
      {/* Preload main font */}
      <link
        rel="preload"
        href="/fonts/harmonia-sans.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      
      {/* Preload critical CSS */}
      <link
        rel="preload"
        href="/src/styles/globals.css"
        as="style"
      />
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      
      {/* Preconnect to critical origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
}; 