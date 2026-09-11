import Reveal from "@/components/ui/Reveal";

export default function FinalCTA() {
  return (
    <section className="w-full bg-slate-50 px-4 py-16 sm:px-6 md:py-24 lg:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-[#00C8FF] to-[#0052D4] bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-[52px]">
            Empowering Every Type of Trader
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
            We provide the tools, conditions, and support to eliminate obstacles that stand in the way of your trading journey.
          </p>
        </Reveal>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          
          {/* ------------------------------------------------ */}
          {/* Card 1: Light Theme (New to Trading) */}
          {/* ------------------------------------------------ */}
          <Reveal delay={0.1}>
            <div className="group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-[1.5rem] bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1 sm:min-h-[340px] sm:p-8 md:min-h-[420px] md:rounded-[2rem] md:p-12">
              
              {/* Image — top right */}
              <div className="pointer-events-none absolute -top-2 right-0 h-40 w-40 opacity-90 transition-transform duration-500 group-hover:scale-105 sm:-top-4 sm:h-52 sm:w-52 md:h-72 md:w-72 lg:h-80 lg:w-80">
                <img
                  src="/images/trader.png"
                  alt="New to Trading"
                  className="h-full w-full object-contain object-right-top"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 w-full max-w-sm">
                <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
                  Just Getting Started?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Take advantage of our risk-free demo accounts. Master the markets with access to comprehensive educational resources and daily market insights.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ------------------------------------------------ */}
          {/* Card 2: Dark Theme (Experienced Trader) */}
          {/* ------------------------------------------------ */}
          <Reveal delay={0.2}>
            <div className="group relative flex min-h-[280px] flex-col justify-start overflow-hidden rounded-[1.5rem] bg-[#0a1428] p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1 sm:min-h-[340px] sm:p-8 md:min-h-[420px] md:rounded-[2rem] md:p-12">
              
              {/* Deep Blue Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0c1a35] via-[#081224] to-[#040914]" />

              {/* Image — bottom right */}
              <div className="pointer-events-none absolute -bottom-2 -right-2 h-40 w-40 opacity-90 transition-transform duration-500 group-hover:scale-105 sm:-bottom-4 sm:-right-4 sm:h-52 sm:w-52 md:h-72 md:w-72 lg:h-80 lg:w-80">
                <img
                  src="/images/trader1.png"
                  alt="Experienced Trader"
                  className="h-full w-full object-contain object-right-bottom"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 w-full max-w-sm">
                <h3 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  Experienced Trader?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  Enjoy a premium experience designed for seasoned traders. Access ultra-low spreads, advanced charting tools, and dedicated VIP support.
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}