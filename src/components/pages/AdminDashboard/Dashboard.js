import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";

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
              <BsCartCheck className="w-[20px] h-[20px] text-zinc-500" />
              Customers Order List
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : "flex items-center gap-2"
              }
              to="addService"
            >
              <AiOutlinePlusSquare className="w-[20px] h-[20px] text-zinc-500" />
              Add New Service
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : "flex items-center gap-2"
              }
              to="manageService"
            >
              <MdMiscellaneousServices className="w-[20px] h-[20px] text-zinc-500" />
              Manage Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : "flex items-center gap-2"
              }
              to="makeAdmin"
            >
              <RiAdminLine className="w-[20px] h-[20px] text-zinc-500" />
              Make New Admin
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
