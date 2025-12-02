import { FlaskConical, Shield, Leaf } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const differentiators = [
  {
    icon: FlaskConical,
    title: "Italian CBD Cosmeceutical Rituals",
    description: "Developed with Green Labs expertise, our full-spectrum botanical complexes blend Italian craftsmanship with advanced extraction science.",
    color: "primary",
  },
  {
    icon: Leaf,
    title: "Full-Spectrum Botanical Benefits",
    description: "Hydration, soothing, and antioxidant protection. Each formula supports your skin's natural barrier while delivering a mindful ritual experience.",
    color: "secondary",
  },
  {
    icon: Shield,
    title: "Lab-Tested & EU-Compliant",
    description: "Every formula undergoes rigorous testing and complies with EU cosmetic regulations. Trust, transparency, and safety in every ritual.",
    color: "accent",
  },
];

export const DifferentiatorsSection = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ delay: 0 });

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-12 scroll-animate scroll-animate-slide-up ${headerVisible ? 'animate-in' : ''}`}
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-light mb-4">
            What Makes Green Lab{" "}
            <span className="text-gradient-sacred">Different</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Premium CBD skincare rituals crafted for conscious skin seekers across Europe
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {differentiators.map((item, index) => {
            const { elementRef, isVisible } = useScrollAnimation({ delay: index * 150 });
            const Icon = item.icon;
            
            return (
              <div
                key={item.title}
                ref={elementRef}
                className={`p-6 rounded-xl bg-card border border-border hover-lift scroll-animate scroll-animate-scale ${isVisible ? 'animate-in' : ''}`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${
                    item.color === "primary" ? "bg-primary/10 text-primary" :
                    item.color === "secondary" ? "bg-secondary/10 text-secondary" :
                    "bg-accent/10 text-accent"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

