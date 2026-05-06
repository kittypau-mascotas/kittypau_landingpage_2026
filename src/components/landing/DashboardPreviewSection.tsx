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
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={activityData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.3}
                isAnimationActive={false}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
          <CardDescription className="mt-4 text-center">
            Monitoreo de actividad a lo largo de la semana.
          </CardDescription>
        </Card>
        <Card className="rounded-2xl bg-white p-4 shadow-md">
          <CardTitle className="mb-4 text-lg font-semibold">Consumo de Alimento y Agua</CardTitle>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={consumptionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="food"
                stroke="hsl(var(--accent-green))"
                activeDot={{ r: 8 }}
                isAnimationActive={false}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="water"
                stroke="hsl(var(--accent-red))"
                isAnimationActive={false}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
          <CardDescription className="mt-4 text-center">
            Registro de ingesta de alimento y agua por hora.
          </CardDescription>
        </Card>
      </div>
    </SectionShell>
  );
}
