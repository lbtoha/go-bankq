import Logo from "@/public/images/navbar/logo.png";
import Image from "next/image";
import Link from "next/link";
export const Navbar = () => {
  return (
    // relative after:absolute after:border-[0.1px] after:border-[rgba(233, 248, 247, 0.1254901961)] after:w-2/3 after:mx-auto
    <div className="bg-primary-color-1 text-white relative after:absolute after:border-b-[0.1px] after:border-[rgba(233, 248, 247, 0.1254901961)] after:w-full ">
      <div className="my-container flex justify-between items-center">
        <div>
          <a href="/home">
            <Image src={Logo} width={213} height={40} alt="Logo" />
          </a>
        </div>
        <div className="font-semibold">
          <ul className="flex items-center gap-10">
            <li className="py-10 hover:text-primary-color-2 ">
              <Link href="/">Home</Link>
            </li>
            <li className="py-10 hover:text-primary-color-2 ">
              <Link href="/about">About</Link>
            </li>
            <li className="py-10 hover:text-primary-color-2 ">
              <Link href="/service">Service</Link>
            </li>
            <li className="py-10 hover:text-primary-color-2 ">
              <Link href="/loan">Loan</Link>
            </li>
            <li className="py-10 hover:text-primary-color-2 ">
              <Link href="/card">Card</Link>
            </li>
            <li className="py-10 hover:text-primary-color-2 ">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="px-10 py-[15px] bg-primary-color-2 text-[#292C32]  font-medium">
            Register now
          </button>
        </div>
      </div>
    </div>
  );
};
