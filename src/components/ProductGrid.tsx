import { useEffect, useState } from "react";
import { ShopifyProduct, fetchProducts } from "@/lib/shopify";
import { Sparkles, Loader2, Package } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ProductCard } from "./ProductCard";

export const ProductGrid = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ delay: 0 });

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(20);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  if (loading) {
    return (
      <section id="ritual-lab" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm text-muted-foreground tracking-wide">Ritual Lab</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              Your <span className="text-gradient-gold">Rituals</span>
            </h2>
          </div>
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section id="ritual-lab" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm text-muted-foreground tracking-wide">Ritual Lab</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              Your <span className="text-gradient-gold">Rituals</span>
            </h2>
          </div>
          <div className="max-w-md mx-auto text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <Package className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="font-heading text-2xl mb-4 text-foreground">The Rituals Are Coming</h3>
            <p className="text-muted-foreground mb-6">
              We're preparing extraordinary formulations for your quantum journey. 
              Soon you'll be able to explore our transformative rituals.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="ritual-lab" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-animate scroll-animate-slide-up ${headerVisible ? 'animate-in' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-6 animate-scale-in">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground tracking-wide">All Rituals</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light mb-4">
            Complete Your{" "}
            <span className="text-gradient-gold animate-shimmer-text">Ritual Collection</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our full range of CBD skincare rituals, each crafted for specific skin needs and mindful wellness moments.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.node.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
