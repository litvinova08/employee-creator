import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HomePage from "./containers/Home Page/HomePage";
import EmployeePage from "./containers/EmployeePage/EmployeePage";
import CreateEmployee from "./containers/CreateEmployee/CreateEmployee";
import EmployeeList from "./containers/EmployeeList/EmployeeList";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/add-employee" element={<CreateEmployee />}></Route>
          <Route path="/employees/:id" element={<EmployeePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
