import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/ui/Logo";
import OpenAccountForm from "@/components/forms/OpenAccountForm";

export const metadata: Metadata = {
  title: "Open Account — INVEX TRADE",
  description: "Open a live trading account with INVEX TRADE in minutes.",
};

export default function OpenAccountPage() {
  return (
    <div className="relative flex min-h-screen w-full overflow-hidden bg-blue-deep">
      {/* ===================== LEFT PANEL ===================== */}
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden lg:flex">
        {/* 👇 apni image yahan daal do — path replace kar dena */}
        <Image
          src="/images/signup.jpeg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-deep/40" />
        <div className="relative z-10 px-10 pt-10 sm:px-14 sm:pt-14">
          <Link href="/">
            <Logo light />
          </Link>
          <p className="mt-4 max-w-sm font-display text-lg text-white/70 sm:text-xl">
            Built on trust. Driven by growth.
          </p>
        </div>
      </div>

      {/* ===================== RIGHT PANEL (form) ===================== */}
      <div className="flex w-full items-center justify-center bg-paper px-4 py-10 sm:px-8 lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="mb-8 flex flex-col items-center text-center">
            <Logo />
            <h1 className="mt-5 font-display text-2xl font-bold text-ink">
              Create Your Account
            </h1>
          </div>

          <OpenAccountForm />

          <p className="mt-6 text-center text-sm text-steel">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-blue hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}