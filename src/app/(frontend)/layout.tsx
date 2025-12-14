import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Yunyt",
  description: "Yunyt is your all-in-one event management and printing solution, designed to make your events unforgettable and your brand shine with PrintLab.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased relative text-secondary`}
      >
        <div className="fixed top-0 -z-10 bg-[linear-gradient(to_bottom,#badfe7_0%,#badfe7_30%,#eab6d1_100%)] h-screen w-screen" /> 
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
