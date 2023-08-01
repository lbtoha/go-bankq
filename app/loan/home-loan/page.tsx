import { CalculateEmi } from "@/components/home-loan/clculateEmi/CalculateEmi";
import { DreamHome } from "@/components/home-loan/dream-home/DreamHome";
import { EasyHomeLoan } from "@/components/home-loan/easyHomeLoan/EasyHomeLoan";
import { HomeLoanHeader } from "@/components/home-loan/home-loan-header/HomeLoanHeader";
import { Faq } from "@/components/shared/Faq";
import { HowItWork } from "@/components/shared/HowItWork";
import { OpenAccountSection } from "@/components/shared/OpenAccountSection";
import { OurClientSaySection } from "@/components/shared/OurClientSaySection";

export const metadata = {
  title: "Home Loan | GOBANKQ-Banking & Finance",
  description: "NextJs Template",
};

export default function HomeLoan() {
  return (
    <main>
      <HomeLoanHeader />
      <DreamHome />
      <CalculateEmi />
      <EasyHomeLoan />
      <HowItWork />
      <OpenAccountSection />
      <OurClientSaySection />
      <Faq />
    </main>
  );
}
