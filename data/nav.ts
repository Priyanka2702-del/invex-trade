import { MegaMenu } from "@/types/nav";

export const tradingMenu: MegaMenu = {
  key: "trading",
  label: "Trading",
  width: 720,
  columns: [
    {
      heading: "Accounts",
      links: [
        { label: "Account Types", href: "/account-types", description: "Compare Standard, Professional and Demo" },
      ],
    },
    {
      heading: "Markets",
      links: [
        { label: "Forex Trading", href: "/forex-trading" },
        { label: "Stock CFDs", href: "/stock-cfds" },
        { label: "ETF CFDs", href: "/etf-cfds" },
        { label: "Equity Indices", href: "/equity-indices" },
        { label: "Energies", href: "/energies" },
        { label: "Thematic Indices", href: "/thematic-indices" },
        { label: "Commodities", href: "/commodities" },
        { label: "Precious Metals", href: "/precious-metals" },
        { label: "Shares", href: "/shares" },
      ],
    },
    {
      heading: "Our Offering",
      links: [
        { label: "Execution Policy", href: "/execution-policy" },
        { label: "Margin and Leverage", href: "/margin-and-leverage" },
      ],
    },
    {
      heading: "Platforms",
      links: [
        { label: "MT4 Platform", href: "/mt4" },
        { label: "MT5 Platform", href: "/mt5" },
        { label: "INVEX App", href: "/app" },
      ],
    },
  ],
};

export const discoverMenu: MegaMenu = {
  key: "discover",
  label: "Discover",
  width: 460,
  columns: [
    {
      heading: "Education",
      links: [
        { label: "Learning Center", href: "/learning-center" },
        { label: "Live Education", href: "/live-education" },
        { label: "INVEX Blog", href: "/blog" },
      ],
    },
    {
      heading: "Trading Tools",
      links: [
        { label: "News and Analysis", href: "/news-and-analysis" },
        { label: "Analytical Tools", href: "/analytical-tools" },
        { label: "Economic Calendar", href: "/economic-calendar" },
        { label: "Forex Calculators", href: "/forex-calculators" },
      ],
    },
  ],
};

export const companyMenu: MegaMenu = {
  key: "company",
  label: "Company",
  width: 280,
  columns: [
    {
      heading: "Company",
      links: [
        { label: "Who is INVEX Trade?", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Regulation", href: "/regulation" },
        { label: "Legal Documents", href: "/legal-documents" },
        { label: "INVEX Awards", href: "/awards" },
        { label: "CSR", href: "/csr" },
        { label: "Contact Us", href: "/contact" },
        { label: "Help Center", href: "/help-center" },
        { label: "INVEX Reviews", href: "/reviews" },
      ],
    },
  ],
};

export const megaMenus: MegaMenu[] = [tradingMenu, discoverMenu, companyMenu];

// Kept for any legacy references — mirrors the top-level nav labels.
export const navLinks = [
  { label: "Trading", href: "/forex-trading" },
  { label: "Discover", href: "/learning-center" },
  { label: "Company", href: "/about" },
];
