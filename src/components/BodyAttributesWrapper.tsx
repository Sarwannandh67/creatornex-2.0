'use client';

import dynamic from 'next/dynamic';

const BodyAttributes = dynamic(() => import('@/components/BodyAttributes'), {
  ssr: false,
});

export default function BodyAttributesWrapper() {
  return <BodyAttributes />;
} 