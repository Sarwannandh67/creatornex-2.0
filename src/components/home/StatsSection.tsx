import { Bot, Rocket, Target, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const containerVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    y: 30, 
    opacity: 0,
    scale: 0.9
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const titleVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const stats = [
  {
    icon: Bot,
    label: "AI-Powered Agents",
    value: "24/7",
    description: "Round-the-clock AI assistance for your marketing needs"
  },
  {
    icon: Users,
    label: "Active Influencers",
    value: "15+",
    description: "Vetted content creators ready to promote your brand"
  },
  {
    icon: Target,
    label: "Campaign Success",
    value: "90%",
    description: "Proven success rate across all campaigns"
  },
  {
    icon: Rocket,
    label: "ROI Increase",
    value: "3x",
    description: "Triple average returns for our clients"
  }
];

export default function StatsSection() {
  useEffect(() => {
    console.log("StatsSection mounted");
    console.log("Stats data:", stats);
  }, []);

  return (
    <motion.section 
      className="py-16 bg-background/50 backdrop-blur-md text-foreground relative z-10 border border-border/20 rounded-2xl shadow-lg transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:ring-2 hover:ring-primary/20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div 
        className="max-w-4xl mx-auto text-center px-4 mb-8 sm:mb-12"
        variants={titleVariants}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
          Trusted by Brands & Creators
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          We use smart AI agents and influencer collaboration to help brands scale better.
        </p>
      </motion.div>

      <AnimatePresence>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-4 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl border border-border/30 md:hover:border-primary/40 transition-all group flex flex-col items-center text-center"
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.2 },
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)"
              }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="mb-2 sm:mb-3"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary md:group-hover:text-accent transition-colors" />
              </motion.div>

              <motion.p 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-2"
                variants={itemVariants}
              >
                {stat.value}
              </motion.p>
              <motion.p 
                className="text-xs sm:text-sm md:text-base font-medium text-muted-foreground md:group-hover:text-accent transition-colors"
                variants={itemVariants}
              >
                {stat.label}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="hidden md:block text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2"
              >
                {stat.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}
