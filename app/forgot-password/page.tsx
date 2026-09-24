import { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/pages/PageHero";
import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Reset Password — INVEX TRADE",
  description: "Reset the password for your INVEX TRADE account.",
};

export default function ForgotPasswordPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Account Recovery" title="Reset your password" description="Enter the email address on your account and we'll send you a reset link." />
      <div className="mx-auto max-w-md px-6 py-16 lg:px-10">
        <ForgotPasswordForm />
      </div>
    </PageShell>
  );
}
