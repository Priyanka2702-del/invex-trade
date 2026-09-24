import Link from "next/link";
import Logo from "@/components/ui/Logo";

// ================================
// SOCIAL LINKS
// ================================
const socialLinks = [
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "Instagram", href: "#", icon: "instagram" },
  { name: "X", href: "#", icon: "x" },
  { name: "YouTube", href: "#", icon: "youtube" },
  { name: "LinkedIn", href: "#", icon: "linkedin" },
  { name: "TikTok", href: "#", icon: "tiktok" },
  { name: "Telegram", href: "#", icon: "telegram" },
];

// ================================
// FOOTER COLUMNS
// ================================
const columns = [
  {
    title: "WHY INVEX",
    items: [
      { label: "Why Trade With Us", href: "/about#advantages" },
      { label: "Our Key Advantages", href: "/about#advantages" },
      { label: "Execution Policy", href: "/execution-policy" },
      { label: "Stable Max Leverage", href: "/leverage" },
      { label: "INVEX Reviews", href: "/reviews" },
      { label: "Referral Program", href: "/refer-a-friend" },
    ],
  },

  {
    title: "ACCOUNTS",
    items: [
      { label: "Account Types", href: "/account-types" },
      { label: "Standard Account", href: "/account-types#standard" },
      { label: "Professional Account", href: "/account-types#pro" },
      { label: "Demo Account", href: "/demo-account" },
      { label: "Open Account", href: "/open-account" },
      { label: "Login", href: "/login" },
    ],
  },

  {
    title: "MARKETS",
    items: [
      { label: "Forex", href: "/forex-trading" },
      { label: "Stock CFDs", href: "/stock-cfds" },
      { label: "Indices", href: "/equity-indices" },
      { label: "Commodities", href: "/commodities" },
      { label: "Precious Metals", href: "/precious-metals" },
      { label: "Energies", href: "/energies" },
      { label: "Shares", href: "/shares" },
    ],
  },

  {
    title: "PLATFORMS",
    items: [
      { label: "MT4 Platform", href: "/mt4" },
      { label: "MT5 Platform", href: "/mt5" },
      { label: "WebTrader", href: "/webtrader" },
      { label: "INVEX App", href: "/app" },
    ],
  },

  {
    title: "SUPPORT & COMPANY",
    items: [
      { label: "About INVEX", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Regulation & License", href: "/regulation" },
      { label: "Legal Documents", href: "/legal-documents" },
      { label: "Contact Us", href: "/contact" },
      { label: "Help Center", href: "/help-center" },
    ],
  },
];

// ================================
// SOCIAL ICON
// ================================
function SocialIcon({ type }: { type: string }) {
  const iconClass = "h-5 w-5 transition-all duration-200";

  switch (type) {
    case "facebook":
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );

    case "instagram":
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.79 4 4c0 2.21-1.791 4-4 4z" />
        </svg>
      );

    case "x":
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      );

    case "youtube":
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );

    case "linkedin":
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );

    case "tiktok":
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.54-.53 3.06-1.33 4.36-1.35 2.23-3.84 3.63-6.43 3.65-2.63.05-5.18-1.34-6.52-3.61-1.09-1.82-1.38-4.08-.81-6.14.62-2.24 2.32-4.09 4.49-4.91 1.51-.57 3.18-.45 4.72-.08-.01 1.42-.02 2.84-.03 4.26-1.25-.43-2.71-.41-3.87.29-1.37.82-2.14 2.45-1.98 4.02.15 1.61 1.36 2.99 2.94 3.31 1.56.32 3.21-.38 4.06-1.75.5-.78.73-1.71.72-2.64V.02z" />
        </svg>
      );

    case "telegram":
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      );

    default:
      return null;
  }
}

// ================================
// FOOTER
// ================================
export default function Footer() {
  return (
    <footer className="flex w-full flex-col">

      {/* =========================================
          TOP SECTION — CONNECT WITH INVEX
      ========================================= */}
      <div className="border-t border-slate-100 bg-white px-6 py-12 lg:px-10 lg:py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">

          {/* Heading */}
          <div>
            <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-left md:text-[2.25rem]">
              Stay Connected With INVEX
            </h2>

            <p className="mt-2 text-center text-sm text-slate-500 md:text-left">
              Follow us for market insights, updates and trading news.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
              >
                <SocialIcon type={social.icon} />
              </Link>
            ))}
          </div>

        </div>
      </div>

      {/* =========================================
          MIDDLE SECTION — FOOTER LINKS
      ========================================= */}
      <div className="bg-[#f5f6f8] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-10">

          {columns.map((column) => (
            <div key={column.title}>

              <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                {column.title}
              </h4>

              <ul className="space-y-3.5">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      </div>

      {/* =========================================
          RISK WARNING
      ========================================= */}
      <div className="border-t border-slate-200 bg-white px-6 py-5 lg:px-10">
       

          {/* Bottom Legal */}
          <div className="mt-5 flex flex-col items-center justify-between gap-3 border-t border-dashed border-slate-200 pt-5 text-xs text-slate-400 sm:flex-row">

            <p>
              © 2026 INVEX TRADE. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/privacy"
                className="transition-colors hover:text-slate-700"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition-colors hover:text-slate-700"
              >
                Terms of Service
              </Link>

              <Link
                href="/cookie-policy"
                className="transition-colors hover:text-slate-700"
              >
                Cookie Policy
              </Link>

              <Link
                href="/risk-disclosure"
                className="transition-colors hover:text-slate-700"
              >
                Risk Disclosure
              </Link>
            </div>

          </div>

        </div>

    </footer>
  );
}