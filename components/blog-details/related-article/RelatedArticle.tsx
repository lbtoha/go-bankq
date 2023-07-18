import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";
import block3 from "@/public/images/blog3.png";
import block4 from "@/public/images/blog4.png";
import block5 from "@/public/images/blog5.png";
import { RiMessage2Line } from "react-icons/ri";
import articleAuthor from "@/public/images/article_author.png";
import { Button } from "@/components/shared/Button";

export const RelatedArticle = () => {
  return (
    <section>
      <div className="my-container section-gap">
        <div className="text-center">
          <SectionHeading title="Related Article" />
        </div>
        <div className="mt-[60px] grid grid-cols-3 gap-6">
          <div>
            <Image src={block3} alt="blog1" className="w-full" />
            <div className="mt-5 flex items-center justify-between text-primary-color-1 ">
              <span className="text-lg">Bank</span>
              <span className="flex items-center gap-2 text-primary-color-1">
                <RiMessage2Line />
                <span className="text-sm text-[#292C32]">06 comments</span>
              </span>
            </div>
            <p
              className={`mt-3 font-montserrat text-xl font-semibold leading-[130%] text-[#292C32] `}
            >
              Nurturing and Growing Your Assets
            </p>

            <p className="mb-[24px] mt-4 text-base leading-[150%] text-[#6F7278]">
              Banks have been around for centuries, and their role in evolved
              over time.
            </p>
            <div className="flex items-center gap-4 border-t border-[#E7E9EE] pt-[18px]">
              <Image
                src={articleAuthor}
                alt="article author"
                className="rounded-full"
              />
              <div className="">
                <p className="text-xl leading-[150%] text-[#292C32]">
                  Jon Haroson
                </p>
                <p className="text-sm leading-[150%] text-[#6F7278]">
                  21 April 2023 - 2 min read
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image src={block4} alt="blog1" className="w-full object-cover" />
            <div className="mt-5 flex items-center justify-between text-primary-color-1 ">
              <span className="text-lg">Bank</span>
              <span className="flex items-center gap-2 text-primary-color-1">
                <RiMessage2Line />
                <span className="text-sm text-[#292C32]">06 comments</span>
              </span>
            </div>
            <p
              className={`mt-3 font-montserrat text-xl font-semibold leading-[130%] text-[#292C32] `}
            >
              Tips and Tricks for Financial Success
            </p>

            <p className="mb-[24px] mt-4 text-base leading-[150%] text-[#6F7278]">
              Banks have been around for centuries, and their role in evolved
              over time.
            </p>
            <div className="flex items-center gap-4 border-t border-[#E7E9EE] pt-[18px]">
              <Image
                src={articleAuthor}
                alt="article author"
                className="rounded-full"
              />
              <div className="">
                <p className="text-xl leading-[150%] text-[#292C32]">
                  Jon Haroson
                </p>
                <p className="text-sm leading-[150%] text-[#6F7278]">
                  21 April 2023 - 2 min read
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image src={block5} alt="blog1" className="w-full object-cover" />
            <div className="mt-5 flex items-center justify-between text-primary-color-1 ">
              <span className="text-lg">Bank</span>
              <span className="flex items-center gap-2 text-primary-color-1">
                <RiMessage2Line />
                <span className="text-sm text-[#292C32]">06 comments</span>
              </span>
            </div>
            <p
              className={`mt-3 font-montserrat text-xl font-semibold leading-[130%] text-[#292C32] `}
            >
              Revolutionizing the Banking Industry
            </p>

            <p className="mb-[24px] mt-4 text-base leading-[150%] text-[#6F7278]">
              Banks have been around for centuries, and their role in evolved
              over time.
            </p>
            <div className="flex items-center gap-4 border-t border-[#E7E9EE] pt-[18px]">
              <Image
                src={articleAuthor}
                alt="article author"
                className="rounded-full"
              />
              <div className="">
                <p className="text-xl leading-[150%] text-[#292C32]">
                  Jon Haroson
                </p>
                <p className="text-sm leading-[150%] text-[#6F7278]">
                  21 April 2023 - 2 min read
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[60px] text-center">
          <Button text="See More" url="/" />
        </div>
      </div>
    </section>
  );
};
