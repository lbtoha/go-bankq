import { AccountForm } from "@/components/home/accountForm/AccountForm";
import { Banner } from "@/components/home/banner/Banner";
import { Brand } from "@/components/home/brand/Brand";
import { CreditCard } from "@/components/home/creditCard/CreditCard";
import { FrequentlyAsk } from "@/components/home/frequentlyAsk/FrequentlyAsk";
import { LatestArticle } from "@/components/home/latestArticle/LatestArticle";
import { Loan } from "@/components/home/loan/Loan";
import { Navbar } from "@/components/home/navbar/Navbar";
import { OpenAccount } from "@/components/home/openAccount/OpenAccount";
import { OurClientSay } from "@/components/home/ourClientSay/OurClientSay";
import { Services } from "@/components/home/services/Services";
import { StandOut } from "@/components/home/standOut/StandOut";
import { Footer } from "@/components/shared/Footer";
import { OurImpact } from "@/components/shared/OurImpact";

export default function Home() {
  return (
    <main>
      <Banner />
      <Loan />
      <Brand />
      <Services />
      <StandOut />
      <OurImpact />
      <CreditCard />
      <OpenAccount />
      <FrequentlyAsk />
      <LatestArticle />
      <OurClientSay />
      <AccountForm />
    </main>
  );
}
