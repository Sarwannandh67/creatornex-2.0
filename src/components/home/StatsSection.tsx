'use client';

import { Bot, Rocket, Target, Users } from "lucide-react";
import { useState } from "react";

const stats = [
  { 
    icon: Bot, 
    label: "AI-Powered Agents", 
    value: "24/7",
    description: "Round-the-clock AI assistance for your marketing needs"
  },
  { 
    icon: Users, 
    label: "Active Influencers", 
    value: "15+",
    description: "Carefully vetted content creators ready to promote your brand"
  },
  { 
    icon: Target, 
    label: "Campaign Success", 
    value: "90%",
    description: "Proven track record of successful marketing campaigns"
  },
  { 
    icon: Rocket, 
    label: "ROI Increase", 
    value: "3x",
    description: "Average return on investment for our clients"
  }
];

export default function StatsSection() {
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-3xl mx-auto relative z-10 mt-8">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          onMouseEnter={() => setHoveredStat(stat.label)}
          onMouseLeave={() => setHoveredStat(null)}
          className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all cursor-pointer relative group"
        >
          <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
            <stat.icon className="w-8 h-8 text-primary mb-2 mx-auto group-hover:text-accent transition-colors" />
          </div>
          <p className="font-bold text-2xl text-foreground">{stat.value}</p>
          <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
            {stat.label}
          </p>
          
          {/* Tooltip with simplified animation */}
          {hoveredStat === stat.label && (
            <div className="absolute -bottom-2 left-0 right-0 transform translate-y-full z-20 px-4 py-2 bg-popover rounded-lg shadow-lg text-xs text-popover-foreground mx-2">
              {stat.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 