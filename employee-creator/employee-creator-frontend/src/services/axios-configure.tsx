import { useQuery } from "react-query";
import axios from "axios";

export default function fetchAllEmployees() {
  return axios.get("http://localhost:8080/employee").then((res) => res.data);
  // return axios.get("/api/employee").then((res) => res.data);
}

// export function fetchById(id: string) {
//   return axios
//     .get(`http://localhost:8080/employee${id}`)
//     .then((res) => res.data);
// }

// export const fwtchEmployee = (onSuccess, onError) => {
//   return useQuery("fetchEmployees", fetchAllEmployees, {
//     onSuccess,
//     onError,
//   });
// };

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
