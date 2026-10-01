"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Radio } from "lucide-react";

import TradingViewChart from "@/components/dashboard/TradingViewChart";
import SymbolSearch, {
  tradableSymbols,
} from "@/components/dashboard/SymbolSearch";
import Watchlist from "@/components/dashboard/Watchlist";
import PositionsTable from "@/components/dashboard/PositionsTable";
import OrderPanel from "@/components/dashboard/OrderPanel";

import { useDerivMarket } from "@/hooks/useDerivMarket";

export default function TradingPage() {
  const [symbol, setSymbol] = useState(
    tradableSymbols[0]?.value ?? "FX:EURUSD"
  );

  const {
    markets,
    connected,
  } = useDerivMarket();

  /*
   * Build Watchlist from ALL TradingView symbols.
   *
   * Important:
   * We do NOT filter the list using Deriv markets.
   *
   * This guarantees that all symbols from
   * tradableSymbols appear in the Watchlist.
   */
  const watchlistMarkets = useMemo(() => {
    return tradableSymbols.map((tradingViewSymbol) => {
      const derivMarket = markets.find(
        (market) =>
          market.symbol.toLowerCase() ===
          tradingViewSymbol.derivSymbol.toLowerCase()
      );

      /*
       * If Deriv has live data, use it.
       *
       * Otherwise create a Watchlist item
       * with null price.
       */
      return {
        symbol: tradingViewSymbol.derivSymbol,
        name: tradingViewSymbol.label,
        type: "TradingView",
        pipSize:
          derivMarket?.pipSize ?? 0.01,
        price:
          derivMarket?.price ?? null,
        previousPrice:
          derivMarket?.previousPrice ?? null,
        epoch:
          derivMarket?.epoch ?? null,
      };
    });
  }, [markets]);

  /*
   * Find the selected TradingView symbol.
   */
  const selectedTradingViewSymbol =
    tradableSymbols.find(
      (item) => item.value === symbol
    );

  /*
   * Find corresponding Deriv market.
   *
   * This can be undefined if the symbol is
   * supported by TradingView but currently
   * has no matching Deriv market.
   */
  const selectedMarket = useMemo(() => {
    if (!selectedTradingViewSymbol) {
      return undefined;
    }

    return markets.find(
      (market) =>
        market.symbol.toLowerCase() ===
        selectedTradingViewSymbol.derivSymbol.toLowerCase()
    );
  }, [
    markets,
    selectedTradingViewSymbol,
  ]);

  /*
   * Display label.
   */
  const activeLabel =
    selectedMarket?.name ??
    selectedTradingViewSymbol?.label ??
    symbol;

  /*
   * Watchlist click.
   *
   * marketSymbol is the Deriv symbol stored
   * inside the Watchlist.
   */
  const handleMarketSelect = (
    marketSymbol: string
  ) => {
    const tradingViewSymbol =
      tradableSymbols.find(
        (item) =>
          item.derivSymbol.toLowerCase() ===
          marketSymbol.toLowerCase()
      );

    if (!tradingViewSymbol) {
      return;
    }

    /*
     * Send the exact TradingView symbol
     * to TradingViewChart.
     */
    setSymbol(
      tradingViewSymbol.value
    );
  };

  return (
    <div>
      {/* PAGE HEADER */}
      <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h1 className="font-display text-xl font-semibold text-ink">
            INVEX Trading
          </h1>

          <p className="text-sm text-steel">
            Charts and market analysis,
            powered by TradingView.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <SymbolSearch
            value={symbol}
            onChange={setSymbol}
          />

          <Link
            href="/dashboard/live-trading"
            className="flex shrink-0 items-center gap-2 rounded-lg bg-blue/10 px-4 py-2.5 text-sm font-semibold text-blue transition hover:bg-blue/20"
          >
            <Radio
              size={16}
              className="text-cyan"
            />

            Live Trading
          </Link>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
        {/* LEFT */}
        <div className="min-w-0">
          {/* TRADINGVIEW CHART */}
          <TradingViewChart
            symbol={symbol}
            theme="light"
            height={520}
          />

          {/* MARKET DATA */}
          <div className="mt-3 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4">
            {/* SYMBOL */}
            <div className="bg-white px-4 py-3">
              <div className="text-xs text-steel">
                Symbol
              </div>

              <div className="mt-1 text-sm font-semibold text-ink">
                {activeLabel}
              </div>
            </div>

            {/* CURRENT PRICE */}
            <div className="bg-white px-4 py-3">
              <div className="text-xs text-steel">
                Current Price
              </div>

              <div className="mt-1 text-sm font-semibold text-ink">
                {selectedMarket?.price !== null &&
                selectedMarket?.price !== undefined
                  ? selectedMarket.price.toLocaleString(
                      "en-US",
                      {
                        maximumFractionDigits: 8,
                      }
                    )
                  : "—"}
              </div>
            </div>

            {/* PREVIOUS PRICE */}
            <div className="bg-white px-4 py-3">
              <div className="text-xs text-steel">
                Previous Price
              </div>

              <div className="mt-1 text-sm font-semibold text-ink">
                {selectedMarket?.previousPrice !==
                  null &&
                selectedMarket?.previousPrice !==
                  undefined
                  ? selectedMarket.previousPrice.toLocaleString(
                      "en-US",
                      {
                        maximumFractionDigits: 8,
                      }
                    )
                  : "—"}
              </div>
            </div>

            {/* STATUS */}
            <div className="bg-white px-4 py-3">
              <div className="text-xs text-steel">
                Status
              </div>

              <div
                className={`mt-1 text-sm font-semibold ${
                  connected
                    ? "text-emerald-600"
                    : "text-red-600"
                }`}
              >
                {connected
                  ? "Live"
                  : "Offline"}
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-2 text-xs text-steel">
            Live market data for{" "}
            <span className="font-medium text-ink">
              {activeLabel}
            </span>
            . Chart visualization is
            provided by TradingView.
          </p>

          {/* POSITIONS */}
          <div className="mt-6">
            <PositionsTable />
          </div>
        </div>

        {/* RIGHT */}
        <div className="min-w-0 space-y-6">
          {/* WATCHLIST */}
          <Watchlist
            markets={watchlistMarkets}
            selectedSymbol={
              selectedTradingViewSymbol
                ?.derivSymbol ?? ""
            }
            onSelectSymbol={
              handleMarketSelect
            }
          />

          {/* ORDER PANEL */}
          <OrderPanel
            symbol={symbol}
          />
        </div>
      </div>
    </div>
  );
}