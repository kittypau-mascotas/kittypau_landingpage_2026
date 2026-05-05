import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import {
  Gift, CheckCircle, Video, Shield, Instagram, Youtube, Linkedin, Check, X,
  Thermometer, UtensilsCrossed, BatteryCharging,
  Plug, Link, MonitorDot, Brain, Smartphone, Cpu, ArrowRight, Users, Zap,
} from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, AreaChart, Area, Legend,
} from 'recharts';

const APP_URL = '/login';

const carouselImages = [
  '/carousel-images/1.jpg',
  '/carousel-images/2.jpg',
  '/carousel-images/3.png',
  '/carousel-images/4.jpg',
  '/carousel-images/5.jpg',
  '/carousel-images/6.jpg',
  '/carousel-images/7.jpg',
  '/carousel-images/8.jpg',
];

const planFeatures = [
  { label: '1 mascota',                     free: true,  premium: true  },
  { label: '1 dispositivo (plato KPCL)',    free: true,  premium: true  },
  { label: 'Lecturas en tiempo real',       free: true,  premium: true  },
  { label: 'Estado del plato (batería, Wi-Fi)', free: true, premium: true },
  { label: 'Dashboard de hábitos',          free: true,  premium: true  },
  { label: 'Historial 7 días',              free: true,  premium: true  },
  { label: 'Historial extendido (30+ días)',free: false, premium: true  },
  { label: 'Alertas críticas',              free: false, premium: true  },
  { label: 'Analíticas avanzadas',          free: false, premium: true  },
  { label: 'Patrones de conducta',          free: false, premium: true  },
  { label: 'Múltiples mascotas',            free: false, premium: true  },
  { label: 'Soporte prioritario',           free: false, premium: true  },
];

const activityData = [
  { name: 'Lun', uv: 4000 }, { name: 'Mar', uv: 3000 }, { name: 'Mié', uv: 2000 },
  { name: 'Jue', uv: 2780 }, { name: 'Vie', uv: 1890 }, { name: 'Sáb', uv: 2390 },
  { name: 'Dom', uv: 3490 },
];

