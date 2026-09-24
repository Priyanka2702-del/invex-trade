import { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/pages/PageHero";
import Markets from "@/components/home/Markets";

export const metadata: Metadata = {
  title: "Markets — INVEX TRADE",
  description: "Six asset classes, one execution engine — explore everything you can trade with INVEX.",
};

export default function MarketsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Markets"
        title="Markets, without the wait"
        description="Forex, stocks, indices, commodities, metals and crypto — move between asset classes without switching platforms."
      />
      <Markets />
    </PageShell>
  );
}
