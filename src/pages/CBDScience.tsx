import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Leaf, 
  Droplets, 
  Shield, 
  Sparkles, 
  FlaskConical, 
  Heart,
  Brain,
  Zap,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useParallax } from "@/hooks/use-parallax";

const CBDScience = () => {
  const parallaxSlow = useParallax(0.12);
  const parallaxMedium = useParallax(0.2);

  const benefits = [
    {
      icon: Shield,
      title: "Anti-Inflammatory",
      description: "CBD reduces inflammation by interacting with CB2 receptors, helping calm redness, irritation, and reactive skin conditions."
    },
    {
      icon: Droplets,
      title: "Sebum Regulation",
      description: "Studies show CBD helps regulate sebum production, making it beneficial for both oily and acne-prone skin types."
    },
    {
      icon: Sparkles,
      title: "Antioxidant Power",
      description: "CBD is a potent antioxidant that neutralizes free radicals, protecting skin from environmental damage and premature aging."
    },
    {
      icon: Heart,
      title: "Deep Hydration",
      description: "CBD's lipophilic nature allows it to penetrate skin layers, delivering moisture and nutrients where they're needed most."
    },
    {
      icon: Brain,
      title: "Stress Response",
      description: "By calming the skin's stress response, CBD helps reduce cortisol-related skin issues like breakouts and sensitivity."
    },
    {
      icon: Zap,
      title: "Cellular Renewal",
      description: "CBD promotes healthy cell turnover and supports the skin's natural repair processes for a radiant complexion."
    }
  ];

  const sciencePoints = [
    "CBD interacts with the endocannabinoid system (ECS) present in skin cells",
    "The ECS regulates inflammation, pain perception, and cell proliferation",
    "CB1 and CB2 receptors in skin respond to cannabinoid compounds",
    "Full-spectrum CBD contains terpenes that enhance therapeutic effects",
    "Transdermal absorption allows localized benefits without systemic effects"
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />
      
      <main className="pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
          {/* Parallax background elements */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ transform: `translateY(${parallaxSlow}px)` }}
          >
            <div className="absolute top-10 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="text-center mb-12">
              <ScrollReveal animation="scale" delay={100}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <FlaskConical className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary tracking-widest uppercase font-medium">Science & Research</span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={200}>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                  The Science of <span className="text-primary">CBD Skincare</span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={300}>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Discover how cannabidiol works at the cellular level to transform your skin. 
                  Backed by research, refined by nature.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What is CBD */}
        <section className="py-16 md:py-20 relative">
          <div 
            className="absolute left-0 top-1/3 w-80 h-80 bg-primary/3 rounded-full blur-3xl pointer-events-none"
            style={{ transform: `translateY(${parallaxMedium}px)` }}
          />
          
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <ScrollReveal animation="fade-right">
                  <h2 className="font-heading text-3xl md:text-4xl mb-6">What is CBD?</h2>
                </ScrollReveal>
                
                <ScrollReveal animation="fade-up" delay={100}>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Cannabidiol (CBD)</strong> is one of over 100 cannabinoids found in the Cannabis sativa plant. 
                    Unlike THC, CBD is completely non-psychoactive and non-intoxicating, meaning it provides therapeutic benefits 
                    without any mind-altering effects.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal animation="fade-up" delay={150}>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our full-spectrum CBD is extracted from organically grown hemp using supercritical CO2 extraction, 
                    preserving the complete profile of beneficial cannabinoids, terpenes, and flavonoids that work 
                    synergistically—known as the <strong className="text-foreground">"entourage effect"</strong>.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal animation="fade-up" delay={200}>
                  <p className="text-muted-foreground leading-relaxed">
                    All GreenLab products contain 0% THC and are fully compliant with EU cosmetic regulations, 
                    registered in the CPNP, and third-party lab tested for purity and potency.
                  </p>
                </ScrollReveal>
              </div>
              
              <ScrollReveal animation="fade-left" delay={200}>
                <div className="bg-muted/30 rounded-2xl p-8 border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <Leaf className="w-6 h-6 text-primary" />
                    <h3 className="font-heading text-xl">Key Scientific Facts</h3>
                  </div>
                  <ul className="space-y-4">
                    {sciencePoints.map((point, index) => (
                      <ScrollReveal key={index} animation="fade-up" delay={250 + index * 75}>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      </ScrollReveal>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* The Endocannabinoid System */}
        <section className="py-16 md:py-20 bg-muted/20 relative overflow-hidden">
          <div 
            className="absolute right-0 bottom-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"
            style={{ transform: `translateY(${-parallaxSlow}px)` }}
          />
          
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl mb-4">The Endocannabinoid System & Skin</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Your skin has its own endocannabinoid system that plays a crucial role in maintaining skin health and homeostasis.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal animation="fade-up" delay={100}>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-heading text-lg">CB1</span>
                  </div>
                  <h3 className="font-heading text-lg mb-2">CB1 Receptors</h3>
                  <p className="text-sm text-muted-foreground">
                    Found in nerve fibers, hair follicles, and sebaceous glands. CB1 activation helps regulate 
                    pain perception, inflammation, and oil production in the skin.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={200}>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <span className="text-secondary font-heading text-lg">CB2</span>
                  </div>
                  <h3 className="font-heading text-lg mb-2">CB2 Receptors</h3>
                  <p className="text-sm text-muted-foreground">
                    Primarily located in immune cells within the skin. CB2 receptors are key players in 
                    modulating inflammation, allergic responses, and skin barrier function.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={300}>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <span className="text-accent font-heading text-lg">ECS</span>
                  </div>
                  <h3 className="font-heading text-lg mb-2">Skin Homeostasis</h3>
                  <p className="text-sm text-muted-foreground">
                    The ECS maintains skin balance by regulating cell proliferation, differentiation, 
                    survival, and immune responses—essential for healthy, resilient skin.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 md:py-20 relative">
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ transform: `translateY(${parallaxSlow * 0.5}px)` }}
          >
            <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-accent/3 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl mb-4">Proven Benefits of CBD for Skin</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Research continues to reveal the remarkable ways CBD supports skin health at every level.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={index} animation="scale" delay={100 + index * 75}>
                  <div 
                    className="group p-6 rounded-xl bg-muted/30 border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Research & Studies */}
        <section className="py-16 md:py-20 bg-muted/20 relative overflow-hidden">
          <div 
            className="absolute left-0 top-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"
            style={{ transform: `translateY(${-parallaxMedium * 0.5}px)` }}
          />
          
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl mb-4">Research & Clinical Studies</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  The therapeutic potential of CBD for skin is supported by a growing body of scientific research.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="space-y-6">
              <ScrollReveal animation="fade-left" delay={100}>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="font-heading text-lg mb-2">Journal of Clinical Investigation (2014)</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A landmark study demonstrated that CBD acts as a "universal" anti-acne agent by normalizing 
                    sebaceous lipid production and exhibiting anti-inflammatory actions on human sebocytes.
                  </p>
                  <span className="text-xs text-primary">DOI: 10.1172/JCI64628</span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-right" delay={200}>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="font-heading text-lg mb-2">La Clinica Terapeutica (2019)</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Clinical trials showed that CBD-enriched ointment significantly improved skin parameters and 
                    symptoms in patients with psoriasis, eczema, and scarring—without adverse effects.
                  </p>
                  <span className="text-xs text-primary">DOI: 10.7417/CT.2019.2116</span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-left" delay={300}>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="font-heading text-lg mb-2">Molecules Journal (2020)</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Research confirmed CBD's powerful antioxidant properties, showing it can protect skin cells 
                    from oxidative stress and UV-induced damage more effectively than vitamins C and E.
                  </p>
                  <span className="text-xs text-primary">DOI: 10.3390/molecules25194176</span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ transform: `translateY(${parallaxSlow * 0.3}px)` }}
          >
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-secondary/3 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
            <ScrollReveal animation="blur" duration={1000}>
              <h2 className="font-heading text-3xl md:text-4xl mb-6">
                Experience the Science
              </h2>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={150}>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Ready to transform your skincare ritual with the power of CBD? 
                Explore our collection of scientifically formulated products.
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="scale" delay={300}>
              <Button variant="sacred" size="lg" asChild>
                <Link to="/#ritual-lab">
                  Explore Products
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CBDScience;
