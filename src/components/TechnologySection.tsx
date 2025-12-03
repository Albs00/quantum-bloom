import { Zap, FlaskConical, Leaf, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export const TechnologySection = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ delay: 0 });
  
  return (
    <section id="tecnologia" className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Background Decoration */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-secondary/50 rounded-l-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={cn(
            "text-center mb-20 transition-all duration-700 transform",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-primary/10 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary/80 tracking-wide font-medium">Galenic Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Galenic Extraction Meets <span className="text-primary font-serif italic">Advanced Tech</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Apothecary tradition paired with ultrasonic sonication and short‑path distillation for precise, efficient extraction.
          </p>
        </div>

        {/* Main content - 4 paragraphs structure */}
        <div className="max-w-4xl mx-auto space-y-8">
          <TechItem 
            icon={FlaskConical}
            title="Our Technology Partner"
            description="Giantec is an Italian laboratory with a multidisciplinary team dedicated to research and the production of high-quality cosmetic extracts. Their expertise bridges advanced biotechnology and precision extraction methods."
            delay={100}
          />
          
          <TechItem 
            icon={Zap}
            title="Advanced Extraction Methods"
            description="Ultrasonic sonication with pharmaceutical‑grade ethanol, followed by short‑path distillation. Shortened extraction times, lower thermal stress, superior preservation of phytocomplexes."
            subDescription="The solvent is fully removed from the finished product, leaving pure botanical actives. Full‑spectrum profiles enable the entourage effect with native terpenes."
            delay={200}
          />

          <TechItem 
            icon={Leaf}
            title="What This Means for You"
            description="Full‑spectrum extracts rich in cannabinoids and native terpenes. Stable, effective formulations with measurable results — designed for real‑world skincare routines."
            delay={300}
          />

          <TechItem 
            icon={Shield}
            title="Italian Supply Chain & Quality Assurance"
            description="Certified biomasses grown without herbicides or pesticides. Made in Italy supply chain from field to formulation. Independent lab testing for purity, potency and safety."
            delay={400}
          />
        </div>

        {/* Bottom infographic hint */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-6 rounded-full bg-white border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#E8ECDD] flex items-center justify-center border-2 border-white z-10">
                <span className="text-[10px] font-bold text-primary">CBD</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#D3E4E6] flex items-center justify-center border-2 border-white z-20">
                <span className="text-[10px] font-bold text-primary">ECS</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#F5E6D3] flex items-center justify-center border-2 border-white z-30">
                <span className="text-[10px] font-bold text-primary">TER</span>
              </div>
            </div>
            <span className="text-foreground/80 text-sm font-medium tracking-wide">
              Full spectrum phytocomplexes
            </span>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

const TechItem = ({ icon: Icon, title, description, subDescription, delay }: { icon: any, title: string, description: string, subDescription?: string, delay: number }) => {
  const { elementRef, isVisible } = useScrollAnimation({ delay });

  return (
    <div 
      ref={elementRef}
      className={cn(
        "relative p-8 rounded-2xl bg-white border border-border/50 transition-all duration-700",
        "hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      )}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-primary">
            <Icon className="w-7 h-7" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3 text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>
          {subDescription && (
            <p className="text-muted-foreground leading-relaxed">
              {subDescription}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
