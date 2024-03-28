import Footer from "@/shared/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="font-inter relative min-h-screen w-full overflow-x-hidden bg-gray-50 text-gray-900 duration-300">
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
