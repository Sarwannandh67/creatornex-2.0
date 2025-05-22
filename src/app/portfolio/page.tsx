import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { PortfolioItem, PortfolioCategory, Testimonial } from '@/types/index';
import { ArrowRight, Quote, Star } from 'lucide-react';

// Metadata is now handled via React Helmet

const categories: PortfolioCategory[] = ['AI Solutions', 'Web Development', 'Mobile Apps', 'Content Creation', 'Digital Strategy'];

const portfolioItems: PortfolioItem[] = [
  {
    id: 'project-alpha',
    title: 'AI-Powered Recommendation Engine',
    category: 'AI Solutions',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'AI network graph',
    description: 'Developed a sophisticated recommendation system that increased user engagement by 30%.',
    detailsUrl: '/portfolio/project-alpha',
    clientName: 'TechNova Solutions',
    results: [
      'Increased user engagement by 30%',
      'Reduced customer churn rate by 25%',
      'Improved content discovery accuracy by 45%'
    ],
    relatedTestimonial: {
      id: 'testimonial-hp-3',
      quote: 'Our new AI Agent, developed by CreatorNex, has revolutionized our customer support, handling queries with impressive accuracy and efficiency. We\'ve seen a noticeable drop in response times.',
      clientName: 'Karthik Reddy',
      clientRole: 'CTO',
      clientCompany: 'TechNova Solutions',
      avatarHint: 'scientist woman'
    }
  },
  {
    id: 'project-beta',
    title: 'Social Media Marketing Campaign',
    category: 'Digital Strategy',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'social media dashboard',
    description: 'Executed a comprehensive social media strategy that significantly boosted engagement and brand visibility.',
    detailsUrl: '/portfolio/project-beta',
    clientName: 'SocialBeats Media',
    results: [
      'Increased social media engagement by 150%',
      'Generated 2x more qualified leads',
      'Achieved 45% higher conversion rate'
    ],
    relatedTestimonial: {
      id: 'testimonial-hp-1',
      quote: 'CreatorNex\'s AI-driven strategies significantly boosted our social media engagement. Highly recommended for anyone looking to innovate!',
      clientName: 'Rohit Malhotra',
      clientRole: 'Marketing Manager',
      clientCompany: 'SocialBeats Media Pvt. Ltd.',
      avatarHint: 'woman professional'
    }
  },
  {
    id: 'project-gamma',
    title: 'Brand Identity & Design System',
    category: 'Content Creation',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'brand design showcase',
    description: 'Created a comprehensive brand identity and design system that elevated the brand\'s visual presence.',
    detailsUrl: '/portfolio/project-gamma',
    clientName: 'Verma Real Estates',
    results: [
      'Established consistent brand identity across platforms',
      'Increased brand recognition by 40%',
      'Improved marketing collateral efficiency'
    ],
    relatedTestimonial: {
      id: 'testimonial-hp-5',
      quote: 'From posters to social media graphics, the design team at CreatorNex consistently delivers high-quality, creative assets that align perfectly with our brand vision. They are a pleasure to work with.',
      clientName: 'Amit Verma',
      clientRole: 'Creative Director',
      clientCompany: 'Verma Real Estates',
      avatarHint: 'designer woman'
    }
  },
  {
    id: 'project-delta',
    title: 'Influencer Marketing Campaign',
    category: 'Digital Strategy',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'influencer campaign',
    description: 'Orchestrated a successful influencer marketing campaign that exceeded all KPIs.',
    detailsUrl: '/portfolio/project-delta',
    clientName: 'GlowUp Skincare',
    results: [
      'Exceeded campaign KPIs by 200%',
      'Achieved 3M+ social media impressions',
      'Generated 150% ROI on campaign spend'
    ],
    relatedTestimonial: {
      id: 'testimonial-hp-4',
      quote: 'The influencer marketing campaign managed by CreatorNex exceeded all our KPIs. Their network and strategic approach are top-notch. Communication was excellent throughout the project.',
      clientName: 'Pooja Sharma',
      clientRole: 'Founder',
      clientCompany: 'GlowUp Skincare',
      avatarHint: 'businesswoman suit'
    }
  },
  {
    id: 'project-epsilon',
    title: 'Fashion Brand Visual Identity',
    category: 'Content Creation',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'fashion brand design',
    description: 'Developed a stunning visual identity and marketing materials for a premium fashion brand.',
    detailsUrl: '/portfolio/project-epsilon',
    clientName: 'Desai Fashion Hub',
    results: [
      'Delivered project ahead of schedule',
      'Increased social media following by 80%',
      'Improved brand perception scores by 60%'
    ],
    relatedTestimonial: {
      id: 'testimonial-hp-2',
      quote: 'The logo and video editing work was exceptional and delivered ahead of schedule. True professionals who understand brand aesthetics.',
      clientName: 'Ananya Desai',
      clientRole: 'Founder',
      clientCompany: 'Desai Fashion Hub',
      avatarHint: 'man entrepreneur'
    }
  }
];

