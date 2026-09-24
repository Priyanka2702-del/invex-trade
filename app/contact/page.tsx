import { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/pages/PageHero";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — INVEX TRADE",
  description: "Get in touch with the INVEX TRADE support team.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Company" title="Contact Us" description="Have a question about your account or the platform? Send us a message and our support team will get back to you." />
      <div className="mx-auto max-w-xl px-6 py-16 lg:px-10">
        <ContactForm />
      </div>
    </PageShell>
  );
}
