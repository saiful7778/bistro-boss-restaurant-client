import HomeBanner from "@/shared/Banner";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gray-50 font-inter text-gray-900 duration-300">
      <header>
        <Navbar />
        {location.pathname === "/" && <HomeBanner />}
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
