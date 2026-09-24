"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MarketCategory } from "@/types/instrument";
import WorldMapBackground from "@/components/ui/WorldMapBackground";
import FloatingBadge from "@/components/trading/FloatingBadge";



export default function CategoryHero({ category }: { category: MarketCategory }) {
  return (
    <section className="relative overflow-hidden bg-blue-deep pb-24 pt-40 text-white">
      <WorldMapBackground className="text-white/25" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-deep/20 via-blue-deep/60 to-blue-deep" />

      

      <div className="relative z-10 mx-auto max-w-content px-6 text-center lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-sm font-semibold uppercase tracking-widest text-cyan"
        >
          {category.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight lg:text-6xl"
        >
          {category.heading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
        >
          {category.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10"
        >
          <Link
            href="/open-account"
            className="inline-block rounded bg-blue px-9 py-4 text-base font-semibold text-white transition hover:bg-cyan hover:text-blue-deep"
          >
            Start Trading {category.shortName}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
