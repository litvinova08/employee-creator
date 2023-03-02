import React from "react";
import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import styles from "./CreateEmployee.module.scss";
import DatePicker from "react-date-picker";

const CreateEmployee = () => {
  const [isPending, setIsPending] = useState(false);

  const { register, handleSubmit, control } = useForm();
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <h2 className={styles.Header}>Add an Employee</h2>

      <form
        onSubmit={handleSubmit((data) => {
          fetch("http://localhost:8080/employee", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
          }).then(() => {
            console.log("new employee added");
            setIsPending(false);
          });
        })}
      >
        <h3>Personal Information</h3>
        <label>First Name</label>
        <input {...register("firstName")} />
        <label>Middle Name (if applicable)</label>
        <input {...register("middleName")} />
        <label>Last Name</label>
        <input {...register("lastName")} />

        <h3>Contact details</h3>
        <label>Email address</label>
        <input {...register("email")} />
        <label>Mobile Number</label>
        <p>Must be an Australian number</p>
        <input {...register("phone")} placeholder="+61" />
        <label>Residential address</label>
        <p>Start typing to search</p>
        <input
          {...register("address")}
          placeholder="123 Example Street, Sydney, NSW, 2000"
        />
        <h3>Contact details</h3>
        <label>What is your contract type?</label>
        <select {...register("contract")}>
          <option value="permanent">Permanent</option>
          <option value="contract">Contract</option>
        </select>
        <label>Start date</label>
        <Controller
          control={control}
          name="startDate"
          render={() => <DatePicker onChange={onChange} value={value} />}
        />

        <label>Finish date</label>
        <Controller
          control={control}
          name="finishDate"
          render={() => <DatePicker onChange={onChange} value={value} />}
        />

        {/* check box for "ongoing" */}
        {/* <Controller
          name="ongoing"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Checkbox {...field} />}
        /> */}

        <label>On going?</label>
        <input {...register("ongoing")} />

        <label>What is your contract type?</label>
        <select {...register("basis")}>
          <option value="fullTime">Full-time</option>
          <option value="partTime">Part-time</option>
        </select>

        <label>Hours per week</label>
        <input {...register("hours")} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default CreateEmployee;
