import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import securityImage from "@/public/images/security.png";
import securityImage2 from "@/public/images/security2.png";

export const SecurityAndPeace = () => {
  return (
    <section>
      <div className="my-container section-gap text-center">
        <div className="max-w-[629px] mx-auto">
          <div className="mb-6">
            <SectionHeading title="Security and peace of mind in your pocket" />
          </div>

          <SectionText text="A prepaid card is loaded with funds in advance and can be used to make purchases or withdraw cash until." />
        </div>
        <div className="mt-[60px] grid-2-center">
          <Image src={securityImage} alt="Security" />
          <Image src={securityImage2} alt="Security2" />
        </div>
      </div>
    </section>
  );
};
