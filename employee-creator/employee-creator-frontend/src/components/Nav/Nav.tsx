import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <NavLink to="/employee"> All Employees</NavLink>
      <NavLink to="/add-employee">Add Employee</NavLink>
    </nav>
  );
};

export default Nav;
