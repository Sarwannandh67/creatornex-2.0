import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Service } from '@/types';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { icon: Icon, title, description, cta, slug } = service;

  return (
    <Card className="flex h-full transform flex-col overflow-hidden rounded-2xl border-border bg-card/80 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] backdrop-blur-sm">
      <CardHeader className="items-start">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-2xl text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-muted-foreground leading-relaxed">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="group px-0 text-accent hover:text-primary">
          <Link href={cta.href || `/services/${slug}`}>
            {cta.label} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
