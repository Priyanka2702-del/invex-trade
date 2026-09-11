"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Loader2, CheckCircle2 } from "lucide-react";
import { accounts } from "@/data/accounts";
import { login } from "@/lib/session";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
};

type Errors = Partial<Record<keyof FormState, string>>;

const countries = [
  "United Kingdom", "United States", "Germany", "France", "Spain", "Italy",
  "Netherlands", "Portugal", "United Arab Emirates", "India", "Singapore","Pakistan",
  "South Africa", "Australia", "Other",
];

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  password: "",
  confirmPassword: "",
  agree: false,
};

export default function OpenAccountForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.firstName.trim()) next.firstName = "First name is required.";
    if (!form.lastName.trim()) next.lastName = "Last name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.phone.trim()) next.phone = "Phone number is required.";
    if (!form.country) next.country = "Select your country of residence.";
    if (!form.password) next.password = "Create a password.";
    else if (form.password.length < 8) next.password = "Password must be at least 8 characters.";
    if (form.confirmPassword !== form.password) next.confirmPassword = "Passwords do not match.";
    if (!form.agree) next.agree = "You must accept the Client Agreement to continue.";
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

  const inputClass = (hasError?: string) =>
    `w-full rounded-lg border px-4 py-3 text-sm text-ink outline-none transition focus:border-blue ${
      hasError ? "border-red-400" : "border-line"
    }`;

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-xl border border-line bg-white p-10 text-center shadow-sm">
        <CheckCircle2 className="mb-4 text-cyan" size={44} />
        <h2 className="font-display text-xl font-semibold text-ink">Account created</h2>
        <p className="mt-2 max-w-sm text-sm text-steel">
          Welcome to INVEX TRADE, {form.firstName || "trader"}. Check your inbox to verify your
          email, then log in to fund your account and start trading.
        </p>
        <Link
          href="/login"
          className="mt-6 rounded bg-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-deep"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-xl border border-line bg-white p-8 shadow-sm">
      <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">First name</label>
          <input
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            className={inputClass(errors.firstName)}
            placeholder="Alex"
          />
          {errors.firstName && <p className="mt-1.5 text-xs text-red-500">{errors.firstName}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Last name</label>
          <input
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            className={inputClass(errors.lastName)}
            placeholder="Morgan"
          />
          {errors.lastName && <p className="mt-1.5 text-xs text-red-500">{errors.lastName}</p>}
        </div>
      </div>

      <div className="mb-5">
        <label className="mb-1.5 block text-sm font-medium text-ink">Email</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputClass(errors.email)}
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
      </div>

      <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Phone number</label>
          <input
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass(errors.phone)}
            placeholder="+44 20 1234 5678"
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Country of residence</label>
          <select
            value={form.country}
            onChange={(e) => update("country", e.target.value)}
            className={inputClass(errors.country)}
          >
            <option value="">Select country</option>
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.country && <p className="mt-1.5 text-xs text-red-500">{errors.country}</p>}
        </div>
      </div>


      <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Password</label>
          <input
            type="password"
            value={form.password}
            onChange={(e) => update("password", e.target.value)}
            className={inputClass(errors.password)}
            placeholder="••••••••"
          />
          {errors.password && <p className="mt-1.5 text-xs text-red-500">{errors.password}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Confirm password</label>
          <input
            type="password"
            value={form.confirmPassword}
            onChange={(e) => update("confirmPassword", e.target.value)}
            className={inputClass(errors.confirmPassword)}
            placeholder="••••••••"
          />
          {errors.confirmPassword && (
            <p className="mt-1.5 text-xs text-red-500">{errors.confirmPassword}</p>
          )}
        </div>
      </div>

      <div className="mb-6">
        <label className="flex items-start gap-2.5 text-sm text-steel">
          <input
            type="checkbox"
            checked={form.agree}
            onChange={(e) => update("agree", e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-line text-blue focus:ring-blue"
          />
          <span>
            I have read and accept the{" "}
            <Link href="/legal-documents" className="font-medium text-blue hover:underline">
              Client Agreement
            </Link>{" "}
            and{" "}
            <Link href="/risk-disclosure" className="font-medium text-blue hover:underline">
              Risk Disclosure
            </Link>
            .
          </span>
        </label>
        {errors.agree && <p className="mt-1.5 text-xs text-red-500">{errors.agree}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue py-3.5 text-sm font-semibold text-white transition hover:bg-blue-deep disabled:opacity-70"
      >
        {status === "loading" && <Loader2 size={16} className="animate-spin" />}
        {status === "loading" ? "Creating account…" : "Open Account"}
      </button>

      <p className="mt-6 text-center text-sm text-steel">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-blue hover:underline">
          Log in
        </Link>
      </p>
    </form>
  );
}
