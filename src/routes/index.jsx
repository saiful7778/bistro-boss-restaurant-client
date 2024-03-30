/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import SuspenseProvider from "@/components/SuspenseProvider";
// layouts
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
import AdminLayout from "@/layouts/AdminLayout";
// condition protect route
import AuthenticationRoute from "./AuthenticationRoute";
import PrivateRoute from "./PrivateRoute";
// public pages
import Home from "@/pages/public/Home";
const Menu = lazy(() => import("@/pages/public/Menu"));
const Contact = lazy(() => import("@/pages/public/Contact"));
const Shop = lazy(() => import("@/pages/public/Shop"));
const ErrorPage = lazy(() => import("@/pages/ErrorPage"));
// authentication pages
const SignIn = lazy(() => import("@/pages/authentication/SignIn"));
const SignUp = lazy(() => import("@/pages/authentication/SignUp"));
// admin pages
const Dashboard = lazy(() => import("@/pages/admin/Dashboard"));

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
      {
        path: "contact",
        element: (
          <SuspenseProvider>
            <Contact />
          </SuspenseProvider>
        ),
      },
      {
        path: "shop",
        errorElement: <ErrorPage />,
        element: (
          <SuspenseProvider>
            <Shop />
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
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <SuspenseProvider>
          <AdminLayout />
        </SuspenseProvider>
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default route;
