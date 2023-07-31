import { AccountForm } from "@/components/home/accountForm/AccountForm";
import { Banner } from "@/components/home/banner/Banner";
import { CreditCard } from "@/components/home/creditCard/CreditCard";
import { LatestArticle } from "@/components/home/latestArticle/LatestArticle";
import { Loan } from "@/components/home/loan/Loan";
import { StandOut } from "@/components/home/standOut/StandOut";
import { BankingService } from "@/components/shared/BankingService";
import { BrandSlider } from "@/components/shared/BrandSlider";
import { Faq } from "@/components/shared/Faq";
import { OpenAccountSection } from "@/components/shared/OpenAccountSection";
import { OurClientSaySection } from "@/components/shared/OurClientSaySection";
import { OurImpact } from "@/components/shared/OurImpact";

export default function Home() {
  return (
    <main>
      <Banner />
      <Loan />
      <BrandSlider bgColor={null} />
      <BankingService />
      <StandOut />
      <OurImpact />
      <CreditCard />
      <OpenAccountSection />
      <Faq />
      <LatestArticle />
      <OurClientSaySection />
      <AccountForm />
    </main>
  );
}
