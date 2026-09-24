"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Loader2, CheckCircle2, Eye, EyeOff } from "lucide-react";
import { login } from "@/lib/session";

type FormState = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const countries = [
  "United Kingdom", "United States", "Germany", "France", "Spain", "Italy",
  "Netherlands", "Portugal", "United Arab Emirates", "India", "Singapore", "Pakistan",
  "South Africa", "Australia", "Other",
];

const initialState: FormState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  country: "",
};

export default function OpenAccountForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Full name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.password) next.password = "Create a password.";
    else if (form.password.length < 8) next.password = "Password must be at least 8 characters.";
    if (form.confirmPassword !== form.password) next.confirmPassword = "Passwords do not match.";
    if (!form.country) next.country = "Select your country of residence.";
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
    }, 1400);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-xl border border-line bg-white p-10 text-center shadow-sm">
        <CheckCircle2 className="mb-4 text-cyan" size={44} />
        <h2 className="font-display text-xl font-semibold text-ink">Account created</h2>
        <p className="mt-2 max-w-sm text-sm text-steel">
          Welcome to INVEX TRADE, {form.name || "trader"}. Check your inbox to verify your
          email, then log in to fund your account and start trading.
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
    <form onSubmit={handleSubmit} noValidate className="rounded-xl border border-line bg-white p-6 shadow-sm sm:p-8">
      {/* Name */}
      <div className="mb-4">
        <input
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          aria-invalid={!!errors.name}
          className={`w-full rounded-lg border bg-paper px-4 py-3.5 text-sm text-ink outline-none transition focus:border-blue focus:bg-white ${
            errors.name ? "border-red-400" : "border-transparent"
          }`}
          placeholder="Full name"
        />
        {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
      </div>

      {/* Email */}
      <div className="mb-4">
        <input
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          aria-invalid={!!errors.email}
          className={`w-full rounded-lg border bg-paper px-4 py-3.5 text-sm text-ink outline-none transition focus:border-blue focus:bg-white ${
            errors.email ? "border-red-400" : "border-transparent"
          }`}
          placeholder="Email"
        />
        {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
      </div>

      {/* Password */}
      <div className="mb-4">
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={(e) => update("password", e.target.value)}
            aria-invalid={!!errors.password}
            className={`w-full rounded-lg border bg-paper px-4 py-3.5 pr-11 text-sm text-ink outline-none transition focus:border-blue focus:bg-white ${
              errors.password ? "border-red-400" : "border-transparent"
            }`}
            placeholder="Password"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-steel hover:text-ink"
          >
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </div>
        {errors.password && <p className="mt-1.5 text-xs text-red-500">{errors.password}</p>}
      </div>

      {/* Confirm password */}
      <div className="mb-4">
        <div className="relative">
          <input
            type={showConfirm ? "text" : "password"}
            value={form.confirmPassword}
            onChange={(e) => update("confirmPassword", e.target.value)}
            aria-invalid={!!errors.confirmPassword}
            className={`w-full rounded-lg border bg-paper px-4 py-3.5 pr-11 text-sm text-ink outline-none transition focus:border-blue focus:bg-white ${
              errors.confirmPassword ? "border-red-400" : "border-transparent"
            }`}
            placeholder="Confirm password"
          />
          <button
            type="button"
            onClick={() => setShowConfirm((v) => !v)}
            aria-label={showConfirm ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-steel hover:text-ink"
          >
            {showConfirm ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="mt-1.5 text-xs text-red-500">{errors.confirmPassword}</p>
        )}
      </div>

      {/* Country */}
      <div className="mb-6">
        <select
          value={form.country}
          onChange={(e) => update("country", e.target.value)}
          aria-invalid={!!errors.country}
          className={`w-full rounded-lg border bg-paper px-4 py-3.5 text-sm text-ink outline-none transition focus:border-blue focus:bg-white ${
            errors.country ? "border-red-400" : "border-transparent"
          }`}
        >
          <option value="">Country of residence</option>
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        {errors.country && <p className="mt-1.5 text-xs text-red-500">{errors.country}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-700 disabled:opacity-70"
      >
        {status === "loading" && <Loader2 size={16} className="animate-spin" />}
        {status === "loading" ? "Creating account…" : "Open Account"}
      </button>
    </form>
  );
}