"use client";

import { useState } from "react";
import Link from "next/link";
import { Radio, ArrowLeft, MonitorPlay, ShieldCheck } from "lucide-react";

const MT5_WEBTRADER_URL = process.env.NEXT_PUBLIC_MT5_WEBTRADER_URL ?? "";

export default function LiveTradingPage() {
  const [showIframe, setShowIframe] = useState(false);

  return (
    <div>
      <Link
        href="/dashboard"
        className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-steel hover:text-ink"
      >
        <ArrowLeft size={15} />
        Back to Dashboard
      </Link>

      <div className="rounded-xl border border-line bg-white p-8 text-center sm:p-12">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-deep/10 text-blue-deep">
          <Radio size={26} />
        </div>

        <h1 className="font-display text-xl font-semibold text-ink sm:text-2xl">
          Live Trading
        </h1>

        {MT5_WEBTRADER_URL ? (
          <>
            <p className="mx-auto mt-2 max-w-md text-sm text-steel">
              You&apos;re about to open the MT5 WebTrader in a new tab to place live trades.
            </p>
            <a
              href={MT5_WEBTRADER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-deep"
            >
              Open MT5 WebTrader <MonitorPlay size={15} />
            </a>
          </>
        ) : (
          <>
            <p className="mx-auto mt-2 max-w-sm text-sm text-steel">
              Access real-time markets and execute trades directly through the MetaTrader 5 platform — trusted by millions of traders worldwide.
            </p>

            {/* Feature highlights */}
            <div className="mx-auto mt-6 grid max-w-lg grid-cols-3 gap-4 text-left">
              <div className="rounded-lg border border-line bg-paper px-3 py-3">
                <div className="mb-1 text-xs font-semibold text-ink">⚡ Real-Time Execution</div>
                <p className="text-[11px] text-steel">Ultra-low latency order execution on live markets.</p>
              </div>
              <div className="rounded-lg border border-line bg-paper px-3 py-3">
                <div className="mb-1 text-xs font-semibold text-ink">🧪 Demo Account</div>
                <p className="text-[11px] text-steel">Practice risk-free with virtual funds before going live.</p>
              </div>
              <div className="rounded-lg border border-line bg-paper px-3 py-3">
                <div className="mb-1 text-xs font-semibold text-ink">📊 MT5 Powered</div>
                <p className="text-[11px] text-steel">Full access to charts, indicators, and expert advisors.</p>
              </div>
            </div>

            <button
              onClick={() => setShowIframe((v) => !v)}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-deep px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              <MonitorPlay size={16} />
              {showIframe ? "Hide Trading Platform" : "Live/Demo Trading"}
            </button>
          </>
        )}

        {/* MetaTrader iframe — toggled by Live/Demo Trading button */}
        {showIframe && (
          <div className="mt-6 rounded-xl border border-line bg-white p-6">
            <iframe
              src="https://web.metatrader.app/terminal?mode=demo&lang=en"
              style={{ border: "none", width: "100%", height: "800px" }}
              onLoad={() => console.log("Iframe loaded successfully")}
              onError={() => console.log("Iframe failed to load")}
            />
          </div>
        )}

        <div className="mx-auto mt-8 flex max-w-md items-start gap-2.5 rounded-lg border border-line px-4 py-3 text-left text-xs text-steel">
          <ShieldCheck size={15} className="mt-0.5 shrink-0 text-blue" />
          <span>
            Charts and market analysis on the{" "}
            <Link href="/dashboard/trading" className="font-medium text-blue hover:underline">
              INVEX Trading
            </Link>{" "}
            page are powered by TradingView and are separate from live order
            execution, which only happens through your connected MT5 account.
          </span>
        </div>
      </div>
    </div>
  );
}
