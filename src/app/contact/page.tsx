import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { ContactForm } from '@/components/contact/ContactForm';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, MessageCircle /* WhatsApp */ } from 'lucide-react';
import type { SocialLink } from '@/types';

export const metadata: Metadata = {
  title: 'Contact CreatorNex',
  description: "Get in touch with CreatorNex. Reach out via our contact form, email, or social media. We're here to discuss your AI and digital solution needs.",
};

const socialLinks: SocialLink[] = [
  { href: 'https://linkedin.com/company/creatornex', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://x.com/creatornex', label: 'Twitter', icon: Twitter },
  { href: 'https://instagram.com/creator.nex', label: 'Instagram', icon: Instagram },
];

// Wrap ContactForm in Suspense because it uses useSearchParams
const ContactFormWrapper = () => (
  <Suspense fallback={<div>Loading form...</div>}>
    <ContactForm />
  </Suspense>
);


export default function ContactPage() {
  const WHATSAPP_NUMBER = "917416086946"; // Updated with the provided number
  const WHATSAPP_MESSAGE = "Hello CreatorNex, I'm interested in your services.";

  return (
    <>
      <SectionWrapper className="bg-gradient-to-b from-background to-card pt-24 md:pt-32" id="quote">
        <div className="text-center max-w-3xl mx-auto">
          <Mail className="h-16 w-16 text-accent mx-auto mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Let's <Highlight>Talk</Highlight>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            We're excited to hear from you! Whether you have a project idea, a question about our services, or just want to say hello, please don't hesitate to reach out.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="flex items-start">
                  <MapPin className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>Chennai, Tamil Nadu, India</span>
                </p>
                <p className="flex items-start">
                  <Mail className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  <Link href="mailto:creatornex.main@gmail.com" className="hover:text-accent">creatornex.main@gmail.com</Link>
                </p>
                <p className="flex items-start">
                  <Phone className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  <Link href="tel:+917416086946" className="hover:text-accent">+917416086946</Link>
                </p>
                <p className="flex items-start">
                  <MessageCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" /> {/* Using MessageCircle as generic chat icon */}
                  <Link 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-accent"
                  >
                    Chat on WhatsApp
                  </Link>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Button key={social.label} variant="outline" size="icon" className="rounded-full border-primary text-primary hover:bg-primary/10 hover:text-accent" asChild>
                    <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

          </div>

          <div className="bg-background p-8 rounded-2xl shadow-2xl border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Send Us a Message</h2>
            <ContactFormWrapper />
          </div>
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="p-0 md:p-0 lg:p-0 max-w-full" containerClassName="px-0 max-w-full">
        <div className="h-[400px] md:h-[500px] w-full bg-gradient-to-b from-background to-card">
          {/* Placeholder for Google Map Integration */}
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">
              Google Map will be integrated here. For now, find us at our placeholder address.
              <br />
              (To implement, use `@vis.gl/react-google-maps` and a Google Maps API Key)
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
