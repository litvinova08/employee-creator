import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./App.module.scss";
import "./App.css";
import HomePage from "./containers/Home Page/HomePage";
import EmployeePage from "./containers/EmployeePage/EmployeePage";
import CreateEmployee from "./containers/CreateEmployee/CreateEmployee";
import EmployeeList from "./containers/EmployeeList/EmployeeList";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/employee").then((res) => {
      const emps = res.data;
      setEmployees(emps);
      console.log(emps);
    });
  }, []);

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route
            path="/"
            element={employees && <EmployeeList employees={employees} />}
          />
          <Route path="/add-employee" element={<CreateEmployee />}></Route>
          {/* <Route path="/employees/:id" element={<EmployeePage employees={employees} id={id} />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
