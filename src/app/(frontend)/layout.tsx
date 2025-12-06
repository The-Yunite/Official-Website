import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Iridescence from "@/components/Iridescence";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white relative`}
      >
        <Navbar />
        <div className=' fixed top-0 left-0 -z-10'>
          <Iridescence
            color={[0.5, 0.6, 0.8]}
            mouseReact={false}
            amplitude={0.1}
            speed={1.0}
          />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
