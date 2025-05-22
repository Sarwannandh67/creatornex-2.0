
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { ServiceCard } from '@/components/home/ServiceCard';
import type { Service } from '@/types';
import { Bot, Share2, Users, Palette, Film, MessageSquare, Search } from 'lucide-react'; // Updated icons
import { Highlight } from '@/components/shared/Highlight';

const servicesData: Service[] = [
  {
    id: 'ai-agents-service',
    icon: Bot,
    title: 'AI Agents as a Service',
    description: 'Deploy intelligent AI agents to automate tasks and enhance customer engagement.',
    cta: { href: '/services/ai-agents-service', label: 'Explore AI Agents' },
    slug: 'ai-agents-service'
  },
  {
    id: 'social-media-marketing',
    icon: Share2, 
    title: 'Social Media Marketing',
    description: 'Boost your online presence with targeted social media campaigns and content strategies.',
    cta: { href: '/services/social-media-marketing', label: 'Elevate Your Social' },
    slug: 'social-media-marketing'
  },
  {
    id: 'influencer-marketing',
    icon: Users, 
    title: 'Influencer Marketing',
    description: 'Connect with key influencers to amplify your brand message and reach new audiences.',
    cta: { href: '/services/influencer-marketing', label: 'Collaborate with Influencers' },
    slug: 'influencer-marketing'
  },
  {
    id: 'logo-poster-design',
    icon: Palette,
    title: 'Logo & Poster Design',
    description: 'Create stunning visual identities with custom logos and impactful poster designs.',
    cta: { href: '/services/logo-poster-design', label: 'Design Your Brand' },
    slug: 'logo-poster-design'
  },
  {
    id: 'video-editing',
    icon: Film,
    title: 'Video Editing & Thumbnails',
    description: 'Professional video editing and eye-catching thumbnails to make your content stand out.',
    cta: { href: '/services/video-editing', label: 'Enhance Your Videos' },
    slug: 'video-editing'
  },
  {
    id: 'seo-service',
    icon: Search,
    title: 'Search Engine Optimization',
    description: "Improving your website's visibility in search engine results.",
    cta: { href: '/services/seo-service', label: 'Boost Your SEO' },
    slug: 'seo-service'
  },
];

export function ServiceHighlights() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-background to-card">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Our Core <Highlight>Services</Highlight>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We provide a comprehensive suite of services to transform your ideas into reality and accelerate your growth.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.slice(0, 6).map((service) => ( // Display up to 6 services
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </SectionWrapper>
  );
}
