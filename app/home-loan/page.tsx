import { CalculateEmi } from "@/components/home-loan/clculateEmi/CalculateEmi";
import { DreamHome } from "@/components/home-loan/dream-home/DreamHome";
import { EasyHomeLoan } from "@/components/home-loan/easyHomeLoan/EasyHomeLoan";
import { HomeLoanHeader } from "@/components/home-loan/home-loan-header/HomeLoanHeader";
import { HowItWork } from "@/components/home-loan/howItWork/HowItWork";
import { Faq } from "@/components/shared/Faq";
import { OpenAccountSection } from "@/components/shared/OpenAccountSection";
import { OurClientSaySection } from "@/components/shared/OurClientSaySection";

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
