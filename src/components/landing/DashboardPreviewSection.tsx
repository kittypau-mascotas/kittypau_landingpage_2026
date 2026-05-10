import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { SectionShell } from "./SectionShell";
import { activityData, consumptionData } from "./landing.data";

const activityBars = activityData.map((item) => item.uv / 100);
const consumptionFood = consumptionData.map((item) => item.food);
const consumptionWater = consumptionData.map((item) => item.water);

function buildAreaPath(values: number[], width: number, height: number) {
  if (!values.length) return "";

  const max = Math.max(...values);
  const step = values.length > 1 ? width / (values.length - 1) : width;

  const points = values.map((value, index) => {
    const x = index * step;
    const y = height - (value / max) * height;
    return `${x},${y}`;
  });

  return `M 0 ${height} L ${points.join(" L ")} L ${width} ${height} Z`;
}

function buildLinePath(values: number[], width: number, height: number) {
  if (!values.length) return "";

  const max = Math.max(...values);
  const step = values.length > 1 ? width / (values.length - 1) : width;

  return values
    .map((value, index) => {
      const x = index * step;
      const y = height - (value / max) * height;
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
}

function MiniAreaChart({ values, stroke, fill }: { values: number[]; stroke: string; fill: string }) {
  const width = 360;
  const height = 180;
  const path = buildAreaPath(values, width, height);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full">
      {[0.25, 0.5, 0.75].map((line) => (
        <line
          key={line}
          x1="0"
          x2={width}
          y1={height * line}
          y2={height * line}
          stroke="rgba(148, 163, 184, 0.22)"
          strokeDasharray="4 8"
        />
      ))}
      <path d={path} fill={fill} />
      <path d={path} fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function MiniLineChart({
  valuesA,
  valuesB,
  strokeA,
  strokeB,
}: {
  valuesA: number[];
  valuesB: number[];
  strokeA: string;
  strokeB: string;
}) {
  const width = 360;
  const height = 180;
  const pathA = buildLinePath(valuesA, width, height);
  const pathB = buildLinePath(valuesB, width, height);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full">
      {[0.25, 0.5, 0.75].map((line) => (
        <line
          key={line}
          x1="0"
          x2={width}
          y1={height * line}
          y2={height * line}
          stroke="rgba(148, 163, 184, 0.22)"
          strokeDasharray="4 8"
        />
      ))}
      <path d={pathA} fill="none" stroke={strokeA} strokeWidth="3" strokeLinecap="round" />
      <path d={pathB} fill="none" stroke={strokeB} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function DashboardPreviewSection() {
  return (
    <SectionShell id="dashboard-preview" className="rounded-2xl bg-gray-50 px-4 py-8 shadow-md">
      <h2 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">
        Asi se ve el seguimiento de tu mascota
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-center text-foreground/90">
        Historico simple, claro y accionable. Diseñado para leer el estado en segundos.
      </p>
      <div className="grid gap-8 px-4 md:grid-cols-2">
        <Card className="rounded-2xl bg-white p-4 shadow-md">
          <CardTitle className="mb-4 text-lg font-semibold">Actividad Diaria</CardTitle>
          <div className="h-[200px] w-full">
            <MiniAreaChart
              values={activityBars}
              stroke="hsl(var(--primary))"
              fill="rgba(235, 183, 170, 0.28)"
            />
          </div>
          <CardDescription className="mt-4 text-center">
            Monitoreo de actividad a lo largo de la semana.
          </CardDescription>
        </Card>
        <Card className="rounded-2xl bg-white p-4 shadow-md">
          <CardTitle className="mb-4 text-lg font-semibold">Consumo de Alimento y Agua</CardTitle>
          <div className="h-[200px] w-full">
            <MiniLineChart
              valuesA={consumptionFood}
              valuesB={consumptionWater}
              strokeA="hsl(var(--accent-green))"
              strokeB="hsl(var(--accent-red))"
            />
          </div>
          <CardDescription className="mt-4 text-center">
            Registro de ingesta de alimento y agua por hora.
          </CardDescription>
        </Card>
      </div>
    </SectionShell>
  );
}
