import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

interface SocialLinksProps {
  linkedinUrl?: string;
  twitterUrl?: string;
  githubUrl?: string;
  instagramUrl?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  linkedinUrl,
  twitterUrl,
  githubUrl,
  instagramUrl,
}) => {
  return (
    <div className="flex gap-3 mt-4">
      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      )}
      {twitterUrl && (
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Twitter Profile"
        >
          <Twitter className="w-5 h-5" />
        </a>
      )}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="GitHub Profile"
        >
          <Github className="w-5 h-5" />
        </a>
      )}
      {instagramUrl && (
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Instagram Profile"
        >
          <Instagram className="w-5 h-5" />
        </a>
      )}
    </div>
  );
}; 