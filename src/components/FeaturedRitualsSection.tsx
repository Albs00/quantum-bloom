import { Sparkles, Moon, Sun, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface Ritual {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  duration: string;
  bestFor: string;
}

const rituals: Ritual[] = [
  {
    id: "morning-glow",
    icon: Sun,
    title: "Morning Glow Ritual",
    description: "Risveglia la tua pelle con un rituale energizzante che combina la protezione del CBD con l'idratazione profonda per affrontare la giornata con luminosità.",
    duration: "5-10 min",
    bestFor: "Energia e protezione",
  },
  {
    id: "evening-restore",
    icon: Moon,
    title: "Evening Restore Ritual",
    description: "Un rituale serale rigenerante che sfrutta le proprietà calmanti del CBD per riparare e nutrire la pelle durante il sonno.",
    duration: "10-15 min",
    bestFor: "Rigenerazione notturna",
  },
];

export const FeaturedRitualsSection = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ delay: 0 });

  return (
    <section id="featured-rituals" className="py-16 md:py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-12 scroll-animate scroll-animate-slide-up ${headerVisible ? 'animate-in' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border mb-6">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground tracking-wide">Your Rituals</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-light mb-4">
            Rituali{" "}
            <span className="text-gradient-gold">Sinergici</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Scopri come combinare i nostri prodotti per risultati straordinari
          </p>
        </div>

        {/* Rituals grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {rituals.map((ritual, index) => (
            <RitualCard key={ritual.id} ritual={ritual} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const RitualCard = ({ ritual, index }: { ritual: Ritual; index: number }) => {
  const { elementRef, isVisible } = useScrollAnimation({ delay: index * 100 });
  const Icon = ritual.icon;

  return (
    <div
      ref={elementRef}
      className={`group relative p-8 rounded-2xl bg-background border border-border/50 hover:border-secondary/50 transition-all duration-500 scroll-animate scroll-animate-slide-up ${isVisible ? 'animate-in' : ''}`}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
        <Icon className="w-7 h-7 text-secondary" />
      </div>

      {/* Content */}
      <h3 className="font-heading text-xl font-medium mb-3">{ritual.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {ritual.description}
      </p>

      {/* Meta info */}
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <span className="px-3 py-1 rounded-full bg-muted">{ritual.duration}</span>
        <span className="flex items-center gap-1">
          <Heart className="w-3 h-3 text-secondary" />
          {ritual.bestFor}
        </span>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
};
