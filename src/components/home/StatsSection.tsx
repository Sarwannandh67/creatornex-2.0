import { Bot, Rocket, Target, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
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
    description: "Carefully vetted content creators ready to promote your brand"
  },
  { 
    icon: Target, 
    label: "Campaign Success", 
    value: "90%",
    description: "Proven track record of successful marketing campaigns"
  },
  { 
    icon: Rocket, 
    label: "ROI Increase", 
    value: "3x",
    description: "Average return on investment for our clients"
  }
];

export default function StatsSection() {
  useEffect(() => {
    console.log('StatsSection mounted');
    console.log('Stats data:', stats);
  }, []);

  if (!stats || stats.length === 0) {
    console.error('No stats data available');
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 max-w-3xl mx-auto relative z-10 mt-4 sm:mt-8"
      >
        {stats.map((stat, index) => {
          if (!stat.icon || !stat.label || !stat.value) {
            console.error('Invalid stat data:', stat);
            return null;
          }

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-2 sm:p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 md:hover:border-primary/50 transition-all group"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="md:block"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-1 sm:mb-2 mx-auto md:group-hover:text-accent transition-colors" />
              </motion.div>
              <p className="font-bold text-lg sm:text-xl md:text-2xl text-foreground">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground md:group-hover:text-accent transition-colors">
                {stat.label}
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="hidden md:block text-xs text-muted-foreground mt-2"
              >
                {stat.description}
              </motion.p>
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
} 