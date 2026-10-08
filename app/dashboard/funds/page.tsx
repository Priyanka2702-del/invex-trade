"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowDownToLine, ArrowUpFromLine, Repeat2 } from "lucide-react";
import { transactions } from "@/data/dashboard";

export default function FundsPage() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "overview";

  const isHistory = tab === "history";

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-xl font-semibold text-ink">
          {isHistory ? "Transaction History" : "Funds"}
        </h1>

        <p className="mt-1 text-sm text-steel">
          {isHistory
            ? "View your deposits, withdrawals and internal transfers."
            : "Manage your account funds and transactions."}
        </p>
      </div>

      {!isHistory ? (
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/dashboard/deposit"
            className="rounded-xl border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
          >
            <ArrowDownToLine className="mb-3 text-blue" size={22} />
            <h2 className="font-semibold text-ink">Deposit</h2>
            <p className="mt-1 text-sm text-steel">
              Add funds to your trading account.
            </p>
          </Link>

          <Link
            href="/dashboard/withdraw"
            className="rounded-xl border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
          >
            <ArrowUpFromLine className="mb-3 text-blue" size={22} />
            <h2 className="font-semibold text-ink">Withdraw</h2>
            <p className="mt-1 text-sm text-steel">
              Withdraw available funds.
            </p>
          </Link>

          <Link
            href="/dashboard/transfer"
            className="rounded-xl border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
          >
            <Repeat2 className="mb-3 text-blue" size={22} />
            <h2 className="font-semibold text-ink">Transfer</h2>
            <p className="mt-1 text-sm text-steel">
              Transfer funds internally.
            </p>
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-line bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-sm">
              <thead className="border-b border-line bg-paper">
                <tr>
                  <th className="px-5 py-4 text-left font-semibold text-ink">
                    Transaction
                  </th>
                  <th className="px-5 py-4 text-left font-semibold text-ink">
                    Method
                  </th>
                  <th className="px-5 py-4 text-left font-semibold text-ink">
                    Amount
                  </th>
                  <th className="px-5 py-4 text-left font-semibold text-ink">
                    Status
                  </th>
                  <th className="px-5 py-4 text-left font-semibold text-ink">
                    Date
                  </th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="border-b border-line last:border-0"
                  >
                    <td className="px-5 py-4 font-medium text-ink">
                      {transaction.type}
                    </td>

                    <td className="px-5 py-4 text-steel">
                      {transaction.method}
                    </td>

                    <td className="px-5 py-4 font-medium text-ink">
                      {transaction.amount}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          transaction.status === "Completed"
                            ? "bg-green-50 text-green-700"
                            : transaction.status === "Pending"
                              ? "bg-yellow-50 text-yellow-700"
                              : "bg-red-50 text-red-700"
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-steel">
                      {transaction.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}