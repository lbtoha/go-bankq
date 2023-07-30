import { EducationLoanHeader } from "@/components/education-loan/education-loan-hader/EducationLoanHeader";
import { FlexibleRepayment } from "@/components/education-loan/flexible-repayment/FlexibleRepayment";
import { HelpStudent } from "@/components/education-loan/help-student/HelpStudent";
import { HowItWork } from "@/components/shared/HowItWork";
import { OurClientSaySection } from "@/components/shared/OurClientSaySection";

export default function EducationLoan() {
  return (
    <main>
      <EducationLoanHeader />
      <HelpStudent />
      <HowItWork />
      <FlexibleRepayment />
      <OurClientSaySection />
    </main>
  );
}
