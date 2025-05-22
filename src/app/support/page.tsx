import { Helmet } from 'react-helmet-async';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { LifeBuoy, ChevronDown, Mail, Phone, Clock, Zap, BookOpen, Send, Facebook, Twitter, Instagram, Linkedin, Github, type LucideIcon } from 'lucide-react'; // Removed unused icons
import { Button } from '@/components/ui/button'; // Import Button for CTA
import { Link } from 'react-router-dom'; // Import Link if linking CTA
import { Input } from '@/components/ui/input'; // Import Input component

// Define social links locally for this page, mirroring the footer structure
interface SocialLinkType {
  href: string;
  icon: LucideIcon;
}

const socialLinks: SocialLinkType[] = [
  { href: 'https://facebook.com/creatornex', icon: Facebook },
  { href: 'https://twitter.com/creatornex', icon: Twitter },
  { href: 'https://instagram.com/creator.nex', icon: Instagram },
  { href: 'https://linkedin.com/company/creatornex', icon: Linkedin },
  { href: 'https://github.com/creatornex', icon: Github },
];

export default function SupportPage() {
  return (
    <>
      <Helmet>
        <title>Support - CreatorNex</title>
        <meta name="description" content="Get help and support for CreatorNex services and products." />
      </Helmet>

      {/* Support Hero Section */}
      <SectionWrapper className="bg-gradient-to-b from-background to-card pt-24 md:pt-32">
        <div className="text-center max-w-3xl mx-auto">
          <LifeBuoy className="h-16 w-16 text-accent mx-auto mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Need Help? We're <Highlight>Here for You!</Highlight>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Contact us anytime or find answers below.
          </p>
          {/* CTA Button */}
          <div className="mt-8">
            {/* Link to a contact form section or a dedicated support ticket page */}
            <Button asChild size="lg" className="rounded-2xl px-8 py-3 text-lg hover:scale-105 transition-transform">
                {/* Replace with actual link to support ticket system or contact form anchor */}
                <Link to="/contact">Submit a Support Ticket</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper className="bg-gradient-to-b from-background to-card">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked <Highlight>Questions</Highlight>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Find quick answers to the most common questions about our services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {/* FAQ Categories and Items */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                General Questions <ChevronDown className="ml-2" />
              </h3>
              {/* Add Accordion or Dropdown components here for FAQ items */}
              <div className="space-y-4">
                {/* Example FAQ Item (Placeholder) */}
                <div className="border rounded-lg p-4 bg-background/50 backdrop-blur-sm">
                  <p className="font-medium text-foreground">Q: What services does CreatorNex offer?</p>
                  <p className="text-muted-foreground mt-2">A: CreatorNex offers a comprehensive suite of digital and AI services, including AI Agents, Web Development, Social Media Marketing, Influencer Marketing, Logo & Poster Design, Video Editing, and SEO.</p>
                </div>
                {/* Add more FAQ items for this category */}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                Services & Pricing <ChevronDown className="ml-2" />
              </h3>
              {/* Add Accordion or Dropdown components here for FAQ items */}
               <div className="space-y-4">
                {/* Example FAQ Item (Placeholder) */}
                <div className="border rounded-lg p-4 bg-background/50 backdrop-blur-sm">
                  <p className="font-medium text-foreground">Q: How do I get a quote for a service?</p>
                  <p className="text-muted-foreground mt-2">A: You can request a quote by contacting us through the support form above or emailing us directly. Please provide details about your project requirements.</p>
                </div>
                {/* Add more FAQ items for this category */}
              </div>
            </div>

             <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                AI Agents Help <ChevronDown className="ml-2" />
              </h3>
              {/* Add Accordion or Dropdown components here for FAQ items */}
               <div className="space-y-4">
                {/* Example FAQ Item (Placeholder) */}
                <div className="border rounded-lg p-4 bg-background/50 backdrop-blur-sm">
                  <p className="font-medium text-foreground">Q: Can your AI agents integrate with my existing systems?</p>
                  <p className="text-muted-foreground mt-2">A: Yes, our AI agents are designed for seamless API integration with a wide range of existing business systems.</p>
                </div>
                {/* Add more FAQ items for this category */}
              </div>
            </div>

             <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                Club & Events <ChevronDown className="ml-2" />
              </h3>
              {/* Add Accordion or Dropdown components here for FAQ items */}
               <div className="space-y-4">
                {/* Example FAQ Item (Placeholder) */}
                <div className="border rounded-lg p-4 bg-background/50 backdrop-blur-sm">
                  <p className="font-medium text-foreground">Q: How can I join the CreatorNex AI Club?</p>
                  <p className="text-muted-foreground mt-2">A: Information on joining the club and upcoming events can be found on our Club page or by contacting us.</p>
                </div>
                {/* Add more FAQ items for this category */}
              </div>
            </div>

             <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                Technical Support <ChevronDown className="ml-2" />
              </h3>
              {/* Add Accordion or Dropdown components here for FAQ items */}
               <div className="space-y-4">
                {/* Example FAQ Item (Placeholder) */}
                <div className="border rounded-lg p-4 bg-background/50 backdrop-blur-sm">
                  <p className="font-medium text-foreground">Q: I'm experiencing a technical issue. What should I do?</p>
                  <p className="text-muted-foreground mt-2">A: Please submit a support ticket through the form above, providing as much detail as possible about the issue you're facing. You can also reach out via the alternative contact methods for urgent issues.</p>
                </div>
                {/* Add more FAQ items for this category */}
              </div>
            </div>
            {/* Add other FAQ categories as needed */}
          </div>
      </SectionWrapper>

      {/* Contact Support */}
      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
              Contact <Highlight>Support</Highlight>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Fill out the form below or use the alternative contact methods to get in touch with our support team.
            </p>
            {/* Support Form (Placeholder) */}
            <div className="space-y-4">
              {/* Add your form components here (Input fields, Textarea, File Upload) */}
              <div className="border rounded-lg p-6 bg-background/50 backdrop-blur-sm">
                <h4 className="text-xl font-semibold text-foreground mb-4">Submit a Ticket</h4>
                {/* Form fields would go here */}
                <p className="text-muted-foreground text-sm">[Placeholder for Name, Email, Subject, Message, File Upload fields]</p>
                <Button className="mt-4"><Send className="mr-2 h-4 w-4" /> Send Message</Button>
              </div>
            </div>
          </div>

          {/* Alternative Contact */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Alternative <Highlight>Contact</Highlight>
            </h3>
            <div className="space-y-4 text-muted-foreground text-lg">
              <div className="flex items-center">
                <Mail className="mr-3 h-6 w-6 text-accent" />
                <span>Email: creatornex.main@gmail.com</span>
              </div>
              {/* Assuming you have a WhatsApp link */}
              <div className="flex items-center">
                <Phone className="mr-3 h-6 w-6 text-accent" />
                <span>WhatsApp/Phone: +91 7416086946</span>
              </div>
              {/* Include an emergency WhatsApp link if applicable */}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Response Times */}
      <SectionWrapper className="bg-gradient-to-b from-background to-card">
         <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
                Response <Highlight>Times</Highlight>
            </h2>
            <p className="text-lg text-muted-foreground">
                We strive to respond to all inquiries as quickly as possible.
            </p>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-center text-xl text-muted-foreground">
                     <Clock className="mr-3 h-6 w-6 text-accent" />
                    Typical Response: <span className="font-semibold text-foreground ml-2">24-48 hours</span>
                </div>
                {/* Add emergency contact info/link if available */}
                 <div className="flex items-center justify-center text-xl text-muted-foreground">
                     <Zap className="mr-3 h-6 w-6 text-accent" />
                    Emergency Help: <Link to="#" className="font-semibold text-primary hover:underline ml-2">WhatsApp Link</Link> {/* Replace # with actual WhatsApp link */}
                </div>
            </div>
         </div>
      </SectionWrapper>

      {/* Knowledge Base (Optional) */}
      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
            Knowledge <Highlight>Base</Highlight>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Explore our articles and tutorials to find detailed guides and information.
          </p>
          {/* Placeholder for Knowledge Base content */}
          <div className="border rounded-lg p-6 bg-background/50 backdrop-blur-sm">
            <h4 className="text-xl font-semibold text-foreground mb-4">Browse Articles</h4>
            <p className="text-muted-foreground">[Placeholder for links to articles, tutorials, guides]</p>
             <Button variant="outline" className="mt-4"><BookOpen className="mr-2 h-4 w-4" /> Explore Articles</Button> {/* Link to blog or documentation */}
          </div>
        </div>
      </SectionWrapper>

      {/* Follow Us / Stay Updated */}
      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
            Stay <Highlight>Connected</Highlight>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Follow us on social media or subscribe to our newsletter for the latest updates.
          </p>
          <div className="space-y-6">
             <div className="border rounded-lg p-6 bg-background/50 backdrop-blur-sm">
               <h4 className="text-xl font-semibold text-foreground mb-4">Follow Us</h4>
                {/* Social media icons/links */}
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${link.href.includes('twitter') ? 'Twitter' : link.href.includes('linkedin') ? 'LinkedIn' : link.href.includes('instagram') ? 'Instagram' : link.href.includes('github') ? 'GitHub' : 'Facebook'}`}
                    >
                      <link.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
             </div>
             <div className="border rounded-lg p-6 bg-background/50 backdrop-blur-sm">
               <h4 className="text-xl font-semibold text-foreground mb-4">Newsletter</h4>
                {/* Newsletter signup form */}
                <p className="text-muted-foreground mb-4 text-sm">
                Subscribe to our newsletter for the latest updates on digital innovation and AI services.
                </p>
                <form className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full"
                  />
                  <Button type="submit" className="w-full"><Mail className="mr-2 h-4 w-4"/> Subscribe</Button>
                </form>
             </div>
          </div>
        </div>
      </SectionWrapper>

    </>
  );
} 