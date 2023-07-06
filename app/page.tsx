import { Banner } from "@/components/home/banner/Banner";
import { Lone } from "@/components/home/lone/Lone";
import { Navbar } from "@/components/home/navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Lone />
    </main>
  );
}
