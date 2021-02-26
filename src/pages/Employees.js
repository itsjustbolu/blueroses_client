import React, { Component, useState, useEffect } from "react";
import Axios from "axios";

export function Employees() {
  const [employeeFirstName, setEmployeeFirstName] = useState("");
  const [employeeLastName, setEmployeeLastName] = useState("");
  const [employeePhoneNumber, setEmployeePhoneNumber] = useState("");
  const [employeeEmailAddress, setEmployeeEmailAddress] = useState("");
  const [employeeTitle, setEmployeeTitle] = useState("");
  const [employeeStartDate, setEmployeeStartDate] = useState("");

  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/employees/get").then((response) => {
      setEmployeeList(response.data);
    });
  }, []);

  const submitEmployee = () => {
    Axios.post("http://localhost:3001/api/employees/post", {
      employeeFirstName: employeeFirstName,
      employeeLastName: employeeLastName,
      employeePhoneNumber: employeePhoneNumber,
      employeeEmailAddress: employeeEmailAddress,
      employeeTitle: employeeTitle,
      employeeStartDate: employeeStartDate,
    }).then(() => {
      alert("Successfully added employee");
    });
  };

  return (
    <div className="container">
      <h1>EMPLOYEES</h1>

      <div>
        <div>Add a New Employee</div>
        <p></p>
        <form>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              name="employeeFirstName"
              onChange={(e) => setEmployeeFirstName(e.target.value)}
            />
          </div>

          <div className="employeeLastName">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="employeeLastName"
              onChange={(e) => setEmployeeLastName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="number"
              className="form-control"
              name="employeePhoneNumber"
              onChange={(e) => setEmployeePhoneNumber(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="text"
              className="form-control"
              name="employeeEmailAddress"
              onChange={(e) => setEmployeeEmailAddress(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              name="employeeTitle"
              onChange={(e) => setEmployeeTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Start Date</label>
            <input
              type="date"
              className="form-control"
              name="employeeStartDate"
              onChange={(e) => setEmployeeStartDate(e.target.value)}
            />
          </div>
          <br />
          <button
            onClick={submitEmployee}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>

        <br />
        <br />
        <h2>List of Employees</h2>
        {employeeList.map((val) => {
          return (
            <div>
              <table className="table table-striped table-hover">
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Title</th>
                  <th>Start Date</th>
                </tr>
                <tr>
                  <td>{val.employeeFirstName}</td>
                  <td>{val.employeeLastName}</td>
                  <td>{val.employeePhoneNumber}</td>
                  <td>{val.employeeEmailAddress}</td>
                  <td>{val.employeeTitle}</td>
                  <td>{val.employeeStartDate}</td>
                  <td>
                    <input type="button" value="Update" />
                    <input type="button" value="Delete" />
                  </td>
                </tr>
              </table>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Employees;
