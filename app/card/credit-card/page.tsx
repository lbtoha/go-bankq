import { CreditCardHeader } from "@/components/credit-card/CreditCardHeader";
import { ChooseYourCard } from "@/components/credit-card/choose-your-card/ChooseYourCard";
import { CreditCardLimit } from "@/components/credit-card/credit-card-limit/CreditCardLimit";
import { GetCreditCard } from "@/components/credit-card/get-credit-card/GetCreditCard";
import { SmartSave } from "@/components/credit-card/smart-save/SmartSave";
import { BrandSlider } from "@/components/shared/BrandSlider";
import { BrandSliderColor } from "@/components/shared/BrandSliderColor";
import { Faq } from "@/components/shared/Faq";
import { OpenAccountSection } from "@/components/shared/OpenAccountSection";
import { OurClientSaySection } from "@/components/shared/OurClientSaySection";

export default function CreditCard() {
  return (
    <main>
      <CreditCardHeader />
      <SmartSave />
      <GetCreditCard />
      <ChooseYourCard />
      <div className="bg-primary-2">
        <BrandSlider />
      </div>
      <CreditCardLimit />
      <OpenAccountSection />
      <OurClientSaySection />
      <Faq />/
    </main>
  );
}
