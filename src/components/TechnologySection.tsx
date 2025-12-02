import { Zap, FlaskConical, Leaf, Shield } from "lucide-react";

export const TechnologySection = () => {
  return (
    <section id="tecnologia" className="py-24 md:py-32 relative overflow-hidden bg-muted/30">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent animate-shimmer animation-delay-400" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-shimmer animation-delay-800" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border mb-6">
            <Zap className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground tracking-wide">Technology & Science</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light mb-4">
            The Science Behind{" "}
            <span className="text-gradient-sacred">Quality</span>
          </h2>
        </div>

        {/* Main content - 4 paragraphs structure */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Paragraph 1: Who is Giantec */}
          <div className="relative p-8 rounded-2xl bg-card border border-border">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FlaskConical className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">
                  Our Technology Partner
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Giantec is an Italian laboratory with a multidisciplinary team dedicated to research and the production of high-quality cosmetic extracts. Their expertise bridges advanced biotechnology and precision extraction methods.
                </p>
              </div>
            </div>
          </div>

          {/* Paragraph 2: Extraction methods */}
          <div className="relative p-8 rounded-2xl bg-card border border-border">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-secondary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">
                  Advanced Extraction Methods
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our formulations use ultrasonic extraction (sonification) with pharmaceutical-grade ethanol, followed by short path distillation. These methods preserve phytocomplexes better than traditional techniques.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Lower thermal stress maintains molecular integrity. Higher yield ensures you receive extracts rich in active compounds. The pharmaceutical-grade ethanol is completely removed from the finished product, leaving only pure botanical actives.
                </p>
              </div>
            </div>
          </div>

          {/* Paragraph 3: Benefits for the user */}
          <div className="relative p-8 rounded-2xl bg-card border border-border">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-accent" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">
                  What This Means for You
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full spectrum extracts rich in cannabinoids and terpenes. Stable, effective formulations backed by rigorous quality controls. Each product delivers the complete botanical profile nature intended, optimized for your skincare ritual.
                </p>
              </div>
            </div>
          </div>

          {/* Paragraph 4: Supply chain and quality */}
          <div className="relative p-8 rounded-2xl bg-card border border-border">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">
                  Italian Supply Chain & Quality Assurance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Certified biomasses cultivated without herbicides and pesticides in Italy. Made in Italy supply chain from field to formulation. All extracts undergo external laboratory testing to ensure purity, potency, and safety standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom infographic hint */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-full bg-card border border-border">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-xs text-primary">CBD</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-xs text-secondary">ECS</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-xs text-accent">TER</span>
              </div>
            </div>
            <span className="text-muted-foreground text-sm">
              Full spectrum phytocomplexes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
