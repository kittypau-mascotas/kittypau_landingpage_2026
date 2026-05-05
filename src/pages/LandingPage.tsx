import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import {
  Gift, CheckCircle, Heart, Shield, Instagram, Youtube, Linkedin, Check, X,
  Thermometer, UtensilsCrossed, BatteryCharging,
  Plug, Link, MonitorDot, Brain, Cpu, Smartphone, Database,
} from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, AreaChart, Area, Legend,
} from 'recharts';

const APP_URL = 'https://kittypau-app.vercel.app';
const LOGIN_URL = `${APP_URL}/login`;
const REGISTRO_URL = `${APP_URL}/registro`;

const activityData = [
  { name: 'Lun', uv: 4000 }, { name: 'Mar', uv: 3000 }, { name: 'Mié', uv: 2000 },
  { name: 'Jue', uv: 2780 }, { name: 'Vie', uv: 1890 }, { name: 'Sáb', uv: 2390 }, { name: 'Dom', uv: 3490 },
];

const consumptionData = [
  { name: '00:00', food: 100, water: 200 }, { name: '06:00', food: 150, water: 250 },
  { name: '12:00', food: 200, water: 300 }, { name: '18:00', food: 120, water: 220 }, { name: '23:59', food: 80, water: 180 },
];

const heroCarouselImages = [
  '/carousel-images/1.jpg', '/carousel-images/2.jpg', '/carousel-images/3.png',
  '/carousel-images/4.jpg', '/carousel-images/5.jpg', '/carousel-images/6.jpg',
  '/carousel-images/7.jpg', '/carousel-images/8.jpg',
  '/prototipo/proto1.jpg', '/prototipo/proto2.jpg', '/prototipo/proto3.jpg',
  '/prototipo/proto4.jpg', '/prototipo/proto5.jpg', '/prototipo/proto6.jpg',
];

