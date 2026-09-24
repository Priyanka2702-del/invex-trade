"use client";

import { motion } from "framer-motion";

// A generative dotted "globe / graticule" pattern used as a decorative
// backdrop on category pages. Built from primitive SVG shapes only —
// no third-party map data or imagery.
export default function WorldMapBackground({ className = "" }: { className?: string }) {
  const rows = 14;
  const cols = 34;
  const dots: { x: number; y: number; r: number; delay: number }[] = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Carve out an elliptical "continents" silhouette using simple noise-like rules
      const cx = col - cols / 2;
      const cy = row - rows / 2;
      const dist = Math.sqrt((cx / (cols / 2)) ** 2 + (cy / (rows / 2)) ** 2);
      const wobble = Math.sin(col * 1.3) * Math.cos(row * 1.7);
      if (dist < 0.98 && wobble + (1 - dist) > 0.35) {
        dots.push({
          x: col * 26 + 13,
          y: row * 26 + 13,
          r: 1.6,
          delay: ((col + row) % 10) * 0.08,
        });
      }
    }
  }

  return (
    <svg
      viewBox={`0 0 ${cols * 26} ${rows * 26}`}
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      {dots.map((d, i) => (
        <motion.circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={d.r}
          fill="currentColor"
          initial={{ opacity: 0.15 }}
          animate={{ opacity: [0.15, 0.55, 0.15] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: d.delay,
          }}
        />
      ))}
    </svg>
  );
}
