import { motion, type Variants } from "framer-motion";
import type { LandingFeature } from "./landing.types";

const getFeatureVariants = (index: number): Variants => ({
  offscreen: {
    x: index % 2 === 0 ? -180 : 180,
    opacity: 0,
    rotate: index % 2 === 0 ? -12 : 12,
    scale: 0.95,
  },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 20,
      mass: 0.9,
    },
  },
});

type FeatureCardProps = LandingFeature & {
  index: number;
};

export function FeatureCard({
  title,
  description,
  icon: Icon,
  subtitle,
  hueA,
  hueB,
  index,
}: FeatureCardProps) {
  const variants = getFeatureVariants(index);

  return (
    <motion.div
      className="relative w-full"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div
        variants={variants}
        whileHover={{
          y: -8,
          scale: 1.02,
          transition: { type: "spring", stiffness: 260, damping: 18 },
        }}
        className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.10)]"
      >
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-x-0 top-0 h-1 bg-primary/10" />

        <div className="relative flex h-full items-start gap-6 p-8">
          <div className="shrink-0 rounded-2xl bg-primary/10 p-4 shadow-sm">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <div className="min-w-0">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">{title}</h3>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.15em] text-primary/80">
              {subtitle}
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-gray-700">{description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
