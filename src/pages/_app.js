import "@/styles/globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return(
    <div>
      <Navbar />
      <Component {...pageProps} />;
      <Footer />
    </div>
  ) 
}
