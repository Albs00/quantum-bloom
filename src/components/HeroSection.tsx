import { Button } from "@/components/ui/button";
import { SacredGeometry } from "@/components/SacredGeometry";
import { Sparkles, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 gradient-quantum" />
      <SacredGeometry />
      
      {/* Radial glow with animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-sacred-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px] animate-float animation-delay-200" />
      <div className="absolute bottom-1/3 left-1/4 w-[200px] h-[200px] bg-accent/10 rounded-full blur-[60px] animate-float animation-delay-400" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-8 animate-fade-in hover-lift">
            <Sparkles className="w-4 h-4 text-secondary animate-float" />
            <span className="text-sm text-muted-foreground tracking-wide">CBD Cosmeceutical Skincare</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 animate-fade-in animation-delay-200">
            High-Performance CBD{" "}
            <span className="text-gradient-sacred font-medium animate-shimmer-text inline-block">Skincare Rituals</span>
          </h1>

          <p className="font-heading text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light mb-8 animate-fade-in animation-delay-400">
            From Italian Green Labs
          </p>

          {/* Description */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 animate-fade-in animation-delay-600 leading-relaxed">
            Full-spectrum botanical science meets energetic self-care. Premium CBD-based cosmeceutical rituals 
            crafted for conscious skin seekers across Europe, blending Italian craftsmanship with mindful wellness.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-800">
            <Button variant="sacred" size="xl" asChild>
              <a href="#featured-rituals">
                <Sparkles className="w-5 h-5" />
                Shop Rituals
              </a>
            </Button>
            <Button variant="quantum" size="xl" asChild>
              <a href="#tecnologia">
                Discover the Science
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground animate-fade-in animation-delay-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm">Made in Italy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-sm">EU-Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm">Lab-Tested</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
