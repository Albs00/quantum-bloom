import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DifferentiatorsSection } from "@/components/DifferentiatorsSection";
import { FeaturedRitualsSection } from "@/components/FeaturedRitualsSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { ProductGrid } from "@/components/ProductGrid";
import { TechnologySection } from "@/components/TechnologySection";
import { CommunitySection } from "@/components/CommunitySection";
import { ValuesSection } from "@/components/ValuesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <main>
        <HeroSection />
        <DifferentiatorsSection />
        <FeaturedRitualsSection />
        <ValuesSection />
        <ProductGrid />
        <TechnologySection />
        <PhilosophySection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
