import { Paying } from "@/components/checkingAccount/Paying/Paying";
import { BankCards } from "@/components/checkingAccount/bankCards/BankCards";
import { CashFlow } from "@/components/checkingAccount/cashFlow/CashFlow";
import { CheckingAccount } from "@/components/checkingAccount/checkingAccount/CheckingAccount";
import { CheckingAccountHeader } from "@/components/checkingAccount/checkingAccountHeader/CheckingAccountHeader";
import { CheckingSlider } from "@/components/checkingAccount/checkingSlider/CheckingSlider";
import { SecurityAndPeace } from "@/components/checkingAccount/securityAndPeace/SecurityAndPeace";
import { WorkStep } from "@/components/checkingAccount/workStep/WorkStep";
import { OpenAccountSection } from "@/components/shared/OpenAccountSection";
import { SaveWithUs } from "@/components/shared/SaveWithUs";

export const metadata = {
  title: "Checking Account | GOBANKQ-Banking & Finance",
  description: "NextJs Template",
};

export default function Checking() {
  return (
    <main>
      <CheckingAccountHeader />
      <CheckingAccount />
      <SaveWithUs />
      <CashFlow />
      <Paying />
      <SecurityAndPeace />
      <BankCards />
      <WorkStep />
      <OpenAccountSection />
      <CheckingSlider />
    </main>
  );
}
