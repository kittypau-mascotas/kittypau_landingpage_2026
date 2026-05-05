import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import {
  Gift, CheckCircle, Video, Heart, Activity, Shield, Instagram, Youtube, Linkedin, Check,
  Thermometer, Droplet, UtensilsCrossed, BatteryCharging, Wifi,
  Plug, Link, MonitorDot, ArrowRight
} from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";
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
          <Button asChild className="bg-primary text-primary-foreground hover:opacity-90 rounded-2xl px-6 py-3 shadow-md min-h-[48px]">
            <a href="/login">Prueba Gratis Ahora</a>
          </Button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8"> {/* Added py-8 for spacing */}
        {/* Hero Section */}
        <section id="hero" className="py-16 md:py-24 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-[40px] font-titan-one text-primary leading-tight">
                Protege a tu mascota: Monitoreo de salud preventivo en tiempo real
              </h1>
              <p className="text-lg text-gray-700 font-varela-round">
                No esperes a que aparezcan los síntomas. KittyPau detecta cambios sutiles en la hidratación y alimentación antes de que se conviertan en cirugías costosas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild className="bg-primary text-primary-foreground hover:opacity-90 rounded-2xl px-8 py-4 text-lg shadow-md min-h-[48px]">
                  <a href="/login">Empieza a Cuidar Gratis</a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl px-8 py-4 text-lg min-h-[48px]">
                  <a href="#planes">Ver Planes de Prevención</a>
                </Button>
              </div>
              <div className="mt-6 text-sm text-gray-500 space-y-1">
                <p className="flex items-center justify-center md:justify-start gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Evidencia visual de salud diaria</p>
                <p className="flex items-center justify-center md:justify-start gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Instalación en menos de 5 minutos</p>
                <p className="flex items-center justify-center md:justify-start gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Garantía de tranquilidad absoluta</p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center"> {/* Changed src to direct public path */}
              <img src="/illustrations/bandida.png" alt="Mascota con dispositivo KittyPau" className="max-w-full h-auto rounded-2xl shadow-md" loading="eager" />
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
                  <CardTitle className="text-xl font-semibold">Entorno Seguro</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    Detecta olas de calor o frío extremo en segundos. Mantén el microclima de tu mascota bajo control constante y evita golpes de calor.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-md p-6 text-center">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <UtensilsCrossed className="h-10 w-10 text-green-500 mb-2" /> {/* Kept green for food icon */}
                  <CardTitle className="text-xl font-semibold">Nutrición Precisa</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    Reduce el desperdicio y previene la obesidad o desnutrición. Monitorea gramos exactos consumidos cada día de forma automática.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-md p-6 text-center">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <BatteryCharging className="h-10 w-10 text-amber-500 mb-2" /> {/* Kept amber for battery icon */}
                  <CardTitle className="text-xl font-semibold">Conexión Total</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    Batería de larga duración y alertas instantáneas de desconexión. Tu tranquilidad nunca se queda sin energía ni supervisión.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-md p-6 text-center">
                <CardHeader className="flex flex-col items-center p-0 mb-4">
                  <Shield className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-xl font-semibold">IA Preventiva</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-gray-600">
                    Transformamos datos en alarmas tempranas para tu veterinario. El 80% de las enfermedades crónicas son tratables si se detectan a tiempo.
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
                    <Area type="monotone" dataKey="uv" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} isAnimationActive={false} />
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
                    <Line type="monotone" dataKey="food" stroke="#82ca9d" activeDot={{ r: 8 }} isAnimationActive={false} />
                    <Line type="monotone" dataKey="water" stroke="#8884d8" isAnimationActive={false} />
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
                  <Link className="h-12 w-12 text-green-500 mb-2" /> {/* Kept green for link icon */}
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
                  <MonitorDot className="h-12 w-12 text-amber-500 mb-2" /> {/* Kept amber for monitor icon */}
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

          {/* New Testimonials Section for Social Proof (Added per best practices) */}
          <section id="testimonios" className="py-12">
            <h2 className="text-3xl sm:text-4xl font-titan-one text-center text-primary mb-12">Lo que dicen los dueños</h2>
            <div className="grid md:grid-cols-2 gap-8 px-4">
              <Card className="rounded-2xl shadow-md p-6 bg-white italic border-l-4 border-primary">
                <CardContent className="p-0">
                  <p className="text-gray-700 mb-4">
                    "Gracias a KittyPau detectamos que 'Luna' no estaba tomando agua antes de que se deshidratara. Nos ahorró una cirugía de urgencia y mucho estrés."
                  </p>
                  <div className="flex items-center gap-3 not-italic">
                    <div className="h-10 w-10 bg-gray-200 rounded-full" />
                    <div>
                      <p className="font-bold text-sm">Carolina M.</p>
                      <p className="text-xs text-gray-500">Dueña de Gato Senior</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-md p-6 bg-white italic border-l-4 border-green-500">
                <CardContent className="p-0">
                  <p className="text-gray-700 mb-4">
                    "El control de peso es increíblemente preciso. He podido ajustar la dieta de Rocky y ha bajado 500g en un mes de forma saludable."
                  </p>
                  <div className="flex items-center gap-3 not-italic">
                    <div className="h-10 w-10 bg-gray-200 rounded-full" />
                    <div>
                      <p className="font-bold text-sm">Ricardo P.</p>
                      <p className="text-xs text-gray-500">Pet Parent Proactivo</p>
                    </div>
                  </div>
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
                  <Button asChild className="bg-primary text-primary-foreground hover:opacity-90 rounded-2xl px-6 py-3 shadow-md w-full min-h-[52px] text-lg font-bold">
                    <a href="/login">Prueba Gratis Ahora</a>
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
                  <Button asChild className="bg-primary text-primary-foreground hover:opacity-90 rounded-2xl px-6 py-3 shadow-md w-full min-h-[52px] text-lg font-bold">
                    <a href="/login">Asegura tu Protección Premium</a>
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
                    <div> {/* Changed text color to primary for consistency */}
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
                <Button asChild className="bg-primary text-primary-foreground hover:opacity-90 min-h-[52px] px-8 text-lg font-bold">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-Gr6pYmbmiPY7871SgSPRJ52ynLA1p6fL5Z6ZGhWTtLQQYw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">Quiero ser Early Adopter</a>
                </Button>
                <Button variant="outline"><a href="#">Leer Carta Compromiso</a></Button>
              </div>
            </div>
          </Card>

          {/* Postulaciones Section */}
          <section id="postulaciones" className="py-12">
            <h2 className="text-3xl sm:text-4xl font-titan-one text-center text-primary mb-6">Nuestras Postulaciones</h2>
            <p className="text-center text-gray-600 mb-12 font-varela-round max-w-2xl mx-auto">
              Conoce más sobre nuestro proyecto a través de los videos presentados en nuestras postulaciones a fondos de innovación.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
              <Card className="rounded-2xl shadow-md p-6 text-center border-none bg-primary/10 flex flex-col justify-between h-full">
                <div>
                  <Video className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-titan-one text-lg text-primary mb-2">Demo 2 min.</h4>
                  <p className="text-sm text-gray-600 mb-6 font-varela-round">Semilla Inicia Corfo 2025</p>
                </div>
                <Button variant="outline" className="rounded-2xl border-primary text-primary hover:bg-primary hover:text-white w-full" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">Ver Video</a>
                </Button>
              </Card>
              <Card className="rounded-2xl shadow-md p-6 text-center border-none bg-primary/10 flex flex-col justify-between h-full">
                <div>
                  <Video className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-titan-one text-lg text-primary mb-2">Pitch 40 seg.</h4>
                  <p className="text-sm text-gray-600 mb-6 font-varela-round">Semilla Inicia Corfo 2025</p>
                </div>
                <Button variant="outline" className="rounded-2xl border-primary text-primary hover:bg-primary hover:text-white w-full" asChild>
                  <a href="https://www.youtube.com/watch?v=0LV1gTPgNlI" target="_blank" rel="noopener noreferrer">Ver Video</a>
                </Button>
              </Card>
              <Card className="rounded-2xl shadow-md p-6 text-center border-none bg-primary/10 flex flex-col justify-between h-full">
                <div>
                  <Video className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-titan-one text-lg text-primary mb-2">Pitch 90 seg.</h4>
                  <p className="text-sm text-gray-600 mb-6 font-varela-round">Start-Up Build Corfo 2025</p>
                </div>
                <Button variant="outline" className="rounded-2xl border-primary text-primary hover:bg-primary hover:text-white w-full" asChild>
                  <a href="https://youtu.be/cYCQu3vZ6po" target="_blank" rel="noopener noreferrer">Ver Video</a>
                </Button>
              </Card>
            </div>
          </section>
        </main>

        {/* Footer Section */}
        <footer className="py-8 border-t border-gray-200 bg-gray-50"> {/* Added bg-gray-50 and adjusted padding */}
          <div className="text-center">
            <div className="flex justify-center gap-6 mb-6">
              <a href="https://www.instagram.com/kittypau.mascotas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-primary transition-colors" />
              </a>
              <a href="https://www.youtube.com/channel/UCYrN8v3Lb5n1B0L2QeOEcxA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="h-6 w-6 text-gray-400 hover:text-primary transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/kittypau-mascotas-26289539a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-primary transition-colors" />
              </a>
            </div>
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