const testimonials: Testimonial[] = [
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
    clientName: 'Ananya Desai',
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
    clientCompany: 'Verma Real Estates',
    avatarHint: 'designer woman'
  }
];

export default function PortfolioPage() {
  return (
    <>
      <Helmet>
        <title>Our Work & Portfolio</title>
        <meta name="description" content="Explore the innovative projects and successful case studies by CreatorNex. See how we deliver impactful AI solutions, web designs, and digital experiences for our clients." />
      </Helmet>
      <SectionWrapper className="bg-gradient-to-b from-background to-card pt-24 md:pt-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Our <Highlight>Proven Success</Highlight>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            We take pride in the solutions we deliver and the partnerships we build. Explore a selection of our projects that showcase our expertise and commitment to excellence.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <Tabs defaultValue="All" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:w-auto lg:grid-cols-6 rounded-full p-1 bg-transparent gap-2">
              <TabsTrigger value="All" className="rounded-full">All</TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="rounded-full">{category}</TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="All">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {portfolioItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {portfolioItems.filter(item => item.category === category).map((item) => (
                  <PortfolioCard key={item.id} item={item} />
                ))}
                 {portfolioItems.filter(item => item.category === category).length === 0 && (
                    <p className="col-span-full text-center text-muted-foreground">No projects in this category yet. Check back soon!</p>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our <Highlight>Clients Say</Highlight>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about working with CreatorNex.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <Card className="group flex h-full transform flex-col overflow-hidden rounded-2xl border-border bg-background/50 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] backdrop-blur-sm">
      <CardHeader className="p-0">
        <div className="relative h-56 w-full">
          <img
            src={item.imageUrl}
            alt={item.title}
            width={600}
            height={400}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={item.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <span className="absolute top-4 right-4 bg-primary/80 text-primary-foreground text-xs px-2 py-1 rounded-md">{item.category}</span>
        </div>
      </CardHeader>
      <CardContent className="flex flex-grow flex-col p-6">
        <CardTitle className="text-xl text-foreground mb-2">{item.title}</CardTitle>
        <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
        {item.results && (
          <div className="mt-2 space-y-2">
            <p className="font-semibold text-sm text-foreground">Key Results:</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              {item.results.map((result: string, index: number) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        )}
        {item.relatedTestimonial && (
          <div className="mt-4 p-4 bg-accent/5 rounded-lg">
            <blockquote className="text-sm italic text-muted-foreground">"{item.relatedTestimonial.quote}"</blockquote>
            <div className="mt-2 text-sm">
              <span className="font-semibold text-foreground">{item.relatedTestimonial.clientName}</span>
              <span className="text-muted-foreground"> • {item.relatedTestimonial.clientRole}</span>
            </div>
          </div>
        )}
      </CardContent>
      {item.detailsUrl && (
        <CardFooter className="p-6 pt-0">
          <Button asChild variant="outline" className="w-full rounded-xl border-primary text-primary hover:bg-primary/10 hover:text-accent">
            <Link to={item.detailsUrl}>
              View Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="rounded-2xl border-border bg-background/50 p-6 shadow-xl backdrop-blur-sm">
      <CardContent className="p-0">
        <div className="flex items-center mb-4">
          {testimonial.clientAvatarUrl && (
            <div className="relative h-12 w-12 mr-4 rounded-full overflow-hidden">
              <img src={testimonial.clientAvatarUrl} alt={testimonial.clientName} width={48} height={48} className="absolute inset-0 w-full h-full object-cover" data-ai-hint={testimonial.avatarHint} />
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
        <blockquote className="text-muted-foreground italic leading-relaxed">
          "{testimonial.quote}"
        </blockquote>
        <div className="flex mt-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
        </div>
      </CardContent>
    </Card>
  );
}
