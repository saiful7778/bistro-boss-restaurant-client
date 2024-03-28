import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gray-50 font-inter text-gray-900 duration-300">
      <header>
        <Navbar />
      </header>
      <div className="container p-2">
        <h1 className="text-3xl font-bold">Main Layout</h1>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
