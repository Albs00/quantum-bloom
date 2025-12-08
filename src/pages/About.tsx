import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Heart, Sparkles, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useParallax } from "@/hooks/use-parallax";

const About = () => {
  const parallaxSlow = useParallax(0.15);
  const parallaxMedium = useParallax(0.25);

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
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
            <ScrollReveal animation="scale" delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary tracking-widest uppercase font-medium">Our Story</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={200}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                A Promise Written <span className="text-primary">in Resin</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={300}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed italic">
                "Before CBD became a trend, there were hands that cultivated it as a secret—
                not for profit, but for the quiet belief that cannabis could heal."
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* The Story */}
        <section className="py-16 md:py-20 relative">
          <div 
            className="absolute right-0 top-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none"
            style={{ transform: `translateY(${parallaxMedium}px)` }}
          />
          
          <div className="container mx-auto px-4 max-w-3xl relative z-10">
            <div className="prose prose-lg prose-invert mx-auto">
              <div className="space-y-8 text-muted-foreground leading-relaxed">
                <ScrollReveal animation="fade-up">
                  <p className="text-lg">
                    Once upon a time, in the early 2000s, a group of Italian cultivators refused to settle for the ordinary. 
                    They were guided not by the ambition of profit, but by the curiosity of the flower: they wanted to understand 
                    what cannabis concealed beyond the effect, beyond the smoke, beyond the taboo.
                  </p>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={100}>
                  <p>
                    Back then, the world spoke almost exclusively of THC: its power, its allure, its ability to make the mind soar. 
                    But these cultivators, with hands full of resin and souls attuned to subtlety, had noticed something else. 
                    A more discreet molecule, silent, that didn't intoxicate but <em>supported</em>, that didn't shout but <em>listened</em>. 
                    It was <strong className="text-foreground">CBD</strong>—first isolated decades before, yet still relegated to the margins of science and popular culture.
                  </p>
                </ScrollReveal>

                <ScrollReveal animation="scale" delay={150}>
                  <div className="my-12 p-8 bg-muted/30 rounded-2xl border border-border">
                    <blockquote className="text-xl font-heading text-foreground italic border-l-4 border-primary pl-6">
                      "While others chased euphoria, they sought equilibrium. It was an almost poetic act of love: 
                      believing that cannabis could be <em>care</em>, not just escape."
                    </blockquote>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-up">
                  <p>
                    They began to crossbreed, observe, inhale, select—not to obtain the most powerful plant, 
                    but the most <em>harmonious</em> one. And so, long before CBD became a trend on organic shelves 
                    or wellness boutiques, they cultivated it with the same delicacy one reserves for a family secret.
                  </p>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={100}>
                  <p>
                    Varieties were born that told stories: cultivars with the generosity and scent of rain-soaked earth, 
                    others elegant like a summer twilight, some regal and complex. But alongside these icons, silently, 
                    hybrids rich in cannabidiol germinated—creations designed for those who sought calm, not ecstasy. 
                    They were among the first to offer seeds with balanced ratios of THC and CBD, and then CBD-dominant ones, 
                    paving the way for a revolutionary idea: that cannabis could enter daily life not as rebellion, 
                    but as a <strong className="text-foreground">gentle companion</strong>.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline / Journey */}
        <section className="py-16 md:py-20 bg-muted/20 relative overflow-hidden">
          <div 
            className="absolute left-0 bottom-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl pointer-events-none"
            style={{ transform: `translateY(${-parallaxSlow}px)` }}
          />
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <ScrollReveal animation="fade-up">
              <h2 className="font-heading text-3xl md:text-4xl text-center mb-12">The Journey Continues</h2>
            </ScrollReveal>
            
            <div className="space-y-8">
              <ScrollReveal animation="fade-right" delay={100}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-primary" />
                    </div>
                    <div className="w-px flex-1 bg-border mt-4" />
                  </div>
                  <div className="pb-8">
                    <h3 className="font-heading text-xl mb-2">The Pioneers</h3>
                    <p className="text-muted-foreground">
                      For years, these pioneers were more than seed breeders: they were a trusted voice, 
                      a familiar presence in forums, grow rooms, and hemp festivals. A name that tasted of earth, 
                      of patient science, of respect for the plant.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-right" delay={200}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="w-px flex-1 bg-border mt-4" />
                  </div>
                  <div className="pb-8">
                    <h3 className="font-heading text-xl mb-2">A Torch Passed</h3>
                    <p className="text-muted-foreground">
                      The world changed rapidly. Laws tightened, the market filled with newer, louder names. 
                      Yet the true laboratory was never a building—it was the soil itself. And there, still today, 
                      those seeds grow: in Mediterranean sun-drenched greenhouses, in pots on distant city balconies, 
                      in secret gardens where someone remembers.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-right" delay={300}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-2">GreenLab Is Born</h3>
                    <p className="text-muted-foreground">
                      GreenLab carries forward this legacy—not as imitators, but as inheritors of a philosophy. 
                      We believe that CBD skincare is not merely chemistry, but alchemy. Every formula we create 
                      honors those who first believed, too early for the market but at the right moment for the earth, 
                      that CBD deserved to be cultivated—not as a product, but as a <em>promise</em>.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-20 relative">
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ transform: `translateY(${parallaxSlow * 0.5}px)` }}
          >
            <div className="absolute top-1/3 right-20 w-40 h-40 bg-accent/5 rounded-full blur-2xl" />
          </div>
          
          <div className="container mx-auto px-4 max-w-3xl relative z-10">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl mb-4">Our Mission</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  To bring the transformative power of CBD to skincare with the same reverence 
                  those first cultivators brought to the plant.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              <ScrollReveal animation="fade-up" delay={100}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg mb-2">Botanical Integrity</h3>
                  <p className="text-sm text-muted-foreground">
                    Full-spectrum CBD from organic Italian hemp, extracted with care and precision.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-heading text-lg mb-2">Scientific Rigor</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced biotechnologies meet ancestral botanical wisdom in every formulation.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={300}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg mb-2">Holistic Care</h3>
                  <p className="text-sm text-muted-foreground">
                    We create rituals, not routines—experiences that nourish body, mind, and spirit.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Closing Quote */}
        <section className="py-16 md:py-24 bg-muted/20 relative overflow-hidden">
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ transform: `translateY(${-parallaxMedium * 0.3}px)` }}
          >
            <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-secondary/3 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
            <ScrollReveal animation="blur" duration={1000}>
              <blockquote className="font-heading text-2xl md:text-3xl text-foreground italic mb-8 leading-relaxed">
                "In every leaf that trembles in the wind, in every resin that perfumes of serenity, 
                lives their most courageous gesture: having believed that CBD deserved to be cultivated—
                not as product, but as promise."
              </blockquote>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={200}>
              <Button variant="sacred" size="lg" asChild>
                <Link to="/#ritual-lab">
                  Begin Your Ritual
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

export default About;
