"use client";

import Link from "next/link";
import {
  Radio,
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

// Set NEXT_PUBLIC_MT5_WEBTRADER_URL in .env.local.
// For testing, the MetaTrader WebTerminal URL can be used.
const MT5_WEBTRADER_URL =
  process.env.NEXT_PUBLIC_MT5_WEBTRADER_URL ??
  "https://web.metatrader.app/terminal";

export default function LiveTradingPage() {
  return (
    <div>
      {/* Back to Dashboard */}
      <Link
        href="/dashboard"
        className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-steel hover:text-ink"
      >
        <ArrowLeft size={15} />
        Back to Dashboard
      </Link>

      <div className="rounded-xl border border-line bg-white p-6 sm:p-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-deep/10 text-blue-deep">
            <Radio size={26} />
          </div>

          <h1 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Live Trading
          </h1>

          <p className="mx-auto mt-2 max-w-md text-sm text-steel">
            Trade directly through the MT5 WebTrader. You can also open the
            platform in a new tab.
          </p>

          {/* Open MT5 Button */}
          <a
            href={MT5_WEBTRADER_URL}
            target="_blank"
            rel="noopener noreferrer"
className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue/10 px-6 py-3 text-sm font-semibold text-blue transition hover:bg-blue/20"          >
            Open MT5 WebTrader
            <ExternalLink size={15} />
          </a>
        </div>

        {/* MT5 WebTrader iframe */}
        <div className="mx-auto mt-8 w-full overflow-hidden rounded-xl border border-line bg-white">
          <div className="border-b border-line px-4 py-3">
            <h2 className="text-sm font-semibold text-ink">
              MT5 WebTrader
            </h2>
            <p className="mt-1 text-xs text-steel">
              Trading platform preview
            </p>
          </div>

          <iframe
            src={MT5_WEBTRADER_URL}
            title="MT5 WebTrader"
            className="block w-full border-0"
            style={{ height: "700px" }}
            allowFullScreen
          />
        </div>

        {/* Security / Information Note */}
        <div className="mx-auto mt-6 flex max-w-4xl items-start gap-2.5 rounded-lg border border-line px-4 py-3 text-left text-xs text-steel">
          <ShieldCheck
            size={15}
            className="mt-0.5 shrink-0 text-blue"
          />

          <span>
            Charts and market analysis on the{" "}
            <Link
              href="/dashboard/trading"
              className="font-medium text-blue hover:underline"
            >
              INVEX Trading
            </Link>{" "}
            page are powered by TradingView and are separate from live order
            execution. Live orders are placed through your connected MT5
            trading account.
          </span>
        </div>
      </div>
    </div>
  );
}