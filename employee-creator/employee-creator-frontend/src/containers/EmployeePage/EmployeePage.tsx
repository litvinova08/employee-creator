import { NavLink, useParams } from "react-router-dom";
import styles from "./EmployeePage.module.scss";
import { fetchById } from "../../services/getOne";

const EmployeePage = () => {
  const { id } = useParams();

  // if (id) {
  const { isLoading, data, isError, error } = fetchById(id);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return data ? (
    <div className={styles.EmployeePage}>
      <NavLink to={`/employee/${data.id}`}>
        <p>
          {data.firstName} {data.lastName}
        </p>
      </NavLink>

      <p>{data.firstName}</p>
      <p>{data.middleName}</p>
      <p>{data.lastName}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
      <p>{data.address}</p>
      <p>{data.contract}</p>
      <p>{data.startDate}</p>
      <p>{data.finishDate}</p>
      <p>{data.ongoing}</p>
      <p>{data.basis}</p>
      <p>{data.hours}</p>
      {/* /* <button onClick={handleDelete}>Delete an Employee</button> */}
    </div>
  ) : (
    <div>Employee not found</div>
  );
};

export default EmployeePage;
