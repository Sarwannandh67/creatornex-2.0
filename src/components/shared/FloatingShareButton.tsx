import React, { useEffect, useState } from 'react';
import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SocialShare } from './SocialShare';

interface FloatingShareButtonProps {
  url?: string;
  title?: string;
  description?: string;
}

export const FloatingShareButton: React.FC<FloatingShareButtonProps> = ({
  url,
  title,
  description,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300); // Show after scrolling 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <SocialShare
        url={url}
        title={title}
        description={description}
        className="bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/40 shadow-lg rounded-full p-2"
      />
    </div>
  );
}; 