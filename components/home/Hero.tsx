"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import WorldMapBackground from "@/components/ui/WorldMapBackground";
import TradingLinesBackground from "@/components/home/TradingLinesBackground";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const assets = [
  { symbol: "EURUSD", name: "Euro vs U.S. Dollar", href: "/markets/forex", icon: "/images/eur-usd.svg" },
  { symbol: "US500", name: "S&P 500 (US500)", href: "/markets/indices", icon: "/images/us500.svg" },
  { symbol: "GOLD", name: "Gold", href: "/markets/metals", icon: "/images/gold.svg" },
  { symbol: "COFFEE", name: "US Coffee", href: "/markets/commodities", icon: "/images/coffee.svg" },
  { symbol: "AAPL", name: "Apple (AAPL.OQ)", href: "/markets/shares", icon: "/images/apple.svg" },
];

export default function Hero() {
  return (
    <div className="bg-white">
      {/* Outer Wrapper with Curved Bottom Corners */}
      <div className="relative overflow-hidden bg-blue-deep rounded-b-[28px] sm:rounded-b-[40px] md:rounded-b-[60px] lg:rounded-b-[80px] shadow-2xl">
        
        {/* ==================== HERO MAIN SECTION ==================== */}
        <section className="relative flex min-h-[80vh] sm:min-h-[85vh] flex-col overflow-hidden text-center text-white">
          {/* Background Elements */}
          <WorldMapBackground className="text-white/10" />
          <TradingLinesBackground />

          {/* Main Content */}
          <motion.div 
            variants={container} 
            initial="hidden" 
            animate="show"
            className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 sm:px-6 pb-6 pt-28 sm:pt-36 lg:pt-40"
          >
            <motion.p 
              variants={item} 
              className="mb-4 sm:mb-6 text-xs sm:text-sm font-medium tracking-wide text-white/70 uppercase sm:normal-case"
            >
              Built for traders who move with the market
            </motion.p>

            {/* Responsive 2-line Heading */}
            <motion.h1
              variants={item}
              className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] tracking-tight bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)]"
            >
              Trade Global Markets.<br className="hidden sm:inline" /> Stay In Control.
            </motion.h1>

            <motion.p 
              variants={item} 
              className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-white/70 px-2"
            >
              Forex, indices, commodities and crypto CFDs, backed by fast execution and transparent pricing.
            </motion.p>

            {/* CTA Button */}
<motion.div
  variants={item}
  className="mt-8 sm:mt-10 w-full sm:w-auto px-4 sm:px-0"
>
  <Link
    href="/open-account"
    className="inline-block w-full sm:w-auto rounded-xl bg-gradient-to-r from-[#00C8FF] to-[#0052D4] px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-[#0052D4] hover:to-[#00C8FF] shadow-lg shadow-[#00C8FF]/30 active:scale-95"
  >
    Start Trading
  </Link>
</motion.div>

{/* New User Rewards */}
<motion.div
  variants={item}
  className="mt-4 flex flex-col items-center justify-center"
>
  <p className="text-sm font-semibold text-white">
    Up to <span className="text-cyan">50% Rewards</span> for New Users
  </p>

  <p className="mt-1 text-xs text-white/50">
    Join INVEX TRADE today and unlock exclusive rewards.
  </p>
</motion.div>

<motion.p
  variants={item}
  className="mt-4 sm:mt-5 text-xs sm:text-sm text-white/50 px-4"
>
  Risk warning: CFD trading carries a high level of risk of loss.{" "}
  <a
    href="/risk-disclosure"
    className="text-cyan underline underline-offset-2 hover:text-white transition"
  >
    Terms apply.
  </a>
</motion.p>
          </motion.div>
        </section>

        {/* ==================== CARDS SECTION ==================== */}
        <section className="pb-12 sm:pb-16 pt-4 sm:pt-6">
          <div className="relative z-10 px-4 sm:px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 sm:mb-6 text-center text-xs sm:text-[15px] font-semibold tracking-wide text-white/90 uppercase sm:normal-case"
            >
              Easy Access to 1,400+ Global Assets
            </motion.p>

            {/* Grid - 1 col on mobile, 2 on small tablets, 3 on md, 5 on xl */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2.5 sm:gap-3">
              {assets.map((a, i) => (
                <motion.div
                  key={a.symbol}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <Link 
                    href={a.href} 
                    className="flex items-center gap-3 rounded-xl sm:rounded-2xl border border-white/5 bg-[#131E38]/80 px-3.5 py-3 sm:px-4 sm:py-3.5 text-left backdrop-blur-md transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-[#182747] active:bg-[#182747]"
                  >
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-white/10 overflow-hidden">
                      <img src={a.icon} alt={a.symbol} className="h-7 w-7 sm:h-8 sm:w-8 object-contain" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm sm:text-[15px] font-bold text-white">{a.symbol}</p>
                      <p className="truncate text-[11px] sm:text-[12px] text-slate-400">{a.name}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}