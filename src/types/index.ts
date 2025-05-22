import type { LucideIcon } from 'lucide-react';

export type NavLinkItem = {
  href: string;
  label: string;
  icon?: LucideIcon; // Optional icon for mobile menu or sidebar
};

export type CtaLink = {
  href: string;
  label: string;
};

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  cta: CtaLink;
  slug: string; 
};

export type PortfolioCategory = 'AI Solutions' | 'Web Development' | 'Mobile Apps' | 'Content Creation' | 'Digital Strategy' | 'Social Media' | 'Design' | 'Video';


export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  imageUrl: string;
  imageHint?: string;
  description: string;
  detailsUrl?: string;
  videoUrl?: string;
  clientName?: string;
  results?: string[];
  relatedTestimonial?: Testimonial;
};

export type Testimonial = {
  id: string;
  quote: string;
  clientName: string;
  clientRole?: string;
  clientCompany?: string;
  clientAvatarUrl?: string;
  avatarHint?: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  imageHint?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  githubUrl?: string;
};

export type ClubEvent = {
  id:string;
  title: string;
  date: string; 
  description: string;
  imageUrl?: string;
  imageHint?: string;
  location?: string;
  registrationLink?: string;
};

export type SocialLink = {
  href: string;
  icon: LucideIcon;
  label: string; // For aria-label
  username?: string; // e.g. @creatornex
};

export type BlogArticleStub = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
  imageHint?: string;
  slug: string;
  category?: string;
  author?: string; // Added author
};

// You might want a more detailed type for a full blog post if it differs from the stub
export type FullBlogArticle = BlogArticleStub & {
  content: string; // or a more structured type like PortableTextBlock[] if using Sanity/similar
  // other fields like related posts, tags etc.
};
