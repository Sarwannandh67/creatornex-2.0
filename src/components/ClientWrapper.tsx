'use client';

import dynamic from 'next/dynamic';

const ClientComponents = dynamic(() => import('@/components/ClientComponents'), {
  ssr: false,
});

export default function ClientWrapper() {
  return <ClientComponents />;
} 