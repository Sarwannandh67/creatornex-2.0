type ErrorDetails = {
  message: string;
  stack?: string | null;
  componentStack?: string | null;
  digest?: string;
  url?: string;
  route?: string;
};

class ErrorLogger {
  private static instance: ErrorLogger;
  
  private constructor() {}

  static getInstance(): ErrorLogger {
    if (!ErrorLogger.instance) {
      ErrorLogger.instance = new ErrorLogger();
    }
    return ErrorLogger.instance;
  }

  logError(error: Error & { digest?: string }, errorInfo?: Partial<ErrorDetails>) {
    const errorDetails: ErrorDetails = {
      message: error.message || 'An unknown error occurred',
      stack: error.stack,
      digest: error.digest,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      route: typeof window !== 'undefined' ? window.location.pathname : undefined,
      ...errorInfo
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('Application Error');
      console.error('Error Details:', errorDetails);
      console.error('Original Error:', error);
      console.groupEnd();
    }

    // In production, you would send this to your error tracking service
    // Example: Sentry, LogRocket, etc.
    if (process.env.NODE_ENV === 'production') {
      // TODO: Implement production error logging
      // Example: Sentry.captureException(error, { extra: errorDetails });
    }
  }

  logWarning(message: string, details?: Record<string, unknown>) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Warning:', message, details);
    }
  }
}

export const errorLogger = ErrorLogger.getInstance(); 