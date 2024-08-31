import "@/styles/globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

export default function App({ Component, pageProps }) {
  return(
    <div>
      <Navbar />
      <Component {...pageProps} />;
      <Footer />
    </div>
  ) 
}
