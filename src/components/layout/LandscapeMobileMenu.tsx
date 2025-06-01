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

const LandscapeMobileMenu: React.FC = () => {
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

  if (!isLandscape) return null;

  return (
    <div className="md:hidden">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleMenu} 
        aria-label="Menu" 
        className="fixed top-4 left-4 z-50 h-12 w-12 border border-border/50 shadow-md hover:bg-accent"
      >
        {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
      </Button>

      {isMenuOpen && (
        <div className="fixed left-0 top-0 h-full w-72 bg-background border-r shadow-lg p-5 z-40 overflow-y-auto">
          <div className="mt-20">
            <nav className="flex flex-col space-y-5">
              {menuItems.map((item) => (
                item.href === '/services' ?
                  <div key={item.label} className="space-y-3">
                    <div 
                      className={`flex items-center justify-between px-4 py-2.5 text-lg rounded-md hover:bg-accent/50 cursor-pointer ${
                        pathname.startsWith(item.href) ? 'text-primary font-semibold' : 'text-foreground/90'
                      }`}
                      onClick={toggleServices}
                    >
                      {item.label}
                      {isServicesOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </div>
                    
                    {isServicesOpen && (
                      <div className="ml-4 space-y-3 border-l-2 border-primary/30 pl-4">
                        {servicesItems.map(service => (
                          <Link
                            key={service.label}
                            to={service.href}
                            className={`block px-4 py-2 text-base rounded-md hover:bg-accent/30 ${
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
                    className={`px-4 py-2.5 text-lg rounded-md hover:bg-accent/50 ${
                      pathname === item.href ? 'text-primary font-semibold' : 'text-foreground/90'
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>
            
            <Button 
              asChild 
              className="w-full mt-6 py-2.5 text-lg font-medium"
              size="lg"
            >
              <Link to="/book-demo" onClick={toggleMenu}>Book A Call</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandscapeMobileMenu; 