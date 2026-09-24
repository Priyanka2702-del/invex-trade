"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2, CheckCircle2 } from "lucide-react";
import { login } from "@/lib/session";

const countries = [
  "United Kingdom", "United States", "Germany", "France", "Spain", "Italy",
  "Netherlands", "Portugal", "United Arab Emirates", "India", "Singapore",
  "South Africa", "Australia", "Other",
];

type Errors = { country?: string; email?: string; password?: string };

export default function BonusForm() {
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showReferral, setShowReferral] = useState(false);
  const [referral, setReferral] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const validate = (): boolean => {
    const next: Errors = {};
    if (!country) next.country = "Select your country.";
    if (!email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!password) next.password = "Create a password.";
    else if (password.length < 8) next.password = "Password must be at least 8 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setTimeout(() => {
      login();
      setStatus("success");
    }, 1200);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-line bg-white p-10 text-center">
        <CheckCircle2 className="mb-4 text-cyan" size={44} />
        <h1 className="font-display text-xl font-semibold text-ink">You&apos;re registered</h1>
        <p className="mt-2 max-w-sm text-sm text-steel">
          Verify your email, then fund your account to have the 50% deposit bonus applied —
          up to $100.
        </p>
        <Link
          href="/dashboard"
          className="mt-6 rounded bg-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-deep"
        >
          Go to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div>
            {/* Promo banner — drop your own bonus graphic at
          public/images/bonus-100.png and it will show here */}
      <div className="relative mb-8 flex h-20 items-center overflow-hidden rounded-2xl bg-blue pl-5 pr-3 sm:h-24 sm:pl-6">        <p className="relative z-10 flex-1 pr-3 text-base font-bold leading-tight text-white sm:text-lg">
          Get a 50% Bonus up to $100
        </p>
        <div
          className="relative z-10 h-full w-16 shrink-0 bg-contain bg-right bg-no-repeat sm:w-24"
          style={{ backgroundImage: "url('/images/bonus-100.png')" }}
        />
      </div>

      <h1 className="font-display text-2xl font-semibold tracking-tight text-ink">
        Let&apos;s get you registered!
      </h1>
      <p className="mt-1 text-sm text-steel">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-blue hover:underline">
          Log in
        </Link>
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-6">
        <label className="mb-1 block text-xs font-medium text-steel">Country of Residence</label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className={`mb-1 w-full rounded-lg border bg-white px-3 py-3 text-sm text-ink outline-none transition focus:border-blue ${
            errors.country ? "border-red-400" : "border-line"
          }`}
        >
          <option value="">Select country</option>
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        {errors.country && <p className="mb-3 text-xs text-red-500">{errors.country}</p>}

        <label className="mb-1 mt-4 block text-xs font-medium text-steel">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={`mb-1 w-full rounded-lg border bg-white px-3 py-3 text-sm text-ink outline-none transition focus:border-blue ${
            errors.email ? "border-red-400" : "border-line"
          }`}
        />
        {errors.email && <p className="mb-3 text-xs text-red-500">{errors.email}</p>}

        <label className="mb-1 mt-4 block text-xs font-medium text-steel">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={`mb-1 w-full rounded-lg border bg-white px-3 py-3 pr-11 text-sm text-ink outline-none transition focus:border-blue ${
              errors.password ? "border-red-400" : "border-line"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-steel hover:text-ink"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </div>
        {errors.password && <p className="mb-1 text-xs text-red-500">{errors.password}</p>}

        <div className="mb-5 mt-3">
          {showReferral ? (
            <input
              value={referral}
              onChange={(e) => setReferral(e.target.value)}
              placeholder="Partner or referral code"
              className="w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-blue"
            />
          ) : (
            <p className="text-sm text-steel">
              Have a partner or referral code?{" "}
              <button
                type="button"
                onClick={() => setShowReferral(true)}
                className="font-medium text-blue hover:underline"
              >
                Enter here
              </button>
            </p>
          )}
        </div>

        <label className="mb-6 flex items-start gap-2.5 text-sm text-steel">
          <input
            type="checkbox"
            checked={marketingConsent}
            onChange={(e) => setMarketingConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-line text-blue focus:ring-blue"
          />
          <span>
            I consent to receiving marketing communications and the use of my data for
            marketing optimization and personalization purposes. My consent may be withdrawn
            at any time.
          </span>
        </label>

        <button
          type="submit"
          disabled={status === "loading"}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue py-3.5 text-sm font-semibold text-white transition hover:bg-blue-deep disabled:opacity-70"
        >
          {status === "loading" && <Loader2 size={16} className="animate-spin" />}
          {status === "loading" ? "Creating account…" : "Create Account"}
        </button>
      </form>
    </div>
  );
}