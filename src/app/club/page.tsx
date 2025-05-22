
import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Highlight } from '@/components/shared/Highlight';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { ClubEvent } from '@/types';
import { Sparkles, CalendarDays, Users, Lightbulb, Mic, Award } from 'lucide-react';
import { JoinClubForm } from '@/components/club/JoinClubForm';

export const metadata: Metadata = {
  title: 'CreatorNex AI Club',
  description: 'Join the CreatorNex AI Club at your university! Connect with fellow AI enthusiasts, participate in workshops, attend events, and contribute to exciting AI projects.',
};

const upcomingEvents: ClubEvent[] = [
  {
    id: 'event-1',
    title: 'Introduction to Generative AI Workshop',
    date: 'October 26, 2024',
    location: 'Online & Campus Room 301',
    description: 'An interactive workshop covering the fundamentals of generative AI models like LLMs and diffusion models. Hands-on coding session included.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'AI workshop students',
    registrationLink: '#',
  },
  {
    id: 'event-2',
    title: 'Guest Lecture: AI Ethics in Modern Society',
    date: 'November 15, 2024',
    location: 'University Auditorium',
    description: 'Esteemed AI ethicist Dr. Anya Sharma discusses the critical ethical considerations in AI development and deployment.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'lecture audience',
  },
  {
    id: 'event-3',
    title: 'AI Project Showcase & Hackathon Kick-off',
    date: 'December 5, 2024',
    location: 'Engineering Hall Atrium',
    description: 'See innovative AI projects from club members and get ready for our annual AI hackathon. Prizes and networking opportunities!',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'hackathon group coding',
  },
];

const clubActivities = [
    { icon: Lightbulb, title: "Workshops & Bootcamps", description: "Hands-on sessions on various AI topics, from machine learning basics to advanced deep learning techniques." },
    { icon: Mic, title: "Guest Speakers & Panels", description: "Insights from industry experts, researchers, and entrepreneurs in the AI field." },
    { icon: Users, title: "Collaborative Projects", description: "Opportunities to work on real-world AI projects in teams, building your portfolio and skills." },
    { icon: Award, title: "Hackathons & Competitions", description: "Challenges to test your abilities, innovate, and win exciting prizes." },
];

export default function UniversityClubPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-b from-background to-card pt-24 md:pt-32">
        <div className="text-center max-w-3xl mx-auto">
          <Sparkles className="h-16 w-16 text-accent mx-auto mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            CreatorNex <Highlight>AI Club</Highlight>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Ignite your passion for Artificial Intelligence. Connect, learn, and innovate with a community of like-minded students and industry professionals.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Welcome to the <Highlight>Future of AI</Highlight>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The CreatorNex AI Club is a student-led initiative supported by CreatorNex, aimed at fostering a vibrant community of AI enthusiasts on campus. Our goal is to provide a platform for learning, collaboration, and innovation in the rapidly evolving field of Artificial Intelligence.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you're a beginner curious about AI or an experienced coder looking to tackle complex challenges, the CreatorNex AI Club offers something for everyone.
            </p>
          </div>
          <div className="relative h-80 md:h-[450px]">
            <Image
              src="https://placehold.co/500x450.png"
              alt="Students collaborating in an AI club"
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-xl"
              data-ai-hint="students technology club"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What We <Highlight>Offer</Highlight>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {clubActivities.map(activity => (
                 <Card key={activity.title} className="bg-background/50 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
                    <activity.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                    <CardTitle className="text-xl text-foreground mb-2">{activity.title}</CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">{activity.description}</CardDescription>
                 </Card>
            ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Upcoming <Highlight>Events & Workshops</Highlight>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        {/* Placeholder for more events or a calendar link */}
        <div className="text-center mt-12">
            <p className="text-muted-foreground">Stay tuned for more exciting events! Follow us on [Social Media Link].</p>
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-gradient-to-b from-background to-card" id="join-club">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Join the <Highlight>CreatorNex AI Club</Highlight>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Ready to dive into the world of AI? Fill out the form below to become a member of the CreatorNex AI Club and start your journey of innovation and learning.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-background p-8 rounded-2xl shadow-2xl">
          <JoinClubForm />
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-gradient-to-b from-background to-card">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Club <Highlight>Gallery</Highlight></h2>
            <p className="mt-4 text-muted-foreground">A Glimpse into Our Community and Activities.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({length: 4}).map((_, idx) => (
                 <div key={idx} className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                    <Image src={`https://placehold.co/400x400.png`} data-ai-hint="club event students" alt={`Club activity ${idx + 1}`} layout="fill" objectFit="cover" />
                 </div>
            ))}
        </div>
      </SectionWrapper>
    </>
  );
}

function EventCard({ event }: { event: ClubEvent }) {
  return (
    <Card className="group flex h-full transform flex-col overflow-hidden rounded-2xl border-border bg-background/50 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] backdrop-blur-sm">
      {event.imageUrl && (
        <CardHeader className="p-0">
          <div className="relative h-56 w-full">
            <Image
              src={event.imageUrl}
              alt={event.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={event.imageHint}
            />
          </div>
        </CardHeader>
      )}
      <CardContent className="flex flex-grow flex-col p-6">
        <CardTitle className="text-xl text-foreground mb-2">{event.title}</CardTitle>
        <div className="text-sm text-accent font-semibold mb-2 flex items-center">
            <CalendarDays className="h-4 w-4 mr-2" /> {event.date}
        </div>
        {event.location && <p className="text-xs text-muted-foreground mb-1">Location: {event.location}</p>}
        <p className="text-muted-foreground text-sm flex-grow mb-4">{event.description}</p>
      </CardContent>
      {event.registrationLink && (
        <CardFooter className="p-6 pt-0">
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring w-full"
          >
            Register Now
          </a>
        </CardFooter>
      )}
    </Card>
  );
}
