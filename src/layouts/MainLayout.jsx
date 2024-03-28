import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Main Layout</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
