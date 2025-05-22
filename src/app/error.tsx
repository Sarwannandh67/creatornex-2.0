'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { AlertCircle } from 'lucide-react';
import { errorLogger } from '@/lib/error-logger';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    errorLogger.logError(error, {
      message: error.message,
      componentStack: error.stack,
    });
  }, [error]);

  const handleReset = () => {
    // Clear any error-related state or cache if needed
    try {
      // Attempt to clear any cached data that might be causing the error
      if ('caches' in window) {
        caches.keys().then((names) => {
          names.forEach((name) => {
            caches.delete(name);
          });
        });
      }
      reset();
    } catch (resetError) {
      errorLogger.logError(resetError as Error, {
        message: 'Error during reset attempt',
      });
      // Force reload as a fallback
      window.location.reload();
    }
  };

  return (
    <SectionWrapper className="bg-gradient-to-b from-background to-card pt-24 md:pt-32">
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <AlertCircle className="h-16 w-16 text-destructive mb-6" />
        <h1 className="text-4xl font-bold tracking-tight mb-4">Something went wrong!</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
          We apologize for the inconvenience. An unexpected error has occurred.
          Our team has been notified and is working to fix the issue.
        </p>
        <div className="flex gap-4">
          <Button
            onClick={handleReset}
            size="lg"
            variant="default"
            className="rounded-2xl"
          >
            Try again
          </Button>
          <Button
            onClick={() => window.location.href = '/'}
            size="lg"
            variant="outline"
            className="rounded-2xl"
          >
            Go to Homepage
          </Button>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-destructive/10 rounded-lg text-left w-full max-w-2xl">
            <p className="text-sm font-mono text-destructive mb-2">Error: {error.message}</p>
            {error.digest && (
              <p className="text-sm font-mono text-destructive">Digest: {error.digest}</p>
            )}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
} 