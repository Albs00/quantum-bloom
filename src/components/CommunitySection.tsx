import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Sparkles, Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArticleCard } from "./ArticleCard";
import { cn } from "@/lib/utils";

const articles = [
  {
    title: "The Endocannabinoid System: A Practical Guide",
    category: "Science",
    readTime: "8 min",
  },
  {
    title: "Galenic Extraction: From Apothecaries to Modern Labs",
    category: "Technology",
    readTime: "6 min",
  },
  {
    title: "Entourage Effect: Cannabinoids & Terpenes Together",
    category: "Science",
    readTime: "5 min",
  },
];

export const CommunitySection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { elementRef: leftRef, isVisible: leftVisible } = useScrollAnimation({ delay: 0 });
  const { elementRef: rightRef, isVisible: rightVisible } = useScrollAnimation({ delay: 200 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setEmail("");
    toast.success("Welcome to the journey", {
      description: "You will receive the secrets of multidimensional beauty.",
      position: "top-center",
    });
  };

  return (
    <section id="community" className="py-24 md:py-32 relative overflow-hidden bg-secondary/5">
      
      
      {/* Organic background shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 animate-float-organic" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -z-10 animate-float-organic" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Academy content */}
          <div 
            ref={leftRef}
            className={cn(
              "transition-all duration-700 transform",
              leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-primary/10 mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary/80 tracking-wide font-medium">CBD Skincare Academy</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-heading">
              Learn the <span className="text-primary font-serif italic">Science</span>
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Articles and guides on the endocannabinoid system, galenic extraction and practical CBD skincare rituals.
            </p>

            {/* Article previews */}
            <div className="space-y-4">
              {articles.map((article, index) => (
                <ArticleCard
                  key={article.title}
                  title={article.title}
                  category={article.category}
                  readTime={article.readTime}
                  delay={index * 150}
                />
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div 
            ref={rightRef}
            className={cn(
              "relative transition-all duration-700 transform",
              rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <div className="p-8 md:p-12 rounded-3xl bg-white/50 backdrop-blur-sm border border-primary/10 relative overflow-hidden shadow-lg shadow-primary/5">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 text-primary">
                  <Mail className="w-7 h-7" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground font-heading">
                  Insights on Full‑Spectrum CBD Skincare
                </h3>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Subscribe for practical insights on cannabinoids, terpenes, galenic methods and Italian‑made CBD skincare.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-background border-primary/10 focus:border-primary h-12 rounded-xl"
                      required
                    />
                    <Button
                      type="submit"
                      variant="default"
                      size="lg"
                      disabled={loading}
                      className="h-12 px-8 rounded-xl"
                    >
                      {loading ? (
                        <Sparkles className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground/80">
                    We respect your privacy. No spam, just research‑backed content.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
