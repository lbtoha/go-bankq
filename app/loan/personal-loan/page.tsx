import { OurClientSay } from "@/components/home/ourClientSay/OurClientSay";
import { MoreThenNumber } from "@/components/more-then-number/MoreThenNumber";
import { OpenPersonalLoan } from "@/components/personal-lone/open-personal-loan/OpenPersonalLoan";
import { PersonalLoanHeader } from "@/components/personal-lone/personal-loan-hader/PersonalLoanHeader";
import { PlanAction } from "@/components/personal-lone/plan-action/PlanAction";
import { Faq } from "@/components/shared/Faq";
import { HowItWork } from "@/components/shared/HowItWork";
import { OpenAccountSection } from "@/components/shared/OpenAccountSection";

export default function PersonalLoan() {
  return (
    <main>
      <PersonalLoanHeader />
      <OpenPersonalLoan />
      <MoreThenNumber />
      <PlanAction />
      <HowItWork />
      <OpenAccountSection />
      <OurClientSay />
      <Faq />
    </main>
  );
}
