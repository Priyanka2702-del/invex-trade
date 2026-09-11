"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "1,400+",
    label: "global trading instruments across forex, indices, commodities, stocks & crypto CFDs.",
  },
  {
    value: "<40ms",
    label: "average order execution speed — built for fast-moving markets.",
  },
  {
    value: "99.9%",
    label: "platform uptime so you never miss a trading opportunity.",
  },
];

const features = [
  {
    title: "Tight Spreads",
    description: "Trade with spreads starting from 0.0 pips on major pairs.",
    icon: (
      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
  },
  {
    title: "No Hidden Costs",
    description: "Transparent pricing. No surprise markups or hidden fees.",
    icon: (
      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    ),
  },
  {
    title: "Superior Execution",
    description: "Fair prices with no requotes and no rejections on trades.",
    icon: (
      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Instant Withdrawals",
    description: "Get your funds easily with fast, fee-free withdrawals.",
    icon: (
      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function WhyTrade() {
  return (
    <section className="relative bg-white pt-0 sm:pt-6">
      {/* Dark curved container (XM style) — responsive rounded corners */}
      <div className="relative overflow-hidden rounded-t-[24px] bg-[#050B1A] px-4 sm:rounded-t-[40px] sm:px-6 pb-16 sm:pb-20 pt-14 text-white sm:pt-16 md:rounded-t-[60px] md:pb-24 md:pt-20 lg:rounded-t-[80px] lg:px-10">
        
        {/* Soft background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-full sm:h-[400px] sm:w-[600px] md:h-[500px] md:w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[100px] md:blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          
          {/* ========== HEADER ========== */}
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]"
            >
              Our Results Are Proven in{" "}
              <span className="bg-gradient-to-r from-[#00C8FF] via-[#00A3FF] to-[#0052D4] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,200,255,0.4)]">
                Numbers
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:mt-5 sm:text-base md:text-lg"
            >
              Nobody does more to provide you with what you need to maximise your trading potential.
            </motion.p>
          </div>

          {/* ========== BIG STATS ========== */}
          <div className="mt-12 grid grid-cols-1 gap-10 sm:mt-16 sm:grid-cols-3 sm:gap-8 md:gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="text-center"
              >
                <div className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  {stat.value}
                </div>
                <p className="mx-auto mt-3 max-w-[280px] text-xs leading-relaxed text-slate-400 sm:mt-4 sm:max-w-[240px] sm:text-sm md:text-[15px]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ========== 4 FEATURE CARDS ========== */}
          <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition hover:border-[#00C8FF]/40 hover:bg-white/[0.06] sm:p-6"
              >
                {/* Icon Circle */}
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#00C8FF] transition group-hover:border-[#00C8FF]/50 group-hover:bg-[#00C8FF]/10 sm:mb-5 sm:h-12 sm:w-12">
                  {feature.icon}
                </div>

                <h3 className="text-base font-bold text-white sm:text-lg">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}