import { lazy, Suspense } from 'react';

const ClientComponents = lazy(() => import('@/components/ClientComponents'));

function ClientWrapper() {
  return (
    <Suspense fallback={<div>Loading client components...</div>}>
      <ClientComponents />
    </Suspense>
  );
}

ClientWrapper.displayName = 'ClientWrapper';
export default ClientWrapper;