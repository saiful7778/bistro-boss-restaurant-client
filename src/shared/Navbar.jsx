import { Link, NavLink, useNavigate } from "react-router-dom";
import { LuMenuSquare, LuShoppingCart } from "react-icons/lu";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState } from "react";
import SiteLogo from "@/components/SiteLogo";
import { Avatar, Button, Popover } from "keep-react";
import cn from "@/libs/cn";
import useAuth from "@/hooks/useAuth";
import Swal from "sweetalert2";

const navLinks = [
  { _id: "nv1", navName: "home", path: "/" },
  { _id: "nv2", navName: "contact us", path: "/contact" },
  { _id: "nv3", navName: "our menu", path: "/menu" },
  { _id: "nv4", navName: "our shop", path: "/shop" },
];

const Navbar = () => {
  const { user, signOutAccount } = useAuth();
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOutAccount();
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: err,
      });
    }
  };

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
            <span className="absolute -right-1 -top-1 z-50 rounded-full bg-primary-600 px-2 text-xs">
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
                <Avatar size="md" shape="circle" img={user?.photoURL} />
              </Popover.Action>
              <Popover.Content className="z-[110] rounded bg-white p-2 shadow">
                <Link
                  className="mb-2 block rounded px-2 py-1 hover:bg-gray-300"
                  to="/admin/dashboard"
                >
                  Dashboard
                </Link>
                <Button
                  className="w-full"
                  onClick={handleSignOut}
                  color="error"
                  size="xs"
                >
                  Sign Out
                </Button>
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
