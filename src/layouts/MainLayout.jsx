import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-full overflow-x-hidden duration-300 font-inter">
      MainLayout
      <Outlet />
    </div>
  );
};

export default MainLayout;
