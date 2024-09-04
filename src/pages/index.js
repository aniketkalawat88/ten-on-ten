import { useEffect } from "react";
import { Inter } from "next/font/google";
import HeroSection from "./_components/hero-section";
import CommanChallenge from "./_components/comman-challenge";
import WhyUs from "./_components/why-us";
import GetInTouch from "./_components/get-in-touch";
import { useRouter } from "next/navigation";
import Layout from "./_components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const router = useRouter();

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const value = localStorage.getItem("user");
  //     const user = JSON.parse(value);
  //     if (!user) {
  //       return router.push("/login");
  //     }
  //   }
  // }, [router]);
  return (
    <Layout>
      <main className={` ${inter.className}`}>
        <HeroSection />
        <CommanChallenge />
        <WhyUs />
        <GetInTouch />
      </main>
    </Layout>
  );
}
