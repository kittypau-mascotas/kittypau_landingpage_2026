import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { earlyAdopterFormUrl, loginUrl } from "./landing.data";

export function PlansSection() {
  return (
    <section id="planes" className="rounded-2xl bg-gray-50 py-12 shadow-md">
      <h2 className="mb-2 text-center text-3xl font-titan-one text-foreground sm:text-4xl">
        Elige tu nivel de proteccion
      </h2>
      <p className="mx-auto mb-12 max-w-xl text-center text-sm text-gray-600">
        Hoy KittyPau tiene un solo nivel, gratuito, con acceso a todo lo que ya funciona.
        Premium es el paso siguiente y todavia esta en desarrollo — no hay cobro activo, solo
        lista de espera.
      </p>
      <div className="grid gap-8 px-4 text-foreground md:grid-cols-2">
        <Card className="rounded-2xl p-6 text-center shadow-md">
          <CardHeader className="mb-4 p-0">
            <CardTitle className="mb-2 text-2xl font-titan-one text-foreground">
              Hoy — Gratuito
            </CardTitle>
            <CardDescription className="text-gray-600">
              Todo lo que ya funciona en KittyPau, disponible para cualquier cuenta registrada.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 p-0 text-left">
            <p className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" /> Datos en tiempo real
            </p>
            <p className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" /> Estado del dispositivo (bateria, WiFi)
            </p>
            <p className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" /> Registro de alimentacion e hidratacion
            </p>
            <p className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" /> Historial de lecturas
            </p>
          </CardContent>
          <div className="mt-6">
            <Button
              asChild
              className="w-full rounded-2xl border-none bg-[hsl(var(--accent-green)/0.8)] font-semibold text-foreground hover:opacity-100"
            >
              <a href={loginUrl} target="_blank" rel="noopener noreferrer">
                Prueba Gratis Ahora
              </a>
            </Button>
          </div>
        </Card>
        <Card className="rounded-2xl p-6 text-center shadow-md">
          <CardHeader className="mb-4 p-0">
            <CardTitle className="mb-2 text-2xl font-titan-one text-foreground">
              Premium — en desarrollo
            </CardTitle>
            <CardDescription className="text-gray-600">
              El siguiente nivel de KittyPau: alertas mas anticipadas, construidas sobre el
              mismo motor que ya procesa los datos reales.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 p-0 text-left">
            <p className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" /> Alertas de riesgo de deshidratacion
            </p>
            <p className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" /> Alertas de cambios de conducta alimentaria
            </p>
            <p className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" /> Seguimiento de riesgo de sobrepeso
            </p>
          </CardContent>
          <div className="mt-6">
            <Button
              asChild
              className="min-h-[52px] w-full rounded-2xl bg-primary px-6 py-3 text-lg font-titan-one text-primary-foreground shadow-md hover:opacity-90"
            >
              <a href={earlyAdopterFormUrl} target="_blank" rel="noopener noreferrer">
                Sumate a la lista de espera
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
