import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/shared/Highlight";
import { ArrowRight } from "lucide-react";
import { lazy, Suspense, useRef, useEffect, useState } from "react";

// Stats with tooltips are less essential - can be deferred
const StatsSection = lazy(() => import('@/components/home/StatsSection'));

// Star component for the animated background
const Star = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute w-1 h-1 bg-white rounded-full opacity-70"
    style={{
      ...style,
      animation: `moveStar ${3 + Math.random() * 2}s linear infinite`,
    }}
  />
);

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  // Generate animated stars
  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
        },
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  // Mock Link component since react-router-dom isn't available
  const Link = ({ to, children, ...props }: { to: string; children: React.ReactNode; [key: string]: any }) => (
    <a href={to} {...props} onClick={(e) => { e.preventDefault(); console.log(`Navigate to: ${to}`); }}>
      {children}
    </a>
  );

  return (
    <>
      <style>{`
        @keyframes moveStar {
          0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(var(--primary), 0.3);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 40px rgba(var(--primary), 0.5);
            transform: scale(1.02);
          }
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .hero-title {
          background: linear-gradient(135deg, hsl(var(--foreground)), hsl(var(--foreground)) 60%, hsl(var(--primary)));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .hero-button {
          background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary)) 70%, hsl(var(--primary)/0.8));
          transition: all 0.3s ease;
        }
        
        .hero-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(var(--primary), 0.3);
        }
        
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }

        .highlight-text {
          background: linear-gradient(135deg, #9333ea, #a855f7);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: all 0.3s ease;
        }

        .highlight-text:hover {
          background: linear-gradient(135deg, #7e22ce, #9333ea);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          transform: scale(1.02);
        }
      `}</style>
      
      <div 
        ref={containerRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          {/* Animated stars */}
          {stars.map((star) => (
            <Star key={star.id} style={star.style} />
          ))}
          
          {/* Large blurry elliptical gradient with animation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/20 dark:bg-primary/30 blur-[150px] floating-element"></div>
          
          {/* Secondary gradient */}
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[300px] rounded-full bg-violet-500/10 dark:bg-violet-400/20 blur-[120px] floating-element" style={{ animationDelay: '2s' }}></div>

          {/* Decorative grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
          
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
        </div>

        {/* Content container */}
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 leading-tight">
              Revolutionizing{" "}
              <span className="inline-block">
                <Highlight className="highlight-text">Influencer &</Highlight>
              </span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="inline-block">
                <Highlight className="highlight-text">Business</Highlight>
              </span>{" "}
              Marketing
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Harness the power of AI agents to transform your brand's marketing strategy, connect with the right influencers, and drive measurable business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                asChild 
                size="lg" 
                className="hero-button rounded-full text-base sm:text-lg px-8 py-4 w-full sm:w-auto group"
              >
                <Link to="/book-demo">
                  Book Demo 
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>

              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="rounded-full text-base sm:text-lg px-8 py-4 w-full sm:w-auto border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <Link to="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>

          <div className="w-full mt-16 sm:mt-20">
            <Suspense fallback={
              <div className="h-32 sm:h-40 w-full animate-pulse bg-card/20 rounded-xl border border-border/50" />
            }>
              <StatsSection />
            </Suspense>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5"></div>
      </div>
    </>
  );
}