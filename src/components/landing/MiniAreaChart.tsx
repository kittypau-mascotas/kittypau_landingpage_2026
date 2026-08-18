function buildAreaPath(values: number[], width: number, height: number) {
  if (!values.length) return "";

  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const step = values.length > 1 ? width / (values.length - 1) : width;

  const points = values.map((value, index) => {
    const x = index * step;
    const y = height - ((value - min) / range) * height;
    return `${x},${y}`;
  });

  return `M 0 ${height} L ${points.join(" L ")} L ${width} ${height} Z`;
}

export function MiniAreaChart({ values, stroke, fill }: { values: number[]; stroke: string; fill: string }) {
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
