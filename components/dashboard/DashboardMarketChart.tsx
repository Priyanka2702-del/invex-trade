"use client";

import TradingViewChart from "@/components/dashboard/TradingViewChart";

/**
 * Live TradingView chart section for the dashboard Home page.
 * Defaults to EURUSD; the Markets table was removed from this page to avoid
 * duplicating what the chart already shows (still available under
 * "INVEX Trading" in the sidebar, with full symbol switching).
 */
export default function DashboardMarketChart() {
  return (
    <div className="mb-6">
      <div className="mb-3">
        <h2 className="font-display text-lg font-semibold text-ink">Live Chart</h2>
        <p className="text-xs text-steel">Real-time TradingView chart for EURUSD.</p>
      </div>
      <TradingViewChart symbol="FX:EURUSD" theme="light" height={520} />
    </div>
  );
}