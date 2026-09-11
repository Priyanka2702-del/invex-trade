import { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import CategoryHero from "@/components/trading/CategoryHero";
import CategoryNav from "@/components/trading/CategoryNav";
import TradingTable from "@/components/trading/TradingTable";
import FinalCTA from "@/components/home/FinalCTA";
import { getCategory } from "@/data/market-categories";

const category = getCategory("precious-metals")!;

export const metadata: Metadata = {
  title: `${category.navLabel} — INVEX TRADE`,
  description: category.description,
};

export default function PreciousMetalsPage() {
  return (
    <PageShell>
      <CategoryHero category={category} />
      <CategoryNav />
      <TradingTable instruments={category.instruments} />
      <FinalCTA />
    </PageShell>
  );
}
