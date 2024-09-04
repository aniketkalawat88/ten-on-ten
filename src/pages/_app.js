import React, { useEffect } from "react";
import "@/styles/globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import aos from "aos";
import { RouteProvider } from "../../context/context";
import GetCounsularModal from "./_components/get-counsular-modal";


export const metadata = {
  title: "Rahul More",
  // description: "A Frontend Developer Portfolio",
};


export default function App({ Component, pageProps }) {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <RouteProvider>
      <GetCounsularModal />
      <Component {...pageProps} />
    </RouteProvider>
  )
}
