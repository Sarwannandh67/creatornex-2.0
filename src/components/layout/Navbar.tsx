import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from '@/lib/utils';

// Lazy load menu components
const DesktopMenu = lazy(() => import('./DesktopMenu'));
// Using direct import path to fix module resolution
const SidebarMenu = lazy(() => import('./SidebarMenu.tsx'));

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[90%] md:w-[92%] lg:w-[75%] xl:w-[70%] border rounded-full",
        "bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/70", 
        "shadow-lg transition-all duration-300 border-border/40",
        isScrolled && "bg-background/95 shadow-xl border-border/80"
      )}
    >
      <div className="container flex h-16 sm:h-18 md:h-20 items-center justify-between px-4 sm:px-6 mx-auto">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center py-2 transition-opacity hover:opacity-90 focus:opacity-90 min-w-[120px] sm:min-w-[140px]"
          aria-label="CreatorNex Home"
        >
          <img 
            src={theme === 'light' ? "/logo-light.png" : "/logo.png"} 
            alt="CreatorNex LLC" 
            className="h-7 sm:h-8 md:h-9 w-auto object-contain"
            width="auto"
            height="36"
          />
        </Link>

        {/* Sidebar Menu for screens up to 1500px */}
        <div className="2xl:hidden flex justify-end">
          <Suspense fallback={<div className="h-14 w-12 animate-pulse bg-muted/50 rounded-md 2xl:hidden" />}>
            <SidebarMenu />
          </Suspense>
        </div>

        {/* Desktop Menu - Center aligned, only visible on screens larger than 1500px */}
        <div className="hidden 2xl:flex justify-center items-center h-full">
          <Suspense fallback={<div className="h-10 w-96 animate-pulse bg-muted/50 rounded-md" />}>
            <DesktopMenu />
          </Suspense>
        </div>

        {/* Right side buttons - only visible on screens larger than 1500px */}
        <div className="hidden 2xl:flex items-center gap-2 sm:gap-4 h-full">
          <ThemeToggle />
          <Button 
            asChild 
            size="sm" 
            className="text-sm sm:text-base font-medium transition-all hover:scale-105"
          >
            <Link to="/book-demo">BOOK A CALL</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;

