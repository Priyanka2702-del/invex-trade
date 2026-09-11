import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Markets from "@/components/home/Markets";
import WhyTrade from "@/components/home/WhyTrade";
import AccountTypes from "@/components/home/AccountTypes";
import Stats from "@/components/home/Stats";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        <Markets />
        <WhyTrade />
        <AccountTypes />
        <Stats />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
