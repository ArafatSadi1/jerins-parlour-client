import React from "react";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../Image_Icon/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import useAdmin from "../../hooks/useAdmin";
import Loading from "./Loading";

const Header = () => {
  const activeClassName = "bg-secondary text-white";
  const [user, loading] = useAuthState(auth);
  const { admin, isLoading } = useAdmin(user);
  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  const navbarItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          to="/outPortfolio"
        >
          Our Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          to="/ourTeam"
        >
          Our Team
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          to="/contactUs"
        >
          Contact Us
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            to="/book/bookingList"
          >
            Book
          </NavLink>
        </li>
      )}
      {user && admin && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
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
            className="btn btn-secondary text-white"
          >
            Sign Out
          </button>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            to="/login"
          >
            Login
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div class="navbar bg-pink-50 sticky top-0 z-50 py-4 lg:px-8">
      <div class="navbar-start">
        <div class="dropdown ">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-2"
          >
            {navbarItems}
          </ul>
        </div>

        <Link to="/">
          <img width={130} src={logo} alt="" />
        </Link>
      </div>
      <label for="booking-sidebar" class="btn btn-ghost lg:hidden navbar-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <div class="navbar-end w-4/5 hidden lg:flex">
        <ul class="menu menu-horizontal p-0 gap-2">{navbarItems}</ul>
      </div>
    </div>
  );
};

export default Header;
