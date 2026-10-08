import AssetsCard from "@/components/dashboard/AssetsCard";
import TradingAccountCard from "@/components/dashboard/TradingAccountCard";
import VerificationBanner from "@/components/dashboard/VerificationBanner";
import DashboardMarketChart from "@/components/dashboard/DashboardMarketChart";
import RiskStatement from "@/components/dashboard/RiskStatement";
import PromotionSlider from "@/components/dashboard/PromotionSlider";

export const metadata = {
  title: "Dashboard — INVEX TRADE",
};

export default function DashboardPage() {
  return (
    <>
      <VerificationBanner />

      <PromotionSlider />

      <div className="mb-6 grid gap-6 lg:grid-cols-2">
        <AssetsCard />
        <TradingAccountCard />
      </div>

      <DashboardMarketChart />

      <RiskStatement />
    </>
  );
}