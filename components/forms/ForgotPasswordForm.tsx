"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError(null);
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1000);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-xl border border-line bg-white p-10 text-center shadow-sm">
        <CheckCircle2 className="mb-4 text-cyan" size={40} />
        <h3 className="font-display text-lg font-semibold text-ink">Check your inbox</h3>
        <p className="mt-2 max-w-sm text-sm text-steel">
          If an account exists for {email}, we&apos;ve sent a link to reset your password.
        </p>
        <Link href="/login" className="mt-6 text-sm font-medium text-blue hover:underline">
          Back to Log In
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-xl border border-line bg-white p-8 shadow-sm">
      <div className="mb-6">
        <label className="mb-1.5 block text-sm font-medium text-ink">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full rounded-lg border px-4 py-3 text-sm text-ink outline-none focus:border-blue ${error ? "border-red-400" : "border-line"}`}
          placeholder="you@example.com"
        />
        {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue py-3.5 text-sm font-semibold text-white transition hover:bg-blue-deep disabled:opacity-70"
      >
        {status === "loading" && <Loader2 size={16} className="animate-spin" />}
        {status === "loading" ? "Sending…" : "Send Reset Link"}
      </button>
      <p className="mt-6 text-center text-sm text-steel">
        Remembered it?{" "}
        <Link href="/login" className="font-medium text-blue hover:underline">
          Log in
        </Link>
      </p>
    </form>
  );
}
