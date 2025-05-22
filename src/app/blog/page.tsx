import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays, Rss, Search, Filter } from 'lucide-react';
import type { BlogArticleStub } from '@/types';

export const metadata: Metadata = {
  title: 'CreatorNex Blog',
  description: 'Explore articles, insights, and resources from CreatorNex on AI, social media marketing, design, and digital strategy.',
};

// Placeholder data for blog posts - In a real app, this would come from a CMS or database
export const allBlogPosts: BlogArticleStub[] = [
  {
    id: 'blog-1',
    title: 'The Future of AI in Social Media Marketing',
    date: 'October 15, 2024',
    author: 'Dr. Evelyn Reed', // Placeholder
    excerpt: 'Explore how AI is revolutionizing content creation, audience targeting, and campaign optimization in the social media landscape.',
    imageUrl: '/marketing.png',
    imageHint: 'AI social media',
    slug: '/blog/future-of-ai-social-media', 
    category: 'AI & Social Media',
  },
  {
    id: 'blog-2',
    title: '5 Tips for Effective Influencer Collaborations',
    date: 'October 10, 2024',
    author: 'Marcus Chen', // Placeholder
    excerpt: 'Learn how to identify the right influencers, structure partnerships, and measure the success of your influencer marketing campaigns.',
    imageUrl: '/collaborations.jpg',
    imageHint: 'influencer marketing strategy',
    slug: '/blog/effective-influencer-collaborations',
    category: 'Marketing Strategy',
  },
  {
    id: 'blog-3',
    title: 'Designing Logos That Last: A CreatorNex Guide',
    date: 'October 05, 2024',
    author: 'Aisha Khan', // Placeholder
    excerpt: 'Our experts share insights into creating timeless logos that resonate with your brand and audience, covering principles of good design.',
    imageUrl: '/meet.png',
    imageHint: 'logo design process',
    slug: '/blog/designing-logos-that-last',
    category: 'Design Thinking',
  },
  {
    id: 'blog-4',
    title: 'Maximizing Video Engagement with Killer Thumbnails',
    date: 'September 28, 2024',
    author: 'CreatorNex Team', // Placeholder
    excerpt: 'Discover the secrets to creating video thumbnails that grab attention and significantly boost your click-through rates.',
    imageUrl: '/remote-team-collaboration.jpg',
    imageHint: 'video thumbnails collage',
    slug: '/blog/video-thumbnails-engagement',
    category: 'Video Marketing',
  }
];

// Placeholder categories for sidebar
const categories = ['All', 'AI & Social Media', 'Marketing Strategy', 'Design Thinking', 'Video Marketing', 'Tutorials'];
// Placeholder recent posts for sidebar (could be derived from allBlogPosts)
const recentPosts = allBlogPosts.slice(0, 3);


function BlogCard({ post }: { post: typeof allBlogPosts[0] }) {
  return (
    <Card className="group flex h-full transform flex-col overflow-hidden rounded-2xl border-border bg-card/80 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] backdrop-blur-sm">
      {post.imageUrl && (
        <CardHeader className="p-0">
          <div className="relative h-56 w-full">
            <Image
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={post.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            {post.category && <span className="absolute top-4 right-4 bg-primary/80 text-primary-foreground text-xs px-2 py-1 rounded-md">{post.category}</span>}
          </div>
        </CardHeader>
      )}
      <CardContent className="flex flex-grow flex-col p-6">
        <CardTitle className="text-xl text-foreground mb-2 group-hover:text-accent transition-colors">{post.title}</CardTitle>
        <div className="text-xs text-muted-foreground mb-3 flex items-center">
          <CalendarDays className="h-3 w-3 mr-1.5" /> {post.date}
          {post.author && <span className="mx-1.5">•</span>}
          {post.author && <span>By {post.author}</span>}
        </div>
        <CardDescription className="text-sm text-muted-foreground flex-grow">{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={post.slug} className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring w-full group">
            Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}

function BlogSidebar() {
    return (
        <aside className="lg:col-span-1 space-y-8">
            {/* Search Bar Placeholder */}
            <Card className="bg-card/50 p-6 rounded-xl shadow-lg">
                <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-lg text-foreground">Search</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="flex space-x-2">
                        <Input type="search" placeholder="Search articles..." className="bg-input/50" />
                        <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary/10">
                            <Search className="h-4 w-4" />
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Categories Placeholder */}
            <Card className="bg-card/50 p-6 rounded-xl shadow-lg">
                <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-lg text-foreground">Categories</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <ul className="space-y-2">
                        {categories.map(category => (
                            <li key={category}>
                                <Link href={`/blog/category/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="text-muted-foreground hover:text-accent transition-colors flex items-center">
                                    <Filter className="h-4 w-4 mr-2 text-accent/70" /> {category}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            {/* Recent Posts Placeholder */}
            <Card className="bg-card/50 p-6 rounded-xl shadow-lg">
                <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-lg text-foreground">Recent Posts</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <ul className="space-y-3">
                        {recentPosts.map(post => (
                            <li key={post.id}>
                                <Link href={post.slug} className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium block">
                                    {post.title}
                                </Link>
                                <p className="text-xs text-muted-foreground/70">{post.date}</p>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </aside>
    );
}


export default function BlogPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-b from-background to-card pt-24 md:pt-32">
        <div className="text-center max-w-3xl mx-auto">
          <Rss className="h-16 w-16 text-accent mx-auto mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            CreatorNex <Highlight>Blog & Resources</Highlight>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Dive into our latest articles, tips, and industry insights. Stay informed and inspired with CreatorNex.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <main className="lg:col-span-3">
            {allBlogPosts.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {allBlogPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Image src="https://placehold.co/300x200.png" alt="No posts yet" width={300} height={200} className="mx-auto mb-4 rounded-lg" data-ai-hint="empty state illustration"/>
                <h2 className="text-2xl font-semibold text-foreground mb-2">Our Blog is Brewing!</h2>
                <p className="text-muted-foreground">
                  We're working on some exciting content. Check back soon for insightful articles!
                </p>
              </div>
            )}
             {/* Placeholder for pagination */}
            {allBlogPosts.length > 4 && ( /* Simple condition to show pagination placeholder */
                <div className="mt-12 flex justify-center">
                    <Button variant="outline" className="mr-2 rounded-xl">Previous</Button>
                    <Button variant="outline" className="rounded-xl">Next</Button>
                </div>
            )}
          </main>
          <BlogSidebar />
        </div>
      </SectionWrapper>
    </>
  );
}
