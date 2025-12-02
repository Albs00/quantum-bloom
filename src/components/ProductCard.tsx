import { Button } from "@/components/ui/button";
import { ShoppingCart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ProductCardProps {
  product: ShopifyProduct;
  index?: number;
  showBenefit?: boolean;
}

export const ProductCard = ({ product, index = 0, showBenefit = true }: ProductCardProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ delay: index * 100 });
  const addItem = useCartStore((state) => state.addItem);
  const image = product.node.images.edges[0]?.node;
  const price = product.node.priceRange.minVariantPrice;
  
  // Extract benefit from description (first sentence or custom logic)
  const getBenefit = () => {
    if (!product.node.description) return "Premium CBD skincare ritual";
    const sentences = product.node.description.split(/[.!?]/);
    return sentences[0] || "Premium CBD skincare ritual";
  };

  const handleAddToCart = (e: React.MouseEvent) => {
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

    toast.success("Added to cart", {
      description: product.node.title,
      position: "top-center",
    });
  };

  return (
    <div
      ref={elementRef}
      className={`group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover-lift scroll-animate scroll-animate-scale ${isVisible ? 'animate-in' : ''}`}
    >
      <Link to={`/product/${product.node.handle}`} className="block">
        {/* Image */}
        <div className="aspect-square bg-muted relative overflow-hidden">
          {image ? (
            <img
              src={image.url}
              alt={image.altText || product.node.title}
              className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Sparkles className="w-16 h-16 text-muted-foreground/30 animate-float" />
            </div>
          )}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-heading text-xl font-semibold mb-2 text-foreground group-hover:text-gradient-gold transition-all">
            {product.node.title}
          </h3>
          
          {showBenefit && (
            <p className="text-muted-foreground text-sm mb-3 line-clamp-1">
              {getBenefit()}
            </p>
          )}
          
          <div className="flex items-center justify-between">
            <div>
              <span className="font-heading text-2xl font-semibold text-secondary">
                {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
              </span>
            </div>
            <Button
              variant="ritual"
              size="sm"
              onClick={handleAddToCart}
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform translate-y-2 group-hover:translate-y-0"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              View
            </Button>
          </div>
        </div>
      </Link>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hover-glow" />
    </div>
  );
};

