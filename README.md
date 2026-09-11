# INVEX TRADE

A Forex/CFD broker website starter, built with Next.js (App Router), TypeScript, and Tailwind CSS. Currently includes the homepage and a trading dashboard UI; more pages (markets, accounts, platforms, tools, education, auth) are being built out incrementally.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (scroll reveals, hero entrance)
- Lucide React (icons)

## Project Structure

```
app/                 Routes (App Router)
  page.tsx           Homepage
  dashboard/page.tsx Trading dashboard
components/
  layout/            Header, Footer
  home/              Homepage sections (Hero, Markets, WhyTrade, etc.)
  dashboard/         Dashboard panels (Sidebar, Watchlist, OrderPanel, etc.)
  ui/                Shared primitives (Logo, Reveal)
data/                Content/data separated from components
types/               Shared TypeScript types
public/images/       Logo and static images
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm run start
```

## Notes

- **Fonts**: This build uses a system font stack (no external font fetch) so it builds reliably with zero network dependency. If you'd like to switch to a specific webfont (e.g. via `next/font/google`), that's a small change in `app/layout.tsx` and `tailwind.config.ts`.
- **Placeholder data**: Prices, statistics, account terms, and regulatory text throughout the site are clearly marked placeholders (see inline `*` notes and "[Regulatory information to be added]" in the footer). Replace with verified figures before going live — do not present placeholder statistics, testimonials, or licenses as real.
- **Logo**: `public/images/logo.png` is a raster PNG with a white background. It renders fine on light sections; if you want it on a dark background anywhere, you'll want a transparent-background version (PNG or SVG).
- **Dashboard data**: Watchlist, positions, and balances in `/dashboard` are mock data in `data/dashboard.ts` — wire up to a real data/broker API when ready.

## Environment Variables

None required yet. A `.env.example` will be added once backend/API integration (auth, live pricing, etc.) is wired in.
