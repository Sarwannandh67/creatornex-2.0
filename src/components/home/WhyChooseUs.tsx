import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { Clock, Award, Users, DollarSign } from 'lucide-react';
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

export function WhyChooseUs() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-background to-card">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
      >
        <motion.div variants={itemVariants} className="px-4 sm:px-0 order-2 md:order-1">
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Why Partner with <Highlight>CreatorNex LLc</Highlight>?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground"
          >
            We're committed to delivering exceptional results and a seamless experience for our clients.
          </motion.p>
          <motion.ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
            {[
              { text: "Fast Turnaround: Efficient processes to deliver quality work, promptly.", icon: Clock },
              { text: "Data-Driven Strategies: AI-powered insights for optimal campaign performance.", icon: Award },
              { text: "Dedicated Account Manager: Personalized support and communication every step of the way.", icon: Users },
              { text: "Transparent Pricing: Clear, upfront costs with no hidden fees.", icon: DollarSign },
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start"
              >
                <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base">{item.text}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            variants={itemVariants}
            className="mt-6 sm:mt-8"
          >
            <Button
              asChild
              size="lg"
              variant="default"
              className="w-full sm:w-auto rounded-2xl px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg md:hover:scale-105 transition-transform bg-accent hover:bg-accent/90"
            >
              <Link to="/contact?subject=Partnership+Inquiry">Discuss Your Needs</Link>
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
            src="/partnership.jpg"
            alt="Team discussing data-driven strategies"
            className="rounded-xl shadow-xl object-cover w-full h-full"
            loading="lazy"
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