'use client';

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Prefetch critical routes after the page has loaded and become idle
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const handle = window.requestIdleCallback(() => {
        criticalRoutes.forEach(route => {
          navigate(route);
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
        navigate(route);
      });
    }, 2000);
    
    return () => clearTimeout(timeout);
  }, [location.pathname, navigate]);

  return null;
} 