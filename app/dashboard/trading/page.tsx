"use client";

import { useState } from "react";
import Link from "next/link";
import { Radio } from "lucide-react";
import TradingViewChart from "@/components/dashboard/TradingViewChart";
import SymbolSearch, { tradableSymbols } from "@/components/dashboard/SymbolSearch";
import OrderPanel from "@/components/dashboard/OrderPanel";
import PositionsTable from "@/components/dashboard/PositionsTable";
import Watchlist from "@/components/dashboard/Watchlist";

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
            className="flex shrink-0 items-center gap-2 rounded-lg bg-blue-deep px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            <Radio size={16} className="text-cyan" />
            Live Trading
          </Link>
          <a
            href="https://web.metatrader.app/terminal?mode=demo&lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 rounded-lg bg-blue-deep px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0L9 3 12 12l3 9zm-9 3v12c2 0 4-1.83 4-4V5a2 2 0 00-2-2H5a2 2 0 00-2 2v8z" />
            </svg>
            MT Demo
          </a>
        </div>
      </div>

      <div className="mb-6 grid gap-6 xl:grid-cols-[1fr_320px]">
        <div className="min-w-0">
          <TradingViewChart symbol={symbol} theme="light" height={520} />
          <p className="mt-2 text-xs text-steel">
            Chart for {activeLabel} — market visualization only. Placing an order below does not
            execute a real trade until a live trading account and backend are connected via{" "}
            <Link href="/dashboard/live-trading" className="font-medium text-blue hover:underline">
              Live Trading
            </Link>
            .
          </p>
        </div>
        <div className="min-w-0">
          <Watchlist />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="min-w-0">
          <PositionsTable />
        </div>
        <div className="min-w-0">
          <OrderPanel symbol={symbol} />
        </div>
      </div>
    </div>
  );
}