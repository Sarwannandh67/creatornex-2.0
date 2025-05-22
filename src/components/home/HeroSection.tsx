// Removed 'use client' directive as it's not needed in React

import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/shared/Highlight";
import { ArrowRight, MousePointer2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, lazy, Suspense, useRef } from "react";

// Stats with tooltips are less essential - can be deferred
const StatsSection = lazy(() => import('@/components/home/StatsSection'));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const backgroundVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut"
    }
  }
};

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.div 
      ref={containerRef}
      className="min-h-[100vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated background elements - optimized for mobile */}
      <motion.div
        variants={backgroundVariants}
        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 blur-3xl"
        style={{ y, opacity }}
      />
      
      {/* Animated floating orbs - smaller on mobile */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{
          duration: 2,
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{
          duration: 2,
          delay: 0.5,
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-accent/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center relative flex flex-col min-h-[100vh] justify-center"
          style={{ y, opacity }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center space-y-4 sm:space-y-8 mb-8 sm:mb-12"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm md:text-base lg:text-lg font-normal uppercase tracking-widest text-accent mb-0 sm:mb-2"
            >
              India's First AI Agent-Powered Platform
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground mb-3 sm:mb-6 px-2"
            >
              Revolutionizing{" "}
              <motion.span
                className="inline-block"
              >
                <Highlight>Influencer & Business</Highlight>
              </motion.span>{" "}
              Marketing
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4"
            >
              Harness the power of AI agents to transform your brand's marketing strategy, connect with the right influencers, and drive measurable business growth.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 w-full px-4"
            >
              <div className="w-full sm:w-auto">
                <Button 
                  asChild 
                  size="lg" 
                  className="rounded-full text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto relative overflow-hidden transition-all duration-300"
                >
                  <Link to="/book-demo">
                    Book Demo <ArrowRight className="ml-2 md:group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              <div className="w-full sm:w-auto">
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto relative overflow-hidden transition-all duration-300"
                >
                  <Link to="/portfolio">
                    View Our Work
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="w-full px-2 sm:px-0"
            >
              <Suspense fallback={<div className="h-32 sm:h-40 w-full animate-pulse bg-card/20 rounded-xl" />}>
                <StatsSection />
              </Suspense>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: {
                delay: 2,
                duration: 0.8,
                type: "spring",
                stiffness: 200,
                damping: 20
              }
            }}
            className="absolute bottom-8 sm:bottom-12 left-0 right-0 flex justify-center"
          >
            <button
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth'
                });
              }}
              className="flex flex-col items-center gap-2 cursor-pointer z-30 bg-background/80 px-4 sm:px-6 py-2 sm:py-3 rounded-full backdrop-blur-sm border border-border/50 md:hover:border-primary/50 transition-all md:hover:shadow-lg"
            >
              <motion.span 
                className="text-xs sm:text-sm text-muted-foreground md:group-hover:text-accent transition-colors flex items-center gap-2"
                animate={{ 
                  y: [0, 5, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                Scroll Down <MousePointer2 className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

