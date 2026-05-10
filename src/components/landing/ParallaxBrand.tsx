import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxBrand() {
  const ref = useRef<HTMLDivElement>(null);
  
  // Seguimos el progreso del scroll respecto a este contenedor
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Definimos diferentes velocidades para crear el efecto Parallax (profundidad)
  const yLogo = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const yBrand = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yTagline = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  
  // Opacidad y escala para una entrada y salida suave
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <div
      ref={ref}
      className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden my-4"
    >
      {/* Capas de Identidad con Parallax */}
      <div className="flex flex-col items-center gap-6 relative z-10">
        <motion.div
          style={{ y: yLogo, opacity, scale }}
          className="h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-primary/20 bg-white p-2 shadow-2xl"
        >
          <img src="/icon.jpg" alt="Parallax Logo" className="h-full w-full object-contain" />
        </motion.div>

        <div className="text-center">
          <motion.h2
            style={{ y: yBrand, opacity, fontFamily: '"Titan One", sans-serif' }}
            className="text-6xl md:text-7xl text-primary leading-none select-none"
          >
            KittyPau
          </motion.h2>
          <motion.h3
            style={{ y: yTagline, opacity, fontFamily: '"Titan One", sans-serif' }}
            className="mt-4 text-xl md:text-2xl text-gray-600 tracking-[0.25em] select-none"
          >
            PetTech AIoT
          </motion.h3>
        </div>
      </div>

      {/* Marca de agua de fondo con movimiento inverso extremo */}
      <motion.div
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [150, -150]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.1, 0])
        }}
        className="absolute inset-0 flex items-center justify-center -z-0 pointer-events-none select-none"
      >
        <span 
          className="text-[12rem] text-primary"
          style={{ fontFamily: '"Titan One", sans-serif' }}
        >
          KittyPau
        </span>
      </motion.div>
    </div>
  );
}