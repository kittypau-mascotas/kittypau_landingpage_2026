import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { carouselImages } from "./landing.data";

export function LandingCarousel() {
  const [hoveredItem, setHoveredItem] = React.useState<{
    src: string;
    index: number;
  } | null>(null);

  return (
    <div className="-mt-8 relative w-full overflow-visible py-12">
      <Carousel
        opts={{ align: "start", loop: true, dragFree: true, watchDrag: true }}
        plugins={[
          AutoScroll({
            speed: 1.05,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent className="-ml-2 overflow-visible py-4">
          {carouselImages.map((src, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 overflow-visible pl-2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            >
              <motion.div
                layout
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredItem({ src, index })}
                onMouseLeave={() => setHoveredItem(null)}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  zIndex: 30,
                }}
                transition={{
                  type: "spring",
                  stiffness: 170,
                  damping: 26,
                }}
                className="group relative z-10 overflow-visible rounded-[1.5rem] border border-white/80 bg-white/80 p-2 shadow-[0_16px_40px_rgba(15,23,42,0.10)] backdrop-blur-sm"
              >
                <motion.div
                  layout="position"
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.15rem] bg-gradient-to-br from-gray-50 to-white"
                >
                  <motion.img
                    layout="position"
                    layoutId={`carousel-image-${index}`}
                    src={src}
                    alt={`KittyPau evolucion ${index + 1}`}
                    className="absolute inset-0 h-full w-full object-contain p-2"
                    loading="lazy"
                    draggable={false}
                  />
                </motion.div>
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
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />

            <motion.img
              layout
              layoutId={`carousel-image-${hoveredItem.index}`}
              src={hoveredItem.src}
              alt={`KittyPau evolucion ${hoveredItem.index + 1}`}
              className="relative max-h-[82vh] max-w-[82vw] rounded-[1.5rem] border border-white/90 bg-white/95 object-contain p-2 shadow-[0_40px_120px_rgba(15,23,42,0.35)]"
              initial={{ scale: 0.94, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 12 }}
              transition={{ type: "spring", stiffness: 160, damping: 24 }}
              draggable={false}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
