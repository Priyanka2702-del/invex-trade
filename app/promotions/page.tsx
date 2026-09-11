import { Metadata } from "next";
import Link from "next/link";
import { Gift, CheckCircle2 } from "lucide-react";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "50% Welcome Rewards — INVEX TRADE",
  description: "Deposit $100 or more and claim up to 50% welcome rewards on your INVEX TRADE account.",
};

const terms = [
  "Available to new INVEX TRADE clients opening their first live account.",
  "Deposit $100 USD or more (or currency equivalent) to become eligible.",
  "Reward is credited up to 50% of your qualifying deposit, subject to the maximum cap published at claim time.",
  "Reward funds are subject to a trading volume requirement before withdrawal — see full Terms & Conditions.",
  "One reward per client, per account. INVEX TRADE reserves the right to amend or withdraw this offer at any time.",
];

export default function PromotionsPage() {
  return (
    <PageShell alwaysSolidHeader>
      <section className="bg-blue-deep py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-2xl px-4">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
            <Gift size={26} className="text-cyan" />
          </div>
          <h1 className="font-display text-3xl font-bold sm:text-4xl">
            Up to <span className="text-cyan">50% Welcome Rewards</span>
          </h1>
          <p className="mt-4 text-white/70">
            Deposit $100 or more into your new INVEX TRADE account and claim your reward instantly.
          </p>
          <Link
            href="/open-account"
            className="mt-8 inline-block rounded-xl bg-gradient-to-r from-cyan to-blue px-8 py-3.5 text-sm font-semibold text-white transition hover:scale-105"
          >
            Open Account & Claim
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-12 sm:py-16">
        <h2 className="font-display text-lg font-semibold text-ink">Eligibility & Terms</h2>
        <ul className="mt-5 space-y-3">
          {terms.map((t) => (
            <li key={t} className="flex items-start gap-3 text-sm text-steel">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue" />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-xs text-steel">
          Trading CFDs carries a high level of risk. Please read our{" "}
          <Link href="/risk-disclosure" className="text-blue hover:underline">
            Risk Disclosure
          </Link>{" "}
          before opening an account.
        </p>
      </section>
    </PageShell>
  );
}