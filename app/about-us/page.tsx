import { AboutHeader } from "@/components/about/aboutHeader/AboutHeader";
import { GoBank } from "@/components/about/goBank/GoBank";
import { Navbar } from "@/components/home/navbar/Navbar";
import { Footer } from "@/components/shared/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <AboutHeader />
      <GoBank />
      <Footer />
    </main>
  );
}
