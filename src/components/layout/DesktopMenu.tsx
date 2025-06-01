import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { href: '/', label: 'Home' },
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

const DesktopMenu: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className="hidden 2xl:flex items-center space-x-3 2xl:space-x-5">
      {/* Home link */}
      <Button
        key="home"
        variant="ghost"
        asChild
        size="default"
        className={cn(
          "px-3 sm:px-4 py-2 sm:py-2.5 text-base sm:text-lg font-medium",
          pathname === '/' && "text-primary font-semibold"
        )}
      >
        <Link to="/">Home</Link>
      </Button>

      {/* Services dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            size="default"
            className={cn(
              "px-3 sm:px-4 py-2 sm:py-2.5 text-base sm:text-lg font-medium",
              pathname.startsWith('/services') && "text-primary font-semibold"
            )}
          >
            Services <ChevronDown className="ml-1.5 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 p-2">
          {servicesItems.map((item) => (
            <DropdownMenuItem key={item.label} asChild className="text-base p-2.5 rounded-md">
              <Link to={item.href}>{item.label}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Other menu items */}
      {menuItems.slice(1).map((item) => (
        <Button
          key={item.label}
          variant="ghost"
          asChild
          size="default"
          className={cn(
            "px-3 sm:px-4 py-2 sm:py-2.5 text-base sm:text-lg font-medium",
            pathname === item.href && "text-primary font-semibold"
          )}
        >
          <Link to={item.href}>{item.label}</Link>
        </Button>
      ))}
    </nav>
  );
};

DesktopMenu.displayName = 'DesktopMenu';
export default DesktopMenu; 