import React from 'react';
import { SocialLinks } from '../ui/SocialLinks';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  imageHint: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  githubUrl?: string;
  instagramUrl?: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  bio,
  imageUrl,
  imageHint,
  linkedinUrl,
  twitterUrl,
  githubUrl,
  instagramUrl,
}) => {
  return (
    <div className="group relative bg-card rounded-lg p-6 transition-all hover:shadow-lg">
      <div className="aspect-square overflow-hidden rounded-lg mb-4">
        <img
          src={imageUrl}
          alt={`${name} - ${imageHint}`}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-primary font-medium mb-2">{role}</p>
      <p className="text-muted-foreground mb-4">{bio}</p>
      <SocialLinks
        linkedinUrl={linkedinUrl}
        twitterUrl={twitterUrl}
        githubUrl={githubUrl}
        instagramUrl={instagramUrl}
      />
    </div>
  );
}; 