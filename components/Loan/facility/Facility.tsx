import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionText } from "@/components/shared/SectionText";
import FacilityCard from "./FacilityCard";

export const Facility = () => {
  const facilityCardData = [
    {
      id: 11333001,
      title: "Examples of Facilities",
      bodyText:
        "A facility is a formal financial assistance program offered by a lending institution.",
    },
    {
      id: 11333002,
      title: "How a Facility Works",
      bodyText:
        "A facility is a formal financial assistance program offered by a lending institution.",
    },
    {
      id: 11333003,
      title: "Examples of Facilities",
      bodyText:
        "A facility is a formal financial assistance program offered by a lending institution.",
    },
    {
      id: 11333004,
      title: "Business Lines of Credit",
      bodyText:
        "A facility is a formal financial assistance program offered by a lending institution.",
    },
  ];
  return (
    <section>
      <div className="section-gap horizontal-gap container">
        <div className="grid grid-cols-1 items-center justify-between  xl:grid-cols-12 ">
          <div className="max-xl:mb-10 lg:mb-0 xl:col-span-5">
            <p className="hidden w-fit bg-primary-color-2 bg-opacity-20 px-[14px] py-[11px] text-lg leading-[150%] text-primary-color-1 sm:block">
              Loan Facility
            </p>

            <div className="mb-4 mt-8 xl:mb-6 xl:mt-10">
              <SectionHeading title="Facility: Definition, Loan Types, and Examples" />
            </div>
            <SectionText text="An unsecured business line of credit gives corporations access to cash as needed at a competitive rate, with flexible payment choices. A traditional line of credit provides check-writing privileges, requires an annual review" />
          </div>
          <div className="xl:col-start-7 xl:col-end-13">
            <div className="grid gap-6 md:grid-cols-2 ">
              {facilityCardData.map(({ id, title, bodyText }) => (
                <FacilityCard key={id} title={title} bodyText={bodyText} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
