
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { TeamMember } from '@/types';
import { Users, Target, Eye, Linkedin, Twitter, Github, CheckCircle, Milestone } from 'lucide-react';

// Metadata is now handled via React Helmet

const teamMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Dr. Evelyn Reed',
    role: 'Founder & CEO',
    bio: 'Visionary leader with a PhD in AI, Evelyn founded CreatorNex to bridge cutting-edge AI with practical business solutions.',
    imageUrl: 'https://placehold.co/300x300.png',
    imageHint: 'woman tech leader',
    linkedinUrl: '#',
    twitterUrl: '#',
  },
  {
    id: 'member-2',
    name: 'Marcus Chen',
    role: 'CTO & Head of Engineering',
    bio: 'Marcus is a seasoned technologist specializing in scalable AI model deployment and robust product engineering.',
    imageUrl: 'https://placehold.co/300x300.png',
    imageHint: 'man software engineer',
    linkedinUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'member-3',
    name: 'Aisha Khan',
    role: 'Head of Design & UX',
    bio: 'Aisha champions user-centric design, ensuring CreatorNex solutions are powerful, intuitive, and engaging.',
    imageUrl: 'https://placehold.co/300x300.png',
    imageHint: 'woman designer',
    linkedinUrl: '#',
  },
];

const coreValues = [
    { title: "Innovation", description: "Constantly exploring new technologies and creative approaches." },
    { title: "Integrity", description: "Upholding the highest ethical standards in all our interactions." },
    { title: "Collaboration", description: "Working closely with clients and within our team to achieve shared goals." },
    { title: "Excellence", description: "Striving for the highest quality in everything we do." },
    { title: "Impact", description: "Focusing on delivering solutions that create real value and positive change." },
    { title: "Learning", description: "Fostering a culture of continuous learning and growth." },
];

const milestones = [
    { year: "2021", event: "CreatorNex Founded", description: "A passion project begins, aiming to democratize AI solutions." },
    { year: "2022", event: "First Major Client Acquired", description: "Successfully delivered a custom AI agent, proving our model." },
    { year: "2023", event: "Team Expansion & New Office", description: "Grew our core team and moved into a dedicated innovation hub." },
    { year: "2024", event: "Launch of CreatorNex AI Club", description: "Fostering the next generation of AI talent through university partnerships." },
];

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>About CreatorNex</title>
        <meta name="description" content="Learn about CreatorNex: our story, our passionate team of innovators, our mission to empower businesses with AI, and our vision for the future of technology." />
      </Helmet>
      <SectionWrapper className="bg-gradient-to-b from-background to-card pt-24 md:pt-32">
        <div className="text-center max-w-3xl mx-auto">
          <Users className="h-16 w-16 text-accent mx-auto mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            About <Highlight>CreatorNex</Highlight>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            We are a passionate team of innovators, thinkers, and creators dedicated to shaping the future with intelligent technology and compelling digital experiences.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our <Highlight>Story</Highlight>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              CreatorNex was born from a shared passion for artificial intelligence and a desire to make its transformative power accessible to businesses of all sizes. Founded in 2021, we embarked on a mission to blend cutting-edge AI with creative digital solutions.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              We believe that technology should empower human potential, not replace it. Our journey has been one of continuous learning, innovation, and collaboration, always striving to deliver solutions that are not just technologically advanced but also ethically sound and impactful.
            </p>
          </div>
          <div className="relative h-80 md:h-[450px]">
            <img
              src="https://placehold.co/500x450.png"
              alt="Abstract representation of CreatorNex journey"
              className="rounded-xl shadow-xl w-full h-full object-cover"
              data-ai-hint="innovation journey"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Target className="h-10 w-10 text-accent mb-2" />
            <h3 className="text-2xl font-semibold text-foreground">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower businesses and creators with intelligent, intuitive, and impactful AI-driven solutions that foster growth, efficiency, and innovation.
            </p>
          </div>
          <div className="space-y-4">
            <Eye className="h-10 w-10 text-accent mb-2" />
            <h3 className="text-2xl font-semibold text-foreground">Our Vision</h3>
            <p className="text-muted-foreground">
              To be a leading force in the responsible development and application of artificial intelligence, creating a future where technology and human creativity work in harmony to solve the world's most pressing challenges.
            </p>
          </div>
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our <Highlight>Milestones</Highlight>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A brief look at our journey and key achievements.
          </p>
        </div>
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden md:block border-l-2 border-primary absolute h-full top-0 left-1/2 -translate-x-1/2"></div>
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className="mb-8 flex md:justify-between md:items-center w-full md:odd:flex-row-reverse">
              <div className="hidden md:block w-5/12"></div> {/* Spacer */}
              <div className="z-10 hidden md:block">
                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full shadow">
                  <Milestone className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              <Card className="w-full md:w-5/12 bg-background/70 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-xl text-accent">{milestone.year} - {milestone.event}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </SectionWrapper>


      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet Our <Highlight>Team</Highlight>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            The driving force behind CreatorNex is our diverse team of experts, united by a passion for technology and a commitment to our clients' success.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Core <Highlight>Values</Highlight>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value) => (
            <Card key={value.title} className="bg-card/50 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <CardHeader className="p-0 mb-3">
                <CardTitle className="text-xl text-foreground">{value.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Join Our <Highlight>Journey</Highlight>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you're looking for innovative solutions or seeking to join a dynamic team, CreatorNex is the place where ideas come to life.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="rounded-2xl px-8 py-3 text-lg hover:scale-105 transition-transform">
              <Link to="/contact">Work With Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-2xl px-8 py-3 text-lg hover:scale-105 transition-transform border-primary text-primary hover:bg-primary/10 hover:text-accent">
              <Link to="/careers">Explore Careers</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <Card className="group flex flex-col items-center text-center rounded-2xl border-border bg-card/60 p-6 shadow-xl backdrop-blur-sm transition-all hover:shadow-primary/20">
      <div className="relative h-32 w-32 mb-4 rounded-full overflow-hidden shadow-lg">
        <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" data-ai-hint={member.imageHint} />
      </div>
      <CardTitle className="text-xl text-foreground mb-1">{member.name}</CardTitle>
      <p className="text-sm text-accent font-medium mb-2">{member.role}</p>
      <p className="text-sm text-muted-foreground mb-4 flex-grow">{member.bio}</p> {/* Display full shortened bio */}
      <div className="flex space-x-3">
        {member.linkedinUrl && (
          <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
            <Linkedin className="h-5 w-5" />
          </a>
        )}
        {member.twitterUrl && (
          <a href={member.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
            <Twitter className="h-5 w-5" />
          </a>
        )}
        {member.githubUrl && (
          <a href={member.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
            <Github className="h-5 w-5" />
          </a>
        )}
      </div>
    </Card>
  );
}
