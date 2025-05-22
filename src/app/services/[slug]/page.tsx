import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { Button } from '@/components/ui/button';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle, Bot, Zap, Brain, Users as UsersIcon, type LucideIcon, Search, BarChart3, Link2, Settings } from 'lucide-react'; // Added specific icons
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LazyImage } from '@/components/shared/LazyImage';

interface ServiceUseCase {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceDetail {
    title: string;
    description: string;
    longDescription: string;
    features: string[];
    useCases?: ServiceUseCase[];
    benefits?: string[];
    image: string;
    imageHint: string;
}

// This is a simplified placeholder. In a real app, you'd fetch this data.
const servicesDetails: Record<string, ServiceDetail> = {
  'ai-agents-service': {
    title: 'AI Agents as a Service',
    description: 'Harness the power of intelligent automation with custom-built AI agents. We design and deploy sophisticated agents to streamline your workflows, enhance customer interactions, and provide data-driven insights.',
    longDescription: 'Our AI Agents as a Service offering provides full lifecycle support, from conceptualization and strategy to development, deployment, and ongoing optimization. We leverage various AI technologies, including Natural Language Processing (NLP), Machine Learning (ML), and process automation, to create agents tailored to your specific business challenges. Whether you need a customer service chatbot, an automated data analysis tool, or a complex decision-making assistant, CreatorNex delivers.',
    features: [
      'Custom AI Model Training & Deployment',
      'Natural Language Understanding & Generation',
      'Automated Task & Workflow Integration',
      'Seamless API Integration with Existing Systems',
      'Scalable Cloud-Based Deployment',
      'Continuous Learning & Performance Improvement',
    ],
    useCases: [
      {
        icon: Bot,
        title: 'Customer Service Automation',
        description: 'AI agents that handle inquiries, provide support, and guide users 24/7.',
      },
      {
        icon: Zap,
        title: 'Process Automation',
        description: 'Streamline repetitive tasks like data entry, report generation, and workflow management.',
      },
      {
        icon: Brain,
        title: 'Data Analysis & Insights',
        description: 'Intelligent agents that analyze complex datasets to uncover trends and inform decisions.',
      },
      {
        icon: UsersIcon,
        title: 'Personalized Experiences',
        description: 'AI agents that tailor content, recommendations, and interactions for individual users.',
      },
    ] as ServiceUseCase[],
    benefits: [
      "Increased Efficiency & Productivity",
      "Reduced Operational Costs",
      "Enhanced Customer Satisfaction",
      "Scalable Operations",
      "Data-Driven Decision Making",
      "Competitive Advantage",
    ],
    image: '/aiasagents.png',
    imageHint: 'AI agent dashboard'
  },
  'social-media-marketing': {
    title: 'Social Media Marketing',
    description: 'Amplify your brand voice and engage your target audience with our comprehensive social media marketing strategies.',
    longDescription: 'Our social media marketing services include content creation, community management, paid advertising campaigns, and performance analytics across all major platforms. We help you build a strong online presence and drive meaningful interactions that convert.',
    features: [
      'Platform-Specific Content Strategy & Creation',
      'Community Engagement & Growth Hacking',
      'Targeted Ad Campaign Management (Meta, TikTok, LinkedIn, etc.)',
      'Comprehensive Performance Tracking & ROI Reporting',
      'Brand Reputation Management & Social Listening',
      'Influencer Outreach & Collaboration Management',
    ],
    image: '/Social-Media-Marketing.png',
    imageHint: 'social media analytics'
  },
  'influencer-marketing': {
    title: 'Influencer Marketing',
    description: 'Collaborate with key influencers to expand your reach and build credibility with authentic endorsements.',
    longDescription: 'We identify and vet relevant influencers that align with your brand values, manage campaign execution from start to finish, negotiate contracts, and measure ROI to ensure your brand connects with the right audiences through trusted voices.',
    features: [
      'Strategic Influencer Identification & Vetting',
      'End-to-End Campaign Strategy & Management',
      'Contract Negotiation & Content Coordination',
      'Content Approval Workflows & Amplification Strategies',
      'Detailed Performance Tracking & Reporting',
      'Building Authentic & Long-Term Brand Partnerships',
    ],
    image: '/Influencer-Marketing.png',
    imageHint: 'influencer collaboration network'
  },
  'logo-poster-design': {
    title: 'Logo & Poster Design',
    description: 'Craft a compelling visual identity with unique logos and striking poster designs that capture attention.',
    longDescription: 'Our design team specializes in creating memorable logos and visually appealing posters that communicate your brand message effectively. We focus on creativity, clarity, and impact, ensuring your visuals resonate with your target audience.',
    features: [
      'Custom Logo Design & Brand Identity Systems',
      'Creative Print & Digital Poster Creation',
      'Comprehensive Brand Style Guide Development',
      'Visual Identity Consultation & Strategy',
      'High-Resolution Deliverables for All Mediums',
      'Multiple Design Concepts & Iterative Revisions',
    ],
    image: '/logo-design.png',
    imageHint: 'design portfolio showcase'
  },
  'video-editing': {
    title: 'Video Editing & Thumbnails',
    description: 'Transform your raw footage into polished, engaging videos with professional editing and captivating thumbnails.',
    longDescription: 'We offer comprehensive video editing services, including color correction, sound design, motion graphics, storytelling, and attention-grabbing thumbnails to maximize views and engagement for your video content across all platforms.',
    features: [
      'Professional Video Editing & Post-Production',
      'Custom, Click-Worthy Thumbnail Design',
      'Motion Graphics, Animations & Text Overlays',
      'Color Correction, Grading & Audio Enhancement',
      'Story-Driven Editing for Maximum Impact',
      'Fast Turnaround Times & Multiple Format Delivery',
    ],
    image: '/editing.png',
    imageHint: 'video editing software interface'
  },
  'web-development': {
    title: 'Web Development Solutions',
    description: 'Crafting modern, responsive, and high-performance websites that drive engagement and deliver exceptional user experiences.',
    longDescription: 'From stunning brochure sites to complex web applications, our web development services cover all your needs. We focus on clean code, fast load times, SEO best practices, and intuitive navigation. Our team is proficient in a wide array of modern technologies to build scalable and future-proof web solutions.',
    features: [
      'Responsive Design for All Devices',
      'Content Management System (CMS) Integration',
      'E-commerce Solutions & Payment Gateway Integration',
      'Custom Web Applications & SaaS Platforms',
      'API Development & Third-Party Integrations',
      'Performance Optimization, SEO & Security Hardening',
    ],
    useCases: [
      {
        icon: Search,
        title: 'Business Websites',
        description: 'Professional websites that showcase your brand and convert visitors into customers.',
      },
      {
        icon: BarChart3,
        title: 'E-commerce Platforms',
        description: 'Secure and scalable online stores with seamless payment processing.',
      },
      {
        icon: Settings,
        title: 'Web Applications',
        description: 'Custom web applications that streamline your business operations.',
      },
      {
        icon: Link2,
        title: 'API Integration',
        description: 'Seamless integration with third-party services and APIs.',
      },
    ],
    benefits: [
      "Enhanced User Experience",
      "Mobile-First Responsive Design",
      "Fast Loading Times",
      "SEO-Friendly Architecture",
      "Secure & Scalable Solutions",
      "Ongoing Support & Maintenance",
    ],
    image: '/website-design.png',
    imageHint: 'website development process'
  },
  'seo-service': {
    title: 'Search Engine Optimization',
    description: "Improving your website's visibility in search engine results to attract organic traffic and grow your online presence.",
    longDescription: "Our SEO services are designed to increase your website's rankings in search engine results pages (SERPs) for relevant keywords. We conduct thorough keyword research, optimize on-page elements, build high-quality backlinks, and perform technical SEO audits to ensure your site is search engine friendly. Our goal is to drive targeted organic traffic to your website, leading to more leads and conversions.",
    features: [
      'Comprehensive Keyword Research & Analysis',
      'On-Page SEO Optimization (Titles, Metas, Content)',
      'Technical SEO Audits & Implementation',
      'High-Quality Link Building Strategies',
      'Local SEO Optimization (Google Business Profile)',
      'Regular Performance Tracking & Reporting',
    ],
     useCases: [
      {
        icon: BarChart3,
        title: 'Increased Organic Traffic',
        description: 'Attract more visitors from search engines actively looking for your products or services.',
      },
      {
        icon: Search,
        title: 'Improved Search Rankings',
        description: 'Achieve higher positions for your target keywords in Google and other search engines.',
      },
      {
        icon: Link2,
        title: 'Enhanced Online Visibility',
        description: 'Make your brand more discoverable to potential customers online.',
      },
      {
        icon: Settings,
        title: 'Better Website Performance',
        description: 'Optimize site speed, mobile-friendliness, and user experience for SEO benefits.',
      },
    ],
    benefits: [
      "Sustainable Long-Term Growth",
      "Higher Quality Leads",
      "Increased Brand Credibility & Trust",
      "Cost-Effective Marketing Strategy",
      "Measurable Results & ROI",
      "Competitive Edge in Your Industry",
    ],
    image: '/drive-seo-organic-traffic.png',
    imageHint: 'seo analytics graph'
  }
};

// Using useParams instead of props

// Metadata is now handled via React Helmet

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesDetails[slug] : undefined;

