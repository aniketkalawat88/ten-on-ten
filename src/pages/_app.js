import React, { useEffect } from "react";
import "@/styles/globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import aos from "aos";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    aos.init();
  }, []);
  return <Component {...pageProps} />;
}
