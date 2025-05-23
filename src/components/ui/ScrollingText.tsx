import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ScrollingTextProps {
  text: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
}

export function ScrollingText({ 
  text, 
  buttonText,
  onButtonClick,
  className,
  speed = 'normal' 
}: ScrollingTextProps) {
  const speedClasses = {
    slow: 'animate-marquee-slow',
    normal: 'animate-marquee',
    fast: 'animate-marquee-fast'
  };

  return (
    <div className={cn(
      "sticky top-16 z-40 w-full overflow-hidden bg-background py-2 border-b border-border",
      className
    )}>
      <div className="flex items-center justify-center">
        <div className={cn(
          "flex items-center whitespace-nowrap",
          speedClasses[speed]
        )}>
          <span className="text-sm font-medium text-foreground">{text}</span>
          {buttonText && (
            <Button 
              variant="link" 
              className="text-accent hover:text-accent-accessible ml-4 h-auto p-0 font-medium"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
} 