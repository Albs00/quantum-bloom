import { Sparkles, Moon, Sun, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

interface Ritual {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  duration: string;
  bestFor: string;
  image: string;
}

const rituals: Ritual[] = [
  {
    id: "morning-glow",
    icon: Sun,
    title: "Morning Glow Ritual",
    description: "Awaken skin with an energising ritual that delivers protective full‑spectrum CBD and deep hydration for a luminous start.",
    duration: "5–10 min",
    bestFor: "Energy & protection",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "evening-restore",
    icon: Moon,
    title: "Evening Restore Ritual",
    description: "A restorative evening ritual with calming CBD to nourish and repair while you sleep.",
    duration: "10–15 min",
    bestFor: "Night regeneration",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
  },
];

export const FeaturedRitualsSection = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ delay: 0 });

  return (
    <section id="featured-rituals" className="py-24 md:py-32 relative bg-background overflow-hidden">
      {/* Top divider from previous section (Curve) handled by previous section */}
      
      {/* Organic background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/30 rounded-[100%] blur-3xl -z-10 animate-pulse duration-[8000ms]" />

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={headerRef}
          className={cn(
            "text-center mb-16 transition-all duration-700 transform",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-primary/10 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary/80 tracking-wide font-medium">Skin Ritual Guides</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Skin Ritual <span className="text-primary font-serif italic">Guides</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Editorial guidance for mindful skincare with full‑spectrum CBD. Simple steps, clear benefits.
          </p>
        </div>

        {/* Rituals grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {rituals.map((ritual, index) => (
            <RitualCard key={ritual.id} ritual={ritual} index={index} />
          ))}
        </div>
      </div>
      
      
    </section>
  );
};

const RitualCard = ({ ritual, index }: { ritual: Ritual; index: number }) => {
  const { elementRef, isVisible } = useScrollAnimation({ delay: index * 150 });
  const Icon = ritual.icon;

  return (
    <div 
      ref={elementRef}
      className={cn(
        "group relative rounded-3xl bg-white overflow-hidden shadow-lg transition-all duration-500",
        "hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      {/* Image Background Area */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
        <img 
          src={ritual.image} 
          alt={ritual.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 z-20 w-12 h-12 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center text-primary shadow-sm">
          <Icon className="w-6 h-6" />
        </div>
      </div>

      {/* Content */}
      <div className="p-8 relative">
        <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors font-heading">{ritual.title}</h3>
        <p className="text-muted-foreground text-base leading-relaxed mb-8">
          {ritual.description}
        </p>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border/50 pt-6">
          <span className="px-3 py-1 rounded-full bg-secondary font-medium text-primary/80">{ritual.duration}</span>
          <span className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-primary" />
            {ritual.bestFor}
          </span>
        </div>
      </div>
    </div>
  );
};
