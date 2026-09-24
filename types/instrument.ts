export type Instrument = {
  symbol: string;
  name: string;
  avgSpread: string;
  spreadLow: string;
  maxLeverage: string;
};

export type MarketCategory = {
  slug: string;
  navLabel: string;
  shortName: string;
  eyebrow: string;
  heading: string;
  description: string;
  badges: string[];
  instruments: Instrument[];
};
