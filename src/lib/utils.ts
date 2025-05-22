import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import React from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type ImagePropsWithAIHint = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  'data-ai-hint'?: string;
};

export function getImageProps(props: ImagePropsWithAIHint) {
  return {
    src: props.src,
    alt: props.alt,
    className: props.className,
    loading: props.loading || 'lazy',
    width: props.width,
    height: props.height,
    sizes: props.sizes,
    style: { 
      objectFit: 'cover' as const,
      width: props.style?.width || '100%',
      height: props.style?.height || '100%'
    },
    'data-ai-hint': props['data-ai-hint'],
  };
}
