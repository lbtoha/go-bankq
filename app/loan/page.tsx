import { Provide } from "@/components/Loan/Provide/Provide";
import { AllTypesLoan } from "@/components/Loan/allTypesLoans/AllTypesLoan";
import { Facility } from "@/components/Loan/facility/Facility";
import { LoanHeader } from "@/components/Loan/loanHeader/LoanHeader";

export default function Loan() {
  return (
    <main>
      <LoanHeader />
      <Provide />
      <AllTypesLoan />
      <Facility />
    </main>
  );
}
