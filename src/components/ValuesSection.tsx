import { Atom, Heart, Shield, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Atom,
    title: "Magical & Quantum Science",
    description: "Biotechnological innovation, rigorous testing, tangible results. Where quantum physics meets advanced cosmeceutics.",
    color: "primary",
    delay: "animation-delay-200",
  },
  {
    icon: Heart,
    title: "Holistic by Nature",
    description: "Skin, energy, spirit in balance. Every formula acts on all levels of your being.",
    color: "secondary",
    delay: "animation-delay-400",
  },
  {
    icon: Shield,
    title: "Transparency & Safety",
    description: "Published clinical trials, clarity on actives, zero compromises. Your trust is our most precious value.",
    color: "accent",
    delay: "animation-delay-600",
  },
  {
    icon: Sparkles,
    title: "Energetic Ritual",
    description: "Every product is a complete sensory ritual: transformative textures, signature fragrances, multidimensional experience.",
    color: "primary",
    delay: "animation-delay-800",
  },
];

export const ValuesSection = () => {
  return (
    <section id="valori" className="py-24 md:py-32 relative overflow-hidden bg-muted/30">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full border border-foreground" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full border border-foreground" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border mb-6">
            <Heart className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground tracking-wide">Our Values</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light mb-4">
            The Pillars of{" "}
            <span className="text-gradient-sacred">Transformation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Four fundamental principles that guide every formula, every ritual, every Green Lab experience.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={cn(
                "group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 animate-fade-in",
                value.delay
              )}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div
                className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110",
                  value.color === "primary" && "bg-primary/20 text-primary",
                  value.color === "secondary" && "bg-secondary/20 text-secondary",
                  value.color === "accent" && "bg-accent/20 text-accent"
                )}
              >
                <value.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground group-hover:text-gradient-gold transition-all">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
