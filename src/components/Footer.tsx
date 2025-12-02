import { Sparkles, Leaf, Shield, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading text-2xl font-semibold tracking-wide">
                Green<span className="text-gradient-gold">Lab</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Quantum cosmeceutics. Where botanical science meets natural magic.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-foreground">Explore</h4>
            <ul className="space-y-3">
              <li>
                <a href="#filosofia" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#valori" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Values
                </a>
              </li>
              <li>
                <a href="#ritual-lab" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Ritual Lab
                </a>
              </li>
              <li>
                <a href="#tecnologia" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Technology
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-foreground">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 py-8 border-t border-b border-border mb-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Leaf className="w-5 h-5 text-primary" />
            <span className="text-sm">100% Italian Supply Chain</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-secondary" />
            <span className="text-sm">Certified Clinical Trials</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Heart className="w-5 h-5 text-accent" />
            <span className="text-sm">Cruelty Free</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Green Lab. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs italic font-heading">
            "Become the conductor of your own regeneration"
          </p>
        </div>
      </div>
    </footer>
  );
};
