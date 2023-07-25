import Link from "next/link";

type Props = {
  url: string;
  text: string;
};

export const ButtonOutline = ({ text, url }: Props) => {
  return (
    <Link href={url}>
      <button className="border px-3 py-[15px] text-sm font-medium  hover:bg-slate-200 hover:text-black sm:text-lg md:px-10">
        {text}
      </button>
    </Link>
  );
};
