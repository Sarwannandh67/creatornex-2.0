import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, CalendarDays, UserCircle, MessageCircle } from 'lucide-react';
import { allBlogPosts as posts } from '../page'; // Import placeholder posts
import type { BlogArticleStub } from '@/types/index'; // Assuming this type includes author
import { SocialShare } from '@/components/shared/SocialShare';
import { FloatingShareButton } from '@/components/shared/FloatingShareButton';

// Placeholder for related posts - in a real app, this would be dynamic
const relatedPosts = posts.slice(0, 2).filter(p => p.slug !== posts[0].slug); // Example: first two other posts

// No need for props with useParams hook

// Metadata is now handled within the component via React Helmet

export default function SingleBlogPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === `/blog/${slug}`);

  if (!post) {
    return (
      <SectionWrapper className="bg-gradient-to-b from-background to-card pt-24 md:pt-32 text-center">
        <h1 className="text-4xl font-bold">Post Not Found</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The blog post you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="mt-8 rounded-2xl">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Blog
          </Link>
        </Button>
      </SectionWrapper>
    );
  }
  
  const authorName = post.author || "CreatorNex Team";
  const authorAvatar = `https://placehold.co/100x100.png?text=${authorName.substring(0,1)}`; // Placeholder

  return (
    <>
      <FloatingShareButton 
        title={post.title}
        description={post.excerpt}
      />
      <SectionWrapper className="pt-24 md:pt-32 bg-gradient-to-b from-background to-card">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-accent hover:text-primary mb-6 text-sm group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to all articles
          </Link>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground text-sm mb-8">
            <div className="flex items-center">
              <CalendarDays className="h-4 w-4 mr-1.5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Avatar className="h-6 w-6 mr-1.5">
                <AvatarImage src={authorAvatar} alt={authorName} data-ai-hint="author portrait" />
                <AvatarFallback>{authorName.substring(0,1)}</AvatarFallback>
              </Avatar>
              <span>By {authorName}</span>
            </div>
            {post.category && (
                <Link to={`/blog/category/${post.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="text-accent hover:underline">
                    {post.category}
                </Link>
            )}
          </div>

          {post.imageUrl && (
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl mb-10">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover rounded-2xl" 
                data-ai-hint={post.imageHint}
              />
            </div>
          )}
          
          {/* Placeholder for actual blog content */}
          <article className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
            <p>{post.excerpt}</p>
            <p>This is placeholder content for the full blog post. In a real application, this would be fetched from a CMS and rendered as HTML or Markdown.</p>
            <h2>Section Heading Example</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            {post.imageUrl && <img src={post.imageUrl} alt="Example image in post" width={700} height={400} className="w-full max-w-[700px] h-auto rounded-lg my-6 shadow-md" data-ai-hint={post.imageHint || 'illustration content'} />}
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h3>Subsection Heading</h3>
            <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.</p>
            <blockquote>"This is a blockquote. It stands out from the rest of the content."</blockquote>
          </article>

          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-3">Share this post:</h3>
            <SocialShare 
              title={post.title}
              description={post.excerpt}
              className="mt-2"
            />
          </div>

          {/* Comments Section Placeholder */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Comments (0)</h3>
            <div className="p-6 bg-card rounded-xl shadow-md">
              <p className="text-muted-foreground">Comments are disabled for this placeholder. In a real app, integrate a commenting system here.</p>
              {/* <form className="space-y-4">
                <Textarea placeholder="Write your comment..." />
                <Button>Post Comment</Button>
              </form> */}
            </div>
          </div>

        </div>
      </SectionWrapper>

      {/* Related Posts Section Placeholder */}
      {relatedPosts.length > 0 && (
        <SectionWrapper className="bg-gradient-to-b from-background to-card">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-12">
              Related <Highlight>Articles</Highlight>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} to={relatedPost.slug} className="group block">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-md mb-4">
                     <img src={relatedPost.imageUrl || `https://placehold.co/400x300.png?text=${relatedPost.title.substring(0,10)}`} alt={relatedPost.title} width={400} height={300} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={relatedPost.imageHint}/>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors mb-1">{relatedPost.title}</h3>
                  <p className="text-xs text-muted-foreground">{relatedPost.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}
    </>
  );
}

// Static generation is handled differently in React Router
