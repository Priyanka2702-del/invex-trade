"use client";

import type { Market } from "@/hooks/useDerivMarket";

type WatchlistProps = {
  markets: Market[];
  selectedSymbol: string;
  onSelectSymbol: (symbol: string) => void;
};

function formatPrice(
  price: number,
  pipSize: number
) {
  const decimals = Math.min(
    Math.max(
      0,
      Math.ceil(
        -Math.log10(
          pipSize || 0.01
        )
      )
    ),
    8
  );

  return price.toLocaleString(
    "en-US",
    {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }
  );
}

export default function Watchlist({
  markets,
  selectedSymbol,
  onSelectSymbol,
}: WatchlistProps) {
  return (
    <div className="border border-line bg-white">
      {/* HEADER */}
      <div className="flex items-center justify-between border-b border-line bg-white px-4 py-3">
        <div className="text-sm font-semibold text-ink">
          Watchlist
        </div>

        <div className="flex items-center gap-1.5 text-xs">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />

          <span className="text-emerald-600">
            Live
          </span>
        </div>
      </div>

      {/* 
       * 5 ITEMS VISIBLE
       *
       * Each row is approximately 66px.
       * 5 × 66px = 330px.
       *
       * Remaining items scroll vertically.
       */}
      <div className="max-h-[330px] overflow-y-auto">
        <ul>
          {markets.map((market) => {
            let change = 0;

            if (
              market.price !== null &&
              market.previousPrice !== null &&
              market.previousPrice !== 0
            ) {
              change =
                ((market.price -
                  market.previousPrice) /
                  market.previousPrice) *
                100;
            }

            const isSelected =
              market.symbol ===
              selectedSymbol;

            const isUp =
              change >= 0;

            return (
              <li
                key={market.symbol}
                onClick={() =>
                  onSelectSymbol(
                    market.symbol
                  )
                }
                className={`cursor-pointer border-b border-line px-4 py-3 transition hover:bg-paper ${
                  isSelected
                    ? "bg-blue/5"
                    : "bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  {/* SYMBOL */}
                  <div className="min-w-0 pr-3">
                    <div className="truncate text-sm font-medium text-ink">
                      {market.name}
                    </div>

                    <div className="mt-0.5 text-[10px] text-gray-400">
                      {market.symbol}
                    </div>
                  </div>

                  {/* PRICE */}
                  <div className="shrink-0 text-right">
                    {market.price !== null ? (
                      <>
                        <div className="num text-sm text-ink">
                          {formatPrice(
                            market.price,
                            market.pipSize
                          )}
                        </div>

                        <div
                          className={`text-xs ${
                            isUp
                              ? "text-emerald-600"
                              : "text-red-600"
                          }`}
                        >
                          {isUp
                            ? "+"
                            : ""}
                          {change.toFixed(2)}%
                        </div>
                      </>
                    ) : (
                      <span className="text-xs text-gray-400">
                        No data
                      </span>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}