const consumptionData = [
  { name: '00:00', food: 100, water: 200 }, { name: '06:00', food: 150, water: 250 },
  { name: '12:00', food: 200, water: 300 }, { name: '18:00', food: 120, water: 220 },
  { name: '23:59', food: 80,  water: 180 },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-varela-round">

      {/* ── Navbar principal ── */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

          {/* Logo + nombre */}
          <a href="#hero" className="flex items-center gap-2 shrink-0">
            <img src="/favicon.jpg" alt="KittyPau logo" className="h-8 w-8 rounded-full object-cover" />
            <div className="leading-tight">
              <span className="block text-xl font-titan-one text-primary">KittyPau</span>
              <span className="block text-[10px] text-gray-500 -mt-1 hidden sm:block">Tu mascota, en datos reales</span>
            </div>
          </a>

          {/* Links centrados */}
          <div className="hidden md:flex flex-1 justify-center gap-6 text-gray-600 text-sm">
            <a href="#caracteristicas" className="hover:text-primary transition-colors">Características</a>
            <a href="#como-funciona"   className="hover:text-primary transition-colors">Cómo funciona</a>
            <a href="#planes"          className="hover:text-primary transition-colors">Planes</a>
            <a href="#quienes-somos"   className="hover:text-primary transition-colors">Quiénes somos</a>
          </div>

          {/* CTA llamativo */}
          <a
            href={APP_URL}
            className="shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white font-bold rounded-2xl px-5 py-2.5 shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all duration-200 text-sm"
          >
            <Zap className="h-4 w-4" />
            Prueba Gratis
          </a>
        </div>

        {/* Social links bar */}
        <div className="flex justify-center gap-1 pb-1.5">
          <a href="https://www.instagram.com/kittypau.mascotas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            className="text-gray-400 hover:text-primary transition-colors p-1">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://www.youtube.com/channel/UCYrN8v3Lb5n1B0L2QeOEcxA" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
            className="text-gray-400 hover:text-primary transition-colors p-1">
            <Youtube className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/kittypau-mascotas-26289539a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="text-gray-400 hover:text-primary transition-colors p-1">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section id="hero" className="scroll-mt-20 max-w-5xl mx-auto px-4 pt-16 pb-0 md:pt-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Texto izquierdo */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-titan-one text-primary leading-tight">
              Protege a tu mascota: Monitoreo de salud preventivo en tiempo real
            </h1>
            <p className="text-lg text-gray-700">
              No esperes a que aparezcan los síntomas. KittyPau detecta cambios sutiles en hidratación y alimentación antes de que se conviertan en un problema grave.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={APP_URL}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white font-bold rounded-2xl px-8 py-4 text-lg shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all duration-200"
              >
                <Zap className="h-5 w-5" />
                Empieza a cuidar gratis
              </a>
              <a
                href="#planes"
                className="inline-flex items-center justify-center rounded-2xl border border-gray-300 px-8 py-4 text-lg font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors"
              >
                Ver planes
              </a>
            </div>
            <div className="text-sm text-gray-500 space-y-1">
              <p className="flex items-center justify-center md:justify-start gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Datos reales del dispositivo</p>
              <p className="flex items-center justify-center md:justify-start gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Instalación en menos de 5 minutos</p>
              <p className="flex items-center justify-center md:justify-start gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Conectado al ecosistema KittyPau</p>
            </div>
          </div>

          {/* Imágenes de platos a la derecha */}
          <div className="md:w-1/2 flex flex-col items-center gap-4">
            <div className="flex gap-4 justify-center">
              <div className="relative">
                <img
                  src="/carousel-images/1.jpg"
                  alt="Plato de alimento KittyPau"
                  className="w-40 h-40 sm:w-52 sm:h-52 object-cover rounded-2xl shadow-lg border-2 border-primary/20"
                />
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow">Alimento</span>
              </div>
              <div className="relative">
                <img
                  src="/carousel-images/2.jpg"
                  alt="Plato de hidratación KittyPau"
                  className="w-40 h-40 sm:w-52 sm:h-52 object-cover rounded-2xl shadow-lg border-2 border-primary/20"
                />
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Hidratación</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 text-center">Plato inteligente KPCL — mide consumo en gramos, temperatura y humedad</p>
          </div>
        </div>

        {/* Carrusel de evolución — de extremo a extremo */}
        <div className="mt-12 -mx-4">
          <p className="text-center text-xs text-gray-400 mb-3 tracking-wide uppercase">Evolución del proyecto</p>
          <Carousel
            opts={{ align: 'start', loop: true }}
            plugins={[Autoplay({ delay: 2500 })]}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {carouselImages.map((src, i) => (
                <CarouselItem key={i} className="pl-2 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                  <img
                    src={src}
                    alt={`KittyPau evolución ${i + 1}`}
                    className="w-full h-24 object-cover rounded-xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <main className="space-y-16 py-16">

          {/* ── Características ── */}
          <section id="caracteristicas" className="scroll-mt-24 py-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">Características</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              <Card className="rounded-2xl shadow-md p-6 text-center">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <Thermometer className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-xl font-normal">Entorno Seguro</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    Mide temperatura y humedad del ambiente. Si algo cambia de forma brusca, lo ves en tu app antes de que afecte a tu mascota.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-md p-6 text-center">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <UtensilsCrossed className="h-10 w-10 text-green-500 mb-2" />
                  <CardTitle className="text-xl font-normal">Nutrición Precisa</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    El plato pesa cada ingesta. Sabes exactamente cuánto comió y bebió hoy, y cómo se compara con su semana.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-md p-6 text-center">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <BatteryCharging className="h-10 w-10 text-amber-500 mb-2" />
                  <CardTitle className="text-xl font-normal">Siempre Conectado</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    Batería de larga duración y Wi-Fi. Si el plato pierde señal o batería, te avisamos. Tu monitoreo nunca se apaga solo.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-md p-6 text-center">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <Shield className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-xl font-normal">IA Preventiva</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    Los datos del plato se convierten en patrones. KittyPau detecta cambios de hábito antes de que se vuelvan urgentes.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ── Mapa del proceso ── */}
          <section className="py-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">Cómo fluye la información</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">

              {/* Paso 1: Plato */}
              <div className="flex flex-col items-center text-center max-w-[180px]">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-3 shadow">
                  <img src="/carousel-images/1.jpg" alt="Plato KittyPau" className="w-14 h-14 object-cover rounded-xl" />
                </div>
                <p className="font-semibold text-primary text-sm">Plato KittyPau</p>
                <p className="text-xs text-gray-500 mt-1">Sensores de peso, temperatura y humedad registran cada evento</p>
              </div>

              <ArrowRight className="h-8 w-8 text-primary shrink-0 rotate-90 md:rotate-0" />

              {/* Paso 2: Cerebro / IA */}
              <div className="flex flex-col items-center text-center max-w-[180px]">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-3 shadow">
                  <Brain className="h-10 w-10 text-primary" />
                </div>
                <p className="font-semibold text-primary text-sm">IA + Datos</p>
                <p className="text-xs text-gray-500 mt-1">MQTT → bridge → Supabase. Machine learning interpreta patrones de consumo</p>
              </div>

              <ArrowRight className="h-8 w-8 text-primary shrink-0 rotate-90 md:rotate-0" />

              {/* Paso 3: App */}
              <div className="flex flex-col items-center text-center max-w-[180px]">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-3 shadow">
                  <Smartphone className="h-10 w-10 text-primary" />
                </div>
                <p className="font-semibold text-primary text-sm">Tu App KittyPau</p>
                <p className="text-xs text-gray-500 mt-1">Dashboard en tiempo real, historial y alertas directamente en tu teléfono</p>
              </div>
            </div>
          </section>

          {/* ── Dashboard preview ── */}
          <section id="dashboard-preview" className="scroll-mt-24 py-4 bg-gray-50 rounded-2xl shadow-md px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-4 pt-8">Así se ve el seguimiento de tu mascota</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Histórico simple, claro y accionable. Diseñado para leer el estado en segundos.
            </p>
            <div className="grid md:grid-cols-2 gap-8 pb-8">
              <Card className="rounded-2xl shadow-md p-4 bg-white">
                <CardTitle className="text-base font-medium mb-4 text-primary">Consumo diario — semana</CardTitle>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={activityData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} isAnimationActive={false} />
                  </AreaChart>
                </ResponsiveContainer>
                <CardDescription className="text-center mt-3 text-xs">Actividad de consumo a lo largo de la semana</CardDescription>
              </Card>
              <Card className="rounded-2xl shadow-md p-4 bg-white">
                <CardTitle className="text-base font-medium mb-4 text-primary">Alimento vs Agua — hoy</CardTitle>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={consumptionData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="food"  stroke="#82ca9d" dot={false} isAnimationActive={false} name="Comida (g)" />
                    <Line type="monotone" dataKey="water" stroke="#6366f1" dot={false} isAnimationActive={false} name="Agua (ml)" />
                  </LineChart>
                </ResponsiveContainer>
                <CardDescription className="text-center mt-3 text-xs">Registro de ingesta por hora durante el día</CardDescription>
              </Card>
            </div>
          </section>

          {/* ── Cómo funciona ── */}
          <section id="como-funciona" className="scroll-mt-24 py-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">Cómo funciona</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">

              <Card className="rounded-2xl shadow-md p-6">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <Plug className="h-12 w-12 text-primary mb-2" />
                  <CardTitle className="text-xl font-normal">1. Conecta</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    Enchufa tu plato KittyPau, espera a que los LEDs parpadeen en verde y listo — el dispositivo arranca solo y se conecta a tu Wi-Fi.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-md p-6">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <Link className="h-12 w-12 text-green-500 mb-2" />
                  <CardTitle className="text-xl font-normal">2. Vincula</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    Regístrate en la app, ingresa el código KPCL de tu plato y sigue los pasos para asociarlo a tu mascota. Todo en menos de 5 minutos.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-md p-6">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <MonitorDot className="h-12 w-12 text-amber-500 mb-2" />
                  <CardTitle className="text-xl font-normal">3. Monitorea</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    Analiza el consumo real de alimento e hidratación y sus ciclos diarios. KittyPau detecta cambios de hábito y te alerta antes de que sean un problema de salud.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ── Testimonios ── */}
          <section id="testimonios" className="scroll-mt-24 py-4">
            <h2 className="text-3xl sm:text-4xl font-titan-one text-center text-primary mb-4">Lo que dicen los (posibles) Dueños</h2>
            <p className="text-center text-gray-500 text-sm mb-10">Experiencias de nuestros primeros usuarios y pilotos</p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="rounded-2xl shadow-md p-6 bg-white italic border-l-4 border-primary">
                <CardContent className="p-0">
                  <p className="text-gray-700 mb-4">
                    "Gracias a KittyPau me di cuenta que Luna dejó de tomar agua tres días antes de que se notara algo raro. Eso nos ahorró una urgencia."
                  </p>
                  <div className="flex items-center gap-3 not-italic">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">C</div>
                    <div>
                      <p className="font-bold text-sm">Carolina M.</p>
                      <p className="text-xs text-gray-500">Dueña de gato senior — Piloto KP</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-md p-6 bg-white italic border-l-4 border-green-500">
                <CardContent className="p-0">
                  <p className="text-gray-700 mb-4">
                    "Ver los gramos exactos cada día me ayudó a ajustar la dieta de Rocky. Bajó 500g en un mes sin pasar hambre. No hubiera podido hacerlo sin datos."
                  </p>
                  <div className="flex items-center gap-3 not-italic">
                    <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">R</div>
                    <div>
                      <p className="font-bold text-sm">Ricardo P.</p>
                      <p className="text-xs text-gray-500">Dueño de gato adulto — Early Adopter</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ── Planes ── */}
          <section id="planes" className="scroll-mt-24 py-4 bg-gray-50 rounded-2xl shadow-md px-4 pb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-4 pt-8">Nuestros Planes</h2>
            <p className="text-center text-gray-500 text-sm mb-10">Empieza gratis. Escala cuando lo necesites.</p>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <Card className="rounded-2xl shadow-md p-6 text-center bg-white">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-semibold mb-1">Plan Gratuito</CardTitle>
                  <p className="text-3xl font-titan-one text-primary">$0</p>
                  <CardDescription className="text-gray-500 mt-2">
                    Para empezar a conocer a tu mascota con datos reales.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-2 text-left">
                  <p className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500 shrink-0" /> 1 mascota y 1 dispositivo</p>
                  <p className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500 shrink-0" /> Lecturas en tiempo real</p>
                  <p className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500 shrink-0" /> Dashboard de hábitos básico</p>
                  <p className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500 shrink-0" /> Historial 7 días</p>
                </CardContent>
                <div className="mt-6">
                  <a
                    href={APP_URL}
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary to-primary/80 text-white font-bold rounded-2xl px-6 py-3 shadow hover:shadow-primary/40 hover:scale-105 transition-all duration-200"
                  >
                    <Zap className="h-4 w-4" />
                    Regístrate gratis
                  </a>
                </div>
              </Card>

              <Card className="rounded-2xl shadow-md p-6 text-center bg-white border-2 border-primary relative overflow-hidden">
                <span className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Recomendado</span>
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-semibold mb-1">Plan Premium</CardTitle>
                  <p className="text-3xl font-titan-one text-primary">Próximamente</p>
                  <CardDescription className="text-gray-500 mt-2">
                    Para quienes quieren prevenir de verdad, con historial, alertas y analíticas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-2 text-left">
                  <p className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500 shrink-0" /> Todo del plan gratuito</p>
                  <p className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500 shrink-0" /> Historial extendido 30+ días</p>
                  <p className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500 shrink-0" /> Alertas críticas automáticas</p>
                  <p className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500 shrink-0" /> Analíticas y patrones de conducta</p>
                </CardContent>
                <div className="mt-6">
                  <a
                    href={APP_URL}
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary to-primary/80 text-white font-bold rounded-2xl px-6 py-3 shadow hover:shadow-primary/40 hover:scale-105 transition-all duration-200"
                  >
                    <Zap className="h-4 w-4" />
                    Únete como Early Adopter
                  </a>
                </div>
              </Card>
            </div>

            {/* Tabla comparativa */}
            <div className="overflow-x-auto rounded-2xl shadow-md bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary/5 border-b border-gray-100">
                    <th className="text-left px-6 py-4 font-semibold text-gray-700">Función</th>
                    <th className="text-center px-6 py-4 font-semibold text-gray-700 whitespace-nowrap">Gratuito</th>
                    <th className="text-center px-6 py-4 font-semibold text-primary whitespace-nowrap">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {planFeatures.map((f, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-3 text-gray-700">{f.label}</td>
                      <td className="px-6 py-3 text-center">
                        {f.free
                          ? <Check className="h-5 w-5 text-green-500 mx-auto" />
                          : <X className="h-5 w-5 text-gray-300 mx-auto" />}
                      </td>
                      <td className="px-6 py-3 text-center">
                        {f.premium
                          ? <Check className="h-5 w-5 text-green-500 mx-auto" />
                          : <X className="h-5 w-5 text-gray-300 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Early Adopter ── */}
          <Card className="bg-white rounded-2xl shadow-md">
            <div className="flex flex-col items-center gap-8 p-6 sm:p-8">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Únete a nuestro Programa Early Adopter</h2>
                <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                  Sé uno de los primeros en transformar el cuidado de tu mascota. Tu feedback es clave para perfeccionar KittyPau.
                </p>
                <ul className="mt-6 space-y-4 inline-block text-left">
                  <li className="flex items-start gap-3">
                    <Gift className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Dispositivo y App Premium Gratis</h4>
                      <p className="text-sm text-gray-500">Recibe el plato KPCL y acceso Premium sin costo por 12 meses.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Valida una Solución Innovadora</h4>
                      <p className="text-sm text-gray-500">Ayúdanos a prevenir enfermedades y a validar el producto comercialmente.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="aspect-video w-full max-w-lg mx-auto">
                <iframe
                  className="w-full h-full rounded-xl shadow-md"
                  src="https://www.youtube.com/embed/T3kVEl7CE7k"
                  title="KittyPau — Early Adopter"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd-Gr6pYmbmiPY7871SgSPRJ52ynLA1p6fL5Z6ZGhWTtLQQYw/viewform?usp=dialog"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white font-bold rounded-2xl px-8 py-3 shadow hover:shadow-primary/40 hover:scale-105 transition-all duration-200"
                >
                  <Zap className="h-4 w-4" />
                  Quiero ser Early Adopter
                </a>
                <a
                  href="mailto:kittypau.mascotas@gmail.com?subject=Carta%20Compromiso%20Early%20Adopter"
                  className="inline-flex items-center justify-center rounded-2xl border border-gray-300 px-8 py-3 text-gray-700 hover:border-primary hover:text-primary transition-colors"
                >
                  Leer Carta Compromiso
                </a>
              </div>
            </div>
          </Card>

          {/* ── Postulaciones ── */}
          <section id="postulaciones" className="scroll-mt-24 py-4">
            <h2 className="text-3xl sm:text-4xl font-titan-one text-center text-primary mb-4">Nuestras Postulaciones</h2>
            <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
              Conoce más sobre el proyecto a través de los videos presentados en fondos de innovación.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="rounded-2xl shadow-md p-6 text-center bg-primary/5 flex flex-col justify-between">
                <div>
                  <Video className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-titan-one text-lg text-primary mb-1">Demo 2 min.</h4>
                  <p className="text-sm text-gray-500 mb-6">Semilla Inicia Corfo 2025</p>
                </div>
                <span className="inline-flex items-center justify-center rounded-2xl border border-gray-300 text-gray-400 cursor-not-allowed px-4 py-2 text-sm font-medium">
                  Próximamente
                </span>
              </Card>
              <Card className="rounded-2xl shadow-md p-6 text-center bg-primary/5 flex flex-col justify-between">
                <div>
                  <Video className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-titan-one text-lg text-primary mb-1">Pitch 40 seg.</h4>
                  <p className="text-sm text-gray-500 mb-6">Semilla Inicia Corfo 2025</p>
                </div>
                <a href="https://www.youtube.com/watch?v=0LV1gTPgNlI" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-primary text-primary hover:bg-primary hover:text-white transition-colors px-4 py-2 text-sm font-medium">
                  Ver Video
                </a>
              </Card>
              <Card className="rounded-2xl shadow-md p-6 text-center bg-primary/5 flex flex-col justify-between">
                <div>
                  <Video className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-titan-one text-lg text-primary mb-1">Pitch 90 seg.</h4>
                  <p className="text-sm text-gray-500 mb-6">Start-Up Build Corfo 2025</p>
                </div>
                <a href="https://youtu.be/cYCQu3vZ6po" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-primary text-primary hover:bg-primary hover:text-white transition-colors px-4 py-2 text-sm font-medium">
                  Ver Video
                </a>
              </Card>
            </div>
          </section>

          {/* ── Quiénes somos ── */}
          <section id="quienes-somos" className="scroll-mt-24 py-4 bg-gray-50 rounded-2xl shadow-md px-6 pb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-4 pt-8">Quiénes somos</h2>
            <p className="text-center text-gray-500 text-sm mb-10 max-w-2xl mx-auto">
              Un equipo chileno construyendo tecnología para el bienestar animal.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-800">Misión</h3>
                <p className="text-sm text-gray-600">Transformar los datos del comportamiento alimentario de las mascotas en decisiones de salud preventiva, accesibles para cualquier dueño.</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Cpu className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-800">Tecnología</h3>
                <p className="text-sm text-gray-600">Diseñamos nuestro propio hardware (plato KPCL con ESP32), procesamos datos en la nube con Supabase y aplicamos modelos de detección de anomalías.</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-800">Validación</h3>
                <p className="text-sm text-gray-600">Postulantes a Corfo Semilla Inicia y Start-Up Build. Dispositivos funcionando en hogares chilenos reales con datos en producción.</p>
              </div>
            </div>
          </section>

        </main>

        {/* ── Footer ── */}
        <footer className="py-8 border-t border-gray-200">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <img src="/favicon.jpg" alt="KittyPau" className="h-7 w-7 rounded-full object-cover" />
              <span className="font-titan-one text-primary text-lg">KittyPau</span>
            </div>
            <div className="flex justify-center gap-5 mb-4">
              <a href="https://www.instagram.com/kittypau.mascotas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-primary transition-colors" />
              </a>
              <a href="https://www.youtube.com/channel/UCYrN8v3Lb5n1B0L2QeOEcxA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="h-5 w-5 text-gray-400 hover:text-primary transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/kittypau-mascotas-26289539a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-primary transition-colors" />
              </a>
            </div>
            <p className="text-sm text-gray-500 mb-2">
              Contacto: <a href="mailto:kittypau.mascotas@gmail.com" className="text-primary hover:underline">kittypau.mascotas@gmail.com</a>
            </p>
            <div className="flex justify-center gap-4 mb-3 text-sm">
              <a href="mailto:kittypau.mascotas@gmail.com?subject=Privacidad" className="text-gray-500 hover:text-primary transition-colors">Privacidad</a>
              <a href="mailto:kittypau.mascotas@gmail.com?subject=Soporte" className="text-gray-500 hover:text-primary transition-colors">Soporte</a>
              <a href="#quienes-somos" className="text-gray-500 hover:text-primary transition-colors">Quiénes somos</a>
            </div>
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} KittyPau — Con amor para tus mascotas.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
