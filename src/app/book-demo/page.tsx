import { Helmet } from 'react-helmet-async';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { BookDemoForm } from '@/components/forms/BookDemoForm';

export default function BookDemoPage() {
  return (
    <>
      <Helmet>
        <title>Book a Demo - CreatorNex</title>
        <meta name="description" content="Schedule a personalized demo to see how CreatorNex can transform your digital presence with AI-powered solutions." />
      </Helmet>
      <SectionWrapper className="prose prose-invert mx-auto max-w-4xl pt-24 md:pt-32">
        <BookDemoForm />
      </SectionWrapper>
    </>
  );
} 