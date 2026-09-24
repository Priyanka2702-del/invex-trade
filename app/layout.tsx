import type { Metadata } from "next";
import "./globals.css";
import RiskDisclaimerBar from "@/components/layout/RiskDisclaimerBar";
import SupportButton from "@/components/ui/SupportButton";

export const metadata: Metadata = {
  title: "INVEX TRADE — Trade a Smarter Tomorrow",
  description:
    "Trade forex, indices, commodities and crypto CFDs on a platform built for speed, clarity and control.",
  openGraph: {
    title: "INVEX TRADE — Trade a Smarter Tomorrow",
    description:
      "Trade forex, indices, commodities and crypto CFDs on a platform built for speed, clarity and control.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased pb-24 sm:pb-14">
        {children}
        <SupportButton />
        <RiskDisclaimerBar />
      </body>
    </html>
  );
}