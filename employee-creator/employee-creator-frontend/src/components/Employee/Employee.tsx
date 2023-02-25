import React from "react";
import { useParams } from "react-router-dom";
import { IEmployee } from "../../interfaces/IEmployee";
import styles from "./Employee.module.scss";

const Employee = (
  { employee }: { employee: IEmployee },
  { id }: { id: String }
) => {
  return (
    <div className={styles.Employee}>
      <div className={styles.Employee__details}>
        <p className={styles.Employee__fullName}>
          {employee.firstName} {employee.lastName}
        </p>
        <p>Contract - {employee.contract}</p>
        <p>{employee.email}</p>
      </div>
      <div>
        <button className={styles.Employee__button}>Edit</button>
        <p className={styles.Employee__button}>|</p>
        <button className={styles.Employee__button}>Remove</button>
      </div>
    </div>
  );
};

export default Employee;
