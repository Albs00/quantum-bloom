import { Sparkles, Leaf, Atom } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export const PhilosophySection = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ delay: 0 });
  const { elementRef: visualRef, isVisible: visualVisible } = useScrollAnimation({ delay: 200 });
  const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation({ delay: 400 });

  return (
    <section id="filosofia" className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-float-organic" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[80px] animate-float-organic" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div 
            ref={headerRef}
            className={cn(
              "text-center mb-16 transition-all duration-700 transform",
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-primary/10 mb-6">
              <Atom className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary/80 tracking-wide font-medium">Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-heading">
              Where Science Meets <span className="text-primary font-serif italic">Nature</span>
            </h2>
          </div>

          {/* Main manifesto */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual side */}
            <div 
              ref={visualRef}
              className={cn(
                "relative transition-all duration-700 transform",
                visualVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              )}
            >
              <div className="aspect-[4/5] rounded-[2rem] relative overflow-hidden group">
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700 z-10" />
                 <img 
                   src="https://images.unsplash.com/photo-1556228552-523de130b03a?q=80&w=2070&auto=format&fit=crop"
                   alt="Woman in nature"
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                 />
                
                {/* Floating overlay card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg z-20 border border-white/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                       <Leaf className="w-5 h-5 text-primary" />
                       <span className="text-sm font-medium text-primary uppercase tracking-wider">Ethos</span>
                    </div>
                    <Atom className="w-5 h-5 text-primary/60" />
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed font-medium">
                    "True luxury is the time we take to reconnect with ourselves."
                  </p>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div 
              ref={textRef}
              className={cn(
                "space-y-8 transition-all duration-700 transform",
                textVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              )}
            >
              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-foreground italic border-l-2 border-primary/30 pl-6 font-serif">
                "Natural care, backed by science"
              </blockquote>
              
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Galenic tradition meets modern laboratory precision. Our full‑spectrum CBD formulas are crafted to help you pause, breathe and care for your skin with measurable results.
                </p>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  We combine cannabinoids with native terpenes for the entourage effect, delivering comfort and balance. Made in Italy, 100% natural and designed for everyday routines.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                <span className="text-sm text-primary/80 font-medium italic tracking-wider">Green labs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};
