import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/shared/Highlight";
import { ArrowRight } from "lucide-react";
import { lazy, Suspense, useRef, useEffect } from "react";

// Stats with tooltips are less essential - can be deferred
const StatsSection = lazy(() => import('@/components/home/StatsSection'));

export function HeroSection() {
  const gistRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the gist script
    const script = document.createElement("script");
    script.src = "https://gist.github.com/altwitt/bf1bfca2d94906afc65602f7b6fdf46f.js";
    script.async = true;
    
    if (gistRef.current) {
      gistRef.current.innerHTML = ""; // clear if re-rendered
      gistRef.current.appendChild(script);
    }
  }, []);

  // Mock Link component since react-router-dom isn't available
  const Link = ({ to, children, ...props }: { to: string; children: React.ReactNode; [key: string]: any }) => (
    <a href={to} {...props} onClick={(e) => { e.preventDefault(); console.log(`Navigate to: ${to}`); }}>
      {children}
    </a>
  );

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Gist script container */}
      <div ref={gistRef} className="absolute inset-0 z-0" />
      
      {/* Content container */}
      <div className="container relative z-10 mx-auto px-4">
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
    </section>
  );
}