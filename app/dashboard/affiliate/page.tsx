"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Info,
  ChevronRight,
  Copy,
  Check,
  Wallet,
  Send,
  Coins,
  Users,
  Download,
  ArrowRight,
  CalendarDays,
  LineChart,
  ArrowDownToLine,
  ArrowUpFromLine,
  FilePlus2,
  UserPlus2,
  Layers,
} from "lucide-react";
import { affiliateSummary, affiliatePerformance, teamLevels, teamActivity24h } from "@/data/dashboard";
import PerformanceChart from "@/components/dashboard/PerformanceChart";

function CopyField({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable
    }
  };

  return (
    <div className="flex items-center gap-2 rounded-lg border border-line bg-paper px-3 py-2.5">
      <span className="min-w-0 flex-1 truncate text-sm text-ink">{value}</span>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy"
        className="shrink-0 text-steel transition hover:text-ink"
      >
        {copied ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
      </button>
    </div>
  );
}

export default function AffiliateProgramPage() {
  const parseBalance = (v: string) => parseFloat(v.replace(/[$,]/g, "")) || 0;
const visibleTeamLevels = teamLevels.filter((l) => Number(l.level) <= 2);

const levelEquity = visibleTeamLevels.map((l) => ({
  level: l.level,
  equity: l.members.reduce((sum, m) => sum + parseBalance(m.balance), 0),
  memberCount: l.members.length,
}));

const currentLevel =
  [...levelEquity].reverse().find((l) => l.memberCount > 0)?.level ?? 1;

const totalEquity = levelEquity.reduce((sum, l) => sum + l.equity, 0);

  return (
    <div className="w-full pb-28 sm:pb-8">
      {/* Header */}
      <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h1 className="font-display text-xl font-bold text-ink sm:text-2xl">
            Affiliate Program
          </h1>
          <p className="mt-1 text-sm text-steel">
            Invite traders, earn more. Share your link and get lifetime commissions on every trade.
          </p>
        </div>
        <Link
          href="/dashboard/funds?tab=history"
          className="flex shrink-0 items-center gap-1 text-sm font-semibold text-blue hover:underline"
        >
          Transaction History <ChevronRight size={16} />
        </Link>
      </div>

      {/* Top row: Total Commission + Available Balance */}
      <div className="mb-4 grid grid-cols-1 gap-4 lg:mb-6 lg:grid-cols-[1.2fr_1fr]">
       {/* Total Commission Card */}
<div className="relative overflow-hidden rounded-xl border border-blue/15 bg-blue/10 p-5 text-ink sm:p-6">
  {/* Basic IB Badge */}
  <span className="absolute right-4 top-4 z-20 inline-flex items-center rounded-full border border-line bg-white/80 px-3 py-1 text-xs font-semibold text-steel shadow-sm backdrop-blur">
    Basic IB
  </span>

  <div className="relative z-10 flex min-h-[160px] flex-col justify-between sm:min-h-[180px]">
    <div className="max-w-[60%] sm:max-w-[65%]">
      <div className="flex items-center gap-1.5 text-sm font-medium text-steel">
        Total Commission
        <Info size={14} className="text-steel/70" />
      </div>

      <div className="mt-2 flex flex-wrap items-baseline gap-1">
        <span className="text-base font-semibold sm:text-lg">US</span>
        <span className="num font-display text-3xl font-bold sm:text-4xl">
          {affiliateSummary.totalCommission}
        </span>
        <span className="text-base font-semibold sm:text-lg">USD</span>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-2 py-0.5 text-xs font-semibold text-white sm:text-sm">
          {affiliateSummary.totalCommissionChangePct} ↑
        </span>
        <span className="text-steel">than last month</span>
      </div>
    </div>

    <Link
      href="/dashboard/verification"
      className="mt-5 flex w-fit items-center justify-center gap-2 rounded-lg border border-blue/20 bg-white px-6 py-2.5 text-sm font-semibold text-blue shadow-sm transition hover:bg-blue/5 sm:mt-6"
    >
      <Download size={16} />
      Apply For Affiliate
    </Link>
  </div>

  <div
    className="pointer-events-none absolute -bottom-2 -right-2 h-36 w-40 bg-contain bg-right-bottom bg-no-repeat sm:h-48 sm:w-52 md:h-56 md:w-60"
    style={{ backgroundImage: "url('/images/hand-coin.png')" }}
    aria-hidden
  />
</div>
        {/* Available Balance Card */}
        <div className="rounded-xl border border-line bg-white p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 text-sm font-medium text-steel">
                Available Balance
                <Info size={14} className="text-steel/70" />
              </div>
              <div className="mt-2 flex flex-wrap items-baseline gap-1 text-ink">
                <span className="text-base font-semibold uppercase sm:text-lg">us</span>
                <span className="num font-display text-3xl font-bold sm:text-4xl">
                  {affiliateSummary.availableBalance}
                </span>
                <span className="text-base font-semibold text-steel sm:text-lg">USD</span>
              </div>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-blue">
              <Wallet size={20} />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2">
            <Link
              href="/dashboard/withdraw"
              className="flex items-center justify-center gap-2 rounded-lg bg-blue/10 py-2.5 text-sm font-semibold text-blue transition hover:bg-blue/20"
            >
              <Wallet size={16} />
              <span className="truncate">Withdraw Commission</span>
            </Link>
            <Link
              href="/dashboard/transfer"
              className="flex items-center justify-center gap-2 rounded-lg border border-blue/30 bg-blue/5 py-2.5 text-sm font-semibold text-blue transition hover:bg-blue/10"
            >
              <Send size={16} />
              <span className="truncate">Transfer Commission</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Middle row: Link + Invite */}
      <div className="mb-4 grid grid-cols-1 gap-4 lg:mb-6 lg:grid-cols-[1.2fr_1fr]">
        {/* Link Card */}
        <div className="rounded-xl border border-line bg-white p-5 sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-2 sm:mb-5">
            <h2 className="font-display text-base font-semibold text-ink sm:text-lg">Link</h2>
            <Link
              href="/dashboard/promotions"
              className="flex items-center gap-1 text-sm font-semibold text-blue hover:underline"
            >
              More <ChevronRight size={16} />
            </Link>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-steel">
                Registration Link
              </label>
              <CopyField value={affiliateSummary.registrationLink} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-steel">
                Referral ID
              </label>
              <CopyField value={affiliateSummary.referralId} />
            </div>
          </div>
        </div>

        {/* Invite Traders Card */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#EAF6FF] to-white p-5 sm:p-6">
          <div className="relative z-10 flex min-h-[160px] flex-col justify-between sm:min-h-[180px]">
            <div className="max-w-[60%]">
              <h2 className="font-display text-lg font-bold leading-tight text-ink sm:text-xl">
                Invite Traders,
                <br />
                <span className="text-blue">Earn More</span>
              </h2>
              <p className="mt-2 text-sm text-steel">
                Share your link with friends and earn lifetime commissions.
              </p>
            </div>

            <button
              type="button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(affiliateSummary.registrationLink);
                } catch {}
              }}
              className="mt-5 flex w-fit items-center justify-center gap-2 rounded-lg bg-blue/10 px-6 py-2.5 text-sm font-semibold text-blue transition hover:bg-blue/20 sm:mt-6"
            >
              Share Now <ArrowRight size={16} />
            </button>
          </div>

          <div
            className="pointer-events-none absolute -bottom-1 -right-1 h-36 w-40 bg-contain bg-right-bottom bg-no-repeat sm:h-44 sm:w-48 md:h-52 md:w-56"
            style={{ backgroundImage: "url('/images/gift.png')" }}
            aria-hidden
          />
        </div>
      </div>

      {/* Team Activity (Last 24 Hours) */}
      <div className="mb-4 rounded-xl border border-line bg-white p-4 sm:mb-6 sm:p-6">
        <div className="mb-4 flex items-center gap-1.5 sm:mb-5">
          <h2 className="font-display text-base font-semibold text-ink sm:text-lg">
            Team Activity
          </h2>
          <span className="rounded-full bg-paper px-2 py-0.5 text-xs font-medium text-steel">
            Last 24 hours
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <div className="flex items-center gap-3 rounded-xl bg-paper p-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <ArrowDownToLine size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-steel">Deposits</p>
              <p className="num text-sm font-bold text-ink sm:text-base">
                {teamActivity24h.deposits}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-paper p-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
              <ArrowUpFromLine size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-steel">Withdrawals</p>
              <p className="num text-sm font-bold text-ink sm:text-base">
                {teamActivity24h.withdrawals}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-paper p-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-blue">
              <FilePlus2 size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-steel">Opened Accounts</p>
              <p className="num text-sm font-bold text-ink sm:text-base">
                {teamActivity24h.openedAccounts}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-paper p-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
              <UserPlus2 size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-steel">New Clients</p>
              <p className="num text-sm font-bold text-ink sm:text-base">
                {teamActivity24h.newClients}
              </p>
            </div>
          </div>
        </div>
      </div>
{/* Current Equity (level-wise breakdown) */}
<div className="mb-4 rounded-xl border border-line bg-white p-4 sm:mb-6 sm:p-6">
  <div className="mb-4 flex flex-wrap items-center justify-between gap-2 sm:mb-5">
    <div className="flex items-center gap-1.5">
      <h2 className="font-display text-base font-semibold text-ink sm:text-lg">
        Current Equity
      </h2>
      <Info size={14} className="text-steel/70" />
    </div>

    <span className="flex items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-1 text-xs font-semibold text-steel">
      <Layers size={12} />
      Currently at Level {currentLevel}
    </span>
  </div>

  <div className="mb-5">
    <p className="text-xs font-medium text-steel">Total team equity</p>
    <p className="num mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
      ${totalEquity.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
    </p>
  </div>

  <div className="space-y-2">
    {levelEquity.map((l) => (
      <div
        key={l.level}
        className={`flex items-center justify-between rounded-lg px-4 py-3 transition ${
          l.level === currentLevel
            ? "border border-line bg-paper"
            : "bg-paper"
        }`}
      >
        <div className="flex items-center gap-2.5">
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
              l.level === currentLevel
                ? "border border-line bg-white text-steel"
                : "border border-line bg-white text-steel"
            }`}
          >
            {l.level}
          </span>

          <div>
            <p className="text-sm font-semibold text-ink">Level {l.level}</p>
            <p className="text-xs text-steel">{l.memberCount} members</p>
          </div>
        </div>

        <span className="num text-sm font-bold text-ink">
          ${l.equity.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
    ))}
  </div>
</div>
      {/* Performance Card */}
      <div className="rounded-xl border border-line bg-white p-4 sm:p-6">
        <div className="mb-4 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
          <div className="flex items-center gap-1.5">
            <h2 className="font-display text-base font-semibold text-ink sm:text-lg">
              Performance
            </h2>
            <Info size={16} className="text-steel" />
          </div>

          <div className="relative w-full sm:w-auto">
            <select className="w-full appearance-none rounded-lg border border-line bg-white py-2 pl-9 pr-10 text-sm font-medium text-ink outline-none focus:border-blue sm:w-auto">
              <option>Month To Date</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
            <CalendarDays
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-steel"
            />
            <ChevronRight
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-steel"
            />
          </div>
        </div>

        {/* Chart Area */}
        <div className="w-full overflow-x-auto">
          <PerformanceChart data={affiliatePerformance} />
        </div>

        {/* Metrics */}
        <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4">
          <div className="flex items-center gap-3 rounded-xl bg-paper p-3.5 sm:gap-4 sm:p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-blue shadow-sm">
              <LineChart size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-steel">Total Referrals</p>
              <p className="num mt-0.5 text-sm font-bold text-ink sm:text-base">
                {affiliateSummary.totalReferrals}{" "}
                <span className="ml-1 text-xs font-semibold text-emerald-600 sm:text-sm">
                  {affiliateSummary.totalReferralsChangePct}
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-paper p-3.5 sm:gap-4 sm:p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-blue shadow-sm">
              <Coins size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-steel">Total Commission</p>
              <p className="num mt-0.5 text-sm font-bold text-ink sm:text-base">
                {affiliateSummary.totalCommission} USD{" "}
                <span className="ml-1 text-xs font-semibold text-emerald-600 sm:text-sm">
                  {affiliateSummary.totalCommissionChangePct}
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-paper p-3.5 sm:gap-4 sm:p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-blue shadow-sm">
              <Users size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-steel">Active Referrals</p>
              <p className="num mt-0.5 text-sm font-bold text-ink sm:text-base">
                {affiliateSummary.activeReferrals}{" "}
                <span className="ml-1 text-xs font-semibold text-emerald-600 sm:text-sm">
                  {affiliateSummary.activeReferralsChangePct}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}