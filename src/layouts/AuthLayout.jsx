import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-2">
      <div className="container flex flex-col items-center justify-between rounded border border-gray-300 p-4 shadow-md md:flex-row">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
