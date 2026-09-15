"use client";

import { useEffect, useState } from "react";
import { X, TrendingUp, CheckCircle2 } from "lucide-react";
import type { PammPool } from "@/types/dashboard";

function parseMoney(value: string): number {
  const n = parseFloat(value.replace(/[^0-9.-]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function formatMoney(value: number): string {
  return `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

const percentShortcuts = [25, 50, 75, 100];

export default function PammInvestModal({
  open,
  onClose,
  pools,
  selectedPoolId,
  onSelectPool,
  walletBalance,
}: {
  open: boolean;
  onClose: () => void;
  pools: PammPool[];
  selectedPoolId: string;
  onSelectPool: (id: string) => void;
  walletBalance: string;
}) {
  const [amount, setAmount] = useState("0.00");
  const [submitted, setSubmitted] = useState(false);

  const pool = pools.find((p) => p.id === selectedPoolId) ?? pools[0];
  const balance = parseMoney(walletBalance);
  const amountValue = parseMoney(amount);
  const walletAfter = Math.max(balance - amountValue, 0);
  const isValidAmount = amountValue > 0;

  // Reset transient state whenever the modal is (re)opened
  useEffect(() => {
    if (open) {
      setAmount("0.00");
      setSubmitted(false);
    }
  }, [open]);

  const canSubmit = isValidAmount;

  if (!open || !pool) return null;

  const applyPercent = (pct: number) => {
    const reference = balance > 0 ? balance : 1000; // demo fallback since mock wallet is $0.00
    const value = (reference * pct) / 100;
    setAmount(value.toFixed(2));
  };

  const handleSubmit = () => {
    if (!canSubmit) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 px-4 py-8">
      <div
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Invest in PAMM Pool"
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-line px-6 py-5">
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Invest in PAMM Pool</h2>
            <p className="mt-0.5 text-sm text-steel">Choose a pool and reserve funds from your wallet.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-1.5 text-steel transition hover:bg-paper hover:text-ink"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-5">
          {submitted ? (
            <div className="flex flex-col items-center py-8 text-center">
              <CheckCircle2 className="mb-3 text-emerald-500" size={40} />
              <h3 className="font-display text-lg font-semibold text-ink">Investment reserved</h3>
              <p className="mt-2 max-w-sm text-sm text-steel">
                {formatMoney(amountValue)} has been reserved into {pool.name}. It will show as{" "}
                <span className="font-semibold text-amber-600">Pending</span> until an admin approves it.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 rounded-lg bg-blue px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-deep"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              {/* Pool select */}
              <label className="mb-1.5 block text-sm font-medium text-ink">Select PAMM Pool</label>
              <select
                value={pool.id}
                onChange={(e) => onSelectPool(e.target.value)}
                className="mb-5 w-full rounded-lg border border-line px-4 py-3 text-sm font-semibold text-ink outline-none transition focus:border-blue"
              >
                {pools.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} — {p.status}
                  </option>
                ))}
              </select>

              {/* Balance + status cards */}
              <div className="mb-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-line bg-paper p-4">
                  <p className="text-xs text-steel">Available Wallet Balance</p>
                  <p className="num mt-1 font-display text-xl font-bold text-emerald-600">
                    {formatMoney(balance)}
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-paper p-4">
                  <div className="flex items-center justify-between text-xs text-steel">
                    Status
                    <span className="flex items-center gap-1 font-semibold text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {pool.status}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-steel">
                    Monthly Return
                    <span
                      className={`num font-semibold ${
                        pool.monthlyReturnUp ? "text-emerald-600" : "text-red-600"
                      }`}
                    >
                      {pool.monthlyReturn}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-steel">
                    Risk Mode
                    <span className="font-semibold text-blue">{pool.riskMode}</span>
                  </div>
                </div>
              </div>

              {/* Amount input */}
              <label className="mb-1.5 block text-sm font-medium text-ink">Investment Amount (USD)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-steel">$</span>
                <input
                  type="number"
                  min={0}
                  step="0.01"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full rounded-lg border border-line py-3 pl-8 pr-4 text-sm font-semibold text-ink outline-none transition focus:border-blue"
                />
              </div>
              <p className="mt-1.5 text-xs text-steel">Minimum: $1.00</p>

              {/* Percent shortcuts */}
              <div className="mt-3 grid grid-cols-4 gap-2">
                {percentShortcuts.map((pct) => (
                  <button
                    key={pct}
                    type="button"
                    onClick={() => applyPercent(pct)}
                    className="rounded-lg border border-line py-2 text-sm font-semibold text-ink transition hover:border-blue hover:text-blue"
                  >
                    {pct}%
                  </button>
                ))}
              </div>

              {/* Approval workflow note */}
              <div className="mt-5 rounded-xl bg-blue-deep px-4 py-4 text-white">
                <p className="text-sm font-semibold">Approval workflow</p>
                <p className="mt-1 text-xs leading-relaxed text-white/70">
                  The amount is reserved immediately and remains Pending until admin approval.
                  Rejection returns the full reserved amount. Later pool-to-wallet transfers require
                  separate admin approval.
                </p>
              </div>

              {/* Summary */}
              <div className="mt-5 space-y-2 rounded-xl border border-line bg-paper p-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-steel">Amount to reserve</span>
                  <span className="num font-semibold text-ink">{formatMoney(amountValue)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-steel">Wallet after submission</span>
                  <span className="num font-semibold text-ink">{formatMoney(walletAfter)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canSubmit}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-blue py-3.5 text-sm font-semibold text-white transition hover:bg-blue-deep disabled:cursor-not-allowed disabled:opacity-50"
              >
                <TrendingUp size={16} />
                Confirm Investment of {formatMoney(amountValue)}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}