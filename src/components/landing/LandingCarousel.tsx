import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { carouselImages } from "./landing.data";

export function LandingCarousel() {
  const [hoveredItem, setHoveredItem] = React.useState<{
    src: string;
    index: number;
    rotateDeg?: number;
  } | null>(null);

  return (
    <div className="-mt-8 relative w-full overflow-visible py-12">
      <Carousel
        opts={{ align: "start", loop: true, dragFree: true, watchDrag: true }}
        plugins={[
          AutoScroll({
            speed: 0.8,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
      >
        <CarouselContent className="-ml-2 overflow-visible py-4">
          {carouselImages.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 overflow-visible pl-2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            >
              <motion.div
                layout
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredItem({ src: item.src, index, rotateDeg: item.rotateDeg })}
                onMouseLeave={() => setHoveredItem(null)}
                whileHover={{
                  y: -12,
                  scale: 1.015,
                  zIndex: 30,
                }}
                transition={{
                  type: "spring",
                  stiffness: 170,
                  damping: 26,
                }}
                className="relative flex items-center justify-center aspect-[4/3] w-full overflow-hidden rounded-2xl"
              >
                <motion.img
                  layoutId={`carousel-image-${index}`}
                  src={item.src}
                  alt={`KittyPau evolucion ${index + 1}`}
                  className="block h-full w-full select-none object-cover origin-center shadow-sm"
                  style={
                    item.rotateDeg
                      ? {
                          rotate: `${item.rotateDeg}deg`,
                          scale: 1.4, // Aumentamos escala para que fotos verticales rotadas llenen el marco horizontal
                          backfaceVisibility: "hidden",
                          transform: "translateZ(0)",
                        }
                      : {
                          backfaceVisibility: "hidden",
                          transform: "translateZ(0)",
                        }
                  }
                  loading="eager"
                  draggable={false}
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <AnimatePresence initial={false} mode="wait">
        {hoveredItem ? (
          <motion.div
            key={`hovered-${hoveredItem.index}`}
            className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center overflow-visible"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              layoutId={`carousel-image-${hoveredItem.index}`}
              src={hoveredItem.src}
              alt={`KittyPau evolucion ${hoveredItem.index + 1}`}
            className="relative max-h-[85vh] max-w-[90vw] select-none object-contain origin-center rounded-3xl shadow-2xl"
              initial={{ scale: 0.94, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 12 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            style={
              hoveredItem.rotateDeg
                ? {
                    rotate: `${hoveredItem.rotateDeg}deg`,
                    backfaceVisibility: "hidden",
                    transform: "translateZ(0)",
                    // En la vista ampliada usamos object-contain para ver la foto completa sin recortes
                  }
                : {
                    backfaceVisibility: "hidden",
                    transform: "translateZ(0)",
                  }
            }
              draggable={false}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
