import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { IEmployee } from "../../interfaces/IEmployee";
import { fetchById } from "../../services/getOne";
import styles from "./Employee.module.scss";
import { deleteById } from "../../services/getOne";

const Employee = (
  { employee }: { employee: IEmployee },
  { id }: { id: String }
) => {
  // const delete = () => {
  //   deleteById(id)
  // }

  return (
    <div className={styles.Employee}>
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
