import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import type { PortfolioItem, Testimonial } from '@/types/index';
import { ArrowLeft, Calendar, CheckCircle, Globe, Quote, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

// Mock data store (in a real app, this would be fetched from an API)
const portfolioItems: PortfolioItem[] = [
  {
    id: 'project-alpha',
    title: 'AI-Powered Recommendation Engine',
    category: 'AI Solutions',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'AI network graph',
    description: 'Boosted user engagement by 30% with a custom AI recommendation system.',
    detailsUrl: '/portfolio/project-alpha',
    clientName: 'TechCorp Inc.',
    results: [
      'Increased user engagement by 30% within 3 months',
      'Improved content discovery metrics by 45%',
      'Reduced bounce rate by 25% across the platform',
      'Personalized recommendations achieved 80% relevance score'
    ],
    relatedTestimonial: {
      id: 'testimonial-1',
      clientName: 'Sarah Johnson',
      clientRole: 'CTO',
      clientCompany: 'TechCorp Inc.',
      clientAvatarUrl: 'https://placehold.co/200x200.png',
      avatarHint: 'Professional headshot of Sarah Johnson',
      quote: 'The AI recommendation engine developed by CreatorNex transformed our user experience. The team was exceptionally professional, delivering a solution that exceeded our expectations in both functionality and performance.'
    }
  },
  {
    id: 'project-beta',
    title: 'Enterprise Web Application Redesign',
    category: 'Web Development',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'Web application dashboard',
    description: 'Modernized legacy enterprise software with responsive design and improved UX.',
    detailsUrl: '/portfolio/project-beta',
    clientName: 'Global Finance Group',
    results: [
      'Reduced task completion time by 40%',
      'Improved system usability score from 65 to 88',
      'Decreased training time for new users by 50%',
      'Mobile adoption increased by 200%'
    ]
  },
  {
    id: 'project-gamma',
    title: 'Cross-Platform Mobile App Development',
    category: 'Mobile Apps',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'Mobile app screens',
    description: 'Developed a feature-rich mobile app that works seamlessly across iOS and Android.',
    detailsUrl: '/portfolio/project-gamma',
    clientName: 'HealthTrack Systems',
    results: [
      'Achieved 4.8/5 star rating on both app stores',
      'Onboarded 100,000+ users in first month',
      '99.9% uptime across all services',
      'Reduced development costs by 35% with shared codebase'
    ],
    relatedTestimonial: {
      id: 'testimonial-3',
      clientName: 'Michael Chen',
      clientRole: 'Product Manager',
      clientCompany: 'HealthTrack',
      clientAvatarUrl: 'https://placehold.co/200x200.png',
      avatarHint: 'Professional headshot of Michael Chen',
      quote: 'Working with CreatorNex on our mobile app was a game-changer. Their technical expertise and attention to detail resulted in a product that our users love. The cross-platform approach saved us significant resources while delivering a premium experience.'
    }
  }
];

export default function PortfolioDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [portfolioItem, setPortfolioItem] = useState<PortfolioItem | null>(null);
  
  useEffect(() => {
    // Find the portfolio item with the matching ID
    const item = portfolioItems.find(item => item.id === slug);
    setPortfolioItem(item || null);
  }, [slug]);

  if (!portfolioItem) {
    return (
      <>
        <Helmet>
          <title>Portfolio Item Not Found</title>
        </Helmet>
        <SectionWrapper className="py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Portfolio Item Not Found</h1>
            <p className="mt-4">The requested portfolio item could not be found.</p>
            <Button className="mt-8" asChild>
              <a href="/portfolio">Back to Portfolio</a>
            </Button>
          </div>
        </SectionWrapper>
      </>
    );
  }

  const { 
    title, 
    category, 
    imageUrl, 
    description, 
    clientName,
    results,
    relatedTestimonial
  } = portfolioItem;

  return (
    <>
      <Helmet>
        <title>{title} | CreatorNex Portfolio</title>
        <meta name="description" content={description} />
      </Helmet>
      
      {/* Hero Section */}
      <SectionWrapper className="pt-24 pb-8 md:pt-32 bg-gradient-to-b from-background to-card/50">
        <div className="flex flex-col gap-2 mb-8">
          <Button variant="ghost" className="w-fit p-0 flex items-center text-muted-foreground hover:text-foreground" asChild>
            <a href="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </a>
          </Button>
          <span className="text-sm font-medium text-primary">{category}</span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
            {clientName && (
              <div className="mt-6 flex items-center">
                <Globe className="h-5 w-5 text-muted-foreground mr-2" />
                <span className="text-muted-foreground">Client: <span className="text-foreground font-medium">{clientName}</span></span>
              </div>
            )}
          </div>
          
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border shadow-xl">
            <img 
              src={imageUrl} 
              alt={title} 
              width={600}
              height={400}
              className="w-full h-full object-cover"
              data-ai-hint={portfolioItem.imageHint}
            />
          </div>
        </div>
      </SectionWrapper>
      
      {/* Project Details */}
      <SectionWrapper className="py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Results Column */}
          {results && results.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Key Results</h2>
              <div className="space-y-4">
                {results.map((result: string, index: number) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Testimonial Column */}
          {relatedTestimonial && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Client Testimonial</h2>
              <Card className="border-border bg-background/50 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    {relatedTestimonial.clientAvatarUrl && (
                      <div className="relative h-12 w-12 mr-4 rounded-full overflow-hidden">
                        <img 
                          src={relatedTestimonial.clientAvatarUrl} 
                          alt={relatedTestimonial.clientName} 
                          width={48}
                          height={48}
                          className="absolute inset-0 w-full h-full object-cover"
                          data-ai-hint={relatedTestimonial.avatarHint} 
                        />
                      </div>
                    )}
                    <div>
                      <div className="font-semibold">{relatedTestimonial.clientName}</div>
                      <div className="text-sm text-muted-foreground">{relatedTestimonial.clientRole}{relatedTestimonial.clientCompany ? `, ${relatedTestimonial.clientCompany}` : ''}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    <Quote className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0" />
                    <p className="text-muted-foreground italic">{relatedTestimonial.quote}</p>
                  </div>
                  <div className="flex items-center mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i}
                        className="h-4 w-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </SectionWrapper>
      
      {/* CTA Section */}
      <SectionWrapper className="py-12 bg-card/50">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Ready to start your <Highlight>next project</Highlight>?
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Let's discuss how we can help bring your vision to reality with our expertise in {category}.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/book-demo">Book a Demo</a>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
