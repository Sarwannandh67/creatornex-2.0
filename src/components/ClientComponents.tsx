import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from '@/components/shared/ErrorBoundary';

// Lazy load components
const Toaster = lazy(() => import('@/components/ui/toaster'));
const ScrollToTop = lazy(() => import('@/components/ui/ScrollToTop'));
const WhatsAppButton = lazy(() => import('@/components/ui/WhatsAppButton'));
const TelegramButton = lazy(() => import('@/components/ui/TelegramButton'));
const AppProgressBar = lazy(() => import('@/components/ui/AppProgressBar'));

// Fallback component for loading states
const LoadingFallback = () => <div className="hidden" aria-hidden="true" />;

// Error fallback component
const ErrorFallback = () => <div className="hidden" aria-hidden="true" />;

// Wrapper component for lazy loaded components
const LazyComponentWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <ErrorBoundary fallback={<ErrorFallback />}>
    <Suspense fallback={<LoadingFallback />}>
      {children}
    </Suspense>
  </ErrorBoundary>
);

const ClientComponents: React.FC = () => {
  return (
    <>
      <LazyComponentWrapper>
        <AppProgressBar />
      </LazyComponentWrapper>

      <LazyComponentWrapper>
        <Toaster />
      </LazyComponentWrapper>

      <LazyComponentWrapper>
        <ScrollToTop />
      </LazyComponentWrapper>

      <LazyComponentWrapper>
        <WhatsAppButton 
          phoneNumber="+917416086946" 
          message="Hi! I'd like to learn more about CreatorNex services." 
        />
      </LazyComponentWrapper>

      <LazyComponentWrapper>
        <TelegramButton 
          username="CreatorNex" 
          message="Hi! I'd like to learn more about CreatorNex services." 
        />
      </LazyComponentWrapper>
    </>
  );
} 

ClientComponents.displayName = 'ClientComponents';
export default ClientComponents; 