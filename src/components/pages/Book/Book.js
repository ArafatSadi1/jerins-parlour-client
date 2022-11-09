import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import cartLogo from "../../../Image_Icon/Icon/Group.png";
import reviewLogo from "../../../Image_Icon/Icon/Group 1368.png";

const Book = () => {
  const activeClassName = "flex items-center gap-2 border-r-2 border-secondary";

  return (
    <div className="drawer drawer-mobile">
      <input id="booking-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-slate-100">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="booking-sidebar" className="drawer-overlay"></label>
        <ul className="p-4 overflow-y-auto w-56 bg-base-100 text-base-content flex flex-col gap-4">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : "flex items-center gap-2"
              }
              to="bookingList"
            >
              <img width={20} src={cartLogo} alt="" />
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
              <img width={20} src={reviewLogo} alt="" />
              Review
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Book;
