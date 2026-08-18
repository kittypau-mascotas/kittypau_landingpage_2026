import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "./SectionHeading";
import { SectionShell } from "./SectionShell";
import { CurveChart } from "./CurveChart";
import { curveExamplesData } from "./landing.data";

export function FeaturesSection() {
  const [alimentacion, servido, ruido, ciclo] = curveExamplesData;

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
        className="mb-12"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {[alimentacion, servido, ruido].map((curve) => (
          <Card key={curve.title} className="rounded-2xl bg-white p-4 shadow-md">
            <CardTitle className="mb-1 flex items-center gap-2 text-lg font-semibold">
              <span aria-hidden>{curve.emoji}</span> {curve.title}
            </CardTitle>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-400">
              {curve.attribution}
            </p>
            <CurveChart curve={curve} />
            <CardDescription className="mt-3">{curve.description}</CardDescription>
          </Card>
        ))}
      </div>

      {ciclo ? (
        <Card className="mt-6 rounded-2xl bg-white p-4 shadow-md md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <CardTitle className="flex items-center gap-2 text-lg font-semibold">
              <span aria-hidden>{ciclo.emoji}</span> {ciclo.title}
            </CardTitle>
            {ciclo.bands ? (
              <div className="flex flex-wrap gap-3 text-xs font-medium text-gray-500">
                {ciclo.bands.map((band) => (
                  <span key={band.label} className="flex items-center gap-1.5">
                    <span
                      className="h-2.5 w-2.5 rounded-sm"
                      style={{ backgroundColor: band.color }}
                      aria-hidden
                    />
                    {band.label}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-400">
            {ciclo.attribution}
          </p>
          <CurveChart curve={ciclo} height={200} />
          <CardDescription className="mt-3 md:max-w-2xl">{ciclo.description}</CardDescription>
        </Card>
      ) : null}
    </SectionShell>
  );
}
