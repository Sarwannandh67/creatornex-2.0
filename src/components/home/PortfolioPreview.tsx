
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { PortfolioItem } from '@/types';
import { ArrowRight } from 'lucide-react';

// In a real app, these would be fetched or filtered from a larger dataset
const featuredPortfolioItems: PortfolioItem[] = [
  {
    id: 'project-alpha',
    title: 'AI-Powered Recommendation Engine',
    category: 'AI Solutions',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'AI network graph',
    description: 'Boosted user engagement by 30% with a custom AI recommendation system.',
    detailsUrl: '/portfolio/project-alpha', // Assuming a portfolio detail page structure
  },
  {
    id: 'project-beta',
    title: 'E-commerce Platform Redesign',
    category: 'Web Development',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'modern website design',
    description: 'Revitalized an online store, increasing conversion rates by 25%.',
    detailsUrl: '/portfolio/project-beta',
  },
  {
    id: 'project-gamma',
    title: 'Fitness Tracking Mobile App',
    category: 'Mobile Apps',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mobile app interface',
    description: 'Developed a cross-platform mobile app with advanced fitness tracking features.',
    detailsUrl: '/portfolio/project-gamma',
  },
];

function PortfolioCardPreview({ item }: { item: PortfolioItem }) {
  return (
    <Card className="group flex h-full transform flex-col overflow-hidden rounded-2xl border-border bg-card/80 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] backdrop-blur-sm">
      <CardHeader className="p-0">
        <div className="relative h-56 w-full">
          <Image
            src={item.imageUrl}
            alt={item.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={item.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
           <span className="absolute top-4 right-4 bg-primary/80 text-primary-foreground text-xs px-2 py-1 rounded-md">{item.category}</span>
        </div>
      </CardHeader>
      <CardContent className="flex flex-grow flex-col p-6">
        <CardTitle className="text-xl text-foreground mb-2">{item.title}</CardTitle>
        <p className="text-muted-foreground text-sm flex-grow">{item.description}</p>
      </CardContent>
      {item.detailsUrl && (
        <CardFooter className="p-6 pt-0">
          <Button asChild variant="link" className="group px-0 text-accent hover:text-primary">
            <Link href={item.detailsUrl}>
              View Project <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}


export function PortfolioPreview() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-background to-card">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Our <Highlight>Recent Work</Highlight>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Take a glimpse at some of the impactful solutions we've delivered for our clients.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredPortfolioItems.map((item) => (
          <PortfolioCardPreview key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild size="lg" variant="outline" className="rounded-2xl px-8 py-3 text-lg border-primary text-primary hover:bg-primary/10 hover:text-accent">
          <Link href="/portfolio">
            See More Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
