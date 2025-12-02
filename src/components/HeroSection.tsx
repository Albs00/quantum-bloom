import { Button } from "@/components/ui/button";
import { SacredGeometry } from "@/components/SacredGeometry";
import { Sparkles, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 gradient-quantum" />
      <SacredGeometry />
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/3 left-1/4 w-[200px] h-[200px] bg-accent/10 rounded-full blur-[60px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground tracking-wide">Cosmeceutica Quantica</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 animate-fade-in animation-delay-200">
            La Pelle è solo il{" "}
            <span className="text-gradient-sacred font-medium">Primo Livello</span>
          </h1>

          <p className="font-heading text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light mb-8 animate-fade-in animation-delay-400">
            Risveglia l'Energia, Rigenera la Tua Essenza
          </p>

          {/* Description */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 animate-fade-in animation-delay-600">
            Dove la scienza botanica incontra la magia naturale. Formule che attivano il sistema endocannabinoide, 
            risvegliano il campo energetico e orchestrano la rigenerazione cellulare.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-800">
            <Button variant="sacred" size="xl" asChild>
              <a href="#ritual-lab">
                <Sparkles className="w-5 h-5" />
                Scopri il Ritual Lab
              </a>
            </Button>
            <Button variant="quantum" size="xl" asChild>
              <a href="#filosofia">
                Inizia il Viaggio Quantico
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground animate-fade-in animation-delay-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm">Filiera Italiana</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-sm">Test Clinici</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm">Biotecnologia Avanzata</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
