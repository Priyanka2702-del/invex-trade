import Reveal from "@/components/ui/Reveal";

export default function AccountTypes() {
  return (
    <section className="relative w-full bg-slate-50">
      {/* Half black background behind the banner */}
      <div className="absolute left-0 top-0 z-0 h-1/2 w-full bg-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <Reveal>
          {/* Premium banner card */}
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 px-6 py-12 text-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] md:px-12 md:py-16">
            
            {/* Base deep navy gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#050d1f] via-[#0c1f4a] to-[#071428]" />

            {/* Premium radial glow — top center */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.35),transparent)]" />

            {/* Soft cyan accent glow — bottom right */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_90%,rgba(34,211,238,0.12),transparent)]" />

            {/* Subtle left-side blue wash */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_10%_50%,rgba(59,130,246,0.15),transparent)]" />

            {/* Fine grid / noise texture overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Top edge highlight line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

            {/* Shield graphic — hidden on small screens */}
            <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-2/5 opacity-70 md:block lg:opacity-90">
              <svg
                className="absolute -right-6 top-1/2 h-72 w-72 -translate-y-1/2 text-blue-500/40 lg:h-80 lg:w-80"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#shieldGrad)"
                  d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                />
                <path
                  fill="#22d3ee"
                  opacity="0.35"
                  d="M10.5 14.5l-2.5-2.5 1-1 1.5 1.5 4-4 1 1z"
                />
              </svg>
            </div>

            {/* Text content */}
            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center space-y-4 md:space-y-5">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] lg:leading-[1.15]">
                Your Funds Are Always{" "}
                <span className="bg-gradient-to-r from-[#00C8FF] to-[#0052D4] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,200,255,0.3)]">
                  Safe and Secure
                </span>
              </h2>
              <p className="max-w-3xl text-[15px] leading-relaxed text-blue-100/90 md:text-lg">
                Trade with a{" "}
                <span className="font-semibold text-white">
                  multi-regulated broker
                </span>{" "}
                that has built long-standing partnerships with top global banks
                to ensure your funds are always secure.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}