import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Gift } from "lucide-react";
import { VideoEmbedCard } from "./VideoEmbedCard";
import { earlyAdopterFormUrl } from "./landing.data";

export function EarlyAdopterSection() {
  return (
    <Card className="bg-white">
      <div className="flex flex-col items-center gap-8 p-4 sm:p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Unete a nuestro Programa Early Adopter
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-foreground/80">
            Se uno de los primeros en transformar el cuidado de tu mascota. Tu feedback es clave
            para perfeccionar Kittypau.
          </p>
          <ul className="mt-6 inline-block space-y-4 text-left">
            <li className="flex items-start gap-3">
              <Gift className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h4 className="font-semibold text-foreground">Acceso anticipado</h4>
                <p className="text-sm text-foreground/70">
                  Sé de los primeros en probar el dispositivo real y las funciones que vamos
                  liberando, antes que el resto.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
              <div>
                <h4 className="font-semibold">Valida una Solucion Innovadora</h4>
                <p className="text-sm text-foreground/70">
                  Ayudanos a prevenir enfermedades y a validar el producto comercialmente.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="mx-auto aspect-video w-full max-w-lg">
          <VideoEmbedCard
            src="https://www.youtube.com/embed/T3kVEl7CE7k"
            title="KittyPau — Programa Early Adopter"
          />
        </div>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            asChild
            className="min-h-[52px] px-8 text-lg font-bold bg-primary text-primary-foreground hover:opacity-90"
          >
            <a href={earlyAdopterFormUrl} target="_blank" rel="noopener noreferrer">
              Quiero ser Early Adopter
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}
