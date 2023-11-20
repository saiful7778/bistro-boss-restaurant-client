import { NavLink, Link } from "react-router-dom";
import cartIcon from "../../assets/img/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import { FaUserCircle } from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState } from "react";

const navLinks = [
  { _id: "nv1", navName: "home", path: "/" },
  { _id: "nv3", navName: "contact us", path: "/contact" },
  { _id: "nv2", navName: "dashboard", path: "/dashboard" },
  { _id: "nv4", navName: "our menu", path: "/our_menu" },
  { _id: "nv5", navName: "our shop", path: "/our_shop" },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const renderNavLinks = navLinks?.map((nav) => (
    <li key={nav._id}>
      <NavLink
        className={({ isActive, isPending }) =>
          (isPending ? "pending" : isActive ? "active" : "") + " nav-link"
        }
        to={nav.path}
      >
        {nav.navName}
      </NavLink>
    </li>
  ));
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img className="w-10 sm:hidden" src="/logo.png" alt="site logo" />
          <div className="max-sm:hidden font-bold font-cinzel text-xl">
            BISTRO BOSS
          </div>
          <div className="max-sm:hidden font-cinzel text-xl leading-3 tracking-[0.08em]">
            Restaurant
          </div>
        </Link>
        <div className="flex gap-2 items-center">
          <ul className="res:flex hidden gap-2 items-center">
            {renderNavLinks}
          </ul>

          <button className="click-ani" type="button">
            <img className="w-10" src={cartIcon} alt="cart button icon" />
          </button>
          <div className="flex gap-2">
            {/* <UserLoggedIn /> */}
            <UserLoggedOut />
          </div>
          <button
            onClick={() => setMobileMenu((prop) => !prop)}
            className="click-ani res:hidden block"
            type="button"
          >
            <LuMenuSquare size={30} />
          </button>
        </div>
      </nav>
      <div
        className={`fixed z-[1000] top-0 min-h-screen trans-bg p-6 backdrop-blur text-white duration-500 ${
          mobileMenu ? "right-0" : "-right-full"
        }`}
      >
        <button onClick={() => setMobileMenu((prop) => !prop)} type="button">
          <AiOutlineCloseSquare size={30} />
        </button>
        <ul className="space-y-3 text-center mt-4">{renderNavLinks}</ul>
        <div className="flex flex-col items-center gap-2">
          <button className="click-ani" type="button">
            <img className="w-10" src={cartIcon} alt="cart button icon" />
          </button>
          <UserLoggedIn />
          <UserLoggedOut />
        </div>
      </div>
    </>
  );
};

const UserLoggedIn = () => {
  return (
    <>
      <button className="click-ani uppercase font-bold" type="button">
        sign out
      </button>
      <button className="click-ani" type="button">
        <FaUserCircle size={30} />
      </button>
    </>
  );
};

const UserLoggedOut = () => {
  return (
    <>
      <button className="click-ani uppercase font-bold" type="button">
        sign in
      </button>
      <button className="click-ani uppercase font-bold" type="button">
        sign up
      </button>
    </>
  );
};

export default Navbar;
