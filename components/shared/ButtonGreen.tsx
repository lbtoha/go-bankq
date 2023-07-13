import Link from "next/link";

type Props = {
  url: string;
  text: string;
};

export const ButtonGreen = ({ text, url }: Props) => {
  return (
    <Link href={url}>
      <button className="px-10 py-[15px] bg-primary-color-1  font-medium border border-primary-color-1 text-primary-color-2">
        {text}
      </button>
    </Link>
  );
};
