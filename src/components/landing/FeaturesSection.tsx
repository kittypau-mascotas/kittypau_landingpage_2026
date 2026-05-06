import { FeatureCard } from "./FeatureCard";
import { featuresData } from "./landing.data";
import { SectionHeading } from "./SectionHeading";
import { SectionShell } from "./SectionShell";

export function FeaturesSection() {
  return (
    <SectionShell id="caracteristicas" className="relative py-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-[hsl(var(--accent-green))/0.16] blur-3xl" />
        <div className="absolute inset-x-16 top-24 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      </div>

      <SectionHeading
        eyebrow="Que hace KittyPau"
        title="Caracteristicas que se sienten claras, utiles y confiables"
        description="Cada modulo de KittyPau convierte señales cotidianas en decisiones accionables para cuidar mejor a tu mascota, sin ruido visual ni complejidad innecesaria."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:gap-8">
        {featuresData.map((feature, index) => (
          <FeatureCard key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}
