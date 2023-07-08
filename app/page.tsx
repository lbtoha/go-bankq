import { Banner } from "@/components/home/banner/Banner";
import { Brand } from "@/components/home/brand/Brand";
import { Loan } from "@/components/home/loan/Loan";
import { Navbar } from "@/components/home/navbar/Navbar";
import { Services } from "@/components/home/services/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Loan />
      <Brand />
      <Services />
    </main>
  );
}
