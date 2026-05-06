import * as React from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeading({
  title,
  description,
  eyebrow,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "mx-auto max-w-2xl text-center", className)}>
      {eyebrow ? (
        <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-primary shadow-sm">
          <span className="h-2 w-2 rounded-full bg-[hsl(var(--accent-green))]" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-4xl sm:text-5xl font-titan-one text-foreground leading-tight">{title}</h2>
      {description ? <p className="mt-4 text-base sm:text-lg text-gray-600 leading-7">{description}</p> : null}
    </div>
  );
}

