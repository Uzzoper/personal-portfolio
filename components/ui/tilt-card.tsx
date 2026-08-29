"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  className?: string;
  children?: React.ReactNode;
  /** Maximum tilt in degrees. Kept intentionally small for subtlety. */
  maxTilt?: number;
  /** Whether to render the cursor-following glare highlight. */
  glare?: boolean;
}

/**
 * A card that tilts subtly in 3D and casts a soft glare following the cursor.
 *
 * Disabled automatically when the pointer is coarse (touch) or the user
 * prefers reduced motion. Updates are driven by motion springs (rAF-based)
 * and the glare/shadow read CSS variables, so the surface never blocks
 * interaction and stays cheap to animate.
 */
export function TiltCard({
  children,
  className,
  maxTilt = 4,
  glare = true,
}: TiltCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const rectRef = React.useRef<DOMRect | null>(null);
  const frameRef = React.useRef<number | null>(null);
  const [enabled, setEnabled] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothX = useSpring(rotateX, { stiffness: 180, damping: 18, mass: 0.5 });
  const smoothY = useSpring(rotateY, { stiffness: 180, damping: 18, mass: 0.5 });

  // The shadow drifts slightly in the direction the card tilts.
  const boxShadow = useTransform([smoothY, smoothX], (latest) => {
    const [ry, rx] = latest as number[];
    const dy = Math.abs(rx) * 1.2 + 10;
    const blur = 22 + Math.abs(ry) * 2;
    return `0 ${dy.toFixed(1)}px ${blur.toFixed(1)}px -8px rgba(0,0,0,0.18)`;
  });

  // Only enable on devices that actually hover, and respect reduced motion.
  React.useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !reduced.matches);
    update();
    fine.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  const measure = React.useCallback(() => {
    if (ref.current) rectRef.current = ref.current.getBoundingClientRect();
  }, []);

  React.useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const handlePointerMove = React.useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!enabled) return;
      if (frameRef.current != null) return; // one update per frame
      const clientX = e.clientX;
      const clientY = e.clientY;
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        const rect = rectRef.current;
        if (!rect || !ref.current) return;
        const px = (clientX - rect.left) / rect.width;
        const py = (clientY - rect.top) / rect.height;
        rotateX.set(-(py - 0.5) * 2 * maxTilt);
        rotateY.set((px - 0.5) * 2 * maxTilt);
        if (glare) {
          ref.current.style.setProperty("--gx", `${px * 100}%`);
          ref.current.style.setProperty("--gy", `${py * 100}%`);
        }
      });
    },
    [enabled, maxTilt, glare, rotateX, rotateY]
  );

  const handlePointerEnter = React.useCallback(() => {
    measure();
    if (enabled) setHovered(true);
  }, [enabled, measure]);

  const handlePointerLeave = React.useCallback(() => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    if (frameRef.current != null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  }, [rotateX, rotateY]);

  return (
    <motion.div
      ref={ref}
      className={cn("group relative rounded-xl", className)}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={
        hovered
          ? {
              rotateX: smoothX,
              rotateY: smoothY,
              transformPerspective: 900,
              willChange: "transform",
              boxShadow,
            }
          : {
              rotateX: 0,
              rotateY: 0,
              willChange: "auto",
              boxShadow,
            }
      }
    >
      {glare && (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300",
            hovered ? "opacity-100" : "opacity-0"
          )}
          style={{
            background:
              "radial-gradient(120% 120% at var(--gx, 50%) var(--gy, 0%), rgba(255,255,255,0.09), transparent 55%)",
          }}
        />
      )}
      {children}
    </motion.div>
  );
}