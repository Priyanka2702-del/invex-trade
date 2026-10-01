"use client";

/**
 * TradingView chart using the free Advanced Chart iframe widget.
 *
 * This component is ONLY for TradingView-supported symbols.
 * Deriv-only symbols should be filtered out before reaching this component.
 */
type TradingViewChartProps = {
  symbol?: string;
  theme?: "light" | "dark";
  height?: number;
};

export default function TradingViewChart({
  symbol = "FX:EURUSD",
  theme = "light",
  height = 520,
}: TradingViewChartProps) {
  const params = new URLSearchParams({
    symbol,
    interval: "D",
    theme,
    style: "1",
    timezone: "Etc/UTC",
    locale: "en",
    hide_top_toolbar: "false",
    hide_legend: "false",
    allow_symbol_change: "true",
    save_image: "false",
    withdateranges: "true",
    studies: "",
  });

  const src =
    `https://s.tradingview.com/widgetembed/?${params.toString()}`;

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border border-line bg-white"
      style={{ height }}
    >
      <iframe
        key={`${symbol}-${theme}`}
        src={src}
        className="absolute inset-0 h-full w-full border-0"
        allowFullScreen
        title={`TradingView Chart - ${symbol}`}
      />
    </div>
  );
}