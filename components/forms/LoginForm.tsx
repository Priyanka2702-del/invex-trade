"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Loader2, CheckCircle2, Eye, EyeOff, Send } from "lucide-react";
import { login } from "@/lib/session";

type LoginMethod = "email" | "phone";
type Errors = { identifier?: string; password?: string };

export default function LoginForm() {
  const [method, setMethod] = useState<LoginMethod>("email");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const validate = (): boolean => {
    const next: Errors = {};
    if (!identifier.trim()) {
      next.identifier = method === "email" ? "Enter your email address." : "Enter your phone number.";
    } else if (method === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier)) {
      next.identifier = "Enter a valid email address.";
    }
    if (!password) next.password = "Enter your password.";
    else if (password.length < 6) next.password = "Password must be at least 6 characters.";
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
      <div className="flex flex-col items-center rounded-xl border border-line bg-white p-10 text-center shadow-sm">
        <CheckCircle2 className="mb-4 text-cyan" size={44} />
        <h2 className="font-display text-xl font-semibold text-ink">You&apos;re logged in</h2>
        <p className="mt-2 max-w-xs text-sm text-steel">
          Welcome back to INVEX TRADE. Head to your dashboard to view your account.
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
      {/* Email / Phone tab switcher */}
      <div className="mb-5 grid grid-cols-2 rounded-lg bg-paper p-1 text-sm font-semibold">
        <button
          type="button"
          onClick={() => { setMethod("email"); setIdentifier(""); setErrors({}); }}
          className={`rounded-md py-2.5 transition ${
            method === "email" ? "bg-white text-ink shadow-sm" : "text-steel"
          }`}
        >
          Email Address
        </button>
        <button
          type="button"
          onClick={() => { setMethod("phone"); setIdentifier(""); setErrors({}); }}
          className={`rounded-md py-2.5 transition ${
            method === "phone" ? "bg-white text-ink shadow-sm" : "text-steel"
          }`}
        >
          Phone Number
        </button>
      </div>

      {/* Identifier field */}
      <div className="mb-4">
        <input
          type={method === "email" ? "email" : "tel"}
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          aria-invalid={!!errors.identifier}
          className={`w-full rounded-lg border bg-paper px-4 py-3.5 text-sm text-ink outline-none transition focus:border-blue focus:bg-white ${
            errors.identifier ? "border-red-400" : "border-transparent"
          }`}
          placeholder={method === "email" ? "Email" : "Phone number"}
        />
        {errors.identifier && <p className="mt-1.5 text-xs text-red-500">{errors.identifier}</p>}
      </div>

      {/* Password field */}
      <div className="mb-2">
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

      <div className="mb-6 flex justify-end">
        <Link href="/forgot-password" className="text-sm font-medium text-blue hover:underline">
          Forgot Password?
        </Link>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-700 disabled:opacity-70"
      >
        {status === "loading" && <Loader2 size={16} className="animate-spin" />}
        {status === "loading" ? "Logging in…" : "Log in"}
      </button>

      {/* Divider */}
      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-line" />
        <span className="text-xs font-medium text-steel">Other Login Method</span>
        <div className="h-px flex-1 bg-line" />
      </div>

      {/* Secondary login method — swap for whatever provider INVEX actually supports */}
      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-paper py-3 text-sm font-semibold text-ink transition hover:bg-line/60"
      >
        <Send size={17} className="text-blue" />
        Telegram
      </button>
    </form>
  );
}