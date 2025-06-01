import { HeroSection } from '@/components/home/HeroSection';
import { ServiceHighlights } from '@/components/home/ServiceHighlights';
import { WhoWeAreSection } from '@/components/home/WhoWeAreSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { BlogPreview } from '@/components/home/BlogPreview';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { CallToActionSection } from '@/components/home/CallToActionSection';
import { Helmet } from 'react-helmet-async';
import { PageTransition } from "@/components/ui/PageTransition";
import { Suspense, useEffect } from 'react';

// Loading fallback for sections
const SectionLoading = () => <div className="w-full h-60 animate-pulse bg-card/30 rounded-xl"></div>;

export default function Home() {
  useEffect(() => {
    console.log('Home component mounted');
  }, []);

  return (
    <>
      <Helmet>
        <title>CreatorNex LLC - Powering Your Social & AI Presence</title>
        <meta name="description" content="CreatorNex LLC offers AI Agents, Social Media Marketing, Design, and Video services to elevate your brand. Book a free consult today!" />
      </Helmet>
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
    </>
  );
}
