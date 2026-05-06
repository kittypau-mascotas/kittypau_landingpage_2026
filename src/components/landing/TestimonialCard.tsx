import { Card, CardContent } from "@/components/ui/card";
import type { TestimonialItem } from "./landing.types";

type TestimonialCardProps = TestimonialItem;

export function TestimonialCard({ quote, name, role, borderClassName }: TestimonialCardProps) {
  return (
    <Card className={`rounded-2xl shadow-md p-6 bg-white italic border-l-4 ${borderClassName}`}>
      <CardContent className="p-0 text-foreground">
        <p className="text-gray-700 mb-4">{quote}</p>
        <div className="flex items-center gap-3 not-italic">
          <div className="h-10 w-10 bg-gray-200 rounded-full" />
          <div>
            <p className="font-bold text-sm">{name}</p>
            <p className="text-xs text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

