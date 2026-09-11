import Link from "next/link";

export default function VerificationBanner() {
  return (
    <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-blue-deep via-[#0A1F4D] to-blue">
      <div className="relative z-10 flex flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center sm:px-10">
        <div>
          <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
            Personal Details Verification
          </h2>
          <p className="mt-1 text-sm text-white/70">
            Please complete the personal data verification.
          </p>
        </div>
        <Link
          href="/dashboard/verification"
          className="shrink-0 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-blue-deep transition hover:bg-white/90"
        >
          Verify Now
        </Link>
      </div>
    </div>
  );
}