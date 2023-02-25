import React from "react";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  //   const navigate = useNavigate();

  //   const routeChange = () => {
  //     const allEmployeesPath = "/employee";
  //     navigate(allEmployeesPath);
  //   };

  return <h3 className={styles.Header}>Employees' List</h3>;
};

export default Header;
