import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Sparkles, Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const articles = [
  {
    title: "The Endocannabinoid System: The Key to Balance",
    category: "Science",
    readTime: "8 min",
  },
  {
    title: "Skincare Rituals: Beyond the Surface",
    category: "Ritual",
    readTime: "5 min",
  },
  {
    title: "Sacred Geometry and Cellular Frequencies",
    category: "Energy",
    readTime: "6 min",
  },
];

export const CommunitySection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

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
    <section id="community" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-quantum" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Academy content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-6">
              <BookOpen className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground tracking-wide">Academy</span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light mb-6">
              The Scientific{" "}
              <span className="text-gradient-sacred">Magic</span>
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Explore the boundary between science and mystery. Webinars, articles, and guides that reveal 
              the secrets of cannabinoids, cellular energy, and ritual skincare.
            </p>

            {/* Article previews */}
            <div className="space-y-4">
              {articles.map((article) => (
                <div
                  key={article.title}
                  className="group p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs text-secondary uppercase tracking-wider">
                        {article.category}
                      </span>
                      <h4 className="font-heading text-lg font-medium mt-1 text-foreground group-hover:text-gradient-gold transition-all">
                        {article.title}
                      </h4>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {article.readTime}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="relative">
            <div className="p-8 md:p-12 rounded-3xl bg-card border border-border relative overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/20 to-transparent rounded-tr-full" />

              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-accent" />
                </div>

                <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                  The Secrets of Multidimensional Beauty
                </h3>

                <p className="text-muted-foreground mb-8">
                  Subscribe to receive exclusive knowledge on energy, cannabinoids, 
                  cosmetic rituals, and the latest discoveries from our research.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-muted/50 border-border focus:border-primary"
                      required
                    />
                    <Button
                      type="submit"
                      variant="gold"
                      size="lg"
                      disabled={loading}
                    >
                      {loading ? (
                        <Sparkles className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          Begin
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    We respect your privacy. No spam, only sacred knowledge.
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
