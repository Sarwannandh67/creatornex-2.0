
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// SectionWrapper and Highlight removed as they are no longer needed here
import { Loader2 } from 'lucide-react'; // Mail icon removed from imports
import { useToast } from "@/hooks/use-toast";

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Newsletter signup:', email);
    toast({
      title: "Subscribed!",
      description: "Thanks for joining our newsletter. Keep an eye on your inbox!",
      variant: "default",
    });
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    // Removed SectionWrapper and its classes
    <div className="mt-8"> {/* Added margin-top for spacing within the footer column */}
      <div className="max-w-md mx-auto text-left md:text-center"> {/* Adjusted max-width and text alignment for footer context */}
        {/* Mail icon removed from here */}
        <h3 className="text-lg font-semibold text-foreground mb-2"> {/* Changed h2 to h3, adjusted font size */}
          Stay Ahead with CreatorNex
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Subscribe for insights on AI, social trends, and offers.
        </p>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow bg-input text-foreground placeholder:text-muted-foreground border-border focus:border-primary" // Updated input styling for footer
            aria-label="Email for newsletter"
          />
          <Button
            type="submit"
            size="default" // Changed size to default for footer context
            className="bg-primary text-primary-foreground hover:bg-accent" // Updated button styling
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> {/* Adjusted icon size */}
                Subscribing...
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
