import { BatteryCharging, Shield, Thermometer, UtensilsCrossed } from "lucide-react";
import type {
  CarouselImageConfig,
  CarouselImageItem,
  LandingFeature,
  HeroData,
  NavItem,
  SocialLink,
  PlanFeature,
  TestimonialItem,
  VideoCardItem,
} from "./landing.types";

export const loginUrl = "https://kittypau-app.vercel.app/login";

export const activityData = [
  { name: "Lun", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Mar", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mié", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Jue", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Vie", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Sáb", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Dom", uv: 3490, pv: 4300, amt: 2100 },
];

export const consumptionData = [
  { name: "00:00", food: 100, water: 200 },
  { name: "06:00", food: 150, water: 250 },
  { name: "12:00", food: 200, water: 300 },
  { name: "18:00", food: 120, water: 220 },
  { name: "23:59", food: 80, water: 180 },
];

export const carouselImages: CarouselImageConfig[] = [
  { src: "/prototipo/proto1.jpg", rotateDeg: -90 },
  { src: "/prototipo/proto2.jpg", rotateDeg: 90 },
  { src: "/prototipo/proto3.jpg" },
  { src: "/prototipo/proto4.jpg" },
  { src: "/prototipo/proto5.jpg" },
  { src: "/prototipo/proto6.jpg" },
  { src: "/carousel-images/1.jpg" },
  { src: "/carousel-images/2.jpg" },
  { src: "/carousel-images/3.png" },
  { src: "/carousel-images/4.jpg" },
  { src: "/carousel-images/5.jpg" },
  { src: "/carousel-images/6.jpg" },
  { src: "/carousel-images/7.jpg" },
  { src: "/carousel-images/8.jpg" },
];

export const planFeatures: PlanFeature[] = [
  { feature: "Datos en tiempo real", free: true, premium: true },
  { feature: "1 dispositivo KittyPau", free: true, premium: true },
  { feature: "Estado del dispositivo (batería, WiFi)", free: true, premium: true },
  { feature: "Registro de alimentación e hidratación", free: true, premium: true },
  { feature: "Historial de 7 días", free: true, premium: true },
  { feature: "Historial de 90 días", free: false, premium: true },
  { feature: "Alertas preventivas inteligentes", free: false, premium: true },
  { feature: "Analítica avanzada de hábitos", free: false, premium: true },
  { feature: "Multi-mascota", free: false, premium: true },
  { feature: "Reportes para el veterinario", free: false, premium: true },
  { feature: "Soporte prioritario", free: false, premium: true },
];

export const featuresData: LandingFeature[] = [
  {
    title: "Entorno Seguro",
    description: "Detecta olas de calor o frío extremo en segundos. Mantén el microclima de tu mascota bajo control constante.",
    icon: Thermometer,
    hueA: 12,
    hueB: 30,
    eyebrow: "Clima",
    metric: "Alertas instantáneas",
  },
  {
    title: "Nutrición Precisa",
    description: "Reduce el desperdicio y previene la obesidad. Monitorea gramos exactos consumidos cada día de forma automática.",
    icon: UtensilsCrossed,
    hueA: 142,
    hueB: 118,
    eyebrow: "Alimentación",
    metric: "Control por porción",
  },
  {
    title: "Conexión Total",
    description: "Batería de larga duración y alertas instantáneas de desconexión. Tu tranquilidad nunca se queda sin energía.",
    icon: BatteryCharging,
    hueA: 30,
    hueB: 12,
    eyebrow: "Conectividad",
    metric: "Estado en vivo",
  },
  {
    title: "IA Preventiva",
    description: "Transformamos datos en alarmas tempranas. El 80% de enfermedades son tratables si se detectan a tiempo.",
    icon: Shield,
    hueA: 353,
    hueB: 12,
    eyebrow: "Predicción",
    metric: "Señales antes del problema",
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    quote: "Gracias a KittyPau detectamos que 'Luna' no estaba tomando agua antes de que se deshidratara. Nos ahorró una cirugía de urgencia y mucho estrés.",
    name: "Carolina M.",
    role: "Dueña de Gato Senior",
    borderClassName: "border-primary",
  },
  {
    quote: "El control de peso es increíblemente preciso. He podido ajustar la dieta de Rocky y ha bajado 500g en un mes de forma saludable.",
    name: "Ricardo P.",
    role: "Pet Parent Proactivo",
    borderClassName: "border-green-500",
  },
];

export const howItWorksData = [
  {
    title: "1. Conecta",
    description: "Configura tu dispositivo ESP32 y prepáralo para capturar datos de tu mascota.",
    iconName: "Plug",
  },
  {
    title: "2. Vincula",
    description: "Registra a tu mascota en la plataforma y asocia el dispositivo con su perfil.",
    iconName: "Link",
  },
  {
    title: "3. Monitorea",
    description: "Recibe datos en tiempo real mediante la capa IoT del sistema y visualízalos en el dashboard.",
    iconName: "MonitorDot",
  },
];

export const postulationVideos: VideoCardItem[] = [
  {
    title: "Demo 2 min.",
    subtitle: "Semilla Inicia Corfo 2025",
    href: "#",
  },
  {
    title: "Pitch 40 seg.",
    subtitle: "Semilla Inicia Corfo 2025",
    href: "https://www.youtube.com/watch?v=0LV1gTPgNlI",
  },
  {
    title: "Pitch 90 seg.",
    subtitle: "Start-Up Build Corfo 2025",
    href: "https://youtu.be/cYCQu3vZ6po",
  },
];

export const heroData: HeroData = {
  title: "Descubre lo que tu mascota intenta decirte!",
  primaryCta: "Empieza a cuidar gratis",
  secondaryCta: "Ver Planes",
  benefits: [
    "Evidencia visual de salud diaria",
    "Instalación en menos de 5 minutos",
    "Garantía de tranquilidad absoluta",
  ],
};

export const navItems: NavItem[] = [
  { label: "Caracteristicas", href: "#caracteristicas" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Planes", href: "#planes" },
];

export const socialLinks: SocialLink[] = [
  { 
    label: "Instagram", 
    href: "https://www.instagram.com/kittypau.mascotas/", 
    platform: 'instagram' 
  },
  { 
    label: "YouTube", 
    href: "https://www.youtube.com/channel/UCYrN8v3Lb5n1B0L2QeOEcxA", 
    platform: 'youtube' 
  },
  { 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/kittypau-mascotas-26289539a/", 
    platform: 'linkedin' 
  },
];
