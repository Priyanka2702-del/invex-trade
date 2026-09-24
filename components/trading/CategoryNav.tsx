"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { marketCategories } from "@/data/market-categories";

export default function CategoryNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-20 z-30 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-content gap-1 overflow-x-auto px-6 lg:px-10">
        {marketCategories.map((cat) => {
          const active = pathname === `/${cat.slug}`;
          return (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              aria-current={active ? "page" : undefined}
              className={`relative whitespace-nowrap px-4 py-4 text-sm font-medium transition-colors ${
                active ? "text-blue" : "text-steel hover:text-ink"
              }`}
            >
              {cat.navLabel}
              {active && (
                <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-blue" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
