import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/shared/Highlight";
import { ArrowRight } from "lucide-react";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

// Stats with tooltips are less essential - can be deferred
const StatsSection = lazy(() => import('@/components/home/StatsSection'));

const headingVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
};

const textVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function HeroSection() {

  // Mock Link component since react-router-dom isn't available
  const Link = ({ to, children, ...props }: { to: string; children: React.ReactNode; [key: string]: any }) => (
    <a href={to} {...props} onClick={(e) => { e.preventDefault(); console.log(`Navigate to: ${to}`); }}>
      {children}
    </a>
  );

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Purple Circle Background Animation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.div
          className="w-96 h-96 md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-gradient-to-br from-purple-700/50 via-blue-700/50 via-teal-500/50 via-orange-500/50 to-pink-700/50 filter blur-3xl opacity-70"
          animate={{
            scale: [1, 1.05, 1],
            rotate: 360,
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </motion.div>

      {/* Content container */}
      <div className="container relative z-10 mx-auto px-4 pt-20 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-4xl space-y-8 sm:space-y-10 text-center flex flex-col items-center">
          <motion.h1 
            className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight text-center"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={textVariants}>Revolutionizing{" "}</motion.span>
            <motion.span className="inline-block" variants={textVariants}>
              <Highlight className="highlight-text">Influencer &</Highlight>
            </motion.span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <motion.span className="inline-block" variants={textVariants}>
              <Highlight className="highlight-text">Business</Highlight>
            </motion.span>
            <motion.span variants={textVariants}>{" "}Marketing</motion.span>
          </motion.h1>

          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Harness the power of AI agents to transform your brand's marketing strategy, connect with the right influencers, and drive measurable business growth.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
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
          </motion.div>

        </div>

        <div className="w-full max-w-4xl mt-16 sm:mt-20">
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