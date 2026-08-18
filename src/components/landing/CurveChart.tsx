import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceArea,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { CurveExampleItem } from "./landing.types";

export function formatMmSs(seconds: number) {
  const mm = Math.floor(seconds / 60);
  const ss = Math.round(seconds % 60);
  return `${mm}:${ss.toString().padStart(2, "0")}`;
}

export function CurveChart({ curve, height = 160 }: { curve: CurveExampleItem; height?: number }) {
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
        {curve.bands?.map((band) => (
          <ReferenceArea
            key={band.label}
            x1={band.from}
            x2={band.to}
            fill={band.color}
            fillOpacity={0.16}
            stroke={band.color}
            strokeOpacity={0.3}
          />
        ))}
        <XAxis
          dataKey="t"
          type="number"
          domain={["dataMin", "dataMax"]}
          tickFormatter={formatMmSs}
          tick={{ fontSize: 10, fill: "#9ca3af" }}
          tickLine={false}
          axisLine={{ stroke: "rgba(148, 163, 184, 0.35)" }}
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
          labelFormatter={(label: number) => `t = ${formatMmSs(label)}`}
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
