import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { featuredVideoId } from "./landing.data";

const DISMISS_KEY = "kittypau_video_widget_closed";

export function FloatingVideoWidget() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY) !== "1") {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 hidden w-72 overflow-hidden rounded-2xl bg-black shadow-2xl sm:block">
      <button
        type="button"
        onClick={() => {
          sessionStorage.setItem(DISMISS_KEY, "1");
          setVisible(false);
        }}
        aria-label="Cerrar video"
        className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
      >
        <X className="h-4 w-4" />
      </button>
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${featuredVideoId}?autoplay=1&mute=1&playsinline=1&rel=0`}
          title="Video Kittypau — Semilla Inicia Corfo 2026"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
