import { SectionText } from "@/components/shared/SectionText";
import Image from "next/image";
import facility from "@/public/images/facility.png";

type Props = {
  title: string;
  bodyText: string;
};

const FacilityCard = ({ title, bodyText }: Props) => {
  return (
    <div className="border-with-gray-bg rounded-xl pb-4 ps-4 pt-[28px]  lg:pb-[28px] lg:pe-[22px] lg:ps-[28px] ">
      <Image src={facility} alt="Facility" className="max-sm:max-w-[50px]" />
      <h3
        className={`text-neutral-color-neutral-700 mb-3 mt-5 font-montserrat text-xl font-semibold leading-[130%] md:mt-10 md:text-[24px] lg:mt-[60px] `}
      >
        {title}
      </h3>
      <SectionText text={`${bodyText}`} />
    </div>
  );
};

export default FacilityCard;
