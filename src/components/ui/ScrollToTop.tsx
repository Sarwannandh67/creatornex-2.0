import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from "./button"
import { ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Handle route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Handle scroll button visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded-full shadow-lg"
          >
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ScrollToTop.displayName = 'ScrollToTop';

export default ScrollToTop; 