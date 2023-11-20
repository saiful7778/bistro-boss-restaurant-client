import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Banner from "./shared/Banner";

const MainLayout = () => {
  return (
    <div className="w-full overflow-x-hidden duration-300 font-inter relative">
      <header>
        <Navbar />
        <Banner />
      </header>
      MainLayout
      <Outlet />
    </div>
  );
};

export default MainLayout;
