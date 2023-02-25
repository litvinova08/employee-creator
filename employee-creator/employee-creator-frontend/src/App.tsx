import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./App.module.scss";
import "./App.css";
import HomePage from "./containers/Home Page/HomePage";
import EmployeePage from "./containers/EmployeePage/EmployeePage";
import CreateEmployee from "./containers/CreateEmployee/CreateEmployee";
import EmployeeList from "./containers/EmployeeList/EmployeeList";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  // const [employees, setEmployees] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:8080/employee").then((res) => {
  //     const emps = res.data;
  //     setEmployees(emps);
  //     console.log(emps);
  //   });
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.App}>
        <Header></Header>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/employee" element={<EmployeeList />} />
            <Route path="/add-employee" element={<CreateEmployee />}></Route>
            <Route path="/employee/:id" element={<EmployeePage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
