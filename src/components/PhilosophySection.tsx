import { Sparkles, Dna, Leaf, Atom } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const PhilosophySection = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ delay: 0 });
  const { elementRef: visualRef, isVisible: visualVisible } = useScrollAnimation({ delay: 200 });
  const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation({ delay: 400 });

  return (
    <section id="filosofia" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] animate-float animation-delay-200" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 scroll-animate scroll-animate-slide-up ${headerVisible ? 'animate-in' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-6 animate-scale-in">
              <Atom className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground tracking-wide">Philosophy & Manifesto</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              Beauty Beyond the{" "}
              <span className="text-gradient-gold animate-shimmer-text">Skin</span>
            </h2>
          </div>

          {/* Main manifesto */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual side */}
            <div 
              ref={visualRef}
              className={`relative scroll-animate scroll-animate-slide-right ${visualVisible ? 'animate-in' : ''}`}
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-muted to-card border border-border p-8 relative overflow-hidden hover-lift">
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 200 200" className="w-full h-full animate-sacred-rotate">
                    <defs>
                      <linearGradient id="manifGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(158, 64%, 35%)" />
                        <stop offset="100%" stopColor="hsl(40, 70%, 50%)" />
                      </linearGradient>
                    </defs>
                    <circle cx="100" cy="100" r="80" fill="none" stroke="url(#manifGrad)" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="60" fill="none" stroke="url(#manifGrad)" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="40" fill="none" stroke="url(#manifGrad)" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="20" fill="none" stroke="url(#manifGrad)" strokeWidth="0.5" />
                  </svg>
                </div>
                
                {/* Icons grid */}
                <div className="relative h-full flex flex-col justify-center items-center gap-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center animate-float">
                      <Leaf className="w-8 h-8 text-primary" />
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center animate-float animation-delay-200">
                      <Dna className="w-8 h-8 text-secondary" />
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center animate-float animation-delay-400">
                      <Atom className="w-8 h-8 text-accent" />
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center animate-float animation-delay-600">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div 
              ref={textRef}
              className={`space-y-6 scroll-animate scroll-animate-slide-left ${textVisible ? 'animate-in' : ''}`}
            >
              <blockquote className="font-heading text-2xl md:text-3xl font-light leading-relaxed text-foreground italic border-l-2 border-secondary pl-6 animate-blur-in">
                "Harmony between body, mind, and energy field"
              </blockquote>
              
              <p className="text-muted-foreground leading-relaxed">
                Botanical science, natural magic, and advanced research on the endocannabinoid system: 
                this is the engine of our cosmetics. Each formula is a multidimensional journey 
                through plants of ancient tradition and cutting-edge biotechnology.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                We don't just seek to improve the skin: we orchestrate a symphony of biological 
                frequencies, awaken dormant receptors, activate the regenerative potential 
                inscribed in your DNA. Become the conductor of your own regeneration.
              </p>

              <div className="pt-4 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                <span className="text-sm text-muted-foreground font-heading italic">Green Lab</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
