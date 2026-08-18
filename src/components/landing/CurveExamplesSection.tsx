import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "./SectionHeading";
import { SectionShell } from "./SectionShell";
import { MiniAreaChart } from "./MiniAreaChart";
import { curveExamplesData } from "./landing.data";

export function CurveExamplesSection() {
  return (
    <SectionShell id="motor-deteccion" className="py-12">
      <SectionHeading
        title="Como distingue el motor cada evento"
        description="KittyPau anota cada variacion de peso del plato y la clasifica segun su forma. Estos 3 patrones son segmentos reales de KPCL0034, el dispositivo de investigacion del proyecto."
        className="mb-12"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {curveExamplesData.map((curve) => (
          <Card key={curve.title} className="rounded-2xl bg-white p-4 shadow-md">
            <CardTitle className="mb-2 flex items-center gap-2 text-lg font-semibold">
              <span aria-hidden>{curve.emoji}</span> {curve.title}
            </CardTitle>
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-gray-400">
              {curve.attribution}
            </p>
            <div className="h-[140px] w-full">
              <MiniAreaChart
                values={curve.points}
                stroke={`hsl(var(${curve.strokeVar}))`}
                fill={`hsl(var(${curve.fillVar}) / 0.22)`}
              />
            </div>
            <CardDescription className="mt-4">{curve.description}</CardDescription>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
