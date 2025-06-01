import { Helmet } from 'react-helmet-async';

// Metadata is now handled via React Helmet

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sarwan Nandh",
    role: "Founder & CEO",
    image: "/team/sarwan.jpg",
    bio: "Visionary leader with expertise in AI and digital innovation."
  },
  // Add more team members as needed
];

export default function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Our Team | CreatorNex</title>
        <meta name="description" content="Meet the talented individuals behind CreatorNex LLC who are driving innovation in AI and digital solutions." />
      </Helmet>
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Team</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Meet the passionate individuals driving innovation and excellence at CreatorNex.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="bg-card rounded-lg p-6 shadow-lg">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <img
                src={member.image}
                alt={member.name}
                width={192}
                height={192}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-accent mb-2">{member.role}</p>
              <p className="text-muted-foreground">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}