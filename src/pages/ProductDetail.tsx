import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShopifyProduct, storefrontApiRequest } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { ArrowLeft, ShoppingCart, Loader2, Minus, Plus, Check } from "lucide-react";
import { toast } from "sonner";
import { PRODUCT_SPECS, getSpecsForProduct } from "@/lib/productSpecs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PRODUCT_QUERY = `
  query GetProduct($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      handle
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 5) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
      options {
        name
        values
      }
    }
  }
`;

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct["node"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const loadProduct = async () => {
      if (!handle) return;
      
      try {
        const data = await storefrontApiRequest(PRODUCT_QUERY, { handle });
        if (data?.data?.productByHandle) {
          setProduct(data.data.productByHandle);
          setSelectedVariant(data.data.productByHandle.variants.edges[0]?.node.id || null);
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [handle]);

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    const variant = product.variants.edges.find((v) => v.node.id === selectedVariant)?.node;
    if (!variant) return;

    addItem({
      product: { node: product },
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity,
      selectedOptions: variant.selectedOptions,
    });

    toast.success("Added to cart", {
      description: `${quantity}x ${product.title}`,
      position: "top-center",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 md:pt-32 pb-16 md:pb-20">
          <div className="container mx-auto px-3 sm:px-4 flex items-center justify-center py-16 md:py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 md:pt-32 pb-16 md:pb-20">
          <div className="container mx-auto px-3 sm:px-4 text-center py-16 md:py-20">
            <h1 className="font-heading text-3xl mb-4">Product not found</h1>
            <Button variant="quantum" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Shop
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const currentVariant = product.variants.edges.find((v) => v.node.id === selectedVariant)?.node;
  const images = product.images.edges;
  const specs = getSpecsForProduct(product.handle, product.title);

  const highlights = [
    "Made in Italy",
    "Lab-Tested CBD",
    "EU-Compliant",
    "Fast Shipping",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-28 pb-16 md:pb-20">
        <div className="container mx-auto px-3 sm:px-4 max-w-6xl">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-xl bg-muted/30 overflow-hidden">
                {images[selectedImage] ? (
                  <img
                    src={images[selectedImage].node.url}
                    alt={images[selectedImage].node.altText || product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted/50">
                    <span className="text-muted-foreground">No image</span>
                  </div>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-3">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? "border-foreground"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={image.node.url}
                        alt={image.node.altText || ""}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

          {/* Details */}
          <div className="lg:py-4">
            <h1 className="font-heading text-3xl md:text-4xl font-medium mb-4 text-foreground">
              {product.title}
            </h1>

              <p className="text-2xl font-heading text-foreground mb-6">
                {currentVariant?.price.currencyCode}{" "}
                {parseFloat(currentVariant?.price.amount || "0").toFixed(2)}
              </p>

              {/* Description */}
              {product.description && (
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {product.description}
                </p>
              )}

              {!specs?.cpnpReference && !(specs?.inci && specs.inci.length > 0) && (
                <div className="p-4 rounded-xl bg-muted/20 border border-border mb-8">
                  <div className="text-sm text-muted-foreground">
                    Technical specifications will be published soon. Full INCI, CPNP reference and allergens will be listed upon verification.
                  </div>
                </div>
              )}

              {specs && (
                <div className="grid gap-10 mb-10">
                  <div className="grid sm:grid-cols-3 gap-6">
                    {specs.content && (
                      <div className="p-4 rounded-xl bg-muted/30">
                        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Content</div>
                        <div className="text-foreground font-medium">{specs.content}</div>
                      </div>
                    )}
                    {specs.cpnpReference && (
                      <div className="p-4 rounded-xl bg-muted/30">
                        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">CPNP Reference</div>
                        <div className="text-foreground font-medium">{specs.cpnpReference}</div>
                      </div>
                    )}
                    {specs.allergens && specs.allergens.length > 0 && (
                      <div className="p-4 rounded-xl bg-muted/30">
                        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Allergens</div>
                        <div className="text-foreground font-medium">{specs.allergens.join(", ")}</div>
                      </div>
                    )}
                  </div>

                  {specs.inci && specs.inci.length > 0 && (
                    <div>
                      <h2 className="text-xl font-heading mb-3">Ingredients (INCI)</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {specs.inci.join(", ")}
                      </p>
                    </div>
                  )}

                  {(specs.usage || specs.benefits) && (
                    <div className="grid sm:grid-cols-2 gap-8">
                      {specs.usage && (
                        <div>
                          <h3 className="text-lg font-heading mb-3">How to Use</h3>
                          <ul className="space-y-2 text-muted-foreground">
                            {specs.usage.map((step, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {specs.benefits && (
                        <div>
                          <h3 className="text-lg font-heading mb-3">Benefits</h3>
                          <ul className="space-y-2 text-muted-foreground">
                            {specs.benefits.map((b, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Variants */}
              {product.options.length > 0 && product.options[0].values.length > 1 && (
                <div className="mb-6">
                  <label className="block text-sm text-muted-foreground mb-3">
                    {product.options[0].name}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.edges.map((variant) => (
                      <button
                        key={variant.node.id}
                        onClick={() => setSelectedVariant(variant.node.id)}
                        disabled={!variant.node.availableForSale}
                        className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                          selectedVariant === variant.node.id
                            ? "border-foreground bg-foreground text-background"
                            : "border-border hover:border-foreground"
                        } ${!variant.node.availableForSale && "opacity-40 cursor-not-allowed line-through"}`}
                      >
                        {variant.node.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & Add to cart */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted/50 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-muted/50 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <Button
                  variant="sacred"
                  size="lg"
                  className="flex-1"
                  onClick={handleAddToCart}
                  disabled={!currentVariant?.availableForSale}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {currentVariant?.availableForSale ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>

              {/* Highlights */}
              <div className="pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 lg:mt-24">
            <h2 className="font-heading text-2xl md:text-3xl mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-border">
                <AccordionTrigger className="text-left font-heading text-base hover:no-underline">
                  What is CBD and how does it benefit the skin?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  CBD (Cannabidiol) is a natural compound derived from hemp plants. It interacts with the skin's endocannabinoid system to help regulate inflammation, sebum production, and cellular regeneration. CBD is known for its antioxidant and calming properties, making it ideal for sensitive, irritated, or aging skin.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-border">
                <AccordionTrigger className="text-left font-heading text-base hover:no-underline">
                  Will CBD skincare get me high?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  No. CBD is non-psychoactive and contains no THC (the compound responsible for the "high" effect). Our products are EU-compliant and lab-tested to ensure they contain 0% THC while delivering the full therapeutic benefits of CBD.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-border">
                <AccordionTrigger className="text-left font-heading text-base hover:no-underline">
                  Is CBD skincare legal?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes. All GreenLab products are fully legal and compliant with EU cosmetic regulations. Our formulations are registered in the CPNP (Cosmetic Products Notification Portal) and undergo rigorous quality testing.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-border">
                <AccordionTrigger className="text-left font-heading text-base hover:no-underline">
                  How often should I use CBD skincare products?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  For optimal results, we recommend incorporating CBD products into your daily skincare ritual. Most products can be used morning and evening. Start with once daily to see how your skin responds, then adjust according to your needs.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border-border">
                <AccordionTrigger className="text-left font-heading text-base hover:no-underline">
                  Are your products suitable for sensitive skin?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes. CBD is naturally soothing and anti-inflammatory, making it particularly beneficial for sensitive or reactive skin types. All our formulations are dermatologically tested, free from parabens, and crafted with gentle, botanical ingredients.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border-border">
                <AccordionTrigger className="text-left font-heading text-base hover:no-underline">
                  What makes GreenLab different from other CBD brands?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  GreenLab combines full-spectrum CBD with advanced Giantec biotechnologies, creating synergistic formulas that enhance absorption and efficacy. Our products are Made in Italy, lab-tested, and formulated with a holistic approach that considers both the physical and energetic aspects of skincare.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
