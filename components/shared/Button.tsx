import Link from "next/link";

type Props = {
  url: string;
  text: string;
};

export const Button = ({ url, text }: Props) => {
  return (
    <Link href={url}>
      <button className="px-10 py-[15px] bg-primary-color-2 text-[#292C32]  font-medium">
        {text}
      </button>
    </Link>
  );
};
