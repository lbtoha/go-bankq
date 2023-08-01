import { ApplyForLoan } from "@/components/car-loan/apply-for-a-loan/ApplyForLoan";
import { CarLoanHeader } from "@/components/car-loan/car-loan-header/CarLoanHeader";
import { CompareAutoFinancing } from "@/components/car-loan/compare-auto-financiag/CompareAutoFinancing";
import { ShopAndFinance } from "@/components/car-loan/shop-and-finance/ShopAndFinance";
import { Faq } from "@/components/shared/Faq";
import { OpenAccountSection } from "@/components/shared/OpenAccountSection";
import { OurClientSaySection } from "@/components/shared/OurClientSaySection";

export const metadata = {
  title: "Car Loan | GOBANKQ-Banking & Finance",
  description: "NextJs Template",
};

export default function CarLoan() {
  return (
    <main>
      <CarLoanHeader />
      <ShopAndFinance />
      <CompareAutoFinancing />
      <ApplyForLoan />
      <OpenAccountSection />
      <OurClientSaySection />
      <Faq />
    </main>
  );
}
