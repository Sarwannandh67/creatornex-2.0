import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

// Lazy load heavy components
const HeroImage = lazy(() => import('./HeroImage'));
const HeroContent = lazy(() => import('./HeroContent'));

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container relative z-10 mx-auto px-4"
      >
        <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}>
          <HeroContent />
        </Suspense>
        
        <Suspense fallback={<div className="h-64 animate-pulse bg-muted rounded-lg" />}>
          <HeroImage />
        </Suspense>
      </motion.div>
    </section>
  );
}; 