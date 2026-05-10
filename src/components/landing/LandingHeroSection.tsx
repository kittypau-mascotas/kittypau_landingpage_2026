import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { FluidGradientBackground } from "./FluidGradientBackground";
import { heroData, loginUrl } from "./landing.data";

const foodPlateClassName =
  "relative z-40 h-[19.5rem] w-[19.5rem] sm:h-[21.5rem] sm:w-[21.5rem] md:h-[24rem] md:w-[24rem] object-contain";
const waterPlateClassName =
  "relative z-10 ml-[-.5rem] mt-[-5rem] h-[12rem] w-[12rem] sm:ml-[-8rem] sm:mt-[-6rem] sm:h-[13.5rem] sm:w-[13.5rem] md:ml-[-9.5rem] md:mt-[-9rem] md:h-[18.5rem] md:w-[18.5rem] object-contain";

export function LandingHeroSection() {
  const { scrollY } = useScroll();
  const xFood = useTransform(scrollY, [0, 500], [0, -40]);
  const xWater = useTransform(scrollY, [0, 500], [0, 40]);
  const scalePlates = useTransform(scrollY, [0, 500], [1, 0.85]);

  return (
    <section
      id="hero"
      className="relative left-1/2 w-screen -translate-x-1/2 scroll-mt-16 overflow-hidden pb-8 pt-8 text-center md:text-left"
    >
      <FluidGradientBackground />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-0 px-2 sm:px-4 md:flex-row md:gap-1">
        <div className="relative z-0 order-1 flex w-full items-center justify-center overflow-visible md:order-2 md:w-1/2">
          <motion.div
            style={{ scale: scalePlates }}
            className="flex select-none items-center justify-center pointer-events-none drop-shadow-2xl scale-[1.12] sm:scale-[1.22] md:scale-[1.90]"
          >
            <motion.img
              style={{ x: xFood }}
              src="/illustrations/pink_food_full.png"
              alt="Plato de alimento KittyPau"
              className={foodPlateClassName}
            />
            <motion.img
              style={{ x: xWater }}
              src="/illustrations/green_water_full.png"
              alt="Bebedero KittyPau"
              className={waterPlateClassName}
            />
          </motion.div>
        </div>

        <div className="relative z-30 order-2 mt-1 w-full space-y-6 px-1 md:order-1 md:mt-0 md:w-1/2 md:px-0">
          <h1 className="text-4xl leading-tight font-titan-one text-foreground sm:text-5xl md:text-[40px]">
            {heroData.title}
          </h1>
          {/* El logo y la bajada se han movido exclusivamente al Navbar sticky */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <Button
              asChild
              variant="cta"
              className="rounded-full px-7 py-4 text-base font-bold text-white"
            >
              <a href={loginUrl} target="_blank" rel="noopener noreferrer">
                {heroData.primaryCta}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="min-h-[48px] rounded-full border border-slate-200 bg-white px-8 py-4 text-lg text-foreground shadow-sm transition-colors hover:border-slate-300 hover:bg-white hover:text-foreground"
            >
              <a href="#planes">{heroData.secondaryCta}</a>
            </Button>
          </div>
          <div className="mt-6 space-y-1.5 text-sm font-medium text-gray-600">
            {heroData.benefits.map((benefit, i) => (
              <p key={i} className="flex items-center justify-center gap-2 md:justify-start">
                <CheckCircle className="h-4 w-4 text-green-500" /> {benefit}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
