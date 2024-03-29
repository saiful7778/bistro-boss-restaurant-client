import { createBrowserRouter } from "react-router-dom";
// layouts
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
// public pages
import Home from "@/pages/public/Home";
import SignIn from "@/pages/authentication/SignIn";
import SignUp from "@/pages/authentication/SignUp";
import AuthenticationRoute from "./AuthenticationRoute";
import Menu from "@/pages/public/Menu";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
    ],
  },
  {
    path: "/authentication",
    element: (
      <AuthenticationRoute>
        <AuthLayout />
      </AuthenticationRoute>
    ),
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export default route;
