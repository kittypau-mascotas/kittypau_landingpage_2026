import type { LucideIcon } from "lucide-react";

export type LandingFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
  hueA: number;
  hueB: number;
  subtitle: string;
};

export type PlanFeature = {
  feature: string;
  free: boolean;
  premium: boolean;
};

export type CarouselImageItem = string;
export type CarouselImageConfig = {
  src: string;
  rotateDeg?: number;
};

export type CurvePoint = {
  t: number;
  w: number;
};

export type CurveBand = {
  label: string;
  from: number;
  to: number;
  color: string;
};

export type CurveExampleItem = {
  emoji: string;
  title: string;
  attribution: string;
  description: string;
  points: CurvePoint[];
  colorVar: string;
  bands?: CurveBand[];
};

export type VideoCardItem = {
  title: string;
  subtitle: string;
  href: string;
};

export type HeroData = {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  benefits: string[];
};

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  platform: 'instagram' | 'youtube' | 'linkedin';
};
