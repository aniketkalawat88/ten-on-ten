import Footer from "./footer";
import Navbar from "./navbar";
import PhoneNavbarDrawer from "./phone-navbar-drawe";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <PhoneNavbarDrawer />
      
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;