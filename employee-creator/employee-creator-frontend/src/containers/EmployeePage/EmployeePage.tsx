import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IEmployee } from "../../interfaces/IEmployee";
import styles from "./EmployeePage.module.scss";
import cors from "cors";
import app from "../../services/axios-configure";

const EmployeePage = () => {
  const { id } = useParams();

  const [isLoading, setLoading] = useState(true);
  const [employeeData, setEmployeeData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    contract: "",
    startDate: "",
    finishDate: "",
    ongoing: "",
    basis: "",
    hours: "",
    id: "",
  });

  useEffect(() => {
    app.get(`${id}`).then((res) => {
      console.log(res.data);
    });
  }, []);

  return employeeData ? (
    <div className={styles.EmployeePage}>
      <p>{employeeData.firstName}</p>
      <p>{employeeData.middleName}</p>
      <p>{employeeData.lastName}</p>
      <p>{employeeData.email}</p>
      <p>{employeeData.phone}</p>
      <p>{employeeData.address}</p>
      <p>{employeeData.contract}</p>
      <p>{employeeData.startDate}</p>
      <p>{employeeData.finishDate}</p>
      <p>{employeeData.ongoing}</p>
      <p>{employeeData.basis}</p>
      <p>{employeeData.hours}</p>
      {/* /* <button onClick={handleDelete}>Delete an Employee</button> */}
    </div>
  ) : (
    <div>Employy not found</div>
  );
};

export default EmployeePage;
