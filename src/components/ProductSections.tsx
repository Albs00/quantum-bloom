import { Leaf, FlaskConical, Shield, Clock, Droplet } from "lucide-react";

interface ProductSectionsProps {
  product: {
    title: string;
    description: string;
  };
}

export const ProductSections = ({ product }: ProductSectionsProps) => {
  // Mock data - in real app, this would come from product metadata/metafields
  const skinBenefits = [
    "Deep hydration and barrier support",
    "Soothing comfort for sensitive skin",
    "Visible glow and smoothness",
    "Antioxidant protection",
  ];

  const ingredients = [
    { name: "Full-Spectrum CBD", benefit: "Supports skin's natural balance and comfort" },
    { name: "Italian Botanicals", benefit: "Rich in antioxidants and hydrating compounds" },
    { name: "Ceramides", benefit: "Strengthens skin barrier function" },
  ];

  const usageInfo = {
    skinType: "All skin types, especially sensitive",
    timeOfDay: "Morning and evening ritual",
    step: "After cleansing, before moisturizer",
    instructions: "Apply 2-3 drops to face and neck. Gently massage in upward motions. Follow with your preferred moisturizer.",
  };

  return (
    <div className="space-y-16 mt-16">
      {/* What you'll feel on your skin */}
      <section>
        <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6 text-foreground">
          What You'll Feel on Your Skin
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {skinBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Droplet className="w-4 h-4 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key ingredients & CBD level */}
      <section>
        <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6 text-foreground">
          Key Ingredients & CBD Level
        </h2>
        <div className="space-y-4">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-semibold mb-1 text-foreground">
                    {ingredient.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{ingredient.benefit}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-4">
              <FlaskConical className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-heading text-lg font-semibold mb-1 text-foreground">
                  Full-Spectrum CBD Complex
                </h3>
                <p className="text-muted-foreground text-sm">
                  Lab-tested for purity and potency. Compliant with EU cosmetic regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For who & how to use */}
      <section>
        <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6 text-foreground">
          For Who & How to Use
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-accent" />
              <h3 className="font-heading text-lg font-semibold text-foreground">Skin Type</h3>
            </div>
            <p className="text-muted-foreground text-sm">{usageInfo.skinType}</p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-accent" />
              <h3 className="font-heading text-lg font-semibold text-foreground">Time of Day</h3>
            </div>
            <p className="text-muted-foreground text-sm">{usageInfo.timeOfDay}</p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border md:col-span-2">
            <h3 className="font-heading text-lg font-semibold mb-3 text-foreground">Ritual Instructions</h3>
            <p className="text-muted-foreground text-sm mb-2">
              <strong>Step:</strong> {usageInfo.step}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">{usageInfo.instructions}</p>
          </div>
        </div>
      </section>

      {/* Sustainability & lab testing */}
      <section>
        <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6 text-foreground">
          Sustainability & Lab Testing
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-card border border-border">
            <Shield className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">Made in Italy</h3>
            <p className="text-muted-foreground text-sm">
              Crafted with Italian expertise and sourced from certified Italian biomasses.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <Shield className="w-8 h-8 text-secondary mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">Lab-Tested</h3>
            <p className="text-muted-foreground text-sm">
              Every batch undergoes external laboratory testing for purity, potency, and safety.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <Shield className="w-8 h-8 text-accent mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">EU-Compliant</h3>
            <p className="text-muted-foreground text-sm">
              Fully compliant with EU cosmetic regulations. Clean, ethical, and transparent.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

