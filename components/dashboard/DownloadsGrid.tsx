import { Monitor, Smartphone, Globe2, Info } from "lucide-react";
import { downloadPlatforms } from "@/data/dashboard";

const categoryIcon = {
  Desktop: Monitor,
  Mobile: Smartphone,
  Web: Globe2,
  Tools: Monitor,
} as const;

export default function DownloadsGrid() {
  return (
    <div>
      <div className="mb-5">
        <h1 className="font-display text-xl font-semibold text-ink">Downloads</h1>
        <p className="text-sm text-steel">Get the INVEX TRADE platform on any device.</p>
      </div>

      <p className="mb-4 flex items-start gap-1.5 text-xs text-steel">
        <Info size={13} className="mt-0.5 shrink-0" />
        Real download links will appear here once the platform build/hosting is finalized —
        nothing below is a working download yet.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {downloadPlatforms.map((d) => {
          const Icon = categoryIcon[d.category];
          return (
            <div key={d.id} className="flex flex-col rounded-xl border border-line bg-white p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue/10 text-blue">
                <Icon size={18} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-steel">{d.category}</p>
              <h2 className="mt-1 font-display text-base font-semibold text-ink">{d.name}</h2>
              <p className="mt-2 flex-1 text-sm text-steel">{d.description}</p>
              <button
                type="button"
                disabled={!d.available}
                className="mt-4 w-full rounded-lg bg-paper py-2.5 text-sm font-semibold text-steel disabled:cursor-not-allowed"
              >
                {d.available ? "Download" : "Coming soon"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
