import React, { lazy, Suspense } from 'react';
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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={theme === 'light' ? "/logo-light.png" : "/logo.png"} 
            alt="CreatorNex" 
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

