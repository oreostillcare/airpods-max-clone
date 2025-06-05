import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { ProductGallery } from "@/components/ProductGallery";
import { SoundFeatures } from "@/components/SoundFeatures";
import { DesignSection } from "@/components/DesignSection";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Highlights />
      <ProductGallery />
      <SoundFeatures />
      <DesignSection />
      <Footer />
    </main>
  );
}
