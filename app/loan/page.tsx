import { Provide } from "@/components/Loan/Provide/Provide";
import { AllTypesLoan } from "@/components/Loan/allTypesLoans/AllTypesLoan";
import { Facility } from "@/components/Loan/facility/Facility";
import { LoanHeader } from "@/components/Loan/loanHeader/LoanHeader";
import { OpenAccount } from "@/components/Loan/openAccount/OpenAccount";
import { OpenBrandSlider } from "@/components/Loan/openBrankSlider/OpenBrandSlider";

export default function Loan() {
  return (
    <main>
      <LoanHeader />
      <Provide />
      <AllTypesLoan />
      <Facility />
      <OpenAccount />
      <OpenBrandSlider />
    </main>
  );
}
