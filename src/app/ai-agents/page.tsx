import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bot, Zap, Brain, Users, MessageSquare, Palette, Film, ShoppingBag, ArrowRight } from 'lucide-react';
import type { Service } from '@/types';

const servicesData: Service[] = [
  {
    id: 'ai-agents-service',
    icon: Bot,
    title: 'AI Agents as a Service',
    description: 'Deploy intelligent AI agents to automate tasks, enhance customer interactions, and provide data-driven insights for your business.',
    cta: { href: '/services/ai-agents-service', label: 'Explore AI Agents' },
    slug: 'ai-agents-service'
  },
  {
    id: 'social-media-marketing',
    icon: MessageSquare, 
    title: 'Social Media Marketing',
    description: 'Boost your online presence with targeted social media campaigns, engaging content strategies, and community management.',
    cta: { href: '/services/social-media-marketing', label: 'Elevate Your Social' },
    slug: 'social-media-marketing'
  },
  {
    id: 'influencer-marketing',
    icon: Users, 
    title: 'Influencer Marketing',
    description: 'Connect with key influencers to amplify your brand message, build credibility, and reach new, relevant audiences.',
    cta: { href: '/services/influencer-marketing', label: 'Collaborate with Influencers' },
    slug: 'influencer-marketing'
  },
  {
    id: 'logo-poster-design',
    icon: Palette,
    title: 'Logo & Poster Design',
    description: 'Craft a compelling visual identity with unique logos and striking poster designs that capture attention and communicate your brand.',
    cta: { href: '/services/logo-poster-design', label: 'Design Your Brand' },
    slug: 'logo-poster-design'
  },
  {
    id: 'video-editing',
    icon: Film,
    title: 'Video Editing & Thumbnails',
    description: 'Professional video editing services and eye-catching thumbnail designs to make your video content stand out and maximize engagement.',
    cta: { href: '/services/video-editing', label: 'Enhance Your Videos' },
    slug: 'video-editing'
  },
];

export default function ServicesPage() {
  return (
    <>
      <SectionWrapper className="bg-card pt-24 md:pt-32">
        <div className="text-center max-w-3xl mx-auto">
          <ShoppingBag className="h-16 w-16 text-accent mx-auto mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Our <Highlight>Services</Highlight>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            CreatorNex provides a comprehensive suite of digital and AI services designed to elevate your brand, streamline operations, and drive growth. We tailor solutions to meet your unique business needs.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <Card key={service.id} className="flex h-full transform flex-col overflow-hidden rounded-2xl border-border bg-background/50 shadow-xl transition-all duration-300 hover:shadow-primary/20 hover:scale-[1.02] backdrop-blur-sm">
              <CardHeader className="items-start">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-muted-foreground leading-relaxed">{service.description}</CardDescription>
              </CardContent>
              <CardContent>
                <Button asChild variant="link" className="group px-0 text-accent hover:text-primary">
                  <Link to={service.cta.href || `/services/${service.slug}`}>
                    {service.cta.label} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

       <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to <Highlight>Transform Your Business</Highlight>?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Let's discuss how CreatorNex can help you leverage our expertise to achieve your goals. Contact us today for a personalized consultation.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="mt-8 rounded-2xl bg-primary-foreground px-10 py-4 text-lg text-primary shadow-lg transition-all hover:bg-primary-foreground/90 hover:scale-105"
          >
            <Link to="/contact?subject=Service+Quote+Inquiry">Get a Quote</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
} 