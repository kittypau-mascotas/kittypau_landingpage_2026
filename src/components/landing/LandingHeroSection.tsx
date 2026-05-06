import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { FluidGradientBackground } from "./FluidGradientBackground";

const loginUrl = "https://kittypau-app.vercel.app/login";
const foodPlateClassName =
  "relative z-40 h-[19.5rem] w-[19.5rem] sm:h-[21.5rem] sm:w-[21.5rem] md:h-[24rem] md:w-[24rem] object-contain";
const waterPlateClassName =
  "relative z-10 ml-[-5.2rem] mt-[-6.8rem] h-[12rem] w-[12rem] sm:ml-[-5.8rem] sm:mt-[-7.6rem] sm:h-[13.5rem] sm:w-[13.5rem] md:ml-[-6.4rem] md:mt-[-9rem] md:h-[14.5rem] md:w-[14.5rem] object-contain";

export function LandingHeroSection() {
  const { scrollY } = useScroll();
  const xFood = useTransform(scrollY, [0, 500], [0, -50]);
  const xWater = useTransform(scrollY, [0, 500], [0, 50]);
  const scalePlates = useTransform(scrollY, [0, 500], [1, 0.85]);

  return (
    <section
      id="hero"
      className="relative left-1/2 w-screen -translate-x-1/2 scroll-mt-16 overflow-hidden pb-10 pt-10 text-center md:text-left"
    >
      <FluidGradientBackground />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-between gap-1 px-4 md:flex-row">
        <div className="relative z-30 mt-4 space-y-6 md:mt-0 md:w-1/2">
          <h1 className="text-4xl leading-tight font-titan-one text-foreground sm:text-5xl md:text-[40px]">
            Descubre lo que tu mascota intenta decirte !
          </h1>
          <p className="text-lg text-foreground">KittyPau</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <Button
              asChild
              className="rounded-2xl border-none bg-[hsl(var(--accent-green))/0.9] px-7 py-4 text-base font-bold text-foreground shadow-lg transition-opacity hover:opacity-100"
            >
              <a href={loginUrl} target="_blank" rel="noopener noreferrer">
                Empieza a cuidar gratis
              </a>
            </Button>
            <Button asChild variant="outline" className="min-h-[48px] rounded-2xl px-8 py-4 text-lg">
              <a href="#planes">Ver Planes</a>
            </Button>
          </div>
          <div className="mt-6 space-y-1.5 text-sm font-medium text-gray-600">
            <p className="flex items-center justify-center gap-2 md:justify-start">
              <CheckCircle className="h-4 w-4 text-green-500" /> Evidencia visual de salud diaria
            </p>
            <p className="flex items-center justify-center gap-2 md:justify-start">
              <CheckCircle className="h-4 w-4 text-green-500" /> Instalacion en menos de 5 minutos
            </p>
            <p className="flex items-center justify-center gap-2 md:justify-start">
              <CheckCircle className="h-4 w-4 text-green-500" /> Garantia de tranquilidad absoluta
            </p>
          </div>
        </div>

        <div className="relative z-0 flex items-center justify-center md:w-1/2">
          <motion.div
            style={{ scale: scalePlates }}
            className="flex select-none items-center justify-center pointer-events-none drop-shadow-2xl scale-[1.35] md:scale-[1.90]"
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
      </div>
    </section>
  );
}
