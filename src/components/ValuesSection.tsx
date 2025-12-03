import { Atom, Heart, Shield, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ValueCard } from "./ValueCard";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Atom,
    title: "Galenic Craft & Science",
    description: "Apothecary‑grade processes refined by modern lab technology for stable, effective skincare.",
    color: "primary" as const,
    delay: 200,
  },
  {
    icon: Heart,
    title: "Full‑Spectrum & Entourage",
    description: "Cannabinoids and native terpenes working together for synergistic efficacy and comfort.",
    color: "secondary" as const,
    delay: 400,
  },
  {
    icon: Shield,
    title: "Transparency & Safety",
    description: "Independent lab testing, EU compliance and clear actives you can trust.",
    color: "accent" as const,
    delay: 600,
  },
  {
    icon: Sparkles,
    title: "Made in Italy • 100% Natural",
    description: "Italian supply chain, pesticide‑free biomasses and respectful formulations from field to skin.",
    color: "primary" as const,
    delay: 800,
  }
];

// Selecting top 4 values to keep layout clean or use grid for more. 
// Let's stick to the original 4 key values for the section, or maybe 3 for a cleaner grid? 
// The original had 4. Let's keep the first 4 refined ones.

const displayValues = values.slice(0, 4);

export const ValuesSection = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ delay: 0 });

  return (
    <section id="valori" className="py-24 md:py-32 relative overflow-hidden bg-secondary/10">
      
      
      {/* Organic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
            <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-white/40 rounded-full blur-3xl animate-float-organic" />
            <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl animate-float-organic" style={{ animationDelay: "3s" }} />
         </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={cn(
            "text-center mb-16 transition-all duration-700 transform",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/10 mb-6 shadow-sm">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary/80 tracking-wide font-medium">Our Differentiation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-heading">
            Built for <span className="text-primary font-serif italic">Performance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Four principles that define our full‑spectrum CBD skincare for the Netherlands.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayValues.map((value, index) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
      
      
    </section>
  );
};
