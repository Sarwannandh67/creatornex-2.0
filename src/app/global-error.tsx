'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import { errorLogger } from '@/lib/error-logger';

export default function GlobalError({
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
    try {
      // Clear any cached data that might be causing the error
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
        message: 'Error during global reset attempt',
      });
      // Force reload as a fallback
      window.location.reload();
    }
  };

  return (
    <html lang="en" className="dark">
      <body className="bg-background">
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-2xl w-full text-center">
            <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-6" />
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-foreground">
              Critical Error
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              A critical error has occurred. We apologize for the inconvenience.
              Please try refreshing the page or contact support if the problem persists.
            </p>
            <div className="flex gap-4 justify-center">
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
              <div className="mt-8 p-4 bg-destructive/10 rounded-lg text-left w-full">
                <p className="text-sm font-mono text-destructive mb-2">Error: {error.message}</p>
                {error.digest && (
                  <p className="text-sm font-mono text-destructive">Digest: {error.digest}</p>
                )}
                {error.stack && (
                  <pre className="text-xs font-mono text-destructive mt-2 overflow-auto max-h-40">
                    {error.stack}
                  </pre>
                )}
              </div>
            )}
          </div>
        </div>
      </body>
    </html>
  );
} 