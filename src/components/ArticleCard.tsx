import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

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
      className={cn(
        "group p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-primary/5 transition-all duration-500 cursor-pointer",
        "hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 hover:-translate-y-1",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs text-primary/80 font-medium uppercase tracking-wider">
            {category}
          </span>
          <h4 className="text-lg font-bold mt-2 text-foreground group-hover:text-primary transition-colors font-heading">
            {title}
          </h4>
        </div>
        <span className="text-xs text-muted-foreground whitespace-nowrap font-medium bg-secondary/50 px-2 py-1 rounded-full">
          {readTime}
        </span>
      </div>
    </div>
  );
};
