export type ContentBlock = {
  heading: string;
  body: string[];
  list?: string[];
};

export type SitePage = {
  eyebrow: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
  blocks: ContentBlock[];
};

export const sitePages: Record<string, SitePage> = {
  "execution-policy": {
    eyebrow: "Our Offering",
    title: "Execution Policy",
    description:
      "How INVEX TRADE routes, fills and reports every order placed on our platforms.",
    cta: { label: "Open an Account", href: "/open-account" },
    blocks: [
      {
        heading: "How orders are executed",
        body: [
          "Orders placed through MT4, MT5 or the INVEX App are routed through our execution engine, which aggregates pricing and aims to fill client orders at the best available price at the time of execution.",
        ],
        list: [
          "Market execution on Standard accounts, with typical fills under 40ms in normal conditions",
          "ECN-style execution with direct market access on Professional accounts",
          "No dealing-desk intervention on client order flow",
        ],
      },
      {
        heading: "Slippage and market conditions",
        body: [
          "In fast-moving markets — around news releases, market opens, or periods of low liquidity — the price at which an order is filled may differ from the price requested. This is known as slippage, and it can work in either direction.",
          "We do not artificially widen spreads or delay execution to disadvantage clients, and our execution statistics are reviewed on an ongoing basis.",
        ],
      },
      {
        heading: "Order types",
        body: ["INVEX TRADE supports the standard order types used by active traders:"],
        list: [
          "Market orders — executed immediately at the best available price",
          "Limit orders — executed at a specified price or better",
          "Stop orders — triggered once the market reaches a specified level",
          "Stop-loss and take-profit — attached to open positions for risk management",
        ],
      },
    ],
  },
  "margin-and-leverage": {
    eyebrow: "Our Offering",
    title: "Margin and Leverage",
    description: "Understand how leverage amplifies both potential gains and potential losses.",
    cta: { label: "Compare Account Types", href: "/account-types" },
    blocks: [
      {
        heading: "What leverage means",
        body: [
          "Leverage lets you control a larger position than the funds you deposit, using a fraction of the trade's full value — known as margin — as security. A leverage ratio of 1:100, for example, means a $1,000 deposit can control a $100,000 position.",
          "Leverage magnifies outcomes in both directions: it increases the potential for profit, but it also increases the potential for loss, up to and including losing more than your initial deposit.",
        ],
      },
      {
        heading: "Margin requirements",
        body: [
          "Margin requirements vary by instrument, account type and the regulatory framework applicable to your region. Higher-volatility instruments generally carry higher margin requirements.",
        ],
        list: [
          "Standard accounts: leverage up to 1:500*",
          "Professional accounts: leverage up to 1:30*, in line with applicable regulation",
          "Demo accounts: leverage up to 1:500 on virtual funds",
        ],
      },
      {
        heading: "Margin calls and stop-outs",
        body: [
          "If your account equity falls below the required margin level, you may receive a margin call requesting additional funds. If equity continues to fall to the stop-out level, open positions may be automatically closed to prevent a negative balance.",
          "*Maximum leverage available depends on your country of residence and regulatory classification.",
        ],
      },
    ],
  },
  mt4: {
    eyebrow: "Platforms",
    title: "MetaTrader 4",
    description: "The industry-standard platform, tuned for speed and reliability on INVEX servers.",
    cta: { label: "Open an MT4 Account", href: "/open-account" },
    blocks: [
      {
        heading: "Why traders still choose MT4",
        body: [
          "MetaTrader 4 remains one of the most widely used trading platforms in the world, prized for its stability, one-click trading and deep library of custom indicators and Expert Advisors (EAs).",
        ],
        list: [
          "One-click market execution",
          "Automated trading via Expert Advisors",
          "30+ built-in technical indicators and analytical objects",
          "Available on desktop, web and mobile",
        ],
      },
      {
        heading: "Getting started",
        body: [
          "Download MT4 for Windows or Mac, or trade instantly from your browser with MT4 WebTrader — no installation required. Your INVEX login works across every version of the platform.",
        ],
      },
    ],
  },
  mt5: {
    eyebrow: "Platforms",
    title: "MetaTrader 5",
    description: "A multi-asset platform built for traders who want more markets and more depth.",
    cta: { label: "Open an MT5 Account", href: "/open-account" },
    blocks: [
      {
        heading: "Built for multi-asset trading",
        body: [
          "MetaTrader 5 extends everything traders like about MT4 with additional order types, an economic calendar built into the platform, and deeper market depth for instruments across forex, indices, commodities and shares.",
        ],
        list: [
          "6 order types and 4 execution modes",
          "Built-in economic calendar and depth of market",
          "Netting and hedging position accounting",
          "Available on desktop, web and mobile",
        ],
      },
      {
        heading: "Switching from MT4",
        body: [
          "If you're used to MT4, MT5 will feel familiar within minutes — the same charting workflow and EA support, with a broader instrument set and more granular order management.",
        ],
      },
    ],
  },
  app: {
    eyebrow: "Platforms",
    title: "The INVEX App",
    description: "Your full trading account, in your pocket.",
    cta: { label: "Open an Account", href: "/open-account" },
    blocks: [
      {
        heading: "Trade anywhere",
        body: [
          "The INVEX App puts live pricing, charting and order management on your phone or tablet, fully synced with your desktop and web trading sessions.",
        ],
        list: [
          "Real-time quotes and interactive charts",
          "Place, modify and close trades on the go",
          "Push notifications for price alerts and account activity",
          "Biometric login for fast, secure access",
        ],
      },
      {
        heading: "Available everywhere",
        body: [
          "The INVEX App is built for iOS and Android and uses the same account credentials as MT4, MT5 and the web platform — no separate sign-up required.",
        ],
      },
    ],
  },
  "learning-center": {
    eyebrow: "Discover · Education",
    title: "Learning Center",
    description: "Structured courses for every stage, from your first chart to advanced strategy.",
    cta: { label: "Open a Demo Account", href: "/open-account" },
    blocks: [
      {
        heading: "Start where you are",
        body: [
          "The INVEX Learning Center is organized into beginner, intermediate and advanced tracks covering market mechanics, technical and fundamental analysis, and risk management.",
        ],
        list: [
          "Beginner: markets, order types, reading a chart",
          "Intermediate: technical indicators, chart patterns, correlation",
          "Advanced: multi-timeframe analysis, position sizing, trading psychology",
        ],
      },
      {
        heading: "Learn at your own pace",
        body: [
          "Every course combines short lessons with practical exercises you can test immediately on a free demo account, so theory turns into muscle memory.",
        ],
      },
    ],
  },
  "live-education": {
    eyebrow: "Discover · Education",
    title: "Live Education",
    description: "Weekly live sessions with our trading educators — ask questions in real time.",
    cta: { label: "See This Week's Schedule", href: "/economic-calendar" },
    blocks: [
      {
        heading: "What to expect",
        body: [
          "Join live, interactive webinars covering market outlooks, platform walkthroughs and strategy deep-dives. Sessions run in multiple time zones and languages throughout the week.",
        ],
        list: [
          "Weekly market outlook sessions",
          "Platform and tool walkthroughs for MT4, MT5 and the INVEX App",
          "Live Q&A with trading educators",
        ],
      },
      {
        heading: "Recordings available",
        body: [
          "Can't make a session live? Every webinar is recorded and added to the Learning Center library within 24 hours.",
        ],
      },
    ],
  },
  blog: {
    eyebrow: "Discover · Education",
    title: "INVEX Blog",
    description: "Market perspective, platform updates and trading ideas from the INVEX team.",
    blocks: [
      {
        heading: "What we cover",
        body: [
          "The INVEX Blog publishes regular commentary on macro themes moving the forex, equity and commodity markets, alongside practical guides on platform features and risk management.",
        ],
        list: [
          "Weekly market wrap-ups",
          "Platform feature announcements",
          "Guides on risk management and trading psychology",
        ],
      },
    ],
  },
  "news-and-analysis": {
    eyebrow: "Discover · Trading Tools",
    title: "News and Analysis",
    description: "Timely market commentary to help you understand what's moving the price.",
    blocks: [
      {
        heading: "Stay ahead of the headlines",
        body: [
          "Our analysis desk tracks central bank decisions, earnings, and macroeconomic releases, translating them into context you can use alongside your own chart analysis.",
        ],
        list: [
          "Daily market briefings",
          "Central bank and rate-decision coverage",
          "Earnings season summaries for major shares",
        ],
      },
    ],
  },
  "analytical-tools": {
    eyebrow: "Discover · Trading Tools",
    title: "Analytical Tools",
    description: "Screeners, sentiment data and charting add-ons built for active traders.",
    blocks: [
      {
        heading: "What's included",
        body: [
          "INVEX trading accounts come with access to a suite of analytical tools that sit alongside your MT4/MT5 charts — no separate subscription required.",
        ],
        list: [
          "Client sentiment indicator by instrument",
          "Technical summary and pivot-point widgets",
          "Volatility and correlation matrices",
        ],
      },
    ],
  },
  "economic-calendar": {
    eyebrow: "Discover · Trading Tools",
    title: "Economic Calendar",
    description: "Track the releases that move markets, filtered by impact and instrument.",
    blocks: [
      {
        heading: "Plan around key events",
        body: [
          "Filter upcoming economic releases — interest rate decisions, employment data, inflation reports and more — by country, impact level and the instruments you trade.",
        ],
        list: [
          "High/medium/low impact filters",
          "Actual vs. forecast vs. previous values",
          "Time-zone aware scheduling",
        ],
      },
    ],
  },
  "forex-calculators": {
    eyebrow: "Discover · Trading Tools",
    title: "Forex Calculators",
    description: "Pip value, margin, swap and profit/loss calculators for every account type.",
    blocks: [
      {
        heading: "Plan a trade before you place it",
        body: [
          "Use our calculators to check position sizing, required margin and potential swap costs before you enter a trade — helping you manage risk with more precision.",
        ],
        list: [
          "Pip value calculator",
          "Margin calculator",
          "Swap / overnight financing calculator",
          "Profit and loss calculator",
        ],
      },
    ],
  },
  about: {
    eyebrow: "Company",
    title: "Who is INVEX Trade?",
    description: "A trading platform built around fast execution, transparent pricing and real support.",
    cta: { label: "Open an Account", href: "/open-account" },
    blocks: [
      {
        heading: "Our mission",
        body: [
          "INVEX TRADE was founded on a simple idea: traders deserve a platform that is fast, transparent and genuinely built around their needs — not buried in fine print or hidden markups.",
          "We connect traders to global forex, share, index, commodity and metal markets through institutional-grade infrastructure, wrapped in a platform experience designed for clarity.",
        ],
      },
      {
        heading: "What sets us apart",
        body: ["Three principles guide every product decision we make:"],
        list: [
          "Execution you can trust, published and measured",
          "Pricing you can see, with no hidden markups",
          "Support from people who understand trading, not scripts",
        ],
      },
    ],
  },
  careers: {
    eyebrow: "Company",
    title: "Careers at INVEX",
    description: "We're building the platform for the next generation of traders. Join us.",
    blocks: [
      {
        heading: "Life at INVEX",
        body: [
          "Our team spans engineering, market operations, compliance and client support, working together to keep the platform fast, fair and reliable around the clock.",
        ],
        list: [
          "Remote-friendly, globally distributed team",
          "Continuous investment in platform reliability and security",
          "A culture that values clear communication over jargon",
        ],
      },
      {
        heading: "Open roles",
        body: [
          "We don't have open positions listed at this moment, but we're always glad to hear from people who care about markets and great product. Reach out via our Contact page.",
        ],
      },
    ],
  },
  regulation: {
    eyebrow: "Company",
    title: "Regulation",
    description: "How INVEX TRADE approaches compliance, client funds and oversight.",
    blocks: [
      {
        heading: "Our approach to compliance",
        body: [
          "INVEX TRADE operates under a framework designed around client protection, segregated client funds, and regular internal review of our execution and risk practices.",
        ],
        list: [
          "Client funds held separately from company operating funds",
          "Ongoing internal audits of execution quality",
          "Clear disclosure of risk on every product page",
        ],
      },
      {
        heading: "Jurisdictional availability",
        body: [
          "Product availability, maximum leverage and account terms vary by country of residence in line with applicable local regulation. Full details are confirmed during account opening.",
        ],
      },
    ],
  },
  "legal-documents": {
    eyebrow: "Company",
    title: "Legal Documents",
    description: "The agreements and policies that govern your INVEX account.",
    blocks: [
      {
        heading: "Key documents",
        body: ["The documents below apply to all INVEX TRADE client accounts:"],
        list: [
          "Client Agreement",
          "Risk Disclosure Statement",
          "Privacy Policy",
          "Execution Policy",
          "Complaints Handling Procedure",
        ],
      },
      {
        heading: "Requesting a copy",
        body: [
          "Copies of any legal document are available on request through the Help Center, and are presented for review and acceptance during account opening.",
        ],
      },
    ],
  },
  awards: {
    eyebrow: "Company",
    title: "INVEX Awards",
    description: "Recognition from the trading community and industry press.",
    blocks: [
      {
        heading: "Recognized for execution and support",
        body: [
          "We're proud that INVEX TRADE's focus on transparent pricing and responsive support has been recognized by independent trading publications as the platform has grown.",
        ],
        list: [
          "Best Execution, Retail Trading — Industry Publication Awards",
          "Most Transparent Broker — Trader's Choice Awards",
          "Best Customer Support, CFD Trading — FX Report Awards",
        ],
      },
    ],
  },
  csr: {
    eyebrow: "Company",
    title: "Corporate Social Responsibility",
    description: "How INVEX TRADE gives back beyond the trading floor.",
    blocks: [
      {
        heading: "Financial literacy",
        body: [
          "We believe informed traders make better decisions. A portion of our Learning Center content is made freely available to schools and community groups introducing young people to financial markets.",
        ],
      },
      {
        heading: "Responsible trading",
        body: [
          "We build tools — from risk calculators to negative balance protection on eligible accounts — specifically to help clients trade within their means.",
        ],
      },
    ],
  },
  "help-center": {
    eyebrow: "Company",
    title: "Help Center",
    description: "Answers to the questions we hear most, organized by topic.",
    cta: { label: "Contact Support", href: "/contact" },
    blocks: [
      {
        heading: "Popular topics",
        body: ["Browse common questions by category, or contact support directly for anything not covered below."],
        list: [
          "Account opening and verification",
          "Deposits and withdrawals",
          "Platform setup (MT4, MT5, INVEX App)",
          "Spreads, swaps and margin",
        ],
      },
      {
        heading: "Still need help?",
        body: [
          "Our support team is available 24 hours a day, five days a week, through live chat, email, or the floating support button available on every page.",
        ],
      },
    ],
  },
  reviews: {
    eyebrow: "Company",
    title: "INVEX Reviews",
    description: "What traders say about trading with INVEX.",
    blocks: [
      {
        heading: "From our clients",
        body: [
          "\"Execution has been consistent even during high-volatility news events — that's what keeps me on the platform.\" — Standard account holder",
          "\"The spreads are exactly what's advertised, no surprises on my statement.\" — Professional account holder",
          "\"Support actually understands trading terminology, which makes a real difference when something goes wrong.\" — Demo-to-live convert",
        ],
      },
    ],
  },
  "risk-disclosure": {
    eyebrow: "Legal",
    title: "Risk Disclosure",
    description: "CFD trading carries a high level of risk. Please read this in full before trading.",
    blocks: [
      {
        heading: "General risk warning",
        body: [
          "Contracts for Difference (CFDs) are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.",
          "Past performance of an instrument is not a reliable indicator of future results. Trading CFDs may not be suitable for all investors — please ensure you fully understand the risks involved before trading.",
        ],
      },
      {
        heading: "Leverage risk",
        body: [
          "Leverage can work against you as well as for you, and losses can exceed your initial deposit on accounts without negative balance protection. Only trade with money you can afford to lose.",
        ],
      },
      {
        heading: "Market and liquidity risk",
        body: [
          "Prices can move quickly and unpredictably, particularly around news events, market openings and periods of low liquidity. Orders may be filled at a price different from the one requested (slippage).",
        ],
      },
    ],
  },
  privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    description: "How INVEX TRADE collects, uses and protects your personal information.",
    blocks: [
      {
        heading: "Information we collect",
        body: [
          "We collect information you provide directly during account opening and verification, along with technical and usage data needed to operate and secure the trading platform.",
        ],
      },
      {
        heading: "How we use it",
        body: [
          "Your information is used to open and administer your account, meet regulatory verification requirements, provide customer support, and improve platform reliability and security.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You can request access to, correction of, or deletion of your personal data, subject to our regulatory record-keeping obligations, at any time through the Help Center.",
        ],
      },
    ],
  },
  terms: {
    eyebrow: "Legal",
    title: "Terms of Use",
    description: "The terms governing your use of the INVEX TRADE website and platforms.",
    blocks: [
      {
        heading: "Acceptance of terms",
        body: [
          "By accessing this website or opening an INVEX TRADE account, you agree to be bound by these terms, alongside the Client Agreement and Risk Disclosure Statement provided during account opening.",
        ],
      },
      {
        heading: "Use of the platform",
        body: [
          "Trading accounts are for the personal use of the verified account holder. Automated trading via Expert Advisors is permitted subject to fair-use limits described in the Execution Policy.",
        ],
      },
    ],
  },
  partnership: {
    eyebrow: "Company",
    title: "Partnership",
    description:
      "Partner with INVEX TRADE and earn by introducing traders to fast execution, transparent pricing and a platform built to last.",
    cta: { label: "Become a Partner", href: "/contact" },
    blocks: [
      {
        heading: "Ways to partner",
        body: [
          "Whichever way you're set up — a solo introducer, an established brokerage, or a content creator with a trading audience — there's a partnership model built for you.",
        ],
        list: [
          "Introducing Broker (IB) — refer clients and earn ongoing commission on their trading activity",
          "Affiliate Program — earn per qualified referral through your website, content or social channels",
          "White Label — launch your own branded trading offering on INVEX infrastructure",
        ],
      },
      {
        heading: "Why partner with INVEX",
        body: ["Partners get the same standards we hold ourselves to on execution and transparency:"],
        list: [
          "Competitive, transparent commission structures with no hidden clawbacks",
          "Real-time reporting on referrals, volumes and payouts",
          "A dedicated partnership manager for onboarding and ongoing support",
          "Marketing materials and tracking links ready to use from day one",
        ],
      },
      {
        heading: "Getting started",
        body: [
          "Reach out through our Contact page with a short note on how you'd like to partner, and our partnerships team will follow up with the details and next steps.",
        ],
      },
    ],
  },
};
