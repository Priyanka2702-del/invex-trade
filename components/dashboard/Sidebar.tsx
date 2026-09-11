"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ShieldCheck, Download, LogOut, ChevronUp, ChevronLeft, ChevronRight,
  Home, Wallet2, Banknote, LineChart, Copy, Gift, FolderDown,
  Wrench, Gem, UserCircle, Radio,
} from "lucide-react";
import Logo from "@/components/ui/Logo";
import { logout } from "@/lib/session";

const accountLinks = [
  { label: "Verification", href: "/dashboard/verification", icon: ShieldCheck },
  { label: "Download", href: "/dashboard/download", icon: Download },
];

const mainLinks = [
  { label: "Home", href: "/dashboard", icon: Home },
  { label: "Accounts", href: "/dashboard/accounts", icon: Wallet2 },
  { label: "Funds", href: "/dashboard/funds", icon: Banknote },
  { label: "INVEX Trading", href: "/dashboard/trading", icon: LineChart, badge: "NEW" },
  { label: "INVEX Copy", href: "/dashboard/copy", icon: Copy, badge: "NEW" },
  { label: "Promotions", href: "/dashboard/promotions", icon: Gift },
  { label: "Downloads", href: "/dashboard/downloads", icon: FolderDown },
  { label: "Tools", href: "/dashboard/tools", icon: Wrench },
  { label: "Points Mall", href: "/dashboard/points", icon: Gem },
  { label: "Profile", href: "/dashboard/profile", icon: UserCircle },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [accountOpen, setAccountOpen] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) =>
    href === "/dashboard" ? pathname === "/dashboard" : pathname?.startsWith(href);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <aside
      className={`relative hidden shrink-0 flex-col border-r border-line bg-white py-5 transition-all duration-200 lg:flex ${
        collapsed ? "w-[76px] px-3" : "w-64 px-5"
      }`}
    >
      {/* Collapse toggle */}
      <button
        type="button"
        onClick={() => setCollapsed((v) => !v)}
        className="absolute -right-3 top-6 flex h-6 w-6 items-center justify-center rounded-full border border-line bg-white text-steel shadow-sm hover:text-ink"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* Logo */}
      <Link href="/" className="mb-6 flex items-center">
        <Logo />
      </Link>

      {/* Live Trading — clearly visible entry point into the future MT5 flow */}
      <Link
        href="/dashboard/live-trading"
        className={`mb-4 flex items-center gap-3 rounded-lg bg-blue-deep px-3 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 ${
          collapsed ? "justify-center" : ""
        }`}
        title={collapsed ? "Live Trading" : undefined}
      >
        <Radio size={17} className="shrink-0 text-cyan" />
        {!collapsed && "Live Trading"}
      </Link>

      {/* Account / UID block */}
      <button
        type="button"
        onClick={() => setAccountOpen((v) => !v)}
        className="mb-4 flex w-full items-center gap-3 rounded-lg border border-line px-3 py-2.5 text-left hover:bg-paper"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue/10 font-display text-sm font-bold text-blue">
          IN
        </div>
        {!collapsed && (
          <>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold text-ink">UID: 3769969</div>
              <div className="text-xs text-steel">Individual Account</div>
            </div>
            <ChevronUp
              size={16}
              className={`shrink-0 text-steel transition-transform ${accountOpen ? "" : "rotate-180"}`}
            />
          </>
        )}
      </button>

      {accountOpen && !collapsed && (
        <nav className="mb-4 flex flex-col gap-0.5 border-b border-line pb-4">
          {accountLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                isActive(l.href) ? "bg-blue/10 text-blue" : "text-steel hover:bg-paper hover:text-ink"
              }`}
            >
              <l.icon size={17} />
              {l.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-steel transition hover:bg-paper hover:text-ink"
          >
            <LogOut size={17} />
            Logout
          </button>
        </nav>
      )}

      {/* Main nav */}
      <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto">
        {mainLinks.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              isActive(l.href) ? "bg-blue text-white" : "text-steel hover:bg-paper hover:text-ink"
            } ${collapsed ? "justify-center" : ""}`}
            title={collapsed ? l.label : undefined}
          >
            <l.icon size={17} className="shrink-0" />
            {!collapsed && (
              <span className="flex flex-1 items-center justify-between">
                {l.label}
                {l.badge && (
                  <span className="rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                    {l.badge}
                  </span>
                )}
              </span>
            )}
          </Link>
        ))}
      </nav>

      {/* Mobile logout fallback (main nav area doubles up on small/collapsed states) */}
      {collapsed && (
        <button
          type="button"
          onClick={handleLogout}
          className="mt-2 flex items-center justify-center rounded-lg px-3 py-2.5 text-steel transition hover:bg-paper hover:text-ink"
          title="Logout"
        >
          <LogOut size={17} />
        </button>
      )}
    </aside>
  );
}
