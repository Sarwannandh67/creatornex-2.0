'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

// List of critical routes that should be preloaded
const criticalRoutes = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/contact',
  '/book-demo',
  '/blog',
];

export function PreloadRoutes() {
  const router = useRouter();
  
  useEffect(() => {
    // Prefetch critical routes after the page has loaded and become idle
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const handle = window.requestIdleCallback(() => {
        criticalRoutes.forEach(route => {
          router.prefetch(route);
        });
      });
      
      return () => {
        if ('cancelIdleCallback' in window) {
          window.cancelIdleCallback(handle);
        }
      };
    }
    
    // Fallback for browsers that don't support requestIdleCallback
    const timeout = setTimeout(() => {
      criticalRoutes.forEach(route => {
        router.prefetch(route);
      });
    }, 2000);
    
    return () => clearTimeout(timeout);
  }, [router]);

  return null;
} 