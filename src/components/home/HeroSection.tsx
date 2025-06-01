import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/shared/Highlight";
import { ArrowRight } from "lucide-react";
import { lazy, Suspense } from "react";

// Lazy load non-critical components
const StatsSection = lazy(() => import('@/components/home/StatsSection'));

// Preload critical components
const preloadComponents = () => {
  const preload = (importFn: () => Promise<any>) => {
    const link = document.createElement('link');
    link.rel = 'modulepreload';
    link.href = importFn.toString().match(/['"](.*?)['"]/)?.[1] || '';
    document.head.appendChild(link);
  };

  // Preload components that will be needed soon
  preload(() => import('@/components/home/StatsSection'));
};

export function HeroSection() {
  // Start preloading components after initial render
  if (typeof window !== 'undefined') {
    setTimeout(preloadComponents, 2000);
  }

  // Mock Link component since react-router-dom isn't available
  const Link = ({ to, children, ...props }: { to: string; children: React.ReactNode; [key: string]: any }) => (
    <a href={to} {...props} onClick={(e) => { e.preventDefault(); console.log(`Navigate to: ${to}`); }}>
      {children}
    </a>
  );

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Purple Circle Background Animation - Moved to CSS for better performance */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-96 h-96 md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-gradient-to-br from-purple-700/50 via-blue-700/50 via-teal-500/50 via-orange-500/50 to-pink-700/50 filter blur-3xl opacity-70 animate-gradient-rotate" />
      </div>

      {/* Content container */}
      <div className="container relative z-10 mx-auto px-4 pt-20 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-4xl space-y-8 sm:space-y-10 text-center flex flex-col items-center">
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight text-center min-h-[6rem] sm:min-h-[7rem] md:min-h-[8rem] lg:min-h-[9rem] xl:min-h-[10rem]">
            <span>Revolutionizing{" "}</span>
            <span className="inline-block">
              <Highlight className="highlight-text">Influencer &</Highlight>
            </span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="inline-block">
              <Highlight className="highlight-text">Business</Highlight>
            </span>
            <span>{" "}Marketing</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-center min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem]">
            Harness the power of AI agents to transform your brand's marketing strategy, connect with the right influencers, and drive measurable business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
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

        <div className="w-full max-w-4xl mt-16 sm:mt-20 min-h-[8rem] sm:min-h-[10rem]">
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