export default function RiskDisclaimerBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-white px-6 py-3 text-xs leading-relaxed text-steel lg:px-10">
      <p className="mx-auto max-w-content">
        <span className="font-semibold text-ink">Risk Warning:</span> CFDs are
        complex instruments and carry a high risk of losing money quickly due
        to leverage. Trading CFDs involves significant risk of loss and may
        not be suitable for all investors. You should consider whether you
        understand how CFDs work and whether you can afford to take the high
        risk of losing your money. See our{" "}
        <a href="/risk-disclosure" className="font-medium text-blue underline underline-offset-2">
          Risk Disclosure
        </a>
        .
      </p>
    </div>
  );
}
