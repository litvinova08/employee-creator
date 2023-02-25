import { useQuery } from "react-query";
import axios from "axios";

export default function employeeData() {
  return useQuery("allEmployeeData", () =>
    axios.get("/employee").then((res) => res.data)
  );
}

// no

// const baseUrl = "http://localhost:8080/employee/";

// export function getAllEmployees() {
//   return useQuery("getAllEmployees", () =>
//     axios.get("/employees").then((res) => res.data)
//   );
// }

// // export function deleteEmployeeDataById() {
// //   return useQuery("employeeById", (id) => axios.delete(`/employees/${id}`));
// // }

// const app = axios.create({
//   baseURL: baseUrl,
//   headers: {
//     "Access-Control-Allow-Origin": "true",
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Credentials": "false",
//   },
// });

// // export default app;
