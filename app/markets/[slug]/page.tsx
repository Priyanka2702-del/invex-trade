import { notFound } from "next/navigation";
import { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import CategoryHero from "@/components/trading/CategoryHero";
import TradingTable from "@/components/trading/TradingTable";
import FinalCTA from "@/components/home/FinalCTA";
import { markets } from "@/data/markets";
import { getCategory } from "@/data/market-categories";
import { Instrument, MarketCategory } from "@/types/instrument";

// Maps the homepage's six broad asset classes onto the detailed category
// pages/data already built for the Trading mega menu, so both entry points
// share one source of truth for instruments.
const categoryBySlug: Record<string, string> = {
  forex: "forex-trading",
  stocks: "stock-cfds",
  indices: "equity-indices",
  commodities: "commodities",
  metals: "precious-metals",
};

const cryptoInstruments: Instrument[] = [
  { symbol: "BTC/USD", name: "Bitcoin vs US Dollar", avgSpread: "18", spreadLow: "6", maxLeverage: "1:20" },
  { symbol: "ETH/USD", name: "Ethereum vs US Dollar", avgSpread: "1.4", spreadLow: "0.5", maxLeverage: "1:20" },
  { symbol: "SOL/USD", name: "Solana vs US Dollar", avgSpread: "0.06", spreadLow: "0.02", maxLeverage: "1:10" },
];

export function generateStaticParams() {
  return markets.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const market = markets.find((m) => m.slug === params.slug);
  return {
    title: market ? `${market.name} — INVEX TRADE` : "Markets — INVEX TRADE",
    description: market?.tagline ?? "Explore markets available on INVEX TRADE.",
  };
}

export default function MarketOverviewPage({ params }: { params: { slug: string } }) {
  const market = markets.find((m) => m.slug === params.slug);
  if (!market) notFound();

  const mappedSlug = categoryBySlug[params.slug];
  const category = mappedSlug ? getCategory(mappedSlug) : undefined;

  const displayCategory: MarketCategory = category ?? {
    slug: market.slug,
    navLabel: market.name,
    shortName: market.name,
    eyebrow: `Discover ${market.name}`,
    heading: `Trade ${market.name} CFDs with INVEX.`,
    description: market.tagline,
    badges: ["BTC", "ETH", "SOL"],
    instruments: cryptoInstruments,
  };

  return (
    <PageShell>
      <CategoryHero category={displayCategory} />
      <TradingTable instruments={displayCategory.instruments} />
      <FinalCTA />
    </PageShell>
  );
}
