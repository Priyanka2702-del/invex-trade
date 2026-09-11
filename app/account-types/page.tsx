import { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/pages/PageHero";
import AccountTypes from "@/components/home/AccountTypes";

export const metadata: Metadata = {
  title: "Account Types — INVEX TRADE",
  description: "Compare Standard, Professional and Demo trading accounts.",
};

export default function AccountTypesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Accounts"
        title="An account for how you trade"
        description="From your first demo trade to high-volume ECN execution, choose the account that matches your experience and goals."
      />
      <AccountTypes />
    </PageShell>
  );
}
