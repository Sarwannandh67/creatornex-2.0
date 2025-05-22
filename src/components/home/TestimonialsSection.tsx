// Converted from Next.js to React
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { Card, CardContent } from '@/components/ui/card';
import type { Testimonial } from '@/types/index';
import { Quote, Star } from 'lucide-react';
import { useState } from 'react';

// In a real app, these would be fetched
const homePageTestimonials: Testimonial[] = [
  {
    id: 'testimonial-hp-1',
    quote: "CreatorNex's AI-driven strategies significantly boosted our social media engagement. Highly recommended for anyone looking to innovate!",
    clientName: 'Rohit Malhotra',
    clientRole: 'Marketing Manager',
    clientCompany: 'SocialBeats Media Pvt. Ltd.',
    avatarHint: 'woman professional'
  },
  {
    id: 'testimonial-hp-2',
    quote: "The logo and video editing work was exceptional and delivered ahead of schedule. True professionals who understand brand aesthetics.",
    clientName: 'Ananya Desai ',
    clientRole: 'Founder',
    clientCompany: 'Desai Fashion Hub',
    avatarHint: 'man entrepreneur'
  },
  {
    id: 'testimonial-hp-3',
    quote: "Our new AI Agent, developed by CreatorNex, has revolutionized our customer support, handling queries with impressive accuracy and efficiency. We've seen a noticeable drop in response times.",
    clientName: 'Karthik Reddy',
    clientRole: 'CTO',
    clientCompany: 'TechNova Solutions',
    avatarHint: 'scientist woman'
  },
  {
    id: 'testimonial-hp-4',
    quote: "The influencer marketing campaign managed by CreatorNex exceeded all our KPIs. Their network and strategic approach are top-notch. Communication was excellent throughout the project.",
    clientName: 'Pooja Sharma',
    clientRole: 'Founder',
    clientCompany: 'GlowUp Skincare',
    avatarHint: 'businesswoman suit'
  },
  {
    id: 'testimonial-hp-5',
    quote: "From posters to social media graphics, the design team at CreatorNex consistently delivers high-quality, creative assets that align perfectly with our brand vision. They are a pleasure to work with.",
    clientName: 'Amit Verma',
    clientRole: 'Creative Director',
    clientCompany: ' Verma Real Estates',
    avatarHint: 'designer woman'
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full rounded-2xl border-border bg-card/80 p-3 sm:p-6 shadow-xl backdrop-blur-sm flex flex-col whitespace-normal">
      <CardContent className="p-0 flex flex-col flex-grow">
        <div className="flex items-center mb-2 sm:mb-4">
          {testimonial.clientAvatarUrl && (
            <div className="relative h-8 w-8 sm:h-12 sm:w-12 mr-2 sm:mr-4 rounded-full overflow-hidden">
              <img 
                src={testimonial.clientAvatarUrl} 
                alt={testimonial.clientName} 
                width={48} 
                height={48} 
                loading="lazy"
                className="w-full h-full object-cover" 
                data-ai-hint={testimonial.avatarHint}
              />
            </div>
          )}
          <div>
            <p className="font-semibold text-foreground text-xs sm:text-base">{testimonial.clientName}</p>
            {testimonial.clientRole && testimonial.clientCompany && (
              <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.clientRole}, {testimonial.clientCompany}</p>
            )}
          </div>
        </div>
        <Quote className="h-5 w-5 sm:h-8 sm:w-8 text-accent mb-1 sm:mb-2 transform -scale-x-100" />
        <blockquote className="text-xs sm:text-base text-muted-foreground italic leading-relaxed flex-grow break-words line-clamp-4 sm:line-clamp-none">
          "{testimonial.quote}"
        </blockquote>
        <div className="flex mt-2 sm:mt-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 sm:h-5 sm:w-5 text-yellow-400 fill-yellow-400" />)}
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialsSection() {
  // For mobile view swipe functionality (simplified version)
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // On mobile, show testimonials one by one instead of marquee
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % homePageTestimonials.length);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + homePageTestimonials.length) % homePageTestimonials.length);
  };

  // Duplicate testimonials for a smoother infinite scroll effect on desktop
  const duplicatedTestimonials = [...homePageTestimonials, ...homePageTestimonials];

  return (
    <SectionWrapper className="bg-gradient-to-b from-background to-card">
      <div className="text-center mb-6 sm:mb-12">
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-foreground sm:text-4xl px-4">
          What Our <Highlight>Clients Say</Highlight>
        </h2>
      </div>
      
      {/* Mobile view (swipeable cards) */}
      <div className="md:hidden px-4 relative">
        <div className="mb-4">
          <TestimonialCard testimonial={homePageTestimonials[currentIndex]} />
        </div>
        
        <div className="flex justify-center items-center gap-2">
          <button 
            onClick={handlePrev}
            className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full"
            aria-label="Previous testimonial"
          >
            &lt;
          </button>
          
          <div className="flex gap-1">
            {homePageTestimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full ${idx === currentIndex ? 'bg-primary' : 'bg-primary/30'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={handleNext}
            className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full"
            aria-label="Next testimonial"
          >
            &gt;
          </button>
        </div>
      </div>
      
      {/* Desktop view (marquee) */}
      <div 
        className="hidden md:block w-full overflow-hidden relative"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
        }}
      >
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div 
              key={`${testimonial.id}-${index}`} 
              className="flex-shrink-0 w-[30vw] lg:w-[23vw] mx-3" 
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
