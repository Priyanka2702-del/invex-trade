"use client";

import {
  CheckCircle2,
  CircleDollarSign,
  Info,
  TrendingUp,
  Wallet,
} from "lucide-react";

const bonusSlabs = [
  {
    equity: "$10,000 – $19,999",
    bonus: "1%",
  },
  {
    equity: "$20,000 – $39,999",
    bonus: "2%",
  },
  {
    equity: "$40,000 – $69,999",
    bonus: "3%",
  },
  {
    equity: "$70,000 – $99,999",
    bonus: "4%",
  },
  {
    equity: "$100,000+",
    bonus: "5%",
  },
];

const bonusHistory = [
  {
    month: "September 2026",
    equity: "$18,500",
    rate: "1%",
    bonus: "$185",
    status: "Paid",
  },
  {
    month: "August 2026",
    equity: "$24,000",
    rate: "2%",
    bonus: "$480",
    status: "Paid",
  },
  {
    month: "July 2026",
    equity: "$12,500",
    rate: "1%",
    bonus: "$125",
    status: "Paid",
  },
];

export default function EquityBonusPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-display text-xl font-semibold text-ink">
          Equity Bonus
        </h1>

        <p className="mt-1 text-sm text-steel">
          Track your monthly Equity Bonus based on your maintained Level 2
          Team Current Equity.
        </p>
      </div>

      {/* Current Month Summary */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Level 2 Equity */}
        <div className="rounded-2xl border border-line bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-steel">
                Level 2 Team Current Equity
              </p>

              <h2 className="mt-2 font-display text-2xl font-bold text-ink">
                $18,500
              </h2>

              <p className="mt-1 text-xs text-steel">
                Current maintained equity
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue/10 text-blue">
              <Wallet size={21} />
            </div>
          </div>
        </div>

        {/* Current Rate */}
        <div className="rounded-2xl border border-line bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-steel">
                Current Bonus Rate
              </p>

              <h2 className="mt-2 font-display text-2xl font-bold text-ink">
                1%
              </h2>

              <p className="mt-1 text-xs text-steel">
                Based on current equity
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <TrendingUp size={21} />
            </div>
          </div>
        </div>

        {/* Estimated Bonus */}
        <div className="rounded-2xl border border-line bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-steel">
                Estimated Monthly Bonus
              </p>

              <h2 className="mt-2 font-display text-2xl font-bold text-ink">
                $185
              </h2>

              <p className="mt-1 text-xs text-steel">
                Current month estimate
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-paper text-ink">
              <CircleDollarSign size={21} />
            </div>
          </div>
        </div>
      </div>

      {/* Equity Source */}
      <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
        <div className="flex gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue">
            <Info size={21} />
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Equity Source
            </h2>

            <p className="mt-2 text-sm leading-6 text-steel">
              Only the <strong>Level 2 Team Current Equity</strong> is counted
              when calculating the Equity Bonus.
            </p>

            <p className="mt-2 text-sm leading-6 text-steel">
              Your personal equity and equity from other team levels are not
              included in this calculation.
            </p>
          </div>
        </div>
      </div>

      {/* Monthly Equity Bonus Structure */}
      <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
        <div className="mb-5">
          <h2 className="font-display text-lg font-semibold text-ink">
            Monthly Equity Bonus Structure
          </h2>

          <p className="mt-1 text-sm text-steel">
            Your monthly bonus percentage is determined by your maintained
            Level 2 Team Current Equity.
          </p>
        </div>

        <div className="space-y-3">
          {bonusSlabs.map((slab, index) => (
            <div
              key={slab.equity}
              className="flex items-center gap-4 rounded-xl border border-line p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-paper text-sm font-semibold text-ink">
                {index + 1}
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-steel">
                  Maintained Level 2 Team Current Equity
                </p>

                <h3 className="mt-1 font-semibold text-ink">
                  {slab.equity}
                </h3>
              </div>

              <div className="text-right">
                <p className="text-xs text-steel">Monthly Bonus</p>

                <p className="mt-1 font-display text-lg font-bold text-ink">
                  {slab.bonus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Qualification Requirement */}
      <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
        <div className="flex gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Qualification Requirement
            </h2>

            <p className="mt-2 text-sm leading-6 text-steel">
              The required equity level must be maintained for the{" "}
              <strong>whole month</strong> to qualify for the corresponding
              monthly Equity Bonus.
            </p>

            <div className="mt-4 rounded-xl bg-paper p-4">
              <p className="text-sm font-semibold text-ink">
                Important
              </p>

              <p className="mt-1 text-sm leading-6 text-steel">
                If your maintained Level 2 Team Current Equity falls below a
                required threshold during the month, the corresponding bonus
                rate may not be applicable for that month.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rank Independence */}
      <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
        <h2 className="font-display text-lg font-semibold text-ink">
          Equity Bonus & System Rank
        </h2>

        <p className="mt-2 text-sm leading-6 text-steel">
          The Equity Bonus is completely independent of your System Rank.
          Achieving a higher System Rank does not automatically increase your
          Equity Bonus percentage.
        </p>

        <div className="mt-4 rounded-xl border border-line bg-paper p-4">
          <p className="text-sm font-semibold text-ink">
            Example
          </p>

          <p className="mt-2 text-sm leading-6 text-steel">
            If an IB has achieved the <strong>Ambassador</strong> System Rank
            but maintains only <strong>$10,000</strong> Level 2 Team Current
            Equity during the month, the IB receives <strong>1%</strong>, not
            4%.
          </p>
        </div>
      </div>

      {/* Bonus History */}
      <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
        <div className="mb-5">
          <h2 className="font-display text-lg font-semibold text-ink">
            Bonus History
          </h2>

          <p className="mt-1 text-sm text-steel">
            Previous monthly Equity Bonus records.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-sm">
            <thead className="border-b border-line bg-paper">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-ink">
                  Month
                </th>

                <th className="px-4 py-3 text-left font-semibold text-ink">
                  Level 2 Team Equity
                </th>

                <th className="px-4 py-3 text-left font-semibold text-ink">
                  Rate
                </th>

                <th className="px-4 py-3 text-left font-semibold text-ink">
                  Bonus
                </th>

                <th className="px-4 py-3 text-left font-semibold text-ink">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {bonusHistory.map((item) => (
                <tr
                  key={item.month}
                  className="border-b border-line last:border-0"
                >
                  <td className="px-4 py-4 font-medium text-ink">
                    {item.month}
                  </td>

                  <td className="px-4 py-4 text-steel">
                    {item.equity}
                  </td>

                  <td className="px-4 py-4 font-semibold text-ink">
                    {item.rate}
                  </td>

                  <td className="px-4 py-4 font-semibold text-ink">
                    {item.bonus}
                  </td>

                  <td className="px-4 py-4">
                    <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}