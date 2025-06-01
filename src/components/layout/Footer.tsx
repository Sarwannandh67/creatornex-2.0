import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTheme } from "@/components/theme/ThemeProvider";

const companyLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/team', label: 'Team' },
  { to: '/careers', label: 'Careers' },
];

const serviceLinks = [
  { to: '/services/ai-agents', label: 'AI Agents' },
  { to: '/services/social-media-marketing', label: 'Social Media Marketing' },
  { to: '/services/influencer-marketing', label: 'Influencer Marketing' },
  { to: '/services/logo-poster-design', label: 'Logo & Poster Design' },
  { to: '/services/video-editing', label: 'Video Editing' },
  { to: '/services/seo-service', label: 'SEO Services' },
];

const resourceLinks = [
  { to: '/blog', label: 'Blog' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/documentation', label: 'Documentation' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/newsletter', label: 'Newsletter' },
];

const legalLinks = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-of-service', label: 'Terms of Service' },
  { to: '/cookie-policy', label: 'Cookie Policy' },
  { to: '/accessibility', label: 'Accessibility' },
];

const quickLinks = [
  { to: '/partner-program', label: 'Partner Program' },
  { to: '/book-demo', label: 'Book Demo' },
  { to: '/events', label: 'Events' },
  { to: '/support', label: 'Support' },
  { to: '/contact', label: 'Contact Us' },
];

interface SocialLink {
  href: string;
  icon: React.ElementType;
  label: string;
}

const socialLinks: SocialLink[] = [
  { 
    href: 'https://www.facebook.com/profile.php?id=61576858113996', 
    icon: Facebook,
    label: 'Follow us on Facebook'
  },
  { 
    href: 'https://twitter.com/creatornex', 
    icon: Twitter,
    label: 'Follow us on Twitter'
  },
  { 
    href: 'https://instagram.com/creator.nex', 
    icon: Instagram,
    label: 'Follow us on Instagram'
  },
  { 
    href: 'https://linkedin.com/company/creatornex', 
    icon: Linkedin,
    label: 'Follow us on LinkedIn'
  },
  { 
    href: 'https://www.youtube.com/@creatornex', 
    icon: Youtube,
    label: 'Subscribe on YouTube'
  },
  { 
    href: 'https://wa.me/917416086946', 
    icon: MessageCircle,
    label: 'Chat on WhatsApp'
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  const lightThemeBackground = `
    radial-gradient(ellipse 80% 50% at 50% 0%, rgba(147, 51, 234, 0.1) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 80% 20%, rgba(147, 51, 234, 0.05) 0%, transparent 50%),
    radial-gradient(ellipse 100% 80% at 20% 80%, rgba(79, 70, 229, 0.05) 0%, transparent 60%),
    linear-gradient(180deg, #ffffff 0%, #f8f9fa 20%, #f1f3f5 40%, #e9ecef 60%, #ffffff 100%)
  `;

  const darkThemeBackground = `
    radial-gradient(ellipse 80% 50% at 50% 0%, rgba(88, 28, 135, 0.3) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 80% 20%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse 100% 80% at 20% 80%, rgba(79, 70, 229, 0.1) 0%, transparent 60%),
    linear-gradient(180deg, #050505 0%, #0a0a0f 20%, #1a1127 40%, #0f0f1a 60%, #000000 100%)
  `;

  return (
    <footer className="relative" style={{
      background: theme === 'light' ? lightThemeBackground : darkThemeBackground
    }}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        {/* Top Section with Logo and Contact */}
        <div className="mb-12 sm:mb-16">
          <Link to="/" className="inline-block">
            <img
              src={theme === 'light' ? "/logo-light.png" : "/logo.png"}
              alt="CreatorNex LLC"
              className="h-10 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-md text-sm sm:text-base text-muted-foreground">
            India's First AI Agent-Powered Influencer & Business Marketing Platform. Revolutionizing digital marketing with innovative AI-driven solutions.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
            <div className="flex items-center">
              <span className="text-foreground">📞</span>
              <span className="ml-2 text-sm text-muted-foreground">+91 7416086946</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-border" />
            <div className="flex items-center">
              <span className="text-foreground">✉️</span>
              <span className="ml-2 text-sm text-muted-foreground">admin@creatornex.com</span>
            </div>
          </div>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-3 lg:grid-cols-7">
          {/* Company Links */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-2 sm:mt-4 space-y-1.5 sm:space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-2 sm:mt-4 space-y-1.5 sm:space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-2 sm:mt-4 space-y-1.5 sm:space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-foreground">Resources</h3>
            <ul className="mt-2 sm:mt-4 space-y-1.5 sm:space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-foreground">Legal</h3>
            <ul className="mt-2 sm:mt-4 space-y-1.5 sm:space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold text-foreground">Stay Updated</h3>
            <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates on digital innovation and AI services.
            </p>
            <form className="mt-2 sm:mt-4 space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full h-8 sm:h-9 text-xs sm:text-sm bg-background/50 border-border focus:border-foreground"
              />
              <Button type="submit" className="w-full h-8 sm:h-9 text-xs sm:text-sm bg-foreground text-background hover:bg-foreground/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 sm:mt-12 flex flex-col items-center space-y-3 sm:space-y-4 border-t border-border/50 pt-6 sm:pt-8 sm:flex-row sm:justify-between sm:space-y-0">
          {/* Copyright */}
          <p className="text-xs sm:text-sm text-center text-muted-foreground order-3 sm:order-1">
            © {currentYear} CreatorNex LLC. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 order-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label={link.label}
              >
                <link.icon className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
              </a>
            ))}
          </div>

          {/* Bottom Links */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 order-1 sm:order-3">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = 'Footer';
export default Footer;

