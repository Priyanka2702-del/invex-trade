import { Metadata } from "next";
import OpenAccountForm from "@/components/forms/OpenAccountForm";

export const metadata: Metadata = {
  title: "Open Account — INVEX TRADE",
  description: "Open a live trading account with INVEX TRADE in minutes.",
};

export default function OpenAccountPage() {
  return (
      <OpenAccountForm />
  );
}