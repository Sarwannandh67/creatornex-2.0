import { Helmet } from 'react-helmet-async';
import { SectionWrapper } from '@/components/shared/SectionWrapper';

export default function CookiePolicyPage() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - CreatorNex</title>
        <meta name="description" content="Learn about how CreatorNex uses cookies and similar technologies to provide, improve, and protect our services." />
      </Helmet>
      <SectionWrapper className="prose prose-invert mx-auto max-w-4xl pt-24 md:pt-32">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They are widely used to make websites work more efficiently and provide a better user experience.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
            <p className="text-muted-foreground mb-4">
              We use cookies for various purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand how visitors use our site</li>
              <li>Preference cookies to remember your settings</li>
              <li>Marketing cookies to deliver relevant content</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies are necessary for the website to function properly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Analytics Cookies</h3>
                <p className="text-muted-foreground">
                  Help us understand how visitors interact with our website.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Functional Cookies</h3>
                <p className="text-muted-foreground">
                  Remember your preferences and settings.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Marketing Cookies</h3>
                <p className="text-muted-foreground">
                  Track your activity across websites to deliver targeted advertising.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
            <p className="text-muted-foreground mb-4">
              You can control and manage cookies in various ways. Please note that removing or blocking cookies can impact your user experience and parts of our website may no longer be fully accessible.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about our Cookie Policy, please contact us at{' '}
              <a href="mailto:info@creatornex.com" className="text-accent hover:underline">
                info@creatornex.com
              </a>
            </p>
          </section>
        </div>
      </SectionWrapper>
    </>
  );
} 