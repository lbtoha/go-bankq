import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import securityImage from "@/public/images/security.png";
import securityImage2 from "@/public/images/security2.png";

export const SecurityAndPeace = () => {
  return (
    <section>
      <div className="section-gap section-gap horizontal-gap container text-center">
        <div className="mx-auto max-w-[629px]">
          <div className="mb-6">
            <SectionHeading title="Security and peace of mind in your pocket" />
          </div>

          <SectionText text="A prepaid card is loaded with funds in advance and can be used to make purchases or withdraw cash until." />
        </div>
        <div className="grid-1-center md:grid-2-center mt-[60px] space-y-4 md:space-y-0">
          <Image src={securityImage} alt="Security" />
          <Image src={securityImage2} alt="Security2" />
        </div>
      </div>
    </section>
  );
};
