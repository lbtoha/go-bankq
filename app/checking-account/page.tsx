import { Paying } from "@/components/checkingAccount/Paying/Paying";
import { BankCards } from "@/components/checkingAccount/bankCards/BankCards";
import { CashFlow } from "@/components/checkingAccount/cashFlow/CashFlow";
import { CheckingAccount } from "@/components/checkingAccount/checkingAccount/CheckingAccount";
import { CheckingAccountHeader } from "@/components/checkingAccount/checkingAccountHeader/CheckingAccountHeader";
import { CheckingSlider } from "@/components/checkingAccount/checkingSlider/CheckingSlider";
import { SaveWithUs } from "@/components/checkingAccount/saveWithUs/SaveWithUs";
import { SecurityAndPeace } from "@/components/checkingAccount/securityAndPeace/SecurityAndPeace";
import { WorkStep } from "@/components/checkingAccount/workStep/WorkStep";
import { OpenAccount } from "@/components/home/openAccount/OpenAccount";

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
      <OpenAccount />
      <CheckingSlider />
    </main>
  );
}