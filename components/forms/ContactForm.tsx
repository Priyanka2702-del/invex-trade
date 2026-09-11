"use client";

import { useState, FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

type Errors = { name?: string; email?: string; message?: string };

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const validate = (): boolean => {
    const next: Errors = {};
    if (!name.trim()) next.name = "Enter your name.";
    if (!email.trim()) next.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!message.trim() || message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1000);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-xl border border-line bg-white p-10 text-center shadow-sm">
        <CheckCircle2 className="mb-4 text-cyan" size={40} />
        <h3 className="font-display text-lg font-semibold text-ink">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm text-steel">
          Thanks for reaching out — our support team typically replies within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-xl border border-line bg-white p-8 shadow-sm">
      <div className="mb-5">
        <label className="mb-1.5 block text-sm font-medium text-ink">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full rounded-lg border px-4 py-3 text-sm text-ink outline-none focus:border-blue ${errors.name ? "border-red-400" : "border-line"}`}
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
      </div>
      <div className="mb-5">
        <label className="mb-1.5 block text-sm font-medium text-ink">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full rounded-lg border px-4 py-3 text-sm text-ink outline-none focus:border-blue ${errors.email ? "border-red-400" : "border-line"}`}
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
      </div>
      <div className="mb-6">
        <label className="mb-1.5 block text-sm font-medium text-ink">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className={`w-full rounded-lg border px-4 py-3 text-sm text-ink outline-none focus:border-blue ${errors.message ? "border-red-400" : "border-line"}`}
          placeholder="How can we help?"
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue py-3.5 text-sm font-semibold text-white transition hover:bg-blue-deep disabled:opacity-70"
      >
        {status === "loading" && <Loader2 size={16} className="animate-spin" />}
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
