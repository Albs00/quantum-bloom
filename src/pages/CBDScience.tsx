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
  CheckCircle2,
  ExternalLink,
  BookOpen
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useParallax } from "@/hooks/use-parallax";

// Scientific references database
const scientificReferences = {
  who2018: {
    id: 1,
    title: "CANNABIDIOL (CBD) Critical Review Report",
    source: "World Health Organization (WHO)",
    year: 2018,
    url: "https://cdn.who.int/media/docs/default-source/controlled-substances/whocbdreportmay2018-2.pdf",
    authority: "Global health authority"
  },
  cosmDerm2024: {
    id: 2,
    title: "The Potential Role of Cannabidiol in Cosmetic Dermatology",
    source: "PubMed Central",
    year: 2024,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11511700/",
    citations: 315
  },
  co2Extraction2020: {
    id: 3,
    title: "Utilisation of Design of Experiments Approach to Optimise CBD Extraction",
    source: "Nature Scientific Reports",
    year: 2020,
    doi: "10.1038/s41598-020-66119-1",
    url: "https://www.nature.com/articles/s41598-020-66119-1",
    citations: 75
  },
  terpenesCo2022: {
    id: 4,
    title: "Terpenes and Cannabinoids in Supercritical CO2 Extracts",
    source: "PubMed Central (PMC9502342)",
    year: 2022,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9502342/",
    citations: 57
  },
  sccs2025: {
    id: 5,
    title: "SCCS Scientific Opinion on Cannabidiol (CBD)",
    source: "Scientific Committee on Consumer Safety (EU)",
    year: 2025,
    url: "https://health.ec.europa.eu/publications/sccs-scientific-opinion-cannabidiol-cbd-casec-no-13956-29-1-689-176-3-used-cosmetic-pro",
    authority: "Official EU regulatory body"
  },
  ecsSkin2009: {
    id: 6,
    title: "The endocannabinoid system of the skin in health and disease",
    source: "PubMed Central (NIH)",
    year: 2009,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2757311/",
    authority: "Foundational ECS review"
  },
  cutannabinoid2019: {
    id: 7,
    title: "Cannabinoid Signaling in the Skin",
    source: "PubMed Central (PMC6429381)",
    year: 2019,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6429381/",
    citations: 300
  },
  ecsApproach2018: {
    id: 8,
    title: "The endocannabinoid system of the skin. A potential approach",
    source: "PubMed",
    year: 2018,
    url: "https://pubmed.ncbi.nlm.nih.gov/30138623/"
  },
  topicalCbd2022: {
    id: 9,
    title: "Topical cannabidiol (CBD) in skin pathology",
    source: "PubMed Central (PMC9210160)",
    year: 2022,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9210160/"
  },
  cb2Acne2022: {
    id: 10,
    title: "Cannabidiol Inhibits Inflammation Induced by Cutibacterium acnes via CB2 Receptor",
    source: "PubMed Central (PMC9379120)",
    year: 2022,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9379120/",
    citations: 35
  },
  cb2Inflammation2016: {
    id: 11,
    title: "The CB2 receptor and its role as a regulator of inflammation",
    source: "British Journal of Pharmacology",
    year: 2016,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5075023/",
    citations: 724
  },
  entourage2025: {
    id: 12,
    title: "Terpene Synergy: Exploring the Latest Entourage Effect Research",
    source: "ACS Laboratory",
    year: 2025,
    url: "https://www.acslab.com/terpenes/terpene-synergy-entourage-effect-research"
  },
  entourageReview2024: {
    id: 13,
    title: "The Entourage Effect in Cannabis Medicinal Products",
    source: "PubMed Central (PMC11870048)",
    year: 2024,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11870048/"
  },
  transdermal2022: {
    id: 14,
    title: "Examining the Systemic Bioavailability of Cannabidiol",
    source: "PubMed Central (PMC9859876)",
    year: 2022,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9859876/"
  },
  cb2Therapeutic2024: {
    id: 15,
    title: "Therapeutic potential of agents targeting cannabinoid type 2",
    source: "Pharmacology Reports",
    year: 2024,
    url: "https://bpspubs.onlinelibrary.wiley.com/doi/10.1002/prp2.1219",
    citations: 6
  },
  cbInflammatory2024: {
    id: 16,
    title: "The Impact of the CB2 Cannabinoid Receptor in Inflammatory...",
    source: "PubMed Central (PMC11279428)",
    year: 2024,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11279428/"
  }
};

