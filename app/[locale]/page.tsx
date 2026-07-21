import { useTranslations } from "next-intl";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Products from "@/components/Products";
import WorkFlow from "@/components/WorkFlow";
import HomeInsights from "@/components/HomeInsights";
import HomeMarketPrices from "@/components/HomeMarketPrices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function LocaleHome() {

  return (
    <main className="min-h-screen bg-white text-gray-900">
  

      <Hero />
      <WhyChooseUs />
      <Products />
      <WorkFlow />
      <HomeInsights />
      <HomeMarketPrices />
      <Contact />
      <Footer />
    </main>
  );
}