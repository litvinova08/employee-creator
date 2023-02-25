import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IEmployee } from "../../interfaces/IEmployee";
import Employee from "../../components/Employee/Employee";
import styles from "./EmployeeList.module.scss";
import fetchAllEmployees from "../../services/axios-configure";
import { useQuery } from "react-query";

const EmployeeList = () => {
  // allEmployees - query key
  const { isLoading, data } = useQuery("allEmployees", fetchAllEmployees);

  if (isLoading) return <h2>"Loading..."</h2>;

  // const { isLoading, isError, data } = fetchAllEmployees();

  // const navigate = useNavigate();
  // const routeChange = () => {
  //   const createEmployeePath = "/add-employee";
  //   navigate(createEmployeePath);
  // };

  // if (isError) return "An error has occurred: " + isError;

  return (
    <div>
      <div className={styles.Instructions}>
        <p>Please click on "Edit" to find more details of each employee.</p>
        {/* <button onClick={routeChange}>Add Employee</button> */}
        <button>Add Employee</button>
      </div>
      {data.map((employee: any) => {
        return <Employee key={employee.id} employee={employee} />;
      })}
    </div>
  );
};

export default EmployeeList;
