import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "./_components/hero-section";
import CommanChallenge from "./_components/comman-challenge";
import WhyUs from "./_components/why-us";
import GetInTouch from "./_components/get-in-touch";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` ${inter.className}`}
    >
    <HeroSection />
    <CommanChallenge />
    <WhyUs />
    <GetInTouch />
    </main>
  );
}