const CBDScience = () => {
  const parallaxSlow = useParallax(0.12);
  const parallaxMedium = useParallax(0.2);

  const benefits = [
    {
      icon: Shield,
      title: "Anti-Inflammatory",
      description: "CBD reduces inflammation by interacting with CB2 receptors, inactivating MAPK and NF-κB signaling pathways, helping calm redness, irritation, and reactive skin conditions.",
      refs: [10, 11]
    },
    {
      icon: Droplets,
      title: "Sebum Regulation",
      description: "Studies show CBD helps regulate sebum production through CB1 receptor activation, making it beneficial for both oily and acne-prone skin types.",
      refs: [9, 16]
    },
    {
      icon: Sparkles,
      title: "Antioxidant Power",
      description: "CBD is a potent antioxidant that neutralizes free radicals, protecting skin from environmental damage and premature aging.",
      refs: [2]
    },
    {
      icon: Heart,
      title: "Deep Hydration",
      description: "CBD's lipophilic nature allows transdermal penetration, delivering moisture and nutrients to deeper skin layers for localized benefits.",
      refs: [14]
    },
    {
      icon: Brain,
      title: "ECS Regulation",
      description: "By interacting with the cutaneous endocannabinoid system, CBD supports skin homeostasis and the natural stress response.",
      refs: [6, 7]
    },
    {
      icon: Zap,
      title: "Cellular Renewal",
      description: "The ECS regulates cell proliferation, differentiation, and survival—CBD promotes healthy cell turnover for a radiant complexion.",
      refs: [6, 8]
    }
  ];

  const sciencePoints = [
    { text: "CBD interacts with the endocannabinoid system (ECS) present in skin cells", refs: [6, 7] },
    { text: "The ECS regulates inflammation, pain perception, and cell proliferation", refs: [8] },
    { text: "CB1 and CB2 receptors in skin respond to cannabinoid compounds", refs: [9, 11] },
    { text: "Full-spectrum CBD contains terpenes that enhance therapeutic effects (entourage effect)", refs: [12, 13] },
    { text: "Transdermal absorption allows localized benefits without systemic effects", refs: [14] }
  ];

  const CitationLink = ({ refIds }: { refIds: number[] }) => (
    <sup className="text-primary text-xs ml-0.5">
      [{refIds.join(", ")}]
    </sup>
  );

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
                  <span className="text-sm text-primary tracking-widest uppercase font-medium">Peer-Reviewed Research</span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={200}>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                  The Science of <span className="text-primary">CBD Skincare</span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={300}>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Every claim backed by peer-reviewed research. Discover how cannabidiol works 
                  at the cellular level, validated by WHO, EU regulatory bodies, and leading scientific journals.
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
                    <CitationLink refIds={[1]} /> Unlike THC, CBD is completely non-psychoactive and non-intoxicating, 
                    meaning it provides therapeutic benefits without any mind-altering effects.
                    <CitationLink refIds={[1, 2]} />
                  </p>
                </ScrollReveal>
                
                <ScrollReveal animation="fade-up" delay={150}>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our full-spectrum CBD is extracted from organically grown hemp using <strong className="text-foreground">supercritical CO2 extraction</strong>
                    <CitationLink refIds={[3]} />, preserving the complete profile of beneficial cannabinoids, terpenes (α-pinene, β-myrcene, limonene), 
                    and flavonoids that work synergistically—known as the <strong className="text-foreground">"entourage effect"</strong>.
                    <CitationLink refIds={[4, 12, 13]} />
                  </p>
                </ScrollReveal>
                
                <ScrollReveal animation="fade-up" delay={200}>
                  <p className="text-muted-foreground leading-relaxed">
                    All GreenLab products contain 0% THC and are fully compliant with EU cosmetic regulations (SCCS Opinion 2025: CBD safe up to 0.19% in dermal cosmetics), 
                    registered in the CPNP, and third-party lab tested for purity and potency.
                    <CitationLink refIds={[5]} />
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
                          <span className="text-muted-foreground">
                            {point.text}
                            <CitationLink refIds={point.refs} />
                          </span>
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
                  Your skin has its own endocannabinoid system—the "C(ut)annabinoid system"—that plays a crucial role 
                  in maintaining skin health and homeostasis.<CitationLink refIds={[7]} />
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
                    Found in nerve fibers, hair follicles, and sebaceous glands.<CitationLink refIds={[9]} /> CB1 activation 
                    helps regulate pain perception, inflammation, and oil production—accelerating epidermal barrier recovery.
                    <CitationLink refIds={[9, 16]} />
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
                    Primarily located in immune cells within the skin.<CitationLink refIds={[11]} /> CB2 receptors are key players in 
                    modulating inflammation, allergic responses, and skin barrier function. CBD promotes CB2 expression in keratinocytes.
                    <CitationLink refIds={[10, 15]} />
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
                    survival, and immune responses.<CitationLink refIds={[6]} /> Disregulation is associated with dermatitis, psoriasis, and scleroderma.
                    <CitationLink refIds={[8]} />
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
                  Each benefit validated by peer-reviewed research from leading scientific institutions.
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
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                      <CitationLink refIds={benefit.refs} />
                    </p>
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
                <h2 className="font-heading text-3xl md:text-4xl mb-4">Key Research & Regulatory Sources</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our scientific claims are backed by authoritative sources including WHO, EU regulatory bodies, and peer-reviewed journals.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="space-y-6">
              <ScrollReveal animation="fade-left" delay={100}>
                <a 
                  href={scientificReferences.who2018.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-background rounded-xl p-6 border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">[1]</span>
                        <span className="text-xs text-muted-foreground">Global Health Authority • {scientificReferences.who2018.year}</span>
                      </div>
                      <h3 className="font-heading text-lg mb-2 group-hover:text-primary transition-colors">
                        {scientificReferences.who2018.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Official WHO documentation confirming CBD as a non-psychoactive phytocannabinoid among 100+ identified in cannabis.
                        Maximum global credibility for safety and therapeutic potential.
                      </p>
                      <span className="text-xs text-primary">{scientificReferences.who2018.source}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 mt-1" />
                  </div>
                </a>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-right" delay={200}>
                <a 
                  href={scientificReferences.sccs2025.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-background rounded-xl p-6 border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary font-medium">[5]</span>
                        <span className="text-xs text-muted-foreground">EU Official Body • November 2025</span>
                      </div>
                      <h3 className="font-heading text-lg mb-2 group-hover:text-primary transition-colors">
                        {scientificReferences.sccs2025.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Latest EU regulatory opinion confirming CBD safe up to 0.19% in dermal cosmetics. 
                        THC maximum 0.00025% considered safe. Official EU cosmetic safety compliance.
                      </p>
                      <span className="text-xs text-primary">{scientificReferences.sccs2025.source}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 mt-1" />
                  </div>
                </a>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-left" delay={300}>
                <a 
                  href={scientificReferences.ecsSkin2009.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-background rounded-xl p-6 border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent font-medium">[6]</span>
                        <span className="text-xs text-muted-foreground">Foundational Review • {scientificReferences.ecsSkin2009.year}</span>
                      </div>
                      <h3 className="font-heading text-lg mb-2 group-hover:text-primary transition-colors">
                        {scientificReferences.ecsSkin2009.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Landmark NIH publication establishing that ECS controls skin cell proliferation, differentiation, and survival.
                        Scientific foundation for CBD skincare mechanisms.
                      </p>
                      <span className="text-xs text-primary">{scientificReferences.ecsSkin2009.source}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 mt-1" />
                  </div>
                </a>
              </ScrollReveal>

              <ScrollReveal animation="fade-right" delay={400}>
                <a 
                  href={scientificReferences.cb2Inflammation2016.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-background rounded-xl p-6 border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">[11]</span>
                        <span className="text-xs text-muted-foreground">724 Citations • {scientificReferences.cb2Inflammation2016.year}</span>
                      </div>
                      <h3 className="font-heading text-lg mb-2 group-hover:text-primary transition-colors">
                        {scientificReferences.cb2Inflammation2016.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Gold standard research on CB2 receptors and inflammation modulation. 
                        Most-cited paper validating CB2's role in immune cell function and inflammatory diseases.
                      </p>
                      <span className="text-xs text-primary">{scientificReferences.cb2Inflammation2016.source}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 mt-1" />
                  </div>
                </a>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={500}>
                <a 
                  href={scientificReferences.co2Extraction2020.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-background rounded-xl p-6 border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary font-medium">[3]</span>
                        <span className="text-xs text-muted-foreground">Nature Scientific Reports • {scientificReferences.co2Extraction2020.year}</span>
                      </div>
                      <h3 className="font-heading text-lg mb-2 group-hover:text-primary transition-colors">
                        {scientificReferences.co2Extraction2020.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Technical validation of supercritical CO2 extraction preserving CBD and phytocomplex profile.
                        Flow rate 150 g/min, 320 bar pressure for optimal yield without solvents.
                      </p>
                      <span className="text-xs text-primary">DOI: {scientificReferences.co2Extraction2020.doi}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 mt-1" />
                  </div>
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Full References Section */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 max-w-5xl">
            <ScrollReveal animation="fade-up">
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="w-6 h-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl">Complete Scientific References</h2>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-muted/30 rounded-2xl p-6 md:p-8 border border-border">
                <div className="space-y-4 text-sm">
                  {Object.values(scientificReferences).map((ref, index) => (
                    <div key={ref.id} className="flex gap-3 pb-4 border-b border-border/50 last:border-0 last:pb-0">
                      <span className="text-primary font-medium shrink-0">[{ref.id}]</span>
                      <div>
                        <a 
                          href={ref.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {ref.title}
                        </a>
                        <p className="text-muted-foreground mt-1">
                          {ref.source} ({ref.year})
                          {'citations' in ref && ref.citations && <span className="ml-2">• {ref.citations} citations</span>}
                          {'doi' in ref && ref.doi && <span className="ml-2">• DOI: {ref.doi}</span>}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted/20 relative overflow-hidden">
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
                Experience Evidence-Based Skincare
              </h2>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={150}>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Every GreenLab formulation is backed by science, validated by research, 
                and crafted for transformative results.
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
