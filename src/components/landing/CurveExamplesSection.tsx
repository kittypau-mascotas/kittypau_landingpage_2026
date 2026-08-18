import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "./SectionHeading";
import { SectionShell } from "./SectionShell";
import { curveExamplesData } from "./landing.data";
import type { CurveExampleItem } from "./landing.types";

function CurveChart({ curve, height = 160 }: { curve: CurveExampleItem; height?: number }) {
  const color = `hsl(var(${curve.colorVar}))`;
  const gradientId = `curve-gradient-${curve.colorVar.replace(/[^a-z]/gi, "")}`;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={curve.points} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.32} />
            <stop offset="95%" stopColor={color} stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 6" stroke="rgba(148, 163, 184, 0.25)" vertical={false} />
        <XAxis
          dataKey="t"
          tick={{ fontSize: 10, fill: "#9ca3af" }}
          tickLine={false}
          axisLine={{ stroke: "rgba(148, 163, 184, 0.35)" }}
          interval="preserveStartEnd"
          minTickGap={24}
        />
        <YAxis
          tick={{ fontSize: 10, fill: "#9ca3af" }}
          tickLine={false}
          axisLine={false}
          width={44}
          domain={["dataMin - 4", "dataMax + 4"]}
          unit="g"
        />
        <Tooltip
          formatter={(value: number) => [`${value} g`, "Peso"]}
          labelFormatter={(label) => `t = ${label}`}
          contentStyle={{
            borderRadius: 12,
            border: "1px solid rgba(148, 163, 184, 0.25)",
            fontSize: 12,
            boxShadow: "0 8px 24px rgba(15,23,42,0.10)",
          }}
        />
        <Area
          type="monotone"
          dataKey="w"
          stroke={color}
          strokeWidth={2.5}
          fill={`url(#${gradientId})`}
          dot={false}
          activeDot={{ r: 4, strokeWidth: 0 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function CurveExamplesSection() {
  const [alimentacion, servido, ruido, ciclo] = curveExamplesData;

  return (
    <SectionShell id="motor-deteccion" className="py-12">
      <SectionHeading
        title="Como distingue el motor cada evento"
        description="KittyPau anota cada variacion de peso del plato y la clasifica segun su forma. Estos 4 patrones son segmentos reales de KPCL0034, el dispositivo de investigacion del proyecto."
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
          <CardTitle className="mb-1 flex items-center gap-2 text-lg font-semibold">
            <span aria-hidden>{ciclo.emoji}</span> {ciclo.title}
          </CardTitle>
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
