import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  containerClassName?: string;
}

export function SectionWrapper({ children, className, containerClassName, ...props }: SectionWrapperProps) {
  return (
    <section className={cn("w-full py-12 md:py-20 lg:py-24", className)} {...props}>
      <div className={cn("container mx-auto max-w-screen-xl px-6", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
