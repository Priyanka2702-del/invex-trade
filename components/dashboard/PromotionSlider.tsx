"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Gift } from "lucide-react";
import { promotions } from "@/data/dashboard";

export default function PromotionSlider() {
  const [current, setCurrent] = useState(0);

  const total = promotions.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const promotion = promotions[current];

  return (
    <div className="mb-6 overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
      <div className="relative min-h-[180px] overflow-hidden bg-gradient-to-r from-[#EAF6FF] via-white to-[#F3F8FF]">
        <div className="flex min-h-[180px] items-center px-6 py-6 pr-16 sm:px-8">
          <div className="flex w-full items-center gap-5">
            <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ink text-white sm:flex">
              <Gift size={25} />
            </div>

            <div className="min-w-0 flex-1">
              {promotion.tag && (
                <span className="mb-2 inline-flex rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold text-blue">
                  {promotion.tag}
                </span>
              )}

              <h2 className="font-display text-lg font-bold text-ink sm:text-xl">
                {promotion.title}
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-steel">
                {promotion.description}
              </p>

              <Link
                href="/dashboard/promotions"
                className="mt-3 inline-block text-sm font-semibold text-blue hover:underline"
              >
                View Promotion →
              </Link>
            </div>
          </div>
        </div>

        {/* Previous */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous promotion"
          className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-steel shadow-sm transition hover:text-ink"
        >
          <ChevronLeft size={17} />
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next promotion"
          className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-steel shadow-sm transition hover:text-ink"
        >
          <ChevronRight size={17} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {promotions.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to promotion ${index + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                current === index
                  ? "w-6 bg-blue"
                  : "w-1.5 bg-steel/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}