import React from 'react';
import { Facebook, Twitter, Linkedin, Link2, Share2, Instagram, Youtube, MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from 'sonner';

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
  showWhatsApp?: boolean;
  showEmail?: boolean;
  showInstagram?: boolean;
  showYoutube?: boolean;
}

export const SocialShare: React.FC<SocialShareProps> = ({
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = document.title,
  description = '',
  className = '',
  showWhatsApp = true,
  showEmail = true,
  showInstagram = true,
  showYoutube = true,
}) => {
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\n${url}`)}`,
    instagram: 'https://www.instagram.com/creator.nex/', // Updated Instagram profile
    youtube: 'https://www.youtube.com/@creatornex', // YouTube channel
    facebookProfile: 'https://www.facebook.com/profile.php?id=61576858113996', // Updated Facebook profile
  };

  const handleShare = async (platform: string) => {
    const shareUrl = shareLinks[platform as keyof typeof shareLinks];
    if (shareUrl) {
      if (platform === 'email') {
        window.location.href = shareUrl;
      } else if (platform === 'instagram' || platform === 'youtube' || platform === 'facebookProfile') {
        window.open(shareUrl, '_blank');
      } else {
        window.open(shareUrl, '_blank', 'width=600,height=400');
      }
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success('Link copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem onClick={() => handleShare('facebook')}>
            <Facebook className="mr-2 h-4 w-4" />
            Share on Facebook
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleShare('twitter')}>
            <Twitter className="mr-2 h-4 w-4" />
            Share on Twitter
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleShare('linkedin')}>
            <Linkedin className="mr-2 h-4 w-4" />
            Share on LinkedIn
          </DropdownMenuItem>
          {showWhatsApp && (
            <DropdownMenuItem onClick={() => handleShare('whatsapp')}>
              <MessageCircle className="mr-2 h-4 w-4" />
              Share on WhatsApp
            </DropdownMenuItem>
          )}
          {showEmail && (
            <DropdownMenuItem onClick={() => handleShare('email')}>
              <Mail className="mr-2 h-4 w-4" />
              Share via Email
            </DropdownMenuItem>
          )}
          <DropdownMenuSeparator />
          {showInstagram && (
            <DropdownMenuItem onClick={() => handleShare('instagram')}>
              <Instagram className="mr-2 h-4 w-4" />
              Follow on Instagram
            </DropdownMenuItem>
          )}
          <DropdownMenuItem onClick={() => handleShare('facebookProfile')}>
            <Facebook className="mr-2 h-4 w-4" />
            Follow on Facebook
          </DropdownMenuItem>
          {showYoutube && (
            <DropdownMenuItem onClick={() => handleShare('youtube')}>
              <Youtube className="mr-2 h-4 w-4" />
              Subscribe on YouTube
            </DropdownMenuItem>
          )}
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={copyToClipboard}>
            <Link2 className="mr-2 h-4 w-4" />
            Copy Link
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}; 