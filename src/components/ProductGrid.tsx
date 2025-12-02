import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShopifyProduct, fetchProducts } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { Sparkles, ShoppingCart, Loader2, Package } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

export const ProductGrid = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((state) => state.addItem);

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

  const handleAddToCart = (product: ShopifyProduct, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;

    addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions,
    });

    toast.success("Aggiunto al rituale", {
      description: product.node.title,
      position: "top-center",
    });
  };

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
              I Tuoi <span className="text-gradient-gold">Rituali</span>
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
              I Tuoi <span className="text-gradient-gold">Rituali</span>
            </h2>
          </div>
          <div className="max-w-md mx-auto text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <Package className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="font-heading text-2xl mb-4 text-foreground">I Rituali Stanno Arrivando</h3>
            <p className="text-muted-foreground mb-6">
              Stiamo preparando formule straordinarie per il tuo viaggio quantico. 
              Presto potrai esplorare i nostri rituali trasformativi.
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-6">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground tracking-wide">Ritual Lab</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light mb-4">
            I Tuoi <span className="text-gradient-gold">Rituali</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ogni formula è un viaggio multidimensionale: benefici energetici, chimici, botanici e sensoriali 
            in perfetta sinfonia.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const image = product.node.images.edges[0]?.node;
            const price = product.node.priceRange.minVariantPrice;

            return (
              <Link
                key={product.node.id}
                to={`/product/${product.node.handle}`}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500"
              >
                {/* Image */}
                <div className="aspect-square bg-muted relative overflow-hidden">
                  {image ? (
                    <img
                      src={image.url}
                      alt={image.altText || product.node.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Sparkles className="w-16 h-16 text-muted-foreground/30" />
                    </div>
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-2 text-foreground group-hover:text-gradient-gold transition-all">
                    {product.node.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {product.node.description || "Rituale quantico per la rigenerazione multidimensionale."}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl font-semibold text-secondary">
                      {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                    </span>
                    <Button
                      variant="ritual"
                      size="sm"
                      onClick={(e) => handleAddToCart(product, e)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
                      Aggiungi
                    </Button>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: 'inset 0 0 30px hsl(158, 64%, 35%, 0.1)' }} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
