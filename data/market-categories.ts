import { MarketCategory } from "@/types/instrument";

export const marketCategories: MarketCategory[] = [
  {
    slug: "forex-trading",
    navLabel: "Forex Trading",
    shortName: "Forex",
    eyebrow: "Discover Forex Trading",
    heading: "Trade the world's currencies, around the clock.",
    description:
      "Access 60+ major, minor and exotic currency pairs with tight spreads and fast execution, from EUR/USD to emerging-market crosses.",
    badges: ["EUR", "USD", "GBP", "JPY", "AUD", "CHF", "CAD", "NZD"],
    instruments: [
      { symbol: "EUR/USD", name: "Euro vs US Dollar", avgSpread: "1.1", spreadLow: "0.1", maxLeverage: "1:500" },
      { symbol: "GBP/USD", name: "British Pound vs US Dollar", avgSpread: "1.4", spreadLow: "0.3", maxLeverage: "1:500" },
      { symbol: "USD/JPY", name: "US Dollar vs Japanese Yen", avgSpread: "1.0", spreadLow: "0.1", maxLeverage: "1:500" },
      { symbol: "AUD/USD", name: "Australian Dollar vs US Dollar", avgSpread: "1.3", spreadLow: "0.2", maxLeverage: "1:500" },
      { symbol: "USD/CHF", name: "US Dollar vs Swiss Franc", avgSpread: "1.5", spreadLow: "0.3", maxLeverage: "1:500" },
      { symbol: "USD/CAD", name: "US Dollar vs Canadian Dollar", avgSpread: "1.6", spreadLow: "0.4", maxLeverage: "1:500" },
      { symbol: "NZD/USD", name: "New Zealand Dollar vs US Dollar", avgSpread: "1.8", spreadLow: "0.5", maxLeverage: "1:500" },
      { symbol: "EUR/GBP", name: "Euro vs British Pound", avgSpread: "1.4", spreadLow: "0.3", maxLeverage: "1:500" },
    ],
  },
  {
    slug: "stock-cfds",
    navLabel: "Stock CFDs",
    shortName: "Stocks",
    eyebrow: "Discover Stock CFDs",
    heading: "Trade shares in the world's biggest companies.",
    description:
      "Go long or short on CFDs over 200+ global equities, from Wall Street heavyweights to leading European and Asian names, without owning the underlying shares.",
    badges: ["US", "UK", "DE", "FR", "JP", "HK"],
    instruments: [
      { symbol: "AAPL", name: "Apple Inc.", avgSpread: "0.06", spreadLow: "0.02", maxLeverage: "1:20" },
      { symbol: "MSFT", name: "Microsoft Corp.", avgSpread: "0.07", spreadLow: "0.02", maxLeverage: "1:20" },
      { symbol: "AMZN", name: "Amazon.com Inc.", avgSpread: "0.08", spreadLow: "0.03", maxLeverage: "1:20" },
      { symbol: "TSLA", name: "Tesla Inc.", avgSpread: "0.10", spreadLow: "0.04", maxLeverage: "1:20" },
      { symbol: "NVDA", name: "NVIDIA Corp.", avgSpread: "0.09", spreadLow: "0.03", maxLeverage: "1:20" },
      { symbol: "META", name: "Meta Platforms Inc.", avgSpread: "0.08", spreadLow: "0.03", maxLeverage: "1:20" },
    ],
  },
  {
    slug: "etf-cfds",
    navLabel: "ETF CFDs",
    shortName: "ETFs",
    eyebrow: "Discover ETF CFDs",
    heading: "One position, a whole basket of exposure.",
    description:
      "Trade CFDs on the world's most popular exchange-traded funds to gain diversified exposure to sectors, regions and themes in a single trade.",
    badges: ["SPY", "QQQ", "DIA", "IWM", "EEM"],
    instruments: [
      { symbol: "SPY", name: "SPDR S&P 500 ETF", avgSpread: "0.04", spreadLow: "0.01", maxLeverage: "1:20" },
      { symbol: "QQQ", name: "Invesco QQQ Trust", avgSpread: "0.05", spreadLow: "0.02", maxLeverage: "1:20" },
      { symbol: "DIA", name: "SPDR Dow Jones ETF", avgSpread: "0.06", spreadLow: "0.02", maxLeverage: "1:20" },
      { symbol: "IWM", name: "iShares Russell 2000 ETF", avgSpread: "0.07", spreadLow: "0.03", maxLeverage: "1:20" },
      { symbol: "EEM", name: "iShares MSCI Emerging Markets ETF", avgSpread: "0.08", spreadLow: "0.03", maxLeverage: "1:20" },
    ],
  },
  {
    slug: "equity-indices",
    navLabel: "Equity Indices",
    shortName: "Indices",
    eyebrow: "Discover Equity Indices",
    heading: "Trade the benchmarks that move the markets.",
    description:
      "Speculate on the direction of major stock indices worldwide — from the US to Europe and Asia — with a single instrument per market.",
    badges: ["US500", "US30", "NAS100", "GER40", "UK100", "JP225"],
    instruments: [
      { symbol: "US500", name: "S&P 500 Index", avgSpread: "0.4", spreadLow: "0.1", maxLeverage: "1:200" },
      { symbol: "US30", name: "Dow Jones 30 Index", avgSpread: "1.6", spreadLow: "0.5", maxLeverage: "1:200" },
      { symbol: "NAS100", name: "Nasdaq 100 Index", avgSpread: "1.0", spreadLow: "0.3", maxLeverage: "1:200" },
      { symbol: "GER40", name: "Germany 40 Index", avgSpread: "0.8", spreadLow: "0.2", maxLeverage: "1:200" },
      { symbol: "UK100", name: "UK 100 Index", avgSpread: "0.9", spreadLow: "0.3", maxLeverage: "1:200" },
      { symbol: "JP225", name: "Japan 225 Index", avgSpread: "6.0", spreadLow: "2.0", maxLeverage: "1:200" },
    ],
  },
  {
    slug: "energies",
    navLabel: "Energies",
    shortName: "Energies",
    eyebrow: "Discover Energy Trading",
    heading: "Trade the markets that power the world.",
    description:
      "Get exposure to crude oil, natural gas and other key energy commodities, reacting instantly to supply, demand and geopolitical shifts.",
    badges: ["WTI", "BRENT", "NGAS"],
    instruments: [
      { symbol: "WTI", name: "US Crude Oil", avgSpread: "3.2", spreadLow: "1.5", maxLeverage: "1:200" },
      { symbol: "BRENT", name: "Brent Crude Oil", avgSpread: "3.4", spreadLow: "1.6", maxLeverage: "1:200" },
      { symbol: "NGAS", name: "Natural Gas", avgSpread: "4.5", spreadLow: "2.0", maxLeverage: "1:200" },
    ],
  },
  {
    slug: "thematic-indices",
    navLabel: "Thematic Indices",
    shortName: "Thematic",
    eyebrow: "Discover Thematic Indices",
    heading: "Trade the trends shaping tomorrow's economy.",
    description:
      "Curated baskets tracking megatrends — technology innovation, clean energy and more — for exposure to a theme rather than a single stock.",
    badges: ["TECH", "GREEN", "AI"],
    instruments: [
      { symbol: "TECH100", name: "Technology Innovators Basket", avgSpread: "1.2", spreadLow: "0.4", maxLeverage: "1:100" },
      { symbol: "GREEN50", name: "Clean Energy Basket", avgSpread: "1.5", spreadLow: "0.5", maxLeverage: "1:100" },
      { symbol: "AI30", name: "Artificial Intelligence Basket", avgSpread: "1.4", spreadLow: "0.5", maxLeverage: "1:100" },
    ],
  },
  {
    slug: "commodities",
    navLabel: "Commodities",
    shortName: "Commodities",
    eyebrow: "Discover Commodities",
    heading: "Diversify beyond currencies and equities.",
    description:
      "Trade a curated selection of agricultural and industrial commodities alongside energies and metals, all from one account.",
    badges: ["COCOA", "COFFEE", "COTTON", "SUGAR", "COPPER"],
    instruments: [
      { symbol: "COCOA", name: "Cocoa", avgSpread: "12", spreadLow: "5", maxLeverage: "1:100" },
      { symbol: "COFFEE", name: "Coffee", avgSpread: "0.35", spreadLow: "0.15", maxLeverage: "1:100" },
      { symbol: "COTTON", name: "Cotton", avgSpread: "0.30", spreadLow: "0.12", maxLeverage: "1:100" },
      { symbol: "SUGAR", name: "Sugar", avgSpread: "0.05", spreadLow: "0.02", maxLeverage: "1:100" },
      { symbol: "COPPER", name: "Copper", avgSpread: "0.004", spreadLow: "0.001", maxLeverage: "1:100" },
    ],
  },
  {
    slug: "precious-metals",
    navLabel: "Precious Metals",
    shortName: "Metals",
    eyebrow: "Discover Precious Metals",
    heading: "Trade gold, silver and beyond.",
    description:
      "Precious metals have long served as a hedge against volatility. Trade CFDs on gold, silver, platinum and palladium with competitive spreads.",
    badges: ["XAU", "XAG", "XPT", "XPD"],
    instruments: [
      { symbol: "XAU/USD", name: "Gold vs US Dollar", avgSpread: "0.18", spreadLow: "0.05", maxLeverage: "1:200" },
      { symbol: "XAG/USD", name: "Silver vs US Dollar", avgSpread: "0.03", spreadLow: "0.01", maxLeverage: "1:200" },
      { symbol: "XPT/USD", name: "Platinum vs US Dollar", avgSpread: "0.45", spreadLow: "0.15", maxLeverage: "1:100" },
      { symbol: "XPD/USD", name: "Palladium vs US Dollar", avgSpread: "2.5", spreadLow: "1.0", maxLeverage: "1:100" },
    ],
  },
  {
    slug: "shares",
    navLabel: "Shares",
    shortName: "Shares",
    eyebrow: "Discover Share Trading",
    heading: "Direct exposure to individual companies.",
    description:
      "Build positions in individual shares across global exchanges, with transparent pricing and no custody fees eating into your holding.",
    badges: ["US", "UK", "DE", "FR"],
    instruments: [
      { symbol: "JPM", name: "JPMorgan Chase & Co.", avgSpread: "0.05", spreadLow: "0.02", maxLeverage: "1:20" },
      { symbol: "V", name: "Visa Inc.", avgSpread: "0.05", spreadLow: "0.02", maxLeverage: "1:20" },
      { symbol: "KO", name: "The Coca-Cola Company", avgSpread: "0.04", spreadLow: "0.01", maxLeverage: "1:20" },
      { symbol: "DIS", name: "The Walt Disney Company", avgSpread: "0.05", spreadLow: "0.02", maxLeverage: "1:20" },
    ],
  },
];

export function getCategory(slug: string): MarketCategory | undefined {
  return marketCategories.find((c) => c.slug === slug);
}
