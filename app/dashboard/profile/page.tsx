"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Info, LogOut } from "lucide-react";
import { logout } from "@/lib/session";

export default function ProfilePage() {
  const router = useRouter();
  const [saved, setSaved] = useState(false);

  return (
    <div className="max-w-xl">
      <div className="mb-5">
        <h1 className="font-display text-xl font-semibold text-ink">Profile</h1>
        <p className="text-sm text-steel">Manage your account details.</p>
      </div>

      <div className="mb-6 rounded-xl border border-line bg-white p-6">
        <p className="mb-4 flex items-start gap-1.5 text-xs text-steel">
          <Info size={13} className="mt-0.5 shrink-0" />
          Frontend demo — changes here aren&apos;t saved to a real account yet.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSaved(true);
          }}
        >
          <div className="mb-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs text-steel">First name</label>
              <input className="w-full rounded-lg border border-line px-3 py-2.5 text-sm text-ink" placeholder="Alex" />
            </div>
            <div>
              <label className="mb-1 block text-xs text-steel">Last name</label>
              <input className="w-full rounded-lg border border-line px-3 py-2.5 text-sm text-ink" placeholder="Morgan" />
            </div>
          </div>
          <div className="mb-6">
            <label className="mb-1 block text-xs text-steel">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border border-line px-3 py-2.5 text-sm text-ink"
              placeholder="you@example.com"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-blue px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-deep"
          >
            Save Changes
          </button>
          {saved && <p className="mt-3 text-xs text-steel">Saved locally — no backend is connected yet.</p>}
        </form>
      </div>

      <button
        type="button"
        onClick={() => {
          logout();
          router.push("/login");
        }}
        className="flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-paper"
      >
        <LogOut size={16} /> Logout
      </button>
    </div>
  );
}
