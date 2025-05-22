import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface HighlightProps extends HTMLAttributes<HTMLSpanElement> {}

export function Highlight({ children, className, ...props }: HighlightProps) {
  return (
    <span className={cn('text-accent', className)} {...props}>
      {children}
    </span>
  );
}
