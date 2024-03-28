import { createBrowserRouter } from "react-router-dom";
// layouts
import MainLayout from "@/layouts/MainLayout";
// public pages
import Home from "@/pages/public/Home";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default route;
