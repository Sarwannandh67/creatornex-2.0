"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const joinClubFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(100),
  email: z.string().email("Invalid email address."),
  major: z.string().min(2, "Major is required.").max(100),
  year: z.string().min(1, "Year is required.").max(20), // e.g., "2nd Year", "Senior"
  reason: z.string().min(10, "Please tell us why you want to join (min 10 characters).").max(500),
});

type JoinClubFormValues = z.infer<typeof joinClubFormSchema>;

export function JoinClubForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<JoinClubFormValues>({
    resolver: zodResolver(joinClubFormSchema),
    defaultValues: {
      name: "",
      email: "",
      major: "",
      year: "",
      reason: "",
    },
  });

  async function onSubmit(data: JoinClubFormValues) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Form submitted:", data);
    
    toast({
      title: "Application Submitted!",
      description: "Thanks for your interest in CreatorNex AI Club. We'll be in touch soon!",
      variant: "default", 
    });
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} className="bg-input/50 border-border focus:border-primary" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your.email@university.edu" {...field} className="bg-input/50 border-border focus:border-primary" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="major"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Major / Field of Study</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Computer Science" {...field} className="bg-input/50 border-border focus:border-primary" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year of Study</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Sophomore, 3rd Year" {...field} className="bg-input/50 border-border focus:border-primary" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="reason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Why do you want to join the AI Club?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your interests in AI, what you hope to learn, or contribute..."
                  className="resize-y min-h-[120px] bg-input/50 border-border focus:border-primary"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Max 500 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full md:w-auto rounded-2xl px-8 py-3 text-lg hover:scale-105 transition-transform" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </form>
    </Form>
  );
}
