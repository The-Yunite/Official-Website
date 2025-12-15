import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionClearer from "@/components/SessionClearer";

export const metadata: Metadata = {
  title: "The Yunyt",
  description: "Yunyt helps startups and businesses build, optimize, and scale digital products with web platforms, automation, practical AI, and tech event organization.",
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
        <SessionClearer />
        <div className="fixed top-0 -z-10 bg-[linear-gradient(to_bottom,#badfe7_0%,#badfe7_30%,#eab6d1_100%)] h-screen w-screen" /> 
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
