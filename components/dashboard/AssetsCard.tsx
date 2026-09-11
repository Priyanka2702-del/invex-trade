"use client";

import { ChevronDown } from "lucide-react";
import { accountSummary } from "@/data/dashboard";

const actions = ["Deposit", "Withdrawal", "Transfer", "History"];

export default function AssetsCard() {
  return (
    <div className="rounded-xl border border-line bg-white p-6">
      <div className="mb-4 flex items-center gap-1.5 text-sm font-semibold text-ink">
        Total assets estimate
      </div>

      <div className="mb-5 flex items-center gap-2">
        <span className="text-2xl">🇺🇸</span>
        <span className="font-display text-3xl font-bold text-ink">
          {accountSummary.totalAssets}
        </span>
        <span className="font-display text-lg font-semibold text-steel">
          {accountSummary.currency}
        </span>
        <ChevronDown size={18} className="ml-1 text-steel" />
      </div>

      <div className="flex flex-wrap gap-2">
        {actions.map((a, i) => (
          <button
            key={a}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              i === 0
                ? "bg-teal-600 text-white hover:bg-teal-700"
                : "bg-paper text-ink hover:bg-line/60"
            }`}
          >
            {a}
          </button>
        ))}
      </div>
    </div>
  );
}