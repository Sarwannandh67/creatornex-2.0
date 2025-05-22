import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

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
  { href: '/services/social-media-marketing', label: 'Social Media Marketing' },
  { href: '/services/influencer-marketing', label: 'Influencer Marketing' },
  { href: '/services/logo-poster-design', label: 'Logo & Poster Design' },
  { href: '/services/video-editing', label: 'Video Editing & Thumbnails' },
  { href: '/services/seo-service', label: 'Search Engine Optimization' },
];

const MobileMenu: React.FC = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  // Hide in landscape mode
  if (isLandscape) return null;

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isMenuOpen && (
        <div className="absolute left-0 top-16 z-50 w-full bg-background border-b p-4">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              item.href === '/services' ?
                <div key={item.label} className="space-y-2">
                  <div 
                    className={`flex items-center justify-between px-3 py-2 text-base cursor-pointer ${
                      pathname.startsWith(item.href) ? 'text-primary font-medium' : 'text-foreground/80'
                    }`}
                    onClick={toggleServices}
                  >
                    {item.label}
                    {isServicesOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  </div>
                  
                  {isServicesOpen && (
                    <div className="ml-4 space-y-2 border-l-2 border-border pl-4">
                      {servicesItems.map(service => (
                        <Link
                          key={service.label}
                          to={service.href}
                          className={`block px-3 py-2 text-sm ${
                            pathname === service.href ? 'text-primary font-medium' : 'text-foreground/80'
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
                  className={`px-3 py-2 text-base ${
                    pathname === item.href ? 'text-primary font-medium' : 'text-foreground/80'
                  }`}
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
          
          <Button asChild className="w-full mt-4">
            <Link to="/book-demo" onClick={toggleMenu}>Book Demo</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

MobileMenu.displayName = 'MobileMenu';
export default MobileMenu; 