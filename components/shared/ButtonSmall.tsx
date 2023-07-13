import Link from "next/link";

type Props = {
  url: string;
  text: string;
};

export const ButtonSmall = ({ url, text }: Props) => {
  return (
    <Link href={url}>
      <button className="px-[32px] py-[12px] bg-primary-color-2  text-base group-hover:bg-slate-100 text-[#292C32]  font-medium">
        {text}
      </button>
    </Link>
  );
};
