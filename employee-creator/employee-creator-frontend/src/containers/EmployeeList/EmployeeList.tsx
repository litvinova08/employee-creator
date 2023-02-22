import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { findAll } from "../../services/api";
import EmployeePage from "../EmployeePage/EmployeePage";

const EmployeeList = ({ employees }) => {
  return (
    <div>
      {employees.map((employee: any) => {
        return <EmployeePage key={employee.id} employee={employee} />;
      })}
    </div>
  );
};

export default EmployeeList;
