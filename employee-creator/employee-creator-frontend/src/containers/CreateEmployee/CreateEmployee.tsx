import React from "react";
import { useState } from "react";

const CreateEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [contract, setContract] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [ongoing, setOngoing] = useState("");
  const [basis, setBasis] = useState("full-time");
  const [hours, setHours] = useState("");

  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      firstName,
      middleName,
      lastName,
      email,
      phone,
      address,
      contract,
      startDate,
      finishDate,
      ongoing,
      basis,
      hours,
    };

    setIsPending(true);

    fetch("http://localhost:8080/api/employee", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newEmployee),
    }).then(() => {
      console.log("new employee added");
      setIsPending(false);
    });
  };

  return (
    <div>
      <h2>Add an Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          required
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>

        <label>Middle Name</label>
        <input
          type="text"
          // required
          value={middleName}
          onChange={(e) => {
            setMiddleName(e.target.value);
          }}
        ></input>

        <label>Last Name</label>
        <input
          type="text"
          required
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>

        <label>Email</label>
        <input
          type="text"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>

        <label>Phone Number</label>
        <input
          type="text"
          required
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        ></input>

        <label>Address</label>
        <input
          type="text"
          required
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        ></input>

        <label>Contract</label>
        <input
          type="text"
          required
          value={contract}
          onChange={(e) => {
            setContract(e.target.value);
          }}
        ></input>

        <label>Start Date</label>
        <input
          type="text"
          required
          value={startDate}
          onChange={(e) => {
            setStartDate(e.target.value);
          }}
        ></input>

        <label>Finish Date</label>
        <input
          type="text"
          required
          value={finishDate}
          onChange={(e) => {
            setFinishDate(e.target.value);
          }}
        ></input>

        <label>Ongoing</label>
        <input
          type="text"
          required
          value={ongoing}
          onChange={(e) => {
            setOngoing(e.target.value);
          }}
        ></input>

        <label>Basis</label>
        <select value={basis} onChange={(e) => setBasis(e.target.value)}>
          <option value="full-time">Full-Time</option>
          <option value="part-time">Part-Time</option>
        </select>

        <label>Hours</label>
        <input
          type="text"
          required
          value={hours}
          onChange={(e) => {
            setHours(e.target.value);
          }}
        ></input>

        {!isPending && <button>Add Employee</button>}
        {isPending && <button disabled>Adding new Employee...</button>}
      </form>
    </div>
  );
};

export default CreateEmployee;
