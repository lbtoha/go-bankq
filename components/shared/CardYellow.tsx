"use client";
import Link from "next/link";

type Props = {
  cardTitle: string;
  cardBody: string;
  children: React.ReactNode;
};

export const CardYellow = ({ cardTitle, cardBody, children }: Props) => {
  return (
    <div className={``}>
      <span className="">{children}</span>
      <h4 className="mt-7 text-xl font-medium leading-[120%] text-dark sm:text-2xl md:mt-10 md:text-2xl ">
        {cardTitle}
      </h4>
      <p className="mb-8 mt-4 flex flex-col text-base leading-[150%]  text-neutral-color-neutral-600 group-hover:text-neutral-color-neutral-800 md:mt-5 xxl:mb-[60px]">
        {cardBody}
      </p>
      <Link href="/">
        <span className="material-symbols-outlined custom-transition rounded-full bg-[#D9D9D9] p-[10px] text-[30px] font-normal group-hover:bg-dark group-hover:text-white">
          north_east
        </span>
      </Link>
    </div>
  );
};
