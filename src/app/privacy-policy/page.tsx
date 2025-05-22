
import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the Privacy Policy for CreatorNex to understand how we collect, use, and protect your personal information.',
  robots: 'noindex, follow', // Good practice for legal pages until finalized
};

export default function PrivacyPolicyPage() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-background to-card pt-24 md:pt-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-foreground text-center mb-8">
          Privacy <Highlight>Policy</Highlight>
        </h1>
        
        <div className="space-y-6 text-muted-foreground prose prose-invert prose-lg dark:prose-invert max-w-none">
          <p><strong>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong></p>

          <p>CreatorNex ("us", "we", or "our") operates the [Your Website URL] website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

          <h2 className="text-2xl font-semibold text-foreground !mt-8 !mb-4">Information Collection and Use</h2>
          <p>We collect several different types of information for various purposes to provide and improve our Service to you. [Placeholder: Add details about types of data collected - e.g., Personal Data, Usage Data, Tracking & Cookies Data].</p>

          <h2 className="text-2xl font-semibold text-foreground !mt-8 !mb-4">Use of Data</h2>
          <p>CreatorNex uses the collected data for various purposes: [Placeholder: List purposes - e.g., To provide and maintain the Service, To notify you about changes, To allow participation in interactive features, To provide customer care and support, To provide analysis or valuable information, To monitor usage, To detect, prevent and address technical issues].</p>
          
          <h2 className="text-2xl font-semibold text-foreground !mt-8 !mb-4">Data Security</h2>
          <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security. [Placeholder: Add more details on security measures].</p>

          <h2 className="text-2xl font-semibold text-foreground !mt-8 !mb-4">Your Data Protection Rights</h2>
          <p>[Placeholder: Detail user rights, e.g., GDPR rights if applicable, CCPA rights if applicable. This section is highly dependent on jurisdiction and specific practices.]</p>
          
          <h2 className="text-2xl font-semibold text-foreground !mt-8 !mb-4">Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

          <h2 className="text-2xl font-semibold text-foreground !mt-8 !mb-4">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us: [Placeholder: Add contact email/method].</p>
          
          <p className="mt-12 p-4 bg-card rounded-lg border border-border">
            <strong>Disclaimer:</strong> This is a template privacy policy and should not be used as-is. It is crucial to consult with a legal professional to ensure your privacy policy is compliant with all applicable laws and accurately reflects your data processing practices.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
