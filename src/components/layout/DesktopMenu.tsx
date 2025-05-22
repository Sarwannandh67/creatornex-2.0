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
  { href: '/services/social-media-marketing', label: 'Social Media Marketing' },
  { href: '/services/influencer-marketing', label: 'Influencer Marketing' },
  { href: '/services/logo-poster-design', label: 'Logo & Poster Design' },
  { href: '/services/video-editing', label: 'Video Editing & Thumbnails' },
  { href: '/services/seo-service', label: 'Search Engine Optimization' },
];

const DesktopMenu: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className="hidden md:flex items-center space-x-4">
      {/* Home link */}
      <Button
        key="home"
        variant="ghost"
        asChild
        className={cn(
          "px-3 py-2",
          pathname === '/' && "text-primary"
        )}
      >
        <Link to="/">Home</Link>
      </Button>

      {/* Services dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className={cn(
            "px-3 py-2",
            pathname.startsWith('/services') && "text-primary"
          )}>
            Services <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {servicesItems.map((item) => (
            <DropdownMenuItem key={item.label} asChild>
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
          className={cn(
            "px-3 py-2",
            pathname === item.href && "text-primary"
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