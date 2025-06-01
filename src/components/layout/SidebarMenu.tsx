import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
];

const servicesItems = [
  { href: '/services', label: 'All Services' },
  { href: '/services/ai-agents-service', label: 'AI Agents as a Service' },
  { href: '/services/web-development', label: 'Web Development Solutions' },
  { href: '/services/social-media-marketing', label: 'Social Media Marketing' },
  { href: '/services/influencer-marketing', label: 'Influencer Marketing' },
  { href: '/services/logo-poster-design', label: 'Logo & Poster Design' },
  { href: '/services/video-editing', label: 'Video Editing & Thumbnails' },
  { href: '/services/seo-service', label: 'Search Engine Optimization' },
];

const SidebarMenu: React.FC = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  // Close menu when clicking outside on mobile
  const handleBackdropClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleMenu();
  };

  // Prevent body scrolling when menu is open
  if (typeof document !== 'undefined') {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  return (
    <div className="2xl:hidden">
      {/* Menu toggle button */}
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleMenu} 
          aria-label="Menu"
          className="h-10 w-10 md:h-12 md:w-12 border border-border/50 hover:bg-accent transition-colors duration-200"
        >
          {isMenuOpen ? <X className="h-6 w-6 md:h-7 md:w-7" /> : <Menu className="h-6 w-6 md:h-7 md:w-7" />}
        </Button>
      </div>

      {/* Mobile sidebar with backdrop */}
      {isMenuOpen && (
        <>
          {/* Invisible backdrop for click handling only - no visual effect */}
          <div 
            className="fixed inset-0 z-40"
            onClick={handleBackdropClick}
            aria-hidden="true"
            style={{ touchAction: 'none' }}
          />
          
          {/* Dropdown Menu */}
          <div 
            className="fixed top-[75px] left-1/2 -translate-x-1/2 w-[90%] max-w-[350px] max-h-[80vh] bg-background/95 border border-border/30 rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in-90 slide-in-from-top-5 duration-200 dark:bg-background/90"
            style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}
          >
            {/* No close button - removed as requested */}
          
            {/* Navigation Links */}
            <div className="p-6 pt-6 pb-6">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  item.href === '/services' ?
                    <div key={item.label} className="space-y-2">
                      <div 
                        className={`flex items-center justify-between py-2 text-base md:text-base cursor-pointer ${
                          pathname.startsWith(item.href) ? 'text-primary font-medium' : 'text-foreground/90'
                        }`}
                        onClick={toggleServices}
                      >
                        {item.label}
                        {isServicesOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                      </div>
                      
                      {isServicesOpen && (
                        <div className="ml-5 space-y-3 border-l border-primary/30 pl-4 pt-1 pb-1">
                          {servicesItems.map(service => (
                            <Link
                              key={service.label}
                              to={service.href}
                              className={`block py-1.5 text-sm md:text-sm ${
                                pathname === service.href ? 'text-primary' : 'text-foreground/80'
                              }`}
                              onClick={toggleMenu}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  : (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`block py-2 text-base md:text-base ${
                        pathname === item.href ? 'text-primary font-medium' : 'text-foreground/90'
                      }`}
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </nav>
              
              <div className="mt-6">
                <Button 
                  asChild 
                  className="w-full py-3 text-base font-medium bg-primary hover:bg-primary/90 rounded-lg"
                  size="lg"
                >
                  <Link to="/book-demo" onClick={toggleMenu}>Book Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

SidebarMenu.displayName = 'SidebarMenu';
export default SidebarMenu;
