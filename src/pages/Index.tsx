import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { ValuesSection } from "@/components/ValuesSection";
import { ProductGrid } from "@/components/ProductGrid";
import { TechnologySection } from "@/components/TechnologySection";
import { CommunitySection } from "@/components/CommunitySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PhilosophySection />
        <ValuesSection />
        <ProductGrid />
        <TechnologySection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
