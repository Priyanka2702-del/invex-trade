import { watchlist } from "@/data/dashboard";

export default function Watchlist() {
  return (
    <div className="border border-line bg-white">
      <div className="border-b border-line px-4 py-3 text-sm font-semibold text-ink">Watchlist</div>
      <ul>
        {watchlist.map((w) => (
          <li
            key={w.symbol}
            className="flex items-center justify-between border-b border-line px-4 py-3 text-sm last:border-b-0 hover:bg-paper"
          >
            <span className="font-medium text-ink">{w.symbol}</span>
            <div className="text-right">
              <div className="num text-ink">{w.price}</div>
              <div className={`text-xs ${w.up ? "text-emerald-600" : "text-red-600"}`}>{w.change}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
