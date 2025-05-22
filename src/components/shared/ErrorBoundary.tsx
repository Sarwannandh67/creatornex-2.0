import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import { errorLogger } from '@/lib/error-logger';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    errorLogger.logError(error, {
      message: error.message,
      componentStack: errorInfo.componentStack,
    });

    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="p-4 rounded-lg bg-destructive/5 text-center">
          <AlertCircle className="h-8 w-8 text-destructive mx-auto mb-2" />
          <h3 className="text-lg font-semibold mb-2">Something went wrong</h3>
          <p className="text-sm text-muted-foreground mb-4">
            We encountered an error while rendering this section
          </p>
          <Button
            onClick={() => this.setState({ hasError: false, error: null })}
            variant="outline"
            size="sm"
          >
            Try again
          </Button>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <div className="mt-4 p-2 bg-destructive/10 rounded text-left">
              <p className="text-xs font-mono text-destructive">
                {this.state.error.message}
              </p>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
} 