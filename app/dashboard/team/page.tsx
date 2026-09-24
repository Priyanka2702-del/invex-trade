"use client";

import { useMemo, useState } from "react";
import { Info, Users, UserCheck, Search } from "lucide-react";
import { teamLevels } from "@/data/dashboard";

export default function TeamPage() {
  const [activeLevel, setActiveLevel] = useState(1);
  const [query, setQuery] = useState("");

  const totalMembers = teamLevels.reduce((sum, l) => sum + l.members.length, 0);
  const activeMembers = teamLevels.reduce(
    (sum, l) => sum + l.members.filter((m) => m.status === "Active").length,
    0
  );

  const current = teamLevels.find((l) => l.level === activeLevel)!;

  const filteredMembers = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return current.members;
    return current.members.filter((m) =>
      [m.name, m.email, m.phone, m.id, m.country, m.accountLogin].some((field) =>
        field.toLowerCase().includes(q)
      )
    );
  }, [current.members, query]);

  return (
    <div>
      <div className="mb-5">
        <h1 className="font-display text-xl font-semibold text-ink">My Team</h1>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-2 md:w-fit md:grid-cols-2">
        <div className="rounded-xl border border-line bg-white p-5">
          <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-blue/10 text-blue">
            <Users size={17} />
          </div>
          <p className="text-xs text-steel">Total Team Members</p>
          <p className="num font-display text-2xl font-bold text-ink">{totalMembers}</p>
        </div>
        <div className="rounded-xl border border-line bg-white p-5">
          <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <UserCheck size={17} />
          </div>
          <p className="text-xs text-steel">Active Members</p>
          <p className="num font-display text-2xl font-bold text-ink">{activeMembers}</p>
        </div>
      </div>

      <div className="rounded-xl border border-line bg-white">
        <div className="flex gap-2 overflow-x-auto border-b border-line p-3">
          {teamLevels.map((l) => (
            <button
              key={l.level}
              onClick={() => {
                setActiveLevel(l.level);
                setQuery("");
              }}
              className={`shrink-0 rounded-lg px-4 py-2 text-sm font-semibold transition ${
                activeLevel === l.level
                  ? "bg-blue/10 text-blue"
                  : "text-steel hover:bg-paper hover:text-ink"
              }`}
            >
              Level {l.level}
              <span className="ml-1.5 text-xs text-steel">
                {l.limit === null ? `(${l.members.length})` : `(${l.members.length}/${l.limit})`}
              </span>
            </button>
          ))}
        </div>

        <div className="p-6">
          {current.limit !== null && (
            <div className="mb-5">
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="font-medium text-ink">Level {current.level} slots filled</span>
                <span className="num text-steel">{current.members.length} / {current.limit}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-paper">
                <div
                  className="h-full rounded-full bg-blue"
                  style={{ width: `${Math.min((current.members.length / current.limit) * 100, 100)}%` }}
                />
              </div>
            </div>
          )}
          {current.limit === null && (
            <p className="mb-5 text-xs text-steel">Level 1 has no member-count condition.</p>
          )}

          {/* Search */}
          <div className="relative mb-4">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-steel" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, email, phone, ID, country or account login…"
              className="w-full rounded-lg border border-line py-2.5 pl-9 pr-3 text-sm text-ink outline-none transition focus:border-blue"
            />
          </div>

          {current.members.length === 0 ? (
            <p className="py-8 text-center text-sm text-steel">
              No members in this level yet. Share your referral link to start growing it.
            </p>
          ) : filteredMembers.length === 0 ? (
            <p className="py-8 text-center text-sm text-steel">No members match your search.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1180px] text-left text-sm">
                <thead>
                  <tr className="text-xs font-medium text-steel">
                    <th className="px-2 py-2">Name</th>
                    <th className="px-2 py-2">Email</th>
                    <th className="px-2 py-2">Phone Number</th>
                    <th className="px-2 py-2">ID</th>
                    <th className="px-2 py-2">Country</th>
                    <th className="px-2 py-2">Verified</th>
                    <th className="px-2 py-2">Account Login</th>
                    <th className="px-2 py-2 text-right">Total Traded Lots</th>
                    <th className="px-2 py-2 text-right">Balance</th>
                    <th className="px-2 py-2 text-right">Commissions</th>
                    <th className="px-2 py-2">Last Trade Date</th>
                    <th className="px-2 py-2 text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMembers.map((m) => (
                    <tr key={m.id} className="border-t border-line">
                      <td className="px-2 py-3 font-medium text-ink">{m.name}</td>
                      <td className="px-2 py-3 text-steel">{m.email}</td>
                      <td className="num px-2 py-3 text-steel">{m.phone}</td>
                      <td className="num px-2 py-3 text-steel">{m.id}</td>
                      <td className="px-2 py-3 text-steel">{m.country}</td>
                      <td className="px-2 py-3">
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                            m.isVerified ? "bg-emerald-50 text-emerald-600" : "bg-paper text-steel"
                          }`}
                        >
                          {m.isVerified ? "Verified" : "Unverified"}
                        </span>
                      </td>
                      <td className="num px-2 py-3 text-steel">{m.accountLogin}</td>
                      <td className="num px-2 py-3 text-right text-ink">{m.totalTradedLots.toFixed(2)}</td>
                      <td className="num px-2 py-3 text-right font-semibold text-ink">{m.balance}</td>
                      <td className="num px-2 py-3 text-right font-semibold text-emerald-600">{m.commissions}</td>
                      <td className="px-2 py-3 text-steel">{m.lastTradeDate}</td>
                      <td className="px-2 py-3 text-right">
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                            m.status === "Active"
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-paper text-steel"
                          }`}
                        >
                          {m.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}