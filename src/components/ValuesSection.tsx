import { Atom, Heart, Shield, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Atom,
    title: "Scienza Magica e Quantica",
    description: "Innovazione biotecnologica, test rigorosi, risultati tangibili. Dove la fisica quantistica incontra la cosmetica avanzata.",
    color: "primary",
    delay: "animation-delay-200",
  },
  {
    icon: Heart,
    title: "Olistico per Natura",
    description: "La pelle, l'energia, lo spirito in equilibrio. Ogni formula agisce su tutti i livelli del tuo essere.",
    color: "secondary",
    delay: "animation-delay-400",
  },
  {
    icon: Shield,
    title: "Trasparenza e Sicurezza",
    description: "Test clinici pubblicati, chiarezza sugli attivi, zero compromessi. La tua fiducia è il nostro valore più prezioso.",
    color: "accent",
    delay: "animation-delay-600",
  },
  {
    icon: Sparkles,
    title: "Rituale Energetico",
    description: "Ogni prodotto è un rituale sensoriale completo: texture trasformative, signature olfattive, esperienza multidimensionale.",
    color: "primary",
    delay: "animation-delay-800",
  },
];

export const ValuesSection = () => {
  return (
    <section id="valori" className="py-24 md:py-32 relative overflow-hidden bg-muted/30">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full border border-foreground" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full border border-foreground" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border mb-6">
            <Heart className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground tracking-wide">I Nostri Valori</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light mb-4">
            I Pilastri della{" "}
            <span className="text-gradient-sacred">Trasformazione</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quattro principi fondamentali che guidano ogni formula, ogni rituale, ogni esperienza Green Lab.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={cn(
                "group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 animate-fade-in",
                value.delay
              )}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div
                className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110",
                  value.color === "primary" && "bg-primary/20 text-primary",
                  value.color === "secondary" && "bg-secondary/20 text-secondary",
                  value.color === "accent" && "bg-accent/20 text-accent"
                )}
              >
                <value.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground group-hover:text-gradient-gold transition-all">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
