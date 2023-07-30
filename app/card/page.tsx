import { BoostSavings } from "@/components/card/boost-savings/BoostSavings";
import { CardHeader } from "@/components/card/card-header/CardHeader";
import { ChooseCard } from "@/components/card/choose-card/ChooseCard";
import { DigitalPayment } from "@/components/card/digital-payment/DigitalPayment";
import { ImproveCost } from "@/components/card/improve-cost/ImproveCost";
import { OpenAccountSection } from "@/components/shared/OpenAccountSection";
import { OurClientSaySection } from "@/components/shared/OurClientSaySection";

export default function Service() {
  return (
    <main>
      <CardHeader />
      <DigitalPayment />
      <ChooseCard />
      <ImproveCost />
      <OpenAccountSection />
      <BoostSavings />
      <OurClientSaySection />
    </main>
  );
}
