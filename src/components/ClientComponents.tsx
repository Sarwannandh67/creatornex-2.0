'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Toaster = dynamic(() => import('@/components/ui/toaster').then(mod => mod.Toaster), {
  ssr: false,
});

const ScrollToTop = dynamic(() => import('@/components/ui/ScrollToTop').then(mod => mod.ScrollToTop), {
  ssr: false,
});

const WhatsAppButton = dynamic(() => import('@/components/ui/WhatsAppButton').then(mod => mod.WhatsAppButton), {
  ssr: false,
});

const TelegramButton = dynamic(() => import('@/components/ui/TelegramButton').then(mod => mod.TelegramButton), {
  ssr: false,
});

const AppProgressBar = dynamic(() => import('@/components/ui/AppProgressBar').then(mod => mod.AppProgressBar), {
  ssr: false,
});

export default function ClientComponents() {
  return (
    <>
      <Suspense fallback={null}>
        <AppProgressBar />
      </Suspense>
      <Suspense fallback={null}>
        <Toaster />
      </Suspense>
      <Suspense fallback={null}>
        <ScrollToTop />
      </Suspense>
      <Suspense fallback={null}>
        <WhatsAppButton 
          phoneNumber="+917416086946" 
          message="Hi! I'd like to learn more about CreatorNex services." 
        />
      </Suspense>
      <Suspense fallback={null}>
        <TelegramButton 
          username="CreatorNex" 
          message="Hi! I'd like to learn more about CreatorNex services." 
        />
      </Suspense>
    </>
  );
} 