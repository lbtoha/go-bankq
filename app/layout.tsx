import { textFont } from "@/utils/fonts";
import { Inter, Montserrat, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import "../styles/main.scss";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/navbar/Navbar";
import { Suspense } from "react";
import ScrollBackToTop from "@/components/scrollBackToTop/ScrollBackToTop";
import Loading from "./loading";
import "material-symbols";

const inter = Inter({ subsets: ["latin"], variable: "--body-font" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--head-font",
  weight: ["300", "400", "600", "700"],
});
export const metadata = {
  title: "Home | GOBANKQ-Banking & Finance",
  description: "NextJs Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`relative ${montserrat.variable} ${inter.variable}  relative font-inter text-lg`}
      >
        <Navbar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
        <ScrollBackToTop />
      </body>
    </html>
  );
}
