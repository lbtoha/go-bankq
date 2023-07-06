import { Banner } from "@/components/home/banner/Banner";
import { Loan } from "@/components/home/loan/Loan";
import { Navbar } from "@/components/home/navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Loan />
    </main>
  );
}
