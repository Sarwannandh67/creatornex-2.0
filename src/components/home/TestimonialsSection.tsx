
"use client";
import Image from 'next/image';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { Card, CardContent } from '@/components/ui/card';
import type { Testimonial } from '@/types';
import { Quote, Star } from 'lucide-react';

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
    <Card className="h-full rounded-2xl border-border bg-card/80 p-6 shadow-xl backdrop-blur-sm flex flex-col whitespace-normal">
      <CardContent className="p-0 flex flex-col flex-grow">
        <div className="flex items-center mb-4">
          {testimonial.clientAvatarUrl && (
            <div className="relative h-12 w-12 mr-4 rounded-full overflow-hidden">
              <Image src={testimonial.clientAvatarUrl} alt={testimonial.clientName} layout="fill" objectFit="cover" data-ai-hint={testimonial.avatarHint}/>
            </div>
          )}
          <div>
            <p className="font-semibold text-foreground">{testimonial.clientName}</p>
            {testimonial.clientRole && testimonial.clientCompany && (
              <p className="text-sm text-muted-foreground">{testimonial.clientRole}, {testimonial.clientCompany}</p>
            )}
          </div>
        </div>
        <Quote className="h-8 w-8 text-accent mb-2 transform -scale-x-100" />
        <blockquote className="text-muted-foreground italic leading-relaxed flex-grow break-words">
          "{testimonial.quote}"
        </blockquote>
        <div className="flex mt-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialsSection() {
  // Duplicate testimonials for a smoother infinite scroll effect
  const duplicatedTestimonials = [...homePageTestimonials, ...homePageTestimonials];

  return (
    <SectionWrapper className="bg-gradient-to-b from-background to-card">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          What Our <Highlight>Clients Say</Highlight>
        </h2>
      </div>
      <div 
        className="w-full overflow-hidden relative"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
        }}
      >
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div 
              key={`${testimonial.id}-${index}`} 
              className="flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[30vw] lg:w-[23vw] mx-3" // Adjusted width and margin
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
