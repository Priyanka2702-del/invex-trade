import { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import BonusForm from "@/components/forms/BonusForm";

export const metadata: Metadata = {
  title: "Claim Your 50% Bonus — INVEX TRADE",
  description: "Register with INVEX TRADE and claim up to a 50% deposit bonus, worth up to $100.",
};

export default function BonusPage() {
  return (
    <PageShell alwaysSolidHeader>
      <div className="mx-auto max-w-md px-6 py-14 lg:px-10">
        <BonusForm />
      </div>
    </PageShell>
  );
}