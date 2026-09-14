"use client";

import { useState } from "react";
import Link from "next/link";
import { Radio, ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";

// Set NEXT_PUBLIC_MT5_WEBTRADER_URL once the real MT5 WebTrader integration
// is available. Until then, this page shows a clear "not yet configured"
// state instead of a fake trading platform.
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
              You're about to open the MT5 WebTrader in a new tab to place live trades.
            </p>

            <a
              href={MT5_WEBTRADER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-deep"
            >
              Open MT5 WebTrader <ExternalLink size={15} />
            </a>
          </>
        ) : (
          <>
            <p className="mx-auto mt-2 max-w-md text-sm text-steel">
              MT5 trading will be available once the trading platform
              integration is configured. This page is ready to launch the MT5
              WebTrader as soon as it is.
            </p>
            <a
              href="https://web.metatrader.app/terminal?mode=demo&lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-deep px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-deep"
            >
              Open MetaTrader Demo <ExternalLink size={15} />
            </a>
          </>
        )}

        {/* Iframe Test Section for manual checking - opens iframe to test embedding issues */}
        <div className="mt-6 rounded-xl border border-line bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-ink">MetaTrader Iframe Test</h3>
            <button
              onClick={() => {
                const iframeDiv = document.getElementById('mt-iframe-test');
                if (iframeDiv) {
                  iframeDiv.style.display = iframeDiv.style.display === 'none' ? 'block' : 'none';
                }
              }}
              className="text-xs text-blue hover:text-ink"
            >
              Toggle Iframe
            </button>
          </div>
          <iframe
            id="mt-iframe-test"
            src="https://web.metatrader.app/terminal?mode=demo&lang=en"
            style={{ border: 'none', width: '100%', height: '800px' }}
            onLoad={() => console.log('Iframe loaded successfully') }
            onError={() => {
              console.log('Iframe failed to load - likely X-Frame-Options blocking');
              alert('Iframe blocked - this is why we use new tab approach');
              const iframeDiv = document.getElementById('mt-iframe-test');
              if (iframeDiv) {
                iframeDiv.style.display = 'none';
              }
            }}
          />
        </div>
        <br />

        <div className="mx-auto mt-8 flex max-w-md items-start gap-2.5 rounded-lg border border-line px-4 py-3 text-left text-xs text-steel">
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
            </Link>
            page are powered by TradingView and are separate from live order execution, which
            only happens through your connected MT5 account.
          </span>
        </div>
      </div>
    </div>
  );
}
