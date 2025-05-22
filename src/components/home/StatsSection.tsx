'use client';

import { Bot, Rocket, Target, Users } from "lucide-react";

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
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-3xl mx-auto relative z-10 mt-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all group"
        >
          <div className="transition-transform duration-300 group-hover:scale-110">
            <stat.icon className="w-8 h-8 text-primary mb-2 mx-auto group-hover:text-accent transition-colors" />
          </div>
          <p className="font-bold text-2xl text-foreground">{stat.value}</p>
          <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
            {stat.label}
          </p>
          <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
} 