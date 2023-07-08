import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";
import { PermIdentity } from "@mui/icons-material";
import Link from "next/link";

export const Services = () => {
  return (
    <section className="mt-[120px]">
      <div className="lg:my-container">
        <div className="grid grid-cols-2">
          <div>
            <h3 className="text-[40px] font-bold leading-[120%] text-[#292C32]">
              Browse our set of banking services and offerings
            </h3>
            <div className="flex mt-[60px] gap-[35px]">
              <Button text="Get Started" url="/" />
              <Link href="/">
                <button className="px-10 py-[15px] bg-gray-100 text-[#292C32] font-medium underline">
                  Browser Feature
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
};
