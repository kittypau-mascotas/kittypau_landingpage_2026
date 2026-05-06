import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Video } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { SectionHeading } from "./SectionHeading";
import { postulationVideos } from "./landing.data";

export function PostulacionesSection() {
  return (
    <SectionShell id="postulaciones" className="py-12">
      <SectionHeading
        title="Validación e Innovación"
        description="Conoce más sobre nuestro proyecto a través de los videos presentados en nuestras postulaciones a fondos de innovación."
        centered
        className="mb-12"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {postulationVideos.map((video) => (
          <Card key={video.title} className="rounded-2xl shadow-md p-6 text-center border-none bg-primary/10 flex flex-col justify-between h-full">
            <div>
              <Video className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-titan-one text-lg text-foreground mb-2">{video.title}</h4>
              <p className="text-sm text-foreground/80 mb-6">{video.subtitle}</p>
            </div>
            <Button variant="outline" className="rounded-2xl border-primary text-primary hover:bg-primary hover:text-white w-full" asChild>
              <a href={video.href} target="_blank" rel="noopener noreferrer">Ver Video</a>
            </Button>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

