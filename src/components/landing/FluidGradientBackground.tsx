import * as React from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

export function FluidGradientBackground() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 98, mass: 1.1 });
  const smoothY = useSpring(pointerY, { stiffness: 70, damping: 108, mass: 1.1 });

  const floatLeftX = useTransform(smoothX, [-1, 1], [-28, 34]);
  const floatLeftY = useTransform(smoothY, [-1, 1], [-18, 22]);
  const floatRightX = useTransform(smoothX, [-1, 1], [22, -30]);
  const floatRightY = useTransform(smoothY, [-1, 1], [-14, 24]);
  const floatBottomX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const floatBottomY = useTransform(smoothY, [-1, 1], [18, -18]);

  React.useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const start = animate(pointerX, [100, 0.18, -0.16, 0.08, 0], {
      duration: 16,
      repeat: Infinity,
      ease: "easeInOut",
    });

    const startY = animate(pointerY, [0, -0.14, 0.12, -0.08, 0], {
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    });

    return () => {
      start.stop();
      startY.stop();
    };
  }, [pointerX, pointerY, reduceMotion]);

  React.useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const media = window.matchMedia("(pointer: fine)");

    const handlePointerMove = (event: PointerEvent) => {
      if (!media.matches) return;

      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      pointerX.set(x);
      pointerY.set(y);
    };

    const handlePointerLeave = () => {
      if (!media.matches) return;
      pointerX.set(0);
      pointerY.set(0);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [pointerX, pointerY, reduceMotion]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,216,228,0.45),transparent_35%),radial-gradient(circle_at_top_right,rgba(208,248,226,0.35),transparent_32%),radial-gradient(circle_at_60%_80%,rgba(255,236,205,0.28),transparent_30%)]" />

      <motion.div
        aria-hidden="true"
        className="absolute -left-20 top-[-1rem] h-[14rem] w-[14rem] rounded-full blur-2xl sm:-left-20 sm:top-[-1.5rem] sm:h-[20rem] sm:w-[20rem] sm:blur-3xl md:-left-28 md:top-[-2rem] md:h-[30rem] md:w-[30rem]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.68) 0%, hsl(var(--primary) / 0.26) 34%, hsl(var(--primary) / 0) 72%)",
          x: floatLeftX,
          y: floatLeftY,
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.12, 0.98, 1],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />

      <motion.div
        aria-hidden="true"
        className="absolute right-[-5rem] top-[-1rem] h-[14rem] w-[14rem] rounded-full bg-[radial-gradient(circle,rgba(122,239,179,0.58)_0%,rgba(122,239,179,0.2)_36%,rgba(122,239,179,0)_72%)] blur-2xl sm:right-[-6rem] sm:top-[-1rem] sm:h-[22rem] sm:w-[22rem] sm:blur-3xl md:right-[-10rem] md:top-[-1rem] md:h-[34rem] md:w-[34rem]"
        style={{
          x: floatRightX,
          y: floatRightY,
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.08, 0.96, 1],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />

      <motion.div
        aria-hidden="true"
        className="absolute bottom-[-4rem] left-1/2 h-[12rem] w-[12rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,199,91,0.46)_0%,rgba(255,199,91,0.14)_36%,rgba(255,199,91,0)_72%)] blur-2xl sm:bottom-[-5rem] sm:h-[18rem] sm:w-[18rem] sm:blur-3xl md:bottom-[-8rem] md:h-[28rem] md:w-[28rem]"
        style={{
          x: floatBottomX,
          y: floatBottomY,
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.06, 0.97, 1],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.8)_60%,rgba(255,255,255,0.98)_100%)]" />
    </div>
  );
}
