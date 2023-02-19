export async function findAll() {
  const res = await fetch("http://localhost:8080/api/employee");
  return res.json();
}
