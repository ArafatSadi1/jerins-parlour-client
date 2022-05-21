import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import cartLogo from "../../../Image_Icon/Icon/Group.png";
import reviewLogo from "../../../Image_Icon/Icon/Group 1368.png";

const Book = () => {
    const activeClassName = "bg-secondary text-white";

  return (
    <div class="drawer drawer-mobile">
      <input id="booking-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content bg-slate-100">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="booking-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
          <NavLink className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }  to='bookingList'><img width={20} src={cartLogo} alt="" />Booking List</NavLink>
          </li>
          <li>
          <NavLink className={({ isActive }) =>
              isActive ? activeClassName : undefined
            } to='addReview'><img width={20} src={reviewLogo} alt="" />Review</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Book;
