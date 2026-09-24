import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-32">
      {/* Background Soft Glow Effect */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.06),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative flex flex-col items-center justify-center text-center">
          
          <Reveal>
            <div className="mx-auto max-w-3xl">
              
              {/* Optional Premium Badge */}
              <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                24/7 Global Customer Support
              </div>

              {/* Main Headline — Gradient Applied */}
              <h2 className="font-display text-4xl font-bold tracking-tight bg-gradient-to-r from-[#00C8FF] to-[#0052D4] bg-clip-text text-transparent sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
Professional Support, Every Step of the Way              </h2>

              {/* Subtitle */}
              <p className="mx-auto mt-5 max-w-xl text-base text-slate-600 sm:text-lg lg:text-xl leading-relaxed">
                Whenever you need us we&apos;re just a few seconds away, 24/7, in extensive language options.
              </p>

              {/* Contact Us Button */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#0f172a] px-9 py-4 text-base font-semibold text-white shadow-xl shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-900/20 active:translate-y-0"
                >
                  Contact Us
                </Link>
              </div>

            </div>
          </Reveal>

          {/* ========== IMAGE - MOBILE (In Flow, Centered, No Overlap) ========== */}
          <div className="mt-10 flex justify-center md:hidden">
            <img
              src="/images/contact.png"
              alt="Contact Us"
              className="h-40 w-40 object-contain"
            />
          </div>

          {/* ========== IMAGE - DESKTOP (Absolute Right Side) ========== */}
          <div className="pointer-events-none absolute -bottom-20 -right-20 hidden h-[320px] w-[320px] md:block lg:-bottom-28 lg:-right-24 lg:h-[440px] lg:w-[440px]">
            <img
              src="/images/contact.png"
              alt="Contact Us"
              className="h-full w-full object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}