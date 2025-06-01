import { Helmet } from 'react-helmet-async';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

// Metadata is now handled via React Helmet

const faqItems = [
  {
    question: "What kind of AI solutions does CreatorNex LLC offer?",
    answer: "CreatorNex LLC specializes in custom AI agents for task automation, customer service, data analysis, and personalized experiences. We also offer social media marketing, influencer marketing, design services (logos, posters), and video editing, often enhanced with AI insights."
  },
  {
    question: "How does the 'AI Agents as a Service' work?",
    answer: "We work closely with you to understand your specific needs, then design, develop, deploy, and maintain AI agents tailored to your business processes. This can range from chatbots to complex data analysis tools."
  },
  {
    question: "What is the typical turnaround time for a project?",
    answer: "Turnaround times vary depending on the project's scope and complexity. For smaller tasks like logo design or video editing, it can be a few days to a week. Larger projects like AI agent development or comprehensive marketing campaigns will have a more detailed timeline discussed during consultation."
  },
  {
    question: "How do you ensure data-driven strategies?",
    answer: "We leverage AI-powered analytics tools to gather insights on market trends, audience behavior, and campaign performance. This data informs our strategic decisions to optimize for the best possible results."
  },
  {
    question: "Do I get a dedicated account manager?",
    answer: "Yes, for most of our service packages, you will be assigned a dedicated account manager who will be your primary point of contact, ensuring smooth communication and project management."
  },
  {
    question: "Is your pricing transparent?",
    answer: "Absolutely. We believe in clear and upfront pricing. We provide detailed quotes before starting any project, outlining all costs involved with no hidden fees."
  },
  {
    question: "How can I get a quote for my project?",
    answer: "You can request a quote by filling out the contact form on our Contact page, or by reaching out to us via email or phone. We'll typically schedule a brief consultation to understand your requirements better before providing a detailed proposal."
  }
];

export default function FaqsPage() {
  return (
    <>
      <Helmet>
        <title>FAQs - CreatorNex</title>
        <meta name="description" content="Find answers to frequently asked questions about CreatorNex, our services, processes, and how we can help your business." />
      </Helmet>
      <SectionWrapper className="bg-gradient-to-b from-background to-card pt-24 md:pt-32">
        <div className="text-center max-w-3xl mx-auto">
          <HelpCircle className="h-16 w-16 text-accent mx-auto mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Frequently Asked <Highlight>Questions</Highlight>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Have questions? We've got answers. Find information about our services, processes, and how we can help your business thrive.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="border-border">
                <AccordionTrigger className="text-left text-lg hover:no-underline text-foreground hover:text-accent">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionWrapper>
    </>
  );
}
