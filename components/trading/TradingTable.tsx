"use client";

import { useState } from "react";
import { Instrument } from "@/types/instrument";
import Reveal from "@/components/ui/Reveal";

export default function TradingTable({
  instruments,
  title = "Pick your pairs",
  subtitle = "Live-style indicative pricing. Actual spreads vary with market conditions.",
}: {
  instruments: Instrument[];
  title?: string;
  subtitle?: string;
}) {
  const [tradedSymbol, setTradedSymbol] = useState<string | null>(null);

  return (
    <section className="mx-auto max-w-content px-6 py-20 lg:px-10">
      <Reveal className="mb-10">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink lg:text-4xl">
          {title}
        </h2>
        <p className="mt-3 max-w-md text-steel">{subtitle}</p>
      </Reveal>

      <Reveal delay={0.1} className="overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-line bg-paper text-xs font-semibold uppercase tracking-wider text-steel">
              <th className="px-5 py-4">Symbol</th>
              <th className="px-5 py-4">Avg. Spread (pips)</th>
              <th className="px-5 py-4">Spread as low as (pips)</th>
              <th className="px-5 py-4">Max Leverage</th>
              <th className="px-5 py-4 text-right">Trade</th>
            </tr>
          </thead>
          <tbody>
            {instruments.map((row) => (
              <tr key={row.symbol} className="border-b border-line last:border-0 hover:bg-paper/60">
                <td className="px-5 py-4">
                  <div className="font-semibold text-ink">{row.symbol}</div>
                  <div className="text-xs text-steel">{row.name}</div>
                </td>
                <td className="num px-5 py-4 text-ink">{row.avgSpread}</td>
                <td className="num px-5 py-4 text-ink">{row.spreadLow}</td>
                <td className="num px-5 py-4 text-ink">{row.maxLeverage}</td>
                <td className="px-5 py-4 text-right">
                  <button
                    onClick={() => setTradedSymbol(row.symbol)}
                    className="rounded bg-blue px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-deep"
                  >
                    Trade
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      {tradedSymbol && (
        <div
          role="status"
          className="mt-4 rounded-lg border border-cyan/30 bg-cyan/10 px-4 py-3 text-sm text-blue-deep"
        >
          Ready to trade <span className="font-semibold">{tradedSymbol}</span>? Open an account or
          log in to place this trade on the INVEX platform.
        </div>
      )}
      <p className="mt-4 text-xs text-steel">
        Indicative pricing shown for illustration. Spreads and leverage vary by account type and
        regulatory jurisdiction.
      </p>
    </section>
  );
}
