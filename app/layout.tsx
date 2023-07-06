import { textFont } from "@/utils/fonts";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GOBANKQ-Banking & Finance",
  description: "NextJs Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${textFont.className} text-lg bg-red-400`}>
        {children}
      </body>
    </html>
  );
}
