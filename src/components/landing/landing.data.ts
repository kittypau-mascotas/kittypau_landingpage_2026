import type {
  CarouselImageConfig,
  CarouselImageItem,
  CurveExampleItem,
  HeroData,
  NavItem,
  SocialLink,
  VideoCardItem,
} from "./landing.types";

export const loginUrl = "https://kittypau-app.vercel.app/login";

export const featuredVideoId = "5BM2d6lbOYA";

// Formulario real usado hoy como mecanismo de acceso anticipado (Early Adopter / lista de
// espera Premium) - no hay pasarela de pago ni columna is_premium/plan_type en Supabase
// (verificado contra Knowledge/05_API y Knowledge/06_BaseDatos de kittypau_2026_hivemq), asi
// que "Premium" todavia no es algo que se pueda comprar dentro de la app - este formulario es
// el unico paso real que existe hoy para mostrar interes.
export const earlyAdopterFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSd-Gr6pYmbmiPY7871SgSPRJ52ynLA1p6fL5Z6ZGhWTtLQQYw/viewform?usp=dialog";

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

// Colores de categoria tal como estan definidos en CATEGORIAS dentro de
// Investigacion/Ciclo_Alpha_v2/fase_0_ruido/app_anotacion_av2.py (la app real de anotacion) -
// alimentacion "#00b45a" (verde), servido "#1e64ff" (azul) - mismos colores que la app usa
// para las franjas (add_vrect) sobre el grafico de peso.
const APP_ANOTACION_COLOR_ALIMENTACION = "#00b45a";
const APP_ANOTACION_COLOR_SERVIDO = "#1e64ff";

export const curveExamplesData: CurveExampleItem[] = [
  {
    emoji: "🍽️",
    title: "Alimentación",
    attribution: "Segmento real, KPCL0034 · 6 jun 2026",
    description: "El peso baja en escalones mientras el gato come: cada bocado resta unos gramos del plato. Esa bajada gradual y sostenida es la forma que el motor matematico usa para reconocer un evento real de alimentacion.",
    points: [
      { t: 0, w: 138 }, { t: 30, w: 138 }, { t: 60, w: 138 }, { t: 91, w: 138 },
      { t: 120, w: 135 }, { t: 150, w: 133 }, { t: 180, w: 137 }, { t: 210, w: 129 },
      { t: 240, w: 136 }, { t: 270, w: 127 }, { t: 300, w: 123 }, { t: 330, w: 125 },
      { t: 360, w: 125 }, { t: 390, w: 125 }, { t: 420, w: 129 }, { t: 450, w: 123 },
      { t: 480, w: 123 }, { t: 510, w: 123 },
    ],
    colorVar: "--accent-green",
  },
  {
    emoji: "🫙",
    title: "Servido",
    attribution: "Segmento real, KPCL0034 · 24 jun 2026",
    description: "El peso sube de golpe cuando se agrega alimento al plato: un salto unico y sostenido, sin bocados despues. El motor distingue esto de \"alimentacion\" por la subida abrupta en vez de una bajada gradual.",
    points: [
      { t: 0, w: 114 }, { t: 30, w: 114 }, { t: 60, w: 114 }, { t: 90, w: 114 },
      { t: 120, w: 114 }, { t: 150, w: 175 }, { t: 180, w: 175 }, { t: 210, w: 175 },
    ],
    colorVar: "--primary",
  },
  {
    emoji: "⚡",
    title: "Ruido",
    attribution: "Segmento real, KPCL0034 · 11 jul 2026",
    description: "Un pico aislado sin causa real -vibracion o interferencia del sensor- que vuelve enseguida a la linea base, sin la tendencia sostenida que si muestran alimentacion y servido.",
    points: [
      { t: 0, w: 90 }, { t: 30, w: 90 }, { t: 60, w: 90 }, { t: 90, w: 90 },
      { t: 120, w: 104 }, { t: 150, w: 86 }, { t: 180, w: 86 }, { t: 210, w: 86 },
      { t: 240, w: 86 }, { t: 270, w: 86 }, { t: 300, w: 86 }, { t: 330, w: 86 },
      { t: 360, w: 86 }, { t: 390, w: 86 }, { t: 420, w: 86 }, { t: 450, w: 86 },
      { t: 480, w: 86 }, { t: 510, w: 86 }, { t: 540, w: 86 }, { t: 570, w: 86 },
      { t: 600, w: 86 }, { t: 630, w: 86 }, { t: 660, w: 86 }, { t: 690, w: 86 },
      { t: 720, w: 86 }, { t: 750, w: 86 },
    ],
    colorVar: "--accent-red",
  },
  {
    emoji: "🟡",
    title: "Ciclo Servido → Alimentación",
    attribution: "Segmento real, KPCL0034 · 15 jun 2026",
    description: "El ciclo completo que el sistema arma automaticamente: primero un servido (el peso sube al llenar el plato) y despues una o mas alimentaciones (el peso baja mientras el gato come). Las franjas de color marcan cada tramo, igual que en la app de anotacion interna.",
    points: [
      { t: 0, w: 143 }, { t: 30, w: 141 }, { t: 60, w: 141 }, { t: 90, w: 141 },
      { t: 120, w: 153 }, { t: 150, w: 150 }, { t: 180, w: 150 }, { t: 210, w: 150 },
      { t: 240, w: 147 }, { t: 270, w: 147 }, { t: 300, w: 144 }, { t: 330, w: 144 },
      { t: 360, w: 148 }, { t: 390, w: 148 }, { t: 420, w: 137 }, { t: 450, w: 137 },
      { t: 480, w: 128 }, { t: 510, w: 128 },
    ],
    colorVar: "--warning",
    // Ventanas reales de la anotacion (servido#529 11:30-11:31, alimentacion#530 11:31-11:37,
    // 2026-06-15), en segundos desde el primer punto leido (11:29:09.826 UTC). Servido extendido
    // a t=2:00 (120s, el punto donde el peso llega a su pico tras el servido) a pedido explicito.
    bands: [
      { label: "Servido", from: 50, to: 120, color: APP_ANOTACION_COLOR_SERVIDO },
      { label: "Alimentación", from: 120, to: 470, color: APP_ANOTACION_COLOR_ALIMENTACION },
    ],
  },
];

export const howItWorksData = [
  {
    title: "1. Conecta",
    description: "Configura tu dispositivo KittyPau y prepáralo para capturar datos de tu mascota.",
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
    subtitle: "Semilla Inicia Corfo 2026",
    href: "https://www.youtube.com/watch?v=5BM2d6lbOYA",
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
  title: "Descubre lo que tu mascota necesita antes de que se note en su salud.",
  description: "KittyPau convierte alimentacion, hidratacion, entorno y estado del dispositivo en datos claros, historiales utiles y alertas que ayudan a actuar a tiempo.",
  primaryCta: "Empieza a cuidar gratis",
  secondaryCta: "Ver Planes",
  benefits: [
    "Evidencia visual de salud diaria",
    "Instalacion guiada en minutos",
    "Alertas preventivas y historial",
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
