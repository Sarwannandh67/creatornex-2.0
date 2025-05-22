"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Briefcase, 
  Users, 
  Lightbulb, 
  Mail, 
  Sparkles, 
  Rss, 
  ShoppingBag, 
  Home, 
  HelpCircle, 
  ChevronDown, 
  Bot, 
  MessageSquare, 
  Palette, 
  Film, 
  Search as SearchIcon 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { NavLinkItem } from '@/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { LucideIcon as LucideIconType } from 'lucide-react';

const navLinks: NavLinkItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/portfolio', label: 'Portfolio', icon: Briefcase },
  { href: '/about', label: 'About Us', icon: Users },
  { href: '/blog', label: 'Blog', icon: Rss },
  { href: '/careers', label: 'Careers', icon: Briefcase },
  { href: '/faqs', label: 'FAQs', icon: HelpCircle },
  { href: '/contact', label: 'Contact', icon: Mail },
];

const servicesForDropdown: { label: string; href: string; icon?: LucideIconType }[] = [ 
  { label: 'AI Agents', href: '/services/ai-agents-service', icon: Bot },
  { label: 'Social Media Marketing', href: '/services/social-media-marketing', icon: MessageSquare },
  { label: 'Influencer Marketing', href: '/services/influencer-marketing', icon: Users },
  { label: 'Logo & Poster Design', href: '/services/logo-poster-design', icon: Palette },
  { label: 'Video Editing & Thumbnails', href: '/services/video-editing', icon: Film },
  { label: 'Search Engine Optimization', href: '/services/seo-service', icon: SearchIcon },
];

const Logo = () => (
  <Link href="/" className="flex items-center">
    <Image
      src="/logo.png"
      alt="CreatorNex"
      width={160}
      height={40}
      className="h-8 sm:h-10 w-auto object-contain"
      priority
    />
  </Link>
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeSheet = () => setIsMobileMenuOpen(false);

  const mobileNavLinks: NavLinkItem[] = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/services', label: 'Services', icon: ShoppingBag },
    ...navLinks.filter(link => link.href !== '/' && link.href !== '/services'), 
  ];
  
  const homeLink = navLinks.find(link => link.href === '/');
  const desktopOtherLinks = navLinks.filter(link => link.href !== '/' && link.href !== '/services');

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/90 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 max-w-screen-xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center space-x-1 md:flex">
          {homeLink && (
             <Button
              key={homeLink.label}
              variant="ghost"
              asChild
              className={cn(
                "px-3 py-2 text-muted-foreground hover:text-accent hover:bg-transparent text-sm",
                pathname === homeLink.href && "text-accent font-semibold"
              )}
            >
              <Link href={homeLink.href}><span>{homeLink.label}</span></Link>
            </Button>
          )}

          <DropdownMenu>
              <DropdownMenuTrigger asChild>
                  <Button
                      variant="ghost"
                      className={cn(
                          "px-3 py-2 text-muted-foreground hover:text-accent hover:bg-transparent text-sm flex items-center",
                          pathname.startsWith('/services') && "text-accent font-semibold"
                      )}
                  >
                      <span>Services</span> <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-card text-card-foreground border-border shadow-lg rounded-xl">
                  <DropdownMenuItem asChild>
                       <Link href="/services" className="flex items-center w-full px-2 py-1.5 text-sm hover:bg-muted/50 rounded-md">
                          <ShoppingBag className="mr-2 h-4 w-4" /> <span>All Services</span>
                      </Link>
                  </DropdownMenuItem>
                  {servicesForDropdown.map((service) => (
                      <DropdownMenuItem key={service.label} asChild>
                          <Link href={service.href} className="flex items-center w-full px-2 py-1.5 text-sm hover:bg-muted/50 rounded-md">
                             {service.icon && <service.icon className="mr-2 h-4 w-4" />}
                             <span>{service.label}</span>
                          </Link>
                      </DropdownMenuItem>
                  ))}
              </DropdownMenuContent>
          </DropdownMenu>

          {desktopOtherLinks.map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              asChild
              className={cn(
                "px-3 py-2 text-muted-foreground hover:text-accent hover:bg-transparent text-sm",
                pathname === link.href && "text-accent font-semibold"
              )}
            >
              <Link href={link.href}><span>{link.label}</span></Link>
            </Button>
          ))}
        </nav>
        <Button
          asChild
          className="hidden rounded-2xl btn-purple px-3 py-2 text-primary-foreground transition-all duration-300 ease-in-out hover:scale-110 md:flex"
        >
          <Link href="/contact#quote"><span>Hire Us!!</span></Link>
        </Button>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background p-6">
              <div className="mb-8 flex items-center justify-between">
                <Logo />
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="text-foreground hover:text-accent">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-3">
                {mobileNavLinks.map((link) => ( 
                  <SheetClose key={link.label} asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center space-x-3 rounded-md px-3 py-3 text-lg font-medium text-muted-foreground hover:bg-muted/50 hover:text-accent",
                        pathname === link.href && "bg-muted/50 text-accent"
                      )}
                      onClick={closeSheet}
                    >
                      {link.icon && <link.icon className="h-5 w-5" />}
                      <span>{link.label}</span>
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <Button
                asChild
                className="mt-8 w-full rounded-2xl btn-purple px-3 py-2 text-primary-foreground transition-all duration-300 ease-in-out hover:scale-110"
                onClick={closeSheet}
              >
                <Link href="/contact#quote"><span>Hire Us!!</span></Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

