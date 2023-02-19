import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HomePage from "./containers/Home Page/HomePage";
import EmployeePage from "./containers/EmployeePage/EmployeePage";
import CreateEmployee from "./containers/CreateEmployee/CreateEmployee";
import EmployeeList from "./containers/EmployeeList/EmployeeList";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAllUsers } from "./services/api";

function App() {
  // const [count, setCount] = useState(0);

  // // const [emp, setEmp] = useState([]);
  // //usestate to get the list of all products in store
  // const [products, setProducts] = useState([]);

  // //use Effect because product cards should be rendered when the page is opened the first time
  // useEffect(() => {
  //   const wrapper = async () => {
  //     const allEmployees = await getAllUsers();
  //     setProducts(allEmployees);
  //     console.log("App use effect");
  //   };
  //   wrapper();
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employee" element={<EmployeeList />} />
          <Route path="/add-employee" element={<CreateEmployee />}></Route>
          <Route path="/employees/:id" element={<EmployeePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
