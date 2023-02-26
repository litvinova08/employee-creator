import { useQuery } from "react-query";
import axios from "axios";

const fetchEmployee = (id: string) => {
  return axios
    .get(`http://localhost:8080/employee/${id}`)
    .then((res) => res.data);
};

export const fetchById = (id: string) => {
  return useQuery(["getById", id], () => fetchEmployee(id));
};

export const deleteById = (id: string) => {
  return useQuery(["deleteById", id], () => {
    axios
      .delete(`http://localhost:8080/employee/${id}`)
      .then((res) => console.log(res));
  });
};
