import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Employee from "../../components/Employee/Employee";
import styles from "./EmployeeList.module.scss";
import fetchAllEmployees from "../../services/axios-configure";
import { useQuery } from "react-query";

const EmployeeList = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/add-employee");
  };

  // allEmployees - query key
  const { isLoading, data } = useQuery("allEmployees", fetchAllEmployees);

  if (isLoading) return <h2>"Loading..."</h2>;

  return (
    <div>
      <div className={styles.Instructions}>
        <p>Please click on "Edit" to find more details of each employee.</p>
        <button onClick={routeChange}>Add Employee</button>
      </div>
      {data.map((employee: any) => {
        return <Employee key={employee.id} employee={employee} />;
      })}
    </div>
  );
};

export default EmployeeList;
