import { DebitCardHeader } from "@/components/debit-card/debit-card-header/DebitCardHeader";
import { EasyUse } from "@/components/debit-card/easy-use/EasyUse";
import { MuchEasier } from "@/components/debit-card/much-easier/MuchEasier";
import { BrandSlider } from "@/components/shared/BrandSlider";
import { Faq } from "@/components/shared/Faq";
import { OpenAccountSection } from "@/components/shared/OpenAccountSection";
import { OurClientSaySection } from "@/components/shared/OurClientSaySection";
import { OurImpact } from "@/components/shared/OurImpact";
import { SaveWithUs } from "@/components/shared/SaveWithUs";

export default function DebitCard() {
  return (
    <main>
      <DebitCardHeader />
      <EasyUse />
      <SaveWithUs />
      <MuchEasier />
      <BrandSlider bgColor="bg" />
      <OurImpact />
      <OpenAccountSection />
      <OurClientSaySection />
      <Faq />
    </main>
  );
}
