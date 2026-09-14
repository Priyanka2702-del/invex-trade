"use client";

import { useState } from "react";
import { Info, Users, TrendingUp } from "lucide-react";
import { copyTraders } from "@/data/dashboard";

export default function CopyPage() {
  const [following, setFollowing] = useState<Record<string, boolean>>({});

  return (
    <div>
      <div className="mb-1">
        <h1 className="font-display text-xl font-semibold text-ink">INVEX Copy</h1>
      </div>
      <p className="mb-4 flex items-start gap-1.5 text-xs text-steel">
        
      </p>
     

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {copyTraders.map((t) => (
          <div key={t.id} className="rounded-xl border border-line bg-white p-5">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue/10 font-display text-sm font-bold text-blue">
                {t.name.split(" ").map((w) => w[0]).join("")}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-steel">{t.riskLevel} risk</p>
              </div>
            </div>

            <div className="mb-4 grid grid-cols-3 gap-2 text-center">
              <div>
                <p className={`num text-sm font-semibold ${t.up ? "text-emerald-600" : "text-red-600"}`}>
                  {t.roi30d}
                </p>
                <p className="text-[11px] text-steel">30d ROI</p>
              </div>
              <div>
                <p className="num text-sm font-semibold text-ink">{t.winRate}</p>
                <p className="text-[11px] text-steel">Win rate</p>
              </div>
              <div>
                <p className="num flex items-center justify-center gap-1 text-sm font-semibold text-ink">
                  <Users size={12} /> {t.followers}
                </p>
                <p className="text-[11px] text-steel">Followers</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setFollowing((f) => ({ ...f, [t.id]: !f[t.id] }))}
              className={`flex w-full items-center justify-center gap-1.5 rounded-lg py-2.5 text-sm font-semibold transition ${
                following[t.id]
                  ? "bg-paper text-ink"
                  : "bg-blue text-white hover:bg-blue-deep"
              }`}
            >
              <TrendingUp size={15} />
              {following[t.id] ? "Following" : "Copy"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
