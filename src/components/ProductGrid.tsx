import { useEffect, useState } from "react";
import { ShopifyProduct, fetchProducts } from "@/lib/shopify";
import { Sparkles, Loader2, Package } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ProductCard } from "./ProductCard";
import { cn } from "@/lib/utils";

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

  const LoadingState = () => (
    <section id="ritual-lab" className="py-24 md:py-32 relative bg-secondary min-h-[60vh]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary font-serif italic">Skincare</span>
          </h2>
        </div>
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-10 h-10 animate-spin text-primary" />
        </div>
      </div>
    </section>
  );

  if (loading) return <LoadingState />;

  if (products.length === 0) {
    return (
      <section id="ritual-lab" className="py-24 md:py-32 relative bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary font-serif italic">Skincare</span>
            </h2>
          </div>
          <div className="max-w-md mx-auto text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white flex items-center justify-center shadow-sm">
              <Package className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Skincare Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              We are preparing full‑spectrum CBD formulations, made in Italy and 100% natural. 
              You will soon be able to explore the complete collection.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="ritual-lab" className="py-24 md:py-32 relative overflow-hidden bg-secondary">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-3xl" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-primary/10 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary/80 tracking-wide font-medium">Shop Skincare</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Shop the <span className="text-primary font-serif italic">Collection</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore full‑spectrum CBD skincare — advanced extraction, entourage effect, made in Italy, 100% natural.
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
