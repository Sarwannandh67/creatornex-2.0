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
    const newStars = Array.from({ length: 50 }, (_, i) => {
      // Random position across the top of the screen
      const x = Math.random() * 100;
      const y = Math.random() * 20; // Start within top 20%
      
      return {
        id: i,
        style: {
          left: `${x}%`,
          top: `${y}%`,
          animationDelay: `${Math.random() * 5}s`,
          opacity: Math.random() * 0.5 + 0.3,
          transform: 'translate(-50%, -50%)',
          animationDuration: `${3 + Math.random() * 4}s`,
        },
      };
    });
    setStars(newStars);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-[100vh] flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Moving circle in the middle with enhanced gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-600/40 via-primary/30 to-purple-500/40 blur-3xl animate-pulse" />
        
        
        {/* Stars */}
        {stars.map((star) => (
          <Star key={star.id} style={star.style} />
        ))}

        {/* Add keyframes for animations */}
        <style>
          {`
            @keyframes moveStar {
              0% {
                transform: translate(-50%, -50%);
                opacity: 0;
              }
              10% {
                opacity: 0.8;
              }
              90% {
                opacity: 0.8;
              }
              100% {
                transform: translate(-50%, 100vh);
                opacity: 0;
              }
            }
          `}
        </style>
      </div>

      {/* Content container */}
      <div className="max-w-4xl mx-auto text-center relative flex flex-col min-h-[100vh] justify-center px-4">
        <div className="flex flex-col items-center space-y-4 sm:space-y-8 mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal uppercase tracking-widest text-accent mb-0 sm:mb-2">
            India's First AI Agent-Powered Platform
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground mb-3 sm:mb-6">
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

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
            Harness the power of AI agents to transform your brand's marketing strategy, connect with the right influencers, and drive measurable business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 w-full">
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
          </div>

          <div className="w-full">
            <Suspense fallback={<div className="h-32 sm:h-40 w-full animate-pulse bg-card/20 rounded-xl" />}>
              <StatsSection />
            </Suspense>
          </div>
        </div>

        <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 flex justify-center">
          <button
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
              });
            }}
            className="flex flex-col items-center gap-2 cursor-pointer z-30 bg-background/80 px-4 sm:px-6 py-2 sm:py-3 rounded-full backdrop-blur-sm border border-border/50 md:hover:border-primary/50 transition-all md:hover:shadow-lg"
          >
            <span className="text-xs sm:text-sm text-muted-foreground md:group-hover:text-accent transition-colors flex items-center gap-2">
              Scroll Down <MousePointer2 className="w-3 h-3 sm:w-4 sm:h-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

