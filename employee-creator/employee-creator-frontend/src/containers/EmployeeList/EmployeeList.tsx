import React from "react";
import { useState, useEffect } from "react";
import { findAll } from "../../services/api";
import EmployeePage from "../EmployeePage/EmployeePage";

const EmployeeList = () => {
  const [emp, setEmp] = useState([]);

  useEffect(() => {
    const wrapper = async () => {
      const allProducts = await findAll();
      console.log("all products" + allProducts);
      setEmp(allProducts);
    };
    wrapper();
    // console.log("emp" + emp);
  }, []);

  return (
    <div>
      {emp.map((employer) => {
        console.log(employer.firstName);
      })}{" "}
    </div>
  );
};

export default EmployeeList;
