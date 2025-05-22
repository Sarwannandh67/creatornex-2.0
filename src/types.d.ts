declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    absoluteStrokeWidth?: boolean;
  }
  export type LucideIcon = FC<IconProps>;
  export const Bot: LucideIcon;
  export const Rocket: LucideIcon;
  export const Target: LucideIcon;
  export const Users: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const MousePointer2: LucideIcon;
  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const Briefcase: LucideIcon;
  export const Lightbulb: LucideIcon;
  export const Mail: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Rss: LucideIcon;
  export const ShoppingBag: LucideIcon;
  export const Home: LucideIcon;
  export const HelpCircle: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const MessageSquare: LucideIcon;
  export const Palette: LucideIcon;
  export const Film: LucideIcon;
  export const Search: LucideIcon;
  export const ArrowLeft: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const Zap: LucideIcon;
  export const Brain: LucideIcon;
  export const BarChart3: LucideIcon;
  export const Link2: LucideIcon;
  export const Settings: LucideIcon;
}

declare module '@/components/shared/Highlight' {
  import { FC, ReactNode } from 'react';
  export interface HighlightProps {
    children: ReactNode;
  }
  export const Highlight: FC<HighlightProps>;
}

declare module '@/components/ui/button' {
  import { FC, ReactNode } from 'react';
  export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
    size?: 'default' | 'sm' | 'lg' | 'icon';
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    className?: string;
  }
  export const Button: FC<ButtonProps>;
} 