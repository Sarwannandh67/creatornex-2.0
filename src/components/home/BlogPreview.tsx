"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { getImageProps } from '@/lib/utils';

// Placeholder data for blog posts
const blogPosts = [
  {
    id: 'blog-1',
    title: 'The Future of AI in Social Media Marketing',
    date: 'October 15, 2024',
    excerpt: 'Explore how AI is revolutionizing content creation, audience targeting, and campaign optimization in the social media landscape.',
    imageUrl: '/marketing.png',
    imageHint: 'AI social media',
    slug: '/blog/future-of-ai-social-media',
  },
  {
    id: 'blog-2',
    title: '5 Tips for Effective Influencer Collaborations',
    date: 'October 10, 2024',
    excerpt: 'Learn how to identify the right influencers, structure partnerships, and measure the success of your influencer marketing campaigns.',
    imageUrl: '/collaborations.jpg',
    imageHint: 'influencer marketing strategy',
    slug: '/blog/effective-influencer-collaborations',
  },
  // {
  //   id: 'blog-3',
  //   title: 'Designing Logos That Last: A CreatorNex Guide',
  //   date: 'October 05, 2024',
  //   excerpt: 'Our experts share insights into creating timeless logos that resonate with your brand and audience.',
  //   imageUrl: 'https://placehold.co/600x400.png',
  //   imageHint: 'logo design process',
  //   slug: '/blog/designing-logos-that-last', // Placeholder slug
  // },
];

function BlogCardPreview({ post }: { post: typeof blogPosts[0] }) {
  return (
    <Card className="group flex h-full transform flex-col overflow-hidden rounded-2xl border-border bg-card/80 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] backdrop-blur-sm">
      {post.imageUrl && (
        <CardHeader className="p-0">
          <div className="relative h-56 w-full">
            <Image
              {...getImageProps({
                src: post.imageUrl,
                alt: post.title,
                className: "transition-transform duration-300 group-hover:scale-105",
                'data-ai-hint': post.imageHint
              })}
              fill
            />
          </div>
        </CardHeader>
      )}
      <CardContent className="flex flex-grow flex-col p-6">
        <CardTitle className="text-xl text-foreground mb-2 group-hover:text-accent transition-colors">{post.title}</CardTitle>
        <div className="text-xs text-muted-foreground mb-2 flex items-center">
          <CalendarDays className="h-3 w-3 mr-1.5" /> {post.date}
        </div>
        <CardDescription className="text-sm text-muted-foreground flex-grow">{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="link" className="group px-0 text-accent hover:text-primary">
          <Link href={post.slug}>
            Read article about {post.title} <span className="sr-only">{post.title}</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function BlogPreview() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-background to-card">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Latest <Highlight>Insights</Highlight>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Stay updated with our latest articles, tips, and resources on AI, social media, and design.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {blogPosts.slice(0,2).map((post) => (
          <BlogCardPreview key={post.id} post={post} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild size="lg" variant="outline" className="rounded-2xl px-8 py-3 text-lg border-primary text-primary hover:bg-primary/10 hover:text-accent">
          <Link href="/blog">
            View all articles and insights <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
