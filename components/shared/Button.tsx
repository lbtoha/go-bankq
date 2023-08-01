import Link from "next/link";

type Props = {
  url: string;
  text: string;
  btnType: "btnPrimary" | "outLine";
};

export const Button = ({ url, text, btnType }: Props) => {
  return (
    <Link href={url}>
      <button
        className={`custom-transition border hover:bg-neutral-color-neutral-100  ${
          btnType == "btnPrimary" ? "bg-primary-color-2" : "border-white"
        }  hover:bg-slate-200 px-3 py-[10px] text-base font-medium text-neutral-color-neutral-800 sm:text-lg md:px-10 md:py-[15px]`}
      >
        {text}
      </button>
    </Link>
  );
};
