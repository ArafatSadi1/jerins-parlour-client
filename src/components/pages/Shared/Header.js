import React from "react";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../Image_Icon/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import useAdmin from "../../hooks/useAdmin";
import Loading from "./Loading";

const Header = () => {
  const activeClassName = "text-lg border-b-2 border-secondary pb-2";
  const [user, loading] = useAuthState(auth);
  const { admin, isLoading } = useAdmin(user);
  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  const navbarItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : "text-lg")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : "text-lg")}
          to="/contactUs"
        >
          Contact Us
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : "text-lg"
            }
            to="/book/bookingList"
          >
            Booked
          </NavLink>
        </li>
      )}
      {user && admin && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : "text-lg"
            }
            to="/dashboard/orderList"
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        {user ? (
          <button
            onClick={() => signOut(auth)}
            className="py-2 px-4 bg-secondary rounded text-lg text-white hover:bg-[#d400a2] duration-300"
          >
            Sign Out
          </button>
        ) : (
          <NavLink
            className="py-2 px-4 rounded border border-primary text-lg hover:bg-primary hover:text-white duration-300"
            to="/login"
          >
            Login
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-pink-50 sticky top-0 z-50 py-4 shadow">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-2"
          >
            {navbarItems}
          </ul>
        </div>

        <Link to="/">
          <img width={130} src={logo} alt="" />
        </Link>
      </div>
      <label
        htmlFor="booking-sidebar"
        className="btn btn-ghost lg:hidden navbar-end"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <div className="navbar-end w-4/5 hidden lg:flex">
        <ul className="menu-horizontal p-0 gap-8 pr-4 items-center">{navbarItems}</ul>
      </div>
    </div>
  );
};

export default Header;
