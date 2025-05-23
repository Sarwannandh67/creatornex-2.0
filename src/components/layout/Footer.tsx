import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const companyLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/team', label: 'Team' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
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

const connectLinks = [
  { to: '/contact', label: 'Contact Us' },
  { to: '/support', label: 'Support' },
  { to: '/book-demo', label: 'Book a Demo' },
  { to: '/partner-program', label: 'Partner Program' },
  { to: '/events', label: 'Events' },
];

const socialLinks = [
  { href: 'https://facebook.com/creatornex', icon: Facebook },
  { href: 'https://twitter.com/creatornex', icon: Twitter },
  { href: 'https://instagram.com/creator.nex', icon: Instagram },
  { href: 'https://linkedin.com/company/creatornex', icon: Linkedin },
  { href: 'https://github.com/creatornex', icon: Github },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        {/* Top Section with Logo and Contact */}
        <div className="mb-8 sm:mb-12">
          <Link to="/" className="inline-block">
            <img
              src="/logo.png"
              alt="CreatorNex"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto object-contain"
              loading="eager"
            />
          </Link>
          <p className="mt-4 max-w-md text-sm sm:text-base text-muted-foreground">
            India's First AI Agent-Powered Influencer & Business Marketing Platform. Revolutionizing digital marketing with innovative AI-driven solutions.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
            <div className="flex items-center">
              <span className="text-muted-foreground">📞</span>
              <span className="ml-2 text-sm text-muted-foreground">+91 7416086946</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-border" />
            <div className="flex items-center">
              <span className="text-muted-foreground">✉️</span>
              <span className="ml-2 text-sm text-muted-foreground">creatornex.main@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-foreground">Resources</h3>
            <ul className="mt-4 space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <ul className="mt-4 space-y-2.5">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <h3 className="text-sm font-semibold text-foreground">Stay Updated</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates on digital innovation and AI services.
            </p>
            <form className="mt-4 space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center space-y-4 border-t border-border pt-8 sm:flex-row sm:justify-between sm:space-y-0">
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-center text-muted-foreground order-3 sm:order-2">
            © {currentYear} CreatorNex. All rights reserved.
          </p>

          {/* Bottom Links */}
          <div className="flex flex-wrap justify-center gap-4 order-2 sm:order-3">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
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

