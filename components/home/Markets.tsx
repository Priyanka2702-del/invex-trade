"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// ==========================================
// 1. CONTENT SECTION
// ==========================================
const sectionData: {
  sectionTitle: string;
  sectionTitleHighlight: string;
  subtitle: string;
  description: string;
  cards: {
    id: string;
    badge: string;
    title: string;
    description: string;
    href?: string;
    linkLabel?: string;
    bgImage?: string;
  }[];
} = {
  sectionTitle: "Discover Our",
  sectionTitleHighlight: "Algo AI Bot",
  subtitle: "Trade Smarter with AI-Powered Automation",
  description:
    "Harness advanced algorithms and AI-driven market analysis to identify trading opportunities, automate strategies, and execute trades with speed and precision.",

  cards: [
    {
      id: "card-1",
      badge: "50% DEPOSIT BONUS",
      title: "Boost Your Trading with 50% Bonus",
      description:
        "Get up to a 50% deposit bonus and unlock up to $100 in bonus rewards when you start trading with INVEX TRADE.",
      href: "/bonus",
      linkLabel: "Get Your Bonus",
      bgImage: "/images/BONUS.png",
    },
    {
      id: "card-2",
      badge: "INVEX ALGO AI BOT",
      title: "Analyse. Automate. Execute.",
      description:
        "Let intelligent trading technology work alongside you—designed for traders who want a more systematic approach to the markets.",
      bgImage: "/images/Bot.png",
    },
  ],
};

// ==========================================
// 2. DESIGN COMPONENT
// ==========================================
export default function Markets() {
  return (
    <section id="markets" className="bg-slate-50 py-16 text-slate-900 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* --- SECTION HEADER --- */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {sectionData.sectionTitle}{" "}
            <span className="bg-gradient-to-r from-[#00C8FF] to-[#0052D4] bg-clip-text text-transparent">
              {sectionData.sectionTitleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-lg font-semibold text-slate-700 sm:text-xl md:text-2xl"
          >
            {sectionData.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg"
          >
            {sectionData.description}
          </motion.p>
        </div>

        {/* --- 2 CARDS GRID --- */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          {/* ================= CARD 1 — 50% Deposit Bonus ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-[24px] bg-[#0A1128] shadow-xl sm:min-h-[360px] md:min-h-[400px] lg:rounded-[32px]"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${sectionData.cards[0].bgImage}')` }}
            />
            {/* Lighter Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128]/45 via-[#0A1128]/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/55 via-[#0A1128]/10 to-transparent" />

            {/* Card Content */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="max-w-md">
                <span className="inline-block rounded-full border border-white/10 bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md sm:text-xs">
                  {sectionData.cards[0].badge}
                </span>

                <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl drop-shadow-md">
                  {sectionData.cards[0].title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-200 sm:text-base drop-shadow-sm">
                  {sectionData.cards[0].description}
                </p>

                {sectionData.cards[0].href && (
                  <Link
                    href={sectionData.cards[0].href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition hover:text-cyan sm:text-base"
                  >
                    {sectionData.cards[0].linkLabel}
                    <ArrowUpRight size={17} />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>

          {/* ================= CARD 2 (Blue Theme) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-[24px] shadow-xl sm:min-h-[360px] md:min-h-[400px] lg:rounded-[32px]"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${sectionData.cards[1].bgImage}')` }}
            />
            {/* Lighter Blue Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D41C4]/40 via-[#0D41C4]/18 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2980]/50 via-[#0A2980]/08 to-transparent" />

            {/* Card Content */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="max-w-md">
                <span className="inline-block rounded-full border border-white/10 bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md sm:text-xs">
                  {sectionData.cards[1].badge}
                </span>

                <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl drop-shadow-md">
                  {sectionData.cards[1].title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-blue-50 sm:text-base drop-shadow-sm">
                  {sectionData.cards[1].description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}