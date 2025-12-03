import { FlaskConical, Shield, Leaf } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const differentiators = [
  {
    icon: FlaskConical,
    title: "Galenic Extraction, Accelerated",
    description: "Apothecary tradition enhanced by ultrasonic sonication and short‑path distillation to shorten extraction times while preserving phytocomplexes.",
  },
  {
    icon: Leaf,
    title: "Full‑Spectrum Entourage Effect",
    description: "Whole‑plant cannabinoids with native terpenes for synergistic efficacy, hydration, soothing and antioxidant protection.",
  },
  {
    icon: Shield,
    title: "Made in Italy • Lab‑Tested • EU‑Compliant",
    description: "Independent testing, transparent actives and regulatory compliance you can trust — designed for discerning CBD skincare users in the Netherlands.",
  },
];

export const DifferentiatorsSection = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ delay: 0 });

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-secondary">
      {/* Top Divider (optional if Hero has bottom one, but good for continuity) */}
      {/* Hero has bottom divider filled with text-secondary, so it blends into this section. */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={headerRef}
          className={cn(
            "text-center mb-16 transition-all duration-700 transform",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Makes Green Lab <span className="text-primary relative inline-block">
              Different
              <span className="absolute bottom-1 left-0 w-full h-2 bg-accent/40 -z-10 rotate-1"></span>
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Full‑spectrum CBD skincare, made in Italy and grounded in galenic craft.
            <br className="hidden sm:block" />
            Balanced between innovative science and 100% natural ingredients — tailored for the Dutch market.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <DifferentiatorCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom Divider - Curve to transition to next section */}
      
    </section>
  );
};

const DifferentiatorCard = ({ item, index }: { item: any, index: number }) => {
  const { elementRef, isVisible } = useScrollAnimation({ delay: index * 150 });
  const Icon = item.icon;

  return (
    <div
      ref={elementRef}
      className={cn(
        "p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/5 transition-all duration-700 group",
        "hover:bg-white hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300"
      >
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-foreground">
        {item.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {item.description}
      </p>
    </div>
  );
};
