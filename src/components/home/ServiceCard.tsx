import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Service } from '@/types';
import { ArrowRight } from 'lucide-react';

// Define the structure we expect for CTA links
interface CtaLink {
  href: string;
  label: string;
}

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { icon: Icon, title, description, cta, slug } = service;

  return (
    <Card className="flex h-full transform flex-col overflow-hidden rounded-2xl border-border bg-card/80 shadow-xl transition-all duration-300 md:hover:shadow-2xl md:hover:scale-[1.02] backdrop-blur-sm">
      <CardHeader className="items-start pb-3 sm:pb-4">
        <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
        <CardTitle className="text-xl sm:text-2xl text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow pb-3 sm:pb-4">
        <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">{description}</CardDescription>
      </CardContent>
      <CardFooter className="pt-0">
        {cta && (
          <Button asChild variant="link" className="group px-0 text-accent hover:text-primary text-sm sm:text-base">
            <Link to={cta.href || `/services/${slug}`}>
              {cta.label} <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform md:group-hover:translate-x-1" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
