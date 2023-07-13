import Link from "next/link";

type Props = {
  url: string;
  text: string;
};

export const ButtonGreenSmall = ({ text, url }: Props) => {
  return (
    <Link href={url}>
      <button className="px-[32px] py-[12px] text-base  bg-primary-color-1  font-medium  text-primary-color-2">
        {text}
      </button>
    </Link>
  );
};
