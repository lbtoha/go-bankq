import Link from "next/link";

type Props = {
  url: string;
  text: string;
};

export const ButtonOutline = ({ text, url }: Props) => {
  return (
    <Link href={url}>
      <button className="px-10 py-[15px]   font-medium border border-gray-200">
        {text}
      </button>
    </Link>
  );
};
