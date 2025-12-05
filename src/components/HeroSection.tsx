import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Leaf } from "lucide-react";
import { useEffect, useState } from "react";
import heroVideo from "@/assets/Greenlabs_Hero.mp4";
import heroVideoMobile from "@/assets/Greenlabs_verticale.mp4";

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden pt-6 md:pt-0 pb-6 md:pb-0">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="hidden md:block absolute inset-0">
          <video 
            preload="metadata"
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=2074&auto=format&fit=crop"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
        <div className="md:hidden absolute inset-0">
          <video 
            preload="none"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
            poster="https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=1200&auto=format&fit=crop"
          >
            <source src={heroVideoMobile} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-20 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <div 
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 md:mb-8 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <Leaf className="w-4 h-4 text-primary-foreground" />
                <span className="text-sm text-white tracking-widest uppercase font-medium">Full-Spectrum CBD • Made in Italy</span>
              </div>

          {/* Main Headline */}
              <h1 
            className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-medium tracking-tight text-white mb-6 md:mb-8 transition-all duration-1000 delay-200 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
                Premium CBD <span className="italic font-serif text-primary-foreground/90">Cosmeceuticals</span>
          </h1>

          {/* Description */}
              <p 
            className={`text-white/90 text-lg sm:text-xl max-w-2xl mx-auto mb-10 md:mb-14 leading-relaxed font-light tracking-wide transition-all duration-1000 delay-400 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
                Italian‑made skincare where galenic craft meets ultrasonic extraction and short‑path distillation. Full‑spectrum CBD with native terpenes for the entourage effect. 100% natural, clear and dependable.
          </p>

          {/* CTAs */}
              <div 
                className={`flex flex-col sm:flex-row items-center sm:items-start gap-6 transition-all duration-1000 delay-500 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <Button variant="default" size="lg" className="min-w-[200px] h-14 text-base rounded-full bg-white text-black hover:bg-white/90" asChild>
                  <a href="#ritual-lab">Shop Skincare</a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-6" />
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
    </section>
  );
};
