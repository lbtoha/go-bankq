import { AboutOpenAccount } from "@/components/about/AboutOpenAccount/AboutOpenAccount";
import { AboutBrand } from "@/components/about/about-brand/AboutBrand";
import { AboutHeader } from "@/components/about/aboutHeader/AboutHeader";
import { Explore } from "@/components/about/explore/Explore";
import { GoBank } from "@/components/about/goBank/GoBank";
import { ImpactNumber } from "@/components/about/impactNumber/ImpactNumber";
import { MissionAndVision } from "@/components/about/missionAndVision/MissionAndVision";
import { OurValues } from "@/components/about/ourValues/OurValues";
import { OurClientSaySection } from "@/components/shared/OurClientSaySection";

export default function About() {
  return (
    <main>
      <AboutHeader />
      <GoBank />
      <OurValues />
      <MissionAndVision />
      <ImpactNumber />
      <Explore />
      <AboutBrand />
      <AboutOpenAccount />
      <OurClientSaySection />
    </main>
  );
}
