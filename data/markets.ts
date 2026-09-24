export type MarketAsset = {
  slug: string;
  name: string;
  tagline: string;
  count: string;
};

export const markets: MarketAsset[] = [
  { slug: "forex", name: "Forex", tagline: "60+ currency pairs, tight spreads", count: "60+" },
  { slug: "stocks", name: "Stocks", tagline: "CFDs on major global shares", count: "200+" },
  { slug: "indices", name: "Indices", tagline: "Trade the world's benchmarks", count: "15+" },
  { slug: "commodities", name: "Commodities", tagline: "Energies and softs", count: "20+" },
  { slug: "metals", name: "Metals", tagline: "Gold, silver, platinum", count: "6" },
  { slug: "crypto", name: "Crypto", tagline: "Major digital assets, long or short", count: "25+" },
];
