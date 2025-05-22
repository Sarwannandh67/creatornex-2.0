import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { Users, ArrowRight } from 'lucide-react';

export function WhoWeAreSection() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-background to-card">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Users className="h-12 w-12 text-accent mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet <Highlight>CreatorNex</Highlight>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our mission is to empower your brand by blending innovative AI solutions with compelling social strategies. We are passionate about transforming your vision into reality.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
             Founded by friends with a shared dream, CreatorNex is your dedicated partner for digital growth and intelligent automation.
          </p>
          
          <Button asChild size="lg" className="mt-8 rounded-2xl px-8 py-3 text-lg hover:scale-105 transition-transform btn-purple">
            <Link href="/about">
              More About Our Team <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="relative h-80 md:h-96">
          <Image
            src="/meet.png"
            alt="CreatorNex team working collaboratively with innovative ideas"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-xl shadow-xl object-cover"
            data-ai-hint="teamwork innovation office"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

