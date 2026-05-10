import { Brain, Cpu, Smartphone } from "lucide-react";

export function FlowSection() {
  return (
    <section className="py-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-2">Del plato a la alerta preventiva</h2>
      <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto text-sm">Asi transforma KittyPau los datos de tu mascota en informacion util</p>
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
          <p className="text-xs text-gray-400 mt-1">ML · Patrones · Anomalias</p>
        </div>
        <div className="text-gray-300 text-3xl mx-3 rotate-90 md:rotate-0">›</div>
        <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-5 w-40">
          <Smartphone className="h-12 w-12 text-green-400 mb-3" />
          <p className="font-semibold text-green-500 text-sm">Tu App</p>
          <p className="text-xs text-gray-400 mt-1">Dashboard · Alertas · Historial</p>
        </div>
      </div>
    </section>
  );
}
