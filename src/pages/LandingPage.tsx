import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import {
  Gift, CheckCircle, Video, Heart, Activity, Shield, Instagram, Youtube, Linkedin, Check,
  Thermometer, Droplet, UtensilsCrossed, BatteryCharging, Wifi,
  Plug, Link, MonitorDot, ArrowRight
} from 'lucide-react';
import Autoplay from "embla-carousel-autoplay"
import bandida from '@/assets/bandida.png'; // Assuming bandida.png is in src/assets
import { cn } from '@/lib/utils';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart, Area, Legend
} from 'recharts';
const carouselImages = [
  "/carousel-images/1.jpg",
  "/carousel-images/2.jpg",
  "/carousel-images/3.png",
  "/carousel-images/4.jpg",
  "/carousel-images/5.jpg",
  "/carousel-images/6.jpg",
  "/carousel-images/7.jpg",
  "/carousel-images/8.jpg",
];

export default function LandingPage() {
  // Dummy data for charts
  const activityData = [
    { name: 'Lun', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Mar', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mié', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Jue', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Vie', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Sáb', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Dom', uv: 3490, pv: 4300, amt: 2100 },
  ];

  const consumptionData = [
    { name: '00:00', food: 100, water: 200 },
    { name: '06:00', food: 150, water: 250 },
    { name: '12:00', food: 200, water: 300 },
    { name: '18:00', food: 120, water: 220 },
    { name: '23:59', food: 80, water: 180 },
  ];

  return (
    <div className="min-h-screen bg-white font-varela-round"> {/* Changed bg-gray-50 to bg-white, added font-varela-round */}
      {/* Main Navbar Section */}
      <nav className="bg-white/60 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-titan-one text-primary">KittyPau</h1> {/* Textual Logo */}
            <div className="hidden md:flex space-x-4 text-gray-700">
              <a href="#caracteristicas" className="hover:text-primary transition-colors">Características</a>
              <a href="#como-funciona" className="hover:text-primary transition-colors">Cómo funciona</a>
              <a href="#planes" className="hover:text-primary transition-colors">Planes</a>
            </div>
          </div>
          <Button asChild className="bg-primary text-primary-foreground hover:opacity-90 rounded-2xl px-6 py-3 shadow-md">
            <a href="/login">Iniciar Sesión</a>
          </Button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8"> {/* Added py-8 for spacing */}
        
        {/* Social Navbar Section */}
        {/* Moved social links to a separate, less prominent section or removed if not needed per spec.
            For now, keeping it as a separate block, but it's not the main navbar. */}
        <nav className="bg-[#F87A6D]/60 backdrop-blur-sm rounded-full p-2 mb-8 max-w-min mx-auto"> {/* Adjusted margin-bottom */}
          <div className="flex items-center gap-2">
            <a href="https://www.instagram.com/kittypau.mascotas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Button variant="ghost" size="icon" className="text-white hover:text-white/80 transition-colors duration-300">
                <Instagram className="h-6 w-6" /> {/* Reduced icon size */}
              </Button>
            </a>
            <a href="https://www.youtube.com/channel/UCYrN8v3Lb5n1B0L2QeOEcxA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Button variant="ghost" size="icon" className="text-white hover:text-white/80 transition-colors duration-300">
                <Youtube className="h-6 w-6" /> {/* Reduced icon size */}
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/kittypau-mascotas-26289539a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Button variant="ghost" size="icon" className="text-white hover:text-white/80 transition-colors duration-300">
                <Linkedin className="h-6 w-6" /> {/* Reduced icon size */}
              </Button>
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="py-16 md:py-24 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-[40px] font-titan-one text-primary leading-tight">
                Monitoreo inteligente para tu mascota
              </h1>
              <p className="text-lg text-gray-700 font-varela-round">
                Acompañamos el bienestar de tu mascota con datos en tiempo real, para que puedas actuar antes de que un cambio se convierta en un problema.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild className="bg-primary text-primary-foreground hover:opacity-90 rounded-2xl px-8 py-4 text-lg shadow-md">
                  <a href="/login">Empieza ahora</a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl px-8 py-4 text-lg">
                  <a href="#planes">Ver planes</a>
                </Button>
              </div>
              <div className="mt-6 text-sm text-gray-500 space-y-1">
                <p className="flex items-center justify-center md:justify-start gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Datos reales del dispositivo</p>
                <p className="flex items-center justify-center md:justify-start gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Pensado para hogares y pilotos reales</p>
                <p className="flex items-center justify-center md:justify-start gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Conectado a tu ecosistema KittyPau</p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={bandida} alt="Mascota con dispositivo KittyPau" className="max-w-full h-auto rounded-2xl shadow-md" />
            </div>
          </div>
        </section>

        <main className="space-y-16 pb-8"> {/* Increased space-y for more air */}
          {/* Features Section */}
          <section id="caracteristicas" className="py-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">Características</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="rounded-2xl shadow-md p-6 text-center">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <Thermometer className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-xl font-semibold">Monitoreo en tiempo real</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    Sensores de temperatura y humedad permiten entender el ambiente que rodea a tu mascota y detectar variaciones relevantes desde el dashboard.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-md p-6 text-center">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <UtensilsCrossed className="h-10 w-10 text-green-500 mb-2" />
                  <CardTitle className="text-xl font-semibold">Control de alimentación</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    El sensor de peso registra la ingesta y permite ver cuánto consume tu mascota, usando el dato `weightGrams` de la telemetría del sistema.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-md p-6 text-center">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <BatteryCharging className="h-10 w-10 text-amber-500 mb-2" />
                  <CardTitle className="text-xl font-semibold">Estado del dispositivo</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    Consulta nivel de batería, conexión Wi-Fi y última lectura para saber si el dispositivo está operativo y enviando datos.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-md p-6 text-center">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <Shield className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-xl font-semibold">Prevención con datos</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    KittyPau no solo captura lecturas: transforma comportamiento cotidiano en información útil para decisiones de cuidado.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Dashboard Preview Section */}
          <section id="dashboard-preview" className="py-12 bg-gray-50 rounded-2xl shadow-md">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">Así se ve el seguimiento de tu mascota</h2>
            <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
              Histórico simple, claro y accionable. Diseñado para leer el estado en segundos.
            </p>
            <div className="grid md:grid-cols-2 gap-8 px-4">
              <Card className="rounded-2xl shadow-md p-4 bg-white">
                <CardTitle className="text-lg font-semibold mb-4">Actividad Diaria</CardTitle>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={activityData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
                <CardDescription className="text-center mt-4">
                  Monitoreo de actividad a lo largo de la semana.
                </CardDescription>
              </Card>
              <Card className="rounded-2xl shadow-md p-4 bg-white">
                <CardTitle className="text-lg font-semibold mb-4">Consumo de Alimento y Agua</CardTitle>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={consumptionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="food" stroke="#82ca9d" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="water" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
                <CardDescription className="text-center mt-4">
                  Registro de ingesta de alimento y agua por hora.
                </CardDescription>
              </Card>
            </div>
          </section>

          {/* How It Works Section */}
          <section id="como-funciona" className="py-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">Cómo funciona</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <Card className="rounded-2xl shadow-md p-6">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <Plug className="h-12 w-12 text-primary mb-2" />
                  <CardTitle className="text-xl font-semibold">1. Conecta</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    Configura tu dispositivo ESP32 y prepáralo para capturar datos de tu mascota.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-md p-6">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <Link className="h-12 w-12 text-green-500 mb-2" />
                  <CardTitle className="text-xl font-semibold">2. Vincula</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    Registra a tu mascota en la plataforma y asocia el dispositivo con su perfil.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-md p-6">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <MonitorDot className="h-12 w-12 text-amber-500 mb-2" />
                  <CardTitle className="text-xl font-semibold">3. Monitorea</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    Recibe datos en tiempo real mediante la capa IoT del sistema y visualízalos en el dashboard.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Plans Section */}
          <section id="planes" className="py-12 bg-gray-50 rounded-2xl shadow-md">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">Nuestros Planes</h2>
            <div className="grid md:grid-cols-2 gap-8 px-4">
              <Card className="rounded-2xl shadow-md p-6 text-center">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-semibold mb-2">Plan Gratuito</CardTitle>
                  <CardDescription className="text-gray-600">
                    Monitoreo básico de un dispositivo para empezar a conocer el valor del sistema.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-2 text-left">
                  <p className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> 1 dispositivo</p>
                  <p className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> Acceso a lectura básica</p>
                  <p className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> Monitoreo simple</p>
                  <p className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> Entrada al ecosistema KittyPau</p>
                </CardContent>
                <div className="mt-6">
                  <Button asChild className="bg-primary text-primary-foreground hover:opacity-90 rounded-2xl px-6 py-3 shadow-md w-full">
                    <a href="/login">Ver detalles</a>
                  </Button>
                </div>
              </Card>
              <Card className="rounded-2xl shadow-md p-6 text-center">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-semibold mb-2">Plan Premium</CardTitle>
                  <CardDescription className="text-gray-600">
                    Ideal para quienes quieren más historial, mejores analíticas y alertas críticas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-2 text-left">
                  <p className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> Historial extendido</p>
                  <p className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> Analíticas avanzadas</p>
                  <p className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> Alertas críticas</p>
                  <p className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> Mejor visibilidad de patrones</p>
                </CardContent>
                <div className="mt-6">
                  <Button asChild className="bg-primary text-primary-foreground hover:opacity-90 rounded-2xl px-6 py-3 shadow-md w-full">
                    <a href="/login">Iniciar Sesión</a>
                  </Button>
                </div>
              </Card>
            </div>
          </section>

          {/* Early Adopter Section */}
          <Card className="bg-white">
            <div className="flex flex-col items-center gap-8 p-4 sm:p-6">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Únete a nuestro Programa Early Adopter</h2>
                <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                  Sé uno de los primeros en transformar el cuidado de tu mascota. Tu feedback es clave para perfeccionar Kittypau.
                </p>
                <ul className="mt-6 space-y-4 inline-block text-left">
                  <li className="flex items-start gap-3">
                    <Gift className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Dispositivo y App Premium Gratis</h4>
                      <p className="text-sm text-gray-500">Recibe el dispositivo y acceso a la App Premium sin costo por 12 meses.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Valida una Solución Innovadora</h4>
                      <p className="text-sm text-gray-500">Ayúdanos a prevenir enfermedades y a validar el producto comercialmente.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="aspect-video w-full max-w-lg mx-auto">
                <iframe
                  className="w-full h-full rounded-lg shadow-md"
                  src="https://www.youtube.com/embed/T3kVEl7CE7k"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8"> {/* Added mt-8 for spacing */}
                <Button asChild className="bg-primary text-primary-foreground hover:opacity-90">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-Gr6pYmbmiPY7871SgSPRJ52ynLA1p6fL5Z6ZGhWTtLQQYw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">Regístrate Ahora</a>
                </Button>
                <Button variant="outline"><a href="#">Leer Carta Compromiso</a></Button>
              </div>
            </div>
          </Card>
        </main>

        {/* Footer Section */}
        <footer className="py-8 border-t border-gray-200 bg-gray-50"> {/* Added bg-gray-50 and adjusted padding */}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">
              Contacto: <a href="mailto:kittypau.mascotas@gmail.com" className="text-primary hover:underline">kittypau.mascotas@gmail.com</a>
            </p>
            <div className="flex justify-center gap-4 mb-2">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">Privacidad</a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">Soporte</a>
            </div>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} KittyPau - Con amor para tus mascotas.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}