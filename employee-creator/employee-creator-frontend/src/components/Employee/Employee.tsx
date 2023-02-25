import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { IEmployee } from "../../interfaces/IEmployee";
import { fetchById } from "../../services/getOne";
import styles from "./Employee.module.scss";

const Employee = (
  { employee }: { employee: IEmployee },
  { id }: { id: String }
) => {
  return (
    <div className={styles.Employee}>
      {/* <NavLink to={`/employee/${employee.id}`}>
        <h3>{employee.firstName}</h3>{" "}
      </NavLink> */}

      <div className={styles.Employee__details}>
        <NavLink to={`/employee/${employee.id}`}>
          <p className={styles.Employee__fullName}>
            {employee.firstName} {employee.lastName}
          </p>
        </NavLink>

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
