
import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the Terms of Service for CreatorNex. These terms govern your use of our website and services.',
  robots: 'noindex, follow', // Good practice for legal pages until finalized
};

export default function TermsOfServicePage() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-background to-card pt-24 md:pt-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-foreground text-center mb-8">
          Terms of <Highlight>Service</Highlight>
        </h1>
        
        <div className="space-y-6 text-muted-foreground prose prose-invert prose-lg dark:prose-invert max-w-none">
          <p><strong>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong></p>

          <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the [Your Website URL] website (the "Service") operated by CreatorNex ("us", "we", or "our").</p>
          <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>
          <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

          <h2 className="text-2xl font-semibold text-foreground !mt-8 !mb-4">1. Accounts</h2>
          <p>[Placeholder: If you have user accounts, detail terms related to account creation, responsibilities, termination, etc.]</p>

          <h2 className="text-2xl font-semibold text-foreground !mt-8 !mb-4">2. Intellectual Property</h2>
          <p>The Service and its original content, features, and functionality are and will remain the exclusive property of CreatorNex and its licensors. [Placeholder: Add details about copyright, trademarks, etc.]</p>

          <h2 className="text-2xl font-semibold text-foreground !mt-8 !mb-4">3. Links To Other Web Sites</h2>
          <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by CreatorNex. CreatorNex has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. [Placeholder: Add further disclaimers if necessary].</p>

          <h2 className="text-2xl font-semibold text-foreground !mt-8 !mb-4">4. Limitation Of Liability</h2>
          <p>In no event shall CreatorNex, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service. [Placeholder: This is standard but verify with legal counsel].</p>
          
          <h2 className="text-2xl font-semibold text-foreground !mt-8 !mb-4">5. Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction, e.g., State of Texas, United States], without regard to its conflict of law provisions. [Placeholder: Consult legal professional for appropriate jurisdiction].</p>

          <h2 className="text-2xl font-semibold text-foreground !mt-8 !mb-4">6. Changes</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

          <h2 className="text-2xl font-semibold text-foreground !mt-8 !mb-4">Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us: [Placeholder: Add contact email/method].</p>

           <p className="mt-12 p-4 bg-card rounded-lg border border-border">
            <strong>Disclaimer:</strong> This is a template Terms of Service and should not be used as-is. It is crucial to consult with a legal professional to ensure your Terms of Service are compliant with all applicable laws and accurately reflect your business practices.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
