import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/employees"> All Employees</NavLink>
      <NavLink to="/add-employee">Add Employee</NavLink>
    </nav>
  );
};

export default Nav;
