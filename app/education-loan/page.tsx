import { EducationLoanHeader } from "@/components/education-loan/education-loan-hader/EducationLoanHeader";
import { FlexibleRepayment } from "@/components/education-loan/flexible-repayment/FlexibleRepayment";
import { HelpStudent } from "@/components/education-loan/help-student/HelpStudent";
import { OurClientSay } from "@/components/home/ourClientSay/OurClientSay";
import { HowItWork } from "@/components/shared/HowItWork";

export default function EducationLoan() {
  return (
    <main>
      <EducationLoanHeader />
      <HelpStudent />
      <HowItWork />
      <FlexibleRepayment />
      <OurClientSay />
    </main>
  );
}
