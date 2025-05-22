import { Link } from 'react-router-dom';
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
    <Card className="group flex h-full transform flex-col overflow-hidden rounded-2xl border-border bg-card/80 shadow-xl transition-all duration-300 md:hover:shadow-2xl md:hover:scale-[1.02] backdrop-blur-sm">
      {post.imageUrl && (
        <CardHeader className="p-0">
          <div className="relative h-36 sm:h-40 md:h-56 w-full">
            <img
              width={400}
              height={250}
              src={post.imageUrl}
              alt={post.title}
              className="transition-transform duration-300 md:group-hover:scale-105 w-full h-full object-cover"
              data-ai-hint={post.imageHint}
            />
          </div>
        </CardHeader>
      )}
      <CardContent className="flex flex-grow flex-col p-3 sm:p-4 md:p-6">
        <CardTitle className="text-lg sm:text-xl text-foreground mb-1 sm:mb-2 md:group-hover:text-accent transition-colors">{post.title}</CardTitle>
        <div className="text-xs text-muted-foreground mb-1 sm:mb-2 flex items-center">
          <CalendarDays className="h-3 w-3 mr-1.5" /> {post.date}
        </div>
        <CardDescription className="text-xs sm:text-sm text-muted-foreground flex-grow line-clamp-2 sm:line-clamp-3">{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="p-3 sm:p-4 md:p-6 pt-0">
        <Button asChild variant="link" className="group px-0 text-accent hover:text-primary text-xs sm:text-sm">
          <Link to={post.slug}>
            Read article <span className="sr-only">about {post.title}</span>
            <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform md:group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function BlogPreview() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-background to-card">
      <div className="text-center mb-6 sm:mb-8 md:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl px-4">
          Latest <Highlight>Insights</Highlight>
        </h2>
        <p className="mt-2 sm:mt-3 md:mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-muted-foreground px-4">
          Stay updated with our latest articles, tips, and resources on AI, social media, and design.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 px-4 sm:px-0">
        {blogPosts.slice(0,2).map((post) => (
          <BlogCardPreview key={post.id} post={post} />
        ))}
      </div>
      <div className="mt-6 sm:mt-8 md:mt-12 text-center px-4 sm:px-0">
        <Button asChild size="lg" variant="outline" className="rounded-2xl px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg border-primary text-primary hover:bg-primary/10 hover:text-accent w-full sm:w-auto">
          <Link to="/blog">
            View all articles <span className="hidden sm:inline">and insights</span> <ArrowRight className="ml-1 sm:ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
