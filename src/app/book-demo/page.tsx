import { Metadata } from 'next';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { CalendarDays } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book a Demo | CreatorNex',
  description: 'Schedule a personalized demo to see how CreatorNex can transform your digital presence with AI-powered solutions.',
};

export default function BookDemoPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-b from-background to-card pt-24 md:pt-32">
        <div className="text-center max-w-3xl mx-auto">
          <CalendarDays className="h-16 w-16 text-accent mx-auto mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Book a <Highlight>Demo</Highlight>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Experience firsthand how our solutions can transform your business. Schedule a personalized demo with our team of experts.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-lg shadow-lg bg-card">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSePFHlmKYINzTuoPgQR2uHdhFAONmQFWl49xq0BWFWc7NhieA/viewform?embedded=true"
              className="w-full h-[1896px] border-0"
              title="Demo Request Form"
            >
              Loading...
            </iframe>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
} 