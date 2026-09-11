"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Wallet, Bell, Globe, UserCircle, LogOut, Settings } from "lucide-react";
import Link from "next/link";
import MobileNav from "@/components/dashboard/MobileNav";
import { logout } from "@/lib/session";

const notifications = [
  { id: 1, text: "Your identity verification is pending review.", time: "2h ago" },
  { id: 2, text: "Deposit of $500.00 was completed.", time: "1d ago" },
];

export default function TopBar() {
  const [openMenu, setOpenMenu] = useState<"notifications" | "profile" | null>(null);
  const router = useRouter();

  const toggle = (menu: "notifications" | "profile") =>
    setOpenMenu((m) => (m === menu ? null : menu));

  const handleLogout = () => {
    logout();
    setOpenMenu(null);
    router.push("/login");
  };

  return (
    <div className="flex h-16 items-center justify-between gap-3 border-b border-line bg-white px-4 sm:px-6 lg:justify-end lg:px-8">
      <MobileNav />

      <div className="flex items-center gap-3">
        <Link
          href="/dashboard/accounts"
          aria-label="Wallet"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-steel hover:text-ink"
        >
          <Wallet size={17} />
        </Link>

        <Link
          href="/dashboard/funds"
          className="rounded-lg bg-blue-deep px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Deposit
        </Link>

        <div className="mx-1 hidden h-6 w-px bg-line sm:block" />

        {/* Notifications */}
        <div className="relative">
          <button
            type="button"
            aria-label="Notifications"
            onClick={() => toggle("notifications")}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-steel hover:text-ink"
          >
            <Bell size={18} />
          </button>
          {openMenu === "notifications" && (
            <div className="absolute right-0 top-11 z-40 w-72 rounded-xl border border-line bg-white p-2 shadow-lg">
              <p className="px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-steel">
                Notifications
              </p>
              {notifications.map((n) => (
                <div key={n.id} className="rounded-lg px-2 py-2 hover:bg-paper">
                  <p className="text-sm text-ink">{n.text}</p>
                  <p className="mt-0.5 text-xs text-steel">{n.time}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Language — visual placeholder only; not wired to real translations yet */}
        <button
          type="button"
          aria-label="Language"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-steel hover:text-ink"
        >
          <Globe size={18} />
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            type="button"
            aria-label="Profile menu"
            onClick={() => toggle("profile")}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-blue/10 text-blue"
          >
            <UserCircle size={20} />
          </button>
          {openMenu === "profile" && (
            <div className="absolute right-0 top-11 z-40 w-52 rounded-xl border border-line bg-white p-1.5 shadow-lg">
              <Link
                href="/dashboard/profile"
                onClick={() => setOpenMenu(null)}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-ink hover:bg-paper"
              >
                <Settings size={16} /> Profile settings
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-ink hover:bg-paper"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
