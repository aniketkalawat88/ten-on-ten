import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./_components/navbar";
import HeroSection from "./_components/hero-section";
import CommanChallenge from "./_components/comman-challenge";
import WhyUs from "./_components/why-us";
import GetInTouch from "./_components/get-in-touch";
import Footer from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` ${inter.className}`}
    >
    {/* <Navbar /> */}
    <HeroSection />
    <CommanChallenge />
    <WhyUs />
    <GetInTouch />
    {/* <Footer /> */}
    </main>
  );
}
