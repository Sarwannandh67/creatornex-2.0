import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { Users, ArrowRight } from 'lucide-react';
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

export function WhoWeAreSection() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-background to-card">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
      >
        <motion.div 
          variants={itemVariants} 
          className="px-4 sm:px-0 order-2 md:order-1"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Users className="h-10 w-10 sm:h-12 sm:w-12 text-accent mb-3 sm:mb-4" />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Meet <Highlight>CreatorNex LLC</Highlight>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground"
          >
            Our mission is to empower your brand by blending innovative AI solutions with compelling social strategies. We are passionate about transforming your vision into reality.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground"
          >
            Founded by friends with a shared dream, CreatorNex LLC is your dedicated partner for digital growth and intelligent automation.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 sm:mt-8"
          >
            <Button 
              asChild 
              size="lg" 
              className="w-full sm:w-auto rounded-2xl px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg hover:scale-105 transition-transform btn-purple"
            >
              <Link to="/about">
                More About Our Team <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="relative h-60 sm:h-80 md:h-96 order-1 md:order-2 mx-4 sm:mx-0"
        >
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            src="/meet.png"
            alt="CreatorNex LLC team working collaboratively with innovative ideas"
            className="rounded-xl shadow-xl w-full h-full object-cover"
            data-ai-hint="teamwork innovation office"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-xl"
          />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}

