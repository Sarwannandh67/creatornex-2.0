import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Social Media Marketing Services | CreatorNex',
  description: 'Boost your brand presence with our expert social media marketing services. We help you engage your audience and drive growth across all social platforms.',
};

const features = [
  {
    title: "Strategy Development",
    description: "Custom social media strategies aligned with your business goals"
  },
  {
    title: "Content Creation",
    description: "Engaging posts, graphics, and videos that resonate with your audience"
  },
  {
    title: "Community Management",
    description: "Active engagement with your followers to build strong relationships"
  },
  {
    title: "Analytics & Reporting",
    description: "Detailed insights and performance metrics to track success"
  },
  {
    title: "Paid Advertising",
    description: "Targeted ad campaigns to reach your ideal customers"
  },
  {
    title: "Brand Building",
    description: "Consistent brand messaging across all social platforms"
  }
];

export default function SocialMediaMarketingPage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold mb-6">Social Media Marketing</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Transform your social media presence with our expert marketing services. 
          We help brands connect with their audience and achieve measurable results.
        </p>
        <Link href="/contact">
          <Button size="lg">
            Get Started
          </Button>
        </Link>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
        {features.map((feature) => (
          <div key={feature.title} className="p-6 rounded-lg bg-card shadow-lg">
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose CreatorNex?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Expert Team</h3>
              <p className="text-muted-foreground">Our social media specialists bring years of experience and industry knowledge.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Data-Driven Approach</h3>
              <p className="text-muted-foreground">We make decisions based on analytics and real-time insights.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Custom Solutions</h3>
              <p className="text-muted-foreground">Tailored strategies that align with your unique business goals.</p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/services/social-media-marketing.jpg"
              alt="Social Media Marketing"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Social Media Presence?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Let's create a social media strategy that drives results for your business.
        </p>
        <div className="space-x-4">
          <Link href="/contact">
            <Button size="lg">
              Contact Us
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button variant="outline" size="lg">
              View Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 