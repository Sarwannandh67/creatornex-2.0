import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { ImageProps } from "next/image"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type ImagePropsWithAIHint = Omit<ImageProps, 'src' | 'alt'> & {
  src: string;
  alt: string;
  'data-ai-hint'?: string;
};

export function getImageProps(props: ImagePropsWithAIHint) {
  return {
    src: props.src,
    alt: props.alt,
    className: props.className,
    priority: props.priority,
    sizes: props.sizes || '100vw',
    style: { 
      objectFit: 'cover' as const,
      width: '100%',
      height: '100%'
    },
    'data-ai-hint': props['data-ai-hint'],
  };
}
