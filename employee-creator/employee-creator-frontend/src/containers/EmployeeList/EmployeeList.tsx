import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IEmployee } from "../../interfaces/IEmployee";
import Employee from "../../components/Employee/Employee";
import styles from "./EmployeeList.module.scss";

const EmployeeList = ({ employees }: { employees: IEmployee[] }) => {
  const navigate = useNavigate();

  const routeChange = () => {
    const createEmployeePath = "/add-employee";
    navigate(createEmployeePath);
  };

  return (
    <div>
      <div className={styles.Instructions}>
        <p>Please click on "Edit" to find more details of each employee.</p>
        <button onClick={routeChange}>Add Employee</button>
      </div>
      {employees.map((employee: any) => {
        return <Employee key={employee.id} employee={employee} />;
      })}
    </div>
  );
};

export default EmployeeList;
