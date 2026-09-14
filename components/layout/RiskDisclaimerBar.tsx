"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function RiskDisclaimerBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-white px-6 py-3 pr-12 text-xs leading-relaxed text-steel lg:px-10 lg:pr-14">
      <p className="mx-auto max-w-content">
        <span className="font-semibold text-ink">Risk Warning:</span> CFDs are
        complex instruments and carry a high risk of losing money quickly due
        to leverage. Trading CFDs involves significant risk of loss and may
        not be suitable for all investors. You should consider whether you
        understand how CFDs work and whether you can afford to take the high
        risk of losing your money. See our{" "}
        <a href="/risk-disclosure" className="font-medium text-blue underline underline-offset-2">
          Risk Disclosure
        </a>
        .
      </p>

      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss risk warning"
        className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-steel transition hover:bg-paper hover:text-ink lg:right-4"
      >
        <X size={16} />
      </button>
    </div>
  );
}