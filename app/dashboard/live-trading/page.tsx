"use client";

import Link from "next/link";
import { Radio, ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";
import { useState } from "react";

const MT5_WEBTRADER_URL = process.env.NEXT_PUBLIC_MT5_WEBTRADER_URL ?? "";

export default function LiveTradingPage() {
  const [showIframe, setShowIframe] = useState(false);

  return (
    <div>
      <Link
        href="/dashboard"
        className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-steel hover:text-ink"
      >
        <ArrowLeft size={15} /> Back to Dashboard
      </Link>

      <div className="rounded-xl border border-line bg-white p-8 text-center sm:p-12">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-deep/10 text-blue-deep">
          <Radio size={26} />
        </div>
        <h1 className="font-display text-xl font-semibold text-ink sm:text-2xl">Live Trading</h1>

        {MT5_WEBTRADER_URL ? (
          <>
            <p className="mx-auto mt-2 max-w-md text-sm text-steel">
              You are about to open the MT5 WebTrader to place live trades.
            </p>
            <a
              href={MT5_WEBTRADER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-deep"
            >
              Open MetaTrader <ExternalLink size={15} />
            </a>
          </>
        ) : (
          <>
            <p className="mx-auto mt-2 max-w-md text-sm text-steel">
              MT5 trading will be available once the trading platform integration is configured.
              This page is ready to launch the MT5 WebTrader as soon as it is.
            </p>
            <a
              href="https://web.metatrader.app/terminal?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-deep px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Open MetaTrader <ExternalLink size={15} />
            </a>
          </>
        )}

        {/* MetaTrader Embedded View */}
        <div className="mt-6 rounded-xl border border-line bg-white p-6 text-left">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-ink">MetaTrader WebTrader</h3>
            <button
              onClick={() => setShowIframe(!showIframe)}
              className="inline-flex items-center gap-2 rounded-lg border border-blue-deep px-4 py-2 text-sm font-semibold text-blue-deep transition hover:bg-blue-deep hover:text-white"
            >
              {showIframe ? "Hide WebTrader" : "Launch WebTrader"}
            </button>
          </div>
          {showIframe && (
            <iframe
              src="https://web.metatrader.app/terminal?lang=en"
              style={{ border: "none", width: "100%", height: "800px", borderRadius: "8px" }}
              onLoad={() => console.log("Iframe loaded successfully")}
            />
          )}
        </div>
        <br />

        <div className="mx-auto mt-8 flex max-w-md items-start gap-2.5 rounded-lg border border-line px-4 py-3 text-left text-xs text-steel">
          <ShieldCheck size={15} className="mt-0.5 shrink-0 text-blue" />
          <span>
            Charts and market analysis on the{" "}
            <Link href="/dashboard/trading" className="font-medium text-blue hover:underline">
              INVEX Trading
            </Link>{" "}
            page are powered by TradingView and are separate from live order execution, which
            only happens through your connected MT5 account.
          </span>
        </div>
      </div>
    </div>
  );
}
