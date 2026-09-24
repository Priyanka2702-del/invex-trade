export type AccountType = {
  slug: string;
  name: string;
  description: string;
  featured?: boolean;
  fields: { label: string; value: string }[];
  cta: string;
};

export const accounts: AccountType[] = [
  {
    slug: "standard",
    name: "Standard",
    description: "For traders building consistent habits.",
    fields: [
      { label: "Min. Deposit", value: "$100" },
      { label: "Spreads from", value: "1.0 pips" },
      { label: "Leverage up to", value: "1:500*" },
      { label: "Execution", value: "Market" },
    ],
    cta: "Open Account",
  },
  {
    slug: "professional",
    name: "Professional",
    description: "For experienced, high-volume traders.",
    featured: true,
    fields: [
      { label: "Min. Deposit", value: "$2,000" },
      { label: "Spreads from", value: "0.0 pips" },
      { label: "Leverage up to", value: "1:30*" },
      { label: "Execution", value: "ECN" },
    ],
    cta: "Open Account",
  },
  {
    slug: "demo",
    name: "Demo",
    description: "Practice with virtual funds, no risk.",
    fields: [
      { label: "Min. Deposit", value: "$0" },
      { label: "Virtual Balance", value: "$10,000" },
      { label: "Leverage up to", value: "1:500*" },
      { label: "Duration", value: "30 days" },
    ],
    cta: "Try Demo",
  },
];
