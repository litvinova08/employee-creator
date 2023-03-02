import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { IEmployee } from "../../interfaces/IEmployee";
import { fetchById } from "../../services/getOne";
import styles from "./Employee.module.scss";
import { deleteById } from "../../services/getOne";
import axios from "axios";

const Employee = (
  { employee }: { employee: IEmployee },
  { id }: { id: string }
) => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`/employee/${employee.id}`);
  };

  // const [isDeleting, setIsDeleting] = useState(false);
  // const [deleteError, setDeleteError] = useState<null>(null);

  // const handleDelete = async () => {
  //   try {
  //     deleteById(id);
  //     // await axios.delete(`/employee/${id}`);
  //     // window.location.reload(); // reload the window to see the updates
  //   } catch (error) {
  //     console.log(error);
  //     alert(`Something went wrong with deleting an employee: ${error}`);
  //   }
  // };

  const handleDelete = () => {
    return fetch(`http://localhost:8080/employee/${employee.id}`, {
      method: "DELETE",
    }).catch((error) => {
      console.error("Error:", error);
      throw error;
    });
  };

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
        <button className={styles.Employee__button} onClick={routeChange}>
          Edit
        </button>
        <p className={styles.Employee__button}>|</p>
        <button className={styles.Employee__button} onClick={handleDelete}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Employee;
