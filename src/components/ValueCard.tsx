import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: "primary" | "secondary" | "accent";
  delay: number;
}

export const ValueCard = ({ icon: Icon, title, description, color, delay }: ValueCardProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ delay });

  return (
    <div
      ref={elementRef}
      className={cn(
        "group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover-lift scroll-animate scroll-animate-scale",
        isVisible && 'animate-in'
      )}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <div
        className={cn(
          "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105",
          color === "primary" && "bg-primary/20 text-primary group-hover:bg-primary/30",
          color === "secondary" && "bg-secondary/20 text-secondary group-hover:bg-secondary/30",
          color === "accent" && "bg-accent/20 text-accent group-hover:bg-accent/30"
        )}
        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
      >
        <Icon className="w-7 h-7 transition-all duration-300" />
      </div>

      {/* Content */}
      <h3 className="font-heading text-xl font-semibold mb-3 text-foreground group-hover:text-gradient-gold transition-all duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed transition-all duration-300 group-hover:text-foreground/90">
        {description}
      </p>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-x-0 group-hover:scale-x-100" />
    </div>
  );
};

