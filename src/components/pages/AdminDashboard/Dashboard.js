import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import cartLogo from "../../../Image_Icon/Icon/Group.png";
import addLogo from "../../../Image_Icon/Icon/Group 1360.png";
import manageLogo from "../../../Image_Icon/Icon/Group 1368.png";

const Dashboard = () => {
  const activeClassName = "flex items-center gap-2 border-r-2 border-secondary";

  return (
    <div className="drawer drawer-mobile">
      <input id="booking-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-slate-50">
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
              to="orderList"
            >
              <img width={20} src={cartLogo} alt="" />
              Order List
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : "flex items-center gap-2"
              }
              to="addService"
            >
              <img width={20} src={cartLogo} alt="" />
              Add Service
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : "flex items-center gap-2"
              }
              to="manageService"
            >
              <img width={20} src={addLogo} alt="" />
              Manage Service
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : "flex items-center gap-2"
              }
              to="makeAdmin"
            >
              <img width={20} src={manageLogo} alt="" />
              Make Admin
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
