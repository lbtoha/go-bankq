import { ApplyForLoan } from "@/components/car-loan/apply-for-a-loan/ApplyForLoan";
import { CarLoanHeader } from "@/components/car-loan/car-loan-header/CarLoanHeader";
import { CompareAutoFinancing } from "@/components/car-loan/compare-auto-financiag/CompareAutoFinancing";
import { ShopAndFinance } from "@/components/car-loan/shop-and-finance/ShopAndFinance";

export default function CarLoan() {
  return (
    <main>
      <CarLoanHeader />
      <ShopAndFinance />
      <CompareAutoFinancing />
      <ApplyForLoan />
    </main>
  );
}
