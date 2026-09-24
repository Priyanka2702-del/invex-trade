"use client";

import { useState } from "react";
import Link from "next/link";
import { Radio } from "lucide-react";
import TradingViewChart from "@/components/dashboard/TradingViewChart";
import SymbolSearch, { tradableSymbols } from "@/components/dashboard/SymbolSearch";
import Watchlist from "@/components/dashboard/Watchlist";
import PositionsTable from "@/components/dashboard/PositionsTable";
import OrderPanel from "@/components/dashboard/OrderPanel";


export default function TradingPage() {
  const [symbol, setSymbol] = useState(tradableSymbols[0].value);
  const activeLabel = tradableSymbols.find((s) => s.value === symbol)?.label ?? symbol;

  return (
    <div>
      <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h1 className="font-display text-xl font-semibold text-ink">INVEX Trading</h1>
          <p className="text-sm text-steel">Charts and market analysis, powered by TradingView.</p>
        </div>
        <div className="flex items-center gap-3">
          <SymbolSearch value={symbol} onChange={setSymbol} />
          <Link
            href="/dashboard/live-trading"
className="flex shrink-0 items-center gap-2 rounded-lg bg-blue/10 px-4 py-2.5 text-sm font-semibold text-blue transition hover:bg-blue/20"          >
            <Radio size={16} className="text-cyan" />
            Live Trading
          </Link>
        </div>
      </div>

     <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
  {/* LEFT SIDE */}
  <div className="min-w-0">
    <TradingViewChart
      symbol={symbol}
      theme="light"
      height={520}
    />

    <p className="mt-2 text-xs text-steel">
      Chart for {activeLabel} — market visualization only. Connect a live
      trading account via{" "}
      <Link
        href="/dashboard/live-trading"
        className="font-medium text-blue hover:underline"
      >
        Live Trading
      </Link>{" "}
      to place real orders.
    </p>

    {/* OPEN POSITIONS */}
    <div className="mt-6">
      <PositionsTable />
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="min-w-0 space-y-6">
    {/* WATCHLIST */}
    <Watchlist />

    {/* PLACE ORDER */}
    <OrderPanel symbol={symbol} />
  </div>
</div>
    </div>
  );
}