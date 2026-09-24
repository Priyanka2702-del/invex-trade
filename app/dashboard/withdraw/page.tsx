"use client";

import { useState } from "react";
import Link from "next/link";
import { Info, Loader2, CheckCircle2, AlertTriangle } from "lucide-react";
import { userAccounts, transactions, accountSummary, fundingMethods } from "@/data/dashboard";

export default function WithdrawPage() {
  const [account, setAccount] = useState(userAccounts[0]?.id ?? "");
  const [method, setMethod] = useState(fundingMethods[0]);
  const [amount, setAmount] = useState<number | "">("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const availableBalance = parseFloat(accountSummary.available.replace(/,/g, ""));
  const recentWithdrawals = transactions.filter((t) => t.type === "Withdrawal").slice(0, 3);
  const overLimit = typeof amount === "number" && amount > availableBalance;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || amount <= 0 || overLimit) return;
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1200);
  };

  return (
    <div>
      <div className="mb-5">
        <h1 className="font-display text-xl font-semibold text-ink">Withdraw</h1>
        <p className="text-sm text-steel">Move funds from your wallet to your bank or e-wallet.</p>
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
              <p className="mt-1 text-sm text-steel">successfully withdrawn</p>
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
                  <option key={a.id} value={a.id}>{a.type} {a.accountNumber}</option>
                ))}
              </select>

              <label className="mb-1 block text-xs font-medium text-steel">Withdrawal method</label>
              <select
  value={method}
  onChange={(e) => setMethod(e.target.value)}
  className="mb-5 w-full appearance-none rounded-lg border border-line px-3 py-2.5 text-sm text-ink"
>
  {fundingMethods.map((m) => (
    <option key={m}>{m}</option>
  ))}
</select>

              <div className="mb-1 flex items-center justify-between">
                <label className="block text-xs font-medium text-steel">Amount (USD)</label>
                <button
                  type="button"
                  onClick={() => setAmount(availableBalance)}
                  className="text-xs font-semibold text-blue hover:underline"
                >
                  Max: ${accountSummary.available}
                </button>
              </div>
              <input
                type="number"
                min={1}
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value ? parseFloat(e.target.value) : "")}
                placeholder="0.00"
                className={`mb-1 w-full rounded-lg border px-3 py-2.5 text-sm text-ink ${
                  overLimit ? "border-red-400" : "border-line"
                }`}
              />
              {overLimit && (
                <p className="mb-4 flex items-center gap-1.5 text-xs text-red-500">
                  <AlertTriangle size={12} /> Amount exceeds your available balance.
                </p>
              )}

              <p className="mb-6 text-xs text-steel">
                Withdrawals are typically processed within 1–3 business days after review.
              </p>

              <button
                type="submit"
                disabled={status === "loading" || !amount || overLimit}
className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue/10 py-3.5 text-sm font-semibold text-blue transition hover:bg-blue/20 disabled:cursor-not-allowed disabled:opacity-50"              >
                {status === "loading" && <Loader2 size={16} className="animate-spin" />}
                {status === "loading" ? "Submitting…" : "Request Withdrawal"}
              </button>
            </form>
          )}
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-line bg-white p-5">
            <p className="text-xs text-steel">Available to withdraw</p>
            <p className="num mt-1 font-display text-2xl font-bold text-ink">
              ${accountSummary.available}
            </p>
          </div>

          <div className="rounded-xl border border-line bg-white p-5">
            <p className="mb-3 text-sm font-semibold text-ink">Recent withdrawals</p>
            {recentWithdrawals.length === 0 ? (
              <p className="text-xs text-steel">No withdrawals yet.</p>
            ) : (
              <div className="space-y-3">
                {recentWithdrawals.map((t) => (
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