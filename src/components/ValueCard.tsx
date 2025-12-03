import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

export const ValueCard = ({ icon: Icon, title, description, delay }: ValueCardProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ delay });

  return (
    <div 
      ref={elementRef}
      className={cn(
        "group relative p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-primary/5 transition-all duration-700",
        "hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
          "bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:rotate-6"
        )}
      >
        <Icon className="w-7 h-7" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-3 text-foreground font-heading">
        {title}
      </h3>
      <p className="text-muted-foreground text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};
