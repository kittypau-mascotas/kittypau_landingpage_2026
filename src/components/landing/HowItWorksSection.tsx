import { motion } from "framer-motion";
import { Link, MonitorDot, Plug } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SectionShell } from "./SectionShell";
import { StepCard } from "./StepCard";
import { howItWorksData } from "./landing.data";

const iconMap = {
  Plug,
  Link,
  MonitorDot,
} as const;

export function HowItWorksSection() {
  return (
    <SectionShell id="como-funciona" className="py-12">
      <SectionHeading title="Como funciona" centered className="mb-12" />
      <div className="grid gap-8 text-center md:grid-cols-3">
        {howItWorksData.map((step, index) => {
          const Icon = iconMap[step.iconName as keyof typeof iconMap];

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: "spring", stiffness: 220, damping: 22, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <StepCard
                icon={<Icon className="mb-2 h-12 w-12 text-primary" />}
                title={step.title}
                description={step.description}
              />
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
