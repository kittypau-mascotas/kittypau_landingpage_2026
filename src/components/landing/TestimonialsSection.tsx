import { SectionShell } from "./SectionShell";
import { SectionHeading } from "./SectionHeading";
import { testimonialsData } from "./landing.data";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsSection() {
  return (
    <SectionShell id="testimonios" className="py-12">
      <SectionHeading
        title="Lo que dicen los dueños"
        eyebrow="Prueba social"
        className="mb-12"
        centered
      />
      <div className="grid md:grid-cols-2 gap-8 px-4">
        {testimonialsData.map((item) => (
          <TestimonialCard key={item.name} {...item} />
        ))}
      </div>
    </SectionShell>
  );
}

