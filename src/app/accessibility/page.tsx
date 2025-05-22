import { Helmet } from 'react-helmet-async';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { Eye, Monitor, Keyboard, MessageSquare, Settings2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// Metadata is now handled via React Helmet

const accessibilityFeatures = [
  {
    icon: Eye,
    title: "Visual Accessibility",
    description: "High contrast options, resizable text, and support for screen readers to ensure content is accessible to visually impaired users."
  },
  {
    icon: Keyboard,
    title: "Keyboard Navigation",
    description: "Full keyboard accessibility for all features and functions, with visible focus indicators and logical tab order."
  },
  {
    icon: MessageSquare,
    title: "Alternative Text",
    description: "Descriptive alt text for images and media content to ensure information is available to all users."
  },
  {
    icon: Monitor,
    title: "Responsive Design",
    description: "Fully responsive layout that adapts to different devices and screen sizes while maintaining accessibility."
  },
  {
    icon: Settings2,
    title: "Customization Options",
    description: "User preferences for font size, color contrast, and animation reduction to improve readability and usability."
  },
  {
    icon: Users,
    title: "Inclusive Design",
    description: "Commitment to universal design principles that consider diverse user needs and abilities."
  }
];

export default function AccessibilityPage() {
  return (
    <>
      <Helmet>
        <title>Accessibility | CreatorNex</title>
        <meta name="description" content="Learn about CreatorNex's commitment to digital accessibility and our efforts to ensure our services are accessible to all users." />
      </Helmet>
      <SectionWrapper className="bg-gradient-to-b from-background to-card pt-24 md:pt-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Our Commitment to <Highlight>Accessibility</Highlight>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            We believe in creating digital experiences that are accessible to everyone. Our commitment to accessibility is fundamental to our mission of inclusive innovation.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert">
            <h2 className="text-3xl font-bold mb-6">Our Accessibility Standards</h2>
            <p className="text-muted-foreground">
              CreatorNex is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Conformance Status</h3>
            <p className="text-muted-foreground">
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 level AA standards. These guidelines explain how to make web content more accessible to people with disabilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              {accessibilityFeatures.map((feature) => (
                <div key={feature.title} className="p-6 rounded-lg bg-card shadow-lg border border-border">
                  <feature.icon className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Feedback</h3>
            <p className="text-muted-foreground mb-4">
              We welcome your feedback on the accessibility of CreatorNex. Please let us know if you encounter accessibility barriers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Phone: +91 7416086946</li>
              <li>E-mail: info@creatornex.com</li>
              <li>
                Postal Address: CreatorNex Headquarters
                <br />
                123 Innovation Street
                <br />
                Tech City, TX 75001
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Assessment Methods</h3>
            <p className="text-muted-foreground">
              CreatorNex assesses the accessibility of our digital content using the following methods:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Self-evaluation</li>
              <li>External accessibility evaluation</li>
              <li>User feedback and testing</li>
              <li>Automated accessibility testing tools</li>
            </ul>

            <div className="mt-12 p-6 bg-card rounded-lg shadow-lg border border-border">
              <h3 className="text-2xl font-semibold mb-4">Need Help?</h3>
              <p className="text-muted-foreground mb-4">
                If you need assistance or have specific accessibility requirements, please don't hesitate to contact us.
              </p>
              <Link 
                to="/contact" 
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
} 