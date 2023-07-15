import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";
import madeYourCardImage from "@/public/images/make_your_card.png";

import card1 from "@/public/images/card_filter.png";
import card2 from "@/public/images/card_filter2.png";
import card3 from "@/public/images/card_filter3.png";
import Link from "next/link";

export const MuchEasier = () => {
  return (
    <section>
      <div className="my-container section-gap">
        <div className="max-w-[506px] mx-auto mb-[60px]">
          <SectionHeading title="Make your card to much easier" />
        </div>
        <div className="flex justify-center">
          <Image src={madeYourCardImage} alt="Make your card Image" />
        </div>
        <div className="grid grid-cols-3 gap-6 mt-[120px]">
          <div className="group">
            <Image src={card1} alt="credit card1" />
            <div className="mt-[30px] flex justify-center">
              <Link href="/">
                <button className="px-10 py-[15px] bg-slate-200 group-hover:bg-primary-color-2 text-[#292C32]  font-medium border">
                  Get Started Now
                </button>
              </Link>
            </div>
          </div>

          <div className="group">
            <Image src={card2} alt="credit card1" />
            <div className="mt-[30px] flex justify-center">
              <Link href="/">
                <button className="px-10 py-[15px] group-hover:bg-primary-color-2 bg-slate-200 text-[#292C32]  font-medium border">
                  Get Started Now
                </button>
              </Link>
            </div>
          </div>
          <div className="group">
            <Image src={card3} alt="credit card1" />
            <div className="mt-[30px] flex justify-center">
              <Link href="/">
                <button className="px-10 py-[15px] group-hover:bg-primary-color-2 bg-slate-200 text-[#292C32]  font-medium border">
                  Get Started Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
