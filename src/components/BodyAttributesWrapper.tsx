import { lazy, Suspense } from 'react';

const BodyAttributes = lazy(() => import('@/components/BodyAttributes'));

function BodyAttributesWrapper() {
  return (
    <Suspense fallback={null}>
      <BodyAttributes />
    </Suspense>
  );
}

BodyAttributesWrapper.displayName = 'BodyAttributesWrapper';
export default BodyAttributesWrapper;