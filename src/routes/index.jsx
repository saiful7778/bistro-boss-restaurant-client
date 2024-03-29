/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// layouts
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
// public pages
import Home from "@/pages/public/Home";
import AuthenticationRoute from "./AuthenticationRoute";
import SuspenseProvider from "@/components/SuspenseProvider";

const Menu = lazy(() => import("@/pages/public/Menu"));
const SignIn = lazy(() => import("@/pages/authentication/SignIn"));
const SignUp = lazy(() => import("@/pages/authentication/SignUp"));

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
        element: (
          <SuspenseProvider>
            <Menu />
          </SuspenseProvider>
        ),
      },
    ],
  },
  {
    path: "/authentication",
    element: (
      <AuthenticationRoute>
        <SuspenseProvider>
          <AuthLayout />
        </SuspenseProvider>
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
