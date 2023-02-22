import React from "react";
import { useParams } from "react-router-dom";
import styles from "./EmployeePage.module.scss";

interface Employee {
  id: number;
  firstName: String;
  middleName: String;
  lastName: String;
  email: String;
  phone: String;
  address: String;
  contract: String;
  startDate: String;
  finishDate: String;
  ongoing: String;
  basis: String;
  hours: String;
}

// const { id } = useParams();
// const { data: employee, error, isPending } = useFetch();

// const handleDelete = (e) => {
//   e.preventdefault();
//   fetch("http://localhost:8080/employee/" + employee.id),
//     {
//       method: "DELETE",
//     };

// fetch("http://localhost:8080/employee", {
//   method: "POST",
//   headers: { "Content-type": "application/json" },
//   body: JSON.stringify(newEmployee),
// }).then(() => {
//   console.log("new employee added");
//   setIsPending(false);
// });
// };

const EmployeePage = (
  { employee }: { employee: Employee },
  { id }: { id: String }
) => {
  return (
    <div className={styles.EmployeePage}>
      <p>{employee.firstName}</p>
      <p>{employee.middleName}</p>
      <p>{employee.lastName}</p>
      <p>{employee.email}</p>
      <p>{employee.phone}</p>
      <p>{employee.address}</p>
      <p>{employee.contract}</p>
      <p>{employee.startDate}</p>
      <p>{employee.finishDate}</p>
      <p>{employee.ongoing}</p>
      <p>{employee.basis}</p>
      <p>{employee.hours}</p>
      {/* <button onClick={handleDelete}>Delete an Employee</button> */}
    </div>
  );
};

export default EmployeePage;
