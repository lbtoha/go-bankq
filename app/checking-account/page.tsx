import { CashFlow } from "@/components/checkingAccount/cashFlow/CashFlow";
import { CheckingAccount } from "@/components/checkingAccount/checkingAccount/CheckingAccount";
import { CheckingAccountHeader } from "@/components/checkingAccount/checkingAccountHeader/CheckingAccountHeader";
import { SaveWithUs } from "@/components/checkingAccount/saveWithUs/SaveWithUs";

export default function Home() {
  return (
    <main>
      <CheckingAccountHeader />
      <CheckingAccount />
      <SaveWithUs />
      <CashFlow />
    </main>
  );
}
