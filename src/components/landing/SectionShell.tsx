import * as React from "react";
import { cn } from "@/lib/utils";

type SectionShellProps = React.PropsWithChildren<{
  id?: string;
  className?: string;
  fullBleed?: boolean;
}>;

export function SectionShell({ id, className, fullBleed = false, children }: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 py-8",
        fullBleed ? "w-full" : "relative",
        className
      )}
    >
      <div className={cn(fullBleed ? "w-full" : "max-w-5xl mx-auto px-4")}>{children}</div>
    </section>
  );
}

