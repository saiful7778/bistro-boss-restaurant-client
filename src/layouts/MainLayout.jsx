import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gray-50 font-inter text-gray-900 duration-300">
      <header>
        <Navbar />
      </header>
      <main className="container p-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
