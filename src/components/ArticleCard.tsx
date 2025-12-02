import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ArticleCardProps {
  title: string;
  category: string;
  readTime: string;
  delay: number;
}

export const ArticleCard = ({ title, category, readTime, delay }: ArticleCardProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ delay });

  return (
    <div
      ref={elementRef}
      className={`group p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all cursor-pointer hover-lift scroll-animate scroll-animate-scale ${isVisible ? 'animate-in' : ''}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs text-secondary uppercase tracking-wider">
            {category}
          </span>
          <h4 className="font-heading text-lg font-medium mt-1 text-foreground group-hover:text-gradient-gold transition-all">
            {title}
          </h4>
        </div>
        <span className="text-xs text-muted-foreground whitespace-nowrap">
          {readTime}
        </span>
      </div>
    </div>
  );
};

