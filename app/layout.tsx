import { textFont } from "@/utils/fonts";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/main.scss";
import { Navbar } from "@/components/home/navbar/Navbar";
import { Footer } from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${textFont.className} text-lg`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
