import { OurImpact } from "@/components/shared/ourImpact/OurImpact";
import { titleFont } from "@/utils/fonts";
import Image from "next/image";

export const Impact = () => {
  return (
    <section className="countdown-section">
      <div className="my-container">
        <OurImpact />
      </div>
    </section>
  );
};