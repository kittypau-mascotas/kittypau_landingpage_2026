import { Card } from "@/components/ui/card";

type VideoEmbedCardProps = {
  src: string;
  title: string;
};

export function VideoEmbedCard({ src, title }: VideoEmbedCardProps) {
  return (
    <Card className="rounded-2xl shadow-md overflow-hidden">
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full"
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Card>
  );
}

