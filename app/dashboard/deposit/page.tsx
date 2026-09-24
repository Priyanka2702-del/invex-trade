"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Info, CreditCard, Landmark, Wallet as WalletIcon, Zap, Clock, Loader2, CheckCircle2,
} from "lucide-react";
import { userAccounts, transactions, accountSummary } from "@/data/dashboard";

const presetAmounts = [50, 100, 250, 500, 1000];

const methods = [
  { key: "Crypto (USDT)", icon: Zap, time: "10–30 minutes", note: "TRC20 / ERC20" },
];

export default function FastDepositPage() {
  const [account, setAccount] = useState(userAccounts[0]?.id ?? "");
  const [method, setMethod] = useState(methods[0].key);
  const [amount, setAmount] = useState<number | "">(100);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const activeMethod = methods.find((m) => m.key === method)!;
  const recentDeposits = transactions.filter((t) => t.type === "Deposit").slice(0, 3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || amount <= 0) return;
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1200);
  };

  return (
    <div>
      <div className="mb-5">
        <h1 className="font-display text-xl font-semibold text-ink">Deposit</h1>
        <p className="text-sm text-steel">Top up your account in a few taps.</p>
      </div>

      
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="rounded-xl border border-line bg-white p-6">
                           {status === "success" ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 className="mb-4 text-emerald-500" size={44} />
              <h2 className="font-display text-xl font-semibold text-ink">🎉 Congratulations!</h2>
              <p className="num mt-3 font-display text-3xl font-bold text-emerald-600">
                ${typeof amount === "number" ? amount.toFixed(2) : "0.00"}
              </p>
              <p className="mt-1 text-sm text-steel">successfully deposited</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label className="mb-1 block text-xs font-medium text-steel">Account</label>
              <select
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                className="mb-5 w-full rounded-lg border border-line px-3 py-2.5 text-sm text-ink"
              >
                {userAccounts.map((a) => (
                  <option key={a.id} value={a.id}>{a.type}  {a.accountNumber}</option>
                ))}
              </select>

              <label className="mb-2 block text-xs font-medium text-steel">Payment method</label>
              <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {methods.map((m) => (
                  <button
                    key={m.key}
                    type="button"
                    onClick={() => setMethod(m.key)}
                    className={`flex flex-col items-center gap-1.5 rounded-lg border p-3 text-center transition ${
                      method === m.key
                        ? "border-blue bg-blue/5 text-blue"
                        : "border-line text-steel hover:border-blue/40"
                    }`}
                  >
                    <m.icon size={18} />
                    <span className="text-xs font-semibold">{m.key}</span>
                  </button>
                ))}
              </div>

              <p className="mb-5 flex items-center gap-1.5 text-xs text-steel">
                <Clock size={13} />
                {activeMethod.note} · Typically {activeMethod.time.toLowerCase()}
              </p>

              <label className="mb-2 block text-xs font-medium text-steel">Quick amount (USD)</label>
              <div className="mb-4 flex flex-wrap gap-2">
                {presetAmounts.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setAmount(p)}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                      amount === p ? "bg-blue text-white" : "bg-paper text-ink hover:bg-line/60"
                    }`}
                  >
                    ${p}
                  </button>
                ))}
              </div>

              <label className="mb-1 block text-xs font-medium text-steel">Or enter custom amount</label>
              <input
                type="number"
                min={1}
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value ? parseFloat(e.target.value) : "")}
                placeholder="0.00"
                className="mb-6 w-full rounded-lg border border-line px-3 py-2.5 text-sm text-ink"
              />

              <button
                type="submit"
                disabled={status === "loading"}
className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue/10 py-3.5 text-sm font-semibold text-blue transition hover:bg-blue/20 disabled:opacity-70"              >
                {status === "loading" && <Loader2 size={16} className="animate-spin" />}
                {status === "loading" ? "Processing…" : `Deposit ${amount ? `$${amount}` : ""}`}
              </button>
            </form>
          )}
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-line bg-white p-5">
            <p className="text-xs text-steel">Current wallet balance</p>
            <p className="num mt-1 font-display text-2xl font-bold text-ink">
              ${accountSummary.totalAssets}
            </p>
          </div>

          <div className="rounded-xl border border-line bg-white p-5">
            <p className="mb-3 text-sm font-semibold text-ink">Recent deposits</p>
            {recentDeposits.length === 0 ? (
              <p className="text-xs text-steel">No deposits yet.</p>
            ) : (
              <div className="space-y-3">
                {recentDeposits.map((t) => (
                  <div key={t.id} className="flex items-center justify-between text-sm">
                    <div>
                      <p className="text-ink">{t.method}</p>
                      <p className="text-xs text-steel">{t.date}</p>
                    </div>
                    <span className="num font-semibold text-ink">{t.amount}</span>
                  </div>
                ))}
              </div>
            )}
            <Link
              href="/dashboard/funds?tab=history"
              className="mt-4 block text-xs font-semibold text-blue hover:underline"
            >
              View full history →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}