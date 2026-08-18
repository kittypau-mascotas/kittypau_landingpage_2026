import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { SectionShell } from "./SectionShell";
import { activityData, consumptionData } from "./landing.data";

const tickStyle = { fontSize: 11, fill: "#9ca3af" };
const gridStyle = { stroke: "rgba(148, 163, 184, 0.25)", strokeDasharray: "3 6" };
const tooltipStyle = {
  borderRadius: 12,
  border: "1px solid rgba(148, 163, 184, 0.25)",
  fontSize: 12,
  boxShadow: "0 8px 24px rgba(15,23,42,0.10)",
};

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
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData} margin={{ top: 4, right: 12, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="activity-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid {...gridStyle} vertical={false} />
                <XAxis dataKey="name" tick={tickStyle} tickLine={false} axisLine={{ stroke: "rgba(148, 163, 184, 0.35)" }} />
                <YAxis tick={tickStyle} tickLine={false} axisLine={false} width={44} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area
                  type="monotone"
                  dataKey="uv"
                  name="Actividad"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2.5}
                  fill="url(#activity-gradient)"
                  dot={false}
                  activeDot={{ r: 4, strokeWidth: 0 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <CardDescription className="mt-4 text-center">
            Monitoreo de actividad a lo largo de la semana.
          </CardDescription>
        </Card>
        <Card className="rounded-2xl bg-white p-4 shadow-md">
          <CardTitle className="mb-4 text-lg font-semibold">Consumo de Alimento y Agua</CardTitle>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={consumptionData} margin={{ top: 4, right: 12, left: 0, bottom: 0 }}>
                <CartesianGrid {...gridStyle} vertical={false} />
                <XAxis dataKey="name" tick={tickStyle} tickLine={false} axisLine={{ stroke: "rgba(148, 163, 184, 0.35)" }} />
                <YAxis tick={tickStyle} tickLine={false} axisLine={false} width={44} />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend wrapperStyle={{ fontSize: 11 }} iconType="circle" iconSize={8} />
                <Line
                  type="monotone"
                  dataKey="food"
                  name="Alimento (g)"
                  stroke="hsl(var(--accent-green))"
                  strokeWidth={2.5}
                  dot={false}
                  activeDot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="water"
                  name="Agua (ml)"
                  stroke="hsl(var(--accent-red))"
                  strokeWidth={2.5}
                  dot={false}
                  activeDot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <CardDescription className="mt-4 text-center">
            Registro de ingesta de alimento y agua por hora.
          </CardDescription>
        </Card>
      </div>
    </SectionShell>
  );
}
