// Removed 'use client' directive as it's not needed in React

import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/shared/Highlight";
import { ArrowRight, MousePointer2 } from "lucide-react";
import { Link } from "react-router-dom";
import { lazy, Suspense, useRef, useEffect, useState } from "react";

// Stats with tooltips are less essential - can be deferred
const StatsSection = lazy(() => import('@/components/home/StatsSection'));

// Star component for the animated background
const Star = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute w-1 h-1 bg-white rounded-full"
    style={{
      ...style,
      animation: 'moveStar 3s linear infinite',
    }}
  />
);

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  useEffect(() => {
    // Create stars with random positions at the top
    // Removed star creation logic
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-[100vh] flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Large blurry elliptical gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-purple-600 opacity-50 blur-[150px]"></div>

        {/* Subtle logos/icons - placeholder for now */}
        {/* This might require a different approach depending on implementation details */}

      </div>

      {/* Content container */}
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center min-h-[100vh] px-4">
        {/* Removed 'India's First...' text */}

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-3 sm:mb-6 leading-tight">
          Revolutionizing{" "}
          <span className="inline-block">
            <Highlight>Influencer &</Highlight>
          </span>
          <br className="my-8 sm:my-12" />
          <span className="inline-block">
            <Highlight>Business</Highlight>
          </span>{" "}
          Marketing
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8">
          Harness the power of AI agents to transform your brand's marketing strategy, connect with the right influencers, and drive measurable business growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full sm:w-auto">
          <Button 
            asChild 
            size="lg" 
            className="rounded-full text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto relative overflow-hidden transition-all duration-300"
          >
            <Link to="/book-demo">
              Book Demo <ArrowRight className="ml-2 md:group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

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

        <div className="w-full">
          <Suspense fallback={<div className="h-32 sm:h-40 w-full animate-pulse bg-card/20 rounded-xl" />}>
            <StatsSection />
          </Suspense>
        </div>

        {/* Removed StatsSection and ScrollToTop button */}
      </div>
    </div>
  );
}

