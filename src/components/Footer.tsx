import { Sparkles, Leaf, Shield, Heart } from "lucide-react";
import { SectionDivider } from "@/components/ui/section-divider";

export const Footer = () => {
  return (
    <footer className="relative pt-32 pb-16 bg-foreground text-secondary overflow-hidden">
      <SectionDivider position="top" fill="fill-secondary/10" variant="wave" />
      
      {/* Organic background elements */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <span className="font-heading text-2xl font-bold tracking-wide text-secondary">
                Green<span className="text-primary italic font-serif">Lab</span>
              </span>
            </a>
            <p className="text-secondary/60 text-sm leading-relaxed mb-6">
              Galenic CBD cosmeceutics — full‑spectrum, made in Italy, 100% natural.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-white">Explore</h4>
            <ul className="space-y-4">
              <li>
                <a href="#filosofia" className="text-secondary/60 hover:text-primary transition-colors text-sm">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#valori" className="text-secondary/60 hover:text-primary transition-colors text-sm">
                  Values
                </a>
              </li>
              <li>
                <a href="#ritual-lab" className="text-secondary/60 hover:text-primary transition-colors text-sm">
                  Ritual Lab
                </a>
              </li>
              <li>
                <a href="#tecnologia" className="text-secondary/60 hover:text-primary transition-colors text-sm">
                  Technology
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-white">Support</h4>
            <ul className="space-y-4">
              <li>
                <a href="/faq" className="text-secondary/60 hover:text-primary transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/shipping-returns" className="text-secondary/60 hover:text-primary transition-colors text-sm">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="/compliance" className="text-secondary/60 hover:text-primary transition-colors text-sm">
                  Compliance & Certifications
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-white">Legal</h4>
            <ul className="space-y-4">
              <li>
                <a href="/privacy-policy" className="text-secondary/60 hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-secondary/60 hover:text-primary transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="text-secondary/60 hover:text-primary transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-8 py-10 border-t border-white/10 mb-8">
          <div className="flex items-center gap-3 text-secondary/70">
            <Leaf className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">100% Italian Supply Chain</span>
          </div>
          <div className="flex items-center gap-3 text-secondary/70">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Lab Tested</span>
          </div>
          <div className="flex items-center gap-3 text-secondary/70">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Cruelty Free</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center pt-8 border-t border-white/5">
          <p className="text-secondary/40 text-sm">
            © {new Date().getFullYear()} Green labs. All rights reserved.
          </p>
          <p className="text-secondary/40 text-xs italic font-serif tracking-wider">
            "Full‑spectrum CBD rituals for healthy, balanced skin"
          </p>
        </div>
      </div>
    </footer>
  );
};
