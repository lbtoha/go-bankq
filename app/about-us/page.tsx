import { AboutOpenAccount } from "@/components/about/AboutOpenAccount/AboutOpenAccount";
import { AboutBrand } from "@/components/about/about-brand/AboutBrand";
import { AboutHeader } from "@/components/about/aboutHeader/AboutHeader";
import { Explore } from "@/components/about/explore/Explore";
import { GoBank } from "@/components/about/goBank/GoBank";
import { ImpactNumber } from "@/components/about/impactNumber/ImpactNumber";
import { MissionAndVision } from "@/components/about/missionAndVision/MissionAndVision";
import { OurValues } from "@/components/about/ourValues/OurValues";
import { Navbar } from "@/components/home/navbar/Navbar";
import { OurClientSay } from "@/components/home/ourClientSay/OurClientSay";
import { Footer } from "@/components/shared/Footer";

export default function Home() {
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
      <OurClientSay />
    </main>
  );
}
