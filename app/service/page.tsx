import { AllSolution } from "@/components/service/allSolution/AllSolution";
import { ServiceHeader } from "@/components/service/serviceHeader/ServiceHeader";
import { BankingService } from "@/components/shared/BankingService";

export default function Service() {
  return (
    <main>
      <ServiceHeader />
      <BankingService />
      <AllSolution />
    </main>
  );
}
