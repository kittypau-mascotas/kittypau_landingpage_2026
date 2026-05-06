import type { LucideIcon } from "lucide-react";

export type LandingFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
  hueA: number;
  hueB: number;
  eyebrow: string;
  metric: string;
};

export type PlanFeature = {
  feature: string;
  free: boolean;
  premium: boolean;
};

export type CarouselImageItem = string;

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  borderClassName: string;
};

export type VideoCardItem = {
  title: string;
  subtitle: string;
  href: string;
};

