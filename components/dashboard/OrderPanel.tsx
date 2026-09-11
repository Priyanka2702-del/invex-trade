"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { tradableSymbols } from "@/components/dashboard/SymbolSearch";

export default function OrderPanel({ symbol }: { symbol?: string }) {
  const [side, setSide] = useState<"Buy" | "Sell">("Buy");
  const [selected, setSelected] = useState(symbol ?? tradableSymbols[0].value);
  const [placed, setPlaced] = useState(false);

  const label = tradableSymbols.find((s) => s.value === selected)?.label ?? selected;

  return (
    <div className="rounded-xl border border-line bg-white p-4">
      <div className="mb-1 text-sm font-semibold text-ink">Place Order</div>
      <p className="mb-4 flex items-start gap-1.5 text-xs text-steel">
        <Info size={13} className="mt-0.5 shrink-0" />
        Frontend demo — no order is actually executed until a live MT5 account is connected.
      </p>

      <div className="mb-4 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
        <button
          onClick={() => setSide("Buy")}
          className={`py-2.5 text-sm font-semibold transition ${
            side === "Buy" ? "bg-emerald-600 text-white" : "bg-white text-steel"
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setSide("Sell")}
          className={`py-2.5 text-sm font-semibold transition ${
            side === "Sell" ? "bg-red-600 text-white" : "bg-white text-steel"
          }`}
        >
          Sell
        </button>
      </div>

      <label className="mb-1 block text-xs text-steel">Symbol</label>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="mb-4 w-full rounded-lg border border-line px-3 py-2 text-sm text-ink"
      >
        {tradableSymbols.map((s) => (
          <option key={s.value} value={s.value}>{s.label}</option>
        ))}
      </select>

      <label className="mb-1 block text-xs text-steel">Volume (lots)</label>
      <input
        type="number"
        defaultValue={1}
        step={0.01}
        min={0.01}
        className="mb-6 w-full rounded-lg border border-line px-3 py-2 text-sm text-ink"
      />

      <button
        type="button"
        onClick={() => setPlaced(true)}
        className={`w-full rounded-lg py-3 text-sm font-semibold text-white transition ${
          side === "Buy" ? "bg-emerald-600 hover:bg-emerald-700" : "bg-red-600 hover:bg-red-700"
        }`}
      >
        {side} {label}
      </button>

      {placed && (
        <p className="mt-3 rounded-lg bg-paper px-3 py-2 text-xs text-steel">
          This is a demo order form — connect a live trading account under{" "}
          <span className="font-semibold text-ink">Live Trading</span> to place real orders.
        </p>
      )}
    </div>
  );
}
