"use client";
import { usePathname } from "next/navigation";
import { FiChevronRight } from "react-icons/fi";

export const PageHeader = () => {
  const path = usePathname();
  const convertToTitleCase = (str: string) => {
    // Remove leading slash
    str = str.slice(1);
    // Split the string into words
    const words = str.split("-");
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    // Join the words with a space
    const result = capitalizedWords.join(" ");
    return result;
  };
  const heading = convertToTitleCase(path);

  return (
    <>
      <h2 className="text-white text-[64px] font-semibold pt-[120px] capitalize">
        {heading}
      </h2>
      <div className="mt-6 flex items-center pb-[120px]">
        <span className="text-[#A0A2A7] flex items-center">
          Home <FiChevronRight />
        </span>
        <span className="text-primary-color-2">{heading}</span>
      </div>
    </>
  );
};
