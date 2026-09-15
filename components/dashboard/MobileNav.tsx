"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu, X, ShieldCheck, Download, LogOut,
  Home, Wallet2, Banknote, LineChart, Copy, Gift, FolderDown,
  Wrench, Gem, UserCircle, Radio, TrendingUp,
} from "lucide-react";
import Logo from "@/components/ui/Logo";
import { logout } from "@/lib/session";

const links = [
  { label: "Home", href: "/dashboard", icon: Home },
  { label: "Live Trading", href: "/dashboard/live-trading", icon: Radio },
  { label: "Accounts", href: "/dashboard/accounts", icon: Wallet2 },
  { label: "Funds", href: "/dashboard/funds", icon: Banknote },
  { label: "INVEX Trading", href: "/dashboard/trading", icon: LineChart },
  { label: "INVEX Copy", href: "/dashboard/copy", icon: Copy },
  { label: "PAMM Invest", href: "/dashboard/pamm-invest", icon: TrendingUp },
  { label: "Promotions", href: "/dashboard/promotions", icon: Gift },
  { label: "Downloads", href: "/dashboard/downloads", icon: FolderDown },
  { label: "Tools", href: "/dashboard/tools", icon: Wrench },
  { label: "Points Mall", href: "/dashboard/points", icon: Gem },
  { label: "Verification", href: "/dashboard/verification", icon: ShieldCheck },
  { label: "Download", href: "/dashboard/download", icon: Download },
  { label: "Profile", href: "/dashboard/profile", icon: UserCircle },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) =>
    href === "/dashboard" ? pathname === "/dashboard" : pathname?.startsWith(href);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-steel hover:text-ink"
      >
        <Menu size={18} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setOpen(false)} />
          <div className="relative flex h-full w-72 max-w-[85vw] flex-col overflow-y-auto bg-white px-5 py-5">
            <div className="mb-6 flex items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-steel hover:text-ink"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-0.5">
              {links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                    isActive(l.href) ? "bg-blue text-white" : "text-steel hover:bg-paper hover:text-ink"
                  }`}
                >
                  <l.icon size={17} className="shrink-0" />
                  {l.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => {
                logout();
                setOpen(false);
                router.push("/login");
              }}
              className="mt-4 flex items-center gap-3 rounded-lg border-t border-line px-3 pt-4 text-left text-sm font-medium text-steel hover:text-ink"
            >
              <LogOut size={17} />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}