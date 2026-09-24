"use client";

import { useState } from "react";
import { CheckCircle2, Clock, XCircle, Circle, UploadCloud, Info } from "lucide-react";
import { verificationSteps } from "@/data/dashboard";

const statusMeta = {
  approved: { icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50", label: "Approved" },
  pending: { icon: Clock, color: "text-amber-600", bg: "bg-amber-50", label: "Pending Review" },
  rejected: { icon: XCircle, color: "text-red-600", bg: "bg-red-50", label: "Rejected" },
  not_started: { icon: Circle, color: "text-steel", bg: "bg-paper", label: "Not Started" },
};

export default function VerificationPage() {
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <div>
      <div className="mb-5">
        <h1 className="font-display text-xl font-semibold text-ink">Verification</h1>
        <p className="text-sm text-steel">Complete KYC verification to unlock full account features.</p>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        {verificationSteps.map((step) => {
          const meta = statusMeta[step.status];
          return (
            <div key={step.key} className="rounded-xl border border-line bg-white p-5">
              <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full ${meta.bg} ${meta.color}`}>
                <meta.icon size={18} />
              </div>
              <p className="text-sm font-semibold text-ink">{step.label}</p>
              <p className={`mt-1 text-xs font-medium ${meta.color}`}>{meta.label}</p>
            </div>
          );
        })}
      </div>

      <div className="rounded-xl border border-line bg-white p-6">
        <h2 className="mb-1 font-display text-lg font-semibold text-ink">Identity Document</h2>
        <p className="mb-4 flex items-start gap-1.5 text-xs text-steel">
          <Info size={13} className="mt-0.5 shrink-0" />
          Frontend-ready UI only — documents are not uploaded or stored until a verification
          backend is connected.
        </p>

        <label
          htmlFor="kyc-upload"
          className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-line bg-paper px-6 py-10 text-center transition hover:border-blue/50"
        >
          <UploadCloud size={28} className="text-steel" />
          <span className="text-sm font-medium text-ink">
            {fileName ?? "Click to select a passport, ID card or driving licence"}
          </span>
          <span className="text-xs text-steel">PNG, JPG or PDF, up to 10MB</span>
          <input
            id="kyc-upload"
            type="file"
            accept="image/*,application/pdf"
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
          />
        </label>

        <button
          type="button"
          disabled={!fileName}
className="mt-4 w-full rounded-lg bg-blue/10 py-3 text-sm font-semibold text-blue transition hover:bg-blue/20 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:px-8"        >
          Submit for Review
        </button>
      </div>
    </div>
  );
}