import React from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  'data-ai-hint'?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, 'data-ai-hint': dataAiHint }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      data-ai-hint={dataAiHint}
      onLoad={(e) => {
        const img = e.currentTarget;
        img.style.opacity = '1';
      }}
      style={{
        opacity: 0,
        transition: 'opacity 0.3s ease-in-out',
      }}
    />
  );
}; 