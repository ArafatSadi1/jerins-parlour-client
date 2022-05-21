import React from 'react';
import { NavLink } from "react-router-dom";


const NavLink = ({children}) => {
    const activeClassName = "bg-secondary text-white";
    return <NavLink className={({ isActive }) =>
    isActive ? activeClassName : undefined
  } to='/book/payment'>{children}</NavLink>;
};

export default NavLink;