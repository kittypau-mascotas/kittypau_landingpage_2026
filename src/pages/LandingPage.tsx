import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { LandingHeroSection } from "@/components/landing/LandingHeroSection";
import { LandingCarousel } from "@/components/landing/LandingCarousel";
import { ParallaxBrand } from "@/components/landing/ParallaxBrand";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { PlansSection } from "@/components/landing/PlansSection";
import { EarlyAdopterSection } from "@/components/landing/EarlyAdopterSection";
import { PostulacionesSection } from "@/components/landing/PostulacionesSection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { FloatingVideoWidget } from "@/components/landing/FloatingVideoWidget";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <LandingNavbar />
      <FloatingVideoWidget />

      <div className="mx-auto max-w-5xl px-4">
        <LandingHeroSection />
        <LandingCarousel />
        <ParallaxBrand />

        <main className="mt-16 space-y-16 pb-8">
          <FeaturesSection />
          <HowItWorksSection />
          <PlansSection />
          <EarlyAdopterSection />
          <PostulacionesSection />
        </main>

        <LandingFooter />
      </div>
    </div>
  );
}