  if (!service) {
    return (
      <SectionWrapper className="bg-gradient-to-b from-background to-card pt-24 md:pt-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Service Not Found
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            The requested service could not be found. Please check the URL or return to our services page.
          </p>
          <Button asChild className="mt-8">
            <Link to="/services">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.title} - CreatorNex</title>
        <meta name="description" content={service.description} />
      </Helmet>
      <SectionWrapper className="bg-gradient-to-b from-background to-card pt-24 md:pt-32">
         <div className="max-w-3xl mx-auto">
          <Link to="/services" className="inline-flex items-center text-accent hover:text-primary mb-8 text-sm group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to all services
          </Link>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {service.title.split(' ').slice(0, -1).join(' ')} <Highlight>{service.title.split(' ').pop()}</Highlight>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              {service.description}
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Detailed <Highlight>Overview</Highlight>
            </h2>
            <p className="text-lg text-muted-foreground whitespace-pre-line">
              {service.longDescription}
            </p>
             <Button asChild size="lg" className="rounded-2xl px-8 py-3 text-lg hover:scale-105 transition-transform">
                <Link to={`/contact?subject=Inquiry+about+${service.title}`}>
                    Discuss Your Project
                </Link>
            </Button>
          </div>
           <div className="relative h-80 md:h-[450px] rounded-xl overflow-hidden shadow-xl">
            <LazyImage
              src={service.image}
              alt={`Illustration for ${service.title}`}
              className="w-full h-full object-cover"
              data-ai-hint={service.imageHint || 'abstract service illustration'}
            />
          </div>
        </div>
      </SectionWrapper>

      {service.features && service.features.length > 0 && (
        <SectionWrapper className="bg-gradient-to-b from-background to-card">
          <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-12">
            Key <Highlight>Features</Highlight>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-start p-4 bg-background/50 rounded-lg shadow-md">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {service.useCases && service.useCases.length > 0 && (
        <SectionWrapper className="bg-gradient-to-b from-background to-card">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Example <Highlight>Use Cases</Highlight>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {service.useCases.map((useCase: ServiceUseCase) => (
              <Card key={useCase.title} className="flex flex-col bg-background/50 backdrop-blur-sm shadow-lg border-border hover:shadow-primary/20 hover:border-primary/30 transition-all">
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <useCase.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionWrapper>
      )}
      
      {service.benefits && service.benefits.length > 0 && (
        <SectionWrapper className="bg-gradient-to-b from-background to-card">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Core <Highlight>Benefits</Highlight>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {service.benefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionWrapper>
      )}

      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Ready to get started with <Highlight>{service.title}</Highlight>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Contact us today for a free consultation and let's explore how we can tailor this service to your unique requirements.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-2xl px-8 py-3 text-lg hover:scale-105 transition-transform">
            <Link to={`/contact?subject=Quote+for+${service.title}`}>
              Request a Quote
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
