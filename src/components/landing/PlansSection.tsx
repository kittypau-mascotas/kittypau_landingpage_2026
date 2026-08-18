import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { planFeatures, loginUrl } from "./landing.data";

export function PlansSection() {
  return (
    <section id="planes" className="rounded-2xl bg-gray-50 py-12 shadow-md">
      <h2 className="mb-12 text-center text-3xl font-titan-one text-foreground sm:text-4xl">
        Elige tu nivel de proteccion
      </h2>
      <div className="grid gap-8 px-4 text-foreground md:grid-cols-2">
        <Card className="rounded-2xl p-6 text-center shadow-md">
          <CardHeader className="mb-4 p-0">
            <CardTitle className="mb-2 text-2xl font-titan-one text-foreground">
              Proteccion Basica
            </CardTitle>
            <CardDescription className="text-gray-600">
              Ideal para comenzar a cuidar a tu mascota sin costo alguno.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 p-0 text-left">
            <p className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" /> 1 dispositivo
            </p>
            <p className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" /> Acceso a lectura basica
            </p>
            <p className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" /> Monitoreo simple
            </p>
            <p className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" /> Entrada al ecosistema KittyPau
            </p>
          </CardContent>
          <div className="mt-6">
            <Button
              asChild
              className="w-full rounded-2xl border-none bg-[hsl(var(--accent-green))/0.8] font-semibold text-foreground hover:opacity-100"
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
              Proteccion Total
            </CardTitle>
            <CardDescription className="text-gray-600">
              Alertas criticas e historial avanzado para una tranquilidad absoluta.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 p-0 text-left">
            <p className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" /> Historial extendido
            </p>
            <p className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" /> Analiticas avanzadas
            </p>
            <p className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" /> Alertas criticas
            </p>
            <p className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" /> Mejor visibilidad de patrones
            </p>
          </CardContent>
          <div className="mt-6">
            <Button
              asChild
              className="min-h-[52px] w-full rounded-2xl bg-primary px-6 py-3 text-lg font-titan-one text-primary-foreground shadow-md hover:opacity-90"
            >
              <a href={loginUrl} target="_blank" rel="noopener noreferrer">
                Asegura tu Proteccion Premium
              </a>
            </Button>
          </div>
        </Card>
      </div>

      <div className="mt-12 overflow-x-auto px-4">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-primary/10">
              <th className="rounded-tl-xl p-3 text-left font-semibold text-gray-600">
                Funcionalidad
              </th>
              <th className="w-28 p-3 text-center font-semibold text-gray-600">Gratuito</th>
              <th className="w-28 rounded-tr-xl p-3 text-center font-semibold text-primary">
                Premium
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {planFeatures.map((item) => (
              <tr key={item.feature} className="transition-colors hover:bg-gray-50/50">
                <td className="p-3 font-medium text-gray-600">{item.feature}</td>
                <td className="p-3 text-center">
                  {item.free ? (
                    <Check className="mx-auto h-4 w-4 text-green-500" />
                  ) : (
                    <X className="mx-auto h-4 w-4 text-gray-300" />
                  )}
                </td>
                <td className="p-3 text-center">
                  {item.premium ? (
                    <Check className="mx-auto h-4 w-4 text-green-500" />
                  ) : (
                    <X className="mx-auto h-4 w-4 text-gray-300" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
