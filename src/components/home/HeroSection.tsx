'use client';

import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/shared/Highlight";
import { ArrowRight, Bot, Rocket, Target, Users, MousePointer2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, lazy, Suspense } from "react";

// Stats with tooltips are less essential - can be deferred
const StatsSection = lazy(() => import('@/components/home/StatsSection'));

export function HeroSection() {
  const getOrbClasses = (index: number) => {
    const size = 48 + index * 24;
    const color = index === 0 ? 'primary' : index === 1 ? 'accent' : 'secondary';
    return `w-${size} h-${size} rounded-full bg-${color}/20 blur-3xl`;
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className="min-h-[100vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90"
    >
      {/* Simplified background elements */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 blur-3xl"
      />
      
      {/* Reduced number of floating orbs */}
      {[...Array(1)].map((_, i) => (
        <div
          key={i}
          className="absolute -z-10"
          style={{
            transform: 'translate(100px, 50px)',
            opacity: 0.7
          }}
        >
          <div className={getOrbClasses(i)} />
        </div>
      ))}

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center relative flex flex-col min-h-[100vh] justify-center">
          <div className="flex flex-col items-center space-y-8 mb-12">
            {/* Simplified tagline */}
            <p className="text-sm font-normal uppercase tracking-widest text-accent md:text-base lg:text-lg mb-2">
              India's First AI Agent-Powered Platform
            </p>

            {/* Simplified heading */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl mb-6">
              Revolutionizing{" "}
              <Highlight>Influencer & Business</Highlight>{" "}
              Marketing
            </h1>

            {/* Description - simplified animation */}
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto mb-8">
              Harness the power of AI agents to transform your brand's marketing strategy, connect with the right influencers, and drive measurable business growth.
            </p>

            {/* CTA buttons with reduced animation complexity */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                asChild 
                size="lg" 
                className="rounded-full text-lg px-8 relative overflow-hidden group"
              >
                <Link href="/book-demo" prefetch={true}>
                  Book Demo <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="rounded-full text-lg px-8 relative overflow-hidden group"
              >
                <Link href="/portfolio" prefetch={true}>
                  View Our Work
                </Link>
              </Button>
            </div>

            {/* Stats section - deferred loading */}
            <div className="h-40 w-full">
              <Suspense fallback={<div className="h-40 w-full animate-pulse bg-card/20 rounded-xl" />}>
                <StatsSection />
              </Suspense>
            </div>
          </div>

          {/* Scroll button with reduced animation */}
          <div className="absolute bottom-12 left-0 right-0 flex justify-center">
            <button
              onClick={handleScrollDown}
              className="flex flex-col items-center gap-2 cursor-pointer group z-30 bg-background/80 px-4 py-2 rounded-full backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all"
            >
              <span className="text-sm text-muted-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                Scroll Down <MousePointer2 className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

