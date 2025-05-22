import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bot, MessageSquare, Users, Palette, Film, ShoppingBag, ArrowRight, Search, Code } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Define locally to avoid import issues
interface CtaLink {
  href: string;
  label: string;
}

interface ServiceType {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  cta: CtaLink;
  slug: string;
}

// Metadata is now handled via React Helmet

const servicesData: ServiceType[] = [
  {
    id: 'ai-agents-service',
    icon: Bot,
    title: 'AI Agents as a Service',
    description: 'Deploy intelligent AI agents to automate tasks, enhance customer interactions, and provide data-driven insights for your business.',
    cta: { href: '/services/ai-agents-service', label: 'Explore AI Agents' },
    slug: 'ai-agents-service'
  },
  {
    id: 'web-development',
    icon: Code,
    title: 'Web Development Solutions',
    description: 'Crafting modern, responsive, and high-performance websites that drive engagement and deliver exceptional user experiences.',
    cta: { href: '/services/web-development', label: 'Explore Web Development' },
    slug: 'web-development'
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
  {
    id: 'seo-service',
    icon: Search,
    title: 'Search Engine Optimization',
    description: "Improving your website's visibility in search engine results to attract organic traffic.",
    cta: { href: '/services/seo-service', label: 'Boost Your SEO' },
    slug: 'seo-service'
  },
];


export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services - CreatorNex</title>
        <meta name="description" content="Explore the range of services offered by CreatorNex, including AI Agents, Social Media Marketing, Influencer Marketing, Logo & Poster Design, Video Editing, and SEO. Powering your digital presence." />
      </Helmet>
      <SectionWrapper className="bg-gradient-to-b from-background to-card pt-24 md:pt-32">
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

      <SectionWrapper className="bg-gradient-to-b from-background to-card">
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

       <SectionWrapper className="bg-card border-t border-border">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to <Highlight>Transform</Highlight> Your Business?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let's discuss how CreatorNex can help you leverage our expertise to achieve your goals. Contact us today for a personalized consultation.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 rounded-2xl px-10 py-6 text-lg shadow-lg transition-all hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link to="/contact?subject=Service+Quote+Inquiry">Get a Quote</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
