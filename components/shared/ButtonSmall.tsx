import Link from "next/link";

type Props = {
  url: string;
  text: string;
};

export const ButtonSmall = ({ url, text }: Props) => {
  return (
    <Link href={url}>
      <button className="bg-primary-color-2 px-[32px] py-[12px]  text-base font-medium text-neutral-color-neutral-800  group-hover:bg-slate-100">
        {text}
      </button>
    </Link>
  );
};
