import { CalendarDays } from 'lucide-react';
import { Highlight } from '@/components/shared/Highlight';

export function BookDemoForm() {
  return (
    <>
      <div className="text-center max-w-3xl mx-auto">
        <CalendarDays className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Book a <Highlight>Demo</Highlight>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          Experience firsthand how our solutions can transform your business. Schedule a personalized demo with our team of experts.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-8">
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
    </>
  );
} 