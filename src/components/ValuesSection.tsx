import { Atom, Heart, Shield, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ValueCard } from "./ValueCard";

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
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ delay: 0 });

  return (
    <section id="valori" className="py-24 md:py-32 relative overflow-hidden bg-muted/30">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full border border-foreground animate-particle-float" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full border border-foreground animate-particle-float animation-delay-400" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-animate scroll-animate-slide-up ${headerVisible ? 'animate-in' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border mb-6 animate-scale-in">
            <Heart className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground tracking-wide">Our Values</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light mb-4">
            The Pillars of{" "}
            <span className="text-gradient-sacred animate-shimmer-text">Transformation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Four fundamental principles that guide every formula, every ritual, every Green Lab experience.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              color={value.color}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
