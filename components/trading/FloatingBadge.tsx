"use client";

import { motion } from "framer-motion";

export default function FloatingBadge({
  label,
  style,
  delay = 0,
  duration = 4,
}: {
  label: string;
  style: React.CSSProperties;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className="absolute rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white shadow-lg backdrop-blur-md"
      style={style}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      {label}
    </motion.div>
  );
}
