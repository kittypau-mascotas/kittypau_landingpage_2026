import { Button } from "@/components/ui/button";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { LandingHeroSection } from "@/components/landing/LandingHeroSection";
import { LandingCarousel } from "@/components/landing/LandingCarousel";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { FlowSection } from "@/components/landing/FlowSection";
import { DashboardPreviewSection } from "@/components/landing/DashboardPreviewSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PlansSection } from "@/components/landing/PlansSection";
import { EarlyAdopterSection } from "@/components/landing/EarlyAdopterSection";
import { PostulacionesSection } from "@/components/landing/PostulacionesSection";
import { LandingFooter } from "@/components/landing/LandingFooter";

const loginUrl = "https://kittypau-app.vercel.app/login";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <h1 className="text-2xl font-titan-one text-primary">KittyPau</h1>

          <div className="flex items-center gap-6">
            <div className="hidden space-x-4 text-sm font-medium text-gray-600 md:flex">
              <a href="#caracteristicas" className="transition-colors hover:text-primary">
                Caracteristicas
              </a>
              <a href="#como-funciona" className="transition-colors hover:text-primary">
                Como funciona
              </a>
              <a href="#planes" className="transition-colors hover:text-primary">
                Planes
              </a>
            </div>

            <div className="hidden items-center gap-1 border-l border-gray-200 pl-4 sm:flex">
              <a
                href="https://www.instagram.com/kittypau.mascotas/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-[#E4405F] transition-colors hover:bg-[#E4405F]/10"
                >
                  <FaInstagram className="h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://www.youtube.com/channel/UCYrN8v3Lb5n1B0L2QeOEcxA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-[#FF0000] transition-colors hover:bg-[#FF0000]/10"
                >
                  <FaYoutube className="h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/kittypau-mascotas-26289539a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-[#0A66C2] transition-colors hover:bg-[#0A66C2]/10"
                >
                  <FaLinkedin className="h-4 w-4" />
                </Button>
              </a>
            </div>

            <Button
              asChild
              className="rounded-2xl border-none bg-[hsl(var(--accent-green))/0.8] px-7 py-4 text-base font-bold text-foreground shadow-lg transition-opacity hover:opacity-100"
            >
              <a href={loginUrl} target="_blank" rel="noopener noreferrer">
                Prueba gratis
              </a>
            </Button>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-5xl px-4">
        <LandingHeroSection />
        <LandingCarousel />

        <main className="mt-16 space-y-16 pb-8">
          <FeaturesSection />
          <FlowSection />
          <DashboardPreviewSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <PlansSection />
          <EarlyAdopterSection />
          <PostulacionesSection />
        </main>

        <LandingFooter />
      </div>
    </div>
  );
}
