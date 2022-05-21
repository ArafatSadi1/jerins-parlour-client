import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import cartLogo from "../../../Image_Icon/Icon/Group.png";
import addLogo from "../../../Image_Icon/Icon/Group 1360.png";
import manageLogo from "../../../Image_Icon/Icon/Group 1368.png";

const Dashboard = () => {
    const activeClassName = "bg-secondary text-white";

    return (
        <div class="drawer drawer-mobile">
        <input id="booking-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content bg-slate-50">
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
              }  to='orderList'><img width={20} src={cartLogo} alt="" />Order List</NavLink>
            </li>
            <li>
            <NavLink className={({ isActive }) =>
                isActive ? activeClassName : undefined
              } to='addService'><img width={20} src={cartLogo} alt="" />Add Service</NavLink>
            </li>
            <li>
            <NavLink className={({ isActive }) =>
                isActive ? activeClassName : undefined
              } to='manageService'><img width={20} src={addLogo} alt="" />Manage Service</NavLink>
            </li>
            <li>
            <NavLink className={({ isActive }) =>
                isActive ? activeClassName : undefined
              } to='makeAdmin'><img width={20} src={manageLogo} alt="" />Make Admin</NavLink>
            </li>
          </ul>
        </div>
      </div>
      );
};

export default Dashboard;