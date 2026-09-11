"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  description,
  cta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-blue-deep px-6 pt-36 pb-24 text-center text-white lg:px-10">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMid slice"
      >
        <polyline
          fill="none"
          stroke="#00B8D9"
          strokeWidth="1.5"
          points="0,300 120,280 240,310 360,260 480,280 600,230 720,250 840,200 960,220 1080,170 1200,190 1320,150 1440,170"
        />
      </svg>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-2xl"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan">{eyebrow}</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight lg:text-5xl">{title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-white/70">{description}</p>
        {cta && (
          <Link
            href={cta.href}
            className="mt-8 inline-block rounded bg-blue px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-cyan hover:text-blue-deep"
          >
            {cta.label}
          </Link>
        )}
      </motion.div>
    </section>
  );
}