const planFeatures = [
  { feature: 'Datos en tiempo real', free: true, premium: true },
  { feature: '1 dispositivo KittyPau', free: true, premium: true },
  { feature: 'Estado del dispositivo (batería, WiFi)', free: true, premium: true },
  { feature: 'Registro de alimentación e hidratación', free: true, premium: true },
  { feature: 'Historial de 7 días', free: true, premium: true },
  { feature: 'Historial de 90 días', free: false, premium: true },
  { feature: 'Alertas preventivas inteligentes', free: false, premium: true },
  { feature: 'Analítica avanzada de hábitos', free: false, premium: true },
  { feature: 'Multi-mascota', free: false, premium: true },
  { feature: 'Reportes para el veterinario', free: false, premium: true },
  { feature: 'Soporte prioritario', free: false, premium: true },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-varela-round">

      {/* Navbar */}
      <nav className="bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

          <a href="#hero" className="flex items-center gap-2 flex-shrink-0">
            <img src="/illustrations/bandida.png" alt="KittyPau" className="h-9 w-9 object-contain" />
            <div className="leading-tight">
              <span className="text-xl font-titan-one text-primary block">KittyPau</span>
              <span className="text-[10px] text-gray-400 leading-none">Salud preventiva para tu mascota</span>
            </div>
          </a>

          <div className="hidden md:flex items-center justify-center gap-5 text-gray-600 text-sm flex-1">
            <a href="#caracteristicas" className="hover:text-primary transition-colors">Características</a>
            <a href="#como-funciona" className="hover:text-primary transition-colors">Cómo funciona</a>
            <a href="#planes" className="hover:text-primary transition-colors">Planes</a>
            <a href="#quienes-somos" className="hover:text-primary transition-colors">Quiénes somos</a>
          </div>

          <Button
            asChild
            className="bg-primary text-primary-foreground hover:opacity-90 rounded-2xl px-5 py-2 shadow-lg font-bold text-sm flex-shrink-0 ring-2 ring-primary/30 ring-offset-1"
          >
            <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer">🐾 Prueba gratis</a>
          </Button>

        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4">

        {/* Social Links */}
        <nav className="bg-primary/60 backdrop-blur-sm rounded-full p-1.5 mt-4 max-w-min mx-auto">
          <div className="flex items-center gap-1">
            <a href="https://www.instagram.com/kittypau.mascotas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:text-white/80">
                <Instagram className="h-4 w-4" />
              </Button>
            </a>
            <a href="https://www.youtube.com/channel/UCYrN8v3Lb5n1B0L2QeOEcxA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:text-white/80">
                <Youtube className="h-4 w-4" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/kittypau-mascotas-26289539a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:text-white/80">
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </nav>

        {/* Hero */}
        <section id="hero" className="scroll-mt-16 pt-10 pb-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-5">
              <h1 className="text-4xl sm:text-5xl font-titan-one text-primary leading-tight">
                Protege a tu mascota
              </h1>
              <p className="text-xl font-bold text-gray-700">
                Monitoreo de salud preventivo en tiempo real
              </p>
              <p className="text-base text-gray-600">
                Plato inteligente + app. Detecta cambios en la alimentación e hidratación de tu mascota antes de que aparezcan síntomas. Actúa a tiempo, siempre.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:opacity-90 rounded-2xl px-7 py-4 text-base shadow-lg font-bold ring-2 ring-primary/30 ring-offset-1"
                >
                  <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer">🐾 Empieza a cuidar gratis</a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl px-7 py-4 text-base">
                  <a href="#planes">Ver planes</a>
                </Button>
              </div>
              <div className="text-sm text-gray-500 space-y-1.5">
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> Datos reales del dispositivo IoT, 24/7
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> Detecta cambios antes de que aparezcan síntomas
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> Hardware fabricado en Chile, &lt; $30 USD
                </p>
              </div>
            </div>

            <div className="md:w-1/2 flex flex-col items-center gap-4">
              <img
                src="/illustrations/bandida.png"
                alt="Mascota con KittyPau"
                className="max-w-[200px] h-auto rounded-2xl shadow-md"
              />
              <div className="flex gap-6 items-end justify-center">
                <div className="text-center">
                  <img
                    src="/illustrations/pink_food_full.png"
                    alt="Plato de alimento KittyPau"
                    className="h-24 w-24 object-contain drop-shadow-md mx-auto"
                  />
                  <p className="text-xs text-gray-500 mt-1">Alimento</p>
                </div>
                <div className="text-center">
                  <img
                    src="/illustrations/green_water_full.png"
                    alt="Bebedero KittyPau"
                    className="h-24 w-24 object-contain drop-shadow-md mx-auto"
                  />
                  <p className="text-xs text-gray-500 mt-1">Hidratación</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Hero Carousel — full width */}
      <div className="w-full mt-8 overflow-hidden">
        <Carousel
          opts={{ align: 'start', loop: true }}
          plugins={[Autoplay({ delay: 2200, stopOnInteraction: false })]}
        >
          <CarouselContent className="-ml-2">
            {heroCarouselImages.map((src, i) => (
              <CarouselItem key={i} className="pl-2 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                <div className="h-28 rounded-xl overflow-hidden">
                  <img
                    src={src}
                    alt={`KittyPau evolución ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <main className="space-y-16 pb-8 mt-16">

          {/* Características */}
          <section id="caracteristicas" className="scroll-mt-20 py-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-3">Características</h2>
            <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto text-sm">
              Plato inteligente + app en tiempo real. Todo lo que necesitas para cuidar a tu mascota con datos reales.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              <Card className="rounded-2xl shadow-md p-6 text-center">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <Thermometer className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-base font-normal">Monitoreo en tiempo real</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    Sensores de peso, temperatura y humedad registran el entorno y los hábitos de tu mascota las 24 horas.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-md p-6 text-center">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <UtensilsCrossed className="h-10 w-10 text-green-500 mb-2" />
                  <CardTitle className="text-base font-normal">Control de alimentación</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    Mide con precisión cuánto come y bebe tu mascota en cada ingesta. Detecta cambios de apetito desde el primer día.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-md p-6 text-center">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <BatteryCharging className="h-10 w-10 text-amber-500 mb-2" />
                  <CardTitle className="text-base font-normal">Dispositivo siempre activo</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    Batería autónoma y reconexión automática. Siempre sabes si tu plato KittyPau está enviando datos.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-md p-6 text-center">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <Shield className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-base font-normal">Prevención inteligente</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    KittyPau aprende los patrones de tu mascota y te alerta cuando algo cambia, antes de que aparezcan síntomas.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Proceso / Mapa de flujo */}
          <section className="py-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-2">
              Del plato a la alerta preventiva
            </h2>
            <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto text-sm">
              Así transforma KittyPau los datos de tu mascota en información útil para su salud.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0">
              <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-5 w-40">
                <img src="/illustrations/pink_food_full.png" alt="Plato KittyPau" className="h-14 w-14 object-contain mb-3" />
                <p className="font-semibold text-primary text-sm">Plato KittyPau</p>
                <p className="text-xs text-gray-400 mt-1">Peso · Temp · Humedad</p>
              </div>
              <div className="text-gray-300 text-3xl mx-3 rotate-90 md:rotate-0">›</div>
              <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-5 w-40">
                <Cpu className="h-12 w-12 text-amber-400 mb-3" />
                <p className="font-semibold text-amber-500 text-sm">IoT + Bridge</p>
                <p className="text-xs text-gray-400 mt-1">MQTT · WiFi · 24/7</p>
              </div>
              <div className="text-gray-300 text-3xl mx-3 rotate-90 md:rotate-0">›</div>
              <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-5 w-40">
                <Brain className="h-12 w-12 text-purple-400 mb-3" />
                <p className="font-semibold text-purple-500 text-sm">IA + Data</p>
                <p className="text-xs text-gray-400 mt-1">ML · Patrones · Anomalías</p>
              </div>
              <div className="text-gray-300 text-3xl mx-3 rotate-90 md:rotate-0">›</div>
              <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-5 w-40">
                <Smartphone className="h-12 w-12 text-green-400 mb-3" />
                <p className="font-semibold text-green-500 text-sm">Tu App</p>
                <p className="text-xs text-gray-400 mt-1">Dashboard · Alertas · Historial</p>
              </div>
            </div>
          </section>

          {/* Dashboard Preview */}
          <section id="dashboard-preview" className="py-8 bg-gray-50 rounded-2xl shadow-md px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-3">
              Así se ve el seguimiento de tu mascota
            </h2>
            <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto text-sm">
              Historial claro y accionable. Diseñado para leer el estado en segundos.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="rounded-2xl shadow-md p-4 bg-white">
                <CardTitle className="text-sm font-normal text-gray-600 mb-3">Actividad diaria</CardTitle>
                <ResponsiveContainer width="100%" height={180}>
                  <AreaChart data={activityData} margin={{ top: 5, right: 20, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.25} />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>
              <Card className="rounded-2xl shadow-md p-4 bg-white">
                <CardTitle className="text-sm font-normal text-gray-600 mb-3">Consumo de alimento y agua</CardTitle>
                <ResponsiveContainer width="100%" height={180}>
                  <LineChart data={consumptionData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                    <Line type="monotone" dataKey="food" name="Alimento (g)" stroke="#e88fa1" activeDot={{ r: 5 }} dot={false} />
                    <Line type="monotone" dataKey="water" name="Agua (ml)" stroke="#5bc4a0" dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </div>
          </section>

          {/* Cómo funciona */}
          <section id="como-funciona" className="scroll-mt-20 py-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">Cómo funciona</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <Card className="rounded-2xl shadow-md p-6">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <Plug className="h-12 w-12 text-primary mb-2" />
                  <CardTitle className="text-xl font-normal">1. Conecta</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    Enciende tu plato KittyPau. Las luces indicarán que está listo y conectado a tu WiFi. Sin técnicos, sin configuraciones complejas.
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
                    Regístrate en la app KittyPau, crea el perfil de tu mascota y sigue los pasos para vincular tu plato. En minutos estás monitoreando.
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
                    Analiza los datos reales de alimentación e hidratación y sus ciclos diarios. Detecta cambios de hábito antes de que se conviertan en un problema de salud.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Testimonios */}
          <section id="testimonios" className="scroll-mt-20 py-8 bg-primary/5 rounded-2xl px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-2">
              Lo que dicen quienes ya lo probaron
            </h2>
            <p className="text-center text-gray-400 text-sm mb-10">Beta testers reales. Resultados reales.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: '"Noté que mi gata dejó de comer con normalidad antes de que ella me lo mostrara. KittyPau me alertó dos días antes de que empezara a verse decaída."',
                  name: 'Valentina R.',
                  location: 'Beta tester — Santiago',
                },
                {
                  quote: '"Trabajo todo el día y siempre me pregunté si mi perro comía bien. Ahora lo sé desde el celular. Muy tranquilizador."',
                  name: 'Felipe M.',
                  location: 'Beta tester — Valparaíso',
                },
                {
                  quote: '"No es solo un dispensador, muestra los patrones reales de consumo. Los gráficos del historial semanal son muy útiles para el veterinario."',
                  name: 'Constanza A.',
                  location: 'Beta tester — Concepción',
                },
              ].map(({ quote, name, location }) => (
                <Card key={name} className="rounded-2xl shadow-md p-6 bg-white">
                  <CardContent className="p-0 space-y-4">
                    <p className="text-gray-600 text-sm italic">{quote}</p>
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Heart className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700">{name}</p>
                        <p className="text-xs text-gray-400">{location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Planes */}
          <section id="planes" className="scroll-mt-20 py-8 bg-gray-50 rounded-2xl shadow-md">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">Planes</h2>
            <div className="grid md:grid-cols-2 gap-6 px-4 mb-10">
              <Card className="rounded-2xl shadow-md p-6 text-center">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-semibold mb-1">Plan Gratuito</CardTitle>
                  <p className="text-3xl font-titan-one text-primary mt-2">
                    $0 <span className="text-base font-normal text-gray-400">/mes</span>
                  </p>
                  <CardDescription className="text-gray-500 mt-2 text-sm">
                    Empieza a monitorear sin costo. Ideal para conocer el valor del sistema.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-2 text-left mb-5">
                  <p className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500 flex-shrink-0" /> 1 dispositivo KittyPau</p>
                  <p className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500 flex-shrink-0" /> Datos en tiempo real</p>
                  <p className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500 flex-shrink-0" /> Historial de 7 días</p>
                  <p className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500 flex-shrink-0" /> Estado del dispositivo</p>
                </CardContent>
                <Button asChild className="bg-primary text-primary-foreground hover:opacity-90 rounded-2xl w-full">
                  <a href={REGISTRO_URL} target="_blank" rel="noopener noreferrer">Comenzar gratis</a>
                </Button>
              </Card>

              <Card className="rounded-2xl shadow-md p-6 text-center border-2 border-primary">
                <CardHeader className="p-0 mb-4">
                  <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mx-auto mb-2">
                    Recomendado
                  </div>
                  <CardTitle className="text-2xl font-semibold mb-1">Plan Premium</CardTitle>
                  <p className="text-3xl font-titan-one text-primary mt-2">
                    $4.990 <span className="text-base font-normal text-gray-400">/mes</span>
                  </p>
                  <CardDescription className="text-gray-500 mt-2 text-sm">
                    Máxima visibilidad sobre la salud de tu mascota con alertas y analítica avanzada.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-2 text-left mb-5">
                  <p className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500 flex-shrink-0" /> Todo lo del plan gratuito</p>
                  <p className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500 flex-shrink-0" /> Historial de 90 días</p>
                  <p className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500 flex-shrink-0" /> Alertas preventivas inteligentes</p>
                  <p className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500 flex-shrink-0" /> Analítica avanzada de hábitos</p>
                  <p className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500 flex-shrink-0" /> Multi-mascota</p>
                </CardContent>
                <Button asChild className="bg-primary text-primary-foreground hover:opacity-90 rounded-2xl w-full font-semibold">
                  <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer">Iniciar con Premium</a>
                </Button>
              </Card>
            </div>

            {/* Tabla comparativa */}
            <div className="px-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="text-left p-3 font-semibold text-gray-700 rounded-tl-xl">Funcionalidad</th>
                    <th className="text-center p-3 font-semibold text-gray-600 w-28">Gratuito</th>
                    <th className="text-center p-3 font-semibold text-primary rounded-tr-xl w-28">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {planFeatures.map(({ feature, free, premium }) => (
                    <tr key={feature} className="hover:bg-gray-50">
                      <td className="p-3 text-gray-700">{feature}</td>
                      <td className="p-3 text-center">
                        {free
                          ? <Check className="h-4 w-4 text-green-500 mx-auto" />
                          : <X className="h-4 w-4 text-gray-300 mx-auto" />}
                      </td>
                      <td className="p-3 text-center">
                        {premium
                          ? <Check className="h-4 w-4 text-green-500 mx-auto" />
                          : <X className="h-4 w-4 text-gray-300 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Early Adopter */}
          <Card className="bg-white">
            <div className="flex flex-col items-center gap-6 p-4 sm:p-6">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Únete al Programa Early Adopter</h2>
                <p className="mt-2 text-gray-600 max-w-xl mx-auto text-sm">
                  Sé uno de los primeros en transformar el cuidado de tu mascota. Tu feedback es clave para perfeccionar KittyPau.
                </p>
                <ul className="mt-6 space-y-4 inline-block text-left">
                  <li className="flex items-start gap-3">
                    <Gift className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Dispositivo + App Premium gratis</h4>
                      <p className="text-sm text-gray-500">Hardware KittyPau + acceso Premium sin costo por 12 meses.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Ayuda a prevenir enfermedades</h4>
                      <p className="text-sm text-gray-500">Tu mascota ayuda a validar una tecnología que puede cambiar la salud preventiva animal en Chile.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="aspect-video w-full max-w-lg mx-auto">
                <iframe
                  className="w-full h-full rounded-xl shadow-md"
                  src="https://www.youtube.com/embed/T3kVEl7CE7k"
                  title="KittyPau — Cómo funciona"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild className="bg-primary text-primary-foreground hover:opacity-90 rounded-2xl font-semibold px-6 py-3">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-Gr6pYmbmiPY7871SgSPRJ52ynLA1p6fL5Z6ZGhWTtLQQYw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                    Regístrate Ahora
                  </a>
                </Button>
                <Button variant="outline" asChild className="rounded-2xl px-6 py-3">
                  <a href="#">Leer Carta Compromiso</a>
                </Button>
              </div>
            </div>
          </Card>

          {/* Quiénes Somos */}
          <section id="quienes-somos" className="scroll-mt-20 py-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-3">Quiénes somos</h2>
            <p className="text-center text-gray-500 text-sm mb-10 max-w-2xl mx-auto">
              Somos IOT Chile SpA, una startup PetTech chilena construyendo la primera plataforma AIoT de salud preventiva para mascotas en Latinoamérica.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Card className="rounded-2xl shadow-md p-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Cpu className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base text-gray-800">Javier Dayne Ortiz</h3>
                  <p className="text-primary text-xs font-medium uppercase tracking-wide">CTO & Cofundador</p>
                  <p className="text-sm text-gray-600">Ingeniero en Automatización y Control Industrial. 15+ años en DCS, SCADA, IIoT y MQTT. Responsable del hardware ESP32, firmware y arquitectura completa del sistema.</p>
                </div>
              </Card>
              <Card className="rounded-2xl shadow-md p-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Database className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base text-gray-800">Mauricio Cárcamo Díaz</h3>
                  <p className="text-primary text-xs font-medium uppercase tracking-wide">CEO & Cofundador</p>
                  <p className="text-sm text-gray-600">Sociólogo con Diplomados en Data Science e IA. 6+ años en análisis de datos y estrategia comercial. Responsable de producto, analítica y estrategia de negocio.</p>
                </div>
              </Card>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-200 bg-gray-50 rounded-t-2xl">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">
              Contacto: <a href="mailto:kittypau.mascotas@gmail.com" className="text-primary hover:underline">kittypau.mascotas@gmail.com</a>
            </p>
            <div className="flex justify-center gap-4 mb-2">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Soporte</a>
            </div>
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} KittyPau · IOT Chile SpA · Con amor para tus mascotas 🐾
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}
