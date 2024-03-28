import { NavLink, useNavigate } from "react-router-dom";
import { LuMenuSquare, LuShoppingCart } from "react-icons/lu";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState } from "react";
import SiteLogo from "@/components/SiteLogo";
import { Avatar, Button, Popover } from "keep-react";
import cn from "@/libs/cn";
import useAuth from "@/hooks/useAuth";

const navLinks = [
  { _id: "nv1", navName: "home", path: "/" },
  { _id: "nv3", navName: "contact us", path: "/contact" },
  { _id: "nv2", navName: "dashboard", path: "/dashboard" },
  { _id: "nv4", navName: "our menu", path: "/our_menu" },
  { _id: "nv5", navName: "our shop", path: "/our_shop" },
];

const Navbar = () => {
  const { user } = useAuth();
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const renderNavLinks = navLinks?.map((nav) => (
    <li key={nav._id}>
      <NavLink
        className={({ isActive, isPending }) =>
          cn("nav-link", isPending ? "pending" : isActive && "active")
        }
        to={nav.path}
      >
        {nav.navName}
      </NavLink>
    </li>
  ));

  return (
    <>
      <nav className="fixed left-0 top-0 z-[100] flex w-full items-center justify-between gap-2 bg-gray-900/40 p-2 text-white shadow-md backdrop-blur">
        <SiteLogo />
        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-2 lg:flex">
            {renderNavLinks}
          </ul>
          <Button className="relative" shape="circle" color="success" size="sm">
            <LuShoppingCart />
            <span className="bg-primary-600 absolute -right-1 -top-1 z-50 rounded-full px-2 text-xs">
              0
            </span>
          </Button>
          <Button
            className="lg:hidden"
            onClick={() => setMobileMenu((prop) => !prop)}
            shape="icon"
            color="primary"
            size="sm"
          >
            <LuMenuSquare size={25} />
          </Button>

          {user ? (
            <Popover placement="bottom-end">
              <Popover.Action className="p-1">
                <Avatar size="md" shape="circle" />
              </Popover.Action>
              <Popover.Content className="z-20 flex items-center gap-3 rounded bg-white p-2 shadow">
                <div>Hello</div>
              </Popover.Content>
            </Popover>
          ) : (
            <>
              <Button
                className="max-sm:hidden"
                onClick={() => navigate("/authentication/sign-in")}
                size="xs"
                color="primary"
              >
                Sign in
              </Button>
              <Button
                className="max-sm:hidden"
                onClick={() => navigate("/authentication/sign-up")}
                size="xs"
                color="success"
              >
                Sign up
              </Button>
            </>
          )}
        </div>
      </nav>
      <div
        className={cn(
          "fixed top-0 z-[100] min-h-screen w-full max-w-xs bg-gray-900/40 p-4 text-white shadow-md backdrop-blur duration-500",
          mobileMenu ? "right-0" : "-right-full",
        )}
      >
        <Button
          onClick={() => setMobileMenu((prop) => !prop)}
          shape="icon"
          color="primary"
          size="sm"
        >
          <AiOutlineCloseSquare size={25} />
        </Button>
        <ul className="space-y-3 text-center">{renderNavLinks}</ul>
        <div className="mt-3 flex flex-col items-center gap-3">
          {user === null && (
            <>
              <Button
                size="xs"
                onClick={() => navigate("/authentication/sign-in")}
                color="primary"
              >
                Sign in
              </Button>
              <Button
                size="xs"
                onClick={() => navigate("/authentication/sign-up")}
                color="success"
              >
                Sign up
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
