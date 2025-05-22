import { Helmet } from 'react-helmet-async';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Briefcase, Lightbulb, Users, ArrowRight, Globe2, Clock, Laptop2, Zap } from 'lucide-react';

// Metadata is now handled via React Helmet

const jobOpenings = [
  {
    id: 'ai-engineer',
    title: 'Senior AI Engineer',
    location: 'Remote (India)',
    description: 'Lead the design and development of cutting-edge AI models and solutions. Strong experience in ML, DL, and Python required.',
    applyLink: '#application-form'
  },
  {
    id: 'frontend-dev',
    title: 'Frontend Developer',
    location: 'Remote (India)',
    description: 'Build beautiful and responsive user interfaces for our web applications. Proficiency in React, Next.js, and Tailwind CSS is a must.',
    applyLink: '#application-form'
  },
  {
    id: 'ux-designer',
    title: 'UX/UI Designer',
    location: 'Remote (India)',
    description: 'Create intuitive and engaging user experiences for our diverse range of digital products. Strong portfolio showcasing UX research and UI design skills.',
    applyLink: '#application-form'
  },
  {
    id: 'video-editor',
    title: 'Video Editors',
    location: 'Remote (India)',
    description: 'Strong portfolio showcasing your editing skills. Filmora, CapCut, VN Editior, Adobe PR, etc...',
    applyLink: '#application-form'
  },
  {
    id: 'graphic-designers',
    title: 'Graphic designers',
    location: 'Remote (India)',
    description: 'Strong portfolio showcasing your previous work with plenty of skills. Canva, Flyers, Posters, Thumbnails, Logo makers etc...',
    applyLink: '#application-form'
  },
];

const remotePerks = [
  {
    icon: Globe2,
    title: "100% Remote",
    description: "Work from anywhere in India - no relocation required"
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Choose your most productive work hours"
  },
  {
    icon: Laptop2,
    title: "Home Office Setup",
    description: "Allowance for your perfect remote workspace"
  },
  {
    icon: Zap,
    title: "Digital-First Culture",
    description: "Modern tools and processes for seamless remote collaboration"
  }
];

export default function CareersPage() {
  const handleApplyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setTimeout(() => {
      const formElement = document.getElementById('application-form');
      if (formElement) {
        const yOffset = -100;
        const y = formElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <>
      <Helmet>
        <title>Careers at CreatorNex</title>
        <meta name="description" content="Join India's First AI Agent-Powered Marketing Platform. Work remotely with a global team shaping the future of influencer and business marketing with innovative AI solutions." />
      </Helmet>
      <SectionWrapper className="bg-gradient-to-b from-background to-card pt-24 md:pt-32">
        <div className="text-center max-w-3xl mx-auto">
          <Briefcase className="h-16 w-16 text-accent mx-auto mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Careers at <Highlight>CreatorNex</Highlight>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Join India's pioneering AI-powered marketing platform. Work remotely with a talented team that's revolutionizing influencer and business marketing through innovative AI solutions.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Remote-First <Highlight>Culture</Highlight>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We believe in the power of remote work. Our team collaborates effectively across India, fostering innovation and work-life balance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {remotePerks.map((perk) => (
            <div key={perk.title} className="p-6 bg-card/50 rounded-xl border border-border/50 backdrop-blur-sm">
              <perk.icon className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{perk.title}</h3>
              <p className="text-sm text-muted-foreground">{perk.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why <Highlight>Work With Us</Highlight>?
            </h2>
            <ul className="mt-6 space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start">
                <Globe2 className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <span>Work remotely with flexible hours and a focus on work-life balance.</span>
              </li>
              <li className="flex items-start">
                <Lightbulb className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <span>Work on challenging and impactful projects that leverage cutting-edge AI technologies.</span>
              </li>
              <li className="flex items-start">
                <Users className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <span>Collaborate with a diverse, talented, and supportive team in an inclusive digital environment.</span>
              </li>
              <li className="flex items-start">
                <Zap className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <span>Competitive salary, comprehensive benefits, and remote work perks.</span>
              </li>
            </ul>
          </div>
          <div className="relative h-80 md:h-[450px] w-full">
            <img
              src="/remote-team-collaboration.jpg"
              alt="CreatorNex remote team collaboration"
              className="w-full h-full rounded-xl shadow-xl object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Current <Highlight>Openings</Highlight>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We're always looking for passionate individuals to join our remote team. If you don't see a role that fits, feel free to send us your resume for future consideration.
          </p>
        </div>
        {jobOpenings.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobOpenings.map((job) => (
              <div key={job.id} className="p-6 bg-background rounded-xl shadow-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-1">{job.title}</h3>
                <p className="text-sm text-accent mb-2 flex items-center gap-2">
                  <Globe2 className="h-4 w-4" /> {job.location}
                </p>
                <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                <Button asChild variant="outline" className="w-full rounded-xl border-primary text-primary hover:bg-primary/10 hover:text-accent">
                  <Link to={job.applyLink} onClick={handleApplyClick}>
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No current openings. Please check back later or send us a speculative application.</p>
        )}
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Apply <Highlight>Now</Highlight>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Ready to join our remote team? Fill out the application form below and we'll get back to you soon.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden pt-[100%] rounded-lg shadow-lg">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfIlFg6m7VfefvhTe-TBV7BMmn1_SDSNqP1L1NaL22d4gKIDg/viewform?embedded=true"
              className="absolute top-0 left-0 w-full h-full border-0"
              title="Career Application Form"
            >
              Loading...
            </iframe>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
