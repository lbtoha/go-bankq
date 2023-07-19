import { textFont } from "@/utils/fonts";
import { Inter, Montserrat, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import "../styles/main.scss";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/navbar/Navbar";
import { NewNavbar } from "@/components/shared/navbar/NewNavbar";
import MyDatepicker, { VNew } from "@/components/shared/navbar/VNew";
import { NewNavbar2 } from "@/components/shared/navbar/NewNavbar copy 2";

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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable}  font-inter text-lg`}
      >
        <NewNavbar />

        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
