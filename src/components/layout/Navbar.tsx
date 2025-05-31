import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { useTheme } from "@/components/theme/ThemeProvider";

// Lazy load menu components
const DesktopMenu = lazy(() => import('./DesktopMenu'));
const MobileMenu = lazy(() => import('./MobileMenu'));
const LandscapeMobileMenu = lazy(() => import('./LandscapeMobileMenu'));

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
    <header className={`fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[75%] border rounded-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/40 shadow-lg transition-all duration-200 ${
      isScrolled ? 'bg-background/90 shadow-xl' : ''
    }`}>
      <div className="container flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={theme === 'light' ? "/logo-light.png" : "/logo.png"} 
            alt="CreatorNex LLc" 
            className="h-8 w-auto" 
          />
        </Link>

        {/* Mobile Menu - Left aligned on mobile */}
        <div className="md:hidden flex justify-end">
          <Suspense fallback={<div className="h-16 w-12 animate-pulse bg-muted md:hidden" />}>
            <MobileMenu />
          </Suspense>
        </div>

        {/* Desktop Menu - Center aligned */}
        <div className="hidden md:flex flex-1 justify-center">
          <Suspense fallback={<div className="h-16 w-96 animate-pulse bg-muted" />}>
            <DesktopMenu />
          </Suspense>
        </div>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button asChild>
            <Link to="/book-demo">BOOK A CALL</Link>
          </Button>
        </div>
      </div>

      {/* Landscape Mobile Menu */}
      <Suspense fallback={null}>
        <LandscapeMobileMenu />
      </Suspense>
    </header>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;

