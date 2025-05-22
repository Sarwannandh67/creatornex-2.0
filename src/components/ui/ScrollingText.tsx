import React from 'react';
import { cn } from '@/lib/utils';

interface ScrollingTextProps {
  text: string;
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
}

export function ScrollingText({ 
  text, 
  className,
  speed = 'normal' 
}: ScrollingTextProps) {
  const speedClasses = {
    slow: 'animate-marquee-slow',
    normal: 'animate-marquee',
    fast: 'animate-marquee-fast'
  };

  return (
    <div className={cn(
      "w-full overflow-hidden bg-accent/10 py-2",
      className
    )}>
      <div className={cn(
        "flex whitespace-nowrap",
        speedClasses[speed]
      )}>
        <span className="text-sm font-medium text-accent px-4">{text}</span>
        <span className="text-sm font-medium text-accent px-4">{text}</span>
        <span className="text-sm font-medium text-accent px-4">{text}</span>
        <span className="text-sm font-medium text-accent px-4">{text}</span>
      </div>
    </div>
  );
} 