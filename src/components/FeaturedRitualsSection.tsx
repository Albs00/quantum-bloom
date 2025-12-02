import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShopifyProduct, fetchProducts } from "@/lib/shopify";
import { Sparkles, Loader2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const FeaturedRitualsSection = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ delay: 0 });

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(4); // Only fetch 4 featured products
        setProducts(data.slice(0, 4));
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
      <section id="featured-rituals" className="py-16 md:py-24 relative bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <section id="featured-rituals" className="py-16 md:py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-12 scroll-animate scroll-animate-slide-up ${headerVisible ? 'animate-in' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border mb-6">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground tracking-wide">Featured Rituals</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-light mb-4">
            Best Sellers in{" "}
            <span className="text-gradient-gold">The Netherlands</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Discover our most loved CBD skincare rituals, crafted for European skin
          </p>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <ProductCard key={product.node.id} product={product} index={index} />
          ))}
        </div>

        {/* CTA to shop */}
        <div className="text-center">
          <Button variant="sacred" size="lg" asChild>
            <Link to="#ritual-lab">
              Shop All Rituals
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

