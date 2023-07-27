import Link from "next/link";

type Props = {
  url: string;
  text: string;
};

export const Button = ({ url, text }: Props) => {
  return (
    <Link href={url}>
      <button className="custom-transition border border-primary-color-2 bg-primary-color-2 px-3 py-[15px] text-base font-medium text-[#292C32] hover:bg-slate-200  sm:text-lg md:px-10">
        {text}
      </button>
    </Link>
  );
};
