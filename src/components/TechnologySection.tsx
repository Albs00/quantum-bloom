import { Zap, Waves, FlaskConical, Microscope } from "lucide-react";

const technologies = [
  {
    icon: Waves,
    title: "Ultrasuoni Giantec",
    description: "Frequenze soniche che penetrano la barriera cutanea, trasportando i principi attivi nelle profondità cellulari. Come un diapason per le tue cellule.",
    metaphor: "L'onda che risveglia",
  },
  {
    icon: FlaskConical,
    title: "Short Path Distillation",
    description: "Purificazione alchemica dei fitocomplessi. Estraiamo solo l'essenza più pura, preservando l'energia vitale di ogni molecola.",
    metaphor: "L'arte della distillazione",
  },
  {
    icon: Microscope,
    title: "Nanoemulsioni Bioattive",
    description: "Particelle così piccole da danzare tra le membrane cellulari. Biodisponibilità massima, assorbimento istantaneo.",
    metaphor: "Il veicolo quantico",
  },
  {
    icon: Zap,
    title: "Attivazione SEC",
    description: "Modulazione del sistema endocannabinoide: equilibrio, omeostasi, comunicazione cellulare perfetta. Il linguaggio segreto del corpo.",
    metaphor: "La frequenza dell'equilibrio",
  },
];

export const TechnologySection = () => {
  return (
    <section id="tecnologia" className="py-24 md:py-32 relative overflow-hidden bg-muted/30">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent animate-shimmer animation-delay-400" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-shimmer animation-delay-800" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border mb-6">
            <Zap className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground tracking-wide">Tecnologia & Scienza</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light mb-4">
            L'Alchimia della{" "}
            <span className="text-gradient-sacred">Biotecnologia</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dove il sapere ancestrale incontra la fisica quantistica. Tecnologie che trasformano 
            le molecole in sinfonie energetiche.
          </p>
        </div>

        {/* Technologies grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <tech.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="text-xs text-secondary uppercase tracking-widest font-medium">
                    {tech.metaphor}
                  </span>
                  <h3 className="font-heading text-xl font-semibold mt-2 mb-3 text-foreground">
                    {tech.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>

              {/* Connection lines */}
              {index < technologies.length - 1 && (
                <div className="absolute -bottom-4 left-1/2 w-px h-8 bg-gradient-to-b from-border to-transparent hidden md:block" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom infographic hint */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-full bg-card border border-border">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-xs text-primary">CBD</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-xs text-secondary">SEC</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-xs text-accent">ATP</span>
              </div>
            </div>
            <span className="text-muted-foreground text-sm">
              Dai fitocomplessi agli attivi bioenergetici
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
