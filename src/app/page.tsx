import { HeroSection } from '@/components/home/HeroSection';
import { ServiceHighlights } from '@/components/home/ServiceHighlights';
import { WhoWeAreSection } from '@/components/home/WhoWeAreSection'; // "About Us Snapshot"
import { TestimonialsSection } from '@/components/home/TestimonialsSection'; // New
import { BlogPreview } from '@/components/home/BlogPreview'; // New
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { CheckCircle, Award, Users, DollarSign, Clock } from 'lucide-react'; // Added new icons for WhyChooseUs
import { PageTransition } from "@/components/ui/PageTransition";
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'CreatorNex - Powering Your Social & AI Presence',
  description: 'CreatorNex offers AI Agents, Social Media Marketing, Design, and Video services to elevate your brand. Book a free consult today!',
};

// Loading fallbacks for different sections
const SectionLoading = () => <div className="w-full h-60 animate-pulse bg-card/30 rounded-xl"></div>;

// Updated Why Choose Us / Features section
const WhyChooseUs = () => (
  <SectionWrapper className="bg-gradient-to-b from-background to-card">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Why Partner with <Highlight>CreatorNex</Highlight>?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          We're committed to delivering exceptional results and a seamless experience for our clients.
        </p>
        <ul className="mt-6 space-y-4">
          {[
            { text: "Fast Turnaround: Efficient processes to deliver quality work, promptly.", icon: Clock },
            { text: "Data-Driven Strategies: AI-powered insights for optimal campaign performance.", icon: Award }, // Using Award for data-driven
            { text: "Dedicated Account Manager: Personalized support and communication every step of the way.", icon: Users },
            { text: "Transparent Pricing: Clear, upfront costs with no hidden fees.", icon: DollarSign },
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <item.icon className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <Button asChild size="lg" variant="default" className="mt-8 rounded-2xl px-8 py-3 text-lg hover:scale-105 transition-transform bg-accent hover:bg-accent/90">
          <Link href="/contact?subject=Partnership+Inquiry">Discuss Your Needs</Link>
        </Button>
      </div>
      <div className="relative h-80 md:h-96">
        <Image
          src="/partnership.jpg"
          alt="Team discussing data-driven strategies"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-xl shadow-xl object-cover"
          priority={false}
          loading="lazy"
        />
      </div>
    </div>
  </SectionWrapper>
);

// Placeholder for a CTA section - This can be removed if primary CTA in Hero is enough, or kept.
const CallToActionSection = () => (
  <SectionWrapper className="bg-background border-t border-border py-16 md:py-24">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Ready to <Highlight>Transform</Highlight> Your Business?
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Let's discuss how CreatorNex can help you leverage the power of AI and innovative digital solutions to achieve your goals.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          asChild
          size="lg"
          variant="default"
          className="mt-8 rounded-2xl px-8 py-3 text-lg hover:scale-105 transition-transform bg-accent hover:bg-accent/90"
        >
          <Link href="/contact?subject=Free+Consultation">Get Free Consultation</Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="mt-8 rounded-2xl px-8 py-3 text-lg shadow-lg transition-all hover:scale-105 border-accent text-accent hover:bg-accent/90 hover:text-accent w-full sm:w-auto"
        >
          <Link href="/services">Explore Services</Link>
        </Button>
      </div>
    </div>
  </SectionWrapper>
);

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <Suspense fallback={<SectionLoading />}>
        <ServiceHighlights />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <WhyChooseUs />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <WhoWeAreSection />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <BlogPreview />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <CallToActionSection />
      </Suspense>
    </PageTransition>
  );
}
