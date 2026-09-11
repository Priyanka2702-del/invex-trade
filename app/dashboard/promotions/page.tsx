import Link from "next/link";
import { Gift } from "lucide-react";
import { promotions } from "@/data/dashboard";

export default function PromotionsPage() {
  return (
    <div>
      <div className="mb-5">
        <h1 className="font-display text-xl font-semibold text-ink">Promotions</h1>
        <p className="text-sm text-steel">Current offers and rewards for INVEX TRADE clients.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {promotions.map((p) => (
          <div key={p.id} className="flex flex-col rounded-xl border border-line bg-white p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-deep/10 text-blue-deep">
              <Gift size={18} />
            </div>
            {p.tag && (
              <span className="mb-2 w-fit rounded-full bg-blue/10 px-2.5 py-0.5 text-xs font-semibold text-blue">
                {p.tag}
              </span>
            )}
            <h2 className="font-display text-base font-semibold text-ink">{p.title}</h2>
            <p className="mt-2 flex-1 text-sm text-steel">{p.description}</p>
            <Link
              href="/dashboard/funds"
              className="mt-4 text-sm font-semibold text-blue hover:underline"
            >
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
