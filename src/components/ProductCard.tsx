import { Button } from "@/components/ui/button";
import { ShoppingCart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { getSpecsForProduct } from "@/lib/productSpecs";

interface ProductCardProps {
  product: ShopifyProduct;
  index?: number;
  showBenefit?: boolean;
}

export const ProductCard = ({ product, index = 0, showBenefit = true }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);
  const image = product.node.images.edges[0]?.node;
  const secondImage = product.node.images.edges[1]?.node;
  const price = product.node.priceRange.minVariantPrice;
  const { elementRef, isVisible } = useScrollAnimation({ delay: index * 100 });
  const specs = getSpecsForProduct(product.node.handle, product.node.title);
  
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
      className={cn(
        "group relative bg-transparent rounded-none overflow-hidden transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <Link to={`/product/${product.node.handle}`} className="block">
        {/* Image Container */}
        <div className="aspect-[3/4] bg-secondary/20 relative overflow-hidden mb-6">
          {image ? (
            <>
              <img
                src={image.url}
                alt={image.altText || product.node.title}
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out",
                  secondImage ? "group-hover:opacity-0" : "group-hover:scale-105"
                )}
                loading="lazy"
              />
              {secondImage && (
                <img
                  src={secondImage.url}
                  alt={secondImage.altText || product.node.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:scale-105"
                  loading="lazy"
                />
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Sparkles className="w-16 h-16 text-muted-foreground/30" />
            </div>
          )}
          
          {specs && (
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
              {specs.content && (
                <span className="px-2 py-1 rounded-full bg-white/90 text-xs font-medium shadow-sm">
                  {specs.content}
                </span>
              )}
              {specs.cpnpReference && (
                <span className="px-2 py-1 rounded-full bg-white/70 text-[11px] font-medium shadow-sm">
                  CPNP {specs.cpnpReference}
                </span>
              )}
            </div>
          )}

          {/* Quick Add Overlay (Mobile/Desktop) */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-white/10 backdrop-blur-sm">
             <Button
              variant="secondary"
              size="lg"
              onClick={handleAddToCart}
              className="w-full bg-white/90 text-black hover:bg-white shadow-sm"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Bag
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="text-center px-2">
          <h3 className="text-xl font-medium mb-2 text-foreground font-heading tracking-wide">
            {product.node.title}
          </h3>
          
          {showBenefit && (
            <p className="text-muted-foreground text-sm mb-3 line-clamp-1 font-light tracking-wide">
              {specs?.tagline || getBenefit()}
            </p>
          )}
          
          <div className="mt-2">
            <span className="text-lg font-medium text-foreground/80">
              {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
