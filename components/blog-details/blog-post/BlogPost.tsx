import React from "react";
import blogDetailImage from "@/public/images/blog-details.png";
import blogDetailImage2 from "@/public/images/blog-details2.png";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";

export const BlogPost = () => {
  return (
    <section>
      <div className=" container py-[50px] max-lg:px-2 md:py-[60px] lg:py-[70px] xl:py-[120px]">
        <div className="mx-auto">
          <Image
            src={blogDetailImage}
            alt="Blog Details Image"
            className="mb-10 md:mb-[60px]"
          />
          <div className="mb-6 flex items-center">
            <p className="text-lg">Bank</p>
            <div className="flex items-center text-sm leading-[150%] text-[#6F7278]">
              <div className="text-xl text-primary-color-2">
                <GoDotFill />
              </div>
              <span>21 April 2023 - 2 min read</span>
            </div>
          </div>
          <div className="mb-6 max-w-[855px]">
            <SectionHeading title="The Importance of Choosing the Right Bank for Your Financial Needs" />
          </div>
          <div className="mb-[60px] max-w-[855px] space-y-4">
            <SectionText text="Banks provide a range of financial services to consumers, including savings accounts, checking accounts, and loans. Savings accounts allow individuals to earn interest on their deposits, while checking accounts provide a convenient way to make purchases and pay bills. Loans enable individuals to borrow money for a variety of purposes," />
            <SectionText text="such as buying a home or car, starting a business, or paying for education." />
          </div>
          <div className="mb-[60px] grid-cols-12 md:grid">
            <div className="col-span-11 col-start-2">
              <Image src={blogDetailImage2} alt="Blog Details Image" />
            </div>
          </div>
          <div className="grid-cols-12 md:grid lg:mb-[60px]">
            <div className="col-span-8 col-start-3">
              <p className="mb-6 font-montserrat text-[32px] font-semibold leading-[120%] text-[#000515]">
                Facilitating Transactions and Payments
              </p>
              <SectionText text="Banks also play a critical role in facilitating transactions and payments in the economy. Banks provide payment services such as wire transfers, ACH transfers, and credit and debit card processing. These services enable individuals and businesses to make purchases and payments quickly and securely." />
              <div className="mb-10 mt-5 font-semibold">
                <SectionText text="Banks also play a key role in investing in the economy. Banks use deposits from customers to make loans to businesses and individuals, which helps to drive economic growth and create jobs. Banks also invest in financial instruments such as stocks and bonds, which can generate returns for their customers." />
              </div>
              <ul className=" ms-5 list-disc space-y-5 ">
                <li>
                  Banks have been around for centuries, and their role in the
                  economy has evolved over time. Today, banks are critical to
                  the functioning of modern economies
                </li>
                <li>
                  Banks provide a range of financial services to consumers,
                  including savings accounts, checking accounts, and loans.
                </li>
                <li>
                  Banks also play a critical role in facilitating transactions
                  and payments in the economy. Banks provide payment services
                  such as wire transfers,
                </li>
                <li>
                  Banks also play a key role in investing in the economy. Banks
                  use deposits from customers to make loans to businesses and
                  individuals
                </li>
                <li>
                  Banks are also responsible for maintaining financial stability
                  in the economy. They do this by managing risks and ensuring
                  that they have sufficient capital to absorb losses.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
