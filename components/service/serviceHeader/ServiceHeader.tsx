import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import serviceBanner from "@/public/images/service_banner.png";

export const ServiceHeader = () => {
  return (
    <section className="msx-lg:section-gap bg-primary-color-1 max-sm:ps-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <PageHeader title="Service" items={["Home", "Service"]} />
          </div>
          <div className="hidden lg:block">
            <Image src={serviceBanner} alt="service banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
