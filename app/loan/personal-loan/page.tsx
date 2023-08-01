import { MoreThenNumber } from "@/components/more-then-number/MoreThenNumber";
import { OpenPersonalLoan } from "@/components/personal-lone/open-personal-loan/OpenPersonalLoan";
import { PersonalLoanHeader } from "@/components/personal-lone/personal-loan-hader/PersonalLoanHeader";
import { PlanAction } from "@/components/personal-lone/plan-action/PlanAction";
import { Faq } from "@/components/shared/Faq";
import { HowItWork } from "@/components/shared/HowItWork";
import { OpenAccountSection } from "@/components/shared/OpenAccountSection";
import { OurClientSaySection } from "@/components/shared/OurClientSaySection";

export const metadata = {
  title: "Personal Loan | GOBANKQ-Banking & Finance",
  description: "NextJs Template",
};

export default function PersonalLoan() {
  return (
    <main>
      <PersonalLoanHeader />
      <OpenPersonalLoan />
      <MoreThenNumber />
      <PlanAction />
      <HowItWork />
      <OpenAccountSection />
      <OurClientSaySection />
      <Faq />
    </main>
  );
}
