import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { TbMessageDots } from "react-icons/tb";

const Book = () => {
  const activeClassName = "flex items-center gap-2 border-r-2 border-secondary";

  return (
    <div className="drawer drawer-mobile">
      <input id="booking-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-slate-100">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side pt-2">
        <label htmlFor="booking-sidebar" className="drawer-overlay"></label>
        <ul className="p-4 overflow-y-auto w-52 bg-base-100 text-base-content flex flex-col gap-4">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : "flex items-center gap-2"
              }
              to="bookingList"
            >
              <BiCart className="w-[20px] h-[20px] text-zinc-500" />
              Booking List
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : "flex items-center gap-2"
              }
              to="addReview"
            >
              <TbMessageDots className="w-[20px] h-[20px] text-zinc-500" />
              Review
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Book;
