"use client";

import { motion } from "framer-motion";

const baseCandles = [
  { h: 38, up: true }, { h: 52, up: true }, { h: 29, up: false }, { h: 61, up: true },
  { h: 44, up: false }, { h: 67, up: true }, { h: 35, up: true }, { h: 72, up: false },
  { h: 48, up: true }, { h: 33, up: false }, { h: 59, up: true }, { h: 64, up: true },
  { h: 41, up: false }, { h: 78, up: true }, { h: 27, up: false }, { h: 55, up: true },
  { h: 68, up: true }, { h: 42, up: false }, { h: 84, up: true }, { h: 36, up: false },
];

const candles = [
  ...baseCandles,
  ...baseCandles,
  ...baseCandles,
  ...baseCandles,
  ...baseCandles,
  ...baseCandles,
];

export default function TradingLinesBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-25">
      
      {/* 1. Slow Floating Neon Trend Lines */}
      <svg className="absolute inset-0 h-full w-[300%] min-w-[3000px] -translate-y-10">
        <defs>
          <linearGradient id="lineGradientGreen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="lineGradientCyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Primary Trend Line */}
        <motion.path
          d="M 0 350 Q 250 200, 500 320 T 1000 240 T 1500 180 T 2000 290 T 2500 200 T 3000 320 T 3500 220 T 4000 300 T 4500 210 T 5000 320"
          fill="none"
          stroke="url(#lineGradientGreen)"
          strokeWidth="2.5"
          animate={{
            x: [0, -1500],
            y: [0, -15, 8, 0],
          }}
          transition={{
            x: { duration: 60, repeat: Infinity, ease: "linear" }, // Slowed down
            y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Secondary Supporting Trend Line */}
        <motion.path
          d="M 0 390 Q 200 300, 450 380 T 900 300 T 1400 260 T 1900 340 T 2400 280 T 3000 360 T 3500 300 T 4000 380 T 4500 290 T 5000 360"
          fill="none"
          stroke="url(#lineGradientCyan)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          animate={{
            x: [0, -1500],
            y: [0, 12, -10, 0],
          }}
          transition={{
            x: { duration: 75, repeat: Infinity, ease: "linear" }, // Slowed down
            y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </svg>

      {/* 2. Slow Continuous Scrolling Candlesticks Chart */}
      <motion.div
        className="flex h-full w-max items-end gap-5 sm:gap-7 md:gap-9 px-4"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 80, // High duration = slow smooth movement (80 seconds)
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {candles.map((candle, index) => (
          <motion.div
            key={index}
            className="relative flex w-[5px] sm:w-[6px] flex-col items-center shrink-0"
            style={{ height: `${candle.h}%` }}
            animate={{
              y: [0, -10, 4, 0],
              scaleY: [1, 1.04, 0.97, 1],
            }}
            transition={{
              duration: 6 + (index % 4) * 0.8, // Slow subtle price pulse
              repeat: Infinity,
              ease: "easeInOut",
              delay: (index % 6) * 0.3,
            }}
          >
            {/* Candlestick Wick */}
            <div
              className={`absolute w-[1.5px] ${
                candle.up 
                  ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" 
                  : "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]"
              }`}
              style={{ height: "135%", bottom: "-15%" }}
            />

            {/* Candle Body */}
            <div
              className={`relative z-10 w-full rounded-sm ${
                candle.up
                  ? "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]"
                  : "bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.5)]"
              }`}
              style={{ height: "100%" }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* 3. Bottom Glow Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}