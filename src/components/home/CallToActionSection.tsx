import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function CallToActionSection() {
  return (
    <SectionWrapper className="bg-background border-t border-border py-12 sm:py-16 md:py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center max-w-3xl mx-auto px-4 sm:px-0"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Ready to <Highlight>Transform</Highlight> Your Business?
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground"
        >
          Let's discuss how CreatorNex LLc can help you leverage the power of AI and innovative digital solutions to achieve your goals.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <div className="w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              variant="default"
              className="rounded-2xl px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg md:hover:scale-105 transition-transform bg-accent hover:bg-accent/90 w-full sm:w-auto"
            >
              <Link to="/contact?subject=Free+Consultation">Get Free Consultation</Link>
            </Button>
          </div>
          <div className="w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-2xl px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg shadow-lg transition-all md:hover:scale-105 border-accent text-accent hover:bg-accent/90 hover:text-accent w-full sm:w-auto"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
} 