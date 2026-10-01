"use client";

import { Search } from "lucide-react";

export type TradableSymbol = {
  label: string;
  value: string;
  derivSymbol: string;
};

export const tradableSymbols: TradableSymbol[] = [
  {
    label: "EUR/USD",
    value: "FX:EURUSD",
    derivSymbol: "frxEURUSD",
  },
  {
    label: "GBP/USD",
    value: "FX:GBPUSD",
    derivSymbol: "frxGBPUSD",
  },
  {
    label: "USD/JPY",
    value: "FX:USDJPY",
    derivSymbol: "frxUSDJPY",
  },
  {
    label: "AUD/USD",
    value: "FX:AUDUSD",
    derivSymbol: "frxAUDUSD",
  },
  {
    label: "Gold (XAU/USD)",
    value: "OANDA:XAUUSD",
    derivSymbol: "frxXAUUSD",
  },
  {
    label: "Silver (XAG/USD)",
    value: "OANDA:XAGUSD",
    derivSymbol: "frxXAGUSD",
  },
  {
    label: "WTI Crude Oil",
    value: "TVC:USOIL",
    derivSymbol: "frxUSOIL",
  },
  {
    label: "Bitcoin (BTC/USD)",
    value: "COINBASE:BTCUSD",
    derivSymbol: "cryBTCUSD",
  },
  {
    label: "Ethereum (ETH/USD)",
    value: "COINBASE:ETHUSD",
    derivSymbol: "cryETHUSD",
  },
  {
    label: "S&P 500",
    value: "TVC:SPX",
    derivSymbol: "OTCSPX",
  },
  {
    label: "Nasdaq 100",
    value: "TVC:NDQ",
    derivSymbol: "OTCNDX",
  },
  {
    label: "Apple Inc.",
    value: "NASDAQ:AAPL",
    derivSymbol: "AAPL",
  },
];

export default function SymbolSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (symbol: string) => void;
}) {
  return (
    <div className="relative w-full sm:w-64">
      <Search
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-steel"
        size={16}
      />

      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="w-full appearance-none rounded-lg border border-line bg-white py-2.5 pl-9 pr-4 text-sm font-medium text-ink outline-none transition focus:border-blue"
        aria-label="Select trading symbol"
      >
        {tradableSymbols.map((symbol) => (
          <option
            key={symbol.value}
            value={symbol.value}
          >
            {symbol.label}
          </option>
        ))}
      </select>
    </div>
  );
}