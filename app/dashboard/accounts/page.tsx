import Link from "next/link";
import { Plus, ArrowUpRight, ArrowDownRight, Repeat } from "lucide-react";
import { userAccounts } from "@/data/dashboard";

export default function AccountsPage() {
  return (
    <div>
<div className="mb-5 flex flex-col sm:flex-row gap-3 sm:items-center">
          <div>
            <h1 className="font-display text-xl font-semibold text-ink">Accounts</h1>
            <p className="text-sm text-steel">Your trading accounts and balances.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            {/* MetaTrader Demo Link - opens in new tab }}>
            <a
              href="https://web.metatrader.app/terminal?mode=demo&lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-deep px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-deep"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0L9 3 12 12l3 9zm-9 3v12c2 0 4-1.83 4-4V5a2 2 0 00-2-2H5a2 2 0 00-2 2v8z" />
              </svg>
              Trade on MetaTrader Demo
            </a>

            {/* Original Open Account (for registration) */}
            <Link
              href="/open-account"
              className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-deep sm:mt-0"
            >
              <Plus size={16} /> Open New Account
            </Link>
          </div>
        </div>

      <div className="space-y-4">
        {userAccounts.map((acc) => (
          <div key={acc.id} className="rounded-xl border border-line bg-white p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-blue/10 px-2 py-0.5 text-xs font-semibold text-blue">
                    {acc.platform}
                  </span>
                  <span className="text-sm font-semibold text-ink">{acc.type} Account</span>
                </div>
                <p className="mt-1 num text-xs text-steel">#{acc.accountNumber}</p>
              </div>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  acc.status === "Active"
                    ? "bg-emerald-50 text-emerald-600"
                    : acc.status === "Pending"
                      ? "bg-amber-50 text-amber-600"
                      : "bg-red-50 text-red-600"
                }`}
              >
                {acc.status}
              </span>
            </div>

            <div className="mb-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Balance", value: `${acc.balance} ${acc.currency}` },
                { label: "Equity", value: `${acc.equity} ${acc.currency}` },
                { label: "Leverage", value: acc.leverage },
                { label: "Currency", value: acc.currency },
              ].map((f) => (
                <div key={f.label}>
                  <p className="text-xs text-steel">{f.label}</p>
                  <p className="num mt-0.5 text-sm font-semibold text-ink">{f.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <Link
                href="/dashboard/trading"
                className="flex items-center gap-1.5 rounded-lg bg-paper px-3.5 py-2 text-sm font-medium text-ink hover:bg-line/60"
              >
                <ArrowDownRight size={15} /> Deposit
              </Link>
              <Link
                href="/dashboard/trading"
                className="flex items-center gap-1.5 rounded-lg bg-paper px-3.5 py-2 text-sm font-medium text-ink hover:bg-line/60"
              >
                <ArrowUpRight size={15} /> Withdraw
              </Link>
              <Link
                href="/dashboard/trading"
                className="flex items-center gap-1.5 rounded-lg bg-paper px-3.5 py-2 text-sm font-medium text-ink hover:bg-line/60"
              >
                <Repeat size={15} /> Transfer
              </Link>
              <a
                href="https://web.metatrader.app/terminal?mode=demo&lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg bg-blue-deep px-3.5 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0L9 3 12 12l3 9zm-9 3v12c2 0 4-1.83 4-4V5a2 2 0 00-2-2H5a2 2 0 00-2 2v8z" />
                </svg>
                MT Demo
              </a>
              <Link
                href="/dashboard/trading"
                className="flex items-center gap-1.5 rounded-lg bg-blue-deep px-3.5 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                <Repeat size={15} /> Trade
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
