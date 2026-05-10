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
        title="Que hace KittyPau"
        description="KittyPau convierte la rutina de tu mascota en informacion util para cuidar mejor: mide, registra y resume lo que pasa en su dia a dia."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:gap-8">
        {featuresData.map((feature, index) => (
          <FeatureCard key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}
