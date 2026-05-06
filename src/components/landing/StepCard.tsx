import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { ReactNode } from "react";

type StepCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function StepCard({ icon, title, description }: StepCardProps) {
  return (
    <Card className="rounded-2xl shadow-md p-6">
      <CardHeader className="flex flex-col items-center p-0 mb-4">
        {icon}
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <CardDescription className="text-sm text-foreground/80">